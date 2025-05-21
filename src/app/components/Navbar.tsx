import LanguageButton from "./LanguageButton";
import { FormattedMessage } from "react-intl";
export default function Navbar() {
  return (
    <nav className="bg-opacity-0 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-lg font-semibold whitespace-nowrap text-zinc-200 hover:text-pink-400">Nataly Salazar</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <ul className="flex flex-row font-medium space-x-5 rtl:space-x-reverse mt-0 ">
            <li className="hidden sm:block">
              <a href="#" className="block text-zinc-200 hover:text-pink-400">
                <FormattedMessage id="about_me.title" />
              </a>
            </li>
            <li className="hidden sm:block">
              <a href="#" className="block text-zinc-200 hover:text-pink-400">
                <FormattedMessage id="projects.title" />
              </a>
            </li>
            <li className="hidden sm:block">
              <a href="#" className="block text-zinc-200 hover:text-pink-400">
                <FormattedMessage id="contact.title" />
              </a>
            </li>
            <li>
              <LanguageButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
