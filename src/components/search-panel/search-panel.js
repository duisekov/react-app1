import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {

    state = {
        term: ''
    };

    onChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.search(term);
    };

    render() {
        return (
            <input type="text"
                   className="form-control search-input"
                   onChange={this.onChange}
                   placeholder="type to search"
                   value={this.state.searchText}/>
        );
    }


};