import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  // height: auto; //350px;
  height: 400px;
  overflow: hidden;
  align-items: center;
  position: relative;
  /* padding-bottom: 15px; */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 5px;
  transition: 0.4s ease-out;
  // border-radius: 5px;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    object-position: center center;
    overflow: hidden;
    margin-bottom: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    transition: 0.4s ease-out;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 220px;
    display: none;
  }

  &:hover {
    border-radius: 15px;
    /* border-top-left-radius: 30px;
        border-top-right-radius: 30px; */

    img {
      opacity: 0.8;
      /* border-top-left-radius: 30px;
        border-top-right-radius: 30px; */
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;
export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  block-size: fit-content;
  //padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 18px;
  padding-bottom: 8px;
`;

export const Name = styled.div`
  width: 90%;
`;

export const Price = styled.div`
  width: 10%;
`;

// .product-card-container {
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     // height: auto; //350px;
//     height: 400px;
//     align-items: center;
//     position: relative;
//     padding-bottom: 15px;
//     box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

//     border-radius: 5px;
//     transition: 0.4s ease-out;
//     // border-radius: 5px;

//     img {
//       width: 100%;
//       height: 95%;
//       object-fit: cover;
//       margin-bottom: 5px;
//       border-top-left-radius: 5px;
//       border-top-right-radius: 5px;
//       transition: 0.4s ease-out;
//     }

//     button {
//       width: 80%;
//       opacity: 0.7;
//       position: absolute;
//       top: 255px;
//       display: none;
//     }

//     &:hover {

//         border-radius: 15px;
//         border-top-left-radius: 30px;
//         border-top-right-radius: 30px;

//       img {
//         opacity: 0.8;
//         border-top-left-radius: 30px;
//         border-top-right-radius: 30px;
//       }

//       button {
//         opacity: 0.85;
//         display: flex;
//       }

//     }

//     .footer {
//       width: 100%;
//       height: 5%;
//       display: flex;
//       justify-content: space-between;
//       font-size: 18px;
//       block-size: fit-content;
//       //padding-bottom: 10px;
//       padding-left: 12px;
//       padding-right: 18px;

//       .name {
//         width: 90%;
//         //padding-bottom: 15px;
//       }

//       .price {
//         width: 10%;
//       }
//     }
//   }
