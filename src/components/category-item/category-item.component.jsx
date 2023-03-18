import {CategoryContainer, BackgroundImage, CategoryBodyContainer, Large} from './category-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({category}) => {
    const {imageUrl, title, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return(
        <CategoryContainer onClick={onNavigateHandler}>
        <BackgroundImage imageUrl={imageUrl}/>
        <CategoryBodyContainer>
          <Large>{title}</Large>
          <p>Shop Now</p>

        </CategoryBodyContainer>
      </CategoryContainer>
    )
}

export default CategoryItem;