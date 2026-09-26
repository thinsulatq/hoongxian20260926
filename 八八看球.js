var rule = {
    title: '八八看球',
    host: 'https://www.88kanqiu.xyz',
    url: 'fyclass',
    searchUrl: '',
    searchable: 0,
    quickSearch: 0,
    class_name: '全部直播&NBA&CBA&WNBA&篮球综合&英超&西甲&意甲&德甲&法甲&欧冠&欧联&中超&亚冠&足总杯&美职联&中甲&足球综合&体育电视台&网球&NFL',
    class_url: '/&/match/1/live&/match/2/live&/match/20/live&/match/4/live&/match/8/live&/match/9/live&/match/10/live&/match/14/live&/match/15/live&/match/12/live&/match/13/live&/match/7/live&/match/11/live&/match/27/live&/match/26/live&/match/31/live&/match/23/live&/match/21/live&/match/29/live&/match/25/live',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    },
    timeout: 8000,
    play_parse: true,
    lazy: '',
    limit: 6,
    double: false,
    推荐: '*',
    一级: 'js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,"body&&li.list-group-item.group-game-item");tabs.forEach(function(it){var time=pdfh(it,".category-game-time&&Text");var type=pdfh(it,".game-type&&Text");var home=pdfh(it,".team-name:eq(0)&&Text");var away=pdfh(it,".team-name:eq(1)&&Text");var id=pd(it,".pay-btn&&data-id");var status=pdfh(it,"a.btn&&Text");status=status.replace("直播中","").replace("暂无","").trim();items.push({desc:time+" "+type+" "+(status||""),title:home+" VS "+away,url:"/live/"+id+"/play"})});setResult(items);',
    二级: {
        "title": ".team-name:eq(0)&&Text;.team-name:eq(1)&&Text",
        "img": ".team-logo&&src",
        "desc": ".game-name&&Text;.game-time&&Text;.game-status&&Text",
        "content": ".game-info-container&&Text",
        "tabs": "js:TABS=['八八看球']",
        "lists": "js:LISTS=[];let gameId=input.split('/').filter(function(x){return x}).pop();let apiUrl=HOST+'/live/'+gameId+'/source';try{let resp=request(apiUrl);let data=JSON.parse(resp).data;let sliced=data.slice(6,-2);let decoded=base64Decode(sliced);let links=JSON.parse(decoded).links||[];let d=links.map(function(it){return it.name+'$'+it.url});LISTS.push(d)}catch(e){LISTS.push(['暂无直播信号$'])}",
    },
    搜索: '',
}
