import Quill from 'quill';

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var Keys = {
  TAB: 'Tab',
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown'
};

function attachDataValues(element, data, dataAttributes) {
  var mention = element;
  Object.keys(data).forEach(function (key) {
    if (dataAttributes.indexOf(key) > -1) {
      mention.dataset[key] = data[key];
    } else {
      delete mention.dataset[key];
    }
  });
  return mention;
}
function setInnerContent(element, value) {
  if (value === null) return;
  if (_typeof(value) === "object") element.appendChild(value);else element.innerText = value;
}
function getMentionCharIndex(text, mentionDenotationChars, isolateChar, allowInlineMentionChar) {
  return mentionDenotationChars.reduce(function (prev, mentionChar) {
    var mentionCharIndex;
    if (isolateChar && allowInlineMentionChar) {
      var regex = new RegExp("^".concat(mentionChar, "|\\s").concat(mentionChar), 'g');
      var lastMatch = (text.match(regex) || []).pop();
      if (!lastMatch) {
        return {
          mentionChar: prev.mentionChar,
          mentionCharIndex: prev.mentionCharIndex
        };
      }
      mentionCharIndex = lastMatch !== mentionChar ? text.lastIndexOf(lastMatch) + lastMatch.length - mentionChar.length : 0;
    } else {
      mentionCharIndex = text.lastIndexOf(mentionChar);
    }
    if (mentionCharIndex > prev.mentionCharIndex) {
      return {
        mentionChar: mentionChar,
        mentionCharIndex: mentionCharIndex
      };
    }
    return {
      mentionChar: prev.mentionChar,
      mentionCharIndex: prev.mentionCharIndex
    };
  }, {
    mentionChar: null,
    mentionCharIndex: -1
  });
}
function hasValidChars(text, allowedChars) {
  return allowedChars.test(text);
}
function hasValidMentionCharIndex(mentionCharIndex, text, isolateChar, textPrefix) {
  if (mentionCharIndex === -1) {
    return false;
  }
  if (!isolateChar) {
    return true;
  }
  var mentionPrefix = mentionCharIndex ? text[mentionCharIndex - 1] : textPrefix;
  return !mentionPrefix || !!mentionPrefix.match(/\s/);
}

