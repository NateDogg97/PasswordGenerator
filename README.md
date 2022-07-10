Challenge 03

With this challenge, I had many ideas and tried many different approaches. The final product is the cleanest and most efficient code I could find to successfully generate a random password.

I first added all characters into different string depending on user preference. I separated regular, special and capital characters into seperate strings, and created a seperate string to include all characters to make it a bit easier to work with.

I then wrote a series of prompts using window commands to gather data about what kind of password the user wants to generate.

I then confined the number of characters to between 8 and 128 to meet acceptance criteria. 

Next I wrote a separate function (perhaps this was unnecessary) to keep the page neat an organized. The purpose of the function  genChar() is to generate a number of random characters within the selected strings depending on the values submitted by the user.

I used code I found online that uses a for-loop addition assignment combined with the charAt function to achieve this goal.