var serializeForm = function(f) {
        var obj = {};
        Object.entries(f).map(function(cur, i) {
            if(cur[1].name) {
                obj[cur[1].name] = cur[1].value == undefined ? '' : cur[1].value;
            }
        });
        return obj;
    }
