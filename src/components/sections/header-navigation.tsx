"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronRight, Sun, Moon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const productFeatures: { title: string; description: string; href: string }[] =
  [
    {
      title: "Real-time metering API",
      description:
        "Ingest and meter events at scale with idempotency and low latency.",
      href: "/#feature1",
    },
    {
      title: "Dynamic pricing engine",
      description: "Configure usage tiers, proration and thresholds on the fly.",
      href: "/#feature2",
    },
    {
      title: "Entitlements & SDKs",
      description: "Low-latency checks with Node.js and Python SDKs.",
      href: "/#feature3",
    },
  ];

const HeaderNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductMenuOpen, setIsMobileProductMenuOpen] =
    useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="relative z-50 bg-sand-100">
      <div className="container max-w-[1280px]">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://dummyimage.com/129x32/00b35c/ffffff&text=Metrixx"
              alt="Metrixx logo"
              width={129}
              height={32}
            />
          </Link>
          
          <nav className="hidden lg:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm lg:text-base font-normal text-primary p-2 hover:bg-accent focus:bg-accent data-[state=open]:bg-accent/50 group">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {productFeatures.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="text-primary p-2 text-sm lg:text-base font-normal rounded-md hover:bg-accent focus:bg-accent">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className="text-primary p-2 text-sm lg:text-base font-normal rounded-md hover:bg-accent focus:bg-accent">
                      Docs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="flex items-center gap-2.5">
            <Button
              asChild
              variant="ghost"
              className="hidden h-9 px-4 py-2 text-sm font-semibold text-muted-foreground hover:bg-accent hover:text-accent-foreground lg:inline-flex rounded-sm"
            >
              <Link href="/signup">Sign up</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="shadow-xs h-9 px-4 py-2 rounded-sm bg-green-600 text-white hover:bg-green-700 border-green-600"
            >
              <Link href="/signup">Get started</Link>
            </Button>
            <div>
              <Button
                variant="outline"
                size="icon"
                className="shadow-xs size-9 rounded-sm"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
            <button
              className="relative flex size-8 items-center justify-center text-muted-foreground lg:hidden"
              onClick={toggleMobileMenu}
              aria-label="Open main menu"
            >
              <div className="absolute left-1/2 top-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
                <span
                  className={cn(
                    "absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out",
                    isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  )}
                ></span>
                <span
                  className={cn(
                    "absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out",
                    isMobileMenuOpen && "opacity-0"
                  )}
                ></span>
                <span
                  className={cn(
                    "absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out",
                    isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                  )}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "absolute inset-x-0 top-full flex h-[calc(100vh-64px)] flex-col bg-sand-100 px-4 transition-all duration-300 ease-in-out lg:hidden",
          isMobileMenuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        )}
      >
        <div className="mt-8 space-y-2">
          <Button asChild className="h-8 w-full rounded-lg px-3 text-xs">
            <Link href="/signup">Sign up</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-8 w-full rounded-lg px-3 text-xs shadow-xs bg-green-600 text-white hover:bg-green-700 border-green-600"
          >
            <Link href="/signup">Get started</Link>
          </Button>
        </div>
        <nav className="mt-3 flex flex-1 flex-col gap-6">
          <Collapsible
            open={isMobileProductMenuOpen}
            onOpenChange={setIsMobileProductMenuOpen}
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between text-lg tracking-[-0.36px] text-primary">
              Product
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-transform",
                  isMobileProductMenuOpen && "rotate-90"
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="ml-4 space-y-3 overflow-hidden pt-3 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
              {productFeatures.map((item) => (
                <Link
                  href={item.href}
                  key={item.title}
                  className="flex items-start gap-3 rounded-md p-2 hover:bg-accent"
                  onClick={toggleMobileMenu}
                >
                  <div>
                    <div className="font-medium text-primary">{item.title}</div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>
          <Link
            href="/pricing"
            className="text-lg tracking-[-0.36px] text-primary"
            onClick={toggleMobileMenu}
          >
            Pricing
          </Link>
          <Link
            href="/docs"
            className="text-lg tracking-[-0.36px] text-primary"
            onClick={toggleMobileMenu}
          >
            Docs
          </Link>
        </nav>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default HeaderNavigation;