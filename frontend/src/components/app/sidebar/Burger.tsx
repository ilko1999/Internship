import styled from "styled-components";
import React, { useState } from "react";
import Navigation from "./navigation";
import { BurgerProps } from "./navigation"

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    left: 20px;
    z-index: 20;
    display: none;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;

  div {
    width: 32px;
    height: 2px;
    background-color: ${({ open }:BurgerProps) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

function Burger() {
  const [open, setOpen] = useState(false);

  return (<>
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
    <Navigation open={open} onClick={() => setOpen(!open)} />
    </>
  );
}

export default Burger;