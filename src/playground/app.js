// make sure component is capitalised. this is how react distinguishes between html and componenets
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteSingular = this.handleDeleteSingular.bind(this);
        this.state = {
            options: props.options
        }
    }
    handleAddOption(option){
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
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('updated')
        }
    }
    componentWillUnmount(){
        console.log('will unmount')
    }
    // handleDeleteOptions
    handleDeleteOptions() {
        this.setState(() => ({options: [] }));
    }
    //delete single
    handleDeleteSingular(toRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== toRemove)
        })
        )
    }
    // handlePick
    handlePick(){
        const num = Math.floor(Math.random() * this.state.options.length);
        console.log(this.state.options[num]);
    }
    render(){
        const title = "Indecision"
        const subtitle = "put your life in the hands of a computer";
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick ={this.handlePick}
                    />
                <Options                   
                    options={this.state.options}   
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteSingular = {this.handleDeleteSingular}
                    />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                    />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}
const Header = (props) => {
    return (
            <div>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </div>
        );
}

const Action = (props) =>{
    return(
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What Should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return(
        <div>
            <button 
                onClick={props.handleDeleteOptions}>
                remove all
            </button>
            {props.options.map((item, index) => 
            (
                <Option 
                    item={item} 
                    key={index} 
                    handleDeleteSingular = {props.handleDeleteSingular}/>
            )
            )}
        </div>
    );
}

const Option = (props) => {
    return(
            <div>
                <p>{props.item}</p>
                <button 
                    onClick={(e) => {
                        props.handleDeleteSingular(props.item)
                    }}
                >
                    remove
                </button>
            </div>
        );
}

class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            const error = this.props.handleAddOption(option)
            this.setState(() => ({error}));
        }
        e.target.elements.option.value = "";
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));