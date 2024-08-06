import Info from "./Info/Info";
import Map from "../Map/Map";
import VideoAdd from "../VideoAdd/VideoAdd";
import FeaturedPostsWrapper from "../FeaturedPosts/FeaturedPostsWrapper";
import Slider from "../Slider/Slider";

function LandingPage() {
  return (
    <div>
      <Slider />
      <FeaturedPostsWrapper />
      <Info />
      {/* <VideoAdd /> */}
      {/* <Map /> */}
    </div>
  );
}

export default LandingPage;
