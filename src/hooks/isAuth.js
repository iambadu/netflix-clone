import {useState, useEffect, useContext} from 'react';
import {FirebaseContext} from './../context/fireContext';

export default function IsAuth() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
              localStorage.setItem('authUser', JSON.stringify(authUser));
              setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
                setUser(null)
            }
         });

        return () => listener();
    }, []);

    return { user }
}

