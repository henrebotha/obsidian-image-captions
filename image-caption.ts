import { MarkdownRenderChild } from "obsidian";

export class ImageCaption extends MarkdownRenderChild {
  text: string;

  constructor(containerEl: HTMLElement, text: string) {
    super(containerEl);
    this.text = text;
  }

  onload() {
    const imageCaptionEl = this.containerEl.createDiv({
      text: this.text,
      attr: {
        class: "image-caption"
      }
    });
    this.containerEl.replaceWith(imageCaptionEl);
  }
}
