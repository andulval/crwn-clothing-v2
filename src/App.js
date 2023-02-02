import Home from './routes/home/home.component.jsx'
import{ Routes, Route} from 'react-router-dom'
import Navbar from './routes/navbar/navbar.component.jsx'
import Authentication from './routes/authentication/authentication.component'

const Shop = () => {
    return (
        <h1>Shop!</h1>
    )
}

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Navbar/>}>
            <Route index={true} element={<Home />}/>
            <Route path='shop' element={<Shop />}/> 
            <Route path='auth' element={<Authentication />}/> 
        </Route>
    </Routes>
  );
};

export default App;
