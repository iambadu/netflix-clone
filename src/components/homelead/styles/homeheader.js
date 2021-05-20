import styled from 'styled-components/macro';
import rfs from '../../../utils/rfs';


const gradient = "linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%)";
const Container = styled.section`
position: relative;
padding: 20px 0;
width:100%;
@media (max-width: 1449px) {
    min-height: 100vh;
}
border-bottom: 8px solid #222;
`;

const TopHeader = styled.section`
position: relative;
z-index:1500;
max-width: 1100px;
padding: 0 15px;
margin: 0 auto;
display: flex;
align-items: center;
`;

const Logo = styled.div`
margin-right: auto;
display:flex;
align-items: center;
@media (max-width: 550px) {
    flex-direction:column;
}
& svg {
height: 36px;
width: 134px;
    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
}
`;

const Button = styled.button`
&:focus {
    outline: 0
}
display: inline-block;
color: #fff;
cursor: pointer;
border:none;
height: fit-content;
font-weight: 500;
font-size: 1rem;
padding: 7px 17px;
background-color: #e50914;
`;


const LeadWrap = styled.div`
position: relative;
z-index: 1500;
padding: 70px 45px;
@media (max-width: 480px) {
    padding-left: 15px;
    padding-right:  15px;
}

`;

const Lead = styled.div`
max-width: 950px;
margin: 0 auto;
text-align: center;
color: #fff;
padding: 75px 0 0;

`;
const LeadTitle = styled.h2`
font-size: ${rfs(60)};
margin: 0 auto;
max-width: 640px;
padding-bottom: 20px;

`;
const LeadSubTitle = styled.p`
margin: 0 auto;
max-width: 640px;
font-size: ${rfs(26)};

`;

const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
const ImgWrap = styled.div`
&::before {

    z-index: 1000;
    background-color: ${({home}) => home ? 'rgba(0,0,0,.4)' : 'rgba(0,0,0,.6)'};
    background-image: ${({home}) => home ? gradient : 'none' };
    position: absolute;
    content: "";
    top:0;
    left:0;
    bottom: 0;
    width:100%;

}
overflow:hidden;
position: absolute;
top: ${({home}) => home ? '-100px' : 0};
bottom:0;
left:0;
content: "";
background-color: #ff000044;
width: 100%;
height: auto;
z-index: 500;
`;

let HomeHead = { Container, LeadWrap, TopHeader, Img, Logo, Button, Lead, LeadTitle, LeadSubTitle, ImgWrap };

export default HomeHead;