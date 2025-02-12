import { ImageCaption } from "image-caption";
import { Plugin } from "obsidian";

export default class ImageCaptionPlugin extends Plugin {
  async onload() {
    this.registerMarkdownPostProcessor((element, context) => {
      let xpath = '//p/text()[string-length() > 4][starts-with(., "::")][substring(., string-length(.) - string-length("::") + 1) = "::"]';
      let els = document.evaluate(xpath, element);
      const tokens: Array<HTMLParagraphElement> = [];
      for (let i = 0, length = els.snapshotLength; i < length; i++) {
        tokens.push(els.snapshotItem(i) as HTMLParagraphElement);
      }

      for (let token of tokens) {
        const text = token.innerText.trim();
        context.addChild(new ImageCaption(token, text.slice(2, -2)));
      }
    });
  }
}
