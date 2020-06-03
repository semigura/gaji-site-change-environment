import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

import css from './ToggleText.module.scss';

class ToggleText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isSP: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.checkMedia = this.checkMedia.bind(this);
  }

  checkMedia = () => {
    if (window.matchMedia('(max-width: 939px)').matches) {
      this.setState({ isSP: true });
    } else {
      this.setState({ isSP: false });
    }
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.checkMedia);
    this.checkMedia();
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.checkMedia);
  };

  handleToggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { isOpen, isSP } = this.state;
    const { className, children } = this.props;
    const classes = classNames(css.ToggleText, className);
    const buttonClasses = classNames(css.ToggleText__Button, {
      [css.isOpen]: isOpen,
    });
    return (
      <div className={classes}>
        {isSP ? (
          <>
            <SlideDown>{isOpen && children}</SlideDown>
            <button
              type="button"
              className={buttonClasses}
              onClick={this.handleToggle}
              aria-label="開く"
            />
          </>
        ) : (
          children
        )}
      </div>
    );
  }
}

ToggleText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

ToggleText.defaultProps = {
  className: undefined,
};

export default ToggleText;
