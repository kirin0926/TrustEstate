function getIndustry(details, industryId) {
  return details.industry[industryId];
}

function initSexCanvas(selector, sexDatas) {
  var sexDis = $(selector)[0];
  sexDis.width = $(sexDis).width();
  sexDis.height = $(sexDis).height();
  var sexCtx = sexDis.getContext('2d');
  // 画 100个 矩形，分2组的颜色。
  sexCtx.fillStyle = "#3c82e3";

  var sexDisUnit = Math.min(sexDis.width / 60, sexDis.height / 14);

  var rectPadding = Math.floor(sexDisUnit);
  var rectSize = Math.round(2 * sexDisUnit);

  var targetCol = Math.floor(Math.floor(sexDatas[0].value) / 5);
  var targetRow = Math.min(Math.ceil(Math.floor(sexDatas[0].value) % 5), 4);

  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].forEach(function (item, col) {
    var x = col * rectPadding + rectSize * col;
    [1, 2, 3, 4, 5].forEach(function (rowItem, row) {
      var y = row * 10 + rectSize * row;
//    console.log(row + 1 > targetRow && col + 1 > targetCol , row + 1 > targetRow, col + 1 > targetCol)
      if (row + 1 > targetRow && col + 1 > targetCol) {
        sexCtx.fillStyle = '#ff8d65';
      }
      createRect(sexCtx, x, y, rectSize);
    });
  });

  function createRect(ctx, x, y, rectSize) {
    ctx.fillRect(x, y, rectSize, rectSize);
  }
}

// 完成sexNums
function sexNums(sex, valueIndex) {
  var vIndex = valueIndex || 0;
  var f = sex['女'] || 1 - sex['男'] || 0;
  var male = Math.floor(sex['男'] * 100)
  return '<div class="sex-male">\
  <i class="iconfont icon-nanhai"></i>\
  <div>男</div><div>' + male +
    '%</div></div>\
  <div class="sex-female">\
  <i class="iconfont icon-nvhai"></i>\
  <div>女</div><div>' +
    (100 - male) + '%</div></div>';
}

function initAgeChart(selector, data, valueIndex) {
  if (data && $(selector)[0]) {
    var ageChart = echarts.init($(selector)[0], 'estate');

    var legendData = [];
    var seriesData = [];
    var vIndex = valueIndex || 0;
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        seriesData.push({
          name: key,
          value: data[key]
        });
        legendData.push(key);
      }
    }


    var ageChartOptions = {
      color: ['#ff8d65', '#f9e430', '#3ad25a', '#4777e7', '#724cf7',
        '#79839e', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
        '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
      ],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {d}%"
      },
      legend: {
        orient: 'vertical',
        x: 'right',
        top: 'middle',
        align: 'left',
        data: legendData,
        itemGap: 25
      },
      series: [{
        name: '年龄分布',
        type: 'pie',
        selectedMode: 'single',
        radius: ['35%', '70%'],
        center: ['40%', '50%'],
        label: {
          normal: {
            // position: 'inner',
            formatter: '{d}%'
          }
        },
        labelLine: {
          normal: {
            show: true
          }
        },
        data: seriesData,
        markPoint: {
          symbol: 'path://M511.205717 538C596.257568 538 665.205717 469.051851 665.205717 384 665.205717 298.948149 596.257568 230 511.205717 230 426.153865 230 357.205717 298.948149 357.205717 384 357.205717 469.051851 426.153865 538 511.205717 538ZM648.753123 563.007445 635.144284 562.846297C631.462077 562.802694 625.87096 564.222454 622.641474 565.999443 622.641474 565.999443 611.751353 572.216428 602.71361 576.119353 575.7503 587.763387 544.994667 594.359184 512.347373 594.359184 479.853625 594.359184 449.234177 587.825283 422.362125 576.28331 413.185427 572.341773 402.043253 565.989848 402.043253 565.989848 398.825882 564.21011 393.232493 562.789468 389.557674 562.816699L376.132999 562.91618C326.815542 569.419886 274.875804 613.104376 260.108148 660.476686 260.108148 660.476686 244.293692 692.38617 242.074429 755.137314 241.906963 759.872538 242.071982 755.207052 242.071982 755.207052 241.93111 763.304837 247.506512 773.144095 254.668224 776.928522 254.668224 776.928522 341.02314 832 511.995577 832 682.968014 832 769.337731 776.920979 769.337731 776.920979 776.427141 773.026493 782.095738 763.310664 781.925685 755.208277 781.925685 755.208277 782.084736 759.767052 781.918426 754.995194 779.741421 692.531339 764.404367 661.941143 764.404367 661.941143 750.612591 614.262743 697.958709 570.241976 648.753123 563.007445Z" p-id="1522"></path><path d="M209.173248 654.908034C119.123765 649.047335 76.826078 621.586358 76.826078 621.586358 69.675642 617.792628 63.96768 608.147139 64.04914 604.834016 64.04914 604.834016 63.938575 608.004686 64.04914 604.834016 65.496445 563.329793 75.692746 543.004082 75.692746 543.004082 84.861723 511.324082 119.866804 482.074402 152.579406 477.267405L159.398302 477.186704C163.077034 477.143166 168.666159 478.557658 171.898919 480.318124 171.898919 480.318124 177.178731 483.386331 183.187157 485.979637 201.112765 493.716536 221.559565 498.099125 243.26397 498.099125 264.866295 498.099125 285.222558 493.757663 303.087496 486.088578 309.1883 483.469616 314.626033 480.315628 314.626033 480.315628 317.852852 478.544033 323.44867 477.129942 327.145005 477.157318L332.087105 477.19392 332.087115 477.193939C340.062408 492.395239 349.90786 506.461389 361.317778 519.0867L348.955108 519.249096C290.292534 528.816985 227.518924 587.0358 211.076459 650.091946 211.076459 650.091946 210.352911 651.692855 209.173248 654.908034ZM815.22569 655.881573C904.997669 649.965191 947.168831 622.586358 947.168831 622.586358 954.319266 618.792628 960.027228 609.147139 959.945768 605.834016 959.945768 605.834016 960.056334 609.004686 959.945768 605.834016 958.498463 564.329793 948.302163 544.004082 948.302163 544.004082 939.133185 512.324082 904.128105 483.074402 871.415502 478.267405L864.596606 478.186704C860.917875 478.143166 855.328749 479.557658 852.095989 481.318124 852.095989 481.318124 846.816177 484.386331 840.807752 486.979637 822.882144 494.716536 802.435343 499.099125 780.730938 499.099125 759.128613 499.099125 738.772351 494.757663 720.907413 487.088578 714.806608 484.469616 709.368875 481.315628 709.368875 481.315628 706.142056 479.544033 700.546239 478.129942 696.849904 478.157318L691.907803 478.19392 691.907793 478.193939C684.151527 492.977763 674.626413 506.687931 663.613642 519.043253L673.971018 519.128395C732.766964 527.729746 794.689176 585.503823 812.295079 648.155156 812.295079 648.155156 813.448883 650.737755 815.22569 655.881573ZM697.107902 299.477497C715.806005 273.740799 746.191136 257 780.49706 257 837.330802 257 883.403652 302.946288 883.403652 359.623907 883.403652 416.301525 837.330802 462.247813 780.49706 462.247813 752.709257 462.247813 727.493887 451.264172 708.978248 433.412848 712.933423 417.595429 715.033319 401.042943 715.033319 384 715.033319 383.480966 715.031371 382.962387 715.027483 382.44427 714.948258 352.875916 708.548455 324.793723 697.107904 299.477501L697.107902 299.477497ZM327.162738 298.858852C308.488448 272.906294 277.972925 256 243.497849 256 186.664107 256 140.591256 301.946288 140.591256 358.623907 140.591256 415.301525 186.664107 461.247813 243.497849 461.247813 271.285652 461.247813 296.501021 450.264172 315.01666 432.412848 311.061485 416.595429 308.96159 400.042943 308.96159 383 308.96159 352.986575 315.473968 324.494198 327.162738 298.858852L327.162738 298.858852Z',
          symbolSize: [35, 30],
          symbolOffset: [0, 0],
          data: [{
            x: '40%',
            y: '50%'
          }],
          tooltip: {
            show: false
          },
          label: {
            normal: {
              show: false,
            }
          },
          itemStyle: {
            normal: {
              color: '#79839e'
            },
            emphasis: {
              color: '#79839e'
            }
          }
        },
      }]
    };

    ageChart.setOption(ageChartOptions);
  }
}

