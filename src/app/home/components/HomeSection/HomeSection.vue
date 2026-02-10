<template>
  <div :class="[$style.homeSection, alternative ? $style.alternative : null]">
    <vue-grid>
      <vue-grid-row :class="[flip ? $style.flip : null]">
        <vue-grid-item :class="$style.image">
          <vue-image :src="imageSrc" :native="true" :class="$style.image" />
        </vue-grid-item>
        <vue-grid-item :class="$style.text"><slot /></vue-grid-item>
      </vue-grid-row>
    </vue-grid>
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
  name: 'HomeSection',
  components: { VueImage, VueGridItem, VueGridRow, VueGrid },
  props: {
    image: {
      type: String,
      required: true,
    },
    alternative: {
      type: Boolean,
    },
    flip: {
      type: Boolean,
    },
  },
  computed: {
    imageSrc(): string {
      return getStaticImageUrl(this.image) || this.image;
    },
  },
});
</script>

<style lang="scss" module>
@import '@/app/shared/design-system';

.homeSection {
  padding: $space-48 0;

  @include mediaMin(tabletPortrait) {
    padding: $space-84 0;
  }
}

.alternative {
  /* Match the dark sections like Events/Vision */
  background: #000;
}

.text {
  color: #f5f5f5;

  @include mediaMin(tabletPortrait) {
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }

  @include mediaMin(tabletLandscape) {
    flex: 1 !important;
    max-width: 50% !important; // approximate
  }
}

.flip {
  @include mediaMin(tabletLandscape) {
    flex-direction: row-reverse;
  }
}

.image {
  margin-bottom: $space-32;
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: contain;

  @include mediaMin(tabletPortrait) {
    margin-bottom: $space-32;
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }

  @include mediaMin(tabletLandscape) {
    margin-bottom: 0;
    flex: 1 !important;
  }
}
</style>
