"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "../ui/Button";

const navigation = [
  { name: "Header", href: "#header" },
  { name: "About", href: "#about" },
  { name: "Tech Stacks", href: "#tech-stack" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-slate-50/70 dark:bg-slate-900/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="text-lg sm:text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">
          Mariam's Portfolio
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-600 dark:text-slate-300 border-b-2 border-transparent hover:text-indigo-600 hover:border-indigo-600 transition-colors duration-200 pb-1"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop button */}
        <div className="hidden md:block">
          <Button
            text="Download Resume"
            onClick={() => {
    const link = document.createElement("a");
    link.href = "/Mariam_Mohamed_Resume.pdf";
    link.download = "Mariam_Mohamed-Osama_Resume.pdf";
    link.click();
  }}
          />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-slate-700 dark:text-slate-200"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 bg-black/30" />

        <DialogPanel className="fixed right-0 top-0 h-full w-72 bg-white dark:bg-slate-900 p-6 shadow-xl">
          
          {/* Close button */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-bold text-slate-900 dark:text-white">
              Menu
            </span>
            <button onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="h-6 w-6 text-slate-700 dark:text-white" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Button */}
          <div className="mt-6">
            <Button
              text="Download Resume"
              onClick={() => alert("Your CV is Downloaded")}
            />
          </div>
        </DialogPanel>
      </Dialog>
    </nav>
  );
}