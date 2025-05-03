export default function HeroSection() {
  return (
    <section id="hero" className="relative">
      <img
        className="hero-section-bg "
        src="images/bg-tablet-pattern.svg"
        alt=""
      />
      <div className="relative container grid grid-cols-1 md:grid-cols-2 md:flex-row gap-8">
        <img
          className="md:col-[2_/_3]"
          src="images/illustration-intro.svg"
          alt="Hero image"
        />
        <div className="md:col-[1_/_2] md:row-[1_/_2] flex flex-col justify-center items-center md:items-start pt-4">
          <h1 className="text-5xl md:text-4xl ml:text-5xl font-bold text-center md:text-start text-dark-blue leading-[1.125em]">
            Bring everyone together to build better product
          </h1>
          <p className="max-w-[400px] text-dark-grayish-blue pt-4 pb-12 text-center md:text-start">
            Manage makes it simple for software teeams to plan day-to-day tasks
            while keeping the larget team goals in view.
          </p>
          <button className="btn btn--orange btn--shadow font-bold">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
}
