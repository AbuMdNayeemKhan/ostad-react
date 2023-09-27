import Hero from './component/Hero';

const App = () => {
  const ItemObj = {
    name: 'Nayeem Khan',
    age: '25',
    city: 'Dhaka',
  }
  return (
    <div>
      <Hero item={ItemObj}/>
    </div>
  );
};

export default App;