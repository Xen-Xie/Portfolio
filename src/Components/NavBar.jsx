import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkMode/DarkModeToggle";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Projects", "Resume", "Contact"];

  return (
    <nav className="sticky top-0 z-50">
      <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="text-xl font-semibold font-poppins">
              <span className="text-primary">Xen</span>{" "}
              <span className="text-clean dark:text-ground">Xie</span>
            </p>
          </NavbarBrand>
        </NavbarContent>

        {/* Menu items visible on larger screens */}
        <NavbarContent className="hidden sm:flex gap-4 font-inter" justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-lg text-tertiary dark:text-foreground transition-all ${
                    isActive
                      ? "text-primary underline decoration-primary underline-offset-4 animate-underline"
                      : "hover:text-primary dark:hover:text-ground/75"
                  }`
                }
              >
                {item}
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>

        <div className="absolute right-4 top-4 sm:static sm:right-auto sm:top-auto">
          <DarkModeToggle />
        </div>

        {/* Menu for small screens */}
        <NavbarMenu className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-lg text-tertiary dark:text-foreground transition-all ${
                    isActive
                      ? "text-primary"
                      : "hover:text-primary dark:hover:text-tertiary"
                  }`
                }
              >
                {item}
              </NavLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </nav>
  );
}

export default NavBar;
