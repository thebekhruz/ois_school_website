/**
 * ФАЙЛ ДАННЫХ УНИВЕРСИТЕТОВ
 * ========================
 * 
 * Здесь вы можете управлять списком университетов, которые отображаются на карте.
 * 
 * ИНСТРУКЦИЯ ПО РЕДАКТИРОВАНИЮ:
 * 
 * 1. КАК ДОБАВИТЬ УНИВЕРСИТЕТ:
 *    - Скопируйте один из существующих объектов университета
 *    - Измените id (должен быть уникальным)
 *    - Заполните все поля
 * 
 * 2. КАК УДАЛИТЬ УНИВЕРСИТЕТ:
 *    - Просто удалите весь объект университета из массива
 * 
 * 3. КАК НАЙТИ КООРДИНАТЫ:
 *    - Откройте Google Maps: https://www.google.com/maps
 *    - Найдите нужный университет
 *    - Кликните правой кнопкой на маркер университета
 *    - Выберите координаты (они скопируются)
 *    - Первое число = latitude (широта)
 *    - Второе число = longitude (долгота)
 *    - В этом файле порядок: [longitude, latitude] - ОБРАТНЫЙ!
 * 
 * 4. КАК ДОБАВИТЬ ЛОГОТИП:
 *    - Сохраните логотип в папку: /public/university-logos/
 *    - Рекомендуемый формат: PNG с прозрачным фоном
 *    - Рекомендуемый размер: 200x200px или больше
 *    - Имя файла: используйте английские буквы и дефисы
 *    - Пример: harvard.png, mit.png, oxford.png
 *    - В поле logo укажите: '/university-logos/имя-файла.png'
 * 
 * 5. ПОЛЯ:
 *    - id: уникальный номер (не повторяйте!)
 *    - name: полное название университета
 *    - location: город, штат/область
 *    - country: страна (на английском для фильтров)
 *    - coordinates: [долгота, широта] - ВАЖНО: долгота первая!
 *    - students: количество наших студентов в этом университете
 *    - year: год поступления ('2023', '2024' и т.д.)
 *    - program: 'IB Diploma' или 'Russian Program'
 *    - ranking: (опционально) позиция в мировом рейтинге QS
 *    - logo: (опционально) путь к логотипу '/university-logos/filename.png'
 */

export interface University {
  id: number;
  name: string;
  location: string;
  country: string;
  coordinates: [number, number]; // [longitude, latitude]
  students: number;
  year: string;
  program: string;
  ranking?: number;
  logo?: string;
}

// ============================================================================
// СПИСОК УНИВЕРСИТЕТОВ
// ============================================================================
// Добавляйте, удаляйте или редактируйте университеты здесь

