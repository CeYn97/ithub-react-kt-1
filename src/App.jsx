import Offer from './components/Offer/Offer';
import CustomerInfo from './components/CustomerInfo/CustomerInfo';
import ServiceHighlights from './components/ServiceHighlights/ServiceHighlights';
import BikeRental from './components/BikeRental/BikeRental';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css'

function App() {
  const headerData = {
    navigation: [
      {text: 'О нас', href: '#about'},
      {text: 'О нас', href: '#services'},
      {text: 'О нас', href: '#rental'}
    ],
    contactButton: {
      text: 'Связаться'
    }
  }
  
  const heroData = {
    title: 'Веломастерская "Велозар"',
    description: 'В нашей мастерской работают мастера, которые превратили свое хобби в профессию. Мы хотим, чтобы ваш двухколесный друг приносил вам только радость.',
    image: 'dinosaur-bike'
  };

  const OfferData = {
    title: 'Что мы предлагаем',
    description: 'Мы предлагаем полный спектр технического обслуживания, ремонта и настройки всех компонентов велосипеда. Наши мастера работают с любовью и вниманием к деталям, обеспечивая качественный сервис для вашего велосипеда.',
    image: 'workshop'
  };

  const customerInfoData = {
    paragraphs: [
      'Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.',
      'А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.'
    ]
  };

  const serviceHighlightsData = {
    services: [
      {
        title: 'Годовое ТО',
        backgroundColor: '#22356F'
      },
      {
        title: 'Выравнивание колес',
        backgroundColor: '#0052C1'
      },
      {
        title: 'Настройка переключателей',
        backgroundColor: '#76B58B'
      }
    ]
  };

  const bikeRentalData = {
    title: 'Прокат велосипедов',
    description: 'В нашей мастерской можно взять в аренду хорошо обслуживаемые и настроенные велосипеды. Мы находимся в красивом парке, где можно приятно провести время.',
    image: 'bikes'
  };

  return (
    <div className="App">
      <Header 
        logo={headerData.logo}
        navigation={headerData.navigation}
        contactButton={headerData.contactButton}
      />
      <Hero 
        title={heroData.title}
        description={heroData.description}
        image={heroData.image}
      />
      <Offer 
        title={OfferData.title}
        description={OfferData.description}
        image={OfferData.image}
      />
      <CustomerInfo 
        paragraphs={customerInfoData.paragraphs}
      />
      <ServiceHighlights 
        services={serviceHighlightsData.services}
      />
      <BikeRental 
        title={bikeRentalData.title}
        description={bikeRentalData.description}
        image={bikeRentalData.image}
      />
    </div>
  );
}

export default App;
