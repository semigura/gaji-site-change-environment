import React from 'react';
import Layout from '../../../components/common/Layout';
import ContactForm from '../../../components/common/ContactForm';

import css from './RecruitContact.module.scss';

const RecruitContact = () => {
  const pageTitle = '採用情報';
  const url = 'https://www.gaji.jp/recruit/contact/';
  const description =
    'チームワークをスケールさせる会社Gaji-Laboへの求人のご応募は専用フォームにてご連絡ください。';
  const breadcrumbs = [
    {
      to: '/recruit',
      title: '採用情報',
    },
    {
      title: '求人専用応募フォーム',
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
      wrapperClassName={css.RecruitContactWrapper}
    >
      <div className={css.RecruitContact}>
        <div className={css.RecruitContact__Description}>
          <p className="TextBasic">
            弊社求人へのご応募は、専用のフォームから必要事項のご連絡をお願いします。
            <br />
            応募に必要な情報が揃っていることをご確認のうえ、ご連絡いただければ幸いです。
            <br />
            なお、こちらに求人と関連のないお問い合わせをいただいても、返信はしません。
          </p>
        </div>
        <ContactForm action="/recruit/contact/success" formName="recruit-contact" isRecruit="all" />
      </div>
    </Layout>
  );
};

export default RecruitContact;
