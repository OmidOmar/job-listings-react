const JobFilters = ({ filters, clearFilters }) => {
  return filters.length ? (
    <div>
      <div>
        {filters.map((filter, UID) => (
          <button key={UID}>{filter}</button>
        ))}
      </div>
      <div>
        <p onClick={clearFilters}>Clear</p>
      </div>
    </div>
  ) : null;
};
export default JobFilters;
