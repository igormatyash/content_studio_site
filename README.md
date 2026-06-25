# Content Studio Site

Static landing page for Content Studio.

## Local preview

Open `index.html` directly, or run any static server from this directory.

## Deploy

The site is packaged as a standalone Caddy container on port `8080`. In production it should be attached to the same external edge network as the service Caddy container and routed from the root path, while `/content-admin/*` remains proxied to the admin service.
