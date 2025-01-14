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
        <h2 class="text-left">Sign up</h2>
        <img src="@/assets/binance-logo.svg" alt="Logo" style="width: 30px; height: 30px" />
      </div>
      <form novalidate>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="form-control"
            :class="{ 'is-invalid': errors.username }"
            placeholder="Enter your  Username"
            style="background-color: transparent; padding: 13px"
            autocomplete="off"
            required
          />
          <div class="invalid-feedback">
            {{ errors.username }}
          </div>
        </div>
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
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            :class="{ 'is-invalid': errors.password }"
            placeholder="Enter your Password"
            style="background-color: transparent; padding: 13px"
            required
          />
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
      username: '',
      errors: {},
    }
  },
  methods: {

  },
}
</script>

<style scoped>
.vh-100 {
  height: 100vh;
}

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
  color: #ffffff; /* Texte jaune vif au focus */
  border-color: #ffc107; /* Bordure bleu clair au focus */
  outline: none; /* Enlever le contour par défaut */
  box-shadow: none; /* Enlever le contour bleu spécifique à Bootstrap */
}

input:-webkit-autofill {
  background-color: #1e1e1e !important; /* Remettre un fond sombre */
  color: #c7c6c6 !important; /* Garder le texte en blanc */
}
.border-red {
  border: 3px solid #c82333 !important;
}

@media (max-width: 480px) {
  .vh-100 {
    height: unset !important;
  }
}
</style>
