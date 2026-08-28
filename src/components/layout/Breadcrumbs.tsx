import { Link } from './LocalizedLink';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="w-full flex px-4 md:px-8 py-3 bg-[#ffffff] border-b border-gray-100 overflow-x-auto">
      <div className="max-w-[1920px] mx-auto w-full">
        <ol className="flex items-center space-x-2 text-sm text-gray-500 min-w-max">
          <li>
            <Link to="/" className="hover:text-gray-900 transition-colors font-medium">Home</Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.name} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-gray-400" />
                {isLast || !item.href ? (
                  <span className="text-gray-900 font-semibold" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link to={item.href} className="hover:text-gray-900 transition-colors font-medium">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
        
        {/* JSON-LD Schema for Breadcrumbs */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `${import.meta.env.VITE_SITE_URL || ''}/`
              },
              ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.name,
                ...(item.href ? { item: `${import.meta.env.VITE_SITE_URL || ''}${item.href}` } : {})
              }))
            ]
          })}
        </script>
      </div>
    </nav>
  );
}
