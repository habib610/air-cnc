import './App.css';
import './bootstrap.min.css'
import Header from './components/Header';
import HomeScreen from './Screens/HomeScreen';
import { BrowserRouter,  Route } from 'react-router-dom';
import DetailsScreen from './Screens/DetailsScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ReviewScreen from './Screens/ReviewScreen';
import TravellingScreen from './Screens/TravellingScreen';
import PaymentScreen from './Screens/PaymentScreen';

function App() {

    return (
    <BrowserRouter>
     <Header />
     <main>
       <Route path="/" exact component={HomeScreen} />
       <Route path="/search/:keyword"  component={HomeScreen} />
       <Route path="/details/:id" component={DetailsScreen} />
       <Route path="/signin" component={LoginScreen} />
       <Route path="/register" component={RegisterScreen} />
       <Route path="/review" component={ReviewScreen} />
       <Route path="/travelling" component={TravellingScreen} />
       <Route path="/payment" component={PaymentScreen} />
     </main>


     <footer className="text-center py-3 bg-success mt-5">
       <p className="mb-0"><small>All right Reserved &copy; Habib610</small></p>
     </footer>
    </BrowserRouter>
  );
}

export default App;
