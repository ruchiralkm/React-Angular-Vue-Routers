# React-Angular-Vue-Routers
<h2>How to implement the React-Vue-Angular Rotings

<img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Light.svg" style="width:30px; height:30px;">
<img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/VueJS-Light.svg" style="width:30px; height:30px;">
<img src="https://raw.githubusercontent.com/Scar1109/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/Angular-Light.svg" style="width:30px; height:30px;">

</h2>

<h2>Download above projects and install the node modules</h2>

```bash
cd <foleder name> npm install
```


<hr/>

<h1>1. React JS</h1>
<br/>
<img src="https://miro.medium.com/v2/resize:fit:700/0*TKd6lGfS5ESE2Y1Y.png" style="width:500px; height:auto;"><br/>

<h3>Step 1: Set Up a React Project</h3>

<h3>Step 2: Install React Router</h3>

```bash
npm install react-router-dom
```

<h3>Step 3: Set Up React Router</h3>
<p>Open the src folder in your project and Create a new folder <b>Pages</b> and Create new file named <b>NavBar.jsx </b> to configure your routes</p>
<strong><p>NavBar.jsx</p></strong>

```bash
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
        <li style={{ marginRight: "20px" }}>
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "blue" }}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

```

<h3>Step 4: Create React Components</h3>
<p>In the src folder --> Pages folder, Add the following two files</p>
<strong><p>Home.jsx</p></strong>

```bash
import React from "react";

const Home = () => {
  return <div>Home Page</div>;
};

export default Home;

```

<strong><p>About.jsx</p></strong>

```bash
import React from "react";

const About = () => {
  return <div>About Page</div>;
};

export default About;
```


<h3>Step 5: Replace the content of App.jsx with the following</h3>

```bash
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```



<hr/>

<h1>2. Vue JS</h1>
<br/>
<img src="https://www.wisnet.com/wp-content/uploads/2021/07/vue-js-logo-png-transparent-png.png" style="width:500px; height:auto;"><br/>

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

<h3>Step 7: Update <strong> main.js </strong> </h3>

```bash
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// Use the router
app.use(router);

app.mount("#app");

```
