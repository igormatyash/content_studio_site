# Content Studio Site

Static landing page for Content Studio.

## Local preview

Open `index.html` directly, or run any static server from this directory.

## Deploy

The site is packaged as a standalone Caddy container on port `8080`. In production it is attached to the external `content-studio-edge` network and routed from the root path by the service edge Caddy, while `/content-admin/*` remains proxied to the admin service.
