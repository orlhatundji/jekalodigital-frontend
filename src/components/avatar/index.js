import React from 'react'
import { PropTypes } from 'prop-types';

import styles from './avatar.module.css';


const Avatar = ({firstName, lastName}) => {

  return (
      <div className={styles.container}>
          <span>{firstName && firstName[0]}{lastName && lastName[0]}</span>
      </div>
  );
}

Avatar.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }

export default Avatar;
