import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { getJobById } from '../slices/jobSlice'; // Update with your actual slice path
import { PiMoneyFill } from "react-icons/pi";
import { IoCalendarClear } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { formatDate } from "../utils/dateUtils";

export default function ShowJob() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentJob, isLoading, error } = useSelector((state) => state.jobs);
    const { user } = useSelector((state)=>state.auth);

    useEffect(() => {
        dispatch(getJobById(id)); // Fetch job details
    }, [id, dispatch]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    if (!currentJob) return null;
    // console.log(currentJob)

    const isAuthor = user && currentJob.author === user._id;

    return (
        <div className="relative bg-[#F9F1F0]">
            <div className="nav_container sticky top-0 z-[2]">
                <Navbar />
            </div>
            <p className="translate-y-[-10px] sticky top-[4.5rem] bg-white font-semibold text-lg text-gray-600 z-[1] md:z-[3] shadow-lg py-6 px-6 text-center max-w-[1000px] mx-auto">{currentJob.description}</p>
            <div className="bg-white text-gray-600 max-w-[1000px] mx-auto p-8 shadow-lg my-3">
                <p className="text-[0.8rem] flex items-center gap-1 my-3">
                    <span>{formatDate(currentJob.postedDate)}</span>
                    <span className="text-gray-300"><GoDotFill /></span>
                    <span>{currentJob.jobType}</span>
                </p>
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl">{currentJob.title}</h2>
                    {
                        isAuthor &&
                        <Link to={`/jobs/${id}/edit`} className="bg-red-500 text-white px-3 py-2 rounded-md">Edit Job</Link>
                    }
                </div>
                <span className="text-red-500 text-sm">{currentJob.location}</span>
                <div className="my-6 flex items-center max-w-[300px] gap-4">
                    <div className="flex flex-col">
                        <PiMoneyFill className="text-gray-600" />
                        <span className="text-sm text-gray-600 flex items-center gap-2">
                            <span>₹{currentJob?.salary?.from}</span>
                            <span>-</span>
                            <span>₹{currentJob?.salary?.to}</span>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <IoCalendarClear className="text-gray-600" />
                        <span className="text-sm text-gray-600">{currentJob.duration} Months</span>
                    </div>
                </div>
                <div className="my-3">
                    <h5 className="mb-2 font-semibold">About Company</h5>
                    <p className="py-2">{currentJob.about}</p>
                </div>
                <div className="my-3">
                    <h5 className="mb-2 font-semibold">About the Job/Internship</h5>
                    <p className="my-2 py-2">{currentJob?.aboutJob?.description}</p>
                    <div>
                        <p>{`Selected candidate's day-to-day responsibilities include:`}</p>
                        <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }}>
                            {
                                currentJob?.aboutJob?.responsibility.map((item, id) => (
                                    <li key={id} className="leading-[1.4]">{item}</li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
                <div className="my-3">
                    <p className="font-semibold">Skill(s) required</p>
                    <div className="flex items-center gap-2 flex-wrap py-2">
                        {currentJob?.skills?.length ? (
                            currentJob.skills.map((skill, id) => (
                                <span key={id} className="px-2 py-1 bg-red-100 rounded-full">
                                    {skill}
                                </span>
                            ))
                        ) : (
                            <p>No skills required for this job.</p>
                        )}
                    </div>
                </div>
                <div className="my-3">
                    <p className="font-semibold mb-2">Additional Information</p>
                    <p>{currentJob.additionalInformation}</p>
                </div>
            </div>
        </div>
    );
}
