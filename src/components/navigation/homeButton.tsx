"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome, GoHomeFill } from "react-icons/go";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function HomeButton() {
  const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const isActive = pathname === "/";

  if (!hasMounted) return null;

  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx("icon-button", { active: isActive })}
    >
      {isActive ? (
        <GoHomeFill style={{ width: 20, height: 20 }} />
      ) : (
        <GoHome style={{ width: 20, height: 20 }} />
      )}
    </Link>
  );
}
