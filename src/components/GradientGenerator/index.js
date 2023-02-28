import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientContainer,
  GradientDetails,
  Heading,
  SubHeading,
  UnorderedList,
  ColorPickerContainer,
  ColorPicker,
  CustomLabel,
  CustomInput,
  GenerateButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    bgColor: `to ${gradientDirectionsList[0].value},#8ae323, #014f7b`,
  }

  onFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onGenerateColor = () => {
    const {firstColor, secondColor, activeGradientDirection} = this.state

    this.setState({
      bgColor: `to ${activeGradientDirection}, ${firstColor}, ${secondColor}`,
    })
  }

  renderDirection = direction => {
    this.setState({activeGradientDirection: direction})
  }

  renderGradientDirection = () => {
    const {activeGradientDirection} = this.state
    return (
      <>
        <SubHeading>Choose Direction</SubHeading>
        <UnorderedList>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              gradientDetails={eachDirection}
              key={eachDirection.directionId}
              renderDirection={this.renderDirection}
              isActive={activeGradientDirection === eachDirection.value}
            />
          ))}
        </UnorderedList>
      </>
    )
  }

  renderColor = () => {
    const {firstColor, secondColor} = this.state
    return (
      <>
        <SubHeading>Pick the Colors</SubHeading>
        <ColorPickerContainer>
          <ColorPicker>
            <CustomLabel>{firstColor}</CustomLabel>
            <CustomInput
              type="color"
              onChange={this.onFirstColor}
              value={firstColor}
            />
          </ColorPicker>
          <ColorPicker>
            <CustomLabel>{secondColor}</CustomLabel>
            <CustomInput
              type="color"
              onChange={this.onSecondColor}
              value={secondColor}
            />
          </ColorPicker>
        </ColorPickerContainer>
        <GenerateButton type="button" onClick={this.onGenerateColor}>
          Generate
        </GenerateButton>
      </>
    )
  }

  render() {
    const {bgColor} = this.state
    return (
      <GradientContainer bgColor={bgColor} data-testid="gradientGenerator">
        <GradientDetails>
          <Heading>Generate a CSS Color Gradient</Heading>
          {this.renderGradientDirection()}
          {this.renderColor()}
        </GradientDetails>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
