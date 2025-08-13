import "./resume.css";
import Navbar from "./../components/navbar.jsx";
import Heading from "../components/heading.jsx";
import Projects from "../components/projects.jsx";
import Certification from "../components/certification.jsx";
import Education from "./../components/education.jsx";
import SocialMedia from "./../components/socialMedia.jsx";
import ProfilePic from "../components/profilePic.jsx";
import DownloadBtn from "../components/DownloadResume.jsx"
import Reset from "../components/resetbtn.jsx"
import { useState, useEffect,useRef } from "react";
import Input from "../components/input.jsx";
import { ImageUp } from "lucide-react";

const resume = () => {
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [summary, setSummary] = useState("");
  const [project1, setPorject1] = useState("");
  const [project2, setPorject2] = useState("");
  const [aim1, setAim1] = useState("");
  const [aim2, setAim2] = useState("");
  const [impact1, setImpact1] = useState("");
  const [impact2, setImpact2] = useState("");
  const [textTag1, settextTag1] = useState("");
  const [textTag2, settextTag2] = useState("");
  const [certification, setCertification] = useState({
    one: "",
    two: "",
    three: "",
  });
  const [hobbie, setHobbies] = useState({
    one: "",
    two: "",
    three: "",
  });
  const [personalDetail, setPersonalDetails] = useState({
    email: "",
    Phone: "",
    address: "",
  });
  const [skill, setSkills] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
  });
  const [softSkill, setSoftSkill] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });
  const [education, setEducation] = useState({
    firstEdu: [{ college: "", degree: "", percentage: 0 }],
    secondEdu: [{ college: "", degree: "", percentage: 0 }],
  });
  const [socialMedia, setSocialMedia] = useState({
    one: "",
    two: "",
    three: "",
  });
  const [socialTitle, setSocialTitle] = useState({
    title1: "",
    title2: "",
    title3: "",
  });
  const [experience, setExperience] = useState({
    company: "",
    work: "",
    startingDate: "",
    endingDate: "",
  });
  //retriving local storage image
