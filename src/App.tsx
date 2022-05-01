import { useEffect, useState } from "react";
import { SocialCardsGrid, OverviewCardsGrid, Header } from "./components";

function App() {
  const [darkMode, setDarkMode] = useState<Boolean>(false);

  useEffect(() => {
    const darkTheme = localStorage.getItem("darkTheme");
    if (darkTheme) {
      setDarkMode(darkTheme === "true");
    } else {
      const prefersDark: Boolean = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="absolute top-0 left-0 w-full h-60 -z-0 themeTopBgPattern rounded-b-2xl"></div>
      <main className="font-inter text-sm px-6 py-10 min-h-screen themeBackground themeText1 relative">
        <div className="max-w-6xl mx-auto">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <SocialCardsGrid />
          <OverviewCardsGrid />
        </div>
        <Attribution />
      </main>
    </div>
  );
}

export default App;

const Attribution = () => {
  return (
    <div className="text-xs text-center w-full py-1 themeText2 absolute bottom-0 left-0">
      Challenge by&nbsp;
      <a
        className="text-sm font-bold themeText1"
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noreferrer"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by&nbsp;
      <a
        className="text-sm font-bold themeText1"
        href="https://www.github.com/mgksp"
        rel="noreferrer"
        target="_blank"
      >
        Prabu
      </a>
      .
    </div>
  );
};
