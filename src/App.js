import './App.scss';

import MainMenu from './components/main-menu/main-menu';
import Contacts from './components/contacts/contacts';
import Shelters from './components/shelters/shelters';
import Footer from './components/footer/footer';
import Informations from './components/informations/informations';

function App() {
  return (
    <div className="app__container">
      {/* <MainMenu /> */}
      {/* <Contacts /> */}
      {/* <Shelters /> */}
      <Informations />
      <Footer />
    </div>
  );
}

export default App;
