"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#hero", label: "首页" },
  { href: "#skills", label: "技能" },
  { href: "#services", label: "服务" },
  { href: "#cases", label: "案例" },
  { href: "#books", label: "图书" },
  { href: "#reviews", label: "评价" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <a
          href="#hero"
          className="text-xl font-extrabold tracking-tight text-primary transition-colors hover:text-primary/80 sm:text-2xl"
        >
          MyBrandSite
        </a>

        {/* 桌面端导航链接 */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* 移动端菜单按钮 */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground md:hidden"
          aria-label={open ? "收起导航菜单" : "展开导航菜单"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* 移动端展开菜单 */}
      {open && (
        <div className="border-t border-border/50 bg-background/90 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-5xl flex-col px-4 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
