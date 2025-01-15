<template>
  <div>
    <h1>Test Firestore avec Vue.js</h1>
    <form @submit.prevent="addMessage">
      <input v-model="newMessage" placeholder="Entrez un message" />
      <button type="submit">Ajouter le message</button>
    </form>

    <h2>Messages en temps réel</h2>
    <ul>
      <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
    </ul>
  </div>
</template>

<script>
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase"; // Assure-toi que le fichier firebase.js est configuré correctement

export default {
  data() {
    return {
      newMessage: "",  // Variable pour le message à ajouter
      messages: []  // Liste des messages récupérés
    };
  },
  methods: {
    // Ajouter un message à Firestore
    async addMessage() {
      try {
        const docRef = await addDoc(collection(db, "messages"), {
          text: this.newMessage,  // Structure de l'objet message
        });
        console.log("Message ajouté avec succès ! ID du document:", docRef.id);
        this.newMessage = "";  // Réinitialiser le champ de message après l'ajout
      } catch (error) {
        console.error("Erreur lors de l'ajout du message : ", error);
      }
    }
  },
  mounted() {
    // Écouter les mises à jour en temps réel de la collection 'messages' dans Firestore
    const messagesCollectionRef = collection(db, "messages");
    onSnapshot(messagesCollectionRef, (snapshot) => {
      this.messages = snapshot.docs.map(doc => doc.data().text);  // Mettre à jour la liste des messages
    });
  }
};
</script>

<style scoped>
/* Ajoute des styles si nécessaire */
</style>
