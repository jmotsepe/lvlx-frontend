/* eslint-disable @next/next/no-img-element */

const About = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-(--breakpoint-xl) md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Who are we?
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Lvl X Youth is a registered NPO which acts as a catalyst for
              socio-economic change in South Africa. We are passionate about
              youth employment.
            </p>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-xs border-gray-900">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <p className="text-sm text-gray-900">
                  This platform connects the South African youth who have
                  completed a year of experiential learning with employment
                  opportunities.
                </p>
              </div>
            </div>
            <div className="bg-white border-l-4 shadow-xs border-gray-900">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <p className="text-sm text-gray-900">
                  Some of these experiential learning programs may include the
                  YES! programme, learnerships or programs of a similar nature.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="/about-banner.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
