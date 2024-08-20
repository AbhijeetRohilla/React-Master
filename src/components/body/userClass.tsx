import React from "react";


class UserClass extends React.Component{
    props: any;
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <h1>Hiiiiiii! {this.props.name}</h1>
            </>
        )
    }
}
export default UserClass;

