# webpack-dev-server-types

> Up-to-date types for webpack-dev-server, generated from JSON schema.

<p align="center">
<img src="https://img.shields.io/github/workflow/status/hmnd/wepack-dev-server-types/update-release-versions?style=for-the-badge">
<img src="https://img.shields.io/github/workflow/status/hmnd/wepack-dev-server-types/update-types?style=for-the-badge">
<img src="https://img.shields.io/npm/v/webpack-dev-server-types?style=for-the-badge">
</center>

## The Problem

With `webpack@v5` being stable for several months now, `webpack-dev-server@v4` remains in beta, with no clear release timeline in sight. The only officially available types for `webpack-dev-server` (`@types/webpack-dev-server`) are still limited to v3; understandably so, as v4 has had at least one breaking config change in each of its betas. That leaves `webpack@v5` users stuck with having to use the `webpack-dev-server` beta without any Typescript typings, and without an easy way to identify breaking config changes (the release notes haven't been terribly helpful).

## The Solution

This is where this repo and npm package, `webpack-dev-server-types`, comes in. Using GitHub Actions, it monitors the [webpack/webpack-dev-server](https://github.com/webpack/webpack-dev-server/releases) repo for new releases. When there is a new release, types are automatically generated from the [lib/options.json](https://github.com/webpack/webpack-dev-server/blob/master/lib/options.json) JSON schema, using [quicktype](https://github.com/quicktype/quicktype), and a new version of the types is released (with a matching version number).
