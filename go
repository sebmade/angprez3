git reset HEAD .
git co -- .
git ls-files . --exclude-standard --others | xargs rm -rf
git co $1
