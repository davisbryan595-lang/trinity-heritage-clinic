"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ServicesPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/#services")
  }, [router])

  return null
}
