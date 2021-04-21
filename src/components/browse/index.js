import { useState, useEffect } from 'react';
import HmHead from '../homelead/styles/homeheader';
import { ReactComponent as Logo } from '../../utils/logo.svg';
import * as BHome from './styles/browse';


export default function BrowseHome({slides, user, handleSignout }) {
    const [category, setCategory] = useState('series');

    useEffect(() => {
        effect
        return () => {
            cleanup
        }
    }, [input])

return (
    <>
        <HmHead.Container>
            <HmHead.TopHeader>
                <HmHead.Logo>
                    <Logo />
                    <BHome.CatWrap>
                        <BHome.Category 
                        linkbg={category === 'series' ? true : false} 
                        onClick={() => setCategory('series')}>Series</BHome.Category>
                        
                        <BHome.Category 
                        linkbg={category === 'films' ? true : false} 
                        onClick={() => setCategory('films')}>Films</BHome.Category>
                    </BHome.CatWrap>
                </HmHead.Logo>
                <BHome.Profile>
                    <BHome.ProfileImg src={`/images/users/${user.photoURL}.png`} />
                    <BHome.ProfileWrp>
                        <BHome.ProfileNme>{user.displayName}</BHome.ProfileNme>
                        <BHome.ProfileBtn onClick={handleSignout}>Sign Out</BHome.ProfileBtn>
                    </BHome.ProfileWrp>
                </BHome.Profile>


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
                <HmHead.Img home={false}
                    src="/images/misc/joker1.jpg"
                />
            </HmHead.ImgWrap>
        </HmHead.Container>
    </>
)
}