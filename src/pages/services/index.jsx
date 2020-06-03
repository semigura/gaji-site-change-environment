import { graphql, Link } from 'gatsby';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../../components/common/Layout';
import Button from '../../components/common/Button';
import Title from '../../components/common/Title';
import PdfFileSize from '../../components/common/PdfFileSize';
import ServicesImage from '../../static/images/service.png';
import ServicesImageExplore from '../../static/images/service-explore.png';
import ServicesImageDefine from '../../static/images/service-define.png';
import ServicesImageBoost from '../../static/images/service-boost.png';
import ServicesImageApply from '../../static/images/service-apply.png';

import css from './Services.module.scss';

const ServicesPage = ({ data }) => {
  const modelCasesData = data.modelCases
    ? data.modelCases.edges.map(edge => ({
        ...edge.node.frontmatter,
        ...edge.node.fields,
      }))
    : false;
  const { modelCasesLinks } = modelCasesData[0];

  const pageTitle = 'サービス案内';
  const url = 'https://www.gaji.jp/services/';
  const description =
    'Gaji-Laboのサービスはすべて、チームワークをスケールさせるための切り口です。何からはじめたらいいかわからない… というニーズにも、徹底したヒアリングで向き合い、最適な切り口をご提案いたします。';
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
      wrapperClassName={css.ServicesWrapper}
    >
      <div className={css.Services}>
        <p className="TextBasic">
          Gaji-Laboのサービスはすべて、チームワークをスケールさせるための切り口です。
          何からはじめたらいいかわからない…
          というニーズにも、徹底したヒアリングで向き合い、最適な切り口をご提案いたします。
        </p>
        <img
          className={css.Services__Image}
          src={ServicesImage}
          alt="デザインプロセス支援と開発フロー支援"
        />
        <div className="ServicesContents">
          <dl className="ServicesContents__Detail">
            <dt>explore</dt>
            <dd>
              現状を知るために探索すること、隠れている大事なことを目に見える形にすること。ユーザーの視点を理解することはもちろん、チーム内の背景や課題をしっかりと把握することも重要です。外部からの視点としてGaji-Laboを活用していただくことで、より深い探索を実現します。
            </dd>
          </dl>
          <div className="ServicesContents__ImageContainer">
            <img
              className="ServicesContents__Image"
              src={ServicesImageExplore}
              alt=""
            />
          </div>
        </div>
        <div className="ServicesContents">
          <dl className="ServicesContents__Detail">
            <dt>define</dt>
            <dd>
              物事を前に進めるために今何をするべきか、自分たちにとって必要なことは何か。たくさんある課題や可能性の中から、いつ何をどのように進めるかを定義するためのお手伝いをします。要求定義・要件定義段階だけでなく、開発すべてのプロセスでアドバイスします。
            </dd>
          </dl>
          <div className="ServicesContents__ImageContainer">
            <img
              className="ServicesContents__Image"
              src={ServicesImageDefine}
              alt=""
            />
          </div>
        </div>
        <div className="ServicesContents">
          <dl className="ServicesContents__Detail">
            <dt>boost</dt>
            <dd>
              チームやプロダクトが大きくなるタイミングなどに、その成長の起爆剤・促進剤になれるよう、チームの一員としてジョインします。スピードを重視する状況ではスピードを、品質を重視する状況では品質を。状況に応じて、プロジェクトにフィットしたサポートを提供します。
            </dd>
          </dl>
          <div className="ServicesContents__ImageContainer">
            <img
              className="ServicesContents__Image"
              src={ServicesImageBoost}
              alt=""
            />
          </div>
        </div>
        <div className="ServicesContents">
          <dl className="ServicesContents__Detail">
            <dt>apply</dt>
            <dd>
              新しいことを取り入れたあとや変革のあとは、それをどう維持していくかが肝になります。自分たちのやりかたに合わせて応用したり改善したりするとき、伴走するコーチがいると遠くまで走れるようになります。そんなとき、Gaji-Laboがチームと一緒に走ります。
            </dd>
          </dl>
          <div className="ServicesContents__ImageContainer">
            <img
              className="ServicesContents__Image"
              src={ServicesImageApply}
              alt=""
            />
          </div>
        </div>
        <div className={css.Services__Detail}>
          <div className={css.Services__DetailList}>
            <h2 className={css.Services__DetailListTitle}>
              デザインプロセス支援
            </h2>
            <ul className="List">
              <li className="List__item">ユーザー参加型ワークショップ運営</li>
              <li className="List__item">インタラクティブヒアリング</li>
              <li className="List__item">会議のデザイン支援</li>
              <li className="List__item">ビジョン可視化ワークショップ</li>
              <li className="List__item">デザインスプリント支援</li>
            </ul>
            {/* <TextLink to="/" withIcon isRight label="費用の目安" />
            <TextLink to="/" withIcon isRight label="お試しパッケージ" /> */}
          </div>
          <div className={css.Services__DetailList}>
            <h2 className={css.Services__DetailListTitle}>開発フロー支援</h2>
            <ul className="List">
              <li className="List__item">HTML＋CSSコンポーネント実装</li>
              <li className="List__item">Rails view実装</li>
              <li className="List__item">フロントエンドメンテナンス</li>
              <li className="List__item">JavaScript実装</li>
              <li className="List__item">スタイルガイド作成支援</li>
            </ul>
            {/* <TextLink to="/" withIcon isRight label="費用の目安" />
            <TextLink to="/" withIcon isRight label="お試しパッケージ" /> */}
          </div>
        </div>
        {!isEmpty(modelCasesLinks) && (
          <div className={css.Services__ModelCases}>
            <Title>こんなお悩みありませんか？</Title>
            <p className="TextBasic">
              お悩みと解決策をセットにしたモデルケースをご紹介します。
            </p>
            <div className="LinkList">
              <ul>
                {modelCasesLinks.map(modelCasesLink => (
                  <li key={modelCasesLink.modelCasesLinkUrl}>
                    <Link to={modelCasesLink.modelCasesLinkUrl}>
                      {modelCasesLink.modelCasesLinkTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              className={css.Services__ModelCasesLink}
              label="さらに事例を見る"
              to="/case-studies/"
            />
          </div>
        )}
        <div className="ContactLink">
          <div className="ContactLink__Container">
            <Title withColor>お問い合わせ</Title>
            <p className="ContactLink__Texts">
              私たちはデザインプロセス支援と開発フロー支援を行う会社です。
              <br />
              チームワークをスケールさせるために必要なこと、Gaji-Laboはあなたと一緒に考えます。
            </p>
            <Button
              className="ContactLink__Button"
              label="お問い合わせフォーム"
              to="/contact/"
            />
            <a
              href="/gaji-labo_company-profile.pdf"
              className="ContactLink__PdfLink"
            >
              <img
                className="ContactLink__PdfIcon"
                src="/uploads/file.svg"
                alt="PDF icon"
              />
              会社案内PDF(
              <PdfFileSize />
              )もご用意しております。
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Services {
    modelCases: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "services-modelcases" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            modelCasesLinks {
              modelCasesLinkTitle
              modelCasesLinkUrl
            }
          }
        }
      }
    }
  }
`;

ServicesPage.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.any.isRequired,
};

export default ServicesPage;
