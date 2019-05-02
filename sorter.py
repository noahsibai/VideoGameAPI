#!/usr/bin/env python

#
# @author: Noah Sibai
# Wrote: April 30, 2019
#

from firebase import firebase
import json
import sys

firebase = firebase.FirebaseApplication("https://videogamelist-5ed90.firebaseio.com", None)
video_games = []
not_completed = []
completed = []

def main():
    # while True:
    #     firebase.post("/games",add_new())

    result = firebase.get("/", None)
    for key,val in result["games"].items():
        video_games.append([val["title"], val["time"], val["genre"], val["completed"]])
    
    # print (video_games)
    sort()
    split()
    output()

def add_new():
    title = input("Title: ")
    time = float(input("Time: "))
    genre = input("Genre: ")
    completed = input("Competed True or False: ")
    end = input("end: ")
    if end == "y":
        sys.exit()
    return {"title":title, "time":time, "genre":genre, "completed":completed}

def sort():
    # Determine sort method
    try:
        sort_type = int(input("0:Name 1:Time 4:Genre "))
        if (sort_type == 0 or sort_type == 1 or sort_type == 4):
            video_games.sort(key=lambda game: (game[sort_type]))
        else:
            video_games.sort(key=lambda game: game[1])
    except:
        video_games.sort(key=lambda game: game[1])


def split():
    # Splits list based on Completetion Status
    for game in video_games:
        if game[3] == "True":
            completed.append(game)
        else:
            not_completed.append(game)


def output():
    # Print output of the sort to the console
    print("Not Completed")
    for game in not_completed:
        cur_game = "{0} | {1} hours | {2}".format(game[0], game[1], game[2])
        print(cur_game)

    print("\nCompleted")
    for game in completed:
        print(game[0])


if __name__ == "__main__":
    main()
