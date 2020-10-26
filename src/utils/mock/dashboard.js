import {
  data,
  dataBubble,
  dataMixed,
  gridOptions,
  height,
  options,
  sharedOptions,
  stackedGridOptions
} from './chart';

export default [
  {
    type: 'bar',
    title: 'Revenue',
    subtitle: '+458,90',
    data: data,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions,
      ...stackedGridOptions
    }
  },
  {
    type: 'bar',
    title: 'Yearly Sales',
    subtitle: '-46,68',
    data: dataMixed,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions,
      ...options
    }
  },
  {
    type: 'bubble',
    title: 'Sales Report',
    subtitle: '+2,50%',
    data: dataBubble,
    height: height,
    options: {
      ...sharedOptions
    }
  }
];
