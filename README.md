# React-Angular-Vue-Routers
How to implement the React-Angular-Vue- Rotings
<hr/>
React.JS
<br/>

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
