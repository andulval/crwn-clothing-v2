import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.js";
import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

//actual value you want to access
export const CategoriesContext = createContext({
  //we push default value
  categoriesMap: {},
  // setCurrentProducts: () => null,
});

//Functional component to wrap partion of code with will have access to above variables
export const CategoriesProvider = ({ children }) => {
  //Functional component
  const [categories, setCategories] = useState({});
  const value = { categories, setCategories };

  //ONE GO EFEECT -> to populate DB
//   useEffect(() => {
//     addCollectionAndDocuments("categories", SHOP_DATA, 'title');
//   }, []); //is called when parameters in array changes []  - here is empty so it will run only once, when component mounts
  useEffect(() => { 
    const getCategoriesMap = async () => { //ASYNC funkcja w środku wymaga w useEffect również odnośnika z async!
        //w skrócie React oczekuje zwrócenia niczego albo funckji, a tu zwracamy Promise! wiec wyrzuca błąd
        //szczegółowo: https://devtrium.com/posts/async-functions-useeffect
        const categoryMap = await getCategoriesAndDocuments();
        setCategories(categoryMap)
    }
    getCategoriesMap();
  }, []); //is called when parameters in array changes []  - here is empty so it will run only once, when component mounts

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
