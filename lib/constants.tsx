import {
  LayoutDashboard,
  SquareUserRound,
  ShoppingBag,
  UsersRound,
  Home,
} from "lucide-react";

export const navLinks = [
  {
    url: "/",
    icon: <Home />,
    label: "Home",
  },
  {
    url: "/about",
    icon: <LayoutDashboard />,
    label: "About",
  },
  {
    url: "/services",
    icon: <ShoppingBag />,
    label: "Services",
  },
  {
    url: "/team",
    icon: <UsersRound />,
    label: "Team",
  },
  {
    url: "/contactus",
    icon: <SquareUserRound />,
    label: "Contact",
  },
];
