"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1725], {
    68274: function (e, t, n) {
      n.d(t, {
        p: function () {
          return b
        }
      });
      var r = n(41799),
        s = n(69396),
        a = n(85893),
        c = n(39565),
        i = n(57349),
        o = n(828),
        l = n(34829),
        d = n(20728),
        x = n(67294),
        u = n(25652),
        p = n(69077),
        h = n(64153);

      function m(e) {
        var t = e.isOpen,
          n = e.setIsOpen,
          r = e.chainUnsupported,
          s = e.chainId,
          c = (0, o.Z)((0, h.F)(function (e) {
            return [e.setNetworkName, e.setChainId, ]
          }), 2),
          i = c[0];
        c[1];
        var m = (0, p.g0)({
            onSuccess: function (e) {
              n(!1)
            }
          }),
          g = (m.chains, m.error, m.switchNetwork);
        return (0, a.jsx)(l.u, {
          appear: !0,
          show: t,
          as: x.Fragment,
          children: (0, a.jsxs)(d.V, {
            as: "div",
            className: "relative z-50",
            onClose: function () {
              return n(!1)
            },
            children: [(0, a.jsx)(l.u.Child, {
              as: x.Fragment,
              enter: "ease-out duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "ease-in duration-200",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: (0, a.jsx)("div", {
                className: "fixed inset-0 bg-black bg-opacity-50"
              })
            }), (0, a.jsx)("div", {
              className: "fixed inset-0 overflow-y-auto",
              children: (0, a.jsx)("div", {
                className: "flex min-h-full items-center justify-center p-4 text-center",
                children: (0, a.jsx)(l.u.Child, {
                  as: x.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0 scale-95",
                  enterTo: "opacity-100 scale-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100 scale-100",
                  leaveTo: "opacity-0 scale-95",
                  children: (0, a.jsxs)(d.V.Panel, {
                    className: "w-full max-w-sm transform overflow-hidden rounded-xl bg-black text-white border border-grey2 text-left align-middle shadow-xl px-5 py-5 transition-all",
                    children: [(0, a.jsxs)("div", {
                      className: "flex items-center justify-between px-2",
                      children: [(0, a.jsx)("h1", {
                        className: "text-lg",
                        children: "Switch Networks"
                      }), (0, a.jsx)(u.Z, {
                        onClick: function () {
                          return n(!1)
                        },
                        className: "w-7 cursor-pointer"
                      })]
                    }), r ? (0, a.jsx)("h2", {
                      className: "text-sm text-grey2 mt-2 px-2",
                      children: "Wrong network detected, switch or disconnect to continue."
                    }) : "", (0, a.jsxs)("div", {
                      className: "mt-4 space-y-1",
                      children: [(0, a.jsxs)("div", {
                        onClick: function () {
                          i("arbitrum-one"), g(1)
                        },
                        className: "".concat(1 === s ? " bg-background" : "hover:bg-[#0C0C0C] hover:border-[#1C1C1C]", " flex justify-between items-center w-full p-2 rounded-xl  border border-black cursor-pointer"),
                        children: [(0, a.jsxs)("div", {
                          className: "flex gap-x-2 items-center",
                          children: [(0, a.jsx)("img", {
                            style: {
                              width: 17,
                              height: 17
                            },
                            src: "/static/images/arb_icon.png"
                          }), "Ethereum Mainnet"]
                        }), (0, a.jsxs)("div", {
                          className: "".concat(1 === s ? " flex gap-x-2 items-center text-main text-xs" : "hidden"),
                          children: ["Connected", (0, a.jsx)("div", {
                            className: "h-1.5 w-1.5 bg-green-500 rounded-full"
                          })]
                        })]
                      }), !1]
                    })]
                  })
                })
              })
            })]
          })
        })
      }
      var g = function (e) {
          var t = e.chainId;
          return 1 == t || 421614 == t ? (0, a.jsx)("img", {
            style: {
              width: 17,
              height: 17
            },
            src: "/static/images/arb_icon.png",
            className: "aspect-square ".concat(421614 === t && "saturate-0")
          }) : 534352 == t || 534351 == t ? (0, a.jsx)("img", {
            style: {
              width: 17,
              height: 17
            },
            src: "https://scroll-tech.github.io/token-list/scroll.png",
            className: "aspect-square ".concat(534351 === t && "saturate-0")
          }) : (0, a.jsx)(a.Fragment, {})
        },
        b = function (e) {
          var t = e.xl,
            n = void 0 !== t && t,
            o = e.center,
            l = void 0 !== o && o,
            d = (0, x.useState)(!1),
            u = d[0],
            p = d[1],
            h = (0, x.useState)(!1),
            b = (h[0], h[1]);
          return (0, x.useEffect)(function () {
            b("true" === localStorage.getItem("tosAccepted"))
          }, []), (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(c.NL.Custom, {
              children: function (e) {
                var t = e.account,
                  c = e.chain,
                  o = e.openAccountModal,
                  d = e.openConnectModal,
                  x = e.authenticationStatus,
                  h = e.mounted && "loading" !== x;
                return (0, a.jsxs)("div", (0, s.Z)((0, r.Z)({}, !h && {
                  "aria-hidden": !0,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none"
                  }
                }), {
                  children: [h && t && c && (!x || "authenticated" === x) ? c.unsupported && 11155111 != c.id ? (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("button", {
                      onClick: function () {
                        return p(!0)
                      },
                      type: "button",
                      className: "w-full flex gap-x-2 items-center py-2.5 text-sm mx-auto text-white px-5 text-center transition rounded-[4px] uppercase cursor-pointer bg-black border border-red-500 hover:opacity-80",
                      children: ["Wrong network", (0, a.jsx)(i.Z, {
                        className: "w-5"
                      })]
                    })
                  }) : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                      className: "flex w-full flex-row  items-end  justify-end gap-y-4 text-white gap-x-4 ".concat(l ? "justify-center" : ""),
                      children: [(0, a.jsx)("button", {
                        onClick: function () {
                          return p(!0)
                        },
                        type: "button",
                        className: "bg-black border-grey border rounded-[4px] h-[42px] w-[35px] flex justify-center items-center md:w-auto h-[42px] md:px-4 px-2 gap-x-2 hover:opacity-80",
                        children: (0, a.jsx)(g, {
                          chainId: null == c ? void 0 : c.id
                        })
                      }), (0, a.jsxs)("button", {
                        onClick: o,
                        type: "button",
                        className: "flex bg-dark rounded-[4px] 2xl:border-grey border-transparent border hover:opacity-80 ",
                        children: [t.displayBalance ? (0, a.jsx)("div", {
                          className: "bg-dark py-2.5 px-4 rounded-l-lg whitespace-nowrap hidden 2xl:block text-sm flex items-center",
                          children: (0, a.jsx)("span", {
                            children: t.displayBalance
                          })
                        }) : "", (0, a.jsxs)("div", {
                          className: "bg-black flex gap-x-2 rounded-[4px] border-grey border mt-[-1px] mr-[-1px] mb-[-1px] ",
                          children: [(0, a.jsx)("div", {
                            className: "py-2 pl-5 lg:pr-3 pr-5 whitespace-nowrap",
                            children: t.displayName
                          }), (0, a.jsx)("div", {
                            className: "border-l border-grey lg:block hidden py-2.5 px-3",
                            children: (0, a.jsx)(i.Z, {
                              className: "w-5"
                            })
                          })]
                        })]
                      })]
                    })
                  }) : (0, a.jsx)("button", {
                    className: "w-full mx-auto text-white uppercase px-8 rounded-[4px]  text-center transition cursor-pointer bg-main1 border border-main hover:opacity-80 ".concat(n ? "py-4 " : "py-2.5 text-sm"),
                    onClick: d,
                    type: "button",
                    children: "Connect Wallet"
                  }), (0, a.jsx)(m, {
                    isOpen: u,
                    chainUnsupported: null == c ? void 0 : c.unsupported,
                    setIsOpen: p,
                    chainId: null == c ? void 0 : c.id
                  })]
                }))
              }
            })
          })
        }
    },
    61119: function (e, t, n) {
      var r = n(41799),
        s = n(69396),
        a = n(85893);
      n(67294);
      var c = function (e) {
        return (0, a.jsx)("svg", (0, s.Z)((0, r.Z)({
          xmlns: "http://www.w3.org/2000/svg",
          width: 26,
          height: 27,
          fill: "none"
        }, e), {
          children: (0, a.jsx)("path", {
            fill: "currentColor",
            d: "M13.463 3.323a.61.61 0 0 0-.926 0c-1.607 1.88-6.85 8.382-6.85 13.197 0 4.488 2.826 7.313 7.313 7.313s7.313-2.825 7.313-7.313c0-4.815-5.243-11.316-6.85-13.197Zm.35 17.87a.609.609 0 1 1 .003-1.22 3.05 3.05 0 0 0 3.043-3.043.604.604 0 0 1 .407-.58.61.61 0 0 1 .812.577 4.27 4.27 0 0 1-4.265 4.265Z"
          })
        }))
      };
      t.Z = c
    }
  }
]);