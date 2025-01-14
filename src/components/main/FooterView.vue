<template>
  <footer class="footer-48201">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3 class="tl">
            <img
              src="@/assets/binance-logo.svg"
              width="40"
              alt="Logo"
              class="logo-icon"
              style="margin-right: 5px"
            />
            Crypto-G
          </h3>
          <p>
            Welcome to Crypto-G! <br />We are four passionate students committed to making
            cryptocurrency simple and secure for everyone. <br />Our goal is to provide an
            easy-to-use platform for managing your digital assets. 🚀
          </p>
        </div>
        <div class="col-md-4">
          <h3 class="tl">Members</h3>
          <ul class="list-unstyled nav-links">
            <li>
              <a href="https://www.facebook.com/bryan.to.7927"
                ><i class="bi bi-person"></i> ANDERSON Tonny Bryan ETU2768</a
              >
            </li>
            <li>
              <a href="https://www.facebook.com/helena.candy.29"
                ><i class="bi bi-person"></i> RIJARILANTO Helena Candy ETU2638</a
              >
            </li>
            <li>
              <a href="https://www.facebook.com/mamirazana.isisaxel.1"
                ><i class="bi bi-person"></i> MAMIRAZANA Isis Axel ETU2442</a
              >
            </li>
            <li>
              <a href="https://www.facebook.com/voahary.RM21"
                ><i class="bi bi-person"></i> Voahary Mihaja ETU2535</a
              >
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <h3 class="tl">Feedback</h3>

          <form novalidate>
            <div class="mb-3">
              <label for="subject" class="form-label text-light">Subject</label>
              <input
                type="text"
                id="subject"
                class="form-control"
                v-model="feedback.subject"
                :class="{ 'is-invalid': !feedback.subject && submitted }"
                required
              />
              <div class="invalid-feedback">Subject is required.</div>
            </div>
            <div class="mb-3">
              <label for="content" class="form-label text-light">Content</label>
              <textarea
                id="content"
                class="form-control"
                v-model="feedback.content"
                rows="4"
                :class="{ 'is-invalid': !feedback.content && submitted }"
                required
              ></textarea>
              <div class="invalid-feedback">Content is required.</div>
            </div>
            <button id="sbt" type="submit" class="btn btn-warning">Submit</button>
          </form>
        </div>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="thankYouModal"
        tabindex="-1"
        aria-labelledby="thankYouModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="thankYouModalLabel">Thank You!</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">Thank you for your feedback!</div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      feedback: {
        subject: '',
        content: '',
      },
      submitted: false,
    }
  },
  methods: {

  },
}
</script>

<style scoped>
@import '@/util/footer/style.css';

.tl {
  color: #f9f9f9;
  margin-bottom: 2rem;
}

p {
  color: #d1d1d1;
}

input,
textarea {
  background-color: transparent;
  color: #ffffff;
}

input:focus,
textarea:focus {
  color: #ffffff;
  border-color: #ffc107;
  outline: none;
  box-shadow: none;
  background-color: transparent;
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
