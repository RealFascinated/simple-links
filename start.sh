echo "Checking if files need to be downloaded"
if [ -z "$(ls -A /usr/src/app/public)" ]; then
    echo "Directory is empty"
fi

echo "Starting Simple Links..."
npm start