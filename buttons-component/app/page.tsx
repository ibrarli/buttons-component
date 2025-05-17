import BorderGradientButton from "./components/BorderGradientButton";
import ShinyHoverButton from "./components/ShinyHoverButton";

export default function Home() {
  return (
    <div className="flex">
      <div className="m-5"> 1.
        <ShinyHoverButton />
      </div>
      <div className="m-5"> 2.
        <BorderGradientButton />
      </div>
    </div>
  );
}
