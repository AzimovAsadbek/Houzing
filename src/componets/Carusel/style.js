import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";

const Container = styled.div`
  height: 571px;
  position: relative;
`;

const Arrow = styled(arrow)`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 50%;
  transform: ${({ left }) => left && "rotate(180deg)"};
  left: ${({ left }) => !left && "20px"};
  right: ${({ left }) => left && "20px"};
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 571px;
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

Content.Title = styled.h1`
  font-family: Montserrat;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 109.091% */
  letter-spacing: -0.88px;
`;

Content.Desc = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

Content.Price = styled.div`
  color: #fff;

  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 128.571% */
  letter-spacing: -0.56px;
`;
export { Container, Arrow, Img, Blur, Content };
