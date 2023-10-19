import Svg, { Circle, Rect, Path, G, Polygon } from 'react-native-svg'
const FavoriteIcon = ({ color }: { color: any }) => {
  return (
    <Svg
      x="0px"
      y="0px"
      width="100%"
      height="100%"
      viewBox="0 0 122.88 116.864"
      enable-background="new 0 0 122.88 116.864"
      fill={color}
    >
      <G>
        <Polygon
          fill-rule="evenodd"
          clip-rule="evenodd"
          points="61.44,0 78.351,41.326 122.88,44.638 88.803,73.491 99.412,116.864 61.44,93.371 23.468,116.864 34.078,73.491 0,44.638 44.529,41.326 61.44,0"
        />
      </G>
    </Svg>
  )
}

export default FavoriteIcon
