<template>
  <router-view/>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
:root {
  --primary: #ff6600;
  --light: #fff;
  --dark: #999;
  --dark-gray: #ccc;
  --gray: #ddd;
  --bold: 900;
  --medium: 700;
  --clean: 600;
}

* {
  margin: 0; padding: 0;
  color: var(--light);
  outline: none;
  text-decoration: none;
  list-style: none;
  background: transparent;
}

body {
  background: var(--gray);
}

#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

._pc {
   color: var(--primary);
}
</style>
