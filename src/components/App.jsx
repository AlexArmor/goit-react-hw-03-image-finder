import { Component } from 'react';
import { Searchbar } from './Searchbar';

export class App extends Component {
  state = {
    query: '',
    images: [],
    largeImageURL: '',
    page: 1,
    showBtn: false,
  };

  onFormSubmit = query => {
    this.setState({
      query,
      images: [],
      largeImageURL: '',
      page: 1,
      showBtn: false,
    });
  };

  render() {
    return (
      <>
        <Searchbar onFormSubmit={this.onFormSubmit} btnText="Search" />
        {/* <Loader />
        <ImageGallery />
        <Button />
        <Modal /> */}
      </>
    );
  }
}
