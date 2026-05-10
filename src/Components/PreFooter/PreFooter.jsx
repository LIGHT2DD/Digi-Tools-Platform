const PreFooter = () => {
  return (
    <section className="mb-10">
      <div className="flex flex-col justify-center items-center">
        <div className="top">
          <h1 className="font-extrabold text-5xl text-neutral mt-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#627382] mt-4 text-center">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="bottom w-full mt-8">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
            {/* Starter Card */}
            <div className="card w-80 bg-base-100 shadow-sm">
              <div className="card-body flex flex-col h-full">
                <span className="badge badge-xs badge-warning">
                  Most Popular
                </span>
                <div className="flex justify-between">
                  <h2 className="text-2xl font-bold">Starter</h2>
                  <span className="text-lg">$0/mo</span>
                </div>
                <ul className="mt-4 flex flex-col gap-2 text-xs">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Customizable style templates</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Batch processing capabilities</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>AI-driven image enhancements</span>
                  </li>
                </ul>
                <div className="card-actions justify-center mt-4 mt-auto">
                  <button className="btn rounded-full text-white h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Premuim Card */}
            <div className="card w-80 bg-base-100 shadow-sm">
              <div className="card-body flex flex-col h-full">
                <span className="badge badge-xs badge-primary">Popular</span>
                <div className="flex justify-between">
                  <h2 className="text-2xl font-bold">Premuim</h2>
                  <span className="text-lg">$9/mo</span>
                </div>
                <ul className="mt-4 flex flex-col gap-2 text-xs">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Everything in Starter</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Priority processing</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Advanced AI filters</span>
                  </li>
                </ul>
                <div className="card-actions justify-center mt-4 mt-auto">
                  <button className="btn rounded-full text-white h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Enterprice Card */}
            <div className="card w-80 bg-base-100 shadow-sm">
              <div className="card-body flex flex-col h-full">
                <span className="badge badge-xs badge-accent">
                  Best for Teams
                </span>
                <div className="flex justify-between">
                  <h2 className="text-2xl font-bold">Enterprice</h2>
                  <span className="text-lg">$29/mo</span>
                </div>
                <ul className="mt-4 flex flex-col gap-2 text-xs">
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Everything in Premuim</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Team management & SSO</span>
                  </li>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Dedicated support</span>
                  </li>
                </ul>
                <div className="card-actions justify-center mt-4 mt-auto">
                  <button className="btn rounded-full text-white h-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
