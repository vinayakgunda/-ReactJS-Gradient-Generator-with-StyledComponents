import styled from 'styled-components'

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(${props => props.bgColor});
`

export const GradientDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
`

export const SubHeading = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: 400;
`

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0px;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  margin-top: 30px;
`

export const ColorPicker = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const CustomLabel = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
`
export const CustomInput = styled.input`
  margin-top: 10px;
  border: none;
  height: 8vh;
  width: 100px;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  background-color: #00c9b7;
  border: none;
  border-radius: 8px;
  height: 5vh;
  width: 100px;
  align-self: center;
  margin-top: 30px;
  cursor: pointer;
  padding: 10px;
  color: #1e293b;
`
