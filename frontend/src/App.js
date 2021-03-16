import './App.css';
import './bootstrap.min.css'
import Header from './components/Header';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter,  Route } from 'react-router-dom';
import DetailsScreen from './Screens/DetailsScreen';

function App() {

    return (
    <BrowserRouter>
     <Header />
     <main>
       <Route path="/" exact component={HomeScreen} />
       <Route path="/details/:id" component={DetailsScreen} />
     </main>
    </BrowserRouter>
  );
}

export default App;
