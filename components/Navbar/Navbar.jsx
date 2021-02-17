import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const dataNavbar = ["Home", "About", "Projects"];

export function Navbar() {
  const router = useRouter();
  const current = router.pathname.split("/").slice(1).join("");

  return (
    <div
      style={{
        background: "#f1faee",
      }}
    >
      <header className="flex justify-center px-7 py-4 container  mx-auto">
        {dataNavbar.map((i) => (
          <Link key={i} href={i}>
            <h1
              key={i}
              className={`${
                i === current ? `border-b-8` : `border-t-8`
              }  odd p-1 px-2 font-sans text-red-primary text-xl md:text-2xl cursor-pointer rounded-md border-dark-blue-primary border-opacity-25 border-2`}
            >
              {i}
            </h1>
          </Link>
        ))}
      </header>
    </div>
  );
}
