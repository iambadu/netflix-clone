import styled from 'styled-components/macro';
// import rfs from '../../../utils/rfs';



const Text = styled.p`
color: #fff;
text-align: center;
font-size: 18px;
`;

const FormWrap = styled.div`
display: flex;
justify-content: center;
@media (max-width: 768px) {
    flex-direction: column;
};

`;


const Form = styled.form`
max-width: 850px;
margin: 20px auto;
display: flex;
flex-direction: column;
@media (max-width: 768px) {
    width: 90%;
    overflow:hidden;
};
`;


const Button = styled.button`
background-color: #e50914;
height: auto;
color: #fff;
padding: 13px 26px;
font-size:26px;
border:none;
display: flex;
align-items: center;
cursor:pointer;
.mdi-icon {
    padding-left:5px;
}
@media (max-width: 768px) {
justify-content: center;
    margin-top: 15px;
    padding: 8px 25px;
    font-size:18px;
    max-width: 300px;
    margin: 15px auto 0; 
}
`;

const Input = styled.input.attrs(props => ({type: 'text'}))`
&:focus {
    outline: 0;
}
&::placeholder {
color: #000;
font-weight:500;
}
padding: 18px;
min-width: 450px;
border: none;
font-size: 18px;
border-radius: 0;
`;

const HmButton = {Text, FormWrap, Form, Button, Input};
export default HmButton; 