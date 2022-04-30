import React from "react";

interface HeaderProps {
  setDarkMode: Function;
  darkMode: Boolean;
}

export default function Header({ setDarkMode, darkMode }: HeaderProps) {
  const handleThemeChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const theme: Boolean = evt.currentTarget.checked;
    localStorage.setItem("darkTheme", theme.toString());
    setDarkMode(theme);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
      <div className="pb-6 mb-4 border-b border-gray-500 font-bold z-50 md:border-0">
        <h1 className="text-2xl">Social Media Dashboard</h1>
        <p className="themeText2">Total Followers: 23,004</p>
      </div>

      <div className="flex justify-between items-center gap-2 z-50">
        <div className="themeText2">Dark Mode</div>
        <label
          className="bg-gray-200 h-6 w-10 rounded-full block relative themeToggleBg cursor-pointer hover:bg-gradient-to-r from-darkTheme-toggle-from to-darkTheme-toggle-to"
          htmlFor="dk-mode"
        >
          <input
            onChange={handleThemeChange}
            checked={darkMode ? true : false}
            className="invisible"
            type="checkbox"
            id="dk-mode"
          />
          <div
            className={
              darkMode
                ? "absolute top-1/2 left-[2px] -translate-y-1/2 h-5 aspect-square rounded-full themeBackground transition-transform duration-700"
                : "absolute top-1/2 -translate-y-1/2 translate-x-[18px] h-5 aspect-square rounded-full themeBackground transition-transform duration-700"
            }
          ></div>
        </label>
      </div>
    </div>
  );
}
