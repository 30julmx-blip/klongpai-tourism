// ============ PAGE NAVIGATION ============
function navigateTo(pageId, index) {
    // Remove active class from all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add active class to selected page
    document.getElementById(pageId).classList.add('active');
    document.querySelectorAll('.nav-item')[index].classList.add('active');

    // Load page-specific content
    loadPageContent(pageId);

    // Scroll to top
    window.scrollTo(0, 0);
}

function loadPageContent(pageId) {
    switch(pageId) {
        case 'page-home':
            initializeHomePage();
            break;
        case 'page-products':
            loadProducts('all');
            break;
        case 'page-restaurants':
            loadRestaurants('all');
            break;
        case 'page-accommodations':
            loadAccommodations('all');
            break;
        case 'page-transport':
            loadTransport('all');
            break;
        case 'page-packages':
            loadPackages();
            break;
    }
}

// ============ HOME PAGE ============
function initializeHomePage() {
    // Nothing to load, already rendered
}

function showVillageDetail(village) {
    alert(`เลือกหมู่บ้านที่ ${village}\n\nกำลังโหลดแผนที่เส้นทางและสถานที่ท่องเที่ยว...`);
}

// ============ PRODUCTS ============
function loadProducts(filter) {
    const container = document.getElementById('products-grid');
    container.innerHTML = '';

    let filtered = filter === 'all' 
        ? productsData 
        : productsData.filter(p => p.category === filter);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price} บาท</div>
                <div class="product-rating">⭐ ${product.rating} (${product.reviews})</div>
                <button class="product-btn" onclick="showProductDetail(${product.id})">
                    ดูรายละเอียด
                </button>
            </div>
        `;
        container.appendChild(card);
    });

    // Attach filter event listeners
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
        btn.addEventListener('click', () => loadProducts(btn.dataset.filter));
    });
}

function showProductDetail(id) {
    const product = productsData.find(p => p.id === id);
    const modal = document.getElementById('product-modal');
    const body = document.getElementById('modal-body');

    body.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 80px; margin-bottom: 20px;">${product.emoji}</div>
            <h2 style="color: #2D6A4F; margin-bottom: 10px;">${product.name}</h2>
            <div style="font-size: 20px; color: #E8915F; font-weight: bold; margin-bottom: 20px;">
                ${product.price} บาท
            </div>
            <div style="color: #E8915F; margin-bottom: 20px;">
                ⭐ ${product.rating} (${product.reviews} รีวิว)
            </div>
            
            <div style="background: #f9f9f7; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: left;">
                <p><strong>📝 รายละเอียด:</strong> ${product.details}</p>
                <p><strong>👤 ผู้ผลิต:</strong> ${product.producer}</p>
                <p><strong>📍 ที่อยู่:</strong> ${product.location}</p>
                <p><strong>📞 ติดต่อ:</strong> ${product.contact}</p>
            </div>
            
            <div style="display: flex; gap: 10px;">
                <button class="action-btn call-btn" style="flex: 1;" onclick="callContact('${product.contact}')">
                    📞 โทรติดต่อ
                </button>
                <button class="action-btn map-btn" style="flex: 1;" onclick="alert('เปิดแผนที่ไปยัง ${product.location}')">
                    📍 ดูตำแหน่ง
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

// ============ RESTAURANTS ============
function loadRestaurants(filter) {
    const container = document.getElementById('restaurants-list');
    container.innerHTML = '';

    let filtered = filter === 'all' 
        ? restaurantsData 
        : restaurantsData.filter(r => r.category === filter);

    filtered.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.innerHTML = `
            <div class="restaurant-icon">${restaurant.emoji}</div>
            <div class="restaurant-info">
                <div class="restaurant-name">${restaurant.name}</div>
                <div class="restaurant-rating">⭐ ${restaurant.rating} (${restaurant.reviews} รีวิว)</div>
                <div class="restaurant-detail">
                    <span>📍 ${restaurant.location}</span>
                    <span>⏰ ${restaurant.hours}</span>
                    <span>💰 ${restaurant.priceRange}</span>
                </div>
                <div class="restaurant-actions">
                    <button class="action-btn map-btn" onclick="alert('เปิดแผนที่ไปยัง ${restaurant.location}')">
                        📍 GPS
                    </button>
                    <button class="action-btn call-btn" onclick="callContact('${restaurant.contact}')">
                        📞 โทร
                    </button>
                    <button class="action-btn map-btn" onclick="showRestaurantDetail(${restaurant.id})">
                        💬 รีวิว
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    // Attach filter event listeners
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
        btn.addEventListener('click', () => loadRestaurants(btn.dataset.filter));
    });
}

