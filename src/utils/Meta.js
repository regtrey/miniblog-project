import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'miniblog | Home',
  description: 'A quick and simple blogging web app.',
  keywords: 'blogging, easy blog',
};

export default Meta;
