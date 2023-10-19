import Svg, { Circle, Rect, Path, G, Polygon } from 'react-native-svg'
const BurgerIcon = ({ color }: { color: any }) => {
  return (
    <Svg width="40" height="40" viewBox="0 -2 32 32">
      <G
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G
          id="Icon-Set-Filled"
          transform="translate(-310.000000, -1039.000000)"
          fill={color}
        >
          <Path
            d="M338,1049 L314,1049 C311.791,1049 310,1050.79 310,1053 C310,1055.21 311.791,1057 314,1057 L338,1057 C340.209,1057 342,1055.21 342,1053 C342,1050.79 340.209,1049 338,1049 L338,1049 Z M338,1059 L314,1059 C311.791,1059 310,1060.79 310,1063 C310,1065.21 311.791,1067 314,1067 L338,1067 C340.209,1067 342,1065.21 342,1063 C342,1060.79 340.209,1059 338,1059 L338,1059 Z M314,1047 L338,1047 C340.209,1047 342,1045.21 342,1043 C342,1040.79 340.209,1039 338,1039 L314,1039 C311.791,1039 310,1040.79 310,1043 C310,1045.21 311.791,1047 314,1047 L314,1047 Z"
            id="hamburger-2"
          ></Path>
        </G>
      </G>
    </Svg>
  )
}

export default BurgerIcon
