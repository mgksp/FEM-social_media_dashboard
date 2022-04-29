import { useState } from "react";
import instagramIcon from "./images/icon-instagram.svg";
import facebookIcon from "./images/icon-facebook.svg";
import twitterIcon from "./images/icon-twitter.svg";
import youtubeIcon from "./images/icon-youtube.svg";
import { OverviewCard, SocialCard } from "./components";

function App() {
  const [darkMode, setDarkMode] = useState<Boolean>(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="absolute top-0 left-0 w-full h-60 -z-0 themeTopBgPattern rounded-b-2xl"></div>
      <main className="font-inter text-sm px-6 py-10 min-h-screen themeBackground themeText1">
        <div className="max-w-6xl mx-auto">
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
                  onChange={(evt) => setDarkMode(evt.target.checked)}
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

          <div className="py-10 grid gap-6 md:grid-cols-2 md:pt-2 lg:grid-cols-4">
            <SocialCard
              username={"@nathanf"}
              icon={<img src={facebookIcon} alt="" />}
              borderColor={"bg-facebook"}
              followersCount={"1987"}
              followingTrendUp={true}
              followingTrend={12}
            />
            <SocialCard
              username={"@nathanf"}
              icon={<img src={twitterIcon} alt="" />}
              borderColor={"bg-twitter"}
              followersCount={"1044"}
              followingTrendUp={true}
              followingTrend={99}
            />

            <SocialCard
              username={"@realnathanf"}
              icon={<img src={instagramIcon} alt="" />}
              borderColor={
                "bg-gradient-to-r from-instagram-from to-instagram-to"
              }
              followersCount={"11K"}
              followingTrendUp={true}
              followingTrend={1099}
            />
            <SocialCard
              username={"Nathan F."}
              icon={<img src={youtubeIcon} alt="" />}
              borderColor={"bg-youtube"}
              followersCount={"8239"}
              followerType={"subscribers"}
              followingTrendUp={false}
              followingTrend={144}
            />
          </div>

          <div className="">
            <h2 className="text-2xl mb-8 font-bold">Overview Today</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <OverviewCard
                title={"Page Views"}
                count={"87"}
                icon={<img src={facebookIcon} alt="" />}
                trendUp={true}
                trendCount={3}
              />
              <OverviewCard
                title={"Likes"}
                count={"52"}
                icon={<img src={facebookIcon} alt="" />}
                trendUp={true}
                trendCount={2}
              />
              <OverviewCard
                title={"Likes"}
                count={"5462"}
                icon={<img src={instagramIcon} alt="" />}
                trendUp={true}
                trendCount={2257}
              />
              <OverviewCard
                title={"Profile Views"}
                count={"52K"}
                icon={<img src={instagramIcon} alt="" />}
                trendUp={true}
                trendCount={1375}
              />
              <OverviewCard
                title={"Retweets"}
                count={"117"}
                icon={<img src={twitterIcon} alt="" />}
                trendUp={true}
                trendCount={303}
              />
              <OverviewCard
                title={"Likes"}
                count={"507"}
                icon={<img src={twitterIcon} alt="" />}
                trendUp={true}
                trendCount={553}
              />
              <OverviewCard
                title={"Likes"}
                count={"107"}
                icon={<img src={youtubeIcon} alt="" />}
                trendUp={false}
                trendCount={19}
              />
              <OverviewCard
                title={"Total Views"}
                count={"1407"}
                icon={<img src={youtubeIcon} alt="" />}
                trendUp={false}
                trendCount={12}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
