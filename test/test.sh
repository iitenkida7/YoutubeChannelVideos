#/bin/bash -xue

LIST=$(cd $(dirname $0); pwd)/list.txt

for URL in $(cat ${LIST}) ; do 
  RESPONSE_CODE=$(curl --head ${URL} -o /dev/null -w '%{http_code}\n' -s)
  if [ "${RESPONSE_CODE}_" != "200_" ] ;then
    echo "[ERROR]: ${URL}"
  else
    echo "[OK]: ${URL}"
  fi
done
