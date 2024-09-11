import React, { useEffect, useState } from "react";
import Hoc from "../layout/Hoc";
// import "../../../assets/css/course/course.css";
// import "../../../assets/css/main.css";
import "../../../assets/css/sidebar.css";
import { NavLink } from "react-router-dom";

const ManageCourse = () => {
  const [tab, setTab] = useState("course"); // state for tab
  const [lessonOpen, setLessonOpen] = useState(false); // state for lesson modal
  const [moduleOpen, setModuleOpen] = useState(false); // state for module modal
  const [quizOpen, setQuizOpen] = useState(false); // state for quiz modal
  const [questionOpen, setQuestionOpen] = useState(false); // state for question modal
  const [addquestionOpen, setAddQuestionOpen] = useState(false); // state for add question modal
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [showQuiz, setShowQuiz] = useState(true);
  const [selectedLessonType, setSelectedLessonType] = useState("text");
  const [openQuizIndex, setOpenQuizIndex] = useState(0);
  const [openLessonIndex, setOpenLessonIndex] = useState(0);
  const [sortedData, setSortedData] = useState([]);  // acedemic student name 
  const [openQuizResult, setopenQuizResult] = useState(false); // state for quiz result modal

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleChangeTab = (tabName) => {
    setTab(tabName);
  };

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  const showtoggleContent = () => {
    setShowQuiz(!showQuiz);
  };

  const moduleToggleModal = () => {
    setModuleOpen(!moduleOpen);
  };

  const lessonToggleModal = () => {
    setLessonOpen(!lessonOpen);
  };

  const quizToggleModal = () => {
    setQuizOpen(!quizOpen);
  };

  const questionToggleModal = () => {
    setQuestionOpen(!questionOpen);
  };

  const addQuestionToggleModal = () => {
    setAddQuestionOpen(!addquestionOpen);
  };
  const openQuizResultmodule = () => {
    setopenQuizResult(!addquestionOpen);
  };
  const lessons = [
    {
      title: "Introduction to Security Guard",
      time: "5 Minute",
      status: 0,
      isQuiz: false,
    },
    {
      title: "Introduction to Security Guard",
      time: "5 Minute",
      status: 1,
      isQuiz: false,
    },
    { title: "Quiz-1", status: "red", isQuiz: true, addQuestions: true },
    {
      title: "Introduction to Security Guard",
      time: "",
      status: 1,
      isQuiz: false,
    },
  ];

  // Example data for the quiz modules
  const quizData = [
    {
      question: "1. Your First Question Will Appear Here ?",
      answers: [
        { letter: "A", text: "Introduction to Security Guard" },
        { letter: "B", text: "Introduction to Security Guard" },
        { letter: "C", text: "Introduction to Security Guard" },
        { letter: "D", text: "Introduction to Security Guard" },
      ],
    },
    {
      question: "2. Your Second Question Will Appear Here ?",
      answers: [
        { letter: "A", text: "Lesson A" },
        { letter: "B", text: "Lesson B" },
        { letter: "C", text: "Lesson C" },
        { letter: "D", text: "Lesson D" },
      ],
    },
    {
      question: "3. Your Third Question Will Appear Here ?",
      answers: [
        { letter: "A", text: "Module A" },
        { letter: "B", text: "Module B" },
        { letter: "C", text: "Module C" },
        { letter: "D", text: "Module D" },
      ],
    },
  ];

  // Toggle which module is open
  const toggleQuizModule = (index) => {
    setOpenQuizIndex(index === openQuizIndex ? null : index); // Close if it's already open
  };

  // acdemic tab function start

  const courses = [
    {
      id: 1,
      name: "Christine Brooks",
      contactInfo: {
        email: "admin@gmail.com",
        call: "+919510672871",
        wp: "9510672871",
      },
      country: "India",
      message: "Message Submitted By User will Appear Here",
      status: "success",
    },
  ];

  // acedemic student name 

  const initialData = [

    {
      Student_name: "Hlimon Sorey",
      Enroll_Date: "27-12-2024",
      Completed_Date: "27-12-2024",
      Time_Spent: "37:09:32",
      Progress: "80%",
      Completed_Lesson: "50 out of 60",
      Last_Seen: "27-12-2024",
      Quiz_Passed: "2/9 ",
    },

  ];


  useEffect(() => {
    setSortedData(initialData)
  }, [setSortedData])


  return (
    <>
      <Hoc />
      <div class="main">
        <div className="main-top-bar">
          <div id="user-tag">
            <h5>Courses</h5>
          </div>
          <div id="search-inner-hero-section">
            <input type="text" placeholder="Search" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="hero-inner-logo">
            <img
              src={require("../../../assets/image/pdf-logo.png")}
              alt="PDF Logo"
            />
            <img
              src={require("../../../assets/image/x-logo.png")}
              alt="X Logo"
            />
          </div>
        </div>

        <div className="admin-panel-tab-bar">
          <div>
            <ul className="tab">
              <li onClick={() => handleChangeTab("course")}>
                <NavLink>COURSE</NavLink>
              </li>
              |
              <li onClick={() => handleChangeTab("academic-progress")}>
                <NavLink>ACADEMIC PROGRESS</NavLink>
              </li>
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <button
              className="primary-btn module-btn"
              onClick={moduleToggleModal}
            >
              + Add Module
            </button>
            <button className="primary-btn module-btn">Sort</button>
          </div>
        </div>

        <div className="course-form-container">
          {/* Module TAB */}
          {tab == "course" && (
            <div className="module">
              <div className="module-header">
                <span className="module-title">
                  MODULE-1: Introduction to Security Guard
                </span>
                <span className="module-duration">15 Hours</span>
                <span className="module-status green-dot"></span>
                <div className="module-controls">
                  <button className="arrow-btn">
                    <i class="fa-solid fa-sort"></i>{" "}
                  </button>
                  <button className="edit-btn">
                    <i className="fa fa-pencil"></i>
                  </button>
                  <button className="delete-btn">
                    <i className="fa fa-trash"></i>
                  </button>
                  <button className="check-btn" onClick={toggleContent}>
                    <i class="fa-solid fa-angle-down"></i>
                  </button>
                </div>
              </div>

              {isContentVisible && (
                <div className="module-content">
                  {lessons.map((lesson, index) => (
                    <div className="module-lesson" key={index}>
                      <div className="lesson-title">
                        {lesson.isQuiz ? (
                          <span className="quiz-icon">?</span>
                        ) : (
                          <span className="lesson-icon">
                            <i class="fa-solid fa-file-word"></i>
                          </span>
                        )}
                        {lesson.title}
                      </div>
                      <div className="lesson-time">
                        {lesson.time && <span>{lesson.time}</span>}
                      </div>
                      <div className="lesson-actions">
                        {lesson.addQuestions && (
                          <button
                            className="add-questions-btn"
                            onClick={questionToggleModal}
                          >
                            + Add Questions
                          </button>
                        )}
                        <button className="resource-btn">
                          <i class="fa-solid fa-folder-open"></i>Resource
                        </button>
                        <label class="switch">
                          <input
                            type="checkbox"
                            checked={lesson.status === 1}
                          // onChange={() => handleStatusChange(index)}
                          />
                          <span class="slider"></span>
                        </label>
                        <span className="edit-btn">
                          <i className="fa fa-pencil"></i>
                        </span>
                        <button className="delete-btn">
                          <i className="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="module-actions">
                    <button onClick={lessonToggleModal}>+ Lesson</button>
                    <button onClick={quizToggleModal}>+ Add Quiz</button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Academic TAB */}
          {tab === "academic-progress" && (
            <table>
              <thead className="academic-table">
                <tr>
                  <th>ID</th>
                  <th>Student name</th>
                  <th>Enroll Date</th>
                  <th>Completed Date</th>
                  <th>Time Spent</th>
                  <th>Progress</th>
                  <th>Completed Lesson</th>
                  <th>Last Seen</th>
                  <th>Quiz Passed</th>
                  <th>Inquiry Status</th>
                </tr>
              </thead>

              <tbody>
                {sortedData.map((i, index) => {
                  return (
                    <tr key={index}>
                      <td className="id">{index + 1}</td>
                      <td>
                        <h6 onClick={openQuizResultmodule}>{i.Student_name}</h6>
                      </td>
                      <td>{i.Enroll_Date}</td>
                      <td>{i.Completed_Date}</td>
                      <td>{i.Time_Spent}</td>
                      <td>{i.Progress}</td>
                      <td>{i.Completed_Lesson}</td>
                      <td>{i.Last_Seen}</td>
                      <td style={{ textAlign: "center" }}>{i.Quiz_Passed}<i class="fa-solid fa-money-bill-1-wave"></i></td>
                      <td>
                        <button className="resource-btn module-btn">
                          <i
                            class="fa-regular fa-file"
                            style={{ marginRight: "8px" }}
                          ></i>
                          Document
                        </button>

                      </td>
                    </tr>
                  );
                })}
              </tbody>

            </table>
          )}
        </div>

        {/* Module Modal */}
        {moduleOpen && (
          <div className="modal">
            <div className="add-lesson-container">
              <h5 style={{ marginBottom: "20px" }}>Module</h5>
              <form>
                <div className="form-group">
                  <label>Module Title</label>
                  <input
                    type="text"
                    placeholder="Lesson Type"
                    className="col12input"
                  />
                </div>

                <div className="form-group">
                  <div style={{ display: "flex" }}>
                    <div>
                      <label>
                        <input type="checkbox" /> Active
                      </label>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button type="submit" className="primary-btn">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={moduleToggleModal}
                    className="secondary-btn"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Lesson Modal */}
        {lessonOpen && (
          <div className="modal">
            <div className="add-lesson-container">
              <h5 style={{ marginBottom: "10px" }}>Add Lesson</h5>
              <form>
                <div className="form-group">
                  <label>Lesson Type</label>
                  <select
                    className="col12input"
                    onChange={(e) => {
                      setSelectedLessonType(e.target.value);
                    }}
                  >
                    <option value="text">Text</option>
                    <option value="pdf">PDF</option>
                    <option value="youtube-video">YouTube video</option>
                    <option value="video">Video</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    Lesson Title <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Lesson Title"
                    required
                    className="col12input"
                  />
                </div>
                {(selectedLessonType === "pdf" ||
                  selectedLessonType === "video") && (
                    <div className="form-group">
                      <label>Attachment</label>
                      <input type="file" className="col12input" />
                    </div>
                  )}

                <div style={{ display: "flex", gap: "10px" }}>
                  {selectedLessonType === "youtube-video" && (
                    <div className="form-group">
                      <label>Video URL</label>
                      <input
                        type="text"
                        placeholder="Video URL"
                        className="col12input"
                      />
                    </div>
                  )}
                  {selectedLessonType === "pdf" && (
                    <div className="form-group">
                      <label>Document Path URL</label>
                      <input
                        type="text"
                        placeholder="File Path URL"
                        className="col12input"
                      />
                    </div>
                  )}
                </div>
                {(selectedLessonType === "youtube-video" ||
                  selectedLessonType === "video") && (
                    <div className="form-group">
                      <label>Thumbnail Preview Image</label>
                      <input type="file" className="col12input" />
                    </div>
                  )}

                <div style={{ display: "flex" }}>
                  <div
                    className="flex-row"
                    style={{
                      alignItems: "end",
                      padding: "0px",
                      border: "none",
                    }}
                  >
                    <div className="form-group mb-0" style={{ width: "50%" }}>
                      <label>Duration</label>
                      <input
                        type="text"
                        placeholder="Lesson Type"
                        className="col12input"
                      />
                    </div>
                    <div className="chekbox2">
                      <input type="checkbox" />
                      <label>do yo want to count time?</label>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label>Text</label>
                  <textarea
                    placeholder="Text Description rich text Box"
                    className="col12input"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Summery</label>
                  <input
                    type="text"
                    placeholder="File Path"
                    className="col12input"
                  />
                </div>

                <div className="form-group">
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div>
                      <label>
                        <input type="checkbox" /> is Free Lesson
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox" /> Active
                      </label>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button type="submit" className="primary-btn">
                    Save
                  </button>
                  <button onClick={lessonToggleModal} className="secondary-btn">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Quiz Modal */}
        {quizOpen && (
          <div className="modal">
            <div className="add-lesson-container">
              <h5 style={{ marginBottom: "20px" }}>Add New Quiz</h5>
              <form>
                <div className="form-group">
                  <label>Quiz Title</label>
                  <input
                    type="text"
                    placeholder="Lesson Type"
                    className="col12input"
                  />
                </div>

                <div className="flex-row" style={{ display: "block" }}>
                  <div
                    className="flex-row"
                    style={{
                      alignItems: "end",
                      gap: "10px",
                      border: "none",
                      padding: "0",
                    }}
                  >
                    <div className="form-group mb-0">
                      <label>Pasing Marks</label>
                      <input
                        type="text"
                        placeholder="Lesson Title"
                        className="col12input"
                      />
                    </div>

                    <div className="form-group mb-0">
                      <label>Total Marks</label>
                      <input
                        type="text"
                        placeholder="Lesson Title"
                        className="col12input"
                      />
                    </div>
                  </div>

                  <div
                    className="flex-row"
                    style={{
                      gap: "10px",
                      border: "none",
                      padding: "0",
                      marginBottom: "0",
                    }}
                  >
                    <div className="form-group mb-0" style={{ width: "50%" }}>
                      <label>Duration</label>
                      <input
                        type="text"
                        placeholder="in Minutes"
                        className="col12input"
                      />
                    </div>

                    <div
                      className="chekbox2"
                      style={{ alignContent: "end", marginRight: "30px" }}
                    >
                      <input type="checkbox" />
                      <label>do you want to count time ?</label>
                    </div>
                  </div>
                </div>

                <div className="flex-row">
                  <div className="chekbox2">
                    <input type="checkbox" />
                    <label>Time Limit ?</label>
                  </div>

                  <div className="form-group mb-0" style={{ width: "50%" }}>
                    <label>Expire Time</label>
                    <input type="text" placeholder="2" className="col12input" />
                  </div>
                </div>

                <div className="flex-row" style={{ marginBottom: "0px" }}>
                  <div className="chekbox2">
                    <input type="checkbox" />
                    <label>Max Attampts</label>
                  </div>

                  <div className="form-group mb-0" style={{ width: "50%" }}>
                    <label>Enter No Of Attempts</label>
                    <input type="text" placeholder="2" className="col12input" />
                  </div>
                </div>

                <div className="flex-row" style={{ border: "none" }}>
                  <div className="form-group mb-0" style={{ width: "100%" }}>
                    <label>Summery</label>
                    <input
                      type="text"
                      placeholder="Enter Course Title"
                      className="col12input"
                    />
                    <div style={{ display: "flex", marginTop: "10px" }}>
                      <div className="chekbox2">
                        <input type="checkbox" />
                        <label>Student Can Skip This Quiz ?</label>
                      </div>
                      <div className="chekbox2">
                        <input type="checkbox" />
                        <label>Random Questions</label>
                      </div>
                      <div className="chekbox2">
                        <input type="checkbox" />
                        <label>Active</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button type="submit" className="primary-btn">
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={quizToggleModal}
                    className="secondary-btn"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Question Modal */}
        {questionOpen && (
          <div className="modal">
            <div className="add-lesson-container">
              <div className="quiz-top-header">
                <div className="quiz-header">
                  <p>
                    <strong>Quiz-1 :</strong> Quiz Title Appear Here
                  </p>
                </div>

                <div className="two-btn">
                  <button className="primary-btn module-btn">Sorting</button>
                  <button
                    className="primary-btn module-btn"
                    onClick={addQuestionToggleModal}
                  >
                    Add New
                  </button>
                  <span onClick={questionToggleModal}>
                    <i class="fa-solid fa-xmark"></i>
                  </span>
                </div>
              </div>

              <div>
                {quizData.map((quiz, index) => (
                  <div className="container" key={index}>
                    <div className="module-header quiz-module">
                      <span className="module-title">{quiz.question}</span>
                      <div className="module-controls">
                        <button className="edit-btn">
                          <i className="fa fa-pencil"></i>
                        </button>
                        <button className="delete-btn">
                          <i className="fa fa-trash"></i>
                        </button>
                        <button
                          className="check-btn"
                          onClick={() => toggleQuizModule(index)}
                        >
                          <i
                            className={`fa-solid ${openQuizIndex === index
                              ? "fa-angle-up"
                              : "fa-angle-down"
                              }`}
                          ></i>
                        </button>
                      </div>
                    </div>

                    {openQuizIndex === index && (
                      <div className="module-content">
                        {quiz.answers.map((answer, answerIndex) => (
                          <div
                            className="module-lesson quiz-list"
                            key={answerIndex}
                          >
                            <div>
                              <strong className="quiz-letter">
                                {answer.letter}
                              </strong>
                              <label style={{ paddingLeft: "10px" }}>
                                {answer.text}
                              </label>
                            </div>
                            <input type="checkbox" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Question Modal */}
        {addquestionOpen && (
          <div className="modal">
            <div className="add-lesson-container">
              <h5 style={{ marginBottom: "20px" }}>Add Quiz Question</h5>
              <form>
                <div className="form-group">
                  <label>Question:</label>
                  <input
                    type="text"
                    placeholder="Lesson Type"
                    className="col12input"
                  />
                </div>

                <div className="quiz-answer">
                  <label>A</label>
                  <input
                    type="text"
                    placeholder="Lesson Type"
                    className="col8input"
                    style={{ margin: "0px 10px", width: "90%" }}
                  />
                  <input type="checkbox" className="quiz-checkbox" />
                </div>

                <div className="quiz-answer">
                  <label>B</label>
                  <input
                    type="text"
                    placeholder="Lesson Type"
                    className="col8input"
                    style={{ margin: "0px 10px", width: "90%" }}
                  />
                  <input type="checkbox" className="quiz-checkbox" />
                </div>

                <div className="quiz-answer">
                  <label>C</label>
                  <input
                    type="text"
                    placeholder="Lesson Type"
                    className="col8input"
                    style={{ margin: "0px 10px", width: "90%" }}
                  />
                  <input type="checkbox" className="quiz-checkbox" />
                </div>

                <div className="quiz-answer">
                  <label>D</label>
                  <input
                    type="text"
                    placeholder="Lesson Type"
                    className="col8input"
                    style={{ margin: "0px 10px", width: "90%" }}
                  />
                  <input type="checkbox" className="quiz-checkbox" />
                </div>

                <div className="quiz-answer">
                  <label>E</label>
                  <input
                    type="text"
                    placeholder="Lesson Type"
                    className="col8input"
                    style={{ margin: "0px 10px", width: "90%" }}
                  />
                  <input type="checkbox" className="quiz-checkbox" />
                </div>

                <div className="quiz-answer">
                  <label>F</label>
                  <input
                    type="text"
                    placeholder="Lesson Type"
                    className="col8input"
                    style={{ margin: "0px 10px", width: "90%" }}
                  />
                  <input type="checkbox" className="quiz-checkbox" />
                </div>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button type="submit" className="primary-btn">
                    Save
                  </button>
                  <button
                    type=""
                    onClick={addQuestionToggleModal}
                    className="secondary-btn"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Quiz Result Modal  */}
        {openQuizResult && (
          <div className="modal">
            <div className="add-lesson-container">
              <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #dfdfe1", marginBottom: "10px" }}>
                <h5 style={{ paddingBottom: "5px" }}>Quiz Result</h5>
                <div>
                  <i class="fa-solid fa-xmark"></i>
                </div>

              </div>
              <form>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button type="" className="secondary-btn">
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageCourse;