"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3006], {
    81411: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return x
        }
      });
      var t = r(828),
        a = r(85893),
        i = r(69077),
        s = r(7613),
        o = r(67294),
        l = r(40486),
        c = r(64153),
        d = r(52856),
        u = r(64712);

      function x(e) {
        var n = e.routerAddress,
          r = e.approveToken,
          x = e.amount,
          p = (0, o.useState)(null),
          h = p[0],
          m = p[1],
          f = (0, t.Z)((0, c.F)(function (e) {
            return [e.chainId, e.networkName]
          }), 2),
          b = f[0],
          g = f[1],
          w = (0, t.Z)((0, l.x)(function (e) {
            return [e.setNeedsAllowanceIn, ]
          }), 1)[0],
          v = (0, i.PJ)({
            address: r.address,
            abi: s.em,
            functionName: "approve",
            args: [n, x],
            chainId: b
          }).config,
          j = (0, i.GG)(v),
          N = j.data,
          k = (j.isSuccess, j.write),
          y = (0, i.BX)({
            hash: null == N ? void 0 : N.hash,
            onSuccess: function () {
              u.A.success("Your transaction was successful", {
                id: h,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(d.N7[g].explorerUrl, "/tx/").concat(null == N ? void 0 : N.hash), "_blank")
                  }
                }
              }), w(!0)
            },
            onError: function () {
              u.A.error("Your transaction failed", {
                id: h,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(d.N7[g].explorerUrl, "/tx/").concat(null == N ? void 0 : N.hash), "_blank")
                  }
                }
              })
            }
          }).isLoading;
        return (0, o.useEffect)(function () {
          y && m(u.A.loading("Your transaction is being confirmed...", {
            action: {
              label: "View",
              onClick: function () {
                return window.open("".concat(d.N7[g].explorerUrl, "/tx/").concat(null == N ? void 0 : N.hash), "_blank")
              }
            }
          }))
        }, [y]), (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("div", {
            className: "w-full py-4 mx-auto disabled:cursor-not-allowed cursor-pointer text-center transition rounded-full border border-main bg-main1 uppercase text-sm disabled:opacity-50 hover:opacity-80",
            onClick: function () {
              return null == k ? void 0 : k()
            },
            children: ["Approve ", r.symbol]
          })
        })
      }
    },
    94244: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return x
        }
      });
      var t = r(828),
        a = r(85893),
        i = r(69077),
        s = r(7613),
        o = r(67294),
        l = r(39814),
        c = r(64153),
        d = r(52856),
        u = r(64712);

      function x(e) {
        var n = e.routerAddress,
          r = e.tokenIn,
          x = e.tokenOut,
          p = e.amount0,
          h = e.amount1,
          m = function () {
            H(), I()
          },
          f = (0, o.useState)(null),
          b = f[0],
          g = f[1],
          w = (0, o.useState)(null),
          v = w[0],
          j = w[1],
          N = (0, t.Z)((0, c.F)(function (e) {
            return [e.chainId, e.networkName]
          }), 2),
          k = N[0],
          y = N[1],
          C = (0, t.Z)((0, l.H)(function (e) {
            return [e.setNeedsAllowanceIn, e.setNeedsAllowanceOut]
          }), 2),
          Z = C[0],
          A = C[1],
          z = (0, i.PJ)({
            address: r.address,
            abi: s.em,
            functionName: "approve",
            args: [n, p],
            chainId: k
          }).config,
          V = (0, i.PJ)({
            address: x.address,
            abi: s.em,
            functionName: "approve",
            args: [n, h],
            chainId: k
          }).config,
          _ = (0, i.GG)(z),
          B = _.data,
          H = (_.isSuccess, _.write),
          M = (0, i.GG)(V),
          E = M.data,
          I = (M.isSuccess, M.write),
          F = (0, i.BX)({
            hash: null == B ? void 0 : B.hash,
            onSuccess: function () {
              u.A.success("Your transaction was successful", {
                id: b,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(d.N7[y].explorerUrl, "/tx/").concat(null == B ? void 0 : B.hash), "_blank")
                  }
                }
              }), Z(!0)
            },
            onError: function () {
              u.A.error("Your transaction failed", {
                id: b,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(d.N7[y].explorerUrl, "/tx/").concat(null == B ? void 0 : B.hash), "_blank")
                  }
                }
              })
            }
          }).isLoading,
          S = (0, i.BX)({
            hash: null == E ? void 0 : E.hash,
            onSuccess: function () {
              u.A.success("Your transaction was successful", {
                id: v,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(d.N7[y].explorerUrl, "/tx/").concat(null == E ? void 0 : E.hash), "_blank")
                  }
                }
              }), A(!0)
            },
            onError: function () {
              u.A.error("Your transaction failed", {
                id: v,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(d.N7[y].explorerUrl, "/tx/").concat(null == E ? void 0 : E.hash), "_blank")
                  }
                }
              })
            }
          }).isLoading;
        return (0, o.useEffect)(function () {
          S && j(u.A.loading("Your transaction is being confirmed...", {
            action: {
              label: "View",
              onClick: function () {
                return window.open("".concat(d.N7[y].explorerUrl, "/tx/").concat(null == E ? void 0 : E.hash), "_blank")
              }
            }
          })), F && g(u.A.loading("Your transaction is being confirmed...", {
            action: {
              label: "View",
              onClick: function () {
                return window.open("".concat(d.N7[y].explorerUrl, "/tx/").concat(null == B ? void 0 : B.hash), "_blank")
              }
            }
          }))
        }, [S, F]), (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)("div", {
            className: "w-full py-4 mx-auto disabled:cursor-not-allowed cursor-pointer text-center transition rounded-full border border-main bg-main1 uppercase text-sm disabled:opacity-50 hover:opacity-80",
            onClick: function (e) {
              return e ? m() : null
            },
            children: "Approve Both Tokens"
          })
        })
      }
    },
    76637: function (e, n, r) {
      var t = r(85893),
        a = r(54256),
        i = r(43907);
      n.Z = function (e) {
        var n = e.token;
        return (0, t.jsx)("span", {
          children: (null == n ? void 0 : n.address) != a.r_ ? "Balance: " + (!isNaN(null == n ? void 0 : n.userBalance) && n.userBalance > 0 ? (0, i.ZI)(n.userBalance, 5) : "0.00") : (0, t.jsx)(t.Fragment, {})
        })
      }
    },
    16908: function (e, n, r) {
      var t = r(41799),
        a = r(69396),
        i = r(85893);
      r(67294);
      var s = function (e) {
        return (0, i.jsx)("svg", (0, a.Z)((0, t.Z)({
          xmlns: "http://www.w3.org/2000/svg",
          width: 14,
          height: 14,
          fill: "none"
        }, e), {
          children: (0, i.jsx)("path", {
            fill: "#999",
            fillRule: "evenodd",
            d: "M9.24 1.568a.525.525 0 0 0 .028.742l1.47 1.365H4.725a.525.525 0 1 0 0 1.05h6.013L9.268 6.09a.525.525 0 1 0 .714.77l2.45-2.275a.525.525 0 0 0 0-.77L9.982 1.54a.525.525 0 0 0-.742.028Zm-4.48 5.6a.525.525 0 0 0-.742-.028l-2.45 2.275a.525.525 0 0 0 0 .77l2.45 2.275a.527.527 0 0 0 .85-.202.524.524 0 0 0-.136-.567l-1.47-1.366h6.013a.525.525 0 0 0 0-1.05H3.262l1.47-1.365a.525.525 0 0 0 .028-.742Z",
            clipRule: "evenodd"
          })
        }))
      };
      n.Z = s
    },
    99515: function (e, n, r) {
      var t = r(41799),
        a = r(69396),
        i = r(85893);
      r(67294);
      var s = function (e) {
        return (0, i.jsx)("svg", (0, a.Z)((0, t.Z)({
          xmlns: "http://www.w3.org/2000/svg",
          width: "1.5em",
          height: "1.5em",
          fill: "currentColor",
          stroke: "currentColor",
          strokeWidth: 0,
          className: "animate-spin",
          viewBox: "0 0 24 24"
        }, e), {
          children: (0, i.jsx)("path", {
            stroke: "none",
            d: "M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
          })
        }))
      };
      n.Z = s
    },
    65587: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return f
        }
      });
      var t = r(828),
        a = r(85893),
        i = r(11163),
        s = r(25675),
        o = r.n(s),
        l = r(41664),
        c = r.n(l),
        d = r(68274),
        u = r(41799),
        x = r(69396);
      r(67294);
      var p = function (e) {
          return (0, a.jsxs)("svg", (0, x.Z)((0, u.Z)({
            xmlns: "http://www.w3.org/2000/svg",
            width: 27,
            height: 28,
            fill: "none"
          }, e), {
            children: [(0, a.jsx)("path", {
              fill: "currentColor",
              d: "M6.312 8.083h5.966v12.374H6.312zM8.301 4.769h1.768v3.314H8.301zM8.301 20.457h1.768v3.314H8.301zM14.709 14.271h5.966v6.187h-5.966z"
            }), (0, a.jsx)("path", {
              fill: "currentColor",
              d: "M16.697 11.177h1.768v3.314h-1.768zM16.697 20.457h1.768v3.314h-1.768z"
            })]
          }))
        },
        h = r(61119),
        m = r(64153);

      function f(e) {
        e.create, e.setCreate;
        var n = (0, i.useRouter)(),
          r = (0, t.Z)((0, m.F)(function (e) {
            return [e.chainId]
          }), 1)[0];
        return (0, a.jsxs)("div", {
          className: "py-2 mx-auto w-full border-b border-grey",
          children: [(0, a.jsx)("div", {
            className: "relative flex items-center justify-between h-16 w-full container mx-auto md:px-0 px-3",
            children: (0, a.jsxs)("div", {
              className: "xl:grid flex justify-between items-center grid-cols-3 w-full mx-auto",
              children: [(0, a.jsx)("div", {
                className: "flex items-center justify-start flex-shrink-0",
                children: (0, a.jsx)(c(), {
                  href: "/",
                  children: (0, a.jsx)("div", {
                    className: "flex items-center",
                    children: (0, a.jsx)(o(), {
                      src: "/logo.png",
                      width: 70,
                      height: 70,
                      quality: "90",
                      objectFit: "contain",
                      alt: "Ithaca Protocol logo"
                    })
                  })
                })
              }), (0, a.jsx)("div", {
                className: "hidden w-full ml-2 lg:ml-4 xl:ml-0 flex justify-start md:block bg-black",
                children: (0, a.jsxs)("div", {
                  className: "flex md:gap-x-1 gap-x-2 justify-center",
                  children: [(0, a.jsx)(c(), {
                    href: "/",
                    children: (0, a.jsxs)("div", {
                      className: "/" == n.pathname || n.pathname.includes("/limit") ? "bg-main1 border border-main text-main2 transition-all py-1.5 px-5 text-sm flex items-center cursor-pointer gap-x-1.5 text-[13px]" : "text-grey1 border border-transparent transition-all py-1.5 px-5 text-sm flex items-center cursor-pointer gap-x-1.5 text-[13px]",
                      children: [(0, a.jsx)(p, {}), "TRADE"]
                    })
                  }), (0, a.jsx)(c(), {
                    href: "/range",
                    children: (0, a.jsxs)("div", {
                      className: n.pathname.includes("/range") ? "bg-main1 border border-main text-main2 transition-all py-1.5 px-5 md:px-4 text-sm flex items-center cursor-pointer gap-x-1.5 text-[13px]" : "text-grey1 border border-transparent transition-all py-1.5 px-5 md:px-4 text-sm flex items-center cursor-pointer gap-x-1.5 text-[13px]",
                      children: [(0, a.jsx)(h.Z, {}), "RANGE"]
                    })
                  }), 1 === r ? (0, a.jsx)(c(), {
                    href: "/bond",
                    children: (0, a.jsxs)("div", {
                      className: n.pathname.includes("/bond") ? "bg-main1 border border-main text-main2 transition-all py-1.5 px-5 md:px-4 text-sm flex items-center cursor-pointer gap-x-2 text-[13px]" : "text-grey1 border border-transparent transition-all py-1.5 px-5 md:px-4 text-sm flex items-center cursor-pointer gap-x-2 text-[13px]",
                      children: [(0, a.jsxs)("svg", {
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0",
                        viewBox: "0 0 16 16",
                        className: "w-5 h-5",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, a.jsx)("path", {
                          d: "M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                        }), (0, a.jsx)("path", {
                          d: "M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"
                        })]
                      }), "BOND"]
                    })
                  }) : (0, a.jsx)(a.Fragment, {})]
                })
              }), (0, a.jsx)("div", {
                className: "w-full flex justify-end items-center gap-x-4",
                children: (0, a.jsx)(d.p, {})
              })]
            })
          }), (0, a.jsx)("div", {
            className: "fixed bottom-0 left-0 w-full md:hidden z-50 ",
            children: (0, a.jsx)("div", {
              className: "m-auto border-t flex w-full justify-center border-grey shadow-lg p-[10px] bg-black",
              children: (0, a.jsxs)("div", {
                className: "flex",
                children: [(0, a.jsx)(c(), {
                  href: "/",
                  children: (0, a.jsxs)("div", {
                    className: "/" == n.pathname ? "bg-main1 border border-main text-main2 transition-all py-1.5 px-3 text-sm flex items-center cursor-pointer gap-x-0.5 text-[11px]" : "text-grey1 border border-transparent transition-all py-1.5 px-3 text-sm flex items-center cursor-pointer gap-x-0.5 text-[11px]",
                    children: [(0, a.jsx)(p, {}), "TRADE"]
                  })
                }), (0, a.jsx)(c(), {
                  href: "/range",
                  children: (0, a.jsxs)("div", {
                    className: n.pathname.includes("/range") ? "bg-main1 border border-main text-main2 transition-all py-1.5 px-3 text-sm flex items-center cursor-pointer gap-x-0.5 text-[11px]" : "text-grey1 border border-transparent transition-all py-1.5 px-3 text-sm flex items-center cursor-pointer gap-x-0.5 text-[11px]",
                    children: [(0, a.jsx)(h.Z, {}), "RANGE"]
                  })
                }), 1 === r ? (0, a.jsx)(c(), {
                  href: "/bond",
                  children: (0, a.jsxs)("div", {
                    className: n.pathname.includes("/bond") ? "bg-main1 border border-main text-main2 transition-all py-1.5 px-3 text-sm flex items-center cursor-pointer gap-x-1 text-[11px]" : "text-grey1 border border-transparent transition-all py-1.5 px-3 text-sm flex items-center cursor-pointer gap-x-1 text-[11px]",
                    children: [(0, a.jsxs)("svg", {
                      stroke: "currentColor",
                      fill: "currentColor",
                      strokeWidth: "0",
                      viewBox: "0 0 16 16",
                      className: "w-5 h-5",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [(0, a.jsx)("path", {
                        d: "M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                      }), (0, a.jsx)("path", {
                        d: "M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"
                      })]
                    }), "BOND"]
                  })
                }) : (0, a.jsx)(a.Fragment, {})]
              })
            })
          })]
        })
      }
    }
  }
]);