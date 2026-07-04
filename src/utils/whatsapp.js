/**
 * Generates the most optimal WhatsApp link based on the user's device.
 * For mobile users, it uses api.whatsapp.com which triggers the native app deep-link.
 * For desktop users, it redirects directly to WhatsApp Web to bypass the intermediate select screen.
 * 
 * @param {string} phone - Phone number in international format (digits only).
 * @param {string} text - The prefilled message.
 * @returns {string} The formatted URL.
 */
export const getWhatsAppUrl = (phone, text) => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const encodedText = encodeURIComponent(text);
  
  if (isMobile) {
    // Native deep link trigger for mobile
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`;
  } else {
    // Direct WhatsApp Web chat link for desktop to bypass the intermediate selection page
    return `https://web.whatsapp.com/send?phone=${phone}&text=${encodedText}`;
  }
};
