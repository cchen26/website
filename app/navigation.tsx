import {
  HomeIcon,
  PenLineIcon,
  ArrowUpRightIcon,
} from "lucide-react";
import { siGithub, siLinkedin } from "simple-icons/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ForwardRefExoticComponent } from "react";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";

const socials = {
  linkedin: "https://www.linkedin.com/in/chaochen26/",
  github: "https://github.com/cchen26",
};

const ShortcutHint = ({ children }: { children: React.ReactNode }) => (
  <Badge
    variant="outline"
    className="h-5 w-5 place-content-center rounded border text-xs font-medium text-gray-500 transition-colors duration-200 lg:grid"
    style={{ background: "hsl(var(--secondary))" }}
  >
    {children}
  </Badge>
);

const NavigationLink = ({
  name,
  shortcut,
  icon,
  link,
}: {
  name: string;
  shortcut: number;
  icon: ForwardRefExoticComponent<any>;
  link: string;
}) => {
  const Icon = icon;

  return (
    <Link
      className="inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full h-9 py-2 px-2 mb-2 w-full flex justify-start text-left"
      href={link}
    >
      <Icon className="h-4 mr-2" />
      <div className="flex justify-between w-full">
        {name}
        <ShortcutHint>{shortcut}</ShortcutHint>
      </div>
    </Link>
  );
};

const SocialLink = ({
  name,
  link,
  iconPath,
}: {
  name: string;
  link: string;
  iconPath: string;
}) => (
  <Button variant="ghost" className="w-full px-2">
    <a
      href={link}
      target="_blank"
      className="flex justify-between text-left w-full items-center"
    >
      <div className="flex">
        <svg className="h-4 mr-2" viewBox="0 0 24 24">
          <path d={iconPath} />
        </svg>
        <p>{name}</p>
      </div>
      <ArrowUpRightIcon className="w-4" />
    </a>
  </Button>
);

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
