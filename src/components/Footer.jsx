export default function Footer() {
  const logos = [
    { src: "icon-facebook.svg", alt: "Facebook icon", link: "facebook" },
    { src: "icon-youtube.svg", alt: "Youtube icon", link: "youtube" },
    { src: "icon-twitter.svg", alt: "Twitter icon", link: "twitter" },
    { src: "icon-pinterest.svg", alt: "Pinterest icon", link: "pinterest" },
    { src: "icon-instagram.svg", alt: "Instagram icon", link: "instagram" },
  ];
  return (
    <footer id="footer" className="relative bg-very-dark-blue py-12">
      <div className="container">
        <div className="flex flex-col items-start ml:flex-row-reverse gap-14">
          <div className="flex flex-col items-end gap-10">
            <form className="flex-[35%] grid grid-cols-3 gap-4">
              <label htmlFor="inbox" className="sr-only">
                Update your inbox
              </label>
              <input
                className="col-span-2 rounded-full px-6 font-bold"
                type="text"
                id="inbox"
                name="inbox"
                placeholder="Update your inbox..."
              />
              <button className="col-span-1 btn btn--orange font-bold rounded-full">
                Go
              </button>
            </form>
            <p className="hidden ml:block mt-4 text-center font-thin text-sm text-dark-grayish-blue">
              Copyright 2023. All Right Reserved
            </p>
          </div>
          <div className="flex-[50%] flex justify-between px-8 ml:p-0">
            {[
              ["home", "pricing", "products", "about us"],
              ["careers", "comnmunity", "privacy policy"],
            ].map((links, index) => (
              <ul key={index} className="flex flex-col items-start gap-3">
                {links.map((link, index) => (
                  <li key={link + index} className="relative group">
                    <a
                      href="#"
                      className="text-sm md:text-base ml:text-sm font-medium text-white capitalize"
                    >
                      {link}
                    </a>
                    <div className="absolute w-0 h-[2px] left-1/2 -translate-x-1/2 bg-bright-red group-hover:w-full transition-all duration-300"></div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="flex-[15%] h-full flex flex-col ml:flex-col-reverse ml:justify-between gap-8 ml:gap-16">
            <ul className="w-full flex items-center justify-between">
              {logos.map((logo, index) => (
                <li key={logo + index} className="w-5 h-5">
                  <a href={`https://www.${logo.link}.com`}>
                    <img src={`images/${logo.src}`} alt={logo.alt} />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="text-white font-medium text-5xl ml:text-3xl tracking-widest"
            >
              manage
            </a>
          </div>
          <p className="ml:hidden mt-4 text-center font-thin text-sm text-dark-grayish-blue">
            Copyright 2023. All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
