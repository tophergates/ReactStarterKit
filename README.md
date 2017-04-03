# REACT + REDUX PROJECT STARTER KIT
Yet another starter kit for quickly setting up a new React project with Redux.

---

## TL;DR
Clone the starter kit repository, install dependencies, and fire up the development server:

```
git clone https://github.com/tophergates/ReactStarterKit.git your-project
cd your-project
npm install
npm run serve
```

By default, your new project will be running on <http://localhost:8080>

---

# DEPENDENCIES
The project starter kit is somewhat opinionated, in that I made some assumptions about what dependencies to include based on common project objectives. If you wish, simply remove any unwanted or unnecessary dependencies from the *package.json* file before installing dependencies.

If you remove any front-end dependencies, also remove them from **VENDOR_LIBS** inside the *webpack.config.js* file.

## Front-End Dependencies
React, ReactDOM, Redux, and React-Redux are the four primary dependencies for the starter kit, however there are a few others which you may or may not find useful:

  * **Axios**: For simplifying AJAX request.
  * **Normalize CSS**: Used to normalize browser styles.
  * **React Router**: Used for routing in React. Keep if you will have to route URLs to components.
  * **Redux Promise**: Simplifies working with Promises in Redux.

## Development Dependencies
There are quite a few development dependencies, so everyone hold on to your butts and don't panic. Modules on top of modules is "modern javascript", you know, so let's jump on the JS hipster bandwagon together \m/!

  * **Webpack**: In short, Webpack is used to bundle your output JavaScript and CSS files together into single files. Out of the box, the starter kit does not use the *style-loader* and instead favors the Extract Text Webpack Plugin. *extract-text-webpack-plugin* bundles all CSS files together and outputs a single file instead of multiple CSS files. If you prefer this method, simply remove the *style-loader* from the devDependencies inside of *package.json*.

    * *Autoprefixer*
    * *CSS Loader*
    * *Extract Text Webpack Plugin*
    * *File Loader*
    * *HTML Webpack Plugin*
    * *Node SASS*
    * *PostCSS Loader*
    * *RimRaf*
    * *SASS Loader*
    * *Style Loader*
    * *Webpack Dev Server*

  * **Babel**: Babel transpiles ES2015 (aka ES6) syntax into JavaScript that browsers which have not implemented these new JavaScript language features can better understand and execute.
    * *Babel Core*
    * *Babel Loader*
    * *Babel Preset ENV*
    * *Babel Preset React*
    * *Babel Preset Stage-2*

---

# STARTER KIT USAGE
Getting started with a new project, I frequently find, can be somewhat of a headache. There are dependencies and configuration files galore. Especially when I was first introduced to things like *Webpack* and *Babel* as tooling for my React projects, the configuration steps made my eyes cross and frequently had me feeling discouraged.

Since my memory isn't getting any better as I get older, by the time I finally get around to finishing project setup, I tend to forget what project I initially intended to work on. Either that, or feel so frustrated with setup that I need to walk away.

To eliminate my own frustrations, and hopefully yours, here's how we get rolling:

**1. Clone the Starter Kit**
```
git clone https://github.com/tophergates/ReactStarterKit.git your-project
```
*Note that `your-project` is just an example project folder name, name this whatever you want*

**2. Navigate to Your Project Folder**
```
cd your-project
```

**3. Install Dependencies**
```
npm install
```

**4. Run Webpack Development Server**
```
npm run serve
```

Now you can navigate to <http://localhost:8080/> where the starter files are being served. Simply remove or alter the starter files to get started with your new project.

## Create Your Own Repository
To decouple your new project from this starter kit's original repository on Github, you should create your own repository on Github, Bitbucket, Gitlab, or a similar Git hosting platform.

Once you have created your own repository, link the cloned starter kit with your own repository and push the current version:

```
git remote set-url origin <your repository link>
git push -u origin master
```
*Make sure you replace `<your repository link>` with the URL of your actual repository.*

## Making Changes to Your Repository
Making changes to your new repository is simple if you are familiar with git:

```
git add .
git commit -m 'Your message here'
git push
```

---

# POSSIBLE IMPROVEMENTS
- [X] Include basic routing example in the starter template.
- [X] Include basic redux example in the starter template.
- [X] Abstract Redux Store configuration away from application entry point. *Thanks [donthedeveloper](https://github.com/donthedeveloper)*
- [X] Add noscript to template HTML page in case JavaScript is disabled.
- [ ] Implement Express server for client and server side routing. (isometric)

---

# MADE WITH <3
I hope this starter kit helps you streamline the process of setting up a new project. Happy coding!

<3 [tophergates](https://github.com/tophergates)
