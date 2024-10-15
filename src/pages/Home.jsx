import JobSearch from "../components/Home/JobSearch";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../slices/jobSlice'; // Update with your actual slice path
// import Jobs from '../utils/data';

export default function Home() {
    const dispatch = useDispatch();
    const { allJobs, isLoading, error } = useSelector((state) => state.jobs);
    const [filteredJobs, setFilteredJobs] = useState(allJobs); // State to hold filtered jobs

    useEffect(() => {
        dispatch(getAllJobs()); // Fetch jobs when the component mounts
    }, [dispatch]);

    useEffect(() => {
        if (allJobs.length) {
            setFilteredJobs(allJobs); // Initially display all jobs
        }
    }, [allJobs]);


    // console.log("all jobs", allJobs)

    // Filter logic
    const handleFilterChange = (filters) => {
        const { searchTerm, skills } = filters;
        
        const filtered = allJobs.filter((job) => {
            // Check if the search term matches the job title
            const matchesSearchTerm = job?.title?.toLowerCase().includes(searchTerm?.toLowerCase());

            // Check if all selected skills are present in the job's skills
            const matchesSkills = skills.every((skill) => job.skills.includes(skill));

            // Return jobs that match both the search term and selected skills
            return matchesSearchTerm && matchesSkills;
        });

        setFilteredJobs(filtered);
    };

    // if (isLoading) return <p>Loading...</p>;
    if (error) return <p className="p-4">Error: {error}</p>;

    return (
        <div className="relative home_container">
            <div className="nav_container sticky top-0 z-[2]">
                <Navbar />
            </div>
            <div className="max-w-[1100px] mx-auto p-3 min-w-[400px">
                <JobSearch onFilterChange={handleFilterChange} />
                <>
                    {
                        filteredJobs.length > 0 ? (
                            filteredJobs.map((job, id) => (
                                <JobCard key={id} job={job} />
                            ))
                        ) : (
                            <p>No Jobs match your criteria.</p>
                        )
                    }
                </>
            </div>
        </div>
    );
}
