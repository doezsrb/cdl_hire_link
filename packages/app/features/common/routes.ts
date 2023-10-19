export type UniversalRoute = {
  mobileName: string
  title: string
  component: any
  initialParams: any
  webLink: string
  webButton: boolean
  hidden: boolean
  footerOnly: boolean
  webOnly: boolean
  mobOnly: boolean
}

const routes: UniversalRoute[] = [
  {
    mobileName: 'bot-nav',
    title: 'Home',
    component: 'BotNavScreen',
    initialParams: {},
    webLink: '',
    webButton: false,
    hidden: false,
    footerOnly: false,
    webOnly: false,
    mobOnly: true,
  },
  {
    mobileName: 'favorite-jobs',
    title: 'Favorite Jobs',
    component: 'FavoriteJobsScreen',
    initialParams: {},
    webLink: '',
    webButton: false,
    hidden: true,
    footerOnly: false,
    webOnly: false,
    mobOnly: true,
  },
  {
    mobileName: 'home',
    title: 'Home',
    component: 'HomeScreen',
    initialParams: {},
    webLink: '/',
    webButton: false,
    hidden: false,
    footerOnly: false,
    webOnly: true,
    mobOnly: false,
  },
  {
    mobileName: 'available-jobs',
    title: 'Jobs',
    component: 'AvailableJobsScreen',
    initialParams: {},
    webLink: '/available-jobs',
    webButton: false,
    hidden: false,
    footerOnly: false,
    webOnly: true,
    mobOnly: false,
  },
  {
    mobileName: 'job',
    title: 'Job',
    component: 'JobScreen',
    initialParams: { job: 'none' } as any,
    webLink: '',
    hidden: true,
    webButton: false,
    footerOnly: false,
    webOnly: false,
    mobOnly: false,
  },
  {
    mobileName: 'apply/driver',
    title: 'Apply as a driver',
    component: 'ApplyScreen',
    initialParams: { as: 'driver' },
    webLink: '/apply/driver',
    webButton: true,
    hidden: false,
    footerOnly: false,
    webOnly: false,
    mobOnly: false,
  },
  {
    mobileName: 'apply/carrier',
    title: 'Apply as a carrier',
    component: 'ApplyScreen',
    initialParams: { as: 'carrier' },
    webLink: '/apply/carrier',
    webButton: true,
    hidden: false,
    footerOnly: false,
    webOnly: false,
    mobOnly: false,
  },
  {
    mobileName: 'about-us',
    title: 'About Us',
    component: 'AboutScreen',
    initialParams: {},
    webLink: '/about-us',
    webButton: false,
    hidden: false,
    footerOnly: false,
    webOnly: false,
    mobOnly: false,
  },
  {
    mobileName: 'contact-us',
    title: 'Contact Us',
    component: 'ContactScreen',
    initialParams: {},
    webLink: '/contact-us',
    webButton: false,
    hidden: false,
    footerOnly: false,
    webOnly: false,
    mobOnly: false,
  },
  {
    mobileName: 'privacy-policy',
    title: 'Privacy Policy',
    component: 'PrivacyPolicyScreen',
    initialParams: {},
    webLink: '/privacy-policy',
    webButton: false,
    hidden: false,
    footerOnly: true,
    webOnly: true,
    mobOnly: false,
  },
]

export default routes
