import styled from 'styled-components/macro';
import rfs from '../../../utils/rfs';
// Wrap, Title, Item, Header, Body
export const Wrap = styled.section`
margin: 50px auto;
display: flex;
flex-direction: column;
color: #fff;
align-items: center;
justify-content: center;
max-width: 1100px;

`;

export const Title = styled.h2`
font-size: ${rfs(45)};`;

export const ItemWrap = styled.div`
width: 75%;
/* margin: 0 auto; */
@media (max-width:550px) {
    width: 100%;
    font-size:18px;
}
font-size: ${rfs(22)};

`;

export const Item = styled.div`
margin-bottom: 10px;
`;

export const Header = styled.div`
&:hover {
    cursor: pointer;
}
background-color: #303030;
display:flex;
justify-content: space-between;
align-items:center;
padding: 18px 30px 15px;

`;
export const HeaderText = styled.h3`
font-weight: normal;
margin: 0;
`;

export const Body = styled.div`
border-top: 2px solid #000;
background-color: #303030;
padding: 30px;


`;

