import React from "react";
import './SearchBar.css'
import styled from 'styled-components'

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          comment:''
      }
    }
    changeHandler = e => {
        this.setState ({ comment: e.target.value })
    }
    
    render () {
        return (
            <div >
                <SearchWrapper>
                    <i class="fab fa-instagram"></i>
                    <form onSubmit = {this.handleSubmit}>
                        <input placeholder={"Search"}
                        value={this.state.comment}
                        onChange={this.changeHandler} />
                    </form>
                    <div>
                        <i class="far fa-compass"></i>
                        <i class="far fa-heart"></i>
                        <i class="far fa-user"></i>
                    </div>

                </SearchWrapper>
            </div>
        )
    }
};

const SearchWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

export default SearchBar;