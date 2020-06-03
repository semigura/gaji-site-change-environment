import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import Icon from './icons/Icon';

import css from './Header.module.scss';

const GLOBAL_NAVIGATION = [
  {
    label: 'お知らせ',
    to: '/news/',
  },
  {
    label: 'サービス案内',
    to: '/services/',
  },
  {
    label: '事例紹介',
    to: '/case-studies/',
  },
  {
    label: '会社案内',
    to: '/about/',
  },
  {
    label: 'ブログ',
    to: 'https://blog.gaji.jp/',
  },
  {
    label: 'お問い合わせ',
    to: '/contact/',
  },
];

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { className } = this.props;
    const { isOpen } = this.state;
    const classes = classNames(css.Header, className, {
      [css.isOpen]: isOpen,
    });
    const menuClasses = classNames(css.Header__Menu, {
      [css.isOpen]: isOpen,
    });
    const isNode =
      typeof process !== 'undefined' && process.title !== 'browser';
    const pathname = isNode ? undefined : window.location.pathname;
    const linkClasses = to => {
      const isActive = pathname
        ? pathname.match(new RegExp(`^${to}`))
        : undefined;
      return classNames(css.Header__Link, { [css.isActive]: isActive });
    };
    const LogoTag = pathname === '/' ? 'h1' : 'span';
    const icon = isOpen
      ? { label: 'Close', name: 'close' }
      : { label: 'Open menu', name: 'menu' };

    return (
      <div className={classes}>
        <header className={css.Header__Inner}>
          <Link className={css.Header__Logo} to="/">
            <LogoTag className={css.Header__LogoInner}>
              <Icon
                className={css.Header__Icon}
                name="logo"
                aria-label="Gaji-Labo（ガジラボ）"
              />
            </LogoTag>
          </Link>
          <nav className={css.Header__Nav}>
            <button
              aria-label={icon.label}
              className={css.Header__Button}
              onClick={this.handleToggle}
              type="button"
            >
              <Icon name={icon.name} />
            </button>
            <ul className={menuClasses}>
              {GLOBAL_NAVIGATION.map(nav => (
                <li className={css.Header__Item} key={nav.to}>
                  {nav.to === 'https://blog.gaji.jp/' ? (
                    <a
                      className={linkClasses(nav.to)}
                      href={nav.to}
                    >
                      {nav.label}
                    </a>
                  ) : (
                    <Link
                      className={linkClasses(nav.to)}
                      activeClassName={css.isActive}
                      to={nav.to}
                    >
                      {nav.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: undefined,
};

export default Header;
