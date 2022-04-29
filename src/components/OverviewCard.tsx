import { FaCaretDown, FaCaretUp } from "react-icons/fa";

interface OverviewCardProps {
  title: String;
  icon: any;
  count: String;
  trendUp: Boolean;
  trendCount: number;
}

export default function OverviewCard({
  title,
  icon,
  count,
  trendCount,
  trendUp,
}: OverviewCardProps) {
  return (
    <div className="px-6 py-7 themeCardBg rounded">
      <div className="flex justify-between items-center mb-5">
        <p className="themeText2 font-bold text-sm">{title}</p>
        {icon}
      </div>
      <div className="flex justify-between items-baseline font-bold">
        <h3 className="text-[3rem] leading-none">{count}</h3>
        <div
          className={
            trendUp
              ? "flex items-center text-limeGreen"
              : "flex items-center text-brightRed"
          }
        >
          {trendUp ? (
            <FaCaretUp className="text-limeGreen" />
          ) : (
            <FaCaretDown className="text-brightRed" />
          )}
          {trendCount} %
        </div>
      </div>
    </div>
  );
}
