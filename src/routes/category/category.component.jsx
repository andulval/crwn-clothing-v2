import { useState, Fragment, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
// import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component.jsx";
import "./category.styles.scss";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  // const {categories} = useContext(CategoriesContext);
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [products, setProducts] = useState(categories[category]); // obiekt przy ktorego zmianie react rerun/rerender component

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <div className="category-name-preview">
        <h1>{category}</h1>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="categoryCard-container">
          {products &&
            products.map((product, index) => {
              return <ProductCard key={product.id} product={product} />;
            })}
        </div>
      )}
    </Fragment>
  );
};

export default Category;

// import { useContext, Fragment } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
// import ProductCard from "../../components/product-card/product-card.component.jsx";
// import "./category.styles.scss"
// import { CartContext } from "../../contexts/cart.context";

// const Category = ({title}) => {
//     // console.log('shop component', SHOP_DATA)
//     const { categories } = useContext(CategoriesContext);
//     // const {cart, setCart} = useContext(CartContext);
//     // console.log('products', products)
//     // console.log('categories', categories)

//   return (
//             <Fragment>
//               <h1>{title}</h1>
//               <div className="products-container">
//             {
//                 categories[title].map((product, index) => {
//                     return <ProductCard key={product.id} product={product} />
//                 })
//             }
//               </div>
//             </Fragment>
//           );
// };

// export default Category;
