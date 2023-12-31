import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid white",
        color: "white",
      };
    case "light":
      return {
        background: "#FFFFFF",
        border: "1px solid #E6E9EC",
        color: "#0D263B",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "white",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "white",
      };
  }
};
const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e6e9ec;
  outline: none;
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "43px")};
  width: ${({ width }) => (width ? `${width}px` : "94%")};
  min-width: 50px;
  border-radius: 2px;
  border: 1px solid #e6e9ec;
  padding-left: ${({ icon }) => (icon ? "35px" : "20px")};
  /* ${getType} */
`;

const Wrapper = styled.div`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  position: relative;
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  position: absolute;
  left: 11px;
  top: 15px;
`;



export { Container, Wrapper, Icon, };
