import {Wrap, Item, Side,  Title, SubText, Img, Container} from './styles/feature';

export default function SnglFeature ({children, direction = 'row', ...otherProps })  {
    return (
        <Item {...otherProps}>
            <Wrap direction={direction}>{children}</Wrap>
        </Item>
    )
}

SnglFeature.Container = function FeatureContainer({children, ...otherProps}) {
    return <Container {...otherProps} >{children}</Container>
}
SnglFeature.Side = function SnglFeatureide({children, ...otherProps}) {
    return <Side {...otherProps} >{children}</Side>
}
SnglFeature.Title = function FeatureTitle({children, ...otherProps}) {
    return <Title {...otherProps} >{children}</Title>
}
SnglFeature.SubText = function SnglFeatureubText({children, ...otherProps}) {
    return <SubText {...otherProps} >{children}</SubText>
}
SnglFeature.Img = function FeatureImg({children, ...otherProps}) {
    return <Img {...otherProps} >{children}</Img>
}

