import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FeatureSections from "./components/FeatureSections";
import Quotes from "./components/Quotes";
import Avatar from "./components/Avatar";
import Gambar from "./assets/images/image.jpeg";
const quotes = "Jangan pernah menyerah sebelum kesempatan itu benar-benar sudah hilang";

const data = [{
  name: "Alfa Husni Mubarok", nim: "21120118130064", kelompok: "27", email: "alfahusnimubarok@gmail.com", ttl: "Demak, 07 September 1998",
},
{name: "Ahmad Hufron", nim: "211201181200__", kelompok: "27", email: "________@gmail.com", ttl: "___, ____________",
}];
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Avatar image = {Gambar} avatarname="Alfa Husni Mubarok" avatarnim="21120118130064" />
    <FeatureSections data={data} isNameBold catatan="Kerja Bagus Kawan" />
    <Quotes author="~~Al Hm~~" quotes={quotes} />
  </React.StrictMode>,
  document.getElementById('root')
);

