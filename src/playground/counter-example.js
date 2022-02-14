/*const user={
    name: 'Nikita',
    age: 26,
    location: 'Tanakpur'
};
function getLocation(location)
{
  if(location)
  {
  return <p>Location:{location}</p>;
  }
}
const templateTwo=(
<div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
</div>
);*/

let count=0;
const addOne = () => {
    count++;
    renderCounterApp();
}

const minusOne = () => {
    count--;
    renderCounterApp();
}

const reset = () => {
    count=0;
    renderCounterApp();
}

const appRoot=document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>count:{count}</h1>
            <button onClick= {addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);    
};
renderCounterApp();