function parcala(lis, miktar) {
    miktar = parseInt(lis.length / miktar);
    let yenilist = [];
    for (let i = 0; i < lis.length; i += miktar) {
        let yelst = [];
        for (let a = i; a < i + miktar; a++) {
            if (lis[a] != undefined) {
                yelst.push(lis[a]);
            }
        }
        yenilist.push(yelst);
    }
    return yenilist;
}
class sort_list_1 {
    constructor(lis, to) {
        let bitis = false;
        let step = 0;
        let aynilar = [];
        let aynisi = 0;

        let yap = true;
        for (let i = 0; i < lis.length / 3; i++) {
            if (aynilar.indexOf(lis[i]) == -1) {
                aynilar.push(lis[i]);
            } else {
                aynisi += 1;
            }
        }
        if (aynisi => lis.length / 6) {
            yap = false
        }
        console.log(yap, aynisi, aynilar);
        if (to == ">") {
            let baslangic = 0;
            while (bitis == false) {
                let degisim = 0;
                for (let i = baslangic; i < lis.length; i++) {
                    let sonraki = lis[i + 1];
                    let s = lis[i];
                    if (sonraki > s) {
                        lis[i + 1] = s;
                        lis[i] = sonraki;
                        degisim = 1;
                    }
                    step += 1;
                }
                if (degisim == 0) {
                    if (i > lis.length / 3) {
                        if (yap == true) {
                            baslangic = i;
                        }
                    }
                }
                if (degisim == 0) {
                    bitis = true;
                }
            }
        } else {
            let baslangic = 0;
            while (bitis == false) {
                let degisim = 0;
                for (let i = baslangic; i < lis.length; i++) {
                    let sonraki = lis[i + 1];
                    let s = lis[i];
                    if (sonraki < s) {
                        lis[i + 1] = s;
                        lis[i] = sonraki;
                        degisim = 1;
                    }
                    if (degisim == 0) {
                        if (i > lis.length / 3) {
                            if (yap == true) {
                                baslangic = i;
                            }
                        }
                    }
                    step += 1;
                }
                if (degisim == 0) {
                    bitis = true;
                }
            }
        }
        if (step < lis.length) {
            step = -1;
        }
        this.step = step;
        this.sort_list = lis;
        return this;
    }
}
class sort_list_2 {
    constructor(lis, to) {
        let step = 0;
        if (to == ">") {
            for (let g = 5; g > 0; g--) {
                let siralanmis = [];
                let parca = parcala(lis, g);
                for (let i = 0; i < parca.length; i++) {
                    let bitis1 = false;
                    let list = parca[i];
                    while (bitis1 == false) {
                        let degisim = 0;
                        for (let a = 0; a < list.length; a++) {
                            let sonraki = list[a + 1];
                            let s = list[a];
                            if (sonraki > s) {
                                list[a + 1] = s;
                                list[a] = sonraki;
                                degisim = 1;
                            }
                            step += 1;
                        }
                        if (degisim == 0) {
                            siralanmis.push(list);
                            bitis1 = true;
                        }
                    }
                }

                lis = [];
                for (let i = 0; i < siralanmis.length; i++) {
                    for (let a = 0; a < siralanmis[i].length; a++) {
                        lis.push(siralanmis[i][a]);
                    }
                }

            }
        } else {
            for (let g = 5; g > 0; g--) {
                let siralanmis = [];
                let parca = parcala(lis, g);
                for (let i = 0; i < parca.length; i++) {
                    let bitis1 = false;
                    let list = parca[i];
                    while (bitis1 == false) {
                        let degisim = 0;
                        for (let a = 0; a < list.length; a++) {
                            let sonraki = list[a + 1];
                            let s = list[a];
                            if (sonraki < s) {
                                list[a + 1] = s;
                                list[a] = sonraki;
                                degisim = 1;
                            }
                            step += 1;
                        }
                        if (degisim == 0) {
                            siralanmis.push(list);
                            bitis1 = true;
                        }
                    }
                }

                lis = [];
                for (let i = 0; i < siralanmis.length; i++) {
                    for (let a = 0; a < siralanmis[i].length; a++) {
                        lis.push(siralanmis[i][a]);
                    }
                }
            }
        }
        if (step < lis.length) {
            step = -1;
        }
        this.step = step;
        this.sort_list = lis;
        return this;
    }
}
class sort_list_3 {
    constructor(lis, to) {
        let artis = lis.length;
        let basamak = "1";
        for (let i = 0; i < lis.length.toString().length - 1; i++) {
            basamak += "0";
        }
        artis = lis.length / parseInt(basamak);
        let bitis = false;
        let bitis_ = 2;
        let step = 0;
        if (to == ">") {
            while (bitis == false) {
                let degisim = 0;
                if (bitis_ > lis.length - 1) {
                    bitis_ = lis.length;
                }
                for (let i = baslangic; i < bitis_; i++) {
                    let sonraki = lis[i + 1];
                    let s = lis[i];
                    if (sonraki > s) {
                        lis[i + 1] = s;
                        lis[i] = sonraki;
                        degisim = 1;
                    }
                    step += 1;
                }
                if (degisim == 0) {
                    if (i > lis.length / 3) {
                        baslangic = i;
                    }
                }
                if (degisim == 0) {
                    bitis = true;
                }
                bitis_ += artis;
            }
        } else {
            let baslangic = 0;
            while (bitis == false) {
                let degisim = 0;
                if (bitis_ > lis.length - 1) {
                    bitis_ = lis.length;
                }
                for (let i = baslangic; i < bitis_; i++) {
                    let sonraki = lis[i + 1];
                    let s = lis[i];
                    if (sonraki < s) {
                        lis[i + 1] = s;
                        lis[i] = sonraki;
                        degisim = 1;
                    }
                    if (degisim == 0) {
                        if (i > lis.length / 3) {
                            baslangic = i;
                        }
                    }
                    step += 1;
                }
                if (degisim == 0) {
                    bitis = true;
                }
                bitis_ += artis;
            }
        }
        if (step < lis.length) {
            step = -1;
        }
        this.step = step;
        this.sort_list = lis;
        this.increase = artis;
        return this;

    }
}
class integer_array {
    constructor(array) {
        this.array = array;
    }
    sort() {
        let sor = new sort_list_1(this.array);
        return sor.sort_list;
    }
    remove(remov, remov2) {
        if (remov2 == undefined) {
            let yeni = [];
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i] != remov) {
                    yeni.push(this.array[i]);
                }
            }
            this.array = yeni;
            return yeni;
        } else {
            if (typeof remov2 == "string") {
                if (remov2 == "<") {
                    let yeni = [];
                    for (let i = 0; i < this.array.length; i++) {
                        if (this.array[i] < remov) {
                            yeni.push(this.array[i]);
                        }
                    }
                    this.array = yeni;
                    return yeni;
                } else {
                    let yeni = [];
                    for (let i = 0; i < this.array.length; i++) {
                        if (this.array[i] > remov) {
                            yeni.push(this.array[i]);
                        }
                    }
                    this.array = yeni;
                    return yeni;
                }
            } else {
                let yeni = [];
                for (let i = 0; i < this.array.length; i++) {
                    if (this.array[i] > remov) {
                        if (this.array[i] < remov2) {
                            yeni.push(this.array[i]);
                        }
                    }
                }
                this.array = yeni;
                return yeni;
            }
        }
    }
    replace(rep1, rep2) {
        if (typeof rep1 == "object") {
            let yeni = [];
            for (let i = 0; i < this.array.length; i++) {
                if (rep1.indexOf(this.array[i]) == -1) {
                    yeni.push(this.array[i]);
                } else {
                    yeni.push(rep2);
                }
            }
            this.array = yeni;
            return yeni;
        } else if (typeof rep1 == "string") {
            if (rep1.startsWith(">")) {
                let yeni = [];
                let sayi = parseFloat(rep1.replace(">", "").trim());
                for (let i = 0; i < this.array.length; i++) {
                    if (this.array[i] < sayi) {
                        yeni.push(this.array[i]);
                    } else {
                        yeni.push(rep2);
                    }
                }
                this.array = yeni;
                return yeni;
            }
            if (rep1.startsWith("<")) {
                let yeni = [];
                let sayi = parseFloat(rep1.replace("<", "").trim());
                for (let i = 0; i < this.array.length; i++) {
                    if (this.array[i] > sayi) {
                        yeni.push(this.array[i]);
                    } else {
                        yeni.push(rep2);
                    }
                }
                this.array = yeni;
                return yeni;
            }
            return undefined;
        } else {
            let yeni = [];
            for (let i = 0; i < this.array.length; i++) {
                if (this.array[i] != rep1) {
                    yeni.push(this.array[i]);
                } else {
                    yeni.push(rep2);
                }
            }
            this.array = yeni;
            return yeni;
        }
    }
}