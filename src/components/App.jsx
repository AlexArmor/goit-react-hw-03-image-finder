import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { getImages } from '../service/api';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    largeImageURL: '',
    page: 1,
    isLoading: false,
    showBtn: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({
        isLoading: true,
      });
      getImages(this.state.query, this.state.page)
        .then(({ hits, totalHits }) => {
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            showBtn: Math.ceil(totalHits / 12) > this.state.page,
          }));
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.setState({
            isLoading: false,
          });
        });
    }
  }

  onFormSubmit = query => {
    this.setState({
      query,
      images: [],
      largeImageURL: '',
      page: 1,
      isLoading: false,
      showBtn: false,
      showModal: false,
    });
  };

  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onImageClick = largeImageURL => {
    this.setState({
      largeImageURL,
    });
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.setState({
        largeImageURL: '',
      });
    }
  };

  render() {
    return (
      <>
        <Searchbar onFormSubmit={this.onFormSubmit} btnText="Search" />
        {this.state.isLoading && <Loader />}
        <ImageGallery
          images={this.state.images}
          onImageClick={this.onImageClick}
        />
        {this.state.showBtn && <Button onLoadMoreClick={this.handleClick} />}
        {this.state.largeImageURL && (
          <Modal
            onImageClick={this.onImageClick}
            largeImageURL={this.state.largeImageURL}
            alt={this.state.images.tags}
          />
        )}
      </>
    );
  }
}
