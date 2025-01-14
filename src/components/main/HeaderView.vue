<template>
  <header class="modern-header">
    <div class="logo">
      <img src="@/assets/binance-logo.svg" alt="Logo" class="logo-icon" />
      Crypto-G
    </div>
    <nav :class="{ open: isMenuOpen }">
      <ul>
        <li>
          <RouterLink to="/app/v1/home" @click="closeMenu">
            <i class="bi bi-house"></i> Home
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/app/v1/achat" @click="closeMenu">
            <i class="bi bi-box"></i> Buy crypto
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/app/v1/profil" @click="closeMenu">
            <i class="bi bi-person-circle"></i> My Profile
          </RouterLink>
        </li>
        <li>
          <a href="#" @click.prevent="confirmLogout">
            <i class="bi bi-box-arrow-right"></i> Log out
          </a>
        </li>
      </ul>
    </nav>
    <button class="hamburger" @click="toggleMenu">
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
    </button>
  </header>

  <!-- Modal de confirmation Bootstrap -->
  <div
    class="modal fade"
    id="logoutModal"
    tabindex="-1"
    aria-labelledby="logoutModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="logoutModalLabel">Confirm Logout</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Are you sure you want to log out?</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-danger" @click="logout">Yes, Log out</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bootstrap from 'bootstrap'

export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    closeMenu() {
      this.isMenuOpen = false
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    // Déclenche l'affichage du modal de confirmation
    confirmLogout() {
      const logoutModal = new bootstrap.Modal(document.getElementById('logoutModal'))
      logoutModal.show()
    },
    async logout() {
      const logoutModal = new bootstrap.Modal(document.getElementById('logoutModal'))
      logoutModal.hide()

      const backdrop = document.querySelector('.modal-backdrop')
      if (backdrop) {
        backdrop.remove()
      }
      document.body.style.overflow = "unset";
      this.$router.push('/app')
    },
  },
}
</script>

<style scoped>
.modern-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: transparent;
  color: #fff;
  position: relative;
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffc107;
  gap: 0.5rem;
}

.logo-icon {
  width: 24px;
  height: 24px;
}

nav {
  display: flex;
  gap: 1rem;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
}

nav ul li a,
nav ul li RouterLink {
  color: rgb(255 255 255 / 93%);
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
}

nav ul li a:hover,
nav ul li RouterLink:hover {
  color: #ff9800;
}

nav ul li i {
  margin-right: 8px;
  font-size: 1.2rem;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 35px;
  height: 25px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2000;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 0.25rem;
  background: #fff;
  border-radius: 0.25rem;
  transition: all 0.3s;
}

.hamburger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger span.open:nth-child(2) {
  opacity: 0;
}

.hamburger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media screen and (max-width: 768px) {
  nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background: #181a20;
    width: 100%;
    text-align: center;
  }

  nav.open {
    display: flex;
  }

  nav ul {
    flex-direction: column;
  }

  nav ul li a {
    margin-left: 2rem;
  }

  .hamburger {
    display: flex;
  }
}

.modal-content {
  background-color: #181a20;
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-header {
  border-bottom: 1px solid #444;
}

.modal-footer {
  border-top: 1px solid #444;
}
</style>
