"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4345], {
    76637: function (e, t, n) {
      var r = n(85893),
        s = n(54256),
        a = n(43907);
      t.Z = function (e) {
        var t = e.token;
        return (0, r.jsx)("span", {
          children: (null == t ? void 0 : t.address) != s.r_ ? "Balance: " + (!isNaN(null == t ? void 0 : t.userBalance) && t.userBalance > 0 ? (0, a.ZI)(t.userBalance, 5) : "0.00") : (0, r.jsx)(r.Fragment, {})
        })
      }
    },
    66575: function (e, t, n) {
      n.r(t), n.d(t, {
        default: function () {
          return et
        }
      });
      var r = n(47568),
        s = n(828),
        a = n(70655),
        i = n(85893),
        l = n(67294),
        o = n(69077),
        d = n(7613),
        c = n(2593),
        u = n(35553),
        x = n(52856),
        m = n(54256),
        p = n(43967),
        f = n(93585),
        h = n(40486),
        v = n(96958),
        b = n(93279),
        g = n(36832),
        w = n(43907),
        N = n(47015),
        k = n(11163),
        y = n.n(k),
        j = n(39814),
        I = n(64153),
        S = n(71631);

      function A(e) {
        var t, n = e.limitPosition,
          o = e.limitFilledAmount,
          d = (e.address, e.href),
          x = (0, s.Z)((0, I.F)(function (e) {
            return [e.limitSubgraph, e.logoMap, ]
          }), 2),
          m = x[0],
          p = x[1],
          f = (0, s.Z)((0, j.H)(function (e) {
            return [e.tokenIn, e.tokenOut, e.setLimitPositionData, e.setLimitPoolAddress, e.setTokenIn, e.setTokenOut, e.setClaimTick, e.setLimitPoolFromVolatility, e.setNeedsAllowanceIn, e.setNeedsBalanceIn, ]
          }), 10),
          h = f[0],
          v = (f[1], f[2]),
          w = (f[3], f[4]),
          k = f[5],
          A = f[6],
          C = f[7],
          O = f[8],
          T = f[9];
        (0, l.useEffect)(function () {
          P()
        }, [n]);
        var P = (t = (0, r.Z)(function () {
          var e;
          return (0, a.__generator)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, (0, b.J4)(n.poolId, Number(n.min), Number(n.max), 0 == h.callId, Number(n.epochLast), !1, m, void 0)];
              case 1:
                return A(e.sent()), [2]
            }
          })
        }), function () {
          return t.apply(this, arguments)
        });

        function F() {
          return (F = (0, r.Z)(function () {
            var e, t;
            return (0, a.__generator)(this, function (r) {
              return v(n), O(!0), T(!0), e = {
                name: n.tokenIn.name,
                symbol: n.tokenIn.symbol,
                logoURI: p[n.tokenIn.id],
                address: n.tokenIn.id,
                decimals: n.tokenIn.decimals
              }, w(t = {
                name: n.tokenOut.name,
                symbol: n.tokenOut.symbol,
                logoURI: p[n.tokenOut.id],
                address: n.tokenOut.id,
                decimals: n.tokenOut.decimals
              }, e, "0", !0), k(e, t, "0", !1), C(e, t, n.feeTier.toString(), m), y().push({
                pathname: d,
                query: {
                  id: n.id
                }
              }), [2]
            })
          })).apply(this, arguments)
        }
        return (0, i.jsxs)("tr", {
          className: "text-right text-xs md:text-sm bg-black hover:bg-dark cursor-pointer",
          onClick: function () {
            return F.apply(this, arguments)
          },
          children: [(0, i.jsx)("td", {
            className: "py-3 pl-3",
            children: (0, i.jsxs)("div", {
              className: "flex items-center text-xs text-grey1 gap-x-2 text-left",
              children: [(0, i.jsx)("img", {
                className: "w-[23px] h-[23px]",
                src: p[n.tokenIn.address]
              }), parseFloat(u.formatUnits((0, N.oj)(parseInt(n.min), parseInt(n.max), 0 > n.tokenIn.id.localeCompare(n.tokenOut.id), c.O$.from(n.liquidity)), n.tokenIn.decimals)).toFixed(3) + " " + n.tokenIn.symbol]
            })
          }), (0, i.jsx)("td", {
            className: "",
            children: (0, i.jsxs)("div", {
              className: "flex items-center text-xs text-white gap-x-2 text-left",
              children: [(0, i.jsx)("img", {
                className: "w-[23px] h-[23px]",
                src: p[n.tokenOut.address]
              }), parseFloat(u.formatUnits((0, N.HD)(parseInt(n.min), parseInt(n.max), 0 > n.tokenIn.id.localeCompare(n.tokenOut.id), c.O$.from(n.liquidity)), n.tokenOut.decimals)).toPrecision(6) + " " + n.tokenOut.symbol]
            })
          }), (0, i.jsx)("td", {
            className: "text-left text-xs",
            children: (0, i.jsx)("div", {
              className: "flex flex-col",
              children: (0, i.jsxs)("span", {
                children: [(0, i.jsxs)("span", {
                  className: "text-grey1",
                  children: ["1 ", n.tokenIn.symbol, " =", " "]
                }), (0, S.yA)((0, N.bd)(n.tokenIn, n.tokenOut, parseInt(n.min), parseInt(n.max), 0 > n.tokenIn.id.localeCompare(n.tokenOut.id), c.O$.from(n.liquidity), (0, N.oj)(parseInt(n.min), parseInt(n.max), 0 > n.tokenIn.id.localeCompare(n.tokenOut.id), c.O$.from(n.liquidity))).toPrecision(6), 0 > n.tokenIn.id.localeCompare(n.tokenOut.id)) + " " + n.tokenOut.symbol]
              })
            })
          }), (0, i.jsx)("td", {
            className: "md:table-cell hidden",
            children: (0, i.jsxs)("div", {
              className: "text-white bg-black border border-grey relative flex items-center justify-center h-7 rounded-[4px] text-center text-[10px]",
              children: [(0, i.jsxs)("span", {
                className: "z-50 px-3",
                children: [(100 * o / parseFloat(u.formatUnits((0, N.xx)(parseInt(n.min), parseInt(n.max), 0 > n.tokenIn.id.localeCompare(n.tokenOut.id), (0, N.oj)(parseInt(n.min), parseInt(n.max), 0 > n.tokenIn.id.localeCompare(n.tokenOut.id), c.O$.from(n.liquidity))), n.tokenOut.decimals))).toFixed(1), "% Filled"]
              }), (0, i.jsx)("div", {
                className: "h-full bg-grey/60 w-[0%] absolute left-0"
              })]
            })
          }), (0, i.jsx)("td", {
            className: "text-grey1 text-left pl-3 text-xs md:table-cell hidden",
            children: (0, g.Q)(n.timestamp)
          }), (0, i.jsx)("td", {
            className: "text-sm text-grey1 md:table-cell hidden"
          })]
        }, n.id)
      }
      var C = n(86237),
        O = n(88935),
        T = n(37940),
        P = n(67054),
        F = n(57349),
        _ = n(61119),
        Z = n(68274),
        L = n(3203),
        E = n(9890),
        B = n(64712);

      function U(e) {
        var t = e.disabled,
          n = e.routerAddress,
          r = e.poolAddresses,
          a = e.amountIn,
          d = e.tokenInNative,
          c = e.tokenOutNative,
          u = e.swapParams,
          m = e.gasLimit,
          p = e.resetAfterSwap,
          v = (0, s.Z)((0, I.F)(function (e) {
            return [e.chainId, e.networkName]
          }), 2),
          b = v[0],
          g = v[1],
          w = (0, l.useState)(null),
          N = w[0],
          k = w[1],
          y = (0, s.Z)((0, h.x)(function (e) {
            return [e.setNeedsAllowanceIn, e.setNeedsBalanceIn, e.setNeedsBalanceOut, e.tradeButton]
          }), 4),
          j = y[0],
          S = y[1],
          A = y[2],
          C = y[3],
          O = (0, l.useState)(!1);
        O[0], O[1];
        var T = (0, l.useState)(!1);
        T[0], T[1], (0, o.mA)().address;
        var P = (0, o.PJ)({
            address: n,
            abi: f.i,
            functionName: "multiSwapSplit",
            args: [r, u],
            enabled: r.length > 0 && u.length > 0,
            chainId: b,
            overrides: {
              gasLimit: m,
              value: (0, E.P4)(d, c, a)
            }
          }).config,
          F = (0, o.GG)(P),
          _ = F.data,
          Z = F.write,
          L = (0, o.BX)({
            hash: null == _ ? void 0 : _.hash,
            onSuccess: function () {
              B.A.success("Your transaction was successful", {
                id: N,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(x.N7[g].explorerUrl, "/tx/").concat(null == _ ? void 0 : _.hash), "_blank")
                  }
                }
              }), p(), j(!0), S(!0), A(!0)
            },
            onError: function () {
              B.A.error("Your transaction failed", {
                id: N,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(x.N7[g].explorerUrl, "/tx/").concat(null == _ ? void 0 : _.hash), "_blank")
                  }
                }
              })
            }
          }).isLoading;
        return (0, l.useEffect)(function () {
          L && k(B.A.loading("Your transaction is being confirmed...", {
            action: {
              label: "View",
              onClick: function () {
                return window.open("".concat(x.N7[g].explorerUrl, "/tx/").concat(null == _ ? void 0 : _.hash), "_blank")
              }
            }
          }))
        }, [L]), (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("button", {
            className: "w-full py-4 mx-auto disabled:cursor-not-allowed cursor-pointer text-center transition rounded-full border border-main bg-main1 uppercase text-sm disabled:opacity-50 hover:opacity-80",
            disabled: t,
            onClick: function (e) {
              return e ? null == Z ? void 0 : Z() : null
            },
            children: t && "" != C.buttonMessage ? C.buttonMessage : "Swap"
          })
        })
      }
      var M = n(35790),
        R = n(62598);

      function D(e) {
        var t = e.disabled,
          n = e.routerAddress,
          r = e.wethAddress,
          a = e.tokenInSymbol,
          d = e.amountIn,
          c = e.gasLimit,
          u = e.resetAfterSwap,
          p = (0, s.Z)((0, I.F)(function (e) {
            return [e.chainId, e.networkName]
          }), 2),
          f = p[0],
          v = p[1],
          b = (0, s.Z)((0, h.x)(function (e) {
            return [e.setNeedsAllowanceIn, e.setNeedsBalanceIn, e.setNeedsBalanceOut, e.tradeButton]
          }), 4),
          g = b[0],
          w = b[1],
          N = b[2],
          k = b[3],
          y = (0, l.useState)(null),
          j = y[0],
          S = y[1];
        (0, o.mA)().address;
        var A = (0, o.PJ)({
            address: r,
            abi: R.f,
            functionName: "withdraw",
            args: [d],
            enabled: void 0 != n && r != m.r_,
            chainId: f,
            overrides: {
              gasLimit: c
            }
          }).config,
          C = (0, o.GG)(A),
          O = C.data,
          T = C.write,
          P = (0, o.BX)({
            hash: null == O ? void 0 : O.hash,
            onSuccess: function () {
              B.A.success("Your transaction was successful", {
                id: j,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(x.N7[v].explorerUrl, "/tx/").concat(null == O ? void 0 : O.hash), "_blank")
                  }
                }
              }), u(), g(!0), w(!0), N(!0)
            },
            onError: function () {
              B.A.error("Your transaction failed", {
                id: j,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(x.N7[v].explorerUrl, "/tx/").concat(null == O ? void 0 : O.hash), "_blank")
                  }
                }
              })
            }
          }).isLoading;
        return (0, l.useEffect)(function () {
          P && S(B.A.loading("Your transaction is being confirmed...", {
            action: {
              label: "View",
              onClick: function () {
                return window.open("".concat(x.N7[v].explorerUrl, "/tx/").concat(null == O ? void 0 : O.hash), "_blank")
              }
            }
          }))
        }, [P]), (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("button", {
            className: "w-full py-4 mx-auto disabled:cursor-not-allowed cursor-pointer text-center transition rounded-full border border-main bg-main1 uppercase text-sm disabled:opacity-50 hover:opacity-80",
            disabled: t || c.lte(m.nw),
            onClick: function (e) {
              return e ? null == T ? void 0 : T() : null
            },
            children: t && "" != k.buttonMessage ? k.buttonMessage : "Unwrap " + a
          })
        })
      }

      function q(e) {
        var t = e.disabled,
          n = e.routerAddress,
          r = e.wethAddress,
          a = e.tokenInSymbol,
          d = e.amountIn,
          c = e.gasLimit,
          u = e.resetAfterSwap,
          p = (0, s.Z)((0, I.F)(function (e) {
            return [e.chainId, e.networkName]
          }), 2),
          f = p[0],
          v = p[1],
          b = (0, l.useState)(null),
          g = b[0],
          w = b[1],
          N = (0, s.Z)((0, h.x)(function (e) {
            return [e.setNeedsAllowanceIn, e.setNeedsBalanceIn, e.setNeedsBalanceOut, e.tradeButton]
          }), 4),
          k = N[0],
          y = N[1],
          j = N[2],
          S = N[3];
        (0, o.mA)().address;
        var A = (0, o.PJ)({
            address: r,
            abi: R.f,
            functionName: "deposit",
            args: [],
            enabled: void 0 != n && r != m.r_,
            chainId: f,
            overrides: {
              gasLimit: c,
              value: d
            }
          }).config,
          C = (0, o.GG)(A),
          O = C.data,
          T = C.write,
          P = (0, o.BX)({
            hash: null == O ? void 0 : O.hash,
            onSuccess: function () {
              B.A.success("Your transaction was successful", {
                id: g,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(x.N7[v].explorerUrl, "/tx/").concat(null == O ? void 0 : O.hash), "_blank")
                  }
                }
              }), u(), k(!0), y(!0), j(!0)
            },
            onError: function () {
              B.A.error("Your transaction failed", {
                id: g,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(x.N7[v].explorerUrl, "/tx/").concat(null == O ? void 0 : O.hash), "_blank")
                  }
                }
              })
            }
          }).isLoading;
        return (0, l.useEffect)(function () {
          P && w(B.A.loading("Your transaction is being confirmed...", {
            action: {
              label: "View",
              onClick: function () {
                return window.open("".concat(x.N7[v].explorerUrl, "/tx/").concat(null == O ? void 0 : O.hash), "_blank")
              }
            }
          }))
        }, [P]), (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("button", {
            className: "w-full py-4 mx-auto disabled:cursor-not-allowed cursor-pointer text-center transition rounded-full border border-main bg-main1 uppercase text-sm disabled:opacity-50 hover:opacity-80",
            disabled: t || c.lte(m.nw),
            onClick: function (e) {
              return e ? null == T ? void 0 : T() : null
            },
            children: t && "" != S.buttonMessage ? S.buttonMessage : "Wrap " + a
          })
        })
      }
      var z = n(15125),
        $ = n(76637);

      function V() {
        var e, t, n, d, p, v = function (e) {
            for (var t = [], n = [], r = 0; r < e.length; r++)
              if (e[r].pool != m.r_) {
                t.push(e[r].pool);
                var s, a, i = parseFloat(S.pk.getPriceStringAtSqrtPrice(e[0].priceAfter, er, el));
                if ((null === (s = e[r].pool) || void 0 === s ? void 0 : s.toLowerCase()) == (null === (a = V.id) || void 0 === a ? void 0 : a.toLowerCase())) {
                  var l = parseFloat(S.pk.getPriceStringAtSqrtPrice(V.poolPrice, er, el)),
                    o = 100 * Math.abs(i - l) / l;
                  (o < 0 || o > 100) && (o = 100), e0(o.toFixed(2))
                }
                var d = i * (parseFloat(en) / 100),
                  u = 0 == er.callId ? i - d : i + d,
                  x = S.pk.getSqrtPriceAtPriceString(u.toString(), er, el),
                  p = c.O$.from(String(x)),
                  f = {
                    to: eO,
                    priceLimit: p,
                    amount: J ? ed : eu,
                    exactIn: J,
                    zeroForOne: 0 == er.callId,
                    callbackData: C.s("")
                  };
                n.push(f)
              } eY(t), eH(n)
          },
          b = (0, s.Z)((0, I.F)(function (e) {
            return [e.chainId, e.networkName, e.limitSubgraph, e.setLimitSubgraph, e.logoMap]
          }), 5),
          g = b[0],
          y = b[1],
          A = b[2];
        b[3], b[4];
        var E = (0, l.useState)(),
          B = E[0];
        E[1];
        var R = (0, s.Z)((0, h.x)(function (e) {
            return [e.tradePoolData, e.setTradePoolData, e.setTradePoolPrice, e.setTradePoolLiquidity, e.tradeButton, e.pairSelected, e.setPairSelected, e.exactIn, e.setExactIn, e.limitTabSelected, e.wethCall, e.tradeSlippage, e.setTradeSlippage, e.tokenIn, e.setTokenIn, e.setTokenInTradeUSDPrice, e.setTokenOutTradeUSDPrice, e.tokenOut, e.setTokenOut, e.amountIn, e.setAmountIn, e.amountOut, e.setAmountOut, e.needsAllowanceIn, e.setNeedsAllowanceIn, e.switchDirection, e.setTradeButtonState, ]
          }), 27),
          V = R[0],
          Y = R[1],
          Q = R[2],
          G = R[3],
          H = R[4],
          W = R[5],
          X = R[6],
          J = R[7],
          K = R[8],
          ee = R[9],
          et = R[10],
          en = R[11],
          er = (R[12], R[13]),
          es = R[14],
          ea = R[15],
          ei = R[16],
          el = R[17],
          eo = R[18],
          ed = R[19],
          ec = R[20],
          eu = R[21],
          ex = R[22],
          em = R[23],
          ep = R[24],
          ef = R[25],
          eh = R[26],
          ev = (0, s.Z)((0, j.H)(function (e) {
            return [e.setTokenIn, e.setTokenOut, ]
          }), 2),
          eb = ev[0],
          eg = ev[1],
          ew = (0, O.Z)(),
          eN = ew.inputBox,
          ek = ew.display,
          ey = ew.setDisplay,
          ej = (0, O.Z)(),
          eI = ej.inputBox,
          eS = ej.display,
          eA = ej.setDisplay,
          eC = (0, o.mA)(),
          eO = eC.address,
          eT = eC.isDisconnected,
          eP = eC.isConnected,
          eF = (0, o.mx)().data;
        (0, o.yL)();
        var e_ = (0, k.useRouter)();
        (0, l.useEffect)(function () {
          ee || (ey(""), ec(m.nw), eA(""), ex(m.nw))
        }, [ee]);
        var eZ = (0, l.useState)(void 0),
          eL = eZ[0],
          eE = eZ[1],
          eB = (0, l.useState)(void 0),
          eU = eB[0],
          eM = eB[1];

        function eR(e, t) {
          return eD.apply(this, arguments)
        }

        function eD() {
          return (eD = (0, r.Z)(function (e, t) {
            var n, r, s, i, l;
            return (0, a.__generator)(this, function (a) {
              switch (a.label) {
                case 0:
                  return [4, (0, P.ul)(A, er, el, V, Y, ea, ei)];
                case 1:
                  if (n = a.sent(), r = [], s = [], n)
                    for (i = 0; i < n.length; i++) l = {
                      priceLimit: 0 == er.callId ? S.EO : S.PV,
                      amount: e,
                      exactIn: t,
                      zeroForOne: 0 == er.callId
                    }, s[i] = l, r[i] = n[i].id;
                  return eE(r), eM(s), [2]
              }
            })
          })).apply(this, arguments)
        }(0, l.useEffect)(function () {
          var e = setInterval(function () {
            (J ? ed.gt(m.nw) : eu.gt(m.nw)) && (0, P.ul)(A, er, el, V, Y, ea, ei, Q, G)
          }, 5e3);
          return function () {
            return clearInterval(e)
          }
        }, [J ? ed : eu, null == V ? void 0 : V.id]), (0, l.useEffect)(function () {
          if (er.address && el.address !== m.r_) {
            if (et || eR(J ? ed : eu, J), J) {
              if (!isNaN(parseFloat(ek))) {
                var e = (0, w.vz)(ek, er.decimals);
                ec(e), eq(e, !0)
              }
            } else if (!isNaN(parseFloat(eS))) {
              var t = (0, w.vz)(eS, el.decimals);
              ex(t), eq(t, !1)
            }
            er.native || ep(!0)
          }
        }, [er.address, el.address]);
        var eq = function (e, t) {
            t ? e.gt(m.nw) ? et ? (eA(u.formatUnits(e, er.decimals)), ex(e)) : eR(e, !0) : (eA(""), ex(m.nw)) : e.gt(m.nw) ? et ? (ey(u.formatUnits(e, el.decimals)), ec(e)) : eR(e, !1) : (ey(""), ec(m.nw))
          },
          ez = function (e) {
            if ("tokenIn" === e.target.name) {
              var t = (0, s.Z)((0, w.wv)(e, er), 2),
                n = t[0],
                r = t[1];
              W ? r.eq(ed) ? (ey(n), r.eq(m.nw) && eA("")) : (ey(n), ec(r), eq(r, !0)) : (ey(n), eA(""), ec(r)), K(!0)
            } else if ("tokenOut" === e.target.name) {
              var a = (0, s.Z)((0, w.wv)(e, el), 2),
                i = a[0],
                l = a[1];
              W ? l.eq(eu) ? (eA(i), l.eq(m.nw) && ey("")) : (eA(i), ex(l), eq(l, !1)) : (eA(i), ey(""), ex(l)), K(!1)
            }
          },
          e$ = (0, l.useState)([]),
          eV = e$[0],
          eY = e$[1],
          eQ = (0, l.useState)([]),
          eG = eQ[0],
          eH = eQ[1],
          eW = (0, o.do)({
            address: (0, z.AQ)(y),
            abi: f.i,
            functionName: "multiQuote",
            args: [eL, eU, !0],
            chainId: g,
            enabled: void 0 != eL && void 0 != eU && !et,
            onError: function (e) {
              console.log("Error multiquote", e)
            },
            onSuccess: function (e) {}
          }).data;
        (0, l.useEffect)(function () {
          if (eW && eW[0]) {
            var e, t;
            (null === (e = eW[0].amountIn) || void 0 === e ? void 0 : e.gt(m.nw)) && (null === (t = eW[0].amountOut) || void 0 === t ? void 0 : t.gt(m.nw)) ? (J ? (ex(eW[0].amountOut), eA((0, w.ZI)(parseFloat(u.formatUnits(eW[0].amountOut.toString(), el.decimals)), 5))) : (ec(eW[0].amountIn), ey((0, w.ZI)(parseFloat(u.formatUnits(eW[0].amountIn.toString(), er.decimals)), 5))), v(eW)) : J ? (ex(m.nw), eA("")) : (ec(m.nw), ey(""))
          } else void 0 != eW && (J ? (ex(m.nw), eA("")) : (ec(m.nw), ey("")))
        }, [eW, eU, en]);
        var eX = function () {
            ey(""), eA(""), ec(m.nw), ex(m.nw), setTimeout(function () {
              eR(c.O$.from("0"), !0)
            }, 2e3)
          },
          eJ = (0, l.useState)("0.00"),
          eK = eJ[0],
          e0 = eJ[1],
          e1 = (0, l.useState)("$0.00"),
          e5 = e1[0],
          e2 = e1[1],
          e3 = (0, l.useState)(m.nw),
          e4 = e3[0],
          e7 = e3[1];

        function e6() {
          return (e6 = (0, r.Z)(function () {
            var e, t;
            return (0, a.__generator)(this, function (n) {
              switch (n.label) {
                case 0:
                  if (!(((null === (e = er.userRouterAllowance) || void 0 === e ? void 0 : e.gte(ed)) || er.native && (0, w.vz)(null === (t = er.userBalance) || void 0 === t ? void 0 : t.toString(), er.decimals).gte(ed)) && !et)) return [3, 2];
                  return [4, (0, M.Fe)((0, z.AQ)(y), eV, eG, er, el, ed, eF, eP, e2, e7)];
                case 1:
                  return n.sent(), [3, 3];
                case 2:
                  e7(m.nw), n.label = 3;
                case 3:
                  return [2]
              }
            })
          })).apply(this, arguments)
        }

        function e9() {
          return (e9 = (0, r.Z)(function () {
            var e;
            return (0, a.__generator)(this, function (t) {
              switch (t.label) {
                case 0:
                  if (!((null === (e = er.userRouterAllowance) || void 0 === e ? void 0 : e.gte(ed)) || er.native)) return [3, 2];
                  return [4, (0, M.I0)(x.N7[y].wethAddress, er, el, ed, eF, eP, e2, e7)];
                case 1:
                  t.sent(), t.label = 2;
                case 2:
                  return [2]
              }
            })
          })).apply(this, arguments)
        }(0, l.useEffect)(function () {
          ed.eq(m.nw) || em && !er.native || void 0 == V || et ? et && function () {
            return e9.apply(this, arguments)
          }() : function () {
            return e6.apply(this, arguments)
          }()
        }, [eG, er.address, el.address, er.native, er.userBalance, er.userRouterAllowance, em, et, ed, ]), (0, l.useEffect)(function () {
          eh()
        }, [ed, eu, er.userBalance, er.address, el.address, er.userRouterAllowance, ]);
        var e8 = (0, l.useState)(!1),
          te = e8[0],
          tt = e8[1],
          tn = function () {
            if (te) {
              var e, t;
              return (0, i.jsxs)("div", {
                className: "flex flex-col justify-between w-full my-1 px-1 break-normal transition duration-500 h-fit",
                children: [(0, i.jsxs)("div", {
                  className: "flex p-1",
                  children: [(0, i.jsx)("div", {
                    className: "text-xs text-[#4C4C4C]",
                    children: "Expected Output"
                  }), (0, i.jsx)("div", {
                    className: "ml-auto text-xs ".concat(W ? "text-white" : "text-[#4C4C4C]"),
                    children: W ? (0, w.ZI)(parseFloat(u.formatUnits(null != eu ? eu : m.nw, el.decimals)), 5) : "Select Token"
                  })]
                }), (0, i.jsxs)("div", {
                  className: "flex p-1",
                  children: [(0, i.jsx)("div", {
                    className: "text-xs text-[#4C4C4C]",
                    children: "Network Fee"
                  }), (0, i.jsx)("div", {
                    className: "ml-auto text-xs ".concat((null === (e = er.userRouterAllowance) || void 0 === e ? void 0 : e.lt(ed)) ? "text-[#4C4C4C]" : "text-white"),
                    children: (null === (t = er.userRouterAllowance) || void 0 === t ? void 0 : t.lt(ed)) ? "Approve Token" : e5
                  })]
                }), (0, i.jsxs)("div", {
                  className: "flex p-1",
                  children: [(0, i.jsxs)("div", {
                    className: "text-xs text-[#4C4C4C]",
                    children: ["Minimum received after slippage (", en, "%)"]
                  }), (0, i.jsx)("div", {
                    className: "ml-auto text-xs",
                    children: (0, w.ZI)(parseFloat(u.formatUnits(eu, el.decimals)) * (100 - parseFloat(en)) / 100, 5)
                  })]
                }), (0, i.jsxs)("div", {
                  className: "flex p-1",
                  children: [(0, i.jsx)("div", {
                    className: "text-xs text-[#4C4C4C]",
                    children: "Price Impact"
                  }), (0, i.jsx)("div", {
                    className: "ml-auto text-xs",
                    children: W ? eK ? eK + "%" : "0.00%" : "Select Token"
                  })]
                })]
              })
            }
          };
        return (0, i.jsxs)("div", {
          children: [(0, i.jsxs)("div", {
            className: "border border-grey rounded-[4px] w-full py-3 px-5 mt-2.5 flex flex-col gap-y-2",
            children: [(0, i.jsxs)("div", {
              className: "flex items-end justify-between text-[11px] text-grey1",
              children: [(0, i.jsxs)("span", {
                children: [" ", "$", isNaN(parseInt(ed.toString())) || isNaN(er.decimals) || isNaN(er.USDPrice) ? "0" : ((isNaN(parseFloat(ek)) ? 0 : parseFloat(ek)) * (null !== (t = er.USDPrice) && void 0 !== t ? t : 0)).toFixed(2)]
              }), (0, i.jsx)($.Z, {
                token: er
              })]
            }), (0, i.jsxs)("div", {
              className: "flex items-end justify-between mt-2 mb-3",
              children: [eN("0", er, "tokenIn", ez), (0, i.jsxs)("div", {
                className: "flex items-center gap-x-2",
                children: [eP && B === y ? (0, i.jsx)("button", {
                  onClick: function () {
                    ez({
                      target: {
                        value: er.userBalance.toString(),
                        name: "tokenIn"
                      }
                    })
                  },
                  className: "text-xs text-grey1 bg-dark h-10 px-3 rounded-[4px] border-grey border",
                  children: "MAX"
                }) : null, (0, i.jsx)(T.Z, {
                  index: "0",
                  type: "in",
                  tokenIn: er,
                  setTokenIn: es,
                  tokenOut: el,
                  setTokenOut: eo,
                  displayToken: er,
                  amount: J ? ek : eS,
                  isAmountIn: J
                }, "in")]
              })]
            })]
          }), (0, i.jsx)("div", {
            onClick: function () {
              ef(J, J ? ek : eS, J ? ec : ex)
            },
            className: "flex items-center justify-center w-full pt-10 pb-3",
            children: (0, i.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "1.5",
              stroke: "currentColor",
              className: "w-5 cursor-pointer",
              children: (0, i.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              })
            })
          }), (0, i.jsx)("span", {
            className: "text-[11px] text-grey1",
            children: "TO"
          }), (0, i.jsxs)("div", {
            className: "border border-grey rounded-[4px] w-full py-3 px-5 mt-2.5 flex flex-col gap-y-2",
            children: [(0, i.jsxs)("div", {
              className: "flex items-end justify-between text-[11px] text-grey1",
              children: [(0, i.jsxs)("span", {
                children: ["$", isNaN(el.decimals) || isNaN(el.USDPrice) ? (0, i.jsx)(i.Fragment, {
                  children: "0"
                }) : ((isNaN(parseFloat(eS)) ? 0 : parseFloat(eS)) * (null !== (n = el.USDPrice) && void 0 !== n ? n : 0)).toFixed(2)]
              }), (0, i.jsx)("span", {
                children: (null == el ? void 0 : el.address) != m.r_ ? "Balance: " + (!isNaN(null == el ? void 0 : el.userBalance) && el.userBalance > 0 ? (0, w.ZI)(el.userBalance, 5) : "0.00") : (0, i.jsx)(i.Fragment, {})
              })]
            }), (0, i.jsxs)("div", {
              className: "flex items-end justify-between mt-2 mb-3 text-3xl",
              children: [(0, i.jsx)("div", {
                children: eI("0", el, "tokenOut", ez)
              }), (0, i.jsx)("div", {
                className: "flex items-center gap-x-2",
                children: (0, i.jsx)(T.Z, {
                  type: "out",
                  tokenIn: er,
                  setTokenIn: es,
                  tokenOut: el,
                  setTokenOut: eo,
                  setPairSelected: X,
                  displayToken: el,
                  amount: J ? ek : eS,
                  isAmountIn: J
                }, "out")
              })]
            })]
          }), (0, i.jsxs)("div", {
            className: "py-4",
            children: [(0, i.jsxs)("div", {
              className: "flex px-2 cursor-pointer py-2 rounded-[4px]",
              onClick: function () {
                return tt(!te)
              },
              children: [(0, i.jsxs)("div", {
                className: "flex-none text-xs uppercase text-[#C9C9C9]",
                children: ["1 " + er.symbol, " =", " ", (0, N.uC)(et, W, null == V ? void 0 : V.poolPrice, er, el) + " " + el.symbol.replace("FIN","ITHACA")]
              }), (0, i.jsx)("div", {
                className: "ml-auto text-xs uppercase text-[#C9C9C9]",
                children: (0, i.jsx)("button", {
                  children: (0, i.jsx)(F.Z, {
                    className: "w-4 h-4"
                  })
                })
              })]
            }), (0, i.jsx)("div", {
              className: "flex-wrap w-full break-normal transition ",
              children: (0, i.jsx)(tn, {})
            })]
          }), er.address == m.r_ || el.address == m.r_ || (null == V ? void 0 : V.id) != m.r_ || (null == V ? void 0 : V.feeTier) == void 0 || et ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsxs)("div", {
            className: "flex gap-x-5 rounded-[4px] items-center text-xs p-2 border bg-dark border-grey mb-5",
            children: [(0, i.jsx)(_.Z, {
              className: "text-main2"
            }), " ", (0, i.jsxs)("span", {
              className: "text-grey3 flex flex-col gap-y-[-2px]",
              children: ["No pools exist for this token pair.", " ", (0, i.jsx)("a", {
                className: " hover:underline text-main2 cursor-pointer",
                onClick: function () {
                  eb(el, er, "0", !0), eg(er, el, "0", !1), e_.push({
                    pathname: "/range/add-liquidity",
                    query: {
                      feeTier: "3000",
                      poolId: m.r_
                    }
                  })
                },
                children: "Click here to create a range pool"
              })]
            })]
          }), (null == V ? void 0 : V.liquidity) == "0" ? (0, i.jsxs)("div", {
            className: "flex gap-x-5 rounded-[4px] items-center text-xs p-2 border bg-dark border-grey mb-5",
            children: [(0, i.jsx)(_.Z, {
              className: "text-main2"
            }), " ", (0, i.jsxs)("span", {
              className: "text-grey3 flex flex-col gap-y-[-2px]",
              children: ["This pool has no liquidity.", " ", (0, i.jsx)("a", {
                className: " hover:underline text-main2 cursor-pointer",
                onClick: function () {
                  eb(el, er, "0", !0), eg(er, el, "0", !1), e_.push({
                    pathname: "/range/add-liquidity",
                    query: {
                      feeTier: "3000",
                      poolId: m.r_
                    }
                  })
                },
                children: "Click here to add liquidity."
              })]
            })]
          }) : (0, i.jsx)(i.Fragment, {}), eT ? (0, i.jsx)(Z.p, {
            xl: !0
          }) : (0, i.jsx)(i.Fragment, {
            children: (null === (e = er.userRouterAllowance) || void 0 === e ? void 0 : e.lt(ed)) && !er.native && W && eu.gt(m.nw) ? (0, i.jsx)("div", {
              children: (0, i.jsx)(L.Z, {
                routerAddress: (0, z.AQ)(y),
                approveToken: er.address,
                tokenSymbol: er.symbol,
                amount: ed
              })
            }) : et ? er.native ? (0, i.jsx)(q, {
              disabled: e4.eq(m.nw) || H.disabled,
              routerAddress: (0, z.AQ)(y),
              wethAddress: x.N7[y].wethAddress,
              tokenInSymbol: er.symbol,
              amountIn: ed,
              gasLimit: e4,
              resetAfterSwap: eX
            }) : (0, i.jsx)(D, {
              disabled: e4.eq(m.nw) || H.disabled,
              routerAddress: (0, z.AQ)(y),
              wethAddress: x.N7[y].wethAddress,
              tokenInSymbol: er.symbol,
              amountIn: ed,
              gasLimit: e4,
              resetAfterSwap: eX
            }) : (0, i.jsx)(U, {
              disabled: H.disabled || em && !er.native || e4.lt(c.O$.from("100000")),
              routerAddress: (0, z.AQ)(y),
              amountIn: ed,
              tokenInNative: null !== (d = er.native) && void 0 !== d && d,
              tokenOutNative: null !== (p = el.native) && void 0 !== p && p,
              poolAddresses: eV,
              swapParams: null != eG ? eG : {},
              gasLimit: e4,
              resetAfterSwap: eX
            })
          })]
        })
      }

      function Y(e) {
        var t = e.disabled,
          n = e.routerAddress,
          r = e.poolAddress,
          a = e.to,
          d = e.amount,
          c = e.mintPercent,
          u = e.lower,
          p = e.upper,
          v = e.zeroForOne,
          b = e.closeModal,
          g = e.gasLimit,
          w = e.resetAfterSwap,
          N = (0, s.Z)((0, I.F)(function (e) {
            return [e.chainId, e.networkName, ]
          }), 2),
          k = N[0],
          y = N[1],
          j = (0, s.Z)((0, h.x)(function (e) {
            return [e.setNeedsRefetch, e.setNeedsAllowanceIn, e.setNeedsBalanceIn, e.setNeedsSnapshot, e.setNeedsPosRefetch, e.tokenIn, e.tokenOut, ]
          }), 7),
          S = j[0],
          A = j[1],
          O = j[2],
          T = j[3],
          P = j[4],
          F = j[5];
        j[6];
        var _ = (0, l.useState)(null),
          Z = _[0],
          L = _[1];
        (0, l.useEffect)(function () {}, [t]);
        var U = (0, o.PJ)({
            address: n,
            abi: f.i,
            functionName: "multiMintLimit",
            args: [
              [r],
              [{
                to: a,
                amount: d,
                mintPercent: c,
                positionId: m.nw,
                lower: u,
                upper: p,
                zeroForOne: v,
                callbackData: C.s("")
              }, ],
            ],
            chainId: k,
            enabled: void 0 != r && r != m.r_,
            overrides: {
              gasLimit: g,
              value: (0, E._m)(F.native, d)
            }
          }).config,
          M = (0, o.GG)(U),
          R = M.data,
          D = M.write,
          q = (0, o.BX)({
            hash: null == R ? void 0 : R.hash,
            onSuccess: function () {
              B.A.success("Your transaction was successful", {
                id: Z,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(x.N7[y].explorerUrl, "/tx/").concat(null == R ? void 0 : R.hash), "_blank")
                  }
                }
              }), w(), A(!0), O(!0), T(!0), setTimeout(function () {
                S(!0), P(!0)
              }, 2500), b()
            },
            onError: function () {
              B.A.error("Your transaction failed", {
                id: Z,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(x.N7[y].explorerUrl, "/tx/").concat(null == R ? void 0 : R.hash), "_blank")
                  }
                }
              })
            }
          }).isLoading;
        return (0, l.useEffect)(function () {
          q && L(B.A.loading("Your transaction is being confirmed...", {
            action: {
              label: "View",
              onClick: function () {
                return window.open("".concat(x.N7[y].explorerUrl, "/tx/").concat(null == R ? void 0 : R.hash), "_blank")
              }
            }
          }))
        }, [q]), (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("button", {
            disabled: t,
            className: "w-full py-4 mx-auto disabled:cursor-not-allowed cursor-pointer text-center transition rounded-full border border-main bg-main1 uppercase text-sm disabled:opacity-50 hover:opacity-80",
            onClick: function () {
              return null == D ? void 0 : D()
            },
            children: "LIMIT SWAP"
          })
        })
      }

      function Q(e) {
        var t = e.disabled,
          n = e.routerAddress,
          r = e.poolTypeId,
          a = e.tokenIn,
          d = e.tokenOut,
          u = e.feeTier,
          p = e.to,
          v = e.amount,
          b = e.mintPercent,
          g = e.lower,
          w = e.upper,
          N = e.zeroForOne,
          k = e.closeModal,
          y = e.gasLimit,
          j = (0, s.Z)((0, I.F)(function (e) {
            return [e.chainId, e.networkName, ]
          }), 2),
          A = j[0],
          O = j[1],
          T = (0, s.Z)((0, h.x)(function (e) {
            return [e.startPrice, e.tradePoolData, e.setNeedsRefetch, e.setNeedsAllowanceIn, e.setNeedsBalanceIn, e.setNeedsSnapshot, ]
          }), 6),
          P = (T[0], T[1], T[2]),
          F = T[3],
          _ = T[4],
          Z = T[5],
          L = (0, l.useState)(null),
          U = L[0],
          M = L[1];
        (0, l.useEffect)(function () {}, [t]);
        var R = (0, o.PJ)({
            address: n,
            abi: f.i,
            functionName: "createLimitPoolAndMint",
            args: [{
                poolTypeId: r,
                tokenIn: a.address,
                tokenOut: d.address,
                startPrice: c.O$.from(String(S.pk.getSqrtRatioAtTick(Number(N ? g : w)))),
                swapFee: null != u ? u : 3e3
              },
              [],
              [{
                to: p,
                amount: v,
                mintPercent: b,
                positionId: m.nw,
                lower: g,
                upper: w,
                zeroForOne: N,
                callbackData: C.s("")
              }]
            ],
            enabled: void 0 != u && y.gt(m.nw),
            chainId: A,
            overrides: {
              gasLimit: y,
              value: (0, E._m)(a.native, v)
            }
          }).config,
          D = (0, o.GG)(R),
          q = D.data,
          z = D.write,
          $ = (0, o.BX)({
            hash: null == q ? void 0 : q.hash,
            onSuccess: function () {
              B.A.success("Your transaction was successful", {
                id: U,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(x.N7[O].explorerUrl, "/tx/").concat(null == q ? void 0 : q.hash), "_blank")
                  }
                }
              }), _(!0), F(!0), Z(!0), setTimeout(function () {
                P(!0), k()
              }, 1e3)
            },
            onError: function () {
              B.A.error("Your transaction failed", {
                id: U,
                action: {
                  label: "View",
                  onClick: function () {
                    return window.open("".concat(x.N7[O].explorerUrl, "/tx/").concat(null == q ? void 0 : q.hash), "_blank")
                  }
                }
              })
            }
          }).isLoading;
        return (0, l.useEffect)(function () {
          $ && M(B.A.loading("Your transaction is being confirmed...", {
            action: {
              label: "View",
              onClick: function () {
                return window.open("".concat(x.N7[O].explorerUrl, "/tx/").concat(null == q ? void 0 : q.hash), "_blank")
              }
            }
          }))
        }, [$]), (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("button", {
            disabled: t || y.lte(m.nw),
            className: "w-full py-4 mx-auto disabled:cursor-not-allowed cursor-pointer text-center transition rounded-full border border-main bg-main1 uppercase text-sm disabled:opacity-50 hover:opacity-80",
            onClick: function () {
              return null == z ? void 0 : z()
            },
            children: "LIMIT SWAP"
          })
        })
      }
      var G = n(19060),
        H = n(39499),
        W = n.n(H);

      function X() {
        var e, t, n, d, f, v = function () {
            var e, t, n = null !== (t = null === (e = C.feeTier) || void 0 === e ? void 0 : e.tickSpacing) && void 0 !== t ? t : 30,
              r = (0, S.yA)(ev, K);
            if (isFinite(parseFloat(ev)) && parseFloat(r) > 0) {
              if (100 * parseFloat(ee) > n && parseFloat(r) > 0) {
                var s = parseFloat(r) * parseFloat((100 * parseFloat(ee)).toFixed(5)) / 1e4;
                if (0 == et.callId) {
                  var a = parseFloat(r) - -s;
                  ta(c.O$.from(S.pk.getTickAtPriceString(r, et, es, n))), to(c.O$.from(S.pk.getTickAtPriceString(String(a), et, es, n)))
                } else {
                  var i = parseFloat(r) - s;
                  ta(c.O$.from(S.pk.getTickAtPriceString(String(i), et, es, n))), to(c.O$.from(S.pk.getTickAtPriceString(r, et, es, n)))
                }
              } else if (0 == et.callId) {
                var l = S.pk.getTickAtPriceString(r, et, es, n) - -n;
                ta(c.O$.from(S.pk.getTickAtPriceString(r, et, es, n))), to(c.O$.from(String(l)))
              } else {
                var o = S.pk.getTickAtPriceString(r, et, es, n) - n;
                ta(c.O$.from(String(o))), to(c.O$.from(S.pk.getTickAtPriceString(r, et, es, n)))
              }
            }
          },
          b = (0, s.Z)((0, I.F)(function (e) {
            return [e.chainId, e.networkName, e.limitSubgraph, e.setLimitSubgraph, e.logoMap, ]
          }), 5),
          g = (b[0], b[1]),
          k = b[2];
        b[3], b[4];
        var y = (0, l.useState)(),
          j = y[0];
        y[1];
        var A = (0, s.Z)((0, h.x)(function (e) {
            return [e.tradePoolData, e.setTradePoolData, e.setTradePoolPrice, e.setTradePoolLiquidity, e.tradeButton, e.pairSelected, e.setPairSelected, e.limitTabSelected, e.wethCall, e.startPrice, e.limitPriceOrder, e.tradeSlippage, e.tokenIn, e.setTokenIn, e.setTokenInTradeUSDPrice, e.tokenOut, e.setTokenOut, e.setTokenOutTradeUSDPrice, e.amountIn, e.setAmountIn, e.amountOut, e.setAmountOut, e.exactIn, e.setExactIn, e.needsAllowanceIn, e.needsPairUpdate, e.needsSetAmounts, e.setNeedsAllowanceIn, e.limitPriceString, e.setLimitPriceString, e.switchDirection, e.setTradeButtonState, e.setStartPrice, e.setLimitPriceOrder, e.setNeedsPairUpdate, e.setNeedsSetAmounts, ]
          }), 36),
          C = A[0],
          _ = A[1],
          E = A[2],
          B = A[3],
          U = A[4],
          R = A[5],
          V = A[6],
          H = A[7],
          X = A[8],
          J = A[9],
          K = A[10],
          ee = A[11],
          et = A[12],
          en = A[13],
          er = A[14],
          es = A[15],
          ea = A[16],
          ei = A[17],
          el = A[18],
          eo = A[19],
          ed = A[20],
          ec = A[21],
          eu = A[22],
          ex = A[23],
          em = A[24],
          ep = A[25],
          ef = A[26],
          eh = A[27],
          ev = A[28],
          eb = A[29],
          eg = A[30],
          ew = A[31],
          eN = A[32],
          ek = A[33],
          ey = A[34],
          ej = A[35],
          eI = (0, O.Z)(),
          eS = eI.inputBox,
          eA = eI.display,
          eC = eI.setDisplay,
          eO = (0, O.Z)(),
          eT = eO.inputBox,
          eP = eO.display,
          eF = eO.setDisplay,
          e_ = (0, o.mA)(),
          eZ = e_.address,
          eL = e_.isDisconnected,
          eE = e_.isConnected,
          eB = (0, o.mx)().data,
          eU = (0, l.useState)(!1),
          eM = eU[0],
          eR = eU[1],
          eD = (0, l.useState)([]),
          eq = eD[0];
        eD[1];
        var ez = (0, l.useState)(void 0),
          e$ = (ez[0], ez[1]),
          eV = (0, l.useState)(void 0),
          eY = (eV[0], eV[1]),
          eQ = (0, l.useState)([]),
          eG = eQ[0];
        eQ[1];
        var eH = (0, l.useState)("3000"),
          eW = eH[0],
          eX = eH[1];
        (0, l.useEffect)(function () {
          H && (eu ? (eC(""), eo(m.nw)) : (eF(""), ec(m.nw)))
        }, [H]);
        var eJ = (0, l.useState)(!1),
          eK = eJ[0],
          e0 = eJ[1];

        function e1() {
          return (e1 = (0, r.Z)(function (e, t) {
            var n, r, s, i, l;
            return (0, a.__generator)(this, function (a) {
              switch (a.label) {
                case 0:
                  return [4, (0, P.ul)(k, et, es, C, _, er, ei)];
                case 1:
                  if (n = a.sent(), r = [], s = [], n)
                    for (i = 0; i < n.length; i++) l = {
                      priceLimit: 0 == et.callId ? S.EO : S.PV,
                      amount: e,
                      exactIn: t,
                      zeroForOne: 0 == et.callId
                    }, s[i] = l, r[i] = n[i].id, eG[i] = n[i].feeTier.id;
                  return (null == n ? void 0 : n.length) == 1 && eX(n[0].feeTier.id), e$(r), eY(s), [2]
              }
            })
          })).apply(this, arguments)
        }(0, l.useEffect)(function () {
          if (!eK) {
            var e = setInterval((0, r.Z)(function () {
              var e;
              return (0, a.__generator)(this, function (t) {
                switch (t.label) {
                  case 0:
                    if (!(eu ? el.gt(m.nw) : ed.gt(m.nw))) return [3, 2];
                    return [4, (0, P.ul)(k, et, es, C, _, er, ei, E, B)];
                  case 1:
                    t.sent(), eX(null == C ? void 0 : null === (e = C.feeTier) || void 0 === e ? void 0 : e.id), t.label = 2;
                  case 2:
                    return [2]
                }
              })
            }), 5e3);
            return function () {
              return clearInterval(e)
            }
          }
        }, [eu ? el : ed, null == C ? void 0 : C.id]), (0, l.useEffect)(function () {
          ep && (e0(!1), eF(""), et.address && es.address !== m.r_ && !X && function (e, t) {
            e1.apply(this, arguments)
          }(eu ? el : ed, eu), ey(!1), ej(!0))
        }, [ep]), (0, l.useEffect)(function () {
          if (ef) {
            if (et.address && es.address !== m.r_) {
              if (eu) {
                if (!isNaN(parseFloat(eA))) {
                  var e = (0, w.vz)(eA, et.decimals);
                  eo(e), td(e, !0)
                }
              } else if (!isNaN(parseFloat(eP))) {
                var t = (0, w.vz)(eP, es.decimals);
                ec(t), td(t, !1)
              }
              et.native || eh(!0)
            }
            ej(!1)
          }
        }, [ef, null == C ? void 0 : C.id]);
        var e5, e2 = (e5 = (0, r.Z)(function (e) {
            var t;
            return (0, a.__generator)(this, function (n) {
              switch (n.label) {
                case 0:
                  return e0(!0), [4, (0, P.mF)(k, et, es, e)];
                case 1:
                  return t = n.sent(), eX(e.toString()), _(t), t.id != m.r_ && ((0, p.W0)(t, et, er), (0, p.W0)(t, es, ei)), eh(!0), [2]
              }
            })
          }), function (e) {
            return e5.apply(this, arguments)
          }),
          e3 = function (e) {
            if ("tokenIn" === e.target.name) {
              var t = (0, s.Z)((0, w.wv)(e, et), 2),
                n = t[0],
                r = t[1];
              R ? r.eq(el) ? (eC(n), r.eq(m.nw) && eF("")) : (eC(n), eo(r), td(r, !0)) : (eC(n), eF(""), eo(r)), ex(!0)
            } else if ("tokenOut" === e.target.name) {
              var a = (0, s.Z)((0, w.wv)(e, es), 2),
                i = a[0],
                l = a[1];
              R ? l.eq(ed) ? (eF(i), l.eq(m.nw) && eC("")) : (eF(i), ec(l), td(l, !1)) : (eF(i), eC(""), ec(l)), ex(!1)
            }
          },
          e4 = (0, l.useState)("0"),
          e7 = e4[0],
          e6 = e4[1],
          e9 = (0, l.useState)("0"),
          e8 = e9[0],
          te = e9[1];
        (0, l.useEffect)(function () {
          if (!ep) {
            if (C != m.r_ && (null == C ? void 0 : C.poolPrice) != void 0) {
              var e = (0, w.ZI)(parseFloat((0, S.yA)(S.pk.getPriceStringAtSqrtPrice(W().BigInt(C.poolPrice), et, es), K)), 5);
              eb(e)
            } else eb("0.00")
          }
        }, [null == C ? void 0 : C.id, ep]), (0, l.useEffect)(function () {
          if (eM) {
            var e, t = null == C ? void 0 : null === (e = C.feeTier) || void 0 === e ? void 0 : e.tickSpacing;
            if (!isNaN(parseFloat(e7))) {
              var n = (0, S.yA)(K ? e7 : e8, K);
              ta(c.O$.from(S.pk.getTickAtPriceString(n, et, es, t)))
            }
            if (!isNaN(parseFloat(e8))) {
              var r = (0, S.yA)(K ? e8 : e7, K);
              to(c.O$.from(S.pk.getTickAtPriceString(r, et, es, t)))
            }
          }
        }, [e7, e8, eM, et, es, ]);
        var tt = function () {
            ek(!K), eb((0, S.yA)(ev, !1)), e6((0, S.yA)(e8, !1)), te((0, S.yA)(e7, !1)), C.id == m.r_ && eN((0, S.yA)(J, !1))
          },
          tn = function () {
            eC(""), eF(""), eo(m.nw), ec(m.nw)
          },
          tr = (0, l.useState)(m.nw),
          ts = tr[0],
          ta = tr[1],
          ti = (0, l.useState)(m.nw),
          tl = ti[0],
          to = ti[1];
        (0, l.useEffect)(function () {
          var e;
          !eM && ee && ev && (null == C ? void 0 : null === (e = C.feeTier) || void 0 === e ? void 0 : e.tickSpacing) && v()
        }, [ev, ee, eM, null == C ? void 0 : null === (e = C.feeTier) || void 0 === e ? void 0 : e.tickSpacing, ]), (0, l.useEffect)(function () {
          if (eu) {
            if (isNaN(parseFloat(ev))) eF(""), ec(m.nw);
            else if (X) eF(eA), ec(el);
            else {
              var e = (0, N.xx)(Number(ts), Number(tl), 0 == et.callId, el),
                t = (0, w.ZI)(parseFloat(u.formatUnits(e.toString(), es.decimals)), 5);
              e.gt(m.nw) ? (eF(t), ec(e)) : (eF(""), ec(m.nw))
            }
          } else if (isNaN(parseFloat(ev))) eC(""), eo(m.nw);
          else if (X) eC(eP), eo(ed);
          else {
            var n = (0, N.YH)(Number(ts), Number(tl), 0 == et.callId, ed),
              r = (0, w.ZI)(parseFloat(u.formatUnits(n.toString(), et.decimals)), 5);
            eC(r), eo(n)
          }
        }, [ts, tl]);
        var td = function (e, t) {
            if (t) {
              if (e.gt(m.nw)) {
                if (X) eF(u.formatUnits(e, et.decimals)), ec(e);
                else {
                  var n = (0, N.xx)(Number(ts), Number(tl), 0 == et.callId, e),
                    r = (0, w.ZI)(parseFloat(u.formatUnits(n.toString(), es.decimals)), 5);
                  eF(r), ec(n)
                }
              } else eF(""), ec(m.nw)
            } else if (e.gt(m.nw)) {
              if (X) eC(u.formatUnits(e, es.decimals)), eo(e);
              else {
                var s = (0, N.YH)(Number(ts), Number(tl), 0 == et.callId, e),
                  a = (0, w.ZI)(parseFloat(u.formatUnits(s.toString(), et.decimals)), 5);
                eC(a), eo(s)
              }
            } else eC(""), eo(m.nw)
          },
          tc = (0, l.useState)("0.00");
        tc[0], tc[1], (0, l.useEffect)(function () {
          (null == C ? void 0 : C.id) == m.r_ && J && !isNaN(parseFloat(J)) && _({
            id: m.r_,
            poolPrice: String(S.pk.getSqrtPriceAtPriceString((0, S.yA)(J, K), et, es)),
            tickAtPrice: S.pk.getTickAtPriceString((0, S.yA)(J, K), et, es),
            feeTier: {
              feeAmount: 3e3,
              tickSpacing: 30
            }
          })
        }, [null == C ? void 0 : C.id, J]);
        var tu = (0, l.useState)("$0.00"),
          tx = (tu[0], tu[1]),
          tm = (0, l.useState)(m.nw),
          tp = tm[0],
          tf = tm[1],
          th = (0, l.useState)("$0.00"),
          tv = (th[0], th[1]),
          tb = (0, l.useState)(m.nw),
          tg = tb[0],
          tw = tb[1];

        function tN() {
          return (tN = (0, r.Z)(function () {
            var e, t, n, r, s;
            return (0, a.__generator)(this, function (a) {
              switch (a.label) {
                case 0:
                  if (!((et.native || (null === (e = et.userRouterAllowance) || void 0 === e ? void 0 : e.gte(el))) && (null == ts ? void 0 : ts.lt(tl)))) return [3, 4];
                  if (!((null == C ? void 0 : C.id) != m.r_)) return [3, 2];
                  return [4, (0, M.d0)(C.id, eZ, ts, tl, et, es, el, eB, tx, tf, g)];
                case 1:
                  return a.sent(), [3, 4];
                case 2:
                  return [4, (0, M.n)(P.TG["constant-product"], null !== (r = null == C ? void 0 : null === (t = C.feeTier) || void 0 === t ? void 0 : t.feeAmount) && void 0 !== r ? r : 3e3, eZ, ts, tl, et, es, el, null !== (s = null == C ? void 0 : null === (n = C.feeTier) || void 0 === n ? void 0 : n.tickSpacing) && void 0 !== s ? s : 30, J, eB, tx, tf, g)];
                case 3:
                  a.sent(), a.label = 4;
                case 4:
                  return [2]
              }
            })
          })).apply(this, arguments)
        }

        function tk() {
          return (tk = (0, r.Z)(function () {
            var e;
            return (0, a.__generator)(this, function (t) {
              switch (t.label) {
                case 0:
                  if (!((null === (e = et.userRouterAllowance) || void 0 === e ? void 0 : e.gte(el)) || et.native)) return [3, 2];
                  return [4, (0, M.I0)(x.N7[g].wethAddress, et, es, el, eB, eE, tv, tw)];
                case 1:
                  t.sent(), t.label = 2;
                case 2:
                  return [2]
              }
            })
          })).apply(this, arguments)
        }(0, l.useEffect)(function () {
          el.eq(m.nw) || em && !et.native || void 0 == C || X ? X && function () {
            return tk.apply(this, arguments)
          }() : function () {
            return tN.apply(this, arguments)
          }()
        }, [eq, et.address, es.address, et.native, et.userBalance, et.userRouterAllowance, ts, tl, em, X, el, ]), (0, l.useEffect)(function () {
          ew()
        }, [el, ed, et.userBalance, et.address, es.address, et.userRouterAllowance, ]);
        var ty = (0, l.useState)(!1),
          tj = ty[0],
          tI = ty[1],
          tS = function () {
            if (tj) return (0, i.jsxs)("div", {
              className: "flex flex-col justify-between w-full my-1 px-1 break-normal transition duration-500 h-fit",
              children: [(0, i.jsxs)("div", {
                className: "flex p-1",
                children: [(0, i.jsx)("div", {
                  className: "text-xs text-[#4C4C4C]",
                  children: "Expected Output"
                }), (0, i.jsx)("div", {
                  className: "ml-auto text-xs",
                  children: R ? (0, w.ZI)(parseFloat(u.formatUnits(null != ed ? ed : m.nw, es.decimals)), 5) : "Select Token123"
                })]
              }), (0, i.jsxs)("div", {
                className: "flex p-1",
                children: [(0, i.jsxs)("div", {
                  className: "text-xs text-[#4C4C4C]",
                  children: ["Minimum received after slippage (", ee, "%)"]
                }), (0, i.jsx)("div", {
                  className: "ml-auto text-xs",
                  children: (0, w.ZI)(parseFloat(u.formatUnits(ed, es.decimals)) * (100 - parseFloat(ee)) / 100, 5)
                })]
              })]
            })
          };
        return (0, i.jsxs)("div", {
          children: [(0, i.jsxs)("div", {
            className: "border border-grey rounded-[4px] w-full py-3 px-5 mt-2.5 flex flex-col gap-y-2",
            children: [(0, i.jsxs)("div", {
              className: "flex items-end justify-between text-[11px] text-grey1",
              children: [(0, i.jsxs)("span", {
                children: [" ", "~$", isNaN(parseInt(el.toString())) || isNaN(et.decimals) || isNaN(et.USDPrice) ? "0" : ((isNaN(parseFloat(eA)) ? 0 : parseFloat(eA)) * (null !== (d = et.USDPrice) && void 0 !== d ? d : 0)).toFixed(2)]
              }), (0, i.jsx)($.Z, {
                token: et
              })]
            }), (0, i.jsxs)("div", {
              className: "flex items-end justify-between mt-2 mb-3",
              children: [eS("0", et, "tokenIn", e3), (0, i.jsxs)("div", {
                className: "flex items-center gap-x-2",
                children: [eE && j === g ? (0, i.jsx)("button", {
                  onClick: function () {
                    e3({
                      target: {
                        value: et.userBalance.toString(),
                        name: "tokenIn"
                      }
                    })
                  },
                  className: "text-xs text-grey1 bg-dark h-10 px-3 rounded-[4px] border-grey border",
                  children: "MAX"
                }) : null, (0, i.jsx)(T.Z, {
                  index: "0",
                  type: "in",
                  tokenIn: et,
                  setTokenIn: en,
                  tokenOut: es,
                  setTokenOut: ea,
                  displayToken: et,
                  amount: eu ? eA : eP,
                  isAmountIn: eu
                }, "in")]
              })]
            })]
          }), (0, i.jsx)("div", {
            onClick: function () {
              eg(eu, eu ? eA : eP, eu ? eo : ec)
            },
            className: "flex items-center justify-center w-full pt-10 pb-3",
            children: (0, i.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: "1.5",
              stroke: "currentColor",
              className: "w-5 cursor-pointer",
              children: (0, i.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              })
            })
          }), (0, i.jsx)("span", {
            className: "text-[11px] text-grey1",
            children: "TO"
          }), (0, i.jsxs)("div", {
            className: "border border-grey rounded-[4px] w-full py-3 px-5 mt-2.5 flex flex-col gap-y-2",
            children: [(0, i.jsxs)("div", {
              className: "flex items-end justify-between text-[11px] text-grey1",
              children: [(0, i.jsxs)("span", {
                children: ["~$", isNaN(es.decimals) || isNaN(es.USDPrice) ? (0, i.jsx)(i.Fragment, {
                  children: "0"
                }) : ((isNaN(parseFloat(eP)) ? 0 : parseFloat(eP)) * (null !== (f = es.USDPrice) && void 0 !== f ? f : 0)).toFixed(2)]
              }), (0, i.jsx)("span", {
                children: R ? "Balance: 123" + (isNaN(null == es ? void 0 : es.userBalance) ? "0" : es.userBalance) : (0, i.jsx)(i.Fragment, {})
              })]
            }), (0, i.jsxs)("div", {
              className: "flex items-end justify-between mt-2 mb-3 text-3xl",
              children: [(0, i.jsx)("div", {
                children: (0, i.jsx)("div", {
                  children: eT("0", es, "tokenOut", e3)
                })
              }), (0, i.jsx)("div", {
                className: "flex items-center gap-x-2",
                children: (0, i.jsx)(T.Z, {
                  type: "out",
                  tokenIn: et,
                  setTokenIn: en,
                  tokenOut: es,
                  setTokenOut: ea,
                  setPairSelected: V,
                  displayToken: es,
                  amount: eu ? eA : eP,
                  isAmountIn: eu
                }, "out")
              })]
            })]
          }), R ? (0, i.jsxs)("div", {
            className: "flex gap-y-4 w-full items-center mt-5 justify-between bg-dark border-grey/80 p-2 border rounded-[4px]",
            children: [(0, i.jsxs)("div", {
              className: "bg-dark text-sm uppercase pl-2 rounded-[4px] flex items-center gap-x-2",
              children: [(0, i.jsx)("span", {
                className: "md:block hidden",
                children: "SELECT A"
              }), " Fee tier:"]
            }), (0, i.jsxs)("div", {
              className: "grid grid-cols-3 gap-x-3",
              children: [(0, i.jsx)("div", {
                className: "1000" == eW ? "py-1.5 text-sm border-grey1 bg-grey/40 transition-all cursor-pointer border border-grey md:px-5 px-3 rounded-[4px]" : "py-1.5 text-sm bg-dark hover:border-grey1 hover:bg-grey/40 transition-all cursor-pointer border border-grey md:px-5 px-3 rounded-[4px]",
                onClick: function () {
                  e2(1e3)
                },
                children: "0.01%"
              }), (0, i.jsx)("div", {
                className: "3000" == eW ? "py-1.5 text-sm border-grey1 bg-grey/40 transition-all cursor-pointer border border-grey md:px-5 px-3 rounded-[4px]" : "py-1.5 text-sm bg-dark hover:border-grey1 hover:bg-grey/40 transition-all cursor-pointer border border-grey md:px-5 px-3 rounded-[4px]",
                onClick: function () {
                  e2(3e3)
                },
                children: "0.03%"
              }), (0, i.jsx)("div", {
                className: "10000" == eW ? "py-1.5 text-sm border-grey1 bg-grey/40 transition-all cursor-pointer border border-grey md:px-5 px-3 rounded-[4px]" : "py-1.5 text-sm bg-dark hover:border-grey1 hover:bg-grey/40 transition-all cursor-pointer border border-grey md:px-5 px-3 rounded-[4px]",
                onClick: function () {
                  e2(1e4)
                },
                children: "0.1%"
              })]
            })]
          }) : null, (0, i.jsxs)("div", {
            className: "mt-5",
            children: [(0, i.jsxs)("div", {
              className: "flex justify-between items-center",
              children: [(0, i.jsxs)("div", {
                className: "flex items-center gap-x-3 text-sm",
                children: [(0, i.jsx)("span", {
                  className: "md:block hidden",
                  children: "PRICE:"
                }), (0, i.jsxs)("div", {
                  className: "md:text-xs text-[10px]",
                  children: [(0, i.jsx)("button", {
                    className: "md:px-5 px-3 py-2 ".concat(eM ? "bg-black border-l border-t border-b border-grey" : "bg-main1 border border-main"),
                    onClick: function () {
                      return eR(!1)
                    },
                    children: "EXACT PRICE"
                  }), (0, i.jsx)("button", {
                    className: "md:px-5 px-3 py-2 ".concat(eM ? "bg-main1 border border-main" : "bg-black border-r border-t border-b border-grey"),
                    onClick: function () {
                      return eR(!0)
                    },
                    children: "PRICE RANGE"
                  })]
                })]
              }), (0, i.jsxs)("span", {
                className: " text-xs flex items-center gap-x-2 group cursor-pointer",
                onClick: tt,
                children: [(0, i.jsx)("span", {
                  className: "text-grey1 group-hover:text-white transition-all",
                  children: 0 == et.callId && !1 === R ? (0, i.jsxs)("div", {
                    children: [et.symbol, " per ?"]
                  }) : (0, i.jsxs)("div", {
                    children: [" ", K == (0 == et.callId) ? es.symbol + " per " + et.symbol : et.symbol + " per " + es.symbol]
                  })
                }), (0, i.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  strokeWidth: "1.5",
                  stroke: "currentColor",
                  className: "text-white w-3",
                  children: (0, i.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  })
                })]
              })]
            }), eM ? (0, i.jsx)("div", {
              children: (0, i.jsxs)("div", {
                className: "flex items-center justify-between gap-x-10 mt-4",
                children: [(0, i.jsxs)("div", {
                  className: "border border-grey w-full bg-dark flex flex-col items-center justify-center py-4",
                  children: [(0, i.jsx)("span", {
                    className: "text-center text-xs text-grey1 mb-2",
                    children: "MIN. PRICE"
                  }), (0, i.jsx)("input", {
                    autoComplete: "off",
                    className: "outline-none bg-transparent text-3xl w-1/2 md:w-56 text-center mb-2",
                    value: isNaN(parseFloat(e7)) ? 0 : e7,
                    type: "text",
                    onChange: function (e) {
                      e6((0, G.Z)(e.target.value))
                    }
                  })]
                }), (0, i.jsxs)("div", {
                  className: "border border-grey w-full bg-dark flex flex-col items-center justify-center py-4",
                  children: [(0, i.jsx)("span", {
                    className: "text-center text-xs text-grey1 mb-2",
                    children: "MAX. PRICE"
                  }), (0, i.jsx)("input", {
                    autoComplete: "off",
                    className: "outline-none bg-transparent text-3xl w-1/2 md:w-56 text-center mb-2",
                    value: isNaN(parseFloat(e8)) ? 0 : e8,
                    type: "text",
                    onChange: function (e) {
                      te((0, G.Z)(e.target.value))
                    }
                  })]
                })]
              })
            }) : (0, i.jsxs)("div", {
              className: "bg-dark py-3 px-5 border border-grey rounded-[4px] mt-4",
              children: [(0, i.jsx)("div", {
                className: "flex items-end justify-between text-[11px] text-grey1",
                children: (0, i.jsx)("span", {
                  children: (0, N.UY)(ev, R, K, C, et, es)
                })
              }), (0, i.jsx)("input", {
                autoComplete: "off",
                className: "bg-dark outline-none text-3xl my-3 w-60 md:w-auto",
                placeholder: "0",
                value: ev,
                type: "text",
                disabled: X,
                onChange: function (e) {
                  "" !== e.target.value && "0" !== e.target.value ? eb((0, G.Z)(e.target.value)) : eb("0")
                }
              })]
            })]
          }), et.address == m.r_ || es.address == m.r_ || (null == C ? void 0 : C.id) != m.r_ || X ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsxs)("div", {
            className: "bg-dark border rounded-[4px] border-grey/50 p-5 mt-5",
            children: [(0, i.jsx)("p", {
              className: "text-xs text-grey1 flex items-center gap-x-4 mb-5",
              children: "This pool does not exist so a start price must be set."
            }), (0, i.jsxs)("div", {
              className: "border bg-black border-grey rounded-[4px] flex flex-col w-full items-center justify-center gap-y-3 h-32",
              children: [(0, i.jsx)("span", {
                className: "text-grey1 text-xs",
                children: "STARTING PRICE"
              }), (0, i.jsx)("span", {
                className: "text-white text-3xl",
                children: (0, i.jsx)("input", {
                  autoComplete: "off",
                  className: "bg-black py-2 outline-none text-center w-full",
                  placeholder: "0",
                  id: "startPrice",
                  value: J,
                  type: "text",
                  onChange: function (e) {
                    eN((0, G.Z)(e.target.value))
                  }
                })
              })]
            })]
          }), (0, i.jsxs)("div", {
            className: "py-4",
            children: [(0, i.jsxs)("div", {
              className: "flex px-2 cursor-pointer py-2 rounded-[4px]",
              onClick: function () {
                return tI(!tj)
              },
              children: [(0, i.jsxs)("div", {
                className: "flex-none text-xs uppercase text-[#C9C9C9]",
                children: ["1 " + et.symbol, " =", " ", (null == C ? void 0 : C.id) != m.r_ ? (0, N.uC)(X, R, null == C ? void 0 : C.poolPrice, et, es) + " " + es.symbol : "?"]
              }), (0, i.jsx)("div", {
                className: "ml-auto text-xs uppercase text-[#C9C9C9]",
                children: (0, i.jsx)("button", {
                  children: (0, i.jsx)(F.Z, {
                    className: "w-4 h-4"
                  })
                })
              })]
            }), (0, i.jsx)("div", {
              className: "flex-wrap w-full break-normal transition ",
              children: (0, i.jsx)(tS, {})
            })]
          }), eL ? (0, i.jsx)(Z.p, {
            xl: !0
          }) : (0, i.jsx)(i.Fragment, {
            children: (null === (t = et.userRouterAllowance) || void 0 === t ? void 0 : t.lt(el)) && !et.native && R ? (0, i.jsx)(L.Z, {
              routerAddress: (0, z.AQ)(g),
              approveToken: et.address,
              tokenSymbol: et.symbol,
              amount: el
            }) : X ? et.native ? (0, i.jsx)(q, {
              disabled: tg.eq(m.nw) || U.disabled,
              routerAddress: (0, z.AQ)(g),
              wethAddress: x.N7[g].wethAddress,
              tokenInSymbol: et.symbol,
              amountIn: el,
              gasLimit: tg,
              resetAfterSwap: tn
            }) : (0, i.jsx)(D, {
              disabled: tg.eq(m.nw) || U.disabled,
              routerAddress: (0, z.AQ)(g),
              wethAddress: x.N7[g].wethAddress,
              tokenInSymbol: et.symbol,
              amountIn: el,
              gasLimit: tg,
              resetAfterSwap: tn
            }) : es.address == m.r_ || (null == C ? void 0 : C.id) != m.r_ ? (0, i.jsx)(Y, {
              routerAddress: (0, z.AQ)(g),
              disabled: tp.lt(c.O$.from("100000")) || U.disabled,
              poolAddress: null == C ? void 0 : C.id,
              to: eZ,
              amount: el,
              mintPercent: (0, w.vz)("1", 24),
              lower: ts,
              upper: tl,
              closeModal: function () {},
              zeroForOne: 0 == et.callId,
              gasLimit: tp,
              resetAfterSwap: tn
            }) : (0, i.jsx)(Q, {
              disabled: tp.eq(m.nw) || U.disabled,
              routerAddress: (0, z.AQ)(g),
              poolTypeId: P.TG["constant-product"],
              tokenIn: et,
              tokenOut: es,
              feeTier: null == C ? void 0 : null === (n = C.feeTier) || void 0 === n ? void 0 : n.feeAmount,
              to: eZ,
              amount: el,
              mintPercent: (0, w.vz)("1", 24),
              lower: ts,
              upper: tl,
              closeModal: function () {},
              zeroForOne: 0 == et.callId,
              gasLimit: tp
            })
          })]
        })
      }
      var J = n(34829),
        K = n(20728),
        ee = n(25652);

      function et() {
        var e = (0, o.mA)(),
          t = e.address,
          n = (e.isDisconnected, e.isConnected);
        (0, o.mx)().data;
        var N = (0, s.Z)((0, I.F)(function (e) {
            return [e.chainId, e.networkName, e.limitSubgraph, e.setLimitSubgraph, e.logoMap, ]
          }), 5),
          k = N[0],
          y = N[1],
          j = N[2],
          S = N[3];
        N[4];
        var C = (0, s.Z)((0, h.x)(function (e) {
            return [e.tradePoolData, e.setTradePoolData, e.tradeButton, e.pairSelected, e.limitTabSelected, e.setPairSelected, e.wethCall, e.startPrice, e.tradeSlippage, e.setTradeSlippage, e.tokenIn, e.setTokenIn, e.setTokenInBalance, e.setTokenInTradeAllowance, e.setTokenInTradeUSDPrice, e.tokenOut, e.setTokenOut, e.setTokenOutBalance, e.setTokenOutTradeUSDPrice, e.amountIn, e.setAmountIn, e.amountOut, e.setAmountOut, e.needsAllowanceIn, e.setNeedsAllowanceIn, e.needsAllowanceOut, e.setNeedsAllowanceOut, e.needsBalanceIn, e.setNeedsBalanceIn, e.needsBalanceOut, e.setNeedsBalanceOut, e.limitPriceString, e.setLimitPriceString, e.switchDirection, e.setTradeButtonState, e.needsRefetch, e.setNeedsRefetch, e.needsPosRefetch, e.setNeedsPosRefetch, e.needsSnapshot, e.setNeedsSnapshot, e.setStartPrice, e.setLimitTabSelected, ]
          }), 43),
          O = C[0],
          T = (C[1], C[2], C[3], C[4]),
          P = (C[5], C[6], C[7], C[8]),
          F = C[9],
          _ = C[10],
          Z = (C[11], C[12]),
          L = C[13],
          E = C[14],
          B = C[15],
          U = (C[16], C[17]),
          M = C[18],
          R = (C[19], C[20], C[21], C[22], C[23]),
          D = C[24],
          q = (C[25], C[26], C[27]),
          $ = C[28],
          Y = C[29],
          Q = C[30],
          H = (C[31], C[32], C[33], C[34], C[35]),
          W = C[36],
          et = C[37],
          en = (C[38], C[39]),
          er = C[40],
          es = (C[41], C[42]),
          ea = (0, l.useState)(!0),
          ei = ea[0],
          el = ea[1],
          eo = (0, l.useState)([]),
          ed = eo[0],
          ec = eo[1],
          eu = (0, l.useState)([]),
          ex = eu[0],
          em = eu[1],
          ep = (0, l.useState)([]),
          ef = ep[0],
          eh = ep[1],
          ev = (0, l.useState)([]),
          eb = (ev[0], ev[1]);
        (0, l.useEffect)(function () {
          _.address != m.r_ && ((null == O ? void 0 : O.id) == m.r_ || (null == O ? void 0 : O.id) == void 0) && (0, p.ab)(_.address, E, j)
        }, [_.address, B.address, _.native]), (0, l.useEffect)(function () {
          B.address != m.r_ && ((null == O ? void 0 : O.id) == m.r_ || (null == O ? void 0 : O.id) == void 0) && (0, p.ab)(B.address, M, j)
        }, [_.address, B.address, _.native]);
        var eg = (0, o.do)({
          address: (0, z.AQ)(y),
          abi: f.i,
          functionName: "multiSnapshotLimit",
          args: [ed, ex],
          chainId: k,
          watch: en,
          enabled: n && ed.length > 0 && en && (0, z.AQ)(y),
          onSuccess: function (e) {
            er(!1)
          },
          onError: function (e) {
            console.log("network check", y), console.log("Error price Limit", e)
          }
        }).data;
        (0, l.useEffect)(function () {
          eg && (eh(eg[0]), eb(eg[1]))
        }, [eg]);
        var ew = (0, l.useState)([]),
          eN = ew[0],
          ek = ew[1],
          ey = (0, l.useState)([]),
          ej = ey[0],
          eI = ey[1];

        function eS() {
          return (eS = (0, r.Z)(function () {
            var e, n;
            return (0, a.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return r.trys.push([0, 2, , 3]), [4, (0, v.Vv)(j, null == t ? void 0 : t.toLowerCase())];
                case 1:
                  return (e = r.sent()).data && (ek((0, b.Bs)(e.data.limitPositions)), eI((0, b.Y1)(e.data.historicalOrders))), [3, 3];
                case 2:
                  return n = r.sent(), console.log("limit error", n), [3, 3];
                case 3:
                  return [2]
              }
            })
          })).apply(this, arguments)
        }

        function eA() {
          return (eA = (0, r.Z)(function () {
            var e, n, r, s, i, l, o;
            return (0, a.__generator)(this, function (a) {
              switch (a.label) {
                case 0:
                  if (a.trys.push([0, 6, , 7]), e = [], n = [], !(eN.length > 0)) return [3, 5];
                  r = 0, a.label = 1;
                case 1:
                  if (!(r < eN.length)) return [3, 4];
                  return e[r] = eN[r].poolId, n[r] = [], n[r][0] = t, n[r][1] = (0, w.vz)("1", 38), n[r][2] = c.O$.from(eN[r].positionId), s = n[r], i = 3, l = c.O$.from, [4, (0, b.J4)(eN[r].poolId.toString(), Number(eN[r].min), Number(eN[r].max), 0 > eN[r].tokenIn.id.localeCompare(eN[r].tokenOut.id), Number(eN[r].epochLast), !1, j, void 0)];
                case 2:
                  s[i] = l.apply(c.O$, [a.sent()]), n[r][4] = 0 > eN[r].tokenIn.id.localeCompare(eN[r].tokenOut.id), a.label = 3;
                case 3:
                  return r++, [3, 1];
                case 4:
                  ec(e), em(n), a.label = 5;
                case 5:
                  return [3, 7];
                case 6:
                  return o = a.sent(), console.log("limit error", o), [3, 7];
                case 7:
                  return [2]
              }
            })
          })).apply(this, arguments)
        }(0, l.useEffect)(function () {
          t && (S((x.N7[y] ? x.N7[y] : x.N7.arbitrum).limitSubgraphUrl), function () {
            eS.apply(this, arguments)
          }(), W(!1))
        }, [H, et, t, y]), (0, l.useEffect)(function () {
          eN.length > 0 && function () {
            eA.apply(this, arguments)
          }()
        }, [eN]);
        var eC = (0, o.KQ)({
            address: t,
            token: _.native ? void 0 : _.address,
            enabled: void 0 != _.address && q,
            watch: q,
            chainId: k,
            onSuccess: function (e) {
              $(!1), setTimeout(function () {
                $(!0)
              }, 5e3)
            }
          }).data,
          eO = (0, o.KQ)({
            address: t,
            token: B.native ? void 0 : B.address,
            enabled: void 0 != B.address && Y,
            watch: Y,
            chainId: k,
            onSuccess: function (e) {
              Q(!1), setTimeout(function () {
                Q(!0)
              }, 5e3)
            }
          }).data;
        (0, l.useEffect)(function () {
          n && eC && Z(isNaN(parseFloat(null == eC ? void 0 : eC.formatted.toString())) ? "0.00" : null == eC ? void 0 : eC.formatted.toString()), n && eO && U(isNaN(parseFloat(null == eO ? void 0 : eO.formatted.toString())) ? "0.00" : null == eO ? void 0 : eO.formatted.toString())
        }, [eC, eO]);
        var eT = (0, o.do)({
            address: _.address,
            abi: d.em,
            functionName: "allowance",
            args: [t, (0, z.AQ)(y)],
            chainId: k,
            watch: R,
            enabled: _.address != m.r_ && !_.native,
            onError: function (e) {
              console.log("Error allowance", e)
            },
            onSuccess: function (e) {
              D(!1)
            }
          }),
          eP = eT.data;
        eT.refetch, (0, l.useEffect)(function () {
          eP && L(eP)
        }, [eP]);
        var eF = (0, l.useState)(!1),
          e_ = eF[0],
          eZ = eF[1];
        return (0, i.jsxs)("div", {
          className: "min-h-[calc(100vh-160px)] w-[48rem] px-3 md:px-0",
          children: [(0, i.jsx)("div", {
            className: "flex w-full mt-[10vh] justify-center mb-20 ",
            children: (0, i.jsxs)("div", {
              className: "bg-black font-regular border border-grey rounded-[4px] w-full max-w-2xl",
              children: [(0, i.jsxs)("div", {
                className: "flex text-xs",
                children: [(0, i.jsxs)("button", {
                  onClick: function () {
                    return es(!1)
                  },
                  className: "w-full relative py-2.5 ".concat(T ? "text-white/50 border-b border-r border-grey" : "text-white"),
                  children: [!T && (0, i.jsx)("div", {
                    className: "h-0.5 w-full bg-main absolute top-[-1px]"
                  }), "MARKET SWAP"]
                }), (0, i.jsxs)("button", {
                  onClick: function () {
                    return es(!0)
                  },
                  className: "w-full relative py-2.5 ".concat(T ? "text-white" : "text-white/50 border-b border-l border-grey"),
                  children: [T && (0, i.jsx)("div", {
                    className: "h-0.5 w-full bg-main absolute top-[-1px]"
                  }), "LIMIT SWAP"]
                })]
              }), (0, i.jsxs)("div", {
                className: "p-4",
                children: [(0, i.jsxs)("div", {
                  className: "flex items-center justify-between w-full",
                  children: [(0, i.jsx)("span", {
                    className: "text-[11px] text-grey1",
                    children: "FROM"
                  }), (0, i.jsx)("div", {
                    className: "cursor-pointer",
                    onClick: function () {
                      return eZ(!0)
                    },
                    children: (0, i.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      className: "w-5 h-5 hover:opacity-60",
                      children: (0, i.jsx)("path", {
                        d: "M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z"
                      })
                    })
                  })]
                }), T ? (0, i.jsx)(X, {}) : (0, i.jsx)(V, {})]
              })]
            })
          }), (0, i.jsxs)("div", {
            className: "md:mb-20 mb-32 w-full",
            children: [(0, i.jsxs)("div", {
              className: "flex md:flex-row flex-col gap-y-3 item-end justify-between w-full",
              children: [(0, i.jsx)("h1", {
                className: "mt-1.5",
                children: "Orders"
              }), (0, i.jsxs)("div", {
                className: "text-xs w-full md:w-auto flex",
                children: [(0, i.jsx)("button", {
                  className: "px-5 py-2 w-full md:w-auto ".concat(ei ? "bg-main1 border border-main" : "bg-black border-l border-t border-b border-grey"),
                  onClick: function () {
                    return el(!0)
                  },
                  children: "ACTIVE ORDERS"
                }), (0, i.jsx)("button", {
                  className: "px-5 py-2 w-full md:w-auto ".concat(ei ? "bg-black border-r border-t border-b border-grey" : "bg-main1 border border-main"),
                  onClick: function () {
                    return el(!1)
                  },
                  children: "ORDER HISTORY"
                })]
              })]
            }), (0, i.jsx)("div", {
              className: "overflow-hidden rounded-[4px] mt-3 bg-dark border border-grey",
              children: (0, i.jsxs)("table", {
                className: "w-full table-auto rounded-[4px]",
                children: [(0, i.jsx)("thead", {
                  className: "h-10 ".concat(0 === eN.length && "hidden"),
                  children: (0, i.jsxs)("tr", {
                    className: "text-[11px] text-grey1/90 mb-3 leading-normal",
                    children: [(0, i.jsx)("th", {
                      className: "text-left pl-3 uppercase",
                      children: "Sell"
                    }), (0, i.jsx)("th", {
                      className: "text-left uppercase",
                      children: "Buy"
                    }), (0, i.jsx)("th", {
                      className: "text-left uppercase",
                      children: "Avg. Price"
                    }), (0, i.jsx)("th", {
                      className: "text-left md:table-cell hidden uppercase",
                      children: "Status"
                    }), (0, i.jsx)("th", {
                      className: "text-left md:table-cell hidden pl-2 uppercase",
                      children: "Age"
                    })]
                  })
                }), 0 === eN.length ? (0, i.jsx)("tbody", {
                  children: (0, i.jsx)("tr", {
                    children: (0, i.jsxs)("td", {
                      className: "text-grey1 text-xs w-full py-10 text-center col-span-5",
                      children: [(0, i.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        className: "w-10 py-4 mx-auto",
                        children: (0, i.jsx)("path", {
                          fillRule: "evenodd",
                          d: "M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z",
                          clipRule: "evenodd"
                        })
                      }), "Your limit orders will appear here."]
                    })
                  })
                }) : ei ? (0, i.jsx)("tbody", {
                  className: "divide-y divide-grey/70",
                  children: eN.map(function (e, n) {
                    if (void 0 != e.id) {
                      var r;
                      return (0, i.jsx)(A, {
                        limitPosition: e,
                        limitFilledAmount: ef.length > 0 ? parseFloat(u.formatUnits(null !== (r = ef[n]) && void 0 !== r ? r : "0", e.tokenOut.decimals)) : parseFloat("0.00"),
                        address: t,
                        href: "/limit/view"
                      }, e.id)
                    }
                  })
                }) : (0, i.jsx)("tbody", {
                  className: "divide-y divide-grey/70",
                  children: ej.map(function (e, t) {
                    if (void 0 != e.amountIn) return (0, i.jsxs)("tr", {
                      className: "text-right text-xs md:text-sm bg-black hover:bg-dark cursor-pointer",
                      children: [(0, i.jsx)("td", {
                        className: "py-3 pl-3",
                        children: (0, i.jsxs)("div", {
                          className: "flex items-center text-xs text-grey1 gap-x-2 text-left",
                          children: [(0, i.jsx)("img", {
                            className: "w-[23px] h-[23px]",
                            src: e.tokenIn.logoURI.replace("https://raw.githubusercontent.com/poolshark-protocol/token-metadata/master/blockchains/arbitrum-one/assets/0x903ca00944d0b51e50d9f4fc96167c89f211542a/logo.png","static/images/logo.png")
                          }), parseFloat(e.amountIn).toFixed(3) + " " + e.tokenIn.symbol]
                        })
                      }), (0, i.jsx)("td", {
                        className: "",
                        children: (0, i.jsxs)("div", {
                          className: "flex items-center text-xs text-white gap-x-2 text-left",
                          children: [(0, i.jsx)("img", {
                            className: "w-[23px] h-[23px]",
                            src: e.tokenOut.logoURI.replace("https://raw.githubusercontent.com/poolshark-protocol/token-metadata/master/blockchains/arbitrum-one/assets/0x903ca00944d0b51e50d9f4fc96167c89f211542a/logo.png","static/images/logo.png")
                          }), parseFloat(e.amountOut).toFixed(3) + " " + e.tokenOut.symbol]
                        })
                      }), (0, i.jsx)("td", {
                        className: "text-left text-xs",
                        children: (0, i.jsx)("div", {
                          className: "flex flex-col",
                          children: (0, i.jsxs)("span", {
                            children: [(0, i.jsxs)("span", {
                              className: "text-grey1",
                              children: ["1 ", e.tokenIn.symbol, " =", " "]
                            }), parseFloat(e.averagePrice).toPrecision(5) + " " + e.tokenOut.symbol]
                          })
                        })
                      }), (0, i.jsx)("td", {
                        className: "md:table-cell hidden",
                        children: (0, i.jsxs)("div", {
                          className: "text-white bg-black border border-grey relative flex items-center justify-center h-7 rounded-[4px] text-center text-[10px]",
                          children: [(0, i.jsxs)("span", {
                            className: "z-50 px-3",
                            children: ["100", "% Filled"]
                          }), (0, i.jsx)("div", {
                            className: "h-full bg-grey/60 w-[0%] absolute left-0"
                          })]
                        })
                      }), (0, i.jsx)("td", {
                        className: "text-grey1 text-left pl-3 text-xs md:table-cell hidden",
                        children: (0, g.Q)(e.completedAtTimestamp)
                      }), (0, i.jsx)("td", {
                        className: "w-[39px] h-1 md:table-cell hidden"
                      })]
                    }, e.id)
                  })
                })]
              })
            })]
          }), (0, i.jsx)(J.u, {
            appear: !0,
            show: e_,
            as: l.Fragment,
            children: (0, i.jsxs)(K.V, {
              as: "div",
              className: "relative z-50",
              onClose: function () {
                return eZ(!1)
              },
              children: [(0, i.jsx)(J.u.Child, {
                as: l.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, i.jsx)("div", {
                  className: "fixed inset-0 bg-black bg-opacity-50"
                })
              }), (0, i.jsx)("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: (0, i.jsx)("div", {
                  className: "flex min-h-full items-center justify-center p-4 text-center",
                  children: (0, i.jsx)(J.u.Child, {
                    as: l.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: (0, i.jsxs)(K.V.Panel, {
                      className: "w-full max-w-lg transform overflow-hidden rounded-[4px] bg-black text-white border border-grey text-left align-middle shadow-xl px-5 py-5 transition-all",
                      children: [(0, i.jsxs)("div", {
                        className: "flex items-center justify-between px-2 mb-5",
                        children: [(0, i.jsx)("h1", {
                          className: "text-lg",
                          children: "Change Slippage"
                        }), (0, i.jsx)(ee.Z, {
                          onClick: function () {
                            return eZ(!1)
                          },
                          className: "w-7 cursor-pointer"
                        })]
                      }), (0, i.jsxs)("div", {
                        className: "flex md:flex-row flex-col items-center gap-3",
                        children: [(0, i.jsxs)("div", {
                          className: "relative",
                          children: [(0, i.jsx)("input", {
                            value: P,
                            onChange: function (e) {
                              return F((0, G.Z)(e.target.value))
                            },
                            className: "bg-dark md:w-auto w-full border-grey border h-10 outline-none px-2 text-sm",
                            placeholder: "0.1"
                          }), (0, i.jsx)("span", {
                            className: "absolute mt-2 -ml-8",
                            children: "%"
                          })]
                        }), (0, i.jsxs)("div", {
                          className: "flex flex-row items-center gap-x-3 w-full",
                          children: [(0, i.jsx)("div", {
                            onClick: function () {
                              F("0.1"), eZ(!1)
                            },
                            className: "text-sm bg-dark border-grey/50 border h-10 flex items-center justify-center w-full cursor-pointer",
                            children: "0.1%"
                          }), (0, i.jsx)("div", {
                            onClick: function () {
                              F("0.5"), eZ(!1)
                            },
                            className: "text-sm bg-dark border-grey/50 border h-10 flex items-center justify-center w-full cursor-pointer",
                            children: "0.5%"
                          }), (0, i.jsx)("div", {
                            onClick: function () {
                              F("1"), eZ(!1)
                            },
                            className: "text-sm bg-dark border-grey/50 border h-10 flex items-center justify-center w-full cursor-pointer",
                            children: "1%"
                          })]
                        })]
                      }), (0, i.jsx)("button", {
                        onClick: function () {
                          return eZ(!1)
                        },
                        className: "w-full mt-8 py-2 disabled:cursor-not-allowed cursor-pointer text-center transition rounded-full border border-main bg-main1 uppercase text-sm disabled:opacity-50 hover:opacity-80",
                        children: "Confirm"
                      })]
                    })
                  })
                })
              })]
            })
          })]
        })
      }
    },
    36832: function (e, t, n) {
      function r(e) {
        var t, n = Date.now() - 1e3 * e,
          r = Math.floor(n / 864e5),
          s = Math.floor((n -= 864e5 * r) / 36e5);
        return n -= 36e5 * s, "".concat(r, "d,").concat(s, "h,").concat(Math.floor(n / 6e4), "m")
      }

      function s(e) {
        var t = new Date(1e3 * e),
          n = t.getDate(),
          r = t.getMonth() + 1,
          s = t.getFullYear(),
          a = n < 10 ? "0".concat(n) : "".concat(n),
          i = r < 10 ? "0".concat(r) : "".concat(r);
        return "".concat(i, "/").concat(a, "/").concat(s)
      }
      n.d(t, {
        Q: function () {
          return r
        },
        X: function () {
          return s
        }
      })
    },
    7266: function (e, t, n) {
      var r = n(67294);
      let s = r.forwardRef(function ({
        title: e,
        titleId: t,
        ...n
      }, s) {
        return r.createElement("svg", Object.assign({
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          "aria-hidden": "true",
          ref: s,
          "aria-labelledby": t
        }, n), e ? r.createElement("title", {
          id: t
        }, e) : null, r.createElement("path", {
          fillRule: "evenodd",
          d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
          clipRule: "evenodd"
        }))
      });
      t.Z = s
    }
  }
]);