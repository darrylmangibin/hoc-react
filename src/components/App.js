import React from 'react';
import { Route } from 'react-router-dom';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  };
};

export default App;