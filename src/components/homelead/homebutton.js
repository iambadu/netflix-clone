import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import HButton from './styles/homebutton';
import Arrow from 'mdi-react/ArrowRightIcon'

export default function HomeButton() {
    const [hmemail, setEmail] = useState('');

    const history = useHistory();
    function handleChange({target}) {
       setEmail(target.value);
    }
    function handleSubmit(evt) {
        evt.preventDefault()
        history.push('/signup');
    }
    return (
        <HButton.Form onSubmit={handleSubmit}>
            <HButton.Text>Ready to watch? Enter your email to create or restart your membership.</HButton.Text>
            <HButton.FormWrap>
                <HButton.Input onChange={handleChange} placeholder="Email Address"></HButton.Input>
                <HButton.Button >Get Started <Arrow size="30" /></HButton.Button>
            </HButton.FormWrap>
        </HButton.Form>
    )
}
