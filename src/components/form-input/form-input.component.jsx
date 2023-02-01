import './form-input.styles.scss'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && ( //short-circuit - skrót w JS który polega na tym ze JS wykonuje najpierw lewą cześć wyrażenia && || a potem prawą, tylko jeśli lewa nie zwróciła 'false' - bo w sumie po <co className=""></co>
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
