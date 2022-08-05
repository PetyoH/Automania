import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export const register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            sessionStorage.setItem('email', user.email);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}

export const login = (email, password) => {
     signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
         const user = userCredential.user;
        sessionStorage.setItem('email', user.email);
     })
     .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(errorCode);
         console.log(errorMessage);
     });
}

export const logout = () => {
    signOut(auth).then(() => {
        sessionStorage.clear();
    }).catch((error) => {
        console.log(error);
    });
}

// export function useAuth() {
//     const [currentUser, setCurrentUser] = useState();

//     useEffect(() => {
//         const unsub = onAuthStateChanged(auth, user =>  setCurrentUser(user));
//         return unsub;
//     }, []);

//     return currentUser;
// }