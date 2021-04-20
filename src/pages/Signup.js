import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Footer from "../components/footer";
import HomeHeader from "../components/homelead/homeheader";
import HForm from "../components/siteform/styles/form";
import {FirebaseContext} from "../context/fireContext";


export default function Signup(props) {
    const [email, setEmail] = useState(props);
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [error, setError] = useState('')
    
    console.log(email);
    let history = useHistory();

    let firebase = useContext(FirebaseContext)
    let isInvalid = password === '' || email === '' || name === '';

    function handleSignup(evt) {
        evt.preventDefault()

        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) =>
                result.user.updateProfile({
                    displayName: name,
                    photoURL: Math.floor(Math.random() * 5) + 1,
                }).then(() => {
                    history.replace('/browse')
                })

            ).catch(error => {
                setName('');
                setEmail('');
                setPassword('');
                setError(error.message)
            })

    }

    return (
        <>
            <HomeHeader page={true}>
                <HForm.FWrap>
                    <HForm.Title>Sign Up</HForm.Title>
                    {error && <HForm.Error>{error}</HForm.Error>}
                    <HForm.WrpForm onSubmit={handleSignup}>
                        <HForm.Input
                            type="text"
                            onChange={({ target }) => setName(target.value)}
                            placeholder="First Name" />
                        <HForm.Input
                            type="text"
                            onChange={({ target }) => setEmail(target.value)}
                            placeholder="Email Address" />
                        <HForm.Input
                            onChange={({ target }) => setPassword(target.value)}
                            type="password"
                            placeholder="Password" />
                        <HForm.Button disabled={isInvalid}>Sign Up</HForm.Button>
                    </HForm.WrpForm>
                    <HForm.Text>
                        Already a member ?
                <HForm.LinkWrap>
                            <Link to="/signin">Sign in</Link>
                        </HForm.LinkWrap>
                    </HForm.Text>

                    <HForm.Text>This page is protected by Google reCAPTCHA to ensure you're not a bot.</HForm.Text>
                </HForm.FWrap>
            </HomeHeader>
            <Footer />
        </>
    )
}