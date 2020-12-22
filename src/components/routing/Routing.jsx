import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BlogPosts } from '../blogPosts/BlogPosts';
import { About } from '../about/About';
import { Faqs } from '../faqs/Faqs';
import { Home } from '../home/Home';

export function Routing() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog-posts">Blog Posts</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/faqs">FAQs</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/blog-posts">
            <BlogPosts />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/faqs">
            <Faqs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
