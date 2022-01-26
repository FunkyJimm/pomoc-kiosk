import { useState } from 'react';

import './App.scss';

import Contacts from './components/contacts/contacts';
import Eateries from './components/eateries/eateries';
import Footer from './components/footer/footer';
import HelpCenters from './components/helpcenters/help-centers';
import Informations from './components/informations/informations';
import MainMenu from './components/main-menu/main-menu';
import Shelters from './components/shelters/shelters';

function App() {
  const [screenName, setScreenName] = useState();

  const showScreen = name => {
    switch (name) {
      case 'main-menu':
        return <MainMenu onScreen={handleScreen} />
      case 'shelters':
        return <Shelters onScreen={handleScreen} />
      case 'eateries':
        return <Eateries onScreen={handleScreen} />
      case 'helpcenters':
        return <HelpCenters onScreen={handleScreen} />
      case 'informations':
        return <Informations onScreen={handleScreen} />
      case 'contacts':
        return <Contacts onScreen={handleScreen} />
      default:
        return <MainMenu onScreen={handleScreen} />
    }
  }

  const handleScreen = name => {
    setScreenName(name);
  }

  return (
    <div className="app__container">
      {showScreen(screenName)}
      <Footer />
    </div>
  );
}

export default App;
