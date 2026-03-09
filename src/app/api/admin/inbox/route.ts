import { NextResponse } from 'next/server';
import { listContactMessages, toCsv, updateContactMessage } from '@/lib/contactMessages';
import { isDbNotConfigured } from '@/lib/db/errors';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const status = url.searchParams.get('status') ?? undefined;
    const q = url.searchParams.get('q') ?? undefined;
    const format = url.searchParams.get('format');

    const messages = await listContactMessages({
      q,
      status: status === 'open' || status === 'triaged' || status === 'closed' ? status : undefined,
    });

    if (format === 'csv') {
      const csv = toCsv(messages);
      return new NextResponse(csv, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': 'attachment; filename="admin-inbox.csv"',
        },
      });
    }

    return NextResponse.json({ messages });
  } catch (err) {
    if (isDbNotConfigured(err)) {
      console.warn('[admin/inbox] GET — database not configured');
      return NextResponse.json(
        { message: 'Database not configured. Run db:migrate and set DATABASE_URL.' },
        { status: 503 },
      );
    }
    console.error('[admin/inbox] GET error:', err);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = (await request.json().catch(() => ({}))) as {
      id?: string;
      status?: 'open' | 'triaged' | 'closed';
      assignedToUserId?: string | null;
      tags?: string[];
    };

    if (!body.id) {
      return NextResponse.json({ message: 'Missing message id' }, { status: 400 });
    }

    const updated = await updateContactMessage(body.id, {
      status: body.status,
      assignedToUserId: body.assignedToUserId ?? null,
      tags: body.tags,
    });

    if (!updated) {
      return NextResponse.json({ message: 'Message not found' }, { status: 404 });
    }

    return NextResponse.json({ message: updated });
  } catch (err) {
    if (isDbNotConfigured(err)) {
      console.warn('[admin/inbox] PATCH — database not configured');
      return NextResponse.json(
        { message: 'Database not configured. Run db:migrate and set DATABASE_URL.' },
        { status: 503 },
      );
    }
    console.error('[admin/inbox] PATCH error:', err);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
