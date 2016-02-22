#!/usr/bin/python

file = open("1QKM_receptor.pdb")

arr = []

while 1:
	line = file.readline()
	arr.append(line)

	if not line:
		break
	pass

# print arr

# search keyword in each line
def searchLine(keywords):
    for index in range(len(arr)):
        hasKeywords = True
        for i in range(len(keywords)):
            hasKeywords = hasKeywords and arr[index].find(keywords[i])>0

        if hasKeywords:
            print arr[index]
            print "line: "
            print index + 1

searchLine(["ARG", "388", " N "])