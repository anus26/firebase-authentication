import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {  auth ,  db } from "./config.js";


const fom=document.querySelector('#fom');
const todo=document.querySelector('#todo');




fom.addEventListener('submit',async(event)=>{
  event.preventDefault();
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      todo:todo.value
      
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})