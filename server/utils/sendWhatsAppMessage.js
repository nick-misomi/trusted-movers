export const buildWhatsAppLink = (phone, message) => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
