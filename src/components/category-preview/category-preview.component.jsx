import { useSelector, Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
// import { CategoriesContext } from "../../contexts/categories.context";
import { selectCategories } from "../../store/categories/category.selector.js";

import ProductCard from "../../components/product-card/product-card.component.jsx";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
  AllProductsLink,
  LinkToAll,
} from "./category-preview.styles.jsx";
// import { CartContext } from "../../contexts/cart.context";

const CategoryPreview = ({ title, products }) => {
  // console.log('shop component', SHOP_DATA)
  //   const { categories } = useContext(CategoriesContext);
  // console.log('categories', categories)
  // const categories = useSelector(selectCategories);
  return (
    <CategoryPreviewContainer>
      <h2>
        <Link to={`/shop/${title}`}>
          <Title>{title.toUpperCase()}</Title>
        </Link>{" "}
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          //(_, index) --> _ mean that we dont wanna use that, normaly is: (product, index)
          .map((product, index) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
      <AllProductsLink>
        <Link to={`/shop/${title}`}>
          <LinkToAll>{`See all ${title}`.toUpperCase()}</LinkToAll>
        </Link>
      </AllProductsLink>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
