!function(){"use strict";var t=[{type:"visa",starts:[4],length:16},{type:"mir",starts:[2],length:16}],e=[{type:"mastercard",starts:[51,52,53,54,55],length:16},{type:"americanExpress",starts:[34,37],length:15},{type:"jcb",starts:[35],length:16},{type:"discover",starts:[60,62,65],length:16},{type:"diners",starts:[30,36,38,39],length:14}];(new class{constructor(){this.elementTypeCart=null,this.validity=!1,this.typeCart=null,this.initialDigits=null,this.container=document.querySelector(".container"),this.form=this.container.querySelector(".validate-form"),this.cards=this.container.querySelectorAll(".card"),this.input=this.form.querySelector(".input-card-number"),this.button=this.form.querySelector(".validate-button"),this.result=this.container.querySelector(".result")}init(){this.elementTypeCart=null,this.form.addEventListener("submit",(t=>this.onSubmit(t))),this.button.addEventListener("click",(t=>this.onSubmit(t))),this.input.addEventListener("input",(t=>this.onInput(t)))}onSubmit(t){t.preventDefault(),"Enter"!==t.key&&"click"!==t.type||(""===this.input.value?this.result.textContent="Номер не введен. Введите пожалуйста номер.":(this.number=this.input.value.trim(),"number"!=typeof Number(this.number)&&(this.result.textContent="Неправельный тип данных!"),null!==this.elementTypeCart&&this.validityCheck(this.number)))}onInput(t){t.preventDefault(),this.typeCart=null,this.elementTypeCart=null,this.input.classList.contains("valid")&&this.input.classList.remove("valid"),this.input.classList.contains("notValid")&&this.input.classList.remove("notValid"),"deleteContentBackward"===t.inputType&&(""===this.input.value||this.input.value.length<2?(this.removeStylesElements(),this.result.textContent="Введите пожалуйста номер!"):this.result.textContent="Такой тип карты найден! Проверте его на валидность!"),"insertFromPaste"===t.inputType&&(this.removeStylesElements(),this.selectioObjectn(this.input.value)),this.input.value.length>=2&&this.selectioObjectn(this.input.value)}selectioObjectn(i){this.number=i.trim(),"number"!=typeof Number(this.number)&&(this.result.textContent="Неправельный тип данных!"),this.initialDigits=Number(this.number.substring(0,1)),2===this.initialDigits||4===this.initialDigits?this.elementTypeCart=this.cardTypeCheck(t,this.initialDigits):(this.initialDigits=Number(this.number.substring(0,2)),this.elementTypeCart=this.cardTypeCheck(e,this.initialDigits))}cardTypeCheck(t,e){const i=function(t,e){let i=null;return t.forEach((t=>{!0===t.starts.includes(e)&&(i=t)})),i}(t,e);i&&(this.typeCart=i.type,this.result.textContent="Такой тип карты найден! Проверте его на валидность!",this.addStylesElements()),null==i&&(this.result.textContent="Такой тип карты не найден!")}validityCheck(t){const e=String(t).length;if((14===e||15===e||16===e)&&(this.validity=function(t){let e,i=null;for(let s=t.length-1;s>0;s-=1)(t.length-s)%2?(e=2*Number(t[s-1]),e>9&&(e-=9)):e=Number(t[s-1]),i+=e;return i%10+Number(t[t.length-1])===10}(t),this.validity))return this.result.textContent="Карта валидна",void this.input.classList.add("valid");this.result.textContent="Карта не валидна!",this.input.classList.add("notValid")}addStylesElements(){null!==this.typeCart&&this.cards.forEach((t=>{t.classList.contains(this.typeCart)?t.classList.add("active"):t.classList.add("notActive")}))}removeStylesElements(){null===this.typeCart&&this.cards.forEach((t=>{t.classList.remove("active"),t.classList.remove("notActive")}))}}).init()}();