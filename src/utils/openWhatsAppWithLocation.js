
const WHATSAPP_NUMBER = '923159973713';

function openWhatsAppWithLocation(message) {
  const openWhatsApp = (locationLink = '') => {
    const finalMessage = locationLink
      ? `${message}\n\nMy current location: ${locationLink}`
      : `${message}\n\nI could not share my current location automatically. I can share it manually on WhatsApp.`;

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMessage)}`;

    window.location.assign(whatsappUrl);
  };

  if (!navigator.geolocation) {
    openWhatsApp();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;

      const locationLink =
        `https://www.google.com/maps?q=${latitude},${longitude}`;

      openWhatsApp(locationLink);
    },
    () => {
      openWhatsApp();
    },
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    }
  );
}

export default openWhatsAppWithLocation;
