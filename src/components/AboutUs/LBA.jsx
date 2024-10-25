import React from "react";
import TitleImgContent from "../TitleImgContent";


const LBA = () => {
  const aboutData = {
    title: "Local Board of Admistration",
    imageUrl: "https://sainikschoolpunglwa.nic.in/images/lba.jpg",
    content: `Chairman of the LBA
Principal & Member Secretary            :Maj Gen Vijay Jotwani, Chief of Staff, 3 Corps & Chairman, LBA
Hon'ble Member of Parliament Lok Sabha  :Col Arvind Nautiyal
Deputy Director & Nodal Officer         :Shri Tokheho Yepthomi, Member of Parliament, Lok Sabha
Deputy Commissioner                     :Smt Khriesano Nagi, Dte of School Education, Govt of Nagaland
Vice Principal                          :Shri Vineet Kumar, IAS, Deputy Commissioner, Peren District
Administrative Officer                  :Lt Col Leena Bajaj
PWD(H), Education Division              :Lt Col Sudhir Kumar
PS To Commr & Secretary, HTE            :Er Hukato, Superintendent Engineer
Educational Representative              :Shri K Kapfo, Principal, Jawahar Navodaya Vidyalaya, Jalukie.
Parents Representative                  :Shri Wati Lemtur
`,
  };

  return (
    <div>
      <TitleImgContent
        title={aboutData.title}
        imageUrl={aboutData.imageUrl}
        content={aboutData.content}
      />
    </div>
  );
};

export default LBA;
