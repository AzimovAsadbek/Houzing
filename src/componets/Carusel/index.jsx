import React, { useRef } from "react";
import { Arrow, Blur, Container, Content, Img } from "./style";
import { Carousel } from "antd";
import img1 from "../../assets/img/house1.png";
import img2 from "../../assets/img/house2.png";

const GenCarusel = () => {
  const slider = useRef();

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    else if (name === "left") slider.current.prev();
  };

  return (
    <Container>
      <Carousel ref={slider}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc className="subtitle">
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Desc>
        <Content.Price className="subtitle">$5,250/mo</Content.Price>
      </Content>
      <Arrow data-name="left" onClick={onMove} />
      <Arrow onClick={onMove} data-name="right" left="true" />
    </Container>
  );
};

export default GenCarusel;
