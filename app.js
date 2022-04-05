var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Darbuotojas = /** @class */ (function () {
    function Darbuotojas(_vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
    }
    Object.defineProperty(Darbuotojas.prototype, "vardas", {
        get: function () {
            return this._vardas;
        },
        set: function (vardas) {
            this._vardas = vardas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Darbuotojas.prototype, "pavarde", {
        get: function () {
            return this._pavarde;
        },
        set: function (pavarde) {
            this._pavarde = pavarde;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Darbuotojas.prototype, "atlyginimas", {
        get: function () {
            return this._atlyginimas;
        },
        set: function (atlyginimas) {
            this._atlyginimas = atlyginimas;
        },
        enumerable: false,
        configurable: true
    });
    Darbuotojas.prototype.gpm = function () {
        return this._atlyginimas * 0.2;
    };
    Darbuotojas.prototype.psd = function () {
        return this._atlyginimas * 0.0698;
    };
    Darbuotojas.prototype.vsd = function () {
        return this._atlyginimas * 0.1252;
    };
    return Darbuotojas;
}());
var PirmaeilisDarbuotojas = /** @class */ (function (_super) {
    __extends(PirmaeilisDarbuotojas, _super);
    function PirmaeilisDarbuotojas(_vardas, _pavarde, _atlyginimas) {
        var _this = _super.call(this, _vardas, _pavarde, _atlyginimas) || this;
        _this.npd = 0;
        _this.perskaiciuotiNPD();
        return _this;
    }
    Object.defineProperty(PirmaeilisDarbuotojas.prototype, "atlyginimas", {
        set: function (atlyginimas) {
            this._atlyginimas = atlyginimas;
            this.perskaiciuotiNPD();
        },
        enumerable: false,
        configurable: true
    });
    PirmaeilisDarbuotojas.prototype.gpm = function () {
        return (this._atlyginimas - this.npd) * 0.20;
    };
    PirmaeilisDarbuotojas.prototype.perskaiciuotiNPD = function () {
        if (this._atlyginimas < 730) {
            return this.npd = 460;
        }
        else if (this._atlyginimas < 730 && this._atlyginimas <= 1678) {
            return this.npd = 460 - 0.26 * (this._atlyginimas - 730);
        }
        else {
            return this.npd = 460 - 0.18 * (this._atlyginimas - 642);
        }
        ;
    };
    return PirmaeilisDarbuotojas;
}(Darbuotojas));
var darbuotojas1 = new PirmaeilisDarbuotojas("Tadas", "Tadukse", 1800);
var darbuotojas2 = new PirmaeilisDarbuotojas("Tomas", "Tomukse", 600);
console.log(darbuotojas1.perskaiciuotiNPD());
console.log(darbuotojas2.perskaiciuotiNPD());
console.log(darbuotojas1.gpm());
console.log(darbuotojas2.gpm());
var PraktikantasDarbuotojas = /** @class */ (function (_super) {
    __extends(PraktikantasDarbuotojas, _super);
    function PraktikantasDarbuotojas(_vardas, _pavarde) {
        return _super.call(this, _vardas, _pavarde, 0) || this;
    }
    PraktikantasDarbuotojas.prototype.perskaiciuotiNPD = function () {
        return 0;
    };
    return PraktikantasDarbuotojas;
}(PirmaeilisDarbuotojas));
var praktikantas = new PraktikantasDarbuotojas("Maksas", "Maksimavicius");
console.log(praktikantas.perskaiciuotiNPD());
console.log(praktikantas.gpm());
