import {FormInputLabel, Input, Group} from './form-input.styles'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && ( //short-circuit - skrót w JS który polega na tym ze JS wykonuje najpierw lewą cześć wyrażenia && || a potem prawą, tylko jeśli lewa nie zwróciła 'false' - bo w sumie po <co className=""></co>
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

// className={`${
//     otherProps.value.length ? "shrink" : ""
//   } form-input-label`}