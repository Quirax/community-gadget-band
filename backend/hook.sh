REPOSITORY=".."
cd $REPOSITORY
git pull
npm i
cd frontend && npm run build && cd ..