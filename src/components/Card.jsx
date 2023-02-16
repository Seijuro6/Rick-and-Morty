import style from './Card.module.css'
import { Link } from 'react-router-dom'

function Card({name,species,gender,image,onClose, detailId}) {
   return (
      <div className={style.container}>
         <button onClick={onClose} className={style.button}>X</button>
         <Link to={`/detail/${detailId}`}>
         <h2>{name}</h2>
         </Link>
         <img  src={image} alt="Imagen de Rick" />
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div>
   );
}
export default Card