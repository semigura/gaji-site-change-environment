import React from 'react';
import Layout from '../../../../components/common/Layout';

import css from '../RecruitContact.module.scss';

const RecruitContact = () => {
  const pageTitle = '採用情報';
  const breadcrumbs = [
    {
      to: '/recruit',
      title: '採用情報',
    },
    {
      to: '/recruit/contact',
      title: '求人専用応募フォーム',
    },
    {
      title: '送信完了',
    },
  ];

  return (
    <Layout isIndex pageTitle={pageTitle} breadcrumbs={breadcrumbs} wrapperClassName={css.RecruitContactWrapper}>
      <p className="TextBasic">ご応募ありがとうございました。</p>
      <p className="TextBasic">担当者からご連絡差し上げます。</p>
    </Layout>
  );
};

export default RecruitContact;
