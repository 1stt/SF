import { Component, OnInit } from '@angular/core';
// declare const $;
declare const JustGage;
import { NgxGaugeModule } from 'ngx-gauge';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})

export class StatusComponent implements OnInit {
  typeEC = "arch";
  valueEC = 194;
  labelEC = "EC";
  minEC = "0";
  maxEC = "2000";
  appendTextEC = "us/cm";

  typePH = "arch";
  valuePH = 0.2;
  labelPH = "PH";
  minPH = "0";
  maxPH = "14";

  typeWaterLv = "arch";
  valueWaterLv = 71.8;
  labelWaterLv = "WATER LEVEL";
  minWaterLv = "0";
  maxWaterLv = "100";
  appendTextWaterLv = "°C";

  typeTemp = "arch";
  valueTemp = 46.1;
  labelTemp = "TEMPERATURE";
  minTemp = "0";
  maxTemp = "100";
  appendTextTemp = "%";


  thresholdConfigEC = {
    '0': {color: 'green'},
    '500': {color: 'yellow'},
    '1000': {color: 'orange'},
    '1500': {color: 'red'}
};

thresholdConfigPH = {
  '0': {color: 'red'},
  '7': {color: 'blue'},
  '8': {color: 'green'},
};

thresholdConfigWater = {
  '0': {color: 'red'},
  '33': {color: 'blue'},
  '66': {color: 'green'},
};

thresholdConfigTemp = {
  '0': {color: 'blue'},
  '25': {color: 'green'},
  '50': {color: 'yellow'},
  '75': {color: 'red'},
};

  constructor(private ngx:NgxGaugeModule) {
    this.initialLoadChartJS();
    this. ngx;
   }

  ngOnInit() {
  }
  private initialLoadChartJS(){
    var g4 = new JustGage({
      id: 'g4',
      value: 70,
      min: 0,
      max: 100,
      symbol: ' ํc',
      pointerOptions: {
        toplength: 8,
        bottomlength: -20,
        bottomwidth: 6,
        color: '#8e8e93'
      },
      gaugeWidthScale: 0.1,
      counter: true,
      relativeGaugeSize: true
    });

    var g5 = new JustGage({
      id: 'g5',
      value: 70,
      min: 0,
      max: 100,
      symbol: ' %',
      pointerOptions: {
        toplength: 8,
        bottomlength: -20,
        bottomwidth: 6,
        color: '#8e8e93'
      },
      gaugeWidthScale: 0.1,
      counter: true,
      relativeGaugeSize: true
    });
    var g6 = new JustGage({
      id: 'g6',
      value: 698,
      min: 0,
      max: 2000,
      symbol: ' us/cm',
      pointerOptions: {
        toplength: 8,
        bottomlength: -20,
        bottomwidth: 6,
        color: '#8e8e93',
        stroke: '#ffffff',
      },
      gaugeWidthScale: 0.1,
      counter: true,
      relativeGaugeSize: true
    });
    var g7 = new JustGage({
      id: 'g7',
      value: 6.8,
      min: 0,
      max: 14,
      pointerOptions: {
        toplength: 8,
        bottomlength: -20,
        bottomwidth: 6,
        color: '#8e8e93',
        stroke: '#ffffff',
      },
      gaugeWidthScale: 0.1,
      counter: true,
      relativeGaugeSize: true
    });
  }

}
