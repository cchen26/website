import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import Link from "next/link";
import ShortcutHint from "./ShortcutBadge";

interface NavigationLinkProps {
  name: string;
  shortcut: number;
  icon: ForwardRefExoticComponent<SVGProps<SVGSVGElement> & RefAttributes<SVGSVGElement>>;
  link: string;
}

const NavigationLink = ({ name, shortcut, icon: Icon, link }: NavigationLinkProps) => (
  <Link
    className="inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full h-9 py-2 px-2 mb-2 flex justify-start text-left"
    href={link}
  >
    <Icon className="h-4 mr-2" />
    <div className="flex justify-between w-full">
      {name}
      <ShortcutHint>{shortcut}</ShortcutHint>
    </div>
  </Link>
);

export default NavigationLink;
