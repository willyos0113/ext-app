# ext-app application

這是一個使用 ExtJS 7.x Community Edition 建立的練習專案，採用現代 Webpack + npm 開發模式。

## 📋 專案資訊

- **框架版本**: ExtJS 7.x Community Edition
- **建立工具**: Sencha Cmd v7.9.0.35
- **開發模式**: Modern Webpack + npm
- **授權方式**: Community Edition (年收入 < $10K)

## 🚀 快速開始

### 前置需求
- Node.js (建議 14.x 或更高版本)
- Java JDK 8+ (Sencha Cmd 需要)
- npm 或 yarn

### 安裝與啟動

```bash
# 1. 複製專案
git clone [your-repo-url]
cd ext-app

# 2. 安裝依賴
npm install

# 3. 啟動開發伺服器
npm start
# 或者
npm run dev

# 4. 開啟瀏覽器
# 自動開啟 http://localhost:1962
```

### 建置正式版本
```bash
npm run build
```

## 📂 專案結構

```
ext-app/
├── app/                   # 📁 ExtJS 應用核心
│   ├── Application.js    # ⚙️  應用程式主入口
│   ├── desktop/          # 🖥️  桌面版組件
│   └── shared/           # 📤 跨平台共用組件
├── src/                  # 📁 現代 JavaScript 源碼
├── sass/                # 🎨 樣式文件
├── resources/           # 🖼️  靜態資源
├── package.json        # 📦 npm 配置
├── webpack.config.js   # ⚡ Webpack 配置  
├── app.json            # ⚙️  ExtJS 配置
└── index.html         # 🌐 HTML 入口
```

> 💡 **重點說明**: `app/` 放 ExtJS 組件，`src/` 放現代 JS 代碼

## 🛠 開發指令

```bash
# 開發模式 (熱重載)
npm start

# 建置開發版本
npm run build:dev

# 建置正式版本
npm run build

# 清理建置文件
npm run clean

# 程式碼檢查 (如果有設定)
npm run lint
```

## 🎯 功能特色

- ✅ **現代開發體驗**: Webpack 熱重載、ES6+ 支援
- ✅ **響應式設計**: 支援桌面和移動設備
- ✅ **Material Design**: 現代化 UI 主題
- ✅ **豐富組件**: 100+ 內建 UI 組件
- ✅ **數據綁定**: 強大的 MVVM 架構
- ✅ **主題系統**: 可自定義的 Sass 主題

## 📱 支援的平台

| 平台 | 版本 | 說明 |
|------|------|------|
| Chrome | 60+ | 完全支援 |
| Firefox | 55+ | 完全支援 |
| Safari | 11+ | 完全支援 |
| Edge | 15+ | 完全支援 |
| IE | 11+ | 基本支援 |

## 🔧 配置說明

### Webpack 配置
- 使用 `@sencha/ext-webpack-plugin` 整合 ExtJS
- 支援現代 JavaScript (ES6+)
- 自動化建置和優化

### ExtJS 配置
- **Toolkit**: Modern (適合現代瀏覽器)
- **Theme**: Material Design
- **Profile**: Universal (支援桌面和移動)

### 開發環境配置
```javascript
// 開發伺服器設定
devServer: {
    host: 'localhost',
    port: 1962,
    hot: true,
    open: true
}
```

## 📖 學習資源

### 官方文檔
- [ExtJS 7 文檔](https://docs.sencha.com/extjs/7.0.0/)
- [ExtJS Community Edition 指南](https://docs.sencha.com/extjs/7.0.0-CE/)

### 重要概念
1. **組件系統**: ExtJS 的核心是組件化架構
2. **數據綁定**: Model-View-ViewModel 模式
3. **佈局管理**: 自動化的 UI 佈局系統
4. **事件系統**: 強大的事件處理機制

## 🎨 自定義主題

```bash
# 編輯 Sass 變數
sass/var/Application.scss

# 重新建置主題
npm run build
```

## 🐛 常見問題

### Q: 為什麼 `sencha app watch` 不工作？
A: 本專案使用 Webpack 模式，請使用 `npm start` 代替。

### Q: 如何添加新的組件？
```javascript
// 在 src/view/ 下創建新組件
Ext.define('MyApp.view.MyComponent', {
    extend: 'Ext.panel.Panel',
    xtype: 'mycomponent',
    
    title: '我的組件',
    html: 'Hello ExtJS!'
});
```

### Q: 如何使用現代 JavaScript 語法？
```javascript
// 可以在組件中使用 ES6+ 語法
initComponent() {
    this.title = `動態標題 - ${new Date().getFullYear()}`;
    
    // 使用 async/await
    this.on('render', async () => {
        const data = await this.loadData();
        this.update(data);
    });
    
    this.callParent();
}
```

## 📄 授權說明

本專案使用 ExtJS Community Edition：
- ✅ 適用於年收入低於 $10,000 USD 的個人或公司
- ✅ 可用於商業專案
- ✅ 開發團隊少於 5 人
- 📋 詳細條款請參考 [Sencha 授權說明](https://www.sencha.com/products/extjs/communityedition/)

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

## 📞 聯絡資訊

- 專案維護者: [Your Name]
- Email: [your-email@example.com]
- 問題回報: [GitHub Issues]

---

**快樂的 ExtJS 開發！** 🎉

*最後更新: 2025-01-17*
