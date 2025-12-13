export default function AchievementsTab() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="flex lg:flex-row flex-col justify-between">
        {/* Achievement Card - Bachelor Degree */}
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

        {/* Achievement Card - BFH Degree */}
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
                  <p className="text-black sm:text-base text-xs">GPA: 90.0%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Card - Data & AI Challenge */}
      <div className="flex lg:flex-row flex-col justify-center mt-3">
        <div className="lg:w-5/12 w-full relative overflow-hidden rounded-xl shadow-2xl border-2 border-gray-700/50 backdrop-blur-sm">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-slate-900/30 to-black/40">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `radial-gradient(1px 1px at 25% 40%, white, transparent),
                               radial-gradient(1px 1px at 75% 30%, white, transparent),
                               radial-gradient(1px 1px at 50% 70%, white, transparent),
                               radial-gradient(1px 1px at 85% 60%, white, transparent)`,
              backgroundSize: '100% 100%'
            }}></div>
          </div>

          {/* Red accent line at bottom */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>


          {/* Red accent corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-400 opacity-10 blur-3xl"></div>
          
          <div className="relative z-10 p-8">
            {/* Achievement Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-400/10 border border-red-400/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">Finalist</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
              Data & AI Challenge 2025
            </h3>

            {/* Details */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-1 h-1 rounded-full bg-gray-500 mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-400 text-sm">Organized by</p>
                  <p className="text-white font-medium">Editx & Partners</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-1 h-1 rounded-full bg-gray-500 mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-gray-400 text-sm">Recognition</p>
                  <p className="text-white font-medium">#1 Tech Community in Belgium</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>
            {/* Description */}
            <p className="text-gray-300">
              Selected as a finalist among participants across Belgium in the Data & AI Challenge 2025, showcasing exceptional skills, knowledge, and innovation in the data analysis and AI space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
