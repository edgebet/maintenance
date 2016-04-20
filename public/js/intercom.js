! function() {
    var analytics = window.analytics = window.analytics || [];
    if (!analytics.initialize)
        if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice.");
        else {
            analytics.invoked = !0;
            analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "group", "track", "ready", "alias", "page", "once", "off", "on"];
            analytics.factory = function(t) {
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    e.unshift(t);
                    analytics.push(e);
                    return analytics
                }
            };
            for (var t = 0; t < analytics.methods.length; t++) {
                var e = analytics.methods[t];
                analytics[e] = analytics.factory(e)
            }
            analytics.load = function(t) {
                var e = document.createElement("script");
                e.type = "text/javascript";
                e.async = !0;
                e.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
                var n = document.getElementsByTagName("script")[0];
                n.parentNode.insertBefore(e, n)
            };
            analytics.SNIPPET_VERSION = "3.0.1";
            if (window.location.href.indexOf('edgebet.net') === -1) {
                analytics.load("hTwjFtfYIiAJLkuca5FdHqpr8mUs09T9");
            }
            else {
                analytics.load("Scs1erEcShUp9GKiLe5BhnymAvKgt8H8");
            }
            analytics.page()
        }
}();

function resetMixpanel() {
    var uuid = Math.floor(1 + Math.random() * 1000);
    return mixpanel.identify(uuid);
}
