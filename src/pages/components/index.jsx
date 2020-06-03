import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import Highlight from 'react-highlight';
import React from 'react';
import { Link } from 'gatsby';

import css from '../../components/common/Components.module.scss';
import * as snippets from './_snippets';

import Layout from '../../components/common/Layout';
import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import Icon from '../../components/common/icons/Icon';

const ComponentsPage = () => (
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/atom-one-dark.min.css"
      />
    </Helmet>
    <Layout isIndex pageTitle="コンポーネント一覧">
      <h1>Components</h1>
      <h2>■テーブル</h2>
      <h3>- テーブル1</h3>
      <table className={classNames(css.Table, css.isFixed)}>
        <thead>
          <tr>
            <th>テキストテキストテキスト</th>
            <th>テキスト</th>
            <th>テキスト</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>テキストテキストテキストテキストテキスト</td>
            <td>テキストテキストテキストテキストテキスト</td>
            <td>テキストテキストテキストテキストテキスト</td>
          </tr>
        </tbody>
      </table>
      <Highlight language="html">{snippets.table1}</Highlight>
      <h3>- テーブル2</h3>
      <table className={classNames(css.Table, css.isFixed)}>
        <thead>
          <tr>
            <th>テキストテキストテキスト</th>
            <th>テキスト</th>
            <th>テキストテキストテキスト</th>
            <th>テキスト</th>
            <th>テキスト</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>テキストテキストテキストテキストテキスト</td>
            <td>テキストテキスト</td>
            <td>テキストテキストテキストテキストテキスト</td>
            <td>テキストテキスト</td>
            <td>テキストテキスト</td>
          </tr>
        </tbody>
      </table>
      <Highlight language="html">{snippets.table2}</Highlight>
      <table className={classNames(css.Table, css.isFixed)}>
        <tbody>
          <tr>
            <td>テキストテキストテキストテキストテキスト</td>
          </tr>
          <tr>
            <td>テキストテキストテキストテキストテキスト</td>
          </tr>
        </tbody>
      </table>
      <div>- thが折り返さないテーブル</div>
      <table className={classNames(css.Table, css.isNowrap)}>
        <thead>
          <tr>
            <th>テキストテキストテキスト</th>
            <td>テキスト</td>
            <td>テキスト</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>テキストテキストテキストテキストテキスト</th>
            <td>テキストテキストテキストテキストテキスト</td>
            <td>テキストテキストテキストテキストテキスト</td>
          </tr>
        </tbody>
      </table>
      <div>- 幅固定されていないテーブル</div>
      <table className={css.Table}>
        <thead>
          <tr>
            <th>テキストテキストテキスト</th>
            <td>テキストテキストテキストテキストテキスト</td>
            <td>テキスト</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>テキストテキストテキストテキスト</th>
            <td>テキストテキストテキストテキストテキスト</td>
            <td>テキスト</td>
          </tr>
        </tbody>
      </table>
      <h3>- リソース状況スケジュールのテーブル</h3>
      <table className={css.ResourceScheduleTable}>
        <thead>
          <tr>
            <th>リソース / 月</th>
            <th>8月</th>
            <th>9月</th>
            <th>10月</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <Icon
                className={css.ResourceScheduleTable__Icon}
                name="resource-icon-markup"
              />
              マークアップ
            </th>
            <td>
              <Icon
                className={css.ResourceScheduleTable__Status}
                title="○"
                name="resource-status-available"
              />
            </td>
            <td>
              <Icon
                className={css.ResourceScheduleTable__Status}
                title="○"
                name="resource-status-available"
              />
            </td>
            <td>
              <Icon
                className={css.ResourceScheduleTable__Status}
                title="○"
                name="resource-status-available"
              />
            </td>
          </tr>
          <tr>
            <th>
              <Icon
                className={css.ResourceScheduleTable__Icon}
                name="resource-icon-frontend"
              />
              フロントエンド
            </th>
            <td>
              <Icon
                className={css.ResourceScheduleTable__Status}
                title="△"
                name="resource-status-limited"
              />
            </td>
            <td>
              <Icon
                className={css.ResourceScheduleTable__Status}
                title="○"
                name="resource-status-available"
              />
            </td>
            <td>
              <Icon
                className={css.ResourceScheduleTable__Status}
                title="○"
                name="resource-status-available"
              />
            </td>
          </tr>
          <tr>
            <th>
              <Icon
                className={css.ResourceScheduleTable__Icon}
                name="resource-icon-design-support"
              />
              デザイン支援
            </th>
            <td>
              <Icon
                className={css.ResourceScheduleTable__Status}
                title="△"
                name="resource-status-limited"
              />
            </td>
            <td>
              <Icon
                className={css.ResourceScheduleTable__Status}
                title="×"
                name="resource-status-unavailable"
              />
            </td>
            <td>
              <Icon
                className={css.ResourceScheduleTable__Status}
                title="！"
                name="resource-status-special"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <h2>■ テキスト</h2>
      <h3>- 見出し</h3>
      <h2>
        h2テキスト主に記事ページで使用18pt/W6/#333333テキストテキストテキストテキストテキストテキストテキスト。
      </h2>
      <h3>h3テキスト主に記事内で使用16pt/W6/#333333</h3>
      <h3>
        h3テキスト主に記事内で使用16pt/W6/#333333テキストテキストテキストテキストテキストテキストテキストテキストテキスト。
      </h3>
      <h4>h4テキスト主に記事内で使用16pt/W6/#333333</h4>
      <h4>
        h4テキスト主に記事内で使用16pt/W6/#333333テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト。
      </h4>
      <Highlight language="html">{snippets.heading}</Highlight>
      <h3>- テキスト</h3>
      <p className={css.TextBasic}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ullam
        labore at quisquam, nulla cum, quae nihil maiores ipsa expedita
        laboriosam. Dolores blanditiis aut deserunt debitis, minima obcaecati
        eius alias?
      </p>
      <p className={css.TextBasic}>
        本文基本テキスト16pt/W3/#333333テキストテキストテキスト。主に短い文章の本文に使用します。本文基本テキスト16pt/W3/#333333テキストテキストテキスト。主に短い文章の本文に使用します。本文基本テキスト16pt/W3/#333333テキストテキストテキスト。主に短い文章の本文に使用します。
      </p>
      <Highlight language="html">{snippets.text}</Highlight>
      <p className={css.TextSmall}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ullam
        labore at quisquam, nulla cum, quae nihil maiores ipsa expedita
        laboriosam. Dolores blanditiis aut deserunt debitis, minima obcaecati
        eius alias?
      </p>
      <p className={css.TextSmall}>
        本文小さめテキスト14pt/W3/#333333テキストテキストテキスト。主に主に長い文章の記事などの本文に使用します。本文小さめテキスト14pt/W3/#333333テキストテキストテキスト。主に主に長い文章の記事などの本文に使用します。
      </p>
      <div>- 画像レイアウト</div>
      <div>- 全幅</div>
      <figure className={css.ImageFull}>
        <img src="https://placehold.jp/1200x800.png" alt="" />
      </figure>
      <div className={css.ImageFull}>
        <img src="https://placehold.jp/600x400.png" alt="" />
      </div>
      <div>- 通常の画像</div>
      <figure className={css.ImageBasic}>
        <img src="https://placehold.jp/1200x800.png" alt="" />
      </figure>
      <div className={css.ImageBasic}>
        <img src="https://placehold.jp/600x400.png" alt="" />
      </div>
      <div>- 横並びの画像2カラム</div>
      <ul className={css.Image2Column}>
        <li>
          <img src="https://placehold.jp/600x400.png" alt="" />
        </li>
        <li>
          <img src="https://placehold.jp/600x400.png" alt="" />
        </li>
        <li>
          <img src="https://placehold.jp/600x400.png" alt="" />
        </li>
      </ul>
      <div>- 横並びの画像3カラム</div>
      <ul className={css.Image3Column}>
        <li>
          <img src="https://placehold.jp/600x400.png" alt="" />
        </li>
        <li>
          <img src="https://placehold.jp/600x400.png" alt="" />
        </li>
        <li>
          <img src="https://placehold.jp/600x400.png" alt="" />
        </li>
        <li>
          <img src="https://placehold.jp/600x400.png" alt="" />
        </li>
      </ul>
      <div>- キャプション付き画像 - FigureLayout</div>
      <div className={css.FigureLayout}>
        <figure className={css.Figure}>
          <img src="https://placehold.jp/640x480.png" alt="ダミー画像" />
          <figcaption>figcaption - ダミー画像</figcaption>
        </figure>
        <figure className={css.Figure}>
          <img src="https://placehold.jp/640x480.png" alt="ダミー画像" />
          <figcaption>figcaption - ダミー画像</figcaption>
        </figure>
      </div>
      <div>- キャプション付き画像 - FigureLayout</div>
      <div className={css.FigureLayout}>
        <figure className={css.FigureBorder}>
          <img src="https://placehold.jp/320x240.png" alt="ダミー画像" />
          <figcaption>figcaption - ダミー画像</figcaption>
        </figure>
        <figure className={css.FigureBorder}>
          <img src="https://placehold.jp/320x240.png" alt="ダミー画像" />
          <figcaption>figcaption - ダミー画像</figcaption>
        </figure>
      </div>
      <div>- キャプション付き画像 - FigureLayout.is3column - border あり</div>
      <div className={classNames(css.FigureLayout, css.is3column)}>
        <figure className={css.FigureBorder}>
          <img src="https://placehold.jp/640x480.png" alt="ダミー画像" />
          <figcaption>figcaption - ダミー画像</figcaption>
        </figure>
        <figure className={css.FigureBorder}>
          <img src="https://placehold.jp/640x480.png" alt="ダミー画像" />
          <figcaption>figcaption - ダミー画像</figcaption>
        </figure>
        <figure className={css.FigureBorder}>
          <img src="https://placehold.jp/640x480.png" alt="ダミー画像" />
          <figcaption>figcaption - ダミー画像</figcaption>
        </figure>
      </div>
      <div>- キャプション付き画像 - FigureLayout.is3column - border なし</div>
      <div className={classNames(css.FigureLayout, css.is3column)}>
        <figure className={css.Figure}>
          <img src="https://placehold.jp/640x480.png" alt="ダミー画像" />
          <figcaption>figcaption - ダミー画像</figcaption>
        </figure>
        <figure className={css.Figure}>
          <img src="https://placehold.jp/640x480.png" alt="ダミー画像" />
          <figcaption>figcaption - ダミー画像</figcaption>
        </figure>
        <figure className={css.Figure}>
          <img src="https://placehold.jp/640x480.png" alt="ダミー画像" />
          <figcaption>figcaption - ダミー画像</figcaption>
        </figure>
        <figure className={css.Figure}>
          <img src="https://placehold.jp/640x480.png" alt="ダミー画像" />
          <figcaption>figcaption - ダミー画像</figcaption>
        </figure>
        <figure className={css.Figure}>
          <img src="https://placehold.jp/640x480.png" alt="ダミー画像" />
          <figcaption>figcaption - ダミー画像</figcaption>
        </figure>
      </div>
      <div>- キャプション付き画像 - 縦積み</div>
      <div>
        <figure className={css.Figure}>
          <img src="https://placehold.jp/320x240.png" alt="ダミー画像" />
          <figcaption>figcaption - ダミー画像</figcaption>
        </figure>
      </div>
      <div>
        <figure className={css.FigureBorder}>
          <img src="https://placehold.jp/320x240.png" alt="ダミー画像" />
          <figcaption>figcaption - ダミー画像</figcaption>
        </figure>
      </div>
      - タイトル付きリスト
      <dl className={css.DetailList}>
        <dt>Title</dt>
        <dd>
          <p>テキストテキストテキストテキストテキスト</p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </dd>
      </dl>
      <dl className={css.DetailList}>
        <dt>タイトルタイトルタイトル</dt>
        <dd>
          <span>テキストテキストテキストテキストテキスト</span>
          <span>テキストテキスト</span>
        </dd>
      </dl>
      <dl className={css.DetailList}>
        <dt>タイトル</dt>
        <dd>テキストテキストテキストテキストテキスト</dd>
      </dl>
      <div>- 引用</div>
      <blockquote className={css.BlockQuote}>
        <p>
          引用テキストテキストテキストテキスト。引用テキストテキストテキストテキスト。引用テキストテキストテキストテキスト。引用テキストテキストテキストテキスト。引用テキストテキストテキストテキスト。引用テキストテキストテキストテキスト。引用テキストテキストテキストテキスト。引用テキストテキストテキストテキスト。
        </p>
        <p>
          引用テキストテキストテキストテキスト。引用テキストテキストテキストテキスト。引用テキストテキストテキストテキスト。引用テキストテキストテキストテキスト。
        </p>
        <cite>
          引用元：テキストテキストテキスト
          <a href="./">リンク付き</a>
        </cite>
      </blockquote>
      <div>- グレー背景のレイアウト</div>
      <div className={css.BackgroundGray}>
        <div className={css.BackgroundGray__Container}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro ullam
          labore at quisquam, nulla cum, quae nihil maiores ipsa expedita
          laboriosam. Dolores blanditiis aut deserunt debitis, minima obcaecati
          eius alias?
        </div>
      </div>
      <div>- 関連するメソッド</div>
      <div className={css.RelativeLinkList}>
        <ul>
          <li>
            <Link to="#dummy">メソッド紹介ページへのリンク</Link>
          </li>
          <li>
            <Link to="#dummy">キーワード解説ページへのリンク</Link>
          </li>
          <li>
            <Link to="#dummy">成果物サンプルへのリンク</Link>
          </li>
        </ul>
      </div>
      <div>- モデルケースのラベル</div>
      <p className={css.ModelCaseLabel}>モデルケース #001</p>
      <span className={css.ModelCaseLabel}>モデルケース #001</span>
      <div>- アウトプットサンプル</div>
      <div className={css.ProductsSample}>
        <h2>アウトプットサンプル</h2>
        <p>※これはあくまでサンプルであるという旨の説明をひとこと入れる</p>
        <ul className={css.ProductsSampleList}>
          <li>
            <figure>
              <img src="https://placehold.jp/380x250.png" alt="" />
              <figcaption>
                成果物タイトル成果物タイトル成果物タイトル
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://placehold.jp/380x250.png" alt="" />
              <figcaption>
                成果物タイトル成果物タイトル成果物タイトル
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://placehold.jp/380x250.png" alt="" />
              <figcaption>
                成果物タイトル成果物タイトル成果物タイトル
              </figcaption>
            </figure>
          </li>
          <li>
            <figure>
              <img src="https://placehold.jp/380x250.png" alt="" />
              <figcaption>
                成果物タイトル成果物タイトル成果物タイトル
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
      <div>- 対応するソリューションの提示</div>
      <div className={css.SolutionBox}>
        <h2>対応するソリューションの提示</h2>
        <dl>
          <dt>
            <img src="/uploads/action.svg" alt="" />
            Action
          </dt>
          <dd>
            ヒアリングで現状を解きほぐすヒアリングで現状を解きほぐすヒアリングで現状を解きほぐすヒアリングで現状を解きほぐすヒアリングで現状を解きほぐすヒアリングで現状を解きほぐすヒアリングで現状を解きほぐすヒアリングで現状を解きほぐすヒアリングで現状を解きほぐすヒアリングで現状を解きほぐすヒアリングで現状を解きほぐすヒアリングで現状を解きほぐす
          </dd>
          <dt>
            <img src="/uploads/result.svg" alt="" />
            Result
          </dt>
          <dd>次のアクションリストが決まる</dd>
        </dl>
      </div>
      - リスト
      <ul className={css.List}>
        <li className={css.List__item}>
          <p>
            リストです。テキストテキストテキスト。リストです。テキストテキストテキスト。
          </p>
        </li>
        <li className={css.List__item}>
          <span>リストです。テキストテキストテキスト。</span>
          <span>
            リストです。テキストテキストテキスト。リストです。テキストテキストテキスト。
          </span>
        </li>
        <li className={css.List__item}>
          リストです。テキストテキストテキスト。リストです。テキストテキストテキスト。リストです。テキストテキストテキスト。リストです。テキストテキストテキスト。
        </li>
        <li>
          <ul className={css.List}>
            <li className={css.List__item}>
              リストです。テキストテキストテキスト。リストです。テキストテキストテキスト。
            </li>
            <li className={css.List__item}>
              <p>リストです。テキストテキストテキスト。リストです。</p>
            </li>
          </ul>
        </li>
      </ul>
      - サービス案内詳細
      <div className={css.ServicesContents}>
        <dl className={css.ServicesContents__Detail}>
          <dt>explore</dt>
          <dd>
            Gaji-Laboは変化や刺激を必要としているチームの「変数」となり、チームの殻をやわらかくする会社です。チームが持っているそれぞれの物差しに合わせ、生まれる価値や熱量を見つけたり膨らませたり整えたりすること。そのために影で伴走する黒子の役割が、私たちGaji-Laboの仕事です。
          </dd>
        </dl>
        <div className={css.ServicesContents__Image}>
          <img src="https://placehold.jp/480x280.png" alt="" />
        </div>
      </div>
      <div className={css.ServicesContents}>
        <dl className={css.ServicesContents__Detail}>
          <dt>define</dt>
          <dd>
            Gaji-Laboは変化や刺激を必要としているチームの「変数」となり、チームの殻をやわらかくする会社です。チームが持っているそれぞれの物差しに合わせ、生まれる価値や熱量を見つけたり膨らませたり整えたりすること。そのために影で伴走する黒子の役割が、私たちGaji-Laboの仕事です。
          </dd>
        </dl>
        <div className={css.ServicesContents__Image}>
          <img src="https://placehold.jp/350x230.png" alt="" />
        </div>
      </div>
      <div className={css.ServicesContents}>
        <dl className={css.ServicesContents__Detail}>
          <dt>boost</dt>
          <dd>
            Gaji-Laboは変化や刺激を必要としているチームの「変数」となり、チームの殻をやわらかくする会社です。チームが持っているそれぞれの物差しに合わせ、生まれる価値や熱量を見つけたり膨らませたり整えたりすること。そのために影で伴走する黒子の役割が、私たちGaji-Laboの仕事です。
          </dd>
        </dl>
        <div className={css.ServicesContents__Image}>
          <img src="https://placehold.jp/600x400.png" alt="" />
        </div>
      </div>
      <div className={css.ServicesContents}>
        <dl className={css.ServicesContents__Detail}>
          <dt>apply</dt>
          <dd>
            Gaji-Laboは変化や刺激を必要としているチームの「変数」となり、チームの殻をやわらかくする会社です。チームが持っているそれぞれの物差しに合わせ、生まれる価値や熱量を見つけたり膨らませたり整えたりすること。そのために影で伴走する黒子の役割が、私たちGaji-Laboの仕事です。
          </dd>
        </dl>
        <div className={css.ServicesContents__Image}>
          <img src="https://placehold.jp/350x230.png" alt="" />
        </div>
      </div>
      - お問い合わせフォームへのリンク
      <div className={css.ContactLink}>
        <div className={css.ContactLink__Container}>
          <Title withColor>お問い合わせ</Title>
          <div className={css.ContactLink__Texts}>
            <p>
              アクション◯◯◯を通じて◯◯◯すると、◯◯◯◯に繋がります的なページごとのテキスト。
            </p>
            <p>
              Gaji-Laboは、あなたのチームに必要なソリューションをあなたと一緒に考えます。
            </p>
          </div>
          <Button label="お問い合わせフォーム" to="#dummy" />
        </div>
      </div>
      - タイトルがないパターン
      <div className={css.ContactLink}>
        <div className={css.ContactLink__Container}>
          <div className={css.ContactLink__Texts}>
            <p>
              本音でのコミュニケーションを促進し、ポジティブな影響を仕事に与えるプロセスを、
              <br />
              Gaji-Laboはあなたと一緒に考え、実行します。
            </p>
          </div>
          <Button label="お問い合わせフォーム" to="#dummy" />
        </div>
      </div>
    </Layout>
  </>
);

export default ComponentsPage;
