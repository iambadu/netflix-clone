import styled from 'styled-components/macro';

export const Profile = styled.div`
display:flex;
background-color: #333;
padding: 8px 10px;
align-items: center;
border-radius:5px;
border: 2px solid #ffffff35;
`;
export const ProfileImg = styled.img`
width:32px;
height: 32px;
border-radius: 50%;
`;
export const ProfileNme = styled.p`
color:#fff;
margin:0;
font-size:13px;
padding-bottom:5px;
color:#fff;
`;
export const CatWrap = styled.div`
display: flex;
padding-left:15px;
@media (max-width:550px) {
padding-top:15px;
}
`;
export const BTopHeader = styled.div`
position: relative;
z-index:1500;
max-width: 1400px;
padding: 0 15px;
@media (min-width: 1100px) {
    padding: 0 56px;
}
margin: 0 auto;
display: flex;
align-items: center;
`;
export const Category = styled.a`
cursor:pointer;
color: #fff;
padding: 8px 16px;
margin-right: 8px;
text-decoration: none;
border-radius: 3px;
background-color:${({ linkbg }) => linkbg ? '#e50914' : 'none'} ;
&:hover {
    background-color: #e50914;
    color:#fff;
}

`;

export const ProfileWrp = styled.div`
padding-left: 10px;
display:flex;
flex-direction: column;
`;
export const ProfileBtn = styled.button`
border:none;
background-color:#e50914;
color:#fff;
padding:5px 10px;
border-radius:3px;
cursor:pointer;

&:focus {
    outline:0;
}

`;

export const Picture = styled.img`
border-radius:50%;
width: 100%;
`;

export const Title = styled.h2`
color: #fff;
font-size: 56px;
margin:0;
@media (max-width: 992px) {
font-size: 34px;
}
padding-bottom: 15px;
margin-top: 2rem;
`;
export const Wrap = styled.div`
position: relative;
    z-index: 1500;
    padding: 70px 25px;
max-width: 1400px;
@media (min-width: 1100px) {
    padding: 70px 56px;
}
margin: auto;
`;
export const Button = styled.button`
padding: 10px 30px;
background: #e50914;
font-size: 18px;
font-weight: bold;
border-radius: 4px;
margin-top: 30px;
color:#fff;
border: none;
&:focus {
outline: 0;
}
`;

export const Text = styled.p`
max-width: 650px;
line-height: 1.3;
padding: 0;
margin: 0;
color: #fff;
font-size: 20px;
@media (max-width: 992px) {
font-size: 18px;
line-height: 1.3;
}
@media (max-width: 550px) {
font-size: 16px;
line-height: 1.3;
}
`;