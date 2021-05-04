// 柱状图模块1
(function() {
  // 1实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2. 指定配置项和数据
  var option = {

    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表的大小
    grid: {
      left: "0%",
      top: "10px",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: [
          "网络游戏",
          "互联网/电子商务",
          "计算机软件",
          "计算机服务",
          "电子技术/半导体",
          "计算机硬件",
          "教育/培训/院校",
            "学术/科研",
            "通信/电信/网络设备",
            "金融/投资/证券"
        ],
        axisTick: {
          alignWithLabel: true
        },
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: "12"
        },
        // 不显示x坐标轴的样式
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        // 修改刻度标签 相关样式
        axisLabel: {
          color: "rgba(255,255,255,.6) ",
          fontSize: 12
        },
        // y轴的线条改为了 2像素
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 2
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {

        type: "bar",
        barWidth: "35%",
        data: [686, 1377,4626, 496, 246, 113, 45,23,148,65],
        itemStyle: {
          // 修改柱子圆角
          barBorderRadius: 5
        }
      }
    ]
  };
  // 3. 把配置项给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 柱状图2
(function() {
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6","#F57474","#1089E7"];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2. 指定配置和数据
  var option = {

    grid: {
      top: "10%",
      left: "22%",
      bottom: "10%"
      // containLabel: true
    },
    // 不显示x轴的相关信息
    xAxis: {
      show: false
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        data: ["HTML5/CSS3", "Java", "vue3","nodeJs","Javascript", "react", "Spring Boot"],
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#FFF"
        }
      },
      {
        data: [670, 989, 610,430,890, 793, 730],
        inverse: true,
        // 不显示y轴的线
        axisLine: {
          show: false
        },
        // 不显示刻度
        axisTick: {
          show: false
        },
        // 把刻度标签里面的文字颜色设置为白色
        axisLabel: {
          color: "#FFF"
        }
      }
    ],
    series: [
      {
        name: "条",
        type: "bar",
        data: [70, 60, 60,52,60, 78, 69],
        yAxisIndex: 0,
        // 修改第一组柱子的圆角
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color 可以修改柱子的颜色
          color: function(params) {
            // params 传进来的是柱子对象
            // console.log(params);
            // dataIndex 是当前柱子的索引号
            return myColor[params.dataIndex];
          }
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        //柱子的宽度
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动的解析为 数据  data里面的数据
          formatter: "{c}%"
        }
      },
      {
        name: "框",
        type: "bar",
        barCategoryGap: 50,
        barWidth: 15,
        yAxisIndex: 1,
        data: [100, 100, 100,100,100, 100, 100],
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 3,
          barBorderRadius: 15
        }
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 折线图1模块制作
(function() {
  var yearData = [
    {
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".line .chart"));
  // 2.指定配置
  var option = {
    // 通过这个color修改两条线的颜色
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      trigger: "axis"
    },
    legend: {
      // 如果series 对象有name 值，则 legend可以不用写data
      // 修改图例组件 文字颜色
      textStyle: {
        color: "#4c9bfd"
      },
      // 这个10% 必须加引号
      right: "10%"
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      show: true, // 显示边框
      borderColor: "#012f4a", // 边框颜色
      containLabel: true // 包含刻度文字在内
    },

    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "rgba(255,255,255,.6)" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false // 去除刻度线
      },
      axisLabel: {
        color: "rgba(255,255,255,.6)" // 文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    series: [
      {
        name: "管理岗位",
        type: "line",
        // true 可以让我们的折线显示带有弧度
        smooth: true,
        data: yearData[0].data[0]
      },
      {
        name: "开发岗位",
        type: "line",
        smooth: true,
        data: yearData[0].data[1]
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 5.点击切换效果
  $(".line h2").on("click", "a", function() {
    // alert(1);
    // console.log($(this).index());
    // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 需要重新渲染
    myChart.setOption(option);
  });
})();
// 折线图2 模块制作
(function() {
  var myChart = echarts.init(document.querySelector(".line2 .chart"));
  option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        // data: [ '工资']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    axisLabel: {
        color: "rgba(255,255,255,.6)" // 文本颜色
      },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        }
      }
    },
    yAxis: {
        type: 'category',
        data: ['民营', '国企', '合资', '外企', '上市', '事业单位','创业公司'],
       splitLine: {
        lineStyle: {
          color: "#012f4a" // 分割线颜色
        },

      }
    },
    series: [
        {
           itemStyle:{
             normal: {
                  color: function(params) {
                    // build a color map as your need.
                    // 在这里面写好函数 根据条件返回对应的颜色就可以
                    var colorList = [
                      '#1089E7','#F57474','#56D0E3','#F8B448','#8B78F6',"#E33E35","#BB6734"];
                    return colorList[params.dataIndex]
         },
             }
           },
            type: 'bar',
            // name: '工资',
            data: [7897, 6578, 8956, 9656, 8325, 6783,6654],
        },

    ]
};
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
// 饼形图1
(function() {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  // 2.指定配置
  var option = {
    color: ["#FA6900", "#FF9F7F", "#16F2D9", "#0696ab", "#06a0ab"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },

    legend: {
      bottom: "0%",
      // 修改小图标的大小
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "年龄分布",
        type: "pie",
        // 这个radius可以修改饼形图的大小
        // radius 第一个值是内圆的半径 第二个值是外圆的半径
        radius: ["40%", "60%"],
        center: ["50%", "45%"],
        avoidLabelOverlap: false,
        // 图形上的文字
        label: {
          show: false,
          position: "center"
        },
        // 链接文字和图形的线是否显示
        labelLine: {
          show: false
        },
        data: [
          { value: 4000, name: "民营公司" },
          { value: 287, name: "外资（非欧美）" },
          { value: 69, name: "国资" },
          { value: 67, name: "合资" },
          { value: 47, name: "上市公司" },
          { value: 10, name: "事业单位" },
          { value: 37, name: "外资（欧美）" },
          { value: 5, name: "政府机关" },
          { value: 7, name: "创业公司" },
        ]
      }
    ]
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 饼形图2 地区分布模块
(function() {
  var myChart = echarts.init(document.querySelector(".pie2 .chart"));
  var option = {
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      bottom: "-2%",
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,5)",
        fontSize: "12"
      }
    },
    series: [
      {
        name: "学历要求",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        // 图形的文字标签
        label: {
          fontSize: 10
        },
        // 链接图形和文字的线条
        labelLine: {
          // length 链接图形的线条
          length: 6,
          // length2 链接文字的线条
          length2: 8
        },
        data: [
            { value: 3390, name: "本科" },
          { value: 2257, name: "大专" },
          { value: 1290, name: "硕士" },
          { value: 2678, name: "不限" }
        ]
      }
    ]
  };
  myChart.setOption(option);
  // 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// // 饼形图2 地区分布模块
// (function() {
//   var myChart = echarts.init(document.querySelector(".map .chart"));
//   var option = {
//
//     color: [
//       "#006cff",
//       "#60cda0",
//       "#ed8884",
//       "#ff9f7f",
//       "#0096ff",
//       "#9fe6b8",
//       "#32c5e9",
//       "#1d9dff"
//     ],
//     tooltip: {
//       trigger: "item",
//       formatter: "{a} <br/>{b} : {c} ({d}%)"
//     },
//     legend: {
//       bottom: "0%",
//       itemWidth: 10,
//       itemHeight: 10,
//       textStyle: {
//         color: "rgba(255,255,255,1)",
//         fontSize: "12"
//       }
//     },
//     series: [
//       {
//         name: "地区分布",
//         type: "pie",
//         radius: ["10%", "70%"],
//         center: ["50%", "50%"],
//         roseType: "radius",
//         // 图形的文字标签
//         label: {
//           fontSize: 10
//         },
//         // 链接图形和文字的线条
//         labelLine: {
//           // length 链接图形的线条
//           length: 6,
//           // length2 链接文字的线条
//           length2: 8
//         },
//         data: [
//           { value: 20, name: "云南" },
//           { value: 26, name: "北京" },
//           { value: 24, name: "山东" },
//           { value: 25, name: "河北" },
//           { value: 20, name: "江苏" },
//           { value: 25, name: "浙江" },
//           { value: 30, name: "四川" },
//           { value: 42, name: "湖北" }
//         ]
//       }
//     ]
//   };
//   myChart.setOption(option);
//   // 监听浏览器缩放，图表对象调用缩放resize函数
//   window.addEventListener("resize", function() {
//     myChart.resize();
//   });
// })();


(function (){

 var chartWord = echarts.init(document.getElementById('main'));

            var option = {
                tooltip: {},
                series: [ {
                    type: 'wordCloud',
                    gridSize: 2,
                    sizeRange: [12, 50],
                    rotationRange: [-90, 90],
                    shape: 'pentagon',
                    width: 600,
                    height: 400,
                    drawOutOfBound: true,
                    textStyle: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        textStyle: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [
                        {
                            name: '五险一金',
                            value: 10000,
                            textStyle: {
                                color: '#F8B448'
                            }

                        },
                        {
                            name: '绩效奖金',
                            value: 6181
                        },
                        {
                            name: '节日福利',
                            value: 4386
                        },
                        {
                            name: '交通便利',
                            value: 4055
                        },
                        {
                            name: '股票期权',
                            value: 2467
                        },
                        {
                            name: '弹性工作',
                            value: 2244
                        },
                        {
                            name: '餐饮补贴',
                            value: 1898
                        },
                        {
                            name: '周末双休',
                            value: 1484
                        },
                        {
                            name: '带薪年假',
                            value: 1112
                        },
                        {
                            name: '年终奖金',
                            value: 965
                        },
                        {
                            name: '通讯补贴',
                            value: 847
                        },
                        {
                            name: '补充医疗保险',
                            value: 582
                        },
                        {
                            name: '人才公寓',
                            value: 555
                        },
                        {
                            name: '补充医疗保险',
                            value: 550
                        },
                        {
                            name: '员工旅游',
                            value: 462
                        },
                        {
                            name: '定期体检',
                            value: 366
                        },
                        {
                            name: '做五休二',
                            value: 360
                        },
                        {
                            name: '团建活动',
                            value: 282
                        },
                        {
                            name: '专业培训',
                            value: 273
                        },
                        {
                            name: '全勤奖',
                            value: 265
                        },
                        {
                            name: '定期体检',
                            value: 265
                        }
                    ]
                } ]
            };

            chartWord.setOption(option);

            window.onresize = chartWord.resize;

})();

(function (){

 var chartWord2 = echarts.init(document.getElementById('position'));
console.log("a");
            var option = {
                tooltip: {},
                series: [ {
                    type: 'wordCloud',
                    gridSize: 2,
                    sizeRange: [12, 50],
                    rotationRange: [-90, 90],
                    shape: 'pentagon',
                    width: 600,
                    height: 400,
                    drawOutOfBound: true,
                    textStyle: {
                        color: function () {
                            return 'rgb(' + [
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160),
                                Math.round(Math.random() * 160)
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        textStyle: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: [
                        {
                            name: 'Web前端开发工程师',
                            value: 897,
                            textStyle: {
                                color: '#F8B448'
                            }

                        },
                        {
                            name: 'Java后端开发',
                            value: 1609
                        },
                        {
                            name: '大数据',
                            value: 184
                        },
                        {
                            name: '游戏开发',
                            value: 551
                        },
                        {
                            name: 'C#开发',
                            value: 93
                        },
                        {
                            name: '运维工程师',
                            value: 100
                        },
                        {
                            name: '算法开发',
                            value: 492
                        },
                        {
                            name: 'UI设计师',
                            value: 30
                        },
                        {
                            name: '软件测试',
                            value: 228
                        },
                        {
                            name: 'C++工程师',
                            value: 410
                        },
                        {
                            name: '安卓Android开发',
                            value: 228
                        },
                        {
                            name: '人工智能',
                            value: 107
                        },
                        {
                            name: '.net工程师',
                            value: 223
                        },
                        {
                            name: 'python开发',
                            value: 118
                        },
                        {
                            name: 'linux工程师',
                            value: 31
                        },
                        {
                            name: '区块链开发',
                            value: 6
                        },
                        {
                            name: '研发工程师',
                            value: 38
                        },
                        {
                            name: '计算机视觉',
                            value: 68
                        },
                        {
                            name: '需求分析师',
                            value: 32
                        },
                        {
                            name: 'php开发工程师',
                            value: 265
                        },
                        {
                            name: '3D模型制造师',
                            value: 89
                        }
                    ]
                } ]
            };

            chartWord2.setOption(option);

            window.onresize = chartWord2.resize;

})()