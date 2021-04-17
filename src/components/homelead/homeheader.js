import HmHead from './styles/homeheader';
import {useHistory} from 'react-router-dom';
import { ReactComponent as Logo } from '../../utils/logo.svg';
import HomeButton from './homebutton';


export function Homelead() {
    
    
    return (
        <>
                <HmHead.Lead>
                    <HmHead.LeadTitle>Unlimited movies, TV shows, and more.</HmHead.LeadTitle>
                    <HmHead.LeadSubTitle>Watch anywhere. Cancel anytime.</HmHead.LeadSubTitle>
                </HmHead.Lead>
                <HomeButton />
        </>
    )
}

export default function HomeHeader({ page = false, children }) {
    let history = useHistory();
    return (
        <HmHead.Container>
            <HmHead.TopHeader>
                <HmHead.Logo>
                    <Logo />
                </HmHead.Logo>
                {!page && <HmHead.Button onClick={() => history.push('/signin')} >Sign In</HmHead.Button>}
            </HmHead.TopHeader>
            <HmHead.LeadWrap>
                {children}
            </HmHead.LeadWrap>
            <HmHead.ImgWrap>
                <HmHead.Img src="/images/misc/home-bg.jpg" />
            </HmHead.ImgWrap>
        </HmHead.Container>
    )
}

