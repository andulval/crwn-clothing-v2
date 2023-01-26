import CategoryItem from "../category-item/category-item.component";
import './category-menu.styles.scss'

const CategoryMenu = ({ categories }) => {
  return(
  <div className="menu-container">
    {categories.map((category) => {
        //implicit return with ( ) insted of { }
        return (
        //key - musi być tam gdzie map, nie może być głębiej!
            <CategoryItem key={category.id} category={category} />
        );
    })};
  </div>
  )
};

export default CategoryMenu;
