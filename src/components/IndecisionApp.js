import React from 'react'
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal'
export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    };
    componentDidMount()
    {
        try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options)
        {
            this.setState(() => ({options}));

        }
    }
    catch(e){

    }
    }
    componentDidUpdate(prevProps,prevState)
    {
        if(prevState.options.length!= this.state.options.length)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
        
    }
    componentWillUnmount()
    {
        console.log('Component Will unmount')
    }
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    }; 

    handleSelectedOptions = () => {
        this.setState(() => ({selectedOption: undefined}));

    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
          options: prevState.options.filter( (option) => optionToRemove!=option
          )
        })

        );
    };
    handlePick = () =>
    {
       const randomNumber = Math.floor(Math.random() * this.state.options.length);
       const option = this.state.options[randomNumber];
       this.setState(() => ({
        selectedOption: option
       })

       );
    };

    handleAddOption = (option) =>
    {
        if(!option)
        {
            return 'Enter a valid Option';
        }
        else if(this.state.options.indexOf(option) > -1)
        {
            return 'This option already exists';
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }

    render(){
        const subtitle = "Put your life in the hands of a computer!";

        return (
            <div>
                <Header subtitle = {subtitle}/>
                <div className = "container">
                <Action 
                hasOption= {this.state.options.length>0}
                handlePick= {this.handlePick}
                />
                <div className= "widget">
                <Options 
                options={this.state.options}
                handleDeleteOptions= {this.handleDeleteOptions}  
                handleDeleteOption = {this.handleDeleteOption}  
                />
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
                </div>
                </div>
                <OptionModal 
                selectedOption= {this.state.selectedOption}
                handleSelectedOptions= {this.handleSelectedOptions}
                />
            </div>
        );
    }
}