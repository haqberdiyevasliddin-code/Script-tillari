function goByKey(key) {
    const page = document.getElementById('page-' + key);
    if (!page) {
      console.warn('Bunday sahifa topilmadi:', 'page-' + key);
      return;
    }

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    page.classList.add('active');

    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const navItem = document.querySelector('.nav-item[onclick*="' + key + '"]');
    if (navItem) navItem.classList.add('active');

    document.querySelector('.main').scrollTo({ top: 0, behavior: 'smooth' });
  }

  function go(el, key) {
    goByKey(key);
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    if (el) el.classList.add('active');
  }

  // URL orqali ochish: index.html#lecture, index.html#sillabus va hokazo
  window.addEventListener('load', () => {
    const hash = location.hash.replace('#', '').trim();
    if (hash && document.getElementById('page-' + hash)) {
      goByKey(hash);
    }
  });

