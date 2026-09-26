var rule = {
    title:'八八看球',
    host:'https://www.88kanqiu.xyz',
    url: "/match/fyclass/live",
    searchUrl: "",
    searchable: 0,
    quickSearch: 0,
    class_parse: ".nav-pills li;a&&Text;a&&href;/match/(\\d+)/live",
    headers: {
        "User-Agent": "PC_UA",
    },
    timeout: 8000,
    play_parse: true,
    lazy: `js:
        if(/embed=/.test(input)) {
            let url = input.match(/embed=(.*?)&/)[1];
            url = base64Decode(url);
            input = {
                jx:0,
                url: url.split('#')[0],
                parse: 0
            }
        } else if (/\?url=/.test(input)){
            input = {
                jx:0,
                url: input.split('?url=')[1].split('#')[0],
                parse: 0
            }
        } else {
            input
        }
    `,
    limit: 6,
    double: false,
    推荐: "*",
    一级: ".list-group .group-game-item;.d-none&&Text;img&&src;.btn&&Text;a&&href",
    二级: {
        title: ".game-info-container&&Text;.customer-navbar-nav li&&Text",
        img: "img&&src",
        desc: ";;;div.team-name:eq(0)&&Text;div.team-name:eq(1)&&Text",
        content: "div.game-time&&Text",
        tabs: "js:TABS=['实时直播']",
        lists: `js:
            LISTS = [];
            try {
                let html = request(input.replace('play', 'source'));
                let pdata = JSON.parse(html).data;
                pdata = pdata.slice(6);
                pdata = pdata.slice(0, -2);
                pdata = base64Decode(pdata);
                let jo = JSON.parse(pdata).links;
                let d = jo.map(function (it) {
                    return it.name + '$' + urlencode(it.url)
                });
                LISTS.push(d)
            } catch(e) {
                LISTS.push(['暂无直播信号$'])
            }
        `,
    },
    搜索: "",
};
