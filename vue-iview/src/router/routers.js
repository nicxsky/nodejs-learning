import Main from '../components/main'
// import home from '../view/single-page/home'

const routes = [
  // {
  //   path: '/',
  //   name: '_home',
  //   component: home
  // },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: home
  // }

  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  }
]

export default routes
