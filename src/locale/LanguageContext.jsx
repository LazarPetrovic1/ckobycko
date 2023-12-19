import { createContext, useState } from 'react'
export const LanguageContext = createContext()

export function LanguageProvider (props) {
  const [language, setLang] = useState(localStorage.getItem('language') || 'en')
  const changeLanguage = (val) => {
    if (val) {
      localStorage.setItem('language', val)
      setLang(val)
    } else {
      localStorage.setItem('language', 'en')
      setLang('en')
    }
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  )
}

export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {value => <Component languageContext={value} {...props} />}
  </LanguageContext.Consumer>
)