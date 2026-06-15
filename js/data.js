// ============ EVENTS DATA ============
const eventsData = {
    1: [ // January
        {
            date: 1,
            title: "งานไหว้พระจันทร์",
            emoji: "🎉",
            description: "ปล่อยโคมไฟ ประกวดดาบ อบรม",
            location: "วัดคลองไผ่ หมู่1",
            contact: "089-9999999"
        },
        {
            date: 15,
            title: "ตั้งอ่างเก็บน้ำ",
            emoji: "💧",
            description: "งานทำบุญเพื่อชุมชน",
            location: "บ้านคลองไผ่",
            contact: "089-8888888"
        }
    ],
    4: [ // April
        {
            date: 13,
            title: "สงกรานต์สีโขว่",
            emoji: "🎨",
            description: "ฉีดน้ำ ขบวนพยุหยาตรา ทำบุญ",
            location: "ทั่วทั้งเทศบาล",
            contact: "089-7777777"
        }
    ],
    7: [ // July
        {
            date: 15,
            title: "งานตักบาตร",
            emoji: "🙏",
            description: "สืบสานประเพณีเดือนเจ็ด",
            location: "วัดคลองไผ่",
            contact: "089-6666666"
        }
    ],
    10: [ // October
        {
            date: 15,
            title: "ลอยกระทง",
            emoji: "🎆",
            description: "เทศกาลท่องเที่ยวหลัก",
            location: "หนองลึก คลองไผ่",
            contact: "089-5555555"
        }
    ]
};

// ============ PRODUCTS DATA ============
const productsData = [
    {
        id: 1,
        name: "เสื้อปักผ้าไทย",
        category: "clothing",
        price: "250-500",
        emoji: "👕",
        producer: "คุณวีระ",
        contact: "089-1234567",
        rating: 4.5,
        reviews: 32,
        image: "👕",
        details: "เสื้อผ้าปักลายไทยด้วยมือ คุณภาพดี ใส่สบาย",
        location: "หมู่1"
    },
    {
        id: 2,
        name: "น้ำปลาเค็ม",
        category: "food",
        price: "150",
        emoji: "🍶",
        producer: "กลุ่มแม่บ้านคลองไผ่",
        contact: "089-9876543",
        rating: 5.0,
        reviews: 48,
        image: "🍶",
        details: "น้ำปลาเค็มคลองไผ่ ทำจากปลาสด ไม่มีรสเทียม",
        location: "หมู่2"
    },
    {
        id: 3,
        name: "จักสรรพ์ไหม",
        category: "handicraft",
        price: "350",
        emoji: "🎀",
        producer: "คุณสมหญิง",
        contact: "088-1111111",
        rating: 4.8,
        reviews: 25,
        image: "🎀",
        details: "เสื้อจักสรรพ์ไหมสุด สไตล์ไทยดั้งเดิม",
        location: "หมู่1"
    },
    {
        id: 4,
        name: "กระหรี่มันสำปะลัง",
        category: "food",
        price: "80",
        emoji: "🥔",
        producer: "คุณสมจิตร",
        contact: "087-2222222",
        rating: 4.6,
        reviews: 41,
        image: "🥔",
        details: "ทำจากมันสำปะลังที่ปลูกเอง ไม่ใช้ปรุงแต่ง",
        location: "หมู่2"
    },
    {
        id: 5,
        name: "กระเป๋าไหม",
        category: "handicraft",
        price: "400-600",
        emoji: "👜",
        producer: "กลุ่มหัตถศิลป์",
        contact: "089-3333333",
        rating: 4.7,
        reviews: 35,
        image: "👜",
        details: "กระเป๋าหัตถกรรมจากไหมไทยแท้",
        location: "หมู่4"
    }
];

