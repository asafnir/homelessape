import { useState } from "react";
import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Logo from "../assets/ha-logo.png";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Road Map", href: "#roadmap" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-5">
      <div className="px-5 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <a href="#home">
            <img className="h-14 sm:h-16" src={Logo} />
          </a>

          <div className="hidden md:block space-x-7 lg:space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="md:text-lg font-semibold hover:text-gray-500 text-gray-900"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="px-5 py-4 lg:text-lg text-center rounded-md font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Join discord
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white bg-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {!isOpen ? (
                <div>
                  <MenuIcon className="h-6 w-6" />
                </div>
              ) : (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* -------------Mobile menu----------- */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className={`py-3 space-y-3 text-center mt-3`}>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(!isOpen)}
                className="block px-3 py-2 text-lg font-semibold rounded-md text-gray-700 hover:text-white hover:bg-gray-700"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </Transition>
    </nav>
  );
};
