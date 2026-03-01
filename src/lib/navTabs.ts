import { Home, Radar, Archive, Users, LayoutGrid } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type NavTab = {
  label: string;
  href: string;
  icon: LucideIcon;
  activeMatch: string;
};

export const NAV_TABS: NavTab[] = [
  { label: 'Home',      href: '/home',      icon: Home,        activeMatch: '/home' },
  { label: 'Intel',     href: '/intel',     icon: Radar,       activeMatch: '/intel' },
  { label: 'Assets',    href: '/assets',    icon: Archive,     activeMatch: '/assets' },
  { label: 'Community', href: '/community', icon: Users,       activeMatch: '/community' },
  { label: 'Hub',       href: '/hub',       icon: LayoutGrid,  activeMatch: '/hub' },
];
