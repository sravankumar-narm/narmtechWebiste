import React, { useState, useEffect, useRef } from "react";
import monica from "../assets/brand/monika.png";
import arrow from "../assets/brand/Arow.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { IoSendSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import X from "../assets/brand/X-Mark.png";
import close1 from "../assets/brand/close1.png";
import { MdOutlineUpload } from "react-icons/md";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@mui/material/TextField";
import ReactMarkdown from "react-markdown";

const Aibot = ({ onClose, onMin, chatLog, setChatLog }) => {
  console.log("onClose - ", onClose)
  console.log("onMin - ", onMin)
  const [show, setshow] = useState(true);
  const toggleMenu = () => {
    setshow(!show);
  };
  const [show1, setshow1] = useState(true);
  const toggleMenu1 = () => {
    setshow1(!show1);
    // setchatLog([]);
  };



  const [defaultCompanyName, setDefaultCompanyName] = useState("NARM TECH");
  const [userEnterCompany, setUserEnterCompany] = useState("");

  const [Inputvalue, setInputvalue] = useState("");
  // const [chatLog, setchatLog] = useState([]);
  const chatLogEndRef = useRef(null);
  useEffect(() => {
    if (chatLogEndRef.current) {
      // Scroll to the bottom of the chat window
      chatLogEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatLog]);

  useEffect(() => {
    if (show) {
      setDefaultCompanyName("NARM TECH");
    }
  }, [show]);

  const formatTextWithNewlines = (text) => {
    // Split the text into sentences using a regular expression with broader delimiters
    const sentences = text.split(/[\.\?!](?=\s|$)/g);
    // Map each sentence to a JSX element with a <br /> tag
    const formattedText = sentences.map((sentence, index) => (
      <span key={index}>
        {sentence.trim()}
        {index !== sentences.length - 1 ? "." : ""}{" "}
        {/* Append a period if it's not the last sentence */}
        {index !== sentences.length - 1 ? <><br /><br /></> : null}
      </span>
    ));
    // Return the formatted text
    return formattedText;
  };

  const formatTextWithMarkdown = (text) => {
    return <ReactMarkdown>{text}</ReactMarkdown>;
  };


  const handlesubmit = async (event) => {
    event.preventDefault();

    const query = Inputvalue.trim();
    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: Inputvalue },
    ]);
    setInputvalue("");

    try {
      const response = await fetch(
        "https://narmtech-adhoc.centralindia.cloudapp.azure.com:8014/chat/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: Inputvalue.trim(),
            company_name: userEnterCompany || defaultCompanyName,
            history: [],
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.response === "success") {
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "assistant", message: data.output },
        ]);
      } else {
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "assistant", message: "Unable to fetch your query. Please try again later." },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleClose = () => {
    onClose(); // Call onClose function to hide/close the chatbot UI
  };
  const [forData, setForData] = useState({
    excel_file: false,
    text_file: false,
  });
  const [companyName, setCompanyName] = useState("");
  const [baseUrl, setBaseUrl] = useState("");
  const [excelFile, setExcelFile] = useState(null);
  const [textFiles, setTextFiles] = useState([]);
  const [excelFileSelected, setExcelFileSelected] = useState(false); // State variable for Excel file checkbox
  const [textFileSelected, setTextFileSelected] = useState(false); // State variable for Text file checkbox
  const [uploadedExcelFileName, setUploadedExcelFileName] = useState("");
  const [uploadedTextFileName, setUploadedTextFileName] = useState("");
  const [excelDescription, setExcelDescription] = useState("");
  const [textDescription, setTextDescription] = useState("");
  const [excelInputData, setExcelInputData] = useState("");
  const [textInputData, setTextInputData] = useState("");
  const [post, setpost] = useState(false);
  const [loading, setLoading] = useState(false);
  const [createresponse, setCreateResponse] = useState(null);
  const [createBotStatus, setCreateBotStatus] = useState(false)
  const handleReset = () => {
    // Reset all state variables to initial values
    setshow(false);
    setLoading(false);
    setCreateResponse(null);
    setUserEnterCompany("");
    setBaseUrl("");
    setDefaultCompanyName("");
    setchatLog([]);
    // Reset other state variables as needed
  };
  const BackNarm = () => {
    setshow(true);
    setLoading(false);
    setCreateResponse(null);
    setUserEnterCompany("");
    setBaseUrl("");
    setchatLog([]);
    // Set default company name
    setDefaultCompanyName("NARM TECH");
  };
  // const handleCreateBot = async () => {
  //   const companyNameData = userEnterCompany;
  //   const baseUrlData = baseUrl;
  //   const excelDescriptionText = excelDescription;
  //   const excelSourceName = "";
  //   const textSourceName = "";
  //   const textDescriptionText = textDescription;
  //   console.log("companyNameData - ", `"${companyNameData}"`);
  //   let excelFile = null;
  //   if (uploadedExcelFileName) {
  //     excelFile = new File([uploadedExcelFileName], uploadedExcelFileName, {
  //       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  //     });
  //   }

  //   const formData = new FormData();
  //   formData.append("company_name", `"${companyNameData}"`);
  //   formData.append("base_url", `"${baseUrlData}"`);
  //   formData.append("excel_description", `"${excelDescriptionText}"`);
  //   formData.append("excel_source_name", `"${excelSourceName}"`);
  //   formData.append("text_source_name", `"${textSourceName}"`);
  //   formData.append("text_description", `"${textDescriptionText}"`);
  //   if (excelFile) {
  //     formData.append("excel_file", uploadedExcelFileName);
  //   }
  //   setLoading(true);

  //   try {
  //     const response = await fetch(
  //       "https://narmtech-adhoc.centralindia.cloudapp.azure.com:8014/create_bot/",
  //       {
  //         method: "POST",
  //         headers: {
  //           accept: "application/json",
  //         },
  //         body: formData,
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //     setResponse(data);
  //     setDefaultCompanyName(userEnterCompany)
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  //   finally {
  //     setLoading(false);
  //   }
  // };
  const handleCreateBot = async () => {
    if (!userEnterCompany || !baseUrl) {
      // alert("Please fill in the required fields.");
      toast.error("Please enter Company Name/ Website URL");
      return;
    }

    const requestBody = {
      company_name: userEnterCompany,
      base_url: baseUrl,
      excel_description: excelDescription,
      excel_source_name: excelInputData,
      text_source_name: textInputData,
      text_description: textDescription,
      text_file: null,
      excel_file: null,
    };
    setLoading(true);

    try {
      const response = await fetch(
        "https://narmtech-adhoc.centralindia.cloudapp.azure.com:8014/create_bot/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Specify JSON content type
          },
          body: JSON.stringify(requestBody), // Stringify the JavaScript object
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Bot Response - ", data);
      if (data.response === 'success') {
        setchatLog([]);
        setCreateResponse(data);
        setDefaultCompanyName(userEnterCompany);
        setCreateBotStatus(true);
      } else {
        setCreateResponse(data.data);
        setCreateBotStatus(false);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    if (type === "checkbox") {
      setForData((prevState) => ({
        ...prevState,
        excel_file: false,
        text_file: false,
        [name]: newValue,
      }));
    } else {
      setForData((prevState) => ({
        ...prevState,
        [name]: newValue,
      }));
    }
  };
  const handleExcelCheckboxChange = () => {
    setExcelFileSelected(!excelFileSelected);
  };
  const handleTextCheckboxChange = () => {
    setTextFileSelected(!textFileSelected);
  };

  const handleExcelFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      file.type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setUploadedExcelFileName(file.name);
      // Handle Excel file upload
    } else {
      // Invalid file type, reset state and show error message
      setUploadedExcelFileName("");
      alert("Please select a valid Excel file.");
    }
  };

  const handleTextFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/plain") {
      setUploadedTextFileName(file.name);
      // Handle Text file upload
    } else {
      // Invalid file type, reset state and show error message
      setUploadedTextFileName("");
      alert("Please select a valid text file.");
    }
  };
  return (
    <body className="h-[70%] sm:h-[90%] w-[65%] xl:w-[25%] lg:w-[25%] md:w-[35%] bottom-0 right-0 bg-[#ffffff] fixed t-0 z-50 transition-all duration-500 flex flex-col text-white">
      {/* <ToastContainer /> */}
      <nav className="flex justify-between bg-gradient-to-r from-indigo-500 to-sky-500">
        <div className=" items-center justify-center p-3">
          <h1>I am MONICA</h1>
          <p>your AI Bot</p>
        </div>
        <div className="flex gap-3 items-center justify-center pr-3">
          <img src={close1} alt="" onClick={onMin} />
          <img src={X} alt="" onClick={toggleMenu1} />
        </div>
      </nav>

      <main className="chat-container h-[70%] overflow-y-auto ">
        <div className="flex p-2 gap-1 ">
          <div>
            <img src={monica} width={30} height={30} />
          </div>

          <div className="bg-[#D8ECF3] rounded-xl p-2 w-[70%]">
            <p className="text-[11px] text-black">
              <span className="font-bold">Good Day!</span> Feel free to ask me anything about <span className="font-bold">{defaultCompanyName}</span>.
              How can I assist you today?
            </p>
          </div>
        </div>

        {chatLog.map((message, index) => (
          <div
            key={index}
            className={`flex p-2 gap-1 ${message.type === "user" ? "justify-end" : ""
              }`}
          >
            {message.type === "assistant" && (
              <div>
                <img src={monica} width={30} />
              </div>
            )}
            <div
              className={`flex items-center rounded-xl p-2 w-[80%] ${message.type === "user"
                  ? "bg-[#EFEFEF]"
                  : "bg-[#D8ECF3]"
                }`}
            >
              <p className="text-[11px] text-black">
                {formatTextWithMarkdown(message.message)}
              </p>
            </div>
            {message.type === "user" && (
              <div>
                <FaUser className="text-teal-500" />
              </div>
            )}
          </div>
        ))}
        <div ref={chatLogEndRef} />
      </main>

      <footer>
        <div className="flex">
          {show ? (
            <HiMenuAlt1
              className="block cursor-pointer transition-all mt-3 ml-3 absolute text-[#999999] hover:text-blue-700"
              onClick={toggleMenu}
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="block cursor-pointer transition-all mt-3 ml-3 absolute text-[#999999] hover:text-blue-700"
              size={30}
            />
          )}
          <form onSubmit={handlesubmit} className="flex w-full">
            <input
              type="text"
              placeholder="Type your ask here"
              value={Inputvalue}
              onChange={(e) => setInputvalue(e.target.value)}
              className="w-full px-14  p-4 text-black border-[#838383]  border-[1px] shadow-md"
            />
            <button className="text-black block cursor-pointer transition-all mt-5 absolute right-0 mr-4">
              <IoSendSharp />
            </button>
          </form>
        </div>

        {show && (
          <div className="text-[#272323] pl-2 py-1   leading-5 flex  ">
            <div className="mb-5 -mt-5">
              <img src={arrow} alt="" className="h-15" />
            </div>
            <div>
              <p className="text-[10px] md:text-[12px] font-bold">
                This is a ZERO CODE AI BOT - Built by NARM Tech
              </p>
              <p className="text-[9px]  md:text-[10px] ">
                Do you want to try the same for your Organization?{" "}
              </p>
              <p className="text-[12px]">Click Above</p>
            </div>
          </div>
        )}

        {loading ? (
          <div className="relative">
            <div className="text-black">
              <div>
                <Backdrop
                  sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                  }}
                  open
                >
                  <CircularProgress color="inherit"
                    className="absolute" />
                </Backdrop>
              </div>
              <marquee behavior="" direction="right">
                You are creating a chatbot...
              </marquee>
            </div>
          </div>
        ) : createresponse ? (
          <div className="text-black grid gap-2">
            {/* Display response data here */}
            {/* <div className="p-2">{JSON.stringify(response.response)}</div> */}
            {/* <div className="p-2">{JSON.stringify(response.company_name)}</div> */}
            <div className="text-[12px] font-bold p-2">
              {createBotStatus ? `Your chatbot is now ready. Feel free to ask me anything about{" "} ${defaultCompanyName}` : 'Unable to get data from the website'}

            </div>
            <div className="p-2">{JSON.stringify(createresponse.data)}</div>
            <div className=" flex justify-between p-2">
              <button className="primary-btn px-5 py-1" onClick={BackNarm}>
                Back to Narm Tech
              </button>
              <button className="primary-btn px-5 py-1" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        ) : (
          <div>
            {!show && (
              // <form onSubmit={handleSubmit}>
              <>
                <div className="flex">
                  <div className="w-full text-[#838383] bg-white items-start p-3 border-[1px] border-[#838383]">
                    {/* <p className="text-[10px]">What is the company name</p> */}
                    <TextField
                      type="text"
                      variant="outlined"
                      // className="text-[10px] w-full px-3 py-2 border border-solid border-gray-300 rounded-md"
                      name="companyName"
                      value={userEnterCompany}
                      label="Company Name"
                      onChange={(e) => setUserEnterCompany(e.target.value)}
                      InputProps={{
                        style: {
                          height: "50px",
                          border: "none",
                          paddingLeft: "10px",
                          borderRadius: "10px",
                        },
                      }}
                    />
                  </div>
                  <div className=" w-full text-[#838383] bg-white items-start p-3 border-[1px] border-[#838383]">
                    {/* <p className="text-[10px]">
                      Enter the base URL of the website:
                    </p> */}
                    {/* <p className="text-[10px]"> */}
                    <TextField
                      type="text"
                      name="baseUrl"
                      label="website URL"
                      variant="outlined"
                      value={baseUrl}
                      onChange={(e) => setBaseUrl(e.target.value)}
                      InputProps={{
                        style: {
                          height: "50px",
                          border: "none",
                          paddingLeft: "10px",

                          borderRadius: "10px",
                        },
                      }}
                    // style={{ width: '100%', height: '50%', padding:'-9', borderRadius: '30px',  }} 
                    />

                    {/* <div class="relative w-full min-w-[200px] h-10">
  <input
      class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
      placeholder=" " /><label
      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block 
      before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1  before:rounded-tl-md before:border-t peer-focus:before:border-t-2  before:pointer-events-none before:transition-all  after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1  after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all  peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Input
      Large
    </label>
  </div>  */}
                    {/* <div class="relative w-full min-w-[200px] h-10">
    <input
      class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " /><label
      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all  after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1  after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Username
    </label>
  </div>   */}
                    {/* <div class="relative w-full min-w-[200px] h-10">
    <input
      class="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2  focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " /><label
      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Username
    </label>
  </div> */}
                    {/* </p> */}
                  </div>
                </div>

                {/* <div className="flex gap-5 w-full text-[#838383] bg-white items-start p-3 border-[1px] border-[#838383]">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="border-[1px] border-[#838383]"
                        checked={excelFileSelected}
                        onChange={handleExcelCheckboxChange}
                      />
                      {excelFileSelected && (
                        <label>
                          <input
                            type="file"
                            className="hidden"
                            onChange={handleExcelFileChange}
                          />
                          <MdOutlineUpload className="border-[1px] border-[#838383]" />
                        </label>
                      )}
                      {uploadedExcelFileName && (
                        <div>
                          <p className="text-[10px] p-1">
                            {uploadedExcelFileName}
                          </p>
                        </div>
                      )}
                      {!uploadedExcelFileName && (
                        <>
                          <p className="text-[10px] p-1">Data from Excel</p>
                        </>
                      )}
                    </div>
                    <div>
                      {excelFileSelected && (
                        <input
                          type="text"
                          className="text-[10px] w-full p-1 border border-solid border-gray-300 rounded-md"
                          name="excelInput"
                          value={excelInputData}
                          placeholder="Enter Excel Data"
                          onChange={(e) => setExcelInputData(e.target.value)}
                        />
                      )}
                    </div>
                  </div>
                  <div className="">
                    {excelFileSelected && (
                      <div>
                        <p className="text-[8px]">Excel Description</p>
                        <textarea
                          className="w-[200px] text-[10px] h-10 resize-none px-3 py-2 border border-solid border-gray-300 rounded-md"
                          rows="1"
                          placeholder="Enter Excel Description"
                          value={excelDescription}
                          onChange={(e) => setExcelDescription(e.target.value)}
                        ></textarea>
                      </div>
                    )}
                  </div>
                </div> */}

                {/* <div className="flex gap-5 w-full text-[#838383] bg-white items-start p-3 border-[1px] border-[#838383]">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="border-[1px] border-[#838383]"
                        checked={textFileSelected}
                        onChange={handleTextCheckboxChange}
                      />
                      {textFileSelected && (
                        <label>
                          <input
                            type="file"
                            className="hidden"
                            onChange={handleTextFileChange}
                          />
                          <MdOutlineUpload className="border-[1px] border-[#838383]" />
                        </label>
                      )}
                      {uploadedTextFileName && (
                        <p className="text-[10px] p-1">
                          {uploadedTextFileName}
                        </p>
                      )}
                      {!uploadedTextFileName && (
                        <p className="text-[10px] p-1">Data from Text</p>
                      )}
                    </div>
                    <div>
                      {textFileSelected && (
                        <input
                          type="text"
                          className="text-[10px] w-full p-1 border border-solid border-gray-300 rounded-md"
                          name="textInput"
                          value={textInputData}
                          placeholder="Enter Text Data"
                          onChange={(e) => setTextInputData(e.target.value)}
                        />
                      )}
                    </div>
                  </div>
                  <div className="">
                    {textFileSelected && (
                      <div>
                        <p className="text-[8px]">Text Description</p>
                        <textarea
                          className="w-[200px] text-[10px] h-10 resize-none"
                          rows="1"
                          placeholder="Enter Text Description"
                          value={textDescription}
                          onChange={(e) => setTextDescription(e.target.value)}
                        ></textarea>
                      </div>
                    )}
                  </div>
                </div> */}
                {/* <div className="flex gap-5 w-full text-[#838383] bg-white items-start p-3 border-[1px] border-[#838383]">
              <button
                className="bg-blue-500 text-white px-1 py-1 rounded-md"
                onClick={handleCreateBot}
              >
                Create Bot
              </button>
            </div> */}
                <div className="flex justify-end m-1">
                  <button
                    className="primary-btn px-5 py-1"
                    onClick={handleCreateBot}
                  >
                    Create Bot
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </footer>
      {!show1 && (
        <div className="h-[70%] sm:h-[90%] w-[65%] xl:w-[25%] lg:w-[25%] md:w-[35%] bottom-0 right-0 p-1 bg-opacity-10 backdrop-blur-[2px] bg-[#D9D9D9] fixed t-0 z-50 transition-all duration-500 flex flex-col text-white justify-center items-center">
          <div className=" mt-10 flex flex-col gap-1">
            <button onClick={toggleMenu1} className="place-self-end text-black">
              <HiXMark />
            </button>

            <div className=" flex flex-col bg-white p-5 rounded-2xl items-center justify-center text-blue-600 gap-2">
              <h1 className="font-bold">Do you want to exit MONICA?</h1>
              <button
                className="bg-gradient-to-r from-indigo-500 to-sky-500 text-white px-3 rounded-2xl "
                onClick={onClose}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </body>
  );
};
export default Aibot;
