import { ChangeEvent, useState } from 'react';
import { Button } from '../Button';

export function Form() {
  const [name, setName] = useState('');

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  console.log('[Form] Render');

  return (
    <form>
      <input name="firstName" value={name} onChange={handleChangeName} />

      <Button title="Ok" />
    </form>
  );
}