function showRestaurantDetail(id) {
    const restaurant = restaurantsData.find(r => r.id === id);
    const modal = document.getElementById('restaurant-modal');
    const body = document.getElementById('modal-body-restaurant');

    body.innerHTML = `
        <div>
            <div style="text-align: center; margin-bottom: 20px;">
                <div style="font-size: 60px; margin-bottom: 10px;">${restaurant.emoji}</div>
                <h2 style="color: #2D6A4F;">${restaurant.name}</h2>
            </div>
            
            <div style="background: #fff3e0; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <div style="color: #ff9800; font-weight: bold; margin-bottom: 10px;">⭐ ${restaurant.rating}/5.0</div>
                <p style="color: #666; margin-bottom: 10px;">"ร้านนี้ดีมากค่ะ อร่อย สะอาด เจ้าของใจดี"</p>
                <p style="color: #999; font-size: 12px;">- ${restaurant.reviews} รีวิว</p>
            </div>
            
            <div style="background: #f9f9f7; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <p><strong>📍 สถานที่:</strong> ${restaurant.location}</p>
                <p><strong>⏰ เวลา:</strong> ${restaurant.hours}</p>
                <p><strong>💰 ราคา:</strong> ${restaurant.priceRange}</p>
                <p><strong>📞 ติดต่อ:</strong> ${restaurant.contact}</p>
                <p><strong>📝 รายละเอียด:</strong> ${restaurant.description}</p>
            </div>
            
            <div style="background: #e8f5e9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <p><strong>🍜 เมนูแนะนำ:</strong></p>
                <ul style="margin-left: 20px; margin-top: 10px;">
                    ${restaurant.menu.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <div style="display: flex; gap: 10px;">
                <button class="btn-primary" style="flex: 1;" onclick="callContact('${restaurant.contact}')">
                    📞 โทรติดต่อ
                </button>
                <button class="btn-primary" style="flex: 1;" onclick="alert('เปิด Google Maps')">
                    📍 ดูแผนที่
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

// ============ ACCOMMODATIONS ============
function loadAccommodations(filter) {
    const container = document.getElementById('accommodations-list');
    container.innerHTML = '';

    let filtered = filter === 'all' 
        ? accommodationsData 
        : accommodationsData.filter(a => a.type === filter);

    filtered.forEach(accommodation => {
        const card = document.createElement('div');
        card.className = 'accommodation-card';
        card.innerHTML = `
            <div class="accommodation-image">${accommodation.emoji}</div>
            <div class="accommodation-content">
                <div class="accommodation-name">${accommodation.name}</div>
                <div class="accommodation-rating">⭐ ${accommodation.rating} (${accommodation.reviews})</div>
                <div class="accommodation-price">${accommodation.price} บาท/คืน</div>
                <div class="accommodation-amenities">
                    ${accommodation.amenities.map(a => `<span class="amenity-badge">${a}</span>`).join('')}
                </div>
                <div class="accommodation-details">
                    <p><strong>📍</strong> ${accommodation.location}</p>
                    <p><strong>⏰</strong> Check-in: ${accommodation.checkIn} | Check-out: ${accommodation.checkOut}</p>
                    <p><strong>📞</strong> ${accommodation.contact}</p>
                </div>
                <button class="product-btn" onclick="showAccommodationDetail(${accommodation.id})" style="margin-top: 10px;">
                    ดูรายละเอียด
                </button>
            </div>
        `;
        container.appendChild(card);
    });

    // Attach filter event listeners
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
        btn.addEventListener('click', () => loadAccommodations(btn.dataset.filter));
    });
}

function showAccommodationDetail(id) {
    const accommodation = accommodationsData.find(a => a.id === id);
    alert(`${accommodation.name}\n\n${accommodation.description}\n\nติดต่อ: ${accommodation.contact}`);
}

// ============ TRANSPORT ============
function loadTransport(filter) {
    const container = document.getElementById('transport-list');
    container.innerHTML = '';

    let filtered = filter === 'all' 
        ? transportData 
        : transportData.filter(t => t.type === filter);

    filtered.forEach(transport => {
        const card = document.createElement('div');
        card.className = 'transport-card';

        let scheduleHTML = '';
        if (transport.type === 'songthaew' || transport.type === 'train') {
            scheduleHTML = `
                <table class="schedule-table">
                    <thead>
                        <tr>
                            <th>เที่ยว</th>
                            <th>เวลา</th>
                            ${transport.type === 'train' ? '<th>ปลายทาง</th>' : ''}
                        </tr>
                    </thead>
                    <tbody>
                        ${transport.schedule.map(s => `
                            <tr>
                                <td>${s.trip || s.station}</td>
                                <td>${s.time}</td>
                                ${transport.type === 'train' ? `<td>${s.destination}</td>` : ''}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        } else {
            scheduleHTML = `
                <div style="margin-bottom: 16px;">
                    ${transport.schedule.map(s => `
                        <p><strong>${s.station}:</strong> ${s.location}</p>
                    `).join('')}
                </div>
            `;
        }

        card.innerHTML = `
            <div class="transport-header">
                <div class="transport-icon">${transport.emoji}</div>
                <div class="transport-name">${transport.name}</div>
            </div>
            ${scheduleHTML}
            <div class="transport-info">
                <p><strong>📍 สถานที่:</strong> ${transport.location}</p>
                <p><strong>💰 ราคา:</strong> ${transport.price} บาท</p>
                <p><strong>⏱️ เวลา:</strong> ${transport.duration}</p>
                <p><strong>📞 ติดต่อ:</strong> ${transport.contact}</p>
            </div>
        `;
        container.appendChild(card);
    });

    // Attach filter event listeners
    document.querySelectorAll('[data-filter]').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
        btn.addEventListener('click', () => loadTransport(btn.dataset.filter));
    });
}

// ============ PACKAGES ============
function loadPackages() {
    const container = document.getElementById('packages-list');
    container.innerHTML = '';

    packagesData.forEach(package => {
        const card = document.createElement('div');
        card.className = 'package-card';
        card.innerHTML = `
            <div class="package-header">
                <div class="package-title">${package.emoji} ${package.name}</div>
                <div class="package-price">${package.price} ${package.perPerson}</div>
                <small>${package.minGroup} | ${package.duration}</small>
            </div>
            <div class="package-content">
                <div style="color: #E8915F; font-weight: 600; margin-bottom: 12px;">
                    ⭐ ${package.rating} (${package.reviews} รีวิว)
                </div>
                
                <h4 style="color: #2D6A4F; margin-bottom: 12px;">📋 ตารางการท่องเที่ยว</h4>
                <ul class="package-itinerary">
                    ${package.itinerary.map(item => `
                        <li class="itinerary-item">
                            <span class="itinerary-time">${item.time}</span>
                            <span class="itinerary-activity">${item.activity}</span>
                        </li>
                    `).join('')}
                </ul>
                
                <h4 style="color: #2D6A4F; margin-bottom: 8px;">📦 รวมในแพ็คเกจ</h4>
                <ul style="margin-left: 20px; margin-bottom: 16px; font-size: 14px; color: #666;">
                    ${package.includes.map(item => `<li>${item}</li>`).join('')}
                </ul>
                
                <div class="package-footer">
                    <button class="package-btn" onclick="alert('ติดต่อขอจองแพ็คเกจ\\n\\n📞 ${package.contact}')">
                        🔖 จองเลย
                    </button>
                    <button class="package-btn" onclick="callContact('${package.contact}')">
                        📞 ติดต่อ
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// ============ CALENDAR/EVENTS ============
function prevMonth() {
    // Previous month logic
    alert('ไปยังเดือนที่แล้ว');
}

function nextMonth() {
    // Next month logic
    alert('ไปยังเดือนถัดไป');
}

// Initialize calendar on load
function initializeCalendar() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    generateCalendarDays(year, month);
}

function generateCalendarDays(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const calendarBody = document.getElementById('calendar-body');
    calendarBody.innerHTML = '';

    // Previous month's days
    const previousMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
        const day = previousMonthLastDay - i;
        const dayEl = createDayElement(day, true);
        calendarBody.appendChild(dayEl);
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
        const dayEl = createDayElement(day, false, year, month, day);
        calendarBody.appendChild(dayEl);
    }

    // Next month's days
    const totalCells = calendarBody.children.length;
    const remainingCells = 42 - totalCells;
    for (let day = 1; day <= remainingCells; day++) {
        const dayEl = createDayElement(day, true);
        calendarBody.appendChild(dayEl);
    }
}

function createDayElement(day, isOtherMonth, year, month, dayOfMonth) {
    const dayEl = document.createElement('button');
    dayEl.className = 'calendar-day';
    dayEl.textContent = day;

    if (isOtherMonth) {
        dayEl.classList.add('other-month');
    } else {
        // Check if this day has events
        const monthNum = month + 1;
        if (eventsData[monthNum] && eventsData[monthNum].find(e => e.date === dayOfMonth)) {
            dayEl.classList.add('has-event');
        }

        dayEl.addEventListener('click', () => {
            document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('active'));
            dayEl.classList.add('active');
            showEventDetails(monthNum, dayOfMonth);
        });
    }

    return dayEl;
}

