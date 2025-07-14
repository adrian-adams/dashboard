import { db } from "./config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";

const cardsCollectionRef = collection(db, "cards");

export const getCards = async () => {
  const data = await getDocs(cardsCollectionRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const addCard = async (newCard) => {
  return await addDoc(cardsCollectionRef, newCard);
};

export const updateCard = async (id, updatedCard) => {
  const cardDoc = doc(db, "cards", id);
  return await updateDoc(cardDoc, updatedCard);
};

export const deleteCard = async (id) => {
  const cardDoc = doc(db, "cards", id);
  return await deleteDoc(cardDoc);
};
