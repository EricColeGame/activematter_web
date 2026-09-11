import { LucideIcon } from "lucide-react";

export interface NavigationItem {
  key: string;
  path: `/${string}`;
  icon?: LucideIcon;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "weapons", path: "/weapons", isContentType: true },
  { key: "classes", path: "/classes", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "system", path: "/system", isContentType: true },
  { key: "release", path: "/release", isContentType: true },
] as const satisfies readonly NavigationItem[];

export const CONTENT_TYPES = [
  "guide",
  "weapons",
  "classes",
  "mechanics",
  "system",
  "release",
] as const;