function createDataTableItem(item, i, vsApp, version) {
  var vsAppData = vsAppData || '';
  var val = '0';
  var itemHtml = '';

  if (item.value instanceof Array) {
    itemHtml += item.value.map(function (v, i) {
      if (!vsApp && i === 3) {
        return '';
      }
      val = v;
      // val = isNaN(val) ? '0' : val.toFixed(1) + '%';
      if (vsApp) {
        val = v * 100;
        val = isNaN(val) ? '0' : (val >= 0.05 && val < 0.1 ? val.toFixed(3) : val.toFixed(1)) + '%';
      } else {
        if (i < 1) {
          val = v * 100;
          val = isNaN(val) ? '0' : (val >= 0.05 && val < 0.1 ? val.toFixed(3) : val.toFixed(1)) + '%';
        } else {
          if (val !== '500+' && val !== '--') {
            val = isNaN(val) ? '0' : (val * 1).toFixed(1);
          }
        }
      }
      return '<td>' + val + '</td>';
    }).join('');
    itemHtml += '</tr>';
  } else {
    itemHtml = '<td>';
    val = item.value * 100;
    val = isNaN(val) ? '0' : val.toFixed(1) + '%';
    itemHtml += val + '</td>'
  }
  version = version;
  if (version && version == '安卓版本') {
    version = '<td><a  class="js-versionBtn">' + item.name.split('.')[0] + '</a></td>';
  }
  return '<tr><td><span class="mr-5">' + (i + 1) + '. </span> ' + '<i class="newname" title="' + item.name + '"> ' +
    item.name + '</i></td>' + version + itemHtml;
}

function createDataTable(datas, vsApp, version) {
  return datas.map(function (item, i) {
    return createDataTableItem(item, i, vsApp, version);
  }).join('');
}

function createDataTableHead(title, appName, vsApp, hasGlobal, hasIndustry) {
  var version = title == '安卓版本' ? '<th class="versionBtn">版本号</th>' : '';
  var vsAppHtml = vsApp ? '<th>' + vsApp +
  '</th>' : '<th  style="min-width:4em;">全市TGI</th>';
  return '<tr><th>' + title + '</th>' + version + '<th title="渗透率' +
    '"><span class="p-dataTableAppName" style="max-width: 9em;">渗透率</span></th>' + vsAppHtml + '</tr>';
}

// 人群分类
function initManCategories(selector, data, details, isInter) {
  var $manCategories = $(selector)[0];
  if (data && $manCategories) {
    var dataShadow = [];

    var xData = [];
    var datas = [];

    var hasglobal = details.province && details.province['man_type_dist'] ? true : false;
    var industry = details.city;
    var hasindustry = industry && industry['man_type_dist'] ? true : false;
    var tableDatas = [];

    var vsName = '';

    var tempData = [];

    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        tempData.push({
          name: key,
          value: data[key]
        })
      }
    }
    tempData.sort(function (x, y) {
      return y.value - x.value;
    });

    tempData.forEach(function (item) {
      var arrData = [];
      var key = item.name;
      xData.push(key);
      datas.push((item.value * 100).toFixed(1));
      arrData.push(item.value);

      // if (hasglobal) {
      //   if (details.province.man_type_dist[key]) {
      //     var tgi = (item.value / details.province.man_type_dist[key]);
      //     if (tgi > 500) {
      //       arrData.push('500+');
      //     } else {
      //       arrData.push(tgi);
      //     }
      //   } else {
      //     arrData.push('0');
      //   }
      // }

      if (hasindustry) {
        if (industry.man_type_dist[key]) {
          var tgi = (item.value / industry.man_type_dist[key]);
          if (tgi > 500) {
            arrData.push('500+');
          } else {
            arrData.push(tgi);
          }
        } else {
          if (industry.man_type_dist[key] === 0) {
            arrData.push('500+');
          }
          arrData.push('--');
        }
      } else {
        arrData.push('--');
      }
      tableDatas.push({
        name: key,
        value: arrData
      });
    });

    var th = createDataTableHead('人群分类', data.appname, vsName, hasglobal, hasindustry);
    $('.manTypeHead thead').html(th);
    var tb = createDataTable(tableDatas, vsName, '人群分类');
    $('.manTypeHead tbody').html(tb);
    $('.manTypeList thead').html(th);
    $('.manTypeList tbody').html(tb);

    // 放到一个图。就是2个series
    var series = [{
      name: '人群分类',
      type: 'bar',
      // barWidth: '60%',
      label: {
        normal: {
          show: true,
          position: 'top',
          formatter: '{c}%'
        },
      },
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0, 1, 0, 0, [{
                offset: 0,
                color: '#724cf7'
              },
              {
                offset: 1,
                color: '#4678e6'
              }
            ]
          )
        },
        emphasis: {
          color: new echarts.graphic.LinearGradient(
            0, 1, 0, 0, [{
                offset: 0,
                color: '#724cf7'
              },
              {
                offset: 1,
                color: '#4678e6'
              }
            ]
          )
        }
      },
      data: datas
    }]

    var manCategoriesChart = echarts.init($manCategories, 'estate');
    var manCategoriesOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (ps) {
          return ps[0].name + '<br />' + ps.map(function (item, i) {
            var result = '';
            if (i !== 0) {
              result += '<br />';
            }
            return result + item.seriesName + ': ' + item.value + '%';
          }).join('');
        }
        // showContent: false,
      },
      grid: {
        left: '4%',
        right: '4%',
        bottom: '17%',
        top: '40',
        containLabel: true
      },
      dataZoom: [{
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        start: 0,
        end: (10 / datas.length) * 100,
        // handleIcon: 'path://M772.247 65.862v892.275h-520.496v-892.275z',
        // handleSize: '110%',
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
      xAxis: [{
        type: 'category',
        data: xData,
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          interval: 0,
          rotate: 25
        },
      }, ],
      yAxis: [{
        type: 'value',
        axisLabel: {
          formatter: '{value} %'
        },
      }],
      series: series
    };
    manCategoriesChart.setOption(manCategoriesOption);
  }

}

