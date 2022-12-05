import jobsList from "./data.json";
import { useState } from "react";
import JobFilters from "./Jobfilters";
//import JobFilters from "./Jobfilters";

let jobFilters = [];

const JobLists = () => {
  const [jobsData, setJobsData] = useState(jobsList);
  const [filterJobs, setFilterJobs] = useState(jobFilters);

  const handleJobsFilter = (e) => {
    if (jobFilters.indexOf(e.target.value) === -1) {
      jobFilters = [...jobFilters, e.target.value];
      setFilterJobs(jobFilters);
    }

    setJobsData(jobsData.filter(job => {
      return [...job.languages,job.role,job.level].some( filter => filter.indexOf(e.target.value) >-1)
    }))
  };

  const handleClearFilters = () => {
    jobFilters=[];
    setFilterJobs(jobFilters);
    setJobsData(jobsList)
  }
  return (
    <div>
      <JobFilters filters={filterJobs} clearFilters = {handleClearFilters} />
      {jobsData.map((job, UID) => {
        return (
          <div key={UID}>
            <div>
              <img src={job.logo} alt={job.company + " logo"}></img>
            </div>
            <div>
              <p>
                {job.company} <span>{job.new && "NEW!"}</span>{" "}
                <span>{job.featured && "FEATURED"}</span>{" "}
              </p>
              <h3>{job.position}</h3>
              <p>{`${job.postedAt} . ${job.contract} . ${job.location}`}</p>
            </div>
            <div>
              {[...job.languages, job.level, job.role].map((language, UID) => (
                <button value={language} onClick={handleJobsFilter} key={UID}>
                  {language}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default JobLists;
