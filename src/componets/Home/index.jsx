import React from "react";
import { Container } from "./style";
import Carusel from "../Carusel";
import HouseCard from "../House card";

const Home = () => {
  return (
    <Container>
      <Carusel />
      <HouseCard />
    </Container>
  );
};
export default Home;
