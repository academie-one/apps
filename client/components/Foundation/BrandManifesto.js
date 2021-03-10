import Typography from '../shared/Typography';

const BrandManifesto = ({data}) => {
    return (
        <div className={`space-y-4 mb-8`}>
            <Typography variant="h4">{data.title}</Typography>
            <div className={`space-y-4`}>
                {data.body.map((item, index) => (
                    <>
                        <Typography variant="body" key={index}>
                            {item}
                        </Typography>
                    </>
                ))}
            </div>
        </div>
    );
}

export default BrandManifesto;