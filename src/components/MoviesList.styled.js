import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3px;
  margin: 0;
  padding: 0;
  li {
    width: 100%;
    text-align: center;
    font-size: 1.5em;
    color: crimson;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    border: black solid 2px;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: silver;
  }
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  background-color: silver;
  text-align: center;

  img {
    width: 100%;
  }

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: green;
  }
`;
