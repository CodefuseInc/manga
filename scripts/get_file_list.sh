cd ..
for f in $(find $1); do
  echo \'$f\',
done
cd scripts