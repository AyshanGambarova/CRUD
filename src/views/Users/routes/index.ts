import Users from '../index.vue'

export default [
  {
    path: '/',
    name: 'users',
    component: Users,
    meta: {
      needsToken: true
    }
  }
]
