// ============ SMOOTH TRANSITIONS ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ============ HOVER EFFECTS ============
document.querySelectorAll('.product-card, .restaurant-card, .accommodation-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    });
});

// ============ FILTER ANIMATION ============
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});

// ============ SCROLL TO TOP ============
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 120px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #2D6A4F;
    color: white;
    border: none;
    cursor: pointer;
    display: none;
    z-index: 500;
    font-size: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
        scrollToTopBtn.style.alignItems = 'center';
        scrollToTopBtn.style.justifyContent = 'center';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============ KEYBOARD NAVIGATION ============
document.addEventListener('keydown', (e) => {
    const navItems = document.querySelectorAll('.nav-item');
    
    if (e.key === 'ArrowRight') {
        const currentIndex = Array.from(navItems).findIndex(item => item.classList.contains('active'));
        if (currentIndex < navItems.length - 1) {
            navItems[currentIndex + 1].click();
        }
    }
    
    if (e.key === 'ArrowLeft') {
        const currentIndex = Array.from(navItems).findIndex(item => item.classList.contains('active'));
        if (currentIndex > 0) {
            navItems[currentIndex - 1].click();
        }
    }
});

// ============ LOADING STATE ============
function showLoading() {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        z-index: 2000;
    `;
    loader.innerHTML = '<div style="font-size: 40px; animation: pulse 1s infinite;">⏳</div>';
    document.body.appendChild(loader);
    
    setTimeout(() => loader.remove(), 800);
}

// ============ TOAST NOTIFICATIONS ============
function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 130px;
        left: 50%;
        transform: translateX(-50%);
        background: #2D6A4F;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1500;
        animation: slideUp 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), duration);
}

// ============ FAVORITES (LOCAL STORAGE) ============
function saveFavorite(id, type) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    if (!favorites[type]) {
        favorites[type] = [];
    }
    if (!favorites[type].includes(id)) {
        favorites[type].push(id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        showToast('❤️ เพิ่มลงรายการโปรด');
    }
}

function removeFavorite(id, type) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    if (favorites[type]) {
        favorites[type] = favorites[type].filter(fav => fav !== id);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        showToast('💔 ลบออกจากรายการโปรด');
    }
}

function isFavorite(id, type) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    return favorites[type] && favorites[type].includes(id);
}

// ============ SEARCH FUNCTIONALITY ============
document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.querySelector('.search-box');
    
    if (searchBox) {
        searchBox.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length > 0) {
                performSearch(query);
            }
        });
    }
});

function performSearch(query) {
    const allData = [
        ...productsData.map(p => ({ ...p, type: 'product' })),
        ...restaurantsData.map(r => ({ ...r, type: 'restaurant' })),
        ...accommodationsData.map(a => ({ ...a, type: 'accommodation' }))
    ];

    const results = allData.filter(item => 
        item.name.toLowerCase().includes(query) ||
        (item.description && item.description.toLowerCase().includes(query))
    );

    console.log(`พบ ${results.length} ผลลัพธ์สำหรับ "${query}":`, results);
}

// ============ SHARE FUNCTIONALITY ============
function shareItem(title, url) {
    if (navigator.share) {
        navigator.share({
            title: 'คลองไผ่ท่องเที่ยว',
            text: title,
            url: url
        }).catch(err => console.log('Error sharing:', err));
    } else {
        alert(`ชื่อ: ${title}\n\nแชร์ลิงก์: ${url}`);
    }
}

// ============ THEME TOGGLE ============
function toggleDarkMode() {
    const isDark = document.body.style.backgroundColor === 'rgb(30, 30, 30)';
    
    if (isDark) {
        document.body.style.backgroundColor = '#F9F9F7';
        document.body.style.color = '#1A1A1A';
    } else {
        document.body.style.backgroundColor = '#1e1e1e';
        document.body.style.color = '#f0f0f0';
    }
    
    localStorage.setItem('darkMode', !isDark);
}

// ============ GEOLOCATION ============
function getNearestLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            console.log(`ตำแหน่งของคุณ: ${latitude}, ${longitude}`);
            showToast('📍 ได้ตำแหน่งของคุณแล้ว');
        });
    }
}

// ============ RATE THIS APP ============
function rateApp() {
    const rating = prompt('ให้คะแนนแอปนี้ (1-5): ');
    if (rating) {
        showToast(`⭐ ขอบคุณที่ให้คะแนน ${rating} ดาว`);
    }
}

// ============ BUG REPORT ============
function reportBug() {
    const issue = prompt('กรุณาบรรยายปัญหาที่พบ:');
    if (issue) {
        console.log('Bug Report:', issue);
        alert('ขอบคุณที่รายงาน ทีมงานจะตรวจสอบในเร็ว ๆ นี้');
    }
}
