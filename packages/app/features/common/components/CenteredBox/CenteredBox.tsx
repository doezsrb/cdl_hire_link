import { Box } from 'dripsy'
import { Dimensions } from 'react-native'

const CenteredBox = ({ children }: any) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: Dimensions.get('window').height / 1.5,

        zIndex: 3,
      }}
    >
      {children}
    </Box>
  )
}

export default CenteredBox
