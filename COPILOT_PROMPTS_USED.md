# COPILOT PROMPTS USED

This document contains a chronological record of all prompts sent to GitHub Copilot during the development of the portfolio website project. Each entry includes the prompt number, timestamp, and the full text of the prompt.

# EXACT PROMPT TO USE FOR CREATING SIMILAR DOCUMENTS

```
Create a markdown file named CONVERSATION_HISTORY.md that documents all prompts in our conversation. Format each entry with:
1. Sequential numbered headings (## Prompt 1, ## Prompt 2, etc.)
2. Timestamp in italics directly under each heading (*YYYY-MM-DD, HH:MM*)
3. Full prompt text on a new line after the timestamp
4. Add a brief introduction explaining that this document tracks all AI interactions chronologically

Begin the file with a descriptive title and save it to the root directory of my project.
```

## Prompt 1
*2025-04-19, 19:51*

Try run the website although there isn't any functionality i want to see the base design if there is smth to change

## Prompt 2
*2025-04-19, 19:51*

(base) sumedhpawar@MacBookAir Portfolio-Website % npm start 
npm error code ENOENT
npm error syscall open
npm error path /Users/sumedhpawar/portfolio-website/Portfolio-Website/package.json
npm error errno -2
npm error enoent Could not read package.json: Error: ENOENT: no such file or directory, open '/Users/sumedhpawar/portfolio-website/Portfolio-Website/package.json'
npm error enoent This is related to npm not being able to find a file.
npm error enoent
npm error A complete log of this run can be found in: /Users/sumedhpawar/.npm/_logs/2025-04-19T19_51_34_488Z-debug-0.log

im getting these errors try fix these so that i can view the website

## Prompt 3
*2025-04-19, 19:52*

Can you create a markdown listing all the prompts you have received and you have access to in this project, today. Call it COPILOT_PROMPTS_USED.md. Make each prompt a heading and put a timestamp date, hour, minute.

## Prompt 4
*2025-04-19, 19:53*

Can you update the? Prompts. Add is description about what this document is. And also. The heading has to just say prompt and a number. That's all. And the date stamp, the actual content has to be underneath it, so can you just do that now?

## Prompt 5
*2025-04-20, 19:54*

COPILOT_PROMPTS_USED.md that documents all prompts in our conversation. Format each entry with:
1. Sequential numbered headings (## Prompt 1, ## Prompt 2, etc.)
2. Timestamp in italics directly under each heading (*YYYY-MM-DD, HH:MM*)
3. Full prompt text on a new line after the timestamp
4. Add a brief introduction explaining that this document tracks all AI interactions chronologically

i want this to happen through out this coding session

## Prompt 6
*2025-05-11, Current Time*

okay i would like to make an portfolio website about myself so i can learn how to develop a fullstack application. the tech stack i would like to use for this project is a react for the front end, js for backend and a mongo db to handle contact forms and other such things. also throughout this coding session i would like you to save all the prompts i enter into copilot_prompts_used.md this file already exists. to start of this project i would like to work on just the front end first. could you make a simple react front end that suits a portfolio website for a university student.

## Prompt 7
*2025-05-11, Current Time*

Please continue

## Prompt 8
*2025-05-11, Current Time*

for the footer content could you change the twitter icon to the updated 'x' icon please

## Prompt 9
*2025-05-11, Current Time*

use the img i have added to the images folder for the image on the front page next to my about section

## Prompt 10
*2025-05-11, Current Time*

okay i have deleted the heic format and input a jpg

## Prompt 11
*2025-05-11, Current Time*

could you make it so that the skills section is underneath the paragraph about me

## Prompt 12
*2025-05-11, Current Time*

make the title of "My Skills" the same stylign as the "What I Offer"

## Prompt 13
*2025-05-11, Current Time*

i am getting this error

Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: /sumedhpawar/portfolio-website/Portfolio-Website/portfolio-frontend/src/components/About/About.jsx: Expected corresponding JSX closing tag for <p>. (54:10)

  52 |                 I firmly believe in collaboration and continuous learning to drive innovation and create impactful solutions. My goal is to contribute to projects that make a difference and to grow both personally and professionally in the ever-evolving tech landscape.
  53 |             </p>
> 54 |           </motion.div>
     |           ^
  55 |           
  56 |           <motion.div 
  57 |             className="skills"