import React from 'react';
import Options from './Options'
import AddOption from './AddOption'
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined
    }

    handleAddOption = (option) => {
        if(!option){
            return 'Enter A value to add item'
        }
        else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }
        else{
            this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
            });
        }
    }
    // handleDeleteOptions
    handleDeleteOptions = () => {
        this.setState(() => ({options: [] }));
    }
    //delete single
    handleDeleteSingular = (toRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== toRemove)
        })
        )
    }
    // handlePick
    handlePick = () => {
        const num = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[num];
        this.setState(() => ({selectedOption}))
    }
    // handleSelectedOption
    handleSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    }

    // life cycle helper methods
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options}))
            }
        }
        catch (e){

        }
    }
    componentDidUpdate (prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('updated')
        }
    }
    componentWillUnmount(){
        console.log('will unmount')
    }
    render(){
        const title = "Indecision"
        const subtitle = "put your life in the hands of a computer";
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        handlePick ={this.handlePick}
                        />
                    <div
                        className="widget">
                        <Options                   
                            options={this.state.options}   
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteSingular = {this.handleDeleteSingular}
                            />
                        <AddOption 
                            handleAddOption = {this.handleAddOption}
                            />
                    </div>
                </div>
                <OptionModal
                    selectedOption = {this.state.selectedOption}
                    handleSelectedOption = {this.handleSelectedOption}
                />
            </div>
        );
    }
}