import { auth } from "../../Firebase/firebase";
import { signOut } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/router";

export const useAuth = () => {
  const router = useRouter();

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signin = (email, password) => {
    console.log(password);
    console.log(email);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        router.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        router("/login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return { login, signin, logout };
};
