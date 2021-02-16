import * as React from 'react';
import Typography from '../components/shared/Typography';
import {Media as data} from '../data/Content.json';
import MediaLinks from '../components/Media/MediaLinks';
import BrandManifesto from '../components/Media/BrandManifesto';
import Container from '../components/shared/Container';

const Media = () => {
  return (
    <>
      <Container data={data.PageName} />
      {/* <Container data={data.News} /> */}
      <Container data={data.Kit} />
      <MediaLinks data={data} />
      <Container data={data.inquire} />
      <Container data={data.Brand} />
      <BrandManifesto data={data.BrandManifesto} />
      {/* <Container data={data.Values} /> */}
    </>
  );
};

export default Media;
