# **Create Vue Router**

[![npm](https://img.shields.io/badge/build-stable-sucess?&style=flat)](https://github.com/itsjustlogan/microncss)
[![npm](https://img.shields.io/npm/v/create-vue-router?color=green)](https://www.npmjs.com/package/microncss)
[![npm](https://img.shields.io/badge/licence-MIT-blue?&style=flat)]()

Add vue router to a vite project or any other existing vue 3 project not using vue cli.

This will create a router folder in the **"src"** directory, and generate an index.js file that only needs to be modified to add your routes.

## **Installation**

npm package incoming.

## **Next Steps**

You will still need to modify your main.js file in the following ways:

```js
import { createApp } from 'vue'
// import router like shown below
import router from './router'
import App from './App.vue'

// Add .use(router) as shown below.
createApp(App).use(router).mount('#app')
```

You will also need to add:

```html
<router-view></router-view>
```

to your App.vue.

## **What this package generates:**

```js
import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  // {
  // path: '/',
  // name: 'Home',
  // component: () => import('../views/Home.vue'),
  // },
  // {
  // path: '/about',
  // name: 'About',
  // component: () => import ('../views/About.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
```

All routes use dynamic imports as per the [vue router docs](https://router.vuejs.org/guide/advanced/lazy-loading.html)
