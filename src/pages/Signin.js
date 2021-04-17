import { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from "../components/footer";
import HomeHeader from "../components/homelead/homeheader";
import HForm from "../components/siteform/styles/form";
import { FirebaseContext } from "../context/fireContext";


export default function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

   
    let isInvalid = password === '' || email === '';
    return (
        <>
            <HomeHeader page={true}>
                <HForm.FWrap>
                    <HForm.Title>Sign In</HForm.Title>
                    {error && <HForm.Error>{error}</HForm.Error>}
                    <HForm.WrpForm onSubmit={(evt) => evt.preventDefault()}>
                        <HForm.Input
                            type="text"
                            onChange={({ target }) => setEmail(target.value)}
                            placeholder="Email Address" />
                        <HForm.Input
                            type="password"
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