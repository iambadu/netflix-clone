import { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Footer from "../components/footer";
import HomeHeader from "../components/homelead/homeheader";
import HForm from "../components/siteform/styles/form";
import { FirebaseContext } from "../context/fireContext";


export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let history = useHistory();
    let firebase = useContext(FirebaseContext);
    let isInvalid = password === '' || email === '';

    function handleSignin(evt) {
        evt.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => history.push('/browse'))
            .catch(function (error) {
                setError(error.message)

            });
    }
    return (
        <>
            <HomeHeader page={true}>
                <HForm.FWrap>
                    <HForm.Title>Sign In</HForm.Title>
                    {error && <HForm.Error>{error}</HForm.Error>}
                    <HForm.WrpForm onSubmit={handleSignin}>
                        <HForm.Input
                            type="text"
                            autoComplete="on"
                            onChange={({ target }) => setEmail(target.value)}
                            placeholder="Email Address" />
                        <HForm.Input
                            type="password"
                            autoComplete="on"
                            onChange={({ target }) => setPassword(target.value)}
                            placeholder="Password" />
                        <HForm.Button disabled={isInvalid} type="submit">Sign In</HForm.Button>
                    </HForm.WrpForm>

                    <HForm.Text>
                        Not a member ?
                <HForm.LinkWrap>
                            <Link to="/signup">Sign up now</Link>
                        </HForm.LinkWrap>
                    </HForm.Text>

                    <HForm.Text>This page is protected by Google reCAPTCHA to ensure you're not a bot.</HForm.Text>
                </HForm.FWrap>
            </HomeHeader>
            <Footer />
        </>
    )
}