'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const navItems = [
    { label: 'Dashboard', path: '/admin' },
    { label: 'Products', path: '/admin/ProductDetails' },
    { label: 'AddProducts', path: '/admin/AddProducts' },
  ];

  return (
    <aside className="w-64 bg-white h-screen flex flex-col pt-8 border-r border-slate-200 shrink-0 shadow-sm">

      <div className="text-2xl font-bold px-7 mb-10 text-slate-800 tracking-tight">
        ZentoryAdmin
      </div>

      <nav className="flex-1">
        <ul className="flex flex-col space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`block px-7 py-3.5 text-lg font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-[#ff9900] text-neutral-950 font-semibold shadow-inner'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
