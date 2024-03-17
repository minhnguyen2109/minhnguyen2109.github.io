let products = {
    data: [
        {
            name: "BỘ PC MEOW (I5 13500 / RAM 16G DDR5 / VGA RTX 4060 8G)",
            price: "28.990.000đ",
            sale: "-9%",
            pricesale: "26.500.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25984-pc-meo.jpg"
        },
        {
            name: "NCPC ESPORT 02 (I3-10105F/ 8GB RAM/ 256GB SSD/RX 6500 XT)",
            price: "10.600.000đ",
            sale: "-15%",
            pricesale: "8.990.000đ",
            image: "https://nguyencongpc.vn/media/product/250-21817-ncpc-esport-02--.jpg"
        },
        {
            name: "Laptop Gaming MSI Thin GF63 (I5-12450H | 8G | RTX 2050 | 1TB SSD |...",
            price: "18.890.000đ",
            sale: "-18%",
            pricesale: "15.490.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25869-gf63-12ucx-898us.png"
        },
        {
            name: "Card Màn Hình Asrock RX 6500 XT Phantom Gaming D 4GB OC",
            price: "4.990.000đ",
            sale: "-26%",
            pricesale: "3.700.000đ",
            image: "https://nguyencongpc.vn/media/product/250-26170-asrock-rx-6500-xt-phantom-gaming-d-4gb-oc-1.jpg"
        },
        {
            name: "Card Đồ Họa ASRock Radeon RX 6600 XT Phantom Gaming D 8GB OC",
            price: "14.990.000đ",
            sale: "-56%",
            pricesale: "6.390.000đ",
            image: "https://nguyencongpc.vn/media/product/250-20718-sp3889475sp3889475sp3889475.jpg"
        },
        {
            name: "Bàn Phím Cơ DareU EK75 White Black DareU Dream Switch",
            price: "980.000đ",
            sale: "-41%",
            pricesale: "580.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25501-ek75-white.jpg"
        },


    ]
}
for (let items of products.data) {

    let contentbottom1 = document.createElement("div")
    contentbottom1.classList.add("content-bottom1")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    contentbottom1.appendChild(image)

    let name = document.createElement("h3");
    name.innerText = items.name.toUpperCase();
    contentbottom1.appendChild(name);

    let sale = document.createElement("div")
    sale.classList.add("sale")

    let price = document.createElement("p");
    price.innerText = items.price;
    sale.appendChild(price);

    let sale1 = document.createElement("div")
    sale1.classList.add("sale1")
    let giamgia = document.createElement("h4");
    giamgia.innerText = items.sale;
    sale1.appendChild(giamgia);
    sale.appendChild(sale1);

    contentbottom1.appendChild(sale);

    let textmoney = document.createElement("div")
    textmoney.classList.add("text-money")
    let pricesale = document.createElement("span");
    pricesale.innerText = items.pricesale;
    textmoney.appendChild(pricesale);
    contentbottom1.appendChild(textmoney);


    document.getElementById("products").appendChild(contentbottom1);
}


let products2 = {
    data: [
        {
            name: "CPU Intel Core I5 14600K (Up 5.30 GHz, 14 Nhân 20 Luồng, 24MB Cache,...",
            pricesale: "5.890.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25343-14600k.png"
        },
        {
            name: "Ổ Cứng SSD Kioxia Exceria NVMe M.2 2280 500GB LRC10Z500GG8",
            pricesale: "850.000đđ",
            image: "https://nguyencongpc.vn/media/product/250-25898-lrc10z500gg8.jpg"
        },
        {
            name: "CPU Intel Core I9 14900K (Up 6.0 GHz, 24 Nhân 32 Luồng, 36MB Cache,...",
            pricesale: "10.990.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25341-14900k.png"
        },
        {
            name: "CPU Intel Core I7 14700K (Up 5.60 GHz, 20 Nhân 28 Luồng, 33MB Cache,...",
            pricesale: "7.450.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25342-14700k.png"
        },
    ]
}
for (let items2 of products2.data){

    let textbottom2 = document.createElement("div")
    textbottom2.classList.add("text-bottom2")

    let image = document.createElement("img")
    image.setAttribute("src", items2.image)
    textbottom2.appendChild(image)

    let name = document.createElement("h3");
    name.innerText = items2.name.toUpperCase();
    textbottom2.appendChild(name);

    let pricesale = document.createElement("h5");
    pricesale.innerText = items2.pricesale;
    textbottom2.appendChild(pricesale);

    document.getElementById("products2").appendChild(textbottom2);
}


