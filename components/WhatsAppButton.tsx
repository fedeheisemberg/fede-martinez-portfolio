"use client"
import React from "react"
import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5492645802870"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 
                 text-white p-4 rounded-full shadow-lg 
                 transition-transform transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}

export default WhatsAppButton
