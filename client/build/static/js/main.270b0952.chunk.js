(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    35: function (e, t, a) {
      e.exports = a(67);
    },
    40: function (e, t, a) {},
    67: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        o = a.n(n),
        r = a(29),
        l = a.n(r),
        c = (a(40), a(41), a(32)),
        s = a(7);
      var i = function () {
          return o.a.createElement(
            "nav",
            { className: "navbar navbar-expand navbar-dark bg-dark" },
            o.a.createElement(
              "a",
              { className: "navbar-brand", href: "/" },
              "React Book Search"
            ),
            o.a.createElement(
              "ul",
              { className: "navbar-nav mr-auto" },
              o.a.createElement(
                "li",
                { className: "nav-item" },
                o.a.createElement(
                  "a",
                  { className: "nav-link", href: "/" },
                  "Search"
                )
              ),
              o.a.createElement(
                "li",
                { className: "nav-item" },
                o.a.createElement(
                  "a",
                  { className: "nav-link", href: "/saved" },
                  "Saved"
                )
              )
            )
          );
        },
        u = a(30),
        d = a(9),
        m = a(10),
        h = a(12),
        v = a(11),
        f = a(13);
      function b(e) {
        var t = e.children;
        return o.a.createElement("div", { className: "container" }, t);
      }
      function k(e) {
        var t = e.children;
        return o.a.createElement("div", { className: "row" }, t);
      }
      function E(e) {
        var t = e.children;
        return o.a.createElement("div", { className: "col" }, t);
      }
      var p = function (e) {
        var t = e.onClick,
          a = e.children;
        return o.a.createElement(
          "button",
          { onClick: t, className: "btn btn-primary" },
          a
        );
      };
      function g(e) {
        var t = e.children;
        return o.a.createElement("ul", { className: "list-group" }, t);
      }
      function S(e) {
        var t = e.googleId,
          a = e.title,
          n = e.authors,
          r = e.description,
          l = e.thumbnail,
          c = e.href,
          s = e.date,
          i = e.clickEvent,
          u = e.saved,
          d = e.screenWidth;
        return (
          console.log(u),
          o.a.createElement(
            "li",
            { className: "list-group-item m-2" },
            d >= 768 &&
              o.a.createElement(
                "div",
                { className: "float-right" },
                u
                  ? o.a.createElement(
                      "button",
                      {
                        className: "btn btn-danger",
                        onClick: function (e) {
                          return i(e, t);
                        },
                      },
                      "Unsave"
                    )
                  : o.a.createElement(
                      "button",
                      {
                        className: "btn btn-success",
                        onClick: function (e) {
                          return i(e, t, a, n, r, c, l);
                        },
                      },
                      "Save"
                    ),
                o.a.createElement(
                  "a",
                  {
                    className: "btn btn-primary ml-2 mr-2",
                    href: c,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  "View"
                )
              ),
            o.a.createElement("h4", { className: "font-weight-bold" }, a),
            o.a.createElement(
              "h5",
              null,
              "by",
              " ",
              n.length > 1
                ? n.reduce(function (e, t) {
                    return [e, ", ", t];
                  })
                : n[0]
            ),
            o.a.createElement(
              k,
              null,
              o.a.createElement(
                "div",
                { className: "col-sm-12 col-md-auto text-center" },
                o.a.createElement("img", {
                  src: l,
                  alt: a,
                  className: "mt-1 mb-2",
                })
              ),
              o.a.createElement(
                E,
                null,
                o.a.createElement(
                  "p",
                  { className: d < 768 ? "text-justify" : "" },
                  r
                )
              )
            ),
            d < 768 &&
              o.a.createElement(
                "div",
                { className: "row" },
                o.a.createElement(
                  E,
                  null,
                  u
                    ? o.a.createElement(
                        "button",
                        {
                          className: "btn btn-danger btn-block",
                          onClick: function (e) {
                            return i(e, t);
                          },
                        },
                        "Unsave"
                      )
                    : o.a.createElement(
                        "button",
                        {
                          className: "btn btn-success btn-block",
                          onClick: function (e) {
                            return i(e, t, a, n, r, c, l);
                          },
                        },
                        "Save"
                      )
                ),
                o.a.createElement(
                  E,
                  null,
                  o.a.createElement(
                    "a",
                    {
                      className: "btn btn-primary btn-block",
                      href: c,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    "View"
                  )
                )
              ),
            u &&
              o.a.createElement(
                "div",
                { className: "row" },
                o.a.createElement(
                  E,
                  null,
                  o.a.createElement(
                    "small",
                    { className: "text-right" },
                    "Saved on ",
                    s
                  )
                )
              )
          )
        );
      }
      var B = a(15),
        N = a.n(B),
        w = a(31),
        y = a.n(w),
        I = {
          getBooks: function (e) {
            return N.a.get("./api/books", { params: { q: e } });
          },
          getSavedBooks: function () {
            return N.a.get("/api/savedBooks");
          },
          saveBook: function (e) {
            return N.a.post("./api/savedBooks", e);
          },
          deleteSavedBook: function (e) {
            return N.a.delete("/api/savedBooks/".concat(e));
          },
          getDate: function (e) {
            var t = e.toString().substring(0, 8),
              a = new Date(1e3 * parseInt(t, 16));
            return y()(a).format("MMM D, YYY @ h:mma");
          },
        },
        j = (function (e) {
          function t() {
            var e, a;
            Object(d.a)(this, t);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
              o[r] = arguments[r];
            return (
              ((a = Object(h.a)(
                this,
                (e = Object(v.a)(t)).call.apply(e, [this].concat(o))
              )).state = {
                books: [],
                bookSearch: "",
                savedBooks: [],
                screenWidth: window.innerWidth,
                searched: "",
              }),
              (a.checkIfSaved = function (e) {
                for (var t in a.state.savedBooks)
                  if (a.state.savedBooks[t].googleId === e) return !0;
                return !1;
              }),
              (a.checkSavedDate = function (e) {
                for (var t in a.state.savedBooks)
                  if (a.state.savedBooks[t].googleId === e)
                    return I.getDate(a.state.savedBooks[t]._id);
                return null;
              }),
              (a.updateDimensions = function () {
                a.setState({ screenWidth: window.innerWidth });
              }),
              (a.loadSavedBooks = function () {
                I.getSavedBooks().then(function (e) {
                  a.setState({ savedBooks: e.data });
                });
              }),
              (a.handleInputChange = function (e) {
                var t = e.target,
                  n = t.name,
                  o = t.value;
                a.setState(Object(u.a)({}, n, o));
              }),
              (a.handleFormSubmit = function (e) {
                e.preventDefault(),
                  a.setState({ searched: a.state.bookSearch, bookSearch: "" }),
                  I.getBooks(a.state.bookSearch)
                    .then(function (e) {
                      return a.setState({ books: e.data }, function () {
                        return console.log(e.data);
                      });
                    })
                    .catch(function (e) {
                      return console.log(e);
                    });
              }),
              (a.deleteSavedBook = function (e, t) {
                e.preventDefault(),
                  I.deleteSavedBook(t)
                    .then(function (e) {
                      return a.loadSavedBooks();
                    })
                    .catch(function (e) {
                      return console.log(e);
                    });
              }),
              (a.handleSave = function (e, t, n, o, r, l, c) {
                e.preventDefault(),
                  I.saveBook({
                    googleId: t,
                    title: n,
                    authors: o,
                    description: r,
                    href: l,
                    thumbnail: c,
                  }).then(function (e) {
                    return a.loadSavedBooks();
                  });
              }),
              a
            );
          }
          return (
            Object(f.a)(t, e),
            Object(m.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.loadSavedBooks(),
                    window.addEventListener("resize", this.updateDimensions);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return o.a.createElement(
                    b,
                    null,
                    o.a.createElement(
                      k,
                      null,
                      o.a.createElement(
                        "div",
                        {
                          className:
                            "col rounded text-center bg-secondary mt-4 p-4",
                        },
                        o.a.createElement("h1", null, "Google Book Search"),
                        o.a.createElement(
                          "h4",
                          null,
                          "Search and save your favorite books!"
                        )
                      )
                    ),
                    o.a.createElement(
                      k,
                      null,
                      o.a.createElement(
                        "div",
                        { className: "col rounded bg-light mb-4 mt-4 p-4" },
                        o.a.createElement("h4", null, "Book Search"),
                        o.a.createElement(
                          "form",
                          null,
                          o.a.createElement(
                            "div",
                            { className: "form-group" },
                            o.a.createElement(
                              "label",
                              { htmlFor: "bookSearch" },
                              "Book"
                            ),
                            o.a.createElement("input", {
                              type: "text",
                              className: "form-control",
                              id: "bookSearch",
                              name: "bookSearch",
                              value: this.state.bookSearch,
                              onChange: this.handleInputChange,
                            })
                          ),
                          o.a.createElement(
                            p,
                            {
                              className: "btn btn-primary",
                              onClick: this.handleFormSubmit,
                            },
                            "Search"
                          )
                        )
                      )
                    ),
                    o.a.createElement(
                      k,
                      null,
                      o.a.createElement(
                        "div",
                        { className: "col border border-rounded p-3 mb-4" },
                        "" === this.state.searched
                          ? o.a.createElement("h4", null, "Results")
                          : o.a.createElement(
                              "h4",
                              null,
                              "Results for ",
                              this.state.searched
                            ),
                        this.state.books.length
                          ? o.a.createElement(
                              g,
                              null,
                              this.state.books.map(function (t) {
                                return o.a.createElement(S, {
                                  key: t.volumeInfo.infoLink,
                                  googleId: t.id,
                                  title:
                                    t.volumeInfo.title || "Title Unavailable",
                                  authors: t.volumeInfo.authors || [
                                    "Unknown Author",
                                  ],
                                  description:
                                    t.volumeInfo.description ||
                                    "No description available",
                                  thumbnail: t.volumeInfo.imageLinks
                                    ? t.volumeInfo.imageLinks.smallThumbnail
                                    : "img/placeholder.png",
                                  href: t.volumeInfo.infoLink,
                                  saved: e.checkIfSaved(t.id),
                                  clickEvent: e.checkIfSaved(t.id)
                                    ? e.deleteSavedBook
                                    : e.handleSave,
                                  date: e.checkSavedDate(t.id),
                                  screenWidth: e.state.screenWidth,
                                });
                              })
                            )
                          : o.a.createElement(
                              "h6",
                              { className: "text-center" },
                              "No books to display currently"
                            )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        D = (function (e) {
          function t() {
            var e, a;
            Object(d.a)(this, t);
            for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++)
              o[r] = arguments[r];
            return (
              ((a = Object(h.a)(
                this,
                (e = Object(v.a)(t)).call.apply(e, [this].concat(o))
              )).state = { savedBooks: [], screenWidth: window.innerWidth }),
              (a.updateDimensions = function () {
                a.setState({ screenWidth: window.innerWidth }, function () {
                  return console.log(a.state.screenWidth);
                });
              }),
              (a.loadSavedBooks = function () {
                I.getSavedBooks().then(function (e) {
                  return a.setState({ savedBooks: e.data });
                });
              }),
              (a.deleteSavedBook = function (e, t) {
                e.preventDefault(),
                  I.deleteSavedBook(t)
                    .then(function (e) {
                      return a.loadSavedBooks();
                    })
                    .catch(function (e) {
                      return console.log(e);
                    });
              }),
              a
            );
          }
          return (
            Object(f.a)(t, e),
            Object(m.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.loadSavedBooks(),
                    window.addEventListener("resize", this.updateDimensions);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return o.a.createElement(
                    b,
                    null,
                    o.a.createElement(
                      k,
                      null,
                      o.a.createElement(
                        "div",
                        {
                          className:
                            "col rounded text-center bg-info mt-4 mb-4 p-4",
                        },
                        o.a.createElement("h1", null, "Saved Books")
                      )
                    ),
                    o.a.createElement(
                      k,
                      null,
                      o.a.createElement(
                        "div",
                        { className: "col border border-rounded p-3 mb-4" },
                        o.a.createElement("h4", null, "Saved Books"),
                        this.state.savedBooks.length
                          ? o.a.createElement(
                              g,
                              null,
                              this.state.savedBooks.map(function (t) {
                                return o.a.createElement(S, {
                                  key: t.googleId,
                                  googleId: t.googleId,
                                  title: t.title,
                                  authors: t.authors,
                                  description: t.description,
                                  thumbnail: t.thumbnail,
                                  href: t.href,
                                  date: I.getDate(t._id),
                                  saved: !0,
                                  clickEvent: e.deleteSavedBook,
                                  screenWidth: e.state.screenWidth,
                                });
                              })
                            )
                          : o.a.createElement(
                              "h6",
                              { className: "text-center" },
                              "No books saved to display"
                            )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(n.Component),
        O = (function (e) {
          function t() {
            return (
              Object(d.a)(this, t),
              Object(h.a)(this, Object(v.a)(t).apply(this, arguments))
            );
          }
          return (
            Object(f.a)(t, e),
            Object(m.a)(t, [
              {
                key: "render",
                value: function () {
                  return o.a.createElement("div", null, "404 Page Not Found");
                },
              },
            ]),
            t
          );
        })(n.Component);
      var W = function () {
        return o.a.createElement(
          c.a,
          null,
          o.a.createElement(
            "div",
            null,
            o.a.createElement(i, null),
            o.a.createElement(
              s.c,
              null,
              o.a.createElement(s.a, { exact: !0, path: "/", component: j }),
              o.a.createElement(s.a, { path: "/saved", component: D }),
              o.a.createElement(s.a, { component: O })
            )
          )
        );
      };
      l.a.render(o.a.createElement(W, null), document.getElementById("root"));
    },
  },
  [[35, 1, 2]],
]);
//# sourceMappingURL=main.270b0952.chunk.js.map
