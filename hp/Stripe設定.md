# Stripe 協力金 設定メモ

## Payment Link で使うリダイレクトURL

GitHub Pages で公開している場合（`https://izumicoinzoom-hash.github.io/manasemi/hp/`）のURLです。

| 用途 | URL |
|------|-----|
| **支払い完了後（success_url）** | `https://izumicoinzoom-hash.github.io/manasemi/hp/member/success.html` |
| **キャンセル時（cancel_url）** | `https://izumicoinzoom-hash.github.io/manasemi/hp/member/cancel.html` |

## Stripe ダッシュボードでの設定

1. [Stripe Dashboard](https://dashboard.stripe.com/) → **Payment Links** で新しいリンクを作成（または既存を編集）。
2. **After payment** の「Confirmation page」で **Custom** を選び、上記 success_url を入力。
3. **Customer can cancel** がある場合は、キャンセル時のリダイレクトに上記 cancel_url を入力。
4. 発行された Payment Link のURLを、会員TOP（`member/index.html`）の「協力金を支払う」ボタンの `href` に設定する。

## 追加したページ

- `member/success.html` … 支払い完了後の表示
- `member/cancel.html` … 支払いキャンセル時の表示
