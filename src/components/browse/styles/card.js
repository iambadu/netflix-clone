import styled from 'styled-components/macro';

export const Image = styled.img`
width:100%;
`;
export const Title = styled.h2`
margin: 0;
padding: 15px 0;
font-size:25px;
color: #fff;
`;
export const Group = styled.div`
display: grid;
/* overflow:hidden; */
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
@media (max-width: 550px) {
grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}
margin-bottom: 20px;
&::last-of-type{
    margin:0;
}
row-gap:3px;
column-gap:8px;
`;
export const Meta = styled.div`
& * {
    margin:0;
    padding:0;
}
opacity:0;
background-color: rgba(0,0,0,.6);
height:fit-content;
position:absolute;
bottom:0;
left:0;
right:0;
color:#fff;
padding: 8px;
`;
export const Card = styled.div`
cursor:pointer;
position:relative;
height: fit-content;
/* margin-right: 8px; */
&::last-of-type {
    margin-right:0;
}
    transition: all .2s;
@media (min-width:768px) {

&:hover {
    transform: scale(1.3);
    z-index: 100;
    border-radius:10px;
}
&:hover > ${Meta} {
    opacity:1
}
}
`;
export const MetaTitle = styled.h4`
font-size:12px;
padding-bottom: 8px;
`;
export const MetaDesc = styled.p`
font-size: 10px;
`;
export const Container = styled.section`
max-width: 1400px;
margin: 0 auto;
@media (min-width: 1100px) {
    padding: 56px;
}
padding: 15px;
`;
// export const Card = styled.div``;