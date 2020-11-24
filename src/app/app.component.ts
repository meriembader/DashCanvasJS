import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { ApiService } from './api.service';
import { ApiPieService } from './apiPie.service';
import {ApiHighService} from './apiHigh.service';
import {ApiPie2Service} from './ApiPie2.service';
import {ApiTestService} from './ApiTest.service';
import * as CanvasJS from './canvasjs.min';
import * as $ from 'jquery';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
//var CanvasJS = require('./canvasjs.min');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  elements;
  elements1;
  constructor(
    private ApiService: ApiService,
    private ApiPieService: ApiPieService,
    private ApiHighService: ApiHighService,
    private ApiPie2Service: ApiPie2Service,
    private ApiTestService: ApiTestService,
  ){
  }
 
	ngOnInit() {


    this.ApiPie2Service.getData().subscribe((data:any) => {
      console.log(data.response);
      let dataRes1 = [];
      data.forEach(element1 => {
        var obj = {
          y: element1.forecast,
          label : element1.Date,
        }
        dataRes1.push(obj);
      });
      console.log("je suis la ",dataRes1);
      this.elements = dataRes1;

    let chart = new CanvasJS.Chart("chartContainer12", {
      animationEnabled: true,
      zoomEnabled: true,
      theme: "dark2",
      title: {
        text: "OrderQuantity and Forcast"
      },
      axisX: {
        title: "Year",
        valueFormatString: "####",
        interval: 2
      },
      axisY: {
        logarithmic: true, //change it to false
        title: "Forecast (Date)",
        titleFontColor: "#006400",
        lineColor: "#006400",
        gridThickness: 0,
        lineThickness: 1,
        labelFormatter: addSymbols
      },
      axisY2: {
        title: "Order Quantity ( Date)",
        titleFontColor: "#8B0000",
        logarithmic: false, //change it to true
        lineColor: "#8B0000",
        gridThickness: 0,
        lineThickness: 1,
        labelFormatter: addSymbols
      },
      legend: {
        verticalAlign: "top",
        fontSize: 16,
        dockInsidePlotArea: true
      },
      data: [{
        type: "line",
        xValueFormatString: "####",
        showInLegend: true,
        name: "Forecast",
        dataPoints: this.elements
      },
      {
        type: "line",
        xValueFormatString: "####",
        axisYType: "secondary",
        showInLegend: true,
        name: "OrderQuantity",
        dataPoints:this.elements1
      }]
    });
    chart.render()
  
    
function addSymbols(e) {
	var suffixes = ["", "K", "M", "B"];

	var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
	if(order > suffixes.length - 1)
		order = suffixes.length - 1;

	var suffix = suffixes[order];
	return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
}


this.ApiPie2Service.getData1().subscribe((data:any) => {
  console.log(data.response);
  let dataRes1 = [];
  data.forEach(element1 => {
    var obj = {
      y: element1.OrderQuantity,
      label : element1._id,
    }
    dataRes1.push(obj);
  });
  console.log("je suis la ",dataRes1);
  this.elements1 = dataRes1;

let chart = new CanvasJS.Chart("chartContainer12", {
  animationEnabled: true,
  zoomEnabled: true,
  theme: "blank",
  title: {
    text: "Wa333"
  },
  axisX: {
    title: "Year",
    valueFormatString: "####",
    interval: 2
  },
  axisY: {
    logarithmic: true, //change it to false
    title: "Forecast(Date)",
    titleFontColor: "#6D78AD",
    lineColor: "#6D78AD",
    gridThickness: 0,
    lineThickness: 1,
    labelFormatter: addSymbols
  },
  axisY2: {
    title: "Order Quantity(Date)",
    titleFontColor: "#8B0000",
    logarithmic: false, //change it to true
    lineColor: "#8B0000",
    gridThickness: 0,
    lineThickness: 1,
    labelFormatter: addSymbols
  },
  legend: {
    verticalAlign: "top",
    fontSize: 16,
    dockInsidePlotArea: true
  },
  data: [{
    type: "line",
    xValueFormatString: "####",
    showInLegend: true,
    name: "Forecast",
    dataPoints: this.elements
  },
  {
    type: "line",
    xValueFormatString: "####",
    axisYType: "secondary",
    showInLegend: true,
    name: "OrderQuantity",
    dataPoints:this.elements1
  }]
});
chart.render()

function addSymbols(e) {
var suffixes = ["", "K", "M", "B"];

var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
if(order > suffixes.length - 1)
order = suffixes.length - 1;

var suffix = suffixes[order];
return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
}


    this.ApiPie2Service.getData().subscribe((data:any) => {
      console.log(data.response);
      let dataRes1 = [];
      data.forEach(element1 => {
        var obj = {
          y: element1.forecast,
          label : element1.Date,
        }
        dataRes1.push(obj);
      });
      console.log("je suis la ",dataRes1);
      this.elements = dataRes1;
    let chart = new CanvasJS.Chart("chartContainer10", {
      animationEnabled: true,  
      title:{
        text: "Company Revenue by Year"
      },
      axisY: {
        title: "Revenue in USD",
        valueFormatString: "",
        suffix: "",
        prefix: ""
      },
      data: [{
        type: "splineArea",
        color: "rgba(54,158,173,.7)",
        markerSize: 5,
        xValueFormatString: "YYYY",
        yValueFormatString: "$#,##0.##",
        dataPoints: this.elements
      }]
      });
    chart.render()
    })
    

  this.ApiPie2Service.getData().subscribe((data:any) => {
      console.log(data.response);
      let dataRes1 = [];
      data.forEach(element1 => {
        var obj = {
          y: element1.forecast,
          label : element1.Date,
        }
        dataRes1.push(obj);
      });
      console.log("je suis la ",dataRes1);
      this.elements = dataRes1;
    let chart = new CanvasJS.Chart("chartContainer10", {
      animationEnabled: true,
      title: {
        text: "Daily Email Analysis"
      },
      axisX: {
        valueFormatString: "DDD",
        minimum: new Date(2017, 1, 5, 23),
        maximum: new Date(2017, 1, 12, 1)
      },
      axisY: {
        title: "Number of Messages"
      },
      legend: {
        verticalAlign: "top",
        horizontalAlign: "right",
        dockInsidePlotArea: true
      },
      toolTip: {
        shared: true
      },
      data: [{
        name: "Received",
        showInLegend: true,
        legendMarkerType: "square",
        type: "area",
        color: "rgba(40,175,101,0.6)",
        markerSize: 0,
        dataPoints: this.elements
      },
      {
        name: "Sent",
        showInLegend: true,
        legendMarkerType: "square",
        type: "area",
        color: "rgba(0,75,141,0.7)",
        markerSize: 0,
        dataPoints: this.elements1
      }]
    });
    chart.render();
  })
    this.ApiPie2Service.getData1().subscribe((data:any) => {
      console.log(data.response);
      let dataRes1 = [];
      data.forEach(element1 => {
        var obj = {
          y: element1.OrderQuantity,
          label : element1._id,
        }
        dataRes1.push(obj);
      });
      console.log("je suis la ",dataRes1);
      this.elements1 = dataRes1;
    let chart = new CanvasJS.Chart("chartContainer10", {
      animationEnabled: true,
      title: {
        text: "Daily Email Analysis"
      },
      axisX: {
        valueFormatString: "DDD",
        minimum: new Date(2017, 1, 5, 23),
        maximum: new Date(2017, 1, 12, 1)
      },
      axisY: {
        title: "Number of Messages"
      },
      legend: {
        verticalAlign: "top",
        horizontalAlign: "right",
        dockInsidePlotArea: true
      },
      toolTip: {
        shared: true
      },
      data: [{
        name: "Received",
        showInLegend: true,
        legendMarkerType: "square",
        type: "area",
        color: "rgba(40,175,101,0.6)",
        markerSize: 0,
        dataPoints: this.elements
      },
      {
        name: "Sent",
        showInLegend: true,
        legendMarkerType: "square",
        type: "area",
        color: "rgba(0,75,141,0.7)",
        markerSize: 0,
        dataPoints: this.elements1
      }]
    });
    chart.render()
    })
    



    /****************************************************************************** */





    this.ApiPie2Service.getData().subscribe((data: any) => {
      console.log('newww', data);
      const dataRes1 = [];
      data.forEach(element1 => {
        const obj = {
          y: element1.forecast,
          label: element1.Date,
        };
        dataRes1.push(obj);
      });
      console.log(dataRes1);
      this.elements = dataRes1;
      // tslint:disable-next-line:no-shadowed-variable
        const chart = new CanvasJS.Chart('chartContainer8', {
          title: {
            text: 'Sales'
          },
          axisX: [{
            title: 'Date',
            lineColor: '#369EAD',
          }, {
            title: 'OrderDate',
            lineColor: '#C24642',
          }],
          data: [{
            type: 'line',
            axisXIndex: 0,
            dataPoints: this.elements
          },
            {
              type: 'line',
              axisXIndex: 1,
              dataPoints: this.elements1
            }, ]
        });
         chart.render();
      });
    this.ApiPie2Service.getData1().subscribe((data: any) => {
      console.log('dataset', data);
      const dataRes2 = [];
      data.forEach(element1 => {
        const obj = {
          y: element1.OrderQuantity,
          label: element1._id,
        };
        dataRes2.push(obj);
      });
      console.log(dataRes2);
      this.elements1 = dataRes2;
      // tslint:disable-next-line:no-shadowed-variable
      const chart = new CanvasJS.Chart('chartContainer8', {
        title: {
          text: 'Sales'
        },
        axisX: [{
          title: 'Forecast Date',
          lineColor: '#369EAD',
        }, {
          title: 'Order Date',
          lineColor: '#C24642',
        }],
        data: [{
          type: 'line',
          axisXIndex: 0,
          dataPoints: this.elements
        },
          {
            type: 'line',
            axisXIndex: 1,
            dataPoints: this.elements1
          }, ]
      });
      chart.render();
    });

this.ApiPie2Service.getData().subscribe((data:any) => {
  console.log(data.response);
  let dataRes1 = [];
  data.forEach(element1 => {
    var obj = {
      y: element1.forecast,
      label : element1.Date,
    }
    dataRes1.push(obj);
  });
  console.log("je suis la ",dataRes1);
  this.elements = dataRes1;
let  chart = new CanvasJS.Chart("chartContainer9", {
  title: {
    text: "Multiple X axis"
  },
  axisX: [{
    title: "Axis X 1 Title",
    lineColor: "#369EAD",
  }, {
    title: "Axis X 2 Title",
    lineColor: "#C24642",
  }],

  data: [{
    type: "line",
    axisXIndex: 0, //defaults to 0
    dataPoints: this.elements
  }, 
  {
    type: "line",
    axisXIndex: 1,
    dataPoints: this.elements1
  }, ]
});
chart.render()
})

this.ApiPie2Service.getData1().subscribe((data:any) => {
  console.log(data.response);
  let dataRes1 = [];
  data.forEach(element1 => {
    var obj = {
      y: element1.OrderQuantity,
      label : element1._id,
    }
    dataRes1.push(obj);
  });
  console.log("je suis la ",dataRes1);
  this.elements1 = dataRes1;
let  chart = new CanvasJS.Chart("chartContainer9", {
  title: {
    text: "OrderQuantity by Date"
  },
  axisX: [{
    title: "Forcast Date axiq",
    lineColor: "#369EAD",
  }, {
    title: "OrderQuanriry Axis",
    lineColor: "#C24642",
  }],

  data: [{
    type: "line",
    axisXIndex: 0, //defaults to 0
    dataPoints: this.elements
  }, 
  {
    type: "line",
    axisXIndex: 1,
    dataPoints: this.elements1
  }, ]
});
chart.render()
})


    this.ApiPie2Service.getData().subscribe((data:any) => {
      console.log(data.response);
      let dataRes1 = [];
      data.forEach(element1 => {
        var obj = {
          y: element1.forecast,
          label : element1.Date,
        }
        dataRes1.push(obj);
      });
      console.log("je suis la ",dataRes1);
      this.elements = dataRes1;
  
    let chart = new CanvasJS.Chart("chartContainer8", {
      animationEnabled: true,
      
      title:{
        text:"Forecast By Date "
      },
      axisX:{
        interval: 1
      },
      axisY2:{
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)",
        title: "Number of Companies"
      },
      data: [{
        type: "bar",
        name: "Date",
        axisYType: "secondary",
        color: "#014D65",
        dataPoints:  this.elements
      }]
    });


    chart.render()
  })
       this.ApiPie2Service.getData().subscribe((data:any) => {
          console.log(data.response);
          let dataRes1 = [];
          data.forEach(element1 => {
            var obj = {
              y: element1.forecast,
              label : element1.Date,
            }
            dataRes1.push(obj);
          });
          console.log("je suis la ",dataRes1);
          this.elements = dataRes1;
      
        let chart = new CanvasJS.Chart("chartContainer8", {
          animationEnabled: true,
          
          title:{
            text:"Forecast By Date "
          },
          axisX:{
            interval: 1
          },
          axisY2:{
            interlacedColor: "rgba(1,77,101,.2)",
            gridColor: "rgba(1,77,101,.1)",
            title: "Number of Companies"
          },
          data: [{
            type: "bar",
            name: "Date",
            axisYType: "secondary",
            color: "#014D65",
            dataPoints:  this.elements
          }]
        });
    
    
        chart.render()


      })
      
    this.ApiPie2Service.getData().subscribe((data:any) => {
      console.log(data.response);
      let dataRes1 = [];
      data.forEach(element1 => {
        var obj = {
          y: element1.forecast,
          label : element1.Date,
        }
        dataRes1.push(obj);
      });
      console.log("je suis la ",dataRes1);
      this.elements = dataRes1;
  
      let chart = new CanvasJS.Chart("chartContainer5", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: " Result of prediction: forecast by date"
        },
        data: [{
          type: "column",
          dataPoints:  this.elements
       
      
        }]
      });
            chart.render();
        })
        this.ApiPie2Service.getData().subscribe((data:any) => {
          console.log(data.response);
          let dataRes1 = [];
          data.forEach(element1 => {
            var obj = {
              y: element1.forecast,
              label : element1.Date,
            }
            dataRes1.push(obj);
          });
          console.log(dataRes1);
          this.elements = dataRes1;
          let dataPoints = [];
        let y = 0;		
        for ( var i = 0; i < 10000; i++ ) {		  
          y += Math.round(5 + Math.random() * (-5 - 5));	
          dataPoints.push({ y: y});
        }
        let chart = new CanvasJS.Chart("chartContainer6", {
          zoomEnabled: true,
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: "SalesAmount by DueDate"
          },
          subtitles:[{
            text: "SalesAmount by DueDate"
          }],
          data: [
          {
            type: "line",                
            dataPoints: this.elements
          }]
        });
          
        chart.render(); //apii
        })


        this.ApiTestService.getData().subscribe((data:any) => {
          console.log(data.response);
          let dataRes1 = [];
          data.forEach(element1 => {
            var obj = {
              y: element1.OrderQuantity,
              label : element1._id,
            }
            dataRes1.push(obj);
          });
          console.log(dataRes1);
          this.elements = dataRes1;
          let dataPoints = [];
        let y = 0;		
        for ( var i = 0; i < 10000; i++ ) {		  
          y += Math.round(5 + Math.random() * (-5 - 5));	
          dataPoints.push({ y: y});
        }
        let chart = new CanvasJS.Chart("chartContainer2", {
          zoomEnabled: true,
          animationEnabled: true,
          exportEnabled: true,
          title: {
            text: "OrderQuantity by "
          },
          subtitles:[{
            text: "OrderQuantity by"
          }],
          data: [
          {
            type: "line",                
            dataPoints: this.elements
          }]
        });
          
        chart.render(); //apii
        })
       
/*
 this.ApiHighService.getData().subscribe((data:any) => {
      console.log(data.response);
      let dataRes1 = [];
      data.forEach(element1 => {
        var obj = {
          y: element1.SalesAmount,
          label : element1._id,
        }
        dataRes1.push(obj);
      });
      console.log(dataRes1);
      this.elements = dataRes1;
      let dataPoints = [];
    let y = 0;		
    for ( var i = 0; i < 10000; i++ ) {		  
      y += Math.round(5 + Math.random() * (-5 - 5));	
      dataPoints.push({ y: y});
    }
    let chart = new CanvasJS.Chart("chartContainer6", {
      zoomEnabled: true,
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "SalesAmount by DueDate"
      },
      subtitles:[{
        text: "SalesAmount by DueDate"
      }],
      data: [
      {
        type: "line",                
        dataPoints: this.elements
      }]
    });
      
    chart.render(); //apii
    })
   */
    this.ApiService.getData().subscribe((data:any) => {
    
      console.log(data.response);
        let dataRes1 = [];
        data.forEach(element1 => {
          var obj = {
            y: element1.Freight,
            label : element1._id,
          }
          dataRes1.push(obj);
        });
        console.log(dataRes1);
        this.elements = dataRes1;
  
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Freight by OrderDate "
      },
      data: [{
        type: "column",
        dataPoints:  this.elements
     
    
      }]
    });
          chart.render();
      })

    this.ApiPieService.getData().subscribe((data:any) => {
        console.log(data.response);
        let dataRes1 = [];
        data.forEach(element1 => {
          var obj = {
            y: element1.UnitPrice,
            //UnitPrice
            label : element1._id,
          }
          dataRes1.push(obj);
        });
        console.log(dataRes1);
        this.elements = dataRes1;
    
            let chart = new CanvasJS.Chart("chartContainer1", {
              theme: "light2",
              animationEnabled: true,
              exportEnabled: true,
              title:{
                text: "ProductKey by unitPrice "
              },
              data: [{
                type: "pie",
                showInLegend: false,
                toolTipContent: "<b>{elements.UnitPrice}</b>: {y} ({elements._id})",
                indexLabel: " #percent%",
                dataPoints: this.elements,
              }]
            });
            chart.render();
          } 
        )

    }
}
