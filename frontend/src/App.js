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
import SearchScreen from './Screens/SearchScreen';
import OrderDetailsScreen from './Screens/OrderDetailsScreen';
import ExperienceScreen from './Screens/ExperienceScreen';
import HomesCategory from './Screens/HomesCategory';
import ProfileScreen from './Screens/ProfileScreen';
import MyOrder from './Screens/MyOrder';
import HelpScreen from './Screens/HelpScreen';
import AdminScreen from './Screens/AdminScreen';

function App() {

    return (
    <BrowserRouter>
     <Header />
     <main>
       <Route path="/" exact component={HomeScreen} />
       <Route path="/experience" component={ExperienceScreen} />
       <Route path="/home" component={HomesCategory} />
       <Route path="/search/:keyword"  component={SearchScreen} />
       <Route path="/details/:id" component={DetailsScreen} />
       <Route path="/signin" component={LoginScreen} />
       <Route path="/register" component={RegisterScreen} />
       <Route path="/review" component={ReviewScreen} />
       <Route path="/travelling" component={TravellingScreen} />
       <Route path="/payment-method" component={PaymentScreen} />
       <Route path="/order/:orderId" component={OrderDetailsScreen} />
       <Route path="/profile" component={ProfileScreen} />
       <Route path="/order/mine" component={MyOrder} />
       <Route path="/help" component={HelpScreen} />
       <Route path="/admin" component={AdminScreen} />
     </main>


     <footer className="text-center py-3 bg-success mt-4">
       <p className="mb-0"><small>All right Reserved &copy; Habib610</small></p>
     </footer>
    </BrowserRouter>
  );
}

export default App;
