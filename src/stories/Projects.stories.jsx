import { storiesOf } from '@storybook/react';
import React from 'react';
import * as MarkdownIt from 'markdown-it';

import css from '../templates/Projects.module.scss';

const md = new MarkdownIt({ breaks: true });

const stories = storiesOf('pages/projects', module);

const MainBodyStyles = {
  width: '100%',
  maxWidth: '840px',
  margin: 'auto',
  padding: '30px 20px 0',
};

stories.add('preview', () => (
  <div style={MainBodyStyles} className={css.ProjectsWrapper}>
    <div className={css.Projects}>
      <p className="CaseStudyId">事例 #001</p>
      <h1 className={css.Projects__Title}>
        カタログ制作システムの構築に向けて
      </h1>
      <a
        href="https://www.panasonic.com/jp/corporate/ais.html"
        className={css.Projects__ClientName}
      >
        パナソニック オート＆インダストリアルシステムズ社
      </a>
      <p className={css.Projects__LabelList}>
        <span className={css.Projects__Label}>#タグタグタグ</span>
        <span className={css.Projects__Label}>#タグタグ</span>
        <span className={css.Projects__Label}>#タグタグタグタグタグ</span>
        <span className={css.Projects__Label}>#タグタグタグ</span>
        <span className={css.Projects__Label}>#タグタグ</span>
        <span className={css.Projects__Label}>#タグタグタグタグタグ</span>
        <span className={css.Projects__Label}>#タグタグタグ</span>
      </p>
      <img src="/uploads/example.png" alt="" className="ImageBasic" />
      <div className={css.Projects__Section}>
        <h2 className="SecondTitle">
          客観的なヒアリングで、スムーズな合意形成を。
        </h2>
        <div className="CaseStudySummary">
          <h3 className="CaseStudySummary__Title">プロジェクトの概要</h3>
          <p>システム構築の指針を定め、最適なワークフローを提案。</p>
        </div>
        <div className={css.MD_ProjectsTextsWrapper}>
          <p>
            パナソニック オート＆インダストリアルシステムズ社（以下 AIS
            社）では「印刷物として存在するカタログ」と「Web
            サイトに掲載されるカタログ」とを別々に制作してきたが、ふたつの制作進行／データ管理を一元化する「カタログシステム」を新たに構築することになった。それに先立ちガジラボは、関係者へのヒアリングを重ねながらシステム構築の指針を定めることを任された。
          </p>
          <p>
            そこから派生して、みんなにとってストレスのないワークフローの提案も担当。システムの実装が始まる前には、新ワークフローについての合意を関係者から得ることも使命のひとつとなった。新システムの開発は、2
            年前から始まったプロジェクトではあったものの、さまざまな理由から要件定義が進まず、ガジラボが参加するまでは長らく停滞していた。ここでガジラボに期待されたことは、社内の意見を上手に吸い上げながら、プロジェクトを前進させることだ。
          </p>
          <p>
            <img src="/uploads/example.png" alt="" />
          </p>
        </div>
      </div>
      <div className={css.Projects__Section}>
        <div className="CaseStudySummary">
          <h2 className="CaseStudySummary__Title">プロジェクトのプロセス</h2>
          <p>相手、時間、場所を変えて、ヒアリングを重ねる。</p>
        </div>
        <div className={css.MD_ProjectsTextsWrapper}>
          <p>
            紙のカタログ制作を担ってきたプロモーション企画課の 3 名、Web
            カタログを担ってきた Web 担当の 3 名、商品企画担当の 2
            名に対してヒアリングを実施。複数人がひとつの場に集って話すことで合意形成を促進する。また同一の問いを、時間や場所を変えながら、たびたび繰り返すことで問題の本質に迫った。ヒアリングの過程では、大型のボード上にワークフローを時系列で表現。タスクを記した付箋を貼りだしたほか、担当者や部署を模したレゴブロックをボード上に配置しながらさまざまな情報を可視化し、アクティブに意見を交わす。
          </p>
          <p>
            <img src="/uploads/example.png" alt="" />
          </p>
        </div>
      </div>
      <div className="BackgroundGray">
        <div className="BackgroundGray__Container">
          <ol className="Steps">
            <li className="StepText">
              <div className="StepText__Head">
                <h2 className="StepText__Title">基礎情報のインプット</h2>
                <span className="StepText__Label">explore</span>
              </div>
              <div className="StepText__Body">
                <h3 className="StepText__BodyTitle">
                  ヒアリングの出発点となる情報を、頭に叩き込む。
                </h3>
                <div className={css.MD_ProjectsTextsWrapper}>
                  <p>
                    これまでに作られたカタログの実物を手に、AIS社のビジネスにおけるカタログの位置づけを確認したのがファーストステップ。この段階で最も重要だったのは、ご担当者に記していただいたワークフロー図だ。これを手に予備知識として「人がどのように関わっているのか」「彼らがどう動いているのか」「誰と誰とがやりとりしているのか」を頭に叩き込んだ。
                  </p>
                  <p>
                    次ステップ以降では、これを叩き台としてヒアリングを進めていく。ほかにもAIS社から提供された膨大な量の資料を目にしながら状況の把握に努めた。
                  </p>
                </div>
                <figure>
                  <img src="/uploads/example.png" alt="" />
                  <figcaption>ワークフローの下描き</figcaption>
                </figure>
              </div>
            </li>
            <li className="StepText">
              <div className="StepText__Head">
                <h2 className="StepText__Title">
                  基礎情報のインプット基礎情報のインプット基礎情報のインプット基礎情報のインプット基礎情報のインプット基礎情報のインプット基礎情報のインプット基礎情報のインプット
                </h2>
                <span className="StepText__Label">apply</span>
              </div>
              <div className="StepText__Body">
                <h3 className="StepText__BodyTitle">
                  ヒアリングの出発点となる情報を、頭に叩き込む。
                </h3>
                <div className={css.MD_ProjectsTextsWrapper}>
                  <p>
                    これまでに作られたカタログの実物を手に、AIS社のビジネスにおけるカタログの位置づけを確認したのがファーストステップ。この段階で最も重要だったのは、ご担当者に記していただいたワークフロー図だ。これを手に予備知識として「人がどのように関わっているのか」「彼らがどう動いているのか」「誰と誰とがやりとりしているのか」を頭に叩き込んだ。
                  </p>
                  <p>
                    次ステップ以降では、これを叩き台としてヒアリングを進めていく。ほかにもAIS社から提供された膨大な量の資料を目にしながら状況の把握に努めた。
                  </p>
                </div>
                <figure>
                  <img src="/uploads/example.png" alt="" />
                  <figcaption>ワークフローの下描き</figcaption>
                </figure>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div className={css.Projects__BodyAfterSteps}>
        <div className={css.Projects__Section}>
          <h2 className="SecondTitle">
            本音でのコミュニケーションを促進し、ポジティブな影響を仕事に与える。
          </h2>
          <div className={css.MD_ProjectsTextsWrapper}>
            <p>
              プロジェクトの振り帰り会で、「開発者がイメージしやすいアウトプットがつくれた」「一連のワークショップがなかったら、現状にそぐわないシステムをつくっていたかもしれない」「また次も一緒にやりましょう」という言葉をパートナーからもらえた。「システム開発にとどまらず、社内にインパクトを与えることができた」「チームとしての一体感があり、みんなが気持ちよく仕事ができた」という声も上がった。
            </p>
            <p>
              クライアントからの信頼感は徹底したヒアリングによって生まれる。いろんな形で顔を合わすことで、本音でのコミュニケーションを促進し、ポジティブな影響を仕事に与えていくのはガジラボの十八番。会社としてもそこにアイデンティティを感じている。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="ContactLink">
      <div className="ContactLink__Container">
        <p className="ContactLink__Texts">
          本音でのコミュニケーションを促進し、ポジティブな影響を仕事に与えるプロセスを、
          <br />
          Gaji-Laboはあなたと一緒に考え、実行します。
        </p>
        <a href="/contact" className="Button ContactLink__Button">
          お問い合わせフォーム
          <svg className="Button__Icon Icon" aria-hidden="true">
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
    <div className="Title LinkListTitle">
      <h2 className="Title__Text">関連リンク</h2>
    </div>
    <div className="LinkList">
      <ul>
        <li>
          <a href="/case-studies/model-cases/model-case-001/">
            メソッド紹介ページへのリンク
          </a>
        </li>
        <li>
          <a href="/case-studies/model-cases/model-case-002/">
            メソッド紹介ページへのリンク
          </a>
        </li>
        <li>
          <a href="/case-studies/model-cases/model-case-003/">
            メソッド紹介ページへのリンク
          </a>
        </li>
      </ul>
    </div>
    <div className={css.Projects__FooterButtonContainer}>
      <a className="Button isSmall" href="/case-studies/">
        さらに事例を見る
        <svg aria-hidden="true" className="Icon Button__Icon">
          <use xlinkHref="#arrow-right" />
        </svg>
      </a>
    </div>
  </div>
));

