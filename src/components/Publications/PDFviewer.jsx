import React from "react";

const PDFViewer = ({ title, pdfUrl, downloadName }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 mb-20">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          {title}
        </h1>
        <div className="relative">
          <iframe
            src={pdfUrl}
            className="w-full h-[800px] border border-gray-300 rounded-lg shadow-md"
            title="PDF Viewer"
          />
        </div>
        <a
          href={pdfUrl}
          download={downloadName}
          className="mt-4 inline-block mx-auto bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-800 transition duration-200"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default PDFViewer;
