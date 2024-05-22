import './App.css';
import SimpleComponent from './homeworks/homework_1/exercise_1/SimpleComponents.jsx';
import data from './homeworks/homework_1/exercise_1/data.jsx';
import results from './homeworks/homework_1/exercise_2/people.jsx';
import ShowPeople from './homeworks/homework_1/exercise_2/ShowPeople.jsx';
import ShowCartoon from './homeworks/homework_1/exercise_3/ShowCartoon.jsx';
import dataEpisodes from './homeworks/homework_1/exercise_3/episodes.jsx';
import Spoiler from './homeworks/homework_2/exercise_1/Spoiler.jsx';
import RangeInput from './homeworks/homework_2/exercise_2/RangeInput.jsx';
import LoginForm from './homeworks/homework_2/exercise_3/LoginForm.jsx';
import PasswordConfirm from './homeworks/homework_2/exercise_4/PasswordConfirm.jsx';
import Carousel from './homeworks/homework_2/exercise_5/Carousel.jsx';
import {Pagination, Content, Color} from './homeworks/homework_2/exercise_6/Pagination.jsx';

export default function App() {

  function handleLogin (login, password) {
    console.log('Login:', login)
    console.log('Password:', password)
  }

  const images = [
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-1.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-2.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-3.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-4.jpg",
    "https://ukrainetrek.com/blog/wp-content/uploads/2016/12/top-10-photos-ukrainian-nature-2016-5.jpg"
  ];

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
        <Spoiler header={<h1>Заголовок</h1>} open>
            Контент 1
            <p>
                лорем іпсум тралівалі і тп.
            </p>
        </Spoiler>


        <Spoiler>
            <h2>Контент 2</h2>
            <p>
                лорем іпсум тралівалі і тп.
            </p>
        </Spoiler>

        <RangeInput min={2} max={10} type="text" className="my-input" onChange={(e) => console.log(e.target.value)} />
        
        <LoginForm onLogin={handleLogin} />

        <PasswordConfirm min={2} />

        <div className="app">
          <Carousel images={images} />
        </div>

        <Pagination max={10} render={Content} />
        <Pagination max={16} render={Color} />          
      </header>
    </div>
  );
}
