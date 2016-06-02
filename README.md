# CoolNEWS RSS reader

## Business story
At the CoolNEWS news agency the journalists should deal with many online news site to keep themselfs up-to-date. The coworkers can not follow the different sources independently and sometimes they just miss important news.

We would like to use an online solution for this which is a centralized place for registering news sites and browsing fresh articles. At the moment we don't know what technologie we would like to use as backend so as a first step we need only a client side solution.

---
## User story
As a user I would like to browse my registered news resources' fresh articles in a centralized website.

I would like to be able to add new sites' RSS feeds as resources which are stored after that I close my web browser.

I would like to be able to select a concrete source and read only the articles come from there. If I don't choose a particular source than all articles need to be shown ordered by date.

I would like to set some of the sites as my favorite so I can see the articles from there in a highlighted way.

---
## Feature Set:
1. **Menu**. There is a common menu where I navigate between the different features.
2. **RSS feed register**. There is a form where I can add new RSS feed url as news resource and add it to my list.
    * The program checks if the given url is in a proper form:
        * Needs to be a valid url which ends with **.xml** e.g.: *http://prog.hu/site/backend/proghu-rss.xml*.
        * In case of invalid url the program warn the user
    * I can set how many new articles I would like to see from the feed (named **newsCount**). This value need to be 5 by default. It can be only valid integer number. This value can not changed later.
2. **Browse articles**. There is a site where I can browse the most fresh articles from the RSS feeds I saved before ordered by publish date of the articles. (*shown articles' count equals with **newsCount** of the particular resource*). This should be the startpage.
3. **Read article from a particular resource**: There is an option (*on the browse article page*) to select a concrete site as resource and read only the articles from there. I can switch back to read all the articles.
4. **Edit registered resources**: There is a site where I can modify my ealier saved resources.
    * All my earlier saved resources are listed
    * I can delete a RSS feed from my list
    * I can set that the feed is my favorite:
        * in this case the articles from this site need to be highlighted with a different background color.
