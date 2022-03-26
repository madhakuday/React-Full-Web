import React from 'react';
import '../stylesheet/About.css';
function About() {
  return (
    <>
      <section class="text-gray-600 body-font" id="about">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-contain object-center h-full w-full"
              src="https://media.istockphoto.com/photos/mid-section-of-female-doctor-writes-prescription-to-patient-at-and-picture-id1182307297?k=20&m=1182307297&s=612x612&w=0&h=vYvwxQl0UeS0V6ZP0cK3oYXKrZRm1f26mbD652wctDo="
            />
          </div>

          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center"></div>

            <div class="flex flex-col mb-10 lg:items-start items-center">
              {/* <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5"></div> */}
              <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                  About
                </h2>
                <p class="leading-relaxed text-base">
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <button class="btn button">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
