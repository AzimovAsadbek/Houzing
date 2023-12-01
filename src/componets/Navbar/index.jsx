import React from "react";
import { Container, Link, Logo, Main, Section, Wrapper } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import logoImg from "../../assets/icons/logo.png";
import navbar from "../../utils/navbar";
import { Button } from "../Generic";
import Filter from "../Filter";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo="true">
            <Logo src={logoImg} /> <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={(isActive) => isActive && "avtive"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button type={"dark"} onClick={() => navigate("/signin")}>
              Sign In
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
    </Container>
  );
};
export default Navbar;
