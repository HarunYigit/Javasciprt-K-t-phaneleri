var responsiveler = [];
var columnlar = [];
var ekranmodu = "";
var xl, lg, md, sm;
var boyutlar = [];

class ekranBoyutu {
    constructor(widthb, widths, func, elsefunc) {
        this.min = widthb;
        this.max = widths;
        this.bool = false;
        this.func = func
        this.elsefunc = elsefunc;
        boyutlar.push(this);
    }

}

function responsive(element, data) {
    Object.keys(data).forEach(function(key) {
        console.log(key, data[key]);
        let yenikey = key;
        if (yenikey == "sm") { yenikey = "0-630" } else if (yenikey == "md") { yenikey = "630-962" } else if (yenikey == "lg") { yenikey = "962-1200" } else if (yenikey = "xl") { yenikey = "1200-9999" }
        if (yenikey.indexOf("-") > -1) {
            if (yenikey.indexOf("*-") > -1) {
                yenikey = yenikey.replace("*-", "0-");
            }
            if (yenikey.indexOf("-*") > -1) {
                yenikey = yenikey.replace("-*", "-9999");
            }


            console.log(yenikey);
            let widthb = parseInt(yenikey.split("-")[0]);
            let widths = parseInt(yenikey.split("-")[1]);
            console.log(widths);
            responsiveler.push({
                "min": widthb,
                "max": widths,
                "element": element,
                "style": data[key]
            });
        }
    });
}

function column(element, columnsindex) {
    element.style.display = "flex";
    element.style.flexWrap = "wrap";
    columnlar.push({
        "element": element,
        "columindex": columnsindex
    })
    console.log(columnlar);

}
var afasd = [];

function ekrandegis() {

}


function ayarla() {
    for (let i = 0; i < boyutlar.length; i++) {
        let boyut = boyutlar[i];
        if (window.innerWidth > boyut.min) {
            if (window.innerWidth < boyut.max) {
                boyutlar[i].bool = true;
                boyutlar[i].func();
            } else {
                boyutlar[i].elsefunc();
            }
        } else {
            boyutlar[i].elsefunc();

        }
    }
    let oncekiekran = ekranmodu;
    if (window.innerWidth < 1201) {
        ekranmodu = "lg";
        lg = true;
        xl = false;
        sm = false;
        md = false;
    }
    if (window.innerWidth < 963) {
        ekranmodu = "md";
        lg = false;
        xl = false;
        sm = false;
        md = true;
    }
    if (window.innerWidth < 697) {
        ekranmodu = "sm";
        lg = false;
        xl = false;
        sm = true;
        md = false;
    }
    if (window.innerWidth > 1200) {
        ekranmodu = "xl";
        lg = false;
        xl = true;
        sm = false;
        md = false;
    }
    if (ekranmodu != oncekiekran && oncekiekran != "") {
        ekrandegis();
    }
    for (let i = 0; i < document.getElementsByClassName("if").length; i++) {
        let element = document.getElementsByClassName("if")[i];
        if (element.className.indexOf("if-ekranmodu-" + ekranmodu) == -1) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }

    }
    responsiveler.forEach(element => {
        if (window.innerWidth > element["min"]) {
            if (window.innerWidth < element["max"]) {
                let item = element["element"];
                Object.keys(element["style"]).forEach(style => {
                    let stil = "";
                    stil = element["style"][style].toString();

                    for (let i = 0; i < stil.split(";").length; i++) {
                        let stil2 = stil.split(";")[i];
                        if (stil2.trim().toLowerCase().startsWith("width")) {
                            let deger = parseInt(stil2.split(":")[1].replace("px", ""));
                            if (deger < 0) {
                                stil = stil.replace(stil2, "width:" + (window.innerWidth + deger) + "px");
                            }
                        }
                        if (stil2.trim().toLowerCase().startsWith("height")) {
                            let deger = parseInt(stil2.split(":")[1].replace("px", ""));
                            if (deger < 0) {
                                stil = stil.replace(stil2, "height:" + (window.innerWidth + deger) + "px");
                            }
                        }
                        if (stil2.trim().toLowerCase().startsWith("left")) {
                            let deger = parseInt(stil2.split(":")[1].replace("px", ""));
                            if (deger < 0) {
                                stil = stil.replace(stil2, "left:" + (window.innerWidth + deger) + "px");
                            }
                        }
                        if (stil2.trim().toLowerCase().startsWith("top")) {
                            let deger = parseInt(stil2.split(":")[1].replace("px", ""));
                            if (deger < 0) {
                                stil = stil.replace(stil2, "top:" + (window.innerHeight + deger) + "px");
                            }
                        }
                    }
                    item.setAttribute(style, stil);
                });

            }
        }
    });
    for (let i = 1; i < 13; i++) {
        let siniflar = ["sm", "md", "lg", "xl"];
        siniflar.forEach(sinif => {
            // i = 1
            let cls = "col-" + sinif + "-item-" + i.toString();
            for (let a = 0; a < document.getElementsByClassName(cls).length; a++) {
                for (let b = 0; b < document.getElementsByClassName(cls)[a].children.length; b++) {
                    if (document.getElementsByClassName(cls)[a].children[b].className.indexOf("col-" + sinif + "-" + i.toString()) == -1) {
                        document.getElementsByClassName(cls)[a].children[b].className = document.getElementsByClassName(cls)[a].children[b].className + " col-" + sinif + "-" + i.toString();
                    }
                }
            }
        });
    }
    let secilielement;
    var konumlar = {
        "sol-ust": "left:5px;top:5px",
        "sol-orta": "left:5px;top:" + ((window.innerHeight / 2) - (secilielement / 2)) + "px",
        "sol-alt": "",
        "orta-ust": "",
        "orta": "",
        "orta-alt": "",
        "sag-ust": "",
        "sag-orta": "",
        "sag-alt": ""
    };
    for (let i = 0; i < document.getElementsByClassName("sol-ust").length; i++) {
        let el = document.getElementsByClassName("sol-ust")[i];
        el.style = el.getAttribute("style") + "left:5px;top:5px";
    }
    for (let i = 0; i < document.getElementsByClassName("sol-orta").length; i++) {
        let el = document.getElementsByClassName("sol-orta")[i];
        el.style = el.getAttribute("style") + "left:5px;top:" + ((window.innerHeight / 2) - (el.offsetHeight / 2)) + "px";
    }
    for (let i = 0; i < document.getElementsByClassName("sol-alt").length; i++) {
        let el = document.getElementsByClassName("sol-alt")[i];
        el.style = el.getAttribute("style") + "left:5px;top:" + ((window.innerHeight) - (el.offsetHeight + 5)) + "px";
    }
    for (let i = 0; i < document.getElementsByClassName("orta-ust").length; i++) {
        let el = document.getElementsByClassName("orta-ust")[i];
        el.style = el.getAttribute("style") + "top:5px;left:" + ((window.innerWidth / 2) - (el.offsetWidth / 2)) + "px";
    }
    for (let i = 0; i < document.getElementsByClassName("orta").length; i++) {
        let el = document.getElementsByClassName("orta")[i];
        el.style = el.getAttribute("style") + "top:" + ((window.innerHeight / 2) - (el.offsetHeight / 2)) + "px;left:" + ((window.innerWidth / 2) - (el.offsetWidth / 2)) + "px";
    }
    for (let i = 0; i < document.getElementsByClassName("orta-alt").length; i++) {
        let el = document.getElementsByClassName("orta-alt")[i];
        el.style = el.getAttribute("style") + "top:" + ((window.innerHeight) - (el.offsetHeight + 5)) + "px;left:" + ((window.innerWidth / 2) - (el.offsetWidth / 2)) + "px";
    }
    for (let i = 0; i < document.getElementsByClassName("sag-ust").length; i++) {
        let el = document.getElementsByClassName("sag-ust")[i];
        el.style = el.getAttribute("style") + "top:5px;left:" + ((window.innerWidth) - (el.offsetWidth + 5)) + "px";
    }
    for (let i = 0; i < document.getElementsByClassName("sag-orta").length; i++) {
        let el = document.getElementsByClassName("sag-orta")[i];
        el.style = el.getAttribute("style") + "top:" + ((window.innerHeight / 2) - (el.offsetHeight / 2)) + "px;left:" + ((window.innerWidth) - (el.offsetWidth + 5)) + "px";
    }
    for (let i = 0; i < document.getElementsByClassName("sag-alt").length; i++) {
        let el = document.getElementsByClassName("sag-alt")[i];
        el.style = el.getAttribute("style") + "top:" + ((window.innerHeight) - (el.offsetHeight + 5)) + "px;left:" + ((window.innerWidth) - (el.offsetWidth + 5)) + "px";
    }

}
window.onresize = function() {
    ayarla();
}
setTimeout(() => {
    ayarla();
}, 1000);
setTimeout(() => {
    columnlar.forEach(element => {
        Object.keys(element["columindex"]).forEach(function(key) {
            let col = parseInt(element["columindex"][key]);
            if (col == 1) {
                col = 12;
            } else if (col == 2) {
                col = 6;
            } else if (col == 3) {
                col = 4;
            } else if (col == 4) { col = 3 } else if (col == 5) { col = 2 } else if (col == 6) { col = 2 } else { col = 1 }
            let el = element["element"];
            el.clasName = "row";
            for (let i = 0; i < el.children.length; i++) {
                el.children[i].className = el.children[i].className + " col-" + key + "-" + col.toString();
            }

        });

    });
}, 20);

