import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../firebase';
import { useLocalStorage } from './useLocalStorage';

export const useUser = () => {

    const [user, setUser] = useLocalStorage('user', {});

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {

            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }

        });
        return unsub;
    }, []);

    return user;
}