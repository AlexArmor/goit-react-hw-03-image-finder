import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { getImages } from '../service/api';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  state = {
    query: '',
    images: [],
    largeImageURL: '',
    page: 1,
    showBtn: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      getImages(this.state.query, this.state.page).then(({ hits }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
        }));
      });
    }
    console.log(this.state.images);
  }

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
        <ImageGallery images={this.state.images} />
        {/* <Loader />
        <Button />
        <Modal /> */}
      </>
    );
  }
}
