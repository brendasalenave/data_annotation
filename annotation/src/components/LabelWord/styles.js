import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;  
  margin: 5px;
  border: 1px solid ${props => props.color ? props.color : '#444444'};
  border-radius: 4px;

  button {
    padding: 5px 15px;
    border: 0;
    border-radius: 4px;
    background: ${props => props.background ? props.background : '#ffffff'};
    color: ${props => props.color ? props.color : '#444444'};
    
  }
`;
