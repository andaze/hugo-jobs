#!/bin/sh
#cd /root/projects/bin/
echo
pwd
echo
sudo ./hugo version
sudo rm -rf /home/dameio/public_html/hugo-baigie/deploy/public
echo
sudo ./hugo -d deploy/public
echo
git add .
git commit -m'update code'
git push origin master
#cd /home/dameio/public_html/hugo-baigie
#mkdir ashish