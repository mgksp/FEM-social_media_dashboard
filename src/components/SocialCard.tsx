import { FaCaretUp, FaCaretDown } from "react-icons/fa";

interface SocialCardProps {
  icon: any;
  username: String;
  followersCount: String;
  followerType?: String;
  followingTrendUp: Boolean;
  followingTrend: number;
  borderColor: String;
}

export default function SocialCard({
  icon,
  username,
  followerType = "followers",
  followersCount,
  followingTrend,
  followingTrendUp,
  borderColor,
}: SocialCardProps) {
  return (
    <div className="relative z-50 rounded overflow-hidden p-6 themeCardBg grid gap-7 place-items-center cursor-pointer themeCardHoverBg">
      <div className={`absolute h-1 w-full inset-0 ${borderColor}`}></div>
      <div className="flex gap-2 items-center">
        {icon}
        <p className="text-xs font-bold themeText2">{username}</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-[3.5rem] leading-[4.25rem] font-bold -tracking-wide">
          {followersCount}
        </h2>
        <p className="uppercase text-xs tracking-[5px] themeText2">
          {followerType}
        </p>
      </div>
      <div className="flex items-center gap-1">
        {followingTrendUp ? (
          <FaCaretUp className="text-limeGreen" />
        ) : (
          <FaCaretDown className="text-brightRed" />
        )}
        <p
          className={
            followingTrendUp
              ? "text-limeGreen text-xs font-bold"
              : "text-brightRed text-xs font-bold"
          }
        >
          {followingTrend} Today
        </p>
      </div>
    </div>
  );
}
