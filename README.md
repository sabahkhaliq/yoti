# Yoti Technical Test - Doc Scan

## Table of Contents

1) [Requirements](#requirements) -
Check you have what you need

1) [Installing the SDK](#installing-the-sdk) -
How to install our SDK

1) [Setup](#setup) -
Setup required before using the Yoti services

1) [Products](#products) -
Links to more information about the products offered by the Yoti SDK

1) [Support](#support) -
Please feel free to reach out

## Requirements

### Node version
10x

### Database server
MAMP or XAMP server running for mysql on localhost
Configure values in .env file

If you're not using MAMP please comment socketPath in app > doc-scan > models > index.js

### Windows users

If you're planning on using the Node SDK on Windows, you'll need to install a few dependencies first:

* [OpenSSL](http://slproweb.com/products/Win32OpenSSL.html) (normal version, not light) in the same bitness as your Node.js installation.

  * OpenSSL must be installed in its specific directory (`C:\OpenSSL-Win32` or `C:\OpenSSL-Win64`)
  * See [this wiki from Microsoft](https://github.com/microsoft/nodejs-guidelines/blob/master/windows-environment.md) for common configuration issues.

* [node-gyp](https://github.com/nodejs/node-gyp) (`npm install -g node-gyp`)

  * Either install Microsoft's [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools) using `npm install --global --production windows-build-tools`
  * Or manually install [Python 2.7](http://www.python.org/download/) and [Visual Studio](https://www.visualstudio.com/downloads/) (or modify an existing installation) and select Common Tools for Visual C++ during setup.

## Running the application
1. Install the dependencies with `npm install` for base setup files installation
1. cd app
1. cd doc-scan
1. Install the dependencies with `npm install`
1. Import database in phpmyadmin
1. Rename the [.env.example](.env.example) file to `.env` and fill in the required configuration values.
1. Start the server `npm start`
1. Visit `https://localhost:3000`