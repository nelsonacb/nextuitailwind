import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  className?: string;
}

export const LinkElement: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Link href={props.href}>
      <div
        className={`inline rounded-md px-3 py-2 text-slate-500 transition-colors hover:text-indigo-500 ${props.className}`}
      >
        {children}
      </div>
    </Link>
  );
};

export default LinkElement;
