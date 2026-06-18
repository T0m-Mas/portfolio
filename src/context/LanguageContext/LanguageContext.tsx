import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export enum LANGUAGE {
  EN = "en",
  ES = "es",
}

const LanguageContext = createContext<{
  language: LANGUAGE;
  setLanguage: (language: LANGUAGE) => void;
}>({ language: LANGUAGE.ES, setLanguage: () => {} });

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LANGUAGE>(LANGUAGE.ES);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider",
    );
  }
  return context;
};

export default LanguageContext;
