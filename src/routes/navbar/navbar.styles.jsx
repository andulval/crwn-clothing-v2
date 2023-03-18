import styled from 'styled-components';
import {Link} from 'react-router-dom'
import CartIcon from "../../components/cart-icon/cart-icon.component";

export const NavbarContainer = styled.div`
    position: sticky; 
    top: 0;
    z-index: 100;
    background-color: white;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
      height: 100%;
      width: 70px;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
`
export const  NavLinks = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
`
export const  NavLink =styled(Link)`
        padding: 10px 15px;
        cursor: pointer;
        text-transform: uppercase;
        transition: all 0.2s ease-out;
    &:hover {
        scale: 1.05;
        color: gray;
    }  
`
// export const  CartIconCss =styled(CartIcon)`
//     /* scale: 1.0;
//     background-color: black;
//     transition: all 0.2s ease-out;
//     &:hover {
//         scale: 1.2;
//         background-color: red;
//     } */
// `


// .nav-link:hover {
//     color: gray;
//   }
//   .cart-icon-container{
//     scale: 1.0;
//     transition: 0.4s ease-out;
//   }
//   .cart-icon-container:hover{
//     // background-color: yellow;
//     scale: 1.2;
//   }


// .navbar {
//     position: sticky; 
//     top: 0;
//     z-index: 100;
//     background-color: white;
//     height: 70px;
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 25px;

//     .logo-container {
//       height: 100%;
//       width: 70px;
//       padding: 5px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }
  
    // .nav-links-container {
    //   width: 50%;
    //   height: 100%;
    //   display: flex;
    //   align-items: center;
    //   justify-content: flex-end;
  
    //   .nav-link {
    //     padding: 10px 15px;
    //     cursor: pointer;
    //     text-transform: uppercase;
    //   }
    //  .nav-link:hover {
    //     color: gray;
    //   }
    //   .cart-icon-container{
    //     scale: 1.0;
    //     transition: 0.4s ease-out;
    //   }
    //   .cart-icon-container:hover{
    //     // background-color: yellow;
    //     scale: 1.2;
    //   }
    // }
//   }
  