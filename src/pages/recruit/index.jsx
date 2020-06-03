import React from 'react';
import { Link } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Layout from '../../components/common/Layout';
import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import TextLink from '../../components/common/TextLink';
import PdfFileSize from '../../components/common/PdfFileSize';

import css from './Recruit.module.scss';

import RecruitIconFrontEndEngineer from '../../static/images/recruit-icon-front-end-engineer.svg';
import RecruitIconUIDesigner from '../../static/images/recruit-icon-ui-designer.svg';
import RecruitIconInformationArchitect from '../../static/images/recruit-icon-information-architect.svg';

const RecruitPage = () => {
  const pageTitle = '採用情報';
  const url = 'https://www.gaji.jp/recruit/';
  const description =
    'チームワークをスケールさせる会社Gaji-Laboの採用情報です。';
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
      wrapperClassName={css.RecruitWrapper}
    >
      <div className={css.Recruit}>
        <p className="TextBasic">
          現在、弊社では人材の募集を進めています。詳細については各募集ページをご覧ください。弊社求人へのご応募は、
          <Link to="/recruit/contact/" className={css.Recruit__Link}>
            専用の応募フォーム
          </Link>
          から必要事項のご連絡をお願いします。
        </p>
        <p className="TextBasic">
          また、パートナー募集も随時行っています。フリーランス、法人問わず、同じチームの一員として一緒にプロジェクトに取り組める方とお仕事できればと思います。パートナー募集については、通常の
          <Link to="/contact/" className={css.Recruit__Link}>
            お問い合わせフォーム
          </Link>
          よりお問い合わせください。
        </p>
        <ul className="RecruitAnchorList">
          <li className="RecruitAnchorList__Item">
            <AnchorLink
              href="#front-end-engineer"
              className="RecruitAnchorList__Anchor"
            >
              フロントエンドエンジニア
            </AnchorLink>
          </li>
          <li className="RecruitAnchorList__Item">
            <AnchorLink
              href="#ui-designer"
              className="RecruitAnchorList__Anchor"
            >
              UIデザイナー
            </AnchorLink>
          </li>
          <li className="RecruitAnchorList__Item">
            <AnchorLink
              href="#information-architect"
              className="RecruitAnchorList__Anchor"
            >
              IA / 情報設計者
            </AnchorLink>
          </li>
        </ul>
        <div className="RecruitBoxWithBackground">
          <h2 className="RecruitBoxWithBackground__Title">
            Gaji-Laboが歓迎する資質・マインド
          </h2>
          <ul className="List">
            <li className="List__item">
              チーム開発や相互レビューの文化に抵抗がない方
            </li>
            <li className="List__item">
              オンラインでのコミュニケーション・コラボレーション作業に抵抗がない方
            </li>
            <li className="List__item">
              リモートワークでも自律的に業務遂行ができる方
            </li>
            <li className="List__item">
              どんな立場であってもプロジェクトを積極的に推進していく意思がある方
            </li>
            <li className="List__item">
              自分の専門分野の情報をキャッチアップorアウトプットすることが好きな方
            </li>
            <li className="List__item">
              案件を通じて得たノウハウを体系立ててとりまとめるのが得意な方
            </li>
            <li className="List__item">
              社内外のプロジェクトメンバー全員がパフォーマンスを発揮できるよう考えてふるまえる方
            </li>
            <li className="List__item">
              自己の社会的な責任を理解して対外的な情報発信ができる方
            </li>
          </ul>
        </div>
        <h2 className="SecondTitle">募集内容</h2>
        <div className="RecruitCardContainer">
          <div className="RecruitCard" id="front-end-engineer">
            <div className="RecruitCard__IconContainer">
              <img
                src={RecruitIconFrontEndEngineer}
                alt=""
                className="RecruitCard__Icon"
              />
            </div>
            <div className="RecruitCard__Body">
              <Link
                to="/recruit/front-end-engineer/"
                className="RecruitCard__Link"
              >
                フロントエンドエンジニア
              </Link>
              <p className="RecruitCard__Description">
                React+Redux
                開発環境の基盤部分の設計・実装を得意とするフロントエンドエンジニアを募集しています。
              </p>
              <TextLink
                to="/recruit/front-end-engineer/"
                label="詳しく見る"
                withIcon
                isRight
              />
            </div>
          </div>
          <div className="RecruitCard" id="ui-designer">
            <div className="RecruitCard__IconContainer">
              <img
                src={RecruitIconUIDesigner}
                alt=""
                className="RecruitCard__Icon"
              />
            </div>
            <div className="RecruitCard__Body">
              <Link to="/recruit/ui-designer/" className="RecruitCard__Link">
                UIデザイナー
              </Link>
              <p className="RecruitCard__Description">
                抽象的な物事に具体的な形を与えビジュアライズできる専門性を持ったUIデザイナーを募集しています。
              </p>
              <TextLink
                to="/recruit/ui-designer/"
                label="詳しく見る"
                withIcon
                isRight
              />
            </div>
          </div>
          <div className="RecruitCard" id="information-architect">
            <div className="RecruitCard__IconContainer">
              <img
                src={RecruitIconInformationArchitect}
                alt=""
                className="RecruitCard__Icon"
              />
            </div>
            <div className="RecruitCard__Body">
              <Link
                to="/recruit/information-architect/"
                className="RecruitCard__Link"
              >
                IA / 情報設計者
              </Link>
              <p className="RecruitCard__Description">
                情報設計に限らないGaji-Laboのいろいろな業務領域にIA視点で関わってくれるメンバーを募集しています。
              </p>
              <TextLink
                to="/recruit/information-architect/"
                label="詳しく見る"
                withIcon
                isRight
              />
            </div>
          </div>
        </div>
        <h2 className="SecondTitle">選考ステップ</h2>
        <p className="TextSmall">
          ※2019年6月27日現在の選考ステップです。状況により異なる場合があります。
        </p>
        <ol className="RecruitOrderedBox">
          <li className="RecruitOrderedBox__Item">
            <h3 className="RecruitOrderedBox__Title">
              1. 書類選考（メールでのやり取り）
            </h3>
            <ul className="RecruitOrderedBox__List List">
              <li className="List__item">履歴書（フォーマット不問）</li>
              <li className="List__item">
                ポートフォリオ or 具体的に成果のわかるもの
              </li>
              <li className="List__item">職務経歴書</li>
            </ul>
          </li>
          <li className="RecruitOrderedBox__Item">
            <h3 className="RecruitOrderedBox__Title">2. 一次面接</h3>
            <ul className="RecruitOrderedBox__List List">
              <li className="List__item">担当者数名との面接</li>
              <li className="List__item">主にスキル面やカルチャー面の話</li>
            </ul>
          </li>
          <li className="RecruitOrderedBox__Item">
            <h3 className="RecruitOrderedBox__Title">3. グループ面談</h3>
            <ul className="RecruitOrderedBox__List List">
              <li className="List__item">弊社スタッフ複数人との面談</li>
              <li className="List__item">
                メンバーへの質問やざっくばらんな会話など
              </li>
            </ul>
          </li>
          <li className="RecruitOrderedBox__Item">
            <h3 className="RecruitOrderedBox__Title">
              4. 役員面接（最終面接）
            </h3>
            <ul className="RecruitOrderedBox__List List">
              <li className="List__item">役員との最終面接</li>
            </ul>
          </li>
          <li className="RecruitOrderedBox__Item">
            <h3 className="RecruitOrderedBox__Title">5. 内定通知</h3>
            <ul className="RecruitOrderedBox__List List">
              <li className="List__item">内定の場合メールなどで通知</li>
            </ul>
          </li>
          <li className="RecruitOrderedBox__Item">
            <h3 className="RecruitOrderedBox__Title">6. オファー面談</h3>
            <ul className="RecruitOrderedBox__List List">
              <li className="List__item">
                契約内容の合意と入社に向けてのご相談など
              </li>
            </ul>
          </li>
        </ol>
        <div className="ContactLink">
          <div className="ContactLink__Container">
            <Title withColor>採用に関するお問い合わせ</Title>
            <p className="ContactLink__Texts">
              Gaji-Laboというチームの一員として、
              <br />
              価値や熱量をスケールさせる仕事に取り組んでみませんか？
            </p>
            <Button
              className="ContactLink__Button"
              label="求人専用応募フォーム"
              to="/recruit/contact/"
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

export default RecruitPage;
