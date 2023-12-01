import React from "react";
import { Container, Content, Details, Footer, Icons, Img } from "./style";
import noimg from "../../assets/img/noimg.jpg";

const HouseCard = ({ url, title, bed, bath, garage, ruler, info }) => {
  return (
    <Container>
      <Img src={url || noimg} alt="Eror" />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Bad />
            <div className="info">{bed || 0} Beds</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">{bath || 0} Baths</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">{garage || 0 } Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">{ruler || 0} Sq Ft</div>
          </Details.Item>
        </Details>
      </Content>
      <Footer>
        <Details.Item foter="true">
          <div className="info">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
        </Details.Item>
        <Details.Item love="true">
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Footer>
    </Container>
  );
};

export default HouseCard;
