// ==UserScript==
// @name         SkinifyCMSP
// @namespace    https://github.com/JuniorSchueller/SkinifyCMSP
// @version      2024-08-10
// @description  Cansado do design padrão do CMSP? Use SkinifyCMSP.
// @author       JuniorSchueller
// @match        https://cmspweb.ip.tv/*
// @match        https://cmsp.ip.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cmspweb.ip.tv
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

    const skinUrl = '' // URL da skin

    const skinReq = await fetch(skinUrl);
    const skinData = await skinReq.json();

    function setStyle(identifier, styles) {
        const element = document.querySelector(identifier);
        if (element) {
            Object.assign(element.style, styles);
        }
    }

    function setStyleAll(identifier, styles) {
        const elements = document.querySelectorAll(identifier);
        if (elements) {
            elements.forEach(element => {
                Object.assign(element.style, styles);
            });
        }
    }

    if (location.origin.includes('cmspweb.ip.tv')) {
        if (document.body.textContent.includes('Acesso para alunos')) {
            if (skinData.loginBackground) {
                setStyle('#login', { background: `url(${skinData.loginBackground}) no-repeat center/cover` });
            }
            if (skinData.loginTextColor) {
                setStyle('#login', { color: skinData.loginTextColor });
                setStyle('#login > div.bgw.frm.w100 > div', { color: 'black' });
            }
            if (skinData.loginInputTextColor) {
                setStyleAll('#login > input', { color: skinData.loginInputTextColor });
            }

            if (skinData.noAgreements && skinData.noAgreements === true) {
                setStyle('#login > div.bgw.frm.w100', { display: 'none' });
            }

            if (skinData.borderLogo && skinData.borderLogo === true) {
                let count = 0;
                const borderSet = setInterval(() => {
                    document.querySelectorAll('img.logo').forEach(logo => {
                        logo.src = 'https://i.imgur.com/Ooy29r1.png';
                        count++;

                        if (count >= 30) clearInterval(borderSet);
                    });
                }, 500);
            }

            if (skinData.prettyMenus && skinData.prettyMenus === true) {
                setStyle('#login-select', { borderRadius: '12px', backgroundColor: '#ffffff5c' });
                setStyle('#login-teacher', { borderRadius: '12px', backgroundColor: '#ffffff5c' });
                setStyle('#login-student', { borderRadius: '12px', backgroundColor: '#ffffff5c' });
                setStyle('#login-iptv', { borderRadius: '12px', backgroundColor: '#ffffff5c' });
                setStyleAll('select', { borderRadius: '6px' });
                setStyleAll('#login-student > div > div > a', { color: 'white' });
                setStyleAll('#login-teacher > div > div > a', { color: 'white' });
                setStyleAll('input', { color: 'white' });
                if (skinData.borderLogo && skinData.borderLogo === true) {
                    document.querySelectorAll('.logo').forEach(logo => {
                        logo.src = 'https://i.imgur.com/Ooy29r1.png';
                    });
                }
            }
        } else {
            if (skinData.roomListBackground) {
                let count = 0;
                const bgSet = setInterval(() => {
                    setStyle('#roomList', { background: `url(${skinData.roomListBackground}) no-repeat center/cover` });
                    count++;

                    if (count >= 30) clearInterval(bgSet);
                }, 500);
            }
            if (skinData.roomListTextColor) {
                setStyle('#roomList', { color: skinData.roomListTextColor });
            }
            if (skinData.roomTextColor) {
                setStyleAll('#roomListArea > .sha.bgw.fic > div > .fc.fig.pl5 > div > span', { color: skinData.roomTextColor });
            }
            if (skinData.prettyMenus && skinData.prettyMenus === 'true') {
                setInterval(() => {
                    if (document.querySelector('#roomListArea > .sha.bgw.fic').style.backgroundColor !== '#ffffff5c') {
                        setStyleAll('#roomListArea > .sha.bgw.fic', { backgroundColor: '#ffffff5c', borderTopRightRadius: '12px', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' });
                        setStyleAll('#roomListArea > .sha.bgw.fic > div > div > div > span', { color: 'white' });
                        setStyleAll('#roomListArea > .fic.p0 > div', { backgroundColor: '#ffffff5c', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' });
                        if (skinData.roomTextColor) {
                            setStyleAll('#roomListArea > .sha.bgw.fic > div > .fc.fig.pl5 > div > span', { color: skinData.roomTextColor });
                        }
                        if (skinData.roomCategoryTextColor) {
                            setStyleAll('#roomListArea > .fic.p0 > div', { color: skinData.roomCategoryTextColor });
                        }
                    }
                }, 1000);
            }
            if (skinData.roomAreaBackground) {
                setStyle('#channelArea', { background: `url(${skinData.roomAreaBackground}) no-repeat center/cover` });
                setStyle('#roomDetailB', { background: 'none' });
                setStyle('#roomDetailArea', { background: 'none' });
            }
            if (skinData.roomAreaTopTextColor) {
                setStyle('#roomDetailClose', { color: skinData.roomAreaTopTextColor });
                setStyle('#roomDetailChannel', { color: skinData.roomAreaTopTextColor });
                setStyle('#roomDetailInfo', { color: skinData.roomAreaTopTextColor });
            }
            if (skinData.roomItemImageBackgroundColor) {
                setInterval(() => {
                    try {
                        if (document.querySelector('#roomDetailB > div > div.fic > *').style.backgroundColor !== skinData.roomItemImageBackgroundColor) {
                            document.querySelectorAll('#roomDetailB > div > div.fic > *:nth-child(1)').forEach(image => {
                                image.style.backgroundColor = skinData.roomItemImageBackgroundColor;
                                image.style.borderRadius = '12px';
                            });
                        }
                    } catch {
                        console.log('Something went wrong here :P');
                    }
                }, 1000);
            }
        }
    } else {
        setInterval(() => {
            if (document.body.textContent.includes('Nick') && document.body.textContent.includes('Nome') && document.body.textContent.includes('Autor')) {
                if (skinData.allowCheats || skinData.allowCheats === true) {
                    if (document.querySelector('#root > div:nth-child(2)').textContent.includes('To use cheats you need to install')) {} else {
                        document.querySelector('#root > div:nth-child(2)').insertAdjacentHTML('afterbegin', 'To use cheats you need to install <a style="font-weight: bold;color:white;" href="https://chromewebstore.google.com/detail/disable-content-security/nfopobepahgdajolplgnlbfohogmhkno" target="_blank">Disable Content Security Policy</a><br>If you already have, <span id="activateCheat" style="font-style:underlined;cursor:pointer;font-weight:bold;">click here</span> to activate.');

                        document.querySelector('#activateCheat').addEventListener('click', () => {
                            (function(){const o=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(...a){this.addEventListener('load',function(){if(this.responseURL.startsWith('https://edusp-api.ip.tv/tms/task/')&&this.responseURL.includes('/question/')&&this.responseURL.includes('/correct')){try{const r=JSON.parse(this.responseText);if(r.correct===true)return;if(r.comment){const w=window.open('', '_blank', 'width=600,height=400');w.document.open();w.document.write(`<html><head><title>Comentário</title></head><body>${r.comment}</body></html>`);w.document.close();}}catch(e){console.error('Failed to parse JSON:',e);}}});o.apply(this,a);}})();
                        });
                    }
                }
            } else {
                setStyle('#root > div:nth-child(2)', { background: `url(${skinData.activitiesBackground}) no-repeat center/cover` });
            }
        }, 1000);
    }
})();
