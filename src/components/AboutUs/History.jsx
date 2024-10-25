import React from "react";
import Title from "../Cards/Title";
import TitleImgContent from "../TitleImgContent";

const History = () => {
const historyData = {
    title: "History",
    imageUrl: "https://sainikschoolpunglwa.nic.in/images/6.jpg",
    content: `Sainik School Punglwa (Nagaland) was inaugurated by the former Hon'ble Raksha Mantri Shri AK Antony On 12 May 2007,.  The establishment of the school was the result of the initiative of  Nagaland Chapter of the Old Boys Association of Sainik Schools under the able leadership of the Chief Minister of Nagaland, Shri Neiphiu Rio, an alumnus of Sainik School, Purulia (WB).
    This is a fully residential school for boys only and caters for maximum strength of 600 boys. It is administered by an autonomous body known as Sainik Schools Society having a Board of Governors, with Raksha Rajya  Mantri as the Chairman.The Chief Ministers or Education Ministers of States where the Sainik Schools are located are also the members of the Board of Governors. The School has a Local Board of Administration (LBA) which oversees the administration of the School and ensures that the general policies laid down by Board of Governors are implemented aptly. The Chief of Staff, 3 Corps is the Chairman of LBA. The Principal, a senior Defence Officer, is the administrative and the academic head of the institution. He is assisted by Vice Principal and Adm Officer,  well-qualified and reasonably experienced academic and administrative staff.`
    
}

    return (
        <div>
            
            <TitleImgContent
        title={historyData.title}
        imageUrl={ historyData.imageUrl}
        content={historyData.content}
      />

        </div>
        

            );
};

export default History;