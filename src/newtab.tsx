
import BirthFormPage from '~pages/BirthFormPage';
import './global.css'

import { Background } from '~components/Background';
import { CountdownPage } from '~pages/CountdownPage';
import { useBirth } from '~hooks/useBirth';

function NewTab() {
  const [birth] = useBirth();
  const isStoredBirth = Boolean(birth);

  return (
    <>
      <Background />
      <main className='w-dvw h-dvh text-white isolate'>
        {isStoredBirth ? <CountdownPage /> : <BirthFormPage />}
      </main>
    </>
  )
}

export default NewTab
