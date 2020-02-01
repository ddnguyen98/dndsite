import React, { Component } from 'react';
import { Container } from 'reactstrap';

import styles from './styles.module.css';

class About extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Container className={styles.login}>
          <h2>About Us</h2>
          <p>
            Three headed dragon is specifically made to give you a simple and
            easy way of storing your characters online. With these tools using
            paper and pen will be a thing of the past as you can now access this
            content anywhere you have an internet connection. We at Three Headed
            Dragon have a passion for dnd and we created this project in the
            hopes that you will like it! If you wish to more know about us or
            have any questions, check out our contact page to talk personally to
            the creators of this site. We wish you a very great day and hope you
            enjoy this amazing character creator.
          </p>
        </Container>
      </div>
    );
  }
}

export default About;
