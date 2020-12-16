import React from 'react';
import ReactDOM from 'react-dom';

import { GifExpertApp } from './GifExpertApp';
import './index.css';


ReactDOM.render(
  <GifExpertApp defaultCategories={['Star Wars', 'Kingdom Hearts']} />,
  document.getElementById('root')
);