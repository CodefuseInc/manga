pwd 

cd packages/manga-core
VELOCITY_TEST_PACKAGES=1 meteor test-packages --velocity ./
pwd

cd packages/manga-users
VELOCITY_TEST_PACKAGES=1 meteor test-packages --velocity ./
pwd