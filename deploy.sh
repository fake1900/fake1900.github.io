#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:fake1900/fake1900.github.io.git master:main
