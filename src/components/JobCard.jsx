import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div className="bg-white lg:p-6 px-2 py-4 shadow-[1px_1px_15px_pink] flex lg:flex-row flex-col lg:items-center items-baseline space-x-4 mb-4">
      {/* Company Logo */}
      <div className="borde pr-3">
        <img src={`https://ui-avatars.com/api/?name=${job.title}`} alt={job.title} className="w-12 h-12 rounded-full" />
      </div>

      <div className="flex-1 flex lg:flex-row flex-col lg:items-center lg:justify-between gap-6  pr-3" style={{"margin":"0"}}>
        {/* Job Details */}
        <div className="flex-grow">
          <h3 className="text-xl font-bold">{job.title}</h3>
          <div className="text-gray-500 flex items-center space-x-2 text-sm">
            <span>{job.vacancies} employees</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>₹{job?.salary?.from}</span>
              <span>-</span>
              <span>₹{job?.salary?.to}</span>
            </span>
            <span>•</span>
            <span>{job.location}</span>
          </div>

          {/* Skills */}
          <div className="flex space-x-2 mt-2 pr-3">
            {Array.isArray(job?.skills) && job?.skills.length > 0 ? (
              job?.skills.map((skill, index) => (
                <span key={index} className="bg-red-100 text-red-600 px-2 py-1 rounded-lg text-xs">{skill}</span>
              ))
            ) : (
              <span className="text-gray-500 text-xs">No skills listed</span>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <div>
          <Link to={`/jobs/${job._id}`} className="bg-red-500 text-white px-4 py-2 rounded-lg">View details</Link>
        </div>
      </div>
    </div>
  );
}