function showEventDetails(month, day) {
    const eventDetails = document.getElementById('event-details');
    const monthEvents = eventsData[month];
    const dayEvent = monthEvents ? monthEvents.find(e => e.date === day) : null;

    if (dayEvent) {
        eventDetails.innerHTML = `
            <div class="event-card">
                <div class="event-emoji">${dayEvent.emoji}</div>
                <h3 style="color: #2D6A4F; margin-bottom: 12px;">${dayEvent.title}</h3>
                <div style="color: #666; line-height: 1.8;">
                    <p><strong>📝 รายละเอียด:</strong> ${dayEvent.description}</p>
                    <p><strong>📍 สถานที่:</strong> ${dayEvent.location}</p>
                    <p><strong>📞 ติดต่อ:</strong> ${dayEvent.contact}</p>
                </div>
                <button class="btn-primary" style="margin-top: 16px;" onclick="callContact('${dayEvent.contact}')">
                    📞 โทรติดต่อ
                </button>
            </div>
        `;
    } else {
        eventDetails.innerHTML = `
            <div class="event-card">
                <div class="event-emoji">✨</div>
                <h3>ไม่มีกิจกรรมในวันนี้</h3>
                <p>เลือกวันอื่นเพื่อดูกิจกรรม</p>
            </div>
        `;
    }
}

// ============ UTILITIES ============
function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function callContact(phone) {
    window.location.href = `tel:${phone}`;
}

function openRegistration() {
    alert('ฟอร์มสมัครพาร์ทเนอร์\n\nกรุณากรอกข้อมูล:\n- ชื่อ-นามสกุล\n- ประเภทธุรกิจ\n- เบอร์ติดต่อ\n\nส่งมาที่: info@klongpai.go.th');
}

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', function() {
    // Load first page
    loadPageContent('page-home');
    
    // Initialize calendar
    initializeCalendar();

    // Setup click outside modal to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
});
