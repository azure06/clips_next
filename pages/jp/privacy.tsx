import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { Link, makeStyles } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from 'react';
import Header from './../jp/components/header';
import Footer from './../jp/components/footer';
import { useRouter } from 'next/router';

const useStyles = makeStyles(theme => ({
  pattern: {
    zIndex: -1,
    position: 'absolute',
    top: '-250px',
    left: '0',
    width: '100%',
    height: '850px',
    transform: 'skewY(-12deg)',
    background: theme.palette.background.paper,
  },
}));

export default function Privacy(): JSX.Element {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();


  return (
    <div className={styles.container}>
      <Head>
        <title>Clips | Light. Multiple features. Runs everywhere.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={classes.pattern} />
      <main className={styles.main} style={{ zIndex: 1, marginTop: 48 }}>
        <div
          style={{ display: 'flex', flexDirection: 'column', maxWidth: 1100 }}
        >
          <h3>Clips プライバシーポリシー</h3>

          <p>
            Clips では、お客様のプライバシーを厳重に守ります。
            このプライバシーポリシーには、クリップボードアプリとその使用方法についてClipsが収集・記録する情報の種類が記載しています。
          </p>

          <p>
            その他ご不明な点や、より詳しい情報が必要な場合は、個人情報保護方針ご確認の上、お問い合わせください。
            本規約は、Clips（以下「本サービス」といいます。）を提供するにあたり、ご利用される皆様（以下「利用者」といいます。）の個人に関する情報（以下「個人情報」といいます。）を取得します。
          </p>

          <h3>第１条（適用範囲）</h3>

          <p>
            本プライバシーポリシー（以下「本ポリシー」といいます。）は、Clipsが利用者から個人情報を取得、利用及び管理するときに適用されます。
          </p>

          <h3>第２条（取得する情報）</h3>

          <p>Clips は、利用者から以下の情報を取得します。</p>
          <p>（1）連絡先</p>
          <p>（2）IPアドレス</p>
          <p>（3）閲覧したURL及び日時に関するタイムスタンプ</p>
          <p>（4）利用ブラウザの種類</p>
          <p>（5）インターネットサービスプロバイダー（ISP）</p>
          <p>（6）参照または離脱したページ</p>

          <h3>第３条（利用目的）</h3>

          <p>
            このリストを参照して、Clips
            の広告パートナー各社のプライバシーポリシーを確認することができます。
          </p>

          <p>Clipsが個人情報を収集・利用する目的は、以下のとおりです。</p>

          <p>（1）本サービスの提供・運営のため</p>
          <p>（4）本サービスに関する新機能、更新情報をお知らせするため</p>
          <p>（5）メールマガジンの送信、ダイレクトメールの送付のため</p>
          <p>（6）広告効果の分析、市場分析、マーケティングのため</p>
          <p>（8）本サービスの各種問合せ、アフターサービス対応のため</p>
          <p>（12）上記の利用目的に付随する目的</p>

          <h3>第４条（Cookieの利用）</h3>

          <p>
            Clipsは、ウェブサイト及び本サービス（以下、これらを総称して「ウェブサイト等」といいます。）のアクセス及び利用状況の分析、
            広告配信並びにウェブサイト等の利便性向上のために、ウェブサイト等にアクセスした利用者の情報通信端末に保存されるCookie等のファイル及びこれに類似する技術を取得することがあります。
            Clipsは、Cookie等と利用者の個人情報を関連付けることがあります。Clipsは、利用者の個人情報と関連付けたCookie等が利用者の個人情報であることに鑑み、当該Cookie等を本ポリシーの定めに従って管理いたします。
            また、Clipsは、Cookie等の情報を第三者が運営するデータ・マネジメント・プラットフォームに提供し、当該第三者からCookie等により収集されたウェブの閲覧履歴及びその分析結果を取得し、これらを利用者の個人データと結び付けた上で、広告配信等の目的で利用することがあります。
          </p>

          <h3>第５条（個人情報の第三者への提供）</h3>
          <h4>
            １ Clipsは、次に掲げる場合を除いて、あらかじめ利用者の同意を得ないで、取得した個人情報を第三者に提供することはありません。
          </h4>
          <p>（１）法令に基づく場合</p>
          <p>
            （２）人の生命、身体又は財産の保護のために必要がある場合であって、利用者の同意を得ることが困難であるとき。
          </p>
          <p>
            （３）公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合であって、利用者の同意を得ることが困難であるとき。
          </p>
          <p>
            （４）国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、利用者の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき。
          </p>
          <p>（５）その他法令で第三者提供の制限の例外が認められている場合</p>
          <h4>
            ２ 前項の定めにかかわらず、次に掲げる場合には、当該個人情報の提供先は第三者に該当しないものとします。
          </h4>
          <p>
            （１）Clipsが利用目的の達成に必要な範囲内において個人情報の取扱いの全部又は一部を委託することに伴って当該個人情報が提供される場合
          </p>
          <p>
            （２）合併その他の事由による事業の承継に伴って個人情報が提供される場合
          </p>
          <p>（３）第7条に定める共同利用者に対して提供される場合</p>

          <h3>第 6 条（個人情報の開示）</h3>
          <h4>
            1.
            Clipsは、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。なお、個人情報の開示に際しては、1
            件あたり 1,000 円の手数料を申し受けます。
          </h4>
          <p>
            （１）本人または第三者の生命，身体，財産その他の権利利益を害するおそれがある場合
          </p>
          <p>
            （２）Clipsの業務の適正な実施に著しい支障を及ぼすおそれがある場合
          </p>
          <p>（３）その他法令に違反することとなる場合</p>
          <h4>
            2.
            前項の定めにかかわらず，履歴情報および特性情報などの個人情報以外の情報については，原則として開示いたしません。
          </h4>

          <h3>第 7 条（個人情報の訂正および削除）</h3>

          <p>
            1.
            ユーザーは、Clipsの保有する自己の個人情報が誤った情報である場合には、Clipsが定める手続きにより、Clipに対して個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を請求することができます。
          </p>
          <p>
            2.
            Clipsは、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
          </p>
          <p>
            3.
            Clipsは、前項の規定に基づき訂正等を行った場合、または訂正等を行わない旨の決定をしたときは遅滞なく、これをユーザーに通知します。
          </p>

          <h3>第８条（本プライバシーポリシーの変更）</h3>
          <p>
            Clipsは、法令改正への対応の必要性及び事業上の必要性に応じて、本ポリシーを変更する場合があります。本ポリシーの変更を行った場合には、本ウェブサイト上に掲載します。
          </p>

          <h3>第９条（開示、訂正等の手続）</h3>
          <h4>
            １ 利用者は、本条及びClipsの関連規程に従って、Clipsに対し、個人情報保護法において認められる限度で、以下の求め又は請求を行うことができます。
          </h4>
          <p>（１）個人情報の利用目的の通知の求め</p>
          <p>（２）個人情報又は第三者提供記録の開示の請求</p>
          <p>（３）個人情報の訂正、追加又は削除の請求</p>
          <p>（４）個人情報の利用の停止の請求</p>
          <p>（５）個人情報の第三者への提供の停止の請求</p>
          <h4>
            ２ 前項の求め又は請求にあたっては、同項各号のうちいずれの請求か特定の上、本人確認のための書類（運転免許証、健康保険証、住民票の写し等）をご提出頂きます。
          </h4>
          <h4>
            ３ 第1項第1号の求め又は第2号の請求については、1件につき、1,000円の手数料をご負担頂きますのであらかじめご了承ください。
          </h4>

          <h3>第１０条（お問い合わせ）</h3>
          <p>
            本ポリシーに関するお問い合わせは、
              <Link
                href="/jp/contact"
                onClick={e => {
                  e.preventDefault();
                  router.push({
                    pathname: '/jp/contact',
                  });
                }}
              >
                お問い合わせ
              </Link>
            からお願いいたします。
          </p>

          <p>
            Clipsの利用の場合は、本プライバシーポリシーに同意するものとみなします。
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}