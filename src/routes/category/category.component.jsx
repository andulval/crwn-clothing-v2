import { useContext, useState, Fragment, useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component.jsx";
import "./category.styles.scss"

const Category = () => {
    const { category } = useParams();
    const {categories} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categories[category]); // obiekt przy ktorego zmianie react rerun/rerender component
    
    useEffect(()=>{
        setProducts(categories[category]);
    }, [category, categories])
    
  return (
            <Fragment>
                <div className='category-name-preview'>
                <h1>{category}</h1>
                </div>   
              <div className="categoryCard-container">
            {
                products && products.map((product, index) => {
                    return <ProductCard key={product.id} product={product} />
                })
            }
              </div>
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