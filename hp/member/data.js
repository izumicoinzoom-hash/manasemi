/**
 * マネゼミ 会員TOP マスターデータ
 * このファイルを編集すると、会員TOPの「年間カレンダー」「直近の講座動画」「直近の活動告知」が自動で更新されます。
 * 保存後、会員TOP（index.html）を再読み込みしてご確認ください。
 */

window.MANASEMI_DATA = {
  // 年間カレンダー（月・行事・日付・会場）
  calendar: [
    { month: "3月", event: "オープンゼミ（開始）", date: "—", venue: "—" },
    { month: "4月", event: "オリエンテーション", date: "—", venue: "—" },
    { month: "5月", event: "第1講", date: "—", venue: "—" },
    { month: "6月", event: "第2講", date: "—", venue: "—" },
    { month: "7月", event: "第3講", date: "—", venue: "—" },
    { month: "8月", event: "第4講", date: "—", venue: "—" },
    { month: "9月", event: "第5講", date: "—", venue: "—" },
    { month: "10月", event: "第6講", date: "—", venue: "—" },
    { month: "11月", event: "第7講", date: "—", venue: "—" },
    { month: "—", event: "志心の会 … 全体例会", date: "—", venue: "—" },
    { month: "—", event: "総会（年度に応じて実施）", date: "—", venue: "—" }
  ],

  // 直近の講座動画（YouTube）。先頭が一番上に表示。videoId は YouTube の動画ID（例: dQw4w9WgXcQ）
  youtube: [
    { videoId: "dQw4w9WgXcQ", title: "【サンプル】直近講座タイトル（動画ID・タイトル・公開日を差し替えてください）", published: "YYYY/MM/DD" }
  ],

  // 直近の活動告知（新しいものが上）
  announcements: [
    { date: "2026/03/XX", title: "志心の会 全体例会のご案内", body: "〇月〇日（〇）に全体例会を予定しています。会場・時間は追ってご連絡します。" },
    { date: "2026/02/XX", title: "総会資料の公開", body: "2026年度総会の資料を会員向けに公開しました。下記「総会資料」からご確認ください。" }
  ]
};
