import { ImageCaption } from "image-caption";
import { Plugin } from "obsidian";

export default class ImageCaptionPlugin extends Plugin {
  async onload() {
    this.registerMarkdownPostProcessor((element, context) => {
      const tokens = element.querySelectorAll("p");

      for (let i = 0; i < tokens.length; i++) {
        const token = tokens.item(i);
        const text = token.innerText.trim();
        const isImageCaption =
          text[0] === ":" &&
          text[1] === ":" &&
          text[text.length - 2] === ":" &&
          text[text.length - 1] === ":";

        if (isImageCaption) {
          context.addChild(new ImageCaption(token, text.slice(2, -2)));
        }
      }
    });
  }
}
