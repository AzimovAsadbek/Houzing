import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = forwardRef(
  (
    {
      type,
      onChange,
      placeholder,
      name,
      value,
      defaultValue,
      heigth,
      width,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={icon}
          value={value}
          defaultValue={defaultValue}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          width={width}
          height={heigth}
        />
      </Wrapper>
    );
  }
);
export default Input;
