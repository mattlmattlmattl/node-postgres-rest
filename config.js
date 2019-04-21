var config = {
    development: {
        // url to be used in link generation
        //url: 'http://my.site.com',
        // db connection settings
        database: {
            user:   'username',
            pass:   'password',
            host:   'localhost',
            port:   '5432',
            db:     'inventory'
        },
        // server details
        //server: {
            //host: '127.0.0.1',
            //port: '3000'
        //}
    }
    //production: {
        // url to be used in link generation
        //url: 'http://my.site.com',
        // db connection settings
        //database: {
            //host: '127.0.0.1',
            //port: '5432',
            //db:     'site'
        //},
        // server details
        //server: {
            //host:   '127.0.0.1',
            //port:   '3421'
        //}
    //}
    };
    module.exports = config;