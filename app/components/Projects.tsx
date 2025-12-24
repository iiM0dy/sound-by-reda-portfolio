'use client'

import React, { useEffect } from "react";

interface Src {
  id: number;
  title: string;
  description: string;
  promoUrl: string;
}

const movies: Src[] = [

  { id: 1, title: 'Esabet Azema (Egyptian Movie)', description: '', promoUrl: 'https://youtube.com/embed/76XZybzJQ14' },
  { id: 2, title: 'El Sett (Egyptian Movie)', description: '', promoUrl: 'https://youtube.com/embed/LlhGrxC5Ifc' },
  { id: 3, title: 'Shee’o (Egyptian Movie)', description: '', promoUrl: 'https://youtube.com/embed/bzOr9-9bj6g' },
  { id: 4, title: 'Baa’d El Shar (Egyptian Movie)', description: '', promoUrl: 'https://youtube.com/embed/9gnkWl8R5pI' },
  { id: 5, title: 'Mr. EX (Egyptian Movie)', description: '', promoUrl: 'https://youtube.com/embed/p6FcQ00jTUQ' },
  { id: 6, title: 'Kira w El Ginn (Egyptian Movie)', description: '', promoUrl: 'https://youtube.com/embed/COkUlflnkbk' }];

const series: Src[] = [

  { id: 1, title: 'Al Hashasheen (Egyptian Series)', description: 'participating On-Set Sound Recording', promoUrl: 'https://youtube.com/embed/DCO8fe0rOyE' }, { id: 2, title: 'Mamlakat El Harir (Egyptian Series)', description: '', promoUrl: 'https://youtube.com/embed/ziCJ-_c3o58' },
  { id: 3, title: 'Ramadan Kareem Season 2 (Egyptian Series)', description: '', promoUrl: 'https://youtube.com/embed/onAJv3VNT2M' },
  { id: 4, title: 'Ala Bab El Omara (Egyptian Series)', description: '', promoUrl: 'https://youtube.com/embed/s2LHCvfMgso' },
  { id: 5, title: 'El Laaba Season 4 (Egyptian Series)', description: '', promoUrl: 'https://youtube.com/embed/ma7InmmiNi4' },
  { id: 6, title: 'Hakeem Basha (Egyptian Series)', description: '', promoUrl: 'https://youtube.com/embed/KxLXLJC8y-0' },
  { id: 7, title: 'Ahwet El Mahatta (Egyptian Series)', description: '', promoUrl: 'https://youtube.com/embed/aZaVihEuVTE' },
  { id: 8, title: 'Gameela (Egyptian Series)', description: '', promoUrl: 'https://youtube.com/embed/rzgFBuHstuw' },
  { id: 9, title: 'El Sofara (Egyptian Series)', description: '', promoUrl: 'https://youtube.com/embed/ZJDBN2SHuJM' }];


const commercials: Src[] = [

  { id: 1, title: 'Etisalat – Sherine Abdel Wahab (Commercial)', description: '', promoUrl: 'https://youtube.com/embed/dT3Z1272d-Y' },
  { id: 2, title: 'Grand Egyptian Museum Opening (Event)', description: '', promoUrl: 'https://youtube.com/embed/zYs_vKoeHGI' },
  { id: 3, title: 'Madinaty 2025 (Commercial)', description: '', promoUrl: 'https://youtube.com/embed/sHttFAKTHRU' },
  { id: 4, title: 'Hadeed Ezz 2025 (Commercial)', description: '', promoUrl: 'https://youtube.com/embed/mqxec0scFoo' },];

