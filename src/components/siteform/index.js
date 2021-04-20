import HForm from './styles/form';
import {Link} from 'react-router-dom';

export default function Form() {
 
    return (
        <HForm.FWrap>
            <HForm.Title>Sign Up</HForm.Title>
            <HForm.Input
                type="text"
                placeholder="Email Address" />
            <HForm.Input
                type="password"
                placeholder="Password" />
            <HForm.Button>Sign Up</HForm.Button>
            <HForm.Text>
                Already a member ?
                <HForm.LinkWrap>
                    <Link to ="/signup">Sign up now</Link>
                </HForm.LinkWrap>
            </HForm.Text>

            <HForm.Text>This page is protected by Google reCAPTCHA to ensure you're not a bot.</HForm.Text>
        </HForm.FWrap>
    )
}

// {FWrap, Title, Button, Input, Link}