var energy;

energy = {
  Wh: {
    name: {
      singular: 'Watt-hour',
      plural: 'Watt-hours'
    },
    to_anchor: 3600
  },
  mWh: {
    name: {
      singular: 'Milliwatt-hour',
      plural: 'Milliwatt-hours'
    },
    to_anchor: 3.6
  },
  kWh: {
    name: {
      singular: 'Kilowatt-hour',
      plural: 'Kilowatt-hours'
    },
    to_anchor: 3600000
  },
  MWh: {
    name: {
      singular: 'Megawatt-hour',
      plural: 'Megawatt-hours'
    },
    to_anchor: 3600000000
  },
  GWh: {
    name: {
      singular: 'Gigawatt-hour',
      plural: 'Gigawatt-hours'
    },
    to_anchor: 3600000000000
  },
  J: {
    name: {
      singular: 'Joule',
      plural: 'Joules'
    },
    to_anchor: 1
  },
  kJ: {
    name: {
      singular: 'Kilojoule',
      plural: 'Kilojoules'
    },
    to_anchor: 1000
  },
  BTU: {
    name: {
      singular: 'British Thermal Unit (ISO)',
      plural: 'British Thermal Units (ISO)'
    },
    to_anchor: 1055.06
  },
  'kCal/h': {
    name: {
      singular: 'Kilocalorie per hour',
      plural: 'Kilocalories per hour',
    },
    to_anchor: 4186.80,
  },
  'Hp (Est.)': {
    name: {
      singular: 'Horsepower (Estimated)',
      plural: 'Horsepower (Estimated)',
    },
    to_anchor: 1285714.285714,
  },
  'RT': {
    name: {
      singular: 'Refrigerant Tonne',
      plural: 'Refrigerant Tonne',
    },
    to_anchor: 12660670.23144
  }
};

module.exports = {
  metric: energy,
  _anchors: {
    metric: {
      unit: 'J',
      ratio: 1
    }
  }
};