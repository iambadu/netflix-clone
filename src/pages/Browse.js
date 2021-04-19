// import useContent from "../hooks/getContent"
// import selectByGenre from "../utils/selectbyGenre";
import { useState, useContext } from 'react';
import BrowseHome from '../components/browse';
import { Profile } from '../components/profile';
import {FirebaseContext} from '../context/fireContext'


export default function Browse() {
    const [profile, setProfile] = useState('');
   
    const firebase = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {};

    // let { series } = useContent('series');
    // let { films } = useContent('films');
    // let slides = selectByGenre({ series, films });
console.log(profile);
    return (
        profile.displayName
            ? (<BrowseHome user={user}/>)
            : <Profile setProfile={setProfile} user={user} />
        )
}

