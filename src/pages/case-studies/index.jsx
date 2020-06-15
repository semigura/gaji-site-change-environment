import { graphql, Link } from 'gatsby';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import showdown from 'showdown';
import Layout from '../../components/common/Layout';
import css from './CaseStudies.module.scss';

import Title from '../../components/common/Title';

const CaseStudies = ({ data }) => {
  const projects = data.projects
    ? data.projects.edges.map(edge => ({
        ...edge.node.frontmatter,
        ...edge.node.fields,
      }))
    : false;

  const resultsList = data.resultsList
    ? data.resultsList.edges.map(edge => ({
        ...edge.node.frontmatter,
      }))
    : false;

  const modelCases = data.modelCases.edges.map(edge => ({
    ...edge.node,
    id: edge.node.id,
  }));

  const output = data.output
    ? data.output.edges.map(edge => ({
        ...edge.node.frontmatter,
        ...edge.node.fields,
        id: edge.node.id,
      }))
    : false;

  const methods = data.methods
    ? data.methods.edges.map(edge => ({
        ...edge.node.frontmatter,
        ...edge.node.fields,
        id: edge.node.id,
      }))
    : false;

  const pageTitle = '事例紹介';
  const url = 'https://www.gaji.jp/case-studies/';
  const description =
    'チームワークをスケールさせる会社Gaji-Laboの事例やモデルケースの紹介です。';
  const breadcrumbs = [
    {
      title: pageTitle,
    },
  ];

  const generateExcerpt = excerptText => {
    if (excerptText.length > 140) {
      return `${excerptText.substr(0, 140)}…`;
    }
    return excerptText;
  };

  const converter = new showdown.Converter();

  return (
    <Layout
      isIndex
      pageTitle={pageTitle}
      pageUrl={url}
      breadcrumbs={breadcrumbs}
      ogpDescription={description}
      isHome
      ogpTitle={pageTitle}
      wrapperClassName={css.CaseStudiesWrapper}
    >
      <div className={css.CaseStudies}>
        {!isEmpty(projects) && (
          <div className={css.CaseStudies__Projects}>
            <p className="TextBasic">
              Gaji-Laboが貢献したプロジェクトの一部をご紹介します。
            </p>
            <ul className={css.CaseStudiesList}>
              {projects.map(post => (
                <li key={post.title} className={css.CaseStudiesList__Item}>
                  <Link
                    to={post.slug}
                    label={post.title}
                    className={css.CaseStudiesList__Link}
                  >
                    <img
                      src={post.thumbnail || '/uploads/default-thumbnail.png'}
                      alt={post.thumbnailAlt}
                      className={css.CaseStudiesList__Thumbnail}
                    />
                    <h2 className={css.CaseStudiesList__Title}>{post.title}</h2>
                    <p className={css.CaseStudiesList__Description}>
                      {!isEmpty(post.description)
                        ? post.description
                        : post.bodyBeforeSteps &&
                          generateExcerpt(post.bodyBeforeSteps[0].sectionText)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {!isEmpty(resultsList[0]) && (
          <div className={css.CaseStudies__ResultsList}>
            <Title className={css.CaseStudies__Title}>主な実績リスト</Title>
            <dl className="DetailList">
              {resultsList[0].results.map(result => (
                <>
                  <dt
                    // eslint-disable-next-line
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(result.title),
                    }}
                  />
                  <dd
                    // eslint-disable-next-line
                    dangerouslySetInnerHTML={{
                      __html: converter.makeHtml(result.description),
                    }}
                  />
                </>
              ))}
            </dl>
          </div>
        )}

        {!isEmpty(modelCases) && (
          <>
            <Title className={css.CaseStudies__Title}>
              こんなお悩みありませんか？
            </Title>
            <p className="TextBasic">
              お悩みと解決策をセットにしたモデルケースをご紹介します。
            </p>
            <div className="LinkList">
              <ul>
                {modelCases.map(post => (
                  <li key={post.id}>
                    <Link to={`/case-studies/model-cases/${post.slug}/`} label={post.title}>
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {!isEmpty(output) && (
          <>
            <Title className={css.CaseStudies__Title}>
              アウトプットのイメージは？
            </Title>
            <p className="TextBasic">
              様々なケースで使用してきたアウトプットの共通イメージをサンプル化しています。
            </p>
            <div className="LinkList">
              <ul>
                {output.map(post => (
                  <li key={post.id}>
                    {post.date}
                    <Link to={post.slug} label={post.title}>
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {!isEmpty(methods) && (
          <>
            <Title className={css.CaseStudies__Title}>
              どんなメソッドを活用している？
            </Title>
            <p className="TextBasic">
              スタンダードな手法からプロジェクトにそってカスタマイズしたものまで、様々なケースで活用しているメソッドを紹介します。
            </p>
            <div className="LinkList">
              <ul>
                {methods.map(post => (
                  <li key={post.id}>
                    {post.date}
                    <Link to={post.slug} label={post.title}>
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

// NOTE: Use pick up
// filter: {
//   frontmatter: {
//   type: { eq: "model-cases" }
//   caseId: { in: [x, x, x] }
//  }
// }

// NOTE: Not use pick up
// filter: {
//   frontmatter: { type: { eq: "model-cases" }}
// }

// TODO: projects のマークダウン追加時に frontmatter からコメントアウトを外す
export const pageQuery = graphql`
  query CaseStudies {
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___caseId], order: DESC }
      filter: { frontmatter: { type: { eq: "projects" } } }
      limit: 20
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
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

    resultsList: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "case-studies-results-list" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            results {
              title
              description
            }
          }
        }
      }
    }

    modelCases: allWordpressPost(
      filter: {categories: {elemMatch: {slug: {eq: "model-cases"}}}}
      limit: 20
    ) {
      edges {
        node {
          id
          path
          slug
          title
          date(formatString: "YYYY.MM.DD")
          categories {
            slug
          }
        }
      }
    }

    output: allMarkdownRemark(
      sort: { fields: [frontmatter___caseId], order: DESC }
      filter: { frontmatter: { type: { eq: "output" } } }
      limit: 20
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }

    methods: allMarkdownRemark(
      sort: { fields: [frontmatter___caseId], order: DESC }
      filter: { frontmatter: { type: { eq: "methods" } } }
      limit: 20
    ) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`;

CaseStudies.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.any.isRequired,
};

export default CaseStudies;
