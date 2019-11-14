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
  },
  {
    path: '',
    name: 'doc',
    meta: {
      title: '文档',
      // href: 'https://lison16.github.io/iview-admin-doc/#/',
      href: 'https://www.baidu.com',
      icon: 'ios-book'
    }
  },
  {
    path: '/join',
    name: 'join',
    component: Main,
    meta: {
      hideInBread: true
    },
    children: [
      {
        path: 'join_page',
        name: 'join_page',
        meta: {
          icon: '_qq',
          title: 'QQ群'
        },
        component: () => import('@/view/join-page.vue')
      }
    ]
  },
  {
    path: '/components',
    name: 'components',
    meta: {
      icon: 'logo-buffer',
      title: '组件'
    },
    component: Main,
    children: [
      {
        path: 'count_to_page',
        name: 'count_to_page',
        meta: {
          icon: 'md-trending-up',
          title: '数字渐变'
        },
        component: () => import('@/view/components/count-to/count-to.vue')
      },
      {
        path: 'count_to_page2',
        name: 'count_to_page2',
        meta: {
          icon: 'md-trending-up',
          title: '数字渐变2'
        },
        component: () => import('@/view/components/count-to/count-to.vue')
      }
    ]
  }
]

export default routes
