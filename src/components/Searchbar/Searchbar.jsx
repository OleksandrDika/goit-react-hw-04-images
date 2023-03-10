import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Button, Form, Header, Icon, Input } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    input: '',
  };

  handleChange = e => {
    this.setState({ input: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <Icon>
              <BsSearch />
            </Icon>
          </Button>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}
