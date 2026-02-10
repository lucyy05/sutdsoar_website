<!-- Root component -->

<!-- What users see -->
<template>
  <div id="app">
    <header class="app-header">
      <vue-nav-bar>
        <template #right>
          <nav class="app-nav" aria-label="Main navigation">
            <router-link to="/" class="app-nav__link">Home</router-link>
            <router-link to="/#about" class="app-nav__link">About</router-link>
            <router-link to="/#events" class="app-nav__link">Events</router-link>
            <router-link to="/#projects" class="app-nav__link">Projects</router-link>
            <router-link to="/#team" class="app-nav__link">Team</router-link>
            <router-link to="/#contact" class="app-nav__link">Contact</router-link>
            <router-link to="/learn" class="app-nav__link">Learn</router-link>
          </nav>
        </template>
      </vue-nav-bar>
    </header>
    <main class="app-main">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import VueNavBar from '@components/VueNavBar/VueNavBar.vue';

export default {
  name: 'App',
  components: { VueNavBar },
};
</script>

<style>
/* Global CSS Reset - Applied to entire app (not scoped) */
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  overflow-x: hidden; /* Prevent horizontal scroll */
}
</style>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #f5f5f5;
  background-color: #000;
  min-height: 100vh;
}

.app-header {
  position: relative;
  z-index: 1000;
}

.app-main {
  margin-top: 0;
}

.app-nav {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 0.75rem;
  align-items: center;
  justify-content: flex-end;
  height: auto;
  overflow: visible;
}

.app-nav__link {
  color: #f5f5f5;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: opacity 0.2s;
  flex-shrink: 0;
}

.app-nav__link:hover {
  opacity: 0.85;
}

.app-nav__link.router-link-active {
  text-decoration: underline;
}

/* Tablet and below */
@media (max-width: 768px) {
  .app-nav {
    gap: 0.5rem;
  }

  .app-nav__link {
    font-size: 0.65rem;
    letter-spacing: 0.05em;
  }
}

/* Small tablet and large mobile */
@media (max-width: 600px) {
  .app-nav {
    gap: 0.4rem;
  }

  .app-nav__link {
    font-size: 0.55rem;
    letter-spacing: 0.03em;
  }
}

/* Mobile phones */
@media (max-width: 480px) {
  .app-nav {
    gap: 0.3rem;
  }

  .app-nav__link {
    font-size: 0.5rem;
    letter-spacing: 0.02em;
  }
}

/* Very small phones */
@media (max-width: 400px) {
  .app-nav {
    gap: 0.25rem;
  }

  .app-nav__link {
    font-size: 0.45rem;
    letter-spacing: 0.01em;
  }
}
</style>
