import styled from 'styled-components/macro';
import rfs from '../../../utils/rfs'

//#e50914
const FWrap = styled.div`
background-color: rgba(0,0,0,0.6);
height: fit-content;
display: flex;
flex-direction: column;
max-width: 450px;
padding:35px 65px;
@media (max-width: 480px) {
    padding-left: 30px;
    padding-right:  30px;
}
margin: -50px auto 0 auto;
color: #fff;

`;
const Title = styled.h1`
font-size: ${rfs(34)};
font-weight: bold;
margin-bottom: 15px;

`;
const WrpForm = styled.form`
`;

const Error = styled.form`
background-color: #bd2908;
color: #fff;
font-size: 13px;
padding: 10px 15px;
margin-bottom: 15px;
border-radius: 2px;
`;
const Button = styled.button`
&:disabled {
    opacity: 0.6;
}
background-color: #e50914;
width: 100%;
padding: 13px 25px;
border: none;
border-radius: 4px;
color: #fff;
font-size:18px;
font-weight: 600;
margin-top: 20px;
cursor: pointer;
&:focus {
    outline:0;
}

`;
const Input = styled.input`
width: 100%;
padding: 8px 0;
&:focus {
    outline:0;
}
&::placeholder {
    color: #999;
}
    color: #fff;
    font-size: 16px;
    background-color: #333;
    border-radius: 4px;
    padding: 15px 20px;
    border:none;
    margin-bottom: 15px;
    /* min-height: 50px;
    line-height: 50px;  */
`;
const Text = styled.p`
padding: 8px 0;
color: #888;
font-size: 14px;
`;
const LinkWrap = styled.span`
a {
    color: #999;
    font-weight: 600;
    text-decoration: none;
    padding-left: 8px;
}
`;

let HForm = { FWrap, Error, WrpForm, Text, Title, Button, Input, LinkWrap };
export default HForm;