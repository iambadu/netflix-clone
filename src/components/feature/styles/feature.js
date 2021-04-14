import styled from 'styled-components/macro';
import rfs from '../../../utils/rfs'

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin:auto;
  width: 100%;
  

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Side = styled.div`
  width:50%;

  @media (max-width: 1000px) {
    padding: 0 ${rfs(45)};
    width: 100%;
    text-align: center;
  }
`;

export const Title = styled.h1`
  font-size: ${rfs(55)};
    line-height: 1.1;
    margin-bottom: .5rem;
`;

export const SubText = styled.h2`
  font-size: ${rfs(24)};
  font-weight: normal;
  line-height: normal;
`;

export const Img = styled.div`
display: flex;
justify-content: center;
img {
  max-width: 100%;
  height: auto;
}
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`;
