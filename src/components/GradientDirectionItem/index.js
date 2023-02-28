import {DirectionList, CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDetails, renderDirection, isActive} = props
  const {value, displayText} = gradientDetails

  const onClickRenderDirection = () => {
    renderDirection(value)
  }

  return (
    <DirectionList>
      <CustomButton isActive={isActive} onClick={onClickRenderDirection}>
        {displayText}
      </CustomButton>
    </DirectionList>
  )
}

export default GradientDirectionItem
