const ShowPeople = (props) => {
    const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = props;
    
    return (
        <div>
            <h2 class='name-person'>{name}</h2>
            <p><strong>Height:</strong> {height} cm</p>
            <p><strong>Mass:</strong> {mass} kg</p>
            {gender !== 'n/a' && hair_color !== 'none' && <p><strong>Hair Color:</strong> {hair_color}</p>}
            <p><strong>Skin Color:</strong> {skin_color}</p>
            <p><strong>Eye Color:</strong> <span style={{ color: eye_color }}>{eye_color}</span></p>
            <p><strong>Birth Year:</strong> {birth_year}</p>
            {gender !== 'n/a' && <p><strong>Gender:</strong> {gender}</p>}
        </div>
    );
};

export default ShowPeople