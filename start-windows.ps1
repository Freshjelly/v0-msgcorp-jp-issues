# MSG Corporation Website - PowerShell Start Script
# PowerShellの実行ポリシーを設定
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

Write-Host "============================================" -ForegroundColor Green
Write-Host "   MSG Corporation Website Server" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "Starting development server..." -ForegroundColor Yellow
Write-Host "This will automatically open your browser." -ForegroundColor Yellow
Write-Host ""
Write-Host "Server will be available at:" -ForegroundColor Cyan
Write-Host "  Local: http://localhost:3000" -ForegroundColor White
Write-Host "  Network: http://0.0.0.0:3000" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Red
Write-Host "============================================" -ForegroundColor Green
Write-Host ""

# カレントディレクトリをスクリプトの場所に設定
Set-Location $PSScriptRoot

# 依存関係がインストールされているかチェック
if (!(Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install --legacy-peer-deps
}

# 開発サーバーを起動
npm run dev

Read-Host "Press Enter to exit"