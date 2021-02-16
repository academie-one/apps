import Typography from '../shared/Typography';

const MediaLinks = ({data}) => {
    return (
        <div className="flex flex-row my-8">
        {data.items.map((el, index) => (
          <div className={`w-1/2 space-x-8 space-y-4`} key={index}>
            <div className={`flex-1`}>
              <Typography variant="h4">{el.title}</Typography>
              <Typography variant="body">{el.body}</Typography>
              <br />
              <a href={el.click} download>
                <p style={{textDecoration: 'underline'}}>{el.msg}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    );
}

export default MediaLinks;