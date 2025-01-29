(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3077], {
    40590: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/range/add-liquidity", function () {
        return s(70773)
      }])
    },
    63043: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return x
        }
      });
      var r = s(828),
        n = s(85893),
        i = s(34829),
        a = s(20728),
        l = s(11163),
        o = s(67294),
        c = s(99515),
        d = s(52856),
        u = s(64153);

      function x(e) {
        var t = e.errorDisplay,
          s = e.hash,
          x = e.isLoading,
          m = e.successDisplay,
          p = e.type,
          f = (0, o.useState)(!1),
          g = f[0],
          h = f[1],
          v = (0, o.useState)(!1),
          b = v[0],
          k = v[1],
          y = (0, r.Z)((0, u.F)(function (e) {
            return [e.chainId, e.networkName, ]
          }), 2),
          w = (y[0], y[1]);
        return (0, o.useEffect)(function () {
          (t || x || m) && h(!0)
        }, [m, x, t]), (0, o.useEffect)(function () {
          m && (k(!0), setTimeout(function () {
            k(!1)
          }, 1e3))
        }, [m, x, t]), (0, l.useRouter)(), (0, n.jsx)(i.u, {
          appear: !0,
          show: g,
          as: o.Fragment,
          children: (0, n.jsxs)(a.V, {
            as: "div",
            className: "relative z-50",
            onClose: function () {
              return h(!1)
            },
            children: [(0, n.jsx)(i.u.Child, {
              as: o.Fragment,
              enter: "ease-out duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "ease-in duration-200",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: (0, n.jsx)("div", {
                className: "fixed inset-0 bg-black bg-opacity-50"
              })
            }), (0, n.jsx)("div", {
              className: "fixed inset-0 overflow-y-auto",
              children: (0, n.jsx)("div", {
                className: "flex min-h-full items-center justify-center p-4 text-center",
                children: (0, n.jsx)(i.u.Child, {
                  as: o.Fragment,
                  enter: "ease-out duration-300",
                  enterFrom: "opacity-0 scale-95",
                  enterTo: "opacity-100 scale-100",
                  leave: "ease-in duration-200",
                  leaveFrom: "opacity-100 scale-100",
                  leaveTo: "opacity-0 scale-95",
                  children: (0, n.jsxs)(a.V.Panel, {
                    className: "w-full max-w-[300px] transform overflow-hidden rounded-xl bg-black text-white border border-grey2 text-left align-middle shadow-xl px-5 py-5 transition-all",
                    children: [x ? (0, n.jsxs)("svg", {
                      "aria-hidden": "true",
                      className: "mx-auto w-[100px] h-[100px] text-grey/50 animate-spin fill-main",
                      viewBox: "0 0 100 101",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [(0, n.jsx)("path", {
                        d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                        fill: "currentColor"
                      }), (0, n.jsx)("path", {
                        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                        fill: "currentFill"
                      })]
                    }) : m ? (0, n.jsxs)("svg", {
                      width: "100",
                      height: "100",
                      viewBox: "0 0 100 100",
                      className: "mx-auto",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [(0, n.jsx)("circle", {
                        cx: "50",
                        cy: "50.1528",
                        r: "47.0122",
                        fill: "#091910",
                        stroke: "#2ECC71",
                        strokeWidth: "5"
                      }), (0, n.jsx)("path", {
                        d: "M38.5254 51.3256L47.7051 60.7048L61.4746 39.6016",
                        stroke: "#2ECC71",
                        strokeWidth: "4",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })]
                    }) : t && (0, n.jsxs)("svg", {
                      width: "100",
                      height: "100",
                      viewBox: "0 0 100 100",
                      fill: "none",
                      className: "mx-auto",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [(0, n.jsx)("circle", {
                        cx: "50",
                        cy: "50.1528",
                        r: "47.0122",
                        fill: "#1C0B0A",
                        stroke: "#E74C3C",
                        strokeWidth: "5"
                      }), (0, n.jsx)("path", {
                        d: "M41.4441 39.0059C41.1171 38.7012 40.6846 38.5354 40.2377 38.5432C39.7908 38.5511 39.3644 38.7322 39.0483 39.0482C38.7323 39.3643 38.5512 39.7906 38.5434 40.2375C38.5355 40.6844 38.7014 41.1169 39.0061 41.4439L47.5621 49.9999L39.0061 58.5559C38.8366 58.7139 38.7006 58.9043 38.6064 59.1159C38.5121 59.3275 38.4614 59.5559 38.4573 59.7875C38.4532 60.0192 38.4958 60.2492 38.5826 60.464C38.6693 60.6788 38.7985 60.8739 38.9623 61.0377C39.1261 61.2015 39.3212 61.3307 39.536 61.4174C39.7508 61.5042 39.9808 61.5468 40.2125 61.5427C40.4441 61.5386 40.6725 61.4879 40.8841 61.3936C41.0957 61.2994 41.2861 61.1634 41.4441 60.9939L50.0001 52.4379L58.5561 60.9939C58.714 61.1634 58.9044 61.2994 59.116 61.3936C59.3276 61.4879 59.556 61.5386 59.7877 61.5427C60.0193 61.5468 60.2493 61.5042 60.4641 61.4174C60.6789 61.3307 60.874 61.2015 61.0378 61.0377C61.2017 60.8739 61.3308 60.6788 61.4175 60.464C61.5043 60.2492 61.5469 60.0192 61.5428 59.7875C61.5387 59.5559 61.488 59.3275 61.3938 59.1159C61.2995 58.9043 61.1635 58.7139 60.9941 58.5559L52.4381 49.9999L60.9941 41.4439C61.2988 41.1169 61.4646 40.6844 61.4568 40.2375C61.4489 39.7906 61.2678 39.3643 60.9518 39.0482C60.6357 38.7322 60.2094 38.5511 59.7625 38.5432C59.3156 38.5354 58.8831 38.7012 58.5561 39.0059L50.0001 47.5619L41.4441 39.0059Z",
                        fill: "#E74C3C"
                      })]
                    }), (0, n.jsx)("h1", {
                      className: "text-center text-sm mt-5 ",
                      children: x ? "Your position is being created..." : m ? "Your position has been created succesfully!" : t && "Your position was not able to be created"
                    }), (0, n.jsxs)("div", {
                      className: "flex flex-col items-center justify-center mt-12 gap-3 ".concat(x && "opacity-20 cursor-not-allowed"),
                      children: [(0, n.jsx)("a", {
                        href: "range" === p ? "/range" : "/cover",
                        children: (0, n.jsx)("button", {
                          disabled: b,
                          className: "disabled:opacity-50 whitespace-nowrap text-xs flex items-center gap-x-2 text-grey1 hover:text-white hover:underline transition-all",
                          children: b ? (0, n.jsxs)("div", {
                            className: "my-0.5 flex items-center gap-x-2",
                            children: [(0, n.jsx)(c.Z, {}), " Loading..."]
                          }) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              strokeWidth: "1.5",
                              stroke: "currentColor",
                              className: "w-6 h-6",
                              children: (0, n.jsx)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                              })
                            }), "Go back"]
                          })
                        })
                      }), (0, n.jsxs)("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        href: "".concat(d.N7[w].explorerUrl, "/tx/").concat(s),
                        className: "whitespace-nowrap text-xs flex items-center gap-x-2 text-blue-500 hover:underline",
                        children: ["View on block explorer", (0, n.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "1.5",
                          stroke: "currentColor",
                          className: "w-4 h-4 -mt-0.5",
                          children: (0, n.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          })
                        })]
                      })]
                    })]
                  })
                })
              })
            })]
          })
        })
      }
    },
    70773: function (e, t, s) {
      "use strict";
      s.r(t), s.d(t, {
        default: function () {
          return er
        }
      });
      var r = s(47568),
        n = s(41799),
        i = s(69396),
        a = s(828),
        l = s(51351),
        o = s(70655),
        c = s(85893),
        d = s(67294),
        u = s(39814),
        x = s(71631),
        m = s(39499),
        p = s.n(m),
        f = s(88935),
        g = s(69077),
        h = s(7613),
        v = s(2593),
        b = s(35553),
        k = s(54256),
        y = s(29309),
        w = s(19060),
        j = s(43967),
        N = s(65587),
        A = s(34829),
        C = s(20728),
        I = s(93585),
        P = s(99515),
        T = s(64153),
        S = s(9890),
        O = s(15125);

      function F(e) {
        var t = e.disabled,
          s = e.buttonMessage,
          r = e.routerAddress,
          n = e.poolAddress,
          i = e.to,
          l = e.lower,
          o = e.upper,
          x = e.amount0,
          m = e.amount1,
          p = e.gasLimit,
          f = e.setSuccessDisplay,
          h = e.setErrorDisplay,
          v = e.setIsLoading,
          b = e.setTxHash,
          y = (0, a.Z)((0, T.F)(function (e) {
            return [e.chainId, e.networkName]
          }), 2),
          w = y[0],
          j = y[1],
          N = (0, a.Z)((0, u.H)(function (e) {
            return [e.tokenIn, e.tokenOut, e.rangeMintParams, e.setNeedsRefetch, e.setNeedsPosRefetch, e.setNeedsAllowanceIn, e.setNeedsAllowanceOut, e.setNeedsBalanceIn, e.setNeedsBalanceOut, ]
          }), 9),
          A = N[0],
          C = N[1],
          F = N[2],
          E = N[3],
          Z = N[4],
          D = N[5],
          L = N[6],
          M = N[7],
          R = N[8];
        (0, d.useEffect)(function () {}, [t]);
        var _ = (0, g.PJ)({
            address: r,
            abi: I.i,
            functionName: "multiMintRange",
            args: [
              [n],
              [{
                to: i,
                lower: l,
                upper: o,
                positionId: 0,
                amount0: x,
                amount1: m,
                callbackData: (0, S.us)(F.stakeFlag, (0, O.w)(j))
              }, ],
            ],
            chainId: w,
            overrides: {
              gasLimit: p,
              value: (0, S.II)(A.native, C.native, F.tokenInAmount, F.tokenOutAmount)
            },
            onSuccess: function () {},
            onError: function () {
              h(!0)
            }
          }).config,
          B = (0, g.GG)(_),
          q = B.data,
          U = B.write,
          $ = (0, g.BX)({
            hash: null == q ? void 0 : q.hash,
            onSuccess: function () {
              f(!0), M(!0), R(!0), D(!0), E(!0), Z(!0), m.gt(k.nw) && L(!0)
            },
            onError: function () {
              h(!0), E(!1), Z(!1)
            }
          }).isLoading;
        return (0, d.useEffect)(function () {
          $ ? v(!0) : v(!1)
        }, [$]), (0, d.useEffect)(function () {
          b(null == q ? void 0 : q.hash)
        }, [q]), (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)("button", {
            disabled: t || p.lte(k.nw),
            className: "w-full py-4 mx-auto disabled:cursor-not-allowed cursor-pointer text-center flex items-center justify-center transition rounded-full border border-main bg-main1 uppercase text-sm disabled:opacity-50 hover:opacity-80",
            onClick: function () {
              return null == U ? void 0 : U()
            },
            children: p.lte(k.nw) && !t ? (0, c.jsx)(P.Z, {}) : s
          })
        })
      }
      var E = s(48088),
        Z = s(94244),
        D = s(11163),
        L = s.n(D),
        M = s(81411),
        R = s(35790),
        _ = s(52856);

      function B(e) {
        var t = e.disabled,
          s = e.buttonMessage,
          r = e.routerAddress,
          n = e.poolTypeId,
          i = e.token0,
          l = e.token1,
          o = e.startPrice,
          x = e.feeTier,
          m = e.to,
          p = e.lower,
          f = e.upper,
          h = e.amount0,
          v = e.amount1,
          b = e.closeModal,
          y = e.gasLimit,
          w = e.setSuccessDisplay,
          j = e.setErrorDisplay,
          N = e.setIsLoading,
          A = e.setTxHash,
          C = (0, a.Z)((0, T.F)(function (e) {
            return [e.chainId, e.networkName]
          }), 2),
          P = C[0],
          O = C[1],
          F = (0, a.Z)((0, u.H)(function (e) {
            return [e.tokenIn, e.tokenOut, e.rangeMintParams, e.setNeedsRefetch, e.setNeedsPosRefetch, e.setNeedsAllowanceIn, e.setNeedsAllowanceOut, e.setNeedsBalanceIn, e.setNeedsBalanceOut, ]
          }), 9),
          E = F[0],
          Z = F[1],
          D = F[2],
          L = F[3],
          M = F[4],
          R = F[5],
          B = F[6],
          q = F[7],
          U = F[8];
        (0, d.useEffect)(function () {}, [t]);
        var $ = (0, g.PJ)({
            address: r,
            abi: I.i,
            functionName: "createLimitPoolAndMint",
            args: [{
                poolTypeId: n,
                tokenIn: i.address,
                tokenOut: l.address,
                startPrice: o,
                swapFee: x
              },
              [{
                to: m,
                lower: p,
                upper: f,
                positionId: 0,
                amount0: h,
                amount1: v,
                callbackData: (0, S.us)(D.stakeFlag, _.N7[O].rangeStakerAddress)
              }, ],
              []
            ],
            chainId: P,
            overrides: {
              gasLimit: y,
              value: (0, S.II)(E.native, Z.native, D.tokenInAmount, D.tokenOutAmount)
            },
            onSuccess: function () {},
            onError: function () {
              j(!0)
            }
          }).config,
          z = (0, g.GG)($),
          H = z.data,
          V = z.write,
          G = (0, g.BX)({
            hash: null == H ? void 0 : H.hash,
            onSuccess: function () {
              w(!0), R(!0), v.gt(k.nw) && B(!0), q(!0), U(!0), setTimeout(function () {
                L(!0), M(!0), b()
              }, 2e3)
            },
            onError: function () {
              j(!0), L(!1), M(!1)
            }
          }).isLoading;
        return (0, d.useEffect)(function () {
          G ? N(!0) : N(!1)
        }, [G]), (0, d.useEffect)(function () {
          A(null == H ? void 0 : H.hash)
        }, [H]), (0, c.jsx)(c.Fragment, {
          children: (0, c.jsx)("button", {
            disabled: t || y.lte(k.nw),
            className: "w-full py-4 mx-auto disabled:cursor-not-allowed cursor-pointer text-center transition rounded-full border border-main bg-main1 uppercase text-sm disabled:opacity-50 hover:opacity-80",
            onClick: function () {
              return null == V ? void 0 : V()
            },
            children: void 0 != s && "" != s ? s : "CREATE POOL AND MINT"
          })
        })
      }
      var q = s(67054),
        U = s(63043);

      function $() {
        var e, t, s, n, i, l, m, f, h = function () {
            ed(!1)
          },
          y = (0, a.Z)((0, T.F)(function (e) {
            return [e.chainId, e.logoMap, e.networkName, ]
          }), 3),
          w = (y[0], y[1]),
          N = y[2],
          I = (0, a.Z)((0, u.H)(function (e) {
            return [e.rangePoolAddress, e.rangePoolData, e.rangePositionData, e.rangeMintParams, e.tokenIn, e.tokenOut, e.priceOrder, ]
          }), 7),
          P = I[0],
          S = I[1],
          L = I[2],
          _ = I[3],
          $ = I[4],
          z = I[5],
          H = I[6],
          V = (0, d.useState)(!1),
          G = V[0],
          J = V[1],
          Q = (0, d.useState)(!1),
          W = Q[0],
          Y = Q[1],
          X = (0, d.useState)(!1),
          K = X[0],
          ee = X[1],
          et = (0, d.useState)(),
          es = et[0],
          er = et[1],
          en = (0, d.useState)(0 > $.address.localeCompare(z.address));
        en[0], en[1], (0, D.useRouter)();
        var ei = (0, g.yL)(),
          ea = (0, g.mA)().address,
          el = new E.b(ea, ei),
          eo = (0, d.useState)(!1),
          ec = eo[0],
          ed = eo[1],
          eu = (0, d.useState)(k.nw),
          ex = eu[0],
          em = eu[1];

        function ep() {
          return (ep = (0, r.Z)(function () {
            var e, t, s, r, n, i, a, l, c, d, u;
            return (0, o.__generator)(this, function (o) {
              switch (o.label) {
                case 0:
                  if (!(P != k.r_)) return [3, 2];
                  return [4, (0, R.Nb)(P, ea, v.O$.from(x.pk.getTickAtPriceString(L.lowerPrice, $, z, parseInt(null !== (i = null === (e = S.feeTier) || void 0 === e ? void 0 : e.tickSpacing) && void 0 !== i ? i : 20))), v.O$.from(x.pk.getTickAtPriceString(L.upperPrice, $, z, parseInt(null !== (a = null === (t = S.feeTier) || void 0 === t ? void 0 : t.tickSpacing) && void 0 !== a ? a : 20))), $, z, _.tokenInAmount, _.tokenOutAmount, el, _.stakeFlag, N)];
                case 1:
                  return u = o.sent(), [3, 4];
                case 2:
                  return [4, (0, R.qY)(q.TG["constant-product"], null === (s = S.feeTier) || void 0 === s ? void 0 : s.feeAmount, ea, v.O$.from(x.pk.getTickAtPriceString(L.lowerPrice, $, z, parseInt(null !== (l = null === (r = S.feeTier) || void 0 === r ? void 0 : r.tickSpacing) && void 0 !== l ? l : 20))), v.O$.from(x.pk.getTickAtPriceString(L.upperPrice, $, z, parseInt(null !== (c = null === (n = S.feeTier) || void 0 === n ? void 0 : n.tickSpacing) && void 0 !== c ? c : 20))), v.O$.from(String(null !== (d = null == S ? void 0 : S.poolPrice) && void 0 !== d ? d : "0")), $, z, _.tokenInAmount, _.tokenOutAmount, el, _.stakeFlag, N)];
                case 3:
                  u = o.sent(), o.label = 4;
                case 4:
                  return em(u.gasUnits.mul(130).div(100)), [2]
              }
            })
          })).apply(this, arguments)
        }
        return (0, d.useEffect)(function () {
          var e, t, s, r;
          ((null === (e = _.tokenInAmount) || void 0 === e ? void 0 : e.gt(k.nw)) || (null === (t = _.tokenOutAmount) || void 0 === t ? void 0 : t.gt(k.nw))) && Number(L.lowerPrice) < Number(L.upperPrice) && ((null === (s = $.userRouterAllowance) || void 0 === s ? void 0 : s.gte(_.tokenInAmount)) || $.native) && ((null === (r = z.userRouterAllowance) || void 0 === r ? void 0 : r.gte(_.tokenOutAmount)) || z.native) && p().greaterThan(_.liquidityAmount, k.ry) && function () {
            ep.apply(this, arguments)
          }()
        }, [_.stakeFlag, _.liquidityAmount, $.userRouterAllowance, z.userRouterAllowance, L.lowerPrice, L.upperPrice, null == S ? void 0 : S.poolPrice, null == S ? void 0 : S.feeTier, ]), (0, c.jsxs)("div", {
          children: [(0, c.jsx)(A.u, {
            appear: !0,
            show: ec,
            as: d.Fragment,
            children: (0, c.jsxs)(C.V, {
              as: "div",
              className: "relative z-50",
              onClose: h,
              children: [(0, c.jsx)(A.u.Child, {
                as: d.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, c.jsx)("div", {
                  className: "fixed inset-0 bg-black bg-opacity-50"
                })
              }), (0, c.jsx)("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: (0, c.jsx)("div", {
                  className: "flex min-h-full items-center justify-center p-4 text-center",
                  children: (0, c.jsx)(A.u.Child, {
                    as: d.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: (0, c.jsx)(C.V.Panel, {
                      className: "max-w-[55rem] w-full text-white text-left overflow-hidden rounded-[4px] shadow-xl transition-all",
                      children: (0, c.jsxs)("div", {
                        className: "bg-black flex md:flex-row flex-col gap-x-20 justify-between border border-grey w-full rounded-[4px] py-6 px-7",
                        children: [(0, c.jsxs)("div", {
                          className: "md:w-1/2",
                          children: [(0, c.jsxs)("div", {
                            children: [(0, c.jsx)("div", {
                              className: "flex items-center gap-x-4",
                              children: (0, c.jsx)("h1", {
                                children: "Pair"
                              })
                            }), (0, c.jsxs)("div", {
                              className: "flex flex-col md:flex-row items-center gap-x-5 gap-y-3 mt-3 w-full",
                              children: [(0, c.jsxs)("button", {
                                className: "flex w-full items-center gap-x-3 bg-dark border border-grey px-4 py-1.5 rounded-[4px]",
                                children: [(0, c.jsx)("img", {
                                  className: "w-7",
                                  src: w[(0, j.pJ)($)]
                                }), $.symbol]
                              }), (0, c.jsxs)("button", {
                                className: "flex w-full items-center gap-x-3 bg-dark border border-grey px-4 py-1.5 rounded-[4px]",
                                children: [(0, c.jsx)("img", {
                                  className: "w-7 w-full",
                                  src: w[(0, j.pJ)(z)]
                                }), z.symbol]
                              })]
                            })]
                          }), (0, c.jsxs)("div", {
                            children: [(0, c.jsx)("div", {
                              className: "gap-x-4 mt-8",
                              children: (0, c.jsx)("h1", {
                                children: "Fee tier"
                              })
                            }), (0, c.jsx)("div", {
                              className: "mt-3",
                              children: (0, c.jsxs)("button", {
                                className: "relative cursor-default rounded-[4px] bg-black text-white cursor-pointer bg-dark border border-grey py-2 pl-3 w-full text-left shadow-md focus:outline-none",
                                children: [(0, c.jsxs)("span", {
                                  className: "block truncate",
                                  children: [((null == S ? void 0 : null === (e = S.feeTier) || void 0 === e ? void 0 : e.feeAmount) / 1e4).toFixed(2), "%"]
                                }), (0, c.jsx)("span", {
                                  className: "block truncate text-xs text-grey"
                                })]
                              })
                            })]
                          }), (0, c.jsxs)("div", {
                            children: [(0, c.jsx)("div", {
                              className: "gap-x-4 mt-8",
                              children: (0, c.jsx)("h1", {
                                children: "Deposited amounts"
                              })
                            }), (0, c.jsxs)("div", {
                              className: "mt-3 space-y-3",
                              children: [(0, c.jsxs)("div", {
                                className: "w-full items-center justify-between flex bg-[#0C0C0C] border border-[#1C1C1C] gap-4 p-2 rounded-[4px]",
                                children: [(0, c.jsxs)("div", {
                                  className: " p-2 ",
                                  children: [(0, c.jsx)("div", {
                                    className: "w-full bg-[#0C0C0C] placeholder:text-grey1 text-white text-2xl mb-2 rounded-[4px]",
                                    children: parseFloat(b.formatUnits(_.tokenInAmount, $.decimals)).toPrecision(6)
                                  }), (0, c.jsx)("div", {
                                    className: "flex",
                                    children: (0, c.jsxs)("div", {
                                      className: "flex text-xs text-[#4C4C4C]",
                                      children: ["$", isNaN($.USDPrice) ? "?.??" : ($.USDPrice * Number(b.formatUnits(_.tokenInAmount, $.decimals))).toFixed(2)]
                                    })
                                  })]
                                }), (0, c.jsx)("div", {
                                  className: "",
                                  children: (0, c.jsx)("div", {
                                    className: " ml-auto",
                                    children: (0, c.jsxs)("div", {
                                      children: [(0, c.jsx)("div", {
                                        className: "flex justify-end",
                                        children: (0, c.jsx)("button", {
                                          className: "flex items-center gap-x-3 bg-black border border-grey px-3 py-1.5 rounded-[4px]",
                                          children: (0, c.jsxs)("div", {
                                            className: "flex items-center gap-x-2 w-full",
                                            children: [(0, c.jsx)("img", {
                                              className: "w-7",
                                              src: w[(0, j.pJ)($)]
                                            }), $.symbol]
                                          })
                                        })
                                      }), (0, c.jsx)("div", {
                                        className: "flex items-center justify-end gap-x-2 px-1 mt-2 ",
                                        children: (0, c.jsx)("div", {
                                          className: "text-xs text-dark",
                                          children: "-"
                                        })
                                      })]
                                    })
                                  })
                                })]
                              }), (0, c.jsxs)("div", {
                                className: "w-full items-center justify-between flex bg-[#0C0C0C] border border-[#1C1C1C] gap-4 p-2 rounded-[4px]",
                                children: [(0, c.jsxs)("div", {
                                  className: " p-2 ",
                                  children: [(0, c.jsx)("div", {
                                    className: "w-full bg-[#0C0C0C] placeholder:text-grey1 text-white text-2xl mb-2 rounded-[4px]",
                                    children: parseFloat(b.formatUnits(_.tokenOutAmount, z.decimals)).toPrecision(6)
                                  }), (0, c.jsx)("div", {
                                    className: "flex",
                                    children: (0, c.jsxs)("div", {
                                      className: "flex text-xs text-[#4C4C4C]",
                                      children: ["$", isNaN(z.USDPrice) ? "?.??" : (Number(z.USDPrice) * Number(b.formatUnits(_.tokenOutAmount, z.decimals))).toFixed(2)]
                                    })
                                  })]
                                }), (0, c.jsx)("div", {
                                  className: "",
                                  children: (0, c.jsx)("div", {
                                    className: " ml-auto",
                                    children: (0, c.jsxs)("div", {
                                      children: [(0, c.jsx)("div", {
                                        className: "flex justify-end",
                                        children: (0, c.jsx)("button", {
                                          className: "flex items-center gap-x-3 bg-black border border-grey px-3 py-1.5 rounded-[4px]",
                                          children: (0, c.jsxs)("div", {
                                            className: "flex items-center gap-x-2 w-full",
                                            children: [(0, c.jsx)("img", {
                                              className: "w-7",
                                              src: w[(0, j.pJ)(z)]
                                            }), z.symbol]
                                          })
                                        })
                                      }), (0, c.jsx)("div", {
                                        className: "flex items-center justify-end gap-x-2 px-1 mt-2",
                                        children: (0, c.jsx)("div", {
                                          className: "text-xs text-dark",
                                          children: "-"
                                        })
                                      })]
                                    })
                                  })
                                })]
                              })]
                            })]
                          })]
                        }), (0, c.jsxs)("div", {
                          className: "md:w-1/2",
                          children: [(0, c.jsxs)("div", {
                            children: [(0, c.jsx)("div", {
                              className: "flex justify-between items-center",
                              children: (0, c.jsx)("h1", {
                                children: "Price range"
                              })
                            }), (0, c.jsxs)("div", {
                              className: "mt-3 space-y-3",
                              children: [(0, c.jsxs)("div", {
                                className: "bg-[#0C0C0C] border border-[#1C1C1C] flex-col flex text-center p-3 rounded-[4px]",
                                children: [(0, c.jsx)("span", {
                                  className: "md:text-xs text-[10px] text-grey",
                                  children: "Min. Price"
                                }), (0, c.jsx)("div", {
                                  className: "flex justify-center items-center",
                                  children: (0, c.jsx)("span", {
                                    className: "text-lg py-2 outline-none text-center",
                                    children: (0, x.yA)(H ? L.lowerPrice : L.upperPrice, H)
                                  })
                                }), (0, c.jsxs)("span", {
                                  className: "md:text-xs text-[10px] text-grey",
                                  children: [(H ? z : $).symbol, " per", " ", (H ? $ : z).symbol]
                                })]
                              }), (0, c.jsxs)("div", {
                                className: "bg-[#0C0C0C] border border-[#1C1C1C] flex-col flex text-center p-3 rounded-[4px]",
                                children: [(0, c.jsx)("span", {
                                  className: "md:text-xs text-[10px] text-grey",
                                  children: "Max. Price"
                                }), (0, c.jsx)("div", {
                                  className: "flex justify-center items-center",
                                  children: (0, c.jsx)("span", {
                                    className: "text-lg py-2 outline-none text-center",
                                    children: (0, x.yA)(H ? L.upperPrice : L.lowerPrice, H)
                                  })
                                }), (0, c.jsxs)("span", {
                                  className: "md:text-xs text-[10px] text-grey",
                                  children: [(H ? z : $).symbol, " per", " ", (H ? $ : z).symbol]
                                })]
                              })]
                            })]
                          }), (0, c.jsx)("div", {
                            className: "mt-4",
                            children: (null === (t = $.userRouterAllowance) || void 0 === t ? void 0 : t.lt(_.tokenInAmount)) && (null === (s = z.userRouterAllowance) || void 0 === s ? void 0 : s.lt(_.tokenOutAmount)) && !$.native && !z.native ? (0, c.jsx)(Z.Z, {
                              routerAddress: (0, O.AQ)(N),
                              tokenIn: $,
                              tokenOut: z,
                              amount0: _.tokenInAmount,
                              amount1: _.tokenOutAmount
                            }) : (null === (n = $.userRouterAllowance) || void 0 === n ? void 0 : n.lt(_.tokenInAmount)) && !$.native ? (0, c.jsx)(M.Z, {
                              routerAddress: (0, O.AQ)(N),
                              approveToken: $,
                              amount: _.tokenInAmount
                            }) : (null === (i = z.userRouterAllowance) || void 0 === i ? void 0 : i.lt(_.tokenOutAmount)) && !z.native ? (0, c.jsx)(M.Z, {
                              routerAddress: (0, O.AQ)(N),
                              approveToken: z,
                              amount: _.tokenOutAmount
                            }) : P != k.r_ ? (0, c.jsx)(F, {
                              routerAddress: (0, O.AQ)(N),
                              to: ea,
                              poolAddress: P,
                              lower: L.lowerPrice ? v.O$.from(x.pk.getTickAtPriceString(L.lowerPrice, $, z, parseInt(S.feeTier ? S.feeTier.tickSpacing : 30))) : k.nw,
                              upper: L.upperPrice ? v.O$.from(x.pk.getTickAtPriceString(L.upperPrice, $, z, parseInt(S.feeTier ? S.feeTier.tickSpacing : 30))) : k.nw,
                              disabled: _.disabled || ex.lte(k.nw),
                              buttonMessage: _.buttonMessage,
                              amount0: 0 === $.callId ? _.tokenInAmount : _.tokenOutAmount,
                              amount1: 0 === $.callId ? _.tokenOutAmount : _.tokenInAmount,
                              gasLimit: ex,
                              setSuccessDisplay: J,
                              setErrorDisplay: Y,
                              setIsLoading: ee,
                              setTxHash: er
                            }) : (0, c.jsx)(B, {
                              routerAddress: (0, O.AQ)(N),
                              poolTypeId: q.TG["constant-product"],
                              token0: $,
                              token1: z,
                              startPrice: v.O$.from(null !== (m = null == S ? void 0 : S.poolPrice) && void 0 !== m ? m : "0"),
                              feeTier: null !== (f = null === (l = S.feeTier) || void 0 === l ? void 0 : l.feeAmount) && void 0 !== f ? f : 3e3,
                              to: ea,
                              lower: L.lowerPrice ? v.O$.from(x.pk.getTickAtPriceString(L.lowerPrice, $, z, parseInt(S.feeTier ? S.feeTier.tickSpacing : 30))) : k.nw,
                              upper: L.upperPrice ? v.O$.from(x.pk.getTickAtPriceString(L.upperPrice, $, z, parseInt(S.feeTier ? S.feeTier.tickSpacing : 30))) : k.nw,
                              disabled: _.disabled || ex.lte(k.nw),
                              buttonMessage: _.buttonMessage,
                              amount0: 0 === $.callId ? _.tokenInAmount : _.tokenOutAmount,
                              amount1: 0 === $.callId ? _.tokenOutAmount : _.tokenInAmount,
                              closeModal: function () {},
                              gasLimit: ex,
                              setSuccessDisplay: J,
                              setErrorDisplay: Y,
                              setIsLoading: ee,
                              setTxHash: er
                            })
                          })]
                        })]
                      })
                    })
                  })
                })
              })]
            })
          }), (0, c.jsx)(U.Z, {
            hash: es,
            type: "range",
            errorDisplay: W,
            successDisplay: G,
            isLoading: K
          }), (0, c.jsx)("button", {
            onClick: function () {
              return ed(!0)
            },
            disabled: _.disabled,
            className: "w-full py-4 mx-auto disabled:cursor-not-allowed cursor-pointer text-center transition rounded-full border border-main bg-main1 uppercase text-sm disabled:opacity-50 hover:opacity-80",
            children: (0, c.jsx)(c.Fragment, {
              children: _.disabled ? _.buttonMessage : "Preview"
            })
          })]
        })
      }
      var z = s(16908),
        H = s(43907),
        V = s(37940),
        G = s(96958),
        J = s(68274),
        Q = s(76637),
        W = s(99534),
        Y = s(95583),
        X = s(49384),
        K = Y.zt,
        ee = Y.fC,
        et = Y.xz,
        es = d.forwardRef(function (e, t) {
          var s = e.className,
            r = e.sideOffset,
            i = (0, W.Z)(e, ["className", "sideOffset"]);
          return (0, c.jsx)(Y.VY, (0, n.Z)({
            ref: t,
            sideOffset: void 0 === r ? 4 : r,
            className: (0, X.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", s)
          }, i))
        });

      function er(e) {
        var t, s, m, A, C, e = null !== e ? e : (0, l.Z)(TypeError("Cannot destructure undefined")),
          I = function (e, t) {
            try {
              var s = e ? 0 == W.callId : 0 == ea.callId,
                r = x.pk.getTickAtPriceString(tt, W, ea, parseInt(null !== (c = null === (l = R.feeTier) || void 0 === l ? void 0 : l.tickSpacing) && void 0 !== c ? c : "100")),
                n = x.pk.getTickAtPriceString(tn, W, ea, parseInt(null !== (d = null === (o = R.feeTier) || void 0 === o ? void 0 : o.tickSpacing) && void 0 !== d ? d : "100")),
                i = x.pk.getSqrtRatioAtTick(r),
                a = x.pk.getSqrtRatioAtTick(n);
              if (t.gt(k.nw)) {
                var l, o, c, d, u, m = k.xE;
                p().greaterThanOrEqual(e7, i) && p().lessThan(e7, a) ? m = y.l.getLiquidityForAmounts(s ? e7 : i, s ? a : e7, e7, s ? k.nw : t, s ? t : k.nw) : p().lessThan(e7, i) ? s && (m = y.l.getLiquidityForAmounts(i, a, e7, k.nw, t)) : p().greaterThanOrEqual(e7, a) && !s && (m = y.l.getLiquidityForAmounts(i, a, e7, t, k.nw)), ex(m), u = p().lessThan(e7, a) && p().greaterThan(e7, i) && p().greaterThan(m, k.xE) ? s ? y.l.getDy(m, i, e7, !0) : y.l.getDx(m, e7, a, !0) : k.xE;
                var f = v.O$.from(String(u));
                if (e) {
                  X(t), ec(f);
                  var g = parseFloat(b.formatUnits(f, ea.decimals)).toPrecision(6);
                  eZ(parseFloat(g) > 0 ? g : "")
                } else {
                  X(f), ec(t);
                  var h = parseFloat(b.formatUnits(f, W.decimals)).toPrecision(6);
                  eS(parseFloat(h) > 0 ? h : "")
                }
              } else X(k.nw), ec(k.nw), e ? eZ("") : eS("")
            } catch (w) {
              console.log(w)
            }
          },
          P = (0, a.Z)((0, T.F)(function (e) {
            return [e.chainId, e.networkName, e.limitSubgraph, e.coverSubgraph, e.logoMap, ]
          }), 5),
          S = P[0],
          F = P[1],
          E = P[2],
          Z = (P[3], P[4]),
          D = (0, a.Z)((0, u.H)(function (e) {
            return [e.rangePoolAddress, e.rangePoolData, e.rangePositionData, e.rangeMintParams, e.setRangePositionData, e.tokenIn, e.setTokenIn, e.setTokenInAmount, e.setTokenInRangeAllowance, e.setTokenInRangeUSDPrice, e.setTokenInBalance, e.tokenOut, e.setTokenOut, e.setTokenOutRangeAllowance, e.setTokenOutAmount, e.setTokenOutRangeUSDPrice, e.setTokenOutBalance, e.setLiquidityAmount, e.startPrice, e.pairSelected, e.setPairSelected, e.setMintButtonState, e.setRangePoolFromFeeTier, e.priceOrder, e.setPriceOrder, e.needsAllowanceIn, e.needsBalanceIn, e.needsAllowanceOut, e.needsBalanceOut, e.setNeedsBalanceIn, e.setNeedsBalanceOut, e.setRangePoolData, e.setStartPrice, e.setStakeFlag, ]
          }), 34),
          M = D[0],
          R = D[1],
          _ = D[2],
          B = D[3],
          U = D[4],
          W = D[5],
          Y = D[6],
          X = D[7],
          er = D[8],
          en = D[9],
          ei = D[10],
          ea = D[11],
          el = D[12],
          eo = D[13],
          ec = D[14],
          ed = D[15],
          eu = D[16],
          ex = D[17],
          em = D[18],
          ep = D[19],
          ef = D[20],
          eg = D[21],
          eh = D[22],
          ev = D[23],
          eb = D[24],
          ek = (D[25], D[26], D[27], D[28], D[29]),
          ey = D[30],
          ew = D[31],
          ej = D[32],
          eN = D[33],
          eA = (0, g.mA)(),
          eC = eA.address,
          eI = eA.isConnected,
          eP = (0, f.Z)(),
          eT = eP.inputBox,
          eS = eP.setDisplay,
          eO = eP.display,
          eF = (0, f.Z)(),
          eE = eF.inputBox,
          eZ = eF.setDisplay,
          eD = eF.display,
          eL = (0, d.useState)(!1);
        eL[0], eL[1];
        var eM = (0, d.useState)(!0),
          eR = eM[0],
          e_ = eM[1],
          eB = (0, d.useState)(!1),
          eq = eB[0],
          eU = eB[1],
          e$ = (0, d.useState)(!1),
          ez = e$[0],
          eH = e$[1];

        function eV(e) {
          return eG.apply(this, arguments)
        }

        function eG() {
          return (eG = (0, r.Z)(function (e) {
            var t, s, r, n, i;
            return (0, o.__generator)(this, function (s) {
              switch (s.label) {
                case 0:
                  return [4, (0, G.Vo)(E)];
                case 1:
                  return (t = s.sent()).data && (r = (0, t.data.limitPools).find(function (e) {
                    return e.id.toLowerCase() == String(L().query.poolId).toLowerCase()
                  }), L().query.feeTier && !isNaN(parseInt(L().query.feeTier.toString())) && void 0 == R.feeTier && L().query.poolId != k.r_ && void 0 != r ? (n = {
                    name: r.token0.symbol,
                    address: r.token0.id,
                    symbol: r.token0.symbol,
                    decimals: r.token0.decimals,
                    userBalance: r.token0.balance,
                    callId: 0
                  }, Y(i = {
                    name: r.token1.symbol,
                    address: r.token1.id,
                    symbol: r.token1.symbol,
                    decimals: r.token1.decimals,
                    userBalance: r.token1.balance,
                    callId: 1
                  }, n, "0", !0), el(n, i, "0", !1), eh(n, i, e, E)) : eh(W, ea, e, E)), [2]
              }
            })
          })).apply(this, arguments)
        }(0, d.useEffect)(function () {
          W.address != k.r_ && ea.address != k.r_ ? (eY(), e0(), ef(!0), void 0 != R.feeTier && eV(parseInt(R.feeTier.feeAmount))) : ef(!1)
        }, [W.address, ea.address]), (0, d.useEffect)(function () {
          L().query.feeTier && !isNaN(parseInt(L().query.feeTier.toString())) && void 0 == R.feeTier && eV(parseInt(L().query.feeTier.toString()))
        }, [L().query.feeTier]), (0, d.useEffect)(function () {
          var e;
          (e = (0, r.Z)(function () {
            var e, t, s, r;
            return (0, o.__generator)(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, (0, G.Vo)(E)];
                case 1:
                  return (e = n.sent()).data && (s = {
                    name: (t = e.data.limitPools[0]).token0.symbol,
                    address: t.token0.id,
                    symbol: t.token0.symbol,
                    decimals: t.token0.decimals,
                    userBalance: t.token0.balance,
                    callId: 0
                  }, Y(r = {
                    name: t.token1.symbol,
                    address: t.token1.id,
                    symbol: t.token1.symbol,
                    decimals: t.token1.decimals,
                    userBalance: t.token1.balance,
                    callId: 1
                  }, s, "0", !0), el(s, r, "0", !1), eh(s, r, parseInt(t.feeTier.feeAmount), E)), [2]
              }
            })
          }), function () {
            return e.apply(this, arguments)
          })()
        }, [S]);
        var eJ = (e1 = (0, r.Z)(function (e) {
          return (0, o.__generator)(this, function (t) {
            return eV(e), ew((0, i.Z)((0, n.Z)({}, R), {
              feeTier: (0, i.Z)((0, n.Z)({}, R.feeTier), {
                feeAmount: e,
                tickSpacing: q.do[e].tickSpacing
              })
            })), [2]
          })
        }), function (e) {
          return e1.apply(this, arguments)
        });
        (0, d.useEffect)(function () {
          if (R.poolPrice && R.tickAtPrice) {
            var e = p().BigInt(R.poolPrice),
              t = R.tickAtPrice;
            M != k.r_ && void 0 == e4 && (td((0, x.yA)(x.pk.getPriceStringAtTick(ev == (0 == W.callId) ? t - 7e3 : t - -7e3, W, ea), ev == (0 == W.callId))), tm((0, x.yA)(x.pk.getPriceStringAtTick(ev == (0 == W.callId) ? t - -7e3 : t - 7e3, W, ea), ev == (0 == W.callId)))), e9(x.pk.getPriceStringAtSqrtPrice(e, W, ea)), e8(e)
          }
        }, [R.feeTier, R.poolPrice, R.tickAtPrice, ]);
        var eQ = (0, g.do)({
            address: W.address,
            abi: h.em,
            functionName: "allowance",
            args: [eC, (0, O.AQ)(F)],
            chainId: S,
            watch: !0,
            enabled: void 0 != W.address,
            onSuccess: function (e) {},
            onError: function (e) {
              console.log("Error allowance", e)
            }
          }),
          eW = eQ.data,
          eY = eQ.refetch,
          eX = (0, g.do)({
            address: ea.address,
            abi: h.em,
            functionName: "allowance",
            args: [eC, (0, O.AQ)(F)],
            chainId: S,
            watch: !0,
            onSuccess: function (e) {},
            onError: function (e) {
              console.log("Error allowance", e)
            }
          }),
          eK = eX.data,
          e0 = eX.refetch;
        (0, d.useEffect)(function () {
          er(eW), eo(eK)
        }, [eW, eK]);
        var e1, e5 = (0, g.KQ)({
            address: eC,
            token: W.native ? void 0 : W.address,
            enabled: W.address != k.r_,
            watch: !0,
            chainId: S,
            onSuccess: function (e) {
              ek(!1), setTimeout(function () {
                ek(!0)
              }, 5e3)
            }
          }).data,
          e2 = (0, g.KQ)({
            address: eC,
            token: ea.native ? void 0 : ea.address,
            enabled: ea.address != k.r_,
            watch: !0,
            chainId: S,
            onSuccess: function (e) {
              ey(!1), setTimeout(function () {
                ey(!0)
              }, 5e3)
            },
            onError: function (e) {
              console.log("token out error", e)
            }
          }).data;
        (0, d.useEffect)(function () {
          eI && e5 && (ei(null == e5 ? void 0 : e5.formatted.toString()), ep && e2 && eu(null == e2 ? void 0 : e2.formatted.toString()))
        }, [e5, e2]), (0, d.useEffect)(function () {
          R.token0 && R.token1 && (W.address && (0, j.W0)(R, W, en), ea.address && (0, j.W0)(R, ea, ed))
        }, [R.token0, R.token1, W.native, ea.native, ]);
        var e3 = (0, d.useState)(void 0),
          e4 = e3[0],
          e9 = e3[1],
          e6 = (0, d.useState)(void 0),
          e7 = e6[0],
          e8 = e6[1],
          te = (0, d.useState)("0"),
          tt = te[0],
          ts = te[1],
          tr = (0, d.useState)("0"),
          tn = tr[0],
          ti = tr[1];
        (0, d.useEffect)(function () {
          if (tn != tt && void 0 != e4) {
            var e = parseFloat(tn) <= parseFloat(e4),
              t = parseFloat(tt) >= parseFloat(e4),
              s = 0 == W.callId ? e : t,
              r = 0 == ea.callId ? e : t;
            eU(s), eH(r), s && B.tokenInAmount.gt(k.nw) ? (eS(""), I(!0, k.nw), e_(!0)) : r && B.tokenOutAmount.gt(k.nw) ? (eZ(""), I(!1, k.nw), e_(!1)) : I(eR, eR ? B.tokenInAmount : B.tokenOutAmount)
          }
        }, [tt, tn, e4]);
        var ta = function (e) {
          if ("tokenIn" === e.target.name) {
            var t = (0, a.Z)((0, H.wv)(e, W), 2),
              s = t[0],
              r = t[1];
            eS(s), I(!0, r), e_(!0)
          } else if ("tokenOut" === e.target.name) {
            var n = (0, a.Z)((0, H.wv)(e, ea), 2),
              i = n[0],
              l = n[1];
            eZ(i), I(!1, l), e_(!1)
          }
        };
        (0, d.useEffect)(function () {
          I(eR, B.tokenInAmount)
        }, [W.callId]);
        var tl = function (e) {
            var t = e ? W : ea,
              s = t.userBalance.toString(),
              r = (0, H.vz)(s, t.decimals);
            e ? eS(s) : eZ(s), I(e, r), e_(e)
          },
          to = (0, d.useState)(""),
          tc = to[0],
          td = to[1],
          tu = (0, d.useState)(""),
          tx = tu[0],
          tm = tu[1],
          tp = function () {
            eb(!ev), tm((0, x.yA)(tc, !1)), td((0, x.yA)(tx, !1)), M == k.r_ && ej((0, x.yA)(em, !1))
          };
        (0, d.useEffect)(function () {
          var e;
          if (!isNaN(parseFloat(tc)) && !isNaN(parseFloat(tx)) && !isNaN(parseFloat(null === (e = R.feeTier) || void 0 === e ? void 0 : e.tickSpacing))) {
            var t, s, r, a, l = (0, x.yA)((0, x._k)(ev ? tc : tx, W, ea, null !== (r = null === (t = R.feeTier) || void 0 === t ? void 0 : t.tickSpacing) && void 0 !== r ? r : 30), ev),
              o = (0, x.yA)((0, x._k)(ev ? tx : tc, W, ea, null !== (a = null === (s = R.feeTier) || void 0 === s ? void 0 : s.tickSpacing) && void 0 !== a ? a : 30), ev);
            ts(l), ti(o), U((0, i.Z)((0, n.Z)({}, _), {
              lowerPrice: l,
              upperPrice: o
            }))
          }
        }, [tx, tc, null === (t = R.feeTier) || void 0 === t ? void 0 : t.tickSpacing]), (0, d.useEffect)(function () {
          M == k.r_ && em && !isNaN(parseFloat(em)) && ew({
            poolPrice: String(x.pk.getSqrtPriceAtPriceString((0, x.yA)(em, ev), W, ea)),
            tickAtPrice: x.pk.getTickAtPriceString((0, x.yA)(em, ev), W, ea),
            feeTier: R.feeTier
          })
        }, [M, em]), (0, d.useEffect)(function () {
          eg()
        }, [W, ea, B.tokenInAmount, B.tokenOutAmount, ]);
        var tf = (0, d.useState)(!1),
          tg = tf[0],
          th = tf[1];
        return (0, d.useEffect)(function () {
          var e = parseFloat(tt),
            t = parseFloat(tn),
            s = parseFloat(e4);
          isNaN(e) || isNaN(t) || isNaN(s) || !(e > 0) || !(t > 0) || (e <= s && t <= s || e >= s && t >= s ? th(!0) : th(!1))
        }, [tt, e4, tn]), (0, c.jsxs)("div", {
          className: "bg-black min-h-screen ",
          children: [(0, c.jsx)(N.Z, {}), (0, c.jsxs)("div", {
            className: "text-white flex flex-col mx-auto max-w-2xl justify-center pt-10 px-3 md:px-0 pb-32",
            children: [(0, c.jsxs)("div", {
              className: "flex md:flex-row flex-col md:items-center items-start gap-y-4 justify-between",
              children: [(0, c.jsx)("h1", {
                className: "uppercase",
                children: "RANGE POOL"
              }), (0, c.jsx)("div", {
                children: (0, c.jsxs)("div", {
                  className: "flex items-center gap-x-2 bg-dark border border-grey py-2 px-5 rounded-[4px]",
                  children: [(0, c.jsxs)("div", {
                    className: "flex items-center",
                    children: [(0, c.jsx)("img", {
                      className: "md:w-6 w-6",
                      src: Z[(0, j.pJ)(W)]
                    }), (0, c.jsx)("img", {
                      className: "md:w-6 w-6 -ml-2",
                      src: (Z[(0, j.pJ)(ea)]).replace("https://raw.githubusercontent.com/poolshark-protocol/token-metadata/master/blockchains/arbitrum-one/assets/0x903ca00944d0b51e50d9f4fc96167c89f211542a/logo.png","/logo.png")
                      // 
                    })]
                  }), (0, c.jsxs)("span", {
                    className: "text-white text-xs",
                    children: [0 == W.callId ? W.symbol : ea.symbol, " -", " ", (0 == W.callId ? ea.symbol : W.symbol).replace("FIN","ITHACA")]
                  }), (0, c.jsxs)("span", {
                    className: "bg-grey/50 rounded-[4px] text-grey1 text-xs px-3 py-0.5",
                    children: [((isNaN(null === (s = R.feeTier) || void 0 === s ? void 0 : s.feeAmount) ? 0 : null === (m = R.feeTier) || void 0 === m ? void 0 : m.feeAmount) / 1e4).toFixed(2), "%"]
                  })]
                })
              })]
            }), (0, c.jsxs)("div", {
              className: "bg-dark w-full p-6 border border-grey mt-8 rounded-[4px]",
              children: [(0, c.jsx)("h1", {
                className: "mb-4",
                children: "ADD LIQUIDITY"
              }), (0, c.jsxs)("div", {
                className: "border border-grey bg-black rounded-[4px] w-full py-3 px-5 mt-2.5 flex flex-col gap-y-2",
                children: [(0, c.jsxs)("div", {
                  className: "flex items-end justify-between text-[11px] text-grey1",
                  children: [(0, c.jsxs)("span", {
                    children: ["~$", isNaN(W.USDPrice) ? "?.??" : (W.USDPrice * Number(b.formatUnits(B.tokenInAmount, W.decimals))).toFixed(2)]
                  }), (0, c.jsx)(Q.Z, {
                    token: W
                  })]
                }), (0, c.jsxs)("div", {
                  className: "flex items-end justify-between mt-2 mb-3 text-3xl",
                  children: [eT("0", W, "tokenIn", ta, eq), (0, c.jsxs)("div", {
                    className: "flex items-center gap-x-2",
                    children: [(0, c.jsx)("button", {
                      onClick: function () {
                        return tl(!0)
                      },
                      disabled: eq,
                      className: "text-xs text-grey1 bg-dark h-10 px-3 rounded-[4px] border-grey border md:block hidden",
                      children: "MAX"
                    }), (0, c.jsx)("div", {
                      className: "flex items-center gap-x-2",
                      children: (0, c.jsx)(V.Z, {
                        index: "0",
                        type: "in",
                        tokenIn: W,
                        setTokenIn: Y,
                        tokenOut: ea,
                        setTokenOut: el,
                        displayToken: W,
                        amount: eR ? eO : eD,
                        isAmountIn: eR
                      }, "in")
                    })]
                  })]
                })]
              }), (0, c.jsxs)("div", {
                className: "border border-grey bg-black rounded-[4px] w-full py-3 px-5 mt-2.5 flex flex-col gap-y-2",
                children: [(0, c.jsxs)("div", {
                  className: "flex items-end justify-between text-[11px] text-grey1",
                  children: [(0, c.jsxs)("span", {
                    children: ["~$", isNaN(ea.USDPrice) ? "?.??" : (Number(ea.USDPrice) * Number(b.formatUnits(B.tokenOutAmount, ea.decimals))).toFixed(2)]
                  }), (0, c.jsx)(Q.Z, {
                    token: ea
                  })]
                }), (0, c.jsxs)("div", {
                  className: "flex items-end justify-between mt-2 mb-3 text-3xl",
                  children: [eE("0", ea, "tokenOut", ta, ez), (0, c.jsxs)("div", {
                    className: "flex items-center gap-x-2 ",
                    children: [(0, c.jsx)("button", {
                      onClick: function () {
                        return tl(!1)
                      },
                      disabled: ez,
                      className: "text-xs text-grey1 bg-dark h-10 px-3 rounded-[4px] border-grey border md:block hidden",
                      children: "MAX"
                    }), (0, c.jsx)("div", {
                      className: "flex items-center gap-x-2",
                      children: (0, c.jsx)(V.Z, {
                        type: "out",
                        tokenIn: W,
                        setTokenIn: Y,
                        tokenOut: ea,
                        setTokenOut: el,
                        setPairSelected: ef,
                        displayToken: ea,
                        amount: eR ? eO : eD,
                        isAmountIn: eR
                      }, "out")
                    })]
                  })]
                })]
              }), (0, c.jsxs)("div", {
                className: "flex justify-between md:items-center items-start mb-4 mt-10",
                children: [(0, c.jsxs)("div", {
                  className: "flex md:flex-row flex-col md:items-center gap-3",
                  children: [(0, c.jsx)("h1", {
                    children: "SET A PRICE RANGE"
                  }), (0, c.jsx)("button", {
                    className: "text-grey1 text-xs bg-black border border-grey px-4 py-0.5 rounded-[4px] whitespace-nowrap",
                    onClick: function () {
                      var e, t, s, r;
                      td(x.pk.getPriceStringAtTick((0, x.Dm)(-887272, parseInt(null !== (s = null === (e = R.feeTier) || void 0 === e ? void 0 : e.tickSpacing) && void 0 !== s ? s : 30)), W, ea)), tm(x.pk.getPriceStringAtTick((0, x.Dm)(887272, parseInt(null !== (r = null === (t = R.feeTier) || void 0 === t ? void 0 : t.tickSpacing) && void 0 !== r ? r : 30)), W, ea))
                    },
                    children: "Full Range"
                  })]
                }), (0, c.jsxs)("div", {
                  onClick: tp,
                  className: "text-grey1 cursor-pointer flex items-center text-xs gap-x-2 uppercase",
                  children: [(0, c.jsxs)("span", {
                    className: "whitespace-nowrap",
                    children: [ev == (0 == W.callId) ? (0, c.jsx)(c.Fragment, {
                      children: ea.symbol
                    }) : (0, c.jsx)(c.Fragment, {
                      children: W.symbol
                    }), " ", "per", " ", ev == (0 == W.callId) ? (0, c.jsx)(c.Fragment, {
                      children: W.symbol
                    }) : (0, c.jsx)(c.Fragment, {
                      children: ea.symbol
                    })]
                  }), " ", (0, c.jsx)(z.Z, {})]
                })]
              }), (0, c.jsxs)("div", {
                className: "flex justify-between items-center w-full md:gap-x-4 gap-x-2",
                children: [(0, c.jsx)("button", {
                  onClick: function () {
                    td((0, x.yA)(x.pk.getPriceStringAtTick(ev == (0 == W.callId) ? R.tickAtPrice - 2232 : R.tickAtPrice - -2232, W, ea), ev == (0 == W.callId))), tm((0, x.yA)(x.pk.getPriceStringAtTick(ev == (0 == W.callId) ? R.tickAtPrice - -2232 : R.tickAtPrice - 2232, W, ea), ev == (0 == W.callId)))
                  },
                  className: "bg-grey/20 rounded-[4px] border border-grey uppercase text-xs py-3 w-full hover:bg-grey/50 border border-transparent hover:border-grey2 transition-all",
                  children: "Narrow"
                }), (0, c.jsx)("button", {
                  onClick: function () {
                    td((0, x.yA)(x.pk.getPriceStringAtTick(ev == (0 == W.callId) ? R.tickAtPrice - 4055 : R.tickAtPrice - -4055, W, ea), ev == (0 == W.callId))), tm((0, x.yA)(x.pk.getPriceStringAtTick(ev == (0 == W.callId) ? R.tickAtPrice - -4055 : R.tickAtPrice - 4055, W, ea), ev == (0 == W.callId)))
                  },
                  className: "bg-grey/20 rounded-[4px] border border-grey uppercase text-xs py-3 w-full hover:bg-grey/50 border border-transparent hover:border-grey2 transition-all",
                  children: "COMMON"
                }), (0, c.jsx)("button", {
                  onClick: function () {
                    td((0, x.yA)(x.pk.getPriceStringAtTick(ev == (0 == W.callId) ? R.tickAtPrice - 5596 : R.tickAtPrice - -5596, W, ea), ev == (0 == W.callId))), tm((0, x.yA)(x.pk.getPriceStringAtTick(ev == (0 == W.callId) ? R.tickAtPrice - -5596 : R.tickAtPrice - 5596, W, ea), ev == (0 == W.callId)))
                  },
                  className: "bg-grey/20 rounded-[4px] border border-grey uppercase text-xs py-3 w-full hover:bg-grey/50 border border-transparent hover:border-grey2 transition-all",
                  children: "WIDE"
                })]
              }), (0, c.jsxs)("div", {
                className: "flex flex-col gap-y-4",
                children: [(0, c.jsxs)("div", {
                  className: "flex md:flex-row flex-col items-center gap-5 mt-3",
                  children: [(0, c.jsxs)("div", {
                    className: "border bg-black border-grey rounded-[4px] flex flex-col w-full items-center justify-center gap-y-3 h-32",
                    children: [(0, c.jsx)("span", {
                      className: "text-grey1 text-xs",
                      children: "MIN. PRICE"
                    }), (0, c.jsx)("span", {
                      className: "text-white text-3xl",
                      children: (0, c.jsx)("input", {
                        autoComplete: "off",
                        className: "bg-black py-2 outline-none text-center w-full",
                        placeholder: "0",
                        id: "minInput",
                        type: "text",
                        value: tc,
                        onChange: function (e) {
                          return td((0, w.Z)(e.target.value))
                        }
                      })
                    })]
                  }), (0, c.jsxs)("div", {
                    className: "border bg-black border-grey rounded-[4px] flex flex-col w-full items-center justify-center gap-y-3 h-32",
                    children: [(0, c.jsx)("span", {
                      className: "text-grey1 text-xs",
                      children: "MAX. PRICE"
                    }), (0, c.jsx)("span", {
                      className: "text-white text-3xl",
                      children: (0, c.jsx)("input", {
                        autoComplete: "off",
                        className: "bg-black py-2 outline-none text-center w-full",
                        placeholder: "0",
                        id: "minInput",
                        type: "text",
                        value: tx,
                        onChange: function (e) {
                          return tm((0, w.Z)(e.target.value))
                        }
                      })
                    })]
                  })]
                }), M == k.r_ && void 0 != R.feeTier && (0, c.jsxs)("div", {
                  className: "bg-black border rounded-[4px] border-grey/50 p-5",
                  children: [(0, c.jsx)("p", {
                    className: "text-xs text-grey1 flex items-center gap-x-4 mb-5",
                    children: "This pool does not exist so a start price must be set."
                  }), (0, c.jsxs)("div", {
                    className: "border bg-black border-grey rounded-[4px] flex flex-col w-full items-center justify-center gap-y-3 h-32",
                    children: [(0, c.jsx)("span", {
                      className: "text-grey1 text-xs",
                      children: "STARTING PRICE"
                    }), (0, c.jsx)("span", {
                      className: "text-white text-3xl",
                      children: (0, c.jsx)("input", {
                        autoComplete: "off",
                        className: "bg-black py-2 outline-none text-center w-full",
                        placeholder: "0",
                        id: "startPrice",
                        type: "text",
                        onChange: function (e) {
                          ej((0, w.Z)(e.target.value))
                        }
                      })
                    })]
                  })]
                }), (0, c.jsxs)("div", {
                  className: "mb-2 mt-3 flex-col flex gap-y-8",
                  children: [(0, c.jsxs)("div", {
                    className: "flex items-center justify-between w-full text-xs text-[#C9C9C9]",
                    children: [(0, c.jsx)("div", {
                      className: "text-xs text-[#4C4C4C]",
                      children: "Market Price"
                    }), (0, c.jsx)(K, {
                      children: (0, c.jsxs)(ee, {
                        delayDuration: 100,
                        children: [(0, c.jsx)(et, {
                          children: (0, c.jsxs)("div", {
                            className: "uppercase flex items-center gap-x-2",
                            children: [(0, c.jsx)("svg", {
                              width: "17",
                              height: "17",
                              viewBox: "0 0 24 24",
                              className: "text-grey1",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: (0, c.jsx)("path", {
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9H12.01C12.5623 9 13.01 8.55228 13.01 8C13.01 7.44772 12.5623 7 12.01 7H12ZM13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12Z",
                                fill: "currentColor"
                              })
                            }), "1", " ", (ev == (0 == W.callId) ? W : ea).symbol, " ", "=", " ", isNaN(parseFloat(e4)) ? "? " + ea.symbol : parseFloat((0, x.yA)(e4, ev)).toPrecision(5) + " " + (ev == (0 == W.callId) ? ea : W).symbol]
                          })
                        }), (0, c.jsx)(es, {
                          className: "bg-dark text-xs rounded-[4px] border border-grey w-40 py-3",
                          children: (0, c.jsxs)("div", {
                            className: "flex items-center flex-col gap-y-1 w-full",
                            children: [(0, c.jsxs)("div", {
                              className: "flex justify-between items-center w-full",
                              children: [(0, c.jsxs)("span", {
                                className: "text-grey2 flex items-center gap-x-1",
                                children: [(0, c.jsx)("img", {
                                  className: "md:w-4",
                                  src: Z[(0, j.pJ)(W)]
                                }), W.symbol]
                              }), (0, c.jsxs)("span", {
                                className: "text-right",
                                children: ["$", isNaN(W.USDPrice) ? "?.??" : (1 * W.USDPrice).toFixed(2)]
                              })]
                            }), (0, c.jsx)("div", {
                              className: "bg-grey w-full h-[1px]"
                            }), (0, c.jsxs)("div", {
                              className: "flex justify-between items-center w-full",
                              children: [(0, c.jsxs)("span", {
                                className: "text-grey2 flex items-center gap-x-1",
                                children: [(0, c.jsx)("img", {
                                  className: " w-4",
                                  src: Z[(0, j.pJ)(ea)]
                                }), ea.symbol]
                              }), (0, c.jsxs)("span", {
                                className: "text-right",
                                children: ["$", isNaN(ea.USDPrice) ? "?.??" : (1 * ea.USDPrice).toFixed(2)]
                              })]
                            })]
                          })
                        })]
                      })
                    })]
                  }), tg && (0, c.jsxs)("div", {
                    className: " text-yellow-600 bg-yellow-900/30 text-[10px] md:text-[11px] flex items-center md:gap-x-5 gap-x-3 p-2 rounded-[8px]",
                    children: [(0, c.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      className: "md:w-9 w-12",
                      children: (0, c.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",
                        clipRule: "evenodd"
                      })
                    }), "Your position will not earn fees or be used in trades until the market price moves into your range."]
                  }), ((null === (A = B.tokenInAmount) || void 0 === A ? void 0 : A.gt(k.nw)) || (null === (C = B.tokenOutAmount) || void 0 === C ? void 0 : C.gt(k.nw))) && p().lessThanOrEqual(B.liquidityAmount, k.ry) ? (0, c.jsxs)("div", {
                    className: " text-red-600 bg-red-900/30 text-[10px] md:text-[11px] flex items-center md:gap-x-5 gap-x-3 p-2 rounded-[8px]",
                    children: [(0, c.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                      className: "md:w-9 w-12",
                      children: (0, c.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
                        clipRule: "evenodd"
                      })
                    }), "Liquidity size too small: please add more tokens or decrease the price range."]
                  }) : (0, c.jsx)(c.Fragment, {})]
                })]
              })]
            }), (0, c.jsxs)("div", {
              className: "bg-dark w-full p-6 border border-grey mt-8 rounded-[4px]",
              children: [(0, c.jsx)("h1", {
                className: "mb-4",
                children: "SELECT A FEE TIER"
              }), (0, c.jsx)("div", {
                className: "flex md:flex-row flex-col justify-between mt-8 gap-x-16 gap-y-4",
                children: q.zq.map(function (e, t) {
                  var s;
                  return (0, c.jsxs)("div", {
                    onClick: function () {
                      eJ(e.tierId)
                    },
                    className: "bg-black p-4 w-full rounded-[4px] cursor-pointer transition-all ".concat((null === (s = R.feeTier) || void 0 === s ? void 0 : s.feeAmount.toString()) === e.tierId.toString() ? "border-grey1 border bg-grey/20" : "border border-grey"),
                    children: [(0, c.jsxs)("h1", {
                      children: [e.tier, " FEE"]
                    }), (0, c.jsx)("h2", {
                      className: "text-[11px] uppercase text-grey1 mt-2",
                      children: e.text
                    })]
                  }, t)
                })
              })]
            }), (0, c.jsx)("div", {
              className: "bg-green-500/10 w-full p-6 border border-green-500/30 mt-8 rounded-[4px]",
              children: (0, c.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [(0, c.jsxs)("label", {
                  className: "text-green-500 cursor-pointer",
                  children: [(0, c.jsx)("input", {
                    type: "checkbox",
                    checked: B.stakeFlag,
                    onChange: function () {
                      eN(!B.stakeFlag)
                    },
                    className: "cursor-pointer"
                  }), " ", "STAKE RANGE POSITION"]
                }), (0, c.jsx)("span", {
                  className: "text-green-500/40 underline text-sm hidden",
                  children: "How does it work?"
                })]
              })
            }), (0, c.jsx)("div", {
              className: "bg-dark mt-8"
            }), eI ? (0, c.jsx)($, {}) : (0, c.jsx)(J.p, {
              xl: !0
            })]
          })]
        })
      }
      es.displayName = Y.VY.displayName
    },
    49384: function (e, t, s) {
      "use strict";
      s.d(t, {
        cn: function () {
          return i
        }
      });
      var r = s(90512),
        n = s(98388);

      function i() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
        return (0, n.m6)((0, r.W)(t))
      }
    }
  },
  function (e) {
    e.O(0, [3061, 3973, 1516, 1725, 4160, 9737, 7940, 3006, 9774, 2888, 179], function () {
      return e(e.s = 40590)
    }), _N_E = e.O()
  }
]);