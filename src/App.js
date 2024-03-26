import './App.css';

const cars = [
  {
    "image": "https://file.kelleybluebookimages.com/kbb/base/house/2012/2012-Chevrolet-Cruze-FrontSide_CHCRUZE121_640x480.jpg?downsize=750:*",
    "width": '264',
    "height": '378',
    "color": "Silver",
    "make": "Chevy",
    "model": "Cruze",
    "year": "2012"
  },
  {
    "image": "https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/03fbc82f-2915-42f9-b8e8-c8e85f4a71e4/df93014b-c7d2-4e04-9a14-e6df852e9cdc.png",
    "width": '264',
    "height": '378',
    "color": "Black",
    "make": "Pontiac",
    "model": "G6",
    "year": "2008"
  }
];

function CarAgeComparison () {
  let isNewer;
  if (cars[0].year > cars[1].year) {
    isNewer = cars[0];
  } else {
    isNewer = cars[1];
  }
  return (
    <div>
      <hr></hr>
      <h2>Which car is NEWER?</h2>
      <img
        className="carCover"
        src={cars[0].image}
        alt={cars[0].make}
        style={{
          width: cars[0].width,
          height: cars[0].height
        }}
      />
      <h3 style={{ color: isNewer === cars[0] ? 'green' : 'black' }}> {cars[0].year} {cars[0].make} {cars[0].model}</h3>
      <hr></hr>
      <img
        className="carCover"
        src={cars[1].image}
        alt={cars[1].make}
        style={{
          width: cars[1].width,
          height: cars[1].height
        }}
      />
      <h3 style={{ color: isNewer === cars[1] ? 'green' : 'black' }}> {cars[1].year} {cars[1].make} {cars[1].model}</h3>
      <hr></hr>
      <p>{isNewer.make} is NEWER</p>
      <hr></hr>
    </div>
  );
}

const manga = {
  title: "Beserk",
  author: "Kentaro Miura",
  release: "1989-08-25",
  genre: "fantasy",
  image: "https://m.media-amazon.com/images/I/71lnvXSiITL._AC_UF1000,1000_QL80_.jpg",
  width: '264',
  height: '378'
};

function MangaShelf () {
  return (
    <div>
      <hr></hr>
      <h2>{manga.title} - {manga.author}</h2>
      <h3>Genre: {manga.genre}</h3>
      <h6>Release: {manga.release}</h6>
      <hr></hr>
      <img
        className="mangaCover"
        src={manga.image}
        alt={manga.title + ' cover'}
        style={{
          width: manga.width,
          height: manga.height
        }}
      />
      <hr></hr>
    </div>
  );
}

const me = {
  name: "Richard Ford",
  age: "23",
  degree: "Games and Interactive Media",
  graduation: "Spring 2024",
  college: "MSU",
  job: "Data Center Engineer",
  company: "MSU",
  residence: "Home Owner"
}

function Me ()
{
  return (
    <div>
      <hr></hr>
      <h2>{me.name}</h2>
      <p>He is {me.age} years old born March 17th, 2001. He is graduating in {me.graduation} with a degree in {me.degree} from {me.college}. He is currently also a full-time employee at {me.company} working as a {me.job}. In 2024, {me.name} became a {me.residence}.</p>
      <hr></hr>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>3 React Components</h1>
        <h2>1</h2>
        <MangaShelf />
        <h2>2</h2>
        <CarAgeComparison />
        <h2>3</h2>
        <Me />
      </header>
    </div>
  );
}

export default App;
