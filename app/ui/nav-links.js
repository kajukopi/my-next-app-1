"use client"

import {usePathname} from "next/navigation"
import Link from "next/link"
export default function Links() {
  const pathname = usePathname()

  return (
    <section className="d-flex justify-content-center align-items-end mb-3">
      <nav>
        <Link className={`me-2 mb-3 btn btn-sm btn-primary ${pathname === "/" ? "active" : ""}`} href="/">
          Home
        </Link>

        <Link className={`ms-2 mb-3 btn btn-sm btn-primary ${pathname === "/dashboard" ? "active" : ""}`} href="/dashboard">
          Dashboard
        </Link>
      </nav>
    </section>
  )
}
