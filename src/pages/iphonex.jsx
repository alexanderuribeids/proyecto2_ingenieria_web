import { LinkComponent } from 'components/LinkComponent';

const Iphonex = () => (
  <main>
    <div>
      <h1>Hoja de vida para iphonex</h1>
      <h2>
        <LinkComponent path='/' text='Ir a página principal' />
      </h2>
    </div>
    <div>
      <img src='/img/iphonex.png' alt='Iphonex' />
    </div>
  </main>
);

export { Iphonex };
