import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import "./categories-preview.component.scss";
import CategoryPreview from '../../components/category-preview/category-preview.component'

const CategoriesPreview = () => {
  // console.log('shop component', SHOP_DATA)
  const { categories } = useContext(CategoriesContext);

  return (
    <Fragment>
      {
        //Object.keys(categories) //returns array of keys ['hats', 'jackets']
        Object.keys(categories).map((title) => {
            const products = categories[title];
            return <CategoryPreview key={title} title={title} products={products} />
        })
      }
    </Fragment>
  );
};

export default CategoriesPreview;
