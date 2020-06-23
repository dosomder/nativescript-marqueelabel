@echo off

set SOURCE_DIR=../src
set TO_SOURCE_DIR=src
set PACK_DIR=package
set ROOT_DIR=..
set PUBLISH=--publish

call yarn install

echo Clearing /src and /package...
call node_modules/.bin/rimraf %TO_SOURCE_DIR%
call node_modules/.bin/rimraf %PACK_DIR%

rem copy src
echo Copying src...
call node_modules/.bin/ncp %SOURCE_DIR% %TO_SOURCE_DIR%

rem copy README & LICENSE to src
echo Copying README and LICENSE to /src...
call node_modules/.bin/ncp %ROOT_DIR%/LICENSE %TO_SOURCE_DIR%/LICENSE
call node_modules/.bin/ncp %ROOT_DIR%/README.md %TO_SOURCE_DIR%/README.md

rem compile package and copy files required by npm
echo Building /src...
cd %TO_SOURCE_DIR%
call node_modules/.bin/tsc
cd ..

echo Creating package...
rem create package dir
mkdir %PACK_DIR%

rem create the package
cd %PACK_DIR%
call npm pack ../%TO_SOURCE_DIR%

rem delete source directory used to create the package
cd ..
call node_modules/.bin/rimraf %TO_SOURCE_DIR%
echo Done