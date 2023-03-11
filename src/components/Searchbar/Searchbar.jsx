import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Button, Form, Header, Icon, Input } from './Searchbar.styled';

export const Searchbar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(input);
    setInput('');
  };
  return (
    <Header>
      <Form onSubmit={handleSubmit}>
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
          value={input}
          onChange={handleChange}
        />
      </Form>
    </Header>
  );
};
