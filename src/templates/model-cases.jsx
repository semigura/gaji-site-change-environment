import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { isEmpty } from 'lodash';
import Layout from '../components/common/Layout';
import Button from '../components/common/Button';
import Title from '../components/common/Title';
import TextLink from '../components/common/TextLink';
import PdfFileSize from '../components/common/PdfFileSize';

import css from './ModelCases.module.scss';

const ModelCases = (props) => {
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
      title: `モデルケース #${post.frontmatter.caseId
        .toString()
        .padStart(3, 0)} ${post.frontmatter.title}`,
    },
  ];

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
      wrapperClassName={css.ModelCasesWrapper}
    >
      <div className={css.ModelCases}>
        <p className="CaseStudyId">
          {`モデルケース #${post.frontmatter.caseId.toString().padStart(3, 0)}`}
        </p>
        <h1 className={css.ModelCases__Title}>{post.frontmatter.title}</h1>
        <div className={css.MD_ModelCasesWrapper}>
          {post.frontmatter.introduction && (
            <p>{post.frontmatter.introduction}</p>
          )}
          <div className="CaseStudySummary">
            <h2 className="CaseStudySummary__Title">
              提供できるソリューション
            </h2>
            <dl className="CaseStudySummary__DetailList">
              <dt>
                <img src="/uploads/action.svg" alt="" />
                Action
              </dt>
              <dd>{post.frontmatter.summaryActionText}</dd>
              <dt>
                <img src="/uploads/result.svg" alt="" />
                Result
              </dt>
              <dd>{post.frontmatter.summaryResultText}</dd>
            </dl>
          </div>
          {post.frontmatter.modelCasesImage && (
            <img
              src={post.frontmatter.modelCasesImage}
              className="ImageBasic"
              alt={post.frontmatter.modelCasesImageAlt}
            />
          )}
          {post.frontmatter.modelCasesImageText && (
            <p>{post.frontmatter.modelCasesImageText}</p>
          )}
          {!isEmpty(post.frontmatter.samples[0].sampleImage) && (
            <div className="BackgroundGray">
              <div className="BackgroundGray__Container">
                <div className="ProductsSample">
                  <h2 className="ProductsSample__Title">
                    アウトプットサンプル
                  </h2>
                  <p className="ProductsSample__Description">
                    ※これはあくまでサンプルであるという旨の説明をひとこと入れる
                  </p>
                  <ul className="ProductsSampleList">
                    {post.frontmatter.samples.map((sample) => (
                      <li
                        className="ProductsSampleList__Item"
                        key={sample.sampleImageCaption}
                      >
                        <figure className="ProductsSampleList__Image">
                          <img
                            src={sample.sampleImage}
                            alt={sample.sampleImageAlt}
                          />
                          {!isEmpty(sample.sampleImageCaption) && (
                            <figcaption>{sample.sampleImageCaption}</figcaption>
                          )}
                        </figure>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
        {!isEmpty(post.frontmatter.pickupProject.projectDescription) && (
          <div className={css.ModelCasesPickupProjectWrapper}>
            <Title>同じソリューションで貢献したプロジェクト</Title>
            {!isEmpty(post.frontmatter.pickupProject.projectImage) && (
              <div className="ImageBasic">
                <img
                  src={post.frontmatter.pickupProject.projectImage}
                  alt={post.frontmatter.pickupProject.projectImageAlt}
                />
              </div>
            )}
            {!isEmpty(post.frontmatter.pickupProject.projectUrl) ? (
              <TextLink
                to={post.frontmatter.pickupProject.projectUrl}
                label={post.frontmatter.pickupProject.projectDescription}
              />
            ) : (
              <p className={css.ModelCases__PickupProjectDescription}>
                {post.frontmatter.pickupProject.projectDescription}
              </p>
            )}
          </div>
        )}
        {!isEmpty(post.frontmatter.relativeLinks[0].relativeLinkUrl) && (
          <>
            <Title className="LinkListTitle">関連するメソッド</Title>
            <div className="LinkList">
              <ul>
                {post.frontmatter.relativeLinks.map((relativeLink) => (
                  <li key={relativeLink.relativeLinkUrl}>
                    <Link to={relativeLink.relativeLinkUrl}>
                      {relativeLink.relativeLinkTitle}
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

ModelCases.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    site: PropTypes.object,
  }).isRequired,
};

export default ModelCases;

export const pageQuery = graphql`
  query ModelCaseByID($id: String!) {
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
        summaryActionText
        summaryResultText
        modelCasesImage
        modelCasesImageAlt
        modelCasesImageText
        samples {
          sampleImage
          sampleImageAlt
          sampleImageCaption
        }
        pickupProject {
          projectImage
          projectImageAlt
          projectDescription
          projectUrl
        }
        relativeLinks {
          relativeLinkUrl
          relativeLinkTitle
        }
      }
    }
  }
`;
