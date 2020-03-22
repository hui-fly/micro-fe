module.exports = {
    root: true, // 指定跟路径
    parserOptions: {
        parser: 'babel-eslint' // 解析器
    },
    env: {
        node: true,
        browser: true // 浏览器启用
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential', // vue基本规则
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        '@vue/standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue' // 支持vue文件
    ],
    // add your custom rules here
    rules: {
        'indent': ['error', 4], // 缩进宽度4个空格
        'comma-dangle': 'off', // 允许行末逗号
        'no-constant-condition': 'off', // 允许常量作为表达式条件
        'no-delete-var': 'off', // 允许使用delete
        'no-extend-native': 'off', // 允许扩展原生对象
        'no-floating-decimal': 'off', //  允许省去小数点前的0
        'no-multi-str': 'off', // 允许多行字符串
        'semi': 'off', // 允许使用分号

        // allow async-await
        'generator-star-spacing': 'off', // 关闭
        // 最大长度 120
        'max-len': [
            'warn',
            {
                'code': 120,
                'ignoreComments': true,
                'ignoreStrings': true,
                'ignoreTemplateLiterals': true,
                'ignoreUrls': true
            }
        ],
        // 最大行数 500
        'max-lines': [
            'warn',
            {
                'max': 500,
                'skipBlankLines': true,
                'skipComments': true
            }
        ],
        // 要求使用 let 或 const 而不是 var
        'no-var': [
            'error'
        ],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
