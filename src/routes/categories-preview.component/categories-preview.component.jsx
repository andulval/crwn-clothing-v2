import { Fragment } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import {
  selectCategories,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
import "./categories-preview.component.scss";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  // console.log('shop component', SHOP_DATA)
  //   const { categories } = useContext(CategoriesContext);
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {
        //Object.keys(categories) //returns array of keys ['hats', 'jackets']
        isLoading ? (
          <Spinner />
        ) : (
          Object.keys(categories).map((title) => {
            const products = categories[title];
            return (
              <CategoryPreview key={title} title={title} products={products} />
            );
          })
        )
      }
    </Fragment>
  );
};

export default CategoriesPreview;
