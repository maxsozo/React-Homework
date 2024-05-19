
function ShowCartoon(props) {
   const {name, air_date, characters} = props;

   return (
    <div>
        <h2>{name}</h2>
        <p><strong>{air_date}</strong></p>
        <p><strong>{characters.map(character => character.name).join(', ')}</strong></p>
    </div>
   )
}

export default ShowCartoon;