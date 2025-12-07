import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 flex justify-center">
      <div className="max-w-4xl bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="text-gray-700 mb-4">
          Welcome to PowMart. By accessing or using our website, you agree to
          follow the terms and conditions mentioned below. Please read them
          carefully.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">
          1. Use of Our Service
        </h2>
        <p className="text-gray-700 mb-4">
          PowMart provides a marketplace for pets and pet-related products. You
          agree to use our platform responsibly and not engage in any activities
          that may harm the platform or its users.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">
          2. User Responsibilities
        </h2>
        <p className="text-gray-700 mb-4">
          Users must provide accurate information when creating an account,
          posting items, or communicating. Any attempt to share false or harmful
          information is strictly prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">
          3. Product Listings
        </h2>
        <p className="text-gray-700 mb-4">
          All pets and products listed on PowMart must follow legal and ethical
          guidelines. Illegal, harmful, or unsafe items are not allowed.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">
          4. Payments & Transactions
        </h2>
        <p className="text-gray-700 mb-4">
          Payments made through PowMart must be valid and authorized. We are not
          responsible for dealing with buyers or sellers outside our platform’s
          secure channels.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">
          5. Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We respect your privacy. Your personal information will only be used
          to provide our services and will not be shared without your permission,
          except as required by law.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">
          6. Limitation of Liability
        </h2>
        <p className="text-gray-700 mb-4">
          PowMart is not responsible for any losses, damages, or disputes
          resulting from user actions or third-party interactions on the
          platform.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">
          7. Changes to Terms
        </h2>
        <p className="text-gray-700 mb-4">
          PowMart reserves the right to update or modify these Terms &
          Conditions at any time. Continued use of the website means you accept
          the updated terms.
        </p>

        <p className="text-gray-700 mt-8 text-center">
          If you have any questions about our Terms & Conditions, feel free to
          contact us at{" "}
          <span className="text-blue-600 font-medium">
            support@powmart.com
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default Terms;
