import Typography from '../shared/Typography';
import InfiniteSlider from './InfiniteSlider';
import styles from '../../styles/components/Academie/Graduates.module.css';

const Graduates = ({data}) => {
  return (
    <div className={styles.container}>
      <Typography variant="h4">{data.h4Title}</Typography>
      <InfiniteSlider items={data.items} />
    </div>
  );
};

export default Graduates;
