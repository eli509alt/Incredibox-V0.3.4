/* App version : 0.3.4 - Creation date : 2018-04-05 */
var app = new function() {
    this.name = "Little Miss", this.version = "2", this.date = "2012", this.folder = "asset-v2/", this.looptime = 4780, this.totalframe = 232, this.nbpolo = 7, this.nbloopbonus = 4, this.bonusloopA = !0, this.recmaxloop = 38, this.recminloop = 5, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.sndtype = "mp3", this.sndmetronome = "-metronome.wav", this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto@2x.png", this.col0 = "#EB4B4B", this.col1 = "#C32D2D", this.col2 = "#9B2323", this.col3 = "#691E1E", this.col4 = "#371919", this.animearray = [{
        name: "beat1_boom",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "beat2_kashi",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "beat3_paomeu",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "beat4_ptttpeu",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "beat5_slupttt",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "effet1_poulll",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "effet2_tucati",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "effet3_tuilopta",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "effet4_tululou",
        color: "828282",
        uniqsnd: !0
    }, {
        name: "effet5_tumttt",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "melo1_nananana",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "melo2_pelulu",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "melo3_siffle",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "melo4_tatouti",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "melo5_tvutvutvu",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "coeur1_oaaah",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "coeur2_cougou",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "coeur3_porticoeur",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "voix1_isit",
        color: "828282",
        uniqsnd: !1
    }, {
        name: "voix2_uare",
        color: "828282",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "Are you satisfy",
        src: "v2-satisfy.mp4",
        code: "1,4,6,9,12",
        sound: "bonus-satisfy." + this.sndtype,
        aspire: "aspire." + this.sndtype
    }, {
        name: "Little Miss",
        src: "v2-miss.mp4",
        code: "5,6,7,13,15",
        sound: "bonus-miss." + this.sndtype,
        aspire: "aspire." + this.sndtype
    }, {
        name: "Why this world",
        src: "v2-world.mp4",
        code: "6,8,9,14,18",
        sound: "bonus-world." + this.sndtype,
        aspire: "aspire." + this.sndtype
    }];
    for (var a = 0, b = this.animearray.length; a < b; a++) {
        var c = this.animearray[a].name;
        this.animearray[a].soundA = c + "_a." + this.sndtype, this.animearray[a].soundB = this.animearray[a].uniqsnd ? c + "_a." + this.sndtype : c + "_b." + this.sndtype, this.animearray[a].anime = c + "-sprite.png", this.animearray[a].animeData = c + ".json"
    }
};
