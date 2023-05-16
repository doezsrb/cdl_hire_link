import { View, Text } from 'dripsy'
import { Pressable } from 'react-native'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id, setId] = useParam('id')

  return (
    <View
      sx={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        sx={{ textAlign: 'center', mb: 15, fontWeight: 'bold' }}
      >{`User ID: ${id}`}</Text>
      <Pressable
        onPress={() => {
          setId('23')
        }}
      >
        <Text>Change USER</Text>
      </Pressable>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
