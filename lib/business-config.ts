export interface BusinessContact {
  email: string
  location: string
  whatsappDisplay: string
  whatsappNumber: string
  mapsUrl: string
  businessHours: string
}

export interface BusinessConfig {
  companyName: string
  contact: BusinessContact
}

const readEnv = (name: string, fallback = ""): string => {
  if (typeof process === "undefined" || !process.env) return fallback
  return (process.env[name] as string | undefined) ?? fallback
}

const readFirstEnv = (names: string[], fallback = ""): string => {
  for (const name of names) {
    const value = readEnv(name)
    if (value.trim()) return value
  }
  return fallback
}

const normalizePhoneNumber = (value = ""): string =>
  value.replace(/[^\d]/g, "")

const defaultConfig: BusinessConfig = {
  companyName: "IDEC",
  contact: {
    email: "administracion@idec.ec",
    location:
      "Av. General Rumiñahui e Isla Isabela, a una cuadra del San Luis Shopping. Edificio Alimco. Quito, Ecuador.",
    whatsappDisplay: "+593 96 316 0107",
    whatsappNumber: "593963160107",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.%20General%20Rumi%C3%B1ahui%20e%20Isla%20Isabela%20Edificio%20Alimco%20Quito%20Ecuador",
    businessHours: "lunes a viernes, de 08h00 a 18h00",
  },
}

let cachedConfig: BusinessConfig | null = null

export const getBusinessConfig = (): BusinessConfig => {
  if (cachedConfig) return cachedConfig

  const whatsappNumber = normalizePhoneNumber(
    readFirstEnv(
      ["NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER", "NEXT_PUBLIC_WHATSAPP_PHONE"],
      defaultConfig.contact.whatsappNumber,
    ),
  )

  cachedConfig = {
    companyName: readFirstEnv(
      ["NEXT_PUBLIC_BUSINESS_NAME", "CHATBOT_COMPANY_NAME"],
      defaultConfig.companyName,
    ),
    contact: {
      email: readFirstEnv(
        ["NEXT_PUBLIC_BUSINESS_EMAIL", "BUSINESS_EMAIL"],
        defaultConfig.contact.email,
      ),
      location: readFirstEnv(
        ["NEXT_PUBLIC_BUSINESS_LOCATION", "CHATBOT_CONTACT_LOCATION"],
        defaultConfig.contact.location,
      ),
      whatsappDisplay: readFirstEnv(
        [
          "NEXT_PUBLIC_WHATSAPP_BUSINESS_DISPLAY",
          "NEXT_PUBLIC_WHATSAPP_DISPLAY",
        ],
        defaultConfig.contact.whatsappDisplay,
      ),
      whatsappNumber:
        whatsappNumber || defaultConfig.contact.whatsappNumber,
      mapsUrl: readFirstEnv(
        ["NEXT_PUBLIC_BUSINESS_MAPS_URL", "BUSINESS_MAPS_URL"],
        defaultConfig.contact.mapsUrl,
      ),
      businessHours: readFirstEnv(
        ["NEXT_PUBLIC_BUSINESS_HOURS", "CHATBOT_BUSINESS_HOURS"],
        defaultConfig.contact.businessHours,
      ),
    },
  }

  return cachedConfig
}
