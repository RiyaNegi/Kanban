import React, { PureComponent } from 'react'
import { connect } from "react-redux";

class ListView extends PureComponent {
    render() {
        const lists = this.props.lists;
        console.log("list: ", lists)
        return (
            <div className="d-flex flex-direction-column">
                <h3>List view</h3>
                <div>{lists.map(i => (<div>{i.title}</div>))}</div>
            </div>)
    }
}

const mapStateToProps = state => ({
    lists: state.lists
})

export default connect(mapStateToProps)(ListView);
