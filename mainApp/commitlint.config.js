module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always', [
                'add',
                'update',
                'delete',
                'feat',
                'fix',
                'merge',
                'chore',
                'docs',
                'style',
                'refactor',
                'perf',
                'revert',
                'test'
            ]
        ],
        'subject-case': [0, 'never', ['lower-case']]
    }
}
