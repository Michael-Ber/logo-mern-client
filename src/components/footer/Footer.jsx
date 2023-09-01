import React from 'react';
import './footer.scss';

import linesImg from "../../assets/icons/main/delivery/lines.png";
import pekImg from "../../assets/icons/main/delivery/pek.png";
import autotradingImg from "../../assets/icons/main/delivery/autotrading.png";
import rzdImg from "../../assets/icons/main/delivery/rzd.png";
import kitImg from "../../assets/icons/main/delivery/kit.png";
import baikalImg from "../../assets/icons/main/delivery/baikal.png";
import vizaIcon from "../../assets/icons/main/payment/viza.png";
import mastercardIcon from "../../assets/icons/main/payment/mastercard.png";
import webmoneyIcon from "../../assets/icons/main/payment/webmoney.png";
import yandexmoneyIcon from "../../assets/icons/main/payment/yandexmoney.png";
import qiwiIcon from "../../assets/icons/main/payment/qiwi.png";
import vkblock from "../../assets/img/main/vk_block.jpg";
import vkIcon from "../../assets/icons/main/socials/vk.png";
import facebookIcon from "../../assets/icons/main/socials/facebook.png";
import instagramIcon from "../../assets/icons/main/socials/instagram.png";
import okIcon from "../../assets/icons/main/socials/ok.png";



export const Footer = () => {
  return (
    <footer className="footer">
            <div className="footer__main">
                <div className="footer__left">
                    <div className="footer__delivery">
                        <div className="footer__logo-tel">
                            <div className="footer__logo">
                                <span className="logo__text">logo</span>
                                <span className="logo__text">спортивный магазин</span>
                            </div>
                            <ul className="footer__tel-list">
                                <li className="footer__tel-item">
                                    <a href="#" className="footer__tel-link">8-499-123-45-67</a>
                                </li> 
                                <li className="footer__tel-item">
                                    <a href="#" className="footer__tel-link">8-800-123-45-67</a>
                                </li> 
                            </ul>
                        </div>
                        <div className="footer__transport">
                            <div className="footer__transport-title">
                                Доставка транспортными компаниями:
                            </div>
                            <ul className="footer__transport-list">
                                <li className="footer__transport-item">
                                    <img src={linesImg} alt="business_lines"/>
                                </li>
                                <li className="footer__transport-item">
                                    <img src={pekImg} alt="pek"/>
                                </li>
                                <li className="footer__transport-item">
                                    <img src={autotradingImg} alt="autotrading"/>
                                </li>
                                <li className="footer__transport-item">
                                    <img src={rzdImg} alt="train"/>
                                </li>
                                <li className="footer__transport-item">
                                    <img src={kitImg} alt="kit"/>
                                </li>
                                <li className="footer__transport-item">
                                    <img src={baikalImg} alt="baikal_service"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="footer__payment-list">
                        <li className="footer__payment-item">
                            <img src={vizaIcon} alt="visa"/>
                        </li>
                        <li className="footer__payment-item">
                            <img src={mastercardIcon} alt="mastercard"/>
                        </li>
                        <li className="footer__payment-item">
                            <img src={webmoneyIcon} alt="webmoney"/>
                        </li>
                        <li className="footer__payment-item">
                            <img src={yandexmoneyIcon} alt="yandexmoney"/>
                        </li>
                        <li className="footer__payment-item">
                            <img src={qiwiIcon} alt="qiwi"/>
                        </li>
                    </ul>
                </div>
                <div className="footer__right">
                    <div className="footer__vk">
                        <img src={vkblock} alt="vk"/>
                    </div>
                    <div className="footer__vk">
                        <img src={vkblock} alt="vk"/>
                    </div>
                </div>
            </div>
            <div className="footer__links">
                <span className="footer__rights">&#169; 2015 Все права защищены</span>
                <ul className="footer__socials">
                    <li className="footer__socials-item">
                        <a href="#">
                            <img src={vkIcon} alt="vk"/>
                        </a> 
                    </li>
                    <li className="footer__socials-item">
                        <a href="#">
                            <img src={facebookIcon} alt="facebook"/>
                        </a> 
                    </li>
                    <li className="footer__socials-item">
                        <a href="#">
                            <img src={instagramIcon} alt="instagram"/>
                        </a> 
                    </li>
                    <li className="footer__socials-item">
                        <a href="#">
                            <img src={okIcon} alt="odnoklassniki"/>
                        </a> 
                    </li>
                </ul>
            </div>
    </footer>
  )
}
