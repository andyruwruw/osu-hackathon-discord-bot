# Discord XP System

The OSU Hackathon Discord bot implements an XP system to encourage community participation.

*Now before you dismiss it as another stupid Discord server XP system, hear me out.*

I'm not a fan of XP systems myself, and think they can actually damage the community if carried out poorly.

Either through the system coming of as a desparate attempt to encourage participation in a dead server, or conversations devolving into meaningless chatter to gain meaningless experience, turning it into one consequentially.

The plan would be to avoid this as best as possible, and develop it in a way that really helps reward those who want to participate.

# Table of Contents 

- [Gaining XP](#gaining-xp)
- [Gaining Levels](#gaining-levels)
- [Coding Questions](#coding-questions)
- [Cyclical Rewards](#cyclical-rewards)
- [Resources](#resources)

# Gaining XP

We're not looking to create the worlds biggest group of best friends.

We want to create a community of people who love coding. A community that wants to compete in hackathons in order to push their limits, and work on passion projects. Even better, a community that will help each other push their limits, and be there to answer questions and help when someone gets stuck.

With that being said, rewarding users with XP for messages sent would defeat that purpose. XP should instead be awarded for participation in the community we're trying to build.

Here's a list of all the things our XP system will reward users for doing and tentative cooresponding XP values:

| Activity                                        | XP Awarded |
|-------------------------------------------------|------------|
| Submitting a project to a hackathon.            | 5000       |
| Attending opening and closing livestreams.      | 500        |
| Answering member's coding questions on Discord. | 300        |
| Asking coding questions on Discord.             | 100        |
| Participation in officer icebreakers.           | 50         |
| Sending messages.                               | 5          |

*These activies and values are subject to change and any suggestions are welcome!*

It should be noted that XP is heavly weighted towards **participation in the hackathon event** and **helping others**.

While social aspects are important, I don't think they're going to ever be forcable.

**Asking questions** is rewarded. These questions should be kept to a channel and manually reviewed from time to time. Asking questions is hard and should be rewarded.

**Answering qeustions** should include an `@mention` of the question asker to recieve credit, and given an emoji reaction by the question asker to recieve credit. Of course, in the event the question asker forgets, officers leaving a reaction should qualify the answer for credit as well.

**Icebreakers** are officer posted questions meant to push community engagement, such as asking for users to send pictures of their setups. While they won't be used too often, it gives officers a way to start conversations, with rewards attatched for participation.

Sending messages is worth barely anything, and if it makes much of a difference, we can lower it further (That's why the lowest figure is `5` instead of `1`).

# Gaining Levels

XP builds until it unlocks the next level. Each level takes more and more XP to unlock the next level, making it easier to advance in the beginning, and harder as you go.

We can tailor this as we go, but I made a quick [Level XP Requirement Calculator](https://docs.google.com/spreadsheets/d/1oCHZAw6KPPEj_SigR0pz0Plpz57jOCm5vZ4ETPtpBBg/edit?usp=sharing) with a google spreadsheet. Just your regular old Algebra exponential growth function.

I think `1.165914401` seems like a good growth value, starting at `50` points for `level 1`.

| Level | XP to Next Level |
|-------|------------------|
| 1     | 50               |
| 2     | 58               |
| ...   |                  |
| 15    | 427              |
| 16    | 498              |
| ...   |                  |
| 20    | 920              |
| 21    | 1073             |
| ...   |                  |
| 30    | 4272             |
| 31    | 4981             |

This way earlier levels will be recieved quickly, but as you move forward each level will become increasingly difficult to gain.

In other servers, levels unlock privileges (like joining voice chats) and give special roles.

I can't imagine any privileges we'd prefer leaving to levels, but roles are a nice way of recognizing helpful members of our server.

We'll have roles for participation in other hackathons and such, but a general leveling up role system would look something like this:

| Role       | Required Level |
|------------|----------------|
| coder      | 5              |
| programmer | 10             |
| developer  | 15             |
| engineer   | 20             |
| hacker     | 30             |

The names are subject to discussion, but I think they should stay *thematic*, without seeming to be too *prestigious*, as if they're the value of the XP system. More on that later.

Their purpose is simply to depict who is a good person to ask questions, participates, and cares for the community.

# Coding Questions

Rewarding users for asking and answering coding questions requires a bit of *manual review*, as its best to ensure people it isn't abused for spam.

Questions will be kept in a **designated channel**, and rewarded on the spot. Later review by admins could revoke XP awarded to questions that don't qualify or were simply spam.

Answers must `@mention` the asker or **directly reply** to the message. This gives the Discord bot a way to connect questions and answers, but also enforces that answers are notified to those who asked the question!

Questions should be **reacted to with emojis** by either the **question asker** or an **admin**.

It could be possible that no one wants to ask questions, or no one has answers, but hopefully people will feel motivated to participate with a little nudge.

# Cyclical Rewards

XP systems can be broken into two groups.

## I. Permanent XP Systems

Permanent XP Systems reward users with XP that stays with them forever, increasing their *level* and I suppose *prestige*. 

More accurately they give you an account of how long the user has been active, and how much they interact in the community.

## II. Cyclical XP Systems

Cyclical XP Systems give XP that builds user's *level*, but resets on regular cycles, returning everyone to level 0.

These systems can be used to give some sense of short term competition.

## Cyclical Merch Rewards

I believe a Permanent XP System is important in order to appreciate our most active community members. While I'm not one to attribute *prestige* to high level users, because our system will be built on activity in hackathons and helping others, it give our high level users their deserved credit for being caring and helpful.

A combined cyclical system could give us a way to actually put some value on leveling up. It's no secret that XP is meaningless, but with some budget put aside for community, we could actually give community participation meaning.

Following each Hackathon our cyclical XP system would reset. Permanent XP would still be maintained, but a separate value would be reset.

At the end of the Hackathon, the top participants would then be awarded merch. Higher awards would be nice, but I think in order to avoid the mess discussed earlier of pointless spam to boost XP, it's important the rewards are small. Big enough that our biggest community members feel appreciated, but small enough that it doesn't attract flies.

Just like Hackathon prizes, these awards should be barred from officers or those who's job it is to maintain the Discord server.

Unlike cryptocurrency, rewards would give our XP real world value and offer us a way to appreciate our most active community members. This is the reason I hope answering other's questions and helping others will be worth so much XP.

# Resources

- [Discord - XP System Usage](https://discord.com/moderation/360058645954-323:-Usage-of-XP-Systems)
