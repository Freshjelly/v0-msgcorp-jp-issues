# MSG Corporation Website - Windows起動ガイド

このプロジェクトをWindows環境で起動するための手順書です。

## 必要な環境

- Node.js (バージョン 18 以上)
- npm または yarn
- モダンブラウザ (Chrome, Firefox, Edge, Safari)

## 起動方法

### 方法1: PowerShellスクリプトを使用（推奨）

1. フォルダーを右クリックして「PowerShell ウィンドウをここで開く」を選択
2. 以下のコマンドを実行：
```powershell
./start-windows.ps1
```

### 方法2: バッチファイルを使用

1. `start-windows.bat` ファイルをダブルクリック
2. または、コマンドプロンプトで以下を実行：
```cmd
start-windows.bat
```

### 方法3: 手動起動

1. コマンドプロンプトまたはPowerShellを管理者として実行
2. プロジェクトフォルダーに移動：
```cmd
cd path\to\v0-msgcorp-jp-issues
```
3. 依存関係をインストール（初回のみ）：
```cmd
npm install --legacy-peer-deps
```
4. 開発サーバーを起動：
```cmd
npm run dev
```

## アクセス方法

サーバーが起動したら、ブラウザで以下のアドレスにアクセスしてください：

- **ローカル**: http://localhost:3000
- **ネットワーク**: http://[あなたのIPアドレス]:3000

## トラブルシューティング

### PowerShellの実行ポリシーエラーが発生した場合

管理者としてPowerShellを開き、以下のコマンドを実行：
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### ポート3000が使用中の場合

別のポートを使用したい場合は、以下のコマンドで起動：
```cmd
npx next dev -p 3001
```

### 依存関係のエラーが発生した場合

以下のコマンドで依存関係を再インストール：
```cmd
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

## サーバーの停止

- コマンドライン: `Ctrl + C`
- PowerShell: `Ctrl + C`

## 注意事項

- 初回起動時は依存関係のインストールに時間がかかる場合があります
- ファイアウォールの警告が表示された場合は「アクセスを許可する」を選択してください
- 開発サーバーはホットリロード機能が有効になっています（ファイルを編集すると自動で反映されます）

## サポート

問題が発生した場合は、以下を確認してください：
1. Node.jsがインストールされているか
2. インターネット接続が有効か
3. ポート3000が他のアプリケーションで使用されていないか

---
MSG Corporation © 2024