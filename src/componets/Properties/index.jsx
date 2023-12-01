import React, { useEffect, useState } from "react";
import { Container } from "./style";
// import HouseCard from "../House card";

const { REACT_APP_BASE_URL: url } = process.env;
const Properties = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      });
  }, []);
  console.log(data);
  return (
    <Container>
      {/* {data.map(() => (
        <HouseCard />
      ))} */}
    </Container>
  );
};
export default Properties;
