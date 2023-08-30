import * as React from 'react';
import {Media as data} from '../data/Content.json';
import MediaLinks from '../components/Media/MediaLinks';
import Container from '../components/shared/Container';
import Typography from '../components/shared/Typography';

const Media = () => {
  return (
    <>
      <Container data={data.PageName} />
      {/* <Container data={data.News} /> */}
      <MediaLinks data={data} />
      {/* <Container data={data.inquire} /> */}
      <div className="flex space-x-1">
        <Typography variant="body">For press inquiries, contact us at </Typography>
        <a href="mailto:media@academie.one">
          <Typography variant="body">
            media@academie.one
          </Typography>
        </a>
        <br />
        <br />
      </div>
      <Container data={data.partners} />
    </>
  );
};

export default Media;
