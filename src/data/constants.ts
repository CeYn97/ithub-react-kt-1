import type {
  HeaderData,
  HeroData,
  OfferData,
  CustomerInfoData,
  ServiceHighlightsData,
  BikeRentalData,
} from "../types";

export const HEADER_DATA: HeaderData = {
  navigation: [
    { text: "О нас", href: "#about" },
    { text: "Услуги", href: "#services" },
    { text: "Аренда", href: "#rental" },
  ],
  contactButton: {
    text: "Связаться",
  },
};

export const HERO_DATA: HeroData = {
  title: 'Веломастерская "Велозар"',
  description:
    "Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, которые смогли превратить свое увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.",
  image: "dinosaur-bike",
};

export const OFFER_DATA: OfferData = {
  title: "Что мы предлагаем",
  description:
    "В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  Все работы выполняем качественно и с душой.",
  image: "workshop",
};

export const CUSTOMER_INFO_DATA: CustomerInfoData = {
  paragraphs: [
    "Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.",
    "А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.",
  ],
};

export const SERVICE_HIGHLIGHTS_DATA: ServiceHighlightsData = {
  services: [
    {
      title: "Годовое ТО",
      backgroundColor: "#22356F",
    },
    {
      title: "Выравнивание колес",
      backgroundColor: "#0052C1",
    },
    {
      title: "Настройка переключателей",
      backgroundColor: "#76B58B",
    },
  ],
};

export const BIKE_RENTAL_DATA: BikeRentalData = {
  title: "Прокат велосипедов",
  description:
    "У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!",
  image: "bikes",
};
