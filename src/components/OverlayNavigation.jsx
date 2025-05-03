import { X } from "lucide-react";

export default function OverlayNavigation({ setOpenOverlayNav }) {
  return (
    <nav className="pt-12 pb-8 bg-white w-full">
      <button
        className="absolute top-[5%] right-[5%]"
        onClick={() => setOpenOverlayNav(false)}
      >
        <X />
      </button>
      <ul className="flex flex-col items-center gap-6">
        {["pricing", "product", "about us", "careers", "community"].map(
          (link, index) => (
            <li key={link + index} className="relative text-center group">
              <a href="#" className="font-medium text-center capitalize">
                {link}
              </a>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] -translate-x-1/2 translate-y-full bg-bright-red group-hover:w-full transition-all duration-300"></span>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
