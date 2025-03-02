import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-5xl shadow-lg rounded-2xl bg-white p-8 space-y-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Privacy Policy
        </h2>

        {/* Content Sections */}
        <div className="space-y-8 text-lg text-gray-700">
          {/* Section 1 */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">📋</span> Personal Information Collection
            </h3>
            <p>
              We collect personal details, including your name, contact information, academic records, and other data required for processing your application and managing the internship.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Section 2 */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">📊</span> Usage of Information
            </h3>
            <p>
              Your personal information is used solely for recruitment, training, and internship management purposes.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Section 3 */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">🔗</span> Data Sharing
            </h3>
            <p>
              Your information will not be shared with third parties unless required by law or necessary for program facilitation.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Section 4 */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">🔒</span> Data Security
            </h3>
            <p>
              We implement reasonable measures to protect your personal data against unauthorized access, alteration, or disclosure.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Section 5 */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">📝</span> Access and Correction
            </h3>
            <p>
              You may request access to or correction of your personal information at any time by contacting our HR department.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Section 6 */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">⏳</span> Retention of Data
            </h3>
            <p>
              Your data will be retained for the internship and for a limited period afterward as per legal and business requirements.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Section 7 */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">✅</span> Consent
            </h3>
            <p>
              By signing up, you consent to our collection, use, and processing of your data as outlined in this Privacy Policy.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Section 8 */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">🔄</span> Policy Updates
            </h3>
            <p>
              We reserve the right to update this Privacy Policy. Significant changes will be communicated to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;