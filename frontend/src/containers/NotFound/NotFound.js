import React from 'react';
import Helmet from 'react-helmet';

export default function NotFound() {
  return (
    <div className="container">
      <Helmet title="404"/>
      <h1>Ой! 404!</h1>
      <p>Все сломалось! Такой страницы <em>не существует</em>!</p>
    </div>
  );
}
