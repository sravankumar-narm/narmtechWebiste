import React, { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PersonalAcademicForm = ({ handleSubmitDetails }) => {
    // Fetch stored email & mobile from Registration Page
    // Fetch stored email & mobile from Registration Page
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        gender: "",
        college: "",
        university: "",
        course: "",
        specialization: "",
        pursuingYear: "",
        pursuingSemester: "",
        examStartDate: "",
        email: storedData.email || "",
        mobile: storedData.mobile || "",
        password: "",
        confirmPassword: "",
        pincode: "",
        location: "",
        district: "",
        state: "",
        country: "",
    });

    const [errors, setErrors] = useState({});
    const [locations, setLocations] = useState([]); // Store multiple location options
    const [loadingPincode, setLoadingPincode] = useState(false);
    const [locationError, setLocationError] = useState(""); // Store API error message

    // Handle Input Change & Clear Error Messages
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error when user types/selects
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
        if (locationError) setLocationError(""); // Clear error when user types

        // Fetch location details when valid 6-digit pincode is entered
        if (name === "pincode" && /^\d{6}$/.test(value)) {
            fetchLocationDetails(value);
        }
    };

    // **Function to Scroll to the First Error Field**
    const scrollToFirstError = () => {
        const errorFields = Object.keys(errors);
        if (errorFields.length > 0) {
            const firstErrorField = fieldRefs.current[errorFields[0]];
            if (firstErrorField) {
                firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
            }
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
                setFormData((prevData) => ({
                    ...prevData,
                    location: data.data[0].location,
                    district: data.data[0].district,
                    state: data.data[0].state,
                    country: data.data[0].country,
                }));
            } else {
                setLocationError("Unable to find location details. Please check your Pincode.");
                setLocations([]);
                setFormData((prevData) => ({
                    ...prevData,
                    location: "",
                    district: "",
                    state: "",
                    country: "",
                }));
            }
        } catch (error) {
            console.error("Error fetching location:", error);
            setLocationError("Failed to fetch location details. Try again later.");
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
            }));
        }
    };

    // Validate Form Before Submission
    const validateForm = () => {
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
        // if (!formData.dob) newErrors.dob = "Date of Birth is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.college.trim()) newErrors.college = "College Name is required";
        if (!formData.university.trim()) newErrors.university = "University is required";
        if (!formData.course) newErrors.course = "Course selection is required";
        if (!formData.specialization.trim()) newErrors.specialization = "Specialization is required";

        // Validate Pursuing Year (Calendar Year)
        const currentYear = new Date().getFullYear();
        const minYear = currentYear - 4; // Allow only past 4 years
        const maxYear = currentYear; // Only allow up to the current year

        // Validate Pursuing Year (Dropdown Values)
        const validYears = ["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year"];
        if (!formData.pursuingYear) {
            newErrors.pursuingYear = "Academic Year is required";
        } else if (!validYears.includes(formData.pursuingYear)) {
            newErrors.pursuingYear = "Invalid academic year format";
        }

        // Validate Pursuing Semester (Dropdown Values)
        if (!formData.pursuingSemester) {
            newErrors.pursuingSemester = "Semester is required";
        } else if (!["One", "Two"].includes(formData.pursuingSemester)) {
            newErrors.pursuingSemester = "Invalid semester format";
        }

        if (!formData.examStartDate) newErrors.examStartDate = "Semester Exam Start Date is required";

        // Password validation (Minimum 8 characters, at least one uppercase & one lowercase)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (!formData.password.trim()) {
            newErrors.password = "Password is required";
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = "Password must be at least 8 characters and contain both uppercase & lowercase letters";
        }

        if (!formData.confirmPassword.trim()) {
            newErrors.confirmPassword = "Confirm Password is required";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        // Pincode validation
        if (!formData.pincode.trim()) {
            newErrors.pincode = "Pincode is required";
        } else if (!/^\d{6}$/.test(formData.pincode)) {
            newErrors.pincode = "Pincode must be a 6-digit number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle Form Submission with API Call
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            // toast.error("Please fill all required fields.");
            scrollToFirstError(); // **Scroll to First Error Field**
            return;
        }

        setErrors({});

        // Debugging: Log the form data before sending
        console.log("Submitting Form Data:", formData);

        const payload = {
            platform: "Web",
            first_name: formData.firstName,
            middle_name: formData.middleName,
            last_name: formData.lastName,
            date_of_birth: formData.dob,
            gender: formData.gender,
            user_email: formData.email,
            user_phone_number: formData.mobile,
            password: formData.password,
            confirm_password: formData.confirmPassword,
            occupation_name: "Student",
            college_name: formData.college,
            university_name: formData.university,
            course: formData.course,
            specialization: formData.specialization,
            pursuing_year: parseInt(formData.pursuingYear, 10),
            pursuing_semester: formData.pursuingSemester,
            internship_start_date: formData.examStartDate,
            internship_end_date: new Date(new Date(formData.examStartDate).setMonth(new Date(formData.examStartDate).getMonth() + 1)).toISOString().split("T")[0],
            mentor_name: "CHIRANJEEVI REDDY",
            mentor_email: storedData.email,
            location_id: parseInt(formData.pincode, 10)
        };

        try {
            const response = await fetch("https://dev.quizifai.com:8010/intern_rgstr_dtls", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success("Details submitted successfully!");
                handleSubmitDetails();
                localStorage.setItem("registrationCompleted", "true");
            } else {
                toast.error(data.message || "Failed to submit details.");
            }
        } catch (error) {
            console.error("Error submitting details:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="p-8 bg-zinc-100 rounded-lg shadow-lg 
                h-[calc(100vh-45px)] 
                xl:h-[calc(100vh-45px)] 
                [@media(min-width:1450px)]:h-[calc(100vh-100px)] overflow-y-auto">
            <h3 className="text-xl font-semibold text-center mb-4">Personal & Academic Details</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>

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
                <div className="input-container">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-[5px] border border-gray-400 rounded-lg"
                    />
                    <span
                        className="eye-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </span>
                </div>

                <div className="input-container">
                    <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full p-[5px] border border-gray-400 rounded-lg"
                    />
                    <span
                        className="eye-icon"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                    </span>
                </div>

                <div>
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
                </div>

                {/* Academic Details */}
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

                {/* Pincode Field */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Pincode</label>
                    <input
                        type="text"
                        name="pincode"
                        placeholder="Enter Pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="w-full p-[5px] border border-gray-400 rounded-lg"
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
                        Current Academic Year
                    </label>
                    <select
                        id="pursuingYear"
                        name="pursuingYear"
                        value={formData.pursuingYear}
                        onChange={handleChange}
                        className="w-full p-[5px] border border-gray-400 rounded-lg"
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
                        Current Semester
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
                    <label htmlFor="examStartDate" className="block text-sm font-medium text-gray-700">Semester Exam Start Date</label>
                    <input id="examStartDate" type="date" name="examStartDate" value={formData.examStartDate} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                    {errors.examStartDate && <p className="text-red-500 text-xs">{errors.examStartDate}</p>}
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
                    Submit Details
                </button>
            </form>
        </div>
    );
};

export default PersonalAcademicForm;
