import { LinkComponent } from 'components/LinkComponent';

const Iphonex = () => (
  <main>
    <div>
      <div id='contenedor'>
        <div id='header'>
          <div id='infPersonal'>
            <h1>Alexander Uribe González</h1>
            <ul>
              <li>
                <h3>• +573006942501</h3>
                <h3>• alexanderuribeids@gmail.com</h3>
                <h3>• https://github.com/alexanderuribeids?tab=repositories</h3>
                <h3>
                  • www.linkedin.com/in/alexander-uribe-gonzalez-2a0836131
                </h3>
                <h3>• Street 42 59 BB 35 Tower 3 Apto. 713</h3>
                <h3>• Bello - Colombia</h3>
              </li>
            </ul>
          </div>
          <div id='photo'>
            <img src='/img/foto_alex.png' alt='foto_alex' />
          </div>
        </div>
        <div id='presentacion'>
          <h4>PRESENTATION</h4>
          <p>
            <h3>
              I am a responsible, honest person, committed to my work, restless
              to acquire new knowledge and apply it in the places where I work.
            </h3>
          </p>
        </div>
        <div id='habilidades'>
          <div id='skill'>
            <h5>SKILLS</h5>
            <ul>
              <li>
                <h3>- Agile - BI SSIS</h3>
                <h3>- BI SSAS - BI SSRS</h3>
                <h3>- BD SQL - BD Oracle</h3>
                <h3>- Power BI - Tableau</h3>
                <h3>- Python - Data Science</h3>
                <h3>- Big Data - IA</h3>
              </li>
            </ul>
          </div>
          <div id='languages'>
            <h5>LANGUAGES AND HOBBIES</h5>
            <ul>
              <li>
                <h3>- Spanish</h3>
                <h3>- English B1</h3>
                <h3> </h3>
                <h3>- Soccer</h3>
                <h3>- Trombone</h3>
              </li>
            </ul>
          </div>
        </div>
        <div id='careerHistory'>
          <h4>CARRER HISTORY</h4>
          <ul>
            <li>
              <h3>
                TATA CONSULTING SERVICES, Medellín, Colombia Oct. 2018 Aug. 2021
                Developer
              </h3>
              <h3>• Develop in agile framework</h3>
              <h3>
                • Develop solutions of business intelligence in modules of SSIS,
                SSAS, SSRS
              </h3>
              <h3>• Develop dashboards in Tableau</h3>
              <h3>
                • Develop store procedures, functions, views and relational
                model in SQL Server.
              </h3>
              <h3>
                • Develop store procedures, functions, views and relational
                model in Oracle.
              </h3>
              <h3>
                IG SERVICES S.A.S, Medellín, Colombia Dec. 2017 – Sep. 2018
                Development Engineer
              </h3>
              <h3>• Develop dashboards in Power BI</h3>
              <h3>
                • Develop solutions of business intelligence in modules of SSIS,
                SSAS, SSRS
              </h3>
              <h3>
                • Develop store procedures, functions, views and relational
                model in SQL Server.
              </h3>
              <h3>
                • Develop store procedures, functions, views and relational
                model in Oracle.
              </h3>
            </li>
          </ul>
        </div>
        <div id='formacion'>
          <div id='education'>
            <h5>EDUCATION AND COURSES</h5>
            <ul>
              <li>
                <h3>
                  • University of Antioquia, Medellín, Colombia - BS, Systems
                  Engineering
                </h3>
                <h3>
                  • Politécnico Marco Fidel Suárez, Bello, Colombia - BS,
                  Systems Technology
                </h3>
                <h3>• BS, Artificial Intelligence</h3>
                <h3>
                  • BS, Big Data: el impacto de los datos masivos en la sociedad
                  actual. BS, Introduction to Big Data
                </h3>
                <h3>
                  • BS, Big Data Integration and Processing. BS, Big Data
                  Modeling and Management Systems.
                </h3>
              </li>
            </ul>
          </div>
          <div id='certifications'>
            <h5>CERTIFICATIONS AND PROJECTS</h5>
            <ul>
              <li>
                <h3>
                  • BS, Data Science Spring 2020 Data Science for All - DS4A
                </h3>
                <h3>
                  • CORRELATION ONE - MINTIC Spring 2020 Data Science for All
                  DS4A
                </h3>
                <h3>
                  • CUSTOMER: HelPharma S.A. Solution: Medical support by means
                  of ML for prescribing biological therapy in patients with
                  psoriasis Year: 2020
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2>
        <LinkComponent path='/' text='Ir a página principal' />
      </h2>
    </div>
  </main>
);

export { Iphonex };
