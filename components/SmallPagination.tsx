import Link from "next/link";

export default function SmallPagination({
  isActive = false,
  href,
}: {
  isActive: boolean;
  href: string;
}) {
  return (
    <li role="none">
      <Link
        className={`block p-2 before:block before:size-2.5 before:rounded before:bg-white ${
          isActive ? "" : "before:opacity-20 before:hover:opacity-50"
        }`}
        role="tab"
        href={href}
      ></Link>
    </li>
  );
}
