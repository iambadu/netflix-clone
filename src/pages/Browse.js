import useContent from "../hooks/getContent"
import selectByGenre from "../utils/selectbyGenre";
import { useState, useContext } from 'react';
import BrowseHome from '../components/browse';
import { Profile } from '../components/profile';
import {FirebaseContext} from '../context/fireContext'


export default function Browse() {
    const [profile, setProfile] = useState('');
   
    const firebase = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {};
    const handleSignout = () => firebase.auth().signOut();

    let { series } = useContent('series');
    let { films } = useContent('films');
    let slides = selectByGenre({ series, films });

    return (
        profile.displayName
            ? (<BrowseHome slides={slides} handleSignout={handleSignout} user={user}/>)
            : <Profile setProfile={setProfile} user={user} />
        )
}