function initNetTypeChart(selector, data) {
  var $selector = $(selector)[0];
  if ($selector && data) {
    // var vIndex = valueIndex || 0;
    var yMax = 100;
    var dataShadow = [];

    var xData = [];
    var datas = [];
    var series = [];
    var yAxis = [];

    var pathSymbols = {
      '2g': 'path://M633.413 223.099l15.306 56.093c84.489-23.055 171.668 26.749 194.722 111.233l56.092-15.306c-31.51-115.473-150.651-183.528-266.119-152.02zm-32.004-117.282l15.306 56.092c149.26-40.73 303.278 47.252 344.008 196.513l56.092-15.306c-49.182-180.239-235.166-286.482-415.405-237.299zm-531.087 757.006v-83.463c6.158-7.716 22.387-22.388 48.687-44.05 102.011-86.542 152.219-146.061 150.698-178.519-3.115-33.98-20.105-51.766-51.006-53.324-30.937 3.115-47.927 23.981-51.006 62.598h-90.418c1.522-78.827 48.687-119.762 141.424-122.878 91.18 4.637 138.309 43.29 141.424 115.922 0 47.927-44.847 108.966-134.469 183.155-32.458 27.822-54.121 47.927-64.916 60.279h201.703v60.279h-292.121zm642.205-157.653h-83.463v-71.871h173.882v215.614c-30.937 9.273-62.598 13.911-95.056 13.911-24.744 3.079-57.201 4.637-97.374 4.637-131.39-7.716-198.625-80.349-201.704-217.932 3.079-140.628 70.312-215.615 201.704-224.888 134.469 0 200.906 46.368 199.385 139.106h-97.374c0-47.891-28.619-71.872-85.782-71.872-78.826 1.557-119.037 54.121-120.558 157.654 1.521 102.011 41.731 153.813 120.558 155.335 23.184 0 50.207-3.079 81.145-9.273-1.558 1.557 0 1.557 4.637 0v-90.419z',
      '3g': 'path://M633.413 223.099l15.306 56.093c84.489-23.055 171.668 26.749 194.722 111.233l56.092-15.306c-31.51-115.473-150.651-183.528-266.119-152.02zm-32.004-117.282l15.306 56.092c149.26-40.73 303.278 47.252 344.008 196.513l56.092-15.306c-49.182-180.239-235.166-286.482-415.405-237.299zm-531.087 643.403h90.418c1.522 37.095 18.547 57.961 51.006 62.598 32.458-3.079 50.209-23.944 53.323-62.598-1.557-46.368-34.776-68.756-99.693-67.234v-57.96c67.995-1.522 101.214-23.184 99.693-64.916-1.557-35.537-18.547-54.085-51.006-55.642-27.822 4.637-44.05 23.184-48.687 55.642h-90.418c4.637-74.19 51.006-112.806 139.106-115.922 86.542 7.753 132.911 42.529 139.106 104.33-1.557 55.642-27.822 89.658-78.826 102.011 54.085 15.468 81.145 52.563 81.145 111.285-7.753 64.916-56.439 100.49-146.061 106.648-92.738-.001-139.107-39.414-139.107-118.241zm642.205-44.049h-83.463v-71.871h173.882v215.614c-30.937 9.273-62.598 13.911-95.056 13.911-24.744 3.079-57.201 4.637-97.374 4.637-131.39-7.716-198.625-80.349-201.704-217.932 3.079-140.628 70.312-215.615 201.704-224.888 134.469 0 200.906 46.368 199.385 139.106h-97.374c0-47.891-28.619-71.872-85.782-71.872-78.826 1.557-119.037 54.121-120.558 157.654 1.521 102.011 41.731 153.813 120.558 155.335 23.184 0 50.207-3.079 81.145-9.273-1.558 1.557 0 1.557 4.637 0v-90.419z',
      '4g': 'path://M633.413 223.099l15.306 56.093c84.489-23.055 171.668 26.749 194.722 111.233l56.092-15.306c-31.51-115.473-150.651-183.528-266.119-152.02zm-32.004-117.282l15.306 56.092c149.26-40.73 303.278 47.252 344.008 196.513l56.092-15.306c-49.182-180.239-235.166-286.482-415.405-237.299zm-368.796 757.006v-88.101h-166.927v-78.826l166.927-243.435h85.782v255.027h57.961v67.234h-57.961v88.101h-85.782zm0-155.335v-146.061l-99.693 146.061h99.693zm479.915-2.318h-83.463v-71.871h173.882v215.614c-30.937 9.273-62.598 13.911-95.056 13.911-24.744 3.079-57.201 4.637-97.374 4.637-131.39-7.716-198.625-80.349-201.704-217.932 3.079-140.628 70.312-215.615 201.704-224.888 134.469 0 200.906 46.368 199.385 139.106h-97.374c0-47.891-28.619-71.872-85.782-71.872-78.826 1.557-119.037 54.121-120.558 157.654 1.521 102.011 41.731 153.813 120.558 155.335 23.184 0 50.207-3.079 81.145-9.273-1.558 1.557 0 1.557 4.637 0v-90.419z',
      'wifi': 'path://M240.401 528.508l-43.415-43.416c40.913-40.913 88.556-73.036 141.604-95.48 54.94-23.243 113.283-35.029 173.404-35.029 60.138 0 118.488 11.785 173.431 35.029 53.059 22.446 100.695 54.573 141.585 95.487l-43.428 43.403c-72.516-72.56-168.967-112.52-271.588-112.52-102.575 0-199.03 39.962-271.594 112.526zm109.824 109.797l-43.421-43.411c54.812-54.826 127.684-85.019 205.19-85.019 77.534 0 150.408 30.196 205.196 85.024l-43.43 43.399c-43.192-43.221-100.641-67.026-161.766-67.026-61.104 0-118.555 23.806-161.769 67.032zm61.023 61.017l100.747 100.733 100.77-100.733c-25.824-25.776-61.434-41.711-100.77-41.711-39.333 0-74.946 15.934-100.747 41.711zm-279.775-279.784l-43.413-43.418c55.056-55.049 119.173-98.272 190.572-128.47 73.934-31.269 152.448-47.124 233.362-47.124 80.924 0 159.445 15.854 233.383 47.122 71.397 30.195 135.516 73.415 190.573 128.461l-43.411 43.42c-49.438-49.428-106.998-88.23-171.079-115.331-66.329-28.051-136.804-42.274-209.468-42.274-72.653 0-143.121 14.223-209.445 42.275-64.08 27.102-121.638 65.908-171.075 115.339z',
    }
    var colorIndex = 0;
    var colors = ['#4ed399', '#ffaa3d', '#63a4ff', '#ff8d65'];
    var colors2 = ['#caf2e0', '#ffe5c4', '#e0edff', '#ffddd0'];


    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        xData.push(key);
        datas.push({
          // itemStyle: {
          //   normal: {
          //     color: colors[colorIndex]
          //   },
          // },
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 1, 0, 0, [{
                    offset: 0,
                    color: '#724cf7'
                  },
                  {
                    offset: 1,
                    color: '#4678e6'
                  }
                ]
              )
            },
            emphasis: {
              color: new echarts.graphic.LinearGradient(
                0, 1, 0, 0, [{
                    offset: 0,
                    color: '#724cf7'
                  },
                  {
                    offset: 1,
                    color: '#4678e6'
                  }
                ]
              )
            }
          },
          value: Math.round(data[key] * 100)
        });
        dataShadow.push({
          itemStyle: {
            normal: {
              color: '#2f3c56'
            }
          },
          value: yMax
        });
        colorIndex++;
      }
    }

    yAxis = [{
      type: 'value',
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        formatter: '{value} %'
      },
      max: yMax
    }];
    series = [{ // For shadow
      type: 'bar',
      barGap: '-100%',
      barWidth: '50%',
      // barCategoryGap: '40%',
      data: dataShadow,
      animation: false
    }, {
      name: '联网情况',
      type: 'bar',
      barWidth: '60%',
      data: datas
    }, {
      name: 'glyph',
      type: 'pictorialBar',
      barGap: '-100%',
      // symbolPosition: 'end',
      symbolSize: 40,
      symbolOffset: [0, '-12'],
      data: [{
        value: 60,
        symbol: pathSymbols[xData[0] ? xData[0].toLowerCase() : ''],
        symbolSize: [40, 40],
        itemStyle: {
          normal: {
            color: 'rgba(255,255,255,0.8)'
          }
        },
        z: 4
      }, {
        value: 60,
        symbol: pathSymbols[xData[1] ? xData[1].toLowerCase() : ''],
        symbolSize: [40, 40],
        itemStyle: {
          normal: {
            color: 'rgba(255,255,255,0.8)'
          },
        },
        z: 4
      }, {
        value: 60,
        symbol: pathSymbols[xData[2] ? xData[2].toLowerCase() : ''],
        symbolSize: [40, 40],
        itemStyle: {
          normal: {
            color: 'rgba(255,255,255,0.8)'
          },
        },
        z: 4
      }, {
        value: 60,
        symbol: pathSymbols[xData[3] ? xData[3].toLowerCase() : ''],
        symbolSize: [40, 40],
        itemStyle: {
          normal: {
            color: 'rgba(255,255,255,0.8)'
          },
        },
        z: 4
      }]
    }];

    var chart = echarts.init($selector, 'estate');
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        showContent: false,
      },
      grid: {
        left: '2%',
        right: '4%',
        bottom: '3%',
        top: '4%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: xData,
        axisTick: {
          show: false,
          alignWithLabel: true
        },
        axisLabel: {
          interval: 0,
          textStyle: {
            fontSize: 14,
            color: '#fff'
          }
        },
      }, {
        type: 'category',
        axisLabel: {
          formatter: '{value} %',
          textStyle: {
            color: function (value, index) {
              return '#fff';
            },
            fontSize: 14
          }
        },
        data: datas
      }],
      yAxis: yAxis,
      series: series
    };

    chart.setOption(option);
  }
}

