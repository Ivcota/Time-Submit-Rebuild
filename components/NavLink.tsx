import Link from "next/link";
import React, { FC } from "react";

interface Props {
  href: string;
  switchIsOpen: () => void;
}

const NavLink: FC<Props> = ({ href, children, switchIsOpen }) => {
  return (
    <Link href={href}>
      <a
        onClick={switchIsOpen}
        className="text-2xl font-bold text-black underline dark:text-white decoration-green-900 dark:decoration-sea-300"
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
