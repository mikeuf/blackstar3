#!/bin/sh

date
echo Content-type: text/plain
echo
echo

echo $LOGNAME
echo $HOME
# echo $PATH
echo $LOGNAME
echo $TERM

echo "Today's date is `date +%m/%d/%y`"

name=Mike

echo "Your name is $name."

echo "Your name is $LOGNAME."
echo
echo
echo "Here are some files: `ls`"



