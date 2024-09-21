import React from "react";


class UserClass extends React.Component{
    props: any;
    constructor(props){
        super(props);
        //@ts-ignore
        this.state={count:0};
    }
    componentDidMount(){
    }
    render(){
        
        return(
            <>
            <h1>Hiiiiiii! {this.props.name}</h1>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>{this.state.count}</button>
            </>
        )
    }
}
export default UserClass;

