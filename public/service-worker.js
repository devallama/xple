const CACHE_NAME = 'static-cache-v1';

const iconPath = 'assets/icons';

const FILES_TO_CACHE = [
    `index.html`,
    `${iconPath}/add.svg`,
    `${iconPath}/arrow-cta.svg`,
    `${iconPath}/book-sidebar.svg`,
    `${iconPath}/book.svg`,
    `${iconPath}/calendar-black.svg`,
    `${iconPath}/calendar-sidebar.svg`,
    `${iconPath}/chevron-right.svg`,
    `${iconPath}/close.svg`,
    `${iconPath}/cloud-sidebar.svg`,
    `${iconPath}/cloud.svg`,
    `${iconPath}/cross.svg`,
    `${iconPath}/dot-menu.svg`,
    `${iconPath}/double-chevron-collapse-sidebar.svg`,
    `${iconPath}/double-chevron-sidebar.svg`,
    `${iconPath}/double-chevron.svg`,
    `${iconPath}/edit.svg`,
    `${iconPath}/graduation-cap-sidebar.svg`,
    `${iconPath}/graduation-cap.svg`,
    `${iconPath}/hamburger.svg`,
    `${iconPath}/home-sidebar.svg`,
    `${iconPath}/home.svg`,
    `${iconPath}/indicator-deadline.svg`,
    `${iconPath}/indicator-milestone.svg`,
    `${iconPath}/indicator-task.svg`,
    `${iconPath}/lightning-sidebar.svg`,
    `${iconPath}/lightning.svg`,
    `${iconPath}/logo.png`,
    `${iconPath}/logout-sidebar.svg`,
    `${iconPath}/logout.svg`,
    `${iconPath}/person.svg`,
    `${iconPath}/plus.svg`,
    `${iconPath}/project-sidebar.svg`,
    `${iconPath}/project.svg`
];

self.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );

    self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );

    self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});