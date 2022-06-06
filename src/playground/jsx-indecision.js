console.log('This app is running');

//JSX- JavaScript XML
const app={
    Title:'Indecision App',
    Subtitle:'Put your life in the hands of computer',
    options: []
};

function getOptions(options)
{
  if(options.length>0)
  {
      return 'Here are your options';
  }
  else
  {
      return 'No Options';
  }
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option)
    {
        app.options.push(option);
        e.target.elements.option.value='';
        renderOptions();
    }

};

const onRemoveAll = () => {
    app.options=[];
    renderOptions();
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
 }

//const numbers = [8,9,10];
const renderOptions = () => {
    const template=(
        <div>
            <h1>{app.Title.toUpperCase()}</h1>
            {app.Subtitle && <p>{app.Subtitle}</p>}
            <p>{getOptions(app.options)}</p>
            <p>options: {app.options.length} </p>
            <button onClick={onRemoveAll}> Remove All </button>
            <button disabled ={app.options.length==0} onClick={onMakeDecision}> What should I Do</button>
            
            {
              /*numbers.map((number) => {
                  return <p key= {number}>Number: {number}</p>
              }   
              )*/
            }
            <ol>
                {app.options.map((option) => <li key={option}> {option} </li>
                )}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>add option</button>
            </form>
         </div>
    );
    ReactDOM.render(template,appRoot);
};

const appRoot=document.getElementById('app');

renderOptions();

