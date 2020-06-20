# Node http server intro

## Quick Start

- Fork this repo. For more info about Forking in github see <https://help.github.com/en/github/getting-started-with-github/fork-a-repo> and <https://help.github.com/en/enterprise/2.13/user/articles/fork-a-repo>
- Open a terminal on your machine and navigate to the folder you use as the parent folder for all of you projects.
- Clone your github repository copy to your local machine. For more info about cloning see <https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository>
- Once you have cloned the repo on your local machine, be sure to `cd` into the project. Use `pwd` and `ls` to help confirm where you are in the terminal
- Run `npm install` to install nodemon which is defined as project dependency in `package.json`. For more info about `npm` and `npm install` See <https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/> and <https://www.w3schools.com/whatis/whatis_npm.asp>
- Run `npm run server` to execute the `server` script that is defined in `package.json`

## Documentation of the Code

All files have inline documentation in comments.

`index.js` is the starting point for reading about the code. View it next to get started. That file is commented with details about each line and function.

`appConfig.js` is a very basic intro to having configuration information in a file.  Configuration is used in `git`, `npm` and even our custom configuration for any app we build such as this one where the server hostname can be expected to change between develpment and a pulic hosting setup.

`app.js` contains our app functions.

`package.json` conains the basic project info, dependencies sucha "nodemon" and has the `server` script to allow us to easily run the app's http server.

## Files `git` Ignores

Anything that matches contents of the `.gitignore` file
See <https://github.com/github/gitignore> and <https://www.chaseadams.io/posts/my-gitignore-conventions/>

## File *You* Can Ignore

`package-lock.json`

- No need to open this file at all. It has extra configuration that is used when `npm install is executed`
- See <https://docs.npmjs.com/configuring-npm/package-locks.html> for more information
