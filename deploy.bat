SET KEY_PATH="C:\Dev\Tools\cygwin\home\Andrii_Los\.ssh\id_rsa"
SET BUILD_PATH="ololos-backend\build\libs\"

cd %BUILD_PATH%
scp -i %KEY_PATH% ololos-0.0.1-SNAPSHOT.jar root@46.101.127.208:/mnt
ssh root@46.101.127.208 'cd /;./killAndRun.sh'
