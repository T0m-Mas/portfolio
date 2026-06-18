import { LANGUAGE } from "@/context/LanguageContext/LanguageContext";
import spanish from "./es.json";
import english from "./en.json";

const getLocale = (lan: LANGUAGE) => {
  switch (lan) {
    case LANGUAGE.EN:
      return english;
    case LANGUAGE.ES:
      return spanish;
    default:
      return spanish;
  }
};

export default getLocale;
