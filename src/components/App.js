import React from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageList from './ImageList';
import './Imagestyle.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={images:[]}
    this.Search=this.Search.bind(this);
  }
  async Search(item){
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params: { query: item },
      headers:{
        Authorization:'Client-ID IZCY4rjL53CykdROU6aekupOiA1yA5fIOPQp5KVfdAg'
      }
    });
    this.setState({images:response.data.results})
  }
  render(){
    return(
        <div className="ui container">
          <Searchbar Submit={this.Search}/>
          <ImageList images={this.state.images}/>
        </div>
    );
  }
}
 


  export default App;