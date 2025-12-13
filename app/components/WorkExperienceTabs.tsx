export default function WorkExperienceTab() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="flex lg:flex-row flex-col justify-center gap-6">
        {/* Work Experience Card - Sleek Space Design */}
        <div className="lg:w-6/12 w-full relative overflow-hidden rounded-xl shadow-2xl border-2 border-gray-700/50 backdrop-blur-sm">
          {/* Subtle transparent background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-slate-900/30 to-black/40">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `radial-gradient(1px 1px at 20% 30%, white, transparent),
                               radial-gradient(1px 1px at 60% 70%, white, transparent),
                               radial-gradient(1px 1px at 50% 50%, white, transparent),
                               radial-gradient(1px 1px at 80% 10%, white, transparent),
                               radial-gradient(1px 1px at 90% 60%, white, transparent)`,
              backgroundSize: '100% 100%'
            }}></div>
          </div>

          {/* Red accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
          
          <div className="relative z-10 p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-red-400/10 border border-red-400/30 rounded-full mb-3">
                  <span className="text-red-400 text-xs font-semibold uppercase tracking-wider">Internship</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">Fullstack Engineer</h3>
                <p className="text-xl text-gray-300">Palette</p>
              </div>
              <img className="xl:h-16 xl:w-16 w-14 h-14 object-contain opacity-90" src="palette-logo-symbol-light.svg" alt="Palette" />
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="space-y-1">
                <p className="text-gray-400 text-sm uppercase tracking-wide">Timeline</p>
                <p className="text-white font-medium">December 2025</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-sm uppercase tracking-wide">Location</p>
                <p className="text-white font-medium">Copenhagen, Denmark</p>
              </div>
            </div>

            {/* Divider with red accent */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="space-y-3">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-4">Key Focus Areas</p>
              {[
                'Part of a dynamic startup team building innovative solutions',
                'Brought valuable insights to drive product development',
                'Engineered and deployed code to production environments',
                'Contributed to full-stack development and AI integrations',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Subtle glow effect */}
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-red-400 rounded-full blur-3xl opacity-10"></div>
        </div>
        </div>
    </div>
  );
}
