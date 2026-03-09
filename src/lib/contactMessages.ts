import { getDb } from './db/index';

export type MessageStatus = 'open' | 'triaged' | 'closed';

export interface ContactMessage {
  id: string;
  createdAt: string;
  sourcePage: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceInterest: string;
  messageBody: string;
  status: MessageStatus;
  assignedToUserId: string | null;
  orgId: string | null;
  tags: string[];
}

// ── DB row mapping ────────────────────────────────────────────────────────────

type DbRow = {
  id: string;
  created_at: Date;
  source_page: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  service_interest: string;
  message_body: string;
  status: MessageStatus;
  assigned_to_user_id: string | null;
  org_id: string | null;
  tags: string[];
};

function rowToMessage(row: DbRow): ContactMessage {
  return {
    id: row.id,
    createdAt: row.created_at instanceof Date ? row.created_at.toISOString() : String(row.created_at),
    sourcePage: row.source_page,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    phone: row.phone,
    serviceInterest: row.service_interest,
    messageBody: row.message_body,
    status: row.status,
    assignedToUserId: row.assigned_to_user_id,
    orgId: row.org_id,
    tags: row.tags ?? [],
  };
}

// ── Public API ────────────────────────────────────────────────────────────────

export interface ListFilters {
  q?: string;
  status?: MessageStatus;
  assignedToUserId?: string;
}

export async function createContactMessage(
  input: Omit<ContactMessage, 'id' | 'createdAt' | 'status' | 'assignedToUserId' | 'orgId' | 'tags'>,
): Promise<ContactMessage> {
  const sql = getDb();
  const id = crypto.randomUUID();

  const rows = await sql<DbRow[]>`
    INSERT INTO contact_messages (
      id, source_page, first_name, last_name, email, phone, service_interest, message_body
    ) VALUES (
      ${id},
      ${input.sourcePage},
      ${input.firstName},
      ${input.lastName},
      ${input.email},
      ${input.phone},
      ${input.serviceInterest},
      ${input.messageBody}
    )
    RETURNING *
  `;

  return rowToMessage(rows[0]);
}

export async function listContactMessages(filters: ListFilters = {}): Promise<ContactMessage[]> {
  const sql = getDb();

  // SQL-level filters for indexed columns; JS-level filter for full-text search
  const rows = await sql<DbRow[]>`
    SELECT *
    FROM contact_messages
    WHERE true
      ${filters.status ? sql`AND status = ${filters.status}` : sql``}
      ${filters.assignedToUserId ? sql`AND assigned_to_user_id = ${filters.assignedToUserId}` : sql``}
    ORDER BY created_at DESC
  `;

  let messages = rows.map(rowToMessage);

  if (filters.q) {
    const q = filters.q.trim().toLowerCase();
    messages = messages.filter((m) => {
      const haystack = [
        m.firstName,
        m.lastName,
        m.email,
        m.phone,
        m.serviceInterest,
        m.messageBody,
        m.tags.join(' '),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }

  return messages;
}

export async function updateContactMessage(
  id: string,
  updates: Partial<Pick<ContactMessage, 'status' | 'assignedToUserId' | 'orgId' | 'tags'>>,
): Promise<ContactMessage | null> {
  const sql = getDb();

  // Fetch current record so we can merge without clobbering unset fields
  const existing = await sql<DbRow[]>`
    SELECT * FROM contact_messages WHERE id = ${id}
  `;
  if (!existing.length) return null;

  const cur = rowToMessage(existing[0]);

  const newStatus = updates.status ?? cur.status;
  const newAssigned = updates.assignedToUserId !== undefined ? updates.assignedToUserId : cur.assignedToUserId;
  const newOrgId = updates.orgId !== undefined ? updates.orgId : cur.orgId;
  const newTags = updates.tags !== undefined ? updates.tags : cur.tags;

  const rows = await sql<DbRow[]>`
    UPDATE contact_messages
    SET
      status              = ${newStatus},
      assigned_to_user_id = ${newAssigned},
      org_id              = ${newOrgId},
      tags                = ${sql.array(newTags)}
    WHERE id = ${id}
    RETURNING *
  `;

  return rows.length ? rowToMessage(rows[0]) : null;
}

// ── CSV export (stateless — operates on in-memory data) ───────────────────────

export function toCsv(messages: ContactMessage[]): string {
  const escape = (value: string) => `"${value.replaceAll('"', '""')}"`;
  const header = [
    'id',
    'createdAt',
    'sourcePage',
    'firstName',
    'lastName',
    'email',
    'phone',
    'serviceInterest',
    'status',
    'assignedToUserId',
    'orgId',
    'tags',
    'messageBody',
  ];

  const rows = messages.map((m) =>
    [
      m.id,
      m.createdAt,
      m.sourcePage,
      m.firstName,
      m.lastName,
      m.email,
      m.phone,
      m.serviceInterest,
      m.status,
      m.assignedToUserId ?? '',
      m.orgId ?? '',
      m.tags.join('|'),
      m.messageBody,
    ]
      .map((field) => escape(String(field)))
      .join(','),
  );

  return [header.join(','), ...rows].join('\n');
}
