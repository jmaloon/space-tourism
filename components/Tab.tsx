import Link from "next/link";

export default function Tab({
  label,
  isActive = false,
  href,
}: {
  label: string;
  isActive?: boolean;
  href: string;
}) {
  const beforeClasses =
    "before:absolute before:inset-x-2 before:bottom-0 before:block before:h-1 before:bg-white";

  return (
    <li role="none">
      <Link
        className={`block relative py-3 px-2 ${beforeClasses}  ${
          isActive
            ? "before:opacity-100"
            : "before:opacity-0 hover:before:opacity-50"
        }`}
        role="tab"
        href={href}
      >
        <span
          className={`nav-text uppercase ${
            isActive ? "text-white" : "text-blue"
          }`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}
