![smi-github](https://user-images.githubusercontent.com/686194/57564913-f8d4cf00-7368-11e9-879f-588440bc4cb5.png)

A simple website for the [SMI](https://github.com/deislabs/smi-spec) specification - [smi-spec.io](https://smi-spec.io)

# Editing Content

smi-spec.io is static site. The landing page content can be edited at `themes/smi/layouts/index.html`, and the rest under `/contents`. Post, tag, category taxonomy is available in hugo should we want to expand in the future.

# Notes

* built with the [Hugo](https://gohugo.io/) static site generator
* custom cnab theme uses [Paper](https://github.com/nanxiaobei/hugo-paper/) as a base, with [Foundation](https://foundation.zurb.com/sites/docs/v/5.5.3/) on top and the [SMI custom sass](https://github.com/deislabs/smi-spec.io/tree/master/themes/smi)
* uses Gulp for asset pipelines
* deployed to [Netlify](https://app.netlify.com/) via merges to master. @flynnduism is admin of this. 
* metrics tracked via Google Analytics

# Development

Install the dependencies - first [install Hugo](https://gohugo.io/getting-started/installing/), and then the packages:

```
npm install gulp-cli -g
npm install
gulp && hugo serve
```

`hugo serve` will run the site locally at [localhost:1313](http://localhost:1313/)
