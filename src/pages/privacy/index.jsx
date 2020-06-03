import React from 'react';
import Layout from '../../components/common/Layout';

import css from './Privacy.module.scss';

const PrivacyPage = () => {
  const pageTitle = 'プライバシーポリシー';
  const url = 'https://www.gaji.jp/privacy/';
  const description =
    'チームワークをスケールさせる会社Gaji-Laboのプライバシーポリシーです。';
  const breadcrumbs = [
    {
      title: pageTitle,
    },
  ];

  return (
    <Layout
      isIndex
      pageTitle={pageTitle}
      pageUrl={url}
      breadcrumbs={breadcrumbs}
      ogpDescription={description}
      ogpTitle={pageTitle}
      wrapperClassName={css.PrivacyWrapper}
    >
      <div className={css.Privacy}>
        <p className="TextBasic">
          株式会社Gaji-Labo（以下「当社」という）は、ウェブサイトおよびウェブアプリケーションの設計・開発・コンサルティング事業を中心とした事業活動を行っています。
        </p>
        <p className="TextBasic">
          当社は企業活動及び社会貢献の使命達成のため、企業や個人の方々および当社従業員からお預かりした個人情報は、その取り扱いに関しまして本個人情報保護方針（プライバシーポリシー）を定め、厳正な管理のもとでその責務を履行してまいります。
        </p>
        <h2 className="SecondTitle">当社方針</h2>
        <ol className={css.Privacy__OrderedList}>
          <li>
            当社は、事業遂行のため、利用目的を明確化した上で、適切な方法での取得、利用、提供を行うとともに、取得した個人情報は利用目的の範囲内の利用とし、目的外の利用を行わない様に措置を講じます。
          </li>
          <li>
            当社は、取り扱う個人情報の全てにおき個人情報の取り扱いに関する法令、国が定める指針及びその他の規範を遵守いたします。また、お預かりした個人情報の一部又は全部を委託する場合は、管理水準の基準を満たした企業及び者を選定し、契約を行い適切な措置と管理を講じます。
          </li>
          <li>
            当社は、個人情報への不正なアクセスをはじめ，紛失、改ざん、漏洩、破壊などの危険な状況に対し十分に安全な防止管理及び対策を行い、是正措置を講じます。
          </li>
          <li>
            当社は個人情報をお預かりしました本人からの個人情報の開示、訂正、削除。利用停止や変更などのご要請にお答えします。
          </li>
        </ol>
        <h2 className="SecondTitle">
          個人情報のお取り扱いについて（「個人情報保護法」に基づく公表事項）
        </h2>
        <div className={css.Privacy__Detail}>
          <h3 className="ThirdTitle">
            1. 個人情報取り扱い事業者の名称と個人情報保護管理者
          </h3>
          <p>
            株式会社Gaji-Labo
            <br />
            代表取締役 原田 直貴　連絡先：privacy@gaji.jp
          </p>
          <h3 className="ThirdTitle">2. 共同利用について</h3>
          <p>
            当社は、3.に掲載される利用目的のために、個人情報を弊社及び弊社関連企業内で共同利用させていただく場合がございます。この場合、個人情報の管理について、当社が責任をもって対応いたします。
          </p>
          <h3 className="ThirdTitle">
            3. 個人情報の利用目的（開示対象個人情報）
          </h3>
          <p>
            直接ご本人様より取得させていただくもので、当社で保有している個人情報を、以下の目的に利用いたします。
          </p>
          <ul className="List">
            <li className="List__item">サービスの運営業務</li>
            <li className="List__item">お問い合わせ及びご相談などの対応</li>
            <li className="List__item">採用業務</li>
            <li className="List__item">人事労務管理業務</li>
            <li className="List__item">従業者にかかる業務</li>
          </ul>
          <h3 className="ThirdTitle">
            4.直接ご本人から取得させていただく、以外の個人情報について（非開示情報）
          </h3>
          <p>
            ご本人自身から直接ではない方法で取得した情報と利用目的は以下の通りです。
          </p>
          <p>
            当社のお客様から業務でお預かりしている個人情報は適法取得されたものとし取り扱います。
          </p>
          <ul className="List">
            <li className="List__item">当社のお客様から、委託を受けたデータ</li>
            <li className="List__item">
              市販の名簿から記載しホームページで氏名のみを公開しているデータ
            </li>
          </ul>
          <h3 className="ThirdTitle">5.アクセス解析ツールについて</h3>
          <p>
            当サイトでは、サービス向上のため Google アナリティクス
            を利用してサイトの計測を行っております。
          </p>
          <p>
            Google アナリティクス はトラフィックデータの収集のために Cookie
            を使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          </p>
          <p>
            この規約に関して、詳しくは
            <a href="https://www.google.com/analytics/terms/jp.html">
              Google アナリティクス利用規約
            </a>
            をご確認ください。
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;
