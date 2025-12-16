<!doctype html>
<meta charset="utf-8" />
<title>Survey Router</title>

<script>
  // 兩份問卷網址
  const A = "https://example.com/surveyA";
  const B = "https://example.com/surveyB";

  // 50/50 隨機
  const target = (Math.random() < 0.5) ? A : B;

  // 可選：在網址帶上分組資訊，方便你之後在問卷端辨識
  const group = (target === A) ? "A" : "B";
  const withTag = target + (target.includes("?") ? "&" : "?") + "group=" + group;

  // 立刻跳轉
  location.replace(withTag);
</script>