let product = {
    data: [
        {
            name: "Laptop Gaming Gigabyte G5 MF F2PH333SH (i5-12450H/ 8GB RAM/ 512GB SSD/ 15.6 FHD IPS...",
            price: "24.000.000đ",
            sale: "-19%",
            pricesale: "19.490.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25631-lt0000797.png"
        },
        {
            name: "Laptop Asus ExpertBook B1400CBA-EB0678W (Core i3-1215U | 8GB | 256GB | Intel®...",
            price: "12.590.000đ",
            sale: "-13%",
            pricesale: "10.900.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25784-eb0678w.png"
        },
        {
            name: "Laptop Dell Gaming G15 5525 (Ryzen 5-6600H/ 8GB/ 512GB/ RTX 3050/ 4GB/ 15.6'' FHD) N...",
            price: "21.400.000đ",
            sale: "-16%",
            pricesale: "17.950.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25320-lt0000224.png"
        },
        {
            name: "Laptop HP OMEN 16-k0033dx 16.1″QHD 165hz (Core i9-12900H/ 16GB RAM/ 1TB SSD/...",
            price: "29.900.000đ",
            sale: "-7%",
            pricesale: "27.900.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25651-laptop-hp-omen-16-k0033dx-16-1---qhd-165hzlaptop-hp-omen-16-k0033dx-16-1---qhd-165hz.jpg"
        },
        {
            name: "Laptop HP Envy15-fe0013dx (Core i5-1335U/Ram 8GB/SSD 256GB/15.6 inch FHD touch...",
            price: "17.500.000đ",
            sale: "-10%",
            pricesale: "15.800.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25649-hp-envy-2023-15-fe0013dxhp-envy-2023-15-fe0013dx.jpg"
        },

    ]
}
for (let item of product.data) {

    let laptopbottom1 = document.createElement("div")
    laptopbottom1.classList.add("laptop-bottom1")

    let image = document.createElement("img")
    image.setAttribute("src", item.image)
    laptopbottom1.appendChild(image)

    let name = document.createElement("h3");
    name.innerText = item.name.toUpperCase();
    laptopbottom1.appendChild(name);

    let sale = document.createElement("div")
    sale.classList.add("sale")

    let price = document.createElement("p");
    price.innerText = item.price;
    sale.appendChild(price);

    let sale1 = document.createElement("div")
    sale1.classList.add("sale1")
    let giamgia = document.createElement("h4");
    giamgia.innerText = item.sale;
    sale1.appendChild(giamgia);
    sale.appendChild(sale1);

    laptopbottom1.appendChild(sale);

    let textmoney = document.createElement("div")
    textmoney.classList.add("text-money")
    let pricesale = document.createElement("span");
    pricesale.innerText = item.pricesale;
    textmoney.appendChild(pricesale);
    laptopbottom1.appendChild(textmoney);


    document.getElementById("product").appendChild(laptopbottom1);
}


