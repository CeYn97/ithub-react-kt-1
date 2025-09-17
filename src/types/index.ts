export interface NavigationItem {
  text: string;
  href: string;
}

export interface ContactButton {
  text: string;
}

export interface HeaderData {
  navigation: NavigationItem[];
  contactButton: ContactButton;
}

export interface HeroData {
  title: string;
  description: string;
  image: string;
}

export interface OfferData {
  title: string;
  description: string;
  image: string;
}

export interface CustomerInfoData {
  paragraphs: string[];
}

export interface Service {
  title: string;
  backgroundColor: string;
}

export interface ServiceHighlightsData {
  services: Service[];
}

export interface BikeRentalData {
  title: string;
  description: string;
  image: string;
}

export interface HeaderProps {
  logo?: string;
  navigation: NavigationItem[];
  contactButton: ContactButton;
}

export interface HeroProps {
  title: string;
  description: string;
  image: string;
}

export interface OfferProps {
  title: string;
  description: string;
  image: string;
}

export interface CustomerInfoProps {
  paragraphs: string[];
}

export interface ServiceHighlightsProps {
  services: Service[];
}

export interface BikeRentalProps {
  title: string;
  description: string;
  image: string;
}
