import {Component} from "react";
class FirstComponent extends Component{
    clickMe():void {
        alert("you clicked me !!");
    }

    render() {
        return(
            <div>
                <h1>My first Component</h1>
                <button className={'btn btn-light btn-outline-dark'} onClick={this.clickMe}> Click Me</button>
            </div>
        )
    }
}

export default FirstComponent;