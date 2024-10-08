import React, { useEffect, useState } from 'react';
import '../../styles/Career.css';
import { TbPointFilled } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa6";
import axios from 'axios';
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import MenuButton from '../navbar/MenuButton';
import Menubar from '../menubar/Menubar';

function Career() {
  const [careerData, setCareerData] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = (job) => {
    setSelectedJob(job);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setModalIsOpen(false);
  };

  const handleApply = () => {
    // Navigate to the Job Application page with the selected job data
    navigate(`/apply/${selectedJob._id}`, { state: selectedJob });
  };

  useEffect(() => {
    // Step 3: Make an axios GET request
    axios.get('/job') // Example API URL
      .then((response) => {
        setCareerData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <MenuButton/>
    <Menubar/>
    <div className='careermain'>
      <div className='career_div1'>
        <div className='career_div11'>
          <div>We're more than professionals.<br /> We're a UNITY.</div>
        </div>
      </div>

      <div className='career_div2'>
        <div className='career_div21'>
          <div className='career_div21_1'>
            WE ARE HIRING
          </div>
          <h1 className='career_div21_2'>
            Current Openings
          </h1>
          <p className='career_div21_3'>
            This is a place to grow, learn and connect. Everything that makes you who you are is welcome here.
          </p>
        </div>

        <div className='career_div22'>
          {careerData.map((job) => (
            <div className='career_div22_1' onClick={() => openModal(job)} key={job._id}>
              <div className='career_div22_11'> Development </div>
              <div className='career_div22_2'>
                <div className='career_div22_21'>
                  <h1>{job.jobName}</h1>
                  <ul>
                    <li>
                      <span style={{ fontSize: "0.8rem" }}><TbPointFilled /></span>{job.jobType}
                    </li>
                  </ul>
                </div>
                <div className='career_div22_22'>
                  <div>
                    <FaAngleRight />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalIsOpen ? (
        <div className='careerdetail'>
          <div className='careerdetail_1'>
            {selectedJob && (
              <div className='jodmodeldesc'>
                <div className='closemodel' onClick={closeModal}>
                  <IoMdClose />
                </div>
                <h2>{selectedJob.jobName}</h2>
                <h3>Chennai</h3>
                <h4>Be The First To Apply</h4>
                <h5>DESCRIPTION</h5>
                <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}> {selectedJob.jobDescription}</p>
                <h1 style={{ marginBottom: "0.5rem" }}>QUALIFICATION</h1>
                <p>
                  Experience with natural language processing (NLP) and computer vision
                  Knowledge of cloud computing platforms such as AWS, Azure, or Google Cloud
                  Familiarity with version control systems such as Git
                </p>
                <h1 style={{ marginBottom: "0.5rem" }}>JOB INFO</h1>
                <p><span>Type:</span> {selectedJob.jobType}</p>
                <p><span>Location:</span> {selectedJob.location}</p>
                <p><span>Experience:</span> {selectedJob.minExperience} - {selectedJob.maxExperience} years</p>
                <p><span>Posted Date:</span> {new Date(selectedJob.jobPostedDate).toLocaleDateString()}</p>
                <div className='jodmodeldesc1'>
                  <h2>REQUIRED SKILLS</h2>
                  <div className='skillset_div'>
                    {selectedJob.skills.map((skills, index) => (
                      <div key={index}>
                        {skills}
                      </div>
                    ))}
                  </div>
                </div>
                <div className='jodmodeldesc2'>
                  <button onClick={handleApply}>APPLY</button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
    <Footer/>
    </>
  );
}

export default Career;
