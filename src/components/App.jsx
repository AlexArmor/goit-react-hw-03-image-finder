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

  onFormSubmit = () => {};

  render() {
    return (
      <>
        <Searchbar onFormSubmit={this.onFormSubmit} btnSearch={btnSearch} />
        {/* <Loader />
        <ImageGallery />
        <Button />
        <Modal /> */}
      </>
    );
  }
}
