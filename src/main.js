import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
window.jQuery = window.$ = $;

// React Components
import PostList from "./components/post-list";

// CSS
// require('../css/main.css');

ReactDOM.render(<PostList />, document.querySelector('#main'));