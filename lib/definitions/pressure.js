var metric, imperial;

metric = {
  Pa: {
    name: {
      singular: 'pascal',
      plural: 'pascals'
    },
    to_anchor: 1 / 1000
  },
  kPa: {
    name: {
      singular: 'kilopascal',
      plural: 'kilopascals'
    },
    to_anchor: 1
  },
  MPa: {
    name: {
      singular: 'megapascal',
      plural: 'megapascals'
    },
    to_anchor: 1000
  },
  hPa: {
    name: {
      singular: 'hectopascal',
      plural: 'hectopascals'
    },
    to_anchor: 1 / 10
  },
  bar: {
    name: {
      singular: 'bar',
      plural: 'bar'
    },
    to_anchor: 100
  },
  torr: {
    name: {
      singular: 'torr',
      plural: 'torr'
    },
    to_anchor: 101325 / 760000
  },
  millitorr: {
    name: {
      singular: 'Milli torr',
      plural: 'Milli torr'
    },
    to_anchor: (101325 / 760000) / 1000
  },
  'kgf/cm2': {
    name: {
      singular: 'Kilogram-force per square centimeter',
      plural: 'Kilogram-force per square centimeters'
    },
    to_anchor: 98.0665
  },
  'lb/in2': {
    name: {
      singular: 'Pound per square inch',
      plural: 'Pounds per square inch'
    },
    to_anchor: 6.89476
  },
  'oz/in2': {
    name: {
      singular: 'Ounce per square inch',
      plural: 'Ounces per square inch'
    },
    to_anchor: 0.43092233
  },
  atm: {
    name: {
      singular: 'British Atmosphere',
      plural: 'British Atmosphere'
    },
    to_anchor: 101.32501
  },
  inHg: {
    name: {
      singular: 'Inch of Mercury (0 Degree C)',
      plural: 'Inches of Mercury (0 Degree C)'
    },
    to_anchor: 3.3863886666667
  },
  ftH20: {
    name: {
      singular: 'Foot of head',
      plural: 'Feet of head'
    },
    to_anchor: 2.98898
  },
};

imperial = {
  psi: {
    name: {
      singular: 'pound per square inch',
      plural: 'pounds per square inch'
    },
    to_anchor: 1 / 1000
  },
  ksi: {
    name: {
      singular: 'kilopound per square inch',
      plural: 'kilopound per square inch'
    },
    to_anchor: 1
  }
};

module.exports = {
  metric: metric,
  imperial: imperial,
  _anchors: {
    metric: {
      unit: 'kPa',
      ratio: 0.00014503768078
    },
    imperial: {
      unit: 'psi',
      ratio: 1 / 0.00014503768078
    }
  }
};