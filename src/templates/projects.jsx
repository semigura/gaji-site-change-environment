// import React from 'react';
// import PropTypes from 'prop-types';
// import { graphql, Link } from 'gatsby';
// // TODO: After adding the tag page, remove the lower one lines and return the upper one lines
// // import { isEmpty, kebabCase } from 'lodash';
// import { isEmpty } from 'lodash';

// import showdown from 'showdown';

// import Layout from '../components/common/Layout';
// import Button from '../components/common/Button';
// import Title from '../components/common/Title';
// import PdfFileSize from '../components/common/PdfFileSize';

// import css from './Projects.module.scss';

// const Projects = props => {
//   const { data } = props;
//   const { markdownRemark: post, site } = data;
//   const title = `${post.frontmatter.title}`;
//   const url = `${site.siteMetadata.siteUrl}${post.fields.slug}`;
//   const generateExcerpt = excerptText => {
//     if (excerptText.length > 300) {
//       return `${excerptText.substr(0, 300)}…`;
//     }
//     return excerptText;
//   };
//   const description = !isEmpty(post.frontmatter.description)
//     ? post.frontmatter.description
//     : generateExcerpt(post.frontmatter.bodyBeforeSteps[0].sectionText);
//   const pageTitle = '事例紹介';
//   const breadcrumbs = [
//     {
//       to: '/case-studies',
//       title: pageTitle,
//     },
//     {
//       title: `事例 #${post.frontmatter.caseId.toString().padStart(3, 0)} ${
//         post.frontmatter.title
//       }`,
//     },
//   ];
//   const converter = new showdown.Converter();

