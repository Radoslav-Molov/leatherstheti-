import MainFeaturedPost from "../Carousel/Carousel";
import Info from "./Info/Info";
import Map from "../Map/Map";
import VideoAdd from "../VideoAdd/VideoAdd";
import FeaturedPostsWrapper from "../FeaturedPosts/FeaturedPostsWrapper";

function LandingPage() {
  return (
    <div>
      <MainFeaturedPost />
      <FeaturedPostsWrapper />
      <Info />
      {/* <VideoAdd /> */}
      <Map />
    </div>
  );
}

export default LandingPage;
