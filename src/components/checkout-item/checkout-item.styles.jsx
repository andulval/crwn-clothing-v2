import styled from "styled-components";
import {ReactComponent as LeftArrow} from '../../assets/reshot-icon-arrow-chevron-left-975UQXVKZF.svg'
import {ReactComponent as RightArrow} from '../../assets/reshot-icon-arrow-chevron-right-WDGHUKQ634.svg'

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`
export const ImageContainer = styled.div`
      width: 23%;
      padding-right: 15px;
      img {
        width: 100%;
        height: 100%;
      }
`
export const NormalField = styled.div`
      width: 23%;
` 
export const Quantity = styled.div`
      width: 23%;
      display: flex;
` 
export const LeftArrowCss  = styled(LeftArrow)`
        cursor: pointer;
        padding-top: 4px;
        padding-bottom: 0px;
`
export const RightArrowCss  = styled(RightArrow)`
        cursor: pointer;
        padding-top: 4px;
        padding-bottom: 0px;
`
export const Value = styled.p`
margin: 0 4px;
`
export const RemoveX = styled.div`
      padding-left: 12px;
      cursor: pointer;
`


 

// .checkout-item-container {
//     width: 100%;
//     display: flex;
//     min-height: 100px;
//     border-bottom: 1px solid darkgrey;
//     padding: 15px 0;
//     font-size: 20px;
//     align-items: center;
//     box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  
//     .image-container {
//       width: 23%;
//       padding-right: 15px;
  
//       img {
//         width: 100%;
//         height: 100%;
//       }
//     }
//     .name,
//     .quantity,
//     .price {
//       width: 23%;
//     }
  
//     .quantity {
//       display: flex;
  
//       .arrow {
//         cursor: pointer;
//         padding-top: 4px;
//         padding-bottom: 0px;
//       }
  
  
//       .value {
//         margin: 0 4px;
//       }
//     }
  
//     .remove-button {
//       padding-left: 12px;
//       cursor: pointer;
//     }
//   } 