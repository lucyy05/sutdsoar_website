<template>
  <div :class="$style.card" :style="cardStyle" ref="card">
    <div :class="$style.cover" ref="cover">
      <h1 :class="$style.title">{{ title }}</h1>
      <div :class="$style.info">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueImage from '@components/VueImage/VueImage.vue';
import { getStaticImageUrl } from '@/app/shared/utils/staticImages';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectCard',
  components: { VueImage, VueGridItem, VueGridRow, VueGrid },
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  computed: {
    cardStyle(): { 'background-image': string } {
      const url = getStaticImageUrl(this.image) || this.image;
      return { 'background-image': `url(${url})` };
    },
  },
});
</script>

<style lang="scss" module>
@import 'app/shared/design-system';

.card {
  $border-radius: 0.2rem;
  /* Slightly taller card so long descriptions fit without scroll */
  $height: 28rem;
  $width: 32rem;
  $transition: cubic-bezier(0.17, 0.67, 0.5, 1.03);
  $timing: 0.4s 0.15s;

  background-color: white;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: $width;
  height: $height;
  border-radius: $border-radius;
  overflow: hidden;
  display: inline-block;

  margin: 0.5rem;

  .cover {
    width: 100%;
    height: 100%;
    background-color: $main-color;
    transform: translateX($width);
    transition: $timing $transition;

    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    -webkit-flex-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    justify-content: center; /* align horizontal */
    align-items: center; /* align vertical */

    .title {
      opacity: 0;
      transition: $timing $transition;
      /* Center the title within the red overlay */
      text-align: center;
      margin: 0 auto 1rem;
      width: 100%;
    }

    .info {
      margin: 0 auto;
      opacity: 0;
      transition: $timing $transition;
      transition-delay: 300ms;
      /* Keep the body copy neatly aligned within the card cover */
      text-align: center;
      width: 100%;
      max-width: 80%;
      box-sizing: border-box;
      font-size: 0.85rem;
      line-height: 1.3rem;
      /* Show full text at once without scroll, but keep it inside the cover */
      max-height: none;
      overflow: visible;
      word-wrap: break-word;
    }
  }

  &:hover {
    /* Ensure the red overlay visually fills the whole box on hover */
    background-color: $main-color;
    .title,
    .info {
      opacity: 1;
    }
    .cover {
      transform: translate(0);
    }
  }
}
</style>
