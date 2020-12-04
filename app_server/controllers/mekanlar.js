var express = require("express");
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render("mekanlar-liste", {
    baslik: "Anasayfa",
    
    sayfaBaslik: {
      siteAd: "Mekan32",
      aciklama: "Isparta civarındaki mekanları keşfedin!",
    },
    footer: "Elif Güler 2020",
    mekanlar: [
      {
        ad: "Starbucks",
        adres: "Centrum Garden",
        puan: "3",
        imkanlar: ["kahve", "çay", "pasta"],
        mesafe: "10km",
      },
      {
        ad: "Gloria Jeans",
        adres: "SDÜ AVM",
        puan: "2",
        imkanlar: ["kahve", "kek", "çay"],
        mesafe: "3km",
      },
      {
        ad:"Kahve Dünyası",
        adres: "İyaş Park AVM",
        puan: "5",
        imkanlar: ['kahve', 'çay', 'pasta'],
        mesafe: "5km",
      },

      {
        ad: "Mado",
        adres: "İyaş Park AVM",
        puan: "4",
        imkanlar: ['kahve', 'çay', 'pasta'],
        mesafe: "1km",
      },
      {
        ad: "Özsüt",
        adres: "İstiklal, İstasyon Cd. No:551, 32300 Isparta Merkez/Isparta",
        puan: "5",
        imkanlar: ['kahve', 'çay', 'pasta'],
        mesafe: "4km",
      },
    ],
  });
};

const mekanBilgisi = function (req, res, next) {
  res.render("mekan-detay", {
    baslik: "Mekan Bilgisi",
    sayfaBaslik: "Starbucks",
    footer: "Elif Güler 2020",
    mekanBilgisi: {
      ad: "Starbucks",
      adres: "Centrum Garden",
      puan: "3",
      imkanlar: ["kahve", "çay", "pasta"],
      koordinatlar: {
        enlem: 37.781885,
        boylam: 30.566034,
      },
      saatler: [
        {
          gunler: "Pazartesi-Cuma",
          acilis: "7:00",
          kapanis: "23:00",
          kapali: false,
        },
        {
          gunler: "Cumartesi",
          acilis: "9:00",
          kapanis: "22:30",
          kapali: false,
        },
        {
          gunler: "Pazar",
          kapali: true,
        },
      ],
      yorumlar: [
        {
          yorumYapan: "Elif Güler",
          puan: "3",
          tarih: "3 Aralık 2020",
          yorumMetni: "Kahveleri çok güzel ama öğrenci bütçesine uygun değil.",
        },
      ],
    },
  });
};

const yorumEkle = function (req, res, next) {
  res.render("yorum-ekle", { title: "Yorum Ekle" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
};