const sampleCode = `
\`\`\`
---
type: projects
date: 2019-08-06T04:52:55.318Z
slug: 'project-001'
caseId: 1
title: カタログ制作システムの構築に向けて
clientName: パナソニック オート＆インダストリアルシステムズ社
clientUrl: 'https://www.panasonic.com/jp/corporate/ais.html'
description: >-
  プロジェクト解説サマリーテキストが入ります。テキストサイズ14pt。プロジェクト解説サマリーテキストが入ります。テキストサイズ14pt。プロジェクト解説サマリーテキストが入ります。テキストサイズ14pt。プロジェクト解説サマリーテキストが入ります。テキストサイズ14pt。
thumbnail: /uploads/example.png
thumbnailAlt: ''
tags:
  - タグタグタグ
  - タグタグ
  - タグタグタグタグタグ
  - タグタグタグ
  - タグタグ
  - タグタグタグタグタグ
  - タグタグタグ
eyecatch: /uploads/example.png
eyecatchAlt: ''
bodyBeforeSteps:
  - sectionText: "パナソニック オート＆インダストリアルシステムズ社（以下AIS社）では「印刷物として存在するカタログ」と「Webサイトに掲載されるカタログ」とを別々に制作してきたが、ふたつの制作進行／データ管理を一元化する「カタログシステム」を新たに構築することになった。それに先立ちガジラボは、関係者へのヒアリングを重ねながらシステム構築の指針を定めることを任された。\r\n\nそこから派生して、みんなにとってストレスのないワークフローの提案も担当。システムの実装が始まる前には、新ワークフローについての合意を関係者から得ることも使命のひとつとなった。新システムの開発は、2年前から始まったプロジェクトではあったものの、さまざまな理由から要件定義が進まず、ガジラボが参加するまでは長らく停滞していた。ここでガジラボに期待されたことは、社内の意見を上手に吸い上げながら、プロジェクトを前進させることだ。\n\n![](/uploads/example.png)"
    sectionTitle: 客観的なヒアリングで、スムーズな合意形成を。
    summaryText: システム構築の指針を定め、最適なワークフローを提案。
    summaryTitle: プロジェクトの概要
  - sectionText: >-
      紙のカタログ制作を担ってきたプロモーション企画課の3名、Webカタログを担ってきたWeb担当の3名、商品企画担当の2名に対してヒアリングを実施。複数人がひとつの場に集って話すことで合意形成を促進する。また同一の問いを、時間や場所を変えながら、たびたび繰り返すことで問題の本質に迫った。ヒアリングの過程では、大型のボード上にワークフローを時系列で表現。タスクを記した付箋を貼りだしたほか、担当者や部署を模したレゴブロックをボード上に配置しながらさまざまな情報を可視化し、アクティブに意見を交わす。


      ![](/uploads/example.png)
    sectionTitle: ''
    summaryText: 相手、時間、場所を変えて、ヒアリングを重ねる。
    summaryTitle: プロジェクトのプロセス
steps:
  - stepBody: "これまでに作られたカタログの実物を手に、AIS社のビジネスにおけるカタログの位置づけを確認したのがファーストステップ。この段階で最も重要だったのは、ご担当者に記していただいたワークフロー図だ。これを手に予備知識として「人がどのように関わっているのか」「彼らがどう動いているのか」「誰と誰とがやりとりしているのか」を頭に叩き込んだ。\r次ステップ以降では、これを叩き台としてヒアリングを進めていく。ほかにもAIS社から提供された膨大な量の資料を目にしながら状況の把握に努めた。"
    stepBodyTitle: ヒアリングの出発点となる情報を、頭に叩き込む。
    stepFigureImage: /uploads/example.png
    stepFigureImageAlt: ''
    stepFigureImageCaption: ワークフローの下描き
    stepLabel: explore
    stepTitle: 基礎情報のインプット
  - stepBody: "これまでに作られたカタログの実物を手に、AIS社のビジネスにおけるカタログの位置づけを確認したのがファーストステップ。この段階で最も重要だったのは、ご担当者に記していただいたワークフロー図だ。これを手に予備知識として「人がどのように関わっているのか」「彼らがどう動いているのか」「誰と誰とがやりとりしているのか」を頭に叩き込んだ。\r次ステップ以降では、これを叩き台としてヒアリングを進めていく。ほかにもAIS社から提供された膨大な量の資料を目にしながら状況の把握に努めた。"
    stepBodyTitle: ヒアリングの出発点となる情報を、頭に叩き込む。
    stepFigureImage: /uploads/example.png
    stepFigureImageAlt: ''
    stepFigureImageCaption: ワークフローの下描き
    stepLabel: apply
    stepTitle: >-
      基礎情報のインプット基礎情報のインプット基礎情報のインプット基礎情報のインプット基礎情報のインプット基礎情報のインプット基礎情報のインプット基礎情報のインプット
bodyAfterSteps:
  - sectionText: "プロジェクトの振り帰り会で、「開発者がイメージしやすいアウトプットがつくれた」「一連のワークショップがなかったら、現状にそぐわないシステムをつくっていたかもしれない」「また次も一緒にやりましょう」という言葉をパートナーからもらえた。「システム開発にとどまらず、社内にインパクトを与えることができた」「チームとしての一体感があり、みんなが気持ちよく仕事ができた」という声も上がった。\n\n\rクライアントからの信頼感は徹底したヒアリングによって生まれる。いろんな形で顔を合わすことで、本音でのコミュニケーションを促進し、ポジティブな影響を仕事に与えていくのはガジラボの十八番。会社としてもそこにアイデンティティを感じている。"
    sectionTitle: 本音でのコミュニケーションを促進し、ポジティブな影響を仕事に与える。
    summaryText: ''
    summaryTitle: ''
contactTextFirstLine: 本音でのコミュニケーションを促進し、ポジティブな影響を仕事に与えるプロセスを、
contactTextSecondLine: Gaji-Laboはあなたと一緒に考え、実行します。
relativeLinks:
  - relativeLinkTitle: 'メソッド紹介ページへのリンク'
    relativeLinkUrl: '/case-studies/model-cases/model-case-001/'
  - relativeLinkTitle: 'メソッド紹介ページへのリンク'
    relativeLinkUrl: '/case-studies/model-cases/model-case-002/'
  - relativeLinkTitle: 'メソッド紹介ページへのリンク'
    relativeLinkUrl: '/case-studies/model-cases/model-case-003/'
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
