import React from "react";
import styled from "styled-components";
import { node, number } from "prop-types";

/* ListItems
 *
 * A container to hold product cards
 */
const ListItems = ({ columns = 2, children }) => {
  return <StyledListItems columns={columns}>{children}</StyledListItems>;
};

ListItems.propTypes = {
  children: node,
  columns: number,
};

const StyledListItems = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    `repeat(${columns}, minmax(0, 1fr))`};
  gap: 32px 24px;
`;

export default ListItems;
