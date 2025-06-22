export const navLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Shop",
    href: "/shop",
  },
  {
    id: 3,
    title: "Hot Offers",
    href: "/offers",
  },
  {
    id: 4,
    title: "About",
    href: "/about",
  },
  {
    id: 5,
    title: "Contact",
    href: "/contact",
  },
] as const;

export const mainData = [...navLinks];

export const footerLinks = [
  {
    title: "Quick Links",
    links: navLinks.map(link => link.title),
    href: navLinks.map(link => link.href),
  },
  {
    title: "Customer Service",
    links: [
      "Contact Us",
      "FAQs",
      "Shipping Info",
      "Returns & Exchanges",
      "Size Guide",
    ],
    href: [
      "/contact",
      "/faqs",
      "/shipping-info",
      "/returns-exchanges",
      "/size-guide",
    ],
  },
  {
    title: "About Us",
    links: ["Our Story", "Careers", "Blog", "Press", "Testimonials"],
    href: [
      "/our-story",
      "/careers",
      "/blog",
      "/press",
      "/testimonials",
    ],
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Shipping Policy",
      "Return Policy",
      "Cookie Policy",
    ],
    href: [
      "/privacy-policy",
      "/terms-of-service",
      "/shipping-policy",
      "/return-policy",
      "/cookie-policy",
    ],
  },
];
