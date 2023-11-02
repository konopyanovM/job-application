import { vacancyService } from '../../services/vacancyService';
import { useEffect } from 'react';
import './VacancyList.css';

export const VacancyList = () => {
  useEffect(() => {
    // vacancyService.get().then(res => {
    //   console.log(res);
    // });
  });

  const data = {
    employer_name: 'INSPYR Solutions',
    employer_logo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBEUdBuEUSI7C8nBtqKgTUlhnKXOa5qTO2701&s=0',
    employer_website: 'http://www.tekpartners.com',
    employer_company_type: null,
    job_publisher: 'LinkedIn',
    job_id: '2BcT7Q38BtZi8MZFAAAAAA==',
    job_employment_type: 'FULLTIME',
    job_title: 'Senior Python Developer',
    job_apply_link:
      'https://www.linkedin.com/jobs/view/senior-python-developer-at-inspyr-solutions-3747565771',
    job_apply_is_direct: false,
    job_apply_quality_score: 0.6484,
    apply_options: [
      {
        publisher: 'LinkedIn',
        apply_link:
          'https://www.linkedin.com/jobs/view/senior-python-developer-at-inspyr-solutions-3747565771',
        is_direct: false,
      },
      {
        publisher: 'Dice',
        apply_link: 'https://www.dice.com/job-detail/f38c1a3b-e87b-46f7-b90a-2489dc4efcb2',
        is_direct: true,
      },
    ],
    job_description:
      "Title: Sr. Python Developer\n\nLocation: Irving, TX\n\nDuration: Long term contract\n\nWork Requirements: US Citizen, GC Holders, H1B or Authorized to Work in the USA\n\nJob Description:\n\nWe are seeking a highly skilled Senior Python Developer with a minimum of 5 years of experience in complex programming, writing and testing code, debugging programs, and integrating applications with third-party web services. The ideal candidate should have hands-on experience in configuring GitHub workflows and possess practical knowledge of front-end technologies such as JavaScript, HTML, and CSS. A certification in Python is required for this role. In this position, you will be responsible for developing and integrating Python applications while collaborating with cross-functional teams to deliver high-quality solutions.\n\nResponsibilities:\n\n- Design, develop, and maintain complex Python applications, ensuring high performance, scalability, and security.\n\n- Write clean, efficient, and well-documented code using best practices.\n\n- Test and debug Python programs to ensure functionality and resolve issues.\n\n- Integrate Python applications with third-party web services, APIs, and databases.\n\n- Collaborate with cross-functional teams to gather requirements and implement solutions.\n\n- Configure GitHub workflows to automate code testing, builds, and deployments.\n\n- Collaborate with front-end developers to integrate Python applications with JavaScript, HTML, and CSS.\n\n- Develop and maintain RESTful APIs for seamless integration with front-end interfaces.\n\n- Ensure the security and integrity of the applications by following best practices and implementing necessary safeguards.\n\n- Stay up to date with the latest trends and advancements in Python development and front-end technologies.\n\n- Provide guidance and support to other developers, as needed.\n\n- Participate in code reviews to maintain code quality and identify areas for improvement.\n\nRequirements:\n\n- Bachelor's degree in Computer Science, Software Engineering, or a related field.\n\n- Minimum of 5 years of professional experience as a Python Developer, with a focus on complex programming, code testing, and debugging.\n\n- Strong proficiency in Python programming language and its libraries/frameworks (e.g., Django, Flask).\n\n- Experience integrating Python applications with third-party web services, APIs, and databases.\n\n- Practical knowledge of front-end technologies, including JavaScript, HTML, and CSS.\n\n- Certification in Python programming.\n\n- Familiarity with version control systems, particularly GitHub, and experience configuring workflows.\n\n- Strong problem-solving and analytical skills, with a keen attention to detail.\n\n- Excellent communication and collaboration skills to work effectively within a team and with stakeholders at all levels.\n\nPreferred Qualifications:\n\n- Master's degree in Computer Science, Software Engineering, or a related field.\n\n- Experience with front-end frameworks (e.g., React, Angular, Vue.js) and libraries.\n\n- Knowledge of database systems (e.g., SQL, NoSQL) and data modeling.\n\n- Familiarity with cloud platforms such as AWS, Azure, or GCP.\n\n- Understanding of DevOps practices and tools.\n\n- Experience with automated testing frameworks and methodologies.\n\nAbout INSPYR Solutions\n\nAs a leading information technology partner, we connect top IT talent with our clients to provide innovative business solutions through our IT Staffing, Professional Services, and Infrastructure Solutions divisions. We understand and value the unique needs of highly-skilled information technology professionals in the industry and always strive to stay above the curve. Our company was founded on the following core values: Be the Best, Understand the Urgency, Never Ever Give Up, Have the Courage to Excel, and Make a Contribution. We take pride in our business model and strive to create a positive workplace environment through an exemplary culture.\n\nINSPYR Solutions provides Equal Employment Opportunities (EEO) to all employees and applicants for employment without regard to race, color, religion, sex, national origin, age, disability, or genetics. In addition to federal law requirements, INSPYR complies with applicable state and local laws governing nondiscrimination in employment in every location in which the company has facilities.",
    job_is_remote: false,
    job_posted_at_timestamp: 1698846529,
    job_posted_at_datetime_utc: '2023-11-01T13:48:49.000Z',
    job_city: 'Dallas',
    job_state: 'TX',
    job_country: 'US',
    job_latitude: 32.776665,
    job_longitude: -96.79699,
    job_benefits: null,
    job_google_link:
      'https://www.google.com/search?gl=us&hl=en&rciv=jb&q=python+developer+in+texas,+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=python+developer+in+texas,+usa&htidocid=2BcT7Q38BtZi8MZFAAAAAA%3D%3D',
    job_offer_expiration_datetime_utc: '2023-12-01T13:48:49.000Z',
    job_offer_expiration_timestamp: 1701438529,
    job_required_experience: {
      no_experience_required: false,
      required_experience_in_months: 60,
      experience_mentioned: true,
      experience_preferred: false,
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: true,
      degree_mentioned: true,
      degree_preferred: true,
      professional_certification_mentioned: true,
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {
      Qualifications: [
        'Work Requirements: US Citizen, GC Holders, H1B or Authorized to Work in the USA',
        'We are seeking a highly skilled Senior Python Developer with a minimum of 5 years of experience in complex programming, writing and testing code, debugging programs, and integrating applications with third-party web services',
        'The ideal candidate should have hands-on experience in configuring GitHub workflows and possess practical knowledge of front-end technologies such as JavaScript, HTML, and CSS',
        'A certification in Python is required for this role',
        "Bachelor's degree in Computer Science, Software Engineering, or a related field",
        'Strong proficiency in Python programming language and its libraries/frameworks (e.g., Django, Flask)',
        'Experience integrating Python applications with third-party web services, APIs, and databases',
        'Certification in Python programming',
        'Familiarity with version control systems, particularly GitHub, and experience configuring workflows',
        'Strong problem-solving and analytical skills, with a keen attention to detail',
        'Excellent communication and collaboration skills to work effectively within a team and with stakeholders at all levels',
      ],
      Responsibilities: [
        'In this position, you will be responsible for developing and integrating Python applications while collaborating with cross-functional teams to deliver high-quality solutions',
        'Design, develop, and maintain complex Python applications, ensuring high performance, scalability, and security',
        'Write clean, efficient, and well-documented code using best practices',
        'Test and debug Python programs to ensure functionality and resolve issues',
        'Integrate Python applications with third-party web services, APIs, and databases',
        'Collaborate with cross-functional teams to gather requirements and implement solutions',
        'Configure GitHub workflows to automate code testing, builds, and deployments',
        'Collaborate with front-end developers to integrate Python applications with JavaScript, HTML, and CSS',
        'Develop and maintain RESTful APIs for seamless integration with front-end interfaces',
        'Ensure the security and integrity of the applications by following best practices and implementing necessary safeguards',
        'Stay up to date with the latest trends and advancements in Python development and front-end technologies',
        'Provide guidance and support to other developers, as needed',
        'Participate in code reviews to maintain code quality and identify areas for improvement',
      ],
    },
    job_job_title: 'Senior',
    job_posting_language: 'en',
    job_onet_soc: '15113200',
    job_onet_job_zone: '4',
  };

  return (
    <ul className="vacancy-list">
      <li className="vacancy-list__item">
        <div className="vacancy-list__item-logo">
          <img src={data.employer_logo} alt={data.employer_name} />
          <p>{data.employer_name}</p>
        </div>
        <div className="vacancy-list__item-content">
          <h3>{data.job_title}</h3>
          <p>{data.job_description}</p>
        </div>
      </li>
    </ul>
  );
};
