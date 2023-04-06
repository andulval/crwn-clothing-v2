import styled from "styled-components";
import Button from "../button/button.component";
import { CardElement } from "@stripe/react-stripe-js";

export const PaymentFormContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: auto auto; */
  margin-bottom: 300px;
`;

export const FormContainer = styled.form`
  height: 100px;
  width: auto;
  width: 100%;
  min-width: 600px;
  h2 {
    margin-bottom: 30px;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const PaymentFormNote = styled.div`
  /* display: none; */
  /* align-self: center; */
  align-items: center;
  justify-content: center;
  margin: auto auto;
  padding: auto auto;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px 50px;
  border-radius: 4px 4px;
  border: 1px dashed red;
  h4 {
    color: red;
  }
`;

export const CardElementCustomized = styled(CardElement)`
  border-radius: 4px 4px 4px 4px;
  padding: 12px;
  border: 1px solid rgba(50, 50, 93, 0.1);
  max-height: 44px;
  width: 100%;
  background: white;
  box-sizing: border-box;
`;

export const ErrorMessage = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 10px 5px;
  width: 70%;
  margin: 0 auto;
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
  border-radius: 10px;
  border: 1px solid;
`;

export const SucceedMessage = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 10px 5px;
  width: 70%;
  margin: 0 auto;
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
  border-radius: 10px;
  border: 1px solid;
`;
