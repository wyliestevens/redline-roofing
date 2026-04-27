import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-deep/60">
        <li>
          <Link href="/" className="underline hover:text-copper transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            {i === items.length - 1 ? (
              <span aria-current="page" className="text-slate-deep font-medium">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="underline hover:text-copper transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
