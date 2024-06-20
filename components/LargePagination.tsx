import Link from "next/link";

export default function LargePagination({
  label,
  isActive = false,
  href,
}: {
  label: number;
  isActive: boolean;
  href: string;
}) {
  return (
    <li role="none">
      <Link
        className={`block grid place-items-center size-14 border border-white/25 hover:border-white rounded-full lg:size-20 ${
          isActive ? "bg-white text-navy border-white" : ""
        }`}
        role="tab"
        href={href}
      >
        <span className="heading-sm">{label}</span>
      </Link>
    </li>
  );
}
