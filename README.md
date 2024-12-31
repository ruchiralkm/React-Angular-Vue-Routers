# React-Angular-Vue-Routers
How to implement the React-Angular-Vue- Rotings
<hr/>

<h1>Vue JS</h1>
<br/>
<img src="https://www.wisnet.com/wp-content/uploads/2021/07/vue-js-logo-png-transparent-png.png"><br/>

<h3>Step 1: Create a New Vue Project</h3>

```bash
npm install -g @vue/cli
```
<h3>Step 2: Install Vue Router</h3>

```bash
npm install vue-router
```

<h3>Step 3: Set Up Vue Router</h3>
<p>Create a new file named <strong> router.js </strong> in the src directory.</p>

```bash
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from './components/Home.vue';
import About from './components/About.vue';

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

```

<h3>Step 4: Create Vue Components</h3>
<p>In the src/components folder, create the following two files</p>
<strong><p>Home.vue</p></strong>

```bash
<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
```
<strong><p>About.vue</p></strong>

```bash
<template>
  <div>
    <h1>About Page</h1>
    <p>Learn more about us on this page.</p>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>
```

<h3>Step 5: Integrate the Router into Your Vue App</h3>
<p>Open <strong> main.js </strong> in the src directory.</p>

```bash
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Use the router
app.use(router);

app.mount('#app');

```

<h3>Step 6: Update <strong> App.vue </strong> </h3>

```bash
<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
nav ul {
  list-style: none;
  padding: 0;
}
nav li {
  display: inline;
  margin-right: 10px;
}
</style>


```
