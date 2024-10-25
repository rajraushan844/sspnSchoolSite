import React from "react";
import ActiveGallery from "../Gallery/ActiveGallery";
import Title from "../Cards/Title";
import Breadcrumbs from "../Breadcrumbs/Breadcrumb";

const Ncc = () => {

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Academics", href: "/academic" },
        { label: "NCC", href: "/academic/ncc", isCurrent: true },
    ];

    const images = [
        "https://nagalandpost.com/wp-content/uploads/2024/10/NCC-annual-training-1-768x432.webp",
        "https://sainikschoolpunglwa.nic.in/images/NCC1.jpg",
        "https://sainikschoolpunglwa.nic.in/images/NCC2.jpg",
        "https://sainikschoolpunglwa.nic.in/images/NCC3.jpg",
        "https://sainikschoolpunglwa.nic.in/images/NCC4.jpg",
        "https://sainikschoolpunglwa.nic.in/images/NCC5.jpg",
        "https://sainikschoolpunglwa.nic.in/images/NCC6.jpg",
        "https://sainikschoolpunglwa.nic.in/images/NCC7.jpg",
        "https://sainikschoolpunglwa.nic.in/images/NCC8.jpg",
       
    ];
    return (
        <div>
            <Breadcrumbs breadcrumbs={breadcrumbs}
            backgroundImage="https://sainikschoolpunglwa.nic.in/images/princ.jpg" />
            <div className=" m-10">
                <Title title="NCC" />
            </div>
            <ActiveGallery images={images} />
        </div>
    );
};

export default Ncc;