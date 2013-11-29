Markdown-preview show case in 40 minutes?
=========================================

**Markdown is cool! Meteor is cool!**

Yesterday we argued about (or actually it was a vote on our intranet) whether [markdown](http://daringfireball.net/projects/markdown/) is a good choice for editing local blog-posts (on our intranet).

I love markdown, and have used it for at least 5 years for all my local notetaking etc.

So I set out a challenge for my self:

* Can I make a showcase for it?
* Can I make it in Meteor (currently the most interesting web project out there, in my opinion)
* (Bonus) Can I make the showcase, and deploy it to the world in 40 minutes? (The time box is my daily commute to work, going by SJ-train from Uppsala to Stockholm (Sweden)

Acceptance criteria:

1. Small app with editor pane and preview pane
1. Preview pane should be instantly updated when content is changed in editor pane
1. Self contained blogpost deplyed to the meteor cloud (available to _the world_)

(yes, in markdown you write *1.* for all elemnts in a bullet list...)

Get going...
------------
`07:14` - That means I have about 36 minutes to go...

(Start googling...I know that Meteor should have markdown built in, or atlest almost built in...)

"Knivsta, next station!" (train staff in the speaker system)
------------------------------------------------------

(That means I have about 30 minutes to go)

[One of the first hits on stack overflow](http://stackoverflow.com/questions/17030845/how-does-one-actually-use-markdown-with-meteor)

    meteor add showdown

"Märsta, next station!" (train staff in the speaker system)
------------------------------------------------------

Ouch...already Märsta - that means I have 20 minutes left...

Bang! Found what I wanted:

[reactive variable to capture user input](http://stackoverflow.com/questions/17181405/reactive-variable-to-capture-user-input-meteor)

That's almost exactly what I looked for!
Will I have time to implement it?

(Almost there... but the clock says 7:48..."Next Stockholm station!")

Damn! Timebox was a little bit to short!

Need about 30 min more to...

* Go through my writing (and actually make this a blog post)
* Use more markdown syntax variants (to make my point)
* Fix basic styling (css)

_To be continued_

...

(Next morning... _I'm back_!

Let's wrap this up and deploy it!
---------------------------------

(I'll give myself another 40 minutes...I have to commute to work this day too!)

So, are there any more basic Markdown features I need to show?

Of course, images!

- Yes, you can show cute kittens in markdown...

![Cute kittens](http://images2.fanpop.com/image/photos/9700000/Adorable-lil-Kittens-cute-kittens-9781743-670-578.jpg)

And if you like you can put regular html in here, for example a link

<a href="http://www.meteor.com">Meteor homepage</a>


---------

I struggled a bit with how to get a good flow with having an initial markdown read into editor and preview pane, but ultimately it is very little code.

My current solution is to fetch my markdown file from the apps public folder at client.startup() (in Meteor that is basically a page-refresh), and to let any user paste any markdown into the editor pane, and it will instantly be translated to HTML in the preview pane.  **Please try it**, it is setup to react on every keystroke.

_I'm soon at work so I have to deploy it!_

Conclusion
==========

I think I made my case pretty well.

* Markdown is superior to write basic blog posts
* Meteor is great to get something running quick (Right now I have only used client parts of Meteor, but with another hour I can easily add both comments and login to comment if I like. And with a little bit of Meteor experience you could too, I promise!)
* Open source and all the helpful people publishing screencasts and helping on e.g. stack overflow is great!

I'll save fixing layout and code syntax highlightning for next time... (Of course, that is essential to write code centric posts. I know it can be done with e.g. highlight.js, but I don't have the time this morning)

`meteor deploy markdown-showcase.meteor.com`

If you read this blog post on that adress I have suceeded!

See ya! /Andreas




