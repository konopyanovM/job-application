import './HomePage.css';
import { VacancyList } from '../../components/VacancyList';
import { Header } from '../../layouts/Header';
import { VacancySearch } from '../../components/VacancySearch';
import { ReactElement, useState } from 'react';

export const HomePage = (): ReactElement => {
  const [searchTerm, setSearchTerm] = useState<string>();

  return (
    <div className="home">
      <Header></Header>
      <main>
        <VacancySearch setSearchTerm={setSearchTerm}></VacancySearch>
        <div className="app-container">
          <VacancyList searchTerm={searchTerm}></VacancyList>
        </div>
      </main>
    </div>
  );
};
