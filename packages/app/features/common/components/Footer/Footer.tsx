import { Box, Text, useSx } from 'dripsy'
import { Dimensions, Platform, Pressable, TouchableOpacity } from 'react-native'
import FacebookIcon from '../Icons/FacebookIcon'
import InstaIcon from '../Icons/InstaIcon'
import Logo from '../Logo/logo'
import { SolitoImage } from 'solito/image'
import UpArrowIcon from '../Icons/UpArrowIcon'
import { useRouter } from 'solito/router'
import routes from '../../routes'

const Footer = ({
  scrollToTop,
  navigation,
}: {
  scrollToTop: Function
  navigation: any
}) => {
  const sx = useSx()
  const router = useRouter()
  return (
    <Box
      sx={{
        shadowOffset: { width: 0, height: -5 },
        shadowColor:
          Platform.OS == 'web'
            ? 'secondary'
            : Platform.OS == 'ios'
            ? 'secondary'
            : 'black',
        shadowRadius: 15,
        shadowOpacity: 0.8,

        elevation: 20,
        flexDirection: 'column',
        backgroundColor: 'white',
        display: 'flex',
        paddingBottom: 20,
      }}
    >
      <Box
        sx={{
          width: '100%',
          paddingTop: 20,
          backgroundColor: 'white',
          display: 'flex',
          gap: 10,
          justifyContent: ['center', 'space-around'],
          flexDirection: ['column', 'column', 'column', 'column', 'row'],
        }}
      >
        <Box sx={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Logo blue />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchableOpacity style={sx({ width: ['20%', '30%'] })}>
              <FacebookIcon width={'100%'} />
            </TouchableOpacity>
            <TouchableOpacity style={sx({ width: ['20%', '30%'] })}>
              <InstaIcon width={'100%'} />
            </TouchableOpacity>
          </Box>
        </Box>
        <Box
          sx={{
            flexDirection: 'row',
            flex: 1,

            justifyContent: 'center',
            gap: 40,
          }}
        >
          <Box sx={{ gap: 10 }}>
            <Text
              sx={{
                fontSize: 25,
                color: 'primary',
                fontWeight: 'bold',
              }}
            >
              NAVIGATION
            </Text>
            {routes.map((it: any, index: any) => {
              if (it.hidden) return null
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    console.log('CLICK')
                    if (Platform.OS == 'web') {
                      router.push(it.webLink)
                    } else {
                      navigation.navigate(it.mobileName)
                    }
                  }}
                >
                  <Text sx={{ color: 'primary' }}>
                    {it.title.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              )
            })}
            {/*    <TouchableOpacity

              onPress={() => {
                if (Platform.OS == 'web') {
                } else {
                }
              }}
            >
              <Text sx={{ color: 'primary' }}>AVAILABLE JOBS</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text sx={{ color: 'primary' }}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text sx={{ color: 'primary' }}>APPLY AS A DRIVER</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text sx={{ color: 'primary' }}>APPLY AS A CARRIER</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text sx={{ color: 'primary' }}>ABOUT US</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text sx={{ color: 'primary' }}>CARRIERS</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text sx={{ color: 'primary' }}>CONTACT US</Text>
            </TouchableOpacity> */}
          </Box>
          <Box sx={{ gap: 10 }}>
            <Text
              sx={{
                fontSize: 25,
                color: 'primary',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              ABOUT US
            </Text>
            <Text sx={{ color: 'primary' }}>+123 1323 13213</Text>
            <Text sx={{ color: 'primary' }}>info@cdlhirelink.com</Text>
            <Text sx={{ color: 'primary' }}>1234 Street, City, State</Text>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Text sx={{ fontSize: 30, fontWeight: 'bold', color: 'primary' }}>
            GET OUR APP
          </Text>
          <SolitoImage
            height={100}
            width={200}
            alt="google-play-logo"
            src={
              Platform.OS == 'web'
                ? '/images/playicon.png'
                : require('../../../../../../apps/expo/images/playicon.png')
            }
          />
          <SolitoImage
            height={100}
            width={230}
            alt="ios-logo"
            src={
              Platform.OS == 'web'
                ? '/images/iosicon.png'
                : require('../../../../../../apps/expo/images/iosicon.png')
            }
          />
        </Box>
      </Box>
      <Box
        sx={{
          flexDirection: 'row',
          display: 'flex',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: 2,
            flex: 1,
            backgroundColor: 'secondary',
          }}
        />
        <Box sx={{}}>
          <TouchableOpacity onPress={() => scrollToTop()}>
            <UpArrowIcon />
          </TouchableOpacity>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: 2,
            flex: 1,
            backgroundColor: 'secondary',
          }}
        />
      </Box>
      <Text sx={{ color: 'secondary', textAlign: 'center', mt: 10 }}>
        Copyright © 2023 CDLHireLink / All rights reserved
      </Text>
    </Box>
  )
}

export default Footer
