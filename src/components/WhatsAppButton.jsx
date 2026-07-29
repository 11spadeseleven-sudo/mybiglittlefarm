import { WhatsAppIcon } from "./Icons";

export default function WhatsAppButton() {
  return (
    <a
      className="floating-whatsapp"
      href="https://wa.me/27782785314?text=Hello%20My%20Big%20Little%20Farm.%20I%20would%20like%20to%20enquire%20about%20your%20fresh%20quail%20eggs."
      target="_blank"
      rel="noreferrer"
      aria-label="Enquire on WhatsApp"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
