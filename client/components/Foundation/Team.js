import Typography from '../shared/Typography';
import styles from '../../styles/components/Foundation/Message.module.css';

const Team = ({ data }) => {
  return (
    <div className={styles.container}>
        <Typography variant="h2">{data.title}</Typography>
        <div class="grid grid-rows-1 grid-flow-col gap-4">
          {data.items.map((el,index) => (
            <div>
               <div key={index} class="row-span-2 col-span-2 ...">
                 <img src={el.img} />
               </div>
               <div class="col-span-2 ...">
                  <Typography variant="h4">{el.name}</Typography>
                </div>
            </div>

        ))}
     </div>   
    </div>
  );
};

export default Team;
