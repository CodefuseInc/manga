
for i in $(find . -maxdepth 1 -mindepth 1 -type d -printf '%p\t%d\n' | sort -n -k2 | cut -f 1); do
		echo -e "\n";
		echo -e "\033[1m"+$i+"\033[0m";
		cd $i;

		VELOCITY_TEST_PACKAGES=1 meteor test-packages --velocity ./
		cd ..;
done


