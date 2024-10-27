import React from "react";
import Title from "../Cards/Title";
import Breadcrumbs from "../Breadcrumbs/Breadcrumb";
import PDFViewer from "./PDFviewer";

function AnualMagzine() {
  const breadcrumbs = [
    { label: "Home", href: "/", isCurrent: false },
    { label: "Publications", href: "/publications", isCurrent: false },
    {
      label: "Annual Magazine",
      href: "/publications/annual-magazine",
      isCurrent: true,
    },
  ];

  return (
    <>
      <Breadcrumbs
        breadcrumbs={breadcrumbs}
        backgroundImage="https://sainikschoolpunglwa.nic.in/images/princ.jpg"
      />
      <div className="m-10">
        <Title title="Annual Magazine" />
      </div>

      <PDFViewer
      title="Vibrant Strings-XIV Edition"
      pdfUrl="/Annualmagazine.pdf"
      downloadName="VibrantStringsXIV.pdf"
    />
    </>
  );
}

export default AnualMagzine;
