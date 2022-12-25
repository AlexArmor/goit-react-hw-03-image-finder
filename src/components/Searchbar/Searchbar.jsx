import { Component } from 'react';
import {
  SearchSection,
  SearchForm,
  SearchFormBtn,
  SearchFormLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  inputChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchValue);
    event.target.reset();
  };

  render() {
    return (
      <SearchSection>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormBtn>
          <SearchFormInput
            onChange={this.inputChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchSection>
    );
  }
}
