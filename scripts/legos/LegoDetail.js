

import { invertColor } from './../helpers.js';
import { allLetterCase } from './../helpers.js';
import {checkYears} from "../helpers.js";
export const LegoDetail = (brick) => {
  const link = brick.ColorstreamLinkImage;
let manYears =checkYears (brick);
  let block = `<section style="background-color:#${brick.ColorHex}">
                <div class="blockname">
                  ${link ? `<div><img src="./images/legoblock.png"></div>` : ""}
                  <h3>Name: ${allLetterCase(brick.LegoName)}</h3>
                </div>
                <div> ${brick.Notes}</div>
                <div class="block-years">Manufactured ${manYears} ${brick.YearFrom} - ${brick.YearTo}</div>
                <div> Material: ${brick.Material}</div>
              </section>`;
  

  if (link) {
    //true? wrap the block in an a tag
    return `
    <article class="block-wrapper">
      <a href="${link}" target="_blank" style="color:#${invertColor(brick.ColorHex)}">
				${block}
			</a>
    </article>`
  } else {
    //false? return the block
    return `
    <article class="block-wrapper">
      ${block}
    </article>`
  }
}

