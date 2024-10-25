import React from "react";

const Title = ({ title }) => {
    return (
        <h2 className="text-3xl font-bold text-white bg-orange-800 text-center rounded-lg p-4 hover:bg-gray-600 shadow-lg transition duration-300 ease-in-out">
            {title}
        </h2>
    );
};

export default Title;