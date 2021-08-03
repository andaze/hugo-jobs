#!/bin/sh
#cd /root/projects/bin/
echo
pwd
echo
hugo version
sudo rm -rf /home/dameio/public_html/hugo-jobs/deploy/public
echo
#sudo ./hugo -d deploy/public
hugo -d deploy/public
echo
cd /home/dameio/public_html/hugo-jobs/deploy
git add --all
git commit -m'update code'
git push origin master
cd /home/dameio/public_html/hugo-jobs
#mkdir ashish
