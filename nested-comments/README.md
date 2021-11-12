# کامنت‌های تودرتو
امتیاز: ۳۰۰

### ساختار پروژه

```
nested-comments
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   ├── CommentBox
│   │   │   ├── _styles.scss
│   │   │   └── index.jsx
│   │   └── CommentList
│   │       ├── _styles.scss
│   │       └── index.jsx
│   ├── data
│   │   └── data.json
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx
└── package.json
```
### راه اندازی پروژه
- برای اجرای پروژه، باید NodeJS و npm را از قبل نصب کرده باشید.

- ابتدا پروژه‌ی اولیه را دانلود و از حالت فشرده خارج کنید.
- در پوشه‌ی use-page-data ، دستور npm install را برای نصب نیازمندی‌ها اجرا کنید.
- در همین پوشه، دستور npm start را برای راه‌اندازی پروژه اجرا کنید.
- پس از انجام موفق این مراحل، با مراجعه به آدرس http://localhost:3000/ می‌توانید نتیجه را ببینید.

### جزئیات

ظاهر کلی برنامه به‌این صورت است:

![alt git](https://github.com/myas92/digikala-frontend-questions/blob/master/nested-comments/recursive-component-screenshot.gif)

در این سوال می‌خواهیم لیست کامنت‌ها را به‌صورت درختی نمایش دهیم. لیست کامنت‌ها در پوشه data وجود دارد. ساختار هر کامنت به شکل زیر است:

```javascript
{
  "id": string,
  "info": {
    "title": string,
    "description": string
  },
  "parentId": string | null,
  "user": {
    "firstName": string,
    "lastName": string
  }
}
```
در این ساختار هر کامنت دارای یک parentId است. اگر مقدار این فیلد null باشد به این معنا است که این کامنت دارای والد نیست. در غیر این صورت به ایدی والد این کامنت اشاره می‌کند.

برای مثال لیست کامنت‌ها به شکل زیر است:

```json
[
  {
    "id": "id-1",
    "info": {
      "title": "title-1",
      "description": "description-1"
    },
    "parentId": null,
    "user": {
      "firstName": "firstName-1",
      "lastName": "lastName-1"
    }
  },
  {
    "id": "id-2",
    "info": {
      "title": "title-2",
      "description": "description-2"
    },
    "parentId": "id-1",
    "user": {
      "firstName": "firstName-2",
      "lastName": "lastName-2"
    }
  },
  {
    "id": "id-3",
    "info": {
      "title": "title-3",
      "description": "description-3"
    },
    "parentId": "id-2",
    "user": {
      "firstName": "firstName-3",
      "lastName": "lastName-3"
    }
  },
  {
    "id": "id-4",
    "info": {
      "title": "title-4",
      "description": "description-4"
    },
    "parentId": null,
    "user": {
      "firstName": "firstName-4",
      "lastName": "lastName-4"
    }
  },
  {
    "id": "id-5",
    "info": {
      "title": "title-5",
      "description": "description-5"
    },
    "parentId": "id-1",
    "user": {
      "firstName": "firstName-5",
      "lastName": "lastName-5"
    }
  },
]
```
این لیست باید به شکل زیر نشان داده شود:

```
├── id-1
│   ├── id-2
│   │    └── id-3
│   └── id-5
└── id-4
```

در شکل بالا کامنت‌های id-1 و id-4 سطح صفر، id-2 و id-5 سطح یک و کامنت id-3 سطح دو هستند.


### مواردی که باید در این سوال رعایت کنید:

- شما باید برنامه‌ای بنویسید که لیست کامنت‌ها را دریافت کند و به این شکل ساختاری نمایش دهد.
- هر کامنت باید براساس سطحش در درخت دارای استایل margin-left باشد. برای مثال اگر کامنت در سطح صفر بود (یعنی والد است و والدی ندارد) باید دارای استایل margin-left: 0px باشد. اگر کامنت در سطح یک بود (دارای والد است) باید دارای استایل margin-left: 16px باشد. اگر کامنت در سطح دو بود (دارای والد است و والد آن خود والد دارد) باید دارای استایل margin-left: 32px باشد.
- هر کامنت سطح صفری باید دارای کلاس root-comment باشد.
- در صورتی که لیست کامنت‌ها خالی باشد، باید فقط کامپوننت EmptyList نمایش داده شود.

### تغییرات لازم برای هر فایل:

- فایل App.jsx: شما لیست کامنت‌ها را در کامپوننت دریافت می‌کنید. قبل از فرستادن comments به کامپوننت CommentList باید ساختار مورد نظر را ایجاد کنید.
- فایل CommentList.jsx: در این کامپوننت شما باید لیست کامنت‌ها را نمایش دهید. کلاس root-comment را برساس شرایط گفته شده در قسمت گفته شده قرار دهید. شما باید کامنت سطح صفر به‌همراه فرزندانش را در اینجا نشان دهید. در صورتی که فرزندی نداشت چیزی نباید نشان دهید.
- فایل CommentBox.jsx: برای نمایش هر کامنت از این کامپوننت استفاده کنید. استایل margin-left و شرایط گفته شده باید در اینجا پیاده‌سازی شود.

### نکات

- شما تنها مجاز به اعمال تغییرات در فایل‌های App.jsx و CommentList.jsx و CommentBox.jsx هستید.
- به کامنت‌های داخل فایل‌ها دقت کنید.
- مقدارهای data-testid پروژه اولیه نباید تغییر کنند.
- برای قسمت استایل از inline-style استفاده کنید.
- این استایل به اِلِمان با کلاس comment-box داخل فایل CommentBox.jsx داده شود.
- برای ارسال پاسخ کل پروژه را zip کرده و ارسال کنید. دقت کنید که پوشه‌ی node_modules در فایل ارسالی نباشد.