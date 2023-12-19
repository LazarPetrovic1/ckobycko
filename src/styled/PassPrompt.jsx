import styled from 'styled-components'

export const PassPrompt = styled.p`
  font-family: 'ProstTanak', sans-serif;
  font-size: 16px;
  color: white;
  margin-top: 10px;
  cursor: pointer;
  transition: text-decoration 0.3s ease-in-out;
  text-align: center;
  &:hover { text-decoration: underline; }
`

export const PasswordPopup = styled.form`
  margin-top: 25px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  color: white;
  padding: 30px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5);
  text-align: center;

`;

export const Close = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
