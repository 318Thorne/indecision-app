import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    }
    render(){
        return(
            <div>
                <form 
                className="addOption"
                onSubmit={this.handleAddOption}>
                    <input className="addOption__input" type="text" name="option"/>
                    <button className="button">Add</button>
                </form>
                {this.state.error && <p className="addOption-error">{this.state.error}</p>}
            </div>
        );
    }
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            const error = this.props.handleAddOption(option)
            this.setState(() => ({error}));
        }
        e.target.elements.option.value = "";
    }
}
