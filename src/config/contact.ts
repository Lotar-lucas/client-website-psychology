const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
export const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL;
export const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL;

export const WHATSAPP = {
  schedule: `https://wa.me/${phone}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta.`,
  contact: `https://wa.me/${phone}?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20psicoterapia.`,
  profile: `https://wa.me/${phone}?text=Ol%C3%A1!%20Vi%20seu%20perfil%20e%20gostaria%20de%20conversar%20sobre%20iniciar%20a%20terapia.`,
  process: `https://wa.me/${phone}?text=Ol%C3%A1!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20como%20funciona%20o%20processo%20terap%C3%AAutico.`,
};

