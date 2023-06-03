import { useEffect, useState } from "react";
import initAuthentication from "../Firebase/Firebase.Init";

/* -------------------------------------------------------------------------- */
/*                           IMPORTING FROM FIREBASE                          */
/* -------------------------------------------------------------------------- */
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import popupError from "../popup/popupError";
import popupSuccess from "../popup/popupSuccess";

initAuthentication(); //initial authentication

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  /* -------------------------------------------------------------------------- */
  /*                                ALL PROVIDER                                */
  /* -------------------------------------------------------------------------- */
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  /* -------------------------------------------------------------------------- */
  /*                              UPDATE USER INFO                              */
  /* -------------------------------------------------------------------------- */
  const updateUserInfo = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((err) => {
        popupError(err.message);
      });
  };

  /* -------------------------------------------------------------------------- */
  /*                             CREATE NEW ACCOUNT                             */
  /* -------------------------------------------------------------------------- */
  const createNewAccount = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateUserInfo(name);
        setUser(result.user);
        window.location.pathname = "/form/signin";
        logOut(false);
        popupSuccess("new");
      })
      .catch((err) => {
        popupError(err.message);
      });

    setLoading(false);
  };

  /* -------------------------------------------------------------------------- */
  /*                             SIGN IN WITH EMAIL                             */
  /* -------------------------------------------------------------------------- */
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* -------------------------------------------------------------------------- */
  /*                           SIGN IN WITH ANY SOCIAL                          */
  /* -------------------------------------------------------------------------- */

  const signInWithSocialAccount = (provider) => {
    return signInWithPopup(auth, provider);
  };

  /* -------------------------------------------------------------------------- */
  /*                               RESET PASSWORD                               */
  /* -------------------------------------------------------------------------- */
  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        popupSuccess("reset");
      })
      .catch((err) => {
        popupError(err.message);
      });
  };
  /* -------------------------------------------------------------------------- */
  /*                                 USER LOGOUT                                */
  /* -------------------------------------------------------------------------- */
  const logOut = (isfalse) => {
    signOut(auth)
      .then(() => {
        popupSuccess("logout", isfalse);
      })
      .catch((err) => {
        popupError(err.message);
      });
  };

  /* -------------------------------------------------------------------------- */
  /*                               ON AUTH CHANGE                               */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribed;
  }, []);

  return {
    user,
    setUser,
    loading,
    createNewAccount,
    resetPassword,
    googleProvider,
    facebookProvider,
    twitterProvider,
    signInWithEmail,
    signInWithSocialAccount,
    logOut,
  };
};

export default useFirebase;
