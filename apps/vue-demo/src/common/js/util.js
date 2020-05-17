let SIGN_REGEXP = /([yMdhsm])(\1*)/g;
let DEFAULT_PATTERN = 'yyyy-MM-dd';

function padding (s, len) {
    len = len - (s + '').length;
    for (let i = 0; i < len; i++) {
        s = '0' + s;
    }
    return s;
}

export default {
    getQueryStringByName (name) {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        let r = window.location.search.substr(1).match(reg);
        let context = '';
        if (r != null) context = r[2];
        reg = null;
        r = null;
        return context === null || context === '' || context === 'undefined' ? '' : context;
    },
    formatDate: {
        format (date, pattern) {
            pattern = pattern || DEFAULT_PATTERN;
            return pattern.replace(SIGN_REGEXP, function ($0) {
                switch ($0.charAt(0)) {
                case 'y':
                    return padding(date.getFullYear(), $0.length);
                case 'M':
                    return padding(date.getMonth() + 1, $0.length);
                case 'd':
                    return padding(date.getDate(), $0.length);
                case 'w':
                    return date.getDay() + 1;
                case 'h':
                    return padding(date.getHours(), $0.length);
                case 'm':
                    return padding(date.getMinutes(), $0.length);
                case 's':
                    return padding(date.getSeconds(), $0.length);
                }
            });
        },
        parse (dateString, pattern) {
            let matchs1 = pattern.match(SIGN_REGEXP);
            let matchs2 = dateString.match(/(\d)+/g);
            if (matchs1.length === matchs2.length) {
                let _date = new Date(1970, 0, 1);
                for (let i = 0; i < matchs1.length; i++) {
                    let _int = parseInt(matchs2[i]);
                    let sign = matchs1[i];
                    switch (sign.charAt(0)) {
                    case 'y':
                        _date.setFullYear(_int);
                        break;
                    case 'M':
                        _date.setMonth(_int - 1);
                        break;
                    case 'd':
                        _date.setDate(_int);
                        break;
                    case 'h':
                        _date.setHours(_int);
                        break;
                    case 'm':
                        _date.setMinutes(_int);
                        break;
                    case 's':
                        _date.setSeconds(_int);
                        break;
                    }
                }
                return _date;
            }
            return null;
        }
    },
    getUrlSearch () {
        let search;

        let items;

        let item;

        let name;

        let value;

        let args = {};
        search = location.search.length > 0 ? location.search.substring(1) : null;
        items = search ? search.split('&') : '';
        for (let i = 0, len = items.length; i < len; i++) {
            item = items[i].split('=');
            name = decodeURIComponent(item[0]);
            value = (item[1] || '').replace(/(.*)%$/, (match, $1) => {
                return $1 + encodeURIComponent('%');
            });
            value = decodeURIComponent(value || '');
            if (name.length > 0) {
                // 防止为空的参数比如说(?page=2&=invalidParam)
                args[name] = value;
            }
        }
        return args;
    },
    getStorageItem (key, value = {}) {
        try {
            const data = localStorage.getItem(key) || value;
            return JSON.parse(data);
        } catch (error) {
            return value;
        }
    },
    setStorageItem (key, value = {}) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            console.log(error);
        }
    }
};
