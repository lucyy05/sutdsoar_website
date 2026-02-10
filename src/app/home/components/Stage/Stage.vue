<template>
  <div :class="$style.stage" ref="stage" id="home">
    <a name="home"></a>
    <canvas :class="$style.canvas" ref="canvas"></canvas>

    <img :src="logoSrc" alt="sutdsoar" />
  </div>
</template>

<script lang="ts">
import logoSrc from '@/static/logo_2020_white.svg';
import { CircleAnimation } from '@/app/shared/animations/CircleAnimation';
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueIconGithub from '@components/icons/VueIconGithub/VueIconGithub.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  components: { VueHeadline, VueIconGithub, VueGridItem, VueGridRow, VueGrid },
  props: {
    disableParticles: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return { logoSrc, animation: null as any };
  },
  computed: {},
  methods: {
    handleResize() {
      const canvas: HTMLCanvasElement = this.$refs.canvas;
      const stage: HTMLElement = this.$refs.stage;
      const stageRect: ClientRect =
        stage.getClientRects().length > 0
          ? stage.getClientRects().item(0)
          : ({
              width: 0,
              height: 0,
            } as ClientRect);

      canvas.width = stageRect.width;
      canvas.height = stageRect.height;

      if (!this.disableParticles) {
        this.startAnimation();
      }
    },
    startAnimation() {
      if (this.animation && this.animation.stop) {
        this.animation.stop();
      }
      this.animation = CircleAnimation(this.$refs.canvas);
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
    if (this.animation && this.animation.stop) {
      this.animation.stop();
    }
  },
};
</script>

<style lang="scss" module>
@import '@/app/shared/design-system';

.stage {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  /* Make the hero span the full viewport width, even if the parent
     main container is centered and narrower. This keeps the canvas
     aligned with the #home container. */
  width: 100vw;
  margin-left: calc(50% - 50vw);
  text-align: center;
  text-shadow: 0 0 5px rgba(15, 15, 15, 0.4);
  padding-top: $space-84;
  background-color: #000;
  h1 {
    margin-bottom: $space-32;
    font-weight: $font-weight-light;
  }

  img {
    object-fit: cover;
    width: 50%;
    margin: auto;

    // Make the logo exactly at the center
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.canvas {
  /* Make the canvas exactly follow the #home container so
     the particles align perfectly with the dark background. */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
}
</style>
