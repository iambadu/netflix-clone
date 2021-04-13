import styled from 'styled-components/macro';

let lnkcolor = '#757575';
export const Container = styled.section`
display: flex;
flex-direction: column;
padding: 70px  30px;
color: ${lnkcolor};
margin: 0 auto;
max-width: 1100px;

`;

export const Text = styled.p`
font-size: 16px;
padding: 0;
margin-bottom: 30px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
@media (max-width: 800px) {
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

}
grid-gap: 10px;
`;

export const Column = styled.ul`
margin:0;
padding:0;
list-style: none;
display: flex;
flex-direction: column
`;

export const Link = styled.a`
text-decoration: none;
font-size: 13px;
color:${lnkcolor};
&:hover {
    text-decoration: underline;
}
margin-bottom: 16px;
`;