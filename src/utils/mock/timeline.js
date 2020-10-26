const date = Date.now();

export default [
  {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas faucibus mollis interdum.',
    date: date,
    color: 'primary'
  },
  {
    text:
      'Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
    date: new Date(date - 1000 * 60 * 60),
    color: 'success'
  },
  {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: new Date(date - 1000 * 60 * 60 * 24),
    color: 'info'
  },
  {
    text: '3 more people joined your campaign.',
    date: new Date(date - 1000 * 60 * 60 * 24 * 2),
    color: 'warning'
  },
  {
    text: 'Six new friend requests',
    date: new Date(date - 1000 * 60 * 60 * 24 * 31),
    color: 'danger'
  }
];
