import { LinkComponent } from 'components/LinkComponent';

const Home = () => {
  return (
    <main>
      <div className='flex flex-col'>
        <h1>Opciones de la Hoja de vida</h1>
        <LinkComponent path='/iphonex' text='Ir a Hoja de vida para Iphonex' />
        <LinkComponent path='/tablet' text='Ir a Hoja de vida para Tablet' />
        <LinkComponent path='/desktop' text='Ir a Hoja de vida para Desktop' />
      </div>
    </main>
  );
};
export { Home };
