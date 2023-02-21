import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import style from './Detail.module.css'


const Detail = () => {
    const  {detailId}  = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

  return(
    <>
      <div className={style.detail}>
        <Link to="/home">
            <button className={style.btnNav}>Volver</button>
        </Link>


          <div className={style.detailImgBox}>
            <img src={character?.image} alt={character?.name} />
            <h1 className={style.detailCharacterName}>{character?.name}</h1>
          </div>
        <div detailTxtBox>
          <div>
            <h3 className={style.infoTitle}>Specie:</h3>
            <p className={style.detailTxt}>{character?.species}</p>
          </div>

          <div>
            <h3 className={style.infoTitle}>Origin:</h3>
            <p className={style.detailTxt}>{character.origin && character.origin.name}</p>
          </div>

          <div>
            <h3 className={style.infoTitle}>Location:</h3>
            <p className={style.detailTxt}>{character.location && character.location.name}</p>
          </div>

          <div>
            <h3 className={style.infoTitle}>Episodes:</h3>
            <p className={style.detailTxt}>{character.episode && character.episode.length}</p>
          </div>
        </div> 
        
      </div>
    </>  
  )
}

export default Detail