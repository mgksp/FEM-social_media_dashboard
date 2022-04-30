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
      <main className="font-inter text-sm px-6 py-10 min-h-screen themeBackground themeText1">
        <div className="max-w-6xl mx-auto">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <SocialCardsGrid />
          <OverviewCardsGrid />
        </div>
      </main>
    </div>
  );
}

export default App;
