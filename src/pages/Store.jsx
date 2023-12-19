import shorts from '../assets/shorts.png';
import doberman from '../assets/doberman.png';
import { ImageContainer, ProductImage, TopText, TitleItem } from '../styled';
import { useContext } from 'react';
import { LanguageContext } from '../locale/LanguageContext';
import { locale } from '../locale/langs';
import { useNavigate } from 'react-router-dom';

const gridStyles = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr",
  gridColumnGap: "0px",
  gridRowGap: "0px",
  height: "calc(100vh - 31px)"
}

function Store() {
  const navigate = useNavigate()
  const { language } = useContext(LanguageContext);
  const goTo = (num) => navigate(`/products/${num}`);
  return (
    <div style={gridStyles}>
      <TopText>
        <TitleItem>{locale.shop[language]}</TitleItem>
        <TitleItem>{locale.cart[language]}</TitleItem>
        <TitleItem>{locale.about[language]}</TitleItem>
      </TopText>
      <ImageContainer>
        <ProductImage store src={doberman} onClick={() => goTo(1)} />
        <ProductImage store src={shorts} onClick={() => goTo(2)} />
      </ImageContainer>
    </div>
  )
}

export default Store