import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 40px;
    margin-bottom: 10px;
`
export const Title = styled.span`
      font-size: 28px;
      margin-bottom: 25px;
      cursor: pointer;
`
export const Preview = styled.div`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 50px;
`
export const AllProductsLink = styled.div`
        margin: 0 auto;
        margin-top: 30px;
        font-weight: 600;
        font-size: 20px;
        justify-content: center;
`
export const LinkToAll = styled.p`
    scale: 1;
    transition: 0.4s ease-out; 
    &:hover{
    transform: scale(1.2); 
    }
    & a{
    scale: 1;
    color: grey;
    transition: 0.4s ease-out; 
  }
`


// .category-preview-container {
//     display: flex;
//     flex-direction: column;
//     margin: 0px 30px;
//     margin-bottom: 10px;

  
//     .title {
//       font-size: 28px;
//       margin-bottom: 25px;
//       cursor: pointer;
//     }
  
//     .preview {
//       display: grid;
//       grid-template-columns: repeat(4, 1fr);
//       column-gap: 20px;
//     }

//     .all-products-link{
//         margin: 0 auto;
//         margin-top: 30px;
//         font-weight: 600;
//         font-size: 20px;
//         justify-content: center;
//     }
//     .link-to-all{
//         scale: 1;
//         transition: 0.4s ease-out; 
//       }
//     .link-to-all:hover{
//         transform: scale(1.2); 
//     }
//     .link-to-all a{
//         scale: 1;
//         color: grey;
//         transition: 0.4s ease-out; 
//       }
//   }
  