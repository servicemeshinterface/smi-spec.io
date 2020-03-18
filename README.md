![smi-github](https://user-images.githubusercontent.com/686194/57564913-f8d4cf00-7368-11e9-879f-588440bc4cb5.png)

A simple website for the [SMI](https://github.com/deislabs/smi-spec) specification - [smi-spec.io](https://smi-spec.io)

# Editing Content

smi-spec.io is static site. The landing page content can be edited at `themes/smi/layouts/index.html`, and the rest under `/contents`. Post, tag, category taxonomy is available in hugo should we want to expand in the future.

## How to Write a Blog Post

Blog posts are created via pull requests. The following steps are used to add them:

Add a new file to the `content/blog/` directory whose name is the published date and the title. The files must be markdown formatted. See the [existing titles for examples](https://github.com/servicemeshinterface/smi-spec.io/tree/master/content/blog/) of the format. Add the header meta-data to the file using this format (note the permalink structure). Recommended but optional fields are authorname which should be name(s); these are displayed verbatim. authorlink is the link used by authorname.

```
---
title: "A Fancy Title"
slug: "fancy-title"
authorname: "Captain Awesome"
authorlink: "https://example.com"
date: "2020-03-15T09:00:00+08:00"
---
```

Add the content below the ``---`` as Markdown. The title does not need to be included in this section. Any images should be placed in the `/content/blog/images/` directory. Images should be losslessly compressed to reduce their size. Tools, such as ImageOptim, can be used.

To summarize the content on the blog index page, insert a <!--more--> break in your markdown. This will truncate the content with a Read More link.


# Site Development

## Notes

* built with the [Hugo](https://gohugo.io/) static site generator
* custom smi theme uses [Paper](https://github.com/nanxiaobei/hugo-paper/) as a base, with [Foundation](https://foundation.zurb.com/sites/docs/v/5.5.3/) on top and the [SMI custom sass](https://github.com/deislabs/smi-spec.io/tree/master/themes/smi)
* deployed to [Netlify](https://app.netlify.com/sites/smi-spec/deploys) via merges to master. (@flynnduism, @lachie83 and @bridgetkromhout are admins)
* metrics tracked via Google Analytics

## Install dependencies:

* Hugo [installation guide](https://gohugo.io/getting-started/installing/)
* packages are installed by running `yarn`

## Run the site:

```
// rebuild the site (to compile latest css/js)
hugo

// or serve the site for local dev
hugo serve
```

## Deploying the site:

The site auto deploys the master branch via [Netlify](https://app.netlify.com/sites/smi-spec). Once pull requests are merged the changes will appear at smi-spec.io after a couple of minutes. Check the [logs](https://app.netlify.com/sites/smi-spec/deploys) for details.

[![Netlify Status](https://api.netlify.com/api/v1/badges/8ffabb30-f2f4-45cc-b0fa-1b4adda00b5e/deploy-status)](https://app.netlify.com/sites/helm-merge/deploys)