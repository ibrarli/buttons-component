import BorderGradientButton from "./components/BorderGradientButton";
import ShinyHoverButton from "./components/ShinyHoverButton";
import FoldedCornerButton from "./components/FoldedCornerButton";

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
    </div>
  );
}
