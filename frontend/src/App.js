import './App.css';
import data from './data';
import {useState} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.min.css'
import Header from './components/Header';
import HomeScreen from './Screens/HomeScreen';

function App() {
    const [myArray, setMyArray] = useState(data)
    return (
    <>
     <Header />
     <main>
       <HomeScreen/>
     </main>
    </>
  );
}

export default App;
