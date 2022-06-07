import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../pages/Welcome/Welcome.module.css';
import facebook from '../../../assets/images/facebook_icon.png';
import twitter from '../../../assets/images/twitter_icon.png';
import instagram from '../../../assets/images/instagram_icon.png';

const CarouselItem = ({
  name, description, imageUrl,
}) => (
  <li className={styles.carouselItem}>
    <img src={imageUrl} alt="doctor" className={styles.slideImg} />
    <div className={styles.docName}>{name}</div>
    <div className={styles.line} />
    <div className={styles.docDescription}>{description}</div>
    <div className={styles.social}>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="twitter" />
    </div>
  </li>
);

CarouselItem.propTypes = {
//   id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default CarouselItem;
