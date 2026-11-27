# 北科管弦官網｜幹部交接指南

這是北科大管弦樂社的網站試行版。歷史內容取自[原 Google Sites](https://sites.google.com/ntut.org.tw/orchestra)。程式採用 Draftlab Scaffold 的 Astro Main 區塊，針對社團精簡頁型。網站內容和照片由原權利人持有，程式模板授權見 LICENSE。

## 新增一場音樂會

1. 在 [Pages CMS](https://app.pagescms.org) 登入，選取網站 repo 的 main 分支。
2. 開啟「音樂會」，新增一筆資料。填寫可辨識的演出標題，在內文列出日期、場地、曲目及報名方式。「排序」數字越大越靠前。
3. 從「海報或封面」上傳公開海報。在檔名欄使用穩定的英文名稱，這個名稱會成為演出網址的一部分。
4. 儲存後到 GitHub 的 Actions 查看 Publish orchestra website。成功後從官網音樂會列表開啟該場演出，核對海報和文字。

「歷屆幹部」採相同流程，排序填學年度。「網站頁面」可編輯介紹、申請、活動與友社連結。團員專區沿用原站權限。素材和內容會出現在公開 Git 歷史中。

## 本機與部署

使用 Node.js 24 以上，在 repo 執行 `npm ci`、`npm run dev`。正式建置使用 `npm run build`，輸出在 dist。GitHub Actions 自動讀取 Pages 網域及專案路徑。改用 Cloudflare Pages 時選 main、建置命令 npm run build、輸出 dist，設定 SITE_URL 為實際網域、SITE_BASE 為 /。

## 移交社團

移轉同一個 GitHub repo 後，在社團帳號重新確認 Pages CMS App 的存取權，從 Settings → Pages 確認新網址，再執行一次 CMS 修改，檢查 Actions 結果和正式頁面。更新社群及舊站上的連結。

### 幹部名錄與社團介紹

在「歷屆幹部」選擇學年度，於「幹部與分部長」新增成員，設定分組、職務、姓名與照片即可產生人物卡。社團介紹的本頁目錄會從內文二級標題自動建立。編輯「網站頁面 → 活動紀錄」的歷年活動圖牆清單可調整照片與順序，活動標題與內文標題一致時會連到該段紀錄。

在「網站頁面 → 社團介紹」編輯指導老師的照片與經歷，以及各月份的活動清單。活動圖牆可另外設定每張圖的目的網址。