// ============ RESTAURANTS DATA ============
const restaurantsData = [
    {
        id: 1,
        name: "ก๋วยเตี๋ยวเรือคลองไผ่",
        category: "noodles",
        emoji: "🍜",
        location: "หมู่1 ริมคลองไผ่",
        rating: 4.8,
        reviews: 42,
        hours: "06:00 - 14:00",
        contact: "089-1234567",
        description: "ก๋วยเตี๋ยวเรือที่ดีที่สุดในหัวเมือง",
        menu: ["ก๋วยเตี๋ยวราคา", "น้ำเงี้ยว", "ไข่ดาว"],
        priceRange: "40-60 บาท",
        lat: 13.8456,
        lng: 100.1234
    },
    {
        id: 2,
        name: "ข้าวคลุกแกล้ว",
        category: "rice",
        emoji: "🍲",
        location: "หมู่2 ตรงหลังตลาด",
        rating: 4.6,
        reviews: 38,
        hours: "07:00 - 15:00",
        contact: "087-5678901",
        description: "ข้าวคลุกแกล้วรสชาติพิเศษ",
        menu: ["ข้าวคลุกไส้เหลือง", "ข้าวคลุกเนื้อ", "ข้าวคลุกกุ้ง"],
        priceRange: "50-70 บาท",
        lat: 13.8490,
        lng: 100.1267
    },
    {
        id: 3,
        name: "ร้านขนมจีนยาย",
        category: "custom",
        emoji: "🍝",
        location: "หมู่3 ตรงศาลา",
        rating: 4.7,
        reviews: 55,
        hours: "08:00 - 16:00",
        contact: "086-9999999",
        description: "ขนมจีนสดใหม่ทุกวัน",
        menu: ["ขนมจีนน้ำยา", "ขนมจีนแห้ง", "ขนมจีนอีสาน"],
        priceRange: "30-50 บาท",
        lat: 13.8420,
        lng: 100.1300
    },
    {
        id: 4,
        name: "อาหารตามสั่งคุณกิ่ง",
        category: "custom",
        emoji: "🍛",
        location: "หมู่4 ห้องสมุด",
        rating: 4.5,
        reviews: 28,
        hours: "10:00 - 21:00",
        contact: "088-7777777",
        description: "อาหารไทยตามสั่ง รสชาติดั้งเดิม",
        menu: ["แกงส่วน", "ผัดไทย", "ลาบ", "สม้ำตำ"],
        priceRange: "60-120 บาท",
        lat: 13.8380,
        lng: 100.1150
    }
];

// ============ ACCOMMODATIONS DATA ============
const accommodationsData = [
    {
        id: 1,
        name: "ฟาร์มสเตย์คลองไผ่",
        type: "mountain",
        emoji: "🏡",
        location: "หมู่1 บนเขา",
        rating: 4.8,
        reviews: 15,
        price: "800-1500",
        checkIn: "14:00",
        checkOut: "12:00",
        contact: "084-5678901",
        description: "ที่พักริมสวนธรรมชาติ วิวสวยงาม",
        amenities: ["WiFi", "ปรุงอาหาร", "ชมวิว", "ว่างน้ำ"],
        images: ["🏡", "🌳", "🌅"]
    },
    {
        id: 2,
        name: "บ้านพักริมน้ำ",
        type: "riverside",
        emoji: "🏠",
        location: "หมู่2 ริมน้ำ",
        rating: 4.6,
        reviews: 22,
        price: "600-900",
        checkIn: "14:00",
        checkOut: "11:00",
        contact: "089-1111111",
        description: "พักชิวริมน้ำคลองไผ่",
        amenities: ["WiFi", "ห้องน้ำ", "ระเบียง", "ตกปลา"],
        images: ["🏠", "💧", "🌊"]
    },
    {
        id: 3,
        name: "เกสต์เฮาส์ในชุมชน",
        type: "community",
        emoji: "🏘️",
        location: "หมู่3 ใจกลางชุมชน",
        rating: 4.4,
        reviews: 18,
        price: "400-600",
        checkIn: "14:00",
        checkOut: "12:00",
        contact: "087-2222222",
        description: "สัมผัสชีวิตชุมชนไทยแท้",
        amenities: ["WiFi", "ห้องครัว", "สวน", "สูง"],
        images: ["🏘️", "👥", "🌾"]
    }
];

