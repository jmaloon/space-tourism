import Link from "next/link";

type NavItemProps = { index: number; label: string };

export default function NavItem({ index, label }: NavItemProps) {
  const beforeMobileClasses =
    "before:absolute before:inset-y-2 before:right-0 before:block before:w-1 before:bg-white";
  const beforeTabletDesktopClasses =
    "sm:before:inset-x-0 sm:before:bottom-0 sm:before:top-auto sm:before:w-auto sm:before:h-1";

  return (
    <li role="none">
      <Link
        className={`block relative py-2 sm:h-24 sm:flex sm:items-center ${beforeMobileClasses} ${beforeTabletDesktopClasses} before:opacity-0 hover:before:opacity-50`}
        role="menuitem"
        href="#"
      >
        <span className="nav-text font-bold tabular-nums mr-3">
          {String(index).padStart(2, "0")}
        </span>
        <span className="nav-text uppercase">{label}</span>
      </Link>
    </li>
  );
}
