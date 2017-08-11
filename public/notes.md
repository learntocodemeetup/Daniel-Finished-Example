let's say the mastermind array looks like this:
["red", "indigo", "blue", "green"]

let's say that our guess is this:
["red", "yellow", "blue", "orange"]

We would expect two precise matches
and zero partial matches

Can we create a reliable algorithm to achieve this?

is "red" === "red"?
Yes it is. So let's keep a little record that we've
already checked this position

[true, false, false, false]

Let's also keep track of how many precise guesses
we have so far
Let's set it to 1

Ultimately what we want is a "feedback" array
This will contain white, black and red colours
Black will represent precise matches
Red will represent partial matches
White will represent guesses that are neither
precise or partial guesses

The feedback array will start out like this:
["white", "white", "white", "white"]

Because our first guess was precise let's make
the first position black

The feedback array now looks like this:
["black", "white", "white", "white"]

Wow, that was a lot of work for checking a single
position to see if it was a precise guess!

Let's now check what's in the second position
of our guess.

It's the colour "yellow"

Let's compare that against the original
mastermindArray

Just for reference this is the mastermindArray
and the guess array

mastermind: ["red", "indigo", "blue", "green"]
guess: ["red", "yellow", "blue", "orange"]

We check yellow against indigo.

They're not a match so there is nothing we have to do.
That was a lot easier!

While we have our two arrays fresh in our minds
let's check the colour at the third position

Oh look they're both blue, another precise match.

Because this is our third colour, let's set the third
value in our checker array to true.

It now looks like this:
[true, false, true, false]

Let's also increment our precise counter.
It is now 2 because we currently have two precise guesses.

our checker array will give us helpful information to
ensure that we are not comparing against colours at
positions that have already been accounted for

I thought of a cool feature for the Mastermind game - an option to “pre-fill” the current row with the row before, for those times where you only want to change a single option

Saves a lot of time and would make the game more enjoyable!
