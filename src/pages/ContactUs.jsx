import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BgSvg from "../assets/contact/bg.png";
import ContactImg from "../assets/contact/contact.png";
import BgImg from "../assets/consulting/bg.png";
import { FaUser } from "react-icons/fa";
import { SlScreenSmartphone } from "react-icons/sl";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiMessageDetail } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import TextField from "@mui/material/TextField";
import { data } from "autoprefixer";
import axios from "axios";
import { Input } from "@material-tailwind/react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import the icon you want to use


const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("products");
  const [customInput, setCustomInput] = useState("");
  const [apiErrorMessage, setApiErrorMessage] = useState("");
  const [apiSuccessMessage, setApiSuccessMessage] = useState("");
  // const [isAdhyaynDropdownOpen, setIsAdhyaynDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // const toggleAdhyaynDropdown = () => {
  //   setIsAdhyaynDropdownOpen(!isAdhyaynDropdownOpen);
  // };

  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email_address: "",
    enquiry_about: "",
    enquiry_details: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email_address: "",
    enquiry_about: "",
    enquiry_details: "",
    message: "",
  });

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value); // Update selected option state
    setData({
      ...data,
      enquiry_about: e.target.value, // Set enquiry_about based on selection
      enquiry_details: "", // Reset enquiry_details when option changes
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Validate each field
    if (data.first_name.trim() === "") {
      newErrors.first_name = "First name is required";
      valid = false;
    } else {
      newErrors.first_name = "";
    }

    if (data.last_name.trim() === "") {
      newErrors.last_name = "Last name is required";
      valid = false;
    } else {
      newErrors.last_name = "";
    }

    if (!/^\d{10}$/.test(data.phone_number)) {
      newErrors.phone_number = "Invalid phone number";
      valid = false;
    } else {
      newErrors.phone_number = "";
    }

    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email_address)
    ) {
      newErrors.email_address = "Invalid email address";
      valid = false;
    } else {
      newErrors.email_address = "";
    }

    if (data.message.trim() === "") {
      newErrors.message = "Message is required";
      valid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    if (validateForm()) {
      try {
        // const newData = { ...data };

        // // Include selected dropdown parameters in newData
        // newData.selectedOption = selectedOption;
        // newData.customInput = customInput;
        // Submit the form data if valid
        await axios.post(
          "https://narmtech-adhoc.centralindia.cloudapp.azure.com:8010/website_contact_us_email",
          data
        );
        toast.success("Email sent successfully!");
        setApiSuccessMessage("Email sent successfully!");
        setApiErrorMessage("");
        console.log("Form Data:", data);
        setSelectedOption("products");
        setCustomInput("");
        // Clear the form data after successful submission
        setData({
          first_name: "",
          last_name: "",
          phone_number: "",
          email_address: "",
          enquiry_about: "",
          enquiry_details: "",
          message: "",
        });
      } catch (error) {
        console.error("Error sending email:", error);
        setApiErrorMessage(error.message || "Failed to send email. Please try again later.");
        setApiSuccessMessage("");
        toast.error("Failed to send email. Please try again later.");
      }
    } else {
      // Display error message if form is invalid
      toast.error("Please fill in all required fields correctly.");
      setApiErrorMessage("Please fill in all required fields correctly.");
      setApiSuccessMessage("");
    }
  };

  return (
    <>
      <div className=" overflow-hidden mt-10 md:mt-0">
        <Navbar />
        {/* <ToastContainer /> */}
        <div className="relative">
          <div className="relative z-10 container min-h-[700px] flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 ">
              {/* image section */}
              <div className="flex justify-center items-center sm:w-[500px] ">
                <img src={ContactImg} alt="" className="" />
              </div>

              {/* contact form section */}
              <div className="space-y-5 ">
                {/* heading section */}
                <div>
                  <h1 className="text-4xl font-semibold mb-4 text-[#0B3A55]">
                    Get In Touch With Us
                  </h1>
                  <p className="text-xl text-black/80">
                    {" "}
                    Feel free to contact us by using the below Form.
                  </p>
                </div>

                {/* form section */}
                <form onSubmit={handleSubmit}>
                  <div className="bg-[#F1F1FF] grid gap-4 p-8 rounded-3xl border-[3px] border-[#F1F1F1]">
                    <div className=" grid  md:flex md:justify-between gap-2">
                      <div className=" ">
                        <div>
                        <FaUser className="absolute flex mt-4 z-10 right-[55px] sm:right-[110px] md:right-[393px] lg:right-[274px] xl:right-[373px] 2xl:right-[488px] text-[#684FFF] " />
                        </div>
                        <TextField
                          type="text"
                          id=""
                          className="w-full mb-4 px-7 py-4 rounded-xl bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                          name="first_name"
                          value={data.first_name}
                          onChange={handleChange}
                          variant="outlined"
                          label="First Name"
                          icon={<FaUser />}
                          InputProps={{
                            style: {
                              height: "50px",
                              border: "none",
                              paddingLeft: "0px",
                              paddingRight: "10px",
                              borderRadius: "10px",
                              backgroundColor: "#ffffff",
                            
                            },
                          //   startAdornment: (
                          //     <FaUser style={{ color: "#C7C4FF", marginright:"30px" }} /> // Adjust color as needed
                          // ),
                          }}
                          // className="w-full 2xl:w-[300px]  mb-4 px-7 py-4 rounded-xl bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                        />

                        {errors.first_name && (
                          <p className="text-red-500">{errors.first_name}</p>
                        )}
                      </div>
                      <div>
                        <FaUser className="absolute flex mt-4 z-10 right-[55px] sm:right-[110px] md:right-[163px] lg:right-[70px] xl:right-[144px] 2xl:right-[249px] text-[#684FFF]" />
                        <TextField
                          type="text"
                          id=""
                          className="w-full mb-4 px-7 py-4 rounded-xl bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                          name="last_name"
                          variant="outlined"
                          value={data.last_name}
                          onChange={handleChange}
                          // className="w-full 2xl:w-[300px] mb-4 px-7 py-4 rounded-xl bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                          label="Last Name"
                          InputProps={{
                            style: {
                              height: "50px",
                              border: "none",
                              paddingLeft: "0px",
                              paddingRight: "10px",
                              borderRadius: "10px",
                              backgroundColor: "#ffffff",
                            },
                          }}
                        />
                        {errors.last_name && (
                          <p className="text-red-500">{errors.last_name}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex">
                    <div>
                    <SlScreenSmartphone className="absolute flex mt-4 z-10 right-[55px] sm:right-[110px] md:right-[163px] lg:right-[70px] xl:right-[144px] 2xl:right-[249px] text-[#684FFF]" />
                    </div>
                    <TextField
                      type="tel"
                      id=""
                      name="phone_number"
                      variant="outlined"
                      value={data.phone_number}
                      onChange={handleChange}
                      label="Mobile Number"
                      maxLength="10"
                      minLength="10"
                      InputProps={{
                        style: {
                          maxheight: "50px",
                          border: "none",
                          paddingLeft: "0px",
                          paddingRight: "10px",
                          borderRadius: "10px",
                          backgroundColor: "#ffffff",
                        
                        },
                      }}
                      className="w-full mb-4 px-7 py-4 rounded-xl bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                      />
                      </div>
                    {errors.phone_number && (
                      <p className="text-red-500">{errors.phone_number}</p>
                    )}
                    <div className="flex ">
                    <div>
                    <MdOutlineMailOutline className="absolute  z-10 right-[55px] sm:right-[110px] md:right-[163px] lg:right-[70px] xl:right-[144px] 2xl:right-[249px] flex mt-4 text-[#684FFF]" />
                    </div>
                    <TextField
                      type="email"
                      id=""
                      variant="outlined"
                      name="email_address"
                      value={data.email_address}
                      onChange={handleChange}
                      label="Email Address"
                      InputProps={{
                        style: {
                          height: "50px",
                          border: "none",
                          paddingLeft: "0px",
                          paddingRight: "10px",
                          borderRadius: "10px",
                          backgroundColor: "#ffffff",
                        
                        },
                    
                      }}
                      className="w-full mb-4 px-7 py-4 rounded-xl bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                      />
                      </div>
                    {errors.email_address && (
                      <p className="text-red-500">{errors.email_address}</p>
                    )}
                    <div className="relative w-full flex p-2 gap-4 ">
                      <div className="">
                        <p>Enquiry About : </p>
                      </div>
                      <div className="rounded-sm">
                        <select
                          value={selectedOption}
                          onChange={handleOptionChange}
                          className="rounded-xl"
                        >
                          {/* <option value="">Select Option</option> */}
                          <option value="products">Products</option>
                          <option value="services">Services</option>
                          <option value="Intership">Intership</option>
                          <option value="others">Others</option>
                        </select>
                      </div>
                      {selectedOption === "products" && (
                        <div className="">
                          <select
                            className="rounded-xl"
                            value={data.enquiry_details}
                            onChange={(e) =>
                              setData({
                                ...data,
                                enquiry_details: e.target.value,
                              })
                            }
                          >
                            <option value="Adhyayn">Adhyayn</option>
                            <option value="Nyayah">Nyayah</option>
                            <option value="QuizifAI">QuizifAI</option>
                            <option value="Vyayah">Vyayah</option>
                            <option value="Vyavasayah">Vyavasayah</option>
                          </select>
                        </div>
                      )}
                      {selectedOption === "services" && (
                        <div className="">
                          <select
                            className="rounded-xl"
                            value={data.enquiry_details}
                            onChange={(e) =>
                              setData({
                                ...data,
                                enquiry_details: e.target.value,
                              })
                            }
                          >
                            <option value="SaaSApplications">
                              SaaS Applications
                            </option>
                            <option value="AI&LLM">AI & LLM</option>
                            <option value="UI&UX">UI & UX</option>
                            <option value="CloudSolutions">
                              Cloud Solutions
                            </option>
                          </select>
                        </div>
                      )}
                      {/* {selectedOption === "others" && (
                        <div className="">
                          <select
                            className="rounded-xl"
                            value={data.enquiry_details}
                            onChange={(e) =>
                              setData({
                                ...data,
                                enquiry_details: e.target.value,
                              })
                            }
                          >
                            <option value="others">other</option>
                          </select>
                        </div>
                      )} */}
                      {(selectedOption === "services" ||
                        selectedOption === "others") && (
                        <div className="">
                          <input
                            type="text"
                            placeholder={`Enter ${selectedOption}`}
                            value={customInput}
                            onChange={(e) => {
                              setCustomInput(e.target.value);
                              setData({
                                ...data,
                                enquiry_details: e.target.value,
                              });
                            }}
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex ">
                    <div>
                    <BiMessageDetail className="absolute  z-10 right-[55px] sm:right-[110px] md:right-[163px] lg:right-[70px] xl:right-[144px] 2xl:right-[249px] mt-4 text-[#684FFF]" />
                    </div>
                    <TextField
                      type="text"
                      id=""
                      name="message"
                      variant="outlined"
                      value={data.message}
                      onChange={handleChange}
                      label="Type your Query here"
                      multiline
                      maxRows={2}
                      InputProps={{
                        style: {
                          height: "50px",
                          border: "none",
                          paddingLeft: "10px",
                          paddingRight: "25px",
                          borderRadius: "10px",
                          backgroundColor: "#ffffff",
                        
                        },
                      }}

                      className="w-full mb-4 px-7 py-4 rounded-xl bg-[#FFFFFF]  placeholder:text-[#CCCCCC]"
                    />
                      </div>
                    {errors.message && (
                      <p className="text-red-500">{errors.message}</p>
                    )}
                    <p className="text-lime-600">{apiSuccessMessage}</p>
                    <p className="text-red-600">{apiErrorMessage}</p>
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      className="primary-btn px-14 mt-5 "
                      onSubmit={handleSubmit}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* bg-overlay */}
          <div className={"absolute top-1/2 -translate-y-1/2 left-0"}>
            <img src={BgImg} alt="" className="w-full h-[600px]" />
          </div>
          {/* circle overlay */}
          <div className="absolute top-0 right-0">
            <div className="h-[700px] w-[700px] border-[1px] border-circle rounded-full"></div>
          </div>
          <div className="absolute top-[100px] right-[100px]">
            <div className="h-[500px] w-[500px] border-[1px] border-circle rounded-full"></div>
          </div>
          <div className="absolute top-[0] left-[100px]">
            <div className="h-[500px] w-[500px] border-[1px] border-circle rounded-full"></div>
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer />
    </>
  );
};

export default Contact;
