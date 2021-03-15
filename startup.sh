if [ ! -d /usr/src/be/node_modules ]; then
  echo "Install dependencies..."
  cd /usr/src/be && npm install --no-bin-links
fi
cd /usr/src/be/server && nodemon -L server.js