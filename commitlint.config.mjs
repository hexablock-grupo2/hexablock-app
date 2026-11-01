// Conventional Commits rules, enforced in CI (.github/workflows/commitlint.yml).
// Scopes are a WARNING (level 1), not an error, so a new scope never blocks a PR.
// Adjust the list when the folder structure is agreed.
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      1,
      'always',
      [
        // shared
        'deps', 'ci', 'docs', 'readme', 'repo', 'release',
        // client (game)
        'engine', 'hexa-lines', 'hexa-fit', 'hexa-sort', 'hexa-merge',
        'ui', 'data', 'aop', 'i18n', 'audio', 'levels',
        // backend (api)
        'api', 'auth', 'progress', 'leaderboard', 'db',
      ],
    ],
  },
};
