import React from 'react';

function TermsAndConditions() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-5xl shadow-lg rounded-2xl bg-white p-8 space-y-8">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Terms and Conditions
        </h2>

        {/* Content Sections */}
        <div className="space-y-8 text-lg text-gray-700">
          {/* Section 1: Eligibility */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">✅</span> Eligibility
            </h3>
            <p>
              By signing up for the internship program, you confirm that you meet the eligibility criteria, including age, educational qualifications, and other requirements specified in the internship description.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Section 2: Commitment */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">📅</span> Commitment
            </h3>
            <p>
              Interns are expected to adhere to the internship schedule, complete assigned tasks, and maintain a professional attitude throughout the program.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Section 3: Confidentiality */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">🔒</span> Confidentiality
            </h3>
            <p>
              Interns must maintain confidentiality regarding any sensitive information, documents, or data accessed during the internship. Unauthorized sharing or misuse will result in immediate termination and potential legal action.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Section 4: Stipend and Benefits */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">💸</span> Stipend and Benefits
            </h3>
            <p>
              The internship program is unpaid. No stipend or monetary compensation will be provided. However, as part of the program, interns will gain valuable hands-on experience, enhancing their practical skills and knowledge. Upon successful completion, interns will receive a certificate of completion as a formal acknowledgment of their efforts and accomplishments.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Section 5: Intellectual Property */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">📝</span> Intellectual Property
            </h3>
            <p>
              Any work created or developed during the internship is the sole intellectual property of the company unless explicitly stated otherwise.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Section 6: Termination */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">⚠️</span> Termination
            </h3>
            <p>
              The company reserves the right to terminate the internship for reasons including but not limited to non-performance, misconduct, or breach of terms.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Section 7: Compliance */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">📜</span> Compliance
            </h3>
            <p>
              Interns must comply with company policies, code of conduct, and applicable laws throughout the internship.
            </p>
          </div>
          <hr className="border-gray-300" />

          {/* Section 8: Amendments */}
          <div>
            <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
              <span className="mr-2">🔄</span> Amendments
            </h3>
            <p>
              The company may update these terms and conditions and schedule at any time. Interns will be notified of significant changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;