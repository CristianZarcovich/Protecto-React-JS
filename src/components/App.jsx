import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ItemListContainer from './ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <Navbar/>
      <ItemListContainer greeting = {"¡Soy una ItemListContainer!"}/>
    </>
  );
}

export default App;
