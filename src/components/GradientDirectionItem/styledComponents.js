import styled from 'styled-components'

export const DirectionList = styled.li`
  margin: 10px;
  border-radius: 3px;
`
export const CustomButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 600;
  color: #334155;
  padding: 10px;
  border-radius: 5px;
  border: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  width: 100px;
  cursor: pointer;
`
