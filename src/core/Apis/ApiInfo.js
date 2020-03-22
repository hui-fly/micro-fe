class ApiInfo {
    constructor ({
        path,
        type = 'get',
        timeout = 5000,
        headers = {},
        project = 'qupost', // || qukan
        author = '未定义'
    }) {
        this._path = path;
        this._type = type;
        this._author = author;
        this.timeout = timeout;
        this.headers = headers;
        this.project = project;
    }

    get path () {
        return this._path;
    }

    get type () {
        return this._type;
    }

    get author () {
        return this._author;
    }
}

export default ApiInfo;
