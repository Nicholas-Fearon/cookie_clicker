# cookie_clicker

This is a cookie clicker game where you click the cookie to earn enough to buy upgrades. You can hover over the upgrade buttons to see what each upgrade provides. If you close your browser, your game will remain where you left off when you return, so none of your progress will be lost.

I have implemented all the actions required from the user story. My code is organised and reusable, using functions and event listeners to handle user interactions. I have a setInterval that increments the cookie count and includes relevant game information. I've also used local storage to save the user's game state, so it can be restored when they return. Additionally, I fetch upgrade data from the provided API ("https://cookie-upgrade-api.vercel.app/api/upgrades").

To enhance the user experience, I’ve added different sound effects for purchasing items, clicking the cookie, resetting the game, and when there aren’t enough cookies for a transaction. I’ve used try/catch to handle errors. You can also hover over the buttons to see what each upgrade offers.

🏹 Consolidate upgrade management by managing all upgrades in a single function.
🏹 Improve UX with animations, sound effects, or other visual effects.
🏹 Fantastic use of README to provide important information such as a description of the project, how to deploy and other app information.

🏹 Create a menu for users to adjust game options like sound effects or display preferences.
