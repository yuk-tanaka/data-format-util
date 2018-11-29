<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/email">Email</router-link>
      <router-link to="/zip">Zip</router-link>
      <router-link to="/pref">Pref</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    padding: 2em;

    a {
      margin: 0.5em;
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  div .container {
    margin-left: 2em;
    margin-right: 2em;
  }

  div .caption {
    margin-bottom: 1em;
  }

  div .box {
    padding: 1em;
  }
</style>
