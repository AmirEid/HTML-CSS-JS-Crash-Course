#!/bin/bash
if [ $# = 0 ]; then
	echo "No argument supplied!"
else
	count=0
	while (($# > 0 && count < 3)) ; do
		echo "$1"
		((count++))
		shift
	done
fi
