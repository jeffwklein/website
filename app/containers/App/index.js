/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import jeff_japan from 'images/jeff_japan.jpg';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <React.Fragment>
      <div className="outerBody">
        <div className="mainBody">
          <div className="topNav">Jeff Klein</div>
          <div className="contentArea">
            <div className="leftContent">
              <div className="contentBox">
                Software Engineer. Expertise in building modern web
                applications.
              </div>
              <div className="contentBox">
                Skills include JavaScript, React/Redux, Scala, SQL, Ruby,
                Python, Java, C++.
              </div>
            </div>
            <div className="middleContent">
              <img src={jeff_japan} className="headshot" />
            </div>
            <div className="rightContent">
              <a
                className="sideLink"
                href="jeff_klein_resume.pdf"
                target="_blank"
              >
                Resume
              </a>
              <a
                className="sideLink"
                href="https://www.linkedin.com/in/jeffwklein/"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="sideLink"
                href="https://github.com/jeffwklein"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="sideLink"
                href="mailto:jeffwklein@gmail.com"
                target="_blank"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
      <GlobalStyle />
    </React.Fragment>
  );
}
