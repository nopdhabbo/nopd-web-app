const navigationMenu = [
  { name: 'Home', value: '/' },
  { name: 'About Us', value: '/aboutus' },
  {
    name: 'Ranks', value: '/ranks', subItems: [
      { name: 'Rank List', value: '/ranks/list' },
      { name: 'Rank Calculator', value: '/ranks/calculator' },
      { name: 'Command Chain', value: '/ranks/chain' }
    ]
  },
  // {
  //   name: 'Resources', value: '/resources',
  //   subItems: [
  //     { name: 'Scripts', value: '/resources/scripts' },
  //     { name: 'Discord', value: '/resources/discord' },
  //     { name: 'Portal', value: '/resources/portal' },
  //     { name: 'NOPD Duties & Work', value: '/resources/duties' }
  //   ]
  // },
  // {
  //   name: 'Policies',
  //   value: '/policies',
  //   subItems: [
  //     { name: 'Code of Conduct', value: '/policies/conduct' },
  //     { name: 'Dress Code Guidelines', value: '/policies/dress' },
  //     { name: 'Bullying Policy', value: '/policies/bullying' },
  //     { name: 'Disciplinary Actions', value: '/policies/disciplinary' }
  //   ]
  // },
  // {
  //   name: 'Operations', value: '/operations',
  //   subItems: [
  //     {
  //       name: 'Pay System', value: '/operations/pay', subItems: [
  //         { name: 'Pay Information', value: '/operations/pay/info' },
  //         { name: 'Pay Ban List', value: '/operations/pay/ban' },
  //         { name: 'Daily Pay Regulation', value: '/operations/pay/daily' },
  //         { name: 'Pay Bonus', value: '/operations/pay/bonus' }
  //       ]
  //     },
  //     { name: 'Finance Team', value: '/operations/finance' },
  //     { name: 'Diplomacy', value: '/operations/diplomacy' },
  //     { name: 'Investors', value: '/operations/investors' }
  //   ]
  // },
  // { name: 'Affairs', value: '/affairs' }
];


export default navigationMenu;