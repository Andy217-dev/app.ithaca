"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7940], {
    37940: function (e, n, o) {
      o.d(n, {
        Z: function () {
          return y
        }
      });
      var s = o(47568),
        a = o(828),
        l = o(70655),
        t = o(85893),
        i = o(67294),
        r = o(25652),
        d = o(7266),
        u = o(57349),
        c = o(34829),
        m = o(20728),
        v = function (e) {
          var n = e.chooseToken,
            o = e.coin;
          return (0, t.jsxs)("button", {
            onClick: function () {
              return n(o)
            },
            "data-name": o.name,
            "data-logouri": o.logoURI,
            "data-symbol": o.symbol,
            "data-address": o.address,
            className: "flex items-center gap-x-2 text-sm md:text-base text-white border-grey border p-1.5 px-3 rounded-[4px] text-sm",
            children: [(0, t.jsx)("img", {
              className: "w-6",
              src: o.logoURI.replace("https://raw.githubusercontent.com/poolshark-protocol/token-metadata/master/blockchains/arbitrum-one/assets/0x903ca00944d0b51e50d9f4fc96167c89f211542a/logo.png","/logo.png")
            }), o.symbol.replace("FIN", "ITHACA")]
          }, o.id + o.symbol.replace("FIN", "ITHACA"))
        },
        x = o(64153),
        f = o(69077),
        p = o(15125),
        h = function (e) {
          var n, o, s, l, r, d, u, c, m = e.chooseToken,
            v = e.coin,
            h = (0, a.Z)((n = (null == v ? void 0 : v.native) ? void 0 : null == v ? void 0 : v.address, o = (0, f.mA)().address, l = (s = (0, i.useState)({}))[0], r = s[1], u = (d = (0, a.Z)((0, x.F)(function (e) {
              return [e.chainId, e.networkName, ]
            }), 2))[0], d[1], (0, f.KQ)({
              address: o,
              token: n,
              chainId: u,
              enabled: !(0, p.dr)(u),
              watch: !0,
              onSuccess: function (e) {
                console.log("token balance:", e), r(e)
              }
            }).data, c = function () {
              return (0, t.jsxs)("div", {
                className: "md:text-xs text-[10px] whitespace-nowrap text-[#4C4C4C]",
                children: ["Balance:", " ", isNaN(Number(null == l ? void 0 : l.formatted)) ? "0.00" : Number(null == l ? void 0 : l.formatted).toFixed(3)]
              })
            }, [l, c]), 2),
            b = h[0];
          h[1];
          var y = (0, a.Z)((0, x.F)(function (e) {
            return [e.chainId]
          }), 1)[0];
          return (0, t.jsx)("div", {
            className: "bg-dark text-white",
            "data-name": v.name,
            "data-logouri": v.logoURI,
            "data-symbol": v.symbol,
            "data-decimals": v.decimals,
            "data-address": v.id + v.symbol,
            children: (0, t.jsxs)("button", {
              onClick: function () {
                return m(v)
              },
              className: "border border-t-grey border-transparent px-5 py-2 flex justify-between items-start w-full",
              children: [(0, t.jsxs)("div", {
                className: "flex items-start gap-x-3",
                children: [(0, t.jsx)("img", {
                  className: "w-8 h-8",
                  src: v.logoURI.replace("https://raw.githubusercontent.com/poolshark-protocol/token-metadata/master/blockchains/arbitrum-one/assets/0x903ca00944d0b51e50d9f4fc96167c89f211542a/logo.png","/logo.png")
                }), (0, t.jsxs)("div", {
                  className: "flex flex-col gap-y-[.5px] items-start ",
                  children: [(0, t.jsx)("h1", {
                    className: "w-full text-sm",
                    children: (v.name).replace("Poolshark","Qui AI")
                  }), (0, t.jsx)("span", {
                    className: "text-[11px] text-grey2",
                    children: (v.symbol).replace("FIN","ITHACA")
                  })]
                })]
              }), (0, t.jsx)("span", {
                children: (0, p.yX)(y, v, b)
              })]
            })
          }, v.address)
        },
        b = o(43967);

      function y(e) {
        var n, o = function () {
            g(!1)
          },
          p = function () {
            g(!0)
          };
        (0, f.mA)().address;
        var y = (0, i.useState)(!1),
          w = y[0],
          g = y[1],
          k = (0, i.useState)(""),
          j = k[0],
          C = k[1],
          N = (0, i.useState)(void 0),
          L = N[0],
          I = N[1],
          T = function (e) {
            var n;
            return (null === (n = j.match(/^0x[a-fA-F0-9]{40}$/)) || void 0 === n ? void 0 : n.length) == 1 && 42 == j.length
          },
          R = (0, a.Z)((0, x.F)(function (e) {
            return [e.chainId, e.networkName, e.logoMap, e.listedtokenList, e.setListedTokenList, e.searchtokenList, e.setSearchTokenList, e.displayTokenList, e.setDisplayTokenList, ]
          }), 9),
          U = (R[0], R[1], R[2]),
          F = R[3],
          S = (R[4], R[5]),
          B = (R[6], R[7]),
          Z = R[8],
          _ = (0, f.dQ)({
            address: j,
            enabled: T(j),
            onSuccess: function () {
              O ? I(O) : A()
            }
          }),
          O = _.data,
          A = (_.isError, _.isLoading, _.refetch);
        (0, i.useEffect)(function () {
          var e;
          (e = (0, s.Z)(function () {
            var e;
            return (0, l.__generator)(this, function (e) {
              return void 0 != L && Z([{
                id: L.address,
                name: L.name,
                address: L.address,
                symbol: L.symbol,
                logoURI: b.du,
                decimals: L.decimals,
                native: !1
              }]), [2]
            })
          }), function () {
            return e.apply(this, arguments)
          })()
        }, [L]), (0, i.useEffect)(function () {
          var e;
          (e = (0, s.Z)(function () {
            return (0, l.__generator)(this, function (e) {
              return T(j) ? A() : Z(F), [2]
            })
          }), function () {
            return e.apply(this, arguments)
          })()
        }, [j, F]), (0, i.useEffect)(function () {
          w && (C(""), Z(F))
        }, [w]);
        var E = function (n) {
          var s, a, l, t, i, r, d, u, c, m, v;
          n = {
            name: null == n ? void 0 : n.name,
            address: null == n ? void 0 : n.id,
            symbol: null == n ? void 0 : n.symbol,
            logoURI: null == n ? void 0 : n.logoURI,
            decimals: null == n ? void 0 : n.decimals,
            native: null !== (s = null == n ? void 0 : n.native) && void 0 !== s && s,
            userBalance: null !== (l = null == n ? void 0 : n.balance) && void 0 !== l ? l : null !== (a = n.userBalance) && void 0 !== a ? a : 0
          }, void 0 != e.amount && void 0 != e.isAmountIn ? "in" === e.type ? e.setTokenIn(e.tokenOut, {
            name: null == n ? void 0 : n.name,
            address: null == n ? void 0 : n.address,
            symbol: null == n ? void 0 : n.symbol,
            logoURI: null == n ? void 0 : n.logoURI,
            decimals: null == n ? void 0 : n.decimals,
            native: null !== (t = null == n ? void 0 : n.native) && void 0 !== t && t,
            userBalance: null !== (i = null == n ? void 0 : n.userBalance) && void 0 !== i ? i : 0
          }, e.amount, e.isAmountIn) : e.setTokenOut(e.tokenIn, {
            name: null == n ? void 0 : n.name,
            address: null == n ? void 0 : n.address,
            symbol: null == n ? void 0 : n.symbol,
            logoURI: null == n ? void 0 : n.logoURI,
            decimals: null == n ? void 0 : n.decimals,
            native: null !== (r = null == n ? void 0 : n.native) && void 0 !== r && r,
            userBalance: null !== (d = null == n ? void 0 : n.userBalance) && void 0 !== d ? d : 0
          }, e.amount, e.isAmountIn) : "in" === e.type ? e.setTokenIn(e.tokenOut, {
            name: null == n ? void 0 : n.name,
            address: null == n ? void 0 : n.address,
            symbol: null == n ? void 0 : n.symbol,
            logoURI: null == n ? void 0 : n.logoURI,
            decimals: null == n ? void 0 : n.decimals,
            native: null !== (u = null == n ? void 0 : n.native) && void 0 !== u && u,
            userBalance: null !== (c = null == n ? void 0 : n.userBalance) && void 0 !== c ? c : 0
          }) : e.setTokenOut(e.tokenIn, {
            name: null == n ? void 0 : n.name,
            address: null == n ? void 0 : n.address,
            symbol: null == n ? void 0 : n.symbol,
            logoURI: null == n ? void 0 : n.logoURI,
            decimals: null == n ? void 0 : n.decimals,
            native: null !== (m = null == n ? void 0 : n.native) && void 0 !== m && m,
            userBalance: null !== (v = null == n ? void 0 : n.userBalance) && void 0 !== v ? v : 0
          }), o()
        };
        return (0, t.jsxs)("div", {
          className: "w-full",
          children: [(0, t.jsx)(c.u, {
            appear: !0,
            show: w,
            as: i.Fragment,
            children: (0, t.jsxs)(m.V, {
              as: "div",
              className: "relative z-50",
              onClose: o,
              children: [(0, t.jsx)(c.u.Child, {
                as: i.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, t.jsx)("div", {
                  className: "fixed inset-0 bg-black bg-opacity-50"
                })
              }), (0, t.jsx)("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: (0, t.jsx)("div", {
                  className: "flex min-h-full items-center justify-center p-4 text-center",
                  children: (0, t.jsx)(c.u.Child, {
                    as: i.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: (0, t.jsxs)(m.V.Panel, {
                      className: "w-full max-w-md transform overflow-hidden rounded-[4px] bg-black border border-grey text-left align-middle shadow-xl transition-all",
                      children: [(0, t.jsxs)("div", {
                        className: "p-5",
                        children: [(0, t.jsxs)("div", {
                          className: "flex justify-between items-center mb-6",
                          children: [(0, t.jsx)("h1", {
                            className: "text-white",
                            children: "Select Token"
                          }), (0, t.jsx)(r.Z, {
                            onClick: function () {
                              return o()
                            },
                            className: "w-6 text-white cursor-pointer"
                          })]
                        }), (0, t.jsx)(d.Z, {
                          className: "w-5 text-white absolute mt-[13px] ml-[14px] text-grey"
                        }), (0, t.jsx)("input", {
                          autoComplete: "off",
                          className: "border border-grey bg-dark outline-none py-2.5 pl-12 rounded-lg w-full placeholder:text-grey placeholder:font-regular text-white text-sm",
                          placeholder: "Search name or paste address",
                          value: j,
                          onChange: function (e) {
                            return C(e.target.value)
                          }
                        }), (0, t.jsx)("div", {
                          className: "flex justify-between flex-wrap mt-4 gap-y-2",
                          children: null == B ? void 0 : B.map(function (e) {
                            if ("" == j.toLowerCase() || " " == j.toLowerCase() || e.symbol.toLowerCase().includes(j.toLowerCase()) || e.name.toLowerCase().includes(j.toLowerCase()) || e.address.toLowerCase().includes(j.toLowerCase())) return (0, t.jsx)(v, {
                              coin: e,
                              chooseToken: E
                            }, e.id + e.symbol)
                          })
                        })]
                      }), (0, t.jsx)("div", {
                        className: "h-[360px] overflow-y-auto",
                        children: "" == j ? F.sort(function (e, n) {
                          return n.balance - e.balance
                        }).map(function (e) {
                          if ("" == j.toLowerCase() || " " == j.toLowerCase() || e.symbol.toLowerCase().includes(j.toLowerCase()) || e.name.toLowerCase().includes(j.toLowerCase()) || e.address.toLowerCase() == j.toLowerCase()) return (0, t.jsx)(h, {
                            coin: e,
                            chooseToken: E
                          }, e.id + e.symbol)
                        }) : S.sort(function (e, n) {
                          return n.balance - e.balance
                        }).map(function (e) {
                          if ("" == j.toLowerCase() || " " == j.toLowerCase() || e.symbol.toLowerCase().includes(j.toLowerCase()) || e.name.toLowerCase().includes(j.toLowerCase()) || e.address.toLowerCase() == j.toLowerCase()) return (0, t.jsx)(h, {
                            coin: e,
                            chooseToken: E
                          }, e.id + e.symbol)
                        })
                      })]
                    })
                  })
                })
              })]
            })
          }), (0, t.jsxs)("button", {
            onClick: function () {
              return p()
            },
            className: "Select Token" != e.tokenIn.symbol && "in" == e.type || "Select Token" != e.tokenOut.symbol && "out" == e.type ? "w-full whitespace-nowrap flex items-center gap-x-8 bg-dark border border-grey px-3 h-full rounded-[4px] h-[2.5rem] md:min-w-[160px]" : "w-full whitespace-nowrap flex items-center gap-x-2 md:gap-x-8 bg-dark border border-grey px-3 h-full rounded-[4px] h-[2.5rem] text-grey1",
            children: [(0, t.jsxs)("div", {
              className: "flex items-center gap-x-2 w-full",
              children: ["Select Token" != e.tokenIn.symbol && "in" == e.type || "Select Token" != e.tokenOut.symbol && "out" == e.type ? (0, t.jsx)("img", {
                className: "md:w-6 w-6",
                src: ("in" == e.type ? U[(0, b.pJ)(e.tokenIn)] : U[(0, b.pJ)(e.tokenOut)]).replace("https://raw.githubusercontent.com/poolshark-protocol/token-metadata/master/blockchains/arbitrum-one/assets/0x903ca00944d0b51e50d9f4fc96167c89f211542a/logo.png","/logo.png")
              }) : (0, t.jsx)(t.Fragment, {}), (0, t.jsx)("span", {
                className: "text-xs uppercase",
                children: (null === (n = e.displayToken) || void 0 === n ? void 0 : n.symbol).replace("FIN","ITHACA")
              })]
            }), (0, t.jsx)(u.Z, {
              className: "w-6"
            })]
          })]
        })
      }
    }
  }
]);