function initPhoneBrandChart(selector, phone_brand_dist, details, vsApp) {
  var $selector = $(selector)[0];
  if ($selector && phone_brand_dist) {
    var phone_color = ['#ff8d65', '#f9e430', '#3ad25a', '#4777e7', '#724cf7', '#79839e',
    '#4ed399', '#ffaa3d', '#63a4ff', '#fc97af', '#e69d87'];
    var phoneCon = '';
    var phoneOption = {
      'data': []
    };
    var phoneCount = 0;
    var phoneBrand = [];
    var data = [];

    var hasglobal = details.province && details.province['phone_brand_dist'] ? true : false;
    var industry = details.city;
    var hasindustry = industry && industry['phone_brand_dist'] ? true : false;
    // var hasvsapp = details.vsapp && details.vsapp[0] && details.vsapp[0]['phone_brand_dist'] ? true : false;

    for (var key in phone_brand_dist) {
      var dataValue = '';
      var arrData = [];
      if (phone_brand_dist.hasOwnProperty(key)) {
        arrData.push(phone_brand_dist[key]);

          if (hasglobal) {
            if (details.province.phone_brand_dist[key]) {
              var tgi = (phone_brand_dist[key] / details.province.phone_brand_dist[key]);
              tgi = tgi > 500 ? '500+' : tgi;
              arrData.push(tgi);
            } else {
              arrData.push('0');
            }
          }

          if (hasindustry) {
            if (industry.phone_brand_dist[key]) {
              var tgi = (phone_brand_dist[key] / industry.phone_brand_dist[key]);
              tgi = tgi > 500 ? '500+' : tgi;
              arrData.push(tgi);
            } else {
              if (industry.phone_brand_dist[key] === 0) {

              } else {
                arrData.push('--');
              }
            }
          }

        data.push({
          name: key,
          value: arrData
        });
      }
    }

    var topTenTotal = 0;
    phoneCon = data.sort(function (x, y) {
      return y.value[0] - x.value[0];
    }).map(function (item, i) {
      if (phoneOption.data.length < 10) {
        phoneOption.data.push({
          name: item.name + '\n\n' + (item.value[0] * 100).toFixed(1) + '%',
          itemStyle: {
            normal: {
              color: phone_color[phoneOption.data.length],
            }
          },
          value: item.value[0]
        });
        topTenTotal += item.value[0];
      }

      return createDataTableItem(item, i, vsApp);
    }).join('');


    phoneOption.data.push({
      name: '其他\n\n' + ((1 - topTenTotal) * 100).toFixed(1) + '%',
      itemStyle: {
        normal: {
          color: phone_color[phone_color.length - 1],
        }
      },
      value: 1 - topTenTotal
    });


    var thead = createDataTableHead('手机品牌', details.location.appname, vsApp, hasglobal, hasindustry);
    $('.phonebrandhead thead').html(thead);
    $(".phonebrandhead tbody").html(phoneCon);
    $('.phonebrandlist thead').html(thead);
    $(".phonebrandlist tbody").html(phoneCon);


    var phoneBrandChart = echarts.init($selector, 'estate');
    var phoneBrandChartOptions = {
      tooltip: {
        trigger: 'item',
        formatter: "{b}"
      },
      series: [{
        type: 'treemap',
        width: '100%',
        height: '100%',
        roam: false,
        nodeClick: false,
        breadcrumb: {
          show: false
        },
        label: {
          normal: {
            show: true,
            position: [6, 6],
            textStyle: {
              fontSize: 12
            }
          }
        },
        itemStyle: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 14,
            },
            borderWidth: 2,
            borderColor: 'transparent'
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        data: []
      }]
    };
    phoneBrandChartOptions.series[0].data = phoneOption.data;
    phoneBrandChart.setOption(phoneBrandChartOptions);

  }
}

function initAndroidVersionChart(selector, androidVer, details, vsApp) {
  var $selector = $(selector)[0];
  if ($selector && androidVer) {
    var versions = [];
    var xData = [];

    var hasglobal = details.province && details.province['android_version_dist'] ? true : false;
    var industry = details.city;
    var hasindustry = industry && industry['android_version_dist'] ? true : false;
    // var hasvsapp = details.vsapp && details.vsapp[0] && details.vsapp[0]['android_version_dist'] ? true : false;

    var vsAppName = '';
    // if (hasvsapp) {
    //   vsAppName = details.vsapp[0].appname
    // }

    for (var key in androidVer) {
      var dataValue = '';
      var arrData = [];
      if (androidVer.hasOwnProperty(key)) {
        arrData.push(androidVer[key]);


          if (hasglobal) {
            if (details.province.android_version_dist[key]) {
              var versiontgi = (androidVer[key] / details.province.android_version_dist[key]);
              if (versiontgi > 500) {
                arrData.push('500+');
              } else {
                arrData.push(versiontgi);
              }
            } else {
              arrData.push('500+');
            }
          }

          if (hasindustry) {
            if (industry.android_version_dist[key]) {
              var versiontgi = (androidVer[key] / industry.android_version_dist[key]);
              if (versiontgi > 500) {
                arrData.push('500+');
              } else {
                arrData.push(versiontgi);
              }
            } else {
              if (industry.android_version_dist[key] === 0) {
                arrData.push('500+');
              } else {
                arrData.push('--');
              }
            }
          }

        versions.push({
          name: key,
          value: arrData
        });
      }
    }

    versions.sort(function (x, y) {
      return y.value[0] - x.value[0]
    });
    var thead = createDataTableHead('安卓版本', '',
      '', hasglobal, hasindustry);
    var tb = createDataTable(versions, '', '安卓版本');
    $('.versionhead thead').html(thead);
    $('.versionhead tbody').html(tb);
    $('.versionlist thead').html(thead);
    $('.versionlist tbody').html(tb);

    var series_data = [];
    var top5Total = 0;
    versions.forEach(function (item, i) {
      if (i < 5) {
        top5Total += item.value[0];
        series_data.push({
          name: item.name,
          value: (item.value[0] * 100).toFixed(1)
        })
      }
    });
    if (series_data.length >= 5) {
      series_data.push({
        name: '其他',
        value: ((1 - top5Total) * 100).toFixed(1)
      });
    }

    var androidVersionChart = echarts.init($selector, 'estate');
    var androidVersionChartOption = {
      color: ['#ff8d65', '#f9e430', '#3ad25a', '#4777e7', '#724cf7',
        '#79839e', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
        '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
      ],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c}%"
      },
      series: [{
        name: '安卓版本',
        type: 'pie',
        radius: ['35%', '65%'],

        data: series_data,
        markPoint: {
          symbol: 'path://M963.615476 347.084253q23.341923 0 39.579783 14.71556t16.23786 36.027751l0 299.38554q0 20.297325-16.23786 35.012885t-39.579783 14.71556l-18.267592 0q-23.341923 0-39.579783-14.71556t-16.23786-35.012885l0-299.38554q0-21.312191 16.23786-36.027751t39.579783-14.71556l18.267592 0zM140.558957 347.084253q23.341923 0 38.564917 14.71556t15.222994 36.027751l0 299.38554q0 20.297325-15.222994 35.012885t-38.564917 14.71556l-18.267592 0q-23.341923 0-39.579783-14.71556t-16.23786-35.012885l0-299.38554q0-21.312191 16.23786-36.027751t39.579783-14.71556l18.267592 0zM700.76512 111.635286q18.267592 8.11893 38.057484 22.327057t38.057484 33.490586 31.968286 42.116949 19.789892 48.206146l-576.444023 0q16.23786-53.787911 51.250745-88.293363t70.533204-54.802777l-51.758178-81.189299q-2.029732-2.029732-0.507433-7.611497t10.656095-11.670962q8.11893-7.104064 15.222994-6.596631t9.133796 2.537166l52.773044 83.219031q28.416255-13.193261 59.877108-20.297325t64.951439-7.104064q69.010904 0 128.888012 28.416255l53.787911-84.233898q2.029732-2.029732 7.611497-2.029732t16.745293 6.089197q10.148662 5.074331 11.670962 9.133796t-0.507433 6.089197zM417.61744 198.913783q13.193261 0 22.327057-9.133796t9.133796-22.327057-9.133796-22.327057-22.327057-9.133796-22.327057 9.133796-9.133796 22.327057 9.133796 22.327057 22.327057 9.133796zM667.274534 194.854318q13.193261 0 22.327057-9.133796t9.133796-22.327057-9.133796-22.327057-22.327057-9.133796-22.327057 9.133796-9.133796 22.327057 9.133796 22.327057 22.327057 9.133796zM828.638266 321.712597l1.014866 456.689807q0 22.327057-14.71556 37.550051t-36.027751 15.222994l-14.208127 0 0 142.081273q0 20.297325-14.71556 35.520318t-36.027751 15.222994l-29.431121 0q-20.297325 0-35.012885-15.222994t-14.71556-35.520318l0-142.081273-186.735388 0 0 142.081273q0 20.297325-14.71556 35.520318t-36.027751 15.222994l-29.431121 0q-20.297325 0-35.012885-15.222994t-14.71556-35.520318l0-142.081273-11.163529 0q-21.312191 0-36.027751-15.222994t-14.71556-37.550051l0-456.689807 572.384558 0z',
          symbolSize: [40, 40],
          symbolOffset: [0, 0],
          data: [{
            x: '50%',
            y: '50%'
          }],
          tooltip: {
            show: false
          },
          label: {
            normal: {
              show: false,
            }
          },
          itemStyle: {
            normal: {
              color: '#79839e'
            },
            emphasis: {
              color: '#79839e'
            }
          }
        },
      }]
    };

    androidVersionChart.setOption(androidVersionChartOption);
  } else {
    $('.androidVersionList').html('没有数据');
  }
}

