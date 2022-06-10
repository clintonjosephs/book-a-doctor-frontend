import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import styles from '../../../pages/Welcome/Welcome.module.css';
import facebook from '../../../assets/images/facebook_icon.png';
import twitter from '../../../assets/images/twitter_icon.png';
import instagram from '../../../assets/images/instagram_icon.png';
import noImage from '../../../assets/images/no-image.jpeg';

const CarouselItem = ({
  id, name, description, imageUrl,
}) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(`/doctor_details/${id}`);
  };
  return (
    <li className={styles.carouselItem} onClick={redirect} aria-hidden="true">
      <img
        src={imageUrl}
        alt="doctor"
        className={`${styles.slideImg} ${styles.animate}`}
        aria-label="doctor image"
      />
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
};

CarouselItem.defaultProps = {
  imageUrl: noImage,
};

CarouselItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default CarouselItem;
