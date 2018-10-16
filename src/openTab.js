const openTab = tabName => {
  return (e) => {
    const tabContent = document.querySelectorAll('.tabcontent');
    tabContent.forEach(tab => {
      tab.style.display = "none";
    });

    const tablinks = document.querySelectorAll('.tabs__link');
    tablinks.forEach(link => {
      link.classList.remove('active');
    });

    const activeTab = document.querySelector(`[data-page="${tabName}"]`);
    activeTab.style.display = "block";
    e.currentTarget.classList.add('active');
  };
};

export default openTab;
