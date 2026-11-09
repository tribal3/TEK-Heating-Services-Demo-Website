import {
  Clock3,
  Flame,
  Heater,
  MessageSquareText,
  PoundSterling,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

export const site = {
  name: 'Tek Heating Services',
  legalName: 'Tek Heating Services Ltd',
  description:
    'A local Bolton-based domestic heating and gas business offering boiler installation, repairs, servicing, central heating and gas appliance services.',
  phoneDisplay: '+44 7743 889314',
  phoneHref: 'tel:+447743889314',
  phonePlain: '07743 889314',
  address: {
    street: '32 Elder Drive',
    city: 'Bolton',
    postcode: 'BL3 1AT',
    region: 'Greater Manchester',
    country: 'United Kingdom',
  },
  addressLine: '32 Elder Drive, Bolton, BL3 1AT, United Kingdom',
  rating: 5.0,
  reviewCount: 15,
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Tek+Heating+Services+32+Elder+Drive+Bolton+BL3+1AT',
  yelpUrl: 'https://www.yelp.com/biz/tek-heating-services-bolton',
  cylexUrl:
    'https://bolton.cylex-uk.co.uk/company/tek-heating-services-ltd-27091533.html',
  yellUrl: 'https://www.yell.com/biz/tek-heating-services-ltd-bolton-9770389/',
}

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Our Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

export interface Service {
  id: string
  title: string
  description: string
  image: string
  alt: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'boiler-installation',
    title: 'Boiler Installation',
    description:
      'New boiler installations planned around your home, with clear advice on the right option and careful workmanship from start to finish.',
    image: '/images/service-boiler-installation.jpg',
    alt: 'Heating engineer assembling heating components during a boiler installation',
    icon: Flame,
  },
  {
    id: 'boiler-repairs',
    title: 'Boiler Repairs',
    description:
      'Methodical fault-finding for breakdowns, leaks, pressure problems and loss of heating or hot water.',
    image: '/images/service-boiler-repair.jpg',
    alt: 'Close-up of a heating engineer working on a domestic boiler control panel',
    icon: Wrench,
  },
  {
    id: 'boiler-servicing',
    title: 'Boiler Servicing',
    description:
      'Routine boiler checks and maintenance to help keep your system running safely, reliably and efficiently.',
    image: '/images/service-boiler-servicing.jpg',
    alt: 'Heating engineer inspecting an open wall-mounted boiler',
    icon: Settings2,
  },
  {
    id: 'boiler-replacement',
    title: 'Boiler Replacement',
    description:
      'Replacing an older or unreliable boiler with a suitable modern system, including sensible guidance on your options.',
    image: '/images/service-boiler-replacement.jpg',
    alt: 'Heating engineer working carefully on boiler pipework and controls',
    icon: RefreshCw,
  },
  {
    id: 'central-heating',
    title: 'Central Heating',
    description:
      'Radiators, pipework and heating system upgrades installed and balanced for consistent warmth around the home.',
    image: '/images/service-central-heating.jpg',
    alt: 'Hand adjusting the thermostat valve on a white domestic radiator',
    icon: Heater,
  },
  {
    id: 'gas-appliances',
    title: 'Gas Appliances',
    description:
      'Installation and servicing of gas appliances, including gas cookers, carried out with care and attention.',
    image: '/images/service-gas-appliances.jpg',
    alt: 'Gas engineer using hand tools to work on a domestic gas pipe connection',
    icon: ShieldCheck,
  },
]

export interface AdditionalService {
  title: string
  icon: LucideIcon
}

export const additionalServices: AdditionalService[] = [
  {
    title: 'Gas Cooker Installation',
    icon: Flame,
  },
  {
    title: 'Radiator Installation',
    icon: Heater,
  },
  {
    title: 'Smart Heating Controls',
    icon: Settings2,
  },
  {
    title: 'Landlord Gas Safety Checks',
    icon: ShieldCheck,
  },
]

export interface TrustItem {
  title: string
  description: string
  icon: LucideIcon
}