function createCustomOperator(datas, color) {
  return '<ul class="p-customLegend js-customLegend">' + datas.map(function (item, i) {
    var iconClass = 'icon-wifidayuanicon';
    if (item.name.indexOf('联通') !== -1) {
      iconClass = 'icon-liantong';
    } else if (item.name.indexOf('电信') !== -1) {
      iconClass = 'icon-dianxin';
    } else if (item.name.indexOf('移动') !== -1) {
      iconClass = 'icon-yidong';
    }
    return '<li data-index="'+i+'"><i class="iconfont ' + iconClass +
      '" style="color: ' + color[i] + '"></i>' + item.name + '</li>';
  }).join('') + '</ul>';
}

// 运营商
function initOperator(selector, data, valueIndex) {
  var $operator = $(selector)[0];
  if (data && $operator) {
    var shape = {
      '移动': 'path://M984.535718 316.488958c-25.628629-61.883064-63.555275-118.639993-110.919577-166.004295C826.251839 103.121384 769.493886 65.193715 707.611845 39.565085 645.730828 13.930316 578.773821 0.614031 511.79737 0.614031c-66.981568 0-133.937552 13.317308-195.819592 38.952078-61.883064 25.628629-118.641017 63.556299-166.004295 110.919577C102.610203 197.849988 64.682534 254.606917 39.053905 316.488958 13.419135 378.370999 0.10285 445.326982 0.10285 512.310597c0 66.974404 13.317308 133.931411 38.952078 195.814476 25.627606 61.881018 63.556299 118.63897 110.919577 166.003272 47.364302 47.365325 104.121231 85.290948 166.004295 110.921624 61.882041 25.632723 128.838024 38.950031 195.819592 38.950031 66.976451 0 133.933458-13.317308 195.814476-38.950031 61.882041-25.630676 118.639993-63.556299 166.004295-110.921624 47.364302-47.364302 85.290948-104.122255 110.919577-166.003272 25.63477-61.883064 38.952078-128.840071 38.952078-195.814476C1023.487796 445.326982 1010.170488 378.370999 984.535718 316.488958zM163.419737 470.145091c1.415341-10.144815 3.704654-21.41433 3.704654-21.41433 15.703842 22.888004 106.88437 145.646099 209.931047 223.683294 42.490943 32.105633 88.808322 29.115302 128.606739-5.031984 14.196396-11.480332 119.724781-105.508941 171.438469-158.088413 7.648779-7.771585 16.599304-9.122453 23.948231-2.754952 28.373348 23.737414 47.261964 44.824261 47.261964 44.824261-26.340905 30.143804-160.658132 156.171613-193.297972 180.232416-52.0074 38.398427-104.178541 30.632982-149.408062 5.715605C366.109312 715.61318 263.243774 628.587595 166.567669 487.540588 161.395481 479.873388 163.347076 470.732514 163.419737 470.145091zM663.767987 805.204392c-87.955843 71.850834-181.23124 64.446644-229.046855 38.996083-36.079436-19.115807-92.369702-51.15185-181.592495-156.392664-44.927622-53.069673-75.917765-106.776915-83.007776-121.093047-2.133758-4.391345-3.445737-9.371136-4.150849-12.411613-4.271609-18.614349-4.050558-31.752565-4.050558-31.752565 35.071402 50.965594 67.15452 96.132688 116.274951 150.240074 38.417871 39.970346 64.726028 63.654544 94.331531 87.585377 79.584554 64.274715 161.206667 58.984838 230.827545 4.613419 41.227063-32.218205 112.354363-97.571567 177.93287-161.5976 4.310497-4.584765 9.512363-5.719698 14.386746-1.497212 25.37176 25.103633 41.555569 45.440338 41.555569 45.440338C815.529835 671.371226 730.092542 751.057095 663.767987 805.204392zM861.170756 598.507241c-2.881852 7.706089-8.391757 18.966393-8.391757 18.966393-0.226168-0.336694-22.666953-29.571731-52.043218-60.900615-40.024585-42.582024-73.76047-74.121725-94.592494-92.104645-13.002106-11.216299-24.731121-16.775326-35.897274-17.229709-12.665412-0.45643-23.944138 5.001282-32.719663 13.328566-2.65159 2.500129-7.937374 7.403167-15.050922 13.932363-33.321414 31.195843-103.620796 96.30871-141.133994 128.28949-5.466922 4.89178-9.929904 8.890145-12.963217 11.581647-15.410131 13.509705-32.752412 21.026467-50.780361 21.236261-17.949149 0.276314-36.574755-6.703171-54.410307-22.223827-97.395545-84.816098-168.067439-170.275904-183.545113-192.688034-1.203501-1.727474-3.299393-5.701278-0.86169-12.008399 2.925858-7.565885 8.170705-18.447537 8.170705-18.447537s23.534784 28.826707 52.004329 61.197396c46.321473 52.596869 85.973546 84.027068 94.591471 92.106692 12.517021 11.718781 24.726004 16.793747 35.89318 17.233802 12.634711 0.450289 23.909342-4.980815 32.722734-13.333682 2.623959-2.51548 118.637947-110.235956 156.181847-142.219806 5.441338-4.893827 9.899203-8.876841 12.973451-11.583694 15.399897-13.529149 32.751388-21.031584 50.735332-21.237284 17.949149-0.270174 36.128559 7.246589 54.416448 22.226898 26.116784 21.374418 120.551676 107.812581 183.80403 192.290961C861.512567 588.582454 863.573664 592.185792 861.170756 598.507241zM876.502086 537.846098c-1.388733 10.148909-3.713864 21.433774-3.713864 21.433774-15.698725-22.911542-106.874137-145.645075-209.926954-223.667944-42.450008-32.145545-88.811392-29.130652-128.571944 5.001282-14.201513 11.51001-119.75446 105.529409-171.478381 158.080226-7.638545 7.795123-16.553251 9.145991-23.904226 2.765186-28.367207-23.699549-47.256847-44.791512-47.256847-44.791512 26.313274-30.13971 160.654039-156.191057 193.248849-180.251861 52.02275-38.374889 104.222546-30.60842 149.408062-5.739143 39.495495 21.698831 142.400945 108.747954 239.038162 249.794961C878.528388 528.152596 876.614659 537.280167 876.502086 537.846098zM761.754026 335.24044c-38.40866-39.98979-64.710677-63.648403-94.355069-87.617102-79.558969-64.257317-161.216901-58.997119-230.797866-4.584765-41.256741 32.218205-112.345153 97.55724-177.962549 161.567922-4.271609 4.576577-9.483708 5.735049-14.387769 1.512563-25.37176-25.103633-41.526914-45.435221-41.526914-45.435221 21.669153-24.042383 107.104398-103.751789 173.431-157.89397 87.950726-71.832413 181.221006-64.428223 229.074486-39.0012 36.045665 19.125018 92.370725 51.195855 181.56384 156.416202 44.961394 53.045112 75.957677 106.776915 82.998566 121.089977 2.177763 4.393392 3.518397 9.375229 4.16006 12.4198 3.90012 18.120054 4.046464 31.767915 4.046464 31.767915C842.922779 434.520037 810.88469 389.328382 761.754026 335.24044z',
      '电信': 'path://M984.536 316.489c-25.629-61.883-63.555-118.64-110.92-166.004-47.364-47.363-104.122-85.291-166.004-110.92-61.881-25.635-128.838-38.951-195.814-38.951-66.982 0-133.938 13.317-195.82 38.952-61.883 25.629-118.641 63.556-166.004 110.92-47.363 47.364-85.291 104.121-110.92 166.003-25.635 61.882-38.951 128.838-38.951 195.822 0 66.974 13.317 133.931 38.952 195.814 25.628 61.881 63.556 118.639 110.92 166.003 47.364 47.365 104.121 85.291 166.004 110.922 61.882 25.633 128.838 38.95 195.82 38.95 66.976 0 133.933-13.317 195.814-38.95 61.882-25.631 118.64-63.556 166.004-110.922 47.364-47.364 85.291-104.122 110.92-166.003 25.635-61.883 38.952-128.84 38.952-195.814-.001-66.984-13.318-133.94-38.953-195.822zm-499.87 250.498c21.574 248.821 91.845 241.374 122.046 61.428l48.697-11.79c-53.624 345.62-269.369 318.935-294.643-42.191-248.41-6.828-284.779-197.938 17.261-318.316l10.476 26.064c-157.801 67.629-170.126 162.568-25.887 179.322 38.218-257.507 166.432-317.071 252.729-149.54l-25.272 7.441c-53.01-41.566-86.915 29.167-100.477 137.131 202.181-50.876 308.202-178.694 157.184-209.101l-8.628-37.233c328.543 28.547 231.766 270.535-153.486 356.787z',
      '联通': 'path://M984.536 316.489c-25.629-61.883-63.555-118.64-110.92-166.004-47.364-47.363-104.122-85.291-166.004-110.92-61.881-25.635-128.838-38.951-195.814-38.951-66.982 0-133.938 13.317-195.82 38.952-61.883 25.629-118.641 63.556-166.004 110.92-47.363 47.364-85.291 104.121-110.92 166.003-25.635 61.882-38.951 128.838-38.951 195.822 0 66.974 13.317 133.931 38.952 195.814 25.628 61.881 63.556 118.639 110.92 166.003 47.364 47.365 104.121 85.291 166.004 110.922 61.882 25.633 128.838 38.95 195.82 38.95 66.976 0 133.933-13.317 195.814-38.95 61.882-25.631 118.64-63.556 166.004-110.922 47.364-47.364 85.291-104.122 110.92-166.003 25.635-61.883 38.952-128.84 38.952-195.814-.001-66.984-13.318-133.94-38.953-195.822zm-670.301 241.78l-.493.482-26.145 24.673c-18.255 16.933-42.924 27.577-70.061 27.577-55.748 0-101.14-44.509-101.14-99.663 0-54.665 45.392-99.175 101.14-99.175 26.645 0 49.833 10.161 68.085 26.611l4.934 4.353 22.696 22.251.492-.483 48.843-46.441 47.858 48.862-47.858 44.994 46.872 44.986-46.872 47.413-48.35-46.44zm309.346 251.567c-23.682 0-45.886-8.227-63.155-21.775l-.987-.966-37.497-34.349h-.492l-35.521 33.383-.987.966c-17.27 14.03-39.966 22.742-64.14 22.742-55.749 0-101.141-44.509-101.141-99.18 0-25.638 9.867-48.86 26.151-66.759l.986-1.451 128.772-130.625-128.772-131.587c-16.279-17.899-26.145-41.124-26.145-66.763 0-54.668 45.388-99.172 101.141-99.172 24.668 0 47.358 8.705 64.629 22.734l.986.966 35.526 33.384 37.493-34.35.991-.483c17.265-13.547 38.976-21.769 63.15-21.769 55.749 0 101.141 44.505 101.141 99.174 0 25.156-9.374 48.38-25.166 65.795l-.986 1.45-129.757 130.619 52.79 53.704 1.976 1.932 73.511 76.922 1.972.483c15.298 17.904 25.166 40.64 25.166 65.795 0 54.67-45.393 99.179-101.634 99.179zm202.775-198.353c-27.137 0-51.805-10.641-70.061-27.576l-26.639-25.156-.991.966-47.364 45.958-46.867-47.406 46.867-44.994-.492-.483-46.867-44.992 47.858-48.38 1.972 2.421 45.886 43.538.492.484 22.692-22.254 4.934-3.869c18.255-16.45 41.445-26.61 68.084-26.61 55.753 0 101.14 44.51 101.637 99.18 0 54.663-45.393 99.172-101.14 99.172zM647.259 337.663c6.417-6.29 9.867-14.513 9.867-23.708 0-17.899-14.801-32.896-33.545-32.896-8.882 0-16.777 2.898-22.697 8.706l-26.152 25.64-.492.488 37.498 35.799-50.322 51.278-39.966-38.701-39.962 37.736-50.321-50.313 39.961-34.35-29.6-29.024-.493-.484c-5.924-4.358-12.828-6.774-20.725-6.774-18.251 0-33.549 14.513-33.549 32.896 0 8.223 2.962 15.48 7.895 21.286l126.794 129.171 125.807-126.75zM520.463 560.683l-126.793 129.172c-4.934 5.807-7.894 13.064-7.894 21.286 0 17.898 14.799 32.9 33.549 32.9 7.895 0 15.292-2.421 20.72-6.775l30.099-29.025-39.965-35.32 49.34-50.796 39.468 37.736.492.485 39.961-39.669 50.819 51.76-37.004 36.287-.492.483 26.639 26.122c5.923 5.325 13.815 8.712 22.697 8.712 18.748 0 34.042-14.515 34.042-32.9 0-9.19-3.947-17.418-9.867-23.703l-125.81-126.755zM826.355 479.409c-7.402 0-14.801 2.42-20.232 6.772-1.972 1.455-2.464 1.938-2.464 1.938l-25.161 24.191 25.161 25.154c5.427 4.837 13.322 8.223 22.198 8.223 18.255 0 33.549-14.996 34.047-32.896 0-18.386-14.805-33.382-33.549-33.382zM238.261 485.215c-5.925-4.352-12.83-6.774-20.233-6.774-18.747 0-34.042 14.513-34.042 32.896 0 18.387 15.294 33.383 34.042 33.383 8.39 0 16.284-2.902 22.204-8.222l25.16-25.161-21.706-20.802c-1.483-1.933-3.454-3.87-5.425-5.32z',
    }
    var vIndex = valueIndex || 0;
    var seriesData = [];
    var legendData = [];
    for (var key in data) {
      if (data.hasOwnProperty(key)) {
        legendData.push({
          name: key,
          icon: shape[key] || 'circle',
          textStyle: {
            color: '#79839e'
          }
        });
        seriesData.push({
          name: key,
          value: data[key]
        })
      }
    }

    var chart = echarts.init($operator);
    var options = {
      color: ['#3c82e3', '#3ad25a', '#ff8d65', '#4777e7', '#724cf7',
        '#79839e', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
        '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
      ],
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {d}%"
      },
      // legend: {
      //   orient: 'vertical',
      //   x: 'right',
      //   top: 'middle',
      //   align: 'left',
      //   data: legendData,
      //   itemGap: 25
      // },
      series: [{
        name: '运营商分布',
        type: 'pie',
        selectedMode: 'single',
        radius: ['35%', '65%'],
        center: ['40%', '50%'],
        label: {
          normal: {
            // position: 'inner',
            formatter: '{d}%'
          }
        },
        labelLine: {
          normal: {
            show: true
          }
        },
        data: seriesData,
        markPoint: {
          symbol: 'path://M511.205717 538C596.257568 538 665.205717 469.051851 665.205717 384 665.205717 298.948149 596.257568 230 511.205717 230 426.153865 230 357.205717 298.948149 357.205717 384 357.205717 469.051851 426.153865 538 511.205717 538ZM648.753123 563.007445 635.144284 562.846297C631.462077 562.802694 625.87096 564.222454 622.641474 565.999443 622.641474 565.999443 611.751353 572.216428 602.71361 576.119353 575.7503 587.763387 544.994667 594.359184 512.347373 594.359184 479.853625 594.359184 449.234177 587.825283 422.362125 576.28331 413.185427 572.341773 402.043253 565.989848 402.043253 565.989848 398.825882 564.21011 393.232493 562.789468 389.557674 562.816699L376.132999 562.91618C326.815542 569.419886 274.875804 613.104376 260.108148 660.476686 260.108148 660.476686 244.293692 692.38617 242.074429 755.137314 241.906963 759.872538 242.071982 755.207052 242.071982 755.207052 241.93111 763.304837 247.506512 773.144095 254.668224 776.928522 254.668224 776.928522 341.02314 832 511.995577 832 682.968014 832 769.337731 776.920979 769.337731 776.920979 776.427141 773.026493 782.095738 763.310664 781.925685 755.208277 781.925685 755.208277 782.084736 759.767052 781.918426 754.995194 779.741421 692.531339 764.404367 661.941143 764.404367 661.941143 750.612591 614.262743 697.958709 570.241976 648.753123 563.007445Z" p-id="1522"></path><path d="M209.173248 654.908034C119.123765 649.047335 76.826078 621.586358 76.826078 621.586358 69.675642 617.792628 63.96768 608.147139 64.04914 604.834016 64.04914 604.834016 63.938575 608.004686 64.04914 604.834016 65.496445 563.329793 75.692746 543.004082 75.692746 543.004082 84.861723 511.324082 119.866804 482.074402 152.579406 477.267405L159.398302 477.186704C163.077034 477.143166 168.666159 478.557658 171.898919 480.318124 171.898919 480.318124 177.178731 483.386331 183.187157 485.979637 201.112765 493.716536 221.559565 498.099125 243.26397 498.099125 264.866295 498.099125 285.222558 493.757663 303.087496 486.088578 309.1883 483.469616 314.626033 480.315628 314.626033 480.315628 317.852852 478.544033 323.44867 477.129942 327.145005 477.157318L332.087105 477.19392 332.087115 477.193939C340.062408 492.395239 349.90786 506.461389 361.317778 519.0867L348.955108 519.249096C290.292534 528.816985 227.518924 587.0358 211.076459 650.091946 211.076459 650.091946 210.352911 651.692855 209.173248 654.908034ZM815.22569 655.881573C904.997669 649.965191 947.168831 622.586358 947.168831 622.586358 954.319266 618.792628 960.027228 609.147139 959.945768 605.834016 959.945768 605.834016 960.056334 609.004686 959.945768 605.834016 958.498463 564.329793 948.302163 544.004082 948.302163 544.004082 939.133185 512.324082 904.128105 483.074402 871.415502 478.267405L864.596606 478.186704C860.917875 478.143166 855.328749 479.557658 852.095989 481.318124 852.095989 481.318124 846.816177 484.386331 840.807752 486.979637 822.882144 494.716536 802.435343 499.099125 780.730938 499.099125 759.128613 499.099125 738.772351 494.757663 720.907413 487.088578 714.806608 484.469616 709.368875 481.315628 709.368875 481.315628 706.142056 479.544033 700.546239 478.129942 696.849904 478.157318L691.907803 478.19392 691.907793 478.193939C684.151527 492.977763 674.626413 506.687931 663.613642 519.043253L673.971018 519.128395C732.766964 527.729746 794.689176 585.503823 812.295079 648.155156 812.295079 648.155156 813.448883 650.737755 815.22569 655.881573ZM697.107902 299.477497C715.806005 273.740799 746.191136 257 780.49706 257 837.330802 257 883.403652 302.946288 883.403652 359.623907 883.403652 416.301525 837.330802 462.247813 780.49706 462.247813 752.709257 462.247813 727.493887 451.264172 708.978248 433.412848 712.933423 417.595429 715.033319 401.042943 715.033319 384 715.033319 383.480966 715.031371 382.962387 715.027483 382.44427 714.948258 352.875916 708.548455 324.793723 697.107904 299.477501L697.107902 299.477497ZM327.162738 298.858852C308.488448 272.906294 277.972925 256 243.497849 256 186.664107 256 140.591256 301.946288 140.591256 358.623907 140.591256 415.301525 186.664107 461.247813 243.497849 461.247813 271.285652 461.247813 296.501021 450.264172 315.01666 432.412848 311.061485 416.595429 308.96159 400.042943 308.96159 383 308.96159 352.986575 315.473968 324.494198 327.162738 298.858852L327.162738 298.858852Z',
          symbolSize: [35, 30],
          // symbolOffset: [0, 0],
          data: [{
            x: '40%',
            y: '50%'
          }],
          tooltip: {
            show: false
          },
          label: {
            normal: {
              show: false,
            }
          },
          itemStyle: {
            normal: {
              color: '#79839e'
            },
            emphasis: {
              color: '#79839e'
            }
          }
        },
      }]
    };

    chart.setOption(options);
    $(selector).append(createCustomOperator(legendData, options.color));
    $(selector).find('.js-customLegend').on('mouseover', 'li',function() {
      chart.dispatchAction({
        type: 'highlight',
        dataIndex: $(this).attr('data-index'),
      });
    }).on('mouseout', 'li',function() {
      chart.dispatchAction({
        type: 'downplay',
      });
    });
  } else {
    $(selector).html('没有数据');
  }
}

