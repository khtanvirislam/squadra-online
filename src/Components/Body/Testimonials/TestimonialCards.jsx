import React from "react";

export const TestimonialCards = () => {
  return (
    <div className="mt-10 md:mt-20">
      <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm  md:mb-12 md:grid-cols-2  bg-gray-800">
        <figure class="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e ">
          <blockquote class="max-w-2xl mx-auto mb-4  lg:mb-8 text-green-300">
            <h3 class="text-lg font-semibold  text-white">
              Very easy this was to integrate
            </h3>
            <p class="my-4">
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <div class="space-y-0.5 font-medium text-white text-left rtl:text-right ms-3">
              <div>Bonnie Green</div>
              <div class="text-sm text-slate-400 ">Developer at Open AI</div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 md:rounded-se-lg bg-gray-800 ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-green-300 lg:mb-8 ">
            <h3 class="text-lg font-semibold  text-white">
              Solid foundation for any project
            </h3>
            <p class="my-4">
              Designing with Figma components that can be easily translated to
              the utility classes of Tailwind CSS is a huge timesaver!"
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <div class="space-y-0.5 font-medium text-white text-left rtl:text-right ms-3">
              <div>Roberta Casas</div>
              <div class="text-sm  text-slate-400 ">
                Lead designer at Dropbox
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e bg-gray-800 ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-green-300 lg:mb-8 ">
            <h3 class="text-lg font-semibold  text-white">
              Mindblowing workflow
            </h3>
            <p class="my-4">
              Aesthetically, the well designed components are beautiful and will
              undoubtedly level up your next application."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <div class="space-y-0.5 font-medium text-white text-left rtl:text-right ms-3">
              <div>Jese Leos</div>
              <div class="text-sm  text-slate-400 ">
                Software Engineer at Facebook
              </div>
            </div>
          </figcaption>
        </figure>
        <figure class="flex flex-col items-center justify-center p-8 text-center  border-gray-200 rounded-b-lg md:rounded-se-lg bg-gray-800 ">
          <blockquote class="max-w-2xl mx-auto mb-4 text-green-300 lg:mb-8 ">
            <h3 class="text-lg font-semibold  text-white">
              Efficient Collaborating
            </h3>
            <p class="my-4">
              You have many examples that can be used to create a fast prototype
              for your team."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center ">
            <div class="space-y-0.5 font-medium text-white text-left rtl:text-right ms-3">
              <div>Joseph McFall</div>
              <div class="text-sm  text-slate-400">CTO at Google</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};