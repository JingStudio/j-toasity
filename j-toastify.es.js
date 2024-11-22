(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".j-toastify-container button{font-family:inherit;font-size:100%;line-height:1.15;margin:0;overflow:visible;text-transform:none;-moz-appearance:button;appearance:button;-webkit-appearance:button;border-style:none;outline:1px dotted ButtonText;padding:5px 15px;border-radius:5px;outline:none;color:#fff;border:1px solid transparent;transition:all .5s ease;box-sizing:border-box}.j-toastify-container button:hover{transform:scale(1.1)}.j-toastify-container{position:relative;border-radius:5px;box-shadow:0 0 5px #0000004d;overflow:hidden;box-sizing:border-box}.j-toastify-box{min-width:300px;max-width:600px;min-height:60px;max-height:800px;font-size:14px;color:#fff;padding:25px;box-sizing:border-box}.j-toastify-box.primary{background-color:#1976d2}.j-toastify-box.success{background-color:#4caf50}.j-toastify-box.warning{background-color:#ffc107}.j-toastify-box.danger{background-color:#ff5252}.j-toastify-box .icon{width:20px;height:20px;fill:#fff}.j-toastify-box .j-toastify-close{position:absolute;top:10px;right:10px;fill:#d8d8d8;transition:all .3s linear}.j-toastify-box .j-toastify-close:hover{fill:#fff;transform:rotate(90deg) scale(1.1)}.j-toastify-content{display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box}.j-toastify-content .icon{margin-right:10px}.j-toastify-message{word-wrap:break-word;word-break:break-word}.j-toasity-count-down{position:absolute;left:0;bottom:0;height:5px;width:100%;box-sizing:border-box}.success .j-toasity-count-down{background-color:#29692c}.primary .j-toasity-count-down{background-color:#183f66}.danger .j-toasity-count-down{background-color:#982d2d}.warning .j-toasity-count-down{background-color:#a57c01}.j-toastify-group{display:flex;justify-content:flex-end;gap:10px;margin-top:15px}.j-toastify-group button{font-size:12px;border-color:transparent}.success .j-toastify-group button{color:#29692c;background-color:#fff}.primary .j-toastify-group button{color:#183f66;background-color:#fff}.warning .j-toastify-group button{color:#a57c01;background-color:#fff}.danger .j-toastify-group button{color:#982d2d;background-color:#fff}.j-toastify-group button:hover{border-color:#fff}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { ref as f, onMounted as w, nextTick as E, openBlock as i, createElementBlock as l, normalizeClass as h, createElementVNode as s, createCommentVNode as u, toDisplayString as y, normalizeStyle as C, createApp as T } from "vue";
const b = { class: "j-toastify-content" }, q = { key: 0 }, z = {
  key: 0,
  t: "1732173162180",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "11726",
  width: "200",
  height: "200"
}, M = {
  key: 1,
  t: "1732181491659",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "12747",
  width: "200",
  height: "200"
}, k = {
  key: 2,
  t: "1732181707224",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "25474",
  width: "200",
  height: "200"
}, S = {
  key: 3,
  t: "1732181977053",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "34673",
  width: "200",
  height: "200"
}, B = { class: "j-toastify-message" }, j = {
  key: 0,
  class: "j-toastify-group"
}, g = {
  __name: "JToastify",
  props: {
    position: {
      type: String,
      default: "top-right",
      validator: (t) => ["top-right", "top-left", "top", "center", "bottom-left", "bottom-right", "bottom"].includes(t)
    },
    icon: {
      type: Boolean,
      default: !0
    },
    message: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      default: "primary",
      validator: (t) => ["primary", "success", "warning", "danger"].includes(t)
    },
    autoClose: {
      type: Boolean,
      default: !0
    },
    timeout: {
      type: Number,
      default: 5e3
    },
    closeEvent: {
      type: Function,
      default: () => {
      }
    },
    confirmText: {
      type: String,
      default: null
    },
    cancelText: {
      type: String,
      default: null
    },
    confirmEvent: {
      type: Function,
      default: () => {
      }
    },
    cancelEvent: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(t) {
    const n = t, c = f(), e = f("100%"), a = f(null);
    w(() => {
      E(() => {
        c.value && n.autoClose && r();
      });
    });
    const r = () => {
      a.value = setInterval(() => {
        let v = parseFloat(e.value) - 100 / (n.timeout / 10);
        e.value = `${v}%`, v <= 0 && (clearInterval(a.value), e.value = 0, typeof n.closeEvent == "function" && n.closeEvent());
      }, 10);
    }, x = () => {
      clearInterval(a.value);
    }, p = () => {
      c.value && n.autoClose && r();
    };
    return (v, o) => (i(), l("div", {
      class: h(["j-toastify-container", t.position]),
      onMouseenter: x,
      onMouseleave: p
    }, [
      s("div", {
        class: h(["j-toastify-box", t.type])
      }, [
        s("div", {
          class: "j-toastify-close",
          onClick: o[0] || (o[0] = (...d) => t.closeEvent && t.closeEvent(...d))
        }, o[3] || (o[3] = [
          s("svg", {
            t: "1732172711195",
            class: "icon",
            viewBox: "0 0 1024 1024",
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "p-id": "6521",
            width: "200",
            height: "200"
          }, [
            s("path", {
              d: "M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z",
              "p-id": "6522"
            })
          ], -1)
        ])),
        s("div", b, [
          t.icon ? (i(), l("div", q, [
            t.type === "primary" ? (i(), l("svg", z, o[4] || (o[4] = [
              s("path", {
                d: "M512 64q190.016 4.992 316.512 131.488T960 512q-4.992 190.016-131.488 316.512T512 960q-190.016-4.992-316.512-131.488T64 512q4.992-190.016 131.488-316.512T512 64z m67.008 275.008q26.016 0 43.008-15.488t16.992-41.504-16.992-41.504-42.496-15.488-42.496 15.488-16.992 41.504 16.992 41.504 42.016 15.488z m12 360q0-6.016 0.992-16t0-19.008l-52.992 60.992q-8 8.992-16.512 14.016t-14.496 3.008q-8.992-4-8-14.016l88-276.992q4.992-28-8.992-48t-44.992-24q-35.008 0.992-76.512 29.504t-72.512 72.512v15.008q-0.992 10.016 0 19.008l52.992-60.992q8-8.992 16.512-14.016t13.504-3.008q10.016 4.992 7.008 16l-87.008 276q-7.008 24.992 7.008 44.512t48.992 26.496q50.016-0.992 84-28.992t63.008-72z",
                "p-id": "11727"
              }, null, -1)
            ]))) : u("", !0),
            t.type === "success" ? (i(), l("svg", M, o[5] || (o[5] = [
              s("path", {
                d: "M512 976.742c-256.67 0-464.742-208.071-464.742-464.737C47.258 255.33 255.329 47.258 512 47.258S976.742 255.329 976.742 512c0 256.67-208.071 464.742-464.742 464.742z m225.413-754.268C575.754 328.69 473.231 647.337 473.231 647.337l-63.088-156.795-130.12 101.161c55.209 25.288 134.067 106.214 201.093 212.429C528.43 692.864 674.324 465.254 745.298 445.02c-27.597-80.921-11.822-146.678-7.885-222.546z m0 0",
                "p-id": "12748"
              }, null, -1)
            ]))) : u("", !0),
            t.type === "warning" ? (i(), l("svg", k, o[6] || (o[6] = [
              s("path", {
                d: "M512 0c-281.6 0-512 230.4-512 512s230.4 512 512 512c281.6 0 512-230.4 512-512s-230.4-512-512-512zM512 832c-32 0-64-32-64-64l121.6 0c0 32-25.6 64-57.6 64zM806.4 742.4l-588.8 0 0-38.4 83.2-70.4 0-192c0-102.4 70.4-185.6 172.8-204.8l0-19.2c0-12.8 12.8-25.6 25.6-25.6l25.6 0c12.8 0 25.6 12.8 25.6 25.6l0 12.8c96 19.2 172.8 102.4 172.8 204.8l0 198.4 83.2 70.4 0 38.4z",
                "p-id": "25475"
              }, null, -1)
            ]))) : u("", !0),
            t.type === "danger" ? (i(), l("svg", S, o[7] || (o[7] = [
              s("path", {
                d: "M827.392 195.584a430.016 430.016 0 0 1 97.792 147.456c21.504 54.592 32.256 110.592 32.256 167.936 0 57.344-10.752 113.28-32.256 167.936a430.016 430.016 0 0 1-97.792 147.456 436.48 436.48 0 0 1-147.456 98.304 448.384 448.384 0 0 1-336.384 0 435.136 435.136 0 0 1-147.968-98.304 436.48 436.48 0 0 1-98.304-147.456 448.384 448.384 0 0 1-32.768-167.936c0-57.344 10.88-113.28 32.768-167.936a436.48 436.48 0 0 1 98.304-147.456 428.8 428.8 0 0 1 147.968-97.792 454.656 454.656 0 0 1 336.384 0 430.016 430.016 0 0 1 147.456 97.792z m-106.496 520.192c14.336-14.336 20.672-30.72 18.944-49.152a78.4 78.4 0 0 0-24.064-49.152l-107.52-107.52 107.52-107.52c14.336-14.336 22.4-30.72 24.064-49.152 1.728-18.432-4.608-34.816-18.944-49.152a70.528 70.528 0 0 0-51.712-21.504c-20.16 0-37.376 7.168-51.712 21.504l-107.52 106.496-104.448-104.448a80.576 80.576 0 0 0-49.152-23.04 60.544 60.544 0 0 0-49.152 17.92 71.04 71.04 0 0 0-21.504 52.224c0 20.48 7.168 37.888 21.504 52.224l104.448 104.448L307.2 614.4a70.528 70.528 0 0 0-21.504 51.712c0 20.16 7.168 37.376 21.504 51.712 14.336 14.336 30.72 20.672 49.152 18.944 18.432-1.728 34.816-9.728 49.152-24.064l104.448-104.448 107.52 107.52c14.336 14.336 31.552 21.504 51.712 21.504 20.16 0 37.376-7.168 51.712-21.504z",
                "p-id": "34674"
              }, null, -1)
            ]))) : u("", !0)
          ])) : u("", !0),
          s("div", B, y(t.message), 1)
        ]),
        !t.autoClose && (t.cancelText || t.confirmText) ? (i(), l("div", j, [
          t.cancelText ? (i(), l("button", {
            key: 0,
            type: "button",
            onClick: o[1] || (o[1] = (...d) => t.cancelEvent && t.cancelEvent(...d))
          }, y(t.cancelText), 1)) : u("", !0),
          t.confirmText ? (i(), l("button", {
            key: 1,
            type: "button",
            onClick: o[2] || (o[2] = (...d) => t.confirmEvent && t.confirmEvent(...d))
          }, y(t.confirmText), 1)) : u("", !0)
        ])) : u("", !0),
        t.autoClose ? (i(), l("div", {
          key: 1,
          ref_key: "countDOM",
          ref: c,
          class: "j-toasity-count-down",
          style: C({ width: e.value })
        }, null, 4)) : u("", !0)
      ], 2)
    ], 34));
  }
}, m = {}, I = (t) => {
  if (!m[t] || !document.body.contains(m[t])) {
    const n = document.createElement("div");
    n.style.cssText = D(t), document.body.appendChild(n), m[t] = n;
  }
  return m[t];
}, D = (t) => `
        position: fixed;
        z-index: 999;
        display: flex;
        flex-direction: column;
        gap: 10px;
    ` + {
  "top-right": "top: 20px; right: 20px;",
  "top-left": "top: 20px; left: 20px;",
  "bottom-right": "bottom: 20px; right: 20px;",
  "bottom-left": "bottom: 20px; left: 20px;",
  top: "top: 20px; left: 50%; transform: translate(-50%)",
  bottom: "bottom: 20px; left: 50%; transform: translate(-50%)",
  center: `
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            align-items: center;
        `
}[t];
g.alert = (t, n) => {
  const { position: c = "top-right" } = t;
  let e = I(c);
  const a = document.createElement("div"), r = T(g, {
    ...t,
    closeEvent: () => {
      e.removeChild(a), r.unmount(), typeof t.closeEvent == "function" && t.closeEvent(), typeof n == "function" && n(), e.childElementCount === 0 && (document.body.removeChild(e), e[c] = null);
    },
    cancelEvent: () => {
      e.removeChild(a), r.unmount(), typeof t.cancelEvent == "function" && t.cancelEvent(!1), typeof n == "function" && n(), e.childElementCount === 0 && (document.body.removeChild(e), e[c] = null);
    },
    confirmEvent: () => {
      e.removeChild(a), r.unmount(), typeof t.confirmEvent == "function" && t.confirmEvent(!0), typeof n == "function" && n(), e.childElementCount === 0 && (document.body.removeChild(e), e[c] = null);
    }
  });
  r.mount(a), e.appendChild(a);
};
const J = {
  install(t) {
    t.component("JToastify", g);
  }
};
export {
  g as JToastify,
  J as default
};
