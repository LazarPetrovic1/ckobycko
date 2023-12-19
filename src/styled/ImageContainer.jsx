import styled from 'styled-components'

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductImage = styled.img`
  width: 27%;
  height: auto;
  transition: transform 0.3s ease;
  margin-bottom: 10px;
  user-select: none;
  &:hover {
    transform: scale(1.05);
	  z-index: 998;
  }
`;

export const ZoomableImage = styled.img`
  width: auto;
  height: auto;
  transition: transform 0.3s ease;
  margin-bottom: 10px;
  user-select: none;
  &:hover {
    transform: scale(1.05);
	  z-index: 998;
  }
`;
