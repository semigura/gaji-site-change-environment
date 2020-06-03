import React from 'react';
import { graphql } from 'gatsby';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import Layout from '../../components/common/Layout';

const PageList = props => {
  const { data } = props;
  const news = data.news
    ? data.news.edges.map(edge => ({
      ...edge.node.frontmatter,
      ...edge.node.fields,
      id: edge.node.id,
    }))
    : false;

  const projects = data.projects
    ? data.projects.edges.map(edge => ({
        ...edge.node.frontmatter,
        ...edge.node.fields,
      }))
    : false;

  const modelCases = data.modelCases
    ? data.modelCases.edges.map(edge => ({
        ...edge.node.frontmatter,
        ...edge.node.fields,
        id: edge.node.id,
      }))
    : false;

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

  return (
    <Layout
      isIndex
      pageTitle="全ページ一覧"
    >
      <div>
        <ul>
          <li>
            <a href="/">トップページ</a>
          </li>
          <li>
            <a href="/news/">お知らせ</a>
            <ul>
              {news.map(post => (
                <li key={post.id}>
                  <a href={`${post.slug}`}>
                    {`${post.date} ${post.title}`}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <a href="/services/">サービス案内</a>
          </li>
          <li>
            <a href="/case-studies/">事例紹介</a>
            <ul>
              {!isEmpty(projects) && (
                <>
                  <li>
                    プロジェクト
                    <ul>
                      {projects.map(post => (
                        <li key={post.id}>
                          <a href={`${post.slug}`} label={post.title}>
                            {post.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </>
              )}
              {!isEmpty(modelCases) && (
                <li>
                  モデルケース
                  <ul>
                    {modelCases.map(post => (
                      <li key={post.id}>
                        {post.date}
                        <a href={`${post.slug}`} label={post.title}>
                          {`${post.caseId} ${post.title}`}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
              {!isEmpty(output) && (
                <li>
                  アウトプット
                  <ul>
                    {output.map(post => (
                      <li key={post.id}>
                        {post.date}
                        <a href={`${post.slug}`} label={post.title}>
                          {post.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
              {!isEmpty(methods) && (
                <li>
                  メソッド
                  <ul>
                    {methods.map(post => (
                      <li key={post.id}>
                        {post.date}
                        <a href={`${post.slug}`} label={post.title}>
                          {post.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
            </ul>
          </li>
          <li>
            <a href="/about/">会社案内</a>
            <ul>
              <li>
                <a href="/about/access/">アクセス</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/contact/">お問い合わせ</a>
          </li>
          <li>
            <a href="/contact/success/">お問い合わせ完了ページ</a>
          </li>
          <li>
            <a href="/privacy/">プライバシーポリシー</a>
          </li>
          <li>
            <a href="/recruit/">採用情報</a>
            <ul>
              <li>
                <a href="/recruit/front-end-engineer/">
                  フロントエンドエンジニア
                </a>
              </li>
              <li>
                <a href="/recruit/ui-designer/">UIデザイナー</a>
              </li>
              <li>
                <a href="/recruit/information-architect/">
                  IA / 情報設計者
                </a>
              </li>
              <li>
                <a href="/recruit/contact/">採用応募フォーム</a>
              </li>
              <li>
                <a href="/recruit/contact/success/">採用応募フォーム完了ページ</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/sitemap/">サイトマップ</a>
          </li>
          <li>
            <a href="/404/">404</a>
          </li>
          <li>
            <a href="/lp/frontend_001/">LPフロントエンド001</a>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    news: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { type: { eq: "news" } }
        fields: { draft: { eq: false } }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
          }
        }
      }
    }

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
          }
        }
      }
    }

    modelCases: allMarkdownRemark(
      sort: { fields: [frontmatter___caseId], order: DESC }
      filter: {
        frontmatter: { type: { eq: "model-cases" } }
        fields: { draft: { eq: false } }
      }
      limit: 20
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            caseId
            title
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
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

PageList.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.any.isRequired,
};

export default PageList;
