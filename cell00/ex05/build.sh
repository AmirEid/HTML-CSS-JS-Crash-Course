#i/bin/bash

if [ $# = 0 ]; then
	echo "ciao"
else
	for arg in "$@"; do
		mkdir "ex$arg"
	done
fi
