import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dribbble, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  async function subscribeAction(formData: FormData) {
    'use server';
    const email = formData.get('email');
    if (typeof email === 'string') {
      console.log(`Subscribed with email: ${email}`);
    }
  }

  const linkGroups = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '/#feature1' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Testimonials', href: '/#testimonials' },
        { name: 'Docs', href: '/docs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'FAQ', href: '/#faq' },
        { name: 'Developers', href: '/docs' },
        { name: 'Status', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '#' },
        { name: 'Privacy Policy', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', Icon: Twitter, href: 'https://twitter.com' },
    { name: 'GitHub', Icon: Github, href: 'https://github.com' },
    { name: 'Dribbble', Icon: Dribbble, href: 'https://dribbble.com' },
  ];

  return (
    <footer className="bg-sand-100 border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-4 xl:col-span-2">
            <Link href="/">
                <Image
                  src="https://dummyimage.com/129x32/00b35c/ffffff&text=Metrixx"
                  alt="Metrixx logo"
                  width={129}
                  height={32}
                />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Metrixx empowers your SaaS with real-time usage billing and entitlement management.
            </p>
            <form action={subscribeAction} className="mt-4 flex w-full max-w-sm items-center gap-2">
              <Input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="h-9 border-input bg-background text-sm placeholder:text-muted-foreground focus-visible:ring-ring"
              />
              <Button type="submit" className="h-9 shrink-0 bg-green-600 hover:bg-green-700 text-white">
                Submit
              </Button>
            </form>
          </div>
          {linkGroups.map((group) => (
            <div key={group.title}>
              <p className="font-semibold text-sm text-foreground">{group.title}</p>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} Metrixx, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ name, Icon, href }) => (
              <a
                key={name}
                href={href}
                aria-label={`Metrixx on ${name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;