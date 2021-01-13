import * as React from 'react';
import Typography from '../components/shared/Typography';
import {Media as data} from '../data/Content.json';

const Media = () => {
    return (
        <div>
          <Typography variant="h1">Media</Typography>
          <Typography variant="h2" className={`my-12`}>In the News</Typography>
          <Typography variant="h2">Media Kit</Typography>
          <div className="flex flex-row my-12">
            {data.items.map((el, index) => (
              <div
                className={`w-1/2 space-x-8 space-y-4`}
                key={index}
              >
                <div className={`flex-1`}>
                    <Typography variant="h4">{el.title}</Typography>
                    <a href={el.click} download>Click to download</a>
                    {console.log(data)}
                </div>
              </div>
            ))}
          </div>
          <Typography variant="h4">{data.body}</Typography>
        </div>
    );
};

export default Media;