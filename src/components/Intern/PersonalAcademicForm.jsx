import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PersonalAcademicForm = ({ handleSubmitDetails }) => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};
    const [currentStep, setCurrentStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [locationError, setLocationError] = useState(""); // Store API error message
    const [locations, setLocations] = useState([]); // Store multiple location options
    const [apiError, setApiError] = useState(""); // Store API error message
    const formContainerRef = useRef(null);
    const [locationId, setLocationId] = useState(0);
    const [submittedError, setSubmittedError] = useState("");

    // References for input fields
    const refs = {
        firstName: useRef(null),
        lastName: useRef(null),
        dob: useRef(null),
        gender: useRef(null),
        password: useRef(null),
        confirmPassword: useRef(null),
        pincode: useRef(null),
        location: useRef(null),
        college: useRef(null),
        university: useRef(null),
        course: useRef(null),
        specialization: useRef(null),
        pursuingYear: useRef(null),
        pursuingSemester: useRef(null),
        examStartDate: useRef(null)
    };

    const [formData, setFormData] = useState({
        firstName: "", middleName: "", lastName: "", dob: "", gender: "",
        password: "", confirmPassword: "", pincode: "", location: "",
        district: "", state: "", country: "", college: "", university: "", location_id: 0,
        course: "", specialization: "", pursuingYear: "", pursuingSemester: "", examStartDate: "",
        email: storedData.email || "", mobile: storedData.mobile || ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
        if (locationError) setLocationError(""); // Clear error when user types

        // Fetch location details when valid 6-digit pincode is entered
        if (name === "pincode" && /^\d{6}$/.test(value)) {
            fetchLocationDetails(value);
        }
    };

    // 🔹 Scroll to First Error Field
    const scrollToErrorField = (errorFields) => {
        const firstErrorField = Object.keys(errorFields)[0];

        if (firstErrorField && refs[firstErrorField]?.current) {
            refs[firstErrorField].current.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
            });

            // Force focus after scrolling
            setTimeout(() => {
                refs[firstErrorField].current.focus();
            }, 300);
        }
    };


    // API Call to fetch location details
    const fetchLocationDetails = async (pincode) => {
        try {
            const response = await fetch("https://dev.quizifai.com:8010/location_details/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJOVFBMICBBZG1pbiIsImV4cCI6MjUzNDAyMzAwNzk5fQ.G1AMvRDZ798-uvCmTEs1fK6nKKakmS1v43mp2RcUuVg",
                },
                body: JSON.stringify({ pincode }),
            });
            const data = await response.json();
            if (response.ok && data.response === "success" && data.data.length > 0) {
                setLocations(data.data);
                const firstLocation = data.data[0];
                setFormData((prevData) => ({
                    ...prevData,
                    location: firstLocation.location,
                    district: firstLocation.district,
                    state: firstLocation.state,
                    country: firstLocation.country,
                    location_id: firstLocation.location_id, // Update formData.location_id
                }));
                setLocationId(firstLocation.location_id); // Update locationId
            } else {
                setLocationError("Unable to find location details. Please check your Pincode.");
                setLocations([]);
                setFormData((prevData) => ({
                    ...prevData,
                    location: "",
                    district: "",
                    state: "",
                    country: "",
                    location_id: "", // Clear formData.location_id
                }));
                setLocationId(0); // Reset locationId
            }
        } catch (error) {
            console.error("Error fetching location:", error);
            setLocationError("Failed to fetch location details. Try again later.");
            setLocationId(0); // Reset locationId
        }
    };

    // Handle location selection
    const handleLocationChange = (e) => {
        const selectedLocation = locations.find(loc => loc.location === e.target.value);
        if (selectedLocation) {
            setFormData((prevData) => ({
                ...prevData,
                location: selectedLocation.location,
                district: selectedLocation.district,
                state: selectedLocation.state,
                country: selectedLocation.country,
                location_id: selectedLocation.location_id, // Update formData.location_id
            }));
            setLocationId(selectedLocation.location_id); // Update locationId
        }
    };


    // 🔹 Validate Personal Information
    const validatePersonalInfo = () => {
        let newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
        // Validate Date of Birth (Must be at least 18 years old)
        const today = new Date();
        const minDOB = new Date();
        minDOB.setFullYear(today.getFullYear() - 18); // Must be at least 18 years old

        if (!formData.dob) {
            newErrors.dob = "Date of Birth is required";
        } else if (new Date(formData.dob) > minDOB) {
            newErrors.dob = "You must be at least 18 years old";
        }
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        } else if (!/[a-z]/.test(formData.password)) {
            newErrors.password = "Password must contain at least one lowercase letter";
        } else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = "Password must contain at least one uppercase letter";
        } else if (!/[0-9]/.test(formData.password)) {
            newErrors.password = "Password must contain at least one number";
        }

        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = "Confirm Password is required";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required";
        if (!formData.location.trim()) newErrors.location = "Location is required";
        if (!formData.district.trim()) newErrors.district = "District is required";
        if (!formData.state.trim()) newErrors.state = "State is required";
        if (!formData.country.trim()) newErrors.country = "Country is required";
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            scrollToErrorField(newErrors);
            return false;
        }

        setCurrentStep(2);
        return true;
    };

    // 🔹 Validate Academic Information
    const validateAcademicInfo = () => {
        let newErrors = {};
        if (!formData.college.trim()) newErrors.college = "College Name is required";
        if (!formData.university.trim()) newErrors.university = "University is required";
        if (!formData.course) newErrors.course = "Course selection is required";
        // if (!formData.specialization.trim()) newErrors.specialization = "Specialization is required";
        // Remove specialization validation if course is "MCA"
        if (formData.course !== "MCA" && !formData.specialization.trim()) {
            console.log('formData.course  - ', formData.course)
            newErrors.specialization = "Specialization is required";
        }
        if (!formData.pursuingYear) newErrors.pursuingYear = "Academic Year is required";
        if (!formData.pursuingSemester) newErrors.pursuingSemester = "Semester is required";
        if (!formData.examStartDate) newErrors.examStartDate = "Semester Exam Start Date is required";

        setErrors(newErrors);

        // Return true if no errors, else false
        return Object.keys(newErrors).length === 0;
    };

    // 🔹 Handle Final Submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload
        if (!validateAcademicInfo()) {
            setApiError("Please fill all required fields.");
            return;
        }
        setApiError(""); // Clear previous errors
        setSubmittedError(""); // Clear any previous submission errors

        const payload = {
            platform: "Web",
            first_name: formData.firstName.trim(),
            middle_name: formData.middleName.trim() || "",
            last_name: formData.lastName.trim(),
            date_of_birth: formData.dob,
            gender: formData.gender,
            user_email: formData.email.trim(),
            user_phone_number: formData.mobile.trim(),
            password: formData.password,
            confirm_password: formData.confirmPassword,
            occupation_name: "Student",
            college_name: formData.college.trim(),
            university_name: formData.university.trim(),
            course: formData.course.trim(),
            specialization: formData.course === "MCA" ? "" : formData.specialization.trim(), // Ensure empty string for MCA
            pursuing_year: formData.pursuingYear ? parseInt(formData.pursuingYear, 10) : null, // Ensure number
            pursuing_semester: formData.pursuingSemester.trim(),
            internship_start_date: formData.examStartDate,
            internship_end_date: new Date(new Date(formData.examStartDate).setMonth(new Date(formData.examStartDate).getMonth() + 1)).toISOString().split("T")[0],
            mentor_name: "",
            mentor_email: "",
            location_id: locationId, // Use locationId here
        };

        // Debug logs
        console.log("Submitting Payload:", JSON.stringify(payload, null, 2));
        console.log("Submitting Payload:", payload);
        try {
            const response = await fetch("https://dev.quizifai.com:8010/intern_rgstr_dtls", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const data = await response.json();
            console.log("API Response:", data);

            if (response.ok && data.response === "success") {
                // Handle successful submission
                handleSubmitDetails();
                localStorage.setItem("registrationCompleted", "true");
            } else {
                // Handle API error response
                const errorMessage = data.response_message || "Failed to submit details.";
                setSubmittedError(errorMessage); // Set submittedError state
            }
        } catch (error) {
            console.error("Error submitting details:", error);
            setSubmittedError("Something went wrong. Please try again."); // Set submittedError state
        }
    };

    return (
        <div className="p-8 bg-zinc-100 rounded-lg shadow-lg h-[calc(100vh-45px)] overflow-y-auto">
            <h3 className="text-xl font-semibold text-center mb-4">
                {currentStep === 1 ? "Personal Information" : "Academic Information"}
            </h3>

            <form className="space-y-4">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                    <>
                        {/* Personal Details */}
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                            <input id="firstName" type="text" name="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                        </div>

                        <div>
                            <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">Middle Name (Optional)</label>
                            <input id="middleName" type="text" name="middleName" placeholder="Enter Middle Name" value={formData.middleName} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input id="lastName" type="text" name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                        </div>

                        {/* <div>
                                            <label className="block text-sm font-medium text-gray-700">Password</label>
                                            <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                                            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                                        </div> */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <span
                                className="absolute right-3 top-10 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                            </span>
                            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                        </div>

                        <div className="relative mt-4">
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <span
                                className="absolute right-3 top-10 transform -translate-y-1/2 cursor-pointer text-gray-500"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                            </span>
                            {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
                        </div>


                        {/* <div>
                            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                            <input id="dob" type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                            {errors.dob && <p className="text-red-500 text-xs">{errors.dob}</p>}
                        </div>

                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full p-3 border rounded-lg">
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
                        </div> */}
                        {/* DOB and Gender in a Single Line */}
                        <div className="flex gap-4">
                            {/* Date of Birth Field */}
                            <div className="flex-1">
                                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                <input
                                    id="dob"
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg"
                                />
                                {errors.dob && <p className="text-red-500 text-xs">{errors.dob}</p>}
                            </div>

                            {/* Gender Field */}
                            <div className="flex-1">
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg"
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
                            </div>
                        </div>
                        {/* Pincode Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Pincode</label>
                            <input
                                type="text"
                                name="pincode"
                                placeholder="Enter Pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-400 rounded-lg"
                            />
                            {errors.pincode && <p className="text-red-500 text-xs">{errors.pincode}</p>}
                            {locationError && <p className="text-red-500 text-xs">{locationError}</p>}
                        </div>

                        {/* Location Dropdown (Appears only if multiple options exist) */}
                        {locations.length > 1 && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Select Location</label>
                                <select
                                    name="location"
                                    value={formData.location}
                                    onChange={handleLocationChange}
                                    className="w-full p-3 border rounded-lg"
                                >
                                    {locations.map((loc) => (
                                        <option key={loc.location_id} value={loc.location}>
                                            {loc.location} - {loc.district}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Auto-filled District */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">District</label>
                            <input
                                type="text"
                                name="district"
                                value={formData.district}
                                readOnly
                                className="w-full p-3 border bg-gray-100 rounded-lg"
                                placeholder="District"
                            />
                        </div>

                        {/* Auto-filled State */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">State</label>
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                readOnly
                                className="w-full p-3 border bg-gray-100 rounded-lg"
                                placeholder="State"
                            />
                        </div>

                        {/* Auto-filled Country */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Country</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                readOnly
                                className="w-full p-3 border bg-gray-100 rounded-lg"
                                placeholder="Country"
                            />
                        </div>

                        <button type="button" onClick={validatePersonalInfo} className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
                            Next
                        </button>
                    </>
                )}

                {/* Step 2: Academic Information */}
                {currentStep === 2 && (
                    <>
                        <div>
                            <label htmlFor="college" className="block text-sm font-medium text-gray-700">College Name</label>
                            <input id="college" type="text" name="college" placeholder="Enter College Name" value={formData.college} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                            {errors.college && <p className="text-red-500 text-xs">{errors.college}</p>}
                        </div>

                        <div>
                            <label htmlFor="university" className="block text-sm font-medium text-gray-700">University</label>
                            <input id="university" type="text" name="university" placeholder="Enter University Name" value={formData.university} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                            {errors.university && <p className="text-red-500 text-xs">{errors.university}</p>}
                        </div>
                        <div>
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
                            <select id="course" name="course" value={formData.course} onChange={handleChange} className="w-full p-3 border rounded-lg">
                                <option value="">Select Course</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="MCA">MCA</option>
                                <option value="B.Sc.">B.Sc.</option>
                                <option value="M.Sc.">M.Sc.</option>
                            </select>
                            {errors.course && <p className="text-red-500 text-xs">{errors.course}</p>}
                        </div>
                        <div>
                            <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization</label>
                            <input id="specialization" type="text" name="specialization" placeholder="Enter Specialization" value={formData.specialization} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                            {errors.specialization && <p className="text-red-500 text-xs">{errors.specialization}</p>}
                        </div>

                        <div>
                            <label htmlFor="pursuingYear" className="block text-sm font-medium text-gray-700">
                                Pursuing Academic Year
                            </label>
                            <select
                                id="pursuingYear"
                                name="pursuingYear"
                                value={formData.pursuingYear}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-400 rounded-lg"
                            >
                                <option value="">Select Academic Year</option>
                                <option value="1st Year">1st Year</option>
                                <option value="2nd Year">2nd Year</option>
                                <option value="3rd Year">3rd Year</option>
                                <option value="4th Year">4th Year</option>
                                <option value="5th Year">5th Year</option>
                            </select>
                            {errors.pursuingYear && <p className="text-red-500 text-xs">{errors.pursuingYear}</p>}
                        </div>

                        <div>
                            <label htmlFor="pursuingSemester" className="block text-sm font-medium text-gray-700">
                                Pursuing Semester
                            </label>
                            <select
                                id="pursuingSemester"
                                name="pursuingSemester"
                                value={formData.pursuingSemester}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg"
                            >
                                <option value="">Select Semester</option>
                                <option value="One">One</option>
                                <option value="Two">Two</option>
                            </select>
                            {errors.pursuingSemester && <p className="text-red-500 text-xs">{errors.pursuingSemester}</p>}
                        </div>

                        <div>
                            <label htmlFor="examStartDate" className="block text-sm font-medium text-gray-700">Semester Exam Start Date (Tentative)</label>
                            <input id="examStartDate" type="date" name="examStartDate" value={formData.examStartDate} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                            {errors.examStartDate && <p className="text-red-500 text-xs">{errors.examStartDate}</p>}
                        </div>

                        <div className="flex justify-between">
                            <button type="button" onClick={() => setCurrentStep(1)} className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                                Back
                            </button>

                            <button type="button" onClick={(e) => handleSubmit(e)} className="bg-blue-600 text-white px-6 py-2 rounded-lg">
                                Submit
                            </button>
                        </div>
                        {/* Display API error message if it exists */}
                        {<p className="text-red-500 text-sm mt-2">{submittedError}</p>}
                        {apiError && <p className="text-red-500 text-sm mt-2">{apiError}</p>}
                    </>
                )}
            </form>
        </div>
    );
};

export default PersonalAcademicForm;
