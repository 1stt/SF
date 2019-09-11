

      var g1 = new JustGage({
        id: 'g1',
        value: 194,
        min: 0,
        max: 2000,
        symbol: ' us/cm',
        pointer: true,
        gaugeWidthScale: 0.6,
        counter: true,
        relativeGaugeSize: true
      });

      var g2 = new JustGage({
        id: 'g2',
        value: 25,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        pointerOptions: {
          toplength: -15,
          bottomlength: 10,
          bottomwidth: 12,
          color: '#8e8e93',
          stroke: '#ffffff',
          stroke_width: 3,
          stroke_linecap: 'round'
        },
        gaugeWidthScale: 0.6,
        counter: true,
        relativeGaugeSize: true
      });

      var g3 = new JustGage({
        id: 'g3',
        value: 40,
        min: 0,
        max: 100,
        symbol: 'kWh',
        pointer: true,
        gaugeWidthScale: 0.4,
        pointerOptions: {
          toplength: 10,
          bottomlength: 10,
          bottomwidth: 8,
          color: '#000'
        },
        counter: true,
        relativeGaugeSize: true
      });

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