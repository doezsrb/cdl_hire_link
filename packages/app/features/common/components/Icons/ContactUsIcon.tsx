import Svg, { Circle, Rect, Path, G, Polygon } from 'react-native-svg'
const ContactUsIcon = ({ color, width }: { color: any; width?: number }) => {
  return (
    <Svg
      fill={color}
      height="100%"
      width={width}
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enable-background="new 0 0 24 24"
    >
      <G id="Contact-Us-Filled">
        <Path d="M1,1v17h4v4l8.5-4H22V1H1z M8,11H5V8h3V11z M13,11h-3V8h3V11z M18,11h-3V8h3V11z" />
      </G>
    </Svg>
  )
}

export default ContactUsIcon
