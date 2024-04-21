import React from "react";
//Class based Component
class User extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        const { name, location } = this.props;
        
        return (
            <div className="user-card">
                <h1>Name : {name}</h1>
                <h1>Location : {location}</h1>
            </div>
        )
    }
}

export default User;