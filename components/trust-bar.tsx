import { Star, Shield, Award, BadgeCheck, Medal, CheckCircle } from 'lucide-react';

const items = [
  { icon: Star, text: '★★★★★ 4.9 / 1,612 Google reviews' },
  { icon: Award, text: 'GAF Master Elite (top 3% nationally)' },
  { icon: Shield, text: 'Owens Corning Platinum Preferred' },
  { icon: BadgeCheck, text: 'CertainTeed SELECT ShingleMaster' },
  { icon: CheckCircle, text: 'BBB A+ Accredited Since 2008' },
  { icon: Medal, text: 'Veteran-Owned · OK CIB #80003217' },
];

export function TrustBar() {
  return (
    <section className="bg-slate-deep py-10" aria-label="Certifications and trust indicators">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-3">
              <item.icon className="h-5 w-5 flex-shrink-0 text-copper" aria-hidden="true" />
              <span className="text-sm font-medium text-white">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
