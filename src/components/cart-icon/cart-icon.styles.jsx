import styled from "styled-components";
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.4s ease-out;
    &:hover{
    scale: 1.4
    }
`
export const ShoppingIconCss = styled(ShoppingIcon)`
      width: 26px;
      height: 26px;
`

export const ItemCount  = styled.div`
      position: absolute;
      font-size: 10px;
      font-weight: bold;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -40%);
`
export const CartAnime = styled.div`
    //border-radius: 50px;
    transition: all 0.2s ease-in-out;

    &.transition{
    // box-shadow: linear-gradient(-1deg, #fff95b 0%, #ff930f 100% );
    // border-radius: 50px;
    // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform:  scale(1.4);    
    // transition: opacity 0.3s;
    }     
`

// .cart-icon-container {
//     width: 45px;
//     height: 45px;
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     transition: all 0.4s ease-out;
  
//     .shopping-icon {
//       width: 24px;
//       height: 24px;
//     //   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//     //   border-radius: 25%;
//     }
  
//     .item-count {
//       position: absolute;
//       font-size: 10px;
//       font-weight: bold;
//       bottom: 12px;
//     }

//   }

//   .cart-icon-container:hover{
//     scale: 1.4
//   }

// .cart-anime{
//     border-radius: 50px;
//     transition: all 0.3s ease-in-out;
// } 
// .cart-anime.transition{
// // box-shadow: linear-gradient(-1deg, #fff95b 0%, #ff930f 100% );
// // border-radius: 50px;
// // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
// transform:  scale(1.5);    
// // transition: opacity 0.3s;
// }     

  
  