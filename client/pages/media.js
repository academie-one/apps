import * as React from 'react';
import Typography from '../components/shared/Typography';
import {Media as data} from '../data/Content.json';
import MediaLinks from '../components/Media/MediaLinks';
import Container from '../components/shared/Container';

const Media = () => {
  return (
    <>
      <Container data={data.PageName} />
      <Container data={data.News} />
      <Container data={data.Kit} />
      <MediaLinks data={data} />
      <Container data={data.inquire} />
    </>
  );
};

export default Media;
