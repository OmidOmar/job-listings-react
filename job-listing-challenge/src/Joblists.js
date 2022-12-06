import jobsList from "./data.json";
import { useState } from "react";
import JobFilters from "./Jobfilters";

let jobFilters = [];

const JobLists = () => {
  const [jobsData, setJobsData] = useState(jobsList);
  const [filterJobs, setFilterJobs] = useState(jobFilters);

  const handleJobsFilter = (e) => {
    const filterBy = e.target.value;

    if (jobFilters.indexOf(filterBy) === -1) {
      jobFilters = [...jobFilters, filterBy];
      setFilterJobs(jobFilters);
    }

    setJobsData(
      jobsData.filter((job) => {
        return [...job.languages, job.role, job.level].some(
          (filter) => filter.indexOf(filterBy) > -1
        );
      })
    );
  };

  const handleClearFilters = () => {
    jobFilters = [];
    setFilterJobs(jobFilters);
    setJobsData(jobsList);
  };

  const handleRemoveFilter = (e) => {
    jobFilters = jobFilters.filter((job) => job !== e.target.value);
    setFilterJobs(jobFilters);

    if (jobFilters.length)
      for (let filter of jobFilters) {
        setJobsData(
          jobsList.filter(
            (job) =>
              [...job.languages, job.role, job.level].indexOf(filter) > -1
          )
        );
      }
    else handleClearFilters();
  };

  return (
    <div id="container">
      <JobFilters
        filters={filterJobs}
        clearFilters={handleClearFilters}
        removeFilter={handleRemoveFilter}
      />
      {jobsData.map((job, UID) => {
        return (
          <div className="list" key={UID}>
            <div className="company-logo">
              <div className={job?.featured ? "featured" : null}> </div>
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
