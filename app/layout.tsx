import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Navigation from "@/components/navigation/Navigation";
import ThemeProvider from "@/components/theme/ThemeProvider";
import GoogleTagManagerHeadScript from "@/components/custom/GoogleTagManagerHeadScript";
import GoogleTagManagerNoScript from "@/components/custom/GoogleTagManagerNoScript";

// UI components
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { PanelBottomOpenIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

// Utility functions
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chao Chen",
  description: "Software Engineer",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <GoogleTagManagerHeadScript containerId="GTM-KBZM3WBM" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          inter.className,
          "h-screen min-h-screen bg-background antialiased"
        )}
      >
        <GoogleTagManagerNoScript containerId="GTM-KBZM3WBM" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <div vaul-drawer-wrapper="" suppressHydrationWarning>
            <div className="relative flex flex-col min-h-screen flex-col bg-background">
              <div className="h-12 shrink-0 md:hidden ">
                <div className="h-full flex items-center px-2">
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button variant="ghost" className="w-[35px] h-[35px] p-0">
                        <PanelBottomOpenIcon />
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent className="h-[80%]">
                      <Navigation />
                    </DrawerContent>
                  </Drawer>
                </div>
                <Separator />
              </div>
              <div className="flex md:h-screen h-[calc(100vh-48px)]">
                <div className="w-64 shrink-0 hidden md:block">
                  <Navigation />
                </div>
                <Separator orientation="vertical" />
                <ScrollArea className="grow">{children}</ScrollArea>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
