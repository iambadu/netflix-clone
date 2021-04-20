import styled from 'styled-components';

export const Profile = styled.div`
display:flex;
background-color: #333;
padding: 8px 18px;
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
padding-top: 45px;
max-width: 1100px;
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