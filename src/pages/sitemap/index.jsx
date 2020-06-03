import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/common/Layout';

import css from './Sitemap.module.scss';

const SitemapPage = () => {
  const pageTitle = 'サイトマップ';
  const url = 'https://www.gaji.jp/sitemap/';
  const description =
    'チームワークをスケールさせる会社Gaji-Laboのサイトマップです。';
  const breadcrumbs = [
    {
      title: pageTitle,
    },
  ];

  return (
    <Layout
      isIndex
      pageTitle={pageTitle}
      pageUrl={url}
      breadcrumbs={breadcrumbs}
      ogpDescription={description}
      ogpTitle={pageTitle}
      wrapperClassName={css.SitemapWrapper}
    >
      <div className={css.Sitemap}>
        <ul className="List">
          <li className="List__item">
            <Link className={css.Sitemap__Link} to="/news/">お知らせ</Link>
          </li>
          <li className="List__item">
            <Link className={css.Sitemap__Link} to="/services/">サービス案内</Link>
          </li>
          <li className="List__item">
            <Link className={css.Sitemap__Link} to="/case-studies/">事例紹介</Link>
          </li>
          <li className="List__item">
            <Link className={css.Sitemap__Link} to="/about/">会社案内</Link>
          </li>
          <li className="List__item">
            <Link className={css.Sitemap__Link} to="/contact/">お問い合わせ</Link>
          </li>
          <li className="List__item">
            <Link className={css.Sitemap__Link} to="/about/access/">アクセス</Link>
          </li>
          <li className="List__item">
            <Link className={css.Sitemap__Link} to="/privacy/">プライバシーポリシー</Link>
          </li>
          <li className="List__item">
            <Link className={css.Sitemap__Link} to="/recruit/">採用情報</Link>
          </li>
          <li className="List__item">
            <a
              className={css.Sitemap__Link}
              href="https://blog.gaji.jp/"
              // NOTE: Use only `noopener`
              // eslint-disable-next-line
              target="_blank"
              rel="noopener"
            >
              ブログ
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default SitemapPage;
