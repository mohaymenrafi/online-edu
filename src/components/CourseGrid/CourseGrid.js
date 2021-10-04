import { NavLink } from 'react-router-dom';
import './CourseGrid.css';

const CourseGrid = (props) => {
    const {name, modeOfTraining, img, courseFee, duration, certification} = props.course
    return (
        <div>
            <div className="border rounded shadow p-4 course-grid-container">
                <img src={img} alt={name} className="rounded w-full" />
                <h2 className="courseTitle text-2xl mt-4">{name}</h2>
                <div className="senfont text-lg mt-4">
                    <h3>Course Type: {modeOfTraining}</h3>
                    <h3>Course Duration: {duration}</h3>
                    <h3>Course Fee: {courseFee}</h3>
                    <h3>Certification: {certification? 'Yes' : 'No'}</h3>
                    <NavLink to="/courses"> <button disabled className="text-sm font-medium py-2 px-4 rounded bg-blue-600 text-white mt-4">View Details</button> </NavLink>
                </div>
            </div>
        </div>
    );
};

export default CourseGrid;