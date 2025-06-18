#!/bin/bash

var="Hello World"
count=1

if [[ $var == "Hello World" ]]; then
    while [[ $count -le 10 ]]; do
        printf "\033c"
        echo "$var $count"
        count=$((count + 1))
        sleep 0.2
    done

    printf "\033c"
else
    echo "wrong :("
    exit 1
fi