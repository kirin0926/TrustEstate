/**
 * Created by shuai on 2017/7/14.
 */
var city = {
  "海门市": [121.15, 31.89],
  "鄂尔多斯市":[109.781327, 39.608266],
  "招远市": [120.38, 37.35],
  "舟山市": [122.207216, 29.985295],
  "齐齐哈尔市": [123.97, 47.33],
  "盐城市": [120.13, 33.38],
  "赤峰市": [118.87, 42.28],
  "青岛市": [120.33, 36.07],
  "乳山市": [121.52, 36.89],
  "金昌市": [102.188043, 38.520089],
  "泉州市": [118.58, 24.93],
  "莱西市": [120.53, 36.86],
  "日照市": [119.46, 35.42],
  "胶南市": [119.97, 35.88],
  "南通市": [121.05, 32.08],
  "拉萨市": [91.11, 29.97],
  "云浮市": [112.02, 22.93],
  "梅州市": [116.1, 24.55],
  "文登市": [122.05, 37.2],
  "上海市": [121.48, 31.22],
  "攀枝花市": [101.718637, 26.582347],
  "威海市": [122.1, 37.5],
  "承德市": [117.93, 40.97],
  "厦门市": [118.1, 24.46],
  "汕尾市": [115.375279, 22.786211],
  "潮州市": [116.63, 23.68],
  "丹东市": [124.37, 40.13],
  "太仓市": [121.1, 31.45],
  "曲靖市": [103.79, 25.51],
  "烟台市": [121.39, 37.52],
  "福州市": [119.3, 26.08],
  "瓦房店市": [121.979603, 39.627114],
  "即墨市": [120.45, 36.38],
  "抚顺市": [123.97, 41.97],
  "玉溪市": [102.52, 24.35],
  "张家口市": [114.87, 40.82],
  "阳泉市": [113.57, 37.85],
  "莱州市": [119.942327, 37.177017],
  "湖州市": [120.1, 30.86],
  "汕头市": [116.69, 23.39],
  "昆山市": [120.95, 31.39],
  "宁波市": [121.56, 29.86],
  "湛江市": [110.359377, 21.270708],
  "揭阳市": [116.35, 23.55],
  "荣成市": [122.41, 37.16],
  "连云港市": [119.16, 34.59],
  "葫芦岛市": [120.836932, 40.711052],
  "常熟市": [120.74, 31.64],
  "东莞市": [113.75, 23.04],
  "河源市": [114.68, 23.73],
  "淮安市": [119.15, 33.5],
  "泰州市": [119.9, 32.49],
  "南宁市": [108.33, 22.84],
  "营口市": [122.18, 40.65],
  "惠州市": [114.4, 23.09],
  "江阴市": [120.26, 31.91],
  "蓬莱市": [120.75, 37.8],
  "韶关市": [113.62, 24.84],
  "嘉峪关市": [98.289152, 39.77313],
  "广州市": [113.23, 23.16],
  "延安市": [109.47, 36.6],
  "太原市": [112.53, 37.87],
  "清远市": [113.01, 23.7],
  "中山市": [113.38, 22.52],
  "昆明市": [102.73, 25.04],
  "寿光市": [118.73, 36.86],
  "盘锦市": [122.070714, 41.119997],
  "长治市": [113.08, 36.18],
  "深圳市": [114.07, 22.62],
  "珠海市": [113.52, 22.3],
  "宿迁市": [118.3, 33.96],
  "咸阳市": [108.72, 34.36],
  "铜川市": [109.11, 35.09],
  "平度市": [119.97, 36.77],
  "佛山市": [113.11, 23.05],
  "海口市": [110.35, 20.02],
  "江门市": [113.06, 22.61],
  "章丘市": [117.53, 36.72],
  "肇庆市": [112.44, 23.05],
  "大连市": [121.62, 38.92],
  "临汾市": [111.5, 36.08],
  "吴江市": [120.63, 31.16],
  "石嘴山市": [106.39, 39.04],
  "沈阳市": [123.38, 41.8],
  "苏州市": [120.62, 31.32],
  "茂名市": [110.88, 21.68],
  "嘉兴市": [120.76, 30.77],
  "长春市": [125.35, 43.88],
  "胶州市": [120.03336, 36.264622],
  "银川市": [106.27, 38.47],
  "张家港市": [120.555821, 31.875428],
  "三门峡市": [111.19, 34.76],
  "锦州市": [121.15, 41.13],
  "南昌市": [115.89, 28.68],
  "柳州市": [109.4, 24.33],
  "三亚市": [109.511909, 18.252847],
  "自贡市": [104.778442, 29.33903],
  "吉林市": [126.57, 43.87],
  "阳江市": [111.95, 21.85],
  "泸州市": [105.39, 28.91],
  "西宁市": [101.74, 36.56],
  "宜宾市": [104.56, 29.77],
  "呼和浩特市": [111.65, 40.82],
  "成都市": [104.06, 30.67],
  "大同市": [113.3, 40.12],
  "镇江市": [119.44, 32.2],
  "桂林市": [110.28, 25.29],
  "张家界市": [110.479191, 29.117096],
  "宜兴市": [119.82, 31.36],
  "北海市": [109.12, 21.49],
  "西安市": [108.95, 34.27],
  "金坛市": [119.56, 31.74],
  "东营市": [118.49, 37.46],
  "牡丹江市": [129.58, 44.6],
  "遵义市": [106.9, 27.7],
  "绍兴市": [120.58, 30.01],
  "扬州市": [119.42, 32.39],
  "常州市": [119.95, 31.79],
  "潍坊市": [119.1, 36.62],
  "重庆市": [106.54, 29.59],
  "台州市": [121.420757, 28.656386],
  "南京市": [118.78, 32.04],
  "滨州市": [118.03, 37.36],
  "贵阳市": [106.71, 26.57],
  "无锡市": [120.29, 31.59],
  "本溪市": [123.73, 41.3],
  "克拉玛依市": [84.77, 45.59],
  "渭南市": [109.5, 34.52],
  "马鞍山市": [118.48, 31.56],
  "宝鸡市": [107.15, 34.38],
  "焦作市": [113.21, 35.24],
  "句容市": [119.16, 31.95],
  "北京市": [116.46, 39.92],
  "徐州市": [117.2, 34.26],
  "衡水市": [115.72, 37.72],
  "包头市": [110, 40.58],
  "绵阳市": [104.73, 31.48],
  "乌鲁木齐市": [87.68, 43.77],
  "枣庄市": [117.57, 34.86],
  "杭州市": [120.19, 30.26],
  "淄博市": [118.05, 36.78],
  "鞍山市": [122.85, 41.12],
  "溧阳市": [119.48, 31.43],
  "库尔勒市": [86.06, 41.68],
  "安阳市": [114.35, 36.1],
  "开封市": [114.35, 34.79],
  "济南市": [117, 36.65],
  "德阳市": [104.37, 31.13],
  "温州市": [120.65, 28.01],
  "九江市": [115.97, 29.71],
  "邯郸市": [114.47, 36.6],
  "临安市": [119.72, 30.23],
  "兰州市": [103.73, 36.03],
  "沧州市": [116.83, 38.33],
  "临沂市": [118.35, 35.05],
  "南充市": [106.110698, 30.837793],
  "天津市": [117.2, 39.13],
  "富阳市": [119.95, 30.07],
  "泰安市": [117.13, 36.18],
  "诸暨市": [120.23, 29.71],
  "郑州市": [113.65, 34.76],
  "哈尔滨市": [126.63, 45.75],
  "聊城市": [115.97, 36.45],
  "芜湖市": [118.38, 31.33],
  "唐山市": [118.02, 39.63],
  "平顶山市": [113.29, 33.75],
  "邢台市": [114.48, 37.05],
  "德州市": [116.29, 37.45],
  "济宁市": [116.59, 35.38],
  "荆州市": [112.239741, 30.335165],
  "宜昌市": [111.3, 30.7],
  "义乌市": [120.06, 29.32],
  "丽水市": [119.92, 28.45],
  "洛阳市": [112.44, 34.7],
  "驻马店市": [114.01, 32.58],
  "南阳市": [112.32, 33.00],
  "秦皇岛市": [119.57, 39.95],
  "株洲市": [113.16, 27.83],
  "石家庄市": [114.48, 38.03],
  "莱芜市": [117.67, 36.19],
  "常德市": [111.69, 29.05],
  "保定市": [115.48, 38.85],
  "湘潭市": [112.91, 27.87],
  "金华市": [119.64, 29.12],
  "岳阳市": [113.09, 29.37],
  "长沙市": [113, 28.21],
  "衢州市": [118.88, 28.97],
  "廊坊市": [116.7, 39.53],
  "菏泽市": [115.480656, 35.23375],
  "合肥市": [117.27, 31.86],
  "武汉市": [114.31, 30.52],
  "大庆市": [125.03, 46.58],
  "伊犁哈萨克自治州市": [81.32, 43.92],
  "昌吉回族自治州市": [87.30, 44.02],
  "巴音郭楞蒙古自治州市": [86.15, 41.77],
  "凉山彝族自治州市": [102.27, 27.90],
  "双鸭山市": [131.15, 131.15],
  "克拉玛依市": [84.87, 45.60],
  "博尔塔拉蒙古自治州市": [82.07, 44.90],
  "吐鲁番地区市": [89.17, 42.95],
  "哈密地区市": [93.52, 42.83],
  "阿图什市": [76.17, 39.72],
  "阿克苏地区市": [80.27, 41.17],
  "喀什地区市": [75.98, 39.47],
  "和田地区市": [79.92, 37.12],
  "塔城地区市": [82.98, 46.75],
  "阿勒泰市": [88.13, 47.85],
  "石河子市": [86.03, 44.30],
  "阜阳市": [115.82, 32.90],
  "大兴安岭地区市": [124.12, 50.42],
  "赣州市": [114.93, 25.83],
  "信阳市": [114.07, 32.13],
  "新乡市": [113.90, 35.30],
  "商丘市": [115.65, 34.45],
  "周口市": [114.65, 33.62],
  "上饶市": [117.97, 28.45],
  "许昌市": [113.85, 34.03],
  "绥化市": [126.98, 46.63],
  "运城市": [110.98, 35.02],
  "汉中市": [107.02, 33.07],
  "乐山市": [103.77, 29.57],
  "怀化市": [110.00, 27.57],
  "玉林市": [110.17, 22.63],
  "四平市": [124.35, 43.17],
  "松原市": [124.82, 45.13],
  "宜春市": [114.38, 27.80],
  "邵阳市": [111.47, 27.25],
  "晋城市": [112.83, 35.50],
  "孝感市": [113.92, 30.93],
  "呼伦贝尔市": [119.77, 49.22],
  "郴州市": [113.02, 25.78],
  "佳木斯市": [130.37, 46.82],
  "濮阳市": [115.03, 35.77],
  "滁州市": [118.32, 32.30],
  "吉安市": [114.98, 27.12],
  "辽阳市": [123.17, 41.27],
  "西双版纳傣族自治州市": [100.80, 22.02],
  "忻州市": [112.73, 38.42],
  "亳州市": [115.78, 33.85],
  "抚州市": [116.35, 28.00],
  "晋中市": [112.75, 37.68],
  "铁岭市": [123.83, 42.28],
  "通辽市": [122.27, 43.62],
  "永州市": [111.62, 26.43],
  "梧州市": [111.27, 23.48],
  "安庆市": [117.05, 30.53],
  "黔南布依族苗族自治州市": [107.52, 26.27],
  "娄底市": [112.00, 27.73],
  "阜新市": [121.67, 42.02],
  "六安市": [116.50, 31.77],
  "榆林市": [109.73, 38.28],
  "黄冈市": [114.87, 30.45],
  "延边朝鲜族自治州市": [129.50, 42.88],
  "眉山市": [103.83, 30.05],
  "蚌埠市": [117.38, 32.92],
  "内江市": [105.05, 29.58],
  "宿州市": [116.98, 33.63],
  "广安市": [106.63, 30.47],
  "吕梁市": [111.13, 37.52],
  "达州市": [107.50, 31.22],
  "莆田市": [119.00, 25.43],
  "张掖市": [100.45, 38.93],
  "黔东南苗族侗族自治州市": [107.97, 26.58],
  "通化市": [125.93, 41.73],
  "遂宁市": [105.57, 30.52],
  "百色市": [106.62, 23.90],
  "景德镇市": [117.17, 29.27],
  "池州市": [117.48, 30.67],
  "海门":[121.15,31.89],
  "鄂尔多斯":[109.781327,39.608266],
  "招远":[120.38,37.35],
  "舟山":[122.207216,29.985295],
  "齐齐哈尔":[123.97,47.33],
  "盐城":[120.13,33.38],
  "赤峰":[118.87,42.28],
  "青岛":[120.33,36.07],
  "乳山":[121.52,36.89],
  "金昌":[102.188043,38.520089],
  "泉州":[118.58,24.93],
  "莱西":[120.53,36.86],
  "日照":[119.46,35.42],
  "胶南":[119.97,35.88],
  "南通":[121.05,32.08],
  "拉萨":[91.11,29.97],
  "云浮":[112.02,22.93],
  "梅州":[116.1,24.55],
  "文登":[122.05,37.2],
  "上海":[121.48,31.22],
  "攀枝花":[101.718637,26.582347],
  "威海":[122.1,37.5],
  "承德":[117.93,40.97],
  "厦门":[118.1,24.46],
  "汕尾":[115.375279,22.786211],
  "潮州":[116.63,23.68],
  "丹东":[124.37,40.13],
  "太仓":[121.1,31.45],
  "曲靖":[103.79,25.51],
  "烟台":[121.39,37.52],
  "福州":[119.3,26.08],
  "瓦房店":[121.979603,39.627114],
  "即墨":[120.45,36.38],
  "抚顺":[123.97,41.97],
  "玉溪":[102.52,24.35],
  "张家口":[114.87,40.82],
  "阳泉":[113.57,37.85],
  "莱州":[119.942327,37.177017],
  "湖州":[120.1,30.86],
  "汕头":[116.69,23.39],
  "昆山":[120.95,31.39],
  "宁波":[121.56,29.86],
  "湛江":[110.359377,21.270708],
  "揭阳":[116.35,23.55],
  "荣成":[122.41,37.16],
  "连云港":[119.16,34.59],
  "葫芦岛":[120.836932,40.711052],
  "常熟":[120.74,31.64],
  "东莞":[113.75,23.04],
  "河源":[114.68,23.73],
  "淮安":[119.15,33.5],
  "泰州":[119.9,32.49],
  "南宁":[108.33,22.84],
  "营口":[122.18,40.65],
  "惠州":[114.4,23.09],
  "江阴":[120.26,31.91],
  "蓬莱":[120.75,37.8],
  "韶关":[113.62,24.84],
  "嘉峪关":[98.289152,39.77313],
  "广州":[113.23,23.16],
  "延安":[109.47,36.6],
  "太原":[112.53,37.87],
  "清远":[113.01,23.7],
  "中山":[113.38,22.52],
  "昆明":[102.73,25.04],
  "寿光":[118.73,36.86],
  "盘锦":[122.070714,41.119997],
  "长治":[113.08,36.18],
  "深圳":[114.07,22.62],
  "珠海":[113.52,22.3],
  "宿迁":[118.3,33.96],
  "咸阳":[108.72,34.36],
  "铜川":[109.11,35.09],
  "平度":[119.97,36.77],
  "佛山":[113.11,23.05],
  "海口":[110.35,20.02],
  "江门":[113.06,22.61],
  "章丘":[117.53,36.72],
  "肇庆":[112.44,23.05],
  "大连":[121.62,38.92],
  "临汾":[111.5,36.08],
  "吴江":[120.63,31.16],
  "石嘴山":[106.39,39.04],
  "沈阳":[123.38,41.8],
  "苏州":[120.62,31.32],
  "茂名":[110.88,21.68],
  "嘉兴":[120.76,30.77],
  "长春":[125.35,43.88],
  "胶州":[120.03336,36.264622],
  "银川":[106.27,38.47],
  "张家港":[120.555821,31.875428],
  "三门峡":[111.19,34.76],
  "锦州":[121.15,41.13],
  "南昌":[115.89,28.68],
  "柳州":[109.4,24.33],
  "三亚":[109.511909,18.252847],
  "自贡":[104.778442,29.33903],
  "":[126.57,43.87],
  "阳江":[111.95,21.85],
  "泸州":[105.39,28.91],
  "西宁":[101.74,36.56],
  "宜宾":[104.56,29.77],
  "呼和浩特":[111.65,40.82],
  "成都":[104.06,30.67],
  "大同":[113.3,40.12],
  "镇江":[119.44,32.2],
  "桂林":[110.28,25.29],
  "张家界":[110.479191,29.117096],
  "宜兴":[119.82,31.36],
  "北海":[109.12,21.49],
  "西安":[108.95,34.27],
  "金坛":[119.56,31.74],
  "东营":[118.49,37.46],
  "牡丹江":[129.58,44.6],
  "遵义":[106.9,27.7],
  "绍兴":[120.58,30.01],
  "扬州":[119.42,32.39],
  "常州":[119.95,31.79],
  "潍坊":[119.1,36.62],
  "重庆":[106.54,29.59],
  "台州":[121.420757,28.656386],
  "南京":[118.78,32.04],
  "滨州":[118.03,37.36],
  "贵阳":[106.71,26.57],
  "无锡":[120.29,31.59],
  "本溪":[123.73,41.3],
  "克拉玛依":[84.77,45.59],
  "渭南":[109.5,34.52],
  "马鞍山":[118.48,31.56],
  "宝鸡":[107.15,34.38],
  "焦作":[113.21,35.24],
  "句容":[119.16,31.95],
  "北京":[116.46,39.92],
  "徐州":[117.2,34.26],
  "衡水":[115.72,37.72],
  "包头":[110,40.58],
  "绵阳":[104.73,31.48],
  "乌鲁木齐":[87.68,43.77],
  "枣庄":[117.57,34.86],
  "杭州":[120.19,30.26],
  "淄博":[118.05,36.78],
  "鞍山":[122.85,41.12],
  "溧阳":[119.48,31.43],
  "库尔勒":[86.06,41.68],
  "安阳":[114.35,36.1],
  "开封":[114.35,34.79],
  "济南":[117,36.65],
  "德阳":[104.37,31.13],
  "温州":[120.65,28.01],
  "九江":[115.97,29.71],
  "邯郸":[114.47,36.6],
  "临安":[119.72,30.23],
  "兰州":[103.73,36.03],
  "沧州":[116.83,38.33],
  "临沂":[118.35,35.05],
  "南充":[106.110698,30.837793],
  "天津":[117.2,39.13],
  "富阳":[119.95,30.07],
  "泰安":[117.13,36.18],
  "诸暨":[120.23,29.71],
  "郑州":[113.65,34.76],
  "哈尔滨":[126.63,45.75],
  "聊城":[115.97,36.45],
  "芜湖":[118.38,31.33],
  "唐山":[118.02,39.63],
  "平顶山":[113.29,33.75],
  "邢台":[114.48,37.05],
  "德州":[116.29,37.45],
  "济宁":[116.59,35.38],
  "荆州":[112.239741,30.335165],
  "宜昌":[111.3,30.7],
  "义乌":[120.06,29.32],
  "丽水":[119.92,28.45],
  "洛阳":[112.44,34.7],
  "秦皇岛":[119.57,39.95],
  "株洲":[113.16,27.83],
  "石家庄":[114.48,38.03],
  "莱芜":[117.67,36.19],
  "常德":[111.69,29.05],
  "保定":[115.48,38.85],
  "湘潭":[112.91,27.87],
  "金华":[119.64,29.12],
  "岳阳":[113.09,29.37],
  "长沙":[113,28.21],
  "衢州":[118.88,28.97],
  "廊坊":[116.7,39.53],
  "菏泽":[115.480656,35.23375],
  "合肥":[117.27,31.86],
  "武汉":[114.31,30.52],
  "大庆":[125.03,46.58],
  "合肥":[31.52,117.17],
  "安庆":[30.31,117.02],
  "蚌埠":[32.56,117.21],
  "亳州":[33.52,115.47],
  "巢湖":[31.36,117.52],
  "滁州":[32.18,118.18],
  "阜阳":[32.54,115.48],
  "贵池":[30.39,117.28],
  "淮北":[33.57,116.47],
  "淮南":[32.37,116.58],
  "黄山":[29.43,118.18],
  "界首":[33.15,115.21],
  "六安":[31.44,116.28],
  "马鞍山":[31.43,118.28],
  "明光":[32.47,117.58],
  "宿州":[33.38,116.58],
  "天长":[32.41,118.59],
  "铜陵":[30.56,117.48],
  "芜湖":[31.19,118.22],
  "宣州":[30.57,118.44],
  "澳门市":[21.33,115.07],
  "北京市":[39.55,116.24],
  "福州":[26.05,119.18],
  "长乐":[25.58,119.31],
  "福安":[27.06,119.39],
  "福清":[25.42,119.23],
  "建瓯":[27.03,118.20],
  "建阳":[27.21,118.07],
  "晋江":[24.49,118.35],
  "龙海":[24.26,117.48],
  "龙岩":[25.06,117.01],
  "南安":[24.57,118.23],
  "南平":[26.38,118.10],
  "宁德":[26.39,119.31],
  "莆田":[24.26,119.01],
  "泉州":[24.56,118.36],
  "三明":[26.13,117.36],
  "邵武":[27.20,117.29],
  "石狮":[24.44,118.38],
  "武夷山":[27.46,118.02],
  "厦门":[24.27,118.06],
  "永安":[25.58,117.23],
  "漳平":[25.17,117.24],
  "漳州":[24.31,117.39],
  "兰州":[36.04,103.51],
  "白银":[36.33,104.12],
  "敦煌":[40.08,94.41],
  "嘉峪关":[39.48,98.14],
  "金昌":[38.28,102.10],
  "酒泉":[39.44,98.31],
  "临夏":[35.37,103.12],
  "平凉":[35.32,106.40],
  "天水":[34.37,105.42],
  "武威":[37.56,102.39],
  "西峰":[35.45,107.40],
  "玉门":[39.49,97.35],
  "张掖":[38.56,100.26],
  "广州":[23.08,113.14],
  "潮阳":[23.16,116.36],
  "潮州":[23.40,116.38],
  "澄海":[23.28,116.46],
  "从化":[23.33,113.33],
  "东莞":[23.02,113.45],
  "恩平":[22.12,112.19],
  "佛山":[23.02,113.06],
  "高明":[22.53,112.50],
  "高要":[23.02,112.26],
  "高州":[21.54,110.50],
  "鹤山":[22.46,112.57],
  "河源":[23.43,114.41],
  "花都":[23.23,113.12],
  "化州":[21.39,110.37],
  "惠阳":[22.48,114.28],
  "惠州":[23.05,114.22],
  "江门":[22.35,113.04],
  "揭阳":[22.32,116.21],
  "开平":[22.22,112.40],
  "乐昌":[25.09,113.21],
  "雷州":[20.54,110.04],
  "廉江":[21.37,110.17],
  "连州":[24.48,112.23],
  "罗定":[22.46,111.33],
  "茂名":[21.40,110.53],
  "梅州":[24.19,116.07],
  "南海":[23.01,113.09],
  "番禺":[22.57,113.22],
  "普宁":[23.18,116.10],
  "清远":[23.42,113.01],
  "三水":[23.10,112.52],
  "汕头":[23.22,116.41],
  "汕尾":[22.47,115.21],
  "韶关":[24.48,113.37],
  "深圳":[22.33,114.07],
  "顺德":[22.50,113.15],
  "四会":[23.21,112.41],
  "台山":[22.15,112.48],
  "吴川":[21.26,110.47],
  "新会":[22.32,113.01],
  "兴宁":[24.09,115.43],
  "阳春":[22.10,111.48],
  "阳江":[21.50,111.58],
  "英德":[24.10,113.22],
  "云浮":[22.57,112.02],
  "增城":[23.18,113.49],
  "湛江":[21.11,110.24],
  "肇庆":[23.03,112.27],
  "中山":[22.31,113.22],
  "珠海":[22.17,113.34],
  "南宁":[22.48,108.19],
  "北海":[21.28,109.07],
  "北流":[22.42,110.21],
  "百色":[23.54,106.36],
  "防城港":[21.37,108.20],
  "贵港":[23.06,109.36],
  "桂林":[25.17,110.17],
  "桂平":[23.22,110.04],
  "河池":[24.42,108.03],
  "合山":[23.47,108.52],
  "柳州":[23.19,109.24],
  "赁祥":[22.07,106.44],
  "钦州":[21.57,108.37],
  "梧州":[23.29,111.20],
  "玉林":[22.38,110.09],
  "宜州":[24.28,108.40],
  "贵阳":[26.35,106.42],
  "安顺":[26.14,105.55],
  "毕节":[27.18,105.18],
  "赤水":[28.34,105.42],
  "都匀":[26.15,107.31],
  "凯里":[26.35,107.58],
  "六盘水":[26.35,104.50],
  "清镇":[26.33,106.27],
  "铜仁":[27.43,109.12],
  "兴义":[25.05,104.53],
  "遵义":[27.42,106.55],
  "海口":[20.02,110.20],
  "儋州":[19.31,109.34],
  "琼海":[19.14,110.28],
  "琼山":[19.59,110.21],
  "三亚":[18.14,109.31],
  "通什":[18.46,109.31],
  "石家庄":[38.02,114.30],
  "安国":[38.24,115.20],
  "保定":[38.51,115.30],
  "霸州":[39.06,116.24],
  "泊头":[38.04,116.34],
  "沧州":[38.18,116.52],
  "承德":[40.59,117.57],
  "定州":[38.30,115.00],
  "丰南":[39.34,118.06],
  "高碑店":[39.20,115.51],
  "蒿城":[38.02,114.50],
  "邯郸":[36.36,114.28],
  "河间":[38.26,116.05],
  "衡水":[37.44,115.42],
  "黄骅":[38.21,117.21],
  "晋州":[38.02,115.02],
  "冀州":[37.34,115.33],
  "廓坊":[39.31,116.42],
  "鹿泉":[38.04,114.19],
  "南宫":[37.22,115.23],
  "秦皇岛":[39.55,119.35],
  "任丘":[38.42,116.07],
  "三河":[39.58,117.04],
  "沙河":[36.51,114.30],
  "深州":[38.01,115.32],
  "唐山":[39.36,118.11],
  "武安":[36.42,114.11],
  "邢台":[37.04,114.30],
  "辛集":[37.54,115.12],
  "新乐":[38.20,114.41],
  "张家口":[40.48,114.53],
  "涿州":[39.29,115.59],
  "遵化":[40.11,117.58],
  "郑州":[34.46,11340],
  "安阳":[36.06,114.21],
  "长葛":[34.12,113.47],
  "登封":[34.27,113.02],
  "邓州":[32.42,112.05],
  "巩义":[34.46,112.58],
  "鹤壁":[35.54,114.11],
  "辉县":[35.27,113.47],
  "焦作":[35.14,113.12],
  "济源":[35.04,112.35],
  "开封":[34.47,114.21],
  "灵宝":[34.31,110.52],
  "林州":[36.03,113.49],
  "漯河":[33.33,114.02],
  "洛阳":[34.41,112.27],
  "南阳":[33.00,112.32],
  "平顶山":[33.44,113.17],
  "濮阳":[35.44,115.01],
  "沁阳":[35.05,112.57],
  "汝州":[34.09,112.50],
  "三门峡":[34.47,111.12],
  "商丘":[34.26,115.38],
  "卫辉":[35.24,114.03],
  "舞钢":[33.17,113.30],
  "项城":[33.26,114.54],
  "荥阳":[34.46,113.21],
  "新密":[34.31,113.22],
  "新乡":[35.18,113.52],
  "信阳":[32.07,114.04],
  "新郑":[34.24,113.43],
  "许昌":[34.01,113.49],
  "偃师":[34.43,112.47],
  "义马":[34.43,111.55],
  "禹州":[34.09,113.28],
  "周口":[33.37,114.38],
  "驻马店":[32.58,114.01],
  "哈尔滨":[45.44,126.36],
  "阿城":[45.32,126.58],
  "安达":[46.24,125.18],
  "北安":[48.15,126.31],
  "大庆":[46.36,125.01],
  "富锦":[47.15,132.02],
  "海林":[44.35,129.21],
  "海伦":[47.28,126.57],
  "鹤岗":[47.20,130.16],
  "黑河":[50.14,127.29],
  "佳木斯":[46.47,130.22],
  "鸡西":[45.17,130.57],
  "密山":[45.32,131.50],
  "牡丹江":[44.35,129.36],
  "讷河":[48.29,124.51],
  "宁安":[44.21,129.28],
  "齐齐哈尔":[47.20,123.57],
  "七台河":[45.48,130.49],
  "双城":[45.22,126.15],
  "尚志":[45.14,127.55],
  "双鸭山":[46.38,131.11],
  "绥芬河":[44.25,131.11],
  "绥化":[46.38,126.59],
  "铁力":[46.59,128.01],
  "同江":[47.39,132.30],
  "五常":[44.55,127.11],
  "五大连池":[48.38,126.07],
  "伊春":[47.42,128.56],
  "肇东":[46.04,125.58],
  "武汉":[30.35,114.17],
  "安陆":[31.15,113.41],
  "当阳":[30.50,111.47],
  "丹江口":[32.33,108.30],
  "大冶":[30.06,114.58],
  "恩施":[30.16,109.29],
  "鄂州":[30.23,114.52],
  "广水":[31.37,113.48],
  "洪湖":[29.48,113.27],
  "黄石":[30.12,115.06],
  "黄州":[30.27,114.52],
  "荆门":[31.02,112.12],
  "荆沙":[30.18,112.16],
  "老河口":[32.23,111.40],
  "利川":[30.18,108.56],
  "麻城":[31.10,115.01],
  "浦圻":[29.42,113.51],
  "潜江":[30.26,112.53],
  "石首":[29.43,112.24],
  "十堰":[32.40,110.47],
  "随州":[31.42,113.22],
  "天门":[60.39,113.10],
  "武穴":[29.51,115.33],
  "襄樊":[32.02,112.08],
  "咸宁":[29.53,114.17],
  "仙桃":[30.22,113.27],
  "孝感":[30.56,113.54],
  "宜昌":[30.42,111.17],
  "宜城":[31.42,112.15],
  "应城":[30.57,113.33],
  "枣阳":[32.07,112.44],
  "枝城":[30.23,111.27],
  "钟祥":[31.10,112.34],
  "长沙":[28.12,112.59],
  "常德":[29.02,111.51],
  "郴州":[25.46,113.02],
  "衡阳":[26.53,112.37],
  "洪江":[27.07,109.59],
  "怀化":[27.33,109.58],
  "津市":[29.38,111.52],
  "吉首":[28.18,109.43],
  "耒阳":[26.24,112.51],
  "冷水江":[27.42,111.26],
  "冷水滩":[26.26,111.35],
  "涟源":[27.41,111.41],
  "醴陵":[27.40,113.30],
  "临湘":[29.29,113.27],
  "浏阳":[28.09,113.37],
  "娄底":[27.44,111.59],
  "汨罗":[28.49,113.03],
  "韶山":[27.54,112.29],
  "邵阳":[27.14,111.28],
  "武冈":[26.43,110.37],
  "湘潭":[27.52,112.53],
  "湘乡":[27.44,112.31],
  "益阳":[28.36,112.20],
  "永州":[26.13,111.37],
  "沅江":[28.50,112.22],
  "岳阳":[29.22,113.06],
  "张家界":[29.08,110.29],
  "株洲":[27.51,113.09],
  "资兴":[25.58,113.13],
  "长春":[43.54,125.19],
  "白城":[45.38,122.50],
  "白山":[41.56,126.26],
  "大安":[45.30,124.18],
  "德惠":[44.32,125.42],
  "敦化":[43.22,128.13],
  "公主岭":[43.31,124.49],
  "和龙":[42.32,129.00],
  "桦甸":[42.58,126.44],
  "珲春":[42.52,130.22],
  "集安":[41.08,126.11],
  "蛟河":[43.42,127.21],
  "":[43.52,126.33],
  "九台":[44.09,125.51],
  "辽源":[42.54,125.09],
  "临江":[41.49,126.53],
  "龙井":[42.46,129.26],
  "梅河口":[42.32,125.40],
  "舒兰":[44.24,126.57],
  "四平":[43.10,124.22],
  "松原":[45.11,124.49],
  "洮南":[45.20,122.47],
  "通化":[41.43,125.56],
  "图们":[42.57,129.51],
  "延吉":[42.54,129.30],
  "愉树":[44.49,126.32],
  "南京":[32.03,118.46],
  "常熟":[31.39,120.43],
  "常州":[31.47,119.58],
  "丹阳":[32.00,119.32],
  "东台":[32.51,120.19],
  "高邮":[32.47,119.27],
  "海门":[31.53,121.09],
  "淮安":[33.30,119.09],
  "淮阴":[33.36,119.02],
  "江都":[32.26,119.32],
  "姜堰":[32.34,120.08],
  "江阴":[31.54,120.17],
  "靖江":[32.02,120.17],
  "金坛":[31.46,119.33],
  "昆山":[31.23,120.57],
  "连去港":[34.36,119.10],
  "溧阳":[31.26,119.29],
  "南通":[32.01,120.51],
  "邳州":[34.19,117.59],
  "启乐":[31.48,121.39],
  "如皋":[32.23,120.33],
  "宿迁":[33.58,118.18],
  "苏州":[31.19,120.37],
  "太仓":[31.27,121.06],
  "泰兴":[32.10,120.01],
  "泰州":[32.30,119.54],
  "通州":[32.05,121.03],
  "吴江":[31.10,120.39],
  "无锡":[31.34,120.18],
  "兴化":[32.56,119.50],
  "新沂":[34.22,118.20],
  "徐州":[34.15,117.11],
  "盐在":[33.22,120.08],
  "扬中":[32.14,119.49],
  "扬州":[32.23,119.26],
  "宜兴":[31.21,119.49],
  "仪征":[32.16,119.10],
  "张家港":[31.52,120.32],
  "镇江":[32.11,119.27],
  "南昌":[28.40,115.55],
  "德兴":[28.57,117.35],
  "丰城":[28.12,115.48],
  "赣州":[28.52,114.56],
  "高安":[28.25,115.22],
  "吉安":[27.07,114.58],
  "景德镇":[29.17,117.13],
  "井冈山":[26.34,114.10],
  "九江":[29.43,115.58],
  "乐平":[28.58,117.08],
  "临川":[27.59,116.21],
  "萍乡":[27.37,113.50],
  "瑞昌":[29.40,115.38],
  "瑞金":[25.53,116.01],
  "上饶":[25.27,117.58],
  "新余":[27.48,114.56],
  "宜春":[27.47,114.23],
  "鹰潭":[28.14,117.03],
  "樟树":[28.03,115.32],
  "沈阳":[41.48,123.25],
  "鞍山":[41.07,123.00],
  "北票":[41.48,120.47],
  "本溪":[41.18,123.46],
  "朝阳":[41.34,120.27],
  "大连":[38.55,121.36],
  "丹东":[40.08,124.22],
  "大石桥":[40.37,122.31],
  "东港":[39.53,124.08],
  "凤城":[40.28,124.02],
  "抚顺":[41.51,123.54],
  "阜新":[42.01,121.39],
  "盖州":[40.24,122.21],
  "海城":[40.51,122.43],
  "葫芦岛":[40.45,120.51],
  "锦州":[41.07,121.09],
  "开原":[42.32,124.02],
  "辽阳":[41.16,123.12],
  "凌海":[41.10,121.21],
  "凌源":[41.14,119.22],
  "盘锦":[41.07,122.03],
  "普兰店":[39.23,121.58],
  "铁法":[42.28,123.32],
  "铁岭":[42.18,123.51],
  "瓦房店":[39.37,122.00],
  "兴城":[40.37,120.41],
  "新民":[41.59,122.49],
  "营口":[40.39,122.13],
  "庄河":[39.41,122.58],
  "呼和浩特":[40.48,111.41],
  "包头":[40.39,109.49],
  "赤峰":[42.17,118.58],
  "东胜":[39.48,109.59],
  "二连浩特":[43.38,111.58],
  "额尔古纳":[50.13,120.11],
  "丰镇":[40.27,113.09],
  "根河":[50.48,121.29],
  "海拉尔":[49.12,119.39],
  "霍林郭勒":[45.32,119.38],
  "集宁":[41.02,113.06],
  "临河":[40.46,107.22],
  "满洲里":[49.35,117.23],
  "通辽":[43.37,122.16],
  "乌兰浩特":[46.03,122.03],
  "乌海":[39.40,106.48],
  "锡林浩特":[43.57,116.03],
  "牙克石":[49.17,120.40],
  "扎兰屯":[48.00,122.47],
  "银川":[38.27,106.16],
  "青铜峡":[37.56,105.59],
  "石嘴山":[39.02,106.22],
  "吴忠":[37.59,106.11],
  "西宁":[36.38,101.48],
  "德令哈":[37.22,97.23],
  "格尔木":[36.26,94.55],
  "济南":[36.40,117.00],
  "安丘":[36.25,119.12],
  "滨州":[37.22,118.02],
  "昌邑":[39.52,119.24],
  "德州":[37.26,116.17],
  "东营":[37.27,118.30],
  "肥城":[36.14,116.46],
  "高密":[36.22,119.44],
  "菏泽":[35.14,115.26],
  "胶南":[35.53,119.58],
  "胶州":[36.17,120.00],
  "即墨":[36.22,120.28],
  "济宁":[35.23,116.33],
  "莱芜":[36.12,117.40],
  "莱西":[36.52,120.31],
  "莱阳":[36.58,120.42],
  "莱州":[37.10,119.57],
  "乐陵":[37.44,117.12],
  "聊城":[36.26,115.57],
  "临清":[36.51,115.42],
  "临沂":[35.03,118.20],
  "龙口":[37.39,120.21],
  "蓬莱":[37.48,120.45],
  "平度":[36.47,119.58],
  "青岛":[36.03,120.18],
  "青州":[36.42,118.28],
  "曲阜":[35.36,116.58],
  "日照":[35.23,119.32],
  "荣成":[37.10,122.25],
  "乳山":[36.54,121.31],
  "寿光":[36.53,118.44],
  "泰安":[36.11,117.08],
  "滕州":[35.06,117.09],
  "潍坊":[36.43,119.06],
  "威海":[37.31,122.07],
  "文登":[37.12,122.03],
  "新泰":[35.54,117.45],
  "烟台":[37.32,121.24],
  "兖州":[35.32,116.49],
  "禹城":[36.56,116.39],
  "枣庄":[34.52,117.33],
  "章丘":[36.43,117.32],
  "招远":[37.21,120.23],
  "诸城":[35.59,119.24],
  "淄博":[36.48,118.03],
  "邹城":[35.24,116.58],
  "太原":[37.54,112.33],
  "长治":[36.11,113.06],
  "大同":[40.06,113.17],
  "高平":[35.48,112.55],
  "古交":[37.54,112.09],
  "河津":[35.35,110.41],
  "侯马":[35.37,111.21],
  "霍州":[36.34,111.42],
  "介休":[37.02,111.55],
  "晋城":[35.30,112.51],
  "临汾":[36.05,111.31],
  "潞城":[36.21,113.14],
  "朔州":[39.19,112.26],
  "孝义":[37.08,111.48],
  "忻州":[38.24,112.43],
  "阳泉":[37.51,113.34],
  "永济":[34.52,110.27],
  "原平":[38.43,112.42],
  "榆次":[37.41,112.43],
  "运城":[35.02,110.59],
  "西安":[34.17,108.57],
  "安康":[32.41,109.01],
  "宝鸡":[34.22,107.09],
  "韩城":[35.28,110.27],
  "汉中":[33.04,107.01],
  "华阴":[34.34,110.05],
  "商州":[33.52,109.57],
  "铜川":[35.06,109.07],
  "渭南":[34.30,109.30],
  "咸阳":[34.20,108.43],
  "兴平":[34.18,108.29],
  "延安":[36.35,109.28],
  "榆林":[38.18,109.47],
  "上海市":[31.14,121.29],
  "成都":[30.40,104.04],
  "巴中":[31.51,106.43],
  "崇州":[30.39,103.40],
  "达川":[31.14,107.29],
  "德阳":[31.09,104.22],
  "都江堰":[31.01,103.37],
  "峨眉山":[29.36,103.29],
  "涪陵":[29.42,107.22],
  "广汉":[30.58,104.15],
  "广元":[32.28,105.51],
  "华蓥":[30.26,106.44],
  "简阳":[30.24,104.32],
  "江油":[31.48,104.42],
  "阆中":[31.36,105.58],
  "乐山":[29.36,103.44],
  "泸州":[28.54,105.24],
  "绵阳":[31.30,104.42],
  "南充":[30.49,106.04],
  "内江":[29.36,105.02],
  "攀枝花":[26.34,101.43],
  "彭州":[30.59,103.57],
  "邛崃":[30.26,103.28],
  "遂宁":[30.31,105.33],
  "万县":[30.50,108.21],
  "万源":[32.03,108.03],
  "西昌":[27.54,102.16],
  "雅安":[29.59,102.59],
  "宜宾":[28.47,104.34],
  "自贡":[29.23,104.46],
  "资阳":[30.09,104.38],
  "台北市":[25.03,121.30],
  "天津市":[39.02,117.12],
  "拉萨":[29.39,91.08],
  "日喀则":[29.16,88.51],
  "香港市":[21.23,115.12],
  "乌鲁木齐":[43.45,87.36],
  "阿克苏":[41.09,80.19],
  "阿勒泰":[47.50,88.12],
  "阿图什":[39.42,76.08],
  "博乐":[44.57,82.08],
  "昌吉":[44.02,87.18],
  "阜康":[44.09,87.58],
  "哈密":[42.50,93.28],
  "和田":[37.09,79.55],
  "克拉玛依":[45.36,84.51],
  "喀什":[39.30,75.59],
  "库尔勒":[41.46,86.07],
  "奎屯":[44.27,84.56],
  "石河子":[44.18,86.00],
  "塔城":[46.46,82.59],
  "吐鲁番":[42.54,89.11],
  "伊宁":[43.55,81.20],
  "昆明":[25.04,102.42],
  "保山":[25.08,99.10],
  "楚雄":[25.01,101.32],
  "大理":[25.34,100.13],
  "东川":[26.06,103.12],
  "个旧":[23.21,103.09],
  "景洪":[22.01,100.48],
  "开远":[23.43,103.13],
  "曲靖":[25.30,103.48],
  "瑞丽":[24.00,97.50],
  "思茅":[22.48,100.58],
  "畹町":[24.06,98.04],
  "宣威":[26.13,104.06],
  "玉溪":[24.22,102.32],
  "昭通":[27.20,103.42],
  "杭州":[30.16,120.10],
  "慈溪":[30.11,121.15],
  "东阳":[29.16,120.14],
  "奉化":[29.39,121.24],
  "富阳":[30.03,119.57],
  "海宁":[30.32,120.42],
  "湖州":[30.52,120.06],
  "建德":[29.29,119.16],
  "江山":[28.45,118.37],
  "嘉兴":[30.46,120.45],
  "金华":[29.07,119.39],
  "兰溪":[29.12,119.28],
  "临海":[28.51,121.08],
  "丽水":[28.27,119.54],
  "龙泉":[28.04,119.08],
  "宁波":[29.52,121.33],
  "平湖":[30.42,121.01],
  "衢州":[28.58,118.52],
  "瑞安":[27.48,120.38],
  "上虞":[30.01,120.52],
  "绍兴":[30.00,120.34],
  "台州":[28.41,121.27],
  "桐乡":[30.38,120.32],
  "温岭":[28.22,121.21],
  "温州":[28.01,120.39],
  "萧山":[30.09,120.16],
  "义乌":[29.18,120.04],
  "乐清":[28.08,120.58],
  "余杭":[30.26,120.18],
  "余姚":[30.02,121.10],
  "永康":[29.54,120.01],
  "舟山":[30.01,122.06],
  "诸暨":[29.43,120.14],
  "重庆市":[29.35,106.33],
  "合川市":[30.02,106.15],
  "江津市":[29.18,106.16],
  "南川市":[29.10,107.05],
  "永川市":[29.23,105.53]

}
