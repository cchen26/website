import { Badge } from "@/components/ui/badge";

const ShortcutBadge = ({ children }: { children: React.ReactNode }) => (
  <Badge
    variant="outline"
    className="h-5 w-5 place-content-center rounded border text-xs font-medium text-gray-500 transition-colors duration-200 lg:grid"
    style={{ background: "hsl(var(--secondary))" }}
  >
    {children}
  </Badge>
);

export default ShortcutBadge;
