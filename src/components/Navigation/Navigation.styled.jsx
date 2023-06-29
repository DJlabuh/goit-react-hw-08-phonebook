import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const RightMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;

  li:not(:last-child) {
    margin-right: 10px;
  }
`;

export const LeftMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  display: inline-block;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: bold;
`;
