import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/common/Layout';
import ContactForm from '../components/common/ContactForm';

import css from '../pages/recruit/Recruit.module.scss';

const Recruit = (props) => {
  const { data } = props;
  const { markdownRemark: post, site } = data;
  const pageTitle = `${post.frontmatter.title}`;
  const url = `${site.siteMetadata.siteUrl}${post.fields.slug}`;
  const description = post.frontmatter.description || post.excerpt;
  const jobslug = post.frontmatter.slug;
  const breadcrumbs = [
    {
      to: '/recruit',
      title: '採用情報',
    },
    {
      title: `${pageTitle}`,
    },
  ];

  const JobPosting = {
    FE: `
    {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      "title": "フロントエンドエンジニア",
      "description": "<p>React+Redux 開発の基盤部分の設計・実装を担当するフロントエンドエンジニアとして、Redux などを利用したデータフロー設計を主導して業務を進めていただきます。ご自身のスキル・経験や案件の内容によっては、データフローの設計に伴うアプリケーション全体の設計業務を業務に含む場合があります。</p><p>お客様の Web サービス開発チームにメンバーとして参加し、コード納品ではない形でチーム開発を行います。GitHub, Slack などオンラインツールを利用し、リモート（自社含む）での開発をメインに行うため、客先常駐はありません。単なる受託企業としてではなくチームメンバーとして、垣根を越えてサービスの重要な部分の支援を行います。</p><p>CSSなども書ければ可ですが、コンポーネントの開発が得意な他のメンバーと協業する前提なので、苦手でも構いません。あくまで重視するのはReduxに関係するスキル・経験です。</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Gaji-Labo",
        "value": "201904001"
      },
      "datePosted": "2019-02-25",
      "validThrough": "2019-12-31T00:00",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "株式会社Gaji-Labo",
        "sameAs": "https://www.gaji.jp",
        "logo": "https://www.gaji.jp/icons/job-icon.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "postalCode": "1510051",
          "addressRegion": "東京都",
          "addressLocality": "渋谷区千駄ヶ谷",
          "streetAddress": "3-16-3 メイゾン原宿501",
          "addressCountry": "JP"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "JPY",
        "value": {
          "@type": "QuantitativeValue",
          "value": 4500000,
          "minValue": 4500000,
          "maxValue": 6000000,
          "unitText": "YEAR"
        }
      }
    }
    `,
    UI: `
    {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      "title": "UIデザイナー",
      "description": "<p>現在弊社では、事業作り支援やビジネス支援といった業務を広げながら、開発業務との橋渡しを進めるフェーズにあります。そのため、抽象的な物事を具体的な形に落とし込む段階、つまり機能やメッセージをビジュアライズする部分を強化する必要があり、UIデザインの専門性を持ったメンバーを求めています。</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Gaji-Labo",
        "value": "201904003"
      },
      "datePosted": "2019-02-25",
      "validThrough": "2019-12-31T00:00",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "株式会社Gaji-Labo",
        "sameAs": "https://www.gaji.jp",
        "logo": "https://www.gaji.jp/icons/job-icon.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "postalCode": "1510051",
          "addressRegion": "東京都",
          "addressLocality": "渋谷区千駄ヶ谷",
          "streetAddress": "3-16-3 メイゾン原宿501",
          "addressCountry": "JP"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "JPY",
        "value": {
          "@type": "QuantitativeValue",
          "value": 4500000,
          "minValue": 4500000,
          "maxValue": 6000000,
          "unitText": "YEAR"
        }
      }
    }
    `,
    IA: `
    {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      "title": "IA / 情報設計者",
      "description": "<p>現在弊社では、事業作り支援やビジネス支援といった業務を広げながら、開発業務との橋渡しを進めるフェーズにあります。そのため、抽象的な物事を扱う領域と具体的な物事を扱う開発領域をうまくつなぐために、IAの視点と専門性を持ったメンバーを必要としています。</p><p>今回の募集では、実案件を黙々とこなすだけの役割ではなく、Gaji-Laboの組織と事業の基礎づくりにIA視点で関わり、新しい組織の形を模索するフェーズでキーマンとなってくれるメンバーを求めています。IAの視点を活かすという形になるため、関わってもらう領域は広めになります。</p><p>上記の理由から、現職および入社後の職種・肩書に関しては「IA」にこだわっていません。職種・肩書によらず、IA視点で業務に携わってもらうことが重要だと思っています。入社後の肩書については、相談しながら決めていければと思います。</p>",
      "identifier": {
        "@type": "PropertyValue",
        "name": "Gaji-Labo",
        "value": "201904002"
      },
      "datePosted": "2019-02-25",
      "validThrough": "2019-12-31T00:00",
      "employmentType": "FULL_TIME",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "株式会社Gaji-Labo",
        "sameAs": "https://www.gaji.jp",
        "logo": "https://www.gaji.jp/icons/job-icon.png"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "postalCode": "1510051",
          "addressRegion": "東京都",
          "addressLocality": "渋谷区千駄ヶ谷",
          "streetAddress": "3-16-3 メイゾン原宿501",
          "addressCountry": "JP"
        }
      },
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "JPY",
        "value": {
          "@type": "QuantitativeValue",
          "value": 4500000,
          "minValue": 4500000,
          "maxValue": 6000000,
          "unitText": "YEAR"
        }
      }
    }
    `,
  };

  return (
    <Layout
      isIndex
      pageTitle={pageTitle}
      pageUrl={url}
      breadcrumbs={breadcrumbs}
      ogpDescription={description}
      ogpTitle={pageTitle}
      wrapperClassName={css.RecruitDetailWrapper}
    >
      <Helmet>
        <script type="application/ld+json">{JobPosting[jobslug]}</script>
      </Helmet>
      <div className={css.Recruit}>
        <div
          className={css.MD_RecruitDetailWrapper}
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <ContactForm
          className={css.Recruit__ContactForm}
          action="/recruit/contact/success"
          formName="recruit-contact"
          isRecruit={jobslug}
        />
      </div>
    </Layout>
  );
};

Recruit.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    site: PropTypes.object,
  }).isRequired,
};

export default Recruit;

export const pageQuery = graphql`
  query RecruitByID($id: String!) {
    site {
      siteMetadata {
        siteUrl
        name
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 300, truncate: true)
      fields {
        slug
      }
      frontmatter {
        title
        description
        slug
      }
    }
  }
`;
