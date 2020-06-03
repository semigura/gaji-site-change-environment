import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/common/Layout';
import ContactForm from '../../components/common/ContactForm';

import css from './Contact.module.scss';

const Contact = () => {
  const pageTitle = 'お問い合わせ';
  const url = 'https://www.gaji.jp/contact/';
  const description =
    'チームワークをスケールさせる会社Gaji-Laboへの業務に関するご依頼やお問い合わせはフォームにてご連絡ください。';
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
      wrapperClassName={css.ContactWrapper}
    >
      <div className={css.Contact}>
        <div className={css.Contact__Description}>
          <p className="TextBasic">
            業務に関するご依頼や弊社についてのお問い合わせはフォームにてご連絡ください。
            <br />
            弊社求人へのご応募は、
            <Link to="/recruit/contact">求人専用のフォーム</Link>
            から必要事項のご連絡をお願いします。
            <br />
            なお、お問い合わせ内容によっては、回答にお時間がかかる場合があります。あらかじめご了承ください。
          </p>
        </div>
        <ContactForm action="/contact/success" formName="contact" />
      </div>
    </Layout>
  );
};

export default Contact;
