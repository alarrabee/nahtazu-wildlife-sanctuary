
import { Link } from 'react-router-dom';

const AnimalList = () => {
    const animals = ['Elephant', 'Tiger', 'Lion']; // List of animals

    return (
        <div>
            <h1>Animal List</h1>
            <ul>
                {animals.map(animal => (
                    <li key={animal}>
                        <Link to={`/animal/${encodeURIComponent(animal)}`}>{animal}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnimalList;
