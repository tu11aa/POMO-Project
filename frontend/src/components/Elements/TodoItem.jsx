import React from "react";
import styled from "styled-components";

const TodoItem = ({ id, title, completed }) => {
  return (
    <Item>
      <div>
        <input type="checkbox" className="mr-3" checked={completed}></input>
        {title}
      </div>
      <btn className="btn btn-danger"> Delete </btn>
    </Item>
  );
};

export default TodoItem;

const Item = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 0 auto;
  margin-top: 20px;
  /* padding: 70px 0 30px 0; */
  color: black;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: medium;
`;
