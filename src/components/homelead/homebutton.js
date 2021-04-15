import HButton from './styles/homebutton';
import Arrow from 'mdi-react/ArrowRightIcon'

export default function HomeButton() {
    return (
        <HButton.Form>
            <HButton.Text>Ready to watch? Enter your email to create or restart your membership.</HButton.Text>
            <HButton.FormWrap>
                    <HButton.Input placeholder="Email Address"></HButton.Input>
                    <HButton.Button >Get Started <Arrow size="30"/></HButton.Button>
            </HButton.FormWrap>
        </HButton.Form>
    )
}
