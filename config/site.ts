export const siteConfig = {
  name: "ByteSpace",
  tagline: "Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  url: "https://bytespace.example.com",
  creator: {
    name: "purepearl studio",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Creators", href: "/#creators" },
];

export const footerNav: readonly {
  heading: string;
  links: readonly NavLink[];
}[] = [
  {
    heading: "Featured Courses",
    links: [
      { label: "Featured Categories", href: "/#courses" },
      { label: "Business", href: "/#courses" },
      { label: "IT", href: "/#courses" },
      { label: "Design", href: "/#courses" },
    ],
  },
  {
    heading: "Development",
    links: [
      { label: "Marketing", href: "/#courses" },
      { label: "Photography", href: "/#courses" },
      { label: "Finance", href: "/#courses" },
      { label: "Sport", href: "/#courses" },
    ],
  },
  {
    heading: "Become a Creator",
    links: [
      { label: "Affiliate Program", href: "/#creators" },
      { label: "Contact", href: "/#creators" },
      { label: "Help", href: "/" },
      { label: "About", href: "/" },
    ],
  },
] as const;

