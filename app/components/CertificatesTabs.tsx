export default function CertificatesTab() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="flex lg:flex-row flex-col justify-between">
        {/* Certificate Card */}
        <div className="border-2 lg:w-5/12 w-full border-red-800 mb-3">
        <div className="border-frame bg-white border-red p-4 shadow-lg">
        <div className="border-red-800 border-2 bg-white p-2.5 text-center">
          <div className="border-red-800 border-2 sm:px-9 sm:pb-9 sm:pt-4 px-2 pb-2 pt-1">
            <p className="sm:text-3xl text-base text-black font-semibold">Certificate</p>
            <p className="relative sm:text-3xl text-base w-fit text-black font-semibold mb-2 mx-auto double-underline">Of Completion</p>
            <p className="text-black">From: Thomas More University</p>
            <p className="sm:text-3xl text-base text-black font-bold">Ian Hoogstrate</p>
            <p className="sm:text-sm text-xs text-black font-medium">Bachelor: Applied Computer Science with a specialization in AI (<span className="text-red-400 font-semibold">CUM LAUDE</span>)</p>
            <div className="flex justify-between items-center mt-4">
            <p className="text-black sm:text-base text-xs">Date of Issue: 30/06/2024</p>
              <img className="xl:h-24 xl:w-24 sm:w-15 sm:h-15 h-10 w-10" src="/images/seal.png" alt="" />
            <p className="text-black sm:text-base text-xs">GPA: 75.3%</p>
            </div>
            </div>
          </div>
          </div>
        </div>

        <div className="border-2 lg:w-5/12 w-full border-red-800 mb-3">
        <div className="border-frame bg-white border-red p-4 shadow-lg">
        <div className="border-red-800 border-2 bg-white p-2.5 text-center">
          <div className="border-red-800 border-2 sm:px-9 sm:pb-9 sm:pt-4 px-2 pb-2 pt-1">
            <p className="sm:text-3xl text-base text-black font-semibold">Certificate</p>
            <p className="relative sm:text-3xl text-base w-fit text-black font-semibold mb-2 mx-auto double-underline">Of Completion</p>
            <p className="text-black">From: Bern University, BFH</p>
            <p className="sm:text-3xl text-base text-black font-bold">Ian Hoogstrate</p>
            <p className="sm:text-sm text-xs text-black font-medium">Bachelor: Digital Buisness & AI with a specialization in Buisiness Data Analytics</p>
            <div className="flex justify-between items-center mt-4">
            <p className="text-black sm:text-base text-xs">Date of Issue: 14/07/2025</p>
              <img className="xl:h-24 xl:w-24 sm:w-15 sm:h-15 h-10 w-10" src="/images/seal.png" alt="" />
            <p className="text-black sm:text-base text-xs">GPA: 90.0% </p>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
