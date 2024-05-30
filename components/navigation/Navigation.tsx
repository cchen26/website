import {
  HomeIcon,
  PenLineIcon,
} from "lucide-react";
import { siGithub, siLinkedin } from "simple-icons/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";
import NavigationLink from "./NavigationLink";
import SocialLink from "./SocialLink";

const socials = {
  linkedin: "https://www.linkedin.com/in/chaochen26/",
  github: "https://github.com/cchen26",
};

const Navigation = () => {
  return (
    <ScrollArea className="p-2 h-full">
      <Link
        href="/"
        className="inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full h-9 py-6 px-2 mb-2 flex justify-start text-left"
      >
        <div>
          <p>Chao Chen</p>
          <p className="text-muted-foreground">Software Engineer</p>
        </div>
      </Link>
      <nav>
        <NavigationLink name="Home" shortcut={1} icon={HomeIcon} link="/" />
        <NavigationLink
          name="Posts"
          shortcut={2}
          icon={PenLineIcon}
          link="/posts"
        />
      </nav>
      <Separator className="my-2" />
      <p className="text-muted-foreground text-xs p-2">Socials</p>
      <SocialLink name="Github" link={socials.github} iconPath={siGithub.path} />
      <SocialLink name="LinkedIn" link={socials.linkedin} iconPath={siLinkedin.path} />
      <Separator className="my-2" />
      <p className="text-muted-foreground text-xs p-2">Settings</p>
      <ThemeSwitcher />
    </ScrollArea>
  );
};

export default Navigation;