function createInterestSeries(datas, color) {

  var result = [];
  datas.forEach(function (item, i) {
    var center = 100 + i * 200
    result = result.concat([{
      name: item.name,
      type: 'pie',
      radius: [77, 83],
      center: [center, '50%'],
      label: {
        normal: {
          show: item.value[1],
          position: 'center',
          formatter: function (params) {
            if (params.name == "other") {
              return "";
            }
            return item.value[1] ? params.name : '';
          },
          textStyle: {
            color: '#9ea7b4',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14
          }
        },
        emphasis: {
          show: item.value[1],
        }
      },
      lableLine: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      data: [{
        value: 100,
        name: '\n\n\n————\n全市TGI：' + item.value[1],
        itemStyle: {
          normal: {
            color: '#ccc',
          }
        }
      }, ]
    }, {
      name: item.name,
      type: 'pie',
      radius: [70, 90],
      center: [center, '50%'],
      clockWise: false,
      label: {
        normal: {
          position: 'center',
          formatter: function (params) {
            if (params.name == "other") {
              return "";
            }
            return params.name + '\n' + params.value + '%' + (item.value[1] ? '\n\n\n' : '');
          },
          textStyle: {
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 18
          }
        }
      },
      lableLine: {
        normal: {
          show: false
        },
        emphasis: {
          show: true
        }
      },
      data: [{
          value: 100 - item.value[0] > 0 ? 100 - item.value[0] : 0,
          name: 'other',
          itemStyle: {
            normal: {
              color: 'transparent',
            }
          }
        },
        {
          value: item.value[0],
          name: item.name,
          itemStyle: {
            normal: {
              color: color || '#5697f1'
            }
          }
        },
      ]
    }]);
  });
  return result;
}

