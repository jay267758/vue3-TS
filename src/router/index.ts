import { createRouter, createWebHistory } from "vue-router";
import routes from '@/config';
import { ElMessage } from "element-plus";
import pinia from '@/pinia';
import useToken from '@/pinia/token';

const tokenState = useToken(pinia);

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  const cookies = document.cookie;
  let token = '';
  cookies.split('; ').forEach(item => {
    if (item.indexOf('token=') !== -1) {
      const tokens = item.split('=');
      token = tokens[1];
      tokenState.token = token;
    }
  });

  if (to.path === '/login') {
    if (tokenState.token || token) {
      next(from.path);
    } else {
      next();
    }
  } else {
    if (!tokenState.token || !token) {
      next('/login');
    } else {
      next();
    }
  }
});

export default router;