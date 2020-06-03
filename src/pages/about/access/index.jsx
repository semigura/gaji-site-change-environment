import React from 'react';
import Layout from '../../../components/common/Layout';

import css from './Access.module.scss';

const Access = () => {
  const pageTitle = 'アクセス';
  const url = 'https://www.gaji.jp/about/access/';
  const description =
    'チームワークをスケールさせる会社Gaji-Laboへのアクセス情報です。';
  const breadcrumbs = [
    {
      to: '/about',
      title: '会社案内',
    },
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
      wrapperClassName={css.AccessWrapper}
    >
      <div className={css.Access}>
        <ul className={css.Access__Address}>
          <li className={css.Access__AddressText}>〒151-0051</li>
          <li className={css.Access__AddressText}>
            東京都渋谷区千駄ヶ谷3-16-3 メイゾン原宿501, 402
          </li>
        </ul>
        <div className={css.Access__MapContainer}>
          <iframe
            className={css.Access__Map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0474250531197!2d139.70494045096618!3d35.67583423009833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cbc1cadf40d%3A0xd228ce4161675f33!2z5qCq5byP5Lya56S-R2FqaS1MYWJv!5e0!3m2!1sja!2sjp!4v1569822632441!5m2!1sja!2sjp"
            title="Access map"
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <p className={css.Access__Guide}>
          建物のエントランスより入り、エレベーターで直接お部屋までお越しください。
          <br />
          夜間や休日にはエントランスが施錠されていますので、インターホンでお部屋番号を呼び出してください。
        </p>
        <h2 className="SecondTitle">交通機関とルート</h2>
        <ul className="List">
          <li className="List__item">
            北参道駅（東京メトロ副都心線）
            <br />
            2番出口より約460m、徒歩約6分
          </li>
          <li className="List__item">
            原宿駅（JR山手線）
            <br />
            竹下口より約684m、徒歩約8分
          </li>
          <li className="List__item">
            千駄ヶ谷駅 （JR総武線）
            <br />
            改札より約856m、徒歩約10分
          </li>
          <li className="List__item">
            代々木駅 （JR山手線 / 総武線）
            <br />
            西口より約1km、徒歩約11分
          </li>
          <li className="List__item">
            千駄ヶ谷小学校前バス停（都バス池86）
            <br />
            池袋行から下車の場合：約103m、徒歩約1分
            <br />
            渋谷行から下車の場合：約80m、徒歩約1分
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Access;
