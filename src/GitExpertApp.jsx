
import { useState,useEffect } from 'react';
import { GipItem } from './component/GipItem';
import { AddGip } from './component/AddGip';

 export const GitExpertApp = () => {

  const [categorias, setCategorias] = useState([]);
  const [search, setSearch] = useState("");

  const getGit = async (texto) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=43igN6YwxtJnN10pW6i35MIOJ2d3Kobt&q=${texto}`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const newData = data.map((x)=>({
      id:x.id,
      title:x.title,
      url:x.images.downsized.url

    }))
    
    setCategorias(newData);
}

  const handlerAdd = (text) =>{
    setSearch(text)
    getGit(text)
    // setCategorias(['hola mundo'])
    // setCategorias([...categorias, text])
    // setCategorias([...categorias, 'valoran'])
  }

  useEffect(() => {
    getGit("")
  }, []);

  return (
    <>
      <h1>gitexpertapp</h1>
      <AddGip search={handlerAdd}/>
      <ol>
        {
          categorias.map((item,i) => {
            return (
              <GipItem 
                key={i}
                title={item.title} 
                url={item.url}                   
              />
            )
          })
        }
      </ol>
    </>
  );
}





