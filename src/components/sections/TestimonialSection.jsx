import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestimonialSection() {
  return (
    <section id="testimonial" className="relative">
      <div className="container">
        <h2 className="text-4xl text-center font-bold text-dark-blue mb-20">
          What they've said
        </h2>
        <TestimonialCarousel />
      </div>
    </section>
  );
}

function TestimonialCarousel() {
  const testimonials = [
    {
      avatar: "avatar-anisha.png",
      name: "Anisha Li",
      massage:
        "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
    {
      avatar: "avatar-ali.png",
      name: "Ali Bravo",
      massage:
        "We have been alble to cancel so many other subscriptons since using Manage. There is no more cross-channel confusion an everyone is much more focused.",
    },
    {
      avatar: "avatar-richard.png",
      name: "Richard Watts",
      massage:
        "Manage allows us to provide structure and process. it keeps us organized and focused. I can't stop recommending them to everyone i tak to!",
    },
    {
      avatar: "avatar-shanai.png",
      name: "Shanai Gough",
      massage:
        "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    },
  ];
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        el: ".custom-pagination",
        clickable: true,
        renderBullet: (_, className) => {
          return `<span class="${className} px-1 py-1 rounded-full mx-1 cursor-pointer"></span>`;
        },
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 60,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      style={{ overflowX: "clip", overflowY: "visible" }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide
          key={index + testimonial.name}
          className="overflow-visible"
        >
          <div className="flex flex-col items-center bg-very-light-gray">
            <div className="w-20 h-20 rounded-full overflow-hidden -translate-y-1/2">
              <img
                className="w-full h-full"
                src={`images/${testimonial.avatar}`}
                alt=""
              />
            </div>
            <div className="px-8 pb-12">
              <p className="font-bold text-dark-blue text-lg text-center mb-4">
                {testimonial.name}
              </p>
              <p className="text-dark-grayish-blue text-center">
                {testimonial.massage}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="custom-pagination mt-4 text-center"></div>
    </Swiper>
  );
}
