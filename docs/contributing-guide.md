# Contributing Guide

Can I contribute to this repo? Of course! With pleasure! Here is some guides might useful.

## Table of Contents

1. [General Development Flow](#general-development-flow)
2. [Creating a Branch](#creating-a-branch)
3. [Creating a Merge Request](#creating-a-merge-request)
4. [Coding Convention](#coding-convention)
5. [Reviewer Guide](#reviewer-guide)

## General Development Flow

Well, we believe that you already know about what a coder should do in a development process.

After you have been assigned with a task (or maybe just something you want to do):

1. Create a new branch. How should I name it? Any criteria of branch? More explanation in [Branch section](#creating-a-branch).
2. Make a working, clean, and efficient codes. There are some convention you should follow. Please check [Frontend Coding Convention guide](coding-convention.md) for more info.
3. Commit and push with a descriptive commit message. Actually, it is necessary for you to make a descriptive commit message so other developers can understand what you have done.
4. Create a Merge Request from your branch. More about it is in [Merge Request section](#creating-a-merge-request).
5. If you are done with your code, before it is tested by QA, your code should pass a Code Review phase. You can check what will be checked by a reviewer in [Reviewer section](#reviewer-guide).
6. After your code passed review phase and you have no more addition from the reviewer. It good to be tested by QA. Just tell them that it is ready to QA. Your code should be pushed to Staging in order to be tested. For now, plase ask your Squad leader to do it.
7. After being tested and no more bugs, your MR is ready to be merged as well as it will be deployed to production.
8. Before being deployed to production, it is necessary to make sure that all dependencies are ready first. Example, if your task is creating a feature and it needs some APIs from Backend, then you shold make sure that the APIs is ready is production.
9. If your code has been deployed in production, congrats. Give it a test, make sure it is running.

> An important note: you MUST make sure that there is no warning in console when you push your codes. The pushed code must be in a working state and warning free.

## Creating a Branch

Currently we have one default and protected branch, which is `master` branch. As stated that it is protected, then you should create a new branch for each development process. If you are executing a new task, it must on a new branch. A new branch should branch from the `master`.

There are several classification of branch, those are used to quickly determine what is the purpose of the branch. Here they are:

- `feature/[feature-name]` -> Indicates a feature development, such as a completely new feature or updating a current one.
- `improvement/[improvement-name]` -> Indicates an improvement development, such as refactoring, enchancing, clean up codes.
- `bug/[bug-name]` -> Indicates a fixing of bug(s).
- `component/[component-name]` -> Indicates an addition or improvement of a component. Which components? The one that used globally (in `components` or `components-v2` folder). It is better if you create a separate branch to add or update a global component.

So, those are common branches. What about UI fix? If it's not a big one, you can put it as an `improvement`. But, if it's a big one, then you should consider it as a `feature`.

When creating a branch, choose your branch name wisely. Why? So other developers can easily understand and it represents the purpose of your codes. Here are some aspects you should consider.

- Use English
- Make it simple and compact
- Must represent the purpose

## Creating a Merge Request

After coding and pushing your codes, you can create a new Merge Request.

Sometimes, there is a question: **When should you create a new Merge Request?** You may create a new MR as soon as you have pushed your code. A MR will not be merged immediately after you have created it. So, feel free to create it early. You can add prefix `WIP:` in your MR title to indicate that it still in development process.

Here are some tips when creating a Merge Request.

1. **Give it a representative title**

   A representative MR title is a must. It also should use English. As well as branch, please add the classification as prefix, e.g: "Feature: [title]" or "Improvement: [title]".

2. **Add description from template**

   Currently we have 2 MR description template ready to use, "Feature and Improvement" template dan "Bug" template. Fill the required description as clearly as possible.

   Why should I do this? The Merge Request you created is not only for you. But it will also be a documentation for other developers.

   Should I use English? Sure, if you are convenient to use it. If not, it is okay to use Bahasa.

3. **Add assignee**

   The assignee is the person who will review your codes. So, please assign the MR to other developers (who will review your code).

4. **Add project label**

   Currently there are several labels which you can choose, i.e. Bug, Experiment, Improvement, and New Feature. Please choose the label(s) that represent your MR.


## Coding Convention

Yes, we have some coding convention. Please read this [Coding Convention guide](coding-convention.md) carefully.

## Reviewer Guide

As reviewer, you have responsibility to ensure the codes being reviewed are good, clean, and understandable. What should you check in code review? Here is a list that might be useful:

- Coding convention (refers to [Coding Convention guide](coding-convention.md)). Make sure the codes are not violating the coding convention.
- Code complexity. If you find some codes that could be refactored to improve efficieny, then it should be refactored.
- Typos

If you find anything that not stated above but it can improve the codes, then give it a comment. Code review is a process that must be done in a contructive and supportive way.
