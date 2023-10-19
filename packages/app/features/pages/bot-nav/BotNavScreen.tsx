import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../home/home-screen'
import ContactScreen from '../contact-us/contact-screen'
import { Box, useDripsyTheme } from 'dripsy'
import HomeIcon from 'app/features/common/components/Icons/HomeIcon'
import FavoriteIcon from 'app/features/common/components/Icons/FavoriteIcon'
import AvailableJobsScreen from '../jobs/jobs-screen'
import JobsIcon from 'app/features/common/components/Icons/JobsIcon'
import FavoriteJobsScreen from '../favorite-jobs/favorite-jobs-screen'

import { useEffect } from 'react'
import { useRouter } from 'solito/router'
const Tab = createBottomTabNavigator()

const BotNavScreen = ({ navigation }) => {
  const { theme } = useDripsyTheme()
  const router = useRouter()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          borderTopColor: theme.colors.secondary,
        },
      }}
    >
      <Tab.Screen
        options={{
          title: 'HOME',
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? theme.colors.secondary : 'white'} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: 'AVAILABLE JOBS',
          tabBarIcon: ({ focused }) => (
            <JobsIcon color={focused ? theme.colors.secondary : 'white'} />
          ),
        }}
        name="Available Jobs"
        component={AvailableJobsScreen}
      />
      <Tab.Screen
        options={{
          title: 'FAVORITE JOBS',
          tabBarIcon: ({ focused }) => (
            <FavoriteIcon color={focused ? theme.colors.secondary : 'white'} />
          ),
        }}
        name="Favorite Jobs"
        component={FavoriteJobsScreen}
      />
    </Tab.Navigator>
  )
}

export default BotNavScreen