function ekranboyutu(aralik) {
    let doncek = false
    if (aralik + 0 == aralik) {
        if (window.innerWidth == aralik) {
            doncek = true;
        }
    } else {
        Object.keys(aralik).forEach(function(key) {
            let widthb = key;
            let widths = aralik[key];
            if (window.innerWidth > widthb) {
                if (window.innerWidth < widths) {
                    doncek = true;
                }
            }
        });
    }
    return doncek;
}
setTimeout(() => {
    for (let i = 0; i < document.getElementsByClassName("col-items").length; i++) {
        let el = document.getElementsByClassName("col-items")[i];
        let collar = el.getAttribute("coldata").split(" ");
        let extra = el.getAttribute("extra");
        let item = el.getAttribute("itemdata");
        let eklencekler = [];
        let divler = [];
        for (let c = 0; c < el.children.length; c++) {
            let children = el.children[c];

            var div = document.createElement("div");
            let klas = "";
            for (let a = 0; a < collar.length; a++) {
                klas += "col-" + collar[a] + " ";
            }
            if (extra != null) {
                klas += extra;
            }
            div.className = klas;
            divler.push(div);
            eklencekler.push(children);
        }
        console.log(item);
        if (item != null) {
            for (let a = 0; a < item.split(";").length; a++) {
                let index = parseInt(item.split(";")[a].split(":")[0]);
                if (isNaN(index) == false) {
                    divler[index].className = divler[index].className + " " + item.split(";")[a].split(":")[1];
                }
            }
        }
        for (let a = 0; a < divler.length; a++) {
            let div = divler[a];
            let eklencek = eklencekler[a];
            div.appendChild(eklencek);
            el.appendChild(div);
        }
    }
}, 300);