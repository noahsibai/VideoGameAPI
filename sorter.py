#!/usr/bin/env python

#
# @author: Noah Sibai
# Wrote: April 30, 2019
# 

video_games = [["The Adventure Pals", 10 , False, "Platformer"], ["Attack On Titan 2", 17, False, "Action-Adventure"], ["Bendy and the Ink Machine", 6, False, "Horor"], ["Crash Bandicoot N.Sane Trilogy", 14.5, False, "Platformer"], ["Darksiders Warmastered Edition", 17, False, "Action-Adventure"], ["De Blob", 8, False, "Platform-Puzzle"], ["De Blob 2", 11, False, "Platform-Puzzle"], ["Diablo III: Eternal Collection", 20.5, False, "Action RPG"], ["DragonBall Xenoverse 2", 19, False, "Fighting Game"], ["Dragon's Dogma: Dark Aisen", 37, False, "RPG"], ["Monster Boy and the Cursed Kingdom", 18.5, True, "Platformer"]]
not_completed = []
completed = []

def main():
    sort()
    split()
    output()

def sort():
    # Determine sort method
    try:
        sort_type = int(input("1:Name 2:Time 3:Genre "))
        if sort_type == 1:
            video_games.sort(key=lambda game: game[0])
        elif sort_type == 2:
            video_games.sort(key=lambda game: game[1])
        elif sort_type == 3:
            video_games.sort(key=lambda game: (game[3], game[1]))
        else:
            video_games.sort(key=lambda game: game[1])
    except:
        video_games.sort(key=lambda game: game[1])

def split():
    # Splits list based on Completetion Status
    for game in video_games:
        if game[2]:
            completed.append(game)
        else:
            not_completed.append(game)

def output():
    # Print output of the sort to the console
    print ("Not Completed")
    for game in not_completed:
        # print (game[0] + " " + str(game[1]) + " " + game[3])
        cur_game = "{0} | {1} hours | {2}".format(game[0],game[1],game[3])
        print (cur_game)

    print ("\nCompleted")
    for game in completed:
        print (game[0])

if __name__ == "__main__":
    main()
