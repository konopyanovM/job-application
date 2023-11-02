import './VacancySearch.css';
import { useState } from 'react';

export const VacancySearch = ({ setSearchTerm: setSearchTermParent }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const search = () => {
    setSearchTermParent(searchTerm);
  };

  return (
    <div className="vacancy-search">
      <div className="vacancy-search__content">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onInput={e => {
              setSearchTerm(e.currentTarget.value);
            }}
          />
          <button className="input-group__suffix" onClick={search}>
            <img src="/assets/images/icons/search.png" alt="search" />
          </button>
        </div>
      </div>
    </div>
  );
};
