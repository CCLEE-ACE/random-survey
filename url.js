<!doctype html>
<html lang="zh-Hant">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Survey Router</title>
</head>
<body>
  <p>正在為你隨機分配問卷，請稍候…</p>

  <script>
    // === 把這兩個換成你的 SurveyCake 連結 ===
    const SURVEY_A = "https://www.starluxcargo.com/zh-TW";
    const SURVEY_B = "https://www.brcargo.com/NEC_WEB/Tracking/QuickTracking/Index';

    // 50/50 隨機
    const group = (Math.random() < 0.5) ? "A" : "B";
    const target = (group === "A") ? SURVEY_A : SURVEY_B;

    // 可選：在網址帶上分組資訊（方便你後續辨識/記錄）
    // SurveyCake 是否會保存此參數，取決於你問卷端有沒有用到；不影響跳轉
    const url = target + (target.includes("?") ? "&" : "?") + "ab_group=" + group;

    // 立刻跳轉
    location.replace(url);
  </script>
</body>
</html>
