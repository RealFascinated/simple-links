workDir=/usr/src/app

baseUrl=https://git.fascinated.cc/Fascinated/simple-links/raw/branch/master/public/
toDownload=("avatar.webp" "background.jpg" "favicon.ico")

echo "Checking if files need to be downloaded"
if [ -z "$(ls -A $workDir/public)" ]; then
  echo "Some files are missing, downloading them"
  if [ ! -w "$workDir" ]; then
    # TODO: fix this. it doesn't seem to be working?
    echo "The directory \"$workDir\" is not writeable, unable to download files. Please check your docker compose for :ro and set it to :rw"
  fi
  for item in "${toDownload[@]}"
  do
    dir=$workDir/public/$item
    if [ ! -e "$dir" ]; then
      echo "Downloading $item to directory $dir"
      wget -q -P $dir $baseUrl$item
      echo "Done"
    fi
  done
  echo "Finished downloading files!"
else
  echo "All files are already present, no need to download"
fi

echo "Starting Simple Links..."
npm start