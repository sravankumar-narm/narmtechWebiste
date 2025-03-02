import React from 'react'

function CancellationRefund() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-5xl shadow-lg rounded-2xl bg-white p-8 space-y-8">
                {/* Header */}
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Cancellation and Refund Policy
                </h2>

                {/* Content Sections */}
                <div className="space-y-8 text-lg text-gray-700">
                    {/* Section 1: No Refunds */}
                    <div>
                        <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
                            <span className="mr-2">❌</span> No Refunds
                        </h3>
                        <p>
                            Payments made are non-refundable under any circumstances.
                        </p>
                    </div>
                    <hr className="border-gray-300" />

                    {/* Section 2: No Cancellations */}
                    <div>
                        <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
                            <span className="mr-2">🚫</span> No Cancellations
                        </h3>
                        <p>
                            Once a service or product is purchased, cancellations are not permitted.
                        </p>
                    </div>
                    <hr className="border-gray-300" />

                    {/* Section 3: Final Sale */}
                    <div>
                        <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
                            <span className="mr-2">🛒</span> Final Sale
                        </h3>
                        <p>
                            All transactions are considered final and binding.
                        </p>
                    </div>
                    <hr className="border-gray-300" />

                    {/* Section 4: Policy Agreement */}
                    <div>
                        <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
                            <span className="mr-2">✅</span> Policy Agreement
                        </h3>
                        <p>
                            By completing a purchase, the customer acknowledges and agrees to this policy.
                        </p>
                    </div>
                    <hr className="border-gray-300" />

                    {/* Section 5: Exceptions */}
                    <div>
                        <h3 className="flex items-center font-semibold text-xl text-gray-900 mb-2">
                            <span className="mr-2">📝</span> Exceptions
                        </h3>
                        <p>
                            Any exceptions to this policy are at the sole discretion of the company and must be approved in writing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CancellationRefund