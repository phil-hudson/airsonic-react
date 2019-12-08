export default class APIServiceUtil {
    static augmentAirsonicAPI(path) {
        const server = localStorage.getItem('server');
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        const salt = localStorage.getItem('salt');
        const appName = 'ReactFrontend';

        if (path.indexOf('?') > -1) {
            return server + path + `&u=${username}&t=${token}&s=${salt}&v=1.15.0&c=${appName}&f=json&v=1.15`;
        } else {
            return server + path + `?u=${username}&t=${token}&s=${salt}&v=1.15.0&c=${appName}&f=json&v=1.15`;
        }
    }
}


