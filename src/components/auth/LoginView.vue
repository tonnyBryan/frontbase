<template>
  <div class="container d-flex justify-content-center align-items-center vh-100">
    <div
      class="card p-4 shadow lg"
      style="
        width: 22rem;
        background-color: transparent;
        color: #fff;
        border-radius: 10px;
        border: solid 1px #666365;
      "
    >
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="text-left">Connexion</h2>
        <img src="@/assets/binance-logo.svg" alt="Logo" style="width: 30px; height: 30px" />
      </div>
      <form @submit.prevent="handleLogin" novalidate>
        <div class="mb-3">
          <label for="email" class="form-label">E-mail</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            :class="{ 'is-invalid': errors.email }"
            placeholder="Enter your e-mail"
            style="background-color: transparent; padding: 13px"
            autocomplete="off"
            required
          />
          <div class="invalid-feedback">
            {{ errors.email }}
          </div>
        </div>
        <!-- Champ Mot de Passe -->
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <div class="input-group" style="position: relative">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              class="form-control"
              :class="{ 'is-invalid': errors.password }"
              placeholder="password"
              style="
                background-color: transparent;
                padding: 13px;
                border-radius: 0.375rem !important;
              "
              autocomplete="off"
              required
            />
            <span
              @click="togglePasswordVisibility"
              class="hide"
              style="
                position: absolute;
                right: 18px;
                top: 50%;
                transform: translateY(-50%);
                height: 20px;
                z-index: 999;
              "
            >
              <i
                style="cursor: pointer"
                :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"
              ></i>
            </span>
          </div>
          <div class="invalid-feedback">
            {{ errors.password }}
          </div>
        </div>

        <button id="submit-btn" type="submit" class="btn btn-warning w-100 mb-3 fw-bold">
          Continue
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      errors: {},
      showPassword: false,
    }
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    handleLogin() {
      this.$router.push('/app/v1')
    }
  },
}
</script>

<style scoped>
.text-muted {
  color: #bbbbbb !important;
}

input::placeholder {
  color: #aaaaaa; /* Exemple : texte du placeholder gris clair */
}

input {
  color: #ffffff;
  font-size: larger;
  font-weight: 600;
}

input:focus {
  color: #ffffff;
  border-color: #ffc107;
  outline: none;
  box-shadow: none;
}

input:-webkit-autofill {
  background-color: #1e1e1e !important;
  color: #c7c6c6 !important;
}

.border-red {
  border: 3px solid #c82333 !important;
}

.email {
  font-weight: revert;
  color: #d3d3d3;
}

@media (max-width: 480px) {
  .vh-100 {
    height: unset !important;
  }
}
</style>
