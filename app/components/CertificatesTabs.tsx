export default function CertificatesTab() {
  return (
    <div className="w-4/5 mx-auto">
      <div className="flex flex-wrap mt-6 justify-between">
        {/* Certificate Card */}
        <div className="border-2 w-5/12 border-red-800">
        <div className="border-frame bg-white border-red p-4 shadow-lg">
        <div className="border-red-800 border-2 bg-white p-2.5 text-center">
          <div className="border-red-800 border-2 px-10 pb-10 pt-4">
            <p className="text-3xl text-black font-semibold">Certificate</p>
            <p className="relative text-3xl w-fit text-black font-semibold mb-2 mx-auto double-underline">Of Completion</p>
            <p className="text-black">This is to certify that</p>
            <p className="text-3xl text-black font-bold">Ian Hoogstrate</p>
            <p className="text-sm text-black font-medium">Bachelor: Applied Computer Science with a specialization in AI</p>
            <div className="flex justify-between items-center mt-4">
            <p className="text-black">Date of Issue: 30/06/2025</p>
              <img className="h-24 w-24" src="/images/seal.png" alt="" />
            <p className="text-black">Signature: Hoogstrate</p>
            </div>
            </div>
          </div>
          </div>
        </div>

        <div className="border-2 w-5/12 border-red-800">
        <div className="border-frame bg-white border-red p-4 shadow-lg">
        <div className="border-red-800 border-2 bg-white p-2.5 text-center">
          <div className="border-red-800 border-2 px-10 pb-10 pt-4">
            <p className="text-3xl text-black font-semibold">Certificate</p>
            <p className="relative text-3xl w-fit text-black font-semibold mb-2 mx-auto double-underline">Of Completion</p>
            <p className="text-black">This is to certify that</p>
            <p className="text-3xl text-black font-bold">Ian Hoogstrate</p>
            <p className="text-sm text-black font-medium">Bachelor: Digital Buisness & AI with a specialization in Buisiness Data Analytics</p>
            <div className="flex justify-between items-center mt-4">
            <p className="text-black">Date of Issue: 30/06/2025</p>
              <img className="h-24 w-24" src="/images/seal.png" alt="" />
            <p className="text-black">Signature: Hoogstrate</p>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
