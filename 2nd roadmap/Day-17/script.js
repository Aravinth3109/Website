setTimeout(() => {
    document.getElementById('countdown').innerHTML = 10;
    return setTimeout(() => {
        document.getElementById('countdown').innerHTML = 9;
        return setTimeout(() => {
            document.getElementById('countdown').innerHTML = 8;
            return setTimeout(() => {
                document.getElementById('countdown').innerHTML = 7;
                return setTimeout(() => {
                    document.getElementById('countdown').innerHTML = 6;
                    return setTimeout(() => {
                        document.getElementById('countdown').innerHTML = 5;
                        return setTimeout(() => {
                            document.getElementById('countdown').innerHTML = 4;
                            return setTimeout(() => {
                                document.getElementById('countdown').innerHTML = 3;
                                return setTimeout(() => {
                                    document.getElementById('countdown').innerHTML = 2;
                                    return setTimeout(() => {
                                        document.getElementById('countdown').innerHTML = 1;
                                        return setTimeout(() => {
                                            document.getElementById('countdown').innerHTML = "<strong>Happy Independence Day</strong>";
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);