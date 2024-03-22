import Quill from "quill";

const Embed = Quill.import("blots/embed");

class SelectionBlot extends Embed {
  hoverHandler;

  constructor(scroll, node) {
    super(scroll, node);
    this.clickHandler = null;
    this.hoverHandler = null;
    this.mounted = false;
  }

  static create(data) {
    const node = super.create();

    const denotationChar = document.createElement("span");
    denotationChar.className = "ql-selection-denotation-char";
    denotationChar.innerText = data.denotationChar;
    node.appendChild(denotationChar);

    if (typeof this.render === 'function') {
      node.appendChild(this.render(data));
    } else {
      node.innerText += data.value;
    }

    return SelectionBlot.setDataValues(node, data);
  }

  static setDataValues(element, data) {
    const domNode = element;
    Object.keys(data).forEach(key => {
      domNode.dataset[key] = data[key];
    });
    return domNode;
  }

  static value(domNode) {
    return domNode.dataset;
  }

  attach() {
    super.attach();

    if (!this.mounted) {
      this.mounted = true;
      this.clickHandler = this.getClickHandler();
      this.hoverHandler = this.getHoverHandler();

      this.domNode.addEventListener("click", this.clickHandler, false);
      this.domNode.addEventListener("mouseenter", this.hoverHandler, false);
    }
  }

  detach() {
    super.detach();
    this.mounted = false;
    if (this.clickHandler) {
      this.domNode.removeEventListener("click", this.clickHandler);
      this.clickHandler = null;
    }
  }

  getClickHandler() {
    return e => {
      const event = this.buildEvent("selection-clicked", e);
      window.dispatchEvent(event);
      e.preventDefault();
    };
  }

  getHoverHandler() {
    return e => {
      const event = this.buildEvent('selection-hovered', e);
      window.dispatchEvent(event);
      e.preventDefault();
    }
  }

  buildEvent(name, e) {
      const event = new Event(name, {
        bubbles: true,
        cancelable: true
      });
      event.value = Object.assign({}, this.domNode.dataset);
      event.event = e;
      return event;
  }

  hoverHandler;
}

SelectionBlot.blotName = "selection";
SelectionBlot.tagName = "span";
SelectionBlot.className = "selection";

Quill.register("blots/selection", SelectionBlot);
