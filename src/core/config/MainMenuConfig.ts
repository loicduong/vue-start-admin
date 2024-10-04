const MainMenuConfig = [
  {
    heading: 'Dashboards',
    pages: [
      {
        heading: 'Start',
        route: '/dashboards/start',
      },
      {
        heading: 'Extended',
        route: '/dashboards/extended',
        pro: true,
      },
      {
        heading: 'Light',
        route: '/dashboards/light',
      },
      {
        heading: 'Compact',
        route: '/dashboards/compact',
        pro: true,
      },
    ],
  },
  {
    heading: 'Apps',
    pages: [
      {
        heading: 'Private Chat',
        route: '/private-chat',
        pro: true,
      },
      {
        heading: 'Group Chat',
        route: '/group-chat',
        pro: true,
      },
      {
        heading: 'Drawer Chat',
        route: '/drawer-chat',
        pro: true,
      },
      {
        heading: 'Shop 1',
        route: '/shop1',
        pro: true,
      },
      {
        heading: 'Shop 2',
        route: '/shop2',
        pro: true,
      },
      {
        heading: 'Shop Product',
        route: '/product',
        pro: true,
      },
    ],
  },
  {
    heading: 'General',
    pages: [
      {
        heading: 'FAQ',
        route: '/faq',
      },
      {
        heading: 'Pricing',
        route: '/pricing',
      },
      {
        heading: 'Invoice',
        route: '/invoice',
      },
      {
        heading: 'Login',
        route: '/login',
        pro: true,
      },
      {
        heading: 'Wizard',
        route: '/wizard',
        pro: true,
      },
      {
        heading: 'Error',
        route: '/error',
      },
    ],
  },
  {
    heading: 'Profile',
    pages: [
      {
        heading: 'Overview',
        route: '/overview',
      },
      {
        heading: 'Account',
        route: '/account',
        pro: true,
      },
      {
        heading: 'Settings',
        route: '/settings',
        pro: true,
      },
    ],
  },
  {
    heading: 'Resources',
    pages: [
      {
        heading: 'Documentation',
        route: '/documentation/doc-overview',
      },
      {
        heading: 'Layout builder',
        route: '/builder',
        pro: true,
      },
      {
        heading: 'Changelog',
        route: '/documentation/changelog',
      },
    ],
  },
]

export default MainMenuConfig
