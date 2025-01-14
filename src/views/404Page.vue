<template>
  <div class="content">
    <svg viewBox="0 0 960 300">
      <symbol id="s-text">
        <text text-anchor="middle" x="50%" y="50%">404</text>
      </symbol>

      <g class="g-ants">
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
      </g>
    </svg>

    <h1>Page Not Found</h1>
    <button @click="redirectToHome" style="margin-top: 1rem" class="btn btn-outline-warning">
      Back to Home
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToHome() {
      this.$router.push('/app/v1')
    },
  },
}
</script>

<style scoped>
svg {
  font: 10.5em 'Monoton';
  width: 100%;
  height: 70vh;
}

.content {
  text-align: center;
}

h1 {
  text-align: center;
  font:
    1.5em 'Roboto',
    sans-serif;
  font-weight: bold;
  color: #ffffff;
  opacity: 0.7;
}
.text {
  fill: none;
  stroke-dasharray: 8% 29%;
  stroke-width: 5px;
  stroke-dashoffset: 1%;
  animation: stroke-offset 5.5s infinite linear;
}

.text:nth-child(1) {
  stroke: #f3f3f3;
  animation-delay: -1;
}

.text:nth-child(2) {
  stroke: #f3f3f3;
  animation-delay: -2s;
}

.text:nth-child(3) {
  stroke: #f3f3f3;
  animation-delay: -3s;
}

.text:nth-child(4) {
  stroke: #f3f3f3;
  animation-delay: -4s;
}

.text:nth-child(5) {
  stroke: #ffc107;
  animation-delay: -5s;
}

@keyframes stroke-offset {
  100% {
    stroke-dashoffset: -35%;
  }
}
</style>
