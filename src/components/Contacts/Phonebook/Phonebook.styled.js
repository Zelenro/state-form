import styled from 'styled-components';

export const ContactsList = styled.div`
  max-width: 500px;
  // margin: 0 auto;
`;
export const ContactList = styled.ul`
  padding: 0;
  margin: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:last-child {
    margin-bottom: 0;
  }

  button {
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #c82333;
    }
  }
`;
