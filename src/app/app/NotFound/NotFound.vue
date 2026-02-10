<template>
  <div :class="$style.notFound">
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <router-link to="/">Go Home</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound',
});
</script>

<style lang="scss" module>
@import 'app/shared/design-system';

.notFound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: $space-24;

  h1 {
    font-size: $font-size-h1;
    margin-bottom: $space-16;
  }

  p {
    margin-bottom: $space-24;
  }

  a {
    color: $brand-primary;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