const shows: Src[] = [

  { id: 1, title: 'بودكاست الحل إيه؟ المسؤولية المجتمعية لرجال الأعمال في مصر مع رجل الأعمال سميح ساويرس', description: '', promoUrl: 'https://youtube.com/embed/HWEPMqnu-TA?si=iLCzVrvWMVr7HQ0H' },
  { id: 2, title: 'Demagh Sem - MSH KEDA', description: '', promoUrl: 'https://youtube.com/embed/-TrIR6ule_w?si=AF3xb-V89asIHB4g' },
  { id: 3, title: 'Demagh Sem - MSH KEDA', description: '', promoUrl: 'https://youtube.com/embed/D7EQ0ImwjZc?si=aVO8vlIOlklD9G3Y' },

  { id: 4, title: 'Demagh Sem - MSH KEDA', description: '', promoUrl: 'https://youtube.com/embed/oh-NMv2P89E?si=ZZDgQm4DGmVJwKni' },
  { id: 5, title: 'بودكاست الحل إيه؟ حلقة خاصه عن البحث العلمي مع الدكتور محمد ابو الغار ورباب المهدي', description: '', promoUrl: 'https://youtube.com/embed/YgB_9Md5YRg?si=0qbMCjASicp7Xeu-' },
  { id: 6, title: 'بودكاست الحل إيه؟ | ماذا بعد 7 أكتوبر؟ .. عمرو موسى يطرح رؤيته للعالم العربي بعد السابع من أكتوبر', description: '', promoUrl: 'https://youtube.com/embed/ZSRug1CN0e0?si=scJ4tublDgT6R9O9' },
  { id: 7, title: 'المقايضة الكبرى | هل تكون الحل المثالي لديون مصر... رجل الأعمال حسن هيكل يعرض خطته لـ تصفير ديون مصر', description: '', promoUrl: 'https://youtube.com/embed/MG0PlAXtq_g?si=GVpdgL2xtYpqk5wF' },
  { id: 8, title: 'الفتنة الكبرى .. أخطر حقبة في التاريخ الإسلامي | في الحضارة', description: '', promoUrl: 'https://youtube.com/embed/ldBgcsfJnU0?si=bGREFwHyE4z16qYt' },
  { id: 9, title: 'نتنياهو.. الخائف الأبدي │ في الحضارة', description: '', promoUrl: 'https://youtube.com/embed/qx8V78wTmVI?si=hjwnHdsHFr_DxNji' },
  { id: 10, title: 'بيكاسو...العبقري الأخير │ في الحضارة', description: '', promoUrl: 'https://youtube.com/embed/QqdeHoHueXk?si=r4A4MfNpew_Haz_-' },
  { id: 11, title: 'أعقل مجنون في العالم │ في الحضارة', description: '', promoUrl: 'https://youtube.com/embed/6oxwfDVVnVU?si=eFcAYXi5rrGY5pit' },
  { id: 12, title: 'إمام ونجم.. في مواجهة العالم | في الحضارة', description: '', promoUrl: 'https://youtube.com/embed/rCRFNbyzrc4?si=UEqart7xNfIEdg7V' },
  { id: 13, title: 'أبو العلاء المعري: هل الاستسلام هو الخيار الأذكى أحيانًا؟ │ في الحضارة', description: '', promoUrl: 'https://youtube.com/embed/TtW1OSalTXg?si=80lI9SGaM18AiGoH' },
]

const VideoCard = ({ item }: { item: Src }) => {
  const isInstagram = item.promoUrl.includes("instagram.com");

  return (
    <div className="w-full md:w-140 px-4 md:px-0">
      <div
        className={`relative w-full overflow-hidden rounded-lg ${isInstagram ? "pb-[177.77%]" : "pb-[56.25%]"
          }`}
      >
        <iframe
          className="absolute inset-0 w-full h-full"
          src={item.promoUrl}
          title={item.title}
          frameBorder="0"
          scrolling="no"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>

      <h2 className="text-white text-2xl mt-4">{item.title}</h2>
      <p className="mt-2 text-[#A8A8A8]">{item.description}</p>

      {isInstagram && (
        <a
          href={item.promoUrl.replace("/embed", "")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-[#3EA6FF] underline"
        >
          View on Instagram
        </a>
      )}
    </div>
  );
};

const Section = ({ title, data }: { title: string; data: Src[] }) => (
  <>
    <div className="bg-[#1a1a1ac3] w-full py-7 text-center my-10">
      <h1 className="text-4xl md:text-5xl font-bold text-[#3EA6FF]">{title}</h1>
    </div>

    <div className="flex flex-wrap gap-8 justify-center">
      {data.map(item => (
        <VideoCard key={item.id} item={item} />
      ))}
    </div>
  </>
);

const Projects = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Section title="Movies" data={movies} />
      <Section title="Series" data={series} />
      <Section title="Commercials" data={commercials} />
      <Section title="Shows" data={shows} />

    </>
  );
};

export default Projects;
