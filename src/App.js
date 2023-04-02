import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from './utils/firebase/firebase.utils';

import Home from './routes/home/home.component.jsx'
import{ Routes, Route} from 'react-router-dom'
import Navbar from './routes/navbar/navbar.component.jsx'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
import ProductPage from './routes/category/category.component'
import { setCurrentUser } from './store/user/user.reducer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //onAuthStateChanged gives us back 'unsubscribe' method
    const unsubscribe = onAuthStateChangedListener((user) => {
      // console.log('UserProvider useEffect triger', user)
      if (user) {
        createUserDocumentFromAuth(user); //if there is a user create Documnet (user instance in our DataBase)
      }
      dispatch(setCurrentUser(user));
    }); //stop listen when user sigout - if not it will be a memory leak
    //onAuthStateChanged gives us  unsubcribe function (AI stop listening)
    return unsubscribe; //unsubcribe whenever you mount new component - user need to log in when refresh
  }, []); //is called when parameters in array changes []  - here is empty so it will run only once, when component mounts
  //dispatch never changed

  
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
