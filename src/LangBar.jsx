import { useContext } from "react";
import { Langue, Separator } from "./styled";
import { LanguageContext } from "./locale/LanguageContext";

function LangBar() {
  const { changeLanguage, language } = useContext(LanguageContext);
  return (
    <Langue>
      <span className={`pointer lang-option ${language === 'en' ? "active" : ""}`} onClick={() => changeLanguage('en')}>ENG</span>
      <Separator>|</Separator>
      <span className={`pointer lang-option ${language === 'sr' ? "active" : ""}`} onClick={() => changeLanguage('sr')}>SRB</span>
      <Separator>|</Separator>
      <span className={`pointer lang-option ${language === 'de' ? "active" : ""}`} onClick={() => changeLanguage('de')}>DE</span>
      <Separator>|</Separator>
      <span className={`pointer lang-option ${language === 'jp' ? "active" : ""}`} onClick={() => changeLanguage('jp')}>JP</span>
    </Langue>
  )
}

export default LangBar;