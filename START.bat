
@ECHO OFF

SET DIR=%~dp0
SET WEBSERVER_DIR=%DIR%servers\jQueryTrainingFileServer\
SET WEBAPI_DIR=%DIR%servers\jQueryTrainingWebService\


REM Must run as an admin
NET FILE 1>NUL 2>NUL
IF %ERRORLEVEL% EQU 0 (

    ECHO Starting web server...
    CD /d %WEBSERVER_DIR%
    START jQueryTrainingFileServer.exe
    ECHO.

    ECHO Starting web api host...
    CD /d %WEBAPI_DIR%
    START jQueryTrainingWebService.exe
    ECHO.
    
    CD %DIR%
    
) ELSE (
    ECHO.
    ECHO You must run the file as an Administrator
    ECHO.
)

