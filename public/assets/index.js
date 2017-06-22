'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  switch (status.screen){

    case 4: wrapper.append(Screen4( _=>render(root) )); break;

  }
  root.html(wrapper);
};

const status = {
  screen: 4,
  user: null,
  cardUser: null
};

$(_ => {
  const root = $('.root');
  render(root);
});
