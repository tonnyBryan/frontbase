<template>
  <div>
    <h1>Realtime Database Example</h1>
    <form @submit.prevent="addMessage">
      <input v-model="newMessage" placeholder="Enter a message" />
      <button type="submit">Add Message</button>
    </form>

    <ul>
      <li v-for="(message, index) in messages" :key="index">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, set, push, onValue } from "firebase/database";
import { database } from '../../firebase'

export default {
  data() {
    return {
      newMessage: "",
      messages: []  // Contiendra tous les messages récupérés de la base de données
    };
  },
  methods: {
    // Ajouter un message
    addMessage() {
      const messagesRef = ref(database, "messages");
      const newMessageRef = push(messagesRef);
      set(newMessageRef, this.newMessage)
        .then(() => {
          this.newMessage = "";  // Réinitialiser le champ de texte après ajout
          console.log("Message ajouté avec succès !");
        })
        .catch((error) => console.error("Erreur lors de l'ajout du message : ", error));
    }
  },
  mounted() {
    // Récupérer tous les messages existants dès que le composant est monté
    const messagesRef = ref(database, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      // Si des données existent, mettre à jour le tableau de messages
      console.log("tongaa")
      this.messages = data ? Object.values(data) : [];
    });
  }
};
</script>
