import Link from "next/link";

type NavItemProps = { index: number; label: string };

export default function NavItem({ index, label }: NavItemProps) {
  const beforeClasses =
    "before:absolute before:inset-y-0 before:right-0 before:w-1 before:block before:bg-white";

  return (
    <li role="none">
      <Link
        className={`block w-full relative ${beforeClasses}`}
        role="menuitem"
        href="#"
      >
        <span className="nav-text font-bold mr-3">
          {String(index).padStart(2, "0")}
        </span>
        <span className="nav-text uppercase">{label}</span>
      </Link>
    </li>
  );
}
