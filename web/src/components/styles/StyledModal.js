import styled, { css } from "styled-components"
import { motion } from "framer-motion"

export const ModalWrapper = styled(motion.div)(
  props => css`
    position: fixed;
    width: 100%;
    display: flex;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: ${props.theme.colors.superDarkGreen}4D;
    padding: 0 1rem;
    z-index: 100;
  `
)

export const ModalCard = styled(motion.div)(
  props => css`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    padding: 30px 20px 40px;
    max-width: 400px;
    width: 100%;
    position: relative;

    button {
      align-self: flex-end;
      display: flex;
      align-items: center;
      justify-content: center;
      background: red;
      position: absolute;
      top: 8px;
      right: 8px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: none;
      color: #FFF;
      font-weight: bolder;
      cursor: pointer;
      font-size: 1.1rem;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  `
)

export const H2 = styled.h2(
  props => css`
    text-align: center;
    background-color: ${props.bgColor};
    width: 100%;
    border-radius: 5px;
    color: ${props.color}
  `
)
