import React from "react";
import Title from "../Cards/Title";
import Breadcrumbs from "../Breadcrumbs/Breadcrumb";
import PDFViewer from "./PDFviewer";

function AnualMagzine() {
  const breadcrumbs = [
    { label: "Home", href: "/", isCurrent: false },
    { label: "Publications", href: "/publications", isCurrent: false },
    { label: "Annual Magazine",href: "/publications/cadets-magazine",isCurrent: true},
  ];

  return (
    <>
      <Breadcrumbs
        breadcrumbs={breadcrumbs}
        backgroundImage="https://sainikschoolpunglwa.nic.in/images/princ.jpg"
      />
      <div className="m-10">
        <Title title="Cadets Magazine" />
      </div>

      <PDFViewer
      title="VYWOM"
      pdfUrl="/VYWOM.pdf"
      downloadName="VYWOM.pdf"
    />
    </>
  );
}

export default AnualMagzine;
