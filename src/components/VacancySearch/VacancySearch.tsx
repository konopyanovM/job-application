import './VacancySearch.css';

export const VacancySearch = () => {
  return (
    <div className="vacancy-search">
      <div className="vacancy-search__content">
        <div className="input-group">
          <input type="text" placeholder="Search" />
          <button className="input-group__suffix">
            <img src="/assets/images/icons/search.png" alt="search" />
          </button>
        </div>
      </div>
    </div>
  );
};
