import { OverviewCard } from ".";

import instagramIcon from "../images/icon-instagram.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import youtubeIcon from "../images/icon-youtube.svg";

export default function OverviewCardsGrid() {
  return (
    <>
      <h2 className="text-2xl mb-8 font-bold">Overview Today</h2>
      <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
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
    </>
  );
}
