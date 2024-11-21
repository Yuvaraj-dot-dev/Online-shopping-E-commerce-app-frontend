import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import Routing from './Routing';
// import Header from './Components/Header';
// import SignUp from './Components/Signup';
// import  Login from './Components/Login';
// import Todo from "./Todo/Todo";
import { Provider } from 'react-redux';
import store from './Components/Store';
import Routing from './Routing';
import Signup from './Components/Signup';
function App() {
  return <Provider store={store}>
    <BrowserRouter>
    {/* <Routing/> */}
    <Signup/>
    </BrowserRouter>
  </Provider>
}

export default App;