function initInterest(selector, interest_dist, details, vsApp, valueIndex) {
  var $interestChart = $(selector)[0];
  var vIndex = valueIndex || 0;
  var interestData = [];
  var industry = details.city;

  for (var key in interest_dist) {
    if (interest_dist.hasOwnProperty(key)) {
      var globalGti = '500+';
      var industryGti = '--';
      if (details.province && details.province.interest_dist &&
        details.province.interest_dist[key]) {
        globalGti = (interest_dist[key] / details.province.interest_dist[key]);
        globalGti = globalGti > 500 ? '500+' : globalGti;
      }
      if (industry && industry.interest_dist &&
        industry.interest_dist[key]) {
        industryGti = (interest_dist[key] / industry.interest_dist[key]);
        industryGti = industryGti > 500 ? '500+' : industryGti;
      }
      var v = interest_dist[key] > 0 && interest_dist[key] < 0.001 ? (interest_dist[key] * 100).toFixed(3) : (interest_dist[key] * 100).toFixed(1)
      interestData.push({
        name: key,
        value: [v,
          // typeof globalGti === 'number' ? globalGti.toFixed(2) : globalGti,
          typeof industryGti === 'number' ? industryGti.toFixed(2) : industryGti
        ],
      });
    }
  }
  var color = vsApp ? '#00cc99' : '#5697f1';
  $($interestChart).width(interestData.length * 200);
  var interestChart = echarts.init($interestChart);
  var interestChartOptions = {
    series: createInterestSeries(interestData, color)
  };

  interestChart.setOption(interestChartOptions);

}

function initSimilarApps(app, maxValue, index) {
  var value = (Math.min(app.value * 100, 100)).toFixed(1);
  return '<tr class="p-table-item"><td>'+index+'</td><td>\
          <div class="left"><a title="' + app.name + '"><img src="' + app.img +
    '" alt="' + app.name + '"><span class="newspan">' + app.name +
    '</span></a></div></td><td><div class="">' +
    echarts.format.addCommas(parseFloat(app.dau).toFixed(1)) + '</div></td><td><div class="">' +
    echarts.format.addCommas(parseFloat(app.mau).toFixed(1)) +
    '</div></td><td><div class="right"><div class="p-process">\
          <div class="p-process-bar" style="width: ' +
    (app.value * 100 / maxValue) + '%"></div></div><span class="percentText">' +
    value + '%</span></div></td></tr>';
}

function renderSimilarApps(similarApps) {
  var maxSimilarAppValue = 0;
  if (similarApps && similarApps.length) {
    similarApps.forEach(function (item) {


      maxSimilarAppValue = Math.max(item.value, maxSimilarAppValue);
    });
    var strinapps =  JSON.stringify(similarApps)
    var tableHtml = `<div class="p-table-top-head"><table class="p-table">
          <thead><tr><th>&nbsp;</th><th style="width: 35%;"><div style="padding: 0 20px;">APP</div></th><th style="width:16%;position: relative;" onclick="changeDAU()">DAU(万)<i class="icon-triangle-down"></i></th>
          <th style="width:16%;position: relative;" onclick="changeMau()">MAU(万)<i class="icon-triangle-down"></i></th><th style="width:33%;position: relative;" onclick="changeperme()">渗透率<i class="icon-triangle-down" style="display:block;"></i></th></tr></thead><tbody></tbody></table></div>
          <div class="p-table-bottom-body scrollbar"><table class="p-table">
          <thead><tr><th>&nbsp;</th><th style="width: 35%;"><div style="padding: 0 20px;">APP</di></th><th style="width:16%;">DAU</th>
          <th style="width:16%;" onclick="changeMau()">MAU <i class="icon-triangle-down"></i></th><th style="width:33%;">渗透率</th></tr></thead>
          <tbody>` + similarApps.sort(function(x, y) { //只排序了value
            return y.value - x.value;
          }).map(function (item, i) {
      return initSimilarApps(item, maxSimilarAppValue, i+1)
    }).join('') + '</tbody></table></div>';

    $('.js-similarApps').html(tableHtml);
  } else {
    $('.js-similarApps').html('<div class="noDataBox">没有数据</div>');
  }



}



