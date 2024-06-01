import HomeBanner from "./HomeBanner";
import HomeCarousels from "./HomeCarousel";
import HomeContact from "./HomeContact";
import HomeIdea from "./HomeIdeal";
import HomeTrusted from "./HomeTrusted";



export default function HomeTemplates() {
  return (
    <>
      <HomeCarousels/>
      <HomeTrusted/>
      <HomeBanner/>
      <HomeIdea/>
      <HomeContact/>
    </>
  )
}
