import styled from 'styled-components';
const TodoForm = () => {

	return (
        <>
        <Form>
            <label className="font13">Add a task</label>
            <input type="text" id="fname" name="fname" className="font20 extraBold" />
        </Form>
        <AddButton type="submit" value="Add Task" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
        </>
        
	);
};

export default TodoForm;

const Form = styled.form`

  text-align: left;
  padding: 70px 0 30px 0;
  input,
  textarea {
    margin-top: 10px;
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: 1px solid #000000;
    box-shadow: none;
    height: 70px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 50px) {
    padding: 30px 0;
  }
`;
const AddButton = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;