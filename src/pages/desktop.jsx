import { LinkComponent } from 'components/LinkComponent';

const Desktop = () => (
  <main>
    <div>
      <h1>Hoja de vida para el Desktop</h1>
      <h2>
        <LinkComponent path='/' text='Ir a página principal' />
      </h2>
    </div>
    <div>
      <img src='/img/mac_book_p3.png' alt='mac_book_p3' />
    </div>
  </main>
);

export { Desktop };
