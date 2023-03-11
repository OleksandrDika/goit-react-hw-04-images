import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Searchbar } from './Searchbar/Searchbar';
import { getPictures } from '../services/getPictures';
import { LoadMore } from './LoadMore/LoadMore';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [value, setValue] = useState('');
  const [pictures, setPictures] = useState([]);
  const [totalPictures, setTotalPictures] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');

  console.log(error);

  useEffect(() => {
    if (value === '') {
      return;
    }
    setLoading(true);
    setError('');

    getPictures(value, page)
      .then(data => {
        if (data.hits.length === 0) {
          alert('There are no images for your request.');
          return;
        }
        const images = data.hits.map(({ id, webformatURL, largeImageURL }) => ({
          id,
          webformatURL,
          largeImageURL,
        }));
        setPictures(prevState => [...prevState, ...images]);
        setTotalPictures(data.totalHits);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [value, page]);

  const loadMore = () => {
    setPage(prevState => {
      return prevState + 1;
    });
  };

  const handleSubmit = value => {
    setValue(value);
    setPage(1);
    setPictures([]);
    setTotalPictures(0);

    // this.setState({ value, page: 1, pictures: [], totalPictures: 0 });
  };

  return (
    <div>
      <Searchbar onSearch={handleSubmit} />
      {pictures.length > 0 && <ImageGallery pictures={pictures} />}

      {!loading && totalPictures !== pictures.length && (
        <LoadMore handleClick={loadMore} type="button" />
      )}
      {loading && <Loader />}

      <GlobalStyle />
    </div>
  );
};

// export class App extends Component {
//   state = {
//     value: '',
//     pictures: [],
//     totalPictures: 0,
//     loading: false,
//     page: 1,
//     error: '',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { value, page } = this.state;
//     if (prevState.value !== value || prevState.page !== page) {
//       this.setState({ loading: true, error: '' });
//       getPictures(this.state.value, page)
//         .then(data => {
//           if (data.hits.length === 0) {
//             alert('There are no images for your request.');
//             return;
//           }
//           const images = data.hits.map(
//             ({ id, webformatURL, largeImageURL }) => ({
//               id,
//               webformatURL,
//               largeImageURL,
//             })
//           );
//           this.setState(prevState => ({
//             pictures: [...prevState.pictures, ...images],
//             totalPictures: data.totalHits,
//           }));
//         })
//         .catch(error => {
//           this.setState({ error: error });
//         })
//         .finally(() => {
//           this.setState({ loading: false });
//         });
//     }
//   }

//   loadMore = () => {
//     this.setState(prevState => {
//       return { page: prevState.page + 1 };
//     });
//   };

//   handleSubmit = value => {
//     this.setState({ value, page: 1, pictures: [], totalPictures: 0 });
//   };
//   render() {
//     const { loading, pictures, totalPictures } = this.state;
//     return (
//       <div>
//         <Searchbar onSearch={this.handleSubmit} />
//         {pictures.length > 0 && <ImageGallery pictures={pictures} />}

//         {!loading && totalPictures !== pictures.length && (
//           <LoadMore handleClick={this.loadMore} type="button" />
//         )}
//         {loading && <Loader />}

//         <GlobalStyle />
//       </div>
//     );
//   }
// }
