"use strict";
//# sourceMappingURL=main.js.map


function initLoadingModal() {
  var loadingHtml = '<div class="loadingModal" id="laodingModal"><div class="loadingMask"></div>\
      <div class="loadingModalContent"><div class="loadingElement"></div></div></div>';

  var $loadingModal = $('#laodingModal');
  $(document).ajaxStart(function (xhr) {
    if(xhr.currentTarget.activeElement == document.querySelector('body')){
      if (!$loadingModal || $loadingModal.length < 1) {
        $loadingModal = $(loadingHtml).appendTo('body');
      }
      $loadingModal.show();
    }
  }).ajaxStop(function () {
    if ($loadingModal && $loadingModal.length > 0) {
      // setTimeout(function(){
        $loadingModal.hide();
      // },0)
    }
  });
}
initLoadingModal();

//宏观指数
function myChartLine(bgm,edm,province,cityid,type){
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main'), 'estate');
  let data;
  $.ajax({
    type: "post",
    async: false,
    url: fixurl+"Exponent/exponentInfo", //宏观指数
    dataType: "json",
    data:{
      data: window.JSON.stringify({
        "begin_month":bgm,
        "end_month":edm,
        "province_id":province,
        "city_id":cityid,  //北京
        "type":type  //1国内经济增长指数  2社会 3固定资产 4
      })
    },
    success: function(json){
      if(json!=''){
        data=json;
      }else{
        return
        alert("无数据")
      }
    },
    error:function(){
      alert("接口请求失败")
    }
  });

  let countrys = new Array();
  let provincelist = new Array();
  let citys = new Array();
  let xAxis = new Array();

  for(let i in data){
    //国
    countrys.push(Number(data[i].country).toFixed(1));
    //省份
    provincelist.push(Number(data[i].province).toFixed(1));
    //城市
    citys.push(Number(data[i].city).toFixed(1));
    //x轴
    xAxis.push({
      value: i.substring(0,10),
      textStyle: {
        color: '#868e9a',
        fontSize: "12"
      } });
  }
  //x轴
  //折线数据
  const line = [{
    name: '全国',
    type: 'line',
    itemStyle: {
      normal: {
        lineStyle: {
          color: "#3c82e3"
        }
      }
    },
    data: countrys
  },
    {
    name: $("#select-province option:selected").text(),
    type: 'line',
    itemStyle: {
      normal: {
        lineStyle: {
          color: "#3ad25a"
        }
      }
    },
    data: provincelist
  },
    {
    name: $("#select-city option:selected").text().replace('市', ''),
    type: 'line',
    itemStyle: {
      normal: {
        lineStyle: {
          color: "#ff8d65"
        }
      }
    },
    data: citys
  }];

// 指定图表的配置项和数据
  const option = {
    title: {
      text: ''
    },
    tooltip: {
      trigger: 'axis',
      padding:16,
      textStyle:{
        fontSize:"10"
      }
    },
    dataZoom: [{
      type: 'slider',
      show: true,
      xAxisIndex: [0],
      start: 0,
      end: (10 / xAxis.length) * 300,
      handleStyle: {
        color: '#4a5676',
        borderWidth: '3',
        borderColor: '#4a5676',
      },
      fillerColor: '#79839e',
      dataBackground: {
        areaStyle: {
          color: '#79839e',
        }
      }
    }, ],
    legend:{
      show:true,
      top: 20,
      data:[
        '全国',
        $("#select-province option:selected").text(),
        $("#select-city option:selected").text().replace('市', '')
      ]
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '14%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxis
    },
    yAxis: {
      type: 'value',
      boundaryGap: false,
      name:'',
      nameTextStyle:{
        color:"#868e9a"
      }
    },
    series: line
  };


// 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}


//----商圈分析
//人群迁徙图
function drawmaps(time,cityid,type,seletname, isCity,){
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('main'), 'estate');
    // const seletname = $('#payfor-select-city option:selected').text();
    // console.log(seletname);
    if(type==1){
      $(".trade-select-tit .titname").html(seletname);
    }else if(type==2){
      $(".trade-select-tit .titname").html(seletname);
    }
    //数据请求
    let data;
    $.ajax({
        type: "post",
        async: false,
        url: fixurl+"TradeArea/migrationInfo",
        dataType: "json",
        data:{
            data: window.JSON.stringify({
                "month":time,
                "province_id":isCity ? '' : (cityid || 406),
                "city_id": isCity ?  (cityid || 405) : '',
                "type":type  //1是流入2是流出
            })
        },
        success: function(json){
            if(json.length!==0){
              json.province = json.province || json.city;
              data=json.province.migration;
//			  console.log(data);
              if(json.province.percent.length!=0){
                  let array = new Array();
                  for (let n in json.province.percent){
                      array.push(n);
                  }
                  let ranklistdata = '';
                  var len = Math.min(array.length, 10);
                  for(let i=0;i<len; i++){
                      const n =i+1 ;
                      ranklistdata += '<li><span class="progress-bef-tit">'+Number(n)+'.'+array[i]+'</span><div class="progress-bar"><span style="width: '+json.province.percent[array[i]]*100+'%"></span></div><span class="right">'+(json.province.percent[array[i]]*100).toFixed(1)+'%</span></li>';
                  }
                  $(".ranklist").html(ranklistdata);
              }else{
                $(".ranklist").html('<li>当前没有数据</li>');
                  // alert("当前没有数据");
              }
            }else{
              $(".ranklist").html('<li>当前没有数据</li>');
              // alert("当前没有数据");
            }
        },
        error:function(){
            alert("接口请求失败")
        }
    });


    const geoCoordMap = isCity ? city : provinceGeo;

    const planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    const convertData = function (data) {
        const res = [];
        var covertLength = Math.min(data.length, 10);
        for (let i = 0; i < covertLength; i++) {
            const dataItem = data[i];
            const fromCoord = geoCoordMap[dataItem[0].name];
            const toCoord = geoCoordMap[dataItem[1].name];
            if(type==2){
              //2是流出
              if(fromCoord && toCoord){
                res.push({
                  fromName:dataItem[0].name,
                  toName:dataItem[1].name,
                  coords: [fromCoord, toCoord]
                });
              }
            }else if(type==1){
              //1是流入
              // console.log(dataItem);
              if(fromCoord && toCoord){
                res.push({
                  fromName:dataItem[0].name,
                  toName:dataItem[1].name,
                  coords: [fromCoord, toCoord]
                });
              }
            }

        }
        return res;
    };

    const color = ['#ff8d65', '#f9e430', '#3ad25a'];
    const series = [];

  [[seletname, data]].forEach(function (item, i) {
        var data2 = [];
        if(type==2){
          item[1].map(function (dataItem, i) {
            // console.log(color[i], 'color[i]')
            if(i < 10) {
              data2.push({
                name: dataItem[1].name,
                value: [].concat(geoCoordMap[dataItem[1].name], [dataItem[1].value]),
                itemStyle: {
                  normal: {
                    color: color[i] || '#79839e'
                  }
                },
              });
            }
          });
        }else if(type==1){
          item[1].map(function (dataItem, i) {
            if(i < 10) {

              data2.push({
                name: dataItem[0].name,
                value: [].concat(geoCoordMap[dataItem[0].name], [dataItem[0].value]),
                itemStyle: {
                    normal: {
                        color: color[i] || '#79839e'
                    }
                },
              });
            }
          });
        }
        		  console.log(convertData(item[1]),294);
        series.push({
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 1,
                // polyline:true,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            }, {
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        // color: color[i],
                        color: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                              offset: 0, color: '#3886e1' // 0% 处的颜色
                          }, {
                              offset: 1, color: '#6856f3' // 100% 处的颜色
                          }],
                          globalCoord: false // 缺省为 false
                        },
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2,
                        type: 'dashed'
                    }
                },
                data: convertData(item[1])
            }, {
                name: item[0] + ' Top10',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: data2
            }
            )
    });
    const option = {
        backgroundColor: '',
        tooltip : {
            trigger: 'item'
        },
        geo: {
            map: 'china',
            label: {  //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等
                emphasis: {  //是否在高亮状态下显示标签。
                    show: false,
                    textStyle:{
                      color:"#fff"
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#22222c',
                    borderColor: '#323948'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: series
    };

    myChart.setOption(option);
}

// var map = new BMap.Map("allmap");
// var point = new BMap.Point(116.418261, 39.921984);
//   map.centerAndZoom(point, 11);             // 初始化地图，设置中心点坐标和地图级别
//   map.enableScrollWheelZoom(); // 允许滚轮缩放

//人群热力图  热力图
function myChartThermodynamic(time,cityid,type, placename, map, bssw, bsne) {
  var tradeOverlay = [];
    let data;
  // var map = map || new BMap.Map("allmap");          // 创建地图实例

  // if(bssw && bsne) {

  // } else {
  //   var point = new BMap.Point(116.418261, 39.921984);
  //   map.centerAndZoom(point, 11);
  //   // 初始化地图，设置中心点坐标和地图级别
  //   map.enableScrollWheelZoom(); // 允许滚轮缩放
  //   var bs = map.getBounds();   //获取可视区域
  //   bssw = bs.getSouthWest();   //可视区域左下角
  //   bsne = bs.getNorthEast();
  // }
    var postData = window.JSON.stringify({
        "month":time,
        "province_id":'',
        "city_id":cityid,
        "points": bssw && bsne ? [{la: bssw.lat, lo: bssw.lng}, {la: bsne.lat, lo: bsne.lng}] : '',
        "type":type  //1:全部人群热力图,2:常驻人群热力图,3:流动人口热力图,4:白天人群热力图,5:晚间人群热力图
    });
    var url = fixurl+"TradeArea/crowdInfo";
    if (type=='payfor') {
      url = fixurl + 'TradeArea/payforInfo';
    }
    $.ajax({
        type: "post",
        async: false,
        url: url,
        dataType: "json",
        data:{
          data: postData
        },
        success: function(json){
          if(json.code === 1) {
            alert(json.desc);
          }
          data=json;
        },
        error:function(){
          alert("接口请求失败")
        }
    });

  var points = data.data;
  if(points) {
    var sortData = [].concat(data.data);
    sortData.map(function(item) {
      item.count = item.count * 1;
      return item;
    });
    var maxData = data.balance;

    if(!isSupportCanvas()){
      alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
    }
    //详细的参数,可以查看heatmap.js的文档 https://github.com/pa7/heatmap.js/blob/master/README.md
    //参数说明如下:
    /* visible 热力图是否显示,默认为true
    * opacity 热力的透明度,1-100
    * radius 势力图的每个点的半径大小
    * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
    *	{
    .2:'rgb(0, 255, 255)',
    .5:'rgb(0, 110, 255)',
    .8:'rgb(100, 0, 255)'
    }
    其中 key 表示插值的位置, 0~1.
    value 为颜色值.
    */
    if(placename!=''){
      changePlace(placename);
    }

    window.heatmapOverlay = window.heatmapOverlay || new BMapLib.HeatmapOverlay({"radius":20});
    // closeHeatmap();
    map.addOverlay(heatmapOverlay);
    // if(points.length) {
      // 去超过90%的那个值
      heatmapOverlay.setDataSet({data:sortData,max:maxData});
    // }

    //是否显示热力图
    heatmapOverlay.show();
  }


  function closeHeatmap(){
    heatmapOverlay.hide();
  }
  // closeHeatmap();

  function setGradient(){
    /*格式如下所示:
     {
     0:'rgb(102, 255, 0)',
     .5:'rgb(255, 170, 0)',
     1:'rgb(255, 0, 0)'
     }*/
    const gradient = {};
    let colors = document.querySelectorAll("input[type='color']");
    colors = [].slice.call(colors,0);
    colors.forEach(function(ele){
      gradient[ele.getAttribute("data-key")] = ele.value;
    });
    heatmapOverlay.setOptions({"gradient":gradient});
  }

  function changePlace(placename){
    var zoom = map.getZoom();
    var city = map.getCurrentCity();
      map.centerAndZoom(placename,city.name == placename ? zoom : 11);
  }

  //判断浏览区是否支持canvas
  function isSupportCanvas(){
    const elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  }

  return map;
}


//线下支付 热力图
function myChartpayfor(time,cityid,placename, map, bssw, bsne) {
    let data;
    $.ajax({
        type: "post",
        async: false,
        url: fixurl+"TradeArea/payforInfo",
        dataType: "json",
        data:{
            data: window.JSON.stringify({
                "month":time,
                "province_id":'',
                "city_id":cityid,
                "points": bssw && bsne ? [{la: bssw.lat, lo: bssw.lng}, {la: bsne.lat, lo: bsne.lng}] : '',
            })
        },
        success: function(json){
            if (json.code === 1) {
              alert(json.desc);
            }
            data=json;
        },
        error:function(){
            alert("接口请求失败")
        }
    });

    // const map = new BMap.Map("payfor");          // 创建地图实例
    // // console.log(data);
    // const point = new BMap.Point(116.418261, 39.921984);
    // map.centerAndZoom(point, 11);             // 初始化地图，设置中心点坐标和地图级别
    // map.enableScrollWheelZoom(); // 允许滚轮缩放
    // map.disableScrollWheelZoom();
    // map.disableDragging();     //禁止拖拽
    const points = data.data;
    if(points) {
      var sortData = [].concat(data);
      sortData.map(function(item) {
        item.count = item.count * 1;
        return item;
      });

      var maxData = data.balance;

      if(!isSupportCanvas()){
          alert('热力图目前只支持有canvas支持的浏览器,您所使用的浏览器不能使用热力图功能~')
      }
      //详细的参数,可以查看heatmap.js的文档 https://github.com/pa7/heatmap.js/blob/master/README.md
      //参数说明如下:
    /* visible 热力图是否显示,默认为true
    * opacity 热力的透明度,1-100
    * radius 势力图的每个点的半径大小
    * gradient  {JSON} 热力图的渐变区间 . gradient如下所示
    *	{
    .2:'rgb(0, 255, 255)',
    .5:'rgb(0, 110, 255)',
    .8:'rgb(100, 0, 255)'
    }
    其中 key 表示插值的位置, 0~1.
    value 为颜色值.
    */

      if(placename!=''){
        changePayforPlace(placename);
      }

      window.heatmapOverlay2 = window.heatmapOverlay2 || new BMapLib.HeatmapOverlay({"radius":20});

      map.addOverlay(heatmapOverlay2);
      if(points.length) {
        // 去超过90%的那个值
        window.heatmapOverlay2.setDataSet({data:points,max:maxData});
      }

      //是否显示热力图
      heatmapOverlay2.show();
    }



    function closeHeatmap(){
        heatmapOverlay2.hide();
    }
    // closeHeatmap();

    function setGradient(){
      /*格式如下所示:
       {
       0:'rgb(102, 255, 0)',
       .5:'rgb(255, 170, 0)',
       1:'rgb(255, 0, 0)'
       }*/
        const gradient = {};
        let colors = document.querySelectorAll("input[type='color']");
        colors = [].slice.call(colors,0);
        colors.forEach(function(ele){
            gradient[ele.getAttribute("data-key")] = ele.value;
        });
        heatmapOverlay2.setOptions({"gradient":gradient});
    }

    function changePayforPlace(placename){
      map.centerAndZoom(placename,11);
    }

    //判断浏览区是否支持canvas
    function isSupportCanvas(){
        const elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }
    return map;
}

//地产应用
//柱折混合
function myLineBar(time,province,city,type){

  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById('main'),'estate');

  let data;
  $.ajax({
        type: "post",
        async: false,
        url: fixurl+"Landestate/"+type,
        dataType: "json",
        data:{
            data: window.JSON.stringify({
                "month":time,
                "province_id":province,
                "city_id":city
            })
        },
        success: function(json){
            data=json;
            window.landData = json;
            // console.log(json);
        },
        error:function(){
            alert("接口请求失败")
        }
    });

  //x轴
  const xAxilist = new Array();

  //柱状图
  const bardata = new Array();

  //折线图
  const linedata = new Array();

  //获取数据
  for(let i in data){
     if(data[i].mau == undefined){
      bardata.push({
        value:0,
        xname:data[i].name,
        lineval:data[i].growth,
        itemStyle:{
          normal:{
            color:'#3c82e3'
          }
        }
      });
    }else if(data[i].growth == 'undefined'){
      bardata.push({
        value:data[i].mau.toFixed(0),
        xname:data[i].name,
        lineval:0,
        itemStyle:{
          normal:{
            color:'#3c82e3'
          }
        }
      });
    }else if(data[i].mau !==undefined && data[i].growth !=='undefined'){
      //x轴
      bardata.push({
        value:data[i].mau.toFixed(1),
        xname:data[i].name,
        lineval:data[i].growth.toFixed(1),
        itemStyle:{
          normal:{
            color:'#3c82e3'
          }
        }
      });
    }else{
       bardata.push({
         value:0,
         xname:data[i].name,
         lineval:data[i].growth.toFixed(1),
         itemStyle:{
           normal:{
             color:'#3c82e3'
           }
         }
       });
      return
    }
  }
  //柱状图排序
  bardata.sort(function (x, y){
    return y.value - x.value;
  });
  var dataShadow = [];
  //x轴名称
  bardata.forEach(function (item, i){
    dataShadow.push(Math.max(bardata[0].value, 1));
    xAxilist.push({
      value:item.xname,
      textStyle:{
        fontSize: 12,
        color: '#9ea7b4'
      }
    });
    linedata.push({
      value:item.lineval,
      label:{
        normal: {
          show: true,
          formatter: item.lineval * 100 + '%'
        }
      },
      itemStyle:{
        normal:{
          color:"#fff"
        }
      }
    });
  });

  const xAxi = [{
          type: 'category',
          data: xAxilist,

          axisPointer: {
              type: 'shadow'
          },
          axisLabel: {
            rotate: 20,
            interval: 0,
            // showMinLabel: false,
            // showMaxLabel: false,
          },
          axisLine: {
            lineStyle: {
              type: 'solid',
              color:'#999',
              width:'1'
            }
          }
      }
  ];

  const option = {
    color: ['#f9e430', '#3c82e3', '#f9e430'],
    toolbox: {
      feature: {
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    grid: {
      bottom:'22%'
    },
    legend: {
      right: 90,
      top: 10,
      data: [{
        name: '同比增速',
        icon: 'roundRect'
      }]
    },
    xAxis: xAxi,
    yAxis: [{
        type: 'value',
        name: '',
        interval: 2000,
        nameTextStyle:{
          color:'#79839e'
        },
        axisLabel: {
          formatter: '{value}',
          textStyle:{
            color:'#79839e'
          }
        },
        splitLine:{
          show:false,
          lineStyle:{
            type: 'solid',
            color:'#79839e',
            width:'1'
          }
        }
      }
      ,
      {
        type: 'value',
        name: '',
        // min: 'dataMin',
        max: 'dataMax',
        interval: 5,
        axisLabel: {
          formatter: ''
        }
      }
    ],
    series: [
      { // For shadow
        type: 'bar',
        itemStyle: {
            normal: {color: 'rgba(0,0,0,0.01)'},
            emphasis: {color: 'rgba(0,0,0,0.01)'}
        },
        barWidth: '50%',
        barGap:'-100%',
        barCategoryGap:'50%',
        data: dataShadow,
        animation: false
      },
      {
        type:'bar',
        data:bardata,
        barWidth : 60,//柱图宽度
        itemStyle: {
            normal: {
              color: '#f60',
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#fff'
                },
                formatter:function(params){
                  if(params.value==0){
                      return '';
                  }else
                  {
                      return params.value;
                  }
                }
              }
            }
        },

      },
      {
        type:'line',
        name: '同比增速',
        yAxisIndex: 1,
        itemStyle:{
          normal:{
            label:{
              show: true,
              fontStyle:'#fff'
            },
            lineStyle:{
              color:'#f9e430'
            }
          }
        },
        data:linedata
      }
    ]
  };


  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  barClick({
    dataIndex: 0,
    name: xAxilist[0]
  });
  // 点击事件
  myChart.on('click', barClick);
  function barClick (params) {
    var data = window.landData || data;
    var appName = params.name && params.name.value ? params.name.value : params.name;

        $(".barinfo").show();

        $(".section-num-tit span").text(appName +"核心数据");

      let mess='';

      //获取到点击柱状图的数据

      for(let x in data){

        if(data[x].name ==appName){

          mess = data[x];

        }

      }

      $(".section-num-tab").html(`<ul>
            <li class="active" data-type="day" data-name="DAU" data-value="dau" data-unit="万"><span>`
            +(
              mess.avgDau ? mess.avgDau.toFixed(1) : 0.0
            )+`</span><span class="tab-unit">万</span><div class="tab-describe">DAU<i></i></div></li>
            <li data-type="month" data-name="MAU" data-value="MonthActiveUser" data-unit="万"><span>`+
            (
              mess.avgMau ? mess.avgMau.toFixed(1) : 0.0
            )+`</span><span class="tab-unit">万</span><div class="tab-describe">MAU<i></i></div></li>
          </ul>

          <ul>
            <li data-type="day" data-name="每日打开次数" data-value="dayActiveTimes" data-unit="次"><span>`
            +(
              mess.avgDayActiveTimes ? mess.avgDayActiveTimes.toFixed(0) : 0
            )+`</span><span class="tab-unit">次</span><div class="tab-describe">每日打开次数<i></i></div></li>
            <li data-type="day" data-name="每日打开时长" data-value="dayActiveSecs" data-unit="秒"><span>`
            +(
              mess.avgDayActiveSecs ? mess.avgDayActiveSecs.toFixed(1) : 0.0
            )+`</span><span class="tab-unit">秒</span><div class="tab-describe">每日打开时长<i></i></div></li>
          </ul>

          <ul>
            <li data-type="month" data-name="月均用户留存" data-value="monthLeftRatio" data-unit="%"><span>`+
            (
              mess.avgMonthLeftRatio ? mess.avgMonthLeftRatio.toFixed(1) : 0.0
            )+`</span><span class="tab-unit">%</span><div class="tab-describe">月均用户留存<i></i></div></li>
            <li data-type="month" data-name="月用户新增" data-value="monthIncUser" data-unit="万"><span>`+
            (
              mess.avgMonthIncUser ? mess.avgMonthIncUser.toFixed(1) : 0.0
            )+`</span><span class="tab-unit">万</span><div class="tab-describe">月用户新增<i></i></div></li>
          </ul>
      `);

    //x轴数据
    let xAxisber = new Array();
    //折线数据
    let serverber = new Array();

    for(let i in mess.detail['day']){
      xAxisber.push({
        value: i.substring(0,10),
        textStyle: {
          fontSize: 12,
          color: '#868e9a'
        }
      });
      serverber.push({
        value:mess.detail['day'][i].dau,
        itemStyle:{
          normal:{
            color:'#3c82e3'
          }
        }
      });
      // console.log(mess.detail['day'][i].dau)
    }
    myLine(0,xAxisber,serverber,'万');

      $(".section-num-tab ul li").on("click",function () {
        //地产应用
        // 点击样式
        $(".section-num-tab ul li").removeClass("active");
        $(this).addClass("active");
        // 显示类型
        const type = $(this).data("type");
        const name = $(this).data("name");
        const val = $(this).data("value");
        const unit = $(this).data("unit");
        // 折线图标题

        $(".line-title").text(name+" 趋势图");

        //显示
        $(".line-chart").show();
        //x轴数据
        const xAxis = new Array();
        //折线数据
        const server = new Array();
        for(let i in mess.detail[type]){
          xAxis.push({
            value: i.substring(0,10),
            textStyle: {
              fontSize: 12,
              color: '#868e9a'
            }
          });
          server.push({
            value:mess.detail[type][i][val],
            itemStyle:{
              normal:{
                color:'#3c82e3'
              }
            }
          })
        }
        //调用折线图
        myLine(params.dataIndex,xAxis,server,unit);
      });

  }
}

//折线图
function myLine(dataIndex,xAxis,server,unit){
  // 基于准备好的dom，初始化echarts实例
  const myChart = echarts.init(document.getElementById('mains'),'estate');
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '12%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    dataZoom: [{
      type: 'slider',
      show: true,
      xAxisIndex: [0],
      start: 0,
      end: (10 / xAxis.length) * 400,
      // bottom:'-20%',
      handleStyle: {
        color: '#4a5676',
        borderWidth: '3',
        borderColor: '#4a5676',
      },
      fillerColor: '#79839e',
      dataBackground: {
        areaStyle: {
          color: '#79839e',
        }
      }
    }, ],
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: xAxis
    },
    yAxis: {
      type: 'value',
      name:'单位（'+unit+'）',
      nameTextStyle:{
        color:'#79839e'
      },
      axisLabel:{
        textStyle:{
          color:'#79839e'
        }
      }
    },
    series: [
      {
        type:'line',
        name:"",
        stack: '总量',
        itemStyle:{
          normal:{
            lineStyle:{
              color:'#3c82e3'
            }
          }
        },
        data:server
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}


/**
  创建分页
*/
function createPage(startPage, endPage, current) {
  var pageStr = '';
  for (var i = startPage; i <= endPage; i++) {
    var isCurrentPage = current == i;
    var disabledString = isCurrentPage ? ' disabled ' : '';
    var activeString = isCurrentPage ? ' active ' : '';
    var isFirst = current == 1;
    if (i === 1) {
      pageStr += '<li class="prevPage ' + disabledString + '" data-page="' +
        (isFirst ? 1 : current - 1) + '"><a href="javascript:;"><i class="iconfont icon-zuo"></i></a></li>';
    }
    pageStr += '<li class="' + activeString + '" data-page="' + i + '"><a href="javascript:;">' + i + '</a></li>';
  }
  return pageStr;
}

function initPaging(pageElem, totalPage, currentPage) {
  totalPage = parseInt(totalPage || 1, 10);
  currentPage = parseInt(currentPage, 10) || 1;
  if (currentPage > totalPage) {
    currentPage = totalPage;
  } else if (currentPage < 1) {
    currentPage = 1;
  }
  var pageString = '';
  var pageGroupLength = 5;
  var isLastPage = totalPage == currentPage;
  if (totalPage <= 10) {
    pageString += createPage(1, totalPage - 1, currentPage);
  } else {
    pageString += createPage(1, 2, currentPage);

    if (currentPage > pageGroupLength && currentPage <= totalPage - pageGroupLength + 1) {
      pageString += '<li><span>&hellip;</span></li>';
      pageString += createPage(currentPage - 2, currentPage + 2, currentPage);
      pageString += '<li><span>&hellip;</span></li>';
    } else if (currentPage <= pageGroupLength) {
      pageString += createPage(3, 2 + pageGroupLength, currentPage);
      pageString += '<li><span>&hellip;</span></li>';
    } else if (currentPage > totalPage - pageGroupLength + 1) {
      pageString += '<li><span>&hellip;</span></li>';
      pageString += createPage(totalPage - pageGroupLength + 1, totalPage - 1, currentPage);
    }
  }

  pageString += createPage(totalPage, totalPage, currentPage);
  pageString += '<li class="nextPage ' + (
    isLastPage ? ' disabled ' : ''
  ) + '" data-page="' + (isLastPage ? totalPage : currentPage + 1) +
  '"><a href="javascript:;"><i class="iconfont icon-right"></i></a></li>';

  $(pageElem).html(pageString);
}
