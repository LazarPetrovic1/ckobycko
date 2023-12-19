import gif from '../assets/torus.gif'
import {
  Container,
  Input,
  SignUp,
  CTAButton,
  PassPrompt,
  PasswordPopup,
  Close,
  InputContainer
} from '../styled'
import { locale } from '../locale/langs';
import { useContext, useEffect, useRef, useState } from 'react';
import { LanguageContext } from '../locale/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from '../hooks/useStorage';
import { IS_USER_AUTH } from '../constants';

function Index() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [_, setIsUserAuth, __] = useSessionStorage(IS_USER_AUTH, 0);
  const { language } = useContext(LanguageContext);
  const [isModalOpen, setIsModalOpen] = useState(() => false);
  const handleSubmit = async (e, passVal) => {
    e.preventDefault();
    const data = await fetch(`http://localhost:3000/sifra.txt`);
    const pass = await data.text();
    if (pass === passVal) {
      setIsUserAuth(() => 1);
      navigate('/store')
    }
  }

  return (
    <Container>
      <img src={gif} alt="Torus GIF" width={400} height={400} />
      <div>
        <SignUp>{locale.signup[language]}</SignUp>
        <div>
          <Input placeholder='yourmail@example.com' type="text" />
          <CTAButton>{locale.submit[language]}</CTAButton>
        </div>
        <PassPrompt onClick={() => setIsModalOpen(() => true)}>{locale.enterpass[language]}</PassPrompt>
      </div>
      <PassModal show={isModalOpen} onClose={() => setIsModalOpen(() => false)} handleSubmit={handleSubmit} />
    </Container>
  )
}

function PassModal({ show, onClose, handleSubmit }) {
  const { language } = useContext(LanguageContext);
  const pass = useRef(null);
  const closeOnEscapeDown = (e) =>
    (e.charCode || e.keyCode) === 27 && onClose();
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeDown);
    return () =>
      document.body.removeEventListener("keydown", closeOnEscapeDown);
    // eslint-disable-next-line
  }, []);
  if (!show) return null;
  return (
    <PasswordPopup id="pass" onSubmit={(e) => handleSubmit(e, pass.current.value)}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Close onClick={onClose}><div className="close-icon">&#10006;</div></Close>
      </div>
      <SignUp className="popup-title" data-locale="enterpass">{locale.enterpass[language]}</SignUp>
      <InputContainer>
          <Input style={{ flex: 1 }} ref={pass} type="password" placeholder="Enter your password" />
          <CTAButton>{locale.submit[language]}</CTAButton>
      </InputContainer>
    </PasswordPopup>
  )
}

export default Index