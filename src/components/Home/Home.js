import React from 'react';
import Hero from '../Hero/Hero';
import CourseGrid from '../CourseGrid/CourseGrid';
import './Home.css'
import useCourses from '../Hooks/useCourses';
import CounterInfo from '../CounterInfo/CounterInfo';
import { NavLink } from 'react-router-dom';
import useCategory from '../Hooks/useCategory';
import CategoryGrid from '../CategoryGrid/CategoryGrid';

const Home = () => {
    const [courses] = useCourses();
    const [categories] = useCategory();
    return (
        <div>
           <Hero></Hero>
           <div className="container mx-auto py-24 px-4">
               <h3 className="text-center text-xl font-regular">Most Popular Courses Of This Week</h3>
               <h2 className="text-center text-5xl font-bold sec-title mt-4 mb-16">Our Popular Course</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        courses.slice(0,4).map(course=> <CourseGrid key={course.id} course={course}></CourseGrid>)
                    }
                </div>
                <NavLink to="/courses"><button className="block mx-auto mt-12 text-xl font-medium py-4 px-8 rounded bg-blue-600 text-white">Explore All Courses</button></NavLink>
           </div>
            <CounterInfo></CounterInfo>
           <div className="container mx-auto py-24 px-4">
               <h3 className="text-center text-xl font-regular">Popular Online Courses</h3>
               <h2 className="text-center text-5xl font-bold sec-title mt-4 mb-16">Our Course Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        categories.map(category => <CategoryGrid key={category.name} category={category}></CategoryGrid> )
                    }
                </div>
                <NavLink to="/courses"><button className="block mx-auto mt-12 text-xl font-medium py-4 px-8 rounded bg-blue-600 text-white">Explore All Courses</button></NavLink>
           </div>
        </div>
    );
};

export default Home;