import { Features } from "./Features";
import { Logo } from "./Logo";
import { Socials } from "./Socials";
export default function Home() {
  return (
    <div className="font-sans">
      <Logo />
      <Features />
      <Socials />
    </div>
  );
}
