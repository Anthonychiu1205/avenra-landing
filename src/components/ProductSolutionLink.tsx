import Link from "next/link";

type ProductSolutionLinkProps = {
  href: string;
  title: string;
};

export default function ProductSolutionLink({ href, title }: ProductSolutionLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 font-medium text-[#14827f] underline underline-offset-4 hover:opacity-80 transition"
    >
      <span className="text-base sm:text-lg font-semibold leading-7 text-slate-900">{title}</span>
      <span aria-hidden>→</span>
    </Link>
  );
}
