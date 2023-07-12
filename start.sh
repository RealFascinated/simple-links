if [ -z "$(ls -A /usr/src/app/public)" ]; then
    echo "Directory is empty"
fi

node start