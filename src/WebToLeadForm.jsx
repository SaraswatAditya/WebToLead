import React from "react";
import { toast, Toaster } from "react-hot-toast";

const WebToLeadForm = () => {
  // Function to handle form submission and show a toast
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form from submitting immediately
    toast.success("Form submitted successfully!", {
      duration: 4000,
      position: "top-right",
    });
    e.target.submit(); // Submits the form after showing the toast
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 via-pink-200 to-red-300 p-4">
      <div>
        <Toaster />
      </div>
      <form
        className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DNS000001DcJs"
        method="POST"
        onSubmit={handleSubmit} // Call handleSubmit on form submission
      >
        <input type="hidden" name="oid" value="00DNS000001DcJs" />
        <input
          type="hidden"
          name="retURL"
          value="https://web-to-lead-aditya-saraswats-projects.vercel.app"
        />

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Web Form</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">
            First Name
          </label>
          <input
            id="first_name"
            maxLength="40"
            name="first_name"
            type="text"
            placeholder="First Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last_name">
            Last Name
          </label>
          <input
            id="last_name"
            maxLength="80"
            name="last_name"
            type="text"
            placeholder="Last Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            maxLength="40"
            name="phone"
            type="text"
            placeholder="Phone Number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            maxLength="80"
            name="email"
            type="text"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            maxLength="40"
            name="company"
            type="text"
            placeholder="Company"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-center">
          <input
            type="submit"
            value="Submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          />
        </div>
      </form>
    </div>
  );
};

export default WebToLeadForm;
