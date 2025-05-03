import React from "react";
import NavLink from "next/link";
import Link from "next/link";
import { TwitterIcon } from "@/components/icons";
import { Avatar } from "@/lib/components/core/default/avatar";
import { Badge } from "@/lib/components/core/default/badge";
import { Separator } from "@/lib/components/core/default/separator";
import { cn } from "@/lib/utils/classes";
import { focusRing } from "@/lib/utils/styles";
import { siteConfig } from "@/config";

const links = [
  {
    label: "Workshops",
    links: [
      {
        label: "DEI",
        href: "/workshops/DEI",
      },
      {
        label: "Enlightened Self-Interest",
        href: "/workshops/Enlightened-Self-Interest",
      },
      {
        label: "Leadership",
        href: "/workshops/leadership",
      },
      {
        label: "Organization Culture",
        href: "/workshops/organization-culture",
      },
      {
        label: "Social Responsibility",
        href: "/workshops/social-responsibility",
      },
      {
        label: "Stewardship",
        href: "/workshops/stewardship",
      },
      {
        label: "Values, Ethics, and Virtues",
        href: "/workshops/values-ethics-virtue",
      }
    ],
  },
  {
    label: "Mentoring",
    links: [
      // {
      //   label: "GitHub",
      //   href: siteConfig.links.github,
      // },
      {
        label: "Master-Mind Academy",
        href: "/mentoring/restart",
      },
      {
        label: "Rapid-Fire Re-Start",
        href: "/mentoring/restart",
      }, {
        label: "High-Speed ROI",
        href: "/mentoring/roi",
      }, {
        label: "Self-Actualizing",
        href: "/mentoring/self-actualizing",
      }, {
        label: "Unparalleled Leadership",
        href: "/mentoring/unparalleled-leadership",
      },
    ],
  },
  {
    label: "Books",
    links: [
      {
        label: "Performance and Profit",
        href: "/books/Engaging-the-Heart-for-People-Performance-and-Profit",
      },
      {
        label: "R&R Employees",
        href: "/books/Recognizing-and-Rewarding-Employees",
      },

    ],
  },
  {
    label: "Articles",
    links: [

      {
        label: "Anger",
        href: "/ezworks/anger",
      },
      {
        label: "Management",
        href: "/ezworks/manager",
      },
    ],
  },
];

const socialLinks = [
  { icon: TwitterIcon, href: siteConfig.links.twitter, label: "Twitter" },
  // { icon: GitHubIcon, href: siteConfig.links.github, label: "GitHub" },
];

export const Footer = () => {
  return (
    <div>
      <div className="container py-8">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row">
          <div className="flex max-w-sm flex-col items-start">
            <NavLink href="/" className={cn(focusRing(), "flex items-center gap-2 rounded")}>
              <Avatar
                src={siteConfig.global.logo}
                alt={siteConfig.global.name}
                loading="lazy"
                width={24}
                height={24}
                className="w-28 h-7 rounded-sm block dark:hidden"
              />
              <Avatar
                src={siteConfig.global.logoWhite}
                alt={siteConfig.global.name}
                loading="lazy"
                width={24}
                height={24}
                className="w-28 h-7 rounded-sm hidden dark:block"
              />
              <div className="mt-1 font-josephin font-bold leading-normal tracking-tighter">
                {siteConfig.global.name}
              </div>
              <Badge size="sm" variant="neutral" className="border">
                Official
              </Badge>
            </NavLink>
            <p className="text-md mt-2 text-fg-muted">{siteConfig.global.description}</p>
            <div className="mt-4 flex items-center gap-4">
              {socialLinks.map((Link, index) => (
                <NavLink
                  href={Link.href}
                  key={index}
                  target="_blank"
                  className="text-fg-muted transition-colors duration-200 hover:text-fg"
                >
                  <Link.icon size={20} />
                  <span className="sr-only">{Link.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-6 sm:gap-16">
            {links.map((group, index) => (
              <div key={index}>
                <h2 className="font-bold">{group.label}</h2>
                <ul className="mt-2 space-y-2">
                  {group.links.map((link, index) => (
                    <li key={index}>
                      <NavLink
                        href={link.href}
                        className="text-fg-muted transition-colors duration-200 hover:text-fg"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Separator className="mb-4 mt-12" />
        <p className="text-sm text-fg-muted">
          Built with{" "}
          <Link href="https://www.caryleblondell.com/" target="_blank" className="underline">

            Love
          </Link>
          .
          {/* The source code is available on{" "}
          <Link href="https://github.com/karthikmudunuri" target="_blank" className="underline">
            GitHub.
          </Link> */}
        </p>
      </div>
    </div>
  );
};
