import Offer from './components/Offer/Offer';
import CustomerInfo from './components/CustomerInfo/CustomerInfo';
import ServiceHighlights from './components/ServiceHighlights/ServiceHighlights';
import BikeRental from './components/BikeRental/BikeRental';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css'
import {
  HEADER_DATA,
  HERO_DATA,
  OFFER_DATA,
  CUSTOMER_INFO_DATA,
  SERVICE_HIGHLIGHTS_DATA,
  BIKE_RENTAL_DATA
} from './data/constants';


function App() {

  return (
    <div className="App">
      <Header 
        logo={HEADER_DATA.logo}
        navigation={HEADER_DATA.navigation}
        contactButton={HEADER_DATA.contactButton}
      />
      <Hero 
        title={HERO_DATA.title}
        description={HERO_DATA.description}
        image={HERO_DATA.image}
      />
      <Offer 
        title={OFFER_DATA.title}
        description={OFFER_DATA.description}
        image={OFFER_DATA.image}
      />
      <CustomerInfo 
        paragraphs={CUSTOMER_INFO_DATA.paragraphs}
      />
      <ServiceHighlights 
        services={SERVICE_HIGHLIGHTS_DATA.services}
      />
      <BikeRental 
        title={BIKE_RENTAL_DATA.title}
        description={BIKE_RENTAL_DATA.description}
        image={BIKE_RENTAL_DATA.image}
      />
    </div>
  );
}

export default App;
