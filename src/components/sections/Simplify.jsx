export default function SimplifySection() {
  return (
    <section
      id="simplify"
      className="relative bg-bright-red py-10 bg-simplify-mobile md:bg-simplify-desktop md:bg-center bg-no-repeat"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
          <h2 className="max-w-[400px] text-4xl text-center md:text-start font-bold text-white">
            Simplify how your team works today.
          </h2>
          <a href="#" className="btn btn--white font-bold">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
