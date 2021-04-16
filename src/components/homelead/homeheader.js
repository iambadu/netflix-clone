import HmHead from './styles/homeheader';
import { ReactComponent as Logo } from '../../utils/logo.svg';
import HomeButton from './homebutton';


export function Homelead() {
    
}

export default function HomeHeader({page = false, children}) {
    return (
        <HmHead.Container>
            <HmHead.TopHeader>
                <HmHead.Logo>
                    <Logo />
                </HmHead.Logo>
                <HmHead.Button>Sign In</HmHead.Button>
            </HmHead.TopHeader>
            <HmHead.LeadWrap>
                <HmHead.Lead>
                    <HmHead.LeadTitle>Unlimited movies, TV shows, and more.</HmHead.LeadTitle>
                    <HmHead.LeadSubTitle>Watch anywhere. Cancel anytime.</HmHead.LeadSubTitle>
                </HmHead.Lead>
                <HomeButton />
            </HmHead.LeadWrap>
            <HmHead.ImgWrap>
                <HmHead.Img src="/images/misc/home-bg.jpg" />
            </HmHead.ImgWrap>
        </HmHead.Container>
    )
}

