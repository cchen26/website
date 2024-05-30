import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "lucide-react";

interface SocialLinkProps {
  name: string;
  link: string;
  iconPath: string;
}

const SocialLink = ({ name, link, iconPath }: SocialLinkProps) => (
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

export default SocialLink;
