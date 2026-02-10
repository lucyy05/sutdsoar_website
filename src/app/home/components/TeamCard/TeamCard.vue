<template>
  <div :class="$style.card" :style="cardStyle" ref="card">
    <a :class="$style.url" :href="link" target="_blank">
      <div :class="$style.cover" ref="cover">
        <h1 :class="$style.title">{{ title }}</h1>
        <div :class="$style.info">
          <p>{{ info }}</p>
        </div>
      </div>
    </a>
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
  name: 'TeamCard',
  components: { VueImage, VueGridItem, VueGridRow, VueGrid },
  props: {
    title: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
      default: '#',
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
  $height: 20rem;
  $width: 14rem;
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

  /* Center the card horizontally inside the grid item */
  margin: 0.5rem auto;
  .cover {
    width: 100%;
    height: 100%;
    background-color: $main-color;
    transform: translateY($height);
    transition: $timing $transition;

    padding: 0.4rem;
    .title {
      opacity: 0;
      transition: $timing $transition;

      margin: 0.3rem;
      font-size: 1.2rem;
      text-align: center;
    }

    .info {
      margin: 0.3rem;
      opacity: 0;
      transition: $timing $transition;
      transition-delay: 500ms;
      font-style: italic;
      font-size: 0.8rem;
      line-height: 1.2rem;
    }
  }

  &:hover {
    .title,
    .info {
      opacity: 1;
    }
    .cover {
      transform: translateY(calc(100% - 6rem));
    }
  }
}

.url {
  text-decoration: none;
}
</style>
