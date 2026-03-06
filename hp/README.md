# マネゼミ 公式HP（一般TOP ＋ 会員向け）

一般の方がアクセスできる**トップページ**と、会員ログイン先の**会員向けコンテンツ**（協力金・カレンダー・講座動画・活動告知・総会資料）をまとめた構成です。デザインは `site/` を参考にしています。

## 構成

| ファイル | 内容 |
|----------|------|
| `index.html` | **一般公開TOP**（マネゼミ紹介・講座内容・会員ログイン・お問い合わせへの導線） |
| `login.html` | 会員ログイン画面（認証は別途実装。送信で会員TOPへ） |
| `contact.html` | お問い合わせフォーム |
| `member/index.html` | **会員TOP**（協力金・カレンダー・YouTube・活動告知・総会資料の5ブロック） |
| `member/success.html` | Stripe 支払い完了後の表示ページ |
| `member/cancel.html` | Stripe 支払いキャンセル時の表示ページ |
| `member/master-login.html` | **マスターページ**用ログイン（コード入力） |
| `member/master.html` | マスターページ（カレンダー・動画・告知の編集・data.js ダウンロード） |
| `member/master-config.js` | マスターページのアクセスコード（運用時に変更すること） |

Stripe の Payment Link で **success_url** に `member/success.html`、**cancel_url** に `member/cancel.html` の絶対URLを指定してください。詳細は **`Stripe設定.md`** を参照。

## 会員TOPの5コンテンツ

1. **運営のための協力金** … 説明文 ＋ Stripe への誘導ボタン（`#` を Payment Link URL に差し替え）
2. **年間カレンダー** … オープンゼミ・オリエンテーション・第1～7講・志心の会・総会の一覧表
3. **直近の講座動画** … YouTube サムネイル＋リンク（動画ID・タイトルを差し替え）
4. **直近の活動告知** … カード形式の告知（日付・タイトル・概要を編集）
5. **総会資料** … 総会資料ポータル（https://izumicoinzoom-hash.github.io/manasemi/sokai/）へのリンク

## マスターページ（編集・保存）

会員TOPのカレンダー・講座動画・活動告知は **data.js** で管理されています。**master.html** からフォームで編集し、「data.js を保存」でファイルをダウンロードして `member/data.js` を上書きできます。

- アクセス: **member/master.html**（未ログイン時は **member/master-login.html** にリダイレクト）
- ログイン: **master-login.html** でコードを入力。コードは **master-config.js** の `MANASEMI_MASTER_CODE` で設定。運用時に必ず変更してください。

## 画像

- 一般TOPのヒーロー背景: `images/hero-background.png` を配置してください（`../site/images/` からコピー可）。
- 未配置の場合はネイビー単色で表示されます。

## ローカルで確認

`hp` フォルダをドキュメントルートにしてサーバーを起動してください。

```powershell
cd hp
python -m http.server 8888
```

ブラウザで http://localhost:8888/ を開き、TOP → 会員ログイン → 会員TOP の流れを確認できます。

## 制作・開発メモ

詳細な要件・フェーズ・プロンプト例は **`../制作過程開発.md`** を参照してください。
