import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import { graphql, Link } from 'gatsby';
import { isEmpty } from 'lodash';
import Layout from '../components/common/Layout';
import Button from '../components/common/Button';
// import Title from '../components/common/Title';
// import TextLink from '../components/common/TextLink';
import PdfFileSize from '../components/common/PdfFileSize';

import css from './ModelCases.module.scss';

const ModelCases = (props) => {
  const { data } = props;
  const { wordpressPost: post, site } = data;
  const title = `${post.title}`;
  const url = `${site.siteMetadata.siteUrl}/${String(
    post.categories[0].slug,
  )}/${post.slug}/`;
  const generateExcerpt = (excerptText) => {
    if (excerptText.length > 300) {
      return `${excerptText.substr(0, 300)}…`;
    }
    return excerptText;
  };
  const description = !isEmpty(post.acf.description)
    ? post.acf.description
    : generateExcerpt(post.acf.introduction);
  //  const thumbnail = `${post.acf.thumbnail}`;
  const pageTitle = '事例紹介';
  const breadcrumbs = [
    {
      to: '/case-studies',
      title: pageTitle,
    },
    {
      title: `モデルケース #${post.acf.case_id.toString().padStart(3, 0)} ${
        post.title
      }`,
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
      ogpThumbnail="/uploads/default-thumbnail.png"
      pageUrl={url}
      ogpType="article"
      wrapperClassName={css.ModelCasesWrapper}
    >
      <div className={css.ModelCases}>
        <p className="CaseStudyId">
          {`モデルケース #${post.acf.case_id.toString().padStart(3, 0)}`}
        </p>
        <h1 className={css.ModelCases__Title}>{post.title}</h1>
        <div className={css.MD_ModelCasesWrapper}>
          {post.acf.introduction && <p>{post.acf.introduction}</p>}
          <div className="CaseStudySummary">
            <h2 className="CaseStudySummary__Title">
              提供できるソリューション
            </h2>
            <dl className="CaseStudySummary__DetailList">
              <dt>
                <img src="/uploads/action.svg" alt="" />
                Action
              </dt>
              <dd>{post.acf.summaryActionText}</dd>
              <dt>
                <img src="/uploads/result.svg" alt="" />
                Result
              </dt>
              <dd>{post.acf.summaryResultText}</dd>
            </dl>
          </div>
          {/* post.acf.modelCasesImage && (
            <img
              src={post.acf.modelCasesImage}
              className="ImageBasic"
              alt={post.acf.modelCasesImageAlt}
            />
          ) */}
          {post.acf.modelCasesImageText && (
            <p>{post.acf.modelCasesImageText}</p>
          )}
          {/*! isEmpty(post.acf.samples[0].sampleImage) && (
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
                    {post.acf.samples.map((sample) => (
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
                          ) */}
        </div>
        {/*! isEmpty(post.acf.pickupProject.projectDescription) && (
          <div className={css.ModelCasesPickupProjectWrapper}>
            <Title>同じソリューションで貢献したプロジェクト</Title>
            {!isEmpty(post.acf.pickupProject.projectImage) && (
              <div className="ImageBasic">
                <img
                  src={post.acf.pickupProject.projectImage}
                  alt={post.acf.pickupProject.projectImageAlt}
                />
              </div>
            )}
            {!isEmpty(post.acf.pickupProject.projectUrl) ? (
              <TextLink
                to={post.acf.pickupProject.projectUrl}
                label={post.acf.pickupProject.projectDescription}
              />
            ) : (
              <p className={css.ModelCases__PickupProjectDescription}>
                {post.acf.pickupProject.projectDescription}
              </p>
            )}
          </div>
            ) */}
        {/*! isEmpty(post.acf.relativeLinks[0].relativeLinkUrl) && (
          <>
            <Title className="LinkListTitle">関連するメソッド</Title>
            <div className="LinkList">
              <ul>
                {post.acf.relativeLinks.map((relativeLink) => (
                  <li key={relativeLink.relativeLinkUrl}>
                    <Link to={relativeLink.relativeLinkUrl}>
                      {relativeLink.relativeLinkTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
                ) */}
        <div className="ContactLink">
          <div className="ContactLink__Container">
            <p className="ContactLink__Texts">
              {post.acf.contactTextFirstLine && (
                <>
                  {post.acf.contactTextFirstLine}
                  <br />
                </>
              )}
              {post.acf.contactTextSecondLine && (
                <>{post.acf.contactTextSecondLine}</>
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
    wordpressPost: PropTypes.object,
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
    wordpressPost(id: { eq: $id }) {
      id
      acf {
        case_id
        contactTextFirstLine
        contactTextSecondLine
        description
        introduction
        showContactForm
        summaryActionText
        summaryResultText
      }
      comment_status
      content
      date
      excerpt
      format
      guid
      link
      modified
      path
      ping_status
      slug
      status
      sticky
      template
      title
      type
      wordpress_id
      categories {
        name
        slug
      }
    }
  }
`;
