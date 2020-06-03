import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import ogpImage from '../../static/images/ogp.png';

import Header from './Header';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';

import css from './Layout.module.scss';

const Layout = ({ children, isHome, isIndex, pageTitle, pageUrl, breadcrumbs, ogpTitle, ogpDescription, ogpThumbnail, ogpType, wrapperClassName }) => (
  <StaticQuery
    query={graphql`
      query SiteMetaQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
            name
            facebook
            twitter
            instagram
            svgSprite
          }
        }
      }
    `}
    render={data => {
      const {
        description,
        name,
        siteUrl,
        svgSprite,
        title,
        ...sns
      } = data.site.siteMetadata;
      const Tag = isIndex ? 'h1' : 'div';
      return (
        <>
          <Helmet
            meta={[
              { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' },
              { name: 'description', content: ogpDescription || description },
              { name: 'twitter:site', content: '@gaji_labo' },
              { name: 'twitter:text:title', content: ogpTitle ? `${ogpTitle} ++ ${name}` : title },
              { name: 'twitter:image', content: ogpThumbnail ? `${siteUrl}${ogpThumbnail}` : `${siteUrl}${ogpImage}` },
              { name: 'twitter:description', content: ogpDescription || description },
              { name: 'twitter:card', content: 'summary' },
              { property: 'fb:app_id', content: '512353512111288' },
              { property: 'og:type', content: ogpType || 'website' },
              { property: 'og:site_name', content: name },
              { property: 'og:title', content: ogpTitle ? `${ogpTitle} ++ ${name}` : title },
              { property: 'og:description', content: ogpDescription || description },
              { property: 'og:url', content: pageUrl || siteUrl },
              { property: 'og:image', content: ogpThumbnail ? `${siteUrl}${ogpThumbnail}` : `${siteUrl}${ogpImage}` },
            ]}
            title={ogpTitle ? `${ogpTitle} ++ ${name}` : title}
          />
          {pageUrl && (
            <Helmet
              link={[
                { rel: "canonical", href: pageUrl },
              ]}
            />
          )}
          <div className={css.Gaji}>
            <Header className={css.Header} />
            <main className={css.Main}>
              {pageTitle && (
                <Tag className={css.Main__Title}>{pageTitle}</Tag>
              )}
              <div className={classNames(css.Main__Body, wrapperClassName, isHome ? css.isHome : '')}>
                {children}
              </div>
            </main>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <Footer
              // eslint-disable-next-line
              {...sns}
              className={css.Footer}
              name={name}
            />
            <div
              style={{ display: 'none' }}
              // eslint-disable-next-line
              dangerouslySetInnerHTML={{ __html: svgSprite }}
            />
          </div>
        </>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
  isIndex: PropTypes.bool,
  pageTitle: PropTypes.string,
  pageUrl: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      title: PropTypes.string.isRequired,
    }),
  ),
  ogpTitle: PropTypes.string,
  ogpDescription: PropTypes.string,
  ogpThumbnail: PropTypes.string,
  ogpType: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

Layout.defaultProps = {
  isHome: undefined,
  isIndex: undefined,
  pageTitle: undefined,
  pageUrl: undefined,
  breadcrumbs: undefined,
  ogpTitle: undefined,
  ogpDescription: undefined,
  ogpThumbnail: undefined,
  ogpType: undefined,
  wrapperClassName: undefined,
};

export default Layout;
