import { LinkComponent } from 'components/LinkComponent';

const Tablet = () => (
  <main>
    <div>
      <h1>Hoja de vida para tablet</h1>
      <h2>
        <LinkComponent path='/' text='Ir a página principal' />
      </h2>
    </div>
    <div>
      <img src='/img/sam_gal_tab3.png' alt='sam_gal_tab3' />
    </div>
  </main>
);

export { Tablet };
