import React, { useState, useEffect } from 'react';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import Post from '../../components/Home/post';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [trigger, setTrigger] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const data = await response.json(); 
        setBlogs(data); 
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };
    fetchData(); 
  }, [trigger]); 

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = blogs;
    const filteredBlogs = allBlogs.filter((blog) =>{
    const searchKeyLower = searchKey.toLowerCase().trim();
    return (
      blog.category.toLowerCase().includes(searchKeyLower) ||
      blog.title.toLowerCase().includes(searchKeyLower) ||
      blog.price.toString().includes(searchKeyLower)
      );    
    });
    if(searchKey === "") setTrigger(true)
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setSearchKey('');
    setTrigger(true)
  };

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />
        <Post />
      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
