import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { isEmpty } from 'lodash';

import showdown from 'showdown';

import Layout from '../components/common/Layout';
import Button from '../components/common/Button';
import Title from '../components/common/Title';
import PdfFileSize from '../components/common/PdfFileSize';

import css from './Output.module.scss';

const Output = (props) => {
  const { data } = props;
  const { markdownRemark: post, site } = data;
  const title = `${post.frontmatter.title}`;
  const url = `${site.siteMetadata.siteUrl}${post.fields.slug}`;
  const generateExcerpt = (excerptText) => {
    if (excerptText.length > 300) {
      return `${excerptText.substr(0, 300)}…`;
    }
    return excerptText;
  };
  const description = !isEmpty(post.frontmatter.description)
    ? post.frontmatter.description
    : generateExcerpt(post.frontmatter.introduction);
  const thumbnail = `${post.frontmatter.thumbnail}`;
  const pageTitle = '事例紹介';
  const breadcrumbs = [
    {
      to: '/case-studies',
      title: pageTitle,
    },
    {
      title: `アウトプットサンプル #${post.frontmatter.caseId
        .toString()
        .padStart(3, 0)} ${post.frontmatter.title}`,
    },
  ];
  const converter = new showdown.Converter();

  return (
    <Layout
      // eslint-disable-next-line
      {...props}
      pageTitle={pageTitle}
      breadcrumbs={breadcrumbs}
      ogpTitle={title}
      ogpDescription={description}
      ogpThumbnail={thumbnail || '/uploads/default-thumbnail.png'}
      pageUrl={url}
      ogpType="article"
      wrapperClassName={css.OutputWrapper}
    >
      <div className={css.Output}>
        <p className="CaseStudyId">
          {`アウトプットサンプル #${post.frontmatter.caseId
            .toString()
            .padStart(3, 0)}`}
        </p>
        <h1 className={css.Output__Title}>{post.frontmatter.title}</h1>
        {post.frontmatter.introduction && (
          <p className="TextSmall">{post.frontmatter.introduction}</p>
        )}
        {!isEmpty(post.frontmatter.eyecatch) && (
          <figure className={css.Output__Eyecatch}>
            <img
              src={post.frontmatter.eyecatch}
              alt={
                !isEmpty(post.frontmatter.eyecatchCaption)
                  ? ''
                  : post.frontmatter.eyecatchAlt
              }
            />
            {!isEmpty(post.frontmatter.eyecatchCaption) && (
              <figcaption>{post.frontmatter.eyecatchCaption}</figcaption>
            )}
          </figure>
        )}
        {!isEmpty(post.frontmatter.bodySection[0].title) &&
          post.frontmatter.bodySection.map((body) => (
            <div className={css.Output__Section} key={body.title}>
              <h2 className="SecondTitle">{body.title}</h2>
              <figure className="Figure">
                <img
                  src={body.image}
                  alt={!isEmpty(body.imageCaption) ? '' : body.imageAlt}
                />
                {!isEmpty(body.imageCaption) && (
                  <figcaption>{body.imageCaption}</figcaption>
                )}
              </figure>
              <div
                className={css.MD_OutputTextsWrapper}
                // eslint-disable-next-line
                dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(body.text),
                }}
              />
            </div>
          ))}
        {!isEmpty(post.frontmatter.relativeProjectLinks[0].url) && (
          <>
            <Title className="LinkListTitle">関連するプロジェクト</Title>
            <div className="LinkList">
              <ul>
                {post.frontmatter.relativeProjectLinks.map((relativeLink) => (
                  <li key={relativeLink.url}>
                    <Link to={`/case-studies/projects/${relativeLink.url}/`}>
                      {relativeLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        {!isEmpty(post.frontmatter.relativeModelCaseLinks[0].url) && (
          <>
            <Title className="LinkListTitle">関連するモデルケース</Title>
            <div className="LinkList">
              <ul>
                {post.frontmatter.relativeModelCaseLinks.map((relativeLink) => (
                  <li key={relativeLink.url}>
                    <Link to={`/case-studies/model-cases/${relativeLink.url}/`}>
                      {relativeLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        {!isEmpty(post.frontmatter.relativeOutputLinks[0].url) && (
          <>
            <Title className="LinkListTitle">
              ほかのアウトプットサンプルも見る
            </Title>
            <div className="LinkList">
              <ul>
                {post.frontmatter.relativeOutputLinks
                  .slice(0, 3)
                  .map((relativeLink) => (
                    <li key={relativeLink.url}>
                      <Link to={`/case-studies/output/${relativeLink.url}/`}>
                        {relativeLink.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}
        <div className="ContactLink">
          <div className="ContactLink__Container">
            <p className="ContactLink__Texts">
              {post.frontmatter.contactTextFirstLine && (
                <>
                  {post.frontmatter.contactTextFirstLine}
                  <br />
                </>
              )}
              {post.frontmatter.contactTextSecondLine && (
                <>{post.frontmatter.contactTextSecondLine}</>
              )}
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

Output.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    site: PropTypes.object,
  }).isRequired,
};

export default Output;

// TODO: methods のマークダウン追加時に frontmatter からコメントアウトを外す
export const pageQuery = graphql`
  query OutputByID($id: String!) {
    site {
      siteMetadata {
        siteUrl
        name
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      fields {
        slug
      }
      frontmatter {
        caseId
        title
        description
        thumbnail
        contactTextFirstLine
        contactTextSecondLine
        introduction
        #       eyecatch
        #       eyecatchAlt
        #       eyecatchCaption
        #       bodySection {
        #         title
        #         image
        #         imageAlt
        #         imageCaption
        #         text
        #       }
        #       relativeProjectLinks {
        #         url
        #         title
        #       }
        #       relativeModelCaseLinks {
        #         url
        #         title
        #       }
        #       relativeOutputLinks {
        #         url
        #         title
        #       }
      }
    }
  }
`;
