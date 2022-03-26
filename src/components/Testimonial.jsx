import React from 'react';
import '../stylesheet/Testimonial.css';

function Testimonial() {
  return (
    <>
      <section class="text-gray-400 bg_color body-font" id="testimonial">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              testimonial
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4="
                />
                <p class="leading-relaxed text-black fw-bolder">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-black font-medium title-font tracking-wider text-sm">
                  HOLDEN CAULFIELD
                </h2>
                <p class="text-gray-500">{/* Job */}</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://previews.123rf.com/images/dolgachov/dolgachov1307/dolgachov130700228/20605818-%E8%81%B4%E8%A8%BA%E5%99%A8%E3%81%A7%E7%94%B7%E6%80%A7%E5%8C%BB%E5%B8%AB%E3%81%AE%E6%98%8E%E3%82%8B%E3%81%84%E7%B5%B5.jpg"
                />
                <p class="leading-relaxed fw-bolder text-black">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-black font-medium title-font tracking-wider text-sm">
                  ALPER KAMU
                </h2>
                <p class="text-gray-500">{/* Job */}</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://media.istockphoto.com/photos/portrait-female-doctor-stock-photo-picture-id1292012984?b=1&k=20&m=1292012984&s=170667a&w=0&h=yac3vqgYdx-GB40b0O-TOxvlrZv5QJRlw6CeiG_RZqI="
                />
                <p class="leading-relaxed fw-bolder text-black">
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 class="text-black font-medium title-font tracking-wider text-sm ">
                  HENRY LETHAM
                </h2>
                <p class="text-gray-500">{/* Job */}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
