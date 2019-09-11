import { Component, OnInit } from '@angular/core';
// declare const $;
declare const JustGage;

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor() {
    this.initialLoadChartJS();
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
