const loadAbout = () => {
  const about = document.querySelector('[data-page="About"]');
  const details = document.createElement('div');
  details.classList.add('details');
  const p_s = [
    "Nibh, rhoncus non, euismod sit amet, pretium eu, enim. Nunc commodo ultricies dui. Cras gravida rutrum massa. Donec accumsan mattis turpis. Quisquesem. Quisque elementum sapien iaculis augue. In dui sem, congue sit amet, feugiat quis, lobortis at, eros.",
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum vehicula purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    "Aenean risus dui, volutpat non, posuere vitae, sollicitudin in, urna. Nam eget eros a enim pulvinar rhoncus. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculus mus. Nulla facilisis massa ut massa. Sednisi purus, malesuada eu, porta vulputate, suscipit auctor, nunc. Vestibulumconvallis, augue eu luctus malesuada, mi ante mattis odio, ac venenatis nequesem vitae nisi. Donec pellentesque purus a lorem. Etiam in massa. Nam ut metus.  In rhoncus venenatis tellus. Etiam aliquam. Ut aliquam lectus ut lectus. Namturpis lacus, tristique sit amet, convallis sollicitudin, commodo a, purus.  Nulla vitae eros a diam blandit mollis. Proin luctus feugiat eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis ultricies urna. Etiam enim urna, pharetra suscipit, varius et, congue quis, odio. Donec lobortis, elit bibendum euismod faucibus, velit nibh egestas libero, vitae pellentesque elit augue ut massa.",
    "Nulla consequat erat at massa. Vivamus id mi. Morbi purus enim, dapibus a, facilisis non, tincidunt at, enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis imperdiet eleifend arcu. Cras magna ligula, consequat at, tempor non, posuere nec, libero. Vestibulum vel ipsum. Praesent congue justo et nunc. Vestibulum nec felis vitae nisl pharetra sollicitudin. Quisque nec arcu vel tellus tristique vestibulum. Aenean vel lacus. Mauris dolor erat, commodo ut, dapibus vehicula, lobortis sit amet, orci. Aliquam augue. In semper nisi nec libero. Cras magna ipsum, scelerisque et, tempor eget."
  ];
  p_s.forEach(text => {
    const p = document.createElement('p');
    p.innerHTML = text;
    details.appendChild(p);
  });
  about.appendChild(details);
};

export default loadAbout;

