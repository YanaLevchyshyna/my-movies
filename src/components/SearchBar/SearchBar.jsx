import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Відповідає за оновлення стану
  const handleChange = e => {
    const { value } = e.currentTarget;

    setSearchQuery(value.toLowerCase());
  };

  //   Викликається під час відправлення форми
  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.info('Please enter the name of the movie', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchQuery"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={searchQuery}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}
