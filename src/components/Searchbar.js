import React from 'react';
import './Imagestyle.css';

class Searchbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {term:''};
    this.Inputchange = this.Inputchange.bind(this);
    this.onFormsubmit = this.onFormsubmit.bind(this);
  }
  Inputchange(event){
    this.setState({term:event.target.value});
  }
  onFormsubmit(e){
    e.preventDefault();
    this.props.Submit(this.state.term)
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormsubmit}>
          <div className="field">
            <label>Image Search</label>
            <input type = "text" 
            value = {this.state.term} 
            onChange = {this.Inputchange}/>
          </div>
        </form>
      </div>
    );
  }

}

export default Searchbar;