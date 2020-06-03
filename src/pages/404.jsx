import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/common/Layout';

import css from './Error.module.scss';

const NotFoundPage = () => {
  const pageTitle = 'お探しの情報が見つかりません';

  return (
    <Layout
      pageTitle={pageTitle}
      ogpTitle={pageTitle}
      isIndex
      wrapperClassName={css.ErrorWrapper}
    >
      <div className={css.Error}>
        <h2 className="SecondTitle">
          申し訳ありませんが、該当のページは存在しません。
        </h2>
        <h3 className="ThirdTitle">URLを直接入力されましたか？</h3>
        <p className="TextBasic">
          入力したページのアドレスが間違っている可能性があります。
          <br />
          アドレスバーに記載されているURLをもう一度確認してみてください。
        </p>
        <h3 className="ThirdTitle">検索サイトからいらっしゃいましたか？</h3>
        <p className="TextBasic">
          リンク切れが生じている可能性があります。
          <br />
          <Link to="/sitemap/">サイトマップ</Link>
          から該当のページをお探しになってみてください。
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
