import styled from "styled-components";
import CartItem from "../../components/cart-item/cart-item.component.jsx";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 70px;
  right: 10px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;
export const EmptyMessage = styled.div`
  font-size: 18px;
  color: grey;
  font-style: italic;
  margin: auto auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const TotalPriceDropdown = styled.span`
  justify-content: center;
  text-align: center;
  padding: 6px 0px;
  margin: 5px 0px;
  font-style: italic;
  border-bottom: 1px solid darkgrey;
  border-top: 1px solid darkgrey;
`;

// .cart-dropdown-container {

//     .empty-message {
//       font-size: 18px;
//       margin: 50px auto;
//     }

//     .cart-items {
//       height: 240px;
//       display: flex;
//       flex-direction: column;
//       overflow: auto
//     }

//     .total-price-dropdown{
//       justify-content: center;
//       text-align: center;
//       padding: 6px 0px;
//       margin: 5px 0px;
//       font-style: italic;
//       border-bottom: 1px solid darkgrey;
//       border-top: 1px solid darkgrey;
//     }

//     button {
//       margin-top: auto;
//     //   font-size: auto;
//     //   width: fit-content;
//     // block-size: fit-content;
//     }
//   }
