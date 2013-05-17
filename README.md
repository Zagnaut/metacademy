**Metacademy is an application engineered and designed to facilitate quality discussion of League of Legends' metagame.**

###Main pages

**Index**
Splash page for the lovely little app. Work in progress if you ever dun saw one.
	
**Versus**
Main attraction: Tool for league of legends players to view matchups and comment on them.
   

##Todo:
####Client

* Place champion list inside of client data. No need for API.
* Find out a way to get their abilities. 
* Get player and opponent views to render correctly
* Clean up markup classes and hooks for the app bits. #metacademyapp with a few more unneeded elements 
* ProtipBoardView
* ProtipsBoard filled according to current matchup state.
  * when two champions are selected, "versus focused" protips are shown for the left ('#player') champion
    * if #player XOR #opponent has a champion, "solo focused" protips are shown for the champion. basically just general tips
    * EX:
      * Ahri v-> Annie 
      * Ahri solo

####Server

* Protips should have a parent can be upvoted and have comments
* Comments can be on protips or other comments
* Create matchup object for champions, has protips for children
  * Logic for finding protips
  

####Testing
	* Find best solution for tests you'll actually write
  * Split up client and server testing?