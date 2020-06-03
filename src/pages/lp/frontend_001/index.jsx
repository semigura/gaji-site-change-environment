import React from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import { Link, StaticQuery, graphql } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ContactForm from '../../../components/common/ContactForm';
import Icon from '../../../components/common/icons/Icon';
import image001 from '../../../static/images/lp/frontend_001/image-001.jpg';
import image002 from '../../../static/images/lp/frontend_001/image-002.jpg';
import image003 from '../../../static/images/lp/frontend_001/image-003.jpg';
import icon001 from '../../../static/images/lp/frontend_001/icon-001.svg';
import icon002 from '../../../static/images/lp/frontend_001/icon-002.svg';
import icon003 from '../../../static/images/lp/frontend_001/icon-003.svg';
import icon004 from '../../../static/images/lp/frontend_001/icon-004.svg';
import icon005 from '../../../static/images/lp/frontend_001/icon-005.svg';
import icon006 from '../../../static/images/lp/frontend_001/icon-006.svg';

import css from './LpFrontend001.module.scss';

class LpFrontend001 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
    };
  }

  componentDidMount() {
    this.scrollEventHandler = this.watchCurrentPosition.bind(this);
    window.addEventListener('scroll', this.scrollEventHandler, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollEventHandler, true);
  }

  watchCurrentPosition() {
    this.setState({
      currentPosition: Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop,
      ),
    });
  }

  render() {
    const pageTitle = 'フロントエンドの無料診断実施中 ++ Gaji-Labo Inc.';
    const description = '';
    const ogpThumbnail = '';
    const pageUrl = 'https://www.gaji.jp/lp/frontend_001/';
    const { currentPosition } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query SvgSpriteQuery {
            site {
              siteMetadata {
                name
                svgSprite
              }
            }
          }
        `}
        render={data => {
          const { name, svgSprite } = data.site.siteMetadata;
          return (
            <>
              <Helmet
                meta={[
                  {
                    name: 'robots',
                    content: 'noindex',
                  },
                  {
                    name: 'viewport',
                    content:
                      'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover',
                  },
                  { name: 'description', content: description },
                  { name: 'twitter:site', content: '@gaji_labo' },
                  {
                    name: 'twitter:text:title',
                    content: pageTitle,
                  },
                  {
                    name: 'twitter:image',
                    content: ogpThumbnail,
                  },
                  {
                    name: 'twitter:description',
                    content: description,
                  },
                  { name: 'twitter:card', content: 'summary' },
                  { property: 'fb:app_id', content: '512353512111288' },
                  { property: 'og:type', content: 'website' },
                  { property: 'og:site_name', content: name },
                  {
                    property: 'og:title',
                    content: pageTitle,
                  },
                  {
                    property: 'og:description',
                    content: description,
                  },
                  { property: 'og:url', content: pageUrl },
                  {
                    property: 'og:image',
                    content: ogpThumbnail,
                  },
                ]}
                link={[
                  {
                    rel: 'canonical',
                    href: pageUrl,
                  },
                ]}
                title={pageTitle}
              />
              <header
                className={classNames(
                  css.lpfe001Header,
                  currentPosition > 0 && css.isFloat,
                )}
              >
                <div className={css.lpfe001Header__Container}>
                  <h1 className={css.lpfe001Header__LogoInner}>
                    <Link to="/">
                      <Icon
                        className={css.lpfe001Header__Logo}
                        name="logo"
                        aria-label="Gaji-Labo（ガジラボ）"
                      />
                    </Link>
                  </h1>
                  <p className={css.lpfe001Header__ToFormAnchor}>
                    <AnchorLink
                      offset="60"
                      href="#contact-form"
                      className={css.lpfe001Header__ToFormAnchorItem}
                    >
                      無料診断
                    </AnchorLink>
                  </p>
                </div>
              </header>
              <main className={css.lpfe001main}>
                <div className={css.lpfe001KeyVisual}>
                  <h2 className={css.lpfe001KeyVisual__LeadText}>
                    フロントエンドの
                    <wbr />
                    プロが必要な
                    <br />
                    チームのために。
                  </h2>
                  <ul className={css.lpfe001KeyVisual__List}>
                    <li>できる人が兼任</li>
                    <li>専門知識の不足</li>
                    <li>フロントに負債が蓄積</li>
                  </ul>
                  <p className={css.lpfe001KeyVisual__ToFormAnchor}>
                    <AnchorLink
                      offset="60"
                      href="#contact-form"
                      className={css.lpfe001KeyVisual__ToFormAnchorItem}
                    >
                      <Icon
                        className={css.lpfe001KeyVisual__ToFormAnchorIcon}
                        name="checkup"
                      />
                      まずは無料で、
                      <br className={css.lpfe001IsSPonly} />
                      専門家による簡易診断を
                    </AnchorLink>
                  </p>
                </div>
                <div className={css.lpfe001Introduce}>
                  <p className={css.lpfe001Introduce__Text}>
                    質の良いWebサービスを作成・維持するためには、その道のプロに任せるのが最速です。
                    <br />
                    Gaji-Laboは御社のフロントエンド体制や開発効率について問題点を洗い出し、
                    <br className={css.lpfe001IsPConly} />
                    最適な方法で解決いたします。
                  </p>
                </div>
                <div className={css.lpfe001Section}>
                  <div className={classNames(css.lpfe001Section__Inner)}>
                    <h2 className={css.lpfe001Heading}>
                      フロントエンドを
                      <br className={css.lpfe001IsSPonly} />
                      プロに任せるメリット
                    </h2>
                    <ul className={css.lpfe001MeritList}>
                      <li>
                        <figure className={css.lpfe001MeritList__Figure}>
                          <img src={image001} alt="" />
                          <figcaption>
                            チーム全員が本来の業務に集中することができ、生産性がアップします。
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure className={css.lpfe001MeritList__Figure}>
                          <img src={image002} alt="" />
                          <figcaption>
                            フロントエンドの隠れた課題を整理し対策することで、運用の効率化とトラブル回避に繋がります。
                          </figcaption>
                        </figure>
                      </li>
                      <li>
                        <figure className={css.lpfe001MeritList__Figure}>
                          <img src={image003} alt="" />
                          <figcaption>
                            フロントエンド実装段階における、想定外のスケジュール遅延を防ぐことができます。
                          </figcaption>
                        </figure>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={classNames(
                    css.lpfe001Section,
                    css.isBackgroundGray,
                  )}
                >
                  <div className={classNames(css.lpfe001Section__Inner)}>
                    <h2 className={css.lpfe001Heading}>
                      Gaji-Laboは、
                      <br className={css.lpfe001IsSPonly} />
                      フロントエンドのプロ集団です
                    </h2>
                    <ul className={css.lpfe001ModelCaseList}>
                      <li>
                        <img
                          src={icon001}
                          alt=""
                          className={css.lpfe001ModelCaseList__Icon}
                        />
                        HTML+CSS
                      </li>
                      <li>
                        <img
                          src={icon002}
                          alt=""
                          className={css.lpfe001ModelCaseList__Icon}
                        />
                        コンポーネント
                        <br className={css.lpfe001IsSPonly} />
                        実装
                      </li>
                      <li>
                        <img
                          src={icon003}
                          alt=""
                          className={css.lpfe001ModelCaseList__Icon}
                        />
                        Rails view実装
                      </li>
                      <li>
                        <img
                          src={icon004}
                          alt=""
                          className={css.lpfe001ModelCaseList__Icon}
                        />
                        フロントエンド
                        <br />
                        メンテナンス
                      </li>
                      <li>
                        <img
                          src={icon005}
                          alt=""
                          className={css.lpfe001ModelCaseList__Icon}
                        />
                        JavaScript実装
                      </li>
                      <li>
                        <img
                          src={icon006}
                          alt=""
                          className={css.lpfe001ModelCaseList__Icon}
                        />
                        スタイルガイド
                        <br />
                        作成支援
                      </li>
                    </ul>
                    <p className={css.lpfe001ModelCaseText}>
                      その他、相談内容に応じてご対応可能です。
                    </p>
                  </div>
                </div>
                <div className={css.lpfe001Section}>
                  <div className={classNames(css.lpfe001Section__Inner)}>
                    <h2 className={css.lpfe001Heading}>
                      Gaji-Laboが支援してきた
                      <br className={css.lpfe001IsSPonly} />
                      開発事例
                    </h2>
                    <dl className={css.lpfe001CaseStudiesList}>
                      <div>
                        <dt>
                          <p
                            className={css.lpfe001CaseStudiesList__ProblemTitle}
                          >
                            課題
                          </p>
                          <p
                            className={css.lpfe001CaseStudiesList__ProblemText}
                          >
                            長年の運用でRailsのフロントエンドが肥大化。どうにかしたいが、どこから手を付けたら良いのかわからない。
                          </p>
                          <p
                            className={css.lpfe001CaseStudiesList__ProblemType}
                          >
                            業種：有名スタートアップWebサービス
                          </p>
                        </dt>
                        <dd>
                          <p className={css.lpfe001CaseStudiesList__SolveTitle}>
                            解決方法
                          </p>
                          <p className={css.lpfe001CaseStudiesList__SolveText}>
                            リファクタリングをしながら、リニューアルに対応しました。
                          </p>
                        </dd>
                      </div>
                      <div>
                        <dt>
                          <p
                            className={css.lpfe001CaseStudiesList__ProblemTitle}
                          >
                            課題
                          </p>
                          <p
                            className={css.lpfe001CaseStudiesList__ProblemText}
                          >
                            大きくなってしまったRailsアプリケーション。サイトの要の機能にも絡んでいて、ちょっとした修正を加えるのにも、一苦労。
                          </p>
                          <p
                            className={css.lpfe001CaseStudiesList__ProblemType}
                          >
                            業種：大手BtoBサービス
                          </p>
                        </dt>
                        <dd>
                          <p className={css.lpfe001CaseStudiesList__SolveTitle}>
                            解決方法
                          </p>
                          <p className={css.lpfe001CaseStudiesList__SolveText}>
                            重要な契約・決済部分を、マイクロサービスとしてフロントエンドを切り出しました。
                          </p>
                        </dd>
                      </div>
                      <div>
                        <dt>
                          <p
                            className={css.lpfe001CaseStudiesList__ProblemTitle}
                          >
                            課題
                          </p>
                          <p
                            className={css.lpfe001CaseStudiesList__ProblemText}
                          >
                            前任者が不在で、Railsフロントエンドのノウハウが途切れ、運用が一苦労。
                          </p>
                          <p
                            className={css.lpfe001CaseStudiesList__ProblemType}
                          >
                            業種：大手口コミサービス
                          </p>
                        </dt>
                        <dd>
                          <p className={css.lpfe001CaseStudiesList__SolveTitle}>
                            解決方法
                          </p>
                          <p className={css.lpfe001CaseStudiesList__SolveText}>
                            現担当者が運用しやすいよう、リファクタリングとスタイルガイドの構築を行いました。
                          </p>
                        </dd>
                      </div>
                      <div>
                        <dt>
                          <p
                            className={css.lpfe001CaseStudiesList__ProblemTitle}
                          >
                            課題
                          </p>
                          <p
                            className={css.lpfe001CaseStudiesList__ProblemText}
                          >
                            サイトに新機能を追加したいが、フロントエンドに手を加えた際の、既存機能への影響範囲が見えず、手を出せなくなってしまった。
                          </p>
                          <p
                            className={css.lpfe001CaseStudiesList__ProblemType}
                          >
                            業種：大規模SNS
                          </p>
                        </dt>
                        <dd>
                          <p className={css.lpfe001CaseStudiesList__SolveTitle}>
                            解決方法
                          </p>
                          <p className={css.lpfe001CaseStudiesList__SolveText}>
                            現在の運用に影響のない範囲の切り分けを行い、運用を止めることなく新機能追加を可能にしました。
                          </p>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
                <div
                  className={classNames(
                    css.lpfe001Section,
                    css.isBackgroundGray,
                  )}
                  id="contact-form"
                >
                  <div className={classNames(css.lpfe001Section__Inner)}>
                    <h2 className={css.lpfe001Heading}>
                      フロントエンドの無料診断実施中
                    </h2>
                    <p className={css.lpfe001ContactText}>
                      「自社の開発効率について客観的なアドバイスがほしい」といった、
                      <br className={css.lpfe001IsPConly} />
                      フロントエンド周りのご状況について無料で診断いたします。
                      <br />
                      その他、「この課題、他社はどうしているのか聞いてみたい」といったご相談もお気軽にどうぞ。
                    </p>
                    <ContactForm
                      action="/contact/success"
                      formName="contact"
                      className={css.lpfe001ContactForm}
                    />
                  </div>
                </div>
                <div className={css.lpfe001Section}>
                  <div className={classNames(css.lpfe001Section__Inner)}>
                    <div className={css.lpfe001About}>
                      <h2 className={css.lpfe001About__Title}>会社情報</h2>
                      <div className={css.lpfe001About__MapContainer}>
                        <iframe
                          className={css.lpfe001About__Map}
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0474250531197!2d139.70494045096618!3d35.67583423009833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cbc1cadf40d%3A0xd228ce4161675f33!2z5qCq5byP5Lya56S-R2FqaS1MYWJv!5e0!3m2!1sja!2sjp!4v1569822632441!5m2!1sja!2sjp"
                          title="Access map"
                          frameBorder="0"
                          allowFullScreen
                        />
                      </div>
                      <dl className={css.lpfe001About__DetailList}>
                        <dt>会社名</dt>
                        <dd>株式会社Gaji-Labo</dd>
                        <dt>所在地</dt>
                        <dd>東京都渋谷区千駄ヶ谷3-16-3 メイゾン原宿501</dd>
                      </dl>
                      <small className={css.lpfe001About__Copyright}>
                        © Gaji-Labo Inc. 2016
                      </small>
                    </div>
                  </div>
                </div>
              </main>
              <div
                style={{ display: 'none', }}
                // eslint-disable-next-line
                dangerouslySetInnerHTML={{ __html: svgSprite }}
              />
            </>
          );
        }}
      />
    );
  }
}

export default LpFrontend001;