let datalistapp = '';
function changeMau(){
  var maxSimilarAppValue = 0;
  datalistapp.forEach(function (item) {
      maxSimilarAppValue = Math.max(item.value, maxSimilarAppValue);
  });
  var tabhtml = `<div class="p-table-top-head"><table class="p-table">
          <thead><tr><th>&nbsp;</th><th style="width: 35%;"><div style="padding: 0 20px;">APP</div></th><th style="width:16%;position: relative;" onclick="changeDAU()">DAU(万)<i class="icon-triangle-down"></i></th>
          <th style="width:16%;position: relative;" onclick="changeMau()">MAU(万)<i class="icon-triangle-down" style="display:block;"></i></th><th style="width:33%;position: relative;" onclick="changeperme()">渗透率<i class="icon-triangle-down"></i></th></tr></thead><tbody></tbody></table></div>
          <div class="p-table-bottom-body scrollbar"><table class="p-table">
          <thead><tr><th>&nbsp;</th><th style="width: 35%;"><div style="padding: 0 20px;">APP</di></th><th style="width:16%;">DAU</th>
          <th style="width:16%;" onclick="changeMau()">MAU <i class="icon-triangle-down"></i></th><th style="width:33%;">渗透率</th></tr></thead>
          <tbody>` + datalistapp.sort(function(x, y) { //根据Mau排序
            return y.mau - x.mau;
          }).map(function (item, i) {
      return initSimilarApps(item, maxSimilarAppValue, i+1)
    }).join('') + '</tbody></table></div>'
    $('.js-similarApps').html(tabhtml);
}

function changeDAU(){
  var maxSimilarAppValue = 0;
  datalistapp.forEach(function (item) {
      maxSimilarAppValue = Math.max(item.value, maxSimilarAppValue);
  });
  var tabhtml = `<div class="p-table-top-head"><table class="p-table">
          <thead><tr><th>&nbsp;</th><th style="width: 35%;"><div style="padding: 0 20px;">APP</div></th><th style="width:16%;position: relative;" onclick="changeDAU()">DAU(万)<i class="icon-triangle-down" style="display:block;"></i></th>
          <th style="width:16%;position: relative;" onclick="changeMau()">MAU(万)<i class="icon-triangle-down"></i></th><th style="width:33%;position: relative;" onclick="changeperme()">渗透率<i class="icon-triangle-down"></i></th></tr></thead><tbody></tbody></table></div>
          <div class="p-table-bottom-body scrollbar"><table class="p-table">
          <thead><tr><th>&nbsp;</th><th style="width: 35%;"><div style="padding: 0 20px;">APP</di></th><th style="width:16%;">DAU</th>
          <th style="width:16%;" onclick="changeMau()">MAU <i class="icon-triangle-down"></i></th><th style="width:33%;">渗透率</th></tr></thead>
          <tbody>` + datalistapp.sort(function(x, y) { //根据dau排序
            return y.dau - x.dau;
          }).map(function (item, i) {
      return initSimilarApps(item, maxSimilarAppValue, i+1)
    }).join('') + '</tbody></table></div>'
    $('.js-similarApps').html(tabhtml);
}

function changeperme(){
  var maxSimilarAppValue = 0;
  datalistapp.forEach(function (item) {
      maxSimilarAppValue = Math.max(item.value, maxSimilarAppValue);
  });
  var tabhtml = `<div class="p-table-top-head"><table class="p-table">
          <thead><tr><th>&nbsp;</th><th style="width: 35%;"><div style="padding: 0 20px;">APP</div></th><th style="width:16%;position: relative;" onclick="changeDAU()">DAU(万)<i class="icon-triangle-down"></i></th>
          <th style="width:16%;position: relative;" onclick="changeMau()">MAU(万)<i class="icon-triangle-down"></i></th><th style="width:33%;position: relative;" onclick="changeperme()">渗透率<i class="icon-triangle-down" style="display:block;"></i></th></tr></thead><tbody></tbody></table></div>
          <div class="p-table-bottom-body scrollbar"><table class="p-table">
          <thead><tr><th>&nbsp;</th><th style="width: 35%;"><div style="padding: 0 20px;">APP</di></th><th style="width:16%;">DAU</th>
          <th style="width:16%;" onclick="changeMau()">MAU <i class="icon-triangle-down"></i></th><th style="width:33%;">渗透率</th></tr></thead>
          <tbody>` + datalistapp.sort(function(x, y) { //根据value排序
            return y.value - x.value;
          }).map(function (item, i) {
      return initSimilarApps(item, maxSimilarAppValue, i+1)
    }).join('') + '</tbody></table></div>'
    $('.js-similarApps').html(tabhtml);
}

function renderPortrait(data) {
  var details = data;
  var master = details.location;
  if ($('#sexChart') && $('#sexChart').length) {
    if (master.sex_dist) {
      var sexDatas = [{
          name: '男',
          value: master.sex_dist['男'] * 100
        },
        {
          name: '女',
          value: master.sex_dist['女'] * 100
        }
      ];
      $('#sexNums').html(sexNums(master.sex_dist));
      // $('.js-sexTable').html(createVsTable('性别', data.details, 'sex_dist'));
      initSexCanvas('#sexChart', sexDatas);
    } else {
      $('#sexNums').html('<div class="noDataBox">暂无数据</div>');
      // $('.js-sexTable').html('<div class="noDataBox">暂无数据</div>');
    }
  }

  if ($('#ageChart') && $('#ageChart').length) {
    initAgeChart('#ageChart', master.age_dist);
    // $('.js-ageTable').html(createVsTable('年龄', data.details, 'age_dist'));
  }

  if ($('#manCategories') && $('#manCategories').length) {
    initManCategories('#manCategories', master.man_type_dist, details);
  }

  // if ($('#netTypeChart') && $('#netTypeChart').length) {
  //   initNetTypeChart('#netTypeChart', master.network_dist);
  // }

  if ($('#phoneBrandChart') && $('#phoneBrandChart').length) {
    initPhoneBrandChart('#phoneBrandChart', master.phone_brand_dist, details);
  }

  if ($('#androidVersionChart') && $('#androidVersionChart').length) {
    initAndroidVersionChart('#androidVersionChart', master.android_version_dist, details);
  }

  if ($('.js-operator') && $('.js-operator').length) {
    // 运营商
    initOperator('.js-operator', master.operator_dist);
    // $('.js-operatorTable').html(createVsTable('运营商', data.details, 'operator_dist'));
  }

  if ($('#interestChart') && $('#interestChart').length) {
    initInterest('#interestChart', master.interest_dist, details);
  }
  if(master.app_dist) {
  	datalistapp = master.app_dist;
    renderSimilarApps(master.app_dist);
  }
}

window.globalData = window.globalData || {};

  // $('.gtable').on('click', '.js-versionBtn', function(){
  //   var param = getIdType();
  //         $('.versionBtn').html('<i class="iconfont2 icon-shiliangzhinengduixiang4"></i> 全部')
  //           .addClass('versionAll');
  //   $.ajax({
  //     // type: 'GET',
  //     // url: 'data/getversionList.json',
  //     url: 'http://trustapp.com.cn:10005/Mobile/getItemList',
  //     type: 'POST',
  //     dataType: 'json',
  //     data: {
  //       data: window.JSON.stringify({
  //         appid: param.appid,
  //         month: $(".month").val().trim(),
  //         type: 'av',
  //         value: $.trim($(this).text()),
  //         small_class: window.typeValue
  //       })
  //     },
  //     success: function (data) {
  //       if (data && data.code == 0) {
  //         // app 信息
  //         $('#laodingModal').hide();
  //         // android model
  //         initAndroidVersionChart(data.details.master.android_version_dist,
  //         globalData.details.vsapp && globalData.details.vsapp[0] ? globalData.details.vsapp[0].appname: '');

  //         $('.versionBtn').html('<i class="iconfont icon-shiliangzhinengduixiang4"></i> 全部')
  //           .addClass('versionAll');
  //       }
  //     },
  //     error: function(err){
  //       console.log(err);
  //       $('#laodingModal').hide();
  //     }
  //   });
  // }).on('click', '.versionAll', function() {
  //   $(this).html('版本号').removeClass('versionAll');
  //   initAndroidVersionChart(globalData.details.master.android_version_dist,
  //   globalData.details.vsapp && globalData.details.vsapp[0] ? globalData.details.vsapp[0].appname: '');
  // });

