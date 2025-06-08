@echo off
title MSG Corporation Website - Development Server
color 0A

echo ============================================
echo   MSG Corporation Website Server
echo ============================================
echo.
echo Starting development server...
echo This will open your default browser automatically.
echo.
echo Server will be available at:
echo   Local: http://localhost:3000
echo   Network: http://0.0.0.0:3000
echo.
echo Press Ctrl+C to stop the server
echo ============================================
echo.

cd /d "%~dp0"
npm run dev

pause