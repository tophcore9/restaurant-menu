"use strict";
let dishes = new Dishes(new Dish('New title 1', 'agdsnlvzxjiosd gasdl gkjlkweqtn lksjdavoidjfejfa sdio j jtewt knlv', 473, 'drinks', 'dish.png'), new Dish('New title 2', 'agdsnlvzxjiosd gasdl gkjlkweqtn lksjdavoidjfejfa sdio j jtewt knlv', 843, 'aper', 'dish.png'), new Dish('New title 3', 'agdsnlvzxjiosd gasdl gkjlkweqtn lksjdavoidjfejfa sdio j jtewt knlv', 1473, 'drinks', 'dish.png'), new Dish('New title 4', 'agdsnlvzxjiosd gasdl gkjlkweqtn lksjdavoidjfejfa sdio j jtewt knlv', 1723, 'dasknl', 'dish.png'), new Dish('New title 5', 'agdsnlvzxjiosd gasdl gkjlkweqtn lksjdavoidjfejfa sdio j jtewt knlv', 843, 'zxucb', 'dish.png'), new Dish('New title 6', 'agdsnlvzxjiosd gasdl gkjlkweqtn lksjdavoidjfejfa sdio j jtewt knlv', 1473, 'znueyqj', 'dish.png'), new Dish('New title 7', 'agdsnlvzxjiosd gasdl gkjlkweqtn lksjdavoidjfejfa sdio j jtewt knlv', 1723, 'drinks', 'dish.png'));
dishes.renderAll();
const filters = document.getElementsByClassName('filter');
[...filters].forEach(item => {
    item.addEventListener('click', function (event) {
        const target = event.target;
        target.style.backgroundColor = '#FF3D00';
        target.style.color = 'white';
        dishes.clearAll();
        dishes.renderAll(target.innerHTML.toLowerCase());
    });
});
