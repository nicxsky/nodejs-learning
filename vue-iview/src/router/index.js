import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import iView from 'iview'

Vue.use(Router)

const router = new Router({
  routes: routes
  // mode: 'history'
})

// const HOME_PAGE_NAME = 'home'

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(to => {
  iView.LoadingBar.finish()
})

export default router