export const trustItems: TrustItem[] = [
  {
    title: 'Responsive Service',
    description: 'A practical response when heating problems need attention.',
    icon: Clock3,
  },
  {
    title: 'Tidy Workmanship',
    description: 'Careful work with respect for your home and working areas.',
    icon: Sparkles,
  },
  {
    title: 'Clear Advice',
    description: 'Straightforward explanations of the work and your options.',
    icon: MessageSquareText,
  },
  {
    title: 'Fair Pricing',
    description: 'A sensible, transparent approach to discussing costs.',
    icon: PoundSterling,
  },
]

export interface Reason {
  number: string
  title: string
  description: string
  icon: LucideIcon
}

export const reasons: Reason[] = [
  {
    number: '01',
    title: 'Responsive Support',
    description:
      'Customers have highlighted quick responses when dealing with heating and boiler problems — helpful when you need someone to take a look.',
    icon: Clock3,
  },
  {
    number: '02',
    title: 'Clear Communication',
    description:
      'Understand the work being carried out, why it is needed and what the available options are before decisions are made.',
    icon: MessageSquareText,
  },
  {
    number: '03',
    title: 'Tidy Workmanship',
    description:
      'Respect for your home, with attention to keeping work areas clean and leaving things tidy at the end of the job.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Fair, Straightforward Pricing',
    description:
      'A practical approach to discussing work and costs, without unnecessary jargon or pressure.',
    icon: PoundSterling,
  },
]

export interface GalleryImage {
  src: string
  alt: string
  caption: string
  aspect: string
  width: number
  height: number
}

export const galleryImages: GalleryImage[] = [
  {
    src: '/images/service-boiler-servicing.jpg',
    alt: 'Heating engineer inspecting an open wall-mounted boiler',
    caption: 'Boiler servicing & inspection',
    aspect: 'aspect-[4/3]',
    width: 1000,
    height: 750,
  },
  {
    src: '/images/gallery-pipe-fittings.jpg',
    alt: 'Close-up of neat metal pipe connections and fittings',
    caption: 'Neat pipework & connections',
    aspect: 'aspect-[4/3]',
    width: 1100,
    height: 733,
  },
  {
    src: '/images/gallery-radiator.jpg',
    alt: 'White finned radiator mounted on a bright interior wall',
    caption: 'Modern domestic radiator',
    aspect: 'aspect-[4/3]',
    width: 1100,
    height: 729,
  },
  {
    src: '/images/gallery-radiator-pipes.jpg',
    alt: 'Minimal white radiator pipes and valve against a painted wall',
    caption: 'Heating pipework detail',
    aspect: 'aspect-[4/5]',
    width: 1100,
    height: 1648,
  },
  {
    src: '/images/gallery-copper-pipe.jpg',
    alt: 'Copper heating pipe being prepared in a workshop vice',
    caption: 'Pipe preparation & gas work',
    aspect: 'aspect-[4/5]',
    width: 1100,
    height: 1650,
  },
  {
    src: '/images/gallery-radiator-installation.jpg',
    alt: 'Close-up of a plumber fitting the valve to a white radiator',
    caption: 'Radiator valve & system work',
    aspect: 'aspect-[4/3]',
    width: 1100,
    height: 733,
  },
]

export interface ReviewTheme {
  title: string
  description: string
  icon: LucideIcon
}

export const reviewThemes: ReviewTheme[] = [
  {
    title: 'Responsive support',
    description:
      'Customers often mention quick responses when a boiler or heating problem needs attention.',
    icon: Clock3,
  },
  {
    title: 'Professional installations',
    description:
      'Boiler and heating installations are described as efficient, professional and well organised.',
    icon: Flame,
  },
  {
    title: 'Tidy workmanship',
    description:
      'A recurring positive: careful working practices and a clean, tidy finish around the home.',
    icon: Sparkles,
  },
  {
    title: 'Clear explanations',
    description:
      'Customers value having the work explained clearly, including what is being done and why.',
    icon: MessageSquareText,
  },
  {
    title: 'Fair pricing',
    description:
      'Feedback highlights a fair, reasonable approach to pricing and good value for the work carried out.',
    icon: PoundSterling,
  },
]
