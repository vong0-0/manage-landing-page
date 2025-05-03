export default function AboutSection() {
  const contents = [
    {
      title: "Track company-wide progress",
      text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way donw to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      title: "Advanced build-in reports",
      text: "Set internal delivery estimates and track pgress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      title: "Everything you need in one place",
      text: "Stop jumping from one service to another to commnuicate, store files, track tasks and share documents. Manage offersan all-in-one team productivity solution.",
    },
  ];
  return (
    <section id="about" className="relative">
      <div className="relative container flex flex-col md:flex-row gap-12">
        <div className="md:sticky top-[100px] h-fit flex flex-col items-center gap-8">
          <h2 className="text-4xl font-bold text-dark-blue text-center md:text-start">
            What's different about Manage?
          </h2>
          <p className="text-dark-grayish-blue text-center md:text-start max-w-[350px] w-screen">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <ul className="flex flex-col gap-6 md:gap-12">
          {contents.map((content, index) => (
            <li key={content.title} className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center md:items-start relative">
                <span className="relative z-10 py-2 px-6 text-white font-medium bg-bright-red rounded-full">
                  0{index + 1}
                </span>
                <span className="md:hidden relative z-10 text-dark-blue font-bold pl-4">
                  {content.title}
                </span>
                <div className="md:hidden text-lg absolute top-0 left-[11%] w-full h-full bg-very-pale-red rounded-r-full z-0"></div>
              </div>
              <div className="py-3 md:p-0">
                <span className="hidden text-lg md:inline-block relative z-10 text-dark-blue font-bold mb-2">
                  {content.title}
                </span>
                <p className="text-dark-grayish-blue">{content.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
