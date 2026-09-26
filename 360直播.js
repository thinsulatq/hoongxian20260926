var rule = {
    title:'360直播',
    host:'https://m.360zuqiu.com',
    url:'/live/fyclass/',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'足球直播&NBA直播&篮球直播&欧洲杯&英超&西甲&意甲&德甲&法甲&中超&欧冠&亚冠&巴西甲',
    class_url:'zuqiu&nba&lanqiu&ouzhoubei&yingchao&xijia&yijia&dejia&fajia&zhongchao&ouguan&yaguan&baxiyi',
    headers:{
        'User-Agent':'Mozilla/5.0 (Linux; Android 10; SM-G981B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.162 Mobile Safari/537.36'
    },
    timeout:8000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var lis=pdfa(html,".col_01 .col_02 ul&&li");lis.forEach(function(li){var time=pdfh(li,".tit .time&&Text");var league=pdfh(li,".tit a:eq(0) span&&Text");var home=pdfh(li,".tit a:eq(1) span&&Text");var away=pdfh(li,".tit a:eq(2) span&&Text");var link=pd(li,".con a&&href");var title=home+" VS "+away;if(home&&away){items.push({desc:time+" "+league,title:title,url:link})}});setResult(items);',
    二级:{
        title:"#srcpage&&Text",
        img:"img&&src",
        desc:";;;.tags a&&Text",
        content:".ctt&&Text",
        "tabs":"js:TABS=['360直播']",
        "lists":`js:
            LISTS = [];
            try {
                let id = input.match(/(\\d+)/)[1];
                let body = 'act=10&id=' + id;
                let html = request(input.replace(/\\?.*/, ''), {
                    method: 'post',
                    body: body,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Referer': input
                    }
                });
                let r = JSON.parse(html);
                if (r.status == 1 && r.data) {
                    let links = [];
                    let as = r.data.match(/href="([^"]+)"/g) || [];
                    let names = r.data.match(/>([^<]+)<\/a>/g) || [];
                    for (let i = 0; i < as.length; i++) {
                        let url = as[i].replace('href="', '').replace('"', '');
                        let name = names[i] ? names[i].replace('>', '').replace('</a', '') : ('线路' + (i+1));
                        links.push(name + '$' + url);
                    }
                    if (links.length == 0) {
                        links = ['直播信号$' + input];
                    }
                    LISTS.push(links);
                } else {
                    LISTS.push(['暂无信号$' + input])
                }
            } catch(e) {
                LISTS.push(['直播页$' + input])
            }
        `,
    },
    搜索:'',
}
