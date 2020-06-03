import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { isEmpty } from 'lodash';
import ServicesImage from '../static/images/top_service.png';
import Layout from '../components/common/Layout';
import Button from '../components/common/Button';
import TextLink from '../components/common/TextLink';
import Title from '../components/common/Title';
import ToggleText from '../components/common/ToggleText';
import Icon from '../components/common/icons/Icon';
import PdfFileSize from '../components/common/PdfFileSize';

import css from './Index.module.scss';

const IndexPage = ({ data }) => {
  const projects = data.projects
    ? data.projects.edges.map((edge) => ({
        ...edge.node.frontmatter,
        ...edge.node.fields,
      }))
    : false;

  const clients = data.indexClients
    ? data.indexClients.edges.map((edge) => ({
        ...edge.node.frontmatter,
      }))
    : false;

  // TODO: ピックアップコンテンツ追加時にコメントアウト外す
  // const pickupContents = data.indexPickupContents
  //   ? data.indexPickupContents.edges.map(edge => ({
  //       ...edge.node.frontmatter,
  //     }))
  //   : false;

  const news = data.news.edges.map((edge) => ({
    ...edge.node.frontmatter,
    ...edge.node.fields,
    id: edge.node.id,
  }));

  const url = 'https://www.gaji.jp';

  const generateExcerpt = (excerptText) => {
    if (excerptText.length > 140) {
      return `${excerptText.substr(0, 140)}…`;
    }
    return excerptText;
  };

  return (
    <Layout isHome pageUrl={url} wrapperClassName={css.IndexWrapper}>
      <div className={css.Index}>
        <div className={css.Index__KeyVisual}>
          <p className={css.Index__KeyVisualText}>
            チームワークを
            <br />
            スケールさせる
          </p>
          <p className={css.Index__Catch}>私たちは必要な「変数」です</p>
        </div>
        <div className={css.Index__Contents}>
          <ToggleText>
            <p className={css.Index__LeadText}>
              Gaji-Laboは変化や刺激を必要としているチームの「変数」となり、チームの殻をやわらかくする会社です。チームが持っているそれぞれの物差しに合わせ、生まれる価値や熱量を見つけたり膨らませたり整えたりすること。そのために影で伴走する黒子の役割が、私たちGaji-Laboの仕事です。
            </p>
          </ToggleText>
          <img
            className={css.Index__ServicesImage}
            src={ServicesImage}
            alt="提供できるサービス。explore, define, boost, apply"
          />
          <p className="TextBasic">
            Gaji-Laboのサービスはすべて、チームワークをスケールさせるための切り口です。
            何からはじめたらいいかわからない…
            というニーズにも、徹底したヒアリングで向き合い、最適な切り口をご提案いたします。
          </p>
          <div className={css.Index__ButtonContaier}>
            <Button label="提供できるサービス" to="/services/" />
          </div>

          {!isEmpty(projects) && (
            <div className={css.Index__Projects}>
              <Title className={css.Index__Title}>最近のプロジェクト</Title>
              <ul className={css.Index__ProjectsList}>
                {projects.map((post) => (
                  <li key={post.caseId} className={css.Index__ProjectsListItem}>
                    <Link
                      to={post.slug}
                      label={post.title}
                      className={css.Index__ProjectsListLink}
                    >
                      <div className={css.Index__ProjectsListHead}>
                        <img
                          src={
                            post.thumbnail || '/uploads/default-thumbnail.png'
                          }
                          alt={post.thumbnailAlt}
                          className={css.Index__ProjectsListThumbnail}
                        />
                        <p className={css.Index__ProjectsListTitle}>
                          {post.title}
                        </p>
                      </div>
                      <p className={css.Index__ProjectsListDescription}>
                        {!isEmpty(post.description)
                          ? post.description
                          : post.bodyBeforeSteps &&
                            generateExcerpt(
                              post.bodyBeforeSteps[0].sectionText,
                            )}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={css.Index__ButtonContaier}>
                <Button label="さらに事例を見る" to="/case-studies/" />
              </div>
            </div>
          )}

          {!isEmpty(clients) && (
            <div className={css.Index__Clients}>
              <Title className={css.Index__Title}>主な取引先実績</Title>
              <ul className={css.Index__ClientsList}>
                {clients[0].clients.map(
                  (client) =>
                    !isEmpty(client.name) && (
                      <li
                        className={css.Index__ClientsListItem}
                        key={client.name}
                      >
                        {!isEmpty(client.image) ? (
                          <img
                            className={css.Index__ClientsImage}
                            src={client.image}
                            alt={client.name}
                          />
                        ) : (
                          client.name
                        )}
                      </li>
                    ),
                )}
              </ul>
              <p className={css.Index__ClientsNote}>（掲載順不同）</p>
            </div>
          )}

          <div className={css.Index__ResourceSchedule}>
            <Title className={css.Index__Title}>直近のスケジュール</Title>
            <div className={css.Index__ResourceScheduleText}>
              <p className="TextBasic">
                2020年6月〜2020年8月のリソース状況です。
                <br />
                リモートワークのコミュニケーションに長けたメンバーがチームを支援いたします。​
              </p>
              <p className="TextBasic">
                お仕事のご相談やお見積り依頼など、お気軽にお問い合わせください。
                <br />
                オンラインでのヒアリングやミーティングにも対応しております。
              </p>
            </div>
            <table className="ResourceScheduleTable">
              <thead>
                <tr>
                  <th scope="col">リソース / 年月</th>
                  <th scope="col">2020/6</th>
                  <th scope="col">2020/7</th>
                  <th scope="col">2020/8</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <Icon
                      className="ResourceScheduleTable__Icon"
                      name="resource-icon-markup"
                    />
                    マークアップ
                  </th>
                  <td>
                    <Icon
                      className="ResourceScheduleTable__Status"
                      aria-label="リソース空きあり"
                      name="resource-status-available"
                    />
                  </td>
                  <td>
                    <Icon
                      className="ResourceScheduleTable__Status"
                      aria-label="リソース空きあり"
                      name="resource-status-available"
                    />
                  </td>
                  <td>
                    <Icon
                      className="ResourceScheduleTable__Status"
                      aria-label="リソース空きあり"
                      name="resource-status-available"
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <Icon
                      className="ResourceScheduleTable__Icon"
                      name="resource-icon-frontend"
                    />
                    フロントエンド
                  </th>
                  <td>
                    <Icon
                      className="ResourceScheduleTable__Status"
                      aria-label="リソース空きあり"
                      name="resource-status-available"
                    />
                  </td>
                  <td>
                    <Icon
                      className="ResourceScheduleTable__Status"
                      aria-label="リソース空きあり"
                      name="resource-status-available"
                    />
                  </td>
                  <td>
                    <Icon
                      className="ResourceScheduleTable__Status"
                      aria-label="リソース空きあり"
                      name="resource-status-available"
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <Icon
                      className="ResourceScheduleTable__Icon"
                      name="resource-icon-design-support"
                    />
                    デザイン支援
                  </th>
                  <td>
                    <Icon
                      className="ResourceScheduleTable__Status"
                      aria-label="リソース空きあり"
                      name="resource-status-available"
                    />
                  </td>
                  <td>
                    <Icon
                      className="ResourceScheduleTable__Status"
                      aria-label="リソース空きあり"
                      name="resource-status-available"
                    />
                  </td>
                  <td>
                    <Icon
                      className="ResourceScheduleTable__Status"
                      aria-label="リソース空きあり"
                      name="resource-status-available"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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

          {!isEmpty(news) && (
            <div className={css.Index__News}>
              <Title className={css.Index__Title}>お知らせ</Title>
              <ul className={css.Index__NewsList}>
                {news.map((post) => (
                  <li key={post.id} className={css.Index__NewsListItem}>
                    {post.date}
                    <TextLink
                      to={post.slug}
                      label={post.title}
                      className={css.Index__NewsListLink}
                    />
                  </li>
                ))}
              </ul>
              <TextLink
                to="/news/"
                label="過去のお知らせを見る"
                withIcon
                isRight
                className={css.Index__ShowMoreNewsLink}
              />
            </div>
          )}
          <div className="BackgroundGray">
            <div className="BackgroundGray__Container">
              <Title className={css.Index__Title}>企業メッセージ</Title>
              <p className={css.Index__Message}>
                チームワークを
                <br className={css.isSP} />
                スケールさせる
              </p>
              <p className={classNames(css.Index__Catch, css.isSmall)}>
                私たちは必要な「変数」です
              </p>
              <Button
                className={css.Index__AboutButton}
                label="会社案内を見る"
                to="/about/"
              />
            </div>
          </div>
          {/* !isEmpty(pickupContents) && (
            <div className={css.Index__PickUpContents}>
              <Title className={css.Index__Title}>ピックアップコンテンツ</Title>
              <div className={css.Index__PickUpContentsInner}>
                {pickupContents[0].pickupContents.map(pickupContent => (
                  <a
                    href={pickupContent.url}
                    key={pickupContent.url}
                    className={css.Index__PickUpContentsLink}
                  >
                    <img
                      src={pickupContent.image}
                      alt={pickupContent.imageAlt}
                      className={css.Index__PickUpContentsImage}
                    />
                    <p className={css.Index__PickUpContentsCaption}>
                      {pickupContent.caption}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ) */}
        </div>
      </div>
    </Layout>
  );
};

// TODO: projects のマークダウン追加時に frontmatter からコメントアウトを外す
export const pageQuery = graphql`
  query Home {
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___caseId], order: DESC }
      filter: {
        frontmatter: { type: { eq: "projects" } }
        fields: { draft: { eq: false } }
      }
      limit: 4
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            caseId
            description
            thumbnail
            #           thumbnailAlt
            #           bodyBeforeSteps {
            #             sectionText
            #           }
          }
        }
      }
    }

    indexClients: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "index-clients" } } }
      limit: 8
    ) {
      edges {
        node {
          id
          frontmatter {
            clients {
              name
              image
            }
          }
        }
      }
    }

    indexPickupContents: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "index-pickup-contents" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            pickupContents {
              image
              imageAlt
              url
              caption
            }
          }
        }
      }
    }

    news: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { type: { eq: "news" } }
        fields: { draft: { eq: false } }
      }
      limit: 3
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY.MM.DD")
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.any,
};

export default IndexPage;
