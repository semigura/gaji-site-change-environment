import React from 'react';
import Layout from '../../../components/common/Layout';

import css from '../Contact.module.scss';

const Contact = () => {
  const pageTitle = 'お問い合わせ';
  const breadcrumbs = [
    {
      to: '/contact',
      title: 'お問い合わせ',
    },
    {
      title: '送信完了',
    },
  ];

  return (
    <Layout isIndex pageTitle={pageTitle} breadcrumbs={breadcrumbs} wrapperClassName={css.ContactWrapper}>
      <p className="TextBasic">お問い合わせありがとうございました。</p>
      <p className="TextBasic">担当者からご連絡差し上げます。</p>
    </Layout>
  );
};

export default Contact;
