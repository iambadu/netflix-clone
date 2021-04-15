import HmHead from './styles/homeheader';

export default function HomeHeader() {
    return (
        <HmHead.Container>
            <HmHead.TopHeader>
                <HmHead.Logo></HmHead.Logo>
                <HmHead.Button></HmHead.Button>
            </HmHead.TopHeader>
            <HmHead.Lead>
                <HmHead.LeadTitle></HmHead.LeadTitle>
                <HmHead.LeadSubTitle></HmHead.LeadSubTitle>
            </HmHead.Lead>
            <HmHead.ImgWrap></HmHead.ImgWrap>
        </HmHead.Container>
    )
}

