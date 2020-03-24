import React from 'react'
import { Btn } from "./styles/StyledButton"

const Button = ({bgColor, fontColor, link, children}) => {
  return (
    <Btn href={link} bgColor={bgColor} fontColor={fontColor}>
      <em>{children}</em>
    </Btn>
  )
}

export default Button
