import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    de: {
        translation: {
            "Nav-Home": "Startseite",
            "Nav-About": "Über mich",
            "Nav-Skills": "Kompetenzen",
            "Nav-Contact": "Kontakt",

          "App-Welcome": "Willkommen,",
          "App-Introduce": "Ich bin Milana",
          "App-I-Am": "Ich bin ",
          "App-Web-UX": "Web und UI/UX-Designer",
          "App-CV": "Lebenslauf herunterladen",
    
          "About-Nice-To-Meet": "Hallo, ich bin Milana, schön dich kennenzulernen!",
          "About-Part-1": "Ich bin Web Designer, UI/UX Designer und Entwickler und wohne in Deutschland. Ich möchte das Beste aus beiden Welten in mein Design einbringen, das für seine raffinierte Einfachheit und durchdachte Details bekannt ist.",
          "About-Part-2": "Ich absolvierte ein formelles Studium der Grafiksoftware, in dem ich mir professionelle Kenntnisse in Photoshop, Illustrator und Design aneignete. Nach dieser Lernerfahrung ging ich weiter und schloss eine Berufsausbildung in Frontend-Webentwicklung ab.",
          "About-Part-3": "Es ist mir eine Leidenschaft, meinen Kunden dabei zu helfen, ihre Marken zum Leben zu erwecken und ihre Geschichten visuell zu erzählen. Meine Absicht ist es, die Persönlichkeit einer Marke einzufangen, indem ich umfassende und überzeugende Markenidentitäten und Designs entwickle.",
    
          "Skills-Top-Text": "Ich bin mit den folgenden Werkzeugen und Fähigkeiten bestens vertraut:",
          "Skills-Web-Editing": "Webbearbeitung",
    
          "Portfolio-Top-Text": "Hier ist eine Galerie mit einigen meiner Arbeiten",
    
          "Contact-Get-In-Touch": "Kontaktieren Sie mich",
          "Contact-Bottom-Text": "Kontaktieren Sie mich bei Fragen. Hier finden Sie meine Social-Media-Links und meine E-Mail-Adresse."
        }
      },
  en: {
    translation: {
        "Nav-Home": "Home",
        "Nav-About": "About",
        "Nav-Skills": "Skills",
        "Nav-Contact": "Contact",

      "App-Welcome": "Welcome,",
      "App-Introduce": "Milana here",
      "App-I-Am": "I'm a ",
      "App-Web-UX": "Web and UI/UX-Designer",
      "App-CV": "Download CV",

      "About-Nice-To-Meet": "Hi, I am Milana, nice to meet you!",
      "About-Part-1": "I am a designer and developer currently living in Germany. I like to bring the best of both worlds into my design which is known for its sophisticated simplicity and thoughtful details.",
      "About-Part-2": "I went through formal studies in graphic software where I gained professional skills in Photoshop, Illustrator and In Design. After that learning experience I went further and finished professional traning in frontend web development.",
      "About-Part-3": "I am passionate about helping my clients bring their brands to life and tell their stories visually. My intention is to capture a brand's personality by developing comprehensive and compelling brand identities and designs.",

      "Skills-Top-Text": "I am well versed in the following tools and skills:",
      "Skills-Web-Editing": "Web Editing",

      "Portfolio-Top-Text": "Here is a gallery with some of my work",

      "Contact-Get-In-Touch": "Let's get in touch",
      "Contact-Bottom-Text": "Contact me about any enquiries you have. Here are my social links as well as email."
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "de", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;