var Embed = Quill["import"]("blots/embed");
var SelectionBlot = /*#__PURE__*/function (_Embed) {
  _inherits(SelectionBlot, _Embed);
  var _super = _createSuper(SelectionBlot);
  function SelectionBlot(scroll, node) {
    var _this;
    _classCallCheck(this, SelectionBlot);
    _this = _super.call(this, scroll, node);
    _defineProperty(_assertThisInitialized(_this), "hoverHandler", void 0);
    _defineProperty(_assertThisInitialized(_this), "hoverHandler", void 0);
    _this.clickHandler = null;
    _this.hoverHandler = null;
    _this.mounted = false;
    return _this;
  }
  _createClass(SelectionBlot, [{
    key: "attach",
    value: function attach() {
      _get(_getPrototypeOf(SelectionBlot.prototype), "attach", this).call(this);
      if (!this.mounted) {
        this.mounted = true;
        this.clickHandler = this.getClickHandler();
        this.hoverHandler = this.getHoverHandler();
        this.domNode.addEventListener("click", this.clickHandler, false);
        this.domNode.addEventListener("mouseenter", this.hoverHandler, false);
      }
    }
  }, {
    key: "detach",
    value: function detach() {
      _get(_getPrototypeOf(SelectionBlot.prototype), "detach", this).call(this);
      this.mounted = false;
      if (this.clickHandler) {
        this.domNode.removeEventListener("click", this.clickHandler);
        this.clickHandler = null;
      }
    }
  }, {
    key: "getClickHandler",
    value: function getClickHandler() {
      var _this2 = this;
      return function (e) {
        var event = _this2.buildEvent("selection-clicked", e);
        window.dispatchEvent(event);
        e.preventDefault();
      };
    }
  }, {
    key: "getHoverHandler",
    value: function getHoverHandler() {
      var _this3 = this;
      return function (e) {
        var event = _this3.buildEvent('selection-hovered', e);
        window.dispatchEvent(event);
        e.preventDefault();
      };
    }
  }, {
    key: "buildEvent",
    value: function buildEvent(name, e) {
      var event = new Event(name, {
        bubbles: true,
        cancelable: true
      });
      event.value = _extends({}, this.domNode.dataset);
      event.event = e;
      return event;
    }
  }], [{
    key: "create",
    value: function create(data) {
      var node = _get(_getPrototypeOf(SelectionBlot), "create", this).call(this);
      var denotationChar = document.createElement("span");
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
  }, {
    key: "setDataValues",
    value: function setDataValues(element, data) {
      var domNode = element;
      Object.keys(data).forEach(function (key) {
        domNode.dataset[key] = data[key];
      });
      return domNode;
    }
  }, {
    key: "value",
    value: function value(domNode) {
      return domNode.dataset;
    }
  }]);
  return SelectionBlot;
}(Embed);
SelectionBlot.blotName = "selection";
SelectionBlot.tagName = "span";
SelectionBlot.className = "selection";
Quill.register("blots/selection", SelectionBlot);

var Mention = /*#__PURE__*/function () {
  function Mention(quill, options) {
    var _this = this;
    _classCallCheck(this, Mention);
    this.isOpen = false;
    this.itemIndex = 0;
    this.mentionCharPos = null;
    this.cursorPos = null;
    this.values = [];
    this.suspendMouseEnter = false;
    //this token is an object that may contains one key "abandoned", set to
    //true when the previous source call should be ignored in favor or a
    //more recent execution.  This token will be null unless a source call
    //is in progress.
    this.existingSourceExecutionToken = null;
    this.quill = quill;
    this.options = {
      source: null,
      renderItem: function renderItem(_ref) {
        var value = _ref.value;
        return "".concat(value);
      },
      renderLoading: function renderLoading() {
        return null;
      },
      onSelect: function onSelect(item, insertItem) {
        insertItem(item);
      },
      mentionDenotationChars: ['@'],
      showDenotationChar: true,
      allowedChars: /^[a-zA-Z0-9_]*$/,
      minChars: 0,
      maxChars: 31,
      offsetTop: 2,
      offsetLeft: 0,
      isolateCharacter: false,
      allowInlineMentionChar: false,
      fixMentionsToQuill: false,
      positioningStrategy: 'normal',
      defaultMenuOrientation: 'bottom',
      blotName: 'selection',
      dataAttributes: ['id', 'value', 'denotationChar', 'link', 'target', 'disabled'],
      linkTarget: '_blank',
      onOpen: function onOpen() {
        return true;
      },
      onBeforeClose: function onBeforeClose() {
        return true;
      },
      onClose: function onClose() {
        return true;
      },
      // Style options
      listItemClass: 'ql-selection-list-item',
      selectionContainerClass: 'ql-selection-list-container',
      selectionListClass: 'ql-selection-list',
      spaceAfterInsert: false,
      selectKeys: [Keys.ENTER]
    };
    _extends(this.options, options, {
      dataAttributes: Array.isArray(options.dataAttributes) ? this.options.dataAttributes.concat(options.dataAttributes) : this.options.dataAttributes
    });

    //Bind all option-functions so they have a reasonable context
    for (var o in this.options) {
      if (typeof this.options[o] === 'function') {
        this.options[o] = this.options[o].bind(this);
      }
    }

    //create mention container
    this.mentionContainer = document.createElement('div');
    this.mentionContainer.className = this.options.selectionContainerClass ? this.options.selectionContainerClass : '';
    this.mentionContainer.style.cssText = 'display: none; position: absolute;';
    this.mentionContainer.onmousemove = this.onContainerMouseMove.bind(this);
    if (this.options.fixMentionsToQuill) {
      this.mentionContainer.style.width = 'auto';
    }
    this.spanEl = document.createElement('span');
    var input = document.createElement('input');
    input.classList.add('ql-input-filter');
    var addBtn = document.createElement('button');
    addBtn.innerHTML = 'Add';
    addBtn.onclick = function (e) {
      console.log(input.value);
      _this.insertItem({
        id: _this.options.inputId,
        value: input.value,
        denotationChar: ''
      });
    };
    input.onblur = function () {
      _this.hideMentionList();
    };
    input.oninput = function (e) {
      e.stopImmediatePropagation();
      console.log(input.value);
      _this.options.source(input.value, function (data, searchTerm) {
        // if (sourceRequestToken.abandoned) {
        // 	return;
        // }
        // console.log(data)
        _this.existingSourceExecutionToken = null;
        if (data && data.length > 0) {
          _this.removeLoading();
          _this.values = data;
          _this.mentionList.innerText = '';
          var initialSelection = -1;
          for (var i = 0; i < data.length; i += 1) {
            var li = document.createElement('li');
            li.id = 'quill-mention-item-' + i;
            li.className = _this.options.listItemClass ? _this.options.listItemClass : '';
            if (data[i].disabled) {
              li.className += ' disabled';
              li.setAttribute('aria-hidden', 'true');
            } else if (initialSelection === -1) initialSelection = i;
            li.dataset.index = i;
            var renderedItem = _this.options.renderItem(data[i], searchTerm);
            setInnerContent(li, renderedItem);
            if (!data[i].disabled) {
              // li.onmouseenter = this.onItemMouseEnter.bind(this);
              li.onmouseup = _this.onItemClick.bind(_this);
              li.onmousedown = _this.onItemMouseDown.bind(_this);
            } else li.onmouseenter = _this.onDisabledItemMouseEnter.bind(_this);
            li.dataset.denotationChar = '';
            _this.mentionList.appendChild(attachDataValues(li, data[i], _this.options.dataAttributes));
          }
          _this.itemIndex = initialSelection;
          // this.highlightItem();
        } else {
          _this.mentionList.innerText = 'No Data Found';
        }
      }, '');
    };
    this.spanEl.appendChild(input);
    this.mentionContainer.appendChild(this.spanEl);
    this.mentionList = document.createElement('ul');
    this.mentionList.id = 'quill-mention-list';
    quill.root.setAttribute('aria-owns', 'quill-mention-list');
    this.mentionList.className = this.options.selectionListClass ? this.options.selectionListClass : '';
    this.mentionContainer.appendChild(this.mentionList);

    // quill.on('text-change', this.onTextChange.bind(this));
    quill.on('selection-change', this.onSelectionChange.bind(this));

    //Pasting doesn't fire selection-change after the pasted text is
    //inserted, so here we manually trigger one
    quill.container.addEventListener('paste', function () {
      setTimeout(function () {
        var range = quill.getSelection();
        _this.onSelectionChange(range);
      });
    });
  }
  _createClass(Mention, [{
    key: "selectHandler",
    value: function selectHandler() {
      if (this.isOpen && !this.existingSourceExecutionToken) {
        this.selectItem();
        return false;
      }
      return true;
    }
  }, {
    key: "escapeHandler",
    value: function escapeHandler() {
      if (this.isOpen) {
        if (this.existingSourceExecutionToken) {
          this.existingSourceExecutionToken.abandoned = true;
        }
        this.hideMentionList();
        return false;
      }
      return true;
    }
  }, {
    key: "upHandler",
    value: function upHandler() {
      if (this.isOpen && !this.existingSourceExecutionToken) {
        this.prevItem();
        return false;
      }
      return true;
    }
  }, {
    key: "downHandler",
    value: function downHandler() {
      if (this.isOpen && !this.existingSourceExecutionToken) {
        this.nextItem();
        return false;
      }
      return true;
    }
  }, {
    key: "showMentionList",
    value: function showMentionList() {
      if (this.options.positioningStrategy === 'fixed') {
        document.body.appendChild(this.mentionContainer);
      } else {
        this.quill.container.appendChild(this.mentionContainer);
      }
      this.mentionContainer.style.visibility = 'hidden';
      this.mentionContainer.style.display = '';
      this.mentionContainer.scrollTop = 0;
      this.setMentionContainerPosition();
      this.setIsOpen(true);
    }
  }, {
    key: "hideMentionList",
    value: function hideMentionList() {
      this.options.onBeforeClose();
      this.mentionContainer.style.display = 'none';
      this.spanEl.childNodes[0].value = '';
      this.mentionContainer.remove();
      this.setIsOpen(false);
      this.quill.root.removeAttribute('aria-activedescendant');
    }
  }, {
    key: "highlightItem",
    value: function highlightItem() {
      return;
    }
  }, {
    key: "onContainerMouseMove",
    value: function onContainerMouseMove() {
      this.suspendMouseEnter = false;
    }
  }, {
    key: "selectItem",
    value: function selectItem() {
      var _this2 = this;
      var textBeforeCursor = this.getTextBeforeCursor();
      var textAfter = textBeforeCursor.substring(this.mentionCharPos);
      if (this.itemIndex === -1) {
        return;
      }
      var data = this.mentionList.childNodes[this.itemIndex].dataset;
      if (data.disabled) {
        return;
      }
      this.options.onSelect(data, function (asyncData) {
        var programmaticInsert = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var overriddenOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return _this2.insertItem(asyncData, programmaticInsert, overriddenOptions);
      }, textAfter);
      this.hideMentionList();
    }
  }, {
    key: "insertItem",
    value: function insertItem(data, programmaticInsert) {
      var overriddenOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var render = data;
      if (render === null) {
        return;
      }
      var options = _objectSpread2(_objectSpread2({}, this.options), overriddenOptions);
      if (!options.showDenotationChar) {
        render.denotationChar = '';
      }
      var insertAtPos;
      if (!programmaticInsert) {
        insertAtPos = this.mentionCharPos;
        this.quill.deleteText(this.mentionCharPos, this.cursorPos - this.mentionCharPos, Quill.sources.USER);
      } else {
        insertAtPos = this.cursorPos;
      }
      var delta = this.quill.insertEmbed(insertAtPos, options.blotName, render, Quill.sources.USER);
      if (options.spaceAfterInsert) {
        this.quill.insertText(insertAtPos + 1, ' ', Quill.sources.USER);
        // setSelection here sets cursor position
        this.quill.setSelection(insertAtPos + 2, Quill.sources.USER);
      } else {
        this.quill.setSelection(insertAtPos + 1, Quill.sources.USER);
      }
      this.hideMentionList();
      return delta;
    }
  }, {
    key: "onItemMouseEnter",
    value: function onItemMouseEnter(e) {
      if (this.suspendMouseEnter) {
        return;
      }
      var index = Number(e.target.dataset.index);
      console.log('onItemMouseEnter', index, this.itemIndex, this.suspendMouseEnter);
      if (!Number.isNaN(index)) {
        this.itemIndex = index;
        this.highlightItem(false);
      }
    }
  }, {
    key: "onDisabledItemMouseEnter",
    value: function onDisabledItemMouseEnter(e) {
      if (this.suspendMouseEnter) {
        return;
      }
      this.itemIndex = -1;
      this.highlightItem(false);
    }
  }, {
    key: "onItemClick",
    value: function onItemClick(e) {
      if (e.button !== 0) {
        return;
      }
      e.preventDefault();
      e.stopImmediatePropagation();
      this.itemIndex = e.currentTarget.dataset.index;
      this.highlightItem();
      this.selectItem();
    }
  }, {
    key: "onItemMouseDown",
    value: function onItemMouseDown(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      var renderedLoading = this.options.renderLoading();
      if (!renderedLoading) {
        return;
      }
      if (this.mentionContainer.getElementsByClassName('ql-mention-loading').length > 0) {
        this.showMentionList();
        return;
      }
      this.mentionList.innerHTML = '';
      var loadingDiv = document.createElement('div');
      loadingDiv.className = 'ql-mention-loading';
      setInnerContent(loadingDiv, this.options.renderLoading());
      this.mentionContainer.append(loadingDiv);
      this.showMentionList();
    }
  }, {
    key: "removeLoading",
    value: function removeLoading() {
      var loadingDiv = this.mentionContainer.getElementsByClassName('ql-mention-loading');
      if (loadingDiv.length > 0) {
        loadingDiv[0].remove();
      }
    }
  }, {
    key: "renderList",
    value: function renderList(mentionChar, data, searchTerm) {
      if (data && data.length > 0) {
        this.removeLoading();
        this.values = data;
        this.mentionList.innerText = '';
        var initialSelection = -1;
        for (var i = 0; i < data.length; i += 1) {
          var li = document.createElement('li');
          li.id = 'quill-mention-item-' + i;
          li.className = this.options.listItemClass ? this.options.listItemClass : '';
          if (data[i].disabled) {
            li.className += ' disabled';
            li.setAttribute('aria-hidden', 'true');
          } else if (initialSelection === -1) initialSelection = i;
          li.dataset.index = i;
          var renderedItem = this.options.renderItem(data[i], searchTerm);
          setInnerContent(li, renderedItem);
          if (!data[i].disabled) {
            // li.onmouseenter = this.onItemMouseEnter.bind(this);
            li.onmouseup = this.onItemClick.bind(this);
            li.onmousedown = this.onItemMouseDown.bind(this);
          } else li.onmouseenter = this.onDisabledItemMouseEnter.bind(this);
          li.dataset.denotationChar = mentionChar;
          this.mentionList.appendChild(attachDataValues(li, data[i], this.options.dataAttributes));
        }
        this.itemIndex = initialSelection;
        this.highlightItem();
        this.showMentionList();
      } else this.hideMentionList();
    }
  }, {
    key: "nextItem",
    value: function nextItem() {
      var increment = 0;
      var newIndex;
      do {
        increment++;
        newIndex = (this.itemIndex + increment) % this.values.length;
        var disabled = this.mentionList.childNodes[newIndex].dataset.disabled === 'true';
        if (increment === this.values.length + 1) {
          //we've wrapped around w/o finding an enabled item
          newIndex = -1;
          break;
        }
      } while (disabled);
      this.itemIndex = newIndex;
      this.suspendMouseEnter = true;
      this.highlightItem();
    }
  }, {
    key: "prevItem",
    value: function prevItem() {
      var decrement = 0;
      var newIndex;
      do {
        decrement++;
        newIndex = (this.itemIndex + this.values.length - decrement) % this.values.length;
        var disabled = this.mentionList.childNodes[newIndex].dataset.disabled === 'true';
        if (decrement === this.values.length + 1) {
          //we've wrapped around w/o finding an enabled item
          newIndex = -1;
          break;
        }
      } while (disabled);
      this.itemIndex = newIndex;
      this.suspendMouseEnter = true;
      this.highlightItem();
    }
  }, {
    key: "containerBottomIsNotVisible",
    value: function containerBottomIsNotVisible(topPos, containerPos) {
      var mentionContainerBottom = topPos + this.mentionContainer.offsetHeight + containerPos.top;
      return mentionContainerBottom > window.pageYOffset + window.innerHeight;
    }
  }, {
    key: "containerRightIsNotVisible",
    value: function containerRightIsNotVisible(leftPos, containerPos) {
      if (this.options.fixMentionsToQuill) return false;
      var rightPos = leftPos + this.mentionContainer.offsetWidth + containerPos.left;
      var browserWidth = window.pageXOffset + document.documentElement.clientWidth;
      return rightPos > browserWidth;
    }
  }, {
    key: "setIsOpen",
    value: function setIsOpen(isOpen) {
      if (this.isOpen !== isOpen) {
        if (isOpen) this.options.onOpen();else this.options.onClose();
        this.isOpen = isOpen;
      }
    }
  }, {
    key: "setMentionContainerPosition",
    value: function setMentionContainerPosition() {
      if (this.options.positioningStrategy === 'fixed') this.setMentionContainerPosition_Fixed();else this.setMentionContainerPosition_Normal();
    }
  }, {
    key: "setMentionContainerPosition_Normal",
    value: function setMentionContainerPosition_Normal() {
      var _this3 = this;
      var containerPos = this.quill.container.getBoundingClientRect();
      var mentionCharPos = this.quill.getBounds(this.cursorPos);
      var containerHeight = this.mentionContainer.offsetHeight;
      var topPos = this.options.offsetTop;
      var leftPos = this.options.offsetLeft;

      // handle horizontal positioning
      if (this.options.fixMentionsToQuill) {
        var rightPos = 0;
        this.mentionContainer.style.right = "".concat(rightPos, "px");
      } else leftPos += mentionCharPos.left;
      if (this.containerRightIsNotVisible(leftPos, containerPos)) {
        var containerWidth = this.mentionContainer.offsetWidth + this.options.offsetLeft;
        var quillWidth = containerPos.width;
        leftPos = quillWidth - containerWidth;
      }

      // handle vertical positioning
      if (this.options.defaultMenuOrientation === 'top') {
        // Attempt to align the mention container with the top of the quill editor
        if (this.options.fixMentionsToQuill) topPos = -1 * (containerHeight + this.options.offsetTop);else topPos = mentionCharPos.top - (containerHeight + this.options.offsetTop);

        // default to bottom if the top is not visible
        if (topPos + containerPos.top <= 0) {
          var overMentionCharPos = this.options.offsetTop;
          if (this.options.fixMentionsToQuill) overMentionCharPos += containerPos.height;else overMentionCharPos += mentionCharPos.bottom;
          topPos = overMentionCharPos;
        }
      } else {
        // Attempt to align the mention container with the bottom of the quill editor
        if (this.options.fixMentionsToQuill) {
          topPos += containerPos.height;
        } else {
          topPos += mentionCharPos.bottom;
        }

        // default to the top if the bottom is not visible
        if (this.containerBottomIsNotVisible(topPos, containerPos)) {
          var _overMentionCharPos = this.options.offsetTop * -1;
          if (!this.options.fixMentionsToQuill) {
            _overMentionCharPos += mentionCharPos.top;
          }
          topPos = _overMentionCharPos - containerHeight;
        }
      }
      if (topPos >= 0) {
        this.options.selectionContainerClass.split(' ').forEach(function (className) {
          _this3.mentionContainer.classList.add("".concat(className, "-bottom"));
          _this3.mentionContainer.classList.remove("".concat(className, "-top"));
        });
      } else {
        this.options.selectionContainerClass.split(' ').forEach(function (className) {
          _this3.mentionContainer.classList.add("".concat(className, "-top"));
          _this3.mentionContainer.classList.remove("".concat(className, "-bottom"));
        });
      }
      this.mentionContainer.style.top = "".concat(topPos, "px");
      this.mentionContainer.style.left = "".concat(leftPos, "px");
      this.mentionContainer.style.visibility = 'visible';
    }
  }, {
    key: "setMentionContainerPosition_Fixed",
    value: function setMentionContainerPosition_Fixed() {
      var _this4 = this;
      this.mentionContainer.style.position = 'fixed';
      this.mentionContainer.style.height = null;
      var containerPos = this.quill.container.getBoundingClientRect();
      var mentionCharPos = this.quill.getBounds(this.mentionCharPos);
      var mentionCharPosAbsolute = {
        left: containerPos.left + mentionCharPos.left,
        top: containerPos.top + mentionCharPos.top,
        width: 0,
        height: mentionCharPos.height
      };

      //Which rectangle should it be relative to
      var relativeToPos = this.options.fixMentionsToQuill ? containerPos : mentionCharPosAbsolute;
      var topPos = this.options.offsetTop;
      var leftPos = this.options.offsetLeft;

      // handle horizontal positioning
      if (this.options.fixMentionsToQuill) {
        var rightPos = relativeToPos.right;
        this.mentionContainer.style.right = "".concat(rightPos, "px");
      } else {
        leftPos += relativeToPos.left;

        //if its off the righ edge, push it back
        if (leftPos + this.mentionContainer.offsetWidth > document.documentElement.clientWidth) {
          leftPos -= leftPos + this.mentionContainer.offsetWidth - document.documentElement.clientWidth;
        }
      }
      var availableSpaceTop = relativeToPos.top;
      var availableSpaceBottom = document.documentElement.clientHeight - (relativeToPos.top + relativeToPos.height);
      var fitsBottom = this.mentionContainer.offsetHeight <= availableSpaceBottom;
      var fitsTop = this.mentionContainer.offsetHeight <= availableSpaceTop;
      var placement;
      if (this.options.defaultMenuOrientation === 'top' && fitsTop) {
        placement = 'top';
      } else if (this.options.defaultMenuOrientation === 'bottom' && fitsBottom) {
        placement = 'bottom';
      } else {
        //it doesnt fit either so put it where there's the most space
        placement = availableSpaceBottom > availableSpaceTop ? 'bottom' : 'top';
      }
      if (placement === 'bottom') {
        topPos = relativeToPos.top + relativeToPos.height;
        if (!fitsBottom) {
          //shrink it to fit
          //3 is a bit of a fudge factor so it doesnt touch the edge of the screen
          this.mentionContainer.style.height = availableSpaceBottom - 3 + 'px';
        }
        this.options.selectionContainerClass.split(' ').forEach(function (className) {
          _this4.mentionContainer.classList.add("".concat(className, "-bottom"));
          _this4.mentionContainer.classList.remove("".concat(className, "-top"));
        });
      } else {
        topPos = relativeToPos.top - this.mentionContainer.offsetHeight;
        if (!fitsTop) {
          //shrink it to fit
          //3 is a bit of a fudge factor so it doesnt touch the edge of the screen
          this.mentionContainer.style.height = availableSpaceTop - 3 + 'px';
          topPos = 3;
        }
        this.options.selectionContainerClass.split(' ').forEach(function (className) {
          _this4.mentionContainer.classList.add("".concat(className, "-top"));
          _this4.mentionContainer.classList.remove("".concat(className, "-bottom"));
        });
      }
      this.mentionContainer.style.top = "".concat(topPos, "px");
      this.mentionContainer.style.left = "".concat(leftPos, "px");
      this.mentionContainer.style.visibility = 'visible';
    }
  }, {
    key: "getTextBeforeCursor",
    value: function getTextBeforeCursor() {
      var startPos = Math.max(0, this.cursorPos - this.options.maxChars);
      // const textBeforeCursorPos = this.quill.getText(
      // 	startPos,
      // 	this.cursorPos - startPos
      // );
      var textBeforeCursorPos = this.quill.getContents(startPos, this.cursorPos - startPos);
      // console.log(textBeforeCursorPos)
      // return textBeforeCursorPos;
      return textBeforeCursorPos.filter(function (op) {
        return typeof op.insert === 'string' || op.insert.hashtag || op.insert.hashtagclosable || op.insert['styled-mention'] || op.insert['mention'];
      }).map(function (op) {
        if (op.insert.hashtag || op.insert.hashtagclosable || op.insert['styled-mention'] || op.insert['mention']) {
          // console.log('i added')
          return ' ';
        }
        return op.insert;
      }).join('');
    }
  }, {
    key: "onSomethingChange",
    value: function onSomethingChange() {
      var _this5 = this;
      var range = this.quill.getSelection();
      if (range == null) return;
      this.cursorPos = range.index;
      var textBeforeCursor = this.getTextBeforeCursor();
      var textOffset = Math.max(0, this.cursorPos - this.options.maxChars);
      var textPrefix = textOffset ? this.quill.getText(textOffset - 1, textOffset) : '';
      var _getMentionCharIndex = getMentionCharIndex(textBeforeCursor, this.options.mentionDenotationChars, this.options.isolateCharacter, this.options.allowInlineMentionChar),
        mentionChar = _getMentionCharIndex.mentionChar,
        mentionCharIndex = _getMentionCharIndex.mentionCharIndex;
      if (hasValidMentionCharIndex(mentionCharIndex, textBeforeCursor, this.options.isolateCharacter, textPrefix)) {
        var mentionCharPos = this.cursorPos - (textBeforeCursor.length - mentionCharIndex);
        this.mentionCharPos = mentionCharPos;
        var textAfter = textBeforeCursor.substring(mentionCharIndex + mentionChar.length);
        if (textAfter.length >= this.options.minChars && hasValidChars(textAfter, this.getAllowedCharsRegex(mentionChar))) {
          if (this.existingSourceExecutionToken) {
            this.existingSourceExecutionToken.abandoned = true;
          }
          this.renderLoading();
          var sourceRequestToken = {
            abandoned: false
          };
          this.existingSourceExecutionToken = sourceRequestToken;
          this.options.source(textAfter, function (data, searchTerm) {
            if (sourceRequestToken.abandoned) {
              return;
            }
            _this5.existingSourceExecutionToken = null;
            _this5.renderList(mentionChar, data, searchTerm);
          }, mentionChar);
        } else {
          if (this.existingSourceExecutionToken) {
            this.existingSourceExecutionToken.abandoned = true;
          }
          this.hideMentionList();
        }
      } else {
        if (this.existingSourceExecutionToken) {
          this.existingSourceExecutionToken.abandoned = true;
        }
        this.hideMentionList();
      }
    }
  }, {
    key: "getAllowedCharsRegex",
    value: function getAllowedCharsRegex(denotationChar) {
      if (this.options.allowedChars instanceof RegExp) {
        return this.options.allowedChars;
      } else {
        return this.options.allowedChars(denotationChar);
      }
    }

    // onTextChange(delta, oldDelta, source) {
    // 	if (source === 'user') {
    // 		setTimeout(this.onSomethingChange.bind(this), 50);
    // 	}
    // }
  }, {
    key: "onSelectionChange",
    value: function onSelectionChange(range) {
      var _this6 = this;
      console.log(this, range, document.activeElement, this.spanEl.childNodes[0]);
      if ((!range || range.length === 0) && this.spanEl.childNodes[0] !== document.activeElement) {
        this.hideMentionList();
      } else if (range) {
        this.mentionCharPos = range.index;
        this.cursorPos = range.index + range.length;
        this.options.source('', function (data, searchTerm) {
          // if (sourceRequestToken.abandoned) {
          // 	return;
          // }
          _this6.existingSourceExecutionToken = null;
          _this6.renderList('', data, searchTerm);
        }, '');
      }
    }
  }, {
    key: "openMenu",
    value: function openMenu(denotationChar) {
      var selection = this.quill.getSelection(true);
      this.quill.insertText(selection.index, denotationChar);
      this.quill.blur();
      this.quill.focus();
    }
  }]);
  return Mention;
}();
Quill.register('modules/mention', Mention);

export { Mention as default };
