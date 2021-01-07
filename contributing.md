
# Contributing to WickedBlocks 

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Code Organization](#code-organization)
- [Setting Up the project locally](#setting-up-the-project-locally)
- [Submitting a Pull Request](#submitting-a-pull-request)

## Code of Conduct

We have a code of conduct you can find [here](https://github.com/michael-andreuzza/wickedblocks/blob/master/CODE_OF_CONDUCT.md) and every
contributor is expected to obey the rules therein. Any issues or PRs that don't
abide by the code of conduct may be closed.

## Code Organization

WICKEDBLOCKS, is only made with HTML, Tailwind CSS V2 and Alpine.JS. All the pages are hard coded, written one by one.

- dist
  - assets
    - images and so on.
  - css
    - blackboard.css
    - tailwind.css
    - wt.css
  - favicons
  - fonts
    - Geomanist font, Variable.
  - openGraph
  - rainbow-code
  - tailwindBrightSections
    - authentication
    - badges
    - cards
    - clients
    - footers
    - forms
    - gallery
    - grids
    - headers-center
    - headers-left
    - headers-right
    - navigation
    - pricing
  - all HTML pages.
- node_modules
- put-on-grd
- to-review
- contributing.md
- LICENSE
- package-lock.json
- package.json
- postcss.config.js
- README.md
- tailwind.config.css
- tailwind.config.js
- tailwind.config.min.js
- tailwind.min.css

**Working on your first Pull Request?** You can learn how from this _free_
series
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Setting Up the project locally

To install the project you need to have `yarn` and `node`

1.  [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone
    your fork:

    ```
    # Clone your fork
    git clone git clone https://github.com/michael-andreuzza/wickedblocks.git

    # Navigate to the newly cloned directory
    cd wickedblocks
    ```

2.  Your environment needs to be running Node v. 10
    - `.nvmrc` config exists in the repo root, specifying a v.10.x.x version
    - you can use [fnm](https://github.com/Schniz/fnm) (`fnm use`) to change
      your current node version to the one specified in `.nvmrc`
      
3.  from the root of the project: `npm` to install all dependencies
    - make sure you have latest `npm` version
    
4.  from the root of the project.
    - open any pagewith live server.

> Tip: Keep your `master` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```sh
> git remote add wickedbranch https://github.com/michael-andreuzza/wickedblocks.git
> git fetch wickedbranch
> git branch --set-wickedbranch-to=wickedbranch/master master
> ```
>
> This will add the original repository as a "remote" called "wickedbranch," then
> fetch the git information from that remote, then set your local `master`
> branch to use the upstream master branch whenever you run `git pull`. Then you
> can make all of your pull request branches based on this `master` branch.
> Whenever you want to update your version of `master`, do a regular `git pull`.


## Submitting a Pull Request

Please go through existing issues and pull requests to check if somebody else is
already working on it, we use `working on it` label to mark such issues.

Clone locally.

```
git clone https://github.com/michael-andreuzza/wickedblocks.git
cd wickedblocks
```


Thank you for taking the time to contribute! 👍
