const JobFilters = ({ filters, clearFilters,removeFilter }) => {
  return filters.length ? (
    <div id="filter-area">
      <div>
        {filters.map((filter, UID) => (
          <p className="btn-filters-area" key={UID}>
            {filter} <button onClick={removeFilter} value={filter} className="">X</button>
          </p>
        ))}
      </div>
      <div>
        <button className="btn btn-link" onClick={clearFilters}>
          Clear
        </button>
      </div>
    </div>
  ) : null;
};
export default JobFilters;
