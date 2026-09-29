import Image from "next/image";

import { Container } from "@/components/ui/container";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-title"
      className="relative overflow-hidden bg-[#fafafa] py-20 lg:py-24"
    >
      {/* Background gradients */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-35 top-40 h-[500px] w-[550px] rounded-full bg-[#dfff55]/55 blur-[130px]" />
        <div className="absolute left-[40%] top-[15%] h-[300px] w-[300px] rounded-full bg-[#dfff55]/85 blur-[120px]" />
        <div className="absolute -bottom-48 -left-40 h-[550px] w-[700px] rounded-full bg-[#9dbdff]/65 blur-[130px]" />
      </div>

      <Container className="relative">
        {/* Header */}
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          {/* Left heading */}
          <div>
            <h2
              id="testimonials-title"
              className="max-w-[520px] text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-black sm:text-5xl"
            >
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          {/* Right description */}
          <div className="lg:pt-1">
            <p className="max-w-[570px] text-[17px] leading-[1.7] text-[#5f5f5f]">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <figure className="flex h-full flex-col rounded-[24px] bg-white hover:shadow-lg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                {/* Avatar */}
                <figcaption className="flex items-center">
                  <Image
                    src={testimonial.avatar.src}
                    alt=""
                    width={testimonial.avatar.width}
                    height={testimonial.avatar.height}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                </figcaption>

                {/* Name + Role */}
                <div className="mt-6">
                  <span className="block text-[20px] font-semibold leading-tight text-black">
                    {testimonial.name}
                  </span>

                  <span className="mt-1 block text-[16px] leading-6 text-[#1557ff]">
                    {testimonial.role}
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="mt-7">
                  <p className="text-[17px] leading-[1.7] text-[#646464]">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
