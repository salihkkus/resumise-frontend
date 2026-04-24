# Resumise - Yapay Zeka Kariyer Mimarı

<div align="center">


**Yapay zeka destekli kariyer yönetim platformu**

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.0-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC.svg)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.22.3-red.svg)](https://reactrouter.com/)

</div>

## 📖 İçerik

- [Hakkında](#hakkında)
- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Proje Yapısı](#proje-yapısı)
- [API Bağlantısı](api-bağlantısı)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)

## 🎯 Hakkında

Resumise, modern kariyer yönetimi için geliştirilmiş yapay zeka destekli bir web uygulamasıdır. Kullanıcıların CV'lerini analiz etmelerine, iş eşleşmelerini bulmalarına, ATS kontrolü yapmalarına ve yapay zeka mülakat koçluğu almalarına olanak tanır.

## ✨ Özellikler

### 🏠 **Dashboard**
- Kişiselleştirilmiş ana panel
- Analiz özetleri ve istatistikler
- Hızlı erişim menüleri

### 📊 **Analizlerim**
- CV analiz geçmişi
- Detaylı analiz raporları
- Performans takibi

### 📄 **Özgeçmişlerim**
- CV yükleme ve yönetimi
- Format kontrolü
- İndirme seçenekleri

### 🔍 **İş Eşleşmeleri**
- Yapay zeka destekli iş eşleştirme
- Kişiselleştirilmiş öneriler
- Başarı oranları

### ⚙️ **ATS Kontrolü**
- Applicant Tracking System uyumluluğu
- Format kontrolü
- İyelik önerileri

### 🤖 **Yapay Zeka Mülakat Koçu**
- Simüle edilmiş mülakatlar
- Geri bildirim ve puanlama
- Gelişim önerileri

### 👤 **Profil**
- Kişisel bilgiler
- Ayarlar ve tercihler
- Hedef pozisyonlar

## 🛠️ Teknolojiler

### **Frontend**
- **React 18.2.0** - UI kütüphanesi
- **Vite 5.2.0** - Build tool ve development server
- **React Router 6.22.3** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework

### **Development**
- **ESLint** - Code linting
- **Material Symbols** - Icon set
- **Google Fonts** - Typography

### **Styling**
- **Tailwind CSS CDN** - Production styling
- **Custom color palette** - Brand colors
- **Responsive design** - Mobile-first approach

## 🚀 Kurulum

### **Gereksinimler**
- Node.js 18+ 
- npm veya yarn

### **Adımlar**

1. **Repo'yu klonla**
```bash
git clone https://github.com/salihkkus/resumise-frontend.git
cd resumise-frontend
```

2. **Dependencies'leri yükle**
```bash
npm install
```

3. **Environment variables oluştur**
```bash
cp .env.example .env.local
```

4. **Backend URL'ini yapılandır**
```env
REACT_APP_API_BASE_URL=http://localhost:8080
```

5. **Development server'ı başlat**
```bash
npm run dev
```

Uygulama `http://localhost:5173` adresinde çalışacaktır.

## 💻 Kullanım

### **Development**
```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint kontrolü
```

### **Build**
```bash
npm run build        # Build for production
```

Build dosyaları `dist/` klasöründe oluşturulur.

## 📁 Proje Yapısı

```
resumise-frontend/
├── public/                 # Statik dosyalar
├── src/
│   ├── components/         # React component'leri
│   │   ├── Dashboard.jsx
│   │   ├── Analizlerim.jsx
│   │   ├── AnalysisReport.jsx
│   │   ├── MyResumes.jsx
│   │   ├── JobMatches.jsx
│   │   ├── ATSCheck.jsx
│   │   ├── AIInterviewCoach.jsx
│   │   ├── Profile.jsx
│   │   └── ...
│   ├── contexts/           # React context'leri
│   ├── services/           # API servisleri
│   ├── styles/            # CSS dosyaları
│   ├── App.jsx            # Ana uygulama component'i
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── package.json           # Dependencies ve script'ler
├── vite.config.js         # Vite yapılandırması
└── README.md              # Bu dosya
```

## 🔌 API Bağlantısı

### **Servisler**
- `api.js` - Ana API configurations
- `analysisService.js` - CV analiz servisleri
- `cvService.js` - CV yönetim servisleri
- `authService.js` - Authentication servisleri

### **Endpoint'ler**
```javascript
// Örnek API kullanımı
const API_BASE_URL = 'http://localhost:8080';

// Analiz servisi
const analysis = await analysisService.getAnalyses();
const report = await analysisService.getAnalysisById(id);

// CV servisi
const cvs = await cvService.getCVs();
const upload = await cvService.uploadCV(file);
```

### **Authentication**
- Session-based authentication
- Cookie handling
- Protected routes
- OAuth integration

## 🎨 Tasarım Sistemi

### **Renk Paleti**
```css
--primary: #0052cc;
--primary-container: #e6f0ff;
--surface: #f8fafd;
--on-surface: #0f172a;
--error: #ef4444;
```

### **Typography**
- **Headline:** Manrope font family
- **Body:** Inter font family
- **Icons:** Material Symbols

### **Component'ler**
- Responsive grid system
- Card-based layouts
- Glass morphism effects
- Smooth transitions

## 🤝 Katkıda Bulunma

Katkıda bulunmak için:

1. Fork yap
2. Feature branch'i oluştur (`git checkout -b feature/AmazingFeature`)
3. Commit yap (`git commit -m 'Add some AmazingFeature'`)
4. Push yap (`git push origin feature/AmazingFeature`)
5. Pull Request aç

### **Development Guidelines**
- Component'lerin küçük ve odaklı olmasını sağla
- Tailwind CSS utility class'larını kullan
- ESLint kurallarına uy
- Responsive tasarımı göz önünde bulundur

## 🐛 Hata Raporlama

Hata bulduysanız:
1. [Issues](https://github.com/salihkkus/resumise-frontend/issues) sayfasına git
2. "New Issue" butonuna tıkla
3. Detaylı bilgi ver:
   - Hatanın açıklaması
   - Adımları tekrarlama
   - Ekran görüntüsü (varsa)
   - Browser/OS bilgileri

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. [LICENSE](LICENSE) dosyasına bakın.

## 👥 Ekip

- **[Salih Kus](https://github.com/salihkkus)** - *Frontend Developer*

## 🙏 Teşekkürler

- [React](https://reactjs.org/) - UI kütüphanesi
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Material Design](https://material.io/) - Design system
- [Google Fonts](https://fonts.google.com/) - Typography

---

<div align="center">

**[⭐ Star](https://github.com/salihkkus/resumise-frontend) | [🐛 Issues](https://github.com/salihkkus/resumise-frontend/issues) | [📝 Docs](https://github.com/salihkkus/resumise-frontend/wiki)**

Made with ❤️ by [Salih Karakus](https://github.com/salihkkus)

</div>