//   return (
//     <Layout
//       {...props}
//       pageTitle={pageTitle}
//       pageUrl={url}
//       breadcrumbs={breadcrumbs}
//       ogpTitle={title}
//       ogpDescription={description}
//       ogpThumbnail={
//         post.frontmatter.thumbnail || '/uploads/default-thumbnail.png'
//       }
//       ogpType="article"
//       wrapperClassName={css.ProjectsWrapper}
//     >
//       <div className={css.Projects}>
//         <p className="CaseStudyId">
//           {`事例 #${post.frontmatter.caseId.toString().padStart(3, 0)}`}
//         </p>
//         <h1 className={css.Projects__Title}>{post.frontmatter.title}</h1>
//         {!isEmpty(post.frontmatter.clientUrl) ? (
//           <a
//             href={post.frontmatter.clientUrl}
//             className={css.Projects__ClientName}
//           >
//             {post.frontmatter.clientName}
//           </a>
//         ) : (
//           <p className={css.Projects__ClientName}>
//             {post.frontmatter.clientName}
//           </p>
//         )}
//         {!isEmpty(post.frontmatter.tags) && (
//           <p className={css.Projects__LabelList}>
//             {post.frontmatter.tags.map(tag => (
//               // TODO: After adding the tag page, remove span and return Link
//               /*
//                <Link
//                  key={tag}
//                  to={`/projects/tags/${kebabCase(tag)}`}
//                  className={css.Projects__Label}
//                >
//                  {tag}
//                </Link>
//                */
//               <span key={tag} className={css.Projects__Label}>
//                 {tag}
//               </span>
//             ))}
//           </p>
//         )}
//         {!isEmpty(post.frontmatter.eyecatch) && (
//           <img
//             src={post.frontmatter.eyecatch}
//             alt={post.frontmatter.eyecatchAlt}
//             className="ImageBasic"
//           />
//         )}
//         {post.frontmatter.bodyBeforeSteps.map(body => (
//           <div className={css.Projects__Section} key={body.sectionText}>
//             {!isEmpty(body.sectionTitle) && (
//               <h2 className="SecondTitle">{body.sectionTitle}</h2>
//             )}
//             {!isEmpty(body.summaryTitle) && !isEmpty(body.summaryText) && (
//               <div className="CaseStudySummary">
//                 {!isEmpty(body.sectionTitle) ? (
//                   <h3 className="CaseStudySummary__Title">
//                     {body.summaryTitle}
//                   </h3>
//                 ) : (
//                   <h2 className="CaseStudySummary__Title">
//                     {body.summaryTitle}
//                   </h2>
//                 )}
//                 <p>{body.summaryText}</p>
//               </div>
//             )}
//             <div
//               className={css.MD_ProjectsTextsWrapper}
//               // eslint-disable-next-line
//               dangerouslySetInnerHTML={{
//                 __html: converter.makeHtml(body.sectionText),
//               }}
//             />
//           </div>
//         ))}
//         <div className="BackgroundGray">
//           <div className="BackgroundGray__Container">
//             <ol className="Steps">
//               {post.frontmatter.steps.map(step => (
//                 <li key={step.stepNumber} className="StepText">
//                   <div className="StepText__Head">
//                     <h2 className="StepText__Title">{step.stepTitle}</h2>
//                     <span className="StepText__Label">{step.stepLabel}</span>
//                   </div>
//                   <div className="StepText__Body">
//                     {!isEmpty(step.stepBodyTitle) && (
//                       <h3 className="StepText__BodyTitle">
//                         {step.stepBodyTitle}
//                       </h3>
//                     )}
//                     <div
//                       className={css.MD_ProjectsTextsWrapper}
//                       // eslint-disable-next-line
//                       dangerouslySetInnerHTML={{
//                         __html: converter.makeHtml(step.stepBody),
//                       }}
//                     />
//                     {!isEmpty(step.stepFigureImage) && (
//                       <figure>
//                         <img
//                           src={step.stepFigureImage}
//                           alt={step.stepFigureImageAlt}
//                         />
//                         {!isEmpty(step.stepFigureImageCaption) && (
//                           <figcaption>{step.stepFigureImageCaption}</figcaption>
//                         )}
//                       </figure>
//                     )}
//                   </div>
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>
//         {!isEmpty(post.frontmatter.bodyAfterSteps[0].sectionText) && (
//           <div className={css.Projects__BodyAfterSteps}>
//             {post.frontmatter.bodyAfterSteps.map(body => (
//               <div className={css.Projects__Section} key={body.sectionText}>
//                 {!isEmpty(body.sectionTitle) && (
//                   <h2 className="SecondTitle">{body.sectionTitle}</h2>
//                 )}
//                 {!isEmpty(body.summaryTitle) && !isEmpty(body.summaryText) && (
//                   <div className="CaseStudySummary">
//                     {!isEmpty(body.sectionTitle) ? (
//                       <h3 className="CaseStudySummary__Title">
//                         {body.summaryTitle}
//                       </h3>
//                     ) : (
//                       <h2 className="CaseStudySummary__Title">
//                         {body.summaryTitle}
//                       </h2>
//                     )}
//                     <p>{body.summaryText}</p>
//                   </div>
//                 )}
//                 <div
//                   className={css.MD_ProjectsTextsWrapper}
//                   // eslint-disable-next-line
//                   dangerouslySetInnerHTML={{
//                     __html: converter.makeHtml(body.sectionText),
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//         <div className="ContactLink">
//           <div className="ContactLink__Container">
//             <p className="ContactLink__Texts">
//               {post.frontmatter.contactTextFirstLine && (
//                 <>
//                   {post.frontmatter.contactTextFirstLine}
//                   <br />
//                 </>
//               )}
//               {post.frontmatter.contactTextSecondLine && (
//                 <>{post.frontmatter.contactTextSecondLine}</>
//               )}
//             </p>
//             <Button
//               className="ContactLink__Button"
//               label="お問い合わせフォーム"
//               to="/contact/"
//             />
//             <a href="/gaji-labo_company-profile.pdf" className="ContactLink__PdfLink">
//               <img
//                 className="ContactLink__PdfIcon"
//                 src="/uploads/file.svg"
//                 alt="PDF icon"
//               />
//               会社案内PDF(
//               <PdfFileSize />
//               )もご用意しております。
//             </a>
//           </div>
//         </div>
//         {!isEmpty(post.frontmatter.relativeLinks[0].relativeLinkUrl) && (
//           <>
//             <Title className="LinkListTitle">関連リンク</Title>
//             <div className="LinkList">
//               <ul>
//                 {post.frontmatter.relativeLinks.map(relativeLink => (
//                   <li key={relativeLink.relativeLinkUrl}>
//                     <Link to={relativeLink.relativeLinkUrl}>
//                       {relativeLink.relativeLinkTitle}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </>
//         )}
//         <div className={css.Projects__FooterButtonContainer}>
//           <Button label="さらに事例を見る" to="/case-studies/" isSmall />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// Projects.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object,
//     site: PropTypes.object,
//   }).isRequired,
// };

// export default Projects;

// export const pageQuery = graphql`
//   query ProjectsByID($id: String!) {
//     site {
//       siteMetadata {
//         siteUrl
//         name
//       }
//     }
//     markdownRemark(id: { eq: $id }) {
//       html
//       fields {
//         slug
//       }
//       frontmatter {
//         caseId
//         title
//         clientName
//         clientUrl
//         description
//         thumbnail
//         tags
//         eyecatch
//         eyecatchAlt
//         bodyBeforeSteps {
//           sectionText
//           sectionTitle
//           summaryText
//           summaryTitle
//         }
//         steps {
//           stepBody
//           stepBodyTitle
//           stepFigureImage
//           stepFigureImageAlt
//           stepFigureImageCaption
//           stepLabel
//           stepTitle
//         }
//         bodyAfterSteps {
//           sectionText
//           sectionTitle
//           summaryText
//           summaryTitle
//         }
//         contactTextFirstLine
//         contactTextSecondLine
//         relativeLinks {
//           relativeLinkUrl
//           relativeLinkTitle
//         }
//       }
//     }
//   }
// `;
