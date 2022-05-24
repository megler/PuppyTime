# PuppyTime
Live Video with Shelter Pets

# Winner SheHacks Boston 2018
- Most Entreprenurial Hack
- Major League Hacking - AWS (Best use of AWS)
- https://devpost.com/software/puppytime

## Inspiration
3 million dogs enter shelters nationwide each year. However, less than half are adopted into new homes. Some shelter dogs may receive human interaction 3 times a day for walks, but are then left by themselves.

PuppyTime changes that!

Talking and interacting with shelter dogs improves their wellbeing and makes them more adoptable. We wanted to provide a new way to benefit shelter dogs and bring joy to the humans that chat with them.

## What it does
PuppyTime is a mobile website that enables folks to live video chat with shelter dogs and give them treats. This gives the dog more social time and builds a personal connection between the user and the dog to increase donations and adoption.

## How we built it
We built the PuppyTime mobile website with a modified bootstrap template, javascript live video, and PayPayl and PetFinder RESTful APIs. The “give a treat” button calls a RESTful service that runs a treat dispensing routine on the Arduino 101 with Grove Shield and stepper motor (written in C).

PuppyTime is running on Amazon Web Services - Route 53, CloudWatch, and S3.

## Challenges we ran into
Software to work with Arduino hardware
Cable shorts when connecting Arduino components
Learning new languages/tools

## Accomplishments that we're proud of:
- Our product works! (tested with a real shelter dog at Houndhaven in Florida)
- Working well and building each other up as a team 
- An inclusive and informative experience for our 3 first time hackathon participants

## What we learned
- How to use an Arduino 101 board 
- New languages and tools: HTML/CSS, jQuery, new APIs 
- Collaborative and fun ideation techniques

## What's next for PuppyTime
- Hook website button to Arduino board to dispense treats
- Match users with a dog at a shelter near their location so they can choose to adopt them or donate to the local shelter
- Design fun video filters as a paid feature to benefit local shelters
- Incorporate Amazon Marketplace to send donations like dog food, treats, toys, etc.
- Allow users to save their favorite furry friends and chat with them again

## Live Demo Note
- Please run as mobile in dev tools - must have working camera for tool to work. Will not render correctly unless running as mobile in dev tools.
- https://megler.github.io/PuppyTime/
