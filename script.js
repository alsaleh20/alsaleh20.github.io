async function fetchProjects() {
  const username = 'alsaleh20';
  const container = document.getElementById('projects-container');
  if (!container) return;

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (!response.ok) {
      throw new Error(`خطأ في الاستجابة: ${response.status}`);
    }
    const repos = await response.json();
    container.innerHTML = '';
    
    // تصفية المشاريع غير المنسوخة واستثناء ريبو الموقع الشخصي
    const hiddenRepos = ['alsaleh20.github.io'];
    const filteredRepos = repos.filter(repo => !repo.fork && !hiddenRepos.includes(repo.name.toLowerCase()));

    if (filteredRepos.length === 0) {
      container.innerHTML = '<p class="no-projects">لا توجد مشاريع عامة حالياً.</p>';
      return;
    }
    
    filteredRepos.forEach(repo => {
      const card = document.createElement('div');
      card.className = 'project-card';
      
      const safeTitle = escapeHTML(repo.name);
      const safeDesc = escapeHTML(repo.description || 'لا يوجد وصف متوفر لهذا المشروع حالياً.');
      const safeLang = repo.language ? escapeHTML(repo.language) : null;
      
      card.innerHTML = `
        <h3 class="project-title">
          <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${safeTitle}</a>
        </h3>
        <p class="project-desc">${safeDesc}</p>
        <div class="project-meta">
          ${safeLang ? `<span class="project-lang"><span class="lang-dot" style="background-color: ${getLanguageColor(repo.language)}"></span>${safeLang}</span>` : ''}
          <span class="project-stars">⭐ ${repo.stargazers_count}</span>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    console.error('Fetch error:', error);
    container.innerHTML = '<p class="error-msg">فشل في تحميل المشاريع من GitHub. يرجى التحقق من اتصالك بالإنترنت.</p>';
  }
}

function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getLanguageColor(lang) {
  const colors = {
    JavaScript: '#f1e05a',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Python: '#3572A5',
    TypeScript: '#3178c6',
    PHP: '#4F5D95',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    Java: '#b07219',
    Go: '#00ADD8',
    Rust: '#dea584'
  };
  return colors[lang] || '#8b949e';
}

document.addEventListener('DOMContentLoaded', fetchProjects);
