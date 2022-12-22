import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { getImages } from '../service/api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    largeImageURL: '',
    page: 1,
    showBtn: false,
  };

  componentDidUpdate(_, prevState);

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
