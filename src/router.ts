import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Import components here
import IndexComponent from './components/index.vue'
import HollowComponent from './components/hollow.vue'
import TerritoryComponent from './components/territory.vue'
import RulesComponent from './components/rules.vue'
import AgingComponent from './components/aging.vue'
import NameComponent from './components/nameguide.vue'

// Routing
const router = new Router({
  routes: [
    // Index (default page)
    {
      path: '/',
      name: 'Index',
      component: IndexComponent
    },
    {
      path: '/hollow',
      name: 'DappleClan Hollow',
      component: HollowComponent
    },
    {
      path: '/territory',
      name: 'Territory',
      component: TerritoryComponent
    },
    {
      path: '/rulesandterms',
      name: 'Rules & Terms',
      component: RulesComponent
    },
    {
      path: '/characteraging',
      name: 'Character Aging',
      component: AgingComponent
    },
    {
      path: '/nameguide',
      name: 'Name Guide',
      component: NameComponent
    }
  ]
})

export default router
