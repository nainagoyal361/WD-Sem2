import React from 'react';
import "./prac.css";

import student1 from "./student 1 image.webp";
import student2 from "./student 2 image.jfif";

function App(){

    return(
        <div classname="dashboard">
            <h1>Student Profile Dashboard</h1>

            <div classname="student_container">
                <div classname="card">
                    <img src={student1} alt="Rahul Sharma" className="student-img" />
                    <p><strong>Name:</strong>Rahul Sharma</p>
                    <p><strong>Course:</strong>B.Tech CSE</p>
                    <p><strong>Year:</strong>3rd Year</p>
                    <p><strong>CGPA:</strong>8.5</p>
                </div>

                <div classname="card">
                    <img src={student2} alt="Pooja Tyagi" className="student-img" />
                    <p><strong>Name:</strong>Pooja Tyagi</p>
                    <p><strong>Course:</strong>BCA</p>
                    <p><strong>Year:</strong>2nd Year</p>
                    <p><strong>CGPA:</strong>9.1</p>
                </div>
            </div>
        </div>
    );
       
}
export default App;