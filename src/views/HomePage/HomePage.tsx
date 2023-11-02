import './HomePage.css';
import { VacancyList } from '../../components/VacancyList/VacancyList';
import { Header } from '../../layouts/Header';
import { VacancySearch } from '../../components/VacancySearch/VacancySearch';

export const HomePage = () => {
  return (
    <div className="home">
      <Header></Header>
      <main>
        <VacancySearch></VacancySearch>
        <div className="app-container">
          <VacancyList></VacancyList>
        </div>
      </main>
    </div>
  );
};
