import styled from "styled-components";
import {ReactComponent as houses} from '../../assets/icons/houses.svg'
import {ReactComponent as filter} from '../../assets/icons/setting-lines.svg'
import {ReactComponent as search} from '../../assets/icons/search.svg'

const Main = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;

const Icons = styled.div``;
Icons.Search = styled(search)`
  margin-right: 8px;
`;
Icons.Filter = styled(filter)`
  margin-right: 8px;
`;
Icons.Houses = styled(houses)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
padding: 30px;
background-color: white;
border: 1px solid #E6E9EC;
`
const Section = styled.div`
  margin-bottom: 20px;
  margin-top: 10px;
  display: flex;
  gap: 20px;
`

export { Container, Icons, Main, MenuWrapper, Section };