// ============ TRANSPORT DATA ============
const transportData = [
    {
        id: 1,
        type: "songthaew",
        name: "รถสองแถว บ้านตาล-คลองไผ่",
        emoji: "🚌",
        location: "ตลาดหลัก หมู่1",
        contact: "089-1111111",
        schedule: [
            { trip: 1, time: "06:00" },
            { trip: 2, time: "08:30" },
            { trip: 3, time: "11:00" },
            { trip: 4, time: "15:30" }
        ],
        price: "40",
        duration: "45 นาที",
        route: "บ้านตาล → ตลาดคลองไผ่"
    },
    {
        id: 2,
        type: "motorbike",
        name: "มอไซส์แท็กซี่ (Taxi)",
        emoji: "🏍️",
        location: "ทั่วเทศบาล 3 สถานี",
        contact: "089-2222222",
        schedule: [
            { station: "สถานี 1", location: "ตลาดหลัก" },
            { station: "สถานี 2", location: "ศาลา" },
            { station: "สถานี 3", location: "ศูนย์กลาง" }
        ],
        price: "20-50",
        duration: "5-20 นาที",
        operator: "แม่ชัย"
    },
    {
        id: 3,
        type: "train",
        name: "รถไฟด่วน (เที่ยว 09:00)",
        emoji: "🚂",
        location: "สถานีรถไฟบ้านตาล",
        contact: "1612",
        schedule: [
            { trip: 1, time: "09:00", destination: "กาญจนบุรี" },
            { trip: 2, time: "14:30", destination: "กาญจนบุรี" }
        ],
        price: "150-350",
        duration: "1 ชั่วโมง",
        website: "www.railway.co.th"
    }
];

// ============ PACKAGES DATA ============
const packagesData = [
    {
        id: 1,
        name: "วันเดียวเต็มวัน - สัมผัสชีวิตชุมชน",
        emoji: "📦",
        price: "599",
        perPerson: "บาท/คน",
        minGroup: "5 คน",
        duration: "1 วัน",
        rating: 4.9,
        reviews: 98,
        contact: "089-9999999",
        itinerary: [
            { time: "08:00", activity: "รับที่สถานีขนส่ง" },
            { time: "09:00", activity: "ทำกิจกรรมไร่ (เก็บของ, ทำน้ำปลา)" },
            { time: "11:30", activity: "ชิมอาหารท้องถิ่น" },
            { time: "14:00", activity: "เยี่ยมหัตถกรรม & เรียนทำ" },
            { time: "15:30", activity: "ซื้อของฝาก" },
            { time: "17:00", activity: "ส่งคืนสถานี" }
        ],
        includes: [
            "รถรับส่ง",
            "อาหารกลางวัน",
            "คำแนะนำทัวร์",
            "ของที่ระลึก"
        ]
    },
    {
        id: 2,
        name: "ที่พักรวม 2 วัน 1 คืน",
        emoji: "🏨",
        price: "1999",
        perPerson: "บาท/คน",
        minGroup: "4 คน",
        duration: "2 วัน 1 คืน",
        rating: 4.7,
        reviews: 64,
        contact: "089-8888888",
        itinerary: [
            { time: "วันที่ 1", activity: "14:00 เช็คอิน + อาหารค่ำ" },
            { time: "วันที่ 1", activity: "18:00 ทัวร์ไหว้พระจันทร์" },
            { time: "วันที่ 2", activity: "07:00 บ้านอาหารเช้า" },
            { time: "วันที่ 2", activity: "09:00 เยี่ยมชุมชน" },
            { time: "วันที่ 2", activity: "12:00 เช็คเอาท์"  }
        ],
        includes: [
            "ที่พัก 1 คืน",
            "อาหาร 3 มื้อ",
            "ทัวร์ท้องถิ่น",
            "ประกันการท่องเที่ยว"
        ]
    }
];
