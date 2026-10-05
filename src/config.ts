export const site = {
  url: 'https://allopze.dev',
  name: 'Allopze',
  title: 'Allopze — Webs y sistemas para empresas y profesionales',
  description:
    'Diseño y programo sitios web y sistemas a medida para empresas y profesionales en Chile.',
};

export const contact = {
  email: 'allopze@gmail.com',
  whatsapp: '56985507107',
  whatsappMessage:
    'Hola Alejandro, vi tu sitio y quiero conversar sobre un proyecto.',
};

export const referrals: Record<string, string> = {
  chome: 'Chome LTDA',
  neltume: 'Fábrica de Puertas Neltume',
  hidromont: 'Hidromont Chile',
};

if (contact.email.includes('TODO') || contact.whatsapp === 'TODO') {
  console.warn(
    '[allopze.dev] Contacto pendiente: reemplaza el email y WhatsApp TODO en src/config.ts.',
  );
}
