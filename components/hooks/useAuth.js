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
      .then((userCredential) => {
        const user = userCredential.user.uid;
        router.push(`/users/${user}`);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signup = (signInEmail, signInPassword) => {
    console.log(signInPassword);
    console.log(signInEmail);
    createUserWithEmailAndPassword(auth, signInEmail, signInPassword)
      .then(() => {
        router.push(`/users/${user}`);
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

  return { login, signup, logout };
};
