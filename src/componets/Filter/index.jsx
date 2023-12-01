import React, { useRef } from "react";
import { Container, Icons, Main, MenuWrapper, Section } from "./style";
import { Button, Input } from "../Generic";
import Dropdown from "antd/es/dropdown/dropdown";

const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  const minPriceRef = useRef();
  const maxPriceRef = useRef();
  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input ref={countryRef} placeholder="Country" />
        <Input ref={regionRef} placeholder="Region" />
        <Input ref={cityRef} placeholder="City" />
        <Input ref={zipRef} placeholder="Zip code" />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomsRef} placeholder="Rooms" />
        <Input ref={sizeRef} placeholder="Size" />
        <Input ref={sortRef} placeholder="Sort" />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minPriceRef} placeholder="Min price" />
        <Input ref={maxPriceRef} placeholder="Max price" />
      </Section>
    </MenuWrapper>
  );

  return (
    <Main>
      <Container>
        <Input
          placeholder={"Enter na address, neighborhood, city, or ZIP code"}
          icon={<Icons.Houses></Icons.Houses>}
        />
        <Dropdown
          dropdownRender={() => menu}
          trigger={"click"}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
        >
          <div>
            <Button type={"light"}>
              {" "}
              <Icons.Filter></Icons.Filter> Advanced
            </Button>
          </div>
        </Dropdown>
        <Button>
          <Icons.Search></Icons.Search> Search
        </Button>
      </Container>
    </Main>
  );
};
export default Filter;
