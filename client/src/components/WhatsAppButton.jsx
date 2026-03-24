import React from 'react'

export default function WhatsAppButton() {
  const phoneNumber = '254728725422'
  const message = encodeURIComponent(
    'Hello Trusted Movers, I would like to request an instant moving quote.'
  )

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="whatsapp-float"
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp Quote
    </a>
  )
}