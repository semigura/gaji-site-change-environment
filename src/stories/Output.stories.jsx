import { storiesOf } from '@storybook/react';
import React from 'react';
import * as MarkdownIt from 'markdown-it';

import css from '../templates/Output.module.scss';

const md = new MarkdownIt({ breaks: true });

const stories = storiesOf('pages/output', module);

const MainBodyStyles = {
  width: '100%',
  maxWidth: '840px',
  margin: 'auto',
  padding: '30px 20px 0',
};

stories.add('preview', () => (
  <div style={MainBodyStyles} className={css.OutputWrapper}>
    <div className={css.Output}>
      <p className="CaseStudyId">アウトプットサンプル #001</p>
      <h1 className={css.Output__Title}>
        アウトプットサンプルタイトルアウトプットタイトルアウトプットタイトル
      </h1>
      <p className="TextSmall">
        解説テキストテキストテキスト解説テキストテキストテキスト解説テキストテキストテキスト解説テキストテキストテキスト解説テキストテキストテキスト
      </p>
      <figure className={css.Output__Eyecatch}>
        <img src="/uploads/example.png" alt="" />
        <figcaption>
          キャプションテキストキャプションテキストキャプションテキストキャプションテキストキャプションテキスト
        </figcaption>
      </figure>
      <div className={css.Output__Section}>
        <h2 className="SecondTitle">見出しテキスト</h2>
        <figure className="Figure">
          <img src="/uploads/example.png" alt="" />
          <figcaption>
            キャプションテキストがはいるキャプションテキストがはいるキャプションテキストがはいるキャプションテキストがはいるキャプションテキストがはいる
          </figcaption>
        </figure>
        <div className={css.MD_OutputTextsWrapper}>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
      <div className={css.Output__Section}>
        <h2 className="SecondTitle">見出しテキスト</h2>
        <figure className="Figure">
          <img
            src="/uploads/default-thumbnail.png"
            alt="キャプションテキストがはいるキャプションテキストがはいるキャプションテキストがはいるキャプションテキストがはいるキャプションテキストがはいる"
          />
        </figure>
        <div className={css.MD_OutputTextsWrapper}>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
      <div className="Title LinkListTitle">
        <h2 className="Title__Text">関連するプロジェクト</h2>
      </div>
      <div className="LinkList">
        <ul>
          <li>
            <a href="/case-studies/projects/project-001/">
              プロジェクトページのリンク
            </a>
          </li>
          <li>
            <a href="/case-studies/projects/project-002/">
              プロジェクトページのリンク
            </a>
          </li>
          <li>
            <a href="/case-studies/projects/project-003/">
              プロジェクトページのリンク
            </a>
          </li>
        </ul>
      </div>
      <div className="Title LinkListTitle">
        <h2 className="Title__Text">関連するモデルケース</h2>
      </div>
      <div className="LinkList">
        <ul>
          <li>
            <a href="/case-studies/model-cases/model-case-001/">
              モデルケースページのリンク
            </a>
          </li>
          <li>
            <a href="/case-studies/model-cases/model-case-002/">
              モデルケースページのリンク
            </a>
          </li>
          <li>
            <a href="/case-studies/model-cases/model-case-003/">
              モデルケースページのリンク
            </a>
          </li>
        </ul>
      </div>
      <div className="Title LinkListTitle">
        <h2 className="Title__Text">ほかのアウトプットサンプルも見る</h2>
      </div>
      <div className="LinkList">
        <ul>
          <li>
            <a href="/case-studies/output/output-001/">
              アウトプットページのリンク
            </a>
          </li>
          <li>
            <a href="/case-studies/output/output-002/">
              アウトプットページのリンク
            </a>
          </li>
          <li>
            <a href="/case-studies/output/output-003/">
              アウトプットページのリンク
            </a>
          </li>
        </ul>
      </div>
      <div className="ContactLink">
        <div className="ContactLink__Container">
          <p className="ContactLink__Texts">
            アクション○○○を通じて○○○をすると、○○○に繋がります的なページごとのテキスト。
            <br />
            Gaji-Laboは、あなたのチームに必要なソリューションをあなたと一緒に考えます。
          </p>
          <a className="Button ContactLink__Button" href="/contact/">
            お問い合わせフォーム
            <svg aria-hidden="true" className="Icon Button__Icon">
              <use xlinkHref="#arrow-right" />
            </svg>
          </a>
          <a href="#dummy" className="ContactLink__PdfLink">
            <img
              className="ContactLink__PdfIcon"
              src="/uploads/file.svg"
              alt="PDF icon"
            />
            会社案内PDF(3.6MB)もご用意しております。
          </a>
        </div>
      </div>
    </div>
  </div>
));

const sampleCode = `
\`\`\`
---
type: output
date: 2019-08-30T11:07:17.611Z
slug: output-001
caseId: 1
title: アウトプットサンプルタイトルアウトプットタイトルアウトプットタイトル
thumbnail: /uploads/default-thumbnail.png
introduction: 解説テキストテキストテキスト解説テキストテキストテキスト解説テキストテキストテキスト解説テキストテキストテキスト解説テキストテキストテキスト
eyecatch: /uploads/example.png
eyecatchAlt: test
eyecatchCaption: キャプションテキストキャプションテキストキャプションテキストキャプションテキストキャプションテキスト
bodySection:
  - image: /uploads/example.png
    imageAlt: test
    imageCaption: キャプションテキストがはいるキャプションテキストがはいるキャプションテキストがはいるキャプションテキストがはいるキャプションテキストがはいる
    text: >-
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト


      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    title: 見出しテキスト
  - image: /uploads/default-thumbnail.png
    imageAlt: キャプションテキストがはいるキャプションテキストがはいるキャプションテキストがはいるキャプションテキストがはいるキャプションテキストがはいる
    imageCaption: ''
    text: >-
      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト


      テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
    title: 見出しテキスト
relativeProjectLinks:
  - title: プロジェクトページのリンク
    url: project-001
  - title: プロジェクトページのリンク
    url: project-002
  - title: プロジェクトページのリンク
    url: project-003
relativeModelCaseLinks:
  - title: モデルケースページのリンク
    url: model-case-001
  - title: モデルケースページのリンク
    url: model-case-002
  - title: モデルケースページのリンク
    url: model-case-003
relativeOutputLinks:
  - title: アウトプットページのリンク
    url: output-001
  - title: アウトプットページのリンク
    url: output-002
  - title: アウトプットページのリンク
    url: output-003
contactTextFirstLine: アクション○○○を通じて○○○をすると、○○○に繋がります的なページごとのテキスト。
contactTextSecondLine: Gaji-Laboは、あなたのチームに必要なソリューションをあなたと一緒に考えます。
---
\`\`\`
`;

stories.add('sample code', () => (
  <div
    className="markdown-body"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{ __html: md.render(sampleCode) }}
  />
));
