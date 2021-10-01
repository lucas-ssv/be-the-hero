import { memo } from "react";
import "../styles/banner.scss";

export const BannerComponent = () => {
  return <div className="banner" />;
};

export const Banner = memo(BannerComponent);
