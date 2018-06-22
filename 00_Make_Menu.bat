@echo OFF
cls
set CUR_PATH=%~dp0

set FBUILD=%~dp0\Tools\FastBuild
set FBUILD_CONFIG_WIN32=%~dp0\Tools\BuildWin32\fbuild.bff
set FBUILD_CONFIG_NATIVE=%~dp0\Tools\BuildNative\fbuild.bff

set Prj_WIN32=%~dp0\\Prj\Win32 
set Prj_ANDROID=%~dp0\\Prj\Android 

color 02
echo.
echo 	===================================
echo 	===============MENU================
echo 	===================================
echo.
echo 	  Working ON: %CUR_PATH%
echo.

echo 	0. Set up
echo 	1. Build Android


echo.
set /p opt=		Enter choose: 

if "%opt%"=="0" goto Set_up
if "%opt%"=="1" goto Build_Android


REM-------------------------Function--------------------------
:fSetup
	call npm install
	exit /b
:fBuild_Android
	call react-native run-android
	exit /b

REM-----------------------------------------------------------

REM------------ 00. Set Up.-------------
:Set_up
	call :fSetup
goto :End

REM------------ 01. Build Android-------------
:Build_Android
	call :fBuild_Android
goto :End
REM----------------------------------------


:End

pause

cd %CUR_PATH%
call 00_Make_Menu.bat

