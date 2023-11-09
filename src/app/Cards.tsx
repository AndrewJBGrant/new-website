export default function Link({
  href,
  title,
}: {
  href: string;
  title: string;
  download?: any;
}) {
  return (
    <a
      href={href}
      className="flex items-center p-4 w-full rounded-sm hover:scale-110 transition-all mb-3"
    >
      <div className="flex flex-col">
        <h2 className="font-bold text-lg">{title}</h2>
      </div>
    </a>
  );
}




{/* <!-- Container --> */}
<div className="container mt-32 mx-auto p-4 md:p-0">

  {/* <!-- Card wrapper --> */}
  <div className="shadow-lg flex flex-wrap w-full lg:w-4/5 mx-auto">

    {/* <!-- Card image --> */}
    <div className="bg-cover bg-bottom border w-full md:w-1/3 h-64 md:h-auto relative">
      <div className="absolute">
        <i className="hover:text-red-light ml-4 mt-4 cursor-pointer"></i>
      </div>
    </div>
    {/* <!-- ./Card image --> */}

    {/* <!-- Card body --> */}
    <div className="w-full md:w-2/3">
      {/* <!-- Card body - outer wrapper --> */}
      <div className="h-full mx-auto px-6 md:px-0 md:pt-6 md:-ml-6 relative">
        {/* <!-- Card body - inner wrapper --> */}
        <div className="lg:h-full p-6 -mt-6 md:mt-0 relative mb-4 md:mb-0 flex flex-wrap md:flex-wrap items-center">
          {/* <!-- Card title and subtitle --> */}
          <div className="w-full lg:w-1/5 lg:border-right lg:border-solid text-center md:text-left">
            <h3>Saint Basil's Cathedral</h3>
            <p className="mb-0 mt-3 text-grey-dark text-sm italic">Moscow - Russia</p>
            <hr className="w-1/4 md:ml-0 mt-4  border lg:hidden" />
          </div>
          {/* <!-- ./Card title and subtitle --> */}

          {/* <!-- Card description --> */}
          <div className="w-full lg:w-3/5 lg:px-3">
            <p className="text-md mt-4 lg:mt-0 text-justify md:text-left text-sm">
            The Cathedral of Vasily the Blessed (Russian: Собор Василия Блаженного, Sobor Vasiliya Blazhennogo), commonly known as Saint Basil's Cathedral, is a church in Red Square.
            </p>
          </div>
          {/* <!-- ./Card description --> */}

          {/* <!-- Call to action button --> */}
          <div className="w-full lg:w-1/5 mt-6 lg:mt-0 lg:px-4 text-center md:text-left">
            <button className="bg-white hover:bg-grey-darker hover:text-white border border-solid border-grey w-1/3 lg:w-full py-2">Website</button>
          </div>
          {/* <!-- ./Call to action button --> */}
        </div>
        {/* <!-- ./Card body - inner wrapper --> */}
      </div>
      {/* <!-- ./Card body - outer wrapper --> */}
    </div>
    {/* <!-- ./Card body --> */}
  </div>
  {/* <!-- ./Card wrapper --> */}
</div>
{/* <!-- ./Container --> */}
