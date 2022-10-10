export const initialBlocks = {
  root: {
    id: "root",
    element: "div",
    children: ["header", "heroSection", "pricingSection", "footerSection"],
    attrs: {
      id: "root",
      className: "root",
    },
  },
  header: {
    id: "header",
    element: "header",
    children: ["headerLogo", "headerNav"],
  },
  headerLogo: {
    id: "headerLogo",
    element: "h1",
    children: "Craftpage",
  },
  headerNav: {
    id: "headerNav",
    element: "nav",
    children: ["navLink1", "navLink2", "navLink3", "navlink4"],
  },
  navLink1: {
    id: "navLink1",
    element: "a",
    children: "Home",
    attrs: {
      href: "#",
    },
  },
  navLink2: {
    id: "navLink2",
    element: "a",
    children: "Pricing",
    attrs: {
      href: "#",
    },
  },
  navLink3: {
    id: "navLink3",
    element: "a",
    children: "Contact",
    attrs: {
      href: "#",
    },
  },
  heroSection: {
    id: "heroSection",
    element: "section",
    children: "Hero Section",
  },
  pricingSection: {
    id: "pricingSection",
    element: "section",
    children: "Pricing Section",
  },
  footerSection: {
    id: "footerSection",
    element: "footer",
    children: "Footer Section",
  },
};
