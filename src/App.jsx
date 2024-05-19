import './App.css';
import SimpleComponent from './homeworks/homework_1/exercise_1/SimpleComponents.jsx';
import data from './homeworks/homework_1/exercise_1/data.jsx';
import results from './homeworks/homework_1/exercise_2/people.jsx';
import ShowPeople from './homeworks/homework_1/exercise_2/ShowPeople.jsx';
import ShowCartoon from './homeworks/homework_1/exercise_3/ShowCartoon.jsx';
import dataEpisodes from './homeworks/homework_1/exercise_3/episodes.jsx';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
        {data.map((item, index) => (
                    <SimpleComponent key={index} {...item} />
                ))}
        </ul>

        <table class='people-table'>
          {results.map((item, index) => (
                    <ShowPeople key={index} {...item} />
                ))}
        </table>

        <table>
          {dataEpisodes.map((item, index) => (
                    <ShowCartoon key={index} name={item.name} air_date={item.air_date} characters={item.characters} />
                ))}
        </table>  

      </header>
    </div>
  );
}
