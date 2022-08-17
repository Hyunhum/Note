import React from "react";
import styled from "styled-components";

const PageUl = styled.ul`
  float: center;
  list-style: none;
  text-align: center;
  color: black;
  padding: 1px;
`;

const PageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #263a6c;
  }
  &:focus::after {
    color: white;
    background-color: #263a6c;
  }
`;

const CurrentPageLi = styled.li`
  display: inline-block;
  font-size: 17px;
  font-weight: 600;
  padding: 5px;
  border-radius: 5px;
  width: 25px;
  color: white;
  background-color: #263a6c;
`;

export const Pagination = ({pageChange, page}) => {

  const pageNumbers = [];
  if (page < 10) { 
    for (let i = 1; i <= 10; i++) {
      pageNumbers.push(i);
    }
  } else {
    for (let i = page-8; i <= page+1; i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div>
      <nav>
        <PageUl className="pagination">
          {pageNumbers.map((number) => (
            number === page? 
            <CurrentPageLi key={number} className="page-item">
                {number}
            </CurrentPageLi>
            :
            <PageLi onClick={() => pageChange(number)} key={number} className="page-item">
                {number}
            </PageLi>
          ))}
        </PageUl>
      </nav>
    </div>
  );
};

export default Pagination;