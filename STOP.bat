
@ECHO OFF

REM Must run as an admin
REM AT > NUL
NET FILE 1>NUL 2>NUL
IF %ERRORLEVEL% EQU 0 (

    taskkill /F /T /IM "jQueryTrainingFileServer*"
    taskkill /F /T /IM "jQueryTrainingWebService*"
    
    PAUSE
    
) ELSE (

    ECHO You must run the file as an Administrator
    ECHO.
    PAUSE
)

