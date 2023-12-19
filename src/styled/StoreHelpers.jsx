import styled from 'styled-components'

export const TopText = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  margin-left: 0; 
  text-align: center;
  margin-top: 10px;
  gap: 1.5rem;
`;

export const TitleItem = styled.h2`
  text-transform: uppercase;
  flex: 1;
  font-family: 'Hanson-Bold', sans-serif;
  font-size: 24px;
  color: white;
  margin: 10px 0;
  transition: color 0.3s ease; 
  border-bottom: ${props => props.static ? "" : "1px solid white"};
  &:hover { color: ${props => props.static ? "white" : "gray"}; }
`;
