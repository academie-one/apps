import React from 'react';
import Typography from './Typography';
import styles from '../../styles/components/shared/Container.module.css';

const Container = ({data}) => {

  return (
      <div className={styles.container}>
        <Typography variant={"h4"}>{data.title}</Typography>
        <div className="flex flex-col mt-12">
          {data.items.map((el, index) => (
            <div
              className={styles.listView}
              key={index}
            >
              <div className={styles.itemsView}> 
                <Typography varaint="body">{el.body}</Typography>
                  
              </div>
            </div>
          ))}
        </div>
      </div>
    )
};

export default Container;
