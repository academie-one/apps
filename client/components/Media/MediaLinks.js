import Typography from '../shared/Typography';

const MediaLinks = ({data}) => {
    return (
        <div className="flex flex-row my-12">
        {data.items.map((el, index) => (
          <div className={`w-1/2 space-x-8 space-y-4`} key={index}>
            <div className={`flex-1`}>
              <Typography variant="h4">{el.title}</Typography>
              <a href={el.click} download>
                Click to download
              </a>
            </div>
          </div>
        ))}
      </div>
    );
}

export default MediaLinks;