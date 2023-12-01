import styled from "styled-components";
import { ReactComponent as bad } from "../../assets/icons/bad.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/garage.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  width: 380px;
  height: 429px;
  border-radius: 3px;
  margin: 100px;
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
`;

const Content = styled.div`
  padding: 0 20px;
  padding-top: 24px;
  background-color: white;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`;
Details.Item = styled.div`
  display: flex;
  flex-direction: ${({ love }) => (love ? "row" : "column")};
  align-items: ${({ foter }) => !foter && "center"};
  gap: 7px;
`;
const Icons = styled.div``;

Icons.Bad = styled(bad)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Love = styled(love)`
  width: 15px;
  height: 15px;
  padding: 10px;
  background-color: #F6F8F9;
  border-radius: 50%;
  color: #696969;
  cursor: pointer;
  &:active{
    transform: scale(0.9);
  }
`;
Icons.Resize = styled(resize)`
  width: 15px;
  height: 15px;
  padding: 10px;
`;

const Footer = styled.div`
  border-top: 1px solid #e6e9ec;
  padding: 8px 20px;
  display: flex;
  justify-content: space-between;
`;

export { Container, Img, Content, Details, Icons, Footer };
