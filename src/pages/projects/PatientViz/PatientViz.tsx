import "pages/projects/patientviz/patientviz.scss"
import 'pages/projects/variables.scss'

import desc1 from '/patientviz/desc1.png'
import desc2 from '/patientviz/desc2.png'
import doctor from '/patientviz/doctor.png'
import patient from '/patientviz/patient.png'
import tech from '/patientviz/tech.svg'


const PatientViz = () => {
    return (
        <div className="patientviz-container">
            <div className="patientviz-banner-container">
                <div className="patientviz-banner">
                    <div className="patientviz-banner-img">
                        <img src={doctor}/>
                    </div>
                    <div className="patientviz-banner-headings">
                        <div className="patientviz-banner-heading1">
                            PatientViz
                        </div>
                        <p className="patientviz-banner-heading2">
                            Triage Help
                        </p>
                    </div>
                </div>
            </div>
            <div className="patientviz-inspo-container">
                <div className="patientviz-inspo">
                    <div className="patientviz-inspo-column">
                        <div className="patientviz-title">
                            The Inspiration
                        </div>
                        <div className="patientviz-inspo-desc">
                            Triage is a crucial tool in managing long waitlists as the triage process enables more equitable care and allows patients with the greatest and most urgent needs to be seen first (Moskop & Iserson, 2004). However, the triage process can be complicated, as referrals received by specialist physicians often differ in detail and length. The goal of PatientViz is to help physicians with the triage process and minimize long waiting lists.
                        </div>
                    </div>
                    <div className="patientviz-inspo-img">
                        <img src={patient}/>
                    </div>
                </div>
            </div>
            <div className="patientviz-desc-container">
                <div className="patientviz-desc">
                    <div className="patientviz-title">
                        Product Description
                    </div>
                    <div className="patientviz-desc-container-column">
                        <div className="patientviz-desc-container-desc1">
                            <div className="patientviz-desc-desc1">
                                PatientViz allows the clinician to import patient intake form responses into the application, and visualize this data against the clinic’s patient population. Also, users are able to filter the data to be visualized by conditional subpopulations (e.g. patients taking certain medications, patients with a certain set of symptoms, etc.). Analytical statistics such as the correlation between medications and diagnoses within the clinic’s population are also presented in a drill-down view. 
                            </div>
                            <div className="patientviz-desc-desc1-img">
                                <img src={desc1}/>
                            </div>
                        </div>
                        <div className="patientviz-desc-container-desc2">
                            <div className="patientviz-desc-desc2-img">
                                <img src={desc2}/>
                            </div>
                            <div className="patientviz-desc-desc2">
                                The application also automatically generate individual patient reports. These patient reports contain sections outlining different areas of interest for each patient’s case. Including their current medications and diagnoses information, cross examination of medications and diagnoses against the population, free-text notes, non-medical interventions, and root causes.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="patientviz-tech-container">
                <div className="patientviz-tech">
                    <div className="patientviz-tech-column">
                        <div className="patientviz-title">
                            Product Technologies
                        </div>
                        <div className="patientviz-tech-img">
                            <img src={tech}/>
                        </div>
                    </div>
                    <div className="patientviz-tech-desc">
                        <div className="patientviz-tech-front">
                            Frontend
                            <div className="patientviz-tech-label">
                                Figma UI design
                            </div>
                            <div className="patientviz-tech-label">
                                React
                            </div>
                            <div className="patientviz-tech-label">
                                Electron
                            </div>
                        </div>
                        <div className="patientviz-tech-back">
                            Backend
                            <div className="patientviz-tech-label">
                                Python Scripts
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
 };
 
 export default PatientViz;