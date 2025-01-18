import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
 
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../utils/constants";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <>
      <navbar className="min-h-full z-99 bg-pink  ">
        <Disclosure
          as="nav"
          className="bg-gray-800 sm:text-black sm:bg-transparent"
        >
          <div className="mx-auto py-6  max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16  items-center  justify-between">
              <div className="shrink-0 flex sm:text-center ">
                
                <div className="align-middle ">
                  <img
                    alt="Your Company"
                    src="/logo/Batlogo.png"
                    className="size-20 px-1"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden  sm:block">
                  <div className="ml-l0 flex items-baseline space-x-5">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={
                          item.href == pathname ? "page" : undefined
                        }
                        className={classNames(
                          item.href === pathname
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-900 hover:text-white sm:text-white sm-hover:bg-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
         
          </DisclosurePanel>
        </Disclosure>

        
      </navbar>
    </>
  );
}
