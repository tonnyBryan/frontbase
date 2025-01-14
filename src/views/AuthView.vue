<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '../components/util/HelloWorld.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <header class="col-12 col-md-6" style="gap: 2rem">
        <img class="logo" src="@/assets/binance-logo.svg" width="125" height="125" />
        <div class="wrapper">
          <HelloWorld msg="WELCOME" />
          <nav>
            <RouterLink to="/app/login">Log in</RouterLink>
            <RouterLink to="/app/inscription">Sign up</RouterLink>
          </nav>
        </div>
      </header>

      <main class="col-12 col-md-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
@keyframes rotateInfinite {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.logo {
  animation: rotateInfinite 5s linear infinite;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header {
  display: flex;
  place-items: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

header .wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

nav {
  text-align: center;
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}

@media (max-width: 480px) {
  header {
    margin-top: 2rem;
  }
}
</style>
