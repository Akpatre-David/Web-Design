import React, { FC, InputHTMLAttributes } from "react";
import style from "./style.module.css";
import { Field, FieldProps } from "formik";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  value?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  type?: string;
  disable?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

const Input: FC<InputProps> = ({
  icon,
  value,
  name,
  placeholder,
  label,
  type,
  disable,
  onChange,
  className,
}) => {
  return (
    <Field name={name}>
      {({ field, meta }: FieldProps) => (
        <section>
          <label>{label}</label>

          <div>
            <input
              {...field}
              placeholder={placeholder}
              type={type}
              value={value}
              disabled={disable}
              className={className}
              onChange={onChange}
              // icon={icon}
              autoComplete="off"
            />
          </div>

          {meta.touched && meta.error && (
            <div className={style.error}>{meta.error}</div>
          )}
        </section>
      )}
    </Field>
  );
};

export default Input;
