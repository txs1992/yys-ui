(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue-property-decorator')) :
    typeof define === 'function' && define.amd ? define(['vue-property-decorator'], factory) :
    (global = global || self, global.YysUI = factory(global.vuePropertyDecorator));
}(this, function (vuePropertyDecorator) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    var NAME = "yys-sidebar";
    var DEFAULT_ICON = "triangle-";
    var Sidebar = /** @class */ (function (_super) {
        __extends(Sidebar, _super);
        function Sidebar() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.contentEL = null;
            _this.parentPosition = "";
            return _this;
        }
        Sidebar_1 = Sidebar;
        Object.defineProperty(Sidebar.prototype, "sidebarVisible", {
            get: function () {
                return this.visible;
            },
            set: function (value) {
                this.$emit("update:visible", value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sidebar.prototype, "iconClass", {
            get: function () {
                return this.sidebarVisible ? DEFAULT_ICON + "left" : DEFAULT_ICON + "right";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Sidebar.prototype, "fadeClass", {
            get: function () {
                return this.sidebarVisible ? "show" : "hide";
            },
            enumerable: true,
            configurable: true
        });
        Sidebar.prototype.handleSidebarVisibleChange = function (visible) {
            if (this.contentEL) {
                if (visible) {
                    this.contentEL.style.width = this.width;
                }
                else {
                    this.contentEL.style.width = 0;
                }
            }
        };
        Sidebar.prototype.mounted = function () {
            var el = this.$el.querySelector(".content-wrapper");
            var parentEl = this.$el.parentElement;
            if (parentEl) {
                this.parentPosition = parentEl.style.position;
                parentEl.style.position = "relative";
            }
            var content = el.querySelector(".content");
            if (el && content) {
                this.contentEL = el;
                el.style.width = this.width;
                content.style.width = this.width;
            }
        };
        Sidebar.prototype.beforeDestory = function () {
            var parentEl = this.$el.parentElement;
            parentEl.style.position = this.parentPosition;
        };
        Sidebar.prototype.install = function (Vue) {
            Vue.Component(Sidebar_1.name, Sidebar_1);
        };
        var Sidebar_1;
        __decorate([
            vuePropertyDecorator.Prop(Boolean)
        ], Sidebar.prototype, "visible", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ type: String, default: "300px" })
        ], Sidebar.prototype, "width", void 0);
        __decorate([
            vuePropertyDecorator.Prop({ type: String, default: "left" })
        ], Sidebar.prototype, "placement", void 0);
        __decorate([
            vuePropertyDecorator.Watch("sidebarVisible")
        ], Sidebar.prototype, "handleSidebarVisibleChange", null);
        Sidebar = Sidebar_1 = __decorate([
            vuePropertyDecorator.Component({
                name: NAME
            })
        ], Sidebar);
        return Sidebar;
    }(vuePropertyDecorator.Vue));

    function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
        if (typeof shadowMode !== 'boolean') {
            createInjectorSSR = createInjector;
            createInjector = shadowMode;
            shadowMode = false;
        }
        // Vue.extend constructor export interop.
        const options = typeof script === 'function' ? script.options : script;
        // render functions
        if (template && template.render) {
            options.render = template.render;
            options.staticRenderFns = template.staticRenderFns;
            options._compiled = true;
            // functional template
            if (isFunctionalTemplate) {
                options.functional = true;
            }
        }
        // scopedId
        if (scopeId) {
            options._scopeId = scopeId;
        }
        let hook;
        if (moduleIdentifier) {
            // server build
            hook = function (context) {
                // 2.3 injection
                context =
                    context || // cached call
                        (this.$vnode && this.$vnode.ssrContext) || // stateful
                        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
                // 2.2 with runInNewContext: true
                if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                    context = __VUE_SSR_CONTEXT__;
                }
                // inject component styles
                if (style) {
                    style.call(this, createInjectorSSR(context));
                }
                // register component module identifier for async chunk inference
                if (context && context._registeredComponents) {
                    context._registeredComponents.add(moduleIdentifier);
                }
            };
            // used by ssr in case component is cached and beforeCreate
            // never gets called
            options._ssrRegister = hook;
        }
        else if (style) {
            hook = shadowMode
                ? function (context) {
                    style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
                }
                : function (context) {
                    style.call(this, createInjector(context));
                };
        }
        if (hook) {
            if (options.functional) {
                // register for functional component in vue file
                const originalRender = options.render;
                options.render = function renderWithStyleInjection(h, context) {
                    hook.call(context);
                    return originalRender(h, context);
                };
            }
            else {
                // inject component registration as beforeCreate hook
                const existing = options.beforeCreate;
                options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
            }
        }
        return script;
    }

    const isOldIE = typeof navigator !== 'undefined' &&
        /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    function createInjector(context) {
        return (id, style) => addStyle(id, style);
    }
    let HEAD;
    const styles = {};
    function addStyle(id, css) {
        const group = isOldIE ? css.media || 'default' : id;
        const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
        if (!style.ids.has(id)) {
            style.ids.add(id);
            let code = css.source;
            if (css.map) {
                // https://developer.chrome.com/devtools/docs/javascript-debugging
                // this makes source maps inside style tags work properly in Chrome
                code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
                // http://stackoverflow.com/a/26603875
                code +=
                    '\n/*# sourceMappingURL=data:application/json;base64,' +
                        btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                        ' */';
            }
            if (!style.element) {
                style.element = document.createElement('style');
                style.element.type = 'text/css';
                if (css.media)
                    style.element.setAttribute('media', css.media);
                if (HEAD === undefined) {
                    HEAD = document.head || document.getElementsByTagName('head')[0];
                }
                HEAD.appendChild(style.element);
            }
            if ('styleSheet' in style.element) {
                style.styles.push(code);
                style.element.styleSheet.cssText = style.styles
                    .filter(Boolean)
                    .join('\n');
            }
            else {
                const index = style.ids.size - 1;
                const textNode = document.createTextNode(code);
                const nodes = style.element.childNodes;
                if (nodes[index])
                    style.element.removeChild(nodes[index]);
                if (nodes.length)
                    style.element.insertBefore(textNode, nodes[index]);
                else
                    style.element.appendChild(textNode);
            }
        }
    }

    /* script */
    const __vue_script__ = Sidebar;

    /* template */
    var __vue_render__ = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "yys-sidebar", class: _vm.placement }, [
        _c("div", { staticClass: "menu-wrapper" }, [_vm._t("menu")], 2),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "sidebar-content-wrapper", class: _vm.fadeClass },
          [
            _c(
              "div",
              {
                staticClass: "toggle-button",
                on: {
                  click: function($event) {
                    _vm.sidebarVisible = !_vm.sidebarVisible;
                  }
                }
              },
              [_c("div", { staticClass: "triangle", class: _vm.iconClass })]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "content-wrapper" }, [
              _c("div", { staticClass: "content" }, [_vm._t("default")], 2)
            ])
          ]
        )
      ])
    };
    var __vue_staticRenderFns__ = [];
    __vue_render__._withStripped = true;

      /* style */
      const __vue_inject_styles__ = function (inject) {
        if (!inject) return
        inject("data-v-283377b8_0", { source: ".yys-sidebar {\n  position: absolute;\n  display: flex;\n  height: 100%;\n}\n.yys-sidebar.left {\n  left: 0;\n}\n.yys-sidebar.left .sidebar-content-wrapper .toggle-button {\n  right: -22px;\n}\n.yys-sidebar.right {\n  right: 0;\n}\n.yys-sidebar.right .sidebar-content-wrapper .toggle-button {\n  left: -22px;\n  transform: rotate(180deg);\n}\n.yys-sidebar .sidebar-content-wrapper {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n}\n.yys-sidebar .sidebar-content-wrapper .content-wrapper {\n  overflow: hidden;\n  transition: width 0.5s;\n}\n.yys-sidebar .sidebar-content-wrapper .toggle-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  width: 20px;\n  height: 50px;\n  cursor: pointer;\n  margin-top: -25px;\n  line-height: 50px;\n}\n.yys-sidebar .sidebar-content-wrapper .toggle-button::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  background: rgba(255, 255, 255, 0.8);\n  transform: scaleY(1.5) perspective(5px) rotateY(5deg);\n}\n.yys-sidebar .sidebar-content-wrapper .toggle-button .triangle {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-color: transparent #000 transparent transparent;\n}\n.yys-sidebar .sidebar-content-wrapper .toggle-button .triangle-left {\n  border-width: 10px 10px 10px 0;\n  border-color: transparent #000 transparent transparent;\n}\n.yys-sidebar .sidebar-content-wrapper .toggle-button .triangle-right {\n  border-width: 10px 0 10px 10px;\n  border-color: transparent transparent transparent #000;\n}\n\n/*# sourceMappingURL=index.vue.map */", map: {"version":3,"sources":["/Users/txs1992/my-github/yys-ui/packages/sidebar/src/index.vue","index.vue"],"names":[],"mappings":"AAwBA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;ACvBA;ADyBA;EACA,OAAA;ACvBA;AD0BA;EACA,YAAA;ACxBA;AD6BA;EACA,QAAA;AC3BA;AD8BA;EACA,WAAA;EACA,yBAAA;AC5BA;ADiCA;EACA,OAAA;EACA,aAAA;EACA,sBAAA;EACA,gBA/BA;ACAA;ADiCA;EACA,gBAAA;EACA,sBAAA;AC/BA;ADkCA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;AChCA;ADkCA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,oCAAA;EACA,qDAAA;AChCA;ADmCA;EACA,QAAA;EACA,SAAA;EACA,mBAAA;EACA,sDAAA;ACjCA;ADoCA;EACA,8BAAA;EACA,sDAAA;AClCA;ADqCA;EACA,8BAAA;EACA,sDAAA;ACnCA;;AAEA,oCAAoC","file":"index.vue","sourcesContent":["\n<template>\n  <div class=\"yys-sidebar\" :class=\"placement\">\n    <div class=\"menu-wrapper\">\n      <slot name=\"menu\"></slot>\n    </div>\n    <div class=\"sidebar-content-wrapper\" :class=\"fadeClass\">\n      <div class=\"toggle-button\" @click=\"sidebarVisible = !sidebarVisible\">\n        <div class=\"triangle\" :class=\"iconClass\"></div>\n      </div>\n      <div class=\"content-wrapper\">\n        <div class=\"content\">\n          <slot></slot>\n        </div>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script lang=\"ts\" src=\"./index.ts\">\n</script>\n\n<style lang=\"scss\">\n$white: #fff;\n.yys-sidebar {\n  position: absolute;\n  display: flex;\n  height: 100%;\n\n  &.left {\n    left: 0;\n\n    .sidebar-content-wrapper {\n      .toggle-button {\n        right: -22px;\n      }\n    }\n  }\n\n  &.right {\n    right: 0;\n\n    .sidebar-content-wrapper {\n      .toggle-button {\n        left: -22px;\n        transform: rotate(180deg);\n      }\n    }\n  }\n\n  .sidebar-content-wrapper {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    background: $white;\n\n    .content-wrapper {\n      overflow: hidden;\n      transition: width 0.5s;\n    }\n\n    .toggle-button {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: absolute;\n      top: 50%;\n      width: 20px;\n      height: 50px;\n      cursor: pointer;\n      margin-top: -25px;\n      line-height: 50px;\n\n      &::before {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        content: \"\";\n        background: rgba(255, 255, 255, 0.8);\n        transform: scaleY(1.5) perspective(5px) rotateY(5deg);\n      }\n\n      .triangle {\n        width: 0;\n        height: 0;\n        border-style: solid;\n        border-color: transparent #000 transparent transparent;\n      }\n\n      .triangle-left {\n        border-width: 10px 10px 10px 0;\n        border-color: transparent #000 transparent transparent;\n      }\n\n      .triangle-right {\n        border-width: 10px 0 10px 10px;\n        border-color: transparent transparent transparent #000;\n      }\n    }\n  }\n}\n</style>",".yys-sidebar {\n  position: absolute;\n  display: flex;\n  height: 100%;\n}\n.yys-sidebar.left {\n  left: 0;\n}\n.yys-sidebar.left .sidebar-content-wrapper .toggle-button {\n  right: -22px;\n}\n.yys-sidebar.right {\n  right: 0;\n}\n.yys-sidebar.right .sidebar-content-wrapper .toggle-button {\n  left: -22px;\n  transform: rotate(180deg);\n}\n.yys-sidebar .sidebar-content-wrapper {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n}\n.yys-sidebar .sidebar-content-wrapper .content-wrapper {\n  overflow: hidden;\n  transition: width 0.5s;\n}\n.yys-sidebar .sidebar-content-wrapper .toggle-button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  width: 20px;\n  height: 50px;\n  cursor: pointer;\n  margin-top: -25px;\n  line-height: 50px;\n}\n.yys-sidebar .sidebar-content-wrapper .toggle-button::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  content: \"\";\n  background: rgba(255, 255, 255, 0.8);\n  transform: scaleY(1.5) perspective(5px) rotateY(5deg);\n}\n.yys-sidebar .sidebar-content-wrapper .toggle-button .triangle {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-color: transparent #000 transparent transparent;\n}\n.yys-sidebar .sidebar-content-wrapper .toggle-button .triangle-left {\n  border-width: 10px 10px 10px 0;\n  border-color: transparent #000 transparent transparent;\n}\n.yys-sidebar .sidebar-content-wrapper .toggle-button .triangle-right {\n  border-width: 10px 0 10px 10px;\n  border-color: transparent transparent transparent #000;\n}\n\n/*# sourceMappingURL=index.vue.map */"]}, media: undefined });

      };
      /* scoped */
      const __vue_scope_id__ = undefined;
      /* module identifier */
      const __vue_module_identifier__ = undefined;
      /* functional template */
      const __vue_is_functional_template__ = false;
      /* style inject SSR */
      
      /* style inject shadow dom */
      

      
      const __vue_component__ = normalizeComponent(
        { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
        __vue_inject_styles__,
        __vue_script__,
        __vue_scope_id__,
        __vue_is_functional_template__,
        __vue_module_identifier__,
        false,
        createInjector,
        undefined,
        undefined
      );

    return __vue_component__;

}));
