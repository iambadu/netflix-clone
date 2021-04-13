import {Text, Container, Link, Column, Row} from './styles/footerStyles'

export default function Footer({children}){
    return <Container>{children}</Container>
}

Footer.Text = function FootText({children, ...otherProps}) {
    return <Text {...otherProps}>{children}</Text>
}
Footer.Column = function FootColumn({children, ...otherProps}) {
    return <Column {...otherProps}>{children}</Column>
}
Footer.Link = function FootLink({children, ...otherProps}) {
    return <Link href="#" {...otherProps}>{children}</Link>
}
Footer.Row = function FootRow({children, ...otherProps}) {
    return <Row {...otherProps}>{children}</Row>
}
Footer.Link = function FootLink({children, ...otherProps}) {
    return <Link {...otherProps}>{children}</Link>
}

