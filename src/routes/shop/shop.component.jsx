import { Routes, Route } from "react-router-dom";
import { useContext, Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categories/category.reducer";
import { fetchCategoriesAsync } from "../../store/categories/category.action";

import CategoriesPreview from "../categories-preview.component/categories-preview.component";
import "./shop.styles.scss";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

const Shop = () => {
  const dispatch = useDispatch();
  //ONE GO EFEECT -> to populate DB
  useEffect(() => {
    const getCategoriesMap = async () => {
      //ASYNC funkcja w środku wymaga w useEffect również odnośnika z async!
      //w skrócie React oczekuje zwrócenia niczego albo funckji, a tu zwracamy Promise! wiec wyrzuca błąd
      //szczegółowo: https://devtrium.com/posts/async-functions-useeffect
      const categoriesArray = await getCategoriesAndDocuments("categories");

      dispatch(setCategories(categoriesArray));
    };
    getCategoriesMap();
    // dispatch(fetchCategoriesAsync());//for thunk
  }, []); //is called when parameters in array changes []  - here is empty so it will run only once, when component mounts

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      {/* //mean nothing -> / (co w kolejnosci daje /shop/ ) */}
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
