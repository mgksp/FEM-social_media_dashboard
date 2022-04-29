import { SocialCard } from ".";

import instagramIcon from "../images/icon-instagram.svg";
import facebookIcon from "../images/icon-facebook.svg";
import twitterIcon from "../images/icon-twitter.svg";
import youtubeIcon from "../images/icon-youtube.svg";

export default function SocialCardsGrid() {
  return (
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
        borderColor={"bg-gradient-to-r from-instagram-from to-instagram-to"}
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
  );
}
