<template>
  <Head></Head>
  <div style="min-height: 80vh; position: relative">
    <RouterView />
  </div>
  <Footer></Footer>
  <button
    v-if="showScrollButton"
    class="scroll-to-top"
    @click="scrollToTop"
    aria-label="Monter en haut"
  >
    <i class="bi bi-arrow-up-short"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Head from '@/components/main/HeaderView.vue'
import Footer from '@/components/main/FooterView.vue'

const showScrollButton = ref(false) // Gère la visibilité du bouton

const handleScroll = () => {
  const headerHeight = document.querySelector('header')?.offsetHeight || 0
  showScrollButton.value = window.scrollY > headerHeight
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll) // Écouteur de défilement
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll) // Nettoyage
})
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ffc107;
  color: #000000;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  font-weight: 800;
}

.scroll-to-top i {
  font-size: xx-large;
}

.scroll-to-top:hover {
  background-color: #e0b942;
}
</style>
