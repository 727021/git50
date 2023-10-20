# Git50 - Submitting CS50 Assignments with Git

Disclaimer: This guide is unofficial. While this guide is meant to help with submitting CS50 assignments, it is not maintained by CS50 staff.

Already have git installed and set up? Skip to [Submit Your CS50 Assignment](#submit-your-cs50-assignment).

## Installing Git

If you don't have git installed, get the download for your operating system from [https://git-scm.com/downloads](https://git-scm.com/downloads).

Once the install has finished, you may need to restart VSCode before you can use it.

Run this command to make sure it is installed correctly:
```bash
git --version
```
You should see something like the following, depending on your operating system and the version of git you installed:
```
git version 2.37.1.windows.1
```

## Setting Up Git

Once you have git installed on your machine, you need to tell git who you are. If you try to make a commit without doing this, it will fail and ask you to set up this config.

This setup only needs to be done once after installing git.

Use the following commands to set up your display name and your email. This name and email will be attached to any commits you make.

```bash
git config --global user.name "YOUR NAME HERE"
git config --global user.email "YOUR EMAIL HERE"
```

### (OPTIONAL) Keeping Your Email Address Private

Because the email in your git config is attached to any commits you make, you might not want to use your email here if you'll be commiting to any public repos on GitHub.

If you'd like to keep your email address private, follow these steps to get a noreply email address from GitHub:

1. Go to your [GitHub email settings](https://github.com/settings/emails)
2. Check the box that says _Keep my email addresses private_
3. Copy the _@users.noreply.github.com_ email address that appears below this checkbox
4. Paste your _@users.noreply.github.com_ email address into the command above to use your GitHub noreply email with git

## Learning Git

Git is an incredibly useful tool, and is used very often in software development. It can be difficult to learn, but is worth the effort it takes.

<details>
<summary>Here are some resources I recommend for learning git:</summary>

<ul>
    <li><a href="https://learngitbranching.js.org/" target="_blank">Learn Git Branching</a> - An interactive, web-based git tutorial</li>
    <li><a href="https://swcarpentry.github.io/git-novice/" target="_blank">Software Carpentry: Version Control with Git</a></li>
</ul>

(More git resources will be added here soon)
</details>

## Submit Your CS50 Assignment

You can use the following commands to submit your assignment. Below the steps are an explanation of what each command does.

Replace `USERNAME` with your GitHub username, and replace `the/branch/from/the/assignment` with the branch from the assignment's _How to Submit_ instructions (i.e. `web50/projects/2020/x/search`)

```bash
git init
git remote add origin https://github.com/me50/USERNAME.git
git switch -c the/branch/from/the/assignment
git add .
git commit -m "Add a commit message here"
git push -u origin the/branch/from/the/assignment
```

Most of these commands only need to be run the first time you push your code to GitHub. If you make changes and need to resubmit your code, the three commands below should be all you need:

```bash
git add .
git commit -m "Add a commit message here"
# Because we used the -u option before, we don't have to specify a remote and branch name again when we push.
git push
```

### Command Details

You can run `git help <command>` (i.e. `git help switch`) or check the [git docs](https://git-scm.com/docs) to get more information about different git commands. The help pages for the commands below are linked.

- [`git init`](https://git-scm.com/docs/git-init) - Creates a new empty repository on your computer.
- [`git remote add origin https://github.com/me50/USERNAME.git`](https://git-scm.com/docs/git-remote) - Adds a remote to your repository named _origin_ that points to your me50 repository on GitHub. A remote is like a shortcut for a git URL.
- [`git switch -c the/branch/from/the/assignment`](https://git-scm.com/docs/git-switch) - Creates a new branch called _the/branch/from/the/assignment_ and switches to it. Each assignment will need to be submitted to a different branch.
- [`git add .`](https://git-scm.com/docs/git-add) - Stages all of the changes in your current directory. Staged changes are what git will include when you make a commit. You can specify individual files instead of `.` if you only want to add and commit some of your changes.
- [`git commit -m "Add a commit message here"`](https://git-scm.com/docs/git-commit) - Creates a commit with all of your staged changes. A commit is like a snapshot of your code. You can create multiple commits as you work to keep track of changes made to your code over time. Only staged changes are used when committing, so make sure you run the `git add` command above before you make a commit. It's also helpful to use a short, meaningful commit message when you make a commit (something like "Finished requirement 1" is usually better than "submitted" or "commit message"), in case you need to look back at your commit history.
- [`git push -u origin the/branch/from/the/assignment`](https://git-scm.com/docs/git-push) - Pushes your committed code to the _the/branch/from/the/assignment_ branch on your _origin_ remote. The `-u` option sets up the current branch in your local repo to track the remote branch you pushed to, so you won't need to specify a remote and branch name when you push in the future. Remember that only committed changes are pushed; pushing commits to GitHub is different than just uploading your code somewhere.
