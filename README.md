# Build your website within 5 miniuts.
Build your website with somrat theme by following this easy steps (No Coding Required)

<a href="https://www.youtube.com/watch?v=ResipmZmpDU" target="_blank" title="meghna hugo installation" rel="nofollow"><img width="100%" src="https://user-images.githubusercontent.com/37659754/70844354-4028be00-1e6a-11ea-8d84-02e9a25e7db8.png"></a>

In this tutorial we will show you to make your website live without buying any hosting and touching a single line of code. We made this tutorial based on [meghna hugo](https://github.com/themefisher/meghna-hugo) but you can setup everithing like this.

### What you need !!

1. Git acccount (Ex: Github, Gitlab etc ) . In our case we use github.
2. [Netlify](https://www.netlify.com/) account to host files and add custom domain .
3. [Forestry](https://forestry.io/) account to maintain whole project without code.


### Step 1 : Fork or Clone repository

First we will fork this [somrat](https://github.com/Somrat37/somrat) template.

### Step 2 : Add your repository in Forestry

Go to your [forestry](https://forestry.io/)  account and click on `import your site now`. declare your config.toml file [`exampleSite`] and fill up basic settings . Mark everything is done then go to configuration to change the base url . You can put any url but this have to similar as netlify . So for now put a name which you are going to put in netlify as netlify subdomain.

### Step 3 : Setup and host website with Netlify

Here comes the last step . Go to your [netlify](https://www.netlify.com/) account and click add new site . Choose your git repository to import your website in netlify .  And now you can see the forked `somrat` theme. select it and follow the steps. Then go to `site settings` for change the site name and put your subdoamin name here what you puted on forestry as base url. save it and go to `deploy` from top menu, Wait a while and click on `site preview` or just simply go to the subdomain you puted as base url. **BOOM! Your site is live.** Now you can go to forestry and add, remove or customize every setting and content.

> If you face any issue regarding the installation feel free to onen [open a new issue](https://github.com/Somrat37/somrat/issues)


## Table of Contents

- [Demo](#demo)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions)
- [Licensing](#licensing)

## Demo

**The images are only for demonstration purpose, Please don't use those images.**

[Live Preview](https://somrat.netlify.com/).

## Quick Start
Quick start options:

- Clone the repo: `git clone https://github.com/Somrat37/somrat.git`.
- [Download from Github](https://github.com/Somrat37/somrat/archive/master.zip).

## Installation
At the top we have shown an easy hugo installation. but still if you think you want to go with the traditional way then use the following commands:

```
$ git clone git@github.com:Somrat37/somrat.git
$ cd somrat-hugo/exampleSite/
$ hugo server --themesDir ../..
```


## Reporting Issues

We use GitHub Issues as the official bug tracker for the **Somrat Theme**. Please Search [existing issues](https://github.com/Somrat37/somrat/issues). It’s possible someone has already reported the same problem.
If your problem or idea is not addressed yet, [open a new issue](https://github.com/Somrat37/somrat/issues/new)

## Technical Support or Questions

If you have questions or need help integrating the product please [contact me](mailto:monnaf37@gmail.com) instead of opening an issue.

## Licensing

- Licensed under MIT (https://github.com/Somrat37/somrat/blob/master/LICENSE)