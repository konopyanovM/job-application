import { vacancyService } from '../../services/vacancyService';
import { useEffect, useState } from 'react';
import './VacancyList.css';
import { Vacancy } from '../../types';

export const VacancyList = ({ searchTerm }) => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      vacancyService.get(searchTerm).then(res => {
        setLoading(false);
        setVacancies(res.data.data);

        console.log(vacancies);
      });
    }
  }, [searchTerm]);

  return (
    <ul className="vacancy-list">
      {loading ? (
        <div className="vacancy-list__placeholder --animation-jiggle">
          <h2>Loading...</h2>
        </div>
      ) : vacancies.length ? (
        vacancies.map((vacancy, index) => {
          return (
            <li className="vacancy-list__item" key={index}>
              <div className="vacancy-list__item-logo">
                {vacancy.employer_logo ? (
                  <img src={vacancy.employer_logo} alt={vacancy.employer_name} />
                ) : null}
                <p>{vacancy.employer_name}</p>
              </div>
              <div className="vacancy-list__item-content">
                <h3>{vacancy.job_title}</h3>
                <p>{vacancy.job_description}</p>
              </div>
            </li>
          );
        })
      ) : (
        <div className="vacancy-list__placeholder">
          <h2>No vacancies yet</h2>
        </div>
      )}
    </ul>
  );
};
