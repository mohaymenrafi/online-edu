import React from 'react';
import CourseGrid from '../CourseGrid/CourseGrid';
import useCourses from '../Hooks/useCourses';
import SectionHeaders from '../SectionHeaders/SectionHeaders';

const Courses = () => {
    const [courses] = useCourses();
    return (
        <div>
            <SectionHeaders pageTitle="All Courses"></SectionHeaders>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-24 px-8">
                {
                    courses.map(course=> <CourseGrid key={course.id} course={course}></CourseGrid>)
                }
            </div>
        </div>
    );
};

export default Courses;