useEffect(()=>{
  const storedImg = localStorage.getItem("userImage");
    if (storedImg) {
      setImg(storedImg);
    }
})
  // downloading the resume
    const captureRef = useRef(null);
  return (
    <div>
      <Navbar />
      <div className="resume-container">
        {/* resume form */}
        <div className="resume-form">
         <div className="form-group">
          <Heading title="Resume Form"/>
          <details>
            <summary>Personal Detials</summary>
            <Input
            type="text"
            heading="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {/* progile image */}
          <Input
            type="file"
            heading="Profile picture"
            onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    const base64String = reader.result;
                    setImg(base64String);
                    localStorage.setItem("userImage", base64String); 
                  };
                  reader.readAsDataURL(file);
                }
              }}
          /> 
          </details>
           <details>
            {/* summary */}
            <summary>Summary</summary>
            <Input
              type="text"
              heading="summary"
              onChange={(e) => {
                setSummary(e.target.value);
              }}
            />
          </details>
          {/* projects */}
          <details>
            <summary>Projects</summary>
            <details>
              {/* project 1 */}
              <summary>Project 1</summary>
              <Input
                type="text"
                heading="1st project name"
                onChange={(e) => {
                  setPorject1(e.target.value);
                }}
              />
              <Input
                type="text"
                heading="aim"
                onChange={(e) => {
                  setAim1(e.target.value);
                }}
              />
              <Input
                type="text"
                heading="Impact"
                onChange={(e) => {
                  setImpact1(e.target.value);
                }}
              />
              <Input
                type="text"
                heading="Text Tag"
                onChange={(e) => {
                  settextTag1(e.target.value);
                }}
              />
            </details>
            {/* project 2 */}
            <details>
              <summary>project 2</summary>
              <Input
                type="text"
                heading="2nd project name"
                onChange={(e) => {
                  setPorject2(e.target.value);
                }}
              />
              <Input
                type="text"
                heading="aim"
                onChange={(e) => {
                  setAim2(e.target.value);
                }}
              />
              <Input
                type="text"
                heading="Impact"
                onChange={(e) => {
                  setImpact2(e.target.value);
                }}
              />
              <Input
                type="text"
                heading="text tag"
                onChange={(e) => {
                  settextTag2(e.target.value);
                }}
              />
            </details>
          </details>
          {/* Expericence */}
          <details>
            <summary>Expericence</summary>
            <Input
              type="text"
              placeholder="Company Name"
              onChange={(e) => {
                setExperience({ ...experience, company: e.target.value });
              }}
            />
            <Input
              type="text"
              placeholder="share experience"
              onChange={(e) => {
                setExperience({ ...experience, work: e.target.value });
              }}
            />
            <Input type="date" placeholder="staring date"  onChange={(e) => {
                setExperience({ ...experience, startingDate: e.target.value });
              }}/>
                <Input type="date" placeholder="Ending date"  onChange={(e) => {
                setExperience({ ...experience, endingDate: e.target.value });
              }}/>
          </details>
          {/* certification  */}
          <details>
            <summary>Certification</summary>
            <Input
              type="text"
              placeholder="cetificate 1"
              onChange={(e) =>
                setCertification({ ...certification, one: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="cetificate 2"
              onChange={(e) =>
                setCertification({ ...certification, two: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="Certification 3"
              onChange={(e) =>
                setCertification({ ...certification, three: e.target.value })
              }
            />
          </details>
          {/* hobbies */}
          <details>
            <summary>Hobbies</summary>
            <Input
              type="text"
              placeholder="Hobbies 1"
              onChange={(e) => setHobbies({ ...hobbie, one: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Hobbies 2"
              onChange={(e) => setHobbies({ ...hobbie, two: e.target.value })}
            />
            <Input
              type="text"
              placeholder="Hobbies 3"
              onChange={(e) => setHobbies({ ...hobbie, three: e.target.value })}
            />
          </details>

          {/* personal information */}
          {/* contact detail */}
          <details>
            <summary>Contact Details</summary>
            <Input
              type="text"
              heading="Email"
              onChange={(e) => {
                setPersonalDetails({
                  ...personalDetail,
                  email: e.target.value,
                });
              }}
            />
            <Input
              type="number"
              heading="phone No."
              onChange={(e) => {
                setPersonalDetails({
                  ...personalDetail,
                  Phone: e.target.value,
                });
              }}
            />
            <Input
              type="text"
              heading="Address"
              onChange={(e) => {
                setPersonalDetails({
                  ...personalDetail,
                  address: e.target.value,
                });
              }}
            />
          </details>
          {/* skilss */}
          <details>
            <summary>Skills</summary>
            <Input
              type="text"
              placeholder="skill 1"
              onChange={(e) => {
                setSkills({ ...skill, one: e.target.value });
              }}
            />
            <Input
              type="text"
              placeholder="skill 2"
              onChange={(e) => {
                setSkills({ ...skill, two: e.target.value });
              }}
            />
            <Input
              type="text"
              placeholder="skill 3"
              onChange={(e) => {
                setSkills({ ...skill, three: e.target.value });
              }}
            />
            <Input
              type="text"
              placeholder="skill 4"
              onChange={(e) => {
                setSkills({ ...skill, four: e.target.value });
              }}
            />
            <Input
              type="text"
              placeholder="skill 5"
              onChange={(e) => {
                setSkills({ ...skill, five: e.target.value });
              }}
            />
            <Input
              type="text"
              placeholder="skill 6"
              onChange={(e) => {
                setSkills({ ...skill, six: e.target.value });
              }}
            />
          </details>
          <details>
            <summary>Soft Skill</summary>
            <Input
              type="text"
              placeholder="soft skill 1"
              onChange={(e) => {
                setSoftSkill({ ...softSkill, one: e.target.value });
              }}
            />
            <Input
              type="text"
              placeholder="soft skill 2"
              onChange={(e) => {
                setSoftSkill({ ...softSkill, two: e.target.value });
              }}
            />
            <Input
              type="text"
              placeholder="soft skill 3"
              onChange={(e) => {
                setSoftSkill({ ...softSkill, three: e.target.value });
              }}
            />
            <Input
              type="text"
              placeholder="soft skill 4"
              onChange={(e) => {
                setSoftSkill({ ...softSkill, four: e.target.value });
              }}
            />
          </details>
          {/* Education */}
          <details>
            <summary>Education</summary>
            <details>
              <summary>First Education (Higher Education)</summary>
              <Input
                type="text"
                placeholder="College/Institute Name"
                onChange={(e) => {
                  setEducation({
                    ...education,
                    firstEdu: [
                      { ...education.firstEdu[0], college: e.target.value },
                    ],
                  });
                }}
              />
              <Input
                type="text"
                placeholder="Degree/Course"
                onChange={(e) => {
                  setEducation({
                    ...education,
                    firstEdu: [
                      { ...education.firstEdu[0], degree: e.target.value },
                    ],
                  });
                }}
              />
              <Input
                type="number"
                placeholder="Percentage/GPA"
                onChange={(e) => {
                  setEducation({
                    ...education,
                    firstEdu: [
                      {
                        ...education.firstEdu[0],
                        percentage: parseFloat(e.target.value) || 0,
                      },
                    ],
                  });
                }}
              />
            </details>
            <details>
              <summary>Second Education (Secondary Education)</summary>
              <Input
                type="text"
                placeholder="School/College Name"
                onChange={(e) => {
                  setEducation({
                    ...education,
                    secondEdu: [
                      { ...education.secondEdu[0], college: e.target.value },
                    ],
                  });
                }}
              />
              <Input
                type="text"
                placeholder="Degree/Course"
                onChange={(e) => {
                  setEducation({
                    ...education,
                    secondEdu: [
                      { ...education.secondEdu[0], degree: e.target.value },
                    ],
                  });
                }}
              />
              <Input
                type="number"
                placeholder="Percentage/GPA"
                onChange={(e) => {
                  setEducation({
                    ...education,
                    secondEdu: [
                      {
                        ...education.secondEdu[0],
                        percentage: parseFloat(e.target.value) || 0,
                      },
                    ],
                  });
                }}
              />
            </details>
          </details>
          <details>
            <summary>Social Media</summary>
            <details>
              <summary>social media 1</summary>
              <div>
                <Input
                  type="text"
                  placeholder="socila media title"
                  onChange={(e) => {
                    setSocialTitle({ ...socialTitle, title1: e.target.value });
                  }}
                />
                <Input
                  type="text"
                  placeholder={`${socialTitle.title1} link`}
                  onChange={(e) => {
                    setSocialMedia({ ...socialMedia, one: e.target.value });
                  }}
                />
              </div>
            </details>
            <details>
              <summary>social media 2</summary>
              <div>
                <Input
                  type="text"
                  placeholder="socila media title"
                  onChange={(e) => {
                    setSocialTitle({ ...socialTitle, title2: e.target.value });
                  }}
                />
                <Input
                  type="text"
                  placeholder={`${socialTitle.title2} link`}
                  onChange={(e) => {
                    setSocialMedia({ ...socialMedia, two: e.target.value });
                  }}
                />
              </div>
            </details>
            <details>
              <summary>social media 3</summary>
              <div>
                <Input
                  type="text"
                  placeholder="socila media title"
                  onChange={(e) => {
                    setSocialTitle({ ...socialTitle, title3: e.target.value });
                  }}
                />
                <Input
                  type="text"
                  placeholder={`${socialTitle.title2} link`}
                  onChange={(e) => {
                    setSocialMedia({ ...socialMedia, three: e.target.value });
                  }}
                />
              </div>
            </details>
          </details>
<div className="buttons">
            <Reset btn="Reset"/>
           <DownloadBtn targetRef={captureRef} />
</div>
         </div>
        </div>
        {/* actual resume */}
        <div className="actual-resume" ref={captureRef}>
           
          {/* personal detail from resume */}
          <div className="personal-detail">
            {/* profile picture */}
            <ProfilePic profilepic={img} />
            <div className="contact-detail">
              <Heading title="Personal Detail" />
              <ul>
                <li>{personalDetail.email || "satyamrk18@gmail.com"}</li>
                <li>{`+91${personalDetail.Phone || "7588035979"}`}</li>
                <li>
                  {personalDetail.address || "V.n.p. appt, panchavati nashik"}
                </li>
              </ul>
            </div>
            <div className="skill">
              <Heading title="Skill" />
              <ul>
                <li>{skill.one || "skill"}</li>
                <li>{skill.two || "skill"}</li>
                <li>{skill.three || "skill"}</li>
                <li>{skill.four || "skill"}</li>
                <li>{skill.five || "skill"}</li>
                <li>{skill.six || "skill"}</li>
              </ul>
            </div>
            {/* softskill */}
            <div className="soft-skill">
              <Heading title="Soft Skill" />
              <ul>
                <li>{softSkill.one || "communication"}</li>
                <li>{softSkill.two || "Leadership"}</li>
                <li>{softSkill.three || "Hardworking"}</li>
                <li>{softSkill.four || "Time Management"}</li>
              </ul>
            </div>
            <div className="education">
              <Heading title="Education" />
              <Education
                education={education?.firstEdu?.[0]?.college || "SVIT"}
                college={education?.firstEdu?.[0]?.degree || "B.E. [IT]]"}
                percentage={education?.firstEdu?.[0]?.percentage || 90}
              />
              <Education
                education={education?.secondEdu?.[0]?.college || "SVIT"}
                college={education?.secondEdu?.[0]?.degree || "B.E. [IT]]"}
                percentage={education?.secondEdu?.[0]?.percentage || 90}
              />
            </div>
            {/* social media linkes */}
            <div className="social-media-links">
              <Heading title="social handles" />
              <SocialMedia
                title={socialTitle.title1 || "Linked in"}
                link={socialMedia.one}
              />
              <SocialMedia
                title={socialTitle.title2 || "GitHub"}
                link={socialMedia.two}
              />
              <SocialMedia
                title={socialTitle.title3 || "Peerlist"}
                link={socialMedia.three}
              />
            </div>
          </div>

          {/* main detail */}
          <div className="main-detail">
            <Heading title={name || `satyam katkade`} />
            {/* summary */}
            <div className="Summary">
              <Heading title="Summary" />
              <p className="summary-container">
                {summary ||
                  ` Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.`}
              </p>
            </div>
            {/* projects */}
            <div className="projects">
              <Heading title="projects" />
              <Projects
                projectName={project1 != "" ? `1] ${project1}` : `1] project 1`}
                aim={
                  aim1 ||
                  `Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.`
                }
                impact={
                  impact1 ||
                  `Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.`
                }
                textTag={
                  textTag1 ||
                  `Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.`
                }
              />
              {/* project-2 */}
              <Projects
                projectName={project2 != "" ? `2] ${project2}` : `2] project 2`}
                aim={
                  aim2 ||
                  ` Temporibus iste itaque, ab culpa velit iure     
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.`
                }
                impact={
                  impact2 ||
                  `Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.`
                }
                textTag={
                  textTag2 ||
                  `Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur.`
                }
              />
            </div>
            <div className="experience">
              <Heading title="Experience" />
             <div className="work-experience-dates">
               <p className="work-experience comapnyName">{experience.company || `svit`}</p>
             <div className="starting-ending-date">
              <p>{experience.startingDate || "xx-xx-20xx"}</p>
            <p>{experience.endingDate || "xx-xx-20xx"}</p>
             </div>
               
             </div>
              <p className="work-experience">
                {experience.work ||
                  `Temporibus iste itaque, ab culpa velit iure
              sapiente ipsum officia quam nobis accusantium enim tenetur tempora
              sequi dolores quos minima natus aspernatur`}
              </p>
            </div>
            {/* certification */}
            <div className="certification-hobbies">
              <Certification
                title="Certification"
                one={certification.one || "Web Dev"}
                two={certification.two || "App dev"}
                three={certification.three || "cloud computing"}
              />
              <Certification
                title="Hobbies"
                one={hobbie.one || "developemnt"}
                two={hobbie.two || "cricket"}
                three={hobbie.three || "gamming"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default resume;
