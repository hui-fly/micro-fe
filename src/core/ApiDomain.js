/**
 * Api 域名设置类
 */
import Cookie from 'js-cookie';
/* eslint-disable no-undef */
const domainMap = DOMAIN_API;
const codeEvn = CODE_EVN;
const projectName = PROJECT_NAME;
const projectTitle = PROJECT_TITLE;
/* eslint-enable no-undef */
const isProduction = codeEvn === 'production' || codeEvn === 'preview';

let branchMap = {};

class ApiDomain {
    constructor () {
        this.domains = this.getDomains();
    }

    // 获取域名map
    getDomains () {
        let map = {};
        for (let i in domainMap) {
            let key = i + '_branch';
            let branch = Cookie.get(key) || 'default';
            branchMap[i] = branch;
            map[i] = this.getBranch(i, branch);
        }
        return map;
    }

    // 获取project分支
    getBranch (type, branch) {
        let domain = domainMap[type];
        if (domain) {
            if (domain.hasOwnProperty(branch)) {
                return domain[branch];
            } else {
                console.error(`不存在${type}对应项目${branch}分支`);
            }
        } else {
            console.error(`不存在${type}对应项目`);
        }
    }

    getUrl (api) {
        let { domains } = this;
        let { project, path } = api;
        let domain = '';
        if (project in domains) {
            domain = domains[project];
        }
        if (!domain) throw new Error(`ApiDomain.getUrl：没有配置该 ${project} 项目的 domain`);
        if (/^\//.test(path)) {
            path = path.substring(1, path.length);
        } else {
            console.warn('路径需要以/开头！');
        }
        return `${domain}${path}`;
    }

    // 设置分支
    static setApiBranch (query) {
        if (isProduction) {
            // 线上代码不保存高度cookie
            return;
        }
        for (let i in domainMap) {
            let key = '_' + i;
            if (query.hasOwnProperty(key)) {
                let branch = query[key];
                if (domainMap[i].hasOwnProperty(branch)) {
                    branchMap[i] = branch;
                    Cookie.set(i + '_branch', branch);
                }
            }
        }
    }

    // 获取分支map
    getBranchMap () {
        return branchMap;
    }

    // 是否生产环境
    isProduct () {
        return isProduction;
    }

    // 获取环境变量
    getEvn () {
        return codeEvn;
    }

    // 是否开发环境
    isDevelopment () {
        return !isProduction;
    }

    // 获取当前鉴权project
    getProject () {
        return projectName;
    }

    // 获取当前项目名称
    getProjectTitle () {
        return projectTitle;
    }
}

export default ApiDomain;
