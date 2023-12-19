import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getImg } from "../constants";
import { LanguageContext } from '../locale/LanguageContext';
import { locale } from '../locale/langs';
import { CenterBlock, TitleItem, Zoomer, SuccessContainer, ZoomableImage, ZoomContainer } from "../styled";
import ActionBar from "../ActionBar";

function Product() {
  const [size, setSize] = useState(() => 20);
  const { language } = useContext(LanguageContext)
  const { id } = useParams();
  const src = useMemo(() => getImg(id), [id]);
  const zoom = e => setSize(() => parseInt(e.target.value));
  return src ? (
    <div>
      <SuccessContainer>
        <ZoomableImage style={{ width: `${size}%` }} src={src} />
        <ZoomContainer>
          <button disabled={size <= 20} onClick={() => setSize(size - 5)}>-</button>
          <Zoomer value={size} onChange={zoom} />
          <button disabled={size >= 100} onClick={() => setSize(size + 5)}>+</button>
        </ZoomContainer>
      </SuccessContainer>
      <ActionBar isStatic />
    </div>
  ) : (
    <CenterBlock height="calc(100vh - 31px)" style={{ color: "white" }}>
      <TitleItem static>{locale.notfound[language]}</TitleItem>
      <ActionBar />
    </CenterBlock>
  )
}

export default Product;