import {Routes, Route} from 'react-router-dom'
import { useContext, Fragment } from "react";
import CategoriesPreview from '../categories-preview.component/categories-preview.component'
import "./shop.styles.scss";
import Category from '../category/category.component'

const Shop = () => {

  return (
    <Routes>
        <Route index element={<CategoriesPreview/>}/>
        {/* //mean nothing -> / (co w kolejnosci daje /shop/ ) */}
        <Route path=":category" element={<Category/>}/>
    </Routes>
  );
};

export default Shop;
