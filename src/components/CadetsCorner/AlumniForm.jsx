import React, { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumb";

function AlumniForm() {
  const breadcrumbs = [
    { label: "Home", href: "/", isCurrent: false },
    { label: "About", href: "/about", isCurrent: true },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    adm: "",
    batchNo: "",
    yearOfPassingSSPN: "",
    eduQualification: "",
    college: "",
    yearOfPassingClg: "",
    mobile: "",
    isAgree: true,
    house: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form Submitted:", formData);
  }

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={breadcrumbs}
        backgroundImage="https://sainikschoolpunglwa.nic.in/images/princ.jpg"
      />
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4 pb-20">
      
      <form
        onSubmit={submitHandler}
        className="w-full max-w-lg lg:max-w-4xl bg-white shadow-lg rounded-xl p-10 space-y-8"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Alumni Information Form
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="text-gray-600 font-medium">First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              onChange={changeHandler}
              name="firstName"
              value={formData.firstName}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="text-gray-600 font-medium">Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              onChange={changeHandler}
              name="lastName"
              value={formData.lastName}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="dob" className="text-gray-600 font-medium">Date of Birth</label>
            <input
              type="date"
              onChange={changeHandler}
              name="dob"
              value={formData.dob}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-gray-600 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={changeHandler}
              name="email"
              value={formData.email}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="adm" className="text-gray-600 font-medium">Admission Number</label>
            <input
              type="number"
              placeholder="Enter Admission Number"
              onChange={changeHandler}
              name="adm"
              value={formData.adm}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="batchNo" className="text-gray-600 font-medium">Batch Number</label>
            <input
              type="number"
              placeholder="Enter Batch Number"
              onChange={changeHandler}
              name="batchNo"
              value={formData.batchNo}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="yearOfPassingSSPN" className="text-gray-600 font-medium">Year of Passing (SSPN)</label>
            <input
              type="number"
              placeholder="Enter Year of Passing (SSPN)"
              onChange={changeHandler}
              name="yearOfPassingSSPN"
              value={formData.yearOfPassingSSPN}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="eduQualification" className="text-gray-600 font-medium">Educational Qualification</label>
            <input
              type="text"
              placeholder="Enter Educational Qualification"
              onChange={changeHandler}
              name="eduQualification"
              value={formData.eduQualification}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="college" className="text-gray-600 font-medium">College Name</label>
            <input
              type="text"
              placeholder="Enter College Name"
              onChange={changeHandler}
              name="college"
              value={formData.college}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="yearOfPassingClg" className="text-gray-600 font-medium">Year of Passing (College)</label>
            <input
              type="number"
              placeholder="Enter Year of Passing (College)"
              onChange={changeHandler}
              name="yearOfPassingClg"
              value={formData.yearOfPassingClg}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label htmlFor="mobile" className="text-gray-600 font-medium">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              onChange={changeHandler}
              name="mobile"
              value={formData.mobile}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            />
          </div>
          <div>
            <label htmlFor="house" className="text-gray-600 font-medium">Your House</label>
            <select
              name="house"
              id="house"
              value={formData.house}
              onChange={changeHandler}
              required
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
            >
              <option value="">Select House</option>
              <option value="Japfu">Japfu House</option>
              <option value="Patkai">Patkai House</option>
              <option value="Melak">Melak House</option>
              <option value="Saramati">Saramati House</option>
              <option value="Doyang">Doyang House</option>
              <option value="Tizu">Tizu House</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="comment" className="text-gray-600 font-medium">Comments</label>
          <textarea
            name="comment"
            cols="30"
            rows="4"
            placeholder="Remarks (Present Profession / Self Employed / Any other relevant information)"
            onChange={changeHandler}
            value={formData.comment}
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
          ></textarea>
        </div>

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            name="isAgree"
            onChange={changeHandler}
            id="isAgree"
            checked={formData.isAgree}
            required
            className="mr-2"
          />
          <label htmlFor="isAgree" className="text-gray-600 font-medium">
            Agree to Terms and Conditions
          </label>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-opacity-50 transition duration-300 font-semibold"
        >
          Submit
        </button>
      </form>

    </div>
  </div>
  );
}

export default AlumniForm;
