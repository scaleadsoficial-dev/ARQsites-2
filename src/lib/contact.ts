// Contatos oficiais — edite aqui para atualizar o site inteiro.
export const CONTACT = {
  whatsapp: "5562982017189",
  instagram: "https://instagram.com/alinediprado",
  defaultMessage: "Olá, Aline! Gostaria de conversar sobre um projeto de arquitetura.",
};

export function whatsappLink(message: string = CONTACT.defaultMessage) {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}