let products3 = {
    data: [
        {
            name: "PC Render VIP 05 (I7 14700K | 32GB RAM | RTX 3080)",
            price: "51.490.000đ",
            sale: "-5%",
            pricesale: "49.050.000đ",
            image: "https://nguyencongpc.vn/media/product/250-26156-khung-pc-v---v----case-ddfdffd.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "BỘ PC SHARKOON ( I7-13700K/ B760/ 16GB/ 500GB/ GTX 1660S/ 700W)",
            price: "27.990.000đ",
            sale: "-11%",
            pricesale: "24.990.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25624-pc-bts-sharkoon.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "PC Render VIP 04 (I9 14900K/ 32GB RAM/ RTX 4060 Ti)",
            price: "48.990.000đ",
            sale: "-2%",
            pricesale: "47.900.000đ",
            image: "https://nguyencongpc.vn/media/product/250-26151-khung-pc-v---v----case.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "PC AI - FUTURE 07 (I9 14900K | 128GB RAM | RTX 4090)",
            price: "170.000.000đ",
            sale: "-8%",
            pricesale: "157.000.000đ",
            image: "https://nguyencongpc.vn/media/product/250-26162-untitled-1.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: " PC Render VIP 01 (I9 14900K/ 64GB RAM/ 1TB SSD/ RTX 4060 OC/ 1000W)",
            price: "65.990.000đ",
            sale: "-5%",
            pricesale: "62.550.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25951-pc-render-01.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },

    ]
}
for (let items3 of products3.data) {

    let laptopbottom1 = document.createElement("div")
    laptopbottom1.classList.add("laptop-bottom1")

    let image = document.createElement("img")
    image.setAttribute("src", items3.image)
    laptopbottom1.appendChild(image)

    let name = document.createElement("h3");
    name.innerText = items3.name.toUpperCase();
    laptopbottom1.appendChild(name);

    let sale = document.createElement("div")
    sale.classList.add("sale")

    let price = document.createElement("p");
    price.innerText = items3.price;
    sale.appendChild(price);

    let sale1 = document.createElement("div")
    sale1.classList.add("sale1")
    let giamgia = document.createElement("h4");
    giamgia.innerText = items3.sale;
    sale1.appendChild(giamgia);
    sale.appendChild(sale1);

    laptopbottom1.appendChild(sale);

    let textmoney = document.createElement("div")
    textmoney.classList.add("text-money")
    let pricesale = document.createElement("span");
    pricesale.innerText = items3.pricesale;
    textmoney.appendChild(pricesale);
    laptopbottom1.appendChild(textmoney);
    
    let note = document.createElement("p")
    laptopbottom1.appendChild(note)


    document.getElementById("products3").appendChild(laptopbottom1);
}


let products4 = {
    data: [
        {
            name: "PC AMD 01 (Ryzen 5 4500/ 16GB RAM/ 500G SSD/ RX550 4GB/ 500W)",
            price: "8.600.000đ",
            sale: "-7%",
            pricesale: "7.990.000đ",
            image: "https://nguyencongpc.vn/media/product/250-26008-250-25574-case-centaur-titan-bla.png",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "PC NC GAMING 08 (I5 12400F/ 16GB RAM/ RTX 4060 OC) ",
            price: "21.990.000đ",
            sale: "-6%",
            pricesale: "20.670.000đ",
            image: "https://nguyencongpc.vn/media/product/250-26153-pc-nc-gaming-08--s.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "[ TẶNG MÀN HÌNH ] PC NC GAMING 07 (I5 13600K/ 32GB RAM/ 500G SSD/ RTX 4060)",
            price: "29.990.000đ",
            sale: "-3%",
            pricesale: "28.990.000đ",
            image: "https://nguyencongpc.vn/media/product/250-26037-pc.png",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "[ TẶNG MÀN HÌNH ] Bộ PC AMD Ryzen 7 5800X (Ryzen 7 5800X /Ram 16G/ SSD 500G / VGA RTX 2060 Super 8G)",
            price: "20.990.000đ",
            sale: "-12%",
            pricesale: "18.500.000đ",
            image: "https://nguyencongpc.vn/media/product/250-26037-pc.png",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: " NCPC Sharkoon 04 (Core i5-12400F/ B660M/ 16GB RAM/ 512GB SSD/ RTX 3060/ 650W)",
            price: "23.860.000đ",
            sale: "-16%",
            pricesale: "19.990.000đ",
            image: "https://nguyencongpc.vn/media/product/250-23296-sharkoon-04-sharkoon-04.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },

    ]
}
for (let items4 of products4.data) {

    let laptopbottom1 = document.createElement("div")
    laptopbottom1.classList.add("laptop-bottom1")

    let image = document.createElement("img")
    image.setAttribute("src", items4.image)
    laptopbottom1.appendChild(image)

    let name = document.createElement("h3");
    name.innerText = items4.name.toUpperCase();
    laptopbottom1.appendChild(name);

    let sale = document.createElement("div")
    sale.classList.add("sale")

    let price = document.createElement("p");
    price.innerText = items4.price;
    sale.appendChild(price);

    let sale1 = document.createElement("div")
    sale1.classList.add("sale1")
    let giamgia = document.createElement("h4");
    giamgia.innerText = items4.sale;
    sale1.appendChild(giamgia);
    sale.appendChild(sale1);

    laptopbottom1.appendChild(sale);

    let textmoney = document.createElement("div")
    textmoney.classList.add("text-money")
    let pricesale = document.createElement("span");
    pricesale.innerText = items4.pricesale;
    textmoney.appendChild(pricesale);
    laptopbottom1.appendChild(textmoney);
    
    let note = document.createElement("p")
    laptopbottom1.appendChild(note)


    document.getElementById("products4").appendChild(laptopbottom1);
}


let products5 = {
    data: [
        {
            name: "Màn hình Asus ProArt PA248QV 24.1 inch IPS FHD - Chuyên Đồ Họa",
            price: "5.880.000đ",
            sale: "-8%",
            pricesale: "5.390.000đ",
            image: "https://nguyencongpc.vn/media/product/250-16528-m--n-h--nh-asus-proart-pa248qv.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "Màn Hình VSP IP2407SG /IPS/ 24 Inch/ FHD/ 1ms/ 100Hz ",
            price: "2.400.000đđ",
            sale: "-13%",
            pricesale: "2.090.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25185-m--n-h--nh-vsp-ip2407s-ips.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "Màn hình ASUS TUF Gaming VG279Q3A (27 inch/ Full HD/ 180Hz/ FreeSync/ 1ms GTG)",
            price: "5.100.000đ",
            sale: "-8%",
            pricesale: "4.700.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25387-m--n-h--nh-asus-tuf-gaming-vg279q3a.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "Màn hình MSI G2412 (23.8 inch/FHD/IPS/170Hz/1ms)",
            price: "4.190.000đ",
            sale: "-19%",
            pricesale: "3.390.000đ",
            image: "https://nguyencongpc.vn/media/product/250-24480-4.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: " Màn hình TUF Gaming VG249Q3A (24 inch/ Full HD/ 180Hz/ FreeSync/ 1ms GTG)",
            price: "4.000.000đ",
            sale: "-13%",
            pricesale: "3.480.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25388-m--n-h--nh-tuf-gaming-vg249q3a.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },

    ]
}
for (let items5 of products5.data) {

    let laptopbottom1 = document.createElement("div")
    laptopbottom1.classList.add("laptop-bottom1")

    let image = document.createElement("img")
    image.setAttribute("src", items5.image)
    laptopbottom1.appendChild(image)

    let name = document.createElement("h3");
    name.innerText = items5.name.toUpperCase();
    laptopbottom1.appendChild(name);

    let sale = document.createElement("div")
    sale.classList.add("sale")

    let price = document.createElement("p");
    price.innerText = items5.price;
    sale.appendChild(price);

    let sale1 = document.createElement("div")
    sale1.classList.add("sale1")
    let giamgia = document.createElement("h4");
    giamgia.innerText = items5.sale;
    sale1.appendChild(giamgia);
    sale.appendChild(sale1);

    laptopbottom1.appendChild(sale);

    let textmoney = document.createElement("div")
    textmoney.classList.add("text-money")
    let pricesale = document.createElement("span");
    pricesale.innerText = items5.pricesale;
    textmoney.appendChild(pricesale);
    laptopbottom1.appendChild(textmoney);
    
    let note = document.createElement("p")
    laptopbottom1.appendChild(note)


    document.getElementById("products5").appendChild(laptopbottom1);
}


let products6 = {
    data: [
        {
            name: "CPU Intel Core i7 14700K (Up 5.60 GHz, 20 Nhân 28 Luồng, 33MB Cache, Raptor LakeRefresh)",
            price: "13.590.000đ",
            sale: "-40%",
            pricesale: "7.450.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25342-14700k.png",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "CPU Intel Core i7 13700K (Up To 5.40GHz, 16 Nhân 24 Luồng, 30M Cache, Raptor Lake) ",
            price: "11.590.000đ",
            sale: "-43%",
            pricesale: "6.590.000đ",
            image: "https://nguyencongpc.vn/media/product/250-23426-13700k.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "CPU AMD Ryzen 7 7700X (4,5 GHz Boost 5,4 GHz | 8 Cores / 16 Threads | 32M Cache|...",
            price: "10.990.000đ",
            sale: "-36%",
            pricesale: "6.990.000đ",
            image: "https://nguyencongpc.vn/media/product/250-23317-77.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "CPU Intel Core i5 14600K (Up 5.30 GHz, 14 Nhân 20 Luồng, 24MB Cache, Raptor Lake...",
            price: "8.990.000đ",
            sale: "-15%",
            pricesale: "5.890.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25343-14600k.png",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: " CPU Intel Core i9 14900K (Up 6.0 GHz, 24 Nhân 32 Luồng, 36MB Cache, Raptor Lake...",
            price: "16.490.000đ",
            sale: "-39%",
            pricesale: "10.990.000đ",
            image: "https://nguyencongpc.vn/media/product/250-23428-i9-13900k.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },

    ]
}
for (let items6 of products6.data) {

    let laptopbottom1 = document.createElement("div")
    laptopbottom1.classList.add("laptop-bottom1")

    let image = document.createElement("img")
    image.setAttribute("src", items6.image)
    laptopbottom1.appendChild(image)

    let name = document.createElement("h3");
    name.innerText = items6.name.toUpperCase();
    laptopbottom1.appendChild(name);

    let sale = document.createElement("div")
    sale.classList.add("sale")

    let price = document.createElement("p");
    price.innerText = items6.price;
    sale.appendChild(price);

    let sale1 = document.createElement("div")
    sale1.classList.add("sale1")
    let giamgia = document.createElement("h4");
    giamgia.innerText = items6.sale;
    sale1.appendChild(giamgia);
    sale.appendChild(sale1);

    laptopbottom1.appendChild(sale);

    let textmoney = document.createElement("div")
    textmoney.classList.add("text-money")
    let pricesale = document.createElement("span");
    pricesale.innerText = items6.pricesale;
    textmoney.appendChild(pricesale);
    laptopbottom1.appendChild(textmoney);
    
    let note = document.createElement("p")
    laptopbottom1.appendChild(note)


    document.getElementById("products6").appendChild(laptopbottom1);
}


let products7 = {
    data: [
        {
            name: "VGA Palit GeForce RTX 2060 SUPER DUAL 8GB GDDR6",
            price: "8.000.000đ",
            sale: "-21%",
            pricesale: "6.350.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25666-palit-geforce-rtx-2060-super-dual-8gb-gddr6-1.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "Card đồ họa AsRock Radeon RX 6600 XT Challenger Pro 8GB OC ",
            price: "9.990.000đ",
            sale: "-40%",
            pricesale: "5.990.000đ",
            image: "https://nguyencongpc.vn/media/product/250-20722-card-------h---a-asrock-radeon-rx-6600-xt-challenger-pro-8gb-oc.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "Card màn hình ASUS Dual GeForce RTX 4060 White OC...",
            price: "9.390.000đ",
            sale: "-9%",
            pricesale: "8.590.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25616-125.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "Card màn hình ASUS ProArt GeForce RTX 4060 OC Edition 8GB GDDR6",
            price: "11.990.000đ",
            sale: "-15%",
            pricesale: "9.290.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25673-8gb-gd.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: " Card màn hình OCPC GTX 1660 Super 6GB GDDR6",
            price: "5.990.000đ",
            sale: "-18%",
            pricesale: "4.890.000đ",
            image: "https://nguyencongpc.vn/media/product/250-24512-250-24512-card-man-hinh-ocpc-gtx.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },

    ]
}
for (let items7 of products7.data) {

    let laptopbottom1 = document.createElement("div")
    laptopbottom1.classList.add("laptop-bottom1")

    let image = document.createElement("img")
    image.setAttribute("src", items7.image)
    laptopbottom1.appendChild(image)

    let name = document.createElement("h3");
    name.innerText = items7.name.toUpperCase();
    laptopbottom1.appendChild(name);

    let sale = document.createElement("div")
    sale.classList.add("sale")

    let price = document.createElement("p");
    price.innerText = items7.price;
    sale.appendChild(price);

    let sale1 = document.createElement("div")
    sale1.classList.add("sale1")
    let giamgia = document.createElement("h4");
    giamgia.innerText = items7.sale;
    sale1.appendChild(giamgia);
    sale.appendChild(sale1);

    laptopbottom1.appendChild(sale);

    let textmoney = document.createElement("div")
    textmoney.classList.add("text-money")
    let pricesale = document.createElement("span");
    pricesale.innerText = items7.pricesale;
    textmoney.appendChild(pricesale);
    laptopbottom1.appendChild(textmoney);
    
    let note = document.createElement("p")
    laptopbottom1.appendChild(note)


    document.getElementById("products7").appendChild(laptopbottom1);
} 


let products8 = {
    data: [
        {
            name: "Mainboard ASROCK Z690 Steel Legend DDR5",
            price: "4.990.000đ",
            sale: "-6%",
            pricesale: "4.690.000đ",
            image: "https://nguyencongpc.vn/media/product/250-26095-z690-steel-legendd5m1.png",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "Mainboard MSI B450M PRO VDH MAX (AMD B450, SOCKET AM4, M-ATX, 4 KHE RAM DDR4) ",
            price: "15.990.000đ",
            sale: "-50%",
            pricesale: "1.850.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25555-sp001417sp001417sp001417.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "Mainboard ASRock Z690 Taichi Razer Edition DDR5",
            price: "9.390.000đ",
            sale: "-9%",
            pricesale: "7.990.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25743-razer-edition-ddr5.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "Mainboard MSI Pro H610M-E DDR4 - NK ",
            price: "2.550.000đ",
            sale: "-22%",
            pricesale: "1.980.000đ",
            image: "https://nguyencongpc.vn/media/product/250-24111-msi-pro-h610m-e-ddr4-1.jpeg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: " Mainboard Gigabyte Z790 AORUS ELITE AX (phiên bản 1.0)",
            price: "9.300.000đ",
            sale: "-12%",
            pricesale: "8.190.000đ",
            image: "https://nguyencongpc.vn/media/product/250-23693-mainboard-gigabyte-z790-aorus-elite-ax.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },

    ]
}
for (let items8 of products8.data) {

    let laptopbottom1 = document.createElement("div")
    laptopbottom1.classList.add("laptop-bottom1")

    let image = document.createElement("img")
    image.setAttribute("src", items8.image)
    laptopbottom1.appendChild(image)

    let name = document.createElement("h3");
    name.innerText = items8.name.toUpperCase();
    laptopbottom1.appendChild(name);

    let sale = document.createElement("div")
    sale.classList.add("sale")

    let price = document.createElement("p");
    price.innerText = items8.price;
    sale.appendChild(price);

    let sale1 = document.createElement("div")
    sale1.classList.add("sale1")
    let giamgia = document.createElement("h4");
    giamgia.innerText = items8.sale;
    sale1.appendChild(giamgia);
    sale.appendChild(sale1);

    laptopbottom1.appendChild(sale);

    let textmoney = document.createElement("div")
    textmoney.classList.add("text-money")
    let pricesale = document.createElement("span");
    pricesale.innerText = items8.pricesale;
    textmoney.appendChild(pricesale);
    laptopbottom1.appendChild(textmoney);
    
    let note = document.createElement("p")
    laptopbottom1.appendChild(note)


    document.getElementById("products8").appendChild(laptopbottom1);
} 


let products9 = {
    data: [
        {
            name: "RAM Kingston Fury Beast Black 16GB 4800MHz DDR5 (KF548C38BB-16)",
            price: "1.990.000đ",
            sale: "--32%",
            pricesale: "1.350.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25859-39739_ktc_product_memory_beast_d.png",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "Ram Adata Lancer RGB 32GB (2x16GB) DDR5 5200Mhz ",
            price: "3.590.000đ",
            sale: "-19%",
            pricesale: "2.900.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25852-ax5u5200c3816g-dclarbk.png",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "RAM CORSAIR VENGEANCE RGB 32GB (2x16GB) DDR5 bus 5600MHz Black",
            price: "3.990.000đ",
            sale: "-15%",
            pricesale: "3.390.000đ",
            image: "https://nguyencongpc.vn/media/product/250-26121-47232_ram_corsair_vengeance_rgb.png",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "Ram G.SKILL TRIDEN Z Royal - 16GB (2x8) DDR4 3600MHz  ",
            price: "5.790.000đ",
            sale: "-22%",
            pricesale: "4.650.000đ",
            image: "https://nguyencongpc.vn/media/product/250-5001-sp034194.png",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },
        {
            name: "RAM GEIL POLARIS WHITE RGB DDR5 16G 5200 (GAOSW516GB5200C42SC)",
            price: "1.700.000đ",
            sale: "-18%",
            pricesale: "1.400.000đ",
            image: "https://nguyencongpc.vn/media/product/250-25662-ram-geil-polaris-white-rgb-16g-ddr5-3200.jpg",
            note: "+ Tặng gấu bông Galax trị giá 100.000đ..."
        },

    ]
}
for (let items9 of products9.data) {

    let laptopbottom1 = document.createElement("div")
    laptopbottom1.classList.add("laptop-bottom1")

    let image = document.createElement("img")
    image.setAttribute("src", items9.image)
    laptopbottom1.appendChild(image)

    let name = document.createElement("h3");
    name.innerText = items9.name.toUpperCase();
    laptopbottom1.appendChild(name);

    let sale = document.createElement("div")
    sale.classList.add("sale")

    let price = document.createElement("p");
    price.innerText = items9.price;
    sale.appendChild(price);

    let sale1 = document.createElement("div")
    sale1.classList.add("sale1")
    let giamgia = document.createElement("h4");
    giamgia.innerText = items9.sale;
    sale1.appendChild(giamgia);
    sale.appendChild(sale1);

    laptopbottom1.appendChild(sale);

    let textmoney = document.createElement("div")
    textmoney.classList.add("text-money")
    let pricesale = document.createElement("span");
    pricesale.innerText = items9.pricesale;
    textmoney.appendChild(pricesale);
    laptopbottom1.appendChild(textmoney);
    
    let note = document.createElement("p")
    laptopbottom1.appendChild(note)


    document.getElementById("products9").appendChild(laptopbottom1);
} 


