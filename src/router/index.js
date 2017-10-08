import Vue from 'vue'
import Router from 'vue-router'
import Rank from '../components/rank/rank.vue'
// import Recommend from '../components/recommend/recommend.vue'
// import Search from '../components/search/search.vue'
// import Singer from '../components/singer/singer.vue'
// import SinnderDetail from '../components/singer-detail/singer-detail.vue'
// import Disc from '../components/disc/disc.vue'
// import TopList from '../components/top-list/top-list.vue'
// import UserConter from '../components/user-center/user-center.vue'

const Recommend = resolve => {
  import('components/recommend/recommend').then((model) => {
    resolve(model)
  })
}
const Search = resolve => {
  import('components/search/search').then((model) => {
    resolve(model)
  })
}
const Singer = resolve => {
  import('components/singer/singer').then((model) => {
    resolve(model)
  })
}
const SinnderDetail = resolve => {
  import('components/singer-detail/singer-detail').then((model) => {
    resolve(model)
  })
}
const Disc = resolve => {
  import('components/disc/disc').then((model) => {
    resolve(model)
  })
}
const TopList = resolve => {
  import('components/top-list/top-list').then((model) => {
    resolve(model)
  })
}
const UserConter = resolve => {
  import('components/user-center/user-center').then((model) => {
    resolve(model)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      name: 'rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SinnderDetail
        }
      ]
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SinnderDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserConter
    }
  ]
})
