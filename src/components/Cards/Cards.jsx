import Card from './Card';
import style from './Cards.module.css'

 function Cards({characters, onClose}) {
   
   return (
   <div className={style.container}>
      {characters.map(({name,species,gender,image,id}) =>{
         return( 
            <Card
               key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               detailId={id}
               onClose={() => onClose(id)}
            />
         )
      })}
   </div>
   )
}

export default Cards;
