import HmHead from '../homelead/styles/homeheader';
import { ReactComponent as Logo } from '../../utils/logo.svg';
import * as BHome from './styles/browse';

export default function BrowseHome({user}) {
    return (
        <>
            <HmHead.Container>
                <HmHead.TopHeader>
                    <HmHead.Logo>
                        <Logo />
                    </HmHead.Logo>
                    <BHome.ProfileBtn>
                        <BHome.Picture src={`/images/users/${user.photoURL}.png`}/>                       
                    </BHome.ProfileBtn>
                </HmHead.TopHeader>
                <HmHead.LeadWrap>
                    <BHome.Wrap>
                        <BHome.Title>Watch Joker now</BHome.Title>
                        <BHome.Text>
                            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.
                        </BHome.Text>
                        <BHome.Button>Play Now</BHome.Button>
                    </BHome.Wrap>
                </HmHead.LeadWrap>
                <HmHead.ImgWrap>
                    <HmHead.Img
                        home={false}
                        src="/images/misc/joker1.jpg"
                    />
                </HmHead.ImgWrap>
            </HmHead.Container>
        </>
    )
}