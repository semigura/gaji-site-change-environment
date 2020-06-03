import React from 'react';
import Layout from '../../components/common/Layout';
import Button from '../../components/common/Button';
import TextLink from '../../components/common/TextLink';
import Title from '../../components/common/Title';
import Icon from '../../components/common/icons/Icon';
import PdfFileSize from '../../components/common/PdfFileSize';

import css from './About.module.scss';

const About = () => {
  const pageTitle = '会社案内';
  const url = 'https://www.gaji.jp/about/';
  const description =
    'チームワークをスケールさせる会社Gaji-Laboの会社案内です。';
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
      wrapperClassName={css.AboutWrapper}
    >
      <div className={css.About}>
        <div className={css.About__KeyVisual}>
          <p className={css.About__KeyVisualText}>
            チームワークを
            <br className={css.isSP} />
            スケールさせる
          </p>
          <p className={css.About__Catch}>私たちは必要な「変数」です</p>
        </div>
        <div className={css.About__Contents}>
          <section className={css.About__Section}>
            <p className={css.About__Text}>
              Gaji-Laboは変化や刺激を必要としているチームの「変数」となり、チームの殻をやわらかくする会社です。チームが持っているそれぞれの物差しに合わせ、生まれる価値や熱量を見つけたり膨らませたり整えたりすること。そのために影で伴走する黒子の役割が、私たちGaji-Laboの仕事です。
            </p>
          </section>
          <section className={css.About__Section}>
            <Title className={css.About__Title}>
              ミッションを支える
              <br />
              Gaji-Laboのビジョン
            </Title>
            <p className={css.About__Catch}>
              システムを考える会社、Gaji-Labo。
            </p>
            <p className={css.About__Text}>
              大きな変革が続く時代の中で、様々なことが移り変わっても揺るがない私たちの大きなビジョン。それは物事をシステムとして捉え、すべてを生態系として考えるところにあります。
            </p>
          </section>
          <section className={css.About__Section}>
            <Title className={css.About__Title}>会社概要</Title>
            <dl className="DetailList">
              <dt>社名</dt>
              <dd>株式会社Gaji-Labo（英語表記：Gaji-Labo Inc.）</dd>
              <dt>事業内容</dt>
              <dd>
                デザインプロセス支援、開発フロー支援、他
                <TextLink
                  label="サービス案内"
                  to="/services/"
                  withIcon
                  isRight
                />
              </dd>
              <dt>設立</dt>
              <dd>2010年（平成22年）10月22日</dd>
              <dt>代表取締役</dt>
              <dd>原田 直貴</dd>
              <dt>所在地</dt>
              <dd>
                〒151-0051 東京都渋谷区千駄ヶ谷3-16-3 メイゾン原宿501
                <TextLink
                  label="アクセス"
                  to="/about/access/"
                  withIcon
                  isRight
                />
              </dd>
            </dl>
          </section>
          <section className={css.About__Section}>
            <Title className={css.About__Title}>会社案内PDF</Title>
            <p className={css.About__Text}>
              ダウンロード用の会社案内PDFをご用意しております。お問い合わせ前の確認資料として、社内検討用の材料として、ぜひお役立てください。
            </p>
            <div className={css.About__ButtonContainer}>
              <a className="Button" href="/gaji-labo_company-profile.pdf">
                会社案内PDF(
                <PdfFileSize />
                )
                <Icon
                  className="Button__Icon"
                  name="arrow-right"
                  aria-hidden="true"
                />
              </a>
            </div>
          </section>
          <div className="ContactLink">
            <div className="ContactLink__Container">
              <Title className={css.Index__Title} withColor>
                お問い合わせ
              </Title>
              <p className="ContactLink__Texts">
                あなたのチームの物差しはなんですか？
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
      </div>
    </Layout>
  );
};

export default About;