export const universities: University[] = [
  // ========== США ==========
  {
    id: 1,
    name: 'Harvard University',
    location: 'Cambridge, MA',
    country: 'USA',
    coordinates: [-71.1167, 42.3770],
    students: 12,
    year: '2023',
    program: 'IB Diploma',
    ranking: 1,
    logo: '/university-logos/harvard.png'
  },
  {
    id: 2,
    name: 'Stanford University',
    location: 'Stanford, CA',
    country: 'USA',
    coordinates: [-122.1697, 37.4275],
    students: 8,
    year: '2024',
    program: 'IB Diploma',
    ranking: 3,
    logo: '/university-logos/stanford.png'
  },
  {
    id: 3,
    name: 'MIT',
    location: 'Cambridge, MA',
    country: 'USA',
    coordinates: [-71.0942, 42.3601],
    students: 15,
    year: '2023',
    program: 'IB Diploma',
    ranking: 2,
    logo: '/university-logos/mit.png'
  },
  {
    id: 4,
    name: 'Yale University',
    location: 'New Haven, CT',
    country: 'USA',
    coordinates: [-72.9223, 41.3163],
    students: 7,
    year: '2024',
    program: 'IB Diploma',
    ranking: 9
  },
  {
    id: 5,
    name: 'Princeton University',
    location: 'Princeton, NJ',
    country: 'USA',
    coordinates: [-74.6514, 40.3430],
    students: 6,
    year: '2023',
    program: 'IB Diploma',
    ranking: 7
  },

  // ========== ВЕЛИКОБРИТАНИЯ ==========
  {
    id: 6,
    name: 'Oxford University',
    location: 'Oxford',
    country: 'UK',
    coordinates: [-1.2544, 51.7548],
    students: 18,
    year: '2024',
    program: 'IB Diploma',
    ranking: 4,
    logo: '/university-logos/oxford.png'
  },
  {
    id: 7,
    name: 'Cambridge University',
    location: 'Cambridge',
    country: 'UK',
    coordinates: [0.1218, 52.2053],
    students: 14,
    year: '2023',
    program: 'IB Diploma',
    ranking: 5,
    logo: '/university-logos/cambridge.png'
  },
  {
    id: 8,
    name: 'Imperial College London',
    location: 'London',
    country: 'UK',
    coordinates: [-0.1749, 51.4988],
    students: 10,
    year: '2024',
    program: 'IB Diploma',
    ranking: 6,
    logo: '/university-logos/imperial.png'
  },
  {
    id: 9,
    name: 'UCL',
    location: 'London',
    country: 'UK',
    coordinates: [-0.1340, 51.5246],
    students: 9,
    year: '2023',
    program: 'IB Diploma',
    ranking: 8,
    logo: '/university-logos/ucl.png'
  },

  // ========== КАНАДА ==========
  {
    id: 10,
    name: 'University of Toronto',
    location: 'Toronto',
    country: 'Canada',
    coordinates: [-79.3957, 43.6629],
    students: 11,
    year: '2024',
    program: 'IB Diploma',
    ranking: 21,
    logo: '/university-logos/toronto.png'
  },
  {
    id: 11,
    name: 'University of British Columbia',
    location: 'Vancouver',
    country: 'Canada',
    coordinates: [-123.2460, 49.2606],
    students: 8,
    year: '2023',
    program: 'IB Diploma',
    ranking: 34
  },
  {
    id: 12,
    name: 'McGill University',
    location: 'Montreal',
    country: 'Canada',
    coordinates: [-73.5772, 45.5048],
    students: 6,
    year: '2024',
    program: 'IB Diploma',
    ranking: 31
  },

  // ========== АВСТРАЛИЯ ==========
  {
    id: 13,
    name: 'University of Melbourne',
    location: 'Melbourne',
    country: 'Australia',
    coordinates: [144.9614, -37.7963],
    students: 7,
    year: '2024',
    program: 'IB Diploma',
    ranking: 14
  },
  {
    id: 14,
    name: 'Australian National University',
    location: 'Canberra',
    country: 'Australia',
    coordinates: [149.1185, -35.2777],
    students: 5,
    year: '2023',
    program: 'IB Diploma',
    ranking: 30
  },
  {
    id: 15,
    name: 'University of Sydney',
    location: 'Sydney',
    country: 'Australia',
    coordinates: [151.1873, -33.8886],
    students: 6,
    year: '2024',
    program: 'IB Diploma',
    ranking: 19
  },

  // ========== ШВЕЙЦАРИЯ ==========
  {
    id: 16,
    name: 'ETH Zurich',
    location: 'Zurich',
    country: 'Switzerland',
    coordinates: [8.5417, 47.3769],
    students: 9,
    year: '2023',
    program: 'IB Diploma',
    ranking: 11
  },
  {
    id: 17,
    name: 'EPFL',
    location: 'Lausanne',
    country: 'Switzerland',
    coordinates: [6.5668, 46.5191],
    students: 5,
    year: '2024',
    program: 'IB Diploma',
    ranking: 36
  },

  // ========== ГЕРМАНИЯ ==========
  {
    id: 18,
    name: 'Technical University of Munich',
    location: 'Munich',
    country: 'Germany',
    coordinates: [11.5676, 48.1497],
    students: 8,
    year: '2024',
    program: 'IB Diploma',
    ranking: 49
  },
  {
    id: 19,
    name: 'LMU Munich',
    location: 'Munich',
    country: 'Germany',
    coordinates: [11.5809, 48.1502],
    students: 6,
    year: '2023',
    program: 'IB Diploma',
    ranking: 59
  },

  // ========== НИДЕРЛАНДЫ ==========
  {
    id: 20,
    name: 'University of Amsterdam',
    location: 'Amsterdam',
    country: 'Netherlands',
    coordinates: [4.8945, 52.3667],
    students: 7,
    year: '2024',
    program: 'IB Diploma',
    ranking: 53
  },
  {
    id: 21,
    name: 'Delft University of Technology',
    location: 'Delft',
    country: 'Netherlands',
    coordinates: [4.3571, 52.0116],
    students: 4,
    year: '2023',
    program: 'IB Diploma',
    ranking: 47
  },

  // ========== ФРАНЦИЯ ==========
  {
    id: 22,
    name: 'Sorbonne University',
    location: 'Paris',
    country: 'France',
    coordinates: [2.3434, 48.8484],
    students: 5,
    year: '2024',
    program: 'IB Diploma',
    ranking: 59
  },

  // ========== СИНГАПУР ==========
  {
    id: 23,
    name: 'National University of Singapore',
    location: 'Singapore',
    country: 'Singapore',
    coordinates: [103.7764, 1.2966],
    students: 10,
    year: '2024',
    program: 'IB Diploma',
    ranking: 8
  },

  // ========== ГОНКОНГ ==========
  {
    id: 24,
    name: 'University of Hong Kong',
    location: 'Hong Kong',
    country: 'Hong Kong',
    coordinates: [114.1370, 22.2830],
    students: 6,
    year: '2023',
    program: 'IB Diploma',
    ranking: 26
  },

  // ========== ЯПОНИЯ ==========
  {
    id: 25,
    name: 'University of Tokyo',
    location: 'Tokyo',
    country: 'Japan',
    coordinates: [139.7618, 35.7136],
    students: 4,
    year: '2024',
    program: 'IB Diploma',
    ranking: 29
  },

  // ========== ЮЖНАЯ КОРЕЯ ==========
  {
    id: 26,
    name: 'Seoul National University',
    location: 'Seoul',
    country: 'South Korea',
    coordinates: [126.9520, 37.4601],
    students: 5,
    year: '2023',
    program: 'IB Diploma',
    ranking: 41
  },

  // ========== РОССИЯ ==========
  {
    id: 27,
    name: 'НИУ ВШЭ',
    location: 'Москва',
    country: 'Russia',
    coordinates: [37.6173, 55.7558],
    students: 8,
    year: '2024',
    program: 'Russian Program',
    logo: '/university-logos/hse.png'
  },
  {
    id: 28,
    name: 'МГУ',
    location: 'Москва',
    country: 'Russia',
    coordinates: [37.5298, 55.7033],
    students: 6,
    year: '2023',
    program: 'Russian Program',
    logo: '/university-logos/mgu.png'
  },
  {
    id: 29,
    name: 'МФТИ',
    location: 'Москва',
    country: 'Russia',
    coordinates: [37.5186, 55.9304],
    students: 5,
    year: '2024',
    program: 'Russian Program',
    logo: '/university-logos/mipt.png'
  },
  {
    id: 30,
    name: 'СПбГУ',
    location: 'Санкт-Петербург',
    country: 'Russia',
    coordinates: [30.2989, 59.9418],
    students: 4,
    year: '2023',
    program: 'Russian Program',
    logo: '/university-logos/spbu.png'
  },
];

// ============================================================================
// ШАБЛОН ДЛЯ НОВОГО УНИВЕРСИТЕТА
// ============================================================================
// Скопируйте этот шаблон и заполните его данными:
/*
{
  id: 999,                                    // Уникальный номер
  name: 'Название Университета',              // Полное название
  location: 'Город, Область',                 // Местоположение
  country: 'CountryName',                     // Страна (для фильтров)
  coordinates: [долгота, широта],             // [longitude, latitude]
  students: 5,                                // Количество студентов
  year: '2024',                               // Год поступления
  program: 'IB Diploma',                      // или 'Russian Program'
  ranking: 50,                                // (необязательно) Рейтинг QS
  logo: '/university-logos/filename.png'      // (необязательно) Путь к логотипу
},
*/
