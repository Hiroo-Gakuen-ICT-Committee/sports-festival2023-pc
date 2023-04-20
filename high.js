// 5月30日の日付を作成
const targetDate = new Date('2023-05-30T00:00:00Z');

// カウントダウンを更新するための関数を定義
function updateCountdown() {
  // 現在の日付を取得
  const now = new Date();

  // 残りの時間を計算
  const timeLeft = targetDate.getTime() - now.getTime();

  // 日数を計算
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  // HTMLの要素に日数を表示
  document.getElementById('countdown').innerHTML = `${daysLeft}日！`;
}

// ページが読み込まれたときにカウントダウンを更新
updateCountdown();

// 1秒ごとにカウントダウンを更新
setInterval(updateCountdown, 1000);


