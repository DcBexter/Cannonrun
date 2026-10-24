# Cannonrun

Historical browser prototype by Milan Burgmann. Existing `public_html/` uses Crafty 0.6.2 and JavaScript and is preserved as project history.

Future direction: a modern game inspired by **Die total verrückte Rallye**, using a non-JavaScript stack. Engine and architecture remain undecided; repository maintenance does not start that rewrite.

## Maintenance

PRs, pushes to `master` and weekly runs validate GitHub workflows, JavaScript syntax and presence of prototype entry point/assets. CodeQL scans existing JavaScript; dependency review checks recognized manifests. No gameplay, browser rendering or production compatibility is verified.

Renovate manages CI dependencies. All managed updates, including major and security updates, may auto-merge after **Required maintenance** and **CodeQL** pass. These static checks do not prove gameplay compatibility. Dependabot handles available security updates; bundled Crafty/Zepto files have no managed package manifest and are not automatically upgraded.

This is historical code, not a supported production game. No automatic publishing, deployment or release. Scheduled workflow and bot configuration become effective after merge.

[License](LICENSE)
