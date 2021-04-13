import Footer from './footer';

export default function FooterContainer() {
    return (

        <Footer>
            <Footer.Text>Got Questions? Contact us</Footer.Text>
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link >FAQ</Footer.Link>
                    <Footer.Link >Help Center</Footer.Link>
                    <Footer.Link >Account</Footer.Link>
                    <Footer.Link >Media Center</Footer.Link>
                    <Footer.Link >Investor Relations</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link >Jobs</Footer.Link>
                    <Footer.Link >Redeem Gift Cards</Footer.Link>
                    <Footer.Link >Buy Gift Cards</Footer.Link>
                    <Footer.Link >Ways to Watch</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link >Terms of Use</Footer.Link>
                    <Footer.Link >Privacy</Footer.Link>
                    <Footer.Link >Cookie Preferences</Footer.Link>
                    <Footer.Link >Corporate Information</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link >Contact Us</Footer.Link>
                    <Footer.Link >Speed Test</Footer.Link>
                    <Footer.Link >Legal Notices</Footer.Link>
                    <Footer.Link >Netflix Originals</Footer.Link>
                </Footer.Column>
            </Footer.Row>
        </Footer>
    )
}
