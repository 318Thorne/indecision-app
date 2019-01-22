class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.showDetails = this.showDetails.bind(this);
        this.state = {
            visibility: false
        }
    }
    showDetails(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Content</h1>
                <button onClick={this.showDetails}>
                    {this.state.visibity ? "hide details" : "show details"}    
                </button>
                {this.state.visibility && 
                    <p>Some details you can see</p>
                }
            </div>
        )
    }
}

console.log("build it is running")
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))
// let visible = true;
// const showDetails = () =>{
//     visible = !visible;
//     initialise();
// }

// const appRoot = document.getElementById('app');
// const initialise = () => {
//     const template = (
//         <div>
//             <h1>Visibility Content</h1>
//             <button onClick={showDetails}>
//                 {visible ? "hide details" : "show details"}    
//             </button>
//             {visible && 
//                 <p>Some details you can see</p>
//             }
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }
// initialise();