Technical Challenge

# Rick & Morty Application

## General

**I have developed the front end of the app applying the mobile first approach and the atomic design methodology. I used react, next.js, typescript and the styled components dependency.**

- Login (**I did not complete these task because of the time, we can find an example of how would we achieve it here: https://nextjs.org/docs/authentication. Also I have a connection to the mongo db database example that I would had use here: https://www.notion.so/Next-js-e1240bde3ba0497a8fd069f1d37b0ad1, inisde NEXT.JS summary > pages > api > new-metup.js**).

- The users need to be authenticated to consume the application. (**Same as last step**).

- List all character’s view (**I did not create a fav list page. I have an example of how I would have done it using the context feature of react at: https://www.notion.so/Next-js-e1240bde3ba0497a8fd069f1d37b0ad1, inside REACT refresher > Project EXAMPLE > src > store > favorites-context.js)**

- Detail character’s view (**Same as last step, I would have added the possibility to click a card and navigate using the Next.js dynamic routing functionality, https://nextjs.org/docs/routing/introduction, to open a dynamic page for each card that the user clicked.)

- 404 page (**Added the custom 404 page inside the pages folder using next.js's custom function definition, https://nextjs.org/docs/advanced-features/custom-error-page.**)

## Rules

- The frontend will be made in React with Hooks and Redux. Feel free if you want to add more JS libraries but if you do that, please, tell us in the Readme.md file why did you choose them. Design is free. (**As I mentioned before, I worked with react, next.js, typescript and styled components.**)

- The backend will be made in Express. Feel free if you want to add more JS libraries but if you do that, please, tell us in the Readme.md file why did you choose them. (**I used the server side rendering capabilities of Next.js by implementing getStaticProps. I do not know how to utilize Express, so doing this task would mean that I would have to dedicate time learning a new tool, which is not imposible, I like to confront new challenges, but I see in unecesarly here in this situation.**)

- Please, don’t use styles libraries like Bootstrap or Material. We need to know your skills and we assume the application won't be a stellar designed app. (**I have not used any styling libraries, styled components is based of SCSS plus the dynamic capabilities which js holds.**)

- Make focus on quality. We won’t care a lot if you don't finish all points, but we will care a lot the quality of what you created. (**I revised the written code before making the commit.**)

- The user information for login should be stored in a DB. Feel free to choose the DB you consider. (**Same principle as in the favorites part, I could have done the registering using the mongo db configuration of which I have and example here, https://www.notion.so/Next-js-e1240bde3ba0497a8fd069f1d37b0ad1.**)

- When a user saves characer in fav list it should be reflected on DB. Feel free to choose the DB you consider. (**Same principle as in the favorites part, I could have done the registering using the mongo db configuration of which I have and example here, https://www.notion.so/Next-js-e1240bde3ba0497a8fd069f1d37b0ad1.**)

- The application must be delivered in a repo. If you want to keep it in secret just create a fake account in GitHub. (**The link to the repo is: https://github.com/AlexBeje/haufe-challenge**)

## Extra points (optional)
These extra points are not mandatory. If you have time and desire go ahead!
- Add test. Feel free to decide how and where.
- Add a register page for new users. (**Same principle as in the favorites part, I could have done the registering using the mongo db configuration of which I have and example here, https://www.notion.so/Next-js-e1240bde3ba0497a8fd069f1d37b0ad1.**)
- Add backend pagination (**I could had implemented this feature using the Next.js getStaticProps functionality or by adding GraphQL to the project.**)
- Preload images and add a loader (**I added preloading to the font, the same principle can be added to the images**)
- Take a beer, you worked a lot!

**PS. I dedicated 8 hours to the project, so you would have to judge accordingly. I decided that going beyond that time limit would be a waste of my time and also your time, as I could've had dedicated the remaining days to develop code of which the company would benefit.**