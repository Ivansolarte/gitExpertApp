
import { useState } from 'react';

export const AddGip = ({search}) => {

    const [text, setText] = useState("");

    const submit = (event)=>{
        event.preventDefault();
        search(text);
    }

  return (
    <form onSubmit={submit} >
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
    </form>
  );
}

