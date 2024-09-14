import React from "react";


class UserClass extends React.Component{
    props: any;
    constructor(props){
        super(props);
        console.log("constructor called")
        //@ts-ignore
        this.state={count:0};
    }
    componentDidMount(){
        console.log("component did mount called")
    }
    render(){
        console.log("Render called")
        
        return(
            <>
            <h1>Hiiiiiii! {this.props.name}</h1>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>{this.state.count}</button>
            </>
        )
    }
}
export default UserClass;

