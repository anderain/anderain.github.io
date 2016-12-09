var rquery = /^(?:[^?]*\?)?([\w\d\-\/=&%]+)/;

function parseQuery(str, separator) {
    var query = String(str).match(rquery),
        key,
        value;

    if (query == null) return hash;

    query = query.pop();
    separator = separator || '&';

    return query.split(separator).reduce(function(hash, pair) {
        if (pair.indexOf('=') > 0) {
            pair = decodeURIComponent(pair).split('=');

            key = pair.shift();

            value = pair.join('=');

            if (value != void 0) {
                value = value.replace('+', ' ');
            }
        } else {
            key = decodeURIComponent(pair);
            value = void 0;
        } 

        hash[key] = value;

        return hash;
    }, {});
}

window.params = parseQuery(location.href);