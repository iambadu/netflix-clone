import { useState, useEffect } from 'react';
import HmHead from '../homelead/styles/homeheader';
import { ReactComponent as Logo } from '../../utils/logo.svg';
import * as BHero from './styles/browse';
import * as BCard from './styles/card';
import Footer from '../../components/footer';


export default function BrowseHome({ slides, user, handleSignout }) {
    const [category, setCategory] = useState('series');
    const [slideData, setSlideData] = useState('');

    useEffect(() => {
        setSlideData(slides[category])
    }, [slides, category])

    console.log(slideData);
    return (
        <>
            <HmHead.Container>
                <BHero.BTopHeader>
                    <HmHead.Logo>
                        <Logo />
                        <BHero.CatWrap>
                            <BHero.Category
                                linkbg={category === 'series' ? true : false}
                                onClick={() => setCategory('series')}>Series</BHero.Category>

                            <BHero.Category
                                linkbg={category === 'films' ? true : false}
                                onClick={() => setCategory('films')}>Films</BHero.Category>
                        </BHero.CatWrap>
                    </HmHead.Logo>
                    <BHero.Profile>
                        <BHero.ProfileImg src={`/images/users/${user.photoURL}.png`} />
                        <BHero.ProfileWrp>
                            <BHero.ProfileNme>{user.displayName}</BHero.ProfileNme>
                            <BHero.ProfileBtn onClick={handleSignout}>Sign Out</BHero.ProfileBtn>
                        </BHero.ProfileWrp>
                    </BHero.Profile>


                </BHero.BTopHeader>
                    <BHero.Wrap>
                        <BHero.Title>Watch Joker now</BHero.Title>
                        <BHero.Text>
                            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.
                    </BHero.Text>
                        <BHero.Button>Play Now</BHero.Button>
                    </BHero.Wrap>
                <HmHead.ImgWrap>
                    <HmHead.Img home={false}
                        src="/images/misc/joker1.jpg"
                    />
                </HmHead.ImgWrap>
            </HmHead.Container>
            <BCard.Container>
                {slideData && slideData.map((Carditem) => (
                    <>
                        <BCard.Title>{Carditem.title}</BCard.Title>
                        <BCard.Group>
                    {Carditem.data.map((item)=> (

                            <BCard.Card>
                            <BCard.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}/>
                             <BCard.Meta>
                                 <BCard.MetaTitle>{item.title}</BCard.MetaTitle>
                                 <BCard.MetaDesc>{item.description}</BCard.MetaDesc>
                             </BCard.Meta>
                            </BCard.Card>
                    ))}
                        </BCard.Group>
                    </>
                )
                )}
            </BCard.Container>
            <Footer/>
        </>
    )
}

/*
Card
Group
Container
Title
Meta
Detail
bg
Name
Desc

*/