# indigotm

I am considering working with the Pokemon API. One thought I had
was to build an application to display pokemon from a selected
region. The region Selection could be on the homepage. A sort
function will sort by name, (maybe including type). The user should n
be able to select favorites which will be placed in local storage.
Another page would show the user their favorites. I’m considering
allowing the user to Build subsets of their favorites in groups of up to
6. This would make a pokemon team-building feature. A notification
could be displayed based on whether the types of pokemon on the
team were balanced. Possibly I could allow users. To make notes
about a team, or provide extra slots for pokemon to be swapped out
in the PC.
Purpose: To make a user friendly, fun, interactive pokemon web-app
using pokeAPI
Audience: Those who in the end prefer the good old days of turnbased strategy games and miss the fun of being a kid.
Data Sources: PokeAPI, localStorage, Local JSON.
Question to professor: We didn’t really cover allowing users to save
data. What api/server/etc would be a good resource to quickly setup
secure user accounts? Also: should we be using netlify for our
projects? Is so how many resources will we need to setup from
scratch? If not, what platform would you recommend? I’m trying to
mapout my project, but It could take me most of the time setting up
from scratch depending on where the starting point is

baseAPI ADDRESS
https://pokeapi.co/api/v2/

api for regionlist found in region.json
https://pokeapi.co/api/v2/region

https://pokeapi.co/api/v2/region/kanto


https://github.com/PokeAPI/pokeapi-js-wrapper
possibly use this wrapper if allowed.

https://bulbapedia.bulbagarden.net/wiki/File:LGPE_Kanto_Map.png
Region maps from bulbapedia unless found unacceptable.

sinnohPoke
https://pokeapi.co/api/v2/pokemon?limit=107&offset=386