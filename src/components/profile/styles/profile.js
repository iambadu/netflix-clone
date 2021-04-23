import styled from 'styled-components/macro';
import rfs from '../../../utils/rfs'

const Title = styled.h2`
font-size: ${rfs(30)};
color: #fff;
`;
const Text = styled.p`
font-size: ${rfs(24)};
text-align: center;
color: #fff;
margin: 0;
`;
const Container = styled.div`
margin: auto;
max-width: 1100px;
padding: 20px;
display: flex;
align-items: flex-start;
flex-direction: column;
`;
export const Picture = styled.img`
width: 150px;
height: 150px;
border: 5px solid #fff;
border-radius: 50%;
margin-bottom: 10px;

`;
const List = styled.div`
display: flex;

`;

const UserWrap = styled.div`
padding: 0 20px;
cursor: pointer;
`;
const LogoWrap = styled.div`
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
padding: 8px 15px;
background-color: tomato;
color: black;
`;
const Wrap = styled.div`
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center';
`;







const ProfileStyle = {Button, UserWrap, Container, List, LogoWrap, Wrap, Title, Text }
export default ProfileStyle;