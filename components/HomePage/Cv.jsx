"use client";

export default function CV() {
  return (
    <section
      id="cv"
      className="min-h-screen bg-gradient-to-r from-fuchsia-600/4 to-purple-700/4 text-white flex flex-col items-center justify-center py-16 px-6"
    >
      <div className="max-w-4xl w-full bg-gray-800 rounded-2xl shadow-xl p-10 border border-gray-700">
        <div className="w-full h-[600px]">
          <iframe
            src="/resume.pdf" 
            width="100%"
            height="100%"
            className="rounded-lg border border-gray-600"
          />
        </div>

        <div className="text-center mt-6">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-purple-600 
                   hover:from-fuchsia-600 hover:to-purple-700 text-white font-medium 
                   transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
