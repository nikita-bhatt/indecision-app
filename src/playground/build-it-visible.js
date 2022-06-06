
class VisibilityToggle extends React.Component
{
    
    constructor(props)
        {
            super(props);
            this.state = {
                visibility: false
            }
            this.toggleVisibility = this.toggleVisibility.bind(this);
        }
        toggleVisibility()
        {
            this.setState((prevState) => {
                return {
                visibility : ! prevState.visibility
                };
            }
                 
            );
        }
    render()
    {
        
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick ={this.toggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && <p>Here are the details</p>}

            </div>

        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/*let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render=() => {
    const template = (
        <div>
        <h1>Visibility Toggle</h1>
    <button onClick={toggleVisibility}> 
        {visibility ? 'Hide Details' : 'Show Details'}
    </button>
    {visibility && (
        <div>
            <p>Here are the details!</p>
        </div>
    )
    }
        </div>
    
    );
    ReactDOM.render(template,appRoot);
};


const appRoot = document.getElementById('app');
render();*/