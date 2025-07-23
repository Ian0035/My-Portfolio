export default function CertificatesTab() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="flex flex-wrap gap-12 mt-6 justify-center p-10 pb-20">
        {/* Certificate Card */}
        <div className="border-2 w-2/5 border-red-800">
        <div className="border-frame bg-white border-red p-4 shadow-lg">
        <div className="border-red-800 border-2 bg-white p-2.5 text-center">
          <div className="border-red-800 border-2 px-10 pb-10 pt-4">
            <p className="text-3xl text-black font-semibold">Certificate</p>
            <p className="relative text-3xl w-fit text-black font-semibold mb-2 mx-auto double-underline">Of Completion</p>
            <p className="text-black">This is to certify that</p>
            <p className="text-xl text-black font-bold">John Doe</p>
            <p className="text-black">Has completed the course</p>
            <p className="text-lg text-black font-medium">React Development - Level 1</p>
          </div>
          </div>
          </div>
        </div>
        <div className="border-2 w-2/5 border-blue-400 p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Certificate of Completion</h3>
          <p className="text-gray-600">This is to certify that</p>
          <p className="text-xl font-bold">John Doe</p>
          <p className="text-gray-600">Has completed the course</p>
          <p className="text-lg font-medium">React Development - Level 1</p>
        </div>
      </div>
    </div>
    
  );
}
