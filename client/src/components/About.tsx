export const About = () => {
  return (
    <div
      id="about"
      className="mt-20 lg:mt-10 md:px-24 lg:px-8 pt-20 pb-1 sm:pb-20 bg-slate-900"
    >
      <div className="px-4 md:px-0 -mt-28 sm:-mt-32">
        <div className="text-center mx-auto overflow-hidden shadow-2xl divide-y glass rounded sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          <div className="inline-block p-3 sm:p-8 text-center">
            <p className="font-bold tracking-wide text-black text-xl sm:text-3xl">
              The utility token to support someone else
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl mt-14 sm:mt-28 sm:mb-10">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-wider text-white sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <span className="relative">End</span>
                </span>{" "}
                Homelessness
              </h2>
              <p className=" text-gray-300 text-2xl">
                The reality is such that minting NFT help a lot of people to
                make money we want to help the one that don't have access to it
              </p>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center bg-slate-500 hover:bg-slate-600 h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Join our discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
