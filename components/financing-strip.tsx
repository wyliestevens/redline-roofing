import Link from 'next/link';
import Image from 'next/image';

export function FinancingStrip() {
  return (
    <section className="relative bg-copper py-12 text-white overflow-hidden" aria-labelledby="financing-strip-heading">
      <Image
        src="/img/nice-home-4.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center md:flex-row md:text-left">
        <div className="flex-1">
          <h2 id="financing-strip-heading" className="text-xl text-white md:text-2xl">
            $0 down. 0% APR for 12 months. Pre-qualify with a soft credit pull through Wisetack.
          </h2>
        </div>
        <Link
          href="/financing"
          className="inline-flex min-h-[48px] items-center rounded-lg bg-slate-deep px-6 py-3.5 font-semibold text-white transition-colors hover:bg-slate-deep/90"
        >
          See Financing Options →
        </Link>
      </div>
    </section>
  );
}
