// import Main from '../components/main'
import home from '../view/single-page/home'

const routes = [
  // {
  //   path: '/',
  //   name: '_home',
  //   redirect: '/home',
  //   component: Main,
  //   children: [
  //     {
  //       path: '/home',
  //       name: 'home',
  //       component: () => import('@/view/single-page/home')
  //     }
  //   ]
  // }
  {
    path: '/',
    name: '_home',
    component: home
  },
  {
    path: '/home',
    name: 'home',
    component: home
  }
]

export default routes
