REPOSITORY=".."
cd $REPOSITORY
git pull
npm i
cd frontend
rm -rf build
npm run build
cd ..
