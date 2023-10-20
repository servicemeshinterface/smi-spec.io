# :warning: This project is [ARCHIVED](https://www.cncf.io/archived-projects/). [Learn more](https://www.cncf.io/blog/2023/10/03/cncf-archives-the-service-mesh-interface-smi-project/)

A simple website for the [SMI](https://github.com/servicemeshinterface/smi-spec) specification - [smi-spec.io](https://smi-spec.io)

# ~Editing Content~

smi-spec.io is a static site. The landing page content can be edited at `themes/smi/layouts/index.html`, and the rest under `/content`. Post, tag, and category taxonomy is available in Hugo should we want to expand in the future.

## How to Add a Blog Post

If you'd like to submit an SMI-related blog post to the site, please follow these guidelines:

1. Blog posts should be useful and informative for readers, who won't need to buy specific commercial offerings in order to learn something
1. Blog posts do not need to exclusively cover open source software, but also should not be primarily product pitches
1. Blog posts should disclose and link to the employer of the person writing the blog post

Blog posts are created via pull requests, and should be approved by two reviewers (at least one of whom should work for a different employer than the blog post submitter). You can test locally with hugo and/or see the preview after submitting the pull request.

Add a new file to the `content/blog/` directory whose name is the published date and the title. The files must be markdown formatted. See the [existing titles for examples](https://github.com/servicemeshinterface/smi-spec.io/tree/main/content/blog/) of the format. Add the header meta-data to the file using this format (note the permalink structure). Recommended but optional fields are authorname which should be name(s); these are displayed verbatim. authorlink is the link used by authorname.

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

To summarize the content on the blog index page, insert a ``<!--more-->`` break in your markdown. This will truncate the content with a Read More link.

## How to Add Your Logo

To add the logo of your company or organization to the landing page:

1. Add your logo to the [`themes/smi/static/img/logos`](themes/smi/static/img/logos) directory and name it `logo-*.png` where `*` is a slug for your org name (e.g. `logo-acme.png`).
1. Add an entry to either the `ecosystem` or `partners` list in [`data/logos.yaml`](data/logos.yaml). Include the following information: an org title, a website URL, and the filename of the logo.

# ~Site Development~

## Notes

* built with the [Hugo](https://gohugo.io/) static site generator
* custom smi theme uses [Paper](https://github.com/nanxiaobei/hugo-paper/) as a base, with [Foundation](https://foundation.zurb.com/sites/docs/v/5.5.3/) on top and the [SMI custom sass](https://github.com/servicemeshinterface/smi-spec.io/tree/main/themes/smi)
* deployed to [Netlify](https://app.netlify.com/sites/smi-spec/deploys) via merges to main. (@flynnduism, @lachie83 and @bridgetkromhout are admins)
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

The site auto deploys the main branch via [Netlify](https://app.netlify.com/sites/smi-spec). Once pull requests are merged the changes will appear at smi-spec.io after a couple of minutes. Check the [logs](https://app.netlify.com/sites/smi-spec/deploys) for details.

[![Netlify Status](https://api.netlify.com/api/v1/badges/8ffabb30-f2f4-45cc-b0fa-1b4adda00b5e/deploy-status)](https://app.netlify.com/sites/helm-merge/deploys)

`hugo serve` will run the site locally at [localhost:1313](http://localhost:1313/)

# Code of Conduct

Service Mesh Interface follows the [CNCF Code of Conduct](https://github.com/cncf/foundation/blob/master/code-of-conduct.md).

