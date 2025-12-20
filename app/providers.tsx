"use client"

import { ThemeProvider } from "next-themes"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"


export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" enableSystem>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppButton />
    </ThemeProvider>
  )
}
