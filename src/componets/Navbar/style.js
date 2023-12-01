import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--colorPrimary);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--colorPrimary);
  color: white;
  padding: var(--padding);
  height: 64px;
  width: 100%;
  max-width: 1440px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${(props) => props.logo && "pointer"};
  .active {
    color: #ffc0c0;
  }
`;
const Logo = styled.img`
  width: 30px;
  margin-right: 12px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #fff;
`;
export { Container, Wrapper, Section, Logo, Link, Main };
