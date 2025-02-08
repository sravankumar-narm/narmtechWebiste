import React, { useState } from "react";
import { toast } from "react-toastify";

const PersonalAcademicForm = ({ handleSubmitDetails }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        dob: "",
        gender: "",
        college: "",
        university: "",
        course: "",  // ✅ Course field added
        specialization: "",
        yearSemester: "",
        examStartDate: "",
    });

    const [errors, setErrors] = useState({});

    // Handle Input Change & Clear Error Messages
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error when user types/selects
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    // Validate Form Before Submission
    const validateForm = () => {
        let newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
        if (!formData.dob) newErrors.dob = "Date of Birth is required";
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!formData.college.trim()) newErrors.college = "College Name is required";
        if (!formData.university.trim()) newErrors.university = "University is required";
        if (!formData.course) newErrors.course = "Course selection is required"; // ✅ Added validation for Course
        if (!formData.specialization.trim()) newErrors.specialization = "Specialization is required";
        if (!formData.yearSemester.trim()) newErrors.yearSemester = "Year & Semester are required";
        if (!formData.examStartDate) newErrors.examStartDate = "Semester Exam Start Date is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form Data Before Submission:", formData); // Debugging

        if (validateForm()) {
            setErrors({});
            toast.success("Details submitted successfully!");
            handleSubmitDetails();

            // Auto scroll to top after successful submission
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            toast.error("Please fill all required fields.");
        }
    };


    return (
        <div className="p-8 bg-gray-50 rounded-lg shadow-lg">
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

                <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
                    <select id="course" name="course" value={formData.course} onChange={handleChange} className="w-full p-3 border rounded-lg">
                        <option value="">Select Course</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="MCA">MCA</option>
                        <option value="B.Sc. Computers">B.Sc. Computers</option>
                        <option value="M.Sc. Computers">M.Sc. Computers</option>
                    </select>
                    {errors.course && <p className="text-red-500 text-xs">{errors.course}</p>}
                </div>
                <div>
                    <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Specialization</label>
                    <input id="specialization" type="text" name="specialization" placeholder="Enter Specialization" value={formData.specialization} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                    {errors.specialization && <p className="text-red-500 text-xs">{errors.specialization}</p>}
                </div>

                <div>
                    <label htmlFor="yearSemester" className="block text-sm font-medium text-gray-700">Pursuing Year & Semester</label>
                    <input id="yearSemester" type="text" name="yearSemester" placeholder="Enter Year & Semester" value={formData.yearSemester} onChange={handleChange} className="w-full p-3 border rounded-lg" />
                    {errors.yearSemester && <p className="text-red-500 text-xs">{errors.yearSemester}</p>}
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
