import { Text, useSx, View, H1, P, Row, A, useDripsyTheme } from 'dripsy'
import type { Theme } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { Button, ColorValue, Pressable } from 'react-native'

export function HomeScreen() {
  const sx = useSx()
  const { theme } = useDripsyTheme()

  return (
    <View sx={{ flex: 1 }}>
      <Pressable>
        <View sx={theme.buttons.default}>
          <Text>Test</Text>
        </View>
      </Pressable>
      <Pressable>
        <View sx={theme.buttons.small}>Test2</View>
      </Pressable>
    </View>
  )
}
