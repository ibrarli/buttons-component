import BorderGradientButton from "./components/BorderGradientButton";
import ShinyHoverButton from "./components/ShinyHoverButton";
import FoldedCornerButton from "./components/FoldedCornerButton";
import SquareDeleteButton from "./components/SquareDeleteButton";
import SocialTopHoverButton from "./components/SocialTopHoverButton";
import TopSliderButton from "./components/TopSliderButton";

export default function Home() {
  return (
    <div className="flex">
      <div className="m-5"> 1.
        <ShinyHoverButton />
      </div>
      <div className="m-5"> 2.
        <BorderGradientButton />
      </div>
      <div className="m-5"> 3.
        <FoldedCornerButton />
      </div>
      <div className="m-5"> 4.
        <SquareDeleteButton />
      </div>
      <div className="m-5"> 5.
        <div className="pt-5">
          <SocialTopHoverButton />
        </div>
      </div>
      <div className="m-5"> 6.
        <TopSliderButton />
      </div>
    </div>
  );
}
