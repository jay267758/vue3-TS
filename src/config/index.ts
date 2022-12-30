// import Home from '@/components/HelloWorld.vue';
import { RouteRecordRaw } from "vue-router"
// import UserLayout from '@/layouts/UserLayout.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'demo',
    component: () => import('@/views/DemoTs/DemoStore.vue'),
    meta: { title: '首页' },
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: '数据' },
    children: [
      {
        path: '/about/aa',
        name: 'about_aa',
        component: () => import('@/views/Form/DemoForm.vue'),
        meta: {
          title: '数据A'
        },
      },
      {
        path: '/about/ab',
        name: 'about_ab',
        component: () => import('@/views/Form/DemoForm2.vue'),
        meta: { title: '生命周期' }
      }
    ]
  },
  {
    path: '/aboutb',
    name: 'aboutb',
    meta: { title: '模型' },
    children: [
      {
        path: '/about/bb',
        name: 'about_bb',
        component: () => import('@/views/DemoTs/IndexTs.vue'),
        meta: {
          title: '模型A'
        },
      },
      {
        path: '/about/bc',
        name: 'about_bc',
        component: () => import('@/views/DemoTs/DemoStore.vue'),
        meta: { title: '模型B' }
      },
      {
        path: '/about/pinia',
        name: 'pinia',
        component: () => import('@/views/Pinia/Demo.vue'),
        meta: { title: 'Pinia' }
      }
    ]
  },
  {
    path: '/pass',
    name: 'pass',
    meta: { title: '传参' },
    children: [
      {
        path: '/pass/prop_emit',
        name: 'prop_emit',
        component: () => import('@/views/Pass/Index.vue'),
        meta: {
          title: '父子传参'
        },
      },
      {
        path: '/about/provide_inject',
        name: 'provide_inject',
        component: () => import('@/views/Demo3/DemoHome.vue'),
        meta: {
          title: '父子传参2'
        }
      }
    ]
  }
];

export default routes;