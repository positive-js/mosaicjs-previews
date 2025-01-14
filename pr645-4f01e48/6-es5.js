(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); _groups.set(_this, groups || _groups.get(re)); return _setPrototypeOf(_this, BabelRegExp.prototype); } _inherits(BabelRegExp, RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; if (typeof args[args.length - 1] !== "object") { args = [].slice.call(args); args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6], {
    /***/
    "+s0g":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/nl.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function s0g(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
            monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
        var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
        var monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        var nl = moment.defineLocale('nl', {
          months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
          monthsShort: function monthsShort(m, format) {
            if (!m) {
              return monthsShortWithDots;
            } else if (/-MMM-/.test(format)) {
              return monthsShortWithoutDots[m.month()];
            } else {
              return monthsShortWithDots[m.month()];
            }
          },
          monthsRegex: monthsRegex,
          monthsShortRegex: monthsRegex,
          monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: monthsParse,
          longMonthsParse: monthsParse,
          shortMonthsParse: monthsParse,
          weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
          weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
          weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'over %s',
            past: '%s geleden',
            s: 'een paar seconden',
            ss: '%d seconden',
            m: 'één minuut',
            mm: '%d minuten',
            h: 'één uur',
            hh: '%d uur',
            d: 'één dag',
            dd: '%d dagen',
            M: 'één maand',
            MM: '%d maanden',
            y: 'één jaar',
            yy: '%d jaar'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function ordinal(number) {
            return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return nl;
      });
      /***/

    },

    /***/
    "//9w":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/se.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function w(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var se = moment.defineLocale('se', {
          months: 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
          monthsShort: 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
          weekdays: 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
          weekdaysShort: 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
          weekdaysMin: 's_v_m_g_d_b_L'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'MMMM D. [b.] YYYY',
            LLL: 'MMMM D. [b.] YYYY [ti.] HH:mm',
            LLLL: 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
          },
          calendar: {
            sameDay: '[otne ti] LT',
            nextDay: '[ihttin ti] LT',
            nextWeek: 'dddd [ti] LT',
            lastDay: '[ikte ti] LT',
            lastWeek: '[ovddit] dddd [ti] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s geažes',
            past: 'maŋit %s',
            s: 'moadde sekunddat',
            ss: '%d sekunddat',
            m: 'okta minuhta',
            mm: '%d minuhtat',
            h: 'okta diimmu',
            hh: '%d diimmut',
            d: 'okta beaivi',
            dd: '%d beaivvit',
            M: 'okta mánnu',
            MM: '%d mánut',
            y: 'okta jahki',
            yy: '%d jagit'
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return se;
      });
      /***/

    },

    /***/
    "/X5v":
    /*!************************************************!*\
      !*** ./node_modules/moment/locale/x-pseudo.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function X5v(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var xPseudo = moment.defineLocale('x-pseudo', {
          months: 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
          monthsShort: 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
          monthsParseExact: true,
          weekdays: 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
          weekdaysShort: 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
          weekdaysMin: 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[T~ódá~ý át] LT',
            nextDay: '[T~ómó~rró~w át] LT',
            nextWeek: 'dddd [át] LT',
            lastDay: '[Ý~ést~érdá~ý át] LT',
            lastWeek: '[L~ást] dddd [át] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'í~ñ %s',
            past: '%s á~gó',
            s: 'á ~féw ~sécó~ñds',
            ss: '%d s~écóñ~ds',
            m: 'á ~míñ~úté',
            mm: '%d m~íñú~tés',
            h: 'á~ñ hó~úr',
            hh: '%d h~óúrs',
            d: 'á ~dáý',
            dd: '%d d~áýs',
            M: 'á ~móñ~th',
            MM: '%d m~óñt~hs',
            y: 'á ~ýéár',
            yy: '%d ý~éárs'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function ordinal(number) {
            var b = number % 10,
                output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return xPseudo;
      });
      /***/

    },

    /***/
    "0mo+":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/bo.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function mo(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '༡',
          '2': '༢',
          '3': '༣',
          '4': '༤',
          '5': '༥',
          '6': '༦',
          '7': '༧',
          '8': '༨',
          '9': '༩',
          '0': '༠'
        },
            numberMap = {
          '༡': '1',
          '༢': '2',
          '༣': '3',
          '༤': '4',
          '༥': '5',
          '༦': '6',
          '༧': '7',
          '༨': '8',
          '༩': '9',
          '༠': '0'
        };
        var bo = moment.defineLocale('bo', {
          months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
          monthsShort: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
          weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
          weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
          weekdaysMin: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
          longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm',
            LLLL: 'dddd, D MMMM YYYY, A h:mm'
          },
          calendar: {
            sameDay: '[དི་རིང] LT',
            nextDay: '[སང་ཉིན] LT',
            nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
            lastDay: '[ཁ་སང] LT',
            lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s ལ་',
            past: '%s སྔན་ལ',
            s: 'ལམ་སང',
            ss: '%d སྐར་ཆ།',
            m: 'སྐར་མ་གཅིག',
            mm: '%d སྐར་མ',
            h: 'ཆུ་ཚོད་གཅིག',
            hh: '%d ཆུ་ཚོད',
            d: 'ཉིན་གཅིག',
            dd: '%d ཉིན་',
            M: 'ཟླ་བ་གཅིག',
            MM: '%d ཟླ་བ',
            y: 'ལོ་གཅིག',
            yy: '%d ལོ'
          },
          preparse: function preparse(string) {
            return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
              return numberMap[match];
            });
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            });
          },
          meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'མཚན་མོ' && hour >= 4 || meridiem === 'ཉིན་གུང' && hour < 5 || meridiem === 'དགོང་དག') {
              return hour + 12;
            } else {
              return hour;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'མཚན་མོ';
            } else if (hour < 10) {
              return 'ཞོགས་ཀས';
            } else if (hour < 17) {
              return 'ཉིན་གུང';
            } else if (hour < 20) {
              return 'དགོང་དག';
            } else {
              return 'མཚན་མོ';
            }
          },
          week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.

          }
        });
        return bo;
      });
      /***/

    },

    /***/
    "0tRk":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/pt-br.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function tRk(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var ptBr = moment.defineLocale('pt-br', {
          months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
          monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
          weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
          weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
          weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
          },
          calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function lastWeek() {
              return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' : // Saturday + Sunday
              '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'em %s',
            past: 'há %s',
            s: 'poucos segundos',
            ss: '%d segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos'
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº'
        });
        return ptBr;
      });
      /***/

    },

    /***/
    "1rYy":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/hy-am.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function rYy(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var hyAm = moment.defineLocale('hy-am', {
          months: {
            format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
            standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
          },
          monthsShort: 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
          weekdays: 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
          weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
          weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY թ.',
            LLL: 'D MMMM YYYY թ., HH:mm',
            LLLL: 'dddd, D MMMM YYYY թ., HH:mm'
          },
          calendar: {
            sameDay: '[այսօր] LT',
            nextDay: '[վաղը] LT',
            lastDay: '[երեկ] LT',
            nextWeek: function nextWeek() {
              return 'dddd [օրը ժամը] LT';
            },
            lastWeek: function lastWeek() {
              return '[անցած] dddd [օրը ժամը] LT';
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s հետո',
            past: '%s առաջ',
            s: 'մի քանի վայրկյան',
            ss: '%d վայրկյան',
            m: 'րոպե',
            mm: '%d րոպե',
            h: 'ժամ',
            hh: '%d ժամ',
            d: 'օր',
            dd: '%d օր',
            M: 'ամիս',
            MM: '%d ամիս',
            y: 'տարի',
            yy: '%d տարի'
          },
          meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
          isPM: function isPM(input) {
            return /^(ցերեկվա|երեկոյան)$/.test(input);
          },
          meridiem: function meridiem(hour) {
            if (hour < 4) {
              return 'գիշերվա';
            } else if (hour < 12) {
              return 'առավոտվա';
            } else if (hour < 17) {
              return 'ցերեկվա';
            } else {
              return 'երեկոյան';
            }
          },
          dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              case 'DDD':
              case 'w':
              case 'W':
              case 'DDDo':
                if (number === 1) {
                  return number + '-ին';
                }

                return number + '-րդ';

              default:
                return number;
            }
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return hyAm;
      });
      /***/

    },

    /***/
    "1xZ4":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ca.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function xZ4(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var ca = moment.defineLocale('ca', {
          months: {
            standalone: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
            format: 'de gener_de febrer_de març_d\'abril_de maig_de juny_de juliol_d\'agost_de setembre_d\'octubre_de novembre_de desembre'.split('_'),
            isFormat: /D[oD]?(\s)+MMMM/
          },
          monthsShort: 'gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.'.split('_'),
          monthsParseExact: true,
          weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
          weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
          weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM [de] YYYY',
            ll: 'D MMM YYYY',
            LLL: 'D MMMM [de] YYYY [a les] H:mm',
            lll: 'D MMM YYYY, H:mm',
            LLLL: 'dddd D MMMM [de] YYYY [a les] H:mm',
            llll: 'ddd D MMM YYYY, H:mm'
          },
          calendar: {
            sameDay: function sameDay() {
              return '[avui a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
            },
            nextDay: function nextDay() {
              return '[demà a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
            },
            nextWeek: function nextWeek() {
              return 'dddd [a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
            },
            lastDay: function lastDay() {
              return '[ahir a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
            },
            lastWeek: function lastWeek() {
              return '[el] dddd [passat a ' + (this.hours() !== 1 ? 'les' : 'la') + '] LT';
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'd\'aquí %s',
            past: 'fa %s',
            s: 'uns segons',
            ss: '%d segons',
            m: 'un minut',
            mm: '%d minuts',
            h: 'una hora',
            hh: '%d hores',
            d: 'un dia',
            dd: '%d dies',
            M: 'un mes',
            MM: '%d mesos',
            y: 'un any',
            yy: '%d anys'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
          ordinal: function ordinal(number, period) {
            var output = number === 1 ? 'r' : number === 2 ? 'n' : number === 3 ? 'r' : number === 4 ? 't' : 'è';

            if (period === 'w' || period === 'W') {
              output = 'a';
            }

            return number + output;
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return ca;
      });
      /***/

    },

    /***/
    "2fjn":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/fr-ca.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function fjn(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var frCa = moment.defineLocale('fr-ca', {
          months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
          monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
          monthsParseExact: true,
          weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
          weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
          weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Aujourd’hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              // Words with masculine grammatical gender: mois, trimestre, jour
              default:
              case 'M':
              case 'Q':
              case 'D':
              case 'DDD':
              case 'd':
                return number + (number === 1 ? 'er' : 'e');
              // Words with feminine grammatical gender: semaine

              case 'w':
              case 'W':
                return number + (number === 1 ? 're' : 'e');
            }
          }
        });
        return frCa;
      });
      /***/

    },

    /***/
    "2ykv":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/nl-be.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function ykv(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
            monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
        var monthsParse = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
        var monthsRegex = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        var nlBe = moment.defineLocale('nl-be', {
          months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
          monthsShort: function monthsShort(m, format) {
            if (!m) {
              return monthsShortWithDots;
            } else if (/-MMM-/.test(format)) {
              return monthsShortWithoutDots[m.month()];
            } else {
              return monthsShortWithDots[m.month()];
            }
          },
          monthsRegex: monthsRegex,
          monthsShortRegex: monthsRegex,
          monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
          monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
          monthsParse: monthsParse,
          longMonthsParse: monthsParse,
          shortMonthsParse: monthsParse,
          weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
          weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
          weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[vandaag om] LT',
            nextDay: '[morgen om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[gisteren om] LT',
            lastWeek: '[afgelopen] dddd [om] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'over %s',
            past: '%s geleden',
            s: 'een paar seconden',
            ss: '%d seconden',
            m: 'één minuut',
            mm: '%d minuten',
            h: 'één uur',
            hh: '%d uur',
            d: 'één dag',
            dd: '%d dagen',
            M: 'één maand',
            MM: '%d maanden',
            y: 'één jaar',
            yy: '%d jaar'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function ordinal(number) {
            return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return nlBe;
      });
      /***/

    },

    /***/
    "3E1r":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/hi.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function E1r(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '१',
          '2': '२',
          '3': '३',
          '4': '४',
          '5': '५',
          '6': '६',
          '7': '७',
          '8': '८',
          '9': '९',
          '0': '०'
        },
            numberMap = {
          '१': '1',
          '२': '2',
          '३': '3',
          '४': '4',
          '५': '5',
          '६': '6',
          '७': '7',
          '८': '8',
          '९': '9',
          '०': '0'
        };
        var hi = moment.defineLocale('hi', {
          months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
          monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
          monthsParseExact: true,
          weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
          weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
          weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
          longDateFormat: {
            LT: 'A h:mm बजे',
            LTS: 'A h:mm:ss बजे',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm बजे',
            LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
          },
          calendar: {
            sameDay: '[आज] LT',
            nextDay: '[कल] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[कल] LT',
            lastWeek: '[पिछले] dddd, LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s में',
            past: '%s पहले',
            s: 'कुछ ही क्षण',
            ss: '%d सेकंड',
            m: 'एक मिनट',
            mm: '%d मिनट',
            h: 'एक घंटा',
            hh: '%d घंटे',
            d: 'एक दिन',
            dd: '%d दिन',
            M: 'एक महीने',
            MM: '%d महीने',
            y: 'एक वर्ष',
            yy: '%d वर्ष'
          },
          preparse: function preparse(string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
              return numberMap[match];
            });
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            });
          },
          // Hindi notation for meridiems are quite fuzzy in practice. While there exists
          // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
          meridiemParse: /रात|सुबह|दोपहर|शाम/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'रात') {
              return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'सुबह') {
              return hour;
            } else if (meridiem === 'दोपहर') {
              return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'शाम') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'रात';
            } else if (hour < 10) {
              return 'सुबह';
            } else if (hour < 17) {
              return 'दोपहर';
            } else if (hour < 20) {
              return 'शाम';
            } else {
              return 'रात';
            }
          },
          week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.

          }
        });
        return hi;
      });
      /***/

    },

    /***/
    "4MV3":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/gu.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function MV3(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '૧',
          '2': '૨',
          '3': '૩',
          '4': '૪',
          '5': '૫',
          '6': '૬',
          '7': '૭',
          '8': '૮',
          '9': '૯',
          '0': '૦'
        },
            numberMap = {
          '૧': '1',
          '૨': '2',
          '૩': '3',
          '૪': '4',
          '૫': '5',
          '૬': '6',
          '૭': '7',
          '૮': '8',
          '૯': '9',
          '૦': '0'
        };
        var gu = moment.defineLocale('gu', {
          months: 'જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર'.split('_'),
          monthsShort: 'જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.'.split('_'),
          monthsParseExact: true,
          weekdays: 'રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર'.split('_'),
          weekdaysShort: 'રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ'.split('_'),
          weekdaysMin: 'ર_સો_મં_બુ_ગુ_શુ_શ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm વાગ્યે',
            LTS: 'A h:mm:ss વાગ્યે',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm વાગ્યે',
            LLLL: 'dddd, D MMMM YYYY, A h:mm વાગ્યે'
          },
          calendar: {
            sameDay: '[આજ] LT',
            nextDay: '[કાલે] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ગઇકાલે] LT',
            lastWeek: '[પાછલા] dddd, LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s મા',
            past: '%s પેહલા',
            s: 'અમુક પળો',
            ss: '%d સેકંડ',
            m: 'એક મિનિટ',
            mm: '%d મિનિટ',
            h: 'એક કલાક',
            hh: '%d કલાક',
            d: 'એક દિવસ',
            dd: '%d દિવસ',
            M: 'એક મહિનો',
            MM: '%d મહિનો',
            y: 'એક વર્ષ',
            yy: '%d વર્ષ'
          },
          preparse: function preparse(string) {
            return string.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (match) {
              return numberMap[match];
            });
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            });
          },
          // Gujarati notation for meridiems are quite fuzzy in practice. While there exists
          // a rigid notion of a 'Pahar' it is not used as rigidly in modern Gujarati.
          meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'રાત') {
              return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'સવાર') {
              return hour;
            } else if (meridiem === 'બપોર') {
              return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'સાંજ') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'રાત';
            } else if (hour < 10) {
              return 'સવાર';
            } else if (hour < 17) {
              return 'બપોર';
            } else if (hour < 20) {
              return 'સાંજ';
            } else {
              return 'રાત';
            }
          },
          week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.

          }
        });
        return gu;
      });
      /***/

    },

    /***/
    "4dOw":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/en-ie.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function dOw(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var enIe = moment.defineLocale('en-ie', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function ordinal(number) {
            var b = number % 10,
                output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return enIe;
      });
      /***/

    },

    /***/
    "6+QB":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ms.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function QB(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var ms = moment.defineLocale('ms', {
          months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
          monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
          weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
          weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
          weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'pagi') {
              return hour;
            } else if (meridiem === 'tengahari') {
              return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hours, minutes, isLower) {
            if (hours < 11) {
              return 'pagi';
            } else if (hours < 15) {
              return 'tengahari';
            } else if (hours < 19) {
              return 'petang';
            } else {
              return 'malam';
            }
          },
          calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Esok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kelmarin pukul] LT',
            lastWeek: 'dddd [lepas pukul] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'dalam %s',
            past: '%s yang lepas',
            s: 'beberapa saat',
            ss: '%d saat',
            m: 'seminit',
            mm: '%d minit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun'
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return ms;
      });
      /***/

    },

    /***/
    "6B0Y":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/km.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function B0Y(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '១',
          '2': '២',
          '3': '៣',
          '4': '៤',
          '5': '៥',
          '6': '៦',
          '7': '៧',
          '8': '៨',
          '9': '៩',
          '0': '០'
        },
            numberMap = {
          '១': '1',
          '២': '2',
          '៣': '3',
          '៤': '4',
          '៥': '5',
          '៦': '6',
          '៧': '7',
          '៨': '8',
          '៩': '9',
          '០': '0'
        };
        var km = moment.defineLocale('km', {
          months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
          monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
          weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
          weekdaysShort: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
          weekdaysMin: 'អា_ច_អ_ព_ព្រ_សុ_ស'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          meridiemParse: /ព្រឹក|ល្ងាច/,
          isPM: function isPM(input) {
            return input === 'ល្ងាច';
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 12) {
              return 'ព្រឹក';
            } else {
              return 'ល្ងាច';
            }
          },
          calendar: {
            sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
            nextDay: '[ស្អែក ម៉ោង] LT',
            nextWeek: 'dddd [ម៉ោង] LT',
            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%sទៀត',
            past: '%sមុន',
            s: 'ប៉ុន្មានវិនាទី',
            ss: '%d វិនាទី',
            m: 'មួយនាទី',
            mm: '%d នាទី',
            h: 'មួយម៉ោង',
            hh: '%d ម៉ោង',
            d: 'មួយថ្ងៃ',
            dd: '%d ថ្ងៃ',
            M: 'មួយខែ',
            MM: '%d ខែ',
            y: 'មួយឆ្នាំ',
            yy: '%d ឆ្នាំ'
          },
          dayOfMonthOrdinalParse: /ទី\d{1,2}/,
          ordinal: 'ទី%d',
          preparse: function preparse(string) {
            return string.replace(/[១២៣៤៥៦៧៨៩០]/g, function (match) {
              return numberMap[match];
            });
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            });
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return km;
      });
      /***/

    },

    /***/
    "7BjC":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/et.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function BjC(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function processRelativeTime(number, withoutSuffix, key, isFuture) {
          var format = {
            's': ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
            'ss': [number + 'sekundi', number + 'sekundit'],
            'm': ['ühe minuti', 'üks minut'],
            'mm': [number + ' minuti', number + ' minutit'],
            'h': ['ühe tunni', 'tund aega', 'üks tund'],
            'hh': [number + ' tunni', number + ' tundi'],
            'd': ['ühe päeva', 'üks päev'],
            'M': ['kuu aja', 'kuu aega', 'üks kuu'],
            'MM': [number + ' kuu', number + ' kuud'],
            'y': ['ühe aasta', 'aasta', 'üks aasta'],
            'yy': [number + ' aasta', number + ' aastat']
          };

          if (withoutSuffix) {
            return format[key][2] ? format[key][2] : format[key][1];
          }

          return isFuture ? format[key][0] : format[key][1];
        }

        var et = moment.defineLocale('et', {
          months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
          monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
          weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
          weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
          weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
          },
          calendar: {
            sameDay: '[Täna,] LT',
            nextDay: '[Homme,] LT',
            nextWeek: '[Järgmine] dddd LT',
            lastDay: '[Eile,] LT',
            lastWeek: '[Eelmine] dddd LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s pärast',
            past: '%s tagasi',
            s: processRelativeTime,
            ss: processRelativeTime,
            m: processRelativeTime,
            mm: processRelativeTime,
            h: processRelativeTime,
            hh: processRelativeTime,
            d: processRelativeTime,
            dd: '%d päeva',
            M: processRelativeTime,
            MM: processRelativeTime,
            y: processRelativeTime,
            yy: processRelativeTime
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return et;
      });
      /***/

    },

    /***/
    "7aV9":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/si.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function aV9(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';
        /*jshint -W100*/

        var si = moment.defineLocale('si', {
          months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
          monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
          weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
          weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
          weekdaysMin: 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'a h:mm',
            LTS: 'a h:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY MMMM D',
            LLL: 'YYYY MMMM D, a h:mm',
            LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
          },
          calendar: {
            sameDay: '[අද] LT[ට]',
            nextDay: '[හෙට] LT[ට]',
            nextWeek: 'dddd LT[ට]',
            lastDay: '[ඊයේ] LT[ට]',
            lastWeek: '[පසුගිය] dddd LT[ට]',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%sකින්',
            past: '%sකට පෙර',
            s: 'තත්පර කිහිපය',
            ss: 'තත්පර %d',
            m: 'මිනිත්තුව',
            mm: 'මිනිත්තු %d',
            h: 'පැය',
            hh: 'පැය %d',
            d: 'දිනය',
            dd: 'දින %d',
            M: 'මාසය',
            MM: 'මාස %d',
            y: 'වසර',
            yy: 'වසර %d'
          },
          dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
          ordinal: function ordinal(number) {
            return number + ' වැනි';
          },
          meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
          isPM: function isPM(input) {
            return input === 'ප.ව.' || input === 'පස් වරු';
          },
          meridiem: function meridiem(hours, minutes, isLower) {
            if (hours > 11) {
              return isLower ? 'ප.ව.' : 'පස් වරු';
            } else {
              return isLower ? 'පෙ.ව.' : 'පෙර වරු';
            }
          }
        });
        return si;
      });
      /***/

    },

    /***/
    "8/+R":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/pa-in.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function R(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '੧',
          '2': '੨',
          '3': '੩',
          '4': '੪',
          '5': '੫',
          '6': '੬',
          '7': '੭',
          '8': '੮',
          '9': '੯',
          '0': '੦'
        },
            numberMap = {
          '੧': '1',
          '੨': '2',
          '੩': '3',
          '੪': '4',
          '੫': '5',
          '੬': '6',
          '੭': '7',
          '੮': '8',
          '੯': '9',
          '੦': '0'
        };
        var paIn = moment.defineLocale('pa-in', {
          // There are months name as per Nanakshahi Calendar but they are not used as rigidly in modern Punjabi.
          months: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
          monthsShort: 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
          weekdays: 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
          weekdaysShort: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
          weekdaysMin: 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm ਵਜੇ',
            LTS: 'A h:mm:ss ਵਜੇ',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm ਵਜੇ',
            LLLL: 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
          },
          calendar: {
            sameDay: '[ਅਜ] LT',
            nextDay: '[ਕਲ] LT',
            nextWeek: '[ਅਗਲਾ] dddd, LT',
            lastDay: '[ਕਲ] LT',
            lastWeek: '[ਪਿਛਲੇ] dddd, LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s ਵਿੱਚ',
            past: '%s ਪਿਛਲੇ',
            s: 'ਕੁਝ ਸਕਿੰਟ',
            ss: '%d ਸਕਿੰਟ',
            m: 'ਇਕ ਮਿੰਟ',
            mm: '%d ਮਿੰਟ',
            h: 'ਇੱਕ ਘੰਟਾ',
            hh: '%d ਘੰਟੇ',
            d: 'ਇੱਕ ਦਿਨ',
            dd: '%d ਦਿਨ',
            M: 'ਇੱਕ ਮਹੀਨਾ',
            MM: '%d ਮਹੀਨੇ',
            y: 'ਇੱਕ ਸਾਲ',
            yy: '%d ਸਾਲ'
          },
          preparse: function preparse(string) {
            return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
              return numberMap[match];
            });
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            });
          },
          // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
          // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
          meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'ਰਾਤ') {
              return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'ਸਵੇਰ') {
              return hour;
            } else if (meridiem === 'ਦੁਪਹਿਰ') {
              return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'ਸ਼ਾਮ') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'ਰਾਤ';
            } else if (hour < 10) {
              return 'ਸਵੇਰ';
            } else if (hour < 17) {
              return 'ਦੁਪਹਿਰ';
            } else if (hour < 20) {
              return 'ਸ਼ਾਮ';
            } else {
              return 'ਰਾਤ';
            }
          },
          week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.

          }
        });
        return paIn;
      });
      /***/

    },

    /***/
    "8mBD":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/pt.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function mBD(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var pt = moment.defineLocale('pt', {
          months: 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro'.split('_'),
          monthsShort: 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez'.split('_'),
          weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
          weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
          weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY HH:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Hoje às] LT',
            nextDay: '[Amanhã às] LT',
            nextWeek: 'dddd [às] LT',
            lastDay: '[Ontem às] LT',
            lastWeek: function lastWeek() {
              return this.day() === 0 || this.day() === 6 ? '[Último] dddd [às] LT' : // Saturday + Sunday
              '[Última] dddd [às] LT'; // Monday - Friday
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'em %s',
            past: 'há %s',
            s: 'segundos',
            ss: '%d segundos',
            m: 'um minuto',
            mm: '%d minutos',
            h: 'uma hora',
            hh: '%d horas',
            d: 'um dia',
            dd: '%d dias',
            M: 'um mês',
            MM: '%d meses',
            y: 'um ano',
            yy: '%d anos'
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return pt;
      });
      /***/

    },

    /***/
    "9rRi":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/gd.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function rRi(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var months = ['Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'];
        var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];
        var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];
        var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];
        var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];
        var gd = moment.defineLocale('gd', {
          months: months,
          monthsShort: monthsShort,
          monthsParseExact: true,
          weekdays: weekdays,
          weekdaysShort: weekdaysShort,
          weekdaysMin: weekdaysMin,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[An-diugh aig] LT',
            nextDay: '[A-màireach aig] LT',
            nextWeek: 'dddd [aig] LT',
            lastDay: '[An-dè aig] LT',
            lastWeek: 'dddd [seo chaidh] [aig] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'ann an %s',
            past: 'bho chionn %s',
            s: 'beagan diogan',
            ss: '%d diogan',
            m: 'mionaid',
            mm: '%d mionaidean',
            h: 'uair',
            hh: '%d uairean',
            d: 'latha',
            dd: '%d latha',
            M: 'mìos',
            MM: '%d mìosan',
            y: 'bliadhna',
            yy: '%d bliadhna'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
          ordinal: function ordinal(number) {
            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
            return number + output;
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return gd;
      });
      /***/

    },

    /***/
    "A+xa":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/cv.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function AXa(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var cv = moment.defineLocale('cv', {
          months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
          monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
          weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
          weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
          weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
            LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
            LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
          },
          calendar: {
            sameDay: '[Паян] LT [сехетре]',
            nextDay: '[Ыран] LT [сехетре]',
            lastDay: '[Ӗнер] LT [сехетре]',
            nextWeek: '[Ҫитес] dddd LT [сехетре]',
            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
            sameElse: 'L'
          },
          relativeTime: {
            future: function future(output) {
              var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
              return output + affix;
            },
            past: '%s каялла',
            s: 'пӗр-ик ҫеккунт',
            ss: '%d ҫеккунт',
            m: 'пӗр минут',
            mm: '%d минут',
            h: 'пӗр сехет',
            hh: '%d сехет',
            d: 'пӗр кун',
            dd: '%d кун',
            M: 'пӗр уйӑх',
            MM: '%d уйӑх',
            y: 'пӗр ҫул',
            yy: '%d ҫул'
          },
          dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
          ordinal: '%d-мӗш',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return cv;
      });
      /***/

    },

    /***/
    "AQ68":
    /*!***********************************************!*\
      !*** ./node_modules/moment/locale/uz-latn.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function AQ68(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var uzLatn = moment.defineLocale('uz-latn', {
          months: 'Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr'.split('_'),
          monthsShort: 'Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek'.split('_'),
          weekdays: 'Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba'.split('_'),
          weekdaysShort: 'Yak_Dush_Sesh_Chor_Pay_Jum_Shan'.split('_'),
          weekdaysMin: 'Ya_Du_Se_Cho_Pa_Ju_Sha'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'D MMMM YYYY, dddd HH:mm'
          },
          calendar: {
            sameDay: '[Bugun soat] LT [da]',
            nextDay: '[Ertaga] LT [da]',
            nextWeek: 'dddd [kuni soat] LT [da]',
            lastDay: '[Kecha soat] LT [da]',
            lastWeek: '[O\'tgan] dddd [kuni soat] LT [da]',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'Yaqin %s ichida',
            past: 'Bir necha %s oldin',
            s: 'soniya',
            ss: '%d soniya',
            m: 'bir daqiqa',
            mm: '%d daqiqa',
            h: 'bir soat',
            hh: '%d soat',
            d: 'bir kun',
            dd: '%d kun',
            M: 'bir oy',
            MM: '%d oy',
            y: 'bir yil',
            yy: '%d yil'
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return uzLatn;
      });
      /***/

    },

    /***/
    "AvvY":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ml.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function AvvY(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var ml = moment.defineLocale('ml', {
          months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
          monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
          monthsParseExact: true,
          weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
          weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
          weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm -നു',
            LTS: 'A h:mm:ss -നു',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm -നു',
            LLLL: 'dddd, D MMMM YYYY, A h:mm -നു'
          },
          calendar: {
            sameDay: '[ഇന്ന്] LT',
            nextDay: '[നാളെ] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ഇന്നലെ] LT',
            lastWeek: '[കഴിഞ്ഞ] dddd, LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s കഴിഞ്ഞ്',
            past: '%s മുൻപ്',
            s: 'അൽപ നിമിഷങ്ങൾ',
            ss: '%d സെക്കൻഡ്',
            m: 'ഒരു മിനിറ്റ്',
            mm: '%d മിനിറ്റ്',
            h: 'ഒരു മണിക്കൂർ',
            hh: '%d മണിക്കൂർ',
            d: 'ഒരു ദിവസം',
            dd: '%d ദിവസം',
            M: 'ഒരു മാസം',
            MM: '%d മാസം',
            y: 'ഒരു വർഷം',
            yy: '%d വർഷം'
          },
          meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'രാത്രി' && hour >= 4 || meridiem === 'ഉച്ച കഴിഞ്ഞ്' || meridiem === 'വൈകുന്നേരം') {
              return hour + 12;
            } else {
              return hour;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'രാത്രി';
            } else if (hour < 12) {
              return 'രാവിലെ';
            } else if (hour < 17) {
              return 'ഉച്ച കഴിഞ്ഞ്';
            } else if (hour < 20) {
              return 'വൈകുന്നേരം';
            } else {
              return 'രാത്രി';
            }
          }
        });
        return ml;
      });
      /***/

    },

    /***/
    "B55N":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ja.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function B55N(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var ja = moment.defineLocale('ja', {
          months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
          weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
          weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
          weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日 dddd HH:mm',
            l: 'YYYY/MM/DD',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日(ddd) HH:mm'
          },
          meridiemParse: /午前|午後/i,
          isPM: function isPM(input) {
            return input === '午後';
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 12) {
              return '午前';
            } else {
              return '午後';
            }
          },
          calendar: {
            sameDay: '[今日] LT',
            nextDay: '[明日] LT',
            nextWeek: function nextWeek(now) {
              if (now.week() < this.week()) {
                return '[来週]dddd LT';
              } else {
                return 'dddd LT';
              }
            },
            lastDay: '[昨日] LT',
            lastWeek: function lastWeek(now) {
              if (this.week() < now.week()) {
                return '[先週]dddd LT';
              } else {
                return 'dddd LT';
              }
            },
            sameElse: 'L'
          },
          dayOfMonthOrdinalParse: /\d{1,2}日/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              case 'd':
              case 'D':
              case 'DDD':
                return number + '日';

              default:
                return number;
            }
          },
          relativeTime: {
            future: '%s後',
            past: '%s前',
            s: '数秒',
            ss: '%d秒',
            m: '1分',
            mm: '%d分',
            h: '1時間',
            hh: '%d時間',
            d: '1日',
            dd: '%d日',
            M: '1ヶ月',
            MM: '%dヶ月',
            y: '1年',
            yy: '%d年'
          }
        });
        return ja;
      });
      /***/

    },

    /***/
    "BVg3":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/is.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function BVg3(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function plural(n) {
          if (n % 100 === 11) {
            return true;
          } else if (n % 10 === 1) {
            return false;
          }

          return true;
        }

        function translate(number, withoutSuffix, key, isFuture) {
          var result = number + ' ';

          switch (key) {
            case 's':
              return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';

            case 'ss':
              if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'sekúndur' : 'sekúndum');
              }

              return result + 'sekúnda';

            case 'm':
              return withoutSuffix ? 'mínúta' : 'mínútu';

            case 'mm':
              if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
              } else if (withoutSuffix) {
                return result + 'mínúta';
              }

              return result + 'mínútu';

            case 'hh':
              if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
              }

              return result + 'klukkustund';

            case 'd':
              if (withoutSuffix) {
                return 'dagur';
              }

              return isFuture ? 'dag' : 'degi';

            case 'dd':
              if (plural(number)) {
                if (withoutSuffix) {
                  return result + 'dagar';
                }

                return result + (isFuture ? 'daga' : 'dögum');
              } else if (withoutSuffix) {
                return result + 'dagur';
              }

              return result + (isFuture ? 'dag' : 'degi');

            case 'M':
              if (withoutSuffix) {
                return 'mánuður';
              }

              return isFuture ? 'mánuð' : 'mánuði';

            case 'MM':
              if (plural(number)) {
                if (withoutSuffix) {
                  return result + 'mánuðir';
                }

                return result + (isFuture ? 'mánuði' : 'mánuðum');
              } else if (withoutSuffix) {
                return result + 'mánuður';
              }

              return result + (isFuture ? 'mánuð' : 'mánuði');

            case 'y':
              return withoutSuffix || isFuture ? 'ár' : 'ári';

            case 'yy':
              if (plural(number)) {
                return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
              }

              return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
          }
        }

        var is = moment.defineLocale('is', {
          months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
          monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
          weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
          weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
          weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] H:mm',
            LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
          },
          calendar: {
            sameDay: '[í dag kl.] LT',
            nextDay: '[á morgun kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[í gær kl.] LT',
            lastWeek: '[síðasta] dddd [kl.] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'eftir %s',
            past: 'fyrir %s síðan',
            s: translate,
            ss: translate,
            m: translate,
            mm: translate,
            h: 'klukkustund',
            hh: translate,
            d: translate,
            dd: translate,
            M: translate,
            MM: translate,
            y: translate,
            yy: translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return is;
      });
      /***/

    },

    /***/
    "ByF4":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/fo.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function ByF4(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var fo = moment.defineLocale('fo', {
          months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
          monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
          weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
          weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
          weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D. MMMM, YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Í dag kl.] LT',
            nextDay: '[Í morgin kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[Í gjár kl.] LT',
            lastWeek: '[síðstu] dddd [kl] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'um %s',
            past: '%s síðani',
            s: 'fá sekund',
            ss: '%d sekundir',
            m: 'ein minutt',
            mm: '%d minuttir',
            h: 'ein tími',
            hh: '%d tímar',
            d: 'ein dagur',
            dd: '%d dagar',
            M: 'ein mánaði',
            MM: '%d mánaðir',
            y: 'eitt ár',
            yy: '%d ár'
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return fo;
      });
      /***/

    },

    /***/
    "CjzT":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/es-do.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function CjzT(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
            _monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

        var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
        var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        var esDo = moment.defineLocale('es-do', {
          months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
          monthsShort: function monthsShort(m, format) {
            if (!m) {
              return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
              return _monthsShort[m.month()];
            } else {
              return monthsShortDot[m.month()];
            }
          },
          monthsRegex: monthsRegex,
          monthsShortRegex: monthsRegex,
          monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: monthsParse,
          longMonthsParse: monthsParse,
          shortMonthsParse: monthsParse,
          weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
          weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
          weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY h:mm A',
            LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
          },
          calendar: {
            sameDay: function sameDay() {
              return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            nextDay: function nextDay() {
              return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            nextWeek: function nextWeek() {
              return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            lastDay: function lastDay() {
              return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            lastWeek: function lastWeek() {
              return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return esDo;
      });
      /***/

    },

    /***/
    "CoRJ":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/ar-ma.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function CoRJ(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var arMa = moment.defineLocale('ar-ma', {
          months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
          monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
          weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
          weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
          },
          week: {
            dow: 6,
            // Saturday is the first day of the week.
            doy: 12 // The week that contains Jan 12th is the first week of the year.

          }
        });
        return arMa;
      });
      /***/

    },

    /***/
    "D/JM":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/eu.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function DJM(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var eu = moment.defineLocale('eu', {
          months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
          monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
          monthsParseExact: true,
          weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
          weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
          weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY[ko] MMMM[ren] D[a]',
            LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
            LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
            l: 'YYYY-M-D',
            ll: 'YYYY[ko] MMM D[a]',
            lll: 'YYYY[ko] MMM D[a] HH:mm',
            llll: 'ddd, YYYY[ko] MMM D[a] HH:mm'
          },
          calendar: {
            sameDay: '[gaur] LT[etan]',
            nextDay: '[bihar] LT[etan]',
            nextWeek: 'dddd LT[etan]',
            lastDay: '[atzo] LT[etan]',
            lastWeek: '[aurreko] dddd LT[etan]',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s barru',
            past: 'duela %s',
            s: 'segundo batzuk',
            ss: '%d segundo',
            m: 'minutu bat',
            mm: '%d minutu',
            h: 'ordu bat',
            hh: '%d ordu',
            d: 'egun bat',
            dd: '%d egun',
            M: 'hilabete bat',
            MM: '%d hilabete',
            y: 'urte bat',
            yy: '%d urte'
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return eu;
      });
      /***/

    },

    /***/
    "DKr+":
    /*!************************************************!*\
      !*** ./node_modules/moment/locale/gom-latn.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function DKr(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function processRelativeTime(number, withoutSuffix, key, isFuture) {
          var format = {
            's': ['thodde secondanim', 'thodde second'],
            'ss': [number + ' secondanim', number + ' second'],
            'm': ['eka mintan', 'ek minute'],
            'mm': [number + ' mintanim', number + ' mintam'],
            'h': ['eka horan', 'ek hor'],
            'hh': [number + ' horanim', number + ' horam'],
            'd': ['eka disan', 'ek dis'],
            'dd': [number + ' disanim', number + ' dis'],
            'M': ['eka mhoinean', 'ek mhoino'],
            'MM': [number + ' mhoineanim', number + ' mhoine'],
            'y': ['eka vorsan', 'ek voros'],
            'yy': [number + ' vorsanim', number + ' vorsam']
          };
          return withoutSuffix ? format[key][0] : format[key][1];
        }

        var gomLatn = moment.defineLocale('gom-latn', {
          months: 'Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr'.split('_'),
          monthsShort: 'Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.'.split('_'),
          monthsParseExact: true,
          weekdays: 'Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son\'var'.split('_'),
          weekdaysShort: 'Ait._Som._Mon._Bud._Bre._Suk._Son.'.split('_'),
          weekdaysMin: 'Ai_Sm_Mo_Bu_Br_Su_Sn'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'A h:mm [vazta]',
            LTS: 'A h:mm:ss [vazta]',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY A h:mm [vazta]',
            LLLL: 'dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]',
            llll: 'ddd, D MMM YYYY, A h:mm [vazta]'
          },
          calendar: {
            sameDay: '[Aiz] LT',
            nextDay: '[Faleam] LT',
            nextWeek: '[Ieta to] dddd[,] LT',
            lastDay: '[Kal] LT',
            lastWeek: '[Fatlo] dddd[,] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s',
            past: '%s adim',
            s: processRelativeTime,
            ss: processRelativeTime,
            m: processRelativeTime,
            mm: processRelativeTime,
            h: processRelativeTime,
            hh: processRelativeTime,
            d: processRelativeTime,
            dd: processRelativeTime,
            M: processRelativeTime,
            MM: processRelativeTime,
            y: processRelativeTime,
            yy: processRelativeTime
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er)/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              // the ordinal 'er' only applies to day of the month
              case 'D':
                return number + 'er';

              default:
              case 'M':
              case 'Q':
              case 'DDD':
              case 'd':
              case 'w':
              case 'W':
                return number;
            }
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          },
          meridiemParse: /rati|sokalli|donparam|sanje/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'rati') {
              return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'sokalli') {
              return hour;
            } else if (meridiem === 'donparam') {
              return hour > 12 ? hour : hour + 12;
            } else if (meridiem === 'sanje') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'rati';
            } else if (hour < 12) {
              return 'sokalli';
            } else if (hour < 16) {
              return 'donparam';
            } else if (hour < 20) {
              return 'sanje';
            } else {
              return 'rati';
            }
          }
        });
        return gomLatn;
      });
      /***/

    },

    /***/
    "Dkky":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/fr-ch.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function Dkky(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var frCh = moment.defineLocale('fr-ch', {
          months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
          monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
          monthsParseExact: true,
          weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
          weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
          weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Aujourd’hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              // Words with masculine grammatical gender: mois, trimestre, jour
              default:
              case 'M':
              case 'Q':
              case 'D':
              case 'DDD':
              case 'd':
                return number + (number === 1 ? 'er' : 'e');
              // Words with feminine grammatical gender: semaine

              case 'w':
              case 'W':
                return number + (number === 1 ? 're' : 'e');
            }
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return frCh;
      });
      /***/

    },

    /***/
    "Dmvi":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/en-au.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function Dmvi(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var enAu = moment.defineLocale('en-au', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A'
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function ordinal(number) {
            var b = number % 10,
                output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return enAu;
      });
      /***/

    },

    /***/
    "DoHr":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/tr.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function DoHr(module, exports, __webpack_require__) {
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var suffixes = {
          1: '\'inci',
          5: '\'inci',
          8: '\'inci',
          70: '\'inci',
          80: '\'inci',
          2: '\'nci',
          7: '\'nci',
          20: '\'nci',
          50: '\'nci',
          3: '\'üncü',
          4: '\'üncü',
          100: '\'üncü',
          6: '\'ncı',
          9: '\'uncu',
          10: '\'uncu',
          30: '\'uncu',
          60: '\'ıncı',
          90: '\'ıncı'
        };
        var tr = moment.defineLocale('tr', {
          months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
          monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
          weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
          weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
          weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[bugün saat] LT',
            nextDay: '[yarın saat] LT',
            nextWeek: '[gelecek] dddd [saat] LT',
            lastDay: '[dün] LT',
            lastWeek: '[geçen] dddd [saat] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s sonra',
            past: '%s önce',
            s: 'birkaç saniye',
            ss: '%d saniye',
            m: 'bir dakika',
            mm: '%d dakika',
            h: 'bir saat',
            hh: '%d saat',
            d: 'bir gün',
            dd: '%d gün',
            M: 'bir ay',
            MM: '%d ay',
            y: 'bir yıl',
            yy: '%d yıl'
          },
          ordinal: function ordinal(number, period) {
            switch (period) {
              case 'd':
              case 'D':
              case 'Do':
              case 'DD':
                return number;

              default:
                if (number === 0) {
                  // special case for zero
                  return number + '\'ıncı';
                }

                var a = number % 10,
                    b = number % 100 - a,
                    c = number >= 100 ? 100 : null;
                return number + (suffixes[a] || suffixes[b] || suffixes[c]);
            }
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return tr;
      });
      /***/

    },

    /***/
    "DxQv":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/da.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function DxQv(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var da = moment.defineLocale('da', {
          months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
          monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
          weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
          weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
          weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
          },
          calendar: {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'på dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[i] dddd[s kl.] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'om %s',
            past: '%s siden',
            s: 'få sekunder',
            ss: '%d sekunder',
            m: 'et minut',
            mm: '%d minutter',
            h: 'en time',
            hh: '%d timer',
            d: 'en dag',
            dd: '%d dage',
            M: 'en måned',
            MM: '%d måneder',
            y: 'et år',
            yy: '%d år'
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return da;
      });
      /***/

    },

    /***/
    "Dzi0":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/tl-ph.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function Dzi0(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var tlPh = moment.defineLocale('tl-ph', {
          months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
          monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
          weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
          weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
          weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'MM/D/YYYY',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY HH:mm',
            LLLL: 'dddd, MMMM DD, YYYY HH:mm'
          },
          calendar: {
            sameDay: 'LT [ngayong araw]',
            nextDay: '[Bukas ng] LT',
            nextWeek: 'LT [sa susunod na] dddd',
            lastDay: 'LT [kahapon]',
            lastWeek: 'LT [noong nakaraang] dddd',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'sa loob ng %s',
            past: '%s ang nakalipas',
            s: 'ilang segundo',
            ss: '%d segundo',
            m: 'isang minuto',
            mm: '%d minuto',
            h: 'isang oras',
            hh: '%d oras',
            d: 'isang araw',
            dd: '%d araw',
            M: 'isang buwan',
            MM: '%d buwan',
            y: 'isang taon',
            yy: '%d taon'
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function ordinal(number) {
            return number;
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return tlPh;
      });
      /***/

    },

    /***/
    "E+lV":
    /*!***********************************************!*\
      !*** ./node_modules/moment/locale/sr-cyrl.js ***!
      \***********************************************/

    /*! no static exports found */

    /***/
    function ELV(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var translator = {
          words: {
            //Different grammatical cases
            ss: ['секунда', 'секунде', 'секунди'],
            m: ['један минут', 'једне минуте'],
            mm: ['минут', 'минуте', 'минута'],
            h: ['један сат', 'једног сата'],
            hh: ['сат', 'сата', 'сати'],
            dd: ['дан', 'дана', 'дана'],
            MM: ['месец', 'месеца', 'месеци'],
            yy: ['година', 'године', 'година']
          },
          correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
            return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
          },
          translate: function translate(number, withoutSuffix, key) {
            var wordKey = translator.words[key];

            if (key.length === 1) {
              return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
              return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
          }
        };
        var srCyrl = moment.defineLocale('sr-cyrl', {
          months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
          monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
          monthsParseExact: true,
          weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
          weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
          weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
          },
          calendar: {
            sameDay: '[данас у] LT',
            nextDay: '[сутра у] LT',
            nextWeek: function nextWeek() {
              switch (this.day()) {
                case 0:
                  return '[у] [недељу] [у] LT';

                case 3:
                  return '[у] [среду] [у] LT';

                case 6:
                  return '[у] [суботу] [у] LT';

                case 1:
                case 2:
                case 4:
                case 5:
                  return '[у] dddd [у] LT';
              }
            },
            lastDay: '[јуче у] LT',
            lastWeek: function lastWeek() {
              var lastWeekDays = ['[прошле] [недеље] [у] LT', '[прошлог] [понедељка] [у] LT', '[прошлог] [уторка] [у] LT', '[прошле] [среде] [у] LT', '[прошлог] [четвртка] [у] LT', '[прошлог] [петка] [у] LT', '[прошле] [суботе] [у] LT'];
              return lastWeekDays[this.day()];
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'за %s',
            past: 'пре %s',
            s: 'неколико секунди',
            ss: translator.translate,
            m: translator.translate,
            mm: translator.translate,
            h: translator.translate,
            hh: translator.translate,
            d: 'дан',
            dd: translator.translate,
            M: 'месец',
            MM: translator.translate,
            y: 'годину',
            yy: translator.translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return srCyrl;
      });
      /***/

    },

    /***/
    "EOgW":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/th.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function EOgW(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var th = moment.defineLocale('th', {
          months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
          monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
          monthsParseExact: true,
          weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
          weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
          // yes, three characters difference
          weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY เวลา H:mm',
            LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
          },
          meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
          isPM: function isPM(input) {
            return input === 'หลังเที่ยง';
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 12) {
              return 'ก่อนเที่ยง';
            } else {
              return 'หลังเที่ยง';
            }
          },
          calendar: {
            sameDay: '[วันนี้ เวลา] LT',
            nextDay: '[พรุ่งนี้ เวลา] LT',
            nextWeek: 'dddd[หน้า เวลา] LT',
            lastDay: '[เมื่อวานนี้ เวลา] LT',
            lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'อีก %s',
            past: '%sที่แล้ว',
            s: 'ไม่กี่วินาที',
            ss: '%d วินาที',
            m: '1 นาที',
            mm: '%d นาที',
            h: '1 ชั่วโมง',
            hh: '%d ชั่วโมง',
            d: '1 วัน',
            dd: '%d วัน',
            M: '1 เดือน',
            MM: '%d เดือน',
            y: '1 ปี',
            yy: '%d ปี'
          }
        });
        return th;
      });
      /***/

    },

    /***/
    "G0Uy":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/mt.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function G0Uy(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var mt = moment.defineLocale('mt', {
          months: 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'.split('_'),
          monthsShort: 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'.split('_'),
          weekdays: 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'.split('_'),
          weekdaysShort: 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'.split('_'),
          weekdaysMin: 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Illum fil-]LT',
            nextDay: '[Għada fil-]LT',
            nextWeek: 'dddd [fil-]LT',
            lastDay: '[Il-bieraħ fil-]LT',
            lastWeek: 'dddd [li għadda] [fil-]LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'f’ %s',
            past: '%s ilu',
            s: 'ftit sekondi',
            ss: '%d sekondi',
            m: 'minuta',
            mm: '%d minuti',
            h: 'siegħa',
            hh: '%d siegħat',
            d: 'ġurnata',
            dd: '%d ġranet',
            M: 'xahar',
            MM: '%d xhur',
            y: 'sena',
            yy: '%d sni'
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return mt;
      });
      /***/

    },

    /***/
    "H8ED":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/be.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function H8ED(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function plural(word, num) {
          var forms = word.split('_');
          return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
        }

        function relativeTimeWithPlural(number, withoutSuffix, key) {
          var format = {
            'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
            'dd': 'дзень_дні_дзён',
            'MM': 'месяц_месяцы_месяцаў',
            'yy': 'год_гады_гадоў'
          };

          if (key === 'm') {
            return withoutSuffix ? 'хвіліна' : 'хвіліну';
          } else if (key === 'h') {
            return withoutSuffix ? 'гадзіна' : 'гадзіну';
          } else {
            return number + ' ' + plural(format[key], +number);
          }
        }

        var be = moment.defineLocale('be', {
          months: {
            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
          },
          monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
          weekdays: {
            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
            isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/
          },
          weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
          weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY г.',
            LLL: 'D MMMM YYYY г., HH:mm',
            LLLL: 'dddd, D MMMM YYYY г., HH:mm'
          },
          calendar: {
            sameDay: '[Сёння ў] LT',
            nextDay: '[Заўтра ў] LT',
            lastDay: '[Учора ў] LT',
            nextWeek: function nextWeek() {
              return '[У] dddd [ў] LT';
            },
            lastWeek: function lastWeek() {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return '[У мінулую] dddd [ў] LT';

                case 1:
                case 2:
                case 4:
                  return '[У мінулы] dddd [ў] LT';
              }
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'праз %s',
            past: '%s таму',
            s: 'некалькі секунд',
            m: relativeTimeWithPlural,
            mm: relativeTimeWithPlural,
            h: relativeTimeWithPlural,
            hh: relativeTimeWithPlural,
            d: 'дзень',
            dd: relativeTimeWithPlural,
            M: 'месяц',
            MM: relativeTimeWithPlural,
            y: 'год',
            yy: relativeTimeWithPlural
          },
          meridiemParse: /ночы|раніцы|дня|вечара/,
          isPM: function isPM(input) {
            return /^(дня|вечара)$/.test(input);
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'ночы';
            } else if (hour < 12) {
              return 'раніцы';
            } else if (hour < 17) {
              return 'дня';
            } else {
              return 'вечара';
            }
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              case 'M':
              case 'd':
              case 'DDD':
              case 'w':
              case 'W':
                return (number % 10 === 2 || number % 10 === 3) && number % 100 !== 12 && number % 100 !== 13 ? number + '-і' : number + '-ы';

              case 'D':
                return number + '-га';

              default:
                return number;
            }
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return be;
      });
      /***/

    },

    /***/
    "HP3h":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/ar-ly.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function HP3h(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '1',
          '2': '2',
          '3': '3',
          '4': '4',
          '5': '5',
          '6': '6',
          '7': '7',
          '8': '8',
          '9': '9',
          '0': '0'
        },
            pluralForm = function pluralForm(n) {
          return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
        },
            plurals = {
          s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
          m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
          h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
          d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
          M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
          y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
        },
            pluralize = function pluralize(u) {
          return function (number, withoutSuffix, string, isFuture) {
            var f = pluralForm(number),
                str = plurals[u][pluralForm(number)];

            if (f === 2) {
              str = str[withoutSuffix ? 0 : 1];
            }

            return str.replace(/%d/i, number);
          };
        },
            months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

        var arLy = moment.defineLocale('ar-ly', {
          months: months,
          monthsShort: months,
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
          weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: "D/\u200FM/\u200FYYYY",
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          meridiemParse: /ص|م/,
          isPM: function isPM(input) {
            return 'م' === input;
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 12) {
              return 'ص';
            } else {
              return 'م';
            }
          },
          calendar: {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'بعد %s',
            past: 'منذ %s',
            s: pluralize('s'),
            ss: pluralize('s'),
            m: pluralize('m'),
            mm: pluralize('m'),
            h: pluralize('h'),
            hh: pluralize('h'),
            d: pluralize('d'),
            dd: pluralize('d'),
            M: pluralize('M'),
            MM: pluralize('M'),
            y: pluralize('y'),
            yy: pluralize('y')
          },
          preparse: function preparse(string) {
            return string.replace(/،/g, ',');
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            }).replace(/,/g, '،');
          },
          week: {
            dow: 6,
            // Saturday is the first day of the week.
            doy: 12 // The week that contains Jan 12th is the first week of the year.

          }
        });
        return arLy;
      });
      /***/

    },

    /***/
    "IBtZ":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ka.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function IBtZ(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var ka = moment.defineLocale('ka', {
          months: {
            standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
            format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
          },
          monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
          weekdays: {
            standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
            format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
            isFormat: /(წინა|შემდეგ)/
          },
          weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
          weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A'
          },
          calendar: {
            sameDay: '[დღეს] LT[-ზე]',
            nextDay: '[ხვალ] LT[-ზე]',
            lastDay: '[გუშინ] LT[-ზე]',
            nextWeek: '[შემდეგ] dddd LT[-ზე]',
            lastWeek: '[წინა] dddd LT-ზე',
            sameElse: 'L'
          },
          relativeTime: {
            future: function future(s) {
              return /(წამი|წუთი|საათი|წელი)/.test(s) ? s.replace(/ი$/, 'ში') : s + 'ში';
            },
            past: function past(s) {
              if (/(წამი|წუთი|საათი|დღე|თვე)/.test(s)) {
                return s.replace(/(ი|ე)$/, 'ის წინ');
              }

              if (/წელი/.test(s)) {
                return s.replace(/წელი$/, 'წლის წინ');
              }
            },
            s: 'რამდენიმე წამი',
            ss: '%d წამი',
            m: 'წუთი',
            mm: '%d წუთი',
            h: 'საათი',
            hh: '%d საათი',
            d: 'დღე',
            dd: '%d დღე',
            M: 'თვე',
            MM: '%d თვე',
            y: 'წელი',
            yy: '%d წელი'
          },
          dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
          ordinal: function ordinal(number) {
            if (number === 0) {
              return number;
            }

            if (number === 1) {
              return number + '-ლი';
            }

            if (number < 20 || number <= 100 && number % 20 === 0 || number % 100 === 0) {
              return 'მე-' + number;
            }

            return number + '-ე';
          },
          week: {
            dow: 1,
            doy: 7
          }
        });
        return ka;
      });
      /***/

    },

    /***/
    "Ivi+":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ko.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function Ivi(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var ko = moment.defineLocale('ko', {
          months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
          monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
          weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
          weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
          weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
          longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'YYYY.MM.DD.',
            LL: 'YYYY년 MMMM D일',
            LLL: 'YYYY년 MMMM D일 A h:mm',
            LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
            l: 'YYYY.MM.DD.',
            ll: 'YYYY년 MMMM D일',
            lll: 'YYYY년 MMMM D일 A h:mm',
            llll: 'YYYY년 MMMM D일 dddd A h:mm'
          },
          calendar: {
            sameDay: '오늘 LT',
            nextDay: '내일 LT',
            nextWeek: 'dddd LT',
            lastDay: '어제 LT',
            lastWeek: '지난주 dddd LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s 후',
            past: '%s 전',
            s: '몇 초',
            ss: '%d초',
            m: '1분',
            mm: '%d분',
            h: '한 시간',
            hh: '%d시간',
            d: '하루',
            dd: '%d일',
            M: '한 달',
            MM: '%d달',
            y: '일 년',
            yy: '%d년'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              case 'd':
              case 'D':
              case 'DDD':
                return number + '일';

              case 'M':
                return number + '월';

              case 'w':
              case 'W':
                return number + '주';

              default:
                return number;
            }
          },
          meridiemParse: /오전|오후/,
          isPM: function isPM(token) {
            return token === '오후';
          },
          meridiem: function meridiem(hour, minute, isUpper) {
            return hour < 12 ? '오전' : '오후';
          }
        });
        return ko;
      });
      /***/

    },

    /***/
    "JCF/":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ku.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function JCF(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '١',
          '2': '٢',
          '3': '٣',
          '4': '٤',
          '5': '٥',
          '6': '٦',
          '7': '٧',
          '8': '٨',
          '9': '٩',
          '0': '٠'
        },
            numberMap = {
          '١': '1',
          '٢': '2',
          '٣': '3',
          '٤': '4',
          '٥': '5',
          '٦': '6',
          '٧': '7',
          '٨': '8',
          '٩': '9',
          '٠': '0'
        },
            months = ['کانونی دووەم', 'شوبات', 'ئازار', 'نیسان', 'ئایار', 'حوزەیران', 'تەمموز', 'ئاب', 'ئەیلوول', 'تشرینی یەكەم', 'تشرینی دووەم', 'كانونی یەکەم'];
        var ku = moment.defineLocale('ku', {
          months: months,
          monthsShort: months,
          weekdays: 'یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌'.split('_'),
          weekdaysShort: 'یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌'.split('_'),
          weekdaysMin: 'ی_د_س_چ_پ_ه_ش'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          meridiemParse: /ئێواره‌|به‌یانی/,
          isPM: function isPM(input) {
            return /ئێواره‌/.test(input);
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 12) {
              return 'به‌یانی';
            } else {
              return 'ئێواره‌';
            }
          },
          calendar: {
            sameDay: '[ئه‌مرۆ كاتژمێر] LT',
            nextDay: '[به‌یانی كاتژمێر] LT',
            nextWeek: 'dddd [كاتژمێر] LT',
            lastDay: '[دوێنێ كاتژمێر] LT',
            lastWeek: 'dddd [كاتژمێر] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'له‌ %s',
            past: '%s',
            s: 'چه‌ند چركه‌یه‌ك',
            ss: 'چركه‌ %d',
            m: 'یه‌ك خوله‌ك',
            mm: '%d خوله‌ك',
            h: 'یه‌ك كاتژمێر',
            hh: '%d كاتژمێر',
            d: 'یه‌ك ڕۆژ',
            dd: '%d ڕۆژ',
            M: 'یه‌ك مانگ',
            MM: '%d مانگ',
            y: 'یه‌ك ساڵ',
            yy: '%d ساڵ'
          },
          preparse: function preparse(string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
              return numberMap[match];
            }).replace(/،/g, ',');
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            }).replace(/,/g, '،');
          },
          week: {
            dow: 6,
            // Saturday is the first day of the week.
            doy: 12 // The week that contains Jan 12th is the first week of the year.

          }
        });
        return ku;
      });
      /***/

    },

    /***/
    "JVSJ":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/bs.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function JVSJ(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function translate(number, withoutSuffix, key) {
          var result = number + ' ';

          switch (key) {
            case 'ss':
              if (number === 1) {
                result += 'sekunda';
              } else if (number === 2 || number === 3 || number === 4) {
                result += 'sekunde';
              } else {
                result += 'sekundi';
              }

              return result;

            case 'm':
              return withoutSuffix ? 'jedna minuta' : 'jedne minute';

            case 'mm':
              if (number === 1) {
                result += 'minuta';
              } else if (number === 2 || number === 3 || number === 4) {
                result += 'minute';
              } else {
                result += 'minuta';
              }

              return result;

            case 'h':
              return withoutSuffix ? 'jedan sat' : 'jednog sata';

            case 'hh':
              if (number === 1) {
                result += 'sat';
              } else if (number === 2 || number === 3 || number === 4) {
                result += 'sata';
              } else {
                result += 'sati';
              }

              return result;

            case 'dd':
              if (number === 1) {
                result += 'dan';
              } else {
                result += 'dana';
              }

              return result;

            case 'MM':
              if (number === 1) {
                result += 'mjesec';
              } else if (number === 2 || number === 3 || number === 4) {
                result += 'mjeseca';
              } else {
                result += 'mjeseci';
              }

              return result;

            case 'yy':
              if (number === 1) {
                result += 'godina';
              } else if (number === 2 || number === 3 || number === 4) {
                result += 'godine';
              } else {
                result += 'godina';
              }

              return result;
          }
        }

        var bs = moment.defineLocale('bs', {
          months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
          monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
          monthsParseExact: true,
          weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
          weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
          weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
          },
          calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function nextWeek() {
              switch (this.day()) {
                case 0:
                  return '[u] [nedjelju] [u] LT';

                case 3:
                  return '[u] [srijedu] [u] LT';

                case 6:
                  return '[u] [subotu] [u] LT';

                case 1:
                case 2:
                case 4:
                case 5:
                  return '[u] dddd [u] LT';
              }
            },
            lastDay: '[jučer u] LT',
            lastWeek: function lastWeek() {
              switch (this.day()) {
                case 0:
                case 3:
                  return '[prošlu] dddd [u] LT';

                case 6:
                  return '[prošle] [subote] [u] LT';

                case 1:
                case 2:
                case 4:
                case 5:
                  return '[prošli] dddd [u] LT';
              }
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'za %s',
            past: 'prije %s',
            s: 'par sekundi',
            ss: translate,
            m: translate,
            mm: translate,
            h: translate,
            hh: translate,
            d: 'dan',
            dd: translate,
            M: 'mjesec',
            MM: translate,
            y: 'godinu',
            yy: translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return bs;
      });
      /***/

    },

    /***/
    "JvlW":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/lt.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function JvlW(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var units = {
          'ss': 'sekundė_sekundžių_sekundes',
          'm': 'minutė_minutės_minutę',
          'mm': 'minutės_minučių_minutes',
          'h': 'valanda_valandos_valandą',
          'hh': 'valandos_valandų_valandas',
          'd': 'diena_dienos_dieną',
          'dd': 'dienos_dienų_dienas',
          'M': 'mėnuo_mėnesio_mėnesį',
          'MM': 'mėnesiai_mėnesių_mėnesius',
          'y': 'metai_metų_metus',
          'yy': 'metai_metų_metus'
        };

        function translateSeconds(number, withoutSuffix, key, isFuture) {
          if (withoutSuffix) {
            return 'kelios sekundės';
          } else {
            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
          }
        }

        function translateSingular(number, withoutSuffix, key, isFuture) {
          return withoutSuffix ? forms(key)[0] : isFuture ? forms(key)[1] : forms(key)[2];
        }

        function special(number) {
          return number % 10 === 0 || number > 10 && number < 20;
        }

        function forms(key) {
          return units[key].split('_');
        }

        function translate(number, withoutSuffix, key, isFuture) {
          var result = number + ' ';

          if (number === 1) {
            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
          } else if (withoutSuffix) {
            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
          } else {
            if (isFuture) {
              return result + forms(key)[1];
            } else {
              return result + (special(number) ? forms(key)[1] : forms(key)[2]);
            }
          }
        }

        var lt = moment.defineLocale('lt', {
          months: {
            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
          },
          monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
          weekdays: {
            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
            isFormat: /dddd HH:mm/
          },
          weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
          weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY [m.] MMMM D [d.]',
            LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
            l: 'YYYY-MM-DD',
            ll: 'YYYY [m.] MMMM D [d.]',
            lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
            llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
          },
          calendar: {
            sameDay: '[Šiandien] LT',
            nextDay: '[Rytoj] LT',
            nextWeek: 'dddd LT',
            lastDay: '[Vakar] LT',
            lastWeek: '[Praėjusį] dddd LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'po %s',
            past: 'prieš %s',
            s: translateSeconds,
            ss: translate,
            m: translateSingular,
            mm: translate,
            h: translateSingular,
            hh: translate,
            d: translateSingular,
            dd: translate,
            M: translateSingular,
            MM: translate,
            y: translateSingular,
            yy: translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}-oji/,
          ordinal: function ordinal(number) {
            return number + '-oji';
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return lt;
      });
      /***/

    },

    /***/
    "K/tc":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/af.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function KTc(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var af = moment.defineLocale('af', {
          months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
          monthsShort: 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
          weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
          weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
          weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
          meridiemParse: /vm|nm/i,
          isPM: function isPM(input) {
            return /^nm$/i.test(input);
          },
          meridiem: function meridiem(hours, minutes, isLower) {
            if (hours < 12) {
              return isLower ? 'vm' : 'VM';
            } else {
              return isLower ? 'nm' : 'NM';
            }
          },
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Vandag om] LT',
            nextDay: '[Môre om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[Gister om] LT',
            lastWeek: '[Laas] dddd [om] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'oor %s',
            past: '%s gelede',
            s: '\'n paar sekondes',
            ss: '%d sekondes',
            m: '\'n minuut',
            mm: '%d minute',
            h: '\'n uur',
            hh: '%d ure',
            d: '\'n dag',
            dd: '%d dae',
            M: '\'n maand',
            MM: '%d maande',
            y: '\'n jaar',
            yy: '%d jaar'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function ordinal(number) {
            return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
          },
          week: {
            dow: 1,
            // Maandag is die eerste dag van die week.
            doy: 4 // Die week wat die 4de Januarie bevat is die eerste week van die jaar.

          }
        });
        return af;
      });
      /***/

    },

    /***/
    "KSF8":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/vi.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function KSF8(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var vi = moment.defineLocale('vi', {
          months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
          monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
          monthsParseExact: true,
          weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
          weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
          weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
          weekdaysParseExact: true,
          meridiemParse: /sa|ch/i,
          isPM: function isPM(input) {
            return /^ch$/i.test(input);
          },
          meridiem: function meridiem(hours, minutes, isLower) {
            if (hours < 12) {
              return isLower ? 'sa' : 'SA';
            } else {
              return isLower ? 'ch' : 'CH';
            }
          },
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM [năm] YYYY',
            LLL: 'D MMMM [năm] YYYY HH:mm',
            LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
            l: 'DD/M/YYYY',
            ll: 'D MMM YYYY',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd, D MMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Hôm nay lúc] LT',
            nextDay: '[Ngày mai lúc] LT',
            nextWeek: 'dddd [tuần tới lúc] LT',
            lastDay: '[Hôm qua lúc] LT',
            lastWeek: 'dddd [tuần rồi lúc] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s tới',
            past: '%s trước',
            s: 'vài giây',
            ss: '%d giây',
            m: 'một phút',
            mm: '%d phút',
            h: 'một giờ',
            hh: '%d giờ',
            d: 'một ngày',
            dd: '%d ngày',
            M: 'một tháng',
            MM: '%d tháng',
            y: 'một năm',
            yy: '%d năm'
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: function ordinal(number) {
            return number;
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return vi;
      });
      /***/

    },

    /***/
    "KTz0":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/me.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function KTz0(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var translator = {
          words: {
            //Different grammatical cases
            ss: ['sekund', 'sekunda', 'sekundi'],
            m: ['jedan minut', 'jednog minuta'],
            mm: ['minut', 'minuta', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mjesec', 'mjeseca', 'mjeseci'],
            yy: ['godina', 'godine', 'godina']
          },
          correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
            return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
          },
          translate: function translate(number, withoutSuffix, key) {
            var wordKey = translator.words[key];

            if (key.length === 1) {
              return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
              return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
          }
        };
        var me = moment.defineLocale('me', {
          months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
          monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
          monthsParseExact: true,
          weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
          weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
          weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
          },
          calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sjutra u] LT',
            nextWeek: function nextWeek() {
              switch (this.day()) {
                case 0:
                  return '[u] [nedjelju] [u] LT';

                case 3:
                  return '[u] [srijedu] [u] LT';

                case 6:
                  return '[u] [subotu] [u] LT';

                case 1:
                case 2:
                case 4:
                case 5:
                  return '[u] dddd [u] LT';
              }
            },
            lastDay: '[juče u] LT',
            lastWeek: function lastWeek() {
              var lastWeekDays = ['[prošle] [nedjelje] [u] LT', '[prošlog] [ponedjeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srijede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
              return lastWeekDays[this.day()];
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'za %s',
            past: 'prije %s',
            s: 'nekoliko sekundi',
            ss: translator.translate,
            m: translator.translate,
            mm: translator.translate,
            h: translator.translate,
            hh: translator.translate,
            d: 'dan',
            dd: translator.translate,
            M: 'mjesec',
            MM: translator.translate,
            y: 'godinu',
            yy: translator.translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return me;
      });
      /***/

    },

    /***/
    "Loxo":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/uz.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function Loxo(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var uz = moment.defineLocale('uz', {
          months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
          monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
          weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
          weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
          weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'D MMMM YYYY, dddd HH:mm'
          },
          calendar: {
            sameDay: '[Бугун соат] LT [да]',
            nextDay: '[Эртага] LT [да]',
            nextWeek: 'dddd [куни соат] LT [да]',
            lastDay: '[Кеча соат] LT [да]',
            lastWeek: '[Утган] dddd [куни соат] LT [да]',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'Якин %s ичида',
            past: 'Бир неча %s олдин',
            s: 'фурсат',
            ss: '%d фурсат',
            m: 'бир дакика',
            mm: '%d дакика',
            h: 'бир соат',
            hh: '%d соат',
            d: 'бир кун',
            dd: '%d кун',
            M: 'бир ой',
            MM: '%d ой',
            y: 'бир йил',
            yy: '%d йил'
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return uz;
      });
      /***/

    },

    /***/
    "N1EY":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-datepicker.js ***!
      \***********************************************************************************************************/

    /*! exports provided: DatepickerCustomExample, DatepickerDisabledExample, DatepickerExamplesModule, DatepickerLanguageExample, DatepickerOverviewExample, DatepickerYearExample */

    /***/
    function N1EY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerCustomExample", function () {
        return DatepickerCustomExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerDisabledExample", function () {
        return DatepickerDisabledExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerExamplesModule", function () {
        return DatepickerExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerLanguageExample", function () {
        return DatepickerLanguageExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerOverviewExample", function () {
        return DatepickerOverviewExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatepickerYearExample", function () {
        return DatepickerYearExample;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic-luxon-adapter/adapter */
      "O2sr");
      /* harmony import */


      var _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/datepicker */
      "cD68");
      /* harmony import */


      var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ptsecurity/mosaic/form-field */
      "20Zt");
      /* harmony import */


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ptsecurity/mosaic/input */
      "PryY");
      /* harmony import */


      var _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ptsecurity/mosaic/radio */
      "BRpl");
      /* harmony import */


      var _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ptsecurity/mosaic/tooltip */
      "341e");
      /* harmony import */


      var _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ptsecurity/cdk/datetime */
      "Vue8");
      /* harmony import */


      var _ptsecurity_mosaic_moment_adapter_adapter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ptsecurity/mosaic-moment-adapter/adapter */
      "YB0G"); // @dynamic


      function mcDateAdapterFactory(locale) {
        var dateAdapter = new _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["LuxonDateAdapter"](locale);
        dateAdapter.updateLocaleData({
          firstDayOfWeek: 1
        });
        return dateAdapter;
      } // @dynamic


      function mcDateFormatsFactory$1() {
        var dateFormats = Object.assign({}, _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["MC_LUXON_DATE_FORMATS"]);
        dateFormats.dateInput = 'dd.MM.yyyy';
        return dateFormats;
      }
      /**
       * @title Custom localeData and format datepicker
       */


      var DatepickerCustomExample = function DatepickerCustomExample(adapter) {
        _classCallCheck(this, DatepickerCustomExample);

        this.adapter = adapter;
        this.sunday = 6;
        this.date = this.adapter.today();
        this.minDate = this.adapter.today().minus({
          year: 1
        });
        this.maxDate = this.adapter.today().plus({
          year: 1
        });
      };

      DatepickerCustomExample.ɵfac = function DatepickerCustomExample_Factory(t) {
        return new (t || DatepickerCustomExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"]));
      };

      DatepickerCustomExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatepickerCustomExample,
        selectors: [["datepicker-custom-example"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_LOCALE"],
          useValue: 'en'
        }, {
          provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_FORMATS"],
          useFactory: mcDateFormatsFactory$1
        }, {
          provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"],
          useFactory: mcDateAdapterFactory,
          deps: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_LOCALE"]]
        }])],
        decls: 7,
        vars: 4,
        consts: [[1, "example-datepicker-group"], ["mcTooltip", "", 1, "example-datepicker", 3, "mcTitle", "click"], ["tooltip", "mcTooltip"], [3, "mcDatepicker", "placeholder", "mcValidationTooltip"], ["mc-icon", "mc-calendar_16", "mcSuffix", ""], ["datepicker", ""]],
        template: function DatepickerCustomExample_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-form-field", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerCustomExample_Template_mc_form_field_click_1_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mc-datepicker", null, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDatepicker", _r1)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcValidationTooltip", _r0);
          }
        },
        directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerInput"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McSuffix"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepicker"]],
        styles: [".example-datepicker-group[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column}.example-datepicker[_ngcontent-%COMP%]{margin-bottom:10px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerCustomExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datepicker-custom-example',
            templateUrl: 'datepicker-custom-example.html',
            styleUrls: ['datepicker-custom-example.css'],
            providers: [{
              provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_LOCALE"],
              useValue: 'en'
            }, {
              provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_FORMATS"],
              useFactory: mcDateFormatsFactory$1
            }, {
              provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"],
              useFactory: mcDateAdapterFactory,
              deps: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_LOCALE"]]
            }]
          }]
        }], function () {
          return [{
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"]
          }];
        }, null);
      })();
      /**
       * @title Disabled datepicker
       */


      var DatepickerDisabledExample = /*#__PURE__*/function () {
        function DatepickerDisabledExample(adapter) {
          _classCallCheck(this, DatepickerDisabledExample);

          this.adapter = adapter;
          this.sunday = 6;
          this.date = this.adapter.today();
          this.minDate = this.adapter.today().minus({
            year: 1
          });
          this.maxDate = this.adapter.today().plus({
            year: 1
          });
        }

        _createClass(DatepickerDisabledExample, [{
          key: "myFilter",
          value: function myFilter(date) {
            return date.day !== 0 && date.day !== this.sunday;
          }
        }]);

        return DatepickerDisabledExample;
      }();

      DatepickerDisabledExample.ɵfac = function DatepickerDisabledExample_Factory(t) {
        return new (t || DatepickerDisabledExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"]));
      };

      DatepickerDisabledExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatepickerDisabledExample,
        selectors: [["datepicker-disabled-example"]],
        decls: 39,
        vars: 19,
        consts: [[1, ".example-datepicker-group"], ["mcTooltip", "", 1, "example-datepicker", 3, "mcTitle", "click"], ["tooltip1", "mcTooltip"], [3, "ngModel", "placeholder", "mcDatepicker", "mcValidationTooltip"], ["mc-icon", "mc-calendar_16", "mcSuffix", ""], ["disabled", "", "startView", "multi-year"], ["myDatepicker1", ""], [1, "example-datepicker", 3, "click"], ["disabled", "", 3, "ngModel", "placeholder", "mcDatepicker"], ["myDatepicker2", ""], ["readonly", "", 3, "ngModel", "placeholder", "mcDatepicker"], ["myDatepicker3", ""], ["tooltip4", "mcTooltip"], [3, "ngModel", "placeholder", "mcDatepicker", "mcDatepickerFilter", "mcValidationTooltip", "min", "max"], ["myDatepicker4", ""]],
        template: function DatepickerDisabledExample_Template(rf, ctx) {
          if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Datepicker disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mc-form-field", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerDisabledExample_Template_mc_form_field_click_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mc-datepicker", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Datepicker with disabled input");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mc-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerDisabledExample_Template_mc_form_field_click_15_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "mc-datepicker", null, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Datepicker with readonly input");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mc-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerDisabledExample_Template_mc_form_field_click_24_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);

              return _r3.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "mc-datepicker", null, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Datepicker with some dates disabled");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mc-form-field", 1, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerDisabledExample_Template_mc_form_field_click_33_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

              var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);

              return _r5.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "mc-datepicker", null, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcDatepicker", _r1)("mcValidationTooltip", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcDatepicker", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcDatepicker", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcDatepicker", _r5)("mcDatepickerFilter", ctx.myFilter)("mcValidationTooltip", _r4)("min", ctx.minDate)("max", ctx.maxDate);
          }
        },
        directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McSuffix"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepicker"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["MinValidator"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["MaxValidator"]],
        styles: [".example-datepicker-group[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column}.example-datepicker[_ngcontent-%COMP%]{margin-bottom:10px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerDisabledExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datepicker-disabled-example',
            templateUrl: 'datepicker-disabled-example.html',
            styleUrls: ['datepicker-disabled-example.css']
          }]
        }], function () {
          return [{
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"]
          }];
        }, null);
      })();
      /* tslint:disable:no-magic-numbers */


      function DatepickerLanguageExample_mc_radio_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-radio-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var language_r3 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", language_r3)("checked", language_r3.name === ctx_r0.selectedLanguage.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", language_r3.name, " ");
        }
      }

      function mcDateFormatsFactory() {
        var dateFormats = Object.assign({}, _ptsecurity_mosaic_moment_adapter_adapter__WEBPACK_IMPORTED_MODULE_11__["MC_MOMENT_DATE_FORMATS"]);
        dateFormats.dateInput = 'dd.MM.yyyy';
        return dateFormats;
      }
      /**
       * @title Multy language datepicker
       */


      var DatepickerLanguageExample = /*#__PURE__*/function () {
        function DatepickerLanguageExample(adapter, dateFormats) {
          _classCallCheck(this, DatepickerLanguageExample);

          this.adapter = adapter;
          this.dateFormats = dateFormats;
          this.languageList = [{
            name: 'en',
            format: 'dd/MM/yyyy',
            placeholder: 'дд/мм/гггг'
          }, {
            name: 'de',
            format: 'dd-MM-yyyy',
            placeholder: 'дд-мм-гггг'
          }, {
            name: 'ru',
            format: 'dd.MM.yyyy',
            placeholder: 'дд.мм.гггг'
          }];
          this.selectedLanguage = this.languageList[0];
          this.selectedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.adapter.createDateTime(2020, 5, 6, 12, 0, 0, 0));
        }

        _createClass(DatepickerLanguageExample, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.adapter.setLocale(this.languageList[0].name);
          }
        }, {
          key: "setFormat",
          value: function setFormat($event) {
            this.dateFormats.dateInput = $event.value.format;
            this.selectedLanguage = this.languageList.find(function (_ref) {
              var name = _ref.name;
              return name === $event.value.name;
            });
            this.selectedDate.setValue(this.selectedDate.value);
            this.adapter.setLocale($event.value.name);
          }
        }]);

        return DatepickerLanguageExample;
      }();

      DatepickerLanguageExample.ɵfac = function DatepickerLanguageExample_Factory(t) {
        return new (t || DatepickerLanguageExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_FORMATS"]));
      };

      DatepickerLanguageExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatepickerLanguageExample,
        selectors: [["datepicker-language-example"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_FORMATS"],
          useFactory: mcDateFormatsFactory
        }])],
        decls: 14,
        vars: 7,
        consts: [[1, "example-radio-group", 3, "change"], ["class", "example-radio-button", 3, "value", "checked", 4, "ngFor", "ngForOf"], ["mcTooltip", "", 3, "mcTitle", "click"], ["tooltip", "mcTooltip"], [3, "formControl", "placeholder", "mcDatepicker", "mcValidationTooltip"], ["mc-icon", "mc-calendar_16", "mcSuffix", ""], ["picker", ""], [1, "example-radio-button", 3, "value", "checked"]],
        template: function DatepickerLanguageExample_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-radio-group", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DatepickerLanguageExample_Template_mc_radio_group_change_0_listener($event) {
              return ctx.setFormat($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DatepickerLanguageExample_mc_radio_button_1_Template, 2, 3, "mc-radio-button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-form-field", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerLanguageExample_Template_mc_form_field_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

              return _r2.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "mc-datepicker", null, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.languageList);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.selectedDate)("placeholder", ctx.selectedLanguage.placeholder)("mcDatepicker", _r2)("mcValidationTooltip", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedDate.value);
          }
        },
        directives: [_ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McSuffix"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepicker"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioButton"]],
        styles: [".example-radio-group[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column}.example-radio-button[_ngcontent-%COMP%]{margin-bottom:10px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerLanguageExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datepicker-language-example',
            templateUrl: 'datepicker-language-example.html',
            styleUrls: ['datepicker-language-example.css'],
            providers: [{
              provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_FORMATS"],
              useFactory: mcDateFormatsFactory
            }]
          }]
        }], function () {
          return [{
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_10__["MC_DATE_FORMATS"]]
            }]
          }];
        }, null);
      })();
      /**
       * @title Datepicker
       */


      var DatepickerOverviewExample = function DatepickerOverviewExample() {
        _classCallCheck(this, DatepickerOverviewExample);
      };

      DatepickerOverviewExample.ɵfac = function DatepickerOverviewExample_Factory(t) {
        return new (t || DatepickerOverviewExample)();
      };

      DatepickerOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatepickerOverviewExample,
        selectors: [["datepicker-overview-example"]],
        decls: 6,
        vars: 5,
        consts: [["mcTooltip", "", 3, "mcTitle", "click"], ["tooltip", "mcTooltip"], [3, "ngModel", "placeholder", "mcDatepicker", "mcValidationTooltip", "ngModelChange"], ["mc-icon", "mc-calendar_16", "mcSuffix", ""], ["myDatepicker", ""]],
        template: function DatepickerOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerOverviewExample_Template_mc_form_field_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DatepickerOverviewExample_Template_input_ngModelChange_2_listener($event) {
              return ctx.date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mc-datepicker", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcDatepicker", _r1)("mcValidationTooltip", _r0);
          }
        },
        directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McSuffix"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepicker"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datepicker-overview-example',
            templateUrl: 'datepicker-overview-example.html',
            styleUrls: ['datepicker-overview-example.css']
          }]
        }], null, null);
      })();
      /**
       * @title Datepicker starts with year
       */


      var DatepickerYearExample = function DatepickerYearExample() {
        _classCallCheck(this, DatepickerYearExample);
      };

      DatepickerYearExample.ɵfac = function DatepickerYearExample_Factory(t) {
        return new (t || DatepickerYearExample)();
      };

      DatepickerYearExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DatepickerYearExample,
        selectors: [["datepicker-year-example"]],
        decls: 6,
        vars: 6,
        consts: [["mcTooltip", "", 3, "mcTitle", "click"], ["tooltip", "mcTooltip"], [3, "ngModel", "placeholder", "mcDatepicker", "mcValidationTooltip", "ngModelChange"], ["mc-icon", "mc-calendar_16", "mcSuffix", ""], [3, "startView"], ["myDatepicker", ""]],
        template: function DatepickerYearExample_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DatepickerYearExample_Template_mc_form_field_click_0_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DatepickerYearExample_Template_input_ngModelChange_2_listener($event) {
              return ctx.date = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mc-datepicker", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.date)("placeholder", "\u0434\u0434.\u043C\u043C.\u0433\u0433\u0433\u0433")("mcDatepicker", _r1)("mcValidationTooltip", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("startView", "multi-year");
          }
        },
        directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McSuffix"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepicker"]],
        styles: [""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerYearExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'datepicker-year-example',
            templateUrl: 'datepicker-year-example.html',
            styleUrls: ['datepicker-year-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [DatepickerDisabledExample, DatepickerLanguageExample, DatepickerOverviewExample, DatepickerYearExample, DatepickerCustomExample];

      var DatepickerExamplesModule = function DatepickerExamplesModule() {
        _classCallCheck(this, DatepickerExamplesModule);
      };

      DatepickerExamplesModule.ɵfac = function DatepickerExamplesModule_Factory(t) {
        return new (t || DatepickerExamplesModule)();
      };

      DatepickerExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: DatepickerExamplesModule
      });
      DatepickerExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["McLuxonDateModule"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioModule"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McToolTipModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DatepickerExamplesModule, {
          declarations: [DatepickerDisabledExample, DatepickerLanguageExample, DatepickerOverviewExample, DatepickerYearExample, DatepickerCustomExample],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["McLuxonDateModule"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioModule"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McToolTipModule"]],
          exports: [DatepickerDisabledExample, DatepickerLanguageExample, DatepickerOverviewExample, DatepickerYearExample, DatepickerCustomExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatepickerExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["McLuxonDateModule"], _ptsecurity_mosaic_datepicker__WEBPACK_IMPORTED_MODULE_4__["McDatepickerModule"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioModule"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_9__["McToolTipModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-datepicker.js.map

      /***/

    },

    /***/
    "OIYi":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/en-ca.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function OIYi(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var enCa = moment.defineLocale('en-ca', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'YYYY-MM-DD',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY h:mm A',
            LLLL: 'dddd, MMMM D, YYYY h:mm A'
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function ordinal(number) {
            var b = number % 10,
                output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
          }
        });
        return enCa;
      });
      /***/

    },

    /***/
    "Oaa7":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/en-gb.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function Oaa7(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var enGb = moment.defineLocale('en-gb', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function ordinal(number) {
            var b = number % 10,
                output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return enGb;
      });
      /***/

    },

    /***/
    "Ob0Z":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/mr.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function Ob0Z(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '१',
          '2': '२',
          '3': '३',
          '4': '४',
          '5': '५',
          '6': '६',
          '7': '७',
          '8': '८',
          '9': '९',
          '0': '०'
        },
            numberMap = {
          '१': '1',
          '२': '2',
          '३': '3',
          '४': '4',
          '५': '5',
          '६': '6',
          '७': '7',
          '८': '8',
          '९': '9',
          '०': '0'
        };

        function relativeTimeMr(number, withoutSuffix, string, isFuture) {
          var output = '';

          if (withoutSuffix) {
            switch (string) {
              case 's':
                output = 'काही सेकंद';
                break;

              case 'ss':
                output = '%d सेकंद';
                break;

              case 'm':
                output = 'एक मिनिट';
                break;

              case 'mm':
                output = '%d मिनिटे';
                break;

              case 'h':
                output = 'एक तास';
                break;

              case 'hh':
                output = '%d तास';
                break;

              case 'd':
                output = 'एक दिवस';
                break;

              case 'dd':
                output = '%d दिवस';
                break;

              case 'M':
                output = 'एक महिना';
                break;

              case 'MM':
                output = '%d महिने';
                break;

              case 'y':
                output = 'एक वर्ष';
                break;

              case 'yy':
                output = '%d वर्षे';
                break;
            }
          } else {
            switch (string) {
              case 's':
                output = 'काही सेकंदां';
                break;

              case 'ss':
                output = '%d सेकंदां';
                break;

              case 'm':
                output = 'एका मिनिटा';
                break;

              case 'mm':
                output = '%d मिनिटां';
                break;

              case 'h':
                output = 'एका तासा';
                break;

              case 'hh':
                output = '%d तासां';
                break;

              case 'd':
                output = 'एका दिवसा';
                break;

              case 'dd':
                output = '%d दिवसां';
                break;

              case 'M':
                output = 'एका महिन्या';
                break;

              case 'MM':
                output = '%d महिन्यां';
                break;

              case 'y':
                output = 'एका वर्षा';
                break;

              case 'yy':
                output = '%d वर्षां';
                break;
            }
          }

          return output.replace(/%d/i, number);
        }

        var mr = moment.defineLocale('mr', {
          months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
          monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
          monthsParseExact: true,
          weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
          weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
          weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
          longDateFormat: {
            LT: 'A h:mm वाजता',
            LTS: 'A h:mm:ss वाजता',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm वाजता',
            LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
          },
          calendar: {
            sameDay: '[आज] LT',
            nextDay: '[उद्या] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[काल] LT',
            lastWeek: '[मागील] dddd, LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%sमध्ये',
            past: '%sपूर्वी',
            s: relativeTimeMr,
            ss: relativeTimeMr,
            m: relativeTimeMr,
            mm: relativeTimeMr,
            h: relativeTimeMr,
            hh: relativeTimeMr,
            d: relativeTimeMr,
            dd: relativeTimeMr,
            M: relativeTimeMr,
            MM: relativeTimeMr,
            y: relativeTimeMr,
            yy: relativeTimeMr
          },
          preparse: function preparse(string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
              return numberMap[match];
            });
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            });
          },
          meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'रात्री') {
              return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'सकाळी') {
              return hour;
            } else if (meridiem === 'दुपारी') {
              return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'सायंकाळी') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'रात्री';
            } else if (hour < 10) {
              return 'सकाळी';
            } else if (hour < 17) {
              return 'दुपारी';
            } else if (hour < 20) {
              return 'सायंकाळी';
            } else {
              return 'रात्री';
            }
          },
          week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.

          }
        });
        return mr;
      });
      /***/

    },

    /***/
    "OjkT":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ne.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function OjkT(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '१',
          '2': '२',
          '3': '३',
          '4': '४',
          '5': '५',
          '6': '६',
          '7': '७',
          '8': '८',
          '9': '९',
          '0': '०'
        },
            numberMap = {
          '१': '1',
          '२': '2',
          '३': '3',
          '४': '4',
          '५': '5',
          '६': '6',
          '७': '7',
          '८': '8',
          '९': '9',
          '०': '0'
        };
        var ne = moment.defineLocale('ne', {
          months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
          monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
          monthsParseExact: true,
          weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
          weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
          weekdaysMin: 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'Aको h:mm बजे',
            LTS: 'Aको h:mm:ss बजे',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, Aको h:mm बजे',
            LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे'
          },
          preparse: function preparse(string) {
            return string.replace(/[१२३४५६७८९०]/g, function (match) {
              return numberMap[match];
            });
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            });
          },
          meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'राति') {
              return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'बिहान') {
              return hour;
            } else if (meridiem === 'दिउँसो') {
              return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'साँझ') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 3) {
              return 'राति';
            } else if (hour < 12) {
              return 'बिहान';
            } else if (hour < 16) {
              return 'दिउँसो';
            } else if (hour < 20) {
              return 'साँझ';
            } else {
              return 'राति';
            }
          },
          calendar: {
            sameDay: '[आज] LT',
            nextDay: '[भोलि] LT',
            nextWeek: '[आउँदो] dddd[,] LT',
            lastDay: '[हिजो] LT',
            lastWeek: '[गएको] dddd[,] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%sमा',
            past: '%s अगाडि',
            s: 'केही क्षण',
            ss: '%d सेकेण्ड',
            m: 'एक मिनेट',
            mm: '%d मिनेट',
            h: 'एक घण्टा',
            hh: '%d घण्टा',
            d: 'एक दिन',
            dd: '%d दिन',
            M: 'एक महिना',
            MM: '%d महिना',
            y: 'एक बर्ष',
            yy: '%d बर्ष'
          },
          week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.

          }
        });
        return ne;
      });
      /***/

    },

    /***/
    "Oxv6":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/tg.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function Oxv6(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var suffixes = {
          0: '-ум',
          1: '-ум',
          2: '-юм',
          3: '-юм',
          4: '-ум',
          5: '-ум',
          6: '-ум',
          7: '-ум',
          8: '-ум',
          9: '-ум',
          10: '-ум',
          12: '-ум',
          13: '-ум',
          20: '-ум',
          30: '-юм',
          40: '-ум',
          50: '-ум',
          60: '-ум',
          70: '-ум',
          80: '-ум',
          90: '-ум',
          100: '-ум'
        };
        var tg = moment.defineLocale('tg', {
          months: 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
          monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
          weekdays: 'якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе'.split('_'),
          weekdaysShort: 'яшб_дшб_сшб_чшб_пшб_ҷум_шнб'.split('_'),
          weekdaysMin: 'яш_дш_сш_чш_пш_ҷм_шб'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Имрӯз соати] LT',
            nextDay: '[Пагоҳ соати] LT',
            lastDay: '[Дирӯз соати] LT',
            nextWeek: 'dddd[и] [ҳафтаи оянда соати] LT',
            lastWeek: 'dddd[и] [ҳафтаи гузашта соати] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'баъди %s',
            past: '%s пеш',
            s: 'якчанд сония',
            m: 'як дақиқа',
            mm: '%d дақиқа',
            h: 'як соат',
            hh: '%d соат',
            d: 'як рӯз',
            dd: '%d рӯз',
            M: 'як моҳ',
            MM: '%d моҳ',
            y: 'як сол',
            yy: '%d сол'
          },
          meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'шаб') {
              return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'субҳ') {
              return hour;
            } else if (meridiem === 'рӯз') {
              return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'бегоҳ') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'шаб';
            } else if (hour < 11) {
              return 'субҳ';
            } else if (hour < 16) {
              return 'рӯз';
            } else if (hour < 19) {
              return 'бегоҳ';
            } else {
              return 'шаб';
            }
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
          ordinal: function ordinal(number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1th is the first week of the year.

          }
        });
        return tg;
      });
      /***/

    },

    /***/
    "PA2r":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/cs.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function PA2r(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
            monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');

        function plural(n) {
          return n > 1 && n < 5 && ~~(n / 10) !== 1;
        }

        function translate(number, withoutSuffix, key, isFuture) {
          var result = number + ' ';

          switch (key) {
            case 's':
              // a few seconds / in a few seconds / a few seconds ago
              return withoutSuffix || isFuture ? 'pár sekund' : 'pár sekundami';

            case 'ss':
              // 9 seconds / in 9 seconds / 9 seconds ago
              if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'sekundy' : 'sekund');
              } else {
                return result + 'sekundami';
              }

              break;

            case 'm':
              // a minute / in a minute / a minute ago
              return withoutSuffix ? 'minuta' : isFuture ? 'minutu' : 'minutou';

            case 'mm':
              // 9 minutes / in 9 minutes / 9 minutes ago
              if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'minuty' : 'minut');
              } else {
                return result + 'minutami';
              }

              break;

            case 'h':
              // an hour / in an hour / an hour ago
              return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';

            case 'hh':
              // 9 hours / in 9 hours / 9 hours ago
              if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'hodiny' : 'hodin');
              } else {
                return result + 'hodinami';
              }

              break;

            case 'd':
              // a day / in a day / a day ago
              return withoutSuffix || isFuture ? 'den' : 'dnem';

            case 'dd':
              // 9 days / in 9 days / 9 days ago
              if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'dny' : 'dní');
              } else {
                return result + 'dny';
              }

              break;

            case 'M':
              // a month / in a month / a month ago
              return withoutSuffix || isFuture ? 'měsíc' : 'měsícem';

            case 'MM':
              // 9 months / in 9 months / 9 months ago
              if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'měsíce' : 'měsíců');
              } else {
                return result + 'měsíci';
              }

              break;

            case 'y':
              // a year / in a year / a year ago
              return withoutSuffix || isFuture ? 'rok' : 'rokem';

            case 'yy':
              // 9 years / in 9 years / 9 years ago
              if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'roky' : 'let');
              } else {
                return result + 'lety';
              }

              break;
          }
        }

        var cs = moment.defineLocale('cs', {
          months: months,
          monthsShort: monthsShort,
          monthsParse: function (months, monthsShort) {
            var i,
                _monthsParse = [];

            for (i = 0; i < 12; i++) {
              // use custom parser to solve problem with July (červenec)
              _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
            }

            return _monthsParse;
          }(months, monthsShort),
          shortMonthsParse: function (monthsShort) {
            var i,
                _shortMonthsParse = [];

            for (i = 0; i < 12; i++) {
              _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
            }

            return _shortMonthsParse;
          }(monthsShort),
          longMonthsParse: function (months) {
            var i,
                _longMonthsParse = [];

            for (i = 0; i < 12; i++) {
              _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
            }

            return _longMonthsParse;
          }(months),
          weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
          weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
          weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm',
            l: 'D. M. YYYY'
          },
          calendar: {
            sameDay: '[dnes v] LT',
            nextDay: '[zítra v] LT',
            nextWeek: function nextWeek() {
              switch (this.day()) {
                case 0:
                  return '[v neděli v] LT';

                case 1:
                case 2:
                  return '[v] dddd [v] LT';

                case 3:
                  return '[ve středu v] LT';

                case 4:
                  return '[ve čtvrtek v] LT';

                case 5:
                  return '[v pátek v] LT';

                case 6:
                  return '[v sobotu v] LT';
              }
            },
            lastDay: '[včera v] LT',
            lastWeek: function lastWeek() {
              switch (this.day()) {
                case 0:
                  return '[minulou neděli v] LT';

                case 1:
                case 2:
                  return '[minulé] dddd [v] LT';

                case 3:
                  return '[minulou středu v] LT';

                case 4:
                case 5:
                  return '[minulý] dddd [v] LT';

                case 6:
                  return '[minulou sobotu v] LT';
              }
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'za %s',
            past: 'před %s',
            s: translate,
            ss: translate,
            m: translate,
            mm: translate,
            h: translate,
            hh: translate,
            d: translate,
            dd: translate,
            M: translate,
            MM: translate,
            y: translate,
            yy: translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return cs;
      });
      /***/

    },

    /***/
    "PeUW":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ta.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function PeUW(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '௧',
          '2': '௨',
          '3': '௩',
          '4': '௪',
          '5': '௫',
          '6': '௬',
          '7': '௭',
          '8': '௮',
          '9': '௯',
          '0': '௦'
        },
            numberMap = {
          '௧': '1',
          '௨': '2',
          '௩': '3',
          '௪': '4',
          '௫': '5',
          '௬': '6',
          '௭': '7',
          '௮': '8',
          '௯': '9',
          '௦': '0'
        };
        var ta = moment.defineLocale('ta', {
          months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
          monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
          weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
          weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
          weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, HH:mm',
            LLLL: 'dddd, D MMMM YYYY, HH:mm'
          },
          calendar: {
            sameDay: '[இன்று] LT',
            nextDay: '[நாளை] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[நேற்று] LT',
            lastWeek: '[கடந்த வாரம்] dddd, LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s இல்',
            past: '%s முன்',
            s: 'ஒரு சில விநாடிகள்',
            ss: '%d விநாடிகள்',
            m: 'ஒரு நிமிடம்',
            mm: '%d நிமிடங்கள்',
            h: 'ஒரு மணி நேரம்',
            hh: '%d மணி நேரம்',
            d: 'ஒரு நாள்',
            dd: '%d நாட்கள்',
            M: 'ஒரு மாதம்',
            MM: '%d மாதங்கள்',
            y: 'ஒரு வருடம்',
            yy: '%d ஆண்டுகள்'
          },
          dayOfMonthOrdinalParse: /\d{1,2}வது/,
          ordinal: function ordinal(number) {
            return number + 'வது';
          },
          preparse: function preparse(string) {
            return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
              return numberMap[match];
            });
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            });
          },
          // refer http://ta.wikipedia.org/s/1er1
          meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 2) {
              return ' யாமம்';
            } else if (hour < 6) {
              return ' வைகறை'; // வைகறை
            } else if (hour < 10) {
              return ' காலை'; // காலை
            } else if (hour < 14) {
              return ' நண்பகல்'; // நண்பகல்
            } else if (hour < 18) {
              return ' எற்பாடு'; // எற்பாடு
            } else if (hour < 22) {
              return ' மாலை'; // மாலை
            } else {
              return ' யாமம்';
            }
          },
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'யாமம்') {
              return hour < 2 ? hour : hour + 12;
            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
              return hour;
            } else if (meridiem === 'நண்பகல்') {
              return hour >= 10 ? hour : hour + 12;
            } else {
              return hour + 12;
            }
          },
          week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.

          }
        });
        return ta;
      });
      /***/

    },

    /***/
    "PpIw":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/kn.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function PpIw(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '೧',
          '2': '೨',
          '3': '೩',
          '4': '೪',
          '5': '೫',
          '6': '೬',
          '7': '೭',
          '8': '೮',
          '9': '೯',
          '0': '೦'
        },
            numberMap = {
          '೧': '1',
          '೨': '2',
          '೩': '3',
          '೪': '4',
          '೫': '5',
          '೬': '6',
          '೭': '7',
          '೮': '8',
          '೯': '9',
          '೦': '0'
        };
        var kn = moment.defineLocale('kn', {
          months: 'ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್'.split('_'),
          monthsShort: 'ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ'.split('_'),
          monthsParseExact: true,
          weekdays: 'ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ'.split('_'),
          weekdaysShort: 'ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ'.split('_'),
          weekdaysMin: 'ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm',
            LLLL: 'dddd, D MMMM YYYY, A h:mm'
          },
          calendar: {
            sameDay: '[ಇಂದು] LT',
            nextDay: '[ನಾಳೆ] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[ನಿನ್ನೆ] LT',
            lastWeek: '[ಕೊನೆಯ] dddd, LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s ನಂತರ',
            past: '%s ಹಿಂದೆ',
            s: 'ಕೆಲವು ಕ್ಷಣಗಳು',
            ss: '%d ಸೆಕೆಂಡುಗಳು',
            m: 'ಒಂದು ನಿಮಿಷ',
            mm: '%d ನಿಮಿಷ',
            h: 'ಒಂದು ಗಂಟೆ',
            hh: '%d ಗಂಟೆ',
            d: 'ಒಂದು ದಿನ',
            dd: '%d ದಿನ',
            M: 'ಒಂದು ತಿಂಗಳು',
            MM: '%d ತಿಂಗಳು',
            y: 'ಒಂದು ವರ್ಷ',
            yy: '%d ವರ್ಷ'
          },
          preparse: function preparse(string) {
            return string.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (match) {
              return numberMap[match];
            });
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            });
          },
          meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'ರಾತ್ರಿ') {
              return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'ಬೆಳಿಗ್ಗೆ') {
              return hour;
            } else if (meridiem === 'ಮಧ್ಯಾಹ್ನ') {
              return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'ಸಂಜೆ') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'ರಾತ್ರಿ';
            } else if (hour < 10) {
              return 'ಬೆಳಿಗ್ಗೆ';
            } else if (hour < 17) {
              return 'ಮಧ್ಯಾಹ್ನ';
            } else if (hour < 20) {
              return 'ಸಂಜೆ';
            } else {
              return 'ರಾತ್ರಿ';
            }
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
          ordinal: function ordinal(number) {
            return number + 'ನೇ';
          },
          week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.

          }
        });
        return kn;
      });
      /***/

    },

    /***/
    "Qj4J":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/ar-kw.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function Qj4J(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var arKw = moment.defineLocale('ar-kw', {
          months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
          monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
          weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
          weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
          },
          week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 12 // The week that contains Jan 12th is the first week of the year.

          }
        });
        return arKw;
      });
      /***/

    },

    /***/
    "RAwQ":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/lb.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function RAwQ(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function processRelativeTime(number, withoutSuffix, key, isFuture) {
          var format = {
            'm': ['eng Minutt', 'enger Minutt'],
            'h': ['eng Stonn', 'enger Stonn'],
            'd': ['een Dag', 'engem Dag'],
            'M': ['ee Mount', 'engem Mount'],
            'y': ['ee Joer', 'engem Joer']
          };
          return withoutSuffix ? format[key][0] : format[key][1];
        }

        function processFutureTime(string) {
          var number = string.substr(0, string.indexOf(' '));

          if (eifelerRegelAppliesToNumber(number)) {
            return 'a ' + string;
          }

          return 'an ' + string;
        }

        function processPastTime(string) {
          var number = string.substr(0, string.indexOf(' '));

          if (eifelerRegelAppliesToNumber(number)) {
            return 'viru ' + string;
          }

          return 'virun ' + string;
        }
        /**
         * Returns true if the word before the given number loses the '-n' ending.
         * e.g. 'an 10 Deeg' but 'a 5 Deeg'
         *
         * @param number {integer}
         * @returns {boolean}
         */


        function eifelerRegelAppliesToNumber(number) {
          number = parseInt(number, 10);

          if (isNaN(number)) {
            return false;
          }

          if (number < 0) {
            // Negative Number --> always true
            return true;
          } else if (number < 10) {
            // Only 1 digit
            if (4 <= number && number <= 7) {
              return true;
            }

            return false;
          } else if (number < 100) {
            // 2 digits
            var lastDigit = number % 10,
                firstDigit = number / 10;

            if (lastDigit === 0) {
              return eifelerRegelAppliesToNumber(firstDigit);
            }

            return eifelerRegelAppliesToNumber(lastDigit);
          } else if (number < 10000) {
            // 3 or 4 digits --> recursively check first digit
            while (number >= 10) {
              number = number / 10;
            }

            return eifelerRegelAppliesToNumber(number);
          } else {
            // Anything larger than 4 digits: recursively check first n-3 digits
            number = number / 1000;
            return eifelerRegelAppliesToNumber(number);
          }
        }

        var lb = moment.defineLocale('lb', {
          months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
          monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
          monthsParseExact: true,
          weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
          weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
          weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'H:mm [Auer]',
            LTS: 'H:mm:ss [Auer]',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm [Auer]',
            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
          },
          calendar: {
            sameDay: '[Haut um] LT',
            sameElse: 'L',
            nextDay: '[Muer um] LT',
            nextWeek: 'dddd [um] LT',
            lastDay: '[Gëschter um] LT',
            lastWeek: function lastWeek() {
              // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
              switch (this.day()) {
                case 2:
                case 4:
                  return '[Leschten] dddd [um] LT';

                default:
                  return '[Leschte] dddd [um] LT';
              }
            }
          },
          relativeTime: {
            future: processFutureTime,
            past: processPastTime,
            s: 'e puer Sekonnen',
            ss: '%d Sekonnen',
            m: processRelativeTime,
            mm: '%d Minutten',
            h: processRelativeTime,
            hh: '%d Stonnen',
            d: processRelativeTime,
            dd: '%d Deeg',
            M: processRelativeTime,
            MM: '%d Méint',
            y: processRelativeTime,
            yy: '%d Joer'
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return lb;
      });
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "S6ln":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/hr.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function S6ln(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function translate(number, withoutSuffix, key) {
          var result = number + ' ';

          switch (key) {
            case 'ss':
              if (number === 1) {
                result += 'sekunda';
              } else if (number === 2 || number === 3 || number === 4) {
                result += 'sekunde';
              } else {
                result += 'sekundi';
              }

              return result;

            case 'm':
              return withoutSuffix ? 'jedna minuta' : 'jedne minute';

            case 'mm':
              if (number === 1) {
                result += 'minuta';
              } else if (number === 2 || number === 3 || number === 4) {
                result += 'minute';
              } else {
                result += 'minuta';
              }

              return result;

            case 'h':
              return withoutSuffix ? 'jedan sat' : 'jednog sata';

            case 'hh':
              if (number === 1) {
                result += 'sat';
              } else if (number === 2 || number === 3 || number === 4) {
                result += 'sata';
              } else {
                result += 'sati';
              }

              return result;

            case 'dd':
              if (number === 1) {
                result += 'dan';
              } else {
                result += 'dana';
              }

              return result;

            case 'MM':
              if (number === 1) {
                result += 'mjesec';
              } else if (number === 2 || number === 3 || number === 4) {
                result += 'mjeseca';
              } else {
                result += 'mjeseci';
              }

              return result;

            case 'yy':
              if (number === 1) {
                result += 'godina';
              } else if (number === 2 || number === 3 || number === 4) {
                result += 'godine';
              } else {
                result += 'godina';
              }

              return result;
          }
        }

        var hr = moment.defineLocale('hr', {
          months: {
            format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
            standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
          },
          monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
          monthsParseExact: true,
          weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
          weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
          weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
          },
          calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function nextWeek() {
              switch (this.day()) {
                case 0:
                  return '[u] [nedjelju] [u] LT';

                case 3:
                  return '[u] [srijedu] [u] LT';

                case 6:
                  return '[u] [subotu] [u] LT';

                case 1:
                case 2:
                case 4:
                case 5:
                  return '[u] dddd [u] LT';
              }
            },
            lastDay: '[jučer u] LT',
            lastWeek: function lastWeek() {
              switch (this.day()) {
                case 0:
                case 3:
                  return '[prošlu] dddd [u] LT';

                case 6:
                  return '[prošle] [subote] [u] LT';

                case 1:
                case 2:
                case 4:
                case 5:
                  return '[prošli] dddd [u] LT';
              }
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'za %s',
            past: 'prije %s',
            s: 'par sekundi',
            ss: translate,
            m: translate,
            mm: translate,
            h: translate,
            hh: translate,
            d: 'dan',
            dd: translate,
            M: 'mjesec',
            MM: translate,
            y: 'godinu',
            yy: translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return hr;
      });
      /***/

    },

    /***/
    "SFxW":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/az.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function SFxW(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var suffixes = {
          1: '-inci',
          5: '-inci',
          8: '-inci',
          70: '-inci',
          80: '-inci',
          2: '-nci',
          7: '-nci',
          20: '-nci',
          50: '-nci',
          3: '-üncü',
          4: '-üncü',
          100: '-üncü',
          6: '-ncı',
          9: '-uncu',
          10: '-uncu',
          30: '-uncu',
          60: '-ıncı',
          90: '-ıncı'
        };
        var az = moment.defineLocale('az', {
          months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
          monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
          weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
          weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
          weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[bugün saat] LT',
            nextDay: '[sabah saat] LT',
            nextWeek: '[gələn həftə] dddd [saat] LT',
            lastDay: '[dünən] LT',
            lastWeek: '[keçən həftə] dddd [saat] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s sonra',
            past: '%s əvvəl',
            s: 'birneçə saniyə',
            ss: '%d saniyə',
            m: 'bir dəqiqə',
            mm: '%d dəqiqə',
            h: 'bir saat',
            hh: '%d saat',
            d: 'bir gün',
            dd: '%d gün',
            M: 'bir ay',
            MM: '%d ay',
            y: 'bir il',
            yy: '%d il'
          },
          meridiemParse: /gecə|səhər|gündüz|axşam/,
          isPM: function isPM(input) {
            return /^(gündüz|axşam)$/.test(input);
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'gecə';
            } else if (hour < 12) {
              return 'səhər';
            } else if (hour < 17) {
              return 'gündüz';
            } else {
              return 'axşam';
            }
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
          ordinal: function ordinal(number) {
            if (number === 0) {
              // special case for zero
              return number + '-ıncı';
            }

            var a = number % 10,
                b = number % 100 - a,
                c = number >= 100 ? 100 : null;
            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return az;
      });
      /***/

    },

    /***/
    "SatO":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/zh-hk.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function SatO(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var zhHk = moment.defineLocale('zh-hk', {
          months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
          weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
          weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
          weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日dddd HH:mm',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm'
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
              return hour;
            } else if (meridiem === '中午') {
              return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === '下午' || meridiem === '晚上') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            var hm = hour * 100 + minute;

            if (hm < 600) {
              return '凌晨';
            } else if (hm < 900) {
              return '早上';
            } else if (hm < 1130) {
              return '上午';
            } else if (hm < 1230) {
              return '中午';
            } else if (hm < 1800) {
              return '下午';
            } else {
              return '晚上';
            }
          },
          calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: '[下]ddddLT',
            lastDay: '[昨天]LT',
            lastWeek: '[上]ddddLT',
            sameElse: 'L'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              case 'd':
              case 'D':
              case 'DDD':
                return number + '日';

              case 'M':
                return number + '月';

              case 'w':
              case 'W':
                return number + '週';

              default:
                return number;
            }
          },
          relativeTime: {
            future: '%s內',
            past: '%s前',
            s: '幾秒',
            ss: '%d 秒',
            m: '1 分鐘',
            mm: '%d 分鐘',
            h: '1 小時',
            hh: '%d 小時',
            d: '1 天',
            dd: '%d 天',
            M: '1 個月',
            MM: '%d 個月',
            y: '1 年',
            yy: '%d 年'
          }
        });
        return zhHk;
      });
      /***/

    },

    /***/
    "UDhR":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/id.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function UDhR(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var id = moment.defineLocale('id', {
          months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
          monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des'.split('_'),
          weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
          weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
          weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
          },
          meridiemParse: /pagi|siang|sore|malam/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'pagi') {
              return hour;
            } else if (meridiem === 'siang') {
              return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sore' || meridiem === 'malam') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hours, minutes, isLower) {
            if (hours < 11) {
              return 'pagi';
            } else if (hours < 15) {
              return 'siang';
            } else if (hours < 19) {
              return 'sore';
            } else {
              return 'malam';
            }
          },
          calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Besok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kemarin pukul] LT',
            lastWeek: 'dddd [lalu pukul] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'dalam %s',
            past: '%s yang lalu',
            s: 'beberapa detik',
            ss: '%d detik',
            m: 'semenit',
            mm: '%d menit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun'
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return id;
      });
      /***/

    },

    /***/
    "UpQW":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ur.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function UpQW(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var months = ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر'];
        var days = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
        var ur = moment.defineLocale('ur', {
          months: months,
          monthsShort: months,
          weekdays: days,
          weekdaysShort: days,
          weekdaysMin: days,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd، D MMMM YYYY HH:mm'
          },
          meridiemParse: /صبح|شام/,
          isPM: function isPM(input) {
            return 'شام' === input;
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 12) {
              return 'صبح';
            }

            return 'شام';
          },
          calendar: {
            sameDay: '[آج بوقت] LT',
            nextDay: '[کل بوقت] LT',
            nextWeek: 'dddd [بوقت] LT',
            lastDay: '[گذشتہ روز بوقت] LT',
            lastWeek: '[گذشتہ] dddd [بوقت] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s بعد',
            past: '%s قبل',
            s: 'چند سیکنڈ',
            ss: '%d سیکنڈ',
            m: 'ایک منٹ',
            mm: '%d منٹ',
            h: 'ایک گھنٹہ',
            hh: '%d گھنٹے',
            d: 'ایک دن',
            dd: '%d دن',
            M: 'ایک ماہ',
            MM: '%d ماہ',
            y: 'ایک سال',
            yy: '%d سال'
          },
          preparse: function preparse(string) {
            return string.replace(/،/g, ',');
          },
          postformat: function postformat(string) {
            return string.replace(/,/g, '،');
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return ur;
      });
      /***/

    },

    /***/
    "Ur1D":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ss.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function Ur1D(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var ss = moment.defineLocale('ss', {
          months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
          monthsShort: 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
          weekdays: 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
          weekdaysShort: 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
          weekdaysMin: 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A'
          },
          calendar: {
            sameDay: '[Namuhla nga] LT',
            nextDay: '[Kusasa nga] LT',
            nextWeek: 'dddd [nga] LT',
            lastDay: '[Itolo nga] LT',
            lastWeek: 'dddd [leliphelile] [nga] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'nga %s',
            past: 'wenteka nga %s',
            s: 'emizuzwana lomcane',
            ss: '%d mzuzwana',
            m: 'umzuzu',
            mm: '%d emizuzu',
            h: 'lihora',
            hh: '%d emahora',
            d: 'lilanga',
            dd: '%d emalanga',
            M: 'inyanga',
            MM: '%d tinyanga',
            y: 'umnyaka',
            yy: '%d iminyaka'
          },
          meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
          meridiem: function meridiem(hours, minutes, isLower) {
            if (hours < 11) {
              return 'ekuseni';
            } else if (hours < 15) {
              return 'emini';
            } else if (hours < 19) {
              return 'entsambama';
            } else {
              return 'ebusuku';
            }
          },
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'ekuseni') {
              return hour;
            } else if (meridiem === 'emini') {
              return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
              if (hour === 0) {
                return 0;
              }

              return hour + 12;
            }
          },
          dayOfMonthOrdinalParse: /\d{1,2}/,
          ordinal: '%d',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return ss;
      });
      /***/

    },

    /***/
    "V2x9":
    /*!*******************************************!*\
      !*** ./node_modules/moment/locale/tet.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function V2x9(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var tet = moment.defineLocale('tet', {
          months: 'Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru'.split('_'),
          monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
          weekdays: 'Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu'.split('_'),
          weekdaysShort: 'Dom_Seg_Ters_Kua_Kint_Sest_Sab'.split('_'),
          weekdaysMin: 'Do_Seg_Te_Ku_Ki_Ses_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Ohin iha] LT',
            nextDay: '[Aban iha] LT',
            nextWeek: 'dddd [iha] LT',
            lastDay: '[Horiseik iha] LT',
            lastWeek: 'dddd [semana kotuk] [iha] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'iha %s',
            past: '%s liuba',
            s: 'minutu balun',
            ss: 'minutu %d',
            m: 'minutu ida',
            mm: 'minutu %d',
            h: 'oras ida',
            hh: 'oras %d',
            d: 'loron ida',
            dd: 'loron %d',
            M: 'fulan ida',
            MM: 'fulan %d',
            y: 'tinan ida',
            yy: 'tinan %d'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function ordinal(number) {
            var b = number % 10,
                output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return tet;
      });
      /***/

    },

    /***/
    "Vclq":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/es-us.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function Vclq(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
            _monthsShort2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

        var esUs = moment.defineLocale('es-us', {
          months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
          monthsShort: function monthsShort(m, format) {
            if (!m) {
              return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
              return _monthsShort2[m.month()];
            } else {
              return monthsShortDot[m.month()];
            }
          },
          monthsParseExact: true,
          weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
          weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
          weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'MM/DD/YYYY',
            LL: 'MMMM [de] D [de] YYYY',
            LLL: 'MMMM [de] D [de] YYYY h:mm A',
            LLLL: 'dddd, MMMM [de] D [de] YYYY h:mm A'
          },
          calendar: {
            sameDay: function sameDay() {
              return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            nextDay: function nextDay() {
              return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            nextWeek: function nextWeek() {
              return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            lastDay: function lastDay() {
              return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            lastWeek: function lastWeek() {
              return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.

          }
        });
        return esUs;
      });
      /***/

    },

    /***/
    "WYrj":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/dv.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function WYrj(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var months = ['ޖެނުއަރީ', 'ފެބްރުއަރީ', 'މާރިޗު', 'އޭޕްރީލު', 'މޭ', 'ޖޫން', 'ޖުލައި', 'އޯގަސްޓު', 'ސެޕްޓެމްބަރު', 'އޮކްޓޯބަރު', 'ނޮވެމްބަރު', 'ޑިސެމްބަރު'],
            weekdays = ['އާދިއްތަ', 'ހޯމަ', 'އަންގާރަ', 'ބުދަ', 'ބުރާސްފަތި', 'ހުކުރު', 'ހޮނިހިރު'];
        var dv = moment.defineLocale('dv', {
          months: months,
          monthsShort: months,
          weekdays: weekdays,
          weekdaysShort: weekdays,
          weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'D/M/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          meridiemParse: /މކ|މފ/,
          isPM: function isPM(input) {
            return 'މފ' === input;
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 12) {
              return 'މކ';
            } else {
              return 'މފ';
            }
          },
          calendar: {
            sameDay: '[މިއަދު] LT',
            nextDay: '[މާދަމާ] LT',
            nextWeek: 'dddd LT',
            lastDay: '[އިއްޔެ] LT',
            lastWeek: '[ފާއިތުވި] dddd LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'ތެރޭގައި %s',
            past: 'ކުރިން %s',
            s: 'ސިކުންތުކޮޅެއް',
            ss: 'd% ސިކުންތު',
            m: 'މިނިޓެއް',
            mm: 'މިނިޓު %d',
            h: 'ގަޑިއިރެއް',
            hh: 'ގަޑިއިރު %d',
            d: 'ދުވަހެއް',
            dd: 'ދުވަސް %d',
            M: 'މަހެއް',
            MM: 'މަސް %d',
            y: 'އަހަރެއް',
            yy: 'އަހަރު %d'
          },
          preparse: function preparse(string) {
            return string.replace(/،/g, ',');
          },
          postformat: function postformat(string) {
            return string.replace(/,/g, '،');
          },
          week: {
            dow: 7,
            // Sunday is the first day of the week.
            doy: 12 // The week that contains Jan 12th is the first week of the year.

          }
        });
        return dv;
      });
      /***/

    },

    /***/
    "WxRl":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/hu.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function WxRl(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');

        function translate(number, withoutSuffix, key, isFuture) {
          var num = number;

          switch (key) {
            case 's':
              return isFuture || withoutSuffix ? 'néhány másodperc' : 'néhány másodperce';

            case 'ss':
              return num + (isFuture || withoutSuffix) ? ' másodperc' : ' másodperce';

            case 'm':
              return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');

            case 'mm':
              return num + (isFuture || withoutSuffix ? ' perc' : ' perce');

            case 'h':
              return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');

            case 'hh':
              return num + (isFuture || withoutSuffix ? ' óra' : ' órája');

            case 'd':
              return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');

            case 'dd':
              return num + (isFuture || withoutSuffix ? ' nap' : ' napja');

            case 'M':
              return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');

            case 'MM':
              return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');

            case 'y':
              return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');

            case 'yy':
              return num + (isFuture || withoutSuffix ? ' év' : ' éve');
          }

          return '';
        }

        function week(isFuture) {
          return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
        }

        var hu = moment.defineLocale('hu', {
          months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
          monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
          weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
          weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
          weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'YYYY.MM.DD.',
            LL: 'YYYY. MMMM D.',
            LLL: 'YYYY. MMMM D. H:mm',
            LLLL: 'YYYY. MMMM D., dddd H:mm'
          },
          meridiemParse: /de|du/i,
          isPM: function isPM(input) {
            return input.charAt(1).toLowerCase() === 'u';
          },
          meridiem: function meridiem(hours, minutes, isLower) {
            if (hours < 12) {
              return isLower === true ? 'de' : 'DE';
            } else {
              return isLower === true ? 'du' : 'DU';
            }
          },
          calendar: {
            sameDay: '[ma] LT[-kor]',
            nextDay: '[holnap] LT[-kor]',
            nextWeek: function nextWeek() {
              return week.call(this, true);
            },
            lastDay: '[tegnap] LT[-kor]',
            lastWeek: function lastWeek() {
              return week.call(this, false);
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s múlva',
            past: '%s',
            s: translate,
            ss: translate,
            m: translate,
            mm: translate,
            h: translate,
            hh: translate,
            d: translate,
            dd: translate,
            M: translate,
            MM: translate,
            y: translate,
            yy: translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return hu;
      });
      /***/

    },

    /***/
    "X709":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/sv.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function X709(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var sv = moment.defineLocale('sv', {
          months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
          monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
          weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
          weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
          weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd D MMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Idag] LT',
            nextDay: '[Imorgon] LT',
            lastDay: '[Igår] LT',
            nextWeek: '[På] dddd LT',
            lastWeek: '[I] dddd[s] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'om %s',
            past: 'för %s sedan',
            s: 'några sekunder',
            ss: '%d sekunder',
            m: 'en minut',
            mm: '%d minuter',
            h: 'en timme',
            hh: '%d timmar',
            d: 'en dag',
            dd: '%d dagar',
            M: 'en månad',
            MM: '%d månader',
            y: 'ett år',
            yy: '%d år'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
          ordinal: function ordinal(number) {
            var b = number % 10,
                output = ~~(number % 100 / 10) === 1 ? 'e' : b === 1 ? 'a' : b === 2 ? 'a' : b === 3 ? 'e' : 'e';
            return number + output;
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return sv;
      });
      /***/

    },

    /***/
    "XDpg":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/zh-cn.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function XDpg(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var zhCn = moment.defineLocale('zh-cn', {
          months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
          weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
          weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
          weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日Ah点mm分',
            LLLL: 'YYYY年M月D日ddddAh点mm分',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm'
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
              return hour;
            } else if (meridiem === '下午' || meridiem === '晚上') {
              return hour + 12;
            } else {
              // '中午'
              return hour >= 11 ? hour : hour + 12;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            var hm = hour * 100 + minute;

            if (hm < 600) {
              return '凌晨';
            } else if (hm < 900) {
              return '早上';
            } else if (hm < 1130) {
              return '上午';
            } else if (hm < 1230) {
              return '中午';
            } else if (hm < 1800) {
              return '下午';
            } else {
              return '晚上';
            }
          },
          calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek: '[下]ddddLT',
            lastDay: '[昨天]LT',
            lastWeek: '[上]ddddLT',
            sameElse: 'L'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              case 'd':
              case 'D':
              case 'DDD':
                return number + '日';

              case 'M':
                return number + '月';

              case 'w':
              case 'W':
                return number + '周';

              default:
                return number;
            }
          },
          relativeTime: {
            future: '%s内',
            past: '%s前',
            s: '几秒',
            ss: '%d 秒',
            m: '1 分钟',
            mm: '%d 分钟',
            h: '1 小时',
            hh: '%d 小时',
            d: '1 天',
            dd: '%d 天',
            M: '1 个月',
            MM: '%d 个月',
            y: '1 年',
            yy: '%d 年'
          },
          week: {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return zhCn;
      });
      /***/

    },

    /***/
    "XLvN":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/te.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function XLvN(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var te = moment.defineLocale('te', {
          months: 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
          monthsShort: 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
          monthsParseExact: true,
          weekdays: 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
          weekdaysShort: 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
          weekdaysMin: 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
          longDateFormat: {
            LT: 'A h:mm',
            LTS: 'A h:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm',
            LLLL: 'dddd, D MMMM YYYY, A h:mm'
          },
          calendar: {
            sameDay: '[నేడు] LT',
            nextDay: '[రేపు] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[నిన్న] LT',
            lastWeek: '[గత] dddd, LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s లో',
            past: '%s క్రితం',
            s: 'కొన్ని క్షణాలు',
            ss: '%d సెకన్లు',
            m: 'ఒక నిమిషం',
            mm: '%d నిమిషాలు',
            h: 'ఒక గంట',
            hh: '%d గంటలు',
            d: 'ఒక రోజు',
            dd: '%d రోజులు',
            M: 'ఒక నెల',
            MM: '%d నెలలు',
            y: 'ఒక సంవత్సరం',
            yy: '%d సంవత్సరాలు'
          },
          dayOfMonthOrdinalParse: /\d{1,2}వ/,
          ordinal: '%dవ',
          meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'రాత్రి') {
              return hour < 4 ? hour : hour + 12;
            } else if (meridiem === 'ఉదయం') {
              return hour;
            } else if (meridiem === 'మధ్యాహ్నం') {
              return hour >= 10 ? hour : hour + 12;
            } else if (meridiem === 'సాయంత్రం') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'రాత్రి';
            } else if (hour < 10) {
              return 'ఉదయం';
            } else if (hour < 17) {
              return 'మధ్యాహ్నం';
            } else if (hour < 20) {
              return 'సాయంత్రం';
            } else {
              return 'రాత్రి';
            }
          },
          week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.

          }
        });
        return te;
      });
      /***/

    },

    /***/
    "YB0G":
    /*!******************************************************************************************************!*\
      !*** ./dist/mosaic-moment-adapter/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-moment-adapter-adapter.js ***!
      \******************************************************************************************************/

    /*! exports provided: DeprecatedMethod, MC_MOMENT_DATE_ADAPTER_OPTIONS, MC_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY, MC_MOMENT_DATE_FORMATS, McMomentDateModule, MomentDateAdapter, MomentDateModule, ɵ0 */

    /***/
    function YB0G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeprecatedMethod", function () {
        return DeprecatedMethod;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_MOMENT_DATE_ADAPTER_OPTIONS", function () {
        return MC_MOMENT_DATE_ADAPTER_OPTIONS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY", function () {
        return MC_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_MOMENT_DATE_FORMATS", function () {
        return MC_MOMENT_DATE_FORMATS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McMomentDateModule", function () {
        return McMomentDateModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MomentDateAdapter", function () {
        return MomentDateAdapter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MomentDateModule", function () {
        return MomentDateModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
        return ɵ0;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ptsecurity/cdk/datetime */
      "Vue8");
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

      var enUS = {
        variables: {
          SECONDS: 's',
          MILLISECONDS: '.SSS',
          MICROSECONDS: '.SSSSSS',
          MINUTES: 'm',
          TIME: 'HH:mm',
          DAY: 'D',
          MONTH: 'MMM',
          YEAR: 'YYYY',
          DATE: "MMMM\xA0D",
          SHORT_DATE: "MMM\xA0D",
          DASH: "\u2013",
          LONG_DASH: "\u202F\u2013\u2009",
          NBSP: "\xA0"
        },
        monthNames: {
          "long": ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          "short": {
            standalone: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            formatted: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
          },
          narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
        },
        dayOfWeekNames: {
          "long": ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          "short": ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
        },
        firstDayOfWeek: 0
      };
      var ruRU = {
        variables: {
          SECONDS: 's',
          MILLISECONDS: ',SSS',
          MICROSECONDS: ',SSSSSS',
          MINUTES: 'm',
          TIME: 'HH:mm',
          DAY: 'D',
          MONTH: 'MMM',
          YEAR: 'YYYY',
          DATE: "D\xA0MMMM",
          SHORT_DATE: "D\xA0MMM",
          DASH: "\u2013",
          LONG_DASH: "\u202F\u2014\u2009",
          NBSP: "\xA0"
        },
        monthNames: {
          "long": ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
          "short": {
            standalone: ['янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'],
            formatted: ['янв', 'фев', 'мар', 'апр', 'мая', 'июня', 'июля', 'авг', 'сен', 'окт', 'ноя', 'дек']
          },
          narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д']
        },
        dayOfWeekNames: {
          "long": ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
          "short": ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
          narrow: ['В', 'П', 'В', 'С', 'Ч', 'П', 'С']
        },
        firstDayOfWeek: 1
      };
      var moment = moment__WEBPACK_IMPORTED_MODULE_4___default.a || moment__WEBPACK_IMPORTED_MODULE_4__;
      /** InjectionToken for moment date adapter to configure options. */

      var MC_MOMENT_DATE_ADAPTER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MC_MOMENT_DATE_ADAPTER_OPTIONS', {
        providedIn: 'root',
        factory: MC_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY
      });
      /** @docs-private */
      // tslint:disable:naming-convention

      function MC_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY() {
        return {
          useUtc: false,
          findDateFormat: false
        };
      }
      /** Creates an array and fills it with values. */


      function range(length, valueFunction) {
        var valuesArray = Array(length);

        for (var i = 0; i < length; i++) {
          valuesArray[i] = valueFunction(i);
        }

        return valuesArray;
      } // @ts-ignore


      function DeprecatedMethod(target, key, descriptor) {
        var origin = descriptor.value; // tslint:disable-next-line:no-function-expression only-arrow-functions

        descriptor.value = function () {
          console.warn("Found use of deprecated method ".concat(key, ", it was moved in DateFormatter. ") + "The deprecated method will be removed in 13.0.0.");

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return origin.apply(this, args);
        };

        return descriptor;
      }

      var MomentDateAdapter = /*#__PURE__*/function (_ptsecurity_cdk_datet) {
        _inherits(MomentDateAdapter, _ptsecurity_cdk_datet);

        var _super = _createSuper(MomentDateAdapter);

        function MomentDateAdapter(dateLocale, options) {
          var _this;

          _classCallCheck(this, MomentDateAdapter);

          _this = _super.call(this);
          _this.options = options;
          _this.firstMonth = 0;

          _this.setLocale(dateLocale || moment.locale());

          return _this;
        }

        _createClass(MomentDateAdapter, [{
          key: "lastMonth",
          get: function get() {
            // tslint:disable-next-line:binary-expression-operand-order no-magic-numbers
            return 11 + this.firstMonth;
          }
        }, {
          key: "setLocale",
          value: function setLocale(locale) {
            var _this2 = this;

            _get(_getPrototypeOf(MomentDateAdapter.prototype), "setLocale", this).call(this, locale);

            this.dateFormatter = new _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_3__["DateFormatter"](this, locale);
            this.config = locale === 'en' ? enUS : ruRU;
            var momentLocaleData = moment.localeData(locale); // This is our customs translations

            var i18nLocals = ['en', 'ru'];

            if (i18nLocals.indexOf(locale) !== -1) {
              momentLocaleData = moment.updateLocale(locale, {
                monthsShort: {
                  format: this.config.monthNames["short"].formatted,
                  standalone: this.config.monthNames["short"].standalone
                },
                weekdaysShort: this.config.dayOfWeekNames["short"],
                weekdays: this.config.dayOfWeekNames["long"]
              });
            }

            this.localeData = {
              firstDayOfWeek: this.config.firstDayOfWeek,
              longMonths: momentLocaleData.months(),
              shortMonths: momentLocaleData.monthsShort(),
              dates: range(31, function (i) {
                return _this2.createDate(2017, _this2.firstMonth, i + 1).format('D');
              }),
              longDaysOfWeek: momentLocaleData.weekdays(),
              shortDaysOfWeek: momentLocaleData.weekdaysShort(),
              narrowDaysOfWeek: momentLocaleData.weekdaysMin()
            };
          }
        }, {
          key: "getLocaleData",
          value: function getLocaleData() {
            return this.localeData;
          }
        }, {
          key: "setLocaleData",
          value: function setLocaleData(localeData) {
            this.localeData = localeData;
          }
        }, {
          key: "updateLocaleData",
          value: function updateLocaleData(localeData) {
            this.localeData = Object.assign(Object.assign({}, this.localeData), localeData);
          }
        }, {
          key: "getYear",
          value: function getYear(date) {
            return this.clone(date).year();
          }
        }, {
          key: "getMonth",
          value: function getMonth(date) {
            return this.clone(date).month();
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            return this.clone(date).date();
          }
        }, {
          key: "getHours",
          value: function getHours(date) {
            return this.clone(date).hours();
          }
        }, {
          key: "getMinutes",
          value: function getMinutes(date) {
            return this.clone(date).minutes();
          }
        }, {
          key: "getSeconds",
          value: function getSeconds(date) {
            return this.clone(date).seconds();
          }
        }, {
          key: "getMilliseconds",
          value: function getMilliseconds(date) {
            return this.clone(date).milliseconds();
          }
        }, {
          key: "getTime",
          value: function getTime(date) {
            return date.valueOf();
          }
        }, {
          key: "getDayOfWeek",
          value: function getDayOfWeek(date) {
            return this.clone(date).day();
          }
        }, {
          key: "getMonthNames",
          value: function getMonthNames(style) {
            // Moment.js doesn't support narrow month names
            return style === 'long' ? this.localeData.longMonths : this.localeData.shortMonths;
          }
        }, {
          key: "getDateNames",
          value: function getDateNames() {
            return this.localeData.dates;
          }
        }, {
          key: "getDayOfWeekNames",
          value: function getDayOfWeekNames(style) {
            if (style === 'long') {
              return this.localeData.longDaysOfWeek;
            }

            if (style === 'short') {
              return this.localeData.shortDaysOfWeek;
            }

            return this.localeData.narrowDaysOfWeek;
          }
        }, {
          key: "getYearName",
          value: function getYearName(date) {
            return this.clone(date).format('YYYY');
          }
        }, {
          key: "getFirstDayOfWeek",
          value: function getFirstDayOfWeek() {
            return this.localeData.firstDayOfWeek;
          }
        }, {
          key: "getNumDaysInMonth",
          value: function getNumDaysInMonth(date) {
            return this.clone(date).daysInMonth();
          }
        }, {
          key: "clone",
          value: function clone(date) {
            return date.clone().locale(this.locale);
          }
        }, {
          key: "createDate",
          value: function createDate(year) {
            var month = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

            // Moment.js will create an invalid date if any of the components are out of bounds, but we
            // explicitly check each case so we can throw more descriptive errors.
            if (month < this.firstMonth || month > this.lastMonth) {
              throw Error("Invalid month index \"".concat(month, "\".\n                Month index has to be between ").concat(this.firstMonth, " and ").concat(this.lastMonth, "."));
            }

            if (date < 1) {
              throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
            }

            var result = this.createMoment({
              year: year,
              month: month,
              date: date
            }).locale(this.locale); // If the result isn't valid, the date must have been out of bounds for this month.

            if (!result.isValid()) {
              throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
            }

            return result;
          }
        }, {
          key: "createDateTime",
          value: function createDateTime(year, month, date, hours, minutes, seconds, milliseconds) {
            var newDate = this.createDate(year, month, date);
            newDate.hours(hours);
            newDate.minutes(minutes);
            newDate.seconds(seconds);
            newDate.milliseconds(milliseconds);
            return newDate;
          }
        }, {
          key: "today",
          value: function today() {
            return this.createMoment().locale(this.locale);
          }
        }, {
          key: "parse",
          value: function parse(value, parseFormat) {
            if (value) {
              if (typeof value === 'string') {
                if (this.options && this.options.findDateFormat) {
                  return this.findFormat(value);
                }

                return parseFormat ? this.createMoment(value, parseFormat, this.locale) : this.createMoment(value).locale(this.locale);
              }

              return this.createMoment(value).locale(this.locale);
            }

            return null;
          }
        }, {
          key: "format",
          value: function format(date, displayFormat) {
            // tslint:disable:no-parameter-reassignment
            date = this.clone(date);

            if (!this.isValid(date)) {
              throw Error('MomentDateAdapter: Cannot format invalid date.');
            }

            return date.format(displayFormat);
          }
        }, {
          key: "addCalendarYears",
          value: function addCalendarYears(date, years) {
            return this.clone(date).add({
              years: years
            });
          }
        }, {
          key: "addCalendarMonths",
          value: function addCalendarMonths(date, months) {
            return this.clone(date).add({
              months: months
            });
          }
        }, {
          key: "addCalendarDays",
          value: function addCalendarDays(date, days) {
            return this.clone(date).add({
              days: days
            });
          }
        }, {
          key: "toIso8601",
          value: function toIso8601(date) {
            return this.clone(date).format();
          }
          /** https://www.ietf.org/rfc/rfc3339.txt */

        }, {
          key: "deserialize",
          value: function deserialize(value) {
            var date;

            if (value instanceof Date) {
              date = this.createMoment(value).locale(this.locale);
            } else if (this.isDateInstance(value)) {
              // Note: assumes that cloning also sets the correct locale.
              return this.clone(value);
            }

            if (typeof value === 'string') {
              if (!value) {
                return null;
              }

              date = this.createMoment(value, moment.ISO_8601).locale(this.locale);
            }

            if (date && this.isValid(date)) {
              return this.createMoment(date).locale(this.locale);
            }

            return _get(_getPrototypeOf(MomentDateAdapter.prototype), "deserialize", this).call(this, value);
          }
        }, {
          key: "isDateInstance",
          value: function isDateInstance(obj) {
            return moment.isMoment(obj);
          }
        }, {
          key: "isValid",
          value: function isValid(date) {
            return this.clone(date).isValid();
          }
        }, {
          key: "invalid",
          value: function invalid() {
            return moment.invalid();
          }
        }, {
          key: "hasSame",
          value: function hasSame(startDate, endDate, unit) {
            return startDate.isSame(endDate, unit);
          }
        }, {
          key: "diffNow",
          value: function diffNow(date, unit) {
            return date.diff(this.today(), unit);
          }
        }, {
          key: "absoluteDate",
          value: function absoluteDate(date, params, datetime, milliseconds) {
            return this.dateFormatter.absoluteDate(date, params, datetime, milliseconds);
          }
        }, {
          key: "absoluteLongDate",
          value: function absoluteLongDate(date) {
            return this.dateFormatter.absoluteLongDate(date);
          }
        }, {
          key: "absoluteLongDateTime",
          value: function absoluteLongDateTime(date, options) {
            return this.dateFormatter.absoluteLongDateTime(date, options);
          }
        }, {
          key: "absoluteShortDate",
          value: function absoluteShortDate(date) {
            return this.dateFormatter.absoluteShortDate(date);
          }
        }, {
          key: "absoluteShortDateTime",
          value: function absoluteShortDateTime(date, options) {
            return this.dateFormatter.absoluteShortDateTime(date, options);
          }
        }, {
          key: "openedRangeDate",
          value: function openedRangeDate(startDate, endDate, template) {
            return this.dateFormatter.openedRangeDate(startDate, endDate, template);
          }
        }, {
          key: "openedRangeDateTime",
          value: function openedRangeDateTime(startDate, endDate, template) {
            return this.dateFormatter.openedRangeDateTime(startDate, endDate, template);
          }
        }, {
          key: "rangeDate",
          value: function rangeDate(startDate, endDate, template) {
            return this.dateFormatter.rangeDate(startDate, endDate, template);
          }
        }, {
          key: "rangeDateTime",
          value: function rangeDateTime(startDate, endDate, template) {
            return this.dateFormatter.rangeDateTime(startDate, endDate, template);
          }
        }, {
          key: "rangeLongDate",
          value: function rangeLongDate(startDate, endDate) {
            return this.dateFormatter.rangeLongDate(startDate, endDate);
          }
        }, {
          key: "rangeLongDateTime",
          value: function rangeLongDateTime(startDate, endDate) {
            return this.dateFormatter.rangeLongDateTime(startDate, endDate);
          }
        }, {
          key: "rangeMiddleDateTime",
          value: function rangeMiddleDateTime(startDate, endDate) {
            return this.dateFormatter.rangeMiddleDateTime(startDate, endDate);
          }
        }, {
          key: "rangeShortDate",
          value: function rangeShortDate(startDate, endDate) {
            return this.dateFormatter.rangeShortDate(startDate, endDate);
          }
        }, {
          key: "rangeShortDateTime",
          value: function rangeShortDateTime(startDate, endDate) {
            return this.dateFormatter.rangeShortDateTime(startDate, endDate);
          }
        }, {
          key: "relativeDate",
          value: function relativeDate(date, template) {
            return this.dateFormatter.relativeDate(date, template);
          }
        }, {
          key: "relativeLongDate",
          value: function relativeLongDate(date) {
            return this.dateFormatter.relativeLongDate(date);
          }
        }, {
          key: "relativeShortDate",
          value: function relativeShortDate(date) {
            return this.dateFormatter.relativeShortDate(date);
          }
          /** Creates a Moment instance while respecting the current UTC settings. */

        }, {
          key: "createMoment",
          value: function createMoment() {
            var _a;

            return ((_a = this.options) === null || _a === void 0 ? void 0 : _a.useUtc) ? moment.utc.apply(moment, arguments) : moment.apply(void 0, arguments);
          }
        }, {
          key: "isNumeric",
          value: function isNumeric(value) {
            return !isNaN(parseFloat(value)) && isFinite(value);
          }
        }, {
          key: "findFormat",
          value: function findFormat(value) {
            if (!value) {
              return null;
            } // default test - iso


            var isoDate = this.createMoment(value, moment.ISO_8601, this.locale);

            if (isoDate.isValid()) {
              return isoDate;
            }

            if (this.isNumeric(value)) {
              // unix time sec
              return this.createMoment(value, 'X', this.locale);
            } // long months naming: D MMM YYYY, MMM Do YYYY with short case support


            if (/^\d{1,2}\s\S+\s(\d{2}|\d{4})$/.test(value.trim()) || /^\S+\s\d{1,2}[a-z]{2}\s(\d{2}|\d{4})$/.test(value.trim())) {
              return this.parseWithSpace(value);
            } // slash notation: DD/MM/YYYY, MM/DD/YYYY with short case support


            if (/^\d{1,2}\/\d{1,2}\/(\d{2}|\d{4})$/.test(value)) {
              return this.parseWithSlash(value);
            } // dash notation: DD-MM-YYYY, YYYY-DD-MM with short case support


            if (/(^(\d{1,2}|\d{4})-\d{1,2}-\d{1,2}$)|(^\d{1,2}-\d{1,2}-(\d{2}|\d{4})$)/.test(value)) {
              return this.parseWithDash(value);
            } // dot notation: DD.MM.YYYY with short case support


            if (/^\d{1,2}\.\d{1,2}\.(\d{2}|\d{4})$/.test(value)) {
              return this.parseWithDot(value);
            }

            return null;
          }
        }, {
          key: "parseWithSpace",
          value: function parseWithSpace(value) {
            switch (this.locale) {
              case 'ru':
                return this.createMoment(value, 'DD MMMM YYYY', this.locale);

              case 'en':
                // 16 Feb 2019 vs Feb 16th 2019, covers Feb and February cases
                if (this.isNumeric(value[0])) {
                  return this.createMoment(value, 'D MMMM YYYY', this.locale);
                }

                return this.createMoment(value, 'MMMM Do YYYY', this.locale);

              default:
                throw new Error("Locale ".concat(this.locale, " is not supported"));
            }
          }
        }, {
          key: "parseWithSlash",
          value: function parseWithSlash(value) {
            switch (this.locale) {
              case 'ru':
                return this.createMoment(value, 'DD/MM/YYYY', this.locale);
              // todo do we use generalized locales? en vs en-US; until not we try to guess

              case 'en':
                // US vs UK
                var parts = value.split('/');
                var datePartsCount = 3;

                if (parts.length !== datePartsCount) {
                  return null;
                }

                var firstPart = parts[0].trim();
                var secondPart = parts[1].trim();

                if (!this.isNumeric(firstPart) || !this.isNumeric(secondPart)) {
                  return null;
                }

                var monthsInYears = 12;
                var canFirstBeMonth = +firstPart <= monthsInYears;
                var canSecondByMonth = +secondPart <= monthsInYears; // first two parts cannot be month

                if (!canFirstBeMonth && !canSecondByMonth) {
                  return null;
                }

                var canDetermineWhereMonth = canFirstBeMonth && canSecondByMonth; // use US format by default

                if (canDetermineWhereMonth) {
                  return this.createMoment(value, 'MM/DD/YYYY', this.locale);
                }

                return canFirstBeMonth && !canSecondByMonth ? this.createMoment(value, 'MM/DD/YYYY', this.locale) : this.createMoment(value, 'DD/MM/YYYY', this.locale);

              default:
                throw new Error("Locale ".concat(this.locale, " is not supported"));
            }
          }
        }, {
          key: "parseWithDash",
          value: function parseWithDash(value) {
            // leading year vs finishing year
            var parts = value.split('-');

            if (parts[0].length === 0) {
              return null;
            }

            var maxDayOrMonthCharsCount = 2;
            return parts[0].length <= maxDayOrMonthCharsCount ? this.createMoment(value, 'DD-MM-YYYY', this.locale) : this.createMoment(value, 'YYYY-MM-DD', this.locale);
          }
        }, {
          key: "parseWithDot",
          value: function parseWithDot(value) {
            // covers two cases YYYY and YY (for current year)
            return this.createMoment(value, 'DD.MM.YYYY', this.locale);
          }
        }]);

        return MomentDateAdapter;
      }(_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"]);

      MomentDateAdapter.ɵfac = function MomentDateAdapter_Factory(t) {
        return new (t || MomentDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_1__["MC_DATE_LOCALE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MC_MOMENT_DATE_ADAPTER_OPTIONS, 8));
      };

      MomentDateAdapter.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MomentDateAdapter,
        factory: MomentDateAdapter.ɵfac
      });
      /** @nocollapse */

      MomentDateAdapter.ctorParameters = function () {
        return [{
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_1__["MC_DATE_LOCALE"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MC_MOMENT_DATE_ADAPTER_OPTIONS]
          }]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object, Boolean, Boolean]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "absoluteDate", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "absoluteLongDate", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "absoluteLongDateTime", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "absoluteShortDate", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "absoluteShortDateTime", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object, Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "openedRangeDate", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object, Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "openedRangeDateTime", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object, Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "rangeDate", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object, Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "rangeDateTime", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "rangeLongDate", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "rangeLongDateTime", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "rangeMiddleDateTime", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "rangeShortDate", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "rangeShortDateTime", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object, Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "relativeDate", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "relativeLongDate", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([DeprecatedMethod, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:returntype", String)], MomentDateAdapter.prototype, "relativeShortDate", null);

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MomentDateAdapter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_1__["MC_DATE_LOCALE"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [MC_MOMENT_DATE_ADAPTER_OPTIONS]
            }]
          }];
        }, null);
      })();

      var MC_MOMENT_DATE_FORMATS = {
        dateInput: 'DD.MM.YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
      };

      var MomentDateModule = function MomentDateModule() {
        _classCallCheck(this, MomentDateModule);
      };

      MomentDateModule.ɵfac = function MomentDateModule_Factory(t) {
        return new (t || MomentDateModule)();
      };

      MomentDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MomentDateModule
      });
      MomentDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [{
          provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
          useClass: MomentDateAdapter,
          deps: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_1__["MC_DATE_LOCALE"], MC_MOMENT_DATE_ADAPTER_OPTIONS]
        }]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MomentDateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [{
              provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
              useClass: MomentDateAdapter,
              deps: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_1__["MC_DATE_LOCALE"], MC_MOMENT_DATE_ADAPTER_OPTIONS]
            }]
          }]
        }], null, null);
      })();

      var ɵ0 = MC_MOMENT_DATE_FORMATS;

      var McMomentDateModule = function McMomentDateModule() {
        _classCallCheck(this, McMomentDateModule);
      };

      McMomentDateModule.ɵfac = function McMomentDateModule_Factory(t) {
        return new (t || McMomentDateModule)();
      };

      McMomentDateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: McMomentDateModule
      });
      McMomentDateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [{
          provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_1__["MC_DATE_FORMATS"],
          useValue: ɵ0
        }],
        imports: [[MomentDateModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](McMomentDateModule, {
          imports: [MomentDateModule]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](McMomentDateModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MomentDateModule],
            providers: [{
              provide: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_1__["MC_DATE_FORMATS"],
              useValue: ɵ0
            }]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "YRex":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/ug-cn.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function YRex(module, exports, __webpack_require__) {
      //! moment.js language configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var ugCn = moment.defineLocale('ug-cn', {
          months: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
          monthsShort: 'يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر'.split('_'),
          weekdays: 'يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە'.split('_'),
          weekdaysShort: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
          weekdaysMin: 'يە_دۈ_سە_چا_پە_جۈ_شە'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY-يىلىM-ئاينىڭD-كۈنى',
            LLL: 'YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm',
            LLLL: 'dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm'
          },
          meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'يېرىم كېچە' || meridiem === 'سەھەر' || meridiem === 'چۈشتىن بۇرۇن') {
              return hour;
            } else if (meridiem === 'چۈشتىن كېيىن' || meridiem === 'كەچ') {
              return hour + 12;
            } else {
              return hour >= 11 ? hour : hour + 12;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            var hm = hour * 100 + minute;

            if (hm < 600) {
              return 'يېرىم كېچە';
            } else if (hm < 900) {
              return 'سەھەر';
            } else if (hm < 1130) {
              return 'چۈشتىن بۇرۇن';
            } else if (hm < 1230) {
              return 'چۈش';
            } else if (hm < 1800) {
              return 'چۈشتىن كېيىن';
            } else {
              return 'كەچ';
            }
          },
          calendar: {
            sameDay: '[بۈگۈن سائەت] LT',
            nextDay: '[ئەتە سائەت] LT',
            nextWeek: '[كېلەركى] dddd [سائەت] LT',
            lastDay: '[تۆنۈگۈن] LT',
            lastWeek: '[ئالدىنقى] dddd [سائەت] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s كېيىن',
            past: '%s بۇرۇن',
            s: 'نەچچە سېكونت',
            ss: '%d سېكونت',
            m: 'بىر مىنۇت',
            mm: '%d مىنۇت',
            h: 'بىر سائەت',
            hh: '%d سائەت',
            d: 'بىر كۈن',
            dd: '%d كۈن',
            M: 'بىر ئاي',
            MM: '%d ئاي',
            y: 'بىر يىل',
            yy: '%d يىل'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              case 'd':
              case 'D':
              case 'DDD':
                return number + '-كۈنى';

              case 'w':
              case 'W':
                return number + '-ھەپتە';

              default:
                return number;
            }
          },
          preparse: function preparse(string) {
            return string.replace(/،/g, ',');
          },
          postformat: function postformat(string) {
            return string.replace(/,/g, '،');
          },
          week: {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 1st is the first week of the year.

          }
        });
        return ugCn;
      });
      /***/

    },

    /***/
    "YuTi":
    /*!***********************************!*\
      !*** (webpack)/buildin/module.js ***!
      \***********************************/

    /*! no static exports found */

    /***/
    function YuTi(module, exports) {
      module.exports = function (module) {
        if (!module.webpackPolyfill) {
          module.deprecate = function () {};

          module.paths = []; // module.parent = undefined by default

          if (!module.children) module.children = [];
          Object.defineProperty(module, "loaded", {
            enumerable: true,
            get: function get() {
              return module.l;
            }
          });
          Object.defineProperty(module, "id", {
            enumerable: true,
            get: function get() {
              return module.i;
            }
          });
          module.webpackPolyfill = 1;
        }

        return module;
      };
      /***/

    },

    /***/
    "Z4QM":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/sd.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function Z4QM(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var months = ['جنوري', 'فيبروري', 'مارچ', 'اپريل', 'مئي', 'جون', 'جولاءِ', 'آگسٽ', 'سيپٽمبر', 'آڪٽوبر', 'نومبر', 'ڊسمبر'];
        var days = ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'];
        var sd = moment.defineLocale('sd', {
          months: months,
          monthsShort: months,
          weekdays: days,
          weekdaysShort: days,
          weekdaysMin: days,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd، D MMMM YYYY HH:mm'
          },
          meridiemParse: /صبح|شام/,
          isPM: function isPM(input) {
            return 'شام' === input;
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 12) {
              return 'صبح';
            }

            return 'شام';
          },
          calendar: {
            sameDay: '[اڄ] LT',
            nextDay: '[سڀاڻي] LT',
            nextWeek: 'dddd [اڳين هفتي تي] LT',
            lastDay: '[ڪالهه] LT',
            lastWeek: '[گزريل هفتي] dddd [تي] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s پوء',
            past: '%s اڳ',
            s: 'چند سيڪنڊ',
            ss: '%d سيڪنڊ',
            m: 'هڪ منٽ',
            mm: '%d منٽ',
            h: 'هڪ ڪلاڪ',
            hh: '%d ڪلاڪ',
            d: 'هڪ ڏينهن',
            dd: '%d ڏينهن',
            M: 'هڪ مهينو',
            MM: '%d مهينا',
            y: 'هڪ سال',
            yy: '%d سال'
          },
          preparse: function preparse(string) {
            return string.replace(/،/g, ',');
          },
          postformat: function postformat(string) {
            return string.replace(/,/g, '،');
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return sd;
      });
      /***/

    },

    /***/
    "ZAMP":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/ms-my.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function ZAMP(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var msMy = moment.defineLocale('ms-my', {
          months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
          monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
          weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
          weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
          weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
          },
          meridiemParse: /pagi|tengahari|petang|malam/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'pagi') {
              return hour;
            } else if (meridiem === 'tengahari') {
              return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'petang' || meridiem === 'malam') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hours, minutes, isLower) {
            if (hours < 11) {
              return 'pagi';
            } else if (hours < 15) {
              return 'tengahari';
            } else if (hours < 19) {
              return 'petang';
            } else {
              return 'malam';
            }
          },
          calendar: {
            sameDay: '[Hari ini pukul] LT',
            nextDay: '[Esok pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kelmarin pukul] LT',
            lastWeek: 'dddd [lepas pukul] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'dalam %s',
            past: '%s yang lepas',
            s: 'beberapa saat',
            ss: '%d saat',
            m: 'seminit',
            mm: '%d minit',
            h: 'sejam',
            hh: '%d jam',
            d: 'sehari',
            dd: '%d hari',
            M: 'sebulan',
            MM: '%d bulan',
            y: 'setahun',
            yy: '%d tahun'
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return msMy;
      });
      /***/

    },

    /***/
    "Zduo":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/eo.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function Zduo(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var eo = moment.defineLocale('eo', {
          months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
          monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
          weekdays: 'dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato'.split('_'),
          weekdaysShort: 'dim_lun_mard_merk_ĵaŭ_ven_sab'.split('_'),
          weekdaysMin: 'di_lu_ma_me_ĵa_ve_sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'D[-a de] MMMM, YYYY',
            LLL: 'D[-a de] MMMM, YYYY HH:mm',
            LLLL: 'dddd, [la] D[-a de] MMMM, YYYY HH:mm'
          },
          meridiemParse: /[ap]\.t\.m/i,
          isPM: function isPM(input) {
            return input.charAt(0).toLowerCase() === 'p';
          },
          meridiem: function meridiem(hours, minutes, isLower) {
            if (hours > 11) {
              return isLower ? 'p.t.m.' : 'P.T.M.';
            } else {
              return isLower ? 'a.t.m.' : 'A.T.M.';
            }
          },
          calendar: {
            sameDay: '[Hodiaŭ je] LT',
            nextDay: '[Morgaŭ je] LT',
            nextWeek: 'dddd [je] LT',
            lastDay: '[Hieraŭ je] LT',
            lastWeek: '[pasinta] dddd [je] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'post %s',
            past: 'antaŭ %s',
            s: 'sekundoj',
            ss: '%d sekundoj',
            m: 'minuto',
            mm: '%d minutoj',
            h: 'horo',
            hh: '%d horoj',
            d: 'tago',
            //ne 'diurno', ĉar estas uzita por proksimumo
            dd: '%d tagoj',
            M: 'monato',
            MM: '%d monatoj',
            y: 'jaro',
            yy: '%d jaroj'
          },
          dayOfMonthOrdinalParse: /\d{1,2}a/,
          ordinal: '%da',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return eo;
      });
      /***/

    },

    /***/
    "aIdf":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/br.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function aIdf(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function relativeTimeWithMutation(number, withoutSuffix, key) {
          var format = {
            'mm': 'munutenn',
            'MM': 'miz',
            'dd': 'devezh'
          };
          return number + ' ' + mutation(format[key], number);
        }

        function specialMutationForYears(number) {
          switch (lastNumber(number)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
              return number + ' bloaz';

            default:
              return number + ' vloaz';
          }
        }

        function lastNumber(number) {
          if (number > 9) {
            return lastNumber(number % 10);
          }

          return number;
        }

        function mutation(text, number) {
          if (number === 2) {
            return softMutation(text);
          }

          return text;
        }

        function softMutation(text) {
          var mutationTable = {
            'm': 'v',
            'b': 'v',
            'd': 'z'
          };

          if (mutationTable[text.charAt(0)] === undefined) {
            return text;
          }

          return mutationTable[text.charAt(0)] + text.substring(1);
        }

        var br = moment.defineLocale('br', {
          months: 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
          monthsShort: 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
          weekdays: 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
          weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
          weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'h[e]mm A',
            LTS: 'h[e]mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D [a viz] MMMM YYYY',
            LLL: 'D [a viz] MMMM YYYY h[e]mm A',
            LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A'
          },
          calendar: {
            sameDay: '[Hiziv da] LT',
            nextDay: '[Warc\'hoazh da] LT',
            nextWeek: 'dddd [da] LT',
            lastDay: '[Dec\'h da] LT',
            lastWeek: 'dddd [paset da] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'a-benn %s',
            past: '%s \'zo',
            s: 'un nebeud segondennoù',
            ss: '%d eilenn',
            m: 'ur vunutenn',
            mm: relativeTimeWithMutation,
            h: 'un eur',
            hh: '%d eur',
            d: 'un devezh',
            dd: relativeTimeWithMutation,
            M: 'ur miz',
            MM: relativeTimeWithMutation,
            y: 'ur bloaz',
            yy: specialMutationForYears
          },
          dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
          ordinal: function ordinal(number) {
            var output = number === 1 ? 'añ' : 'vet';
            return number + output;
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return br;
      });
      /***/

    },

    /***/
    "aIsn":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/mi.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function aIsn(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var mi = moment.defineLocale('mi', {
          months: 'Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea'.split('_'),
          monthsShort: 'Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki'.split('_'),
          monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
          monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
          weekdays: 'Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei'.split('_'),
          weekdaysShort: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
          weekdaysMin: 'Ta_Ma_Tū_We_Tāi_Pa_Hā'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [i] HH:mm',
            LLLL: 'dddd, D MMMM YYYY [i] HH:mm'
          },
          calendar: {
            sameDay: '[i teie mahana, i] LT',
            nextDay: '[apopo i] LT',
            nextWeek: 'dddd [i] LT',
            lastDay: '[inanahi i] LT',
            lastWeek: 'dddd [whakamutunga i] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'i roto i %s',
            past: '%s i mua',
            s: 'te hēkona ruarua',
            ss: '%d hēkona',
            m: 'he meneti',
            mm: '%d meneti',
            h: 'te haora',
            hh: '%d haora',
            d: 'he ra',
            dd: '%d ra',
            M: 'he marama',
            MM: '%d marama',
            y: 'he tau',
            yy: '%d tau'
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return mi;
      });
      /***/

    },

    /***/
    "aQkU":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/mk.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function aQkU(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var mk = moment.defineLocale('mk', {
          months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
          monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
          weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
          weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
          weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'D.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm'
          },
          calendar: {
            sameDay: '[Денес во] LT',
            nextDay: '[Утре во] LT',
            nextWeek: '[Во] dddd [во] LT',
            lastDay: '[Вчера во] LT',
            lastWeek: function lastWeek() {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return '[Изминатата] dddd [во] LT';

                case 1:
                case 2:
                case 4:
                case 5:
                  return '[Изминатиот] dddd [во] LT';
              }
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'после %s',
            past: 'пред %s',
            s: 'неколку секунди',
            ss: '%d секунди',
            m: 'минута',
            mm: '%d минути',
            h: 'час',
            hh: '%d часа',
            d: 'ден',
            dd: '%d дена',
            M: 'месец',
            MM: '%d месеци',
            y: 'година',
            yy: '%d години'
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function ordinal(number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;

            if (number === 0) {
              return number + '-ев';
            } else if (last2Digits === 0) {
              return number + '-ен';
            } else if (last2Digits > 10 && last2Digits < 20) {
              return number + '-ти';
            } else if (lastDigit === 1) {
              return number + '-ви';
            } else if (lastDigit === 2) {
              return number + '-ри';
            } else if (lastDigit === 7 || lastDigit === 8) {
              return number + '-ми';
            } else {
              return number + '-ти';
            }
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return mk;
      });
      /***/

    },

    /***/
    "b1Dy":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/en-nz.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function b1Dy(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var enNz = moment.defineLocale('en-nz', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A'
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function ordinal(number) {
            var b = number % 10,
                output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return enNz;
      });
      /***/

    },

    /***/
    "bOMt":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/nb.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function bOMt(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var nb = moment.defineLocale('nb', {
          months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
          monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
          monthsParseExact: true,
          weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
          weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
          weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] HH:mm',
            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
          },
          calendar: {
            sameDay: '[i dag kl.] LT',
            nextDay: '[i morgen kl.] LT',
            nextWeek: 'dddd [kl.] LT',
            lastDay: '[i går kl.] LT',
            lastWeek: '[forrige] dddd [kl.] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'om %s',
            past: '%s siden',
            s: 'noen sekunder',
            ss: '%d sekunder',
            m: 'ett minutt',
            mm: '%d minutter',
            h: 'en time',
            hh: '%d timer',
            d: 'en dag',
            dd: '%d dager',
            M: 'en måned',
            MM: '%d måneder',
            y: 'ett år',
            yy: '%d år'
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return nb;
      });
      /***/

    },

    /***/
    "bXm7":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/kk.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function bXm7(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var suffixes = {
          0: '-ші',
          1: '-ші',
          2: '-ші',
          3: '-ші',
          4: '-ші',
          5: '-ші',
          6: '-шы',
          7: '-ші',
          8: '-ші',
          9: '-шы',
          10: '-шы',
          20: '-шы',
          30: '-шы',
          40: '-шы',
          50: '-ші',
          60: '-шы',
          70: '-ші',
          80: '-ші',
          90: '-шы',
          100: '-ші'
        };
        var kk = moment.defineLocale('kk', {
          months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
          monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
          weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
          weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
          weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Бүгін сағат] LT',
            nextDay: '[Ертең сағат] LT',
            nextWeek: 'dddd [сағат] LT',
            lastDay: '[Кеше сағат] LT',
            lastWeek: '[Өткен аптаның] dddd [сағат] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s ішінде',
            past: '%s бұрын',
            s: 'бірнеше секунд',
            ss: '%d секунд',
            m: 'бір минут',
            mm: '%d минут',
            h: 'бір сағат',
            hh: '%d сағат',
            d: 'бір күн',
            dd: '%d күн',
            M: 'бір ай',
            MM: '%d ай',
            y: 'бір жыл',
            yy: '%d жыл'
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
          ordinal: function ordinal(number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return kk;
      });
      /***/

    },

    /***/
    "bYM6":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/ar-tn.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function bYM6(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var arTn = moment.defineLocale('ar-tn', {
          months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
          monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
          weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return arTn;
      });
      /***/

    },

    /***/
    "bpih":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/it.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function bpih(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var it = moment.defineLocale('it', {
          months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
          monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
          weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
          weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
          weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Oggi alle] LT',
            nextDay: '[Domani alle] LT',
            nextWeek: 'dddd [alle] LT',
            lastDay: '[Ieri alle] LT',
            lastWeek: function lastWeek() {
              switch (this.day()) {
                case 0:
                  return '[la scorsa] dddd [alle] LT';

                default:
                  return '[lo scorso] dddd [alle] LT';
              }
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: function future(s) {
              return (/^[0-9].+$/.test(s) ? 'tra' : 'in') + ' ' + s;
            },
            past: '%s fa',
            s: 'alcuni secondi',
            ss: '%d secondi',
            m: 'un minuto',
            mm: '%d minuti',
            h: 'un\'ora',
            hh: '%d ore',
            d: 'un giorno',
            dd: '%d giorni',
            M: 'un mese',
            MM: '%d mesi',
            y: 'un anno',
            yy: '%d anni'
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return it;
      });
      /***/

    },

    /***/
    "cD68":
    /*!***************************************************************************!*\
      !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-datepicker.js ***!
      \***************************************************************************/

    /*! exports provided: MC_DATEPICKER_SCROLL_STRATEGY, MC_DATEPICKER_SCROLL_STRATEGY_FACTORY, MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MC_DATEPICKER_VALIDATORS, MC_DATEPICKER_VALUE_ACCESSOR, McCalendar, McCalendarBody, McCalendarCell, McCalendarHeader, McCalendarView, McDatepicker, McDatepickerContent, McDatepickerInput, McDatepickerInputEvent, McDatepickerIntl, McDatepickerModule, McDatepickerToggle, McDatepickerToggleIcon, McMonthView, McMultiYearView, McYearView, mcDatepickerAnimations, yearsPerPage, yearsPerRow */

    /***/
    function cD68(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_SCROLL_STRATEGY", function () {
        return MC_DATEPICKER_SCROLL_STRATEGY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_SCROLL_STRATEGY_FACTORY", function () {
        return MC_DATEPICKER_SCROLL_STRATEGY_FACTORY;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
        return MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_VALIDATORS", function () {
        return MC_DATEPICKER_VALIDATORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MC_DATEPICKER_VALUE_ACCESSOR", function () {
        return MC_DATEPICKER_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCalendar", function () {
        return McCalendar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCalendarBody", function () {
        return McCalendarBody;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCalendarCell", function () {
        return McCalendarCell;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCalendarHeader", function () {
        return McCalendarHeader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McCalendarView", function () {
        return McCalendarView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepicker", function () {
        return McDatepicker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepickerContent", function () {
        return McDatepickerContent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepickerInput", function () {
        return McDatepickerInput;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepickerInputEvent", function () {
        return McDatepickerInputEvent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepickerIntl", function () {
        return McDatepickerIntl;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepickerModule", function () {
        return McDatepickerModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepickerToggle", function () {
        return McDatepickerToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McDatepickerToggleIcon", function () {
        return McDatepickerToggleIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McMonthView", function () {
        return McMonthView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McMultiYearView", function () {
        return McMultiYearView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McYearView", function () {
        return McYearView;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mcDatepickerAnimations", function () {
        return mcDatepickerAnimations;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "yearsPerPage", function () {
        return yearsPerPage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "yearsPerRow", function () {
        return yearsPerRow;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "rDax");
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/portal */
      "+rOU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ptsecurity/mosaic/button */
      "nTjJ");
      /* harmony import */


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ptsecurity/cdk/datetime */
      "Vue8");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      "cH1L");
      /* harmony import */


      var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ptsecurity/cdk/keycodes */
      "SfmH");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");
      /* harmony import */


      var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @ptsecurity/mosaic/form-field */
      "20Zt");
      /* harmony import */


      var _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ptsecurity/mosaic/tooltip */
      "341e");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic"); // tslint:disable:no-magic-numbers

      /**
       * An internal class that represents the data corresponding to a single calendar cell.
       * @docs-private
       */


      var _c0 = ["mc-calendar-body", ""];

      function McCalendarBody_tr_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("padding-top", ctx_r0.cellPadding)("padding-bottom", ctx_r0.cellPadding);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r0.numCols);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
        }
      }

      function McCalendarBody_tr_1_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("padding-top", ctx_r4.cellPadding)("padding-bottom", ctx_r4.cellPadding);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r4.firstRowOffset);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.firstRowOffset >= ctx_r4.labelMinRequiredCells ? ctx_r4.label : "", " ");
        }
      }

      function McCalendarBody_tr_1_td_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function McCalendarBody_tr_1_td_2_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var item_r6 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r8.cellClicked(item_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r6 = ctx.$implicit;
          var colIndex_r7 = ctx.index;

          var rowIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx_r5.cellWidth)("padding-top", ctx_r5.cellPadding)("padding-bottom", ctx_r5.cellPadding);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mc-calendar__body_disabled", !item_r6.enabled)("mc-calendar__body_active", ctx_r5.isActiveCell(rowIndex_r3, colIndex_r7));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", item_r6.cssClasses)("tabindex", ctx_r5.isActiveCell(rowIndex_r3, colIndex_r7) ? 0 : -1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mc-selected", ctx_r5.selectedValue === item_r6.value)("mc-calendar__body-today", ctx_r5.todayValue === item_r6.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r6.displayValue, " ");
        }
      }

      function McCalendarBody_tr_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, McCalendarBody_tr_1_td_1_Template, 2, 6, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, McCalendarBody_tr_1_td_2_Template, 3, 17, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r2 = ctx.$implicit;
          var rowIndex_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rowIndex_r3 === 0 && ctx_r1.firstRowOffset);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", row_r2);
        }
      }

      function McMonthView_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", day_r1["long"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](day_r1.narrow);
        }
      }

      function McCalendar_ng_template_0_Template(rf, ctx) {}

      function McCalendar_mc_month_view_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mc-month-view", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function McCalendar_mc_month_view_2_Template_mc_month_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r4.activeDate = $event;
          })("selectedChange", function McCalendar_mc_month_view_2_Template_mc_month_view_selectedChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r6.dateSelected($event);
          })("userSelection", function McCalendar_mc_month_view_2_Template_mc_month_view_userSelection_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r7.userSelected();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r1.activeDate)("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
        }
      }

      function McCalendar_mc_year_view_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mc-year-view", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function McCalendar_mc_year_view_3_Template_mc_year_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r8.activeDate = $event;
          })("monthSelected", function McCalendar_mc_year_view_3_Template_mc_year_view_monthSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r10.monthSelectedInYearView($event);
          })("selectedChange", function McCalendar_mc_year_view_3_Template_mc_year_view_selectedChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r11.goToDateInView($event, "multi-year");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r2.activeDate)("selected", ctx_r2.selected)("dateFilter", ctx_r2.dateFilter)("maxDate", ctx_r2.maxDate)("minDate", ctx_r2.minDate);
        }
      }

      function McCalendar_mc_multi_year_view_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mc-multi-year-view", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function McCalendar_mc_multi_year_view_4_Template_mc_multi_year_view_activeDateChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r12.activeDate = $event;
          })("yearSelected", function McCalendar_mc_multi_year_view_4_Template_mc_multi_year_view_yearSelected_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r14.yearSelectedInMultiYearView($event);
          })("selectedChange", function McCalendar_mc_multi_year_view_4_Template_mc_multi_year_view_selectedChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r15.goToDateInView($event, "month");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r3.activeDate)("selected", ctx_r3.selected)("dateFilter", ctx_r3.dateFilter)("maxDate", ctx_r3.maxDate)("minDate", ctx_r3.minDate);
        }
      }

      var _c1 = ["button"];

      function McDatepickerToggle_i_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 3);
        }
      }

      var _c2 = [[["", "mcDatepickerToggleIcon", ""]]];
      var _c3 = ["[mcDatepickerToggleIcon]"];

      var McCalendarCell = function McCalendarCell(value, displayValue, ariaLabel, enabled, cssClasses) {
        _classCallCheck(this, McCalendarCell);

        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
      };
      /**
       * An internal component used to display calendar data in a table.
       * @docs-private
       */


      var McCalendarBody = /*#__PURE__*/function () {
        function McCalendarBody(elementRef, ngZone) {
          _classCallCheck(this, McCalendarBody);

          this.elementRef = elementRef;
          this.ngZone = ngZone;
          /** The number of columns in the table. */

          this.numCols = 7;
          /** The cell number of the active cell in the table. */

          this.activeCell = 0;
          /**
           * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
           * maintained even as the table resizes.
           */

          this.cellAspectRatio = 1;
          /** Emits when a new value is selected. */

          this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        }

        _createClass(McCalendarBody, [{
          key: "cellClicked",
          value: function cellClicked(cell) {
            if (cell.enabled) {
              this.selectedValueChange.emit(cell.value);
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var columnChanges = changes.numCols; // tslint:disable-next-line:no-this-assignment

            var rows = this.rows,
                numCols = this.numCols;

            if (changes.rows || columnChanges) {
              this.firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
            }

            if (changes.cellAspectRatio || columnChanges || !this.cellPadding) {
              this.cellPadding = "".concat(this.cellAspectRatio * 50 / numCols, "%");
            }

            if (columnChanges || !this.cellWidth) {
              this.cellWidth = "".concat(100 / numCols, "%");
            }
          }
        }, {
          key: "isActiveCell",
          value: function isActiveCell(rowIndex, colIndex) {
            var cellNumber = rowIndex * this.numCols + colIndex; // Account for the fact that the first row may not have as many cells.

            if (rowIndex) {
              cellNumber -= this.firstRowOffset;
            }

            return cellNumber === this.activeCell;
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "focusActiveCell",
          value: function focusActiveCell() {
            var _this3 = this;

            this.ngZone.runOutsideAngular(function () {
              _this3.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
                var activeCell = _this3.elementRef.nativeElement.querySelector('.mc-calendar__body_active');

                if (activeCell) {
                  activeCell.focus();
                }
              });
            });
          }
        }]);

        return McCalendarBody;
      }();

      McCalendarBody.ɵfac = function McCalendarBody_Factory(t) {
        return new (t || McCalendarBody)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]));
      };

      McCalendarBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McCalendarBody,
        selectors: [["", "mc-calendar-body", ""]],
        hostAttrs: ["role", "grid", "aria-readonly", "true", 1, "mc-calendar__body"],
        inputs: {
          numCols: "numCols",
          activeCell: "activeCell",
          cellAspectRatio: "cellAspectRatio",
          label: "label",
          rows: "rows",
          todayValue: "todayValue",
          selectedValue: "selectedValue",
          labelMinRequiredCells: "labelMinRequiredCells"
        },
        outputs: {
          selectedValueChange: "selectedValueChange"
        },
        exportAs: ["mcCalendarBody"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        attrs: _c0,
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "mc-calendar__body-label"], ["class", "mc-calendar__body-label", 3, "paddingTop", "paddingBottom", 4, "ngIf"], ["class", "mc-calendar__body-cell", 3, "ngClass", "tabindex", "mc-calendar__body_disabled", "mc-calendar__body_active", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], [1, "mc-calendar__body-cell", 3, "ngClass", "tabindex", "click"], [1, "mc-calendar__body-cell-content"]],
        template: function McCalendarBody_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, McCalendarBody_tr_0_Template, 3, 6, "tr", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, McCalendarBody_tr_1_Template, 3, 2, "tr", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.firstRowOffset < ctx.labelMinRequiredCells);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rows);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".mc-calendar__body{min-width:calc(7 * var(--mc-datepicker-body-size-cell-min-size, $datepicker-body-size-cell-min-size))}.mc-calendar__body-label{height:0;line-height:0;text-align:left;padding-left:var(--mc-datepicker-body-size-label-padding-side,4.71429%);padding-right:var(--mc-datepicker-body-size-label-padding-side,4.71429%)}.mc-calendar__body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mc-calendar__body_disabled{cursor:default}.mc-calendar__body-cell-content{position:absolute;top:var(--mc-datepicker-body-size-cell-margin,5%);left:var(--mc-datepicker-body-size-cell-margin,5%);padding:var(--mc-datepicker-body-size-cell-padding,8px);display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:var(--mc-datepicker-body-size-cell-border-width,1px);border-style:solid}.cdk-high-contrast-active .mc-calendar__body-cell-content,.cdk-high-contrast-active :host .mc-calendar__body-cell-content{border:none}mc-month-view .mc-calendar__body-cell-content{justify-content:flex-end}mc-multi-year-view .mc-calendar__body-cell-content,mc-year-view .mc-calendar__body-cell-content{justify-content:center}.cdk-high-contrast-active .mc-datepicker__popup:not(:empty),.cdk-high-contrast-active .mc-selected{outline:1px solid}.cdk-high-contrast-active .mc-calendar__body-today{outline:1px dotted}.cdk-high-contrast-active :host .mc-datepicker__popup:not(:empty),.cdk-high-contrast-active :host .mc-selected{outline:1px solid}.cdk-high-contrast-active :host .mc-calendar__body-today{outline:1px dotted}[dir=rtl] .mc-calendar__body-label{text-align:right}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McCalendarBody.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }];
      };

      McCalendarBody.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        rows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        todayValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        labelMinRequiredCells: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        numCols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        activeCell: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        cellAspectRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedValueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McCalendarBody, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: '[mc-calendar-body]',
            exportAs: 'mcCalendarBody',
            template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"firstRowOffset < labelMinRequiredCells\">\n    <td class=\"mc-calendar__body-label\"\n        [attr.colspan]=\"numCols\"\n        [style.paddingTop]=\"cellPadding\"\n        [style.paddingBottom]=\"cellPadding\">\n        {{ label }}\n    </td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\">\n    <!--\n      We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n      The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\n      percentage of the width (a variant of the trick described here:\n      https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n    -->\n    <td *ngIf=\"rowIndex === 0 && firstRowOffset\"\n        class=\"mc-calendar__body-label\"\n        [attr.colspan]=\"firstRowOffset\"\n        [style.paddingTop]=\"cellPadding\"\n        [style.paddingBottom]=\"cellPadding\">\n        {{ firstRowOffset >= labelMinRequiredCells ? label : '' }}\n    </td>\n    <td *ngFor=\"let item of row; let colIndex = index\"\n        class=\"mc-calendar__body-cell\"\n        [ngClass]=\"item.cssClasses\"\n        [tabindex]=\"isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n        [class.mc-calendar__body_disabled]=\"!item.enabled\"\n        [class.mc-calendar__body_active]=\"isActiveCell(rowIndex, colIndex)\"\n        (click)=\"cellClicked(item)\"\n        [style.width]=\"cellWidth\"\n        [style.paddingTop]=\"cellPadding\"\n        [style.paddingBottom]=\"cellPadding\">\n        <div class=\"mc-calendar__body-cell-content\"\n             [class.mc-selected]=\"selectedValue === item.value\"\n             [class.mc-calendar__body-today]=\"todayValue === item.value\">\n            {{ item.displayValue }}\n        </div>\n    </td>\n</tr>\n",
            host: {
              "class": 'mc-calendar__body',
              role: 'grid',
              'aria-readonly': 'true'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [".mc-calendar__body{min-width:calc(7 * var(--mc-datepicker-body-size-cell-min-size, $datepicker-body-size-cell-min-size))}.mc-calendar__body-label{height:0;line-height:0;text-align:left;padding-left:var(--mc-datepicker-body-size-label-padding-side,4.71429%);padding-right:var(--mc-datepicker-body-size-label-padding-side,4.71429%)}.mc-calendar__body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mc-calendar__body_disabled{cursor:default}.mc-calendar__body-cell-content{position:absolute;top:var(--mc-datepicker-body-size-cell-margin,5%);left:var(--mc-datepicker-body-size-cell-margin,5%);padding:var(--mc-datepicker-body-size-cell-padding,8px);display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:var(--mc-datepicker-body-size-cell-border-width,1px);border-style:solid}.cdk-high-contrast-active .mc-calendar__body-cell-content,.cdk-high-contrast-active :host .mc-calendar__body-cell-content{border:none}mc-month-view .mc-calendar__body-cell-content{justify-content:flex-end}mc-multi-year-view .mc-calendar__body-cell-content,mc-year-view .mc-calendar__body-cell-content{justify-content:center}.cdk-high-contrast-active .mc-datepicker__popup:not(:empty),.cdk-high-contrast-active .mc-selected{outline:1px solid}.cdk-high-contrast-active .mc-calendar__body-today{outline:1px dotted}.cdk-high-contrast-active :host .mc-datepicker__popup:not(:empty),.cdk-high-contrast-active :host .mc-selected{outline:1px solid}.cdk-high-contrast-active :host .mc-calendar__body-today{outline:1px dotted}[dir=rtl] .mc-calendar__body-label{text-align:right}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }];
        }, {
          numCols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          activeCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          cellAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          todayValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          labelMinRequiredCells: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /** @docs-private */


      function createMissingDateImplError(provider) {
        return Error("McDatepicker: No provider found for ".concat(provider, ". You must import one of the existing ") + "modules at your application root or provide a custom implementation or use exists ones.");
      }
      /** Datepicker data that requires internationalization. */


      var McDatepickerIntl = function McDatepickerIntl() {
        _classCallCheck(this, McDatepickerIntl);

        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** A label for the calendar popup (used by screen readers). */

        this.calendarLabel = 'Calendar';
        /** A label for the button used to open the calendar popup (used by screen readers). */

        this.openCalendarLabel = 'Open calendar';
        /** A label for the previous month button (used by screen readers). */

        this.prevMonthLabel = 'Previous month';
        /** A label for the next month button (used by screen readers). */

        this.nextMonthLabel = 'Next month';
        /** A label for the previous year button (used by screen readers). */

        this.prevYearLabel = 'Previous year';
        /** A label for the next year button (used by screen readers). */

        this.nextYearLabel = 'Next year';
        /** A label for the previous multi-year button (used by screen readers). */

        this.prevMultiYearLabel = 'Previous 20 years';
        /** A label for the next multi-year button (used by screen readers). */

        this.nextMultiYearLabel = 'Next 20 years';
        /** A label for the 'switch to month view' button (used by screen readers). */

        this.switchToMonthViewLabel = 'Choose date';
        /** A label for the 'switch to year view' button (used by screen readers). */

        this.switchToMultiYearViewLabel = 'Choose month and year';
      };

      McDatepickerIntl.ɵfac = function McDatepickerIntl_Factory(t) {
        return new (t || McDatepickerIntl)();
      };
      /** @nocollapse */


      McDatepickerIntl.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        factory: function McDatepickerIntl_Factory() {
          return new McDatepickerIntl();
        },
        token: McDatepickerIntl,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McDatepickerIntl, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })(); // tslint:disable:no-magic-numbers


      var DAYS_PER_WEEK = 7;
      /**
       * An internal component used to display a single month in the datepicker.
       * @docs-private
       */

      var McMonthView = /*#__PURE__*/function () {
        function McMonthView(changeDetectorRef, dateFormats, dateAdapter, dir) {
          _classCallCheck(this, McMonthView);

          this.changeDetectorRef = changeDetectorRef;
          this.dateFormats = dateFormats;
          this.dateAdapter = dateAdapter;
          this.dir = dir;
          /** Emits when a new date is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is selected. */

          this.userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this.dateFormats) {
            throw createMissingDateImplError('MC_DATE_FORMATS');
          }

          var firstDayOfWeek = this.dateAdapter.getFirstDayOfWeek();
          var narrowWeekdays = this.dateAdapter.getDayOfWeekNames('narrow');
          var longWeekdays = this.dateAdapter.getDayOfWeekNames('long'); // Rotate the labels for days of the week based on the configured first day of the week.

          var weekdays = longWeekdays.map(function (_long, i) {
            return {
              "long": _long,
              narrow: narrowWeekdays[i]
            };
          });
          this.weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
          this._activeDate = this.dateAdapter.today();
        }
        /**
         * The date to display in this month view (everything other than the month and year is ignored).
         */


        _createClass(McMonthView, [{
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;
            var validDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value)) || this.dateAdapter.today();
            this._activeDate = this.dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (!this.hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
              this.init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            this._selected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
            this.selectedDate = this.getDateInCurrentMonth(this._selected);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.init();
          }
          /** Handles when a new date is selected. */

        }, {
          key: "dateSelected",
          value: function dateSelected(date) {
            if (this.selectedDate !== date) {
              var selectedYear = this.dateAdapter.getYear(this.activeDate);
              var selectedMonth = this.dateAdapter.getMonth(this.activeDate);
              var selectedDate = this.dateAdapter.createDate(selectedYear, selectedMonth, date);
              this.selectedChange.emit(selectedDate);
            }

            this.userSelection.emit();
          }
          /** Handles keydown events on the calendar body when calendar is in month view. */

        }, {
          key: "handleCalendarBodyKeydown",
          value: function handleCalendarBodyKeydown(event) {
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            var oldActiveDate = this._activeDate;
            var isRtl = this.isRtl(); // tslint:disable-next-line:deprecation

            switch (event.keyCode) {
              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, -7);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, 7);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, 1 - this.dateAdapter.getDate(this._activeDate));
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]:
                this.activeDate = this.dateAdapter.addCalendarDays(this._activeDate, this.dateAdapter.getNumDaysInMonth(this._activeDate) - this.dateAdapter.getDate(this._activeDate));
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]:
                this.activeDate = event.altKey ? this.dateAdapter.addCalendarYears(this._activeDate, -1) : this.dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]:
                this.activeDate = event.altKey ? this.dateAdapter.addCalendarYears(this._activeDate, 1) : this.dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]:
                if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                  this.dateSelected(this.dateAdapter.getDate(this._activeDate));
                  this.userSelection.emit(); // Prevent unexpected default actions such as form submission.

                  event.preventDefault();
                }

                return;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this.dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this.focusActiveCell(); // Prevent unexpected default actions such as form submission.

            event.preventDefault();
          }
          /** Initializes this month view. */

        }, {
          key: "init",
          value: function init() {
            this.selectedDate = this.getDateInCurrentMonth(this.selected);
            this.todayDate = this.getDateInCurrentMonth(this.dateAdapter.today());
            this.monthLabel = this.dateAdapter.getMonthNames('short')[this.dateAdapter.getMonth(this.activeDate) - this.dateAdapter.firstMonth];
            this.monthLabel = this.monthLabel[0].toLocaleUpperCase() + this.monthLabel.substr(1);
            var firstOfMonth = this.dateAdapter.createDate(this.dateAdapter.getYear(this.activeDate), this.dateAdapter.getMonth(this.activeDate));
            this.firstWeekOffset = (DAYS_PER_WEEK + this.dateAdapter.getDayOfWeek(firstOfMonth) - this.dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
            this.createWeekCells();
            this.changeDetectorRef.markForCheck();
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "focusActiveCell",
          value: function focusActiveCell() {
            this.mcCalendarBody.focusActiveCell();
          }
          /** Creates McCalendarCells for the dates in this month. */

        }, {
          key: "createWeekCells",
          value: function createWeekCells() {
            var daysInMonth = this.dateAdapter.getNumDaysInMonth(this.activeDate);
            var dateNames = this.dateAdapter.getDateNames();
            this.weeks = [[]];
            var cell = this.firstWeekOffset;

            for (var i = 0; i < daysInMonth; i++) {
              cell++;

              if (cell === DAYS_PER_WEEK) {
                this.weeks.push([]);
                cell = 0;
              }

              var date = this.dateAdapter.createDate(this.dateAdapter.getYear(this.activeDate), this.dateAdapter.getMonth(this.activeDate), i + 1);
              var enabled = this.shouldEnableDate(date);
              var ariaLabel = this.dateAdapter.format(date, this.dateFormats.dateA11yLabel);
              var cellClasses = this.dateClass ? this.dateClass(date) : undefined;
              this.weeks[this.weeks.length - 1].push(new McCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses));
            }
          }
          /** Date filter for the month */

        }, {
          key: "shouldEnableDate",
          value: function shouldEnableDate(date) {
            return !!date && (!this.dateFilter || this.dateFilter(date)) && (!this.minDate || this.dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this.dateAdapter.compareDate(date, this.maxDate) <= 0);
          }
          /**
           * Gets the date in this month that the given Date falls on.
           * Returns null if the given Date is in another month.
           */

        }, {
          key: "getDateInCurrentMonth",
          value: function getDateInCurrentMonth(date) {
            return date && this.hasSameMonthAndYear(date, this.activeDate) ? this.dateAdapter.getDate(date) : null;
          }
          /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */

        }, {
          key: "hasSameMonthAndYear",
          value: function hasSameMonthAndYear(d1, d2) {
            return !!(d1 && d2 && this.dateAdapter.getMonth(d1) === this.dateAdapter.getMonth(d2) && this.dateAdapter.getYear(d1) === this.dateAdapter.getYear(d2));
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj) ? obj : null;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "isRtl",
          value: function isRtl() {
            return this.dir && this.dir.value === 'rtl';
          }
        }]);

        return McMonthView;
      }();

      McMonthView.ɵfac = function McMonthView_Factory(t) {
        return new (t || McMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8));
      };

      McMonthView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McMonthView,
        selectors: [["mc-month-view"]],
        viewQuery: function McMonthView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](McCalendarBody, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.mcCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass"
        },
        outputs: {
          selectedChange: "selectedChange",
          userSelection: "userSelection",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["mcMonthView"],
        decls: 7,
        vars: 7,
        consts: [[1, "mc-calendar__table"], [1, "mc-calendar__table-header"], [4, "ngFor", "ngForOf"], ["colspan", "7", 1, "mc-calendar__table-header-divider"], ["mc-calendar-body", "", 3, "label", "rows", "todayValue", "selectedValue", "labelMinRequiredCells", "activeCell", "selectedValueChange", "keydown"]],
        template: function McMonthView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, McMonthView_th_3_Template, 2, 2, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tbody", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function McMonthView_Template_tbody_selectedValueChange_6_listener($event) {
              return ctx.dateSelected($event);
            })("keydown", function McMonthView_Template_tbody_keydown_6_listener($event) {
              return ctx.handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.weekdays);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx.monthLabel)("rows", ctx.weeks)("todayValue", ctx.todayDate)("selectedValue", ctx.selectedDate)("labelMinRequiredCells", 3)("activeCell", ctx.dateAdapter.getDate(ctx.activeDate) - 1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], McCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McMonthView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
          }]
        }, {
          type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      McMonthView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        userSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        mcCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [McCalendarBody, {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McMonthView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-month-view',
            exportAs: 'mcMonthView',
            template: "<table class=\"mc-calendar__table\">\n    <thead class=\"mc-calendar__table-header\">\n        <tr>\n            <th *ngFor=\"let day of weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th>\n        </tr>\n        <tr>\n            <th class=\"mc-calendar__table-header-divider\" colspan=\"7\"></th>\n        </tr>\n    </thead>\n    <tbody mc-calendar-body\n           [label]=\"monthLabel\"\n           [rows]=\"weeks\"\n           [todayValue]=\"todayDate\"\n           [selectedValue]=\"selectedDate\"\n           [labelMinRequiredCells]=\"3\"\n           [activeCell]=\"dateAdapter.getDate(activeDate) - 1\"\n           (selectedValueChange)=\"dateSelected($event)\"\n           (keydown)=\"handleCalendarBodyKeydown($event)\">\n    </tbody>\n</table>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
            }]
          }, {
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          mcCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [McCalendarBody, {
              "static": false
            }]
          }]
        });
      })(); // tslint:disable:no-magic-numbers


      var yearsPerPage = 24;
      var yearsPerRow = 4;
      /**
       * An internal component used to display a year selector in the datepicker.
       * @docs-private
       */

      var McMultiYearView = /*#__PURE__*/function () {
        function McMultiYearView(changeDetectorRef, dateAdapter, dir) {
          _classCallCheck(this, McMultiYearView);

          this.changeDetectorRef = changeDetectorRef;
          this.dateAdapter = dateAdapter;
          this.dir = dir;
          /** Emits when a new year is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits the selected year. This doesn't imply a change on the selected date */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          this._activeDate = this.dateAdapter.today();
        }
        /** The date to display in this multi-year view (everything other than the year is ignored). */


        _createClass(McMultiYearView, [{
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;
            var validDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value)) || this.dateAdapter.today();
            this._activeDate = this.dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (Math.floor(this.dateAdapter.getYear(oldActiveDate) / yearsPerPage) !== Math.floor(this.dateAdapter.getYear(this._activeDate) / yearsPerPage)) {
              this.init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            this._selected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
            this.selectedYear = this._selected && this.dateAdapter.getYear(this._selected);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.init();
          }
          /** Initializes this multi-year view. */

        }, {
          key: "init",
          value: function init() {
            var _this4 = this;

            this.todayYear = this.dateAdapter.getYear(this.dateAdapter.today());
            var activeYear = this.dateAdapter.getYear(this._activeDate);
            var activeOffset = activeYear % yearsPerPage;
            this.years = [];

            for (var i = 0, row = []; i < yearsPerPage; i++) {
              row.push(activeYear - activeOffset + i);

              if (row.length === yearsPerRow) {
                this.years.push(row.map(function (year) {
                  return _this4.createCellForYear(year);
                }));
                row = [];
              }
            }

            this.changeDetectorRef.markForCheck();
          }
          /** Handles when a new year is selected. */

        }, {
          key: "onYearSelected",
          value: function onYearSelected(year) {
            this.yearSelected.emit(this.dateAdapter.createDate(year));
            var month = this.dateAdapter.getMonth(this.activeDate);
            var daysInMonth = this.dateAdapter.getNumDaysInMonth(this.dateAdapter.createDate(year, month));
            this.selectedChange.emit(this.dateAdapter.createDate(year, month, Math.min(this.dateAdapter.getDate(this.activeDate), daysInMonth)));
          }
          /** Handles keydown events on the calendar body when calendar is in multi-year view. */

        }, {
          key: "handleCalendarBodyKeydown",
          value: function handleCalendarBodyKeydown(event) {
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            var oldActiveDate = this._activeDate;
            var isRtl = this.isRtl(); // tslint:disable-next-line:deprecation

            switch (event.keyCode) {
              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, -this.dateAdapter.getYear(this._activeDate) % yearsPerPage);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - this.dateAdapter.getYear(this._activeDate) % yearsPerPage - 1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]:
                this.onYearSelected(this.dateAdapter.getYear(this._activeDate));
                break;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this.dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this.focusActiveCell(); // Prevent unexpected default actions such as form submission.

            event.preventDefault();
          }
        }, {
          key: "getActiveCell",
          value: function getActiveCell() {
            return this.dateAdapter.getYear(this.activeDate) % yearsPerPage;
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "focusActiveCell",
          value: function focusActiveCell() {
            this.mcCalendarBody.focusActiveCell();
          }
          /** Creates an McCalendarCell for the given year. */

        }, {
          key: "createCellForYear",
          value: function createCellForYear(year) {
            var yearName = this.dateAdapter.getYearName(this.dateAdapter.createDate(year));
            return new McCalendarCell(year, yearName, yearName, this.shouldEnableYear(year));
          }
          /** Whether the given year is enabled. */

        }, {
          key: "shouldEnableYear",
          value: function shouldEnableYear(year) {
            // disable if the year is greater than maxDate lower than minDate
            if (year === undefined || year === null || this.maxDate && year > this.dateAdapter.getYear(this.maxDate) || this.minDate && year < this.dateAdapter.getYear(this.minDate)) {
              return false;
            } // enable if it reaches here and there's no filter defined


            if (!this.dateFilter) {
              return true;
            }

            var firstOfYear = this.dateAdapter.createDate(year); // If any date in the year is enabled count the year as enabled.

            for (var date = firstOfYear; this.dateAdapter.getYear(date) === year; date = this.dateAdapter.addCalendarDays(date, 1)) {
              if (this.dateFilter(date)) {
                return true;
              }
            }

            return false;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj) ? obj : null;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "isRtl",
          value: function isRtl() {
            return this.dir && this.dir.value === 'rtl';
          }
        }]);

        return McMultiYearView;
      }();

      McMultiYearView.ɵfac = function McMultiYearView_Factory(t) {
        return new (t || McMultiYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8));
      };

      McMultiYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McMultiYearView,
        selectors: [["mc-multi-year-view"]],
        viewQuery: function McMultiYearView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](McCalendarBody, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.mcCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter"
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["mcMultiYearView"],
        decls: 5,
        vars: 6,
        consts: [[1, "mc-calendar__table"], [1, "mc-calendar__table-header"], ["colspan", "4", 1, "mc-calendar__table-header-divider"], ["mc-calendar-body", "", 3, "rows", "todayValue", "selectedValue", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]],
        template: function McMultiYearView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tbody", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function McMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
              return ctx.onYearSelected($event);
            })("keydown", function McMultiYearView_Template_tbody_keydown_4_listener($event) {
              return ctx.handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx.years)("todayValue", ctx.todayYear)("selectedValue", ctx.selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx.getActiveCell());
          }
        },
        directives: [McCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McMultiYearView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      McMultiYearView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        mcCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [McCalendarBody, {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McMultiYearView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-multi-year-view',
            exportAs: 'mcMultiYearView',
            template: "<table class=\"mc-calendar__table\">\n    <thead class=\"mc-calendar__table-header\">\n    <tr>\n        <th class=\"mc-calendar__table-header-divider\" colspan=\"4\"></th>\n    </tr>\n    </thead>\n    <tbody mc-calendar-body\n           [rows]=\"years\"\n           [todayValue]=\"todayYear\"\n           [selectedValue]=\"selectedYear\"\n           [numCols]=\"4\"\n           [cellAspectRatio]=\"4 / 7\"\n           [activeCell]=\"getActiveCell()\"\n           (selectedValueChange)=\"onYearSelected($event)\"\n           (keydown)=\"handleCalendarBodyKeydown($event)\">\n    </tbody>\n</table>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          mcCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [McCalendarBody, {
              "static": false
            }]
          }]
        });
      })();
      /**
       * An internal component used to display a single year in the datepicker.
       * @docs-private
       */


      var McYearView = /*#__PURE__*/function () {
        function McYearView(changeDetectorRef, dateFormats, dateAdapter, dir) {
          _classCallCheck(this, McYearView);

          this.changeDetectorRef = changeDetectorRef;
          this.dateFormats = dateFormats;
          this.dateAdapter = dateAdapter;
          this.dir = dir;
          /** Emits when a new month is selected. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits the selected month. This doesn't imply a change on the selected date */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is activated. */

          this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

          if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this.dateFormats) {
            throw createMissingDateImplError('MC_DATE_FORMATS');
          }

          this._activeDate = this.dateAdapter.today();
        }
        /** The date to display in this year view (everything other than the year is ignored). */


        _createClass(McYearView, [{
          key: "activeDate",
          get: function get() {
            return this._activeDate;
          },
          set: function set(value) {
            var oldActiveDate = this._activeDate;
            var validDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value)) || this.dateAdapter.today();
            this._activeDate = this.dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

            if (this.dateAdapter.getYear(oldActiveDate) !== this.dateAdapter.getYear(this._activeDate)) {
              this.init();
            }
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            this._selected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
            this.selectedMonth = this.getMonthInCurrentYear(this._selected);
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.init();
          }
          /** Handles when a new month is selected. */

        }, {
          key: "onMonthSelected",
          value: function onMonthSelected(month) {
            var year = this.dateAdapter.getYear(this.activeDate);
            var normalizedDate = this.dateAdapter.createDate(year, month);
            this.monthSelected.emit(normalizedDate);
            var daysInMonth = this.dateAdapter.getNumDaysInMonth(normalizedDate);
            this.selectedChange.emit(this.dateAdapter.createDate(year, month, Math.min(this.dateAdapter.getDate(this.activeDate), daysInMonth)));
          }
          /** Handles keydown events on the calendar body when calendar is in year view. */

        }, {
          key: "handleCalendarBodyKeydown",
          value: function handleCalendarBodyKeydown(event) {
            // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
            // disabled ones from being selected. This may not be ideal, we should look into whether
            // navigation should skip over disabled dates, and if so, how to implement that efficiently.
            var oldActiveDate = this._activeDate;
            var isRtl = this.isRtl();
            var VERTICAL_SHIFT = 4;
            var PAGE_SHIFT = 10;
            var MAX_MONTH_INDEX = 11; // tslint:disable-next-line:deprecation

            switch (event.keyCode) {
              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, -VERTICAL_SHIFT);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, VERTICAL_SHIFT);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, -this.dateAdapter.getMonth(this._activeDate));
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"]:
                this.activeDate = this.dateAdapter.addCalendarMonths(this._activeDate, MAX_MONTH_INDEX - this.dateAdapter.getMonth(this._activeDate));
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -PAGE_SHIFT : -1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]:
                this.activeDate = this.dateAdapter.addCalendarYears(this._activeDate, event.altKey ? PAGE_SHIFT : 1);
                break;

              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ENTER"]:
              case _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]:
                this.onMonthSelected(this.dateAdapter.getMonth(this._activeDate));
                break;

              default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
            }

            if (this.dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
              this.activeDateChange.emit(this.activeDate);
            }

            this.focusActiveCell(); // Prevent unexpected default actions such as form submission.

            event.preventDefault();
          }
          /** Initializes this year view. */

        }, {
          key: "init",
          value: function init() {
            var _this5 = this;

            this.selectedMonth = this.getMonthInCurrentYear(this.selected);
            this.todayMonth = this.getMonthInCurrentYear(this.dateAdapter.today());
            this.yearLabel = this.dateAdapter.getYearName(this.activeDate);
            var monthNames = this.dateAdapter.getMonthNames('short'); // First row of months only contains 5 elements so we can fit the year label on the same row.
            // tslint:disable-next-line:no-magic-numbers

            this.months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(function (row) {
              return row.map(function (month) {
                return _this5.createCellForMonth(month + _this5.dateAdapter.firstMonth, monthNames[month]);
              });
            });
            this.changeDetectorRef.markForCheck();
          }
          /** Focuses the active cell after the microtask queue is empty. */

        }, {
          key: "focusActiveCell",
          value: function focusActiveCell() {
            this.mcCalendarBody.focusActiveCell();
          }
          /**
           * Gets the month in this year that the given Date falls on.
           * Returns null if the given Date is in another year.
           */

        }, {
          key: "getMonthInCurrentYear",
          value: function getMonthInCurrentYear(date) {
            return date && this.dateAdapter.getYear(date) === this.dateAdapter.getYear(this.activeDate) ? this.dateAdapter.getMonth(date) : null;
          }
          /** Creates an McCalendarCell for the given month. */

        }, {
          key: "createCellForMonth",
          value: function createCellForMonth(month, monthName) {
            var ariaLabel = this.dateAdapter.format(this.dateAdapter.createDate(this.dateAdapter.getYear(this.activeDate), month), this.dateFormats.monthYearA11yLabel);
            var newMonthName = monthName[0].toLocaleUpperCase() + monthName.substr(1);
            return new McCalendarCell(month, newMonthName, ariaLabel, this.shouldEnableMonth(month));
          }
          /** Whether the given month is enabled. */

        }, {
          key: "shouldEnableMonth",
          value: function shouldEnableMonth(month) {
            var activeYear = this.dateAdapter.getYear(this.activeDate);

            if (month === undefined || month === null || this.isYearAndMonthAfterMaxDate(activeYear, month) || this.isYearAndMonthBeforeMinDate(activeYear, month)) {
              return false;
            }

            if (!this.dateFilter) {
              return true;
            }

            var firstOfMonth = this.dateAdapter.createDate(activeYear, month); // If any date in the month is enabled count the month as enabled.

            for (var date = firstOfMonth; this.dateAdapter.getMonth(date) === month; date = this.dateAdapter.addCalendarDays(date, 1)) {
              if (this.dateFilter(date)) {
                return true;
              }
            }

            return false;
          }
          /**
           * Tests whether the combination month/year is after this.maxDate, considering
           * just the month and year of this.maxDate
           */

        }, {
          key: "isYearAndMonthAfterMaxDate",
          value: function isYearAndMonthAfterMaxDate(year, month) {
            if (this.maxDate) {
              var maxYear = this.dateAdapter.getYear(this.maxDate);
              var maxMonth = this.dateAdapter.getMonth(this.maxDate);
              return year > maxYear || year === maxYear && month > maxMonth;
            }

            return false;
          }
          /**
           * Tests whether the combination month/year is before this.minDate, considering
           * just the month and year of this.minDate
           */

        }, {
          key: "isYearAndMonthBeforeMinDate",
          value: function isYearAndMonthBeforeMinDate(year, month) {
            if (this.minDate) {
              var minYear = this.dateAdapter.getYear(this.minDate);
              var minMonth = this.dateAdapter.getMonth(this.minDate);
              return year < minYear || year === minYear && month < minMonth;
            }

            return false;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj) ? obj : null;
          }
          /** Determines whether the user has the RTL layout direction. */

        }, {
          key: "isRtl",
          value: function isRtl() {
            return this.dir && this.dir.value === 'rtl';
          }
        }]);

        return McYearView;
      }();

      McYearView.ɵfac = function McYearView_Factory(t) {
        return new (t || McYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8));
      };

      McYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McYearView,
        selectors: [["mc-year-view"]],
        viewQuery: function McYearView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](McCalendarBody, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.mcCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter"
        },
        outputs: {
          selectedChange: "selectedChange",
          monthSelected: "monthSelected",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["mcYearView"],
        decls: 5,
        vars: 8,
        consts: [[1, "mc-calendar__table"], [1, "mc-calendar__table-header"], ["colspan", "4", 1, "mc-calendar__table-header-divider"], ["mc-calendar-body", "", 3, "label", "rows", "todayValue", "selectedValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]],
        template: function McYearView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "th", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tbody", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function McYearView_Template_tbody_selectedValueChange_4_listener($event) {
              return ctx.onMonthSelected($event);
            })("keydown", function McYearView_Template_tbody_keydown_4_listener($event) {
              return ctx.handleCalendarBodyKeydown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx.yearLabel)("rows", ctx.months)("todayValue", ctx.todayMonth)("selectedValue", ctx.selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx.dateAdapter.getMonth(ctx.activeDate));
          }
        },
        directives: [McCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McYearView.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
          }]
        }, {
          type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }];
      };

      McYearView.propDecorators = {
        activeDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        activeDateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        mcCalendarBody: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [McCalendarBody, {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McYearView, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-year-view',
            exportAs: 'mcYearView',
            template: "<table class=\"mc-calendar__table\">\n    <thead class=\"mc-calendar__table-header\">\n    <tr>\n        <th class=\"mc-calendar__table-header-divider\" colspan=\"4\"></th>\n    </tr>\n    </thead>\n    <tbody mc-calendar-body\n           [label]=\"yearLabel\"\n           [rows]=\"months\"\n           [todayValue]=\"todayMonth\"\n           [selectedValue]=\"selectedMonth\"\n           [labelMinRequiredCells]=\"2\"\n           [numCols]=\"4\"\n           [cellAspectRatio]=\"4 / 7\"\n           [activeCell]=\"dateAdapter.getMonth(activeDate)\"\n           (selectedValueChange)=\"onMonthSelected($event)\"\n           (keydown)=\"handleCalendarBodyKeydown($event)\">\n    </tbody>\n</table>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
            }]
          }, {
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }];
        }, {
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          mcCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [McCalendarBody, {
              "static": false
            }]
          }]
        });
      })();
      /**
       * Possible views for the calendar.
       * @docs-private
       */


      var McCalendarView;

      (function (McCalendarView) {
        McCalendarView["Month"] = "month";
        McCalendarView["Year"] = "year";
        McCalendarView["MultiYear"] = "multi-year";
      })(McCalendarView || (McCalendarView = {}));
      /** Default header for McCalendar */


      var McCalendarHeader = /*#__PURE__*/function () {
        function McCalendarHeader(intl, calendar, dateAdapter, dateFormats, changeDetectorRef) {
          _classCallCheck(this, McCalendarHeader);

          this.intl = intl;
          this.calendar = calendar;
          this.dateAdapter = dateAdapter;
          this.dateFormats = dateFormats;
          this.calendar.stateChanges.subscribe(function () {
            return changeDetectorRef.markForCheck();
          });
        }
        /** The label for the current calendar view. */


        _createClass(McCalendarHeader, [{
          key: "periodButtonText",
          get: function get() {
            if (this.calendar.currentView === McCalendarView.Month) {
              var label = this.dateAdapter.format(this.calendar.activeDate, this.dateFormats.monthYearLabel);
              return label[0].toLocaleUpperCase() + label.substr(1);
            }

            if (this.calendar.currentView === McCalendarView.Year) {
              return this.dateAdapter.getYearName(this.calendar.activeDate);
            }

            var activeYear = this.dateAdapter.getYear(this.calendar.activeDate);
            var firstYearInView = this.dateAdapter.getYearName( // tslint:disable-next-line:no-magic-numbers
            this.dateAdapter.createDate(activeYear - activeYear % 24));
            var lastYearInView = this.dateAdapter.getYearName( // tslint:disable-next-line:no-magic-numbers
            this.dateAdapter.createDate(activeYear + yearsPerPage - 1 - activeYear % 24));
            return "".concat(firstYearInView, " \u2013 ").concat(lastYearInView);
          }
        }, {
          key: "periodButtonLabel",
          get: function get() {
            return this.calendar.currentView === McCalendarView.Month ? this.intl.switchToMultiYearViewLabel : this.intl.switchToMonthViewLabel;
          }
          /** The label for the previous button. */

        }, {
          key: "prevButtonLabel",
          get: function get() {
            var _McCalendarView$Month;

            return (_McCalendarView$Month = {}, _defineProperty(_McCalendarView$Month, McCalendarView.Month, this.intl.prevMonthLabel), _defineProperty(_McCalendarView$Month, McCalendarView.Year, this.intl.prevYearLabel), _defineProperty(_McCalendarView$Month, McCalendarView.MultiYear, this.intl.prevMultiYearLabel), _McCalendarView$Month)[this.calendar.currentView];
          }
          /** The label for the next button. */

        }, {
          key: "nextButtonLabel",
          get: function get() {
            var _McCalendarView$Month2;

            return (_McCalendarView$Month2 = {}, _defineProperty(_McCalendarView$Month2, McCalendarView.Month, this.intl.nextMonthLabel), _defineProperty(_McCalendarView$Month2, McCalendarView.Year, this.intl.nextYearLabel), _defineProperty(_McCalendarView$Month2, McCalendarView.MultiYear, this.intl.nextMultiYearLabel), _McCalendarView$Month2)[this.calendar.currentView];
          }
          /** Handles user clicks on the period label. */

        }, {
          key: "currentPeriodClicked",
          value: function currentPeriodClicked() {
            if ([McCalendarView.Month, McCalendarView.MultiYear].includes(this.calendar.currentView)) {
              this.calendar.currentView = McCalendarView.Year;
            } else if (this.calendar.currentView === McCalendarView.Year) {
              this.calendar.currentView = McCalendarView.Month;
            }
          }
          /** Handles user clicks on the previous button. */

        }, {
          key: "previousClicked",
          value: function previousClicked() {
            if (this.calendar.currentView === McCalendarView.Month) {
              this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, -1);
            } else {
              this.calendar.activeDate = this.dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView === McCalendarView.Year ? -1 : -yearsPerPage);
            }
          }
          /** Handles user clicks on the next button. */

        }, {
          key: "nextClicked",
          value: function nextClicked() {
            if (this.calendar.currentView === McCalendarView.Month) {
              this.calendar.activeDate = this.dateAdapter.addCalendarMonths(this.calendar.activeDate, 1);
            } else {
              this.calendar.activeDate = this.dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView === McCalendarView.Year ? 1 : yearsPerPage);
            }
          }
          /** Whether the previous period button is enabled. */

        }, {
          key: "previousEnabled",
          value: function previousEnabled() {
            if (!this.calendar.minDate) {
              return true;
            }

            return !this.calendar.minDate || !this.isSameView(this.calendar.activeDate, this.calendar.minDate);
          }
          /** Whether the next period button is enabled. */

        }, {
          key: "nextEnabled",
          value: function nextEnabled() {
            return !this.calendar.maxDate || !this.isSameView(this.calendar.activeDate, this.calendar.maxDate);
          }
          /** Whether the two dates represent the same view in the current view mode (month or year). */

        }, {
          key: "isSameView",
          value: function isSameView(firstDate, secondDate) {
            var firstYear = this.dateAdapter.getYear(firstDate);
            var secondYear = this.dateAdapter.getYear(secondDate);
            var firstMonth = this.dateAdapter.getMonth(firstDate);
            var secondMonth = this.dateAdapter.getMonth(secondDate);

            if (this.calendar.currentView === McCalendarView.Month) {
              return firstYear === secondYear && firstMonth === secondMonth;
            }

            if (this.calendar.currentView === McCalendarView.Year) {
              return firstYear === secondYear;
            } // Otherwise we are in 'multi-year' view.


            return Math.floor(firstYear / yearsPerPage) === Math.floor(secondYear / yearsPerPage);
          }
        }]);

        return McCalendarHeader;
      }();

      McCalendarHeader.ɵfac = function McCalendarHeader_Factory(t) {
        return new (t || McCalendarHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](McDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return McCalendar;
        })), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      McCalendarHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McCalendarHeader,
        selectors: [["mc-calendar-header"]],
        hostAttrs: [1, "mc-calendar-header"],
        exportAs: ["mcCalendarHeader"],
        decls: 8,
        vars: 10,
        consts: [["mc-button", "", 1, "mc-button_transparent", "mc-calendar__period-button", 3, "tabindex", "click"], [1, "mc", "mc-icon"], [1, "mc-calendar-spacer"], ["mc-button", "", 1, "mc-button_transparent", "mc-calendar__previous-button", 3, "tabindex", "disabled", "click"], ["mc-icon", "mc-angle-left-L_16"], ["mc-button", "", 1, "mc-button_transparent", "mc-calendar__next-button", 3, "tabindex", "disabled", "click"], ["mc-icon", "mc-angle-right-L_16"]],
        template: function McCalendarHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function McCalendarHeader_Template_button_click_0_listener() {
              return ctx.currentPeriodClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function McCalendarHeader_Template_button_click_4_listener() {
              return ctx.previousClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function McCalendarHeader_Template_button_click_6_listener() {
              return ctx.nextClicked();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", "-1");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.periodButtonText, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mc-angle-up-M_16", ctx.calendar.currentView !== "month")("mc-angle-down-M_16", ctx.calendar.currentView === "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", "-1")("disabled", !ctx.previousEnabled());

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("tabindex", "-1")("disabled", !ctx.nextEnabled());
          }
        },
        directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonCssStyler"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"]],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McCalendarHeader.ctorParameters = function () {
        return [{
          type: McDatepickerIntl
        }, {
          type: McCalendar,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
              return McCalendar;
            })]
          }]
        }, {
          type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McCalendarHeader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-calendar-header',
            template: "<button mc-button\n        [tabindex]=\"'-1'\"\n        class=\"mc-button_transparent mc-calendar__period-button\"\n        (click)=\"currentPeriodClicked()\">\n    {{ periodButtonText }}\n\n    <i class=\"mc mc-icon\"\n       [class.mc-angle-up-M_16]=\"calendar.currentView !== 'month'\"\n       [class.mc-angle-down-M_16]=\"calendar.currentView === 'month'\">\n    </i>\n</button>\n\n<div class=\"mc-calendar-spacer\"></div>\n\n<button mc-button\n        [tabindex]=\"'-1'\"\n        class=\"mc-button_transparent mc-calendar__previous-button\"\n        [disabled]=\"!previousEnabled()\"\n        (click)=\"previousClicked()\">\n\n    <i mc-icon=\"mc-angle-left-L_16\"></i>\n</button>\n\n<button mc-button\n        [tabindex]=\"'-1'\"\n        class=\"mc-button_transparent mc-calendar__next-button\"\n        [disabled]=\"!nextEnabled()\"\n        (click)=\"nextClicked()\">\n\n    <i mc-icon=\"mc-angle-right-L_16\"></i>\n</button>\n",
            exportAs: 'mcCalendarHeader',
            host: {
              "class": 'mc-calendar-header'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: McDatepickerIntl
          }, {
            type: McCalendar,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
                return McCalendar;
              })]
            }]
          }, {
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, null);
      })();
      /**
       * A calendar that is used as part of the datepicker.
       * @docs-private
       */


      var McCalendar = /*#__PURE__*/function () {
        function McCalendar(intl, dateAdapter, dateFormats, changeDetectorRef) {
          var _this6 = this;

          _classCallCheck(this, McCalendar);

          this.dateAdapter = dateAdapter;
          this.dateFormats = dateFormats;
          this.changeDetectorRef = changeDetectorRef;
          /** Whether the calendar should be started in month or year view. */

          this.startView = McCalendarView.Month;
          /** Emits when the currently selected date changes. */

          this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits the year chosen in multiyear view.
           * This doesn't imply a change on the selected date.
           */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits the month chosen in year view.
           * This doesn't imply a change on the selected date.
           */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when any date is selected. */

          this.userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits whenever there is a state change that the header may need to respond to.
           */

          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /**
           * Used for scheduling that focus should be moved to the active cell on the next tick.
           * We need to schedule it, rather than do it immediately, because we have to wait
           * for Angular to re-evaluate the view children.
           */

          this.moveFocusOnNextTick = false;

          if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this.dateFormats) {
            throw createMissingDateImplError('MC_DATE_FORMATS');
          }

          this.intlChanges = intl.changes.subscribe(function () {
            changeDetectorRef.markForCheck();

            _this6.stateChanges.next();
          });
        }
        /** A date representing the period (month or year) to start the calendar in. */


        _createClass(McCalendar, [{
          key: "startAt",
          get: function get() {
            return this._startAt;
          },
          set: function set(value) {
            this._startAt = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this._selected;
          },
          set: function set(value) {
            this._selected = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this._minDate;
          },
          set: function set(value) {
            this._minDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this._maxDate;
          },
          set: function set(value) {
            this._maxDate = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /**
           * The current active date. This determines which time period is shown and which date is
           * highlighted when using keyboard navigation.
           */

        }, {
          key: "activeDate",
          get: function get() {
            return this.clampedActiveDate;
          },
          set: function set(value) {
            this.clampedActiveDate = this.dateAdapter.clampDate(value, this.minDate, this.maxDate);
            this.stateChanges.next();
          }
          /** Whether the calendar is in month view. */

        }, {
          key: "currentView",
          get: function get() {
            return this._currentView;
          },
          set: function set(value) {
            this._currentView = value;
            this.moveFocusOnNextTick = true;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](this.headerComponent || McCalendarHeader);
            this.activeDate = this.startAt || this.dateAdapter.today(); // Assign to the private property since we don't want to move focus on init.

            this._currentView = this.startView;
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            if (this.moveFocusOnNextTick) {
              this.moveFocusOnNextTick = false;
              this.focusActiveCell();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.intlChanges.unsubscribe();
            this.stateChanges.complete();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var change = changes.minDate || changes.maxDate || changes.dateFilter;

            if (change && !change.firstChange) {
              var view = this.getCurrentViewComponent();

              if (view) {
                // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                // passed down to the view via data bindings which won't be up-to-date when we call `init`.
                this.changeDetectorRef.detectChanges();
                view.init();
              }
            }

            this.stateChanges.next();
          }
        }, {
          key: "focusActiveCell",
          value: function focusActiveCell() {
            this.getCurrentViewComponent().focusActiveCell();
          }
          /** Updates today's date after an update of the active date */

        }, {
          key: "updateTodaysDate",
          value: function updateTodaysDate() {
            var view = this.currentView === McCalendarView.Month ? this.monthView : this.currentView === McCalendarView.Year ? this.yearView : this.multiYearView;
            view.ngAfterContentInit();
          }
          /** Handles date selection in the month view. */

        }, {
          key: "dateSelected",
          value: function dateSelected(date) {
            if (!this.dateAdapter.sameDate(date, this.selected)) {
              this.selectedChange.emit(date);
            }
          }
          /** Handles year selection in the multiyear view. */

        }, {
          key: "yearSelectedInMultiYearView",
          value: function yearSelectedInMultiYearView(normalizedYear) {
            this.yearSelected.emit(normalizedYear);
          }
          /** Handles month selection in the year view. */

        }, {
          key: "monthSelectedInYearView",
          value: function monthSelectedInYearView(normalizedMonth) {
            this.monthSelected.emit(normalizedMonth);
          }
        }, {
          key: "userSelected",
          value: function userSelected() {
            this.userSelection.emit();
          }
          /** Handles year/month selection in the multi-year/year views. */

        }, {
          key: "goToDateInView",
          value: function goToDateInView(date, view) {
            this.activeDate = date;
            this.currentView = view;
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj) ? obj : null;
          }
          /** Returns the component instance that corresponds to the current calendar view. */

        }, {
          key: "getCurrentViewComponent",
          value: function getCurrentViewComponent() {
            return this.monthView || this.yearView || this.multiYearView;
          }
        }]);

        return McCalendar;
      }();

      McCalendar.ɵfac = function McCalendar_Factory(t) {
        return new (t || McCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](McDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      McCalendar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McCalendar,
        selectors: [["mc-calendar"]],
        viewQuery: function McCalendar_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](McMonthView, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](McYearView, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](McMultiYearView, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.monthView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.yearView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.multiYearView = _t.first);
          }
        },
        hostAttrs: [1, "mc-calendar"],
        inputs: {
          startView: "startView",
          startAt: "startAt",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          headerComponent: "headerComponent",
          dateFilter: "dateFilter",
          dateClass: "dateClass"
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          userSelection: "userSelection"
        },
        exportAs: ["mcCalendar"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 5,
        consts: [[3, "cdkPortalOutlet"], [1, "mc-calendar__content", 3, "ngSwitch"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "selectedChange", "userSelection", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "monthSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "yearSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "selectedChange", "userSelection"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "monthSelected", "selectedChange"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "activeDateChange", "yearSelected", "selectedChange"]],
        template: function McCalendar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, McCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, McCalendar_mc_month_view_2_Template, 1, 6, "mc-month-view", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, McCalendar_mc_year_view_3_Template, 1, 5, "mc-year-view", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, McCalendar_mc_multi_year_view_4_Template, 1, 5, "mc-multi-year-view", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", ctx.calendarHeaderPortal);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.currentView);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "year");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "multi-year");
          }
        },
        directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], McMonthView, McYearView, McMultiYearView],
        styles: [".mc-calendar{display:block}.mc-calendar-header{display:flex;padding:var(--mc-datepicker-calendar-size-padding-top,16px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-blocks,12px) var(--mc-datepicker-calendar-size-padding-horizontal,8px)}.mc-calendar__content{padding:0 var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px);outline:none}.mc-calendar-spacer{flex:1 1 auto}.mc-calendar__period-button{min-width:0}.mc-calendar__previous-button:after{border-left-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-prev-icon-transform,translateX(2px) rotate(-45deg))}.mc-calendar__next-button:after{border-right-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-nex-icon-transform,translateX(-2px) rotate(45deg))}.mc-calendar__table{border-spacing:0;border-collapse:collapse;width:100%}.mc-calendar__table-header th{text-align:center;height:30px}.mc-calendar__table-header th.mc-calendar__table-header-divider{position:relative;height:calc(var(--mc-datepicker-calendar-size-padding-blocks, 12px) - 2px)}.mc-calendar__table-header th.mc-calendar__table-header-divider:after{content:\"\";position:absolute;top:0;left:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));right:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));height:var(--mc-datepicker-calendar-size-divider-width,1px)}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McCalendar.ctorParameters = function () {
        return [{
          type: McDatepickerIntl
        }, {
          type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      McCalendar.propDecorators = {
        startAt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        minDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        maxDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        headerComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        selectedChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        userSelection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [McMonthView, {
            "static": false
          }]
        }],
        yearView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [McYearView, {
            "static": false
          }]
        }],
        multiYearView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [McMultiYearView, {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McCalendar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-calendar',
            exportAs: 'mcCalendar',
            template: "<ng-template [cdkPortalOutlet]=\"calendarHeaderPortal\"></ng-template>\n\n<div class=\"mc-calendar__content\" [ngSwitch]=\"currentView\">\n    <mc-month-view\n        *ngSwitchCase=\"'month'\"\n        [(activeDate)]=\"activeDate\"\n        [selected]=\"selected\"\n        [dateFilter]=\"dateFilter\"\n        [maxDate]=\"maxDate\"\n        [minDate]=\"minDate\"\n        [dateClass]=\"dateClass\"\n        (selectedChange)=\"dateSelected($event)\"\n        (userSelection)=\"userSelected()\">\n    </mc-month-view>\n\n    <mc-year-view\n        *ngSwitchCase=\"'year'\"\n        [(activeDate)]=\"activeDate\"\n        [selected]=\"selected\"\n        [dateFilter]=\"dateFilter\"\n        [maxDate]=\"maxDate\"\n        [minDate]=\"minDate\"\n        (monthSelected)=\"monthSelectedInYearView($event)\"\n        (selectedChange)=\"goToDateInView($event, 'multi-year')\">\n    </mc-year-view>\n\n    <mc-multi-year-view\n        *ngSwitchCase=\"'multi-year'\"\n        [(activeDate)]=\"activeDate\"\n        [selected]=\"selected\"\n        [dateFilter]=\"dateFilter\"\n        [maxDate]=\"maxDate\"\n        [minDate]=\"minDate\"\n        (yearSelected)=\"yearSelectedInMultiYearView($event)\"\n        (selectedChange)=\"goToDateInView($event, 'month')\">\n    </mc-multi-year-view>\n</div>\n",
            host: {
              "class": 'mc-calendar'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [".mc-calendar{display:block}.mc-calendar-header{display:flex;padding:var(--mc-datepicker-calendar-size-padding-top,16px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-blocks,12px) var(--mc-datepicker-calendar-size-padding-horizontal,8px)}.mc-calendar__content{padding:0 var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px);outline:none}.mc-calendar-spacer{flex:1 1 auto}.mc-calendar__period-button{min-width:0}.mc-calendar__previous-button:after{border-left-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-prev-icon-transform,translateX(2px) rotate(-45deg))}.mc-calendar__next-button:after{border-right-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-nex-icon-transform,translateX(-2px) rotate(45deg))}.mc-calendar__table{border-spacing:0;border-collapse:collapse;width:100%}.mc-calendar__table-header th{text-align:center;height:30px}.mc-calendar__table-header th.mc-calendar__table-header-divider{position:relative;height:calc(var(--mc-datepicker-calendar-size-padding-blocks, 12px) - 2px)}.mc-calendar__table-header th.mc-calendar__table-header-divider:after{content:\"\";position:absolute;top:0;left:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));right:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));height:var(--mc-datepicker-calendar-size-divider-width,1px)}"]
          }]
        }], function () {
          return [{
            type: McDatepickerIntl
          }, {
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, {
          startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          monthView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [McMonthView, {
              "static": false
            }]
          }],
          yearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [McYearView, {
              "static": false
            }]
          }],
          multiYearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [McMultiYearView, {
              "static": false
            }]
          }]
        });
      })();
      /**
       * Animations used by the mosaic datepicker.
       * @docs-private
       */


      var mcDatepickerAnimations = {
        /** Transforms the height of the datepicker's calendar. */
        transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
          opacity: 0,
          transform: 'scale(1, 0.8)'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
          opacity: 1,
          transform: 'scale(1, 1)'
        }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
          opacity: 0
        })))]),

        /** Fades in the content of the calendar. */
        fadeInCalendar: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('fadeInCalendar', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
          opacity: 0
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
          opacity: 1
        })), // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))])
      }; // todo should be put into polyfils
      // https://github.com/angular/angular/issues/24769

      if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.msMatchesSelector;
      } // tslint:disable:no-unbound-method

      /** Used to generate a unique ID for each datepicker instance. */


      var datepickerUid = 0;
      /** Injection token that determines the scroll handling while the calendar is open. */

      var MC_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('mc-datepicker-scroll-strategy');
      /** @docs-private */
      // tslint:disable-next-line:naming-convention

      function MC_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MC_DATEPICKER_SCROLL_STRATEGY,
        deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]],
        useFactory: MC_DATEPICKER_SCROLL_STRATEGY_FACTORY
      };
      /**
       * Component used as the content for the datepicker dialog and popup. We use this instead of using
       * McCalendar directly as the content so we can control the initial focus. This also gives us a
       * place to put additional features of the popup that are not part of the calendar itself in the
       * future. (e.g. confirmation buttons).
       * @docs-private
       */

      var McDatepickerContent = function McDatepickerContent() {
        _classCallCheck(this, McDatepickerContent);
      };

      McDatepickerContent.ɵfac = function McDatepickerContent_Factory(t) {
        return new (t || McDatepickerContent)();
      };

      McDatepickerContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McDatepickerContent,
        selectors: [["mc-datepicker__content"]],
        viewQuery: function McDatepickerContent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](McCalendar, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.calendar = _t.first);
          }
        },
        hostAttrs: [1, "mc-datepicker__content"],
        hostVars: 1,
        hostBindings: function McDatepickerContent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsyntheticHostProperty"]("@transformPanel", "enter");
          }
        },
        exportAs: ["mcDatepickerContent"],
        decls: 1,
        vars: 11,
        consts: [[3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "selectedChange", "yearSelected", "monthSelected", "userSelection"]],
        template: function McDatepickerContent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mc-calendar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedChange", function McDatepickerContent_Template_mc_calendar_selectedChange_0_listener($event) {
              return ctx.datepicker.select($event);
            })("yearSelected", function McDatepickerContent_Template_mc_calendar_yearSelected_0_listener($event) {
              return ctx.datepicker.selectYear($event);
            })("monthSelected", function McDatepickerContent_Template_mc_calendar_monthSelected_0_listener($event) {
              return ctx.datepicker.selectMonth($event);
            })("userSelection", function McDatepickerContent_Template_mc_calendar_userSelection_0_listener() {
              return ctx.datepicker.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker.minDate)("maxDate", ctx.datepicker.maxDate)("dateFilter", ctx.datepicker.dateFilter)("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx.datepicker.selected)("dateClass", ctx.datepicker.dateClass)("@fadeInCalendar", "enter");
          }
        },
        directives: [McCalendar, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        styles: [".mc-calendar{display:block}.mc-calendar-header{display:flex;padding:var(--mc-datepicker-calendar-size-padding-top,16px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-blocks,12px) var(--mc-datepicker-calendar-size-padding-horizontal,8px)}.mc-calendar__content{padding:0 var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px);outline:none}.mc-calendar-spacer{flex:1 1 auto}.mc-calendar__period-button{min-width:0}.mc-calendar__previous-button:after{border-left-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-prev-icon-transform,translateX(2px) rotate(-45deg))}.mc-calendar__next-button:after{border-right-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-nex-icon-transform,translateX(-2px) rotate(45deg))}.mc-calendar__table{border-spacing:0;border-collapse:collapse;width:100%}.mc-calendar__table-header th{text-align:center;height:30px}.mc-calendar__table-header th.mc-calendar__table-header-divider{position:relative;height:calc(var(--mc-datepicker-calendar-size-padding-blocks, 12px) - 2px)}.mc-calendar__table-header th.mc-calendar__table-header-divider:after{content:\"\";position:absolute;top:0;left:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));right:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));height:var(--mc-datepicker-calendar-size-divider-width,1px)}.mc-datepicker__content{display:block;border-width:1px;border-style:solid}.mc-datepicker__content .mc-calendar{width:296px;height:348px}.mc-datepicker__content .mc-calendar__next-button[disabled],.mc-datepicker__content .mc-calendar__previous-button[disabled]{border:0}"],
        encapsulation: 2,
        data: {
          animation: [mcDatepickerAnimations.transformPanel, mcDatepickerAnimations.fadeInCalendar]
        },
        changeDetection: 0
      });
      McDatepickerContent.propDecorators = {
        calendar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: [McCalendar, {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McDatepickerContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-datepicker__content',
            exportAs: 'mcDatepickerContent',
            template: "<mc-calendar [id]=\"datepicker.id\"\n             [ngClass]=\"datepicker.panelClass\"\n             [startAt]=\"datepicker.startAt\"\n             [startView]=\"datepicker.startView\"\n             [minDate]=\"datepicker.minDate\"\n             [maxDate]=\"datepicker.maxDate\"\n             [dateFilter]=\"datepicker.dateFilter\"\n             [headerComponent]=\"datepicker.calendarHeaderComponent\"\n             [selected]=\"datepicker.selected\"\n             [dateClass]=\"datepicker.dateClass\"\n             [@fadeInCalendar]=\"'enter'\"\n             (selectedChange)=\"datepicker.select($event)\"\n             (yearSelected)=\"datepicker.selectYear($event)\"\n             (monthSelected)=\"datepicker.selectMonth($event)\"\n             (userSelection)=\"datepicker.close()\">\n</mc-calendar>\n",
            host: {
              "class": 'mc-datepicker__content',
              '[@transformPanel]': '"enter"'
            },
            animations: [mcDatepickerAnimations.transformPanel, mcDatepickerAnimations.fadeInCalendar],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [".mc-calendar{display:block}.mc-calendar-header{display:flex;padding:var(--mc-datepicker-calendar-size-padding-top,16px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-blocks,12px) var(--mc-datepicker-calendar-size-padding-horizontal,8px)}.mc-calendar__content{padding:0 var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px) var(--mc-datepicker-calendar-size-padding-horizontal,8px);outline:none}.mc-calendar-spacer{flex:1 1 auto}.mc-calendar__period-button{min-width:0}.mc-calendar__previous-button:after{border-left-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-prev-icon-transform,translateX(2px) rotate(-45deg))}.mc-calendar__next-button:after{border-right-width:var(--mc-datepicker-calendar-size-icon-border-width,2px);transform:var(--mc-datepicker-calendar-size-icon-nex-icon-transform,translateX(-2px) rotate(45deg))}.mc-calendar__table{border-spacing:0;border-collapse:collapse;width:100%}.mc-calendar__table-header th{text-align:center;height:30px}.mc-calendar__table-header th.mc-calendar__table-header-divider{position:relative;height:calc(var(--mc-datepicker-calendar-size-padding-blocks, 12px) - 2px)}.mc-calendar__table-header th.mc-calendar__table-header-divider:after{content:\"\";position:absolute;top:0;left:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));right:calc(-1 * var(--mc-datepicker-calendar-size-padding-horizontal, 8px));height:var(--mc-datepicker-calendar-size-divider-width,1px)}.mc-datepicker__content{display:block;border-width:1px;border-style:solid}.mc-datepicker__content .mc-calendar{width:296px;height:348px}.mc-datepicker__content .mc-calendar__next-button[disabled],.mc-datepicker__content .mc-calendar__previous-button[disabled]{border:0}"]
          }]
        }], null, {
          calendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [McCalendar, {
              "static": false
            }]
          }]
        });
      })(); // TODO: We use a component instead of a directive here so the user can use implicit
      // template reference variables (e.g. #d vs #d="mcDatepicker"). We can change this to a directive
      // if angular adds support for `exportAs: '$implicit'` on directives.

      /** Component responsible for managing the datepicker popup/dialog. */


      var McDatepicker = /*#__PURE__*/function () {
        function McDatepicker(overlay, ngZone, viewContainerRef, scrollStrategy, dateAdapter, dir, document) {
          _classCallCheck(this, McDatepicker);

          this.overlay = overlay;
          this.ngZone = ngZone;
          this.viewContainerRef = viewContainerRef;
          this.dateAdapter = dateAdapter;
          this.dir = dir;
          this.document = document;
          this._hasBackdrop = false;
          this._opened = false;
          /** The view that the calendar should start in. */

          this.startView = McCalendarView.Month;
          /**
           * Emits selected year in multiyear view.
           * This doesn't imply a change on the selected date.
           */

          this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /**
           * Emits selected month in year view.
           * This doesn't imply a change on the selected date.
           */

          this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.backdropClass = 'cdk-overlay-transparent-backdrop';
          /** Emits when the datepicker has been opened. */

          this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the datepicker has been closed. */

          this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** The id for the datepicker calendar. */

          this.id = "mc-datepicker-".concat(datepickerUid++);
          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** Emits when the datepicker is disabled. */

          this.disabledChange = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          /** Emits new selected date when selected date changes. */

          this.selectedChanged = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          this.validSelected = null;
          /** The element that was focused before the datepicker was opened. */

          this.focusedElementBeforeOpen = null;
          /** Subscription to value changes in the associated input element. */

          this.inputSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          this.closeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;

          if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          this.scrollStrategy = scrollStrategy;
        }

        _createClass(McDatepicker, [{
          key: "hasBackdrop",
          get: function get() {
            return this._hasBackdrop;
          },
          set: function set(value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
          }
          /** The date to open the calendar to initially. */

        }, {
          key: "startAt",
          get: function get() {
            // If an explicit startAt is set we start there, otherwise we start at whatever the currently
            // selected value is.
            return this._startAt || (this.datepickerInput ? this.datepickerInput.value : null);
          },
          set: function set(value) {
            this._startAt = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
          }
          /** Whether the datepicker pop-up should be disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled === undefined && this.datepickerInput ? this.datepickerInput.disabled : this._disabled;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);

            if (newValue !== this._disabled) {
              this._disabled = newValue;
              this.disabledChange.next(newValue);
            }
          }
          /** Whether the calendar is open. */

        }, {
          key: "opened",
          get: function get() {
            return this._opened;
          },
          set: function set(value) {
            Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value) ? this.open() : this.close();
          }
          /** The currently selected date. */

        }, {
          key: "selected",
          get: function get() {
            return this.validSelected;
          },
          set: function set(value) {
            this.validSelected = value;
          }
          /** The minimum selectable date. */

        }, {
          key: "minDate",
          get: function get() {
            return this.datepickerInput && this.datepickerInput.min;
          }
          /** The maximum selectable date. */

        }, {
          key: "maxDate",
          get: function get() {
            return this.datepickerInput && this.datepickerInput.max;
          }
        }, {
          key: "dateFilter",
          get: function get() {
            return this.datepickerInput && this.datepickerInput.dateFilter;
          }
        }, {
          key: "value",
          get: function get() {
            return this.selected;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.close();
            this.inputSubscription.unsubscribe();
            this.closeSubscription.unsubscribe();
            this.disabledChange.complete();

            if (this.popupRef) {
              this.popupRef.dispose();
              this.popupComponentRef = null;
            }
          }
          /** Selects the given date */

        }, {
          key: "select",
          value: function select(date) {
            var oldValue = this.selected;
            this.selected = date;

            if (!this.dateAdapter.sameDate(oldValue, this.selected)) {
              this.selectedChanged.next(date);
            }
          }
          /** Emits the selected year in multiyear view */

        }, {
          key: "selectYear",
          value: function selectYear(normalizedYear) {
            this.yearSelected.emit(normalizedYear);
          }
          /** Emits selected month in year view */

        }, {
          key: "selectMonth",
          value: function selectMonth(normalizedMonth) {
            this.monthSelected.emit(normalizedMonth);
          }
          /**
           * Register an input with this datepicker.
           * @param input The datepicker input to register with this datepicker.
           */

        }, {
          key: "registerInput",
          value: function registerInput(input) {
            var _this7 = this;

            if (this.datepickerInput) {
              throw Error('A McDatepicker can only be associated with a single input.');
            }

            this.datepickerInput = input;
            this.inputSubscription = this.datepickerInput.valueChange.subscribe(function (value) {
              var _a;

              _this7.selected = value; // @ts-ignore

              if (_this7.popupComponentRef) {
                (_a = _this7.popupComponentRef.instance.calendar.monthView) === null || _a === void 0 ? void 0 : _a.init();
                _this7.popupComponentRef.instance.calendar.activeDate = value;
              }
            });
          }
          /** Open the calendar. */

        }, {
          key: "open",
          value: function open() {
            if (this._opened || this.disabled) {
              return;
            }

            if (!this.datepickerInput) {
              throw Error('Attempted to open an McDatepicker with no associated input.');
            }

            if (this.document) {
              this.focusedElementBeforeOpen = this.document.activeElement;
            }

            this.openAsPopup();
            this._opened = true;
            this.openedStream.emit();
          }
          /** Close the calendar. */

        }, {
          key: "close",
          value: function close() {
            var _this8 = this;

            var restoreFocus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (!this._opened) {
              return;
            }

            if (this.popupRef && this.popupRef.hasAttached()) {
              this.popupRef.detach();
            }

            if (this.calendarPortal && this.calendarPortal.isAttached) {
              this.calendarPortal.detach();
            }

            var completeClose = function completeClose() {
              // The `_opened` could've been reset already if
              // we got two events in quick succession.
              if (_this8._opened) {
                _this8._opened = false;

                _this8.closedStream.emit();

                _this8.focusedElementBeforeOpen = null;

                if (restoreFocus) {
                  _this8.datepickerInput.elementRef.nativeElement.focus();
                }
              }
            };

            if (this.focusedElementBeforeOpen && typeof this.focusedElementBeforeOpen.focus === 'function') {
              // Because IE moves focus asynchronously, we can't count on it being restored before we've
              // marked the datepicker as closed. If the event fires out of sequence and the element that
              // we're refocusing opens the datepicker on focus, the user could be stuck with not being
              // able to close the calendar at all. We work around it by making the logic, that marks
              // the datepicker as closed, async as well.
              if (restoreFocus) {
                this.focusedElementBeforeOpen.focus();
              }

              setTimeout(completeClose);
            } else {
              completeClose();
            }
          }
        }, {
          key: "toggle",
          value: function toggle() {
            if (this.datepickerInput.isReadOnly) {
              return;
            }

            this._opened ? this.close() : this.open();
          }
          /** Open the calendar as a popup. */

        }, {
          key: "openAsPopup",
          value: function openAsPopup() {
            var _this9 = this;

            if (!this.calendarPortal) {
              this.calendarPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](McDatepickerContent, this.viewContainerRef);
            }

            if (!this.popupRef) {
              this.createPopup();
            }

            if (!this.popupRef.hasAttached()) {
              this.popupComponentRef = this.popupRef.attach(this.calendarPortal);
              this.popupComponentRef.instance.datepicker = this; // Update the position once the calendar has rendered.

              this.ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(function () {
                return _this9.popupRef.updatePosition();
              });
            }
          }
          /** Create the popup. */

        }, {
          key: "createPopup",
          value: function createPopup() {
            var _this10 = this;

            var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
              positionStrategy: this.createPopupPositionStrategy(),
              hasBackdrop: this.hasBackdrop,
              backdropClass: this.backdropClass,
              direction: this.dir,
              scrollStrategy: this.scrollStrategy(),
              panelClass: 'mc-datepicker__popup'
            });
            this.popupRef = this.overlay.create(overlayConfig);
            this.closeSubscription = this.closingActions().subscribe(function () {
              return _this10.close();
            });
          }
        }, {
          key: "closingActions",
          value: function closingActions() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.popupRef.backdropClick(), this.popupRef.outsidePointerEvents());
          }
          /** Create the popup PositionStrategy. */

        }, {
          key: "createPopupPositionStrategy",
          value: function createPopupPositionStrategy() {
            return this.overlay.position().flexibleConnectedTo(this.datepickerInput.elementRef).withTransformOriginOn('.mc-datepicker__content').withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition().withPositions([{
              originX: 'start',
              originY: 'bottom',
              overlayX: 'start',
              overlayY: 'top'
            }, {
              originX: 'start',
              originY: 'top',
              overlayX: 'start',
              overlayY: 'bottom'
            }, {
              originX: 'end',
              originY: 'bottom',
              overlayX: 'end',
              overlayY: 'top'
            }, {
              originX: 'end',
              originY: 'top',
              overlayX: 'end',
              overlayY: 'bottom'
            }]);
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj) ? obj : null;
          }
        }]);

        return McDatepicker;
      }();

      McDatepicker.ɵfac = function McDatepicker_Factory(t) {
        return new (t || McDatepicker)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MC_DATEPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8));
      };

      McDatepicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McDatepicker,
        selectors: [["mc-datepicker"]],
        inputs: {
          startView: "startView",
          backdropClass: "backdropClass",
          hasBackdrop: "hasBackdrop",
          startAt: "startAt",
          disabled: "disabled",
          opened: "opened",
          calendarHeaderComponent: "calendarHeaderComponent",
          panelClass: "panelClass",
          dateClass: "dateClass"
        },
        outputs: {
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          openedStream: "opened",
          closedStream: "closed"
        },
        exportAs: ["mcDatepicker"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
          provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_15__["McFormFieldControl"],
          useExisting: McDatepicker
        }])],
        decls: 0,
        vars: 0,
        template: function McDatepicker_Template(rf, ctx) {},
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McDatepicker.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [MC_DATEPICKER_SCROLL_STRATEGY]
          }]
        }, {
          type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };

      McDatepicker.propDecorators = {
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startAt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        opened: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        calendarHeaderComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        startView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        yearSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        monthSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        dateClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        openedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['opened']
        }],
        closedStream: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
          args: ['closed']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McDatepicker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-datepicker',
            template: '',
            exportAs: 'mcDatepicker',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            providers: [{
              provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_15__["McFormFieldControl"],
              useExisting: McDatepicker
            }]
          }]
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [MC_DATEPICKER_SCROLL_STRATEGY]
            }]
          }, {
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, {
          startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
            args: ['opened']
          }],
          closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
            args: ['closed']
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          calendarHeaderComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })(); // @ts-nocheck
      // tslint:disable:naming-convention


      var DateParts;

      (function (DateParts) {
        DateParts["year"] = "y";
        DateParts["month"] = "m";
        DateParts["day"] = "d";
      })(DateParts || (DateParts = {}));

      var DateDigit = /*#__PURE__*/function () {
        function DateDigit(value, start, length) {
          var firstMonth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

          _classCallCheck(this, DateDigit);

          this.value = value;
          this.start = start;
          this.length = length;
          this.firstMonth = firstMonth;
          this.maxDays = 31;

          if (value === DateParts.day) {
            this.parse = this.parseDay;
          } else if (value === DateParts.month) {
            this.parse = this.parseMonth;
          } else if (value === DateParts.year) {
            this.parse = this.parseYear;
          }
        }

        _createClass(DateDigit, [{
          key: "maxMonth",
          get: function get() {
            // tslint:disable-next-line:no-magic-numbers binary-expression-operand-order
            return 11 + this.firstMonth;
          }
        }, {
          key: "end",
          get: function get() {
            return this.start + this.length;
          }
        }, {
          key: "isDay",
          get: function get() {
            return this.value === DateParts.day;
          }
        }, {
          key: "isMonth",
          get: function get() {
            return this.value === DateParts.month;
          }
        }, {
          key: "isYear",
          get: function get() {
            return this.value === DateParts.year;
          }
        }, {
          key: "fullName",
          get: function get() {
            if (this.isDay) {
              return 'date';
            }

            if (this.isMonth) {
              return 'month';
            }

            if (this.isYear) {
              return 'year';
            }
          }
        }, {
          key: "parseDay",
          value: function parseDay(value) {
            var parsedValue = parseInt(value);

            if (parsedValue === 0) {
              return 1;
            }

            if (parsedValue > this.maxDays) {
              return this.maxDays;
            }

            return parsedValue;
          }
        }, {
          key: "parseMonth",
          value: function parseMonth(value) {
            var parsedValue = parseInt(value);

            if (parsedValue === 0) {
              return 1;
            }

            if (parsedValue > this.maxMonth) {
              return this.maxMonth;
            }

            return parsedValue;
          }
        }, {
          key: "parseYear",
          value: function parseYear(value) {
            var parsedValue = parseInt(value);

            if (parsedValue === 0) {
              return 1;
            }

            return parsedValue;
          }
        }]);

        return DateDigit;
      }();
      /** @docs-private */


      var MC_DATEPICKER_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return McDatepickerInput;
        }),
        multi: true
      };
      /** @docs-private */

      var MC_DATEPICKER_VALIDATORS = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () {
          return McDatepickerInput;
        }),
        multi: true
      };
      /**
       * An event used for datepicker input and change events. We don't always have access to a native
       * input or change event because the event may have been triggered by the user clicking on the
       * calendar popup. For consistency, we always use McDatepickerInputEvent instead.
       */

      var McDatepickerInputEvent = function McDatepickerInputEvent(
      /** Reference to the datepicker input component that emitted the event. */
      target,
      /** Reference to the native input element associated with the datepicker input. */
      targetElement) {
        _classCallCheck(this, McDatepickerInputEvent);

        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
      };

      var uniqueComponentIdSuffix = 0;
      /** Directive used to connect an input to a McDatepicker. */

      var McDatepickerInput = /*#__PURE__*/function () {
        function McDatepickerInput(elementRef, renderer, dateAdapter, dateFormats) {
          var _this11 = this;

          _classCallCheck(this, McDatepickerInput);

          this.elementRef = elementRef;
          this.renderer = renderer;
          this.dateAdapter = dateAdapter;
          this.dateFormats = dateFormats;
          this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
          this.controlType = 'datepicker';
          this.focused = false;
          /** Emits when the value changes (either due to user input or programmatic change). */

          this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when the disabled state has changed */

          this.disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this._disabled = false;
          this.incorrectInput = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when a `change` event is fired on this `<input>`. */

          this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          /** Emits when an `input` event is fired on this `<input>`. */

          this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
          this.uid = "mc-datepicker-".concat(uniqueComponentIdSuffix++);
          this.datepickerSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          this.localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
          /** Whether the last value set on the input was valid. */

          this.lastValueValid = false;

          this.onTouched = function () {};

          this.onInput = function () {
            _this11.correctCursorPosition();

            var formattedValue = _this11.replaceSymbols(_this11.viewValue);

            var newTimeObj = _this11.getDateFromString(formattedValue);

            _this11.lastValueValid = !!newTimeObj;

            if (!newTimeObj) {
              _this11.control.updateValueAndValidity();

              _this11._value = null;
              return;
            }

            _this11.setViewValue(_this11.getTimeStringFromDate(newTimeObj, _this11.dateFormats.dateInput), true);

            _this11.selectNextDigitByCursor(_this11.selectionStart);

            _this11.updateValue(newTimeObj);
          };

          this.parseOnBlur = function () {
            if (!_this11.viewValue) {
              return null;
            }

            var date = _this11.getDefaultValue();

            var viewDigits = _this11.viewValue.split(_this11.separator).map(function (value) {
              return value;
            }).filter(function (value) {
              return value;
            });

            var _viewDigits = _slicedToArray(viewDigits, 3),
                firsViewDigit = _viewDigits[0],
                secondViewDigit = _viewDigits[1],
                thirdViewDigit = _viewDigits[2]; // tslint:disable-next-line:no-magic-numbers


            if (viewDigits.length !== 3) {
              _this11.lastValueValid = false;
              _this11._value = null;
              return setTimeout(function () {
                return _this11.control.updateValueAndValidity();
              });
            }

            date[_this11.firstDigit.fullName] = _this11.firstDigit.parse(firsViewDigit);
            date[_this11.secondDigit.fullName] = _this11.secondDigit.parse(secondViewDigit);
            date[_this11.thirdDigit.fullName] = _this11.thirdDigit.parse(thirdViewDigit);

            var _reduce = [_this11.firstDigit, _this11.secondDigit, _this11.thirdDigit].reduce(function (acc, digit, index) {
              return digit.value === DateParts.year ? [digit, viewDigits[index]] : acc;
            }, []),
                _reduce2 = _slicedToArray(_reduce, 2),
                digitWithYear = _reduce2[0],
                viewDigitWithYear = _reduce2[1]; // tslint:disable-next-line:no-magic-numbers


            if (viewDigitWithYear.length < 3) {
              // tslint:disable-next-line:no-magic-numbers
              date.year += date.year < 30 ? 2000 : 1900;
            } else if (viewDigitWithYear.length < digitWithYear.length) {
              _this11.lastValueValid = false;
              _this11._value = null;
              return setTimeout(function () {
                return _this11.control.updateValueAndValidity();
              });
            }

            var newTimeObj = _this11.getValidDateOrNull(_this11.dateAdapter.createDateTime(date.year, date.month, date.date, date.hours, date.minutes, date.seconds, date.milliseconds));

            _this11.lastValueValid = !!newTimeObj;

            _this11.setViewValue(_this11.getTimeStringFromDate(newTimeObj, _this11.dateFormats.dateInput), true);

            _this11.updateValue(newTimeObj);
          };

          this.updateLocaleParams = function () {
            _this11.setFormat(_this11.dateFormats.dateInput);

            _this11.value = _this11.value;
          };

          this.cvaOnChange = function () {};

          this.validatorOnChange = function () {};
          /** The form control validator for whether the input parses. */


          this.parseValidator = function () {
            return _this11.focused || _this11.empty || _this11.lastValueValid ? null : {
              mcDatepickerParse: {
                text: _this11.elementRef.nativeElement.value
              }
            };
          };
          /** The form control validator for the min date. */


          this.minValidator = function (control) {
            var controlValue = _this11.getValidDateOrNull(_this11.dateAdapter.deserialize(control.value));

            return !_this11.min || !controlValue || _this11.dateAdapter.compareDate(_this11.min, controlValue) <= 0 ? null : {
              mcDatepickerMin: {
                min: _this11.min,
                actual: controlValue
              }
            };
          };
          /** The form control validator for the max date. */


          this.maxValidator = function (control) {
            var controlValue = _this11.getValidDateOrNull(_this11.dateAdapter.deserialize(control.value));

            return !_this11.max || !controlValue || _this11.dateAdapter.compareDate(_this11.max, controlValue) >= 0 ? null : {
              mcDatepickerMax: {
                max: _this11.max,
                actual: controlValue
              }
            };
          };
          /** The form control validator for the date filter. */


          this.filterValidator = function (control) {
            var controlValue = _this11.getValidDateOrNull(_this11.dateAdapter.deserialize(control.value));

            return !_this11.dateFilter || !controlValue || _this11.dateFilter(controlValue) ? null : {
              mcDatepickerFilter: true
            };
          };

          this.validator = _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].compose([this.parseValidator, this.minValidator, this.maxValidator, this.filterValidator]);

          if (!this.dateAdapter) {
            throw createMissingDateImplError('DateAdapter');
          }

          if (!this.dateFormats) {
            throw createMissingDateImplError('MC_DATE_FORMATS');
          }

          this.setFormat(dateFormats.dateInput);
          this.localeSubscription = dateAdapter.localeChanges.subscribe(this.updateLocaleParams);
        }

        _createClass(McDatepickerInput, [{
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
          }
          /** The datepicker that this input is associated with. */

        }, {
          key: "mcDatepicker",
          set: function set(value) {
            var _this12 = this;

            if (!value) {
              return;
            }

            this.datepicker = value;
            this.datepicker.registerInput(this);
            this.datepickerSubscription.unsubscribe();
            this.datepickerSubscription = this.datepicker.selectedChanged.subscribe(function (selected) {
              _this12.value = selected;

              _this12.cvaOnChange(selected);

              _this12.onTouched();

              _this12.dateChange.emit(new McDatepickerInputEvent(_this12, _this12.elementRef.nativeElement));
            });
          }
          /** Function that can be used to filter out dates within the datepicker. */

        }, {
          key: "mcDatepickerFilter",
          set: function set(value) {
            this.dateFilter = value;
            this.validatorOnChange();
          }
          /** The value of the input. */

        }, {
          key: "value",
          get: function get() {
            return this._value;
          },
          set: function set(value) {
            var newValue = this.dateAdapter.deserialize(value);
            this.lastValueValid = !newValue || this.dateAdapter.isValid(newValue);
            newValue = this.getValidDateOrNull(newValue);
            var oldDate = this.value;
            this._value = newValue;
            this.formatValue(newValue);

            if (!this.dateAdapter.sameDate(oldDate, newValue)) {
              this.valueChange.emit(newValue);
            }
          }
          /** The minimum valid date. */

        }, {
          key: "min",
          get: function get() {
            return this._min;
          },
          set: function set(value) {
            this._min = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
            this.validatorOnChange();
          }
          /** The maximum valid date. */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          },
          set: function set(value) {
            this._max = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
            this.validatorOnChange();
          }
          /** Whether the datepicker-input is disabled. */

        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
            var element = this.elementRef.nativeElement;

            if (this._disabled !== newValue) {
              this._disabled = newValue;
              this.disabledChange.emit(newValue);
            } // We need to null check the `blur` method, because it's undefined during SSR.


            if (newValue && element.blur) {
              // Normally, native input elements automatically blur if they turn disabled. This behavior
              // is problematic, because it would mean that it triggers another change detection cycle,
              // which then causes a changed after checked error if the input element was focused before.
              element.blur();
            }
          }
        }, {
          key: "id",
          get: function get() {
            return this._id;
          },
          set: function set(value) {
            this._id = value || this.uid;
          }
        }, {
          key: "mcValidationTooltip",
          set: function set(tooltip) {
            if (!tooltip) {
              return;
            }

            tooltip.mcMouseEnterDelay = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_14__["validationTooltipShowDelay"];
            tooltip.mcTrigger = 'manual';
            tooltip.mcTooltipClass = 'mc-tooltip_warning';
            tooltip.initElementRefListeners();
            this.incorrectInput.subscribe(function () {
              if (tooltip.isTooltipOpen) {
                return;
              }

              tooltip.show();
              setTimeout(function () {
                return tooltip.hide();
              }, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_14__["validationTooltipHideDelay"]);
            });
          }
        }, {
          key: "empty",
          get: function get() {
            return !this.viewValue && !this.isBadInput();
          }
        }, {
          key: "viewValue",
          get: function get() {
            return this.elementRef.nativeElement.value;
          }
        }, {
          key: "ngControl",
          get: function get() {
            return this.control;
          }
        }, {
          key: "isReadOnly",
          get: function get() {
            return this.elementRef.nativeElement.readOnly;
          }
        }, {
          key: "selectionStart",
          get: function get() {
            return this.elementRef.nativeElement.selectionStart;
          },
          set: function set(value) {
            this.elementRef.nativeElement.selectionStart = value;
          }
        }, {
          key: "selectionEnd",
          get: function get() {
            return this.elementRef.nativeElement.selectionEnd;
          },
          set: function set(value) {
            this.elementRef.nativeElement.selectionEnd = value;
          }
        }, {
          key: "onContainerClick",
          value: function onContainerClick() {
            this.focus();
          }
        }, {
          key: "focus",
          value: function focus() {
            this.elementRef.nativeElement.focus();
          }
        }, {
          key: "focusChanged",
          value: function focusChanged(isFocused) {
            if (isFocused !== this.focused) {
              this.focused = isFocused;
              this.onTouched();
              this.stateChanges.next();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.datepickerSubscription.unsubscribe();
            this.localeSubscription.unsubscribe();
            this.valueChange.complete();
            this.disabledChange.complete();
          }
          /** @docs-private */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.validatorOnChange = fn;
          }
          /** @docs-private */

        }, {
          key: "validate",
          value: function validate(control) {
            this.setControl(control);
            return this.validator ? this.validator(control) : null;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.cvaOnChange = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          } // Implemented as part of ControlValueAccessor.

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown(event) {
            if (this.isReadOnly) {
              return;
            } // tslint:disable-next-line: deprecation


            var keyCode = event.keyCode;

            if (this.isLetterKey(event)) {
              event.preventDefault();
              this.incorrectInput.emit();
            } else if (this.isKeyForOpen(event)) {
              event.preventDefault();
              this.datepicker.open();
            } else if (this.isKeyForClose(event)) {
              event.preventDefault();
              this.datepicker.close();
            } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["TAB"]) {
              this.datepicker.close(false);
            } else if (this.isKeyForByPass(event)) {
              return;
            } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["SPACE"]) {
              this.spaceKeyHandler(event);
            } else if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]].includes(keyCode)) {
              event.preventDefault();
              this.verticalArrowKeyHandler(keyCode);
            } else if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]].includes(keyCode)) {
              event.preventDefault();
              this.changeCaretPosition(keyCode);
            } else if (/^\D$/.test(event.key)) {
              event.preventDefault();
              var newValue = this.getNewValue(event.key, this.selectionStart);
              var formattedValue = this.replaceSymbols(newValue);

              if (newValue !== formattedValue) {
                this.setViewValue(formattedValue, true);
                setTimeout(this.onInput);
              } else {
                this.incorrectInput.emit();
              }
            } else {
              setTimeout(this.onInput);
            }
          }
        }, {
          key: "onChange",
          value: function onChange() {
            this.dateChange.emit(new McDatepickerInputEvent(this, this.elementRef.nativeElement));
          }
          /** Handles blur events on the input. */

        }, {
          key: "onBlur",
          value: function onBlur() {
            // Reformat the input only if we have a valid value.
            this.parseOnBlur();
            this.focusChanged(false);
          }
        }, {
          key: "onPaste",
          value: function onPaste($event) {
            var _a, _b, _c;

            $event.preventDefault();
            var rawValue = $event.clipboardData.getData('text');
            var match = rawValue.match( /*#__PURE__*/_wrapRegExp(/^([0-9]+)[\0-\/:-@\[-\^`\{-\uFFFF]([0-9]+)[\0-\/:-@\[-\^`\{-\uFFFF]([0-9]+)$/, {
              first: 1,
              second: 2,
              third: 3
            }));

            if (!((_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a.first) || !((_b = match === null || match === void 0 ? void 0 : match.groups) === null || _b === void 0 ? void 0 : _b.second) || !((_c = match === null || match === void 0 ? void 0 : match.groups) === null || _c === void 0 ? void 0 : _c.third)) {
              this.setViewValue(rawValue);
              return rawValue;
            }

            var value = [match.groups.first, match.groups.second, match.groups.third].join(this.separator);
            var newTimeObj = this.getDateFromString(value);

            if (!newTimeObj) {
              this.setViewValue(value);
              return value;
            }

            this.setViewValue(this.getTimeStringFromDate(newTimeObj, this.dateFormats.dateInput));
            this.updateValue(newTimeObj);
          }
        }, {
          key: "setFormat",
          value: function setFormat(format) {
            var _this13 = this;

            this.separator = format.match( /*#__PURE__*/_wrapRegExp(/[A-z]+([\0-\/:-@\[-\^`\{-\uFFFF]|[\0-\/:-\uFFFF])[A-z]+/, {
              separator: 1
            })).groups.separator;
            this.separatorPositions = format.split('').reduce(function (acc, item, index) {
              return _this13.separator === item ? [].concat(_toConsumableArray(acc), [index + 1]) : acc;
            }, []);
            this.getDigitPositions(format);
          }
        }, {
          key: "updateValue",
          value: function updateValue(newValue) {
            if (!this.dateAdapter.sameDate(newValue, this.value)) {
              this._value = newValue;
              this.cvaOnChange(newValue);
              this.valueChange.emit(newValue);
              this.dateInput.emit(new McDatepickerInputEvent(this, this.elementRef.nativeElement));
            }

            this.control.updateValueAndValidity();
          }
        }, {
          key: "isKeyForClose",
          value: function isKeyForClose(event) {
            // tslint:disable-next-line: deprecation
            return event.altKey && event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"] || event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ESCAPE"];
          }
        }, {
          key: "isKeyForOpen",
          value: function isKeyForOpen(event) {
            // tslint:disable-next-line: deprecation
            return event.altKey && event.keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"];
          }
        }, {
          key: "isLetterKey",
          value: function isLetterKey(event) {
            return Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["isLetterKey"])(event) && !event.ctrlKey && !event.metaKey;
          }
        }, {
          key: "isKeyForByPass",
          value: function isKeyForByPass(event) {
            // tslint:disable-next-line: deprecation
            return Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event) && (Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["isVerticalMovement"])(event.keyCode) || Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["isHorizontalMovement"])(event.keyCode)) || event.ctrlKey || event.metaKey || // tslint:disable-next-line: deprecation
            [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DELETE"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["BACKSPACE"]].includes(event.keyCode);
          }
        }, {
          key: "spaceKeyHandler",
          value: function spaceKeyHandler(event) {
            event.preventDefault();

            if (this.selectionStart === this.selectionEnd) {
              var value = this.getNewValue(event.key, this.selectionStart);
              this.setViewValue(value);
              setTimeout(this.onInput);
            } else if (this.selectionStart !== this.selectionEnd) {
              this.selectNextDigit(this.selectionStart, true);
            }
          }
        }, {
          key: "getNewValue",
          value: function getNewValue(key, position) {
            return [this.viewValue.slice(0, position), key, this.viewValue.slice(position)].join('');
          }
        }, {
          key: "setViewValue",
          value: function setViewValue(value) {
            var savePosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            if (savePosition) {
              var selectionStart = this.selectionStart;
              var selectionEnd = this.selectionEnd;
              this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
              this.selectionStart = selectionStart;
              this.selectionEnd = selectionEnd;
            } else {
              this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
            }
          }
        }, {
          key: "replaceSymbols",
          value: function replaceSymbols(value) {
            return value.split(this.separator).map(function (part) {
              return part.replace(/^([0-9]+)\W$/, '0$1');
            }).join(this.separator);
          }
        }, {
          key: "getDateFromString",
          value: function getDateFromString(timeString) {
            if (!timeString || timeString.length < this.firstDigit.length) {
              return null;
            }

            var date = this.getDefaultValue();
            var viewDigits = timeString.split(this.separator).map(function (value) {
              return value;
            });

            var _viewDigits2 = _slicedToArray(viewDigits, 3),
                firsViewDigit = _viewDigits2[0],
                secondViewDigit = _viewDigits2[1],
                thirdViewDigit = _viewDigits2[2];

            if (viewDigits.length === 1) {
              if (firsViewDigit.length < this.firstDigit.length) {
                return null;
              }

              date[this.firstDigit.fullName] = this.firstDigit.parse(firsViewDigit);
              date.month = 0; // tslint:disable-next-line:no-magic-numbers
            } else if (viewDigits.length === 2) {
              if (firsViewDigit.length < this.firstDigit.length || secondViewDigit.length < this.secondDigit.length) {
                return null;
              }

              date[this.firstDigit.fullName] = this.firstDigit.parse(firsViewDigit);
              date[this.secondDigit.fullName] = this.secondDigit.parse(secondViewDigit); // tslint:disable-next-line:no-magic-numbers
            } else if (viewDigits.length === 3) {
              if (firsViewDigit.length < this.firstDigit.length || secondViewDigit.length < this.secondDigit.length || thirdViewDigit.length < this.thirdDigit.length) {
                return null;
              }

              date[this.firstDigit.fullName] = this.firstDigit.parse(firsViewDigit);
              date[this.secondDigit.fullName] = this.secondDigit.parse(secondViewDigit);
              date[this.thirdDigit.fullName] = this.thirdDigit.parse(thirdViewDigit);
            } else {
              return null;
            }

            return this.getValidDateOrNull(this.dateAdapter.createDateTime(date.year, date.month, date.date, date.hours, date.minutes, date.seconds, date.milliseconds));
          }
        }, {
          key: "getDefaultValue",
          value: function getDefaultValue() {
            var defaultValue = this.value || this.dateAdapter.today();
            return {
              year: this.dateAdapter.getYear(defaultValue),
              month: this.dateAdapter.getMonth(defaultValue),
              date: this.dateAdapter.getDate(defaultValue),
              hours: this.dateAdapter.getHours(defaultValue),
              minutes: this.dateAdapter.getMinutes(defaultValue),
              seconds: this.dateAdapter.getSeconds(defaultValue),
              milliseconds: this.dateAdapter.getMilliseconds(defaultValue)
            };
          }
        }, {
          key: "getTimeStringFromDate",
          value: function getTimeStringFromDate(value, timeFormat) {
            if (!value || !this.dateAdapter.isValid(value)) {
              return '';
            }

            return this.dateAdapter.format(value, timeFormat);
          }
        }, {
          key: "getDateEditMetrics",
          value: function getDateEditMetrics(cursorPosition) {
            for (var _i2 = 0, _arr2 = [this.firstDigit, this.secondDigit, this.thirdDigit]; _i2 < _arr2.length; _i2++) {
              var digit = _arr2[_i2];

              if (cursorPosition >= digit.start && cursorPosition <= digit.end) {
                return [digit.value, digit.start, digit.end];
              }
            }

            return [this.thirdDigit.value, this.thirdDigit.start, this.thirdDigit.end];
          }
        }, {
          key: "incrementDate",
          value: function incrementDate(dateVal, whatToIncrement) {
            var year = this.dateAdapter.getYear(dateVal);
            var month = this.dateAdapter.getMonth(dateVal);
            var day = this.dateAdapter.getDate(dateVal);

            switch (whatToIncrement) {
              case DateParts.day:
                day++;

                if (day > this.dateAdapter.getNumDaysInMonth(dateVal)) {
                  day = 1;
                }

                break;

              case DateParts.month:
                month++;

                if (month > this.dateAdapter.lastMonth) {
                  month = this.dateAdapter.firstMonth;
                }

                var lastDay = this.getLastDayFor(year, month);

                if (day > lastDay) {
                  day = lastDay;
                }

                break;

              case DateParts.year:
                year++;
                break;

              default:
            }

            return this.createDate(year, month, day);
          }
        }, {
          key: "getLastDayFor",
          value: function getLastDayFor(year, month) {
            return this.dateAdapter.getNumDaysInMonth(this.createDate(year, month, 1));
          }
        }, {
          key: "decrementDate",
          value: function decrementDate(dateVal, whatToDecrement) {
            var year = this.dateAdapter.getYear(dateVal);
            var month = this.dateAdapter.getMonth(dateVal);
            var day = this.dateAdapter.getDate(dateVal);

            switch (whatToDecrement) {
              case DateParts.day:
                day--;

                if (day < 1) {
                  day = this.dateAdapter.getNumDaysInMonth(dateVal);
                }

                break;

              case DateParts.month:
                month--;

                if (month < this.dateAdapter.firstMonth) {
                  month = this.dateAdapter.lastMonth;
                }

                var lastDay = this.getLastDayFor(year, month);

                if (day > lastDay) {
                  day = lastDay;
                }

                break;

              case DateParts.year:
                year--;
                break;

              default:
            }

            return this.createDate(year, month, day);
          }
        }, {
          key: "verticalArrowKeyHandler",
          value: function verticalArrowKeyHandler(keyCode) {
            if (!this.value) {
              return;
            }

            var changedTime;

            var _this$getDateEditMetr = this.getDateEditMetrics(this.selectionStart),
                _this$getDateEditMetr2 = _slicedToArray(_this$getDateEditMetr, 3),
                modifiedTimePart = _this$getDateEditMetr2[0],
                selectionStart = _this$getDateEditMetr2[1],
                selectionEnd = _this$getDateEditMetr2[2];

            if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["UP_ARROW"]) {
              changedTime = this.incrementDate(this.value, modifiedTimePart);
            }

            if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["DOWN_ARROW"]) {
              changedTime = this.decrementDate(this.value, modifiedTimePart);
            }

            this.value = changedTime;
            this.selectionStart = selectionStart;
            this.selectionEnd = selectionEnd;
            this.onChange();
            this.stateChanges.next();
          }
        }, {
          key: "changeCaretPosition",
          value: function changeCaretPosition(keyCode) {
            if (!this.value) {
              return;
            }

            var cursorPos = this.selectionStart;

            if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["HOME"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_UP"]].includes(keyCode)) {
              cursorPos = 0;
            } else if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["END"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["PAGE_DOWN"]].includes(keyCode)) {
              cursorPos = this.viewValue.length;
            } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["LEFT_ARROW"]) {
              cursorPos = cursorPos === 0 ? this.viewValue.length : cursorPos - 1;
            } else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["RIGHT_ARROW"]) {
              var nextSeparatorPos = this.viewValue.indexOf(this.separator, cursorPos);
              cursorPos = nextSeparatorPos ? nextSeparatorPos + 1 : 0;
            }

            this.selectDigitByCursor(cursorPos);
          }
        }, {
          key: "selectDigitByCursor",
          value: function selectDigitByCursor(cursorPos) {
            var _this14 = this;

            setTimeout(function () {
              var _this14$getDateEditMe = _this14.getDateEditMetrics(cursorPos),
                  _this14$getDateEditMe2 = _slicedToArray(_this14$getDateEditMe, 3),
                  selectionStart = _this14$getDateEditMe2[1],
                  selectionEnd = _this14$getDateEditMe2[2];

              _this14.selectionStart = selectionStart;
              _this14.selectionEnd = selectionEnd;
            });
          }
        }, {
          key: "selectNextDigitByCursor",
          value: function selectNextDigitByCursor(cursorPos) {
            var _this15 = this;

            setTimeout(function () {
              var _this15$getDateEditMe = _this15.getDateEditMetrics(cursorPos),
                  _this15$getDateEditMe2 = _slicedToArray(_this15$getDateEditMe, 3),
                  endPositionOfCurrentDigit = _this15$getDateEditMe2[2];

              var _this15$getDateEditMe3 = _this15.getDateEditMetrics(endPositionOfCurrentDigit + 1),
                  _this15$getDateEditMe4 = _slicedToArray(_this15$getDateEditMe3, 3),
                  selectionStart = _this15$getDateEditMe4[1],
                  selectionEnd = _this15$getDateEditMe4[2];

              _this15.selectionStart = selectionStart;
              _this15.selectionEnd = selectionEnd;
            });
          }
        }, {
          key: "selectNextDigit",
          value: function selectNextDigit(cursorPos) {
            var _this16 = this;

            var cycle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            setTimeout(function () {
              var lastValue = cycle ? 0 : cursorPos;

              var nextSeparatorPos = _this16.viewValue.indexOf(_this16.separator, cursorPos);

              var newCursorPos = nextSeparatorPos > 0 ? nextSeparatorPos + 1 : lastValue;

              var _this16$getDateEditMe = _this16.getDateEditMetrics(newCursorPos),
                  _this16$getDateEditMe2 = _slicedToArray(_this16$getDateEditMe, 3),
                  selectionStart = _this16$getDateEditMe2[1],
                  selectionEnd = _this16$getDateEditMe2[2];

              _this16.selectionStart = selectionStart;
              _this16.selectionEnd = selectionEnd;
            });
          }
          /** Checks whether the input is invalid based on the native validation. */

        }, {
          key: "isBadInput",
          value: function isBadInput() {
            var validity = this.elementRef.nativeElement.validity;
            return validity && validity.badInput;
          }
          /** Formats a value and sets it on the input element. */

        }, {
          key: "formatValue",
          value: function formatValue(value) {
            var formattedValue = value ? this.dateAdapter.format(value, this.dateFormats.dateInput) : '';
            this.setViewValue(formattedValue);
          }
          /**
           * @param obj The object to check.
           * @returns The given object if it is both a date instance and valid, otherwise null.
           */

        }, {
          key: "getValidDateOrNull",
          value: function getValidDateOrNull(obj) {
            return this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj) ? obj : null;
          }
        }, {
          key: "setControl",
          value: function setControl(control) {
            if (!this.control) {
              this.control = control;
            }
          }
        }, {
          key: "getDigitPositions",
          value: function getDigitPositions(format) {
            var _this17 = this;

            var formatInLowerCase = format.toLowerCase();
            formatInLowerCase.split('').reduce(function (_ref2, value, index, arr) {
              var prev = _ref2.prev,
                  length = _ref2.length,
                  start = _ref2.start;

              if (value === _this17.separator || arr.length - 1 === index) {
                if (!_this17.firstDigit) {
                  _this17.firstDigit = new DateDigit(prev, start, length, _this17.dateAdapter.firstMonth);
                } else if (!_this17.secondDigit) {
                  _this17.secondDigit = new DateDigit(prev, start, length, _this17.dateAdapter.firstMonth);
                } else if (!_this17.thirdDigit) {
                  _this17.thirdDigit = new DateDigit(prev, start, arr.length - start, _this17.dateAdapter.firstMonth);
                } // tslint:disable:no-parameter-reassignment


                length = 0;
                start = index + 1;
              } else {
                length++;
              }

              return {
                prev: value,
                length: length,
                start: start
              };
            }, {
              length: 0,
              start: 0
            });

            if (!this.firstDigit || !this.secondDigit || !this.thirdDigit) {
              Error("Can' t use this format: ".concat(format));
            }
          }
        }, {
          key: "createDate",
          value: function createDate(year, month, day) {
            return this.dateAdapter.createDateTime(year, month, day, this.dateAdapter.getHours(this.value), this.dateAdapter.getMinutes(this.value), this.dateAdapter.getSeconds(this.value), this.dateAdapter.getMilliseconds(this.value));
          }
        }, {
          key: "correctCursorPosition",
          value: function correctCursorPosition() {
            if (this.selectionStart && this.separatorPositions.includes(this.selectionStart)) {
              this.selectionStart = this.selectionStart - 1;
            }
          }
        }]);

        return McDatepickerInput;
      }();

      McDatepickerInput.ɵfac = function McDatepickerInput_Factory(t) {
        return new (t || McDatepickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"], 8));
      };

      McDatepickerInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: McDatepickerInput,
        selectors: [["input", "mcDatepicker", ""]],
        hostAttrs: [1, "mc-input", "mc-datepicker"],
        hostVars: 6,
        hostBindings: function McDatepickerInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("paste", function McDatepickerInput_paste_HostBindingHandler($event) {
              return ctx.onPaste($event);
            })("change", function McDatepickerInput_change_HostBindingHandler() {
              return ctx.onChange();
            })("focus", function McDatepickerInput_focus_HostBindingHandler() {
              return ctx.focusChanged(true);
            })("blur", function McDatepickerInput_blur_HostBindingHandler() {
              return ctx.onBlur();
            })("keydown", function McDatepickerInput_keydown_HostBindingHandler($event) {
              return ctx.onKeyDown($event);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("placeholder", ctx.placeholder)("required", ctx.required)("disabled", ctx.disabled || null)("min", ctx.min ? ctx.dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx.dateAdapter.toIso8601(ctx.max) : null)("autocomplete", "off");
          }
        },
        inputs: {
          value: "value",
          required: "required",
          mcDatepicker: "mcDatepicker",
          mcDatepickerFilter: "mcDatepickerFilter",
          min: "min",
          max: "max",
          disabled: "disabled",
          id: "id",
          mcValidationTooltip: "mcValidationTooltip",
          placeholder: "placeholder"
        },
        outputs: {
          incorrectInput: "incorrectInput",
          dateChange: "dateChange",
          dateInput: "dateInput"
        },
        exportAs: ["mcDatepickerInput"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MC_DATEPICKER_VALUE_ACCESSOR, MC_DATEPICKER_VALIDATORS, {
          provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_15__["McFormFieldControl"],
          useExisting: McDatepickerInput
        }])]
      });
      /** @nocollapse */

      McDatepickerInput.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
        }, {
          type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
            args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
          }]
        }];
      };

      McDatepickerInput.propDecorators = {
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        mcDatepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        mcDatepickerFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        mcValidationTooltip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        incorrectInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        dateChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }],
        dateInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McDatepickerInput, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: 'input[mcDatepicker]',
            exportAs: 'mcDatepickerInput',
            providers: [MC_DATEPICKER_VALUE_ACCESSOR, MC_DATEPICKER_VALIDATORS, {
              provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_15__["McFormFieldControl"],
              useExisting: McDatepickerInput
            }],
            host: {
              "class": 'mc-input mc-datepicker',
              '[attr.placeholder]': 'placeholder',
              '[attr.required]': 'required',
              '[attr.disabled]': 'disabled || null',
              '[attr.min]': 'min ? dateAdapter.toIso8601(min) : null',
              '[attr.max]': 'max ? dateAdapter.toIso8601(max) : null',
              '[attr.autocomplete]': '"off"',
              '(paste)': 'onPaste($event)',
              '(change)': 'onChange()',
              '(focus)': 'focusChanged(true)',
              '(blur)': 'onBlur()',
              '(keydown)': 'onKeyDown($event)'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"]
          }, {
            type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
              args: [_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_8__["MC_DATE_FORMATS"]]
            }]
          }];
        }, {
          incorrectInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          dateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          dateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          mcDatepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          mcDatepickerFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          mcValidationTooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }]
        });
      })();
      /** Can be used to override the icon of a `mcDatepickerToggle`. */


      var McDatepickerToggleIcon = function McDatepickerToggleIcon() {
        _classCallCheck(this, McDatepickerToggleIcon);
      };

      McDatepickerToggleIcon.ɵfac = function McDatepickerToggleIcon_Factory(t) {
        return new (t || McDatepickerToggleIcon)();
      };

      McDatepickerToggleIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({
        type: McDatepickerToggleIcon,
        selectors: [["", "mcDatepickerToggleIcon", ""]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McDatepickerToggleIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
          args: [{
            selector: '[mcDatepickerToggleIcon]'
          }]
        }], null, null);
      })();

      var McDatepickerToggle = /*#__PURE__*/function () {
        function McDatepickerToggle(intl, changeDetectorRef) {
          _classCallCheck(this, McDatepickerToggle);

          this.intl = intl;
          this.changeDetectorRef = changeDetectorRef;
          this.stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        }
        /** Whether the toggle button is disabled. */


        _createClass(McDatepickerToggle, [{
          key: "disabled",
          get: function get() {
            return this._disabled === undefined ? this.datepicker.disabled : this._disabled;
          },
          set: function set(value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_12__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.datepicker) {
              this.watchStateChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stateChanges.unsubscribe();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.watchStateChanges();
          }
        }, {
          key: "open",
          value: function open(event) {
            if (this.datepicker && !this.disabled) {
              this.datepicker.open();
              event.stopPropagation();
            }
          }
        }, {
          key: "watchStateChanges",
          value: function watchStateChanges() {
            var _this18 = this;

            var datepickerDisabled = this.datepicker ? this.datepicker.disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
            var inputDisabled = this.datepicker && this.datepicker.datepickerInput ? this.datepicker.datepickerInput.disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
            var datepickerToggled = this.datepicker ? Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.datepicker.openedStream, this.datepicker.closedStream) : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
            this.stateChanges.unsubscribe();
            this.stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.intl.changes, datepickerDisabled, inputDisabled, datepickerToggled).subscribe(function () {
              return _this18.changeDetectorRef.markForCheck();
            });
          }
        }]);

        return McDatepickerToggle;
      }();

      McDatepickerToggle.ɵfac = function McDatepickerToggle_Factory(t) {
        return new (t || McDatepickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](McDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]));
      };

      McDatepickerToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: McDatepickerToggle,
        selectors: [["mc-datepicker-toggle"]],
        contentQueries: function McDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, McDatepickerToggleIcon, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.customIcon = _t.first);
          }
        },
        viewQuery: function McDatepickerToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
          }
        },
        hostAttrs: [1, "mc-datepicker-toggle"],
        hostVars: 2,
        hostBindings: function McDatepickerToggle_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mc-active", ctx.datepicker && ctx.datepicker.opened);
          }
        },
        inputs: {
          disabled: "disabled",
          datepicker: ["for", "datepicker"],
          tabIndex: "tabIndex"
        },
        exportAs: ["mcDatepickerToggle"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c3,
        decls: 4,
        vars: 4,
        consts: [["mc-button", "", "type", "button", "aria-haspopup", "true", 1, "mc-datepicker-toggle__button", 3, "disabled", "click"], ["button", ""], ["mc-icon", "mc-calendar_16", "class", "mc-datepicker-toggle__default-icon", 4, "ngIf"], ["mc-icon", "mc-calendar_16", 1, "mc-datepicker-toggle__default-icon"]],
        template: function McDatepickerToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function McDatepickerToggle_Template_button_click_0_listener($event) {
              return ctx.open($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, McDatepickerToggle_i_2_Template, 1, 0, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.intl.openCalendarLabel)("tabindex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.customIcon);
          }
        },
        directives: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonCssStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"]],
        styles: [".mc-datepicker-toggle:focus{outline:0}.mc-datepicker-toggle__button.mc-icon-button{width:var(--mc-datepicker-toggle-size-width,30px);height:var(--mc-datepicker-toggle-size-height,30px);margin-left:2px}.mc-form-field-appearance-legacy .mc-form-field-prefix .mc-datepicker-toggle__default-icon,.mc-form-field-appearance-legacy .mc-form-field-suffix .mc-datepicker-toggle__default-icon{width:1em}.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-prefix .mc-datepicker-toggle__default-icon,.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-suffix .mc-datepicker-toggle__default-icon{display:block;width:1.5em;height:1.5em}.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-prefix .mc-icon-button .mc-datepicker-toggle__default-icon,.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-suffix .mc-icon-button .mc-datepicker-toggle__default-icon{margin:auto}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McDatepickerToggle.ctorParameters = function () {
        return [{
          type: McDatepickerIntl
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
        }];
      };

      McDatepickerToggle.propDecorators = {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        datepicker: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['for']
        }],
        tabIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }],
        customIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: [McDatepickerToggleIcon, {
            "static": false
          }]
        }],
        button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
          args: ['button', {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McDatepickerToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
          args: [{
            selector: 'mc-datepicker-toggle',
            template: "<!--todo need simplify this-->\n<button\n    #button\n    mc-button\n    type=\"button\"\n    class=\"mc-datepicker-toggle__button\"\n    aria-haspopup=\"true\"\n    [attr.aria-label]=\"intl.openCalendarLabel\"\n    [attr.tabindex]=\"tabIndex\"\n    [disabled]=\"disabled\"\n    (click)=\"open($event)\">\n\n    <i *ngIf=\"!customIcon\" mc-icon=\"mc-calendar_16\" class=\"mc-datepicker-toggle__default-icon\"></i>\n\n    <ng-content select=\"[mcDatepickerToggleIcon]\"></ng-content>\n</button>\n",
            host: {
              "class": 'mc-datepicker-toggle',
              '[class.mc-active]': 'datepicker && datepicker.opened'
            },
            exportAs: 'mcDatepickerToggle',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
            styles: [".mc-datepicker-toggle:focus{outline:0}.mc-datepicker-toggle__button.mc-icon-button{width:var(--mc-datepicker-toggle-size-width,30px);height:var(--mc-datepicker-toggle-size-height,30px);margin-left:2px}.mc-form-field-appearance-legacy .mc-form-field-prefix .mc-datepicker-toggle__default-icon,.mc-form-field-appearance-legacy .mc-form-field-suffix .mc-datepicker-toggle__default-icon{width:1em}.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-prefix .mc-datepicker-toggle__default-icon,.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-suffix .mc-datepicker-toggle__default-icon{display:block;width:1.5em;height:1.5em}.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-prefix .mc-icon-button .mc-datepicker-toggle__default-icon,.mc-form-field:not(.mc-form-field-appearance-legacy) .mc-form-field-suffix .mc-icon-button .mc-datepicker-toggle__default-icon{margin:auto}"]
          }]
        }], function () {
          return [{
            type: McDatepickerIntl
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
          }];
        }, {
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          datepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['for']
          }],
          tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
          }],
          customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [McDatepickerToggleIcon, {
              "static": false
            }]
          }],
          button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['button', {
              "static": false
            }]
          }]
        });
      })();

      var McDatepickerModule = function McDatepickerModule() {
        _classCallCheck(this, McDatepickerModule);
      };

      McDatepickerModule.ɵfac = function McDatepickerModule_Factory(t) {
        return new (t || McDatepickerModule)();
      };

      McDatepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: McDatepickerModule
      });
      McDatepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [McDatepickerIntl, MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"]], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](McDatepickerModule, {
          declarations: function declarations() {
            return [McCalendar, McCalendarBody, McDatepicker, McDatepickerContent, McDatepickerInput, McDatepickerToggle, McDatepickerToggleIcon, McMonthView, McYearView, McMultiYearView, McCalendarHeader];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"]];
          },
          exports: function exports() {
            return [McCalendar, McCalendarBody, McDatepicker, McDatepickerContent, McDatepickerInput, McDatepickerToggle, McDatepickerToggleIcon, McMonthView, McYearView, McMultiYearView, McCalendarHeader, _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"]];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](McDatepickerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"]],
            exports: [McCalendar, McCalendarBody, McDatepicker, McDatepickerContent, McDatepickerInput, McDatepickerToggle, McDatepickerToggleIcon, McMonthView, McYearView, McMultiYearView, McCalendarHeader, _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_5__["McButtonModule"]],
            declarations: [McCalendar, McCalendarBody, McDatepicker, McDatepickerContent, McDatepickerInput, McDatepickerToggle, McDatepickerToggleIcon, McMonthView, McYearView, McMultiYearView, McCalendarHeader],
            providers: [McDatepickerIntl, MC_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
            entryComponents: [McDatepickerContent, McCalendarHeader]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "cRix":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/fy.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function cRix(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
            monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
        var fy = moment.defineLocale('fy', {
          months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
          monthsShort: function monthsShort(m, format) {
            if (!m) {
              return monthsShortWithDots;
            } else if (/-MMM-/.test(format)) {
              return monthsShortWithoutDots[m.month()];
            } else {
              return monthsShortWithDots[m.month()];
            }
          },
          monthsParseExact: true,
          weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
          weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
          weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD-MM-YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[hjoed om] LT',
            nextDay: '[moarn om] LT',
            nextWeek: 'dddd [om] LT',
            lastDay: '[juster om] LT',
            lastWeek: '[ôfrûne] dddd [om] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'oer %s',
            past: '%s lyn',
            s: 'in pear sekonden',
            ss: '%d sekonden',
            m: 'ien minút',
            mm: '%d minuten',
            h: 'ien oere',
            hh: '%d oeren',
            d: 'ien dei',
            dd: '%d dagen',
            M: 'ien moanne',
            MM: '%d moannen',
            y: 'ien jier',
            yy: '%d jierren'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
          ordinal: function ordinal(number) {
            return number + (number === 1 || number === 8 || number >= 20 ? 'ste' : 'de');
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return fy;
      });
      /***/

    },

    /***/
    "czMo":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/en-il.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function czMo(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var enIl = moment.defineLocale('en-il', {
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
          monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
          weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
          weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
          ordinal: function ordinal(number) {
            var b = number % 10,
                output = ~~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return number + output;
          }
        });
        return enIl;
      });
      /***/

    },

    /***/
    "dNwA":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/sw.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function dNwA(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var sw = moment.defineLocale('sw', {
          months: 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
          monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
          weekdays: 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
          weekdaysShort: 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
          weekdaysMin: 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[leo saa] LT',
            nextDay: '[kesho saa] LT',
            nextWeek: '[wiki ijayo] dddd [saat] LT',
            lastDay: '[jana] LT',
            lastWeek: '[wiki iliyopita] dddd [saat] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s baadaye',
            past: 'tokea %s',
            s: 'hivi punde',
            ss: 'sekunde %d',
            m: 'dakika moja',
            mm: 'dakika %d',
            h: 'saa limoja',
            hh: 'masaa %d',
            d: 'siku moja',
            dd: 'masiku %d',
            M: 'mwezi mmoja',
            MM: 'miezi %d',
            y: 'mwaka mmoja',
            yy: 'miaka %d'
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return sw;
      });
      /***/

    },

    /***/
    "e+ae":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/sk.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function eAe(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
            monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');

        function plural(n) {
          return n > 1 && n < 5;
        }

        function translate(number, withoutSuffix, key, isFuture) {
          var result = number + ' ';

          switch (key) {
            case 's':
              // a few seconds / in a few seconds / a few seconds ago
              return withoutSuffix || isFuture ? 'pár sekúnd' : 'pár sekundami';

            case 'ss':
              // 9 seconds / in 9 seconds / 9 seconds ago
              if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'sekundy' : 'sekúnd');
              } else {
                return result + 'sekundami';
              }

              break;

            case 'm':
              // a minute / in a minute / a minute ago
              return withoutSuffix ? 'minúta' : isFuture ? 'minútu' : 'minútou';

            case 'mm':
              // 9 minutes / in 9 minutes / 9 minutes ago
              if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'minúty' : 'minút');
              } else {
                return result + 'minútami';
              }

              break;

            case 'h':
              // an hour / in an hour / an hour ago
              return withoutSuffix ? 'hodina' : isFuture ? 'hodinu' : 'hodinou';

            case 'hh':
              // 9 hours / in 9 hours / 9 hours ago
              if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'hodiny' : 'hodín');
              } else {
                return result + 'hodinami';
              }

              break;

            case 'd':
              // a day / in a day / a day ago
              return withoutSuffix || isFuture ? 'deň' : 'dňom';

            case 'dd':
              // 9 days / in 9 days / 9 days ago
              if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'dni' : 'dní');
              } else {
                return result + 'dňami';
              }

              break;

            case 'M':
              // a month / in a month / a month ago
              return withoutSuffix || isFuture ? 'mesiac' : 'mesiacom';

            case 'MM':
              // 9 months / in 9 months / 9 months ago
              if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'mesiace' : 'mesiacov');
              } else {
                return result + 'mesiacmi';
              }

              break;

            case 'y':
              // a year / in a year / a year ago
              return withoutSuffix || isFuture ? 'rok' : 'rokom';

            case 'yy':
              // 9 years / in 9 years / 9 years ago
              if (withoutSuffix || isFuture) {
                return result + (plural(number) ? 'roky' : 'rokov');
              } else {
                return result + 'rokmi';
              }

              break;
          }
        }

        var sk = moment.defineLocale('sk', {
          months: months,
          monthsShort: monthsShort,
          weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
          weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
          weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd D. MMMM YYYY H:mm'
          },
          calendar: {
            sameDay: '[dnes o] LT',
            nextDay: '[zajtra o] LT',
            nextWeek: function nextWeek() {
              switch (this.day()) {
                case 0:
                  return '[v nedeľu o] LT';

                case 1:
                case 2:
                  return '[v] dddd [o] LT';

                case 3:
                  return '[v stredu o] LT';

                case 4:
                  return '[vo štvrtok o] LT';

                case 5:
                  return '[v piatok o] LT';

                case 6:
                  return '[v sobotu o] LT';
              }
            },
            lastDay: '[včera o] LT',
            lastWeek: function lastWeek() {
              switch (this.day()) {
                case 0:
                  return '[minulú nedeľu o] LT';

                case 1:
                case 2:
                  return '[minulý] dddd [o] LT';

                case 3:
                  return '[minulú stredu o] LT';

                case 4:
                case 5:
                  return '[minulý] dddd [o] LT';

                case 6:
                  return '[minulú sobotu o] LT';
              }
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'za %s',
            past: 'pred %s',
            s: translate,
            ss: translate,
            m: translate,
            mm: translate,
            h: translate,
            hh: translate,
            d: translate,
            dd: translate,
            M: translate,
            MM: translate,
            y: translate,
            yy: translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return sk;
      });
      /***/

    },

    /***/
    "fzPg":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/yo.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function fzPg(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var yo = moment.defineLocale('yo', {
          months: 'Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀'.split('_'),
          monthsShort: 'Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀'.split('_'),
          weekdays: 'Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta'.split('_'),
          weekdaysShort: 'Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá'.split('_'),
          weekdaysMin: 'Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb'.split('_'),
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A'
          },
          calendar: {
            sameDay: '[Ònì ni] LT',
            nextDay: '[Ọ̀la ni] LT',
            nextWeek: 'dddd [Ọsẹ̀ tón\'bọ] [ni] LT',
            lastDay: '[Àna ni] LT',
            lastWeek: 'dddd [Ọsẹ̀ tólọ́] [ni] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'ní %s',
            past: '%s kọjá',
            s: 'ìsẹjú aayá die',
            ss: 'aayá %d',
            m: 'ìsẹjú kan',
            mm: 'ìsẹjú %d',
            h: 'wákati kan',
            hh: 'wákati %d',
            d: 'ọjọ́ kan',
            dd: 'ọjọ́ %d',
            M: 'osù kan',
            MM: 'osù %d',
            y: 'ọdún kan',
            yy: 'ọdún %d'
          },
          dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
          ordinal: 'ọjọ́ %d',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return yo;
      });
      /***/

    },

    /***/
    "gVVK":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/sl.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function gVVK(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function processRelativeTime(number, withoutSuffix, key, isFuture) {
          var result = number + ' ';

          switch (key) {
            case 's':
              return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';

            case 'ss':
              if (number === 1) {
                result += withoutSuffix ? 'sekundo' : 'sekundi';
              } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
              } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
              } else {
                result += 'sekund';
              }

              return result;

            case 'm':
              return withoutSuffix ? 'ena minuta' : 'eno minuto';

            case 'mm':
              if (number === 1) {
                result += withoutSuffix ? 'minuta' : 'minuto';
              } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
              } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'minute' : 'minutami';
              } else {
                result += withoutSuffix || isFuture ? 'minut' : 'minutami';
              }

              return result;

            case 'h':
              return withoutSuffix ? 'ena ura' : 'eno uro';

            case 'hh':
              if (number === 1) {
                result += withoutSuffix ? 'ura' : 'uro';
              } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'uri' : 'urama';
              } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'ure' : 'urami';
              } else {
                result += withoutSuffix || isFuture ? 'ur' : 'urami';
              }

              return result;

            case 'd':
              return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';

            case 'dd':
              if (number === 1) {
                result += withoutSuffix || isFuture ? 'dan' : 'dnem';
              } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
              } else {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
              }

              return result;

            case 'M':
              return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';

            case 'MM':
              if (number === 1) {
                result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
              } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
              } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
              } else {
                result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
              }

              return result;

            case 'y':
              return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';

            case 'yy':
              if (number === 1) {
                result += withoutSuffix || isFuture ? 'leto' : 'letom';
              } else if (number === 2) {
                result += withoutSuffix || isFuture ? 'leti' : 'letoma';
              } else if (number < 5) {
                result += withoutSuffix || isFuture ? 'leta' : 'leti';
              } else {
                result += withoutSuffix || isFuture ? 'let' : 'leti';
              }

              return result;
          }
        }

        var sl = moment.defineLocale('sl', {
          months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
          monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
          monthsParseExact: true,
          weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
          weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
          weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
          },
          calendar: {
            sameDay: '[danes ob] LT',
            nextDay: '[jutri ob] LT',
            nextWeek: function nextWeek() {
              switch (this.day()) {
                case 0:
                  return '[v] [nedeljo] [ob] LT';

                case 3:
                  return '[v] [sredo] [ob] LT';

                case 6:
                  return '[v] [soboto] [ob] LT';

                case 1:
                case 2:
                case 4:
                case 5:
                  return '[v] dddd [ob] LT';
              }
            },
            lastDay: '[včeraj ob] LT',
            lastWeek: function lastWeek() {
              switch (this.day()) {
                case 0:
                  return '[prejšnjo] [nedeljo] [ob] LT';

                case 3:
                  return '[prejšnjo] [sredo] [ob] LT';

                case 6:
                  return '[prejšnjo] [soboto] [ob] LT';

                case 1:
                case 2:
                case 4:
                case 5:
                  return '[prejšnji] dddd [ob] LT';
              }
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'čez %s',
            past: 'pred %s',
            s: processRelativeTime,
            ss: processRelativeTime,
            m: processRelativeTime,
            mm: processRelativeTime,
            h: processRelativeTime,
            hh: processRelativeTime,
            d: processRelativeTime,
            dd: processRelativeTime,
            M: processRelativeTime,
            MM: processRelativeTime,
            y: processRelativeTime,
            yy: processRelativeTime
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return sl;
      });
      /***/

    },

    /***/
    "gekB":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/fi.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function gekB(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
            numbersFuture = ['nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden', numbersPast[7], numbersPast[8], numbersPast[9]];

        function translate(number, withoutSuffix, key, isFuture) {
          var result = '';

          switch (key) {
            case 's':
              return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';

            case 'ss':
              return isFuture ? 'sekunnin' : 'sekuntia';

            case 'm':
              return isFuture ? 'minuutin' : 'minuutti';

            case 'mm':
              result = isFuture ? 'minuutin' : 'minuuttia';
              break;

            case 'h':
              return isFuture ? 'tunnin' : 'tunti';

            case 'hh':
              result = isFuture ? 'tunnin' : 'tuntia';
              break;

            case 'd':
              return isFuture ? 'päivän' : 'päivä';

            case 'dd':
              result = isFuture ? 'päivän' : 'päivää';
              break;

            case 'M':
              return isFuture ? 'kuukauden' : 'kuukausi';

            case 'MM':
              result = isFuture ? 'kuukauden' : 'kuukautta';
              break;

            case 'y':
              return isFuture ? 'vuoden' : 'vuosi';

            case 'yy':
              result = isFuture ? 'vuoden' : 'vuotta';
              break;
          }

          result = verbalNumber(number, isFuture) + ' ' + result;
          return result;
        }

        function verbalNumber(number, isFuture) {
          return number < 10 ? isFuture ? numbersFuture[number] : numbersPast[number] : number;
        }

        var fi = moment.defineLocale('fi', {
          months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
          monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
          weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
          weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
          weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD.MM.YYYY',
            LL: 'Do MMMM[ta] YYYY',
            LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
            LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
            l: 'D.M.YYYY',
            ll: 'Do MMM YYYY',
            lll: 'Do MMM YYYY, [klo] HH.mm',
            llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
          },
          calendar: {
            sameDay: '[tänään] [klo] LT',
            nextDay: '[huomenna] [klo] LT',
            nextWeek: 'dddd [klo] LT',
            lastDay: '[eilen] [klo] LT',
            lastWeek: '[viime] dddd[na] [klo] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s päästä',
            past: '%s sitten',
            s: translate,
            ss: translate,
            m: translate,
            mm: translate,
            h: translate,
            hh: translate,
            d: translate,
            dd: translate,
            M: translate,
            MM: translate,
            y: translate,
            yy: translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return fi;
      });
      /***/

    },

    /***/
    "gjCT":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/ar-sa.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function gjCT(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '١',
          '2': '٢',
          '3': '٣',
          '4': '٤',
          '5': '٥',
          '6': '٦',
          '7': '٧',
          '8': '٨',
          '9': '٩',
          '0': '٠'
        },
            numberMap = {
          '١': '1',
          '٢': '2',
          '٣': '3',
          '٤': '4',
          '٥': '5',
          '٦': '6',
          '٧': '7',
          '٨': '8',
          '٩': '9',
          '٠': '0'
        };
        var arSa = moment.defineLocale('ar-sa', {
          months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
          monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
          weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          meridiemParse: /ص|م/,
          isPM: function isPM(input) {
            return 'م' === input;
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 12) {
              return 'ص';
            } else {
              return 'م';
            }
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
          },
          preparse: function preparse(string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
              return numberMap[match];
            }).replace(/،/g, ',');
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            }).replace(/,/g, '،');
          },
          week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.

          }
        });
        return arSa;
      });
      /***/

    },

    /***/
    "hKrs":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/bg.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function hKrs(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var bg = moment.defineLocale('bg', {
          months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
          monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
          weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
          weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
          weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'D.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm'
          },
          calendar: {
            sameDay: '[Днес в] LT',
            nextDay: '[Утре в] LT',
            nextWeek: 'dddd [в] LT',
            lastDay: '[Вчера в] LT',
            lastWeek: function lastWeek() {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return '[В изминалата] dddd [в] LT';

                case 1:
                case 2:
                case 4:
                case 5:
                  return '[В изминалия] dddd [в] LT';
              }
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'след %s',
            past: 'преди %s',
            s: 'няколко секунди',
            ss: '%d секунди',
            m: 'минута',
            mm: '%d минути',
            h: 'час',
            hh: '%d часа',
            d: 'ден',
            dd: '%d дни',
            M: 'месец',
            MM: '%d месеца',
            y: 'година',
            yy: '%d години'
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
          ordinal: function ordinal(number) {
            var lastDigit = number % 10,
                last2Digits = number % 100;

            if (number === 0) {
              return number + '-ев';
            } else if (last2Digits === 0) {
              return number + '-ен';
            } else if (last2Digits > 10 && last2Digits < 20) {
              return number + '-ти';
            } else if (lastDigit === 1) {
              return number + '-ви';
            } else if (lastDigit === 2) {
              return number + '-ри';
            } else if (lastDigit === 7 || lastDigit === 8) {
              return number + '-ми';
            } else {
              return number + '-ти';
            }
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return bg;
      });
      /***/

    },

    /***/
    "honF":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/my.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function honF(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '၁',
          '2': '၂',
          '3': '၃',
          '4': '၄',
          '5': '၅',
          '6': '၆',
          '7': '၇',
          '8': '၈',
          '9': '၉',
          '0': '၀'
        },
            numberMap = {
          '၁': '1',
          '၂': '2',
          '၃': '3',
          '၄': '4',
          '၅': '5',
          '၆': '6',
          '၇': '7',
          '၈': '8',
          '၉': '9',
          '၀': '0'
        };
        var my = moment.defineLocale('my', {
          months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
          monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
          weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
          weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
          weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[ယနေ.] LT [မှာ]',
            nextDay: '[မနက်ဖြန်] LT [မှာ]',
            nextWeek: 'dddd LT [မှာ]',
            lastDay: '[မနေ.က] LT [မှာ]',
            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'လာမည့် %s မှာ',
            past: 'လွန်ခဲ့သော %s က',
            s: 'စက္ကန်.အနည်းငယ်',
            ss: '%d စက္ကန့်',
            m: 'တစ်မိနစ်',
            mm: '%d မိနစ်',
            h: 'တစ်နာရီ',
            hh: '%d နာရီ',
            d: 'တစ်ရက်',
            dd: '%d ရက်',
            M: 'တစ်လ',
            MM: '%d လ',
            y: 'တစ်နှစ်',
            yy: '%d နှစ်'
          },
          preparse: function preparse(string) {
            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
              return numberMap[match];
            });
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            });
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return my;
      });
      /***/

    },

    /***/
    "iEDd":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/gl.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function iEDd(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var gl = moment.defineLocale('gl', {
          months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
          monthsShort: 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'),
          monthsParseExact: true,
          weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
          weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
          weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
          },
          calendar: {
            sameDay: function sameDay() {
              return '[hoxe ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
            },
            nextDay: function nextDay() {
              return '[mañá ' + (this.hours() !== 1 ? 'ás' : 'á') + '] LT';
            },
            nextWeek: function nextWeek() {
              return 'dddd [' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
            },
            lastDay: function lastDay() {
              return '[onte ' + (this.hours() !== 1 ? 'á' : 'a') + '] LT';
            },
            lastWeek: function lastWeek() {
              return '[o] dddd [pasado ' + (this.hours() !== 1 ? 'ás' : 'a') + '] LT';
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: function future(str) {
              if (str.indexOf('un') === 0) {
                return 'n' + str;
              }

              return 'en ' + str;
            },
            past: 'hai %s',
            s: 'uns segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'unha hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un ano',
            yy: '%d anos'
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return gl;
      });
      /***/

    },

    /***/
    "iYuL":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/es.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function iYuL(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
            _monthsShort3 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

        var monthsParse = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
        var monthsRegex = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        var es = moment.defineLocale('es', {
          months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
          monthsShort: function monthsShort(m, format) {
            if (!m) {
              return monthsShortDot;
            } else if (/-MMM-/.test(format)) {
              return _monthsShort3[m.month()];
            } else {
              return monthsShortDot[m.month()];
            }
          },
          monthsRegex: monthsRegex,
          monthsShortRegex: monthsRegex,
          monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
          monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
          monthsParse: monthsParse,
          longMonthsParse: monthsParse,
          shortMonthsParse: monthsParse,
          weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
          weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
          weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [de] MMMM [de] YYYY',
            LLL: 'D [de] MMMM [de] YYYY H:mm',
            LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
          },
          calendar: {
            sameDay: function sameDay() {
              return '[hoy a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            nextDay: function nextDay() {
              return '[mañana a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            nextWeek: function nextWeek() {
              return 'dddd [a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            lastDay: function lastDay() {
              return '[ayer a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            lastWeek: function lastWeek() {
              return '[el] dddd [pasado a la' + (this.hours() !== 1 ? 's' : '') + '] LT';
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'en %s',
            past: 'hace %s',
            s: 'unos segundos',
            ss: '%d segundos',
            m: 'un minuto',
            mm: '%d minutos',
            h: 'una hora',
            hh: '%d horas',
            d: 'un día',
            dd: '%d días',
            M: 'un mes',
            MM: '%d meses',
            y: 'un año',
            yy: '%d años'
          },
          dayOfMonthOrdinalParse: /\d{1,2}º/,
          ordinal: '%dº',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return es;
      });
      /***/

    },

    /***/
    "jUeY":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/el.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function jUeY(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function isFunction(input) {
          return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
        }

        var el = moment.defineLocale('el', {
          monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
          monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
          months: function months(momentToFormat, format) {
            if (!momentToFormat) {
              return this._monthsNominativeEl;
            } else if (typeof format === 'string' && /D/.test(format.substring(0, format.indexOf('MMMM')))) {
              // if there is a day number before 'MMMM'
              return this._monthsGenitiveEl[momentToFormat.month()];
            } else {
              return this._monthsNominativeEl[momentToFormat.month()];
            }
          },
          monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
          weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
          weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
          weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
          meridiem: function meridiem(hours, minutes, isLower) {
            if (hours > 11) {
              return isLower ? 'μμ' : 'ΜΜ';
            } else {
              return isLower ? 'πμ' : 'ΠΜ';
            }
          },
          isPM: function isPM(input) {
            return (input + '').toLowerCase()[0] === 'μ';
          },
          meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
          longDateFormat: {
            LT: 'h:mm A',
            LTS: 'h:mm:ss A',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY h:mm A',
            LLLL: 'dddd, D MMMM YYYY h:mm A'
          },
          calendarEl: {
            sameDay: '[Σήμερα {}] LT',
            nextDay: '[Αύριο {}] LT',
            nextWeek: 'dddd [{}] LT',
            lastDay: '[Χθες {}] LT',
            lastWeek: function lastWeek() {
              switch (this.day()) {
                case 6:
                  return '[το προηγούμενο] dddd [{}] LT';

                default:
                  return '[την προηγούμενη] dddd [{}] LT';
              }
            },
            sameElse: 'L'
          },
          calendar: function calendar(key, mom) {
            var output = this._calendarEl[key],
                hours = mom && mom.hours();

            if (isFunction(output)) {
              output = output.apply(mom);
            }

            return output.replace('{}', hours % 12 === 1 ? 'στη' : 'στις');
          },
          relativeTime: {
            future: 'σε %s',
            past: '%s πριν',
            s: 'λίγα δευτερόλεπτα',
            ss: '%d δευτερόλεπτα',
            m: 'ένα λεπτό',
            mm: '%d λεπτά',
            h: 'μία ώρα',
            hh: '%d ώρες',
            d: 'μία μέρα',
            dd: '%d μέρες',
            M: 'ένας μήνας',
            MM: '%d μήνες',
            y: 'ένας χρόνος',
            yy: '%d χρόνια'
          },
          dayOfMonthOrdinalParse: /\d{1,2}η/,
          ordinal: '%dη',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4st is the first week of the year.

          }
        });
        return el;
      });
      /***/

    },

    /***/
    "jVdC":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/pl.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function jVdC(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
            monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');

        function plural(n) {
          return n % 10 < 5 && n % 10 > 1 && ~~(n / 10) % 10 !== 1;
        }

        function translate(number, withoutSuffix, key) {
          var result = number + ' ';

          switch (key) {
            case 'ss':
              return result + (plural(number) ? 'sekundy' : 'sekund');

            case 'm':
              return withoutSuffix ? 'minuta' : 'minutę';

            case 'mm':
              return result + (plural(number) ? 'minuty' : 'minut');

            case 'h':
              return withoutSuffix ? 'godzina' : 'godzinę';

            case 'hh':
              return result + (plural(number) ? 'godziny' : 'godzin');

            case 'MM':
              return result + (plural(number) ? 'miesiące' : 'miesięcy');

            case 'yy':
              return result + (plural(number) ? 'lata' : 'lat');
          }
        }

        var pl = moment.defineLocale('pl', {
          months: function months(momentToFormat, format) {
            if (!momentToFormat) {
              return monthsNominative;
            } else if (format === '') {
              // Hack: if format empty we know this is used to generate
              // RegExp by moment. Give then back both valid forms of months
              // in RegExp ready format.
              return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
            } else if (/D MMMM/.test(format)) {
              return monthsSubjective[momentToFormat.month()];
            } else {
              return monthsNominative[momentToFormat.month()];
            }
          },
          monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
          weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
          weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
          weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Dziś o] LT',
            nextDay: '[Jutro o] LT',
            nextWeek: function nextWeek() {
              switch (this.day()) {
                case 0:
                  return '[W niedzielę o] LT';

                case 2:
                  return '[We wtorek o] LT';

                case 3:
                  return '[W środę o] LT';

                case 6:
                  return '[W sobotę o] LT';

                default:
                  return '[W] dddd [o] LT';
              }
            },
            lastDay: '[Wczoraj o] LT',
            lastWeek: function lastWeek() {
              switch (this.day()) {
                case 0:
                  return '[W zeszłą niedzielę o] LT';

                case 3:
                  return '[W zeszłą środę o] LT';

                case 6:
                  return '[W zeszłą sobotę o] LT';

                default:
                  return '[W zeszły] dddd [o] LT';
              }
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'za %s',
            past: '%s temu',
            s: 'kilka sekund',
            ss: translate,
            m: translate,
            mm: translate,
            h: translate,
            hh: translate,
            d: '1 dzień',
            dd: '%d dni',
            M: 'miesiąc',
            MM: translate,
            y: 'rok',
            yy: translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return pl;
      });
      /***/

    },

    /***/
    "jfSC":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/fa.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function jfSC(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '۱',
          '2': '۲',
          '3': '۳',
          '4': '۴',
          '5': '۵',
          '6': '۶',
          '7': '۷',
          '8': '۸',
          '9': '۹',
          '0': '۰'
        },
            numberMap = {
          '۱': '1',
          '۲': '2',
          '۳': '3',
          '۴': '4',
          '۵': '5',
          '۶': '6',
          '۷': '7',
          '۸': '8',
          '۹': '9',
          '۰': '0'
        };
        var fa = moment.defineLocale('fa', {
          months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
          monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
          weekdays: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split('_'),
          weekdaysShort: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split('_'),
          weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          meridiemParse: /قبل از ظهر|بعد از ظهر/,
          isPM: function isPM(input) {
            return /بعد از ظهر/.test(input);
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 12) {
              return 'قبل از ظهر';
            } else {
              return 'بعد از ظهر';
            }
          },
          calendar: {
            sameDay: '[امروز ساعت] LT',
            nextDay: '[فردا ساعت] LT',
            nextWeek: 'dddd [ساعت] LT',
            lastDay: '[دیروز ساعت] LT',
            lastWeek: 'dddd [پیش] [ساعت] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'در %s',
            past: '%s پیش',
            s: 'چند ثانیه',
            ss: 'ثانیه d%',
            m: 'یک دقیقه',
            mm: '%d دقیقه',
            h: 'یک ساعت',
            hh: '%d ساعت',
            d: 'یک روز',
            dd: '%d روز',
            M: 'یک ماه',
            MM: '%d ماه',
            y: 'یک سال',
            yy: '%d سال'
          },
          preparse: function preparse(string) {
            return string.replace(/[۰-۹]/g, function (match) {
              return numberMap[match];
            }).replace(/،/g, ',');
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            }).replace(/,/g, '،');
          },
          dayOfMonthOrdinalParse: /\d{1,2}م/,
          ordinal: '%dم',
          week: {
            dow: 6,
            // Saturday is the first day of the week.
            doy: 12 // The week that contains Jan 12th is the first week of the year.

          }
        });
        return fa;
      });
      /***/

    },

    /***/
    "jnO4":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ar.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function jnO4(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '١',
          '2': '٢',
          '3': '٣',
          '4': '٤',
          '5': '٥',
          '6': '٦',
          '7': '٧',
          '8': '٨',
          '9': '٩',
          '0': '٠'
        },
            numberMap = {
          '١': '1',
          '٢': '2',
          '٣': '3',
          '٤': '4',
          '٥': '5',
          '٦': '6',
          '٧': '7',
          '٨': '8',
          '٩': '9',
          '٠': '0'
        },
            pluralForm = function pluralForm(n) {
          return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
        },
            plurals = {
          s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
          m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
          h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
          d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
          M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
          y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
        },
            pluralize = function pluralize(u) {
          return function (number, withoutSuffix, string, isFuture) {
            var f = pluralForm(number),
                str = plurals[u][pluralForm(number)];

            if (f === 2) {
              str = str[withoutSuffix ? 0 : 1];
            }

            return str.replace(/%d/i, number);
          };
        },
            months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

        var ar = moment.defineLocale('ar', {
          months: months,
          monthsShort: months,
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
          weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: "D/\u200FM/\u200FYYYY",
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          meridiemParse: /ص|م/,
          isPM: function isPM(input) {
            return 'م' === input;
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 12) {
              return 'ص';
            } else {
              return 'م';
            }
          },
          calendar: {
            sameDay: '[اليوم عند الساعة] LT',
            nextDay: '[غدًا عند الساعة] LT',
            nextWeek: 'dddd [عند الساعة] LT',
            lastDay: '[أمس عند الساعة] LT',
            lastWeek: 'dddd [عند الساعة] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'بعد %s',
            past: 'منذ %s',
            s: pluralize('s'),
            ss: pluralize('s'),
            m: pluralize('m'),
            mm: pluralize('m'),
            h: pluralize('h'),
            hh: pluralize('h'),
            d: pluralize('d'),
            dd: pluralize('d'),
            M: pluralize('M'),
            MM: pluralize('M'),
            y: pluralize('y'),
            yy: pluralize('y')
          },
          preparse: function preparse(string) {
            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
              return numberMap[match];
            }).replace(/،/g, ',');
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            }).replace(/,/g, '،');
          },
          week: {
            dow: 6,
            // Saturday is the first day of the week.
            doy: 12 // The week that contains Jan 12th is the first week of the year.

          }
        });
        return ar;
      });
      /***/

    },

    /***/
    "kEOa":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/bn.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function kEOa(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var symbolMap = {
          '1': '১',
          '2': '২',
          '3': '৩',
          '4': '৪',
          '5': '৫',
          '6': '৬',
          '7': '৭',
          '8': '৮',
          '9': '৯',
          '0': '০'
        },
            numberMap = {
          '১': '1',
          '২': '2',
          '৩': '3',
          '৪': '4',
          '৫': '5',
          '৬': '6',
          '৭': '7',
          '৮': '8',
          '৯': '9',
          '০': '0'
        };
        var bn = moment.defineLocale('bn', {
          months: 'জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
          monthsShort: 'জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে'.split('_'),
          weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার'.split('_'),
          weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি'.split('_'),
          weekdaysMin: 'রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি'.split('_'),
          longDateFormat: {
            LT: 'A h:mm সময়',
            LTS: 'A h:mm:ss সময়',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY, A h:mm সময়',
            LLLL: 'dddd, D MMMM YYYY, A h:mm সময়'
          },
          calendar: {
            sameDay: '[আজ] LT',
            nextDay: '[আগামীকাল] LT',
            nextWeek: 'dddd, LT',
            lastDay: '[গতকাল] LT',
            lastWeek: '[গত] dddd, LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s পরে',
            past: '%s আগে',
            s: 'কয়েক সেকেন্ড',
            ss: '%d সেকেন্ড',
            m: 'এক মিনিট',
            mm: '%d মিনিট',
            h: 'এক ঘন্টা',
            hh: '%d ঘন্টা',
            d: 'এক দিন',
            dd: '%d দিন',
            M: 'এক মাস',
            MM: '%d মাস',
            y: 'এক বছর',
            yy: '%d বছর'
          },
          preparse: function preparse(string) {
            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
              return numberMap[match];
            });
          },
          postformat: function postformat(string) {
            return string.replace(/\d/g, function (match) {
              return symbolMap[match];
            });
          },
          meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'রাত' && hour >= 4 || meridiem === 'দুপুর' && hour < 5 || meridiem === 'বিকাল') {
              return hour + 12;
            } else {
              return hour;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'রাত';
            } else if (hour < 10) {
              return 'সকাল';
            } else if (hour < 17) {
              return 'দুপুর';
            } else if (hour < 20) {
              return 'বিকাল';
            } else {
              return 'রাত';
            }
          },
          week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.

          }
        });
        return bn;
      });
      /***/

    },

    /***/
    "kOpN":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/zh-tw.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function kOpN(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var zhTw = moment.defineLocale('zh-tw', {
          months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
          monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
          weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
          weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
          weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日 HH:mm',
            LLLL: 'YYYY年M月D日dddd HH:mm',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm'
          },
          meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
              return hour;
            } else if (meridiem === '中午') {
              return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === '下午' || meridiem === '晚上') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hour, minute, isLower) {
            var hm = hour * 100 + minute;

            if (hm < 600) {
              return '凌晨';
            } else if (hm < 900) {
              return '早上';
            } else if (hm < 1130) {
              return '上午';
            } else if (hm < 1230) {
              return '中午';
            } else if (hm < 1800) {
              return '下午';
            } else {
              return '晚上';
            }
          },
          calendar: {
            sameDay: '[今天] LT',
            nextDay: '[明天] LT',
            nextWeek: '[下]dddd LT',
            lastDay: '[昨天] LT',
            lastWeek: '[上]dddd LT',
            sameElse: 'L'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              case 'd':
              case 'D':
              case 'DDD':
                return number + '日';

              case 'M':
                return number + '月';

              case 'w':
              case 'W':
                return number + '週';

              default:
                return number;
            }
          },
          relativeTime: {
            future: '%s內',
            past: '%s前',
            s: '幾秒',
            ss: '%d 秒',
            m: '1 分鐘',
            mm: '%d 分鐘',
            h: '1 小時',
            hh: '%d 小時',
            d: '1 天',
            dd: '%d 天',
            M: '1 個月',
            MM: '%d 個月',
            y: '1 年',
            yy: '%d 年'
          }
        });
        return zhTw;
      });
      /***/

    },

    /***/
    "l5ep":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/cy.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function l5ep(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var cy = moment.defineLocale('cy', {
          months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
          monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
          weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
          weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
          weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
          weekdaysParseExact: true,
          // time formats are the same as en-gb
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Heddiw am] LT',
            nextDay: '[Yfory am] LT',
            nextWeek: 'dddd [am] LT',
            lastDay: '[Ddoe am] LT',
            lastWeek: 'dddd [diwethaf am] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'mewn %s',
            past: '%s yn ôl',
            s: 'ychydig eiliadau',
            ss: '%d eiliad',
            m: 'munud',
            mm: '%d munud',
            h: 'awr',
            hh: '%d awr',
            d: 'diwrnod',
            dd: '%d diwrnod',
            M: 'mis',
            MM: '%d mis',
            y: 'blwyddyn',
            yy: '%d flynedd'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
          // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
          ordinal: function ordinal(number) {
            var b = number,
                output = '',
                lookup = ['', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
            'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
            ];

            if (b > 20) {
              if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
                output = 'fed'; // not 30ain, 70ain or 90ain
              } else {
                output = 'ain';
              }
            } else if (b > 0) {
              output = lookup[b];
            }

            return number + output;
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return cy;
      });
      /***/

    },

    /***/
    "lXzo":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ru.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function lXzo(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function plural(word, num) {
          var forms = word.split('_');
          return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
        }

        function relativeTimeWithPlural(number, withoutSuffix, key) {
          var format = {
            'ss': withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
            'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
            'hh': 'час_часа_часов',
            'dd': 'день_дня_дней',
            'MM': 'месяц_месяца_месяцев',
            'yy': 'год_года_лет'
          };

          if (key === 'm') {
            return withoutSuffix ? 'минута' : 'минуту';
          } else {
            return number + ' ' + plural(format[key], +number);
          }
        }

        var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i]; // http://new.gramota.ru/spravka/rules/139-prop : § 103
        // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
        // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753

        var ru = moment.defineLocale('ru', {
          months: {
            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
          },
          monthsShort: {
            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
          },
          weekdays: {
            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
          },
          weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
          weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
          monthsParse: monthsParse,
          longMonthsParse: monthsParse,
          shortMonthsParse: monthsParse,
          // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
          monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
          // копия предыдущего
          monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
          // полные названия с падежами
          monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
          // Выражение, которое соотвествует только сокращённым формам
          monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY г.',
            LLL: 'D MMMM YYYY г., H:mm',
            LLLL: 'dddd, D MMMM YYYY г., H:mm'
          },
          calendar: {
            sameDay: '[Сегодня, в] LT',
            nextDay: '[Завтра, в] LT',
            lastDay: '[Вчера, в] LT',
            nextWeek: function nextWeek(now) {
              if (now.week() !== this.week()) {
                switch (this.day()) {
                  case 0:
                    return '[В следующее] dddd, [в] LT';

                  case 1:
                  case 2:
                  case 4:
                    return '[В следующий] dddd, [в] LT';

                  case 3:
                  case 5:
                  case 6:
                    return '[В следующую] dddd, [в] LT';
                }
              } else {
                if (this.day() === 2) {
                  return '[Во] dddd, [в] LT';
                } else {
                  return '[В] dddd, [в] LT';
                }
              }
            },
            lastWeek: function lastWeek(now) {
              if (now.week() !== this.week()) {
                switch (this.day()) {
                  case 0:
                    return '[В прошлое] dddd, [в] LT';

                  case 1:
                  case 2:
                  case 4:
                    return '[В прошлый] dddd, [в] LT';

                  case 3:
                  case 5:
                  case 6:
                    return '[В прошлую] dddd, [в] LT';
                }
              } else {
                if (this.day() === 2) {
                  return '[Во] dddd, [в] LT';
                } else {
                  return '[В] dddd, [в] LT';
                }
              }
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'через %s',
            past: '%s назад',
            s: 'несколько секунд',
            ss: relativeTimeWithPlural,
            m: relativeTimeWithPlural,
            mm: relativeTimeWithPlural,
            h: 'час',
            hh: relativeTimeWithPlural,
            d: 'день',
            dd: relativeTimeWithPlural,
            M: 'месяц',
            MM: relativeTimeWithPlural,
            y: 'год',
            yy: relativeTimeWithPlural
          },
          meridiemParse: /ночи|утра|дня|вечера/i,
          isPM: function isPM(input) {
            return /^(дня|вечера)$/.test(input);
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'ночи';
            } else if (hour < 12) {
              return 'утра';
            } else if (hour < 17) {
              return 'дня';
            } else {
              return 'вечера';
            }
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              case 'M':
              case 'd':
              case 'DDD':
                return number + '-й';

              case 'D':
                return number + '-го';

              case 'w':
              case 'W':
                return number + '-я';

              default:
                return number;
            }
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return ru;
      });
      /***/

    },

    /***/
    "lYtQ":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/mn.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function lYtQ(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function translate(number, withoutSuffix, key, isFuture) {
          switch (key) {
            case 's':
              return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';

            case 'ss':
              return number + (withoutSuffix ? ' секунд' : ' секундын');

            case 'm':
            case 'mm':
              return number + (withoutSuffix ? ' минут' : ' минутын');

            case 'h':
            case 'hh':
              return number + (withoutSuffix ? ' цаг' : ' цагийн');

            case 'd':
            case 'dd':
              return number + (withoutSuffix ? ' өдөр' : ' өдрийн');

            case 'M':
            case 'MM':
              return number + (withoutSuffix ? ' сар' : ' сарын');

            case 'y':
            case 'yy':
              return number + (withoutSuffix ? ' жил' : ' жилийн');

            default:
              return number;
          }
        }

        var mn = moment.defineLocale('mn', {
          months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
          monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
          monthsParseExact: true,
          weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
          weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
          weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY-MM-DD',
            LL: 'YYYY оны MMMMын D',
            LLL: 'YYYY оны MMMMын D HH:mm',
            LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
          },
          meridiemParse: /ҮӨ|ҮХ/i,
          isPM: function isPM(input) {
            return input === 'ҮХ';
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 12) {
              return 'ҮӨ';
            } else {
              return 'ҮХ';
            }
          },
          calendar: {
            sameDay: '[Өнөөдөр] LT',
            nextDay: '[Маргааш] LT',
            nextWeek: '[Ирэх] dddd LT',
            lastDay: '[Өчигдөр] LT',
            lastWeek: '[Өнгөрсөн] dddd LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s дараа',
            past: '%s өмнө',
            s: translate,
            ss: translate,
            m: translate,
            mm: translate,
            h: translate,
            hh: translate,
            d: translate,
            dd: translate,
            M: translate,
            MM: translate,
            y: translate,
            yy: translate
          },
          dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              case 'd':
              case 'D':
              case 'DDD':
                return number + ' өдөр';

              default:
                return number;
            }
          }
        });
        return mn;
      });
      /***/

    },

    /***/
    "lgnt":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ky.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function lgnt(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var suffixes = {
          0: '-чү',
          1: '-чи',
          2: '-чи',
          3: '-чү',
          4: '-чү',
          5: '-чи',
          6: '-чы',
          7: '-чи',
          8: '-чи',
          9: '-чу',
          10: '-чу',
          20: '-чы',
          30: '-чу',
          40: '-чы',
          50: '-чү',
          60: '-чы',
          70: '-чи',
          80: '-чи',
          90: '-чу',
          100: '-чү'
        };
        var ky = moment.defineLocale('ky', {
          months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
          monthsShort: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
          weekdays: 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
          weekdaysShort: 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
          weekdaysMin: 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Бүгүн саат] LT',
            nextDay: '[Эртең саат] LT',
            nextWeek: 'dddd [саат] LT',
            lastDay: '[Кечээ саат] LT',
            lastWeek: '[Өткөн аптанын] dddd [күнү] [саат] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s ичинде',
            past: '%s мурун',
            s: 'бирнече секунд',
            ss: '%d секунд',
            m: 'бир мүнөт',
            mm: '%d мүнөт',
            h: 'бир саат',
            hh: '%d саат',
            d: 'бир күн',
            dd: '%d күн',
            M: 'бир ай',
            MM: '%d ай',
            y: 'бир жыл',
            yy: '%d жыл'
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
          ordinal: function ordinal(number) {
            var a = number % 10,
                b = number >= 100 ? 100 : null;
            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return ky;
      });
      /***/

    },

    /***/
    "lyxo":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/ro.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function lyxo(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function relativeTimeWithPlural(number, withoutSuffix, key) {
          var format = {
            'ss': 'secunde',
            'mm': 'minute',
            'hh': 'ore',
            'dd': 'zile',
            'MM': 'luni',
            'yy': 'ani'
          },
              separator = ' ';

          if (number % 100 >= 20 || number >= 100 && number % 100 === 0) {
            separator = ' de ';
          }

          return number + separator + format[key];
        }

        var ro = moment.defineLocale('ro', {
          months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
          monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
          monthsParseExact: true,
          weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
          weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
          weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY H:mm',
            LLLL: 'dddd, D MMMM YYYY H:mm'
          },
          calendar: {
            sameDay: '[azi la] LT',
            nextDay: '[mâine la] LT',
            nextWeek: 'dddd [la] LT',
            lastDay: '[ieri la] LT',
            lastWeek: '[fosta] dddd [la] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'peste %s',
            past: '%s în urmă',
            s: 'câteva secunde',
            ss: relativeTimeWithPlural,
            m: 'un minut',
            mm: relativeTimeWithPlural,
            h: 'o oră',
            hh: relativeTimeWithPlural,
            d: 'o zi',
            dd: relativeTimeWithPlural,
            M: 'o lună',
            MM: relativeTimeWithPlural,
            y: 'un an',
            yy: relativeTimeWithPlural
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return ro;
      });
      /***/

    },

    /***/
    "nyYc":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/fr.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function nyYc(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var fr = moment.defineLocale('fr', {
          months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
          monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
          monthsParseExact: true,
          weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
          weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
          weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Aujourd’hui à] LT',
            nextDay: '[Demain à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[Hier à] LT',
            lastWeek: 'dddd [dernier à] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'dans %s',
            past: 'il y a %s',
            s: 'quelques secondes',
            ss: '%d secondes',
            m: 'une minute',
            mm: '%d minutes',
            h: 'une heure',
            hh: '%d heures',
            d: 'un jour',
            dd: '%d jours',
            M: 'un mois',
            MM: '%d mois',
            y: 'un an',
            yy: '%d ans'
          },
          dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              // TODO: Return 'e' when day of month > 1. Move this case inside
              // block for masculine words below.
              // See https://github.com/moment/moment/issues/3375
              case 'D':
                return number + (number === 1 ? 'er' : '');
              // Words with masculine grammatical gender: mois, trimestre, jour

              default:
              case 'M':
              case 'Q':
              case 'DDD':
              case 'd':
                return number + (number === 1 ? 'er' : 'e');
              // Words with feminine grammatical gender: semaine

              case 'w':
              case 'W':
                return number + (number === 1 ? 're' : 'e');
            }
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return fr;
      });
      /***/

    },

    /***/
    "o1bE":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/ar-dz.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function o1bE(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var arDz = moment.defineLocale('ar-dz', {
          months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
          monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
          weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
          weekdaysShort: 'احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
          weekdaysMin: 'أح_إث_ثلا_أر_خم_جم_سب'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[اليوم على الساعة] LT',
            nextDay: '[غدا على الساعة] LT',
            nextWeek: 'dddd [على الساعة] LT',
            lastDay: '[أمس على الساعة] LT',
            lastWeek: 'dddd [على الساعة] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'في %s',
            past: 'منذ %s',
            s: 'ثوان',
            ss: '%d ثانية',
            m: 'دقيقة',
            mm: '%d دقائق',
            h: 'ساعة',
            hh: '%d ساعات',
            d: 'يوم',
            dd: '%d أيام',
            M: 'شهر',
            MM: '%d أشهر',
            y: 'سنة',
            yy: '%d سنوات'
          },
          week: {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return arDz;
      });
      /***/

    },

    /***/
    "p/rL":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/bm.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function pRL(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var bm = moment.defineLocale('bm', {
          months: 'Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo'.split('_'),
          monthsShort: 'Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des'.split('_'),
          weekdays: 'Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri'.split('_'),
          weekdaysShort: 'Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib'.split('_'),
          weekdaysMin: 'Ka_Nt_Ta_Ar_Al_Ju_Si'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'MMMM [tile] D [san] YYYY',
            LLL: 'MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm',
            LLLL: 'dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm'
          },
          calendar: {
            sameDay: '[Bi lɛrɛ] LT',
            nextDay: '[Sini lɛrɛ] LT',
            nextWeek: 'dddd [don lɛrɛ] LT',
            lastDay: '[Kunu lɛrɛ] LT',
            lastWeek: 'dddd [tɛmɛnen lɛrɛ] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: '%s kɔnɔ',
            past: 'a bɛ %s bɔ',
            s: 'sanga dama dama',
            ss: 'sekondi %d',
            m: 'miniti kelen',
            mm: 'miniti %d',
            h: 'lɛrɛ kelen',
            hh: 'lɛrɛ %d',
            d: 'tile kelen',
            dd: 'tile %d',
            M: 'kalo kelen',
            MM: 'kalo %d',
            y: 'san kelen',
            yy: 'san %d'
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return bm;
      });
      /***/

    },

    /***/
    "raLr":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/uk.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function raLr(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function plural(word, num) {
          var forms = word.split('_');
          return num % 10 === 1 && num % 100 !== 11 ? forms[0] : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2];
        }

        function relativeTimeWithPlural(number, withoutSuffix, key) {
          var format = {
            'ss': withoutSuffix ? 'секунда_секунди_секунд' : 'секунду_секунди_секунд',
            'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
            'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
            'dd': 'день_дні_днів',
            'MM': 'місяць_місяці_місяців',
            'yy': 'рік_роки_років'
          };

          if (key === 'm') {
            return withoutSuffix ? 'хвилина' : 'хвилину';
          } else if (key === 'h') {
            return withoutSuffix ? 'година' : 'годину';
          } else {
            return number + ' ' + plural(format[key], +number);
          }
        }

        function weekdaysCaseReplace(m, format) {
          var weekdays = {
            'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
            'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
            'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
          };

          if (!m) {
            return weekdays['nominative'];
          }

          var nounCase = /(\[[ВвУу]\]) ?dddd/.test(format) ? 'accusative' : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(format) ? 'genitive' : 'nominative';
          return weekdays[nounCase][m.day()];
        }

        function processHoursFunction(str) {
          return function () {
            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
          };
        }

        var uk = moment.defineLocale('uk', {
          months: {
            'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
            'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
          },
          monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
          weekdays: weekdaysCaseReplace,
          weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
          weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY р.',
            LLL: 'D MMMM YYYY р., HH:mm',
            LLLL: 'dddd, D MMMM YYYY р., HH:mm'
          },
          calendar: {
            sameDay: processHoursFunction('[Сьогодні '),
            nextDay: processHoursFunction('[Завтра '),
            lastDay: processHoursFunction('[Вчора '),
            nextWeek: processHoursFunction('[У] dddd ['),
            lastWeek: function lastWeek() {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return processHoursFunction('[Минулої] dddd [').call(this);

                case 1:
                case 2:
                case 4:
                  return processHoursFunction('[Минулого] dddd [').call(this);
              }
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'за %s',
            past: '%s тому',
            s: 'декілька секунд',
            ss: relativeTimeWithPlural,
            m: relativeTimeWithPlural,
            mm: relativeTimeWithPlural,
            h: 'годину',
            hh: relativeTimeWithPlural,
            d: 'день',
            dd: relativeTimeWithPlural,
            M: 'місяць',
            MM: relativeTimeWithPlural,
            y: 'рік',
            yy: relativeTimeWithPlural
          },
          // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
          meridiemParse: /ночі|ранку|дня|вечора/,
          isPM: function isPM(input) {
            return /^(дня|вечора)$/.test(input);
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 4) {
              return 'ночі';
            } else if (hour < 12) {
              return 'ранку';
            } else if (hour < 17) {
              return 'дня';
            } else {
              return 'вечора';
            }
          },
          dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
          ordinal: function ordinal(number, period) {
            switch (period) {
              case 'M':
              case 'd':
              case 'DDD':
              case 'w':
              case 'W':
                return number + '-й';

              case 'D':
                return number + '-го';

              default:
                return number;
            }
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return uk;
      });
      /***/

    },

    /***/
    "s+uk":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/de-at.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function sUk(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function processRelativeTime(number, withoutSuffix, key, isFuture) {
          var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
          };
          return withoutSuffix ? format[key][0] : format[key][1];
        }

        var deAt = moment.defineLocale('de-at', {
          months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
          monthsShort: 'Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
          monthsParseExact: true,
          weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
          weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
          weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
          },
          relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: processRelativeTime,
            mm: '%d Minuten',
            h: processRelativeTime,
            hh: '%d Stunden',
            d: processRelativeTime,
            dd: processRelativeTime,
            M: processRelativeTime,
            MM: processRelativeTime,
            y: processRelativeTime,
            yy: processRelativeTime
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return deAt;
      });
      /***/

    },

    /***/
    "sp3z":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/lo.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function sp3z(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var lo = moment.defineLocale('lo', {
          months: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
          monthsShort: 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
          weekdays: 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
          weekdaysShort: 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
          weekdaysMin: 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'ວັນdddd D MMMM YYYY HH:mm'
          },
          meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
          isPM: function isPM(input) {
            return input === 'ຕອນແລງ';
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 12) {
              return 'ຕອນເຊົ້າ';
            } else {
              return 'ຕອນແລງ';
            }
          },
          calendar: {
            sameDay: '[ມື້ນີ້ເວລາ] LT',
            nextDay: '[ມື້ອື່ນເວລາ] LT',
            nextWeek: '[ວັນ]dddd[ໜ້າເວລາ] LT',
            lastDay: '[ມື້ວານນີ້ເວລາ] LT',
            lastWeek: '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'ອີກ %s',
            past: '%sຜ່ານມາ',
            s: 'ບໍ່ເທົ່າໃດວິນາທີ',
            ss: '%d ວິນາທີ',
            m: '1 ນາທີ',
            mm: '%d ນາທີ',
            h: '1 ຊົ່ວໂມງ',
            hh: '%d ຊົ່ວໂມງ',
            d: '1 ມື້',
            dd: '%d ມື້',
            M: '1 ເດືອນ',
            MM: '%d ເດືອນ',
            y: '1 ປີ',
            yy: '%d ປີ'
          },
          dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
          ordinal: function ordinal(number) {
            return 'ທີ່' + number;
          }
        });
        return lo;
      });
      /***/

    },

    /***/
    "tGlX":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/de.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function tGlX(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function processRelativeTime(number, withoutSuffix, key, isFuture) {
          var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
          };
          return withoutSuffix ? format[key][0] : format[key][1];
        }

        var de = moment.defineLocale('de', {
          months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
          monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
          monthsParseExact: true,
          weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
          weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
          weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
          },
          relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: processRelativeTime,
            mm: '%d Minuten',
            h: processRelativeTime,
            hh: '%d Stunden',
            d: processRelativeTime,
            dd: processRelativeTime,
            M: processRelativeTime,
            MM: processRelativeTime,
            y: processRelativeTime,
            yy: processRelativeTime
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return de;
      });
      /***/

    },

    /***/
    "tT3J":
    /*!************************************************!*\
      !*** ./node_modules/moment/locale/tzm-latn.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function tT3J(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var tzmLatn = moment.defineLocale('tzm-latn', {
          months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
          monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
          weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
          weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
          weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[asdkh g] LT',
            nextDay: '[aska g] LT',
            nextWeek: 'dddd [g] LT',
            lastDay: '[assant g] LT',
            lastWeek: 'dddd [g] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'dadkh s yan %s',
            past: 'yan %s',
            s: 'imik',
            ss: '%d imik',
            m: 'minuḍ',
            mm: '%d minuḍ',
            h: 'saɛa',
            hh: '%d tassaɛin',
            d: 'ass',
            dd: '%d ossan',
            M: 'ayowr',
            MM: '%d iyyirn',
            y: 'asgas',
            yy: '%d isgasn'
          },
          week: {
            dow: 6,
            // Saturday is the first day of the week.
            doy: 12 // The week that contains Jan 12th is the first week of the year.

          }
        });
        return tzmLatn;
      });
      /***/

    },

    /***/
    "tUCv":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/jv.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function tUCv(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var jv = moment.defineLocale('jv', {
          months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
          monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
          weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
          weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
          weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY [pukul] HH.mm',
            LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
          },
          meridiemParse: /enjing|siyang|sonten|ndalu/,
          meridiemHour: function meridiemHour(hour, meridiem) {
            if (hour === 12) {
              hour = 0;
            }

            if (meridiem === 'enjing') {
              return hour;
            } else if (meridiem === 'siyang') {
              return hour >= 11 ? hour : hour + 12;
            } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
              return hour + 12;
            }
          },
          meridiem: function meridiem(hours, minutes, isLower) {
            if (hours < 11) {
              return 'enjing';
            } else if (hours < 15) {
              return 'siyang';
            } else if (hours < 19) {
              return 'sonten';
            } else {
              return 'ndalu';
            }
          },
          calendar: {
            sameDay: '[Dinten puniko pukul] LT',
            nextDay: '[Mbenjang pukul] LT',
            nextWeek: 'dddd [pukul] LT',
            lastDay: '[Kala wingi pukul] LT',
            lastWeek: 'dddd [kepengker pukul] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'wonten ing %s',
            past: '%s ingkang kepengker',
            s: 'sawetawis detik',
            ss: '%d detik',
            m: 'setunggal menit',
            mm: '%d menit',
            h: 'setunggal jam',
            hh: '%d jam',
            d: 'sedinten',
            dd: '%d dinten',
            M: 'sewulan',
            MM: '%d wulan',
            y: 'setaun',
            yy: '%d taun'
          },
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return jv;
      });
      /***/

    },

    /***/
    "u3GI":
    /*!*********************************************!*\
      !*** ./node_modules/moment/locale/de-ch.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function u3GI(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        function processRelativeTime(number, withoutSuffix, key, isFuture) {
          var format = {
            'm': ['eine Minute', 'einer Minute'],
            'h': ['eine Stunde', 'einer Stunde'],
            'd': ['ein Tag', 'einem Tag'],
            'dd': [number + ' Tage', number + ' Tagen'],
            'M': ['ein Monat', 'einem Monat'],
            'MM': [number + ' Monate', number + ' Monaten'],
            'y': ['ein Jahr', 'einem Jahr'],
            'yy': [number + ' Jahre', number + ' Jahren']
          };
          return withoutSuffix ? format[key][0] : format[key][1];
        }

        var deCh = moment.defineLocale('de-ch', {
          months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
          monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
          monthsParseExact: true,
          weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
          weekdaysShort: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
          weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY HH:mm',
            LLLL: 'dddd, D. MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[heute um] LT [Uhr]',
            sameElse: 'L',
            nextDay: '[morgen um] LT [Uhr]',
            nextWeek: 'dddd [um] LT [Uhr]',
            lastDay: '[gestern um] LT [Uhr]',
            lastWeek: '[letzten] dddd [um] LT [Uhr]'
          },
          relativeTime: {
            future: 'in %s',
            past: 'vor %s',
            s: 'ein paar Sekunden',
            ss: '%d Sekunden',
            m: processRelativeTime,
            mm: '%d Minuten',
            h: processRelativeTime,
            hh: '%d Stunden',
            d: processRelativeTime,
            dd: processRelativeTime,
            M: processRelativeTime,
            MM: processRelativeTime,
            y: processRelativeTime,
            yy: processRelativeTime
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return deCh;
      });
      /***/

    },

    /***/
    "uEye":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/nn.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function uEye(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var nn = moment.defineLocale('nn', {
          months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
          monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
          weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
          weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
          weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY [kl.] H:mm',
            LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
          },
          calendar: {
            sameDay: '[I dag klokka] LT',
            nextDay: '[I morgon klokka] LT',
            nextWeek: 'dddd [klokka] LT',
            lastDay: '[I går klokka] LT',
            lastWeek: '[Føregåande] dddd [klokka] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'om %s',
            past: '%s sidan',
            s: 'nokre sekund',
            ss: '%d sekund',
            m: 'eit minutt',
            mm: '%d minutt',
            h: 'ein time',
            hh: '%d timar',
            d: 'ein dag',
            dd: '%d dagar',
            M: 'ein månad',
            MM: '%d månader',
            y: 'eit år',
            yy: '%d år'
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return nn;
      });
      /***/

    },

    /***/
    "uXwI":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/lv.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function uXwI(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var units = {
          'ss': 'sekundes_sekundēm_sekunde_sekundes'.split('_'),
          'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
          'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
          'h': 'stundas_stundām_stunda_stundas'.split('_'),
          'hh': 'stundas_stundām_stunda_stundas'.split('_'),
          'd': 'dienas_dienām_diena_dienas'.split('_'),
          'dd': 'dienas_dienām_diena_dienas'.split('_'),
          'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
          'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
          'y': 'gada_gadiem_gads_gadi'.split('_'),
          'yy': 'gada_gadiem_gads_gadi'.split('_')
        };
        /**
         * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
         */

        function format(forms, number, withoutSuffix) {
          if (withoutSuffix) {
            // E.g. "21 minūte", "3 minūtes".
            return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
          } else {
            // E.g. "21 minūtes" as in "pēc 21 minūtes".
            // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
            return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
          }
        }

        function relativeTimeWithPlural(number, withoutSuffix, key) {
          return number + ' ' + format(units[key], number, withoutSuffix);
        }

        function relativeTimeWithSingular(number, withoutSuffix, key) {
          return format(units[key], number, withoutSuffix);
        }

        function relativeSeconds(number, withoutSuffix) {
          return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
        }

        var lv = moment.defineLocale('lv', {
          months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
          monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
          weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
          weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
          weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY.',
            LL: 'YYYY. [gada] D. MMMM',
            LLL: 'YYYY. [gada] D. MMMM, HH:mm',
            LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm'
          },
          calendar: {
            sameDay: '[Šodien pulksten] LT',
            nextDay: '[Rīt pulksten] LT',
            nextWeek: 'dddd [pulksten] LT',
            lastDay: '[Vakar pulksten] LT',
            lastWeek: '[Pagājušā] dddd [pulksten] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'pēc %s',
            past: 'pirms %s',
            s: relativeSeconds,
            ss: relativeTimeWithPlural,
            m: relativeTimeWithSingular,
            mm: relativeTimeWithPlural,
            h: relativeTimeWithSingular,
            hh: relativeTimeWithPlural,
            d: relativeTimeWithSingular,
            dd: relativeTimeWithPlural,
            M: relativeTimeWithSingular,
            MM: relativeTimeWithPlural,
            y: relativeTimeWithSingular,
            yy: relativeTimeWithPlural
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return lv;
      });
      /***/

    },

    /***/
    "wQk9":
    /*!*******************************************!*\
      !*** ./node_modules/moment/locale/tzm.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function wQk9(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var tzm = moment.defineLocale('tzm', {
          months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
          monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
          weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
          weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
          weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
            nextWeek: 'dddd [ⴴ] LT',
            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
            lastWeek: 'dddd [ⴴ] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
            past: 'ⵢⴰⵏ %s',
            s: 'ⵉⵎⵉⴽ',
            ss: '%d ⵉⵎⵉⴽ',
            m: 'ⵎⵉⵏⵓⴺ',
            mm: '%d ⵎⵉⵏⵓⴺ',
            h: 'ⵙⴰⵄⴰ',
            hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
            d: 'ⴰⵙⵙ',
            dd: '%d oⵙⵙⴰⵏ',
            M: 'ⴰⵢoⵓⵔ',
            MM: '%d ⵉⵢⵢⵉⵔⵏ',
            y: 'ⴰⵙⴳⴰⵙ',
            yy: '%d ⵉⵙⴳⴰⵙⵏ'
          },
          week: {
            dow: 6,
            // Saturday is the first day of the week.
            doy: 12 // The week that contains Jan 12th is the first week of the year.

          }
        });
        return tzm;
      });
      /***/

    },

    /***/
    "wd/R":
    /*!***************************************!*\
      !*** ./node_modules/moment/moment.js ***!
      \***************************************/

    /*! no static exports found */

    /***/
    function wdR(module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (module) {
        var require; //! moment.js


        ;

        (function (global, factory) {
          true ? module.exports = factory() : undefined;
        })(this, function () {
          'use strict';

          var hookCallback;

          function hooks() {
            return hookCallback.apply(null, arguments);
          } // This is done to register the method called with moment()
          // without creating circular dependencies.


          function setHookCallback(callback) {
            hookCallback = callback;
          }

          function isArray(input) {
            return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
          }

          function isObject(input) {
            // IE8 will treat undefined and null as object if it wasn't for
            // input != null
            return input != null && Object.prototype.toString.call(input) === '[object Object]';
          }

          function isObjectEmpty(obj) {
            if (Object.getOwnPropertyNames) {
              return Object.getOwnPropertyNames(obj).length === 0;
            } else {
              var k;

              for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                  return false;
                }
              }

              return true;
            }
          }

          function isUndefined(input) {
            return input === void 0;
          }

          function isNumber(input) {
            return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
          }

          function isDate(input) {
            return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
          }

          function map(arr, fn) {
            var res = [],
                i;

            for (i = 0; i < arr.length; ++i) {
              res.push(fn(arr[i], i));
            }

            return res;
          }

          function hasOwnProp(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b);
          }

          function extend(a, b) {
            for (var i in b) {
              if (hasOwnProp(b, i)) {
                a[i] = b[i];
              }
            }

            if (hasOwnProp(b, 'toString')) {
              a.toString = b.toString;
            }

            if (hasOwnProp(b, 'valueOf')) {
              a.valueOf = b.valueOf;
            }

            return a;
          }

          function createUTC(input, format, locale, strict) {
            return createLocalOrUTC(input, format, locale, strict, true).utc();
          }

          function defaultParsingFlags() {
            // We need to deep clone this object.
            return {
              empty: false,
              unusedTokens: [],
              unusedInput: [],
              overflow: -2,
              charsLeftOver: 0,
              nullInput: false,
              invalidMonth: null,
              invalidFormat: false,
              userInvalidated: false,
              iso: false,
              parsedDateParts: [],
              meridiem: null,
              rfc2822: false,
              weekdayMismatch: false
            };
          }

          function getParsingFlags(m) {
            if (m._pf == null) {
              m._pf = defaultParsingFlags();
            }

            return m._pf;
          }

          var some;

          if (Array.prototype.some) {
            some = Array.prototype.some;
          } else {
            some = function some(fun) {
              var t = Object(this);
              var len = t.length >>> 0;

              for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                  return true;
                }
              }

              return false;
            };
          }

          function isValid(m) {
            if (m._isValid == null) {
              var flags = getParsingFlags(m);
              var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
              });
              var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

              if (m._strict) {
                isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
              }

              if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
              } else {
                return isNowValid;
              }
            }

            return m._isValid;
          }

          function createInvalid(flags) {
            var m = createUTC(NaN);

            if (flags != null) {
              extend(getParsingFlags(m), flags);
            } else {
              getParsingFlags(m).userInvalidated = true;
            }

            return m;
          } // Plugins that add properties should also add the key here (null value),
          // so we can properly clone ourselves.


          var momentProperties = hooks.momentProperties = [];

          function copyConfig(to, from) {
            var i, prop, val;

            if (!isUndefined(from._isAMomentObject)) {
              to._isAMomentObject = from._isAMomentObject;
            }

            if (!isUndefined(from._i)) {
              to._i = from._i;
            }

            if (!isUndefined(from._f)) {
              to._f = from._f;
            }

            if (!isUndefined(from._l)) {
              to._l = from._l;
            }

            if (!isUndefined(from._strict)) {
              to._strict = from._strict;
            }

            if (!isUndefined(from._tzm)) {
              to._tzm = from._tzm;
            }

            if (!isUndefined(from._isUTC)) {
              to._isUTC = from._isUTC;
            }

            if (!isUndefined(from._offset)) {
              to._offset = from._offset;
            }

            if (!isUndefined(from._pf)) {
              to._pf = getParsingFlags(from);
            }

            if (!isUndefined(from._locale)) {
              to._locale = from._locale;
            }

            if (momentProperties.length > 0) {
              for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];

                if (!isUndefined(val)) {
                  to[prop] = val;
                }
              }
            }

            return to;
          }

          var updateInProgress = false; // Moment prototype object

          function Moment(config) {
            copyConfig(this, config);
            this._d = new Date(config._d != null ? config._d.getTime() : NaN);

            if (!this.isValid()) {
              this._d = new Date(NaN);
            } // Prevent infinite loop in case updateOffset creates new moment
            // objects.


            if (updateInProgress === false) {
              updateInProgress = true;
              hooks.updateOffset(this);
              updateInProgress = false;
            }
          }

          function isMoment(obj) {
            return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
          }

          function absFloor(number) {
            if (number < 0) {
              // -0 -> 0
              return Math.ceil(number) || 0;
            } else {
              return Math.floor(number);
            }
          }

          function toInt(argumentForCoercion) {
            var coercedNumber = +argumentForCoercion,
                value = 0;

            if (coercedNumber !== 0 && isFinite(coercedNumber)) {
              value = absFloor(coercedNumber);
            }

            return value;
          } // compare two arrays, return the number of differences


          function compareArrays(array1, array2, dontConvert) {
            var len = Math.min(array1.length, array2.length),
                lengthDiff = Math.abs(array1.length - array2.length),
                diffs = 0,
                i;

            for (i = 0; i < len; i++) {
              if (dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) {
                diffs++;
              }
            }

            return diffs + lengthDiff;
          }

          function warn(msg) {
            if (hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
              console.warn('Deprecation warning: ' + msg);
            }
          }

          function deprecate(msg, fn) {
            var firstTime = true;
            return extend(function () {
              if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
              }

              if (firstTime) {
                var args = [];
                var arg;

                for (var i = 0; i < arguments.length; i++) {
                  arg = '';

                  if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';

                    for (var key in arguments[0]) {
                      arg += key + ': ' + arguments[0][key] + ', ';
                    }

                    arg = arg.slice(0, -2); // Remove trailing comma and space
                  } else {
                    arg = arguments[i];
                  }

                  args.push(arg);
                }

                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + new Error().stack);
                firstTime = false;
              }

              return fn.apply(this, arguments);
            }, fn);
          }

          var deprecations = {};

          function deprecateSimple(name, msg) {
            if (hooks.deprecationHandler != null) {
              hooks.deprecationHandler(name, msg);
            }

            if (!deprecations[name]) {
              warn(msg);
              deprecations[name] = true;
            }
          }

          hooks.suppressDeprecationWarnings = false;
          hooks.deprecationHandler = null;

          function isFunction(input) {
            return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
          }

          function set(config) {
            var prop, i;

            for (i in config) {
              prop = config[i];

              if (isFunction(prop)) {
                this[i] = prop;
              } else {
                this['_' + i] = prop;
              }
            }

            this._config = config; // Lenient ordinal parsing accepts just a number in addition to
            // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
            // TODO: Remove "ordinalParse" fallback in next major release.

            this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
          }

          function mergeConfigs(parentConfig, childConfig) {
            var res = extend({}, parentConfig),
                prop;

            for (prop in childConfig) {
              if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                  res[prop] = {};
                  extend(res[prop], parentConfig[prop]);
                  extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                  res[prop] = childConfig[prop];
                } else {
                  delete res[prop];
                }
              }
            }

            for (prop in parentConfig) {
              if (hasOwnProp(parentConfig, prop) && !hasOwnProp(childConfig, prop) && isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
              }
            }

            return res;
          }

          function Locale(config) {
            if (config != null) {
              this.set(config);
            }
          }

          var keys;

          if (Object.keys) {
            keys = Object.keys;
          } else {
            keys = function keys(obj) {
              var i,
                  res = [];

              for (i in obj) {
                if (hasOwnProp(obj, i)) {
                  res.push(i);
                }
              }

              return res;
            };
          }

          var defaultCalendar = {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L'
          };

          function calendar(key, mom, now) {
            var output = this._calendar[key] || this._calendar['sameElse'];
            return isFunction(output) ? output.call(mom, now) : output;
          }

          var defaultLongDateFormat = {
            LTS: 'h:mm:ss A',
            LT: 'h:mm A',
            L: 'MM/DD/YYYY',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY h:mm A',
            LLLL: 'dddd, MMMM D, YYYY h:mm A'
          };

          function longDateFormat(key) {
            var format = this._longDateFormat[key],
                formatUpper = this._longDateFormat[key.toUpperCase()];

            if (format || !formatUpper) {
              return format;
            }

            this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
              return val.slice(1);
            });
            return this._longDateFormat[key];
          }

          var defaultInvalidDate = 'Invalid date';

          function invalidDate() {
            return this._invalidDate;
          }

          var defaultOrdinal = '%d';
          var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

          function ordinal(number) {
            return this._ordinal.replace('%d', number);
          }

          var defaultRelativeTime = {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years'
          };

          function relativeTime(number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return isFunction(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
          }

          function pastFuture(diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return isFunction(format) ? format(output) : format.replace(/%s/i, output);
          }

          var aliases = {};

          function addUnitAlias(unit, shorthand) {
            var lowerCase = unit.toLowerCase();
            aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
          }

          function normalizeUnits(units) {
            return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
          }

          function normalizeObjectUnits(inputObject) {
            var normalizedInput = {},
                normalizedProp,
                prop;

            for (prop in inputObject) {
              if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);

                if (normalizedProp) {
                  normalizedInput[normalizedProp] = inputObject[prop];
                }
              }
            }

            return normalizedInput;
          }

          var priorities = {};

          function addUnitPriority(unit, priority) {
            priorities[unit] = priority;
          }

          function getPrioritizedUnits(unitsObj) {
            var units = [];

            for (var u in unitsObj) {
              units.push({
                unit: u,
                priority: priorities[u]
              });
            }

            units.sort(function (a, b) {
              return a.priority - b.priority;
            });
            return units;
          }

          function zeroFill(number, targetLength, forceSign) {
            var absNumber = '' + Math.abs(number),
                zerosToFill = targetLength - absNumber.length,
                sign = number >= 0;
            return (sign ? forceSign ? '+' : '' : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
          }

          var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
          var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
          var formatFunctions = {};
          var formatTokenFunctions = {}; // token:    'M'
          // padded:   ['MM', 2]
          // ordinal:  'Mo'
          // callback: function () { this.month() + 1 }

          function addFormatToken(token, padded, ordinal, callback) {
            var func = callback;

            if (typeof callback === 'string') {
              func = function func() {
                return this[callback]();
              };
            }

            if (token) {
              formatTokenFunctions[token] = func;
            }

            if (padded) {
              formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
              };
            }

            if (ordinal) {
              formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
              };
            }
          }

          function removeFormattingTokens(input) {
            if (input.match(/\[[\s\S]/)) {
              return input.replace(/^\[|\]$/g, '');
            }

            return input.replace(/\\/g, '');
          }

          function makeFormatFunction(format) {
            var array = format.match(formattingTokens),
                i,
                length;

            for (i = 0, length = array.length; i < length; i++) {
              if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
              } else {
                array[i] = removeFormattingTokens(array[i]);
              }
            }

            return function (mom) {
              var output = '',
                  i;

              for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
              }

              return output;
            };
          } // format date using native date object


          function formatMoment(m, format) {
            if (!m.isValid()) {
              return m.localeData().invalidDate();
            }

            format = expandFormat(format, m.localeData());
            formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
            return formatFunctions[format](m);
          }

          function expandFormat(format, locale) {
            var i = 5;

            function replaceLongDateFormatTokens(input) {
              return locale.longDateFormat(input) || input;
            }

            localFormattingTokens.lastIndex = 0;

            while (i >= 0 && localFormattingTokens.test(format)) {
              format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
              localFormattingTokens.lastIndex = 0;
              i -= 1;
            }

            return format;
          }

          var match1 = /\d/; //       0 - 9

          var match2 = /\d\d/; //      00 - 99

          var match3 = /\d{3}/; //     000 - 999

          var match4 = /\d{4}/; //    0000 - 9999

          var match6 = /[+-]?\d{6}/; // -999999 - 999999

          var match1to2 = /\d\d?/; //       0 - 99

          var match3to4 = /\d\d\d\d?/; //     999 - 9999

          var match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999

          var match1to3 = /\d{1,3}/; //       0 - 999

          var match1to4 = /\d{1,4}/; //       0 - 9999

          var match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

          var matchUnsigned = /\d+/; //       0 - inf

          var matchSigned = /[+-]?\d+/; //    -inf - inf

          var matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

          var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

          var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
          // any word (or two) characters or numbers including two/three word month in arabic.
          // includes scottish gaelic two word and hyphenated months

          var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
          var regexes = {};

          function addRegexToken(token, regex, strictRegex) {
            regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
              return isStrict && strictRegex ? strictRegex : regex;
            };
          }

          function getParseRegexForToken(token, config) {
            if (!hasOwnProp(regexes, token)) {
              return new RegExp(unescapeFormat(token));
            }

            return regexes[token](config._strict, config._locale);
          } // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript


          function unescapeFormat(s) {
            return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
              return p1 || p2 || p3 || p4;
            }));
          }

          function regexEscape(s) {
            return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          }

          var tokens = {};

          function addParseToken(token, callback) {
            var i,
                func = callback;

            if (typeof token === 'string') {
              token = [token];
            }

            if (isNumber(callback)) {
              func = function func(input, array) {
                array[callback] = toInt(input);
              };
            }

            for (i = 0; i < token.length; i++) {
              tokens[token[i]] = func;
            }
          }

          function addWeekParseToken(token, callback) {
            addParseToken(token, function (input, array, config, token) {
              config._w = config._w || {};
              callback(input, config._w, config, token);
            });
          }

          function addTimeToArrayFromToken(token, input, config) {
            if (input != null && hasOwnProp(tokens, token)) {
              tokens[token](input, config._a, config, token);
            }
          }

          var YEAR = 0;
          var MONTH = 1;
          var DATE = 2;
          var HOUR = 3;
          var MINUTE = 4;
          var SECOND = 5;
          var MILLISECOND = 6;
          var WEEK = 7;
          var WEEKDAY = 8; // FORMATTING

          addFormatToken('Y', 0, 0, function () {
            var y = this.year();
            return y <= 9999 ? '' + y : '+' + y;
          });
          addFormatToken(0, ['YY', 2], 0, function () {
            return this.year() % 100;
          });
          addFormatToken(0, ['YYYY', 4], 0, 'year');
          addFormatToken(0, ['YYYYY', 5], 0, 'year');
          addFormatToken(0, ['YYYYYY', 6, true], 0, 'year'); // ALIASES

          addUnitAlias('year', 'y'); // PRIORITIES

          addUnitPriority('year', 1); // PARSING

          addRegexToken('Y', matchSigned);
          addRegexToken('YY', match1to2, match2);
          addRegexToken('YYYY', match1to4, match4);
          addRegexToken('YYYYY', match1to6, match6);
          addRegexToken('YYYYYY', match1to6, match6);
          addParseToken(['YYYYY', 'YYYYYY'], YEAR);
          addParseToken('YYYY', function (input, array) {
            array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
          });
          addParseToken('YY', function (input, array) {
            array[YEAR] = hooks.parseTwoDigitYear(input);
          });
          addParseToken('Y', function (input, array) {
            array[YEAR] = parseInt(input, 10);
          }); // HELPERS

          function daysInYear(year) {
            return isLeapYear(year) ? 366 : 365;
          }

          function isLeapYear(year) {
            return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
          } // HOOKS


          hooks.parseTwoDigitYear = function (input) {
            return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
          }; // MOMENTS


          var getSetYear = makeGetSet('FullYear', true);

          function getIsLeapYear() {
            return isLeapYear(this.year());
          }

          function makeGetSet(unit, keepTime) {
            return function (value) {
              if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
              } else {
                return get(this, unit);
              }
            };
          }

          function get(mom, unit) {
            return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
          }

          function set$1(mom, unit, value) {
            if (mom.isValid() && !isNaN(value)) {
              if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
              } else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
              }
            }
          } // MOMENTS


          function stringGet(units) {
            units = normalizeUnits(units);

            if (isFunction(this[units])) {
              return this[units]();
            }

            return this;
          }

          function stringSet(units, value) {
            if (typeof units === 'object') {
              units = normalizeObjectUnits(units);
              var prioritized = getPrioritizedUnits(units);

              for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
              }
            } else {
              units = normalizeUnits(units);

              if (isFunction(this[units])) {
                return this[units](value);
              }
            }

            return this;
          }

          function mod(n, x) {
            return (n % x + x) % x;
          }

          var indexOf;

          if (Array.prototype.indexOf) {
            indexOf = Array.prototype.indexOf;
          } else {
            indexOf = function indexOf(o) {
              // I know
              var i;

              for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                  return i;
                }
              }

              return -1;
            };
          }

          function daysInMonth(year, month) {
            if (isNaN(year) || isNaN(month)) {
              return NaN;
            }

            var modMonth = mod(month, 12);
            year += (month - modMonth) / 12;
            return modMonth === 1 ? isLeapYear(year) ? 29 : 28 : 31 - modMonth % 7 % 2;
          } // FORMATTING


          addFormatToken('M', ['MM', 2], 'Mo', function () {
            return this.month() + 1;
          });
          addFormatToken('MMM', 0, 0, function (format) {
            return this.localeData().monthsShort(this, format);
          });
          addFormatToken('MMMM', 0, 0, function (format) {
            return this.localeData().months(this, format);
          }); // ALIASES

          addUnitAlias('month', 'M'); // PRIORITY

          addUnitPriority('month', 8); // PARSING

          addRegexToken('M', match1to2);
          addRegexToken('MM', match1to2, match2);
          addRegexToken('MMM', function (isStrict, locale) {
            return locale.monthsShortRegex(isStrict);
          });
          addRegexToken('MMMM', function (isStrict, locale) {
            return locale.monthsRegex(isStrict);
          });
          addParseToken(['M', 'MM'], function (input, array) {
            array[MONTH] = toInt(input) - 1;
          });
          addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
            var month = config._locale.monthsParse(input, token, config._strict); // if we didn't find a month name, mark the date as invalid.


            if (month != null) {
              array[MONTH] = month;
            } else {
              getParsingFlags(config).invalidMonth = input;
            }
          }); // LOCALES

          var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
          var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');

          function localeMonths(m, format) {
            if (!m) {
              return isArray(this._months) ? this._months : this._months['standalone'];
            }

            return isArray(this._months) ? this._months[m.month()] : this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
          }

          var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');

          function localeMonthsShort(m, format) {
            if (!m) {
              return isArray(this._monthsShort) ? this._monthsShort : this._monthsShort['standalone'];
            }

            return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
          }

          function handleStrictParse(monthName, format, strict) {
            var i,
                ii,
                mom,
                llc = monthName.toLocaleLowerCase();

            if (!this._monthsParse) {
              // this is not used
              this._monthsParse = [];
              this._longMonthsParse = [];
              this._shortMonthsParse = [];

              for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
              }
            }

            if (strict) {
              if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
              } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
              }
            } else {
              if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);

                if (ii !== -1) {
                  return ii;
                }

                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
              } else {
                ii = indexOf.call(this._longMonthsParse, llc);

                if (ii !== -1) {
                  return ii;
                }

                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
              }
            }
          }

          function localeMonthsParse(monthName, format, strict) {
            var i, mom, regex;

            if (this._monthsParseExact) {
              return handleStrictParse.call(this, monthName, format, strict);
            }

            if (!this._monthsParse) {
              this._monthsParse = [];
              this._longMonthsParse = [];
              this._shortMonthsParse = [];
            } // TODO: add sorting
            // Sorting makes sure if one month (or abbr) is a prefix of another
            // see sorting in computeMonthsParse


            for (i = 0; i < 12; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, i]);

              if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
              }

              if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
              } // test the regex


              if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
              } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
              } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
              }
            }
          } // MOMENTS


          function setMonth(mom, value) {
            var dayOfMonth;

            if (!mom.isValid()) {
              // No op
              return mom;
            }

            if (typeof value === 'string') {
              if (/^\d+$/.test(value)) {
                value = toInt(value);
              } else {
                value = mom.localeData().monthsParse(value); // TODO: Another silent failure?

                if (!isNumber(value)) {
                  return mom;
                }
              }
            }

            dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));

            mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);

            return mom;
          }

          function getSetMonth(value) {
            if (value != null) {
              setMonth(this, value);
              hooks.updateOffset(this, true);
              return this;
            } else {
              return get(this, 'Month');
            }
          }

          function getDaysInMonth() {
            return daysInMonth(this.year(), this.month());
          }

          var defaultMonthsShortRegex = matchWord;

          function monthsShortRegex(isStrict) {
            if (this._monthsParseExact) {
              if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
              }

              if (isStrict) {
                return this._monthsShortStrictRegex;
              } else {
                return this._monthsShortRegex;
              }
            } else {
              if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
              }

              return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
            }
          }

          var defaultMonthsRegex = matchWord;

          function monthsRegex(isStrict) {
            if (this._monthsParseExact) {
              if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
              }

              if (isStrict) {
                return this._monthsStrictRegex;
              } else {
                return this._monthsRegex;
              }
            } else {
              if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
              }

              return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
            }
          }

          function computeMonthsParse() {
            function cmpLenRev(a, b) {
              return b.length - a.length;
            }

            var shortPieces = [],
                longPieces = [],
                mixedPieces = [],
                i,
                mom;

            for (i = 0; i < 12; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, i]);
              shortPieces.push(this.monthsShort(mom, ''));
              longPieces.push(this.months(mom, ''));
              mixedPieces.push(this.months(mom, ''));
              mixedPieces.push(this.monthsShort(mom, ''));
            } // Sorting makes sure if one month (or abbr) is a prefix of another it
            // will match the longer piece.


            shortPieces.sort(cmpLenRev);
            longPieces.sort(cmpLenRev);
            mixedPieces.sort(cmpLenRev);

            for (i = 0; i < 12; i++) {
              shortPieces[i] = regexEscape(shortPieces[i]);
              longPieces[i] = regexEscape(longPieces[i]);
            }

            for (i = 0; i < 24; i++) {
              mixedPieces[i] = regexEscape(mixedPieces[i]);
            }

            this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
            this._monthsShortRegex = this._monthsRegex;
            this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
            this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
          }

          function createDate(y, m, d, h, M, s, ms) {
            // can't just apply() to create a date:
            // https://stackoverflow.com/q/181348
            var date = new Date(y, m, d, h, M, s, ms); // the date constructor remaps years 0-99 to 1900-1999

            if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
              date.setFullYear(y);
            }

            return date;
          }

          function createUTCDate(y) {
            var date = new Date(Date.UTC.apply(null, arguments)); // the Date.UTC function remaps years 0-99 to 1900-1999

            if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
              date.setUTCFullYear(y);
            }

            return date;
          } // start-of-first-week - start-of-year


          function firstWeekOffset(year, dow, doy) {
            var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
                // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
            return -fwdlw + fwd - 1;
          } // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday


          function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
            var localWeekday = (7 + weekday - dow) % 7,
                weekOffset = firstWeekOffset(year, dow, doy),
                dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
                resYear,
                resDayOfYear;

            if (dayOfYear <= 0) {
              resYear = year - 1;
              resDayOfYear = daysInYear(resYear) + dayOfYear;
            } else if (dayOfYear > daysInYear(year)) {
              resYear = year + 1;
              resDayOfYear = dayOfYear - daysInYear(year);
            } else {
              resYear = year;
              resDayOfYear = dayOfYear;
            }

            return {
              year: resYear,
              dayOfYear: resDayOfYear
            };
          }

          function weekOfYear(mom, dow, doy) {
            var weekOffset = firstWeekOffset(mom.year(), dow, doy),
                week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
                resWeek,
                resYear;

            if (week < 1) {
              resYear = mom.year() - 1;
              resWeek = week + weeksInYear(resYear, dow, doy);
            } else if (week > weeksInYear(mom.year(), dow, doy)) {
              resWeek = week - weeksInYear(mom.year(), dow, doy);
              resYear = mom.year() + 1;
            } else {
              resYear = mom.year();
              resWeek = week;
            }

            return {
              week: resWeek,
              year: resYear
            };
          }

          function weeksInYear(year, dow, doy) {
            var weekOffset = firstWeekOffset(year, dow, doy),
                weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
            return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
          } // FORMATTING


          addFormatToken('w', ['ww', 2], 'wo', 'week');
          addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek'); // ALIASES

          addUnitAlias('week', 'w');
          addUnitAlias('isoWeek', 'W'); // PRIORITIES

          addUnitPriority('week', 5);
          addUnitPriority('isoWeek', 5); // PARSING

          addRegexToken('w', match1to2);
          addRegexToken('ww', match1to2, match2);
          addRegexToken('W', match1to2);
          addRegexToken('WW', match1to2, match2);
          addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
            week[token.substr(0, 1)] = toInt(input);
          }); // HELPERS
          // LOCALES

          function localeWeek(mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
          }

          var defaultLocaleWeek = {
            dow: 0,
            // Sunday is the first day of the week.
            doy: 6 // The week that contains Jan 6th is the first week of the year.

          };

          function localeFirstDayOfWeek() {
            return this._week.dow;
          }

          function localeFirstDayOfYear() {
            return this._week.doy;
          } // MOMENTS


          function getSetWeek(input) {
            var week = this.localeData().week(this);
            return input == null ? week : this.add((input - week) * 7, 'd');
          }

          function getSetISOWeek(input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add((input - week) * 7, 'd');
          } // FORMATTING


          addFormatToken('d', 0, 'do', 'day');
          addFormatToken('dd', 0, 0, function (format) {
            return this.localeData().weekdaysMin(this, format);
          });
          addFormatToken('ddd', 0, 0, function (format) {
            return this.localeData().weekdaysShort(this, format);
          });
          addFormatToken('dddd', 0, 0, function (format) {
            return this.localeData().weekdays(this, format);
          });
          addFormatToken('e', 0, 0, 'weekday');
          addFormatToken('E', 0, 0, 'isoWeekday'); // ALIASES

          addUnitAlias('day', 'd');
          addUnitAlias('weekday', 'e');
          addUnitAlias('isoWeekday', 'E'); // PRIORITY

          addUnitPriority('day', 11);
          addUnitPriority('weekday', 11);
          addUnitPriority('isoWeekday', 11); // PARSING

          addRegexToken('d', match1to2);
          addRegexToken('e', match1to2);
          addRegexToken('E', match1to2);
          addRegexToken('dd', function (isStrict, locale) {
            return locale.weekdaysMinRegex(isStrict);
          });
          addRegexToken('ddd', function (isStrict, locale) {
            return locale.weekdaysShortRegex(isStrict);
          });
          addRegexToken('dddd', function (isStrict, locale) {
            return locale.weekdaysRegex(isStrict);
          });
          addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
            var weekday = config._locale.weekdaysParse(input, token, config._strict); // if we didn't get a weekday name, mark the date as invalid


            if (weekday != null) {
              week.d = weekday;
            } else {
              getParsingFlags(config).invalidWeekday = input;
            }
          });
          addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
            week[token] = toInt(input);
          }); // HELPERS

          function parseWeekday(input, locale) {
            if (typeof input !== 'string') {
              return input;
            }

            if (!isNaN(input)) {
              return parseInt(input, 10);
            }

            input = locale.weekdaysParse(input);

            if (typeof input === 'number') {
              return input;
            }

            return null;
          }

          function parseIsoWeekday(input, locale) {
            if (typeof input === 'string') {
              return locale.weekdaysParse(input) % 7 || 7;
            }

            return isNaN(input) ? null : input;
          } // LOCALES


          var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');

          function localeWeekdays(m, format) {
            if (!m) {
              return isArray(this._weekdays) ? this._weekdays : this._weekdays['standalone'];
            }

            return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
          }

          var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');

          function localeWeekdaysShort(m) {
            return m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
          }

          var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');

          function localeWeekdaysMin(m) {
            return m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
          }

          function handleStrictParse$1(weekdayName, format, strict) {
            var i,
                ii,
                mom,
                llc = weekdayName.toLocaleLowerCase();

            if (!this._weekdaysParse) {
              this._weekdaysParse = [];
              this._shortWeekdaysParse = [];
              this._minWeekdaysParse = [];

              for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
              }
            }

            if (strict) {
              if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
              } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
              } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
              }
            } else {
              if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);

                if (ii !== -1) {
                  return ii;
                }

                ii = indexOf.call(this._shortWeekdaysParse, llc);

                if (ii !== -1) {
                  return ii;
                }

                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
              } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);

                if (ii !== -1) {
                  return ii;
                }

                ii = indexOf.call(this._weekdaysParse, llc);

                if (ii !== -1) {
                  return ii;
                }

                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
              } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);

                if (ii !== -1) {
                  return ii;
                }

                ii = indexOf.call(this._weekdaysParse, llc);

                if (ii !== -1) {
                  return ii;
                }

                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
              }
            }
          }

          function localeWeekdaysParse(weekdayName, format, strict) {
            var i, mom, regex;

            if (this._weekdaysParseExact) {
              return handleStrictParse$1.call(this, weekdayName, format, strict);
            }

            if (!this._weekdaysParse) {
              this._weekdaysParse = [];
              this._minWeekdaysParse = [];
              this._shortWeekdaysParse = [];
              this._fullWeekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, 1]).day(i);

              if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
              }

              if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
              } // test the regex


              if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
              } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
              } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
              } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
              }
            }
          } // MOMENTS


          function getSetDayOfWeek(input) {
            if (!this.isValid()) {
              return input != null ? this : NaN;
            }

            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();

            if (input != null) {
              input = parseWeekday(input, this.localeData());
              return this.add(input - day, 'd');
            } else {
              return day;
            }
          }

          function getSetLocaleDayOfWeek(input) {
            if (!this.isValid()) {
              return input != null ? this : NaN;
            }

            var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return input == null ? weekday : this.add(input - weekday, 'd');
          }

          function getSetISODayOfWeek(input) {
            if (!this.isValid()) {
              return input != null ? this : NaN;
            } // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.


            if (input != null) {
              var weekday = parseIsoWeekday(input, this.localeData());
              return this.day(this.day() % 7 ? weekday : weekday - 7);
            } else {
              return this.day() || 7;
            }
          }

          var defaultWeekdaysRegex = matchWord;

          function weekdaysRegex(isStrict) {
            if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
              }

              if (isStrict) {
                return this._weekdaysStrictRegex;
              } else {
                return this._weekdaysRegex;
              }
            } else {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
              }

              return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
            }
          }

          var defaultWeekdaysShortRegex = matchWord;

          function weekdaysShortRegex(isStrict) {
            if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
              }

              if (isStrict) {
                return this._weekdaysShortStrictRegex;
              } else {
                return this._weekdaysShortRegex;
              }
            } else {
              if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
              }

              return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
            }
          }

          var defaultWeekdaysMinRegex = matchWord;

          function weekdaysMinRegex(isStrict) {
            if (this._weekdaysParseExact) {
              if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
              }

              if (isStrict) {
                return this._weekdaysMinStrictRegex;
              } else {
                return this._weekdaysMinRegex;
              }
            } else {
              if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
              }

              return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
            }
          }

          function computeWeekdaysParse() {
            function cmpLenRev(a, b) {
              return b.length - a.length;
            }

            var minPieces = [],
                shortPieces = [],
                longPieces = [],
                mixedPieces = [],
                i,
                mom,
                minp,
                shortp,
                longp;

            for (i = 0; i < 7; i++) {
              // make the regex if we don't have it already
              mom = createUTC([2000, 1]).day(i);
              minp = this.weekdaysMin(mom, '');
              shortp = this.weekdaysShort(mom, '');
              longp = this.weekdays(mom, '');
              minPieces.push(minp);
              shortPieces.push(shortp);
              longPieces.push(longp);
              mixedPieces.push(minp);
              mixedPieces.push(shortp);
              mixedPieces.push(longp);
            } // Sorting makes sure if one weekday (or abbr) is a prefix of another it
            // will match the longer piece.


            minPieces.sort(cmpLenRev);
            shortPieces.sort(cmpLenRev);
            longPieces.sort(cmpLenRev);
            mixedPieces.sort(cmpLenRev);

            for (i = 0; i < 7; i++) {
              shortPieces[i] = regexEscape(shortPieces[i]);
              longPieces[i] = regexEscape(longPieces[i]);
              mixedPieces[i] = regexEscape(mixedPieces[i]);
            }

            this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
            this._weekdaysShortRegex = this._weekdaysRegex;
            this._weekdaysMinRegex = this._weekdaysRegex;
            this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
            this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
            this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
          } // FORMATTING


          function hFormat() {
            return this.hours() % 12 || 12;
          }

          function kFormat() {
            return this.hours() || 24;
          }

          addFormatToken('H', ['HH', 2], 0, 'hour');
          addFormatToken('h', ['hh', 2], 0, hFormat);
          addFormatToken('k', ['kk', 2], 0, kFormat);
          addFormatToken('hmm', 0, 0, function () {
            return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
          });
          addFormatToken('hmmss', 0, 0, function () {
            return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
          });
          addFormatToken('Hmm', 0, 0, function () {
            return '' + this.hours() + zeroFill(this.minutes(), 2);
          });
          addFormatToken('Hmmss', 0, 0, function () {
            return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
          });

          function meridiem(token, lowercase) {
            addFormatToken(token, 0, 0, function () {
              return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
            });
          }

          meridiem('a', true);
          meridiem('A', false); // ALIASES

          addUnitAlias('hour', 'h'); // PRIORITY

          addUnitPriority('hour', 13); // PARSING

          function matchMeridiem(isStrict, locale) {
            return locale._meridiemParse;
          }

          addRegexToken('a', matchMeridiem);
          addRegexToken('A', matchMeridiem);
          addRegexToken('H', match1to2);
          addRegexToken('h', match1to2);
          addRegexToken('k', match1to2);
          addRegexToken('HH', match1to2, match2);
          addRegexToken('hh', match1to2, match2);
          addRegexToken('kk', match1to2, match2);
          addRegexToken('hmm', match3to4);
          addRegexToken('hmmss', match5to6);
          addRegexToken('Hmm', match3to4);
          addRegexToken('Hmmss', match5to6);
          addParseToken(['H', 'HH'], HOUR);
          addParseToken(['k', 'kk'], function (input, array, config) {
            var kInput = toInt(input);
            array[HOUR] = kInput === 24 ? 0 : kInput;
          });
          addParseToken(['a', 'A'], function (input, array, config) {
            config._isPm = config._locale.isPM(input);
            config._meridiem = input;
          });
          addParseToken(['h', 'hh'], function (input, array, config) {
            array[HOUR] = toInt(input);
            getParsingFlags(config).bigHour = true;
          });
          addParseToken('hmm', function (input, array, config) {
            var pos = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos));
            array[MINUTE] = toInt(input.substr(pos));
            getParsingFlags(config).bigHour = true;
          });
          addParseToken('hmmss', function (input, array, config) {
            var pos1 = input.length - 4;
            var pos2 = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos1));
            array[MINUTE] = toInt(input.substr(pos1, 2));
            array[SECOND] = toInt(input.substr(pos2));
            getParsingFlags(config).bigHour = true;
          });
          addParseToken('Hmm', function (input, array, config) {
            var pos = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos));
            array[MINUTE] = toInt(input.substr(pos));
          });
          addParseToken('Hmmss', function (input, array, config) {
            var pos1 = input.length - 4;
            var pos2 = input.length - 2;
            array[HOUR] = toInt(input.substr(0, pos1));
            array[MINUTE] = toInt(input.substr(pos1, 2));
            array[SECOND] = toInt(input.substr(pos2));
          }); // LOCALES

          function localeIsPM(input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return (input + '').toLowerCase().charAt(0) === 'p';
          }

          var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;

          function localeMeridiem(hours, minutes, isLower) {
            if (hours > 11) {
              return isLower ? 'pm' : 'PM';
            } else {
              return isLower ? 'am' : 'AM';
            }
          } // MOMENTS
          // Setting the hour should keep the time, because the user explicitly
          // specified which hour they want. So trying to maintain the same hour (in
          // a new timezone) makes sense. Adding/subtracting hours does not follow
          // this rule.


          var getSetHour = makeGetSet('Hours', true);
          var baseConfig = {
            calendar: defaultCalendar,
            longDateFormat: defaultLongDateFormat,
            invalidDate: defaultInvalidDate,
            ordinal: defaultOrdinal,
            dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
            relativeTime: defaultRelativeTime,
            months: defaultLocaleMonths,
            monthsShort: defaultLocaleMonthsShort,
            week: defaultLocaleWeek,
            weekdays: defaultLocaleWeekdays,
            weekdaysMin: defaultLocaleWeekdaysMin,
            weekdaysShort: defaultLocaleWeekdaysShort,
            meridiemParse: defaultLocaleMeridiemParse
          }; // internal storage for locale config files

          var locales = {};
          var localeFamilies = {};
          var globalLocale;

          function normalizeLocale(key) {
            return key ? key.toLowerCase().replace('_', '-') : key;
          } // pick the locale from the array
          // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
          // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root


          function chooseLocale(names) {
            var i = 0,
                j,
                next,
                locale,
                split;

            while (i < names.length) {
              split = normalizeLocale(names[i]).split('-');
              j = split.length;
              next = normalizeLocale(names[i + 1]);
              next = next ? next.split('-') : null;

              while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));

                if (locale) {
                  return locale;
                }

                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                  //the next array item is better than a shallower substring of this one
                  break;
                }

                j--;
              }

              i++;
            }

            return globalLocale;
          }

          function loadLocale(name) {
            var oldLocale = null; // TODO: Find a better way to register and load all the locales in Node

            if (!locales[name] && typeof module !== 'undefined' && module && module.exports) {
              try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;

                __webpack_require__("RnhZ")("./" + name);

                getSetGlobalLocale(oldLocale);
              } catch (e) {}
            }

            return locales[name];
          } // This function will load locale and then set the global locale.  If
          // no arguments are passed in, it will simply return the current global
          // locale key.


          function getSetGlobalLocale(key, values) {
            var data;

            if (key) {
              if (isUndefined(values)) {
                data = getLocale(key);
              } else {
                data = defineLocale(key, values);
              }

              if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
              } else {
                if (typeof console !== 'undefined' && console.warn) {
                  //warn user if arguments are passed but the locale could not be set
                  console.warn('Locale ' + key + ' not found. Did you forget to load it?');
                }
              }
            }

            return globalLocale._abbr;
          }

          function defineLocale(name, config) {
            if (config !== null) {
              var locale,
                  parentConfig = baseConfig;
              config.abbr = name;

              if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale ' + 'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
              } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                  parentConfig = locales[config.parentLocale]._config;
                } else {
                  locale = loadLocale(config.parentLocale);

                  if (locale != null) {
                    parentConfig = locale._config;
                  } else {
                    if (!localeFamilies[config.parentLocale]) {
                      localeFamilies[config.parentLocale] = [];
                    }

                    localeFamilies[config.parentLocale].push({
                      name: name,
                      config: config
                    });
                    return null;
                  }
                }
              }

              locales[name] = new Locale(mergeConfigs(parentConfig, config));

              if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                  defineLocale(x.name, x.config);
                });
              } // backwards compat for now: also set the locale
              // make sure we set the locale AFTER all child locales have been
              // created, so we won't end up with the child locale set.


              getSetGlobalLocale(name);
              return locales[name];
            } else {
              // useful for testing
              delete locales[name];
              return null;
            }
          }

          function updateLocale(name, config) {
            if (config != null) {
              var locale,
                  tmpLocale,
                  parentConfig = baseConfig; // MERGE

              tmpLocale = loadLocale(name);

              if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
              }

              config = mergeConfigs(parentConfig, config);
              locale = new Locale(config);
              locale.parentLocale = locales[name];
              locales[name] = locale; // backwards compat for now: also set the locale

              getSetGlobalLocale(name);
            } else {
              // pass null for config to unupdate, useful for tests
              if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                  locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                  delete locales[name];
                }
              }
            }

            return locales[name];
          } // returns locale data


          function getLocale(key) {
            var locale;

            if (key && key._locale && key._locale._abbr) {
              key = key._locale._abbr;
            }

            if (!key) {
              return globalLocale;
            }

            if (!isArray(key)) {
              //short-circuit everything else
              locale = loadLocale(key);

              if (locale) {
                return locale;
              }

              key = [key];
            }

            return chooseLocale(key);
          }

          function listLocales() {
            return keys(locales);
          }

          function checkOverflow(m) {
            var overflow;
            var a = m._a;

            if (a && getParsingFlags(m).overflow === -2) {
              overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;

              if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
              }

              if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
              }

              if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
              }

              getParsingFlags(m).overflow = overflow;
            }

            return m;
          } // Pick the first defined of two or three arguments.


          function defaults(a, b, c) {
            if (a != null) {
              return a;
            }

            if (b != null) {
              return b;
            }

            return c;
          }

          function currentDateArray(config) {
            // hooks is actually the exported moment object
            var nowValue = new Date(hooks.now());

            if (config._useUTC) {
              return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
            }

            return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
          } // convert an array to a date.
          // the array should mirror the parameters below
          // note: all values past the year are optional and will default to the lowest possible value.
          // [year, month, day , hour, minute, second, millisecond]


          function configFromArray(config) {
            var i,
                date,
                input = [],
                currentDate,
                expectedWeekday,
                yearToUse;

            if (config._d) {
              return;
            }

            currentDate = currentDateArray(config); //compute day of the year from weeks and weekdays

            if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
              dayOfYearFromWeekInfo(config);
            } //if the day of the year is set, figure out what it is


            if (config._dayOfYear != null) {
              yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

              if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
              }

              date = createUTCDate(yearToUse, 0, config._dayOfYear);
              config._a[MONTH] = date.getUTCMonth();
              config._a[DATE] = date.getUTCDate();
            } // Default to current date.
            // * if no year, month, day of month are given, default to today
            // * if day of month is given, default month and year
            // * if month is given, default only year
            // * if year is given, don't default anything


            for (i = 0; i < 3 && config._a[i] == null; ++i) {
              config._a[i] = input[i] = currentDate[i];
            } // Zero out whatever was not defaulted, including time


            for (; i < 7; i++) {
              config._a[i] = input[i] = config._a[i] == null ? i === 2 ? 1 : 0 : config._a[i];
            } // Check for 24:00:00.000


            if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
              config._nextDay = true;
              config._a[HOUR] = 0;
            }

            config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
            expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay(); // Apply timezone offset from input. The actual utcOffset can be changed
            // with parseZone.

            if (config._tzm != null) {
              config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
            }

            if (config._nextDay) {
              config._a[HOUR] = 24;
            } // check for mismatching day of week


            if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
              getParsingFlags(config).weekdayMismatch = true;
            }
          }

          function dayOfYearFromWeekInfo(config) {
            var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
            w = config._w;

            if (w.GG != null || w.W != null || w.E != null) {
              dow = 1;
              doy = 4; // TODO: We need to take the current isoWeekYear, but that depends on
              // how we interpret now (local, utc, fixed offset). So create
              // a now version of current config (take local/utc/offset flags, and
              // create now).

              weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
              week = defaults(w.W, 1);
              weekday = defaults(w.E, 1);

              if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
              }
            } else {
              dow = config._locale._week.dow;
              doy = config._locale._week.doy;
              var curWeek = weekOfYear(createLocal(), dow, doy);
              weekYear = defaults(w.gg, config._a[YEAR], curWeek.year); // Default to current week.

              week = defaults(w.w, curWeek.week);

              if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;

                if (weekday < 0 || weekday > 6) {
                  weekdayOverflow = true;
                }
              } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;

                if (w.e < 0 || w.e > 6) {
                  weekdayOverflow = true;
                }
              } else {
                // default to beginning of week
                weekday = dow;
              }
            }

            if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
              getParsingFlags(config)._overflowWeeks = true;
            } else if (weekdayOverflow != null) {
              getParsingFlags(config)._overflowWeekday = true;
            } else {
              temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
              config._a[YEAR] = temp.year;
              config._dayOfYear = temp.dayOfYear;
            }
          } // iso 8601 regex
          // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)


          var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
          var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
          var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
          var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], // YYYYMM is NOT allowed by the standard
          ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]]; // iso time formats and regexes

          var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
          var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i; // date from iso format

          function configFromISO(config) {
            var i,
                l,
                string = config._i,
                match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
                allowTime,
                dateFormat,
                timeFormat,
                tzFormat;

            if (match) {
              getParsingFlags(config).iso = true;

              for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                  dateFormat = isoDates[i][0];
                  allowTime = isoDates[i][2] !== false;
                  break;
                }
              }

              if (dateFormat == null) {
                config._isValid = false;
                return;
              }

              if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                  if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                  }
                }

                if (timeFormat == null) {
                  config._isValid = false;
                  return;
                }
              }

              if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
              }

              if (match[4]) {
                if (tzRegex.exec(match[4])) {
                  tzFormat = 'Z';
                } else {
                  config._isValid = false;
                  return;
                }
              }

              config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
              configFromStringAndFormat(config);
            } else {
              config._isValid = false;
            }
          } // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3


          var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

          function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
            var result = [untruncateYear(yearStr), defaultLocaleMonthsShort.indexOf(monthStr), parseInt(dayStr, 10), parseInt(hourStr, 10), parseInt(minuteStr, 10)];

            if (secondStr) {
              result.push(parseInt(secondStr, 10));
            }

            return result;
          }

          function untruncateYear(yearStr) {
            var year = parseInt(yearStr, 10);

            if (year <= 49) {
              return 2000 + year;
            } else if (year <= 999) {
              return 1900 + year;
            }

            return year;
          }

          function preprocessRFC2822(s) {
            // Remove comments and folding whitespace and replace multiple-spaces with a single space
            return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
          }

          function checkWeekday(weekdayStr, parsedInput, config) {
            if (weekdayStr) {
              // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
              var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                  weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();

              if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
              }
            }

            return true;
          }

          var obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60
          };

          function calculateOffset(obsOffset, militaryOffset, numOffset) {
            if (obsOffset) {
              return obsOffsets[obsOffset];
            } else if (militaryOffset) {
              // the only allowed military tz is Z
              return 0;
            } else {
              var hm = parseInt(numOffset, 10);
              var m = hm % 100,
                  h = (hm - m) / 100;
              return h * 60 + m;
            }
          } // date and time from ref 2822 format


          function configFromRFC2822(config) {
            var match = rfc2822.exec(preprocessRFC2822(config._i));

            if (match) {
              var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);

              if (!checkWeekday(match[1], parsedArray, config)) {
                return;
              }

              config._a = parsedArray;
              config._tzm = calculateOffset(match[8], match[9], match[10]);
              config._d = createUTCDate.apply(null, config._a);

              config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

              getParsingFlags(config).rfc2822 = true;
            } else {
              config._isValid = false;
            }
          } // date from iso format or fallback


          function configFromString(config) {
            var matched = aspNetJsonRegex.exec(config._i);

            if (matched !== null) {
              config._d = new Date(+matched[1]);
              return;
            }

            configFromISO(config);

            if (config._isValid === false) {
              delete config._isValid;
            } else {
              return;
            }

            configFromRFC2822(config);

            if (config._isValid === false) {
              delete config._isValid;
            } else {
              return;
            } // Final attempt, use Input Fallback


            hooks.createFromInputFallback(config);
          }

          hooks.createFromInputFallback = deprecate('value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' + 'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' + 'discouraged and will be removed in an upcoming major release. Please refer to ' + 'http://momentjs.com/guides/#/warnings/js-date/ for more info.', function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
          }); // constant that refers to the ISO standard

          hooks.ISO_8601 = function () {}; // constant that refers to the RFC 2822 form


          hooks.RFC_2822 = function () {}; // date from string and format string


          function configFromStringAndFormat(config) {
            // TODO: Move this to another part of the creation flow to prevent circular deps
            if (config._f === hooks.ISO_8601) {
              configFromISO(config);
              return;
            }

            if (config._f === hooks.RFC_2822) {
              configFromRFC2822(config);
              return;
            }

            config._a = [];
            getParsingFlags(config).empty = true; // This array is used to make a Date, either with `new Date` or `Date.UTC`

            var string = '' + config._i,
                i,
                parsedInput,
                tokens,
                token,
                skipped,
                stringLength = string.length,
                totalParsedInputLength = 0;
            tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

            for (i = 0; i < tokens.length; i++) {
              token = tokens[i];
              parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0]; // console.log('token', token, 'parsedInput', parsedInput,
              //         'regex', getParseRegexForToken(token, config));

              if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));

                if (skipped.length > 0) {
                  getParsingFlags(config).unusedInput.push(skipped);
                }

                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
              } // don't parse if it's not a known token


              if (formatTokenFunctions[token]) {
                if (parsedInput) {
                  getParsingFlags(config).empty = false;
                } else {
                  getParsingFlags(config).unusedTokens.push(token);
                }

                addTimeToArrayFromToken(token, parsedInput, config);
              } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
              }
            } // add remaining unparsed input length to the string


            getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;

            if (string.length > 0) {
              getParsingFlags(config).unusedInput.push(string);
            } // clear _12h flag if hour is <= 12


            if (config._a[HOUR] <= 12 && getParsingFlags(config).bigHour === true && config._a[HOUR] > 0) {
              getParsingFlags(config).bigHour = undefined;
            }

            getParsingFlags(config).parsedDateParts = config._a.slice(0);
            getParsingFlags(config).meridiem = config._meridiem; // handle meridiem

            config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
            configFromArray(config);
            checkOverflow(config);
          }

          function meridiemFixWrap(locale, hour, meridiem) {
            var isPm;

            if (meridiem == null) {
              // nothing to do
              return hour;
            }

            if (locale.meridiemHour != null) {
              return locale.meridiemHour(hour, meridiem);
            } else if (locale.isPM != null) {
              // Fallback
              isPm = locale.isPM(meridiem);

              if (isPm && hour < 12) {
                hour += 12;
              }

              if (!isPm && hour === 12) {
                hour = 0;
              }

              return hour;
            } else {
              // this is not supposed to happen
              return hour;
            }
          } // date from string and array of format strings


          function configFromStringAndArray(config) {
            var tempConfig, bestMoment, scoreToBeat, i, currentScore;

            if (config._f.length === 0) {
              getParsingFlags(config).invalidFormat = true;
              config._d = new Date(NaN);
              return;
            }

            for (i = 0; i < config._f.length; i++) {
              currentScore = 0;
              tempConfig = copyConfig({}, config);

              if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
              }

              tempConfig._f = config._f[i];
              configFromStringAndFormat(tempConfig);

              if (!isValid(tempConfig)) {
                continue;
              } // if there is any input that was not parsed add a penalty for that format


              currentScore += getParsingFlags(tempConfig).charsLeftOver; //or tokens

              currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
              getParsingFlags(tempConfig).score = currentScore;

              if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
              }
            }

            extend(config, bestMoment || tempConfig);
          }

          function configFromObject(config) {
            if (config._d) {
              return;
            }

            var i = normalizeObjectUnits(config._i);
            config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
              return obj && parseInt(obj, 10);
            });
            configFromArray(config);
          }

          function createFromConfig(config) {
            var res = new Moment(checkOverflow(prepareConfig(config)));

            if (res._nextDay) {
              // Adding is smart enough around DST
              res.add(1, 'd');
              res._nextDay = undefined;
            }

            return res;
          }

          function prepareConfig(config) {
            var input = config._i,
                format = config._f;
            config._locale = config._locale || getLocale(config._l);

            if (input === null || format === undefined && input === '') {
              return createInvalid({
                nullInput: true
              });
            }

            if (typeof input === 'string') {
              config._i = input = config._locale.preparse(input);
            }

            if (isMoment(input)) {
              return new Moment(checkOverflow(input));
            } else if (isDate(input)) {
              config._d = input;
            } else if (isArray(format)) {
              configFromStringAndArray(config);
            } else if (format) {
              configFromStringAndFormat(config);
            } else {
              configFromInput(config);
            }

            if (!isValid(config)) {
              config._d = null;
            }

            return config;
          }

          function configFromInput(config) {
            var input = config._i;

            if (isUndefined(input)) {
              config._d = new Date(hooks.now());
            } else if (isDate(input)) {
              config._d = new Date(input.valueOf());
            } else if (typeof input === 'string') {
              configFromString(config);
            } else if (isArray(input)) {
              config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
              });
              configFromArray(config);
            } else if (isObject(input)) {
              configFromObject(config);
            } else if (isNumber(input)) {
              // from milliseconds
              config._d = new Date(input);
            } else {
              hooks.createFromInputFallback(config);
            }
          }

          function createLocalOrUTC(input, format, locale, strict, isUTC) {
            var c = {};

            if (locale === true || locale === false) {
              strict = locale;
              locale = undefined;
            }

            if (isObject(input) && isObjectEmpty(input) || isArray(input) && input.length === 0) {
              input = undefined;
            } // object construction must be done this way.
            // https://github.com/moment/moment/issues/1423


            c._isAMomentObject = true;
            c._useUTC = c._isUTC = isUTC;
            c._l = locale;
            c._i = input;
            c._f = format;
            c._strict = strict;
            return createFromConfig(c);
          }

          function createLocal(input, format, locale, strict) {
            return createLocalOrUTC(input, format, locale, strict, false);
          }

          var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
            var other = createLocal.apply(null, arguments);

            if (this.isValid() && other.isValid()) {
              return other < this ? this : other;
            } else {
              return createInvalid();
            }
          });
          var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/', function () {
            var other = createLocal.apply(null, arguments);

            if (this.isValid() && other.isValid()) {
              return other > this ? this : other;
            } else {
              return createInvalid();
            }
          }); // Pick a moment m from moments so that m[fn](other) is true for all
          // other. This relies on the function fn to be transitive.
          //
          // moments should either be an array of moment objects or an array, whose
          // first element is an array of moment objects.

          function pickBy(fn, moments) {
            var res, i;

            if (moments.length === 1 && isArray(moments[0])) {
              moments = moments[0];
            }

            if (!moments.length) {
              return createLocal();
            }

            res = moments[0];

            for (i = 1; i < moments.length; ++i) {
              if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
              }
            }

            return res;
          } // TODO: Use [].sort instead?


          function min() {
            var args = [].slice.call(arguments, 0);
            return pickBy('isBefore', args);
          }

          function max() {
            var args = [].slice.call(arguments, 0);
            return pickBy('isAfter', args);
          }

          var now = function now() {
            return Date.now ? Date.now() : +new Date();
          };

          var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

          function isDurationValid(m) {
            for (var key in m) {
              if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
              }
            }

            var unitHasDecimal = false;

            for (var i = 0; i < ordering.length; ++i) {
              if (m[ordering[i]]) {
                if (unitHasDecimal) {
                  return false; // only allow non-integers for smallest unit
                }

                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                  unitHasDecimal = true;
                }
              }
            }

            return true;
          }

          function isValid$1() {
            return this._isValid;
          }

          function createInvalid$1() {
            return createDuration(NaN);
          }

          function Duration(duration) {
            var normalizedInput = normalizeObjectUnits(duration),
                years = normalizedInput.year || 0,
                quarters = normalizedInput.quarter || 0,
                months = normalizedInput.month || 0,
                weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
                days = normalizedInput.day || 0,
                hours = normalizedInput.hour || 0,
                minutes = normalizedInput.minute || 0,
                seconds = normalizedInput.second || 0,
                milliseconds = normalizedInput.millisecond || 0;
            this._isValid = isDurationValid(normalizedInput); // representation for dateAddRemove

            this._milliseconds = +milliseconds + seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
            // Because of dateAddRemove treats 24 hours as different from a
            // day when working around DST, we need to store them separately

            this._days = +days + weeks * 7; // It is impossible to translate months into days without knowing
            // which months you are are talking about, so we have to store
            // it separately.

            this._months = +months + quarters * 3 + years * 12;
            this._data = {};
            this._locale = getLocale();

            this._bubble();
          }

          function isDuration(obj) {
            return obj instanceof Duration;
          }

          function absRound(number) {
            if (number < 0) {
              return Math.round(-1 * number) * -1;
            } else {
              return Math.round(number);
            }
          } // FORMATTING


          function offset(token, separator) {
            addFormatToken(token, 0, 0, function () {
              var offset = this.utcOffset();
              var sign = '+';

              if (offset < 0) {
                offset = -offset;
                sign = '-';
              }

              return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2);
            });
          }

          offset('Z', ':');
          offset('ZZ', ''); // PARSING

          addRegexToken('Z', matchShortOffset);
          addRegexToken('ZZ', matchShortOffset);
          addParseToken(['Z', 'ZZ'], function (input, array, config) {
            config._useUTC = true;
            config._tzm = offsetFromString(matchShortOffset, input);
          }); // HELPERS
          // timezone chunker
          // '+10:00' > ['10',  '00']
          // '-1530'  > ['-15', '30']

          var chunkOffset = /([\+\-]|\d\d)/gi;

          function offsetFromString(matcher, string) {
            var matches = (string || '').match(matcher);

            if (matches === null) {
              return null;
            }

            var chunk = matches[matches.length - 1] || [];
            var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
            var minutes = +(parts[1] * 60) + toInt(parts[2]);
            return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
          } // Return a moment from input, that is local/utc/zone equivalent to model.


          function cloneWithOffset(input, model) {
            var res, diff;

            if (model._isUTC) {
              res = model.clone();
              diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf(); // Use low-level api, because this fn is low-level api.

              res._d.setTime(res._d.valueOf() + diff);

              hooks.updateOffset(res, false);
              return res;
            } else {
              return createLocal(input).local();
            }
          }

          function getDateOffset(m) {
            // On Firefox.24 Date#getTimezoneOffset returns a floating point.
            // https://github.com/moment/moment/pull/1871
            return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
          } // HOOKS
          // This function will be called whenever a moment is mutated.
          // It is intended to keep the offset in sync with the timezone.


          hooks.updateOffset = function () {}; // MOMENTS
          // keepLocalTime = true means only change the timezone, without
          // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
          // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
          // +0200, so we adjust the time as needed, to be valid.
          //
          // Keeping the time actually adds/subtracts (one hour)
          // from the actual represented time. That is why we call updateOffset
          // a second time. In case it wants us to change the offset again
          // _changeInProgress == true case, then we have to adjust, because
          // there is no such time in the given timezone.


          function getSetOffset(input, keepLocalTime, keepMinutes) {
            var offset = this._offset || 0,
                localAdjust;

            if (!this.isValid()) {
              return input != null ? this : NaN;
            }

            if (input != null) {
              if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);

                if (input === null) {
                  return this;
                }
              } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
              }

              if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
              }

              this._offset = input;
              this._isUTC = true;

              if (localAdjust != null) {
                this.add(localAdjust, 'm');
              }

              if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                  addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                  this._changeInProgress = true;
                  hooks.updateOffset(this, true);
                  this._changeInProgress = null;
                }
              }

              return this;
            } else {
              return this._isUTC ? offset : getDateOffset(this);
            }
          }

          function getSetZone(input, keepLocalTime) {
            if (input != null) {
              if (typeof input !== 'string') {
                input = -input;
              }

              this.utcOffset(input, keepLocalTime);
              return this;
            } else {
              return -this.utcOffset();
            }
          }

          function setOffsetToUTC(keepLocalTime) {
            return this.utcOffset(0, keepLocalTime);
          }

          function setOffsetToLocal(keepLocalTime) {
            if (this._isUTC) {
              this.utcOffset(0, keepLocalTime);
              this._isUTC = false;

              if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
              }
            }

            return this;
          }

          function setOffsetToParsedOffset() {
            if (this._tzm != null) {
              this.utcOffset(this._tzm, false, true);
            } else if (typeof this._i === 'string') {
              var tZone = offsetFromString(matchOffset, this._i);

              if (tZone != null) {
                this.utcOffset(tZone);
              } else {
                this.utcOffset(0, true);
              }
            }

            return this;
          }

          function hasAlignedHourOffset(input) {
            if (!this.isValid()) {
              return false;
            }

            input = input ? createLocal(input).utcOffset() : 0;
            return (this.utcOffset() - input) % 60 === 0;
          }

          function isDaylightSavingTime() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
          }

          function isDaylightSavingTimeShifted() {
            if (!isUndefined(this._isDSTShifted)) {
              return this._isDSTShifted;
            }

            var c = {};
            copyConfig(c, this);
            c = prepareConfig(c);

            if (c._a) {
              var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
              this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
            } else {
              this._isDSTShifted = false;
            }

            return this._isDSTShifted;
          }

          function isLocal() {
            return this.isValid() ? !this._isUTC : false;
          }

          function isUtcOffset() {
            return this.isValid() ? this._isUTC : false;
          }

          function isUtc() {
            return this.isValid() ? this._isUTC && this._offset === 0 : false;
          } // ASP.NET json date format regex


          var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/; // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
          // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
          // and further modified to allow for strings containing both week and day

          var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

          function createDuration(input, key) {
            var duration = input,
                // matching against regexp is expensive, do it on demand
            match = null,
                sign,
                ret,
                diffRes;

            if (isDuration(input)) {
              duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
              };
            } else if (isNumber(input)) {
              duration = {};

              if (key) {
                duration[key] = input;
              } else {
                duration.milliseconds = input;
              }
            } else if (!!(match = aspNetRegex.exec(input))) {
              sign = match[1] === '-' ? -1 : 1;
              duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match

              };
            } else if (!!(match = isoRegex.exec(input))) {
              sign = match[1] === '-' ? -1 : 1;
              duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign)
              };
            } else if (duration == null) {
              // checks for null or undefined
              duration = {};
            } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
              diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
              duration = {};
              duration.ms = diffRes.milliseconds;
              duration.M = diffRes.months;
            }

            ret = new Duration(duration);

            if (isDuration(input) && hasOwnProp(input, '_locale')) {
              ret._locale = input._locale;
            }

            return ret;
          }

          createDuration.fn = Duration.prototype;
          createDuration.invalid = createInvalid$1;

          function parseIso(inp, sign) {
            // We'd normally use ~~inp for this, but unfortunately it also
            // converts floats to ints.
            // inp may be undefined, so careful calling replace on it.
            var res = inp && parseFloat(inp.replace(',', '.')); // apply sign while we're at it

            return (isNaN(res) ? 0 : res) * sign;
          }

          function positiveMomentsDifference(base, other) {
            var res = {
              milliseconds: 0,
              months: 0
            };
            res.months = other.month() - base.month() + (other.year() - base.year()) * 12;

            if (base.clone().add(res.months, 'M').isAfter(other)) {
              --res.months;
            }

            res.milliseconds = +other - +base.clone().add(res.months, 'M');
            return res;
          }

          function momentsDifference(base, other) {
            var res;

            if (!(base.isValid() && other.isValid())) {
              return {
                milliseconds: 0,
                months: 0
              };
            }

            other = cloneWithOffset(other, base);

            if (base.isBefore(other)) {
              res = positiveMomentsDifference(base, other);
            } else {
              res = positiveMomentsDifference(other, base);
              res.milliseconds = -res.milliseconds;
              res.months = -res.months;
            }

            return res;
          } // TODO: remove 'name' arg after deprecation is removed


          function createAdder(direction, name) {
            return function (val, period) {
              var dur, tmp; //invert the arguments, but complain about it

              if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val;
                val = period;
                period = tmp;
              }

              val = typeof val === 'string' ? +val : val;
              dur = createDuration(val, period);
              addSubtract(this, dur, direction);
              return this;
            };
          }

          function addSubtract(mom, duration, isAdding, updateOffset) {
            var milliseconds = duration._milliseconds,
                days = absRound(duration._days),
                months = absRound(duration._months);

            if (!mom.isValid()) {
              // No op
              return;
            }

            updateOffset = updateOffset == null ? true : updateOffset;

            if (months) {
              setMonth(mom, get(mom, 'Month') + months * isAdding);
            }

            if (days) {
              set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
            }

            if (milliseconds) {
              mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
            }

            if (updateOffset) {
              hooks.updateOffset(mom, days || months);
            }
          }

          var add = createAdder(1, 'add');
          var subtract = createAdder(-1, 'subtract');

          function getCalendarFormat(myMoment, now) {
            var diff = myMoment.diff(now, 'days', true);
            return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
          }

          function calendar$1(time, formats) {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're local/utc/offset or not.
            var now = time || createLocal(),
                sod = cloneWithOffset(now, this).startOf('day'),
                format = hooks.calendarFormat(this, sod) || 'sameElse';
            var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
            return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
          }

          function clone() {
            return new Moment(this);
          }

          function isAfter(input, units) {
            var localInput = isMoment(input) ? input : createLocal(input);

            if (!(this.isValid() && localInput.isValid())) {
              return false;
            }

            units = normalizeUnits(units) || 'millisecond';

            if (units === 'millisecond') {
              return this.valueOf() > localInput.valueOf();
            } else {
              return localInput.valueOf() < this.clone().startOf(units).valueOf();
            }
          }

          function isBefore(input, units) {
            var localInput = isMoment(input) ? input : createLocal(input);

            if (!(this.isValid() && localInput.isValid())) {
              return false;
            }

            units = normalizeUnits(units) || 'millisecond';

            if (units === 'millisecond') {
              return this.valueOf() < localInput.valueOf();
            } else {
              return this.clone().endOf(units).valueOf() < localInput.valueOf();
            }
          }

          function isBetween(from, to, units, inclusivity) {
            var localFrom = isMoment(from) ? from : createLocal(from),
                localTo = isMoment(to) ? to : createLocal(to);

            if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
              return false;
            }

            inclusivity = inclusivity || '()';
            return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) && (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
          }

          function isSame(input, units) {
            var localInput = isMoment(input) ? input : createLocal(input),
                inputMs;

            if (!(this.isValid() && localInput.isValid())) {
              return false;
            }

            units = normalizeUnits(units) || 'millisecond';

            if (units === 'millisecond') {
              return this.valueOf() === localInput.valueOf();
            } else {
              inputMs = localInput.valueOf();
              return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
            }
          }

          function isSameOrAfter(input, units) {
            return this.isSame(input, units) || this.isAfter(input, units);
          }

          function isSameOrBefore(input, units) {
            return this.isSame(input, units) || this.isBefore(input, units);
          }

          function diff(input, units, asFloat) {
            var that, zoneDelta, output;

            if (!this.isValid()) {
              return NaN;
            }

            that = cloneWithOffset(input, this);

            if (!that.isValid()) {
              return NaN;
            }

            zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
            units = normalizeUnits(units);

            switch (units) {
              case 'year':
                output = monthDiff(this, that) / 12;
                break;

              case 'month':
                output = monthDiff(this, that);
                break;

              case 'quarter':
                output = monthDiff(this, that) / 3;
                break;

              case 'second':
                output = (this - that) / 1e3;
                break;
              // 1000

              case 'minute':
                output = (this - that) / 6e4;
                break;
              // 1000 * 60

              case 'hour':
                output = (this - that) / 36e5;
                break;
              // 1000 * 60 * 60

              case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break;
              // 1000 * 60 * 60 * 24, negate dst

              case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break;
              // 1000 * 60 * 60 * 24 * 7, negate dst

              default:
                output = this - that;
            }

            return asFloat ? output : absFloor(output);
          }

          function monthDiff(a, b) {
            // difference in months
            var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
                // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
                anchor2,
                adjust;

            if (b - anchor < 0) {
              anchor2 = a.clone().add(wholeMonthDiff - 1, 'months'); // linear across the month

              adjust = (b - anchor) / (anchor - anchor2);
            } else {
              anchor2 = a.clone().add(wholeMonthDiff + 1, 'months'); // linear across the month

              adjust = (b - anchor) / (anchor2 - anchor);
            } //check for negative zero, return zero if negative zero


            return -(wholeMonthDiff + adjust) || 0;
          }

          hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
          hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

          function toString() {
            return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
          }

          function toISOString(keepOffset) {
            if (!this.isValid()) {
              return null;
            }

            var utc = keepOffset !== true;
            var m = utc ? this.clone().utc() : this;

            if (m.year() < 0 || m.year() > 9999) {
              return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
            }

            if (isFunction(Date.prototype.toISOString)) {
              // native implementation is ~50x faster, use it when we can
              if (utc) {
                return this.toDate().toISOString();
              } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
              }
            }

            return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
          }
          /**
           * Return a human readable representation of a moment that can
           * also be evaluated to get a new moment which is the same
           *
           * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
           */


          function inspect() {
            if (!this.isValid()) {
              return 'moment.invalid(/* ' + this._i + ' */)';
            }

            var func = 'moment';
            var zone = '';

            if (!this.isLocal()) {
              func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
              zone = 'Z';
            }

            var prefix = '[' + func + '("]';
            var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
            var datetime = '-MM-DD[T]HH:mm:ss.SSS';
            var suffix = zone + '[")]';
            return this.format(prefix + year + datetime + suffix);
          }

          function format(inputString) {
            if (!inputString) {
              inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
            }

            var output = formatMoment(this, inputString);
            return this.localeData().postformat(output);
          }

          function from(time, withoutSuffix) {
            if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
              return createDuration({
                to: this,
                from: time
              }).locale(this.locale()).humanize(!withoutSuffix);
            } else {
              return this.localeData().invalidDate();
            }
          }

          function fromNow(withoutSuffix) {
            return this.from(createLocal(), withoutSuffix);
          }

          function to(time, withoutSuffix) {
            if (this.isValid() && (isMoment(time) && time.isValid() || createLocal(time).isValid())) {
              return createDuration({
                from: this,
                to: time
              }).locale(this.locale()).humanize(!withoutSuffix);
            } else {
              return this.localeData().invalidDate();
            }
          }

          function toNow(withoutSuffix) {
            return this.to(createLocal(), withoutSuffix);
          } // If passed a locale key, it will set the locale for this
          // instance.  Otherwise, it will return the locale configuration
          // variables for this instance.


          function locale(key) {
            var newLocaleData;

            if (key === undefined) {
              return this._locale._abbr;
            } else {
              newLocaleData = getLocale(key);

              if (newLocaleData != null) {
                this._locale = newLocaleData;
              }

              return this;
            }
          }

          var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
            if (key === undefined) {
              return this.localeData();
            } else {
              return this.locale(key);
            }
          });

          function localeData() {
            return this._locale;
          }

          function startOf(units) {
            units = normalizeUnits(units); // the following switch intentionally omits break keywords
            // to utilize falling through the cases.

            switch (units) {
              case 'year':
                this.month(0);

              /* falls through */

              case 'quarter':
              case 'month':
                this.date(1);

              /* falls through */

              case 'week':
              case 'isoWeek':
              case 'day':
              case 'date':
                this.hours(0);

              /* falls through */

              case 'hour':
                this.minutes(0);

              /* falls through */

              case 'minute':
                this.seconds(0);

              /* falls through */

              case 'second':
                this.milliseconds(0);
            } // weeks are a special case


            if (units === 'week') {
              this.weekday(0);
            }

            if (units === 'isoWeek') {
              this.isoWeekday(1);
            } // quarters are also special


            if (units === 'quarter') {
              this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
          }

          function endOf(units) {
            units = normalizeUnits(units);

            if (units === undefined || units === 'millisecond') {
              return this;
            } // 'date' is an alias for 'day', so it should be considered as such.


            if (units === 'date') {
              units = 'day';
            }

            return this.startOf(units).add(1, units === 'isoWeek' ? 'week' : units).subtract(1, 'ms');
          }

          function valueOf() {
            return this._d.valueOf() - (this._offset || 0) * 60000;
          }

          function unix() {
            return Math.floor(this.valueOf() / 1000);
          }

          function toDate() {
            return new Date(this.valueOf());
          }

          function toArray() {
            var m = this;
            return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
          }

          function toObject() {
            var m = this;
            return {
              years: m.year(),
              months: m.month(),
              date: m.date(),
              hours: m.hours(),
              minutes: m.minutes(),
              seconds: m.seconds(),
              milliseconds: m.milliseconds()
            };
          }

          function toJSON() {
            // new Date(NaN).toJSON() === null
            return this.isValid() ? this.toISOString() : null;
          }

          function isValid$2() {
            return isValid(this);
          }

          function parsingFlags() {
            return extend({}, getParsingFlags(this));
          }

          function invalidAt() {
            return getParsingFlags(this).overflow;
          }

          function creationData() {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict
            };
          } // FORMATTING


          addFormatToken(0, ['gg', 2], 0, function () {
            return this.weekYear() % 100;
          });
          addFormatToken(0, ['GG', 2], 0, function () {
            return this.isoWeekYear() % 100;
          });

          function addWeekYearFormatToken(token, getter) {
            addFormatToken(0, [token, token.length], 0, getter);
          }

          addWeekYearFormatToken('gggg', 'weekYear');
          addWeekYearFormatToken('ggggg', 'weekYear');
          addWeekYearFormatToken('GGGG', 'isoWeekYear');
          addWeekYearFormatToken('GGGGG', 'isoWeekYear'); // ALIASES

          addUnitAlias('weekYear', 'gg');
          addUnitAlias('isoWeekYear', 'GG'); // PRIORITY

          addUnitPriority('weekYear', 1);
          addUnitPriority('isoWeekYear', 1); // PARSING

          addRegexToken('G', matchSigned);
          addRegexToken('g', matchSigned);
          addRegexToken('GG', match1to2, match2);
          addRegexToken('gg', match1to2, match2);
          addRegexToken('GGGG', match1to4, match4);
          addRegexToken('gggg', match1to4, match4);
          addRegexToken('GGGGG', match1to6, match6);
          addRegexToken('ggggg', match1to6, match6);
          addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
            week[token.substr(0, 2)] = toInt(input);
          });
          addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
            week[token] = hooks.parseTwoDigitYear(input);
          }); // MOMENTS

          function getSetWeekYear(input) {
            return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
          }

          function getSetISOWeekYear(input) {
            return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
          }

          function getISOWeeksInYear() {
            return weeksInYear(this.year(), 1, 4);
          }

          function getWeeksInYear() {
            var weekInfo = this.localeData()._week;

            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
          }

          function getSetWeekYearHelper(input, week, weekday, dow, doy) {
            var weeksTarget;

            if (input == null) {
              return weekOfYear(this, dow, doy).year;
            } else {
              weeksTarget = weeksInYear(input, dow, doy);

              if (week > weeksTarget) {
                week = weeksTarget;
              }

              return setWeekAll.call(this, input, week, weekday, dow, doy);
            }
          }

          function setWeekAll(weekYear, week, weekday, dow, doy) {
            var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
                date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
            this.year(date.getUTCFullYear());
            this.month(date.getUTCMonth());
            this.date(date.getUTCDate());
            return this;
          } // FORMATTING


          addFormatToken('Q', 0, 'Qo', 'quarter'); // ALIASES

          addUnitAlias('quarter', 'Q'); // PRIORITY

          addUnitPriority('quarter', 7); // PARSING

          addRegexToken('Q', match1);
          addParseToken('Q', function (input, array) {
            array[MONTH] = (toInt(input) - 1) * 3;
          }); // MOMENTS

          function getSetQuarter(input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
          } // FORMATTING


          addFormatToken('D', ['DD', 2], 'Do', 'date'); // ALIASES

          addUnitAlias('date', 'D'); // PRIORITY

          addUnitPriority('date', 9); // PARSING

          addRegexToken('D', match1to2);
          addRegexToken('DD', match1to2, match2);
          addRegexToken('Do', function (isStrict, locale) {
            // TODO: Remove "ordinalParse" fallback in next major release.
            return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
          });
          addParseToken(['D', 'DD'], DATE);
          addParseToken('Do', function (input, array) {
            array[DATE] = toInt(input.match(match1to2)[0]);
          }); // MOMENTS

          var getSetDayOfMonth = makeGetSet('Date', true); // FORMATTING

          addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'); // ALIASES

          addUnitAlias('dayOfYear', 'DDD'); // PRIORITY

          addUnitPriority('dayOfYear', 4); // PARSING

          addRegexToken('DDD', match1to3);
          addRegexToken('DDDD', match3);
          addParseToken(['DDD', 'DDDD'], function (input, array, config) {
            config._dayOfYear = toInt(input);
          }); // HELPERS
          // MOMENTS

          function getSetDayOfYear(input) {
            var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
          } // FORMATTING


          addFormatToken('m', ['mm', 2], 0, 'minute'); // ALIASES

          addUnitAlias('minute', 'm'); // PRIORITY

          addUnitPriority('minute', 14); // PARSING

          addRegexToken('m', match1to2);
          addRegexToken('mm', match1to2, match2);
          addParseToken(['m', 'mm'], MINUTE); // MOMENTS

          var getSetMinute = makeGetSet('Minutes', false); // FORMATTING

          addFormatToken('s', ['ss', 2], 0, 'second'); // ALIASES

          addUnitAlias('second', 's'); // PRIORITY

          addUnitPriority('second', 15); // PARSING

          addRegexToken('s', match1to2);
          addRegexToken('ss', match1to2, match2);
          addParseToken(['s', 'ss'], SECOND); // MOMENTS

          var getSetSecond = makeGetSet('Seconds', false); // FORMATTING

          addFormatToken('S', 0, 0, function () {
            return ~~(this.millisecond() / 100);
          });
          addFormatToken(0, ['SS', 2], 0, function () {
            return ~~(this.millisecond() / 10);
          });
          addFormatToken(0, ['SSS', 3], 0, 'millisecond');
          addFormatToken(0, ['SSSS', 4], 0, function () {
            return this.millisecond() * 10;
          });
          addFormatToken(0, ['SSSSS', 5], 0, function () {
            return this.millisecond() * 100;
          });
          addFormatToken(0, ['SSSSSS', 6], 0, function () {
            return this.millisecond() * 1000;
          });
          addFormatToken(0, ['SSSSSSS', 7], 0, function () {
            return this.millisecond() * 10000;
          });
          addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
            return this.millisecond() * 100000;
          });
          addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
            return this.millisecond() * 1000000;
          }); // ALIASES

          addUnitAlias('millisecond', 'ms'); // PRIORITY

          addUnitPriority('millisecond', 16); // PARSING

          addRegexToken('S', match1to3, match1);
          addRegexToken('SS', match1to3, match2);
          addRegexToken('SSS', match1to3, match3);
          var token;

          for (token = 'SSSS'; token.length <= 9; token += 'S') {
            addRegexToken(token, matchUnsigned);
          }

          function parseMs(input, array) {
            array[MILLISECOND] = toInt(('0.' + input) * 1000);
          }

          for (token = 'S'; token.length <= 9; token += 'S') {
            addParseToken(token, parseMs);
          } // MOMENTS


          var getSetMillisecond = makeGetSet('Milliseconds', false); // FORMATTING

          addFormatToken('z', 0, 0, 'zoneAbbr');
          addFormatToken('zz', 0, 0, 'zoneName'); // MOMENTS

          function getZoneAbbr() {
            return this._isUTC ? 'UTC' : '';
          }

          function getZoneName() {
            return this._isUTC ? 'Coordinated Universal Time' : '';
          }

          var proto = Moment.prototype;
          proto.add = add;
          proto.calendar = calendar$1;
          proto.clone = clone;
          proto.diff = diff;
          proto.endOf = endOf;
          proto.format = format;
          proto.from = from;
          proto.fromNow = fromNow;
          proto.to = to;
          proto.toNow = toNow;
          proto.get = stringGet;
          proto.invalidAt = invalidAt;
          proto.isAfter = isAfter;
          proto.isBefore = isBefore;
          proto.isBetween = isBetween;
          proto.isSame = isSame;
          proto.isSameOrAfter = isSameOrAfter;
          proto.isSameOrBefore = isSameOrBefore;
          proto.isValid = isValid$2;
          proto.lang = lang;
          proto.locale = locale;
          proto.localeData = localeData;
          proto.max = prototypeMax;
          proto.min = prototypeMin;
          proto.parsingFlags = parsingFlags;
          proto.set = stringSet;
          proto.startOf = startOf;
          proto.subtract = subtract;
          proto.toArray = toArray;
          proto.toObject = toObject;
          proto.toDate = toDate;
          proto.toISOString = toISOString;
          proto.inspect = inspect;
          proto.toJSON = toJSON;
          proto.toString = toString;
          proto.unix = unix;
          proto.valueOf = valueOf;
          proto.creationData = creationData;
          proto.year = getSetYear;
          proto.isLeapYear = getIsLeapYear;
          proto.weekYear = getSetWeekYear;
          proto.isoWeekYear = getSetISOWeekYear;
          proto.quarter = proto.quarters = getSetQuarter;
          proto.month = getSetMonth;
          proto.daysInMonth = getDaysInMonth;
          proto.week = proto.weeks = getSetWeek;
          proto.isoWeek = proto.isoWeeks = getSetISOWeek;
          proto.weeksInYear = getWeeksInYear;
          proto.isoWeeksInYear = getISOWeeksInYear;
          proto.date = getSetDayOfMonth;
          proto.day = proto.days = getSetDayOfWeek;
          proto.weekday = getSetLocaleDayOfWeek;
          proto.isoWeekday = getSetISODayOfWeek;
          proto.dayOfYear = getSetDayOfYear;
          proto.hour = proto.hours = getSetHour;
          proto.minute = proto.minutes = getSetMinute;
          proto.second = proto.seconds = getSetSecond;
          proto.millisecond = proto.milliseconds = getSetMillisecond;
          proto.utcOffset = getSetOffset;
          proto.utc = setOffsetToUTC;
          proto.local = setOffsetToLocal;
          proto.parseZone = setOffsetToParsedOffset;
          proto.hasAlignedHourOffset = hasAlignedHourOffset;
          proto.isDST = isDaylightSavingTime;
          proto.isLocal = isLocal;
          proto.isUtcOffset = isUtcOffset;
          proto.isUtc = isUtc;
          proto.isUTC = isUtc;
          proto.zoneAbbr = getZoneAbbr;
          proto.zoneName = getZoneName;
          proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
          proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
          proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
          proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
          proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

          function createUnix(input) {
            return createLocal(input * 1000);
          }

          function createInZone() {
            return createLocal.apply(null, arguments).parseZone();
          }

          function preParsePostFormat(string) {
            return string;
          }

          var proto$1 = Locale.prototype;
          proto$1.calendar = calendar;
          proto$1.longDateFormat = longDateFormat;
          proto$1.invalidDate = invalidDate;
          proto$1.ordinal = ordinal;
          proto$1.preparse = preParsePostFormat;
          proto$1.postformat = preParsePostFormat;
          proto$1.relativeTime = relativeTime;
          proto$1.pastFuture = pastFuture;
          proto$1.set = set;
          proto$1.months = localeMonths;
          proto$1.monthsShort = localeMonthsShort;
          proto$1.monthsParse = localeMonthsParse;
          proto$1.monthsRegex = monthsRegex;
          proto$1.monthsShortRegex = monthsShortRegex;
          proto$1.week = localeWeek;
          proto$1.firstDayOfYear = localeFirstDayOfYear;
          proto$1.firstDayOfWeek = localeFirstDayOfWeek;
          proto$1.weekdays = localeWeekdays;
          proto$1.weekdaysMin = localeWeekdaysMin;
          proto$1.weekdaysShort = localeWeekdaysShort;
          proto$1.weekdaysParse = localeWeekdaysParse;
          proto$1.weekdaysRegex = weekdaysRegex;
          proto$1.weekdaysShortRegex = weekdaysShortRegex;
          proto$1.weekdaysMinRegex = weekdaysMinRegex;
          proto$1.isPM = localeIsPM;
          proto$1.meridiem = localeMeridiem;

          function get$1(format, index, field, setter) {
            var locale = getLocale();
            var utc = createUTC().set(setter, index);
            return locale[field](utc, format);
          }

          function listMonthsImpl(format, index, field) {
            if (isNumber(format)) {
              index = format;
              format = undefined;
            }

            format = format || '';

            if (index != null) {
              return get$1(format, index, field, 'month');
            }

            var i;
            var out = [];

            for (i = 0; i < 12; i++) {
              out[i] = get$1(format, i, field, 'month');
            }

            return out;
          } // ()
          // (5)
          // (fmt, 5)
          // (fmt)
          // (true)
          // (true, 5)
          // (true, fmt, 5)
          // (true, fmt)


          function listWeekdaysImpl(localeSorted, format, index, field) {
            if (typeof localeSorted === 'boolean') {
              if (isNumber(format)) {
                index = format;
                format = undefined;
              }

              format = format || '';
            } else {
              format = localeSorted;
              index = format;
              localeSorted = false;

              if (isNumber(format)) {
                index = format;
                format = undefined;
              }

              format = format || '';
            }

            var locale = getLocale(),
                shift = localeSorted ? locale._week.dow : 0;

            if (index != null) {
              return get$1(format, (index + shift) % 7, field, 'day');
            }

            var i;
            var out = [];

            for (i = 0; i < 7; i++) {
              out[i] = get$1(format, (i + shift) % 7, field, 'day');
            }

            return out;
          }

          function listMonths(format, index) {
            return listMonthsImpl(format, index, 'months');
          }

          function listMonthsShort(format, index) {
            return listMonthsImpl(format, index, 'monthsShort');
          }

          function listWeekdays(localeSorted, format, index) {
            return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
          }

          function listWeekdaysShort(localeSorted, format, index) {
            return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
          }

          function listWeekdaysMin(localeSorted, format, index) {
            return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
          }

          getSetGlobalLocale('en', {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function ordinal(number) {
              var b = number % 10,
                  output = toInt(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
              return number + output;
            }
          }); // Side effect imports

          hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
          hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
          var mathAbs = Math.abs;

          function abs() {
            var data = this._data;
            this._milliseconds = mathAbs(this._milliseconds);
            this._days = mathAbs(this._days);
            this._months = mathAbs(this._months);
            data.milliseconds = mathAbs(data.milliseconds);
            data.seconds = mathAbs(data.seconds);
            data.minutes = mathAbs(data.minutes);
            data.hours = mathAbs(data.hours);
            data.months = mathAbs(data.months);
            data.years = mathAbs(data.years);
            return this;
          }

          function addSubtract$1(duration, input, value, direction) {
            var other = createDuration(input, value);
            duration._milliseconds += direction * other._milliseconds;
            duration._days += direction * other._days;
            duration._months += direction * other._months;
            return duration._bubble();
          } // supports only 2.0-style add(1, 's') or add(duration)


          function add$1(input, value) {
            return addSubtract$1(this, input, value, 1);
          } // supports only 2.0-style subtract(1, 's') or subtract(duration)


          function subtract$1(input, value) {
            return addSubtract$1(this, input, value, -1);
          }

          function absCeil(number) {
            if (number < 0) {
              return Math.floor(number);
            } else {
              return Math.ceil(number);
            }
          }

          function bubble() {
            var milliseconds = this._milliseconds;
            var days = this._days;
            var months = this._months;
            var data = this._data;
            var seconds, minutes, hours, years, monthsFromDays; // if we have a mix of positive and negative values, bubble down first
            // check: https://github.com/moment/moment/issues/2166

            if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
              milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
              days = 0;
              months = 0;
            } // The following code bubbles up values, see the tests for
            // examples of what that means.


            data.milliseconds = milliseconds % 1000;
            seconds = absFloor(milliseconds / 1000);
            data.seconds = seconds % 60;
            minutes = absFloor(seconds / 60);
            data.minutes = minutes % 60;
            hours = absFloor(minutes / 60);
            data.hours = hours % 24;
            days += absFloor(hours / 24); // convert days to months

            monthsFromDays = absFloor(daysToMonths(days));
            months += monthsFromDays;
            days -= absCeil(monthsToDays(monthsFromDays)); // 12 months -> 1 year

            years = absFloor(months / 12);
            months %= 12;
            data.days = days;
            data.months = months;
            data.years = years;
            return this;
          }

          function daysToMonths(days) {
            // 400 years have 146097 days (taking into account leap year rules)
            // 400 years have 12 months === 4800
            return days * 4800 / 146097;
          }

          function monthsToDays(months) {
            // the reverse of daysToMonths
            return months * 146097 / 4800;
          }

          function as(units) {
            if (!this.isValid()) {
              return NaN;
            }

            var days;
            var months;
            var milliseconds = this._milliseconds;
            units = normalizeUnits(units);

            if (units === 'month' || units === 'year') {
              days = this._days + milliseconds / 864e5;
              months = this._months + daysToMonths(days);
              return units === 'month' ? months : months / 12;
            } else {
              // handle milliseconds separately because of floating point math errors (issue #1867)
              days = this._days + Math.round(monthsToDays(this._months));

              switch (units) {
                case 'week':
                  return days / 7 + milliseconds / 6048e5;

                case 'day':
                  return days + milliseconds / 864e5;

                case 'hour':
                  return days * 24 + milliseconds / 36e5;

                case 'minute':
                  return days * 1440 + milliseconds / 6e4;

                case 'second':
                  return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here

                case 'millisecond':
                  return Math.floor(days * 864e5) + milliseconds;

                default:
                  throw new Error('Unknown unit ' + units);
              }
            }
          } // TODO: Use this.as('ms')?


          function valueOf$1() {
            if (!this.isValid()) {
              return NaN;
            }

            return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + toInt(this._months / 12) * 31536e6;
          }

          function makeAs(alias) {
            return function () {
              return this.as(alias);
            };
          }

          var asMilliseconds = makeAs('ms');
          var asSeconds = makeAs('s');
          var asMinutes = makeAs('m');
          var asHours = makeAs('h');
          var asDays = makeAs('d');
          var asWeeks = makeAs('w');
          var asMonths = makeAs('M');
          var asYears = makeAs('y');

          function clone$1() {
            return createDuration(this);
          }

          function get$2(units) {
            units = normalizeUnits(units);
            return this.isValid() ? this[units + 's']() : NaN;
          }

          function makeGetter(name) {
            return function () {
              return this.isValid() ? this._data[name] : NaN;
            };
          }

          var milliseconds = makeGetter('milliseconds');
          var seconds = makeGetter('seconds');
          var minutes = makeGetter('minutes');
          var hours = makeGetter('hours');
          var days = makeGetter('days');
          var months = makeGetter('months');
          var years = makeGetter('years');

          function weeks() {
            return absFloor(this.days() / 7);
          }

          var round = Math.round;
          var thresholds = {
            ss: 44,
            // a few seconds to seconds
            s: 45,
            // seconds to minute
            m: 45,
            // minutes to hour
            h: 22,
            // hours to day
            d: 26,
            // days to month
            M: 11 // months to year

          }; // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize

          function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
            return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
          }

          function relativeTime$1(posNegDuration, withoutSuffix, locale) {
            var duration = createDuration(posNegDuration).abs();
            var seconds = round(duration.as('s'));
            var minutes = round(duration.as('m'));
            var hours = round(duration.as('h'));
            var days = round(duration.as('d'));
            var months = round(duration.as('M'));
            var years = round(duration.as('y'));
            var a = seconds <= thresholds.ss && ['s', seconds] || seconds < thresholds.s && ['ss', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
            a[2] = withoutSuffix;
            a[3] = +posNegDuration > 0;
            a[4] = locale;
            return substituteTimeAgo.apply(null, a);
          } // This function allows you to set the rounding function for relative time strings


          function getSetRelativeTimeRounding(roundingFunction) {
            if (roundingFunction === undefined) {
              return round;
            }

            if (typeof roundingFunction === 'function') {
              round = roundingFunction;
              return true;
            }

            return false;
          } // This function allows you to set a threshold for relative time strings


          function getSetRelativeTimeThreshold(threshold, limit) {
            if (thresholds[threshold] === undefined) {
              return false;
            }

            if (limit === undefined) {
              return thresholds[threshold];
            }

            thresholds[threshold] = limit;

            if (threshold === 's') {
              thresholds.ss = limit - 1;
            }

            return true;
          }

          function humanize(withSuffix) {
            if (!this.isValid()) {
              return this.localeData().invalidDate();
            }

            var locale = this.localeData();
            var output = relativeTime$1(this, !withSuffix, locale);

            if (withSuffix) {
              output = locale.pastFuture(+this, output);
            }

            return locale.postformat(output);
          }

          var abs$1 = Math.abs;

          function sign(x) {
            return (x > 0) - (x < 0) || +x;
          }

          function toISOString$1() {
            // for ISO strings we do not use the normal bubbling rules:
            //  * milliseconds bubble up until they become hours
            //  * days do not bubble at all
            //  * months bubble up until they become years
            // This is because there is no context-free conversion between hours and days
            // (think of clock changes)
            // and also not between days and months (28-31 days per month)
            if (!this.isValid()) {
              return this.localeData().invalidDate();
            }

            var seconds = abs$1(this._milliseconds) / 1000;
            var days = abs$1(this._days);
            var months = abs$1(this._months);
            var minutes, hours, years; // 3600 seconds -> 60 minutes -> 1 hour

            minutes = absFloor(seconds / 60);
            hours = absFloor(minutes / 60);
            seconds %= 60;
            minutes %= 60; // 12 months -> 1 year

            years = absFloor(months / 12);
            months %= 12; // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js

            var Y = years;
            var M = months;
            var D = days;
            var h = hours;
            var m = minutes;
            var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
            var total = this.asSeconds();

            if (!total) {
              // this is the same as C#'s (Noda) and python (isodate)...
              // but not other JS (goog.date)
              return 'P0D';
            }

            var totalSign = total < 0 ? '-' : '';
            var ymSign = sign(this._months) !== sign(total) ? '-' : '';
            var daysSign = sign(this._days) !== sign(total) ? '-' : '';
            var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
            return totalSign + 'P' + (Y ? ymSign + Y + 'Y' : '') + (M ? ymSign + M + 'M' : '') + (D ? daysSign + D + 'D' : '') + (h || m || s ? 'T' : '') + (h ? hmsSign + h + 'H' : '') + (m ? hmsSign + m + 'M' : '') + (s ? hmsSign + s + 'S' : '');
          }

          var proto$2 = Duration.prototype;
          proto$2.isValid = isValid$1;
          proto$2.abs = abs;
          proto$2.add = add$1;
          proto$2.subtract = subtract$1;
          proto$2.as = as;
          proto$2.asMilliseconds = asMilliseconds;
          proto$2.asSeconds = asSeconds;
          proto$2.asMinutes = asMinutes;
          proto$2.asHours = asHours;
          proto$2.asDays = asDays;
          proto$2.asWeeks = asWeeks;
          proto$2.asMonths = asMonths;
          proto$2.asYears = asYears;
          proto$2.valueOf = valueOf$1;
          proto$2._bubble = bubble;
          proto$2.clone = clone$1;
          proto$2.get = get$2;
          proto$2.milliseconds = milliseconds;
          proto$2.seconds = seconds;
          proto$2.minutes = minutes;
          proto$2.hours = hours;
          proto$2.days = days;
          proto$2.weeks = weeks;
          proto$2.months = months;
          proto$2.years = years;
          proto$2.humanize = humanize;
          proto$2.toISOString = toISOString$1;
          proto$2.toString = toISOString$1;
          proto$2.toJSON = toISOString$1;
          proto$2.locale = locale;
          proto$2.localeData = localeData;
          proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
          proto$2.lang = lang; // Side effect imports
          // FORMATTING

          addFormatToken('X', 0, 0, 'unix');
          addFormatToken('x', 0, 0, 'valueOf'); // PARSING

          addRegexToken('x', matchSigned);
          addRegexToken('X', matchTimestamp);
          addParseToken('X', function (input, array, config) {
            config._d = new Date(parseFloat(input, 10) * 1000);
          });
          addParseToken('x', function (input, array, config) {
            config._d = new Date(toInt(input));
          }); // Side effect imports

          hooks.version = '2.23.0';
          setHookCallback(createLocal);
          hooks.fn = proto;
          hooks.min = min;
          hooks.max = max;
          hooks.now = now;
          hooks.utc = createUTC;
          hooks.unix = createUnix;
          hooks.months = listMonths;
          hooks.isDate = isDate;
          hooks.locale = getSetGlobalLocale;
          hooks.invalid = createInvalid;
          hooks.duration = createDuration;
          hooks.isMoment = isMoment;
          hooks.weekdays = listWeekdays;
          hooks.parseZone = createInZone;
          hooks.localeData = getLocale;
          hooks.isDuration = isDuration;
          hooks.monthsShort = listMonthsShort;
          hooks.weekdaysMin = listWeekdaysMin;
          hooks.defineLocale = defineLocale;
          hooks.updateLocale = updateLocale;
          hooks.locales = listLocales;
          hooks.weekdaysShort = listWeekdaysShort;
          hooks.normalizeUnits = normalizeUnits;
          hooks.relativeTimeRounding = getSetRelativeTimeRounding;
          hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
          hooks.calendarFormat = getCalendarFormat;
          hooks.prototype = proto; // currently HTML5 input type only supports 24-hour formats

          hooks.HTML5_FMT = {
            DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
            // <input type="datetime-local" />
            DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
            // <input type="datetime-local" step="1" />
            DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
            // <input type="datetime-local" step="0.001" />
            DATE: 'YYYY-MM-DD',
            // <input type="date" />
            TIME: 'HH:mm',
            // <input type="time" />
            TIME_SECONDS: 'HH:mm:ss',
            // <input type="time" step="1" />
            TIME_MS: 'HH:mm:ss.SSS',
            // <input type="time" step="0.001" />
            WEEK: 'GGGG-[W]WW',
            // <input type="week" />
            MONTH: 'YYYY-MM' // <input type="month" />

          };
          return hooks;
        });
        /* WEBPACK VAR INJECTION */

      }).call(this, __webpack_require__(
      /*! ./../webpack/buildin/module.js */
      "YuTi")(module));
      /***/
    },

    /***/
    "x6pH":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/he.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function x6pH(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var he = moment.defineLocale('he', {
          months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
          monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
          weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
          weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
          weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D [ב]MMMM YYYY',
            LLL: 'D [ב]MMMM YYYY HH:mm',
            LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
            l: 'D/M/YYYY',
            ll: 'D MMM YYYY',
            lll: 'D MMM YYYY HH:mm',
            llll: 'ddd, D MMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[היום ב־]LT',
            nextDay: '[מחר ב־]LT',
            nextWeek: 'dddd [בשעה] LT',
            lastDay: '[אתמול ב־]LT',
            lastWeek: '[ביום] dddd [האחרון בשעה] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'בעוד %s',
            past: 'לפני %s',
            s: 'מספר שניות',
            ss: '%d שניות',
            m: 'דקה',
            mm: '%d דקות',
            h: 'שעה',
            hh: function hh(number) {
              if (number === 2) {
                return 'שעתיים';
              }

              return number + ' שעות';
            },
            d: 'יום',
            dd: function dd(number) {
              if (number === 2) {
                return 'יומיים';
              }

              return number + ' ימים';
            },
            M: 'חודש',
            MM: function MM(number) {
              if (number === 2) {
                return 'חודשיים';
              }

              return number + ' חודשים';
            },
            y: 'שנה',
            yy: function yy(number) {
              if (number === 2) {
                return 'שנתיים';
              } else if (number % 10 === 0 && number !== 10) {
                return number + ' שנה';
              }

              return number + ' שנים';
            }
          },
          meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
          isPM: function isPM(input) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
          },
          meridiem: function meridiem(hour, minute, isLower) {
            if (hour < 5) {
              return 'לפנות בוקר';
            } else if (hour < 10) {
              return 'בבוקר';
            } else if (hour < 12) {
              return isLower ? 'לפנה"צ' : 'לפני הצהריים';
            } else if (hour < 18) {
              return isLower ? 'אחה"צ' : 'אחרי הצהריים';
            } else {
              return 'בערב';
            }
          }
        });
        return he;
      });
      /***/

    },

    /***/
    "yPMs":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/sq.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function yPMs(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var sq = moment.defineLocale('sq', {
          months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
          monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
          weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
          weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
          weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
          weekdaysParseExact: true,
          meridiemParse: /PD|MD/,
          isPM: function isPM(input) {
            return input.charAt(0) === 'M';
          },
          meridiem: function meridiem(hours, minutes, isLower) {
            return hours < 12 ? 'PD' : 'MD';
          },
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[Sot në] LT',
            nextDay: '[Nesër në] LT',
            nextWeek: 'dddd [në] LT',
            lastDay: '[Dje në] LT',
            lastWeek: 'dddd [e kaluar në] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'në %s',
            past: '%s më parë',
            s: 'disa sekonda',
            ss: '%d sekonda',
            m: 'një minutë',
            mm: '%d minuta',
            h: 'një orë',
            hh: '%d orë',
            d: 'një ditë',
            dd: '%d ditë',
            M: 'një muaj',
            MM: '%d muaj',
            y: 'një vit',
            yy: '%d vite'
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return sq;
      });
      /***/

    },

    /***/
    "z1FC":
    /*!*******************************************!*\
      !*** ./node_modules/moment/locale/tzl.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function z1FC(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict'; // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
        // This is currently too difficult (maybe even impossible) to add.

        var tzl = moment.defineLocale('tzl', {
          months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
          monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
          weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
          weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
          weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
          longDateFormat: {
            LT: 'HH.mm',
            LTS: 'HH.mm.ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM [dallas] YYYY',
            LLL: 'D. MMMM [dallas] YYYY HH.mm',
            LLLL: 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
          },
          meridiemParse: /d\'o|d\'a/i,
          isPM: function isPM(input) {
            return 'd\'o' === input.toLowerCase();
          },
          meridiem: function meridiem(hours, minutes, isLower) {
            if (hours > 11) {
              return isLower ? 'd\'o' : 'D\'O';
            } else {
              return isLower ? 'd\'a' : 'D\'A';
            }
          },
          calendar: {
            sameDay: '[oxhi à] LT',
            nextDay: '[demà à] LT',
            nextWeek: 'dddd [à] LT',
            lastDay: '[ieiri à] LT',
            lastWeek: '[sür el] dddd [lasteu à] LT',
            sameElse: 'L'
          },
          relativeTime: {
            future: 'osprei %s',
            past: 'ja%s',
            s: processRelativeTime,
            ss: processRelativeTime,
            m: processRelativeTime,
            mm: processRelativeTime,
            h: processRelativeTime,
            hh: processRelativeTime,
            d: processRelativeTime,
            dd: processRelativeTime,
            M: processRelativeTime,
            MM: processRelativeTime,
            y: processRelativeTime,
            yy: processRelativeTime
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });

        function processRelativeTime(number, withoutSuffix, key, isFuture) {
          var format = {
            's': ['viensas secunds', '\'iensas secunds'],
            'ss': [number + ' secunds', '' + number + ' secunds'],
            'm': ['\'n míut', '\'iens míut'],
            'mm': [number + ' míuts', '' + number + ' míuts'],
            'h': ['\'n þora', '\'iensa þora'],
            'hh': [number + ' þoras', '' + number + ' þoras'],
            'd': ['\'n ziua', '\'iensa ziua'],
            'dd': [number + ' ziuas', '' + number + ' ziuas'],
            'M': ['\'n mes', '\'iens mes'],
            'MM': [number + ' mesen', '' + number + ' mesen'],
            'y': ['\'n ar', '\'iens ar'],
            'yy': [number + ' ars', '' + number + ' ars']
          };
          return isFuture ? format[key][0] : withoutSuffix ? format[key][0] : format[key][1];
        }

        return tzl;
      });
      /***/

    },

    /***/
    "z3Vd":
    /*!*******************************************!*\
      !*** ./node_modules/moment/locale/tlh.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function z3Vd(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

        function translateFuture(output) {
          var time = output;
          time = output.indexOf('jaj') !== -1 ? time.slice(0, -3) + 'leS' : output.indexOf('jar') !== -1 ? time.slice(0, -3) + 'waQ' : output.indexOf('DIS') !== -1 ? time.slice(0, -3) + 'nem' : time + ' pIq';
          return time;
        }

        function translatePast(output) {
          var time = output;
          time = output.indexOf('jaj') !== -1 ? time.slice(0, -3) + 'Hu’' : output.indexOf('jar') !== -1 ? time.slice(0, -3) + 'wen' : output.indexOf('DIS') !== -1 ? time.slice(0, -3) + 'ben' : time + ' ret';
          return time;
        }

        function translate(number, withoutSuffix, string, isFuture) {
          var numberNoun = numberAsNoun(number);

          switch (string) {
            case 'ss':
              return numberNoun + ' lup';

            case 'mm':
              return numberNoun + ' tup';

            case 'hh':
              return numberNoun + ' rep';

            case 'dd':
              return numberNoun + ' jaj';

            case 'MM':
              return numberNoun + ' jar';

            case 'yy':
              return numberNoun + ' DIS';
          }
        }

        function numberAsNoun(number) {
          var hundred = Math.floor(number % 1000 / 100),
              ten = Math.floor(number % 100 / 10),
              one = number % 10,
              word = '';

          if (hundred > 0) {
            word += numbersNouns[hundred] + 'vatlh';
          }

          if (ten > 0) {
            word += (word !== '' ? ' ' : '') + numbersNouns[ten] + 'maH';
          }

          if (one > 0) {
            word += (word !== '' ? ' ' : '') + numbersNouns[one];
          }

          return word === '' ? 'pagh' : word;
        }

        var tlh = moment.defineLocale('tlh', {
          months: 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
          monthsShort: 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
          monthsParseExact: true,
          weekdays: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
          weekdaysShort: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
          weekdaysMin: 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
          longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd, D MMMM YYYY HH:mm'
          },
          calendar: {
            sameDay: '[DaHjaj] LT',
            nextDay: '[wa’leS] LT',
            nextWeek: 'LLL',
            lastDay: '[wa’Hu’] LT',
            lastWeek: 'LLL',
            sameElse: 'L'
          },
          relativeTime: {
            future: translateFuture,
            past: translatePast,
            s: 'puS lup',
            ss: translate,
            m: 'wa’ tup',
            mm: translate,
            h: 'wa’ rep',
            hh: translate,
            d: 'wa’ jaj',
            dd: translate,
            M: 'wa’ jar',
            MM: translate,
            y: 'wa’ DIS',
            yy: translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.

          }
        });
        return tlh;
      });
      /***/

    },

    /***/
    "zx6S":
    /*!******************************************!*\
      !*** ./node_modules/moment/locale/sr.js ***!
      \******************************************/

    /*! no static exports found */

    /***/
    function zx6S(module, exports, __webpack_require__) {
      //! moment.js locale configuration
      ;

      (function (global, factory) {
        true ? factory(__webpack_require__(
        /*! ../moment */
        "wd/R")) : undefined;
      })(this, function (moment) {
        'use strict';

        var translator = {
          words: {
            //Different grammatical cases
            ss: ['sekunda', 'sekunde', 'sekundi'],
            m: ['jedan minut', 'jedne minute'],
            mm: ['minut', 'minute', 'minuta'],
            h: ['jedan sat', 'jednog sata'],
            hh: ['sat', 'sata', 'sati'],
            dd: ['dan', 'dana', 'dana'],
            MM: ['mesec', 'meseca', 'meseci'],
            yy: ['godina', 'godine', 'godina']
          },
          correctGrammaticalCase: function correctGrammaticalCase(number, wordKey) {
            return number === 1 ? wordKey[0] : number >= 2 && number <= 4 ? wordKey[1] : wordKey[2];
          },
          translate: function translate(number, withoutSuffix, key) {
            var wordKey = translator.words[key];

            if (key.length === 1) {
              return withoutSuffix ? wordKey[0] : wordKey[1];
            } else {
              return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
            }
          }
        };
        var sr = moment.defineLocale('sr', {
          months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
          monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
          monthsParseExact: true,
          weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
          weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
          weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
          weekdaysParseExact: true,
          longDateFormat: {
            LT: 'H:mm',
            LTS: 'H:mm:ss',
            L: 'DD.MM.YYYY',
            LL: 'D. MMMM YYYY',
            LLL: 'D. MMMM YYYY H:mm',
            LLLL: 'dddd, D. MMMM YYYY H:mm'
          },
          calendar: {
            sameDay: '[danas u] LT',
            nextDay: '[sutra u] LT',
            nextWeek: function nextWeek() {
              switch (this.day()) {
                case 0:
                  return '[u] [nedelju] [u] LT';

                case 3:
                  return '[u] [sredu] [u] LT';

                case 6:
                  return '[u] [subotu] [u] LT';

                case 1:
                case 2:
                case 4:
                case 5:
                  return '[u] dddd [u] LT';
              }
            },
            lastDay: '[juče u] LT',
            lastWeek: function lastWeek() {
              var lastWeekDays = ['[prošle] [nedelje] [u] LT', '[prošlog] [ponedeljka] [u] LT', '[prošlog] [utorka] [u] LT', '[prošle] [srede] [u] LT', '[prošlog] [četvrtka] [u] LT', '[prošlog] [petka] [u] LT', '[prošle] [subote] [u] LT'];
              return lastWeekDays[this.day()];
            },
            sameElse: 'L'
          },
          relativeTime: {
            future: 'za %s',
            past: 'pre %s',
            s: 'nekoliko sekundi',
            ss: translator.translate,
            m: translator.translate,
            mm: translator.translate,
            h: translator.translate,
            hh: translator.translate,
            d: 'dan',
            dd: translator.translate,
            M: 'mesec',
            MM: translator.translate,
            y: 'godinu',
            yy: translator.translate
          },
          dayOfMonthOrdinalParse: /\d{1,2}\./,
          ordinal: '%d.',
          week: {
            dow: 1,
            // Monday is the first day of the week.
            doy: 7 // The week that contains Jan 7th is the first week of the year.

          }
        });
        return sr;
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=6-es5.js.map