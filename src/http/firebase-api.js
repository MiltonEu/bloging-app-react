import {
  collection,
  addDoc,
  getDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase-config";

// const querySnapshotCommentary = await getDocs(collection(db, "comment"));

// const querySnapshotUser = await getDocs(collection(db, "user"));

const getAllCommentaries = async () => {

};

const getCommentaryById = async (commentId) => {};

const getAllArticles = async () => {
    let data = [];
    const querySnapshotArticle = await getDocs(collection(db, "article"));
    querySnapshotArticle.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.data());
      data.push(doc.data());
    });
    return data;
};

const getArticleById = async (articleId) => {};

const getAllUsers = async () => {};
const getUserById = async (userId) => {};

export {
  getAllArticles,
  getAllUsers,
  getAllCommentaries,
  getArticleById,
  getCommentaryById,
  getUserById,
};
