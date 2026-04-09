# **Syntropy**
```
    ____             __                        
  / ___/__  ______  / /__________  ____  __  __
  \__ \/ / / / __ \/ __/ ___/ __ \/ __ \/ / / /
 ___/ / /_/ / / / / /_/ /  / /_/ / /_/ / /_/ / 
/____/\__, /_/ /_/\__/_/   \____/ .___/\__, /  
     /____/                    /_/    /____/
```
**Syntropy** 是一個高效能的開發框架，旨在從自主 AI 代理（Agent）的執行混亂中，找出隱藏的**規律（Patterns）**。

透過利用隔離的沙箱環境與高速執行的單元，Syntropy 將不可預測的「混亂風暴」轉化為具備結構性、可觀測性且可執行的智慧。

---

## 🌀 核心哲學：從混亂到秩序 (Chaos $\rightarrow$ Pattern)

在自主 AI 的時代，代理的工作流（Agentic Workflows）往往會演變成一場「混亂風暴」——一種非決定性、不可預測的行動與輸出爆炸。

**Syntropy** 扮演著「隱形束縛（Invisible Harness）」的角色。它是增加系統內部秩序與結構的過程。我們不只是在執行程式碼；我們是在噪音中捕捉正在浮現的規律。

- **混亂 (Chaos)：** 多個無協調代理並行運作時所產生的熵（Entropy）。
- **合熵 (Syntropy)：** 結構化智慧、可預測輸出與可操作數據的湧現。

---

## 🚀 核心組件

### 💎 `SyntropySandbox` (容器)
基礎層。一個安全、短暫且隔離的環境（由 **E2B** 提供驅動力），讓代理可以在其中執行程式碼、操作檔案並與世界互動，而不會對主機系統造成任何風險。

### ✨ `Spark` (觸發者)
執行的引擎。`Sparks` 是輕量化、高速度的代理單元，專門設計用來「點燃（Ignite）」特定任務，在沙箱內執行邏輯，並從中提取結果的「規律（Pattern）」。

---

## 🛠️ 快速上手

### 前置需求
- [Node.js](https://nodejs.org/) (v18+)
- [TypeScript](https://www.typescriptlang.org/)
- [E2B API Key](https://e2b.dev/)

### 安裝步驟

```bash
# Clone 儲存庫
git clone https://github.com/pukpuklouis/syntropy.git
cd syntropy

# 安裝依賴
npm install
```

### 執行範例

1. 在根目錄建立一個 `.env` 檔案：
   ```env
   E2B_API_KEY=your_api_key_here
   ```

2. 啟動開發伺服器：
   ```bash
   npm run dev
   ```

---

## 🛠️ 開發指南

### 編譯生產版本
```bash
npm run build
```

### 執行編譯後的版本
```bash
npm start
```

---

## 📜 授權條款
MIT
