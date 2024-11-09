#!/usr/bin/env -S deno run  --allow-net=localhost:5555 --allow-env --allow-read --allow-write=assets_bundle.json --allow-run
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __decoratorStart = (base) => {
  var _a2;
  return [, , , __create((_a2 = base == null ? void 0 : base[__knownSymbol("metadata")]) != null ? _a2 : null)];
};
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name]() {
    return __privateGet(this, extra);
  }, set [name](x) {
    return __privateSet(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve4, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve4(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var __await = function(promise, isYieldStar) {
  this[0] = promise;
  this[1] = isYieldStar;
};
var __asyncGenerator = (__this, __arguments, generator) => {
  var resume = (k, v, yes, no) => {
    try {
      var x = generator[k](v), isAwait = (v = x.value) instanceof __await, done = x.done;
      Promise.resolve(isAwait ? v[0] : v).then((y) => isAwait ? resume(k === "return" ? k : "next", v[1] ? { done: y.done, value: y.value } : y, yes, no) : yes({ value: y, done })).catch((e) => resume("throw", e, yes, no));
    } catch (e) {
      no(e);
    }
  }, method = (k) => it[k] = (x) => new Promise((yes, no) => resume(k, x, yes, no)), it = {};
  return generator = generator.apply(__this, __arguments), it[__knownSymbol("asyncIterator")] = () => it, method("next"), method("throw"), method("return"), it;
};
var __yieldStar = (value) => {
  var obj = value[__knownSymbol("asyncIterator")], isAwait = false, method, it = {};
  if (obj == null) {
    obj = value[__knownSymbol("iterator")]();
    method = (k) => it[k] = (x) => obj[k](x);
  } else {
    obj = obj.call(value);
    method = (k) => it[k] = (v) => {
      if (isAwait) {
        isAwait = false;
        if (k === "throw") throw v;
        return v;
      }
      isAwait = true;
      return {
        done: false,
        value: new __await(new Promise((resolve4) => {
          var x = obj[k](v);
          if (!(x instanceof Object)) __typeError("Object expected");
          resolve4(x);
        }), 1)
      };
    };
  }
  return it[__knownSymbol("iterator")] = () => it, method("next"), "throw" in obj ? method("throw") : it.throw = (x) => {
    throw x;
  }, "return" in obj && method("return"), it;
};
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);
var _a, _b, _c, _d, _e, _path, _knownResolved, _f, __Path_instances, rcomponents_fn, resolveCreateSymlinkOpts_fn, parseJson_fn, withFileForAppending_fn, withFileForWriting_fn, openFileMaybeCreatingDirectory_fn, withFileForAppendingSync_fn, withFileForWritingSync_fn, openFileForWritingSync_fn, openFileMaybeCreatingDirectorySync_fn, _buf, _off, _Buffer_instances, tryGrowByReslice_fn, reslice_fn, grow_fn, _g, _buf2, _rd, _r, _w2, _eof, _fill, _reset, _h, _state, _pb, _withCount, _onLog, _noClear, _ProgressBar_instances, logIfNonInteractive_fn, decrementWith_fn, _i, _value, _j, _kind, _inner, _k, _buffer, _innerWriter, _l, _buffer2, _innerWriter2, _m, _buffer3, _innerWriter3, _n, _inner2, _hasSet, _o, _inner3, _readListener, _closed, _p, _cwd, _envVars, _q, _readers, _writers, _r2, _env, _shellVars, _static, _s, _state2, __RequestBuilder_instances, getClonedState_fn, getDefaultState_fn, newWithState_fn, _t, _response, _downloadResponse, _originalUrl, _abortController, _RequestResponse_instances, withReturnHandling_fn, _u, _create, _v, _state3, __CommandBuilder_instances, getClonedState_fn2, newWithState_fn2, _w, _pipedStdoutBuffer, _pipedStderrBuffer, _killSignalController, _CommandChild_instances, assertBufferStreamable_fn, bufferToStream_fn, _x, _stdout, _stderr, _combined, _memoizedStdout, _memoizedStdoutJson, _memoizedStderr, _memoizedStderrJson, _memoizedCombined, _y, _state4, _killSignal, _z, _state5, _A, _updateAssetsBundle_dec, _frontendPath_dec, _assetsBundlePath_dec, _onListen_dec, _routes_dec, _assets_dec, _update_dec, _openInBrowserAppMode_dec, _openInBrowser_dec, _port_dec, _hostname_dec, _init, _B, _DesktopWebApp_instances, handleRequest_fn, openInBrowser_fn, loadAssets_fn, _commandFromChild_dec, _optionFromChild_dec, _sockets_dec, _notExitIfNoClient_dec, _C, _init2, _D, _ExampleServer_instances, sendWs_fn;
var AssertionError = class extends Error {
  /** Constructs a new instance.
   *
   * @param message The error message.
   * @param options Additional options. This argument is still unstable. It may change in the future release.
   */
  constructor(message, options) {
    super(message, options);
    this.name = "AssertionError";
  }
};
var { Deno: Deno2 } = globalThis;
var noColor = typeof (Deno2 == null ? void 0 : Deno2.noColor) === "boolean" ? Deno2.noColor : false;
var ANSI_PATTERN = new RegExp(
  [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TXZcf-nq-uy=><~]))"
  ].join("|"),
  "g"
);
function assert(expr, msg = "") {
  if (!expr) {
    throw new AssertionError(msg);
  }
}
var encoder = new TextEncoder();
function getTypeName(value) {
  var _a2, _b2;
  const type2 = typeof value;
  if (type2 !== "object") {
    return type2;
  } else if (value === null) {
    return "null";
  } else {
    return (_b2 = (_a2 = value == null ? void 0 : value.constructor) == null ? void 0 : _a2.name) != null ? _b2 : "object";
  }
}
function validateBinaryLike(source) {
  if (typeof source === "string") {
    return encoder.encode(source);
  } else if (source instanceof Uint8Array) {
    return source;
  } else if (source instanceof ArrayBuffer) {
    return new Uint8Array(source);
  }
  throw new TypeError(
    `Cannot validate the input as it must be a Uint8Array, a string, or an ArrayBuffer: received a value of the type ${getTypeName(source)}`
  );
}
var lookup = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split("");
var revLookup = [];
lookup.forEach((c, i) => revLookup[c.charCodeAt(0)] = i);
var base58alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz".split("");
var base64abc = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "/"
];
function encodeBase64(data) {
  const uint8 = validateBinaryLike(data);
  let result = "";
  let i;
  const l = uint8.length;
  for (i = 2; i < l; i += 3) {
    result += base64abc[uint8[i - 2] >> 2];
    result += base64abc[(uint8[i - 2] & 3) << 4 | uint8[i - 1] >> 4];
    result += base64abc[(uint8[i - 1] & 15) << 2 | uint8[i] >> 6];
    result += base64abc[uint8[i] & 63];
  }
  if (i === l + 1) {
    result += base64abc[uint8[i - 2] >> 2];
    result += base64abc[(uint8[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += base64abc[uint8[i - 2] >> 2];
    result += base64abc[(uint8[i - 2] & 3) << 4 | uint8[i - 1] >> 4];
    result += base64abc[(uint8[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
function decodeBase64(b64) {
  const binString = atob(b64);
  const size = binString.length;
  const bytes = new Uint8Array(size);
  for (let i = 0; i < size; i++) {
    bytes[i] = binString.charCodeAt(i);
  }
  return bytes;
}
var hexTable = new TextEncoder().encode("0123456789abcdef");
var textEncoder = new TextEncoder();
var textDecoder = new TextDecoder();
var AB = new ArrayBuffer(8);
var U32_VIEW = new Uint32Array(AB);
var U64_VIEW = new BigUint64Array(AB);
var isWindows = ((_a = globalThis.Deno) == null ? void 0 : _a.build.os) === "windows" || ((_c = (_b = globalThis.navigator) == null ? void 0 : _b.platform) == null ? void 0 : _c.startsWith("Win")) || ((_e = (_d = globalThis.process) == null ? void 0 : _d.platform) == null ? void 0 : _e.startsWith("win")) || false;
function assertPath(path) {
  if (typeof path !== "string") {
    throw new TypeError(
      `Path must be a string, received "${JSON.stringify(path)}"`
    );
  }
}
function assertArg(path) {
  assertPath(path);
  if (path.length === 0) return ".";
}
var CHAR_UPPERCASE_A = 65;
var CHAR_LOWERCASE_A = 97;
var CHAR_UPPERCASE_Z = 90;
var CHAR_LOWERCASE_Z = 122;
var CHAR_DOT = 46;
var CHAR_FORWARD_SLASH = 47;
var CHAR_BACKWARD_SLASH = 92;
var CHAR_COLON = 58;
function normalizeString(path, allowAboveRoot, separator, isPathSeparator2) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code3;
  for (let i = 0; i <= path.length; ++i) {
    if (i < path.length) code3 = path.charCodeAt(i);
    else if (isPathSeparator2(code3)) break;
    else code3 = CHAR_FORWARD_SLASH;
    if (isPathSeparator2(code3)) {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0) res += `${separator}..`;
          else res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) res += separator + path.slice(lastSlash + 1, i);
        else res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code3 === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function isPosixPathSeparator(code3) {
  return code3 === CHAR_FORWARD_SLASH;
}
function normalize(path) {
  assertArg(path);
  const isAbsolute4 = isPosixPathSeparator(path.charCodeAt(0));
  const trailingSeparator = isPosixPathSeparator(
    path.charCodeAt(path.length - 1)
  );
  path = normalizeString(path, !isAbsolute4, "/", isPosixPathSeparator);
  if (path.length === 0 && !isAbsolute4) path = ".";
  if (path.length > 0 && trailingSeparator) path += "/";
  if (isAbsolute4) return `/${path}`;
  return path;
}
function join(...paths) {
  if (paths.length === 0) return ".";
  paths.forEach((path) => assertPath(path));
  const joined = paths.filter((path) => path.length > 0).join("/");
  return joined === "" ? "." : normalize(joined);
}
function isPosixPathSeparator2(code3) {
  return code3 === CHAR_FORWARD_SLASH;
}
function isPathSeparator(code3) {
  return code3 === CHAR_FORWARD_SLASH || code3 === CHAR_BACKWARD_SLASH;
}
function isWindowsDeviceRoot(code3) {
  return code3 >= CHAR_LOWERCASE_A && code3 <= CHAR_LOWERCASE_Z || code3 >= CHAR_UPPERCASE_A && code3 <= CHAR_UPPERCASE_Z;
}
function normalize2(path) {
  assertArg(path);
  const len = path.length;
  let rootEnd = 0;
  let device;
  let isAbsolute4 = false;
  const code3 = path.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code3)) {
      isAbsolute4 = true;
      if (isPathSeparator(path.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path.charCodeAt(j))) break;
        }
        if (j < len && j !== last) {
          const firstPart = path.slice(last, j);
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path.charCodeAt(j))) break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path.charCodeAt(j))) break;
            }
            if (j === len) {
              return `\\\\${firstPart}\\${path.slice(last)}\\`;
            } else if (j !== last) {
              device = `\\\\${firstPart}\\${path.slice(last, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code3)) {
      if (path.charCodeAt(1) === CHAR_COLON) {
        device = path.slice(0, 2);
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path.charCodeAt(2))) {
            isAbsolute4 = true;
            rootEnd = 3;
          }
        }
      }
    }
  } else if (isPathSeparator(code3)) {
    return "\\";
  }
  let tail;
  if (rootEnd < len) {
    tail = normalizeString(
      path.slice(rootEnd),
      !isAbsolute4,
      "\\",
      isPathSeparator
    );
  } else {
    tail = "";
  }
  if (tail.length === 0 && !isAbsolute4) tail = ".";
  if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
    tail += "\\";
  }
  if (device === void 0) {
    if (isAbsolute4) {
      if (tail.length > 0) return `\\${tail}`;
      else return "\\";
    }
    return tail;
  } else if (isAbsolute4) {
    if (tail.length > 0) return `${device}\\${tail}`;
    else return `${device}\\`;
  }
  return device + tail;
}
function join2(...paths) {
  paths.forEach((path) => assertPath(path));
  paths = paths.filter((path) => path.length > 0);
  if (paths.length === 0) return ".";
  let needsReplace = true;
  let slashCount = 0;
  const firstPart = paths[0];
  if (isPathSeparator(firstPart.charCodeAt(0))) {
    ++slashCount;
    const firstLen = firstPart.length;
    if (firstLen > 1) {
      if (isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2))) ++slashCount;
          else {
            needsReplace = false;
          }
        }
      }
    }
  }
  let joined = paths.join("\\");
  if (needsReplace) {
    for (; slashCount < joined.length; ++slashCount) {
      if (!isPathSeparator(joined.charCodeAt(slashCount))) break;
    }
    if (slashCount >= 2) joined = `\\${joined.slice(slashCount)}`;
  }
  return normalize2(joined);
}
function join3(...paths) {
  return isWindows ? join2(...paths) : join(...paths);
}
function assertArg2(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol !== "file:") {
    throw new TypeError(
      `URL must be a file URL: received "${url.protocol}"`
    );
  }
  return url;
}
function fromFileUrl(url) {
  url = assertArg2(url);
  return decodeURIComponent(
    url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  );
}
function fromFileUrl2(url) {
  url = assertArg2(url);
  let path = decodeURIComponent(
    url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  ).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  if (url.hostname !== "") {
    path = `\\\\${url.hostname}${path}`;
  }
  return path;
}
function fromFileUrl3(url) {
  return isWindows ? fromFileUrl2(url) : fromFileUrl(url);
}
function toPathString(pathUrl) {
  return pathUrl instanceof URL ? fromFileUrl3(pathUrl) : pathUrl;
}
function emptyDir(dir) {
  return __async(this, null, function* () {
    try {
      const items = yield Array.fromAsync(Deno.readDir(dir));
      yield Promise.all(items.map((item) => {
        if (item && item.name) {
          const filepath = join3(toPathString(dir), item.name);
          return Deno.remove(filepath, { recursive: true });
        }
      }));
    } catch (err) {
      if (!(err instanceof Deno.errors.NotFound)) {
        throw err;
      }
      yield Deno.mkdir(dir, { recursive: true });
    }
  });
}
function emptyDirSync(dir) {
  try {
    const items = [...Deno.readDirSync(dir)];
    while (items.length) {
      const item = items.shift();
      if (item && item.name) {
        const filepath = join3(toPathString(dir), item.name);
        Deno.removeSync(filepath, { recursive: true });
      }
    }
  } catch (err) {
    if (!(err instanceof Deno.errors.NotFound)) {
      throw err;
    }
    Deno.mkdirSync(dir, { recursive: true });
  }
}
function getFileInfoType(fileInfo) {
  return fileInfo.isFile ? "file" : fileInfo.isDirectory ? "dir" : fileInfo.isSymlink ? "symlink" : void 0;
}
function ensureDir(dir) {
  return __async(this, null, function* () {
    try {
      const fileInfo = yield Deno.stat(dir);
      throwIfNotDirectory(fileInfo);
      return;
    } catch (err) {
      if (!(err instanceof Deno.errors.NotFound)) {
        throw err;
      }
    }
    try {
      yield Deno.mkdir(dir, { recursive: true });
    } catch (err) {
      if (!(err instanceof Deno.errors.AlreadyExists)) {
        throw err;
      }
      const fileInfo = yield Deno.stat(dir);
      throwIfNotDirectory(fileInfo);
    }
  });
}
function ensureDirSync(dir) {
  try {
    const fileInfo = Deno.statSync(dir);
    throwIfNotDirectory(fileInfo);
    return;
  } catch (err) {
    if (!(err instanceof Deno.errors.NotFound)) {
      throw err;
    }
  }
  try {
    Deno.mkdirSync(dir, { recursive: true });
  } catch (err) {
    if (!(err instanceof Deno.errors.AlreadyExists)) {
      throw err;
    }
    const fileInfo = Deno.statSync(dir);
    throwIfNotDirectory(fileInfo);
  }
}
function throwIfNotDirectory(fileInfo) {
  if (!fileInfo.isDirectory) {
    throw new Error(
      `Failed to ensure directory exists: expected 'dir', got '${getFileInfoType(fileInfo)}'`
    );
  }
}
function assertArg3(path) {
  assertPath(path);
  if (path.length === 0) return ".";
}
function stripTrailingSeparators(segment, isSep) {
  if (segment.length <= 1) {
    return segment;
  }
  let end = segment.length;
  for (let i = segment.length - 1; i > 0; i--) {
    if (isSep(segment.charCodeAt(i))) {
      end = i;
    } else {
      break;
    }
  }
  return segment.slice(0, end);
}
function dirname(path) {
  assertArg3(path);
  let end = -1;
  let matchedNonSeparator = false;
  for (let i = path.length - 1; i >= 1; --i) {
    if (isPosixPathSeparator(path.charCodeAt(i))) {
      if (matchedNonSeparator) {
        end = i;
        break;
      }
    } else {
      matchedNonSeparator = true;
    }
  }
  if (end === -1) {
    return isPosixPathSeparator(path.charCodeAt(0)) ? "/" : ".";
  }
  return stripTrailingSeparators(
    path.slice(0, end),
    isPosixPathSeparator
  );
}
function dirname2(path) {
  assertArg3(path);
  const len = path.length;
  let rootEnd = -1;
  let end = -1;
  let matchedSlash = true;
  let offset = 0;
  const code3 = path.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code3)) {
      rootEnd = offset = 1;
      if (isPathSeparator(path.charCodeAt(1))) {
        let j = 2;
        let last = j;
        for (; j < len; ++j) {
          if (isPathSeparator(path.charCodeAt(j))) break;
        }
        if (j < len && j !== last) {
          last = j;
          for (; j < len; ++j) {
            if (!isPathSeparator(path.charCodeAt(j))) break;
          }
          if (j < len && j !== last) {
            last = j;
            for (; j < len; ++j) {
              if (isPathSeparator(path.charCodeAt(j))) break;
            }
            if (j === len) {
              return path;
            }
            if (j !== last) {
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code3)) {
      if (path.charCodeAt(1) === CHAR_COLON) {
        rootEnd = offset = 2;
        if (len > 2) {
          if (isPathSeparator(path.charCodeAt(2))) rootEnd = offset = 3;
        }
      }
    }
  } else if (isPathSeparator(code3)) {
    return path;
  }
  for (let i = len - 1; i >= offset; --i) {
    if (isPathSeparator(path.charCodeAt(i))) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1) {
    if (rootEnd === -1) return ".";
    else end = rootEnd;
  }
  return stripTrailingSeparators(path.slice(0, end), isPosixPathSeparator2);
}
function dirname3(path) {
  return isWindows ? dirname2(path) : dirname(path);
}
function ensureFile(filePath) {
  return __async(this, null, function* () {
    try {
      const stat = yield Deno.lstat(filePath);
      if (!stat.isFile) {
        throw new Error(
          `Failed to ensure file exists: expected 'file', got '${getFileInfoType(stat)}'`
        );
      }
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        yield ensureDir(dirname3(toPathString(filePath)));
        yield Deno.writeFile(filePath, new Uint8Array());
        return;
      }
      throw err;
    }
  });
}
function ensureFileSync(filePath) {
  try {
    const stat = Deno.lstatSync(filePath);
    if (!stat.isFile) {
      throw new Error(
        `Failed to ensure file exists: expected 'file', got '${getFileInfoType(stat)}'`
      );
    }
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      ensureDirSync(dirname3(toPathString(filePath)));
      Deno.writeFileSync(filePath, new Uint8Array());
      return;
    }
    throw err;
  }
}
function resolve(...pathSegments) {
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    let path;
    if (i >= 0) path = pathSegments[i];
    else {
      const { Deno: Deno5 } = globalThis;
      if (typeof (Deno5 == null ? void 0 : Deno5.cwd) !== "function") {
        throw new TypeError(
          "Resolved a relative path without a current working directory (CWD)"
        );
      }
      path = Deno5.cwd();
    }
    assertPath(path);
    if (path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isPosixPathSeparator(path.charCodeAt(0));
  }
  resolvedPath = normalizeString(
    resolvedPath,
    !resolvedAbsolute,
    "/",
    isPosixPathSeparator
  );
  if (resolvedAbsolute) {
    if (resolvedPath.length > 0) return `/${resolvedPath}`;
    else return "/";
  } else if (resolvedPath.length > 0) return resolvedPath;
  else return ".";
}
function resolve2(...pathSegments) {
  var _a2;
  let resolvedDevice = "";
  let resolvedTail = "";
  let resolvedAbsolute = false;
  for (let i = pathSegments.length - 1; i >= -1; i--) {
    let path;
    const { Deno: Deno5 } = globalThis;
    if (i >= 0) {
      path = pathSegments[i];
    } else if (!resolvedDevice) {
      if (typeof (Deno5 == null ? void 0 : Deno5.cwd) !== "function") {
        throw new TypeError(
          "Resolved a drive-letter-less path without a current working directory (CWD)"
        );
      }
      path = Deno5.cwd();
    } else {
      if (typeof ((_a2 = Deno5 == null ? void 0 : Deno5.env) == null ? void 0 : _a2.get) !== "function" || typeof (Deno5 == null ? void 0 : Deno5.cwd) !== "function") {
        throw new TypeError(
          "Resolved a relative path without a current working directory (CWD)"
        );
      }
      path = Deno5.cwd();
      if (path === void 0 || path.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
        path = `${resolvedDevice}\\`;
      }
    }
    assertPath(path);
    const len = path.length;
    if (len === 0) continue;
    let rootEnd = 0;
    let device = "";
    let isAbsolute4 = false;
    const code3 = path.charCodeAt(0);
    if (len > 1) {
      if (isPathSeparator(code3)) {
        isAbsolute4 = true;
        if (isPathSeparator(path.charCodeAt(1))) {
          let j = 2;
          let last = j;
          for (; j < len; ++j) {
            if (isPathSeparator(path.charCodeAt(j))) break;
          }
          if (j < len && j !== last) {
            const firstPart = path.slice(last, j);
            last = j;
            for (; j < len; ++j) {
              if (!isPathSeparator(path.charCodeAt(j))) break;
            }
            if (j < len && j !== last) {
              last = j;
              for (; j < len; ++j) {
                if (isPathSeparator(path.charCodeAt(j))) break;
              }
              if (j === len) {
                device = `\\\\${firstPart}\\${path.slice(last)}`;
                rootEnd = j;
              } else if (j !== last) {
                device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code3)) {
        if (path.charCodeAt(1) === CHAR_COLON) {
          device = path.slice(0, 2);
          rootEnd = 2;
          if (len > 2) {
            if (isPathSeparator(path.charCodeAt(2))) {
              isAbsolute4 = true;
              rootEnd = 3;
            }
          }
        }
      }
    } else if (isPathSeparator(code3)) {
      rootEnd = 1;
      isAbsolute4 = true;
    }
    if (device.length > 0 && resolvedDevice.length > 0 && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      continue;
    }
    if (resolvedDevice.length === 0 && device.length > 0) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = `${path.slice(rootEnd)}\\${resolvedTail}`;
      resolvedAbsolute = isAbsolute4;
    }
    if (resolvedAbsolute && resolvedDevice.length > 0) break;
  }
  resolvedTail = normalizeString(
    resolvedTail,
    !resolvedAbsolute,
    "\\",
    isPathSeparator
  );
  return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
}
function resolve3(...pathSegments) {
  return isWindows ? resolve2(...pathSegments) : resolve(...pathSegments);
}
var isWindows2 = Deno.build.os === "windows";
function exists(path, options) {
  return __async(this, null, function* () {
    try {
      const stat = yield Deno.stat(path);
      if (options && (options.isReadable || options.isDirectory || options.isFile)) {
        if (options.isDirectory && options.isFile) {
          throw new TypeError(
            "ExistsOptions.options.isDirectory and ExistsOptions.options.isFile must not be true together"
          );
        }
        if (options.isDirectory && !stat.isDirectory || options.isFile && !stat.isFile) {
          return false;
        }
        if (options.isReadable) {
          return fileIsReadable(stat);
        }
      }
      return true;
    } catch (error) {
      if (error instanceof Deno.errors.NotFound) {
        return false;
      }
      if (error instanceof Deno.errors.PermissionDenied) {
        if ((yield Deno.permissions.query({ name: "read", path })).state === "granted") {
          return !(options == null ? void 0 : options.isReadable);
        }
      }
      throw error;
    }
  });
}
function existsSync(path, options) {
  try {
    const stat = Deno.statSync(path);
    if (options && (options.isReadable || options.isDirectory || options.isFile)) {
      if (options.isDirectory && options.isFile) {
        throw new TypeError(
          "ExistsOptions.options.isDirectory and ExistsOptions.options.isFile must not be true together"
        );
      }
      if (options.isDirectory && !stat.isDirectory || options.isFile && !stat.isFile) {
        return false;
      }
      if (options.isReadable) {
        return fileIsReadable(stat);
      }
    }
    return true;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return false;
    }
    if (error instanceof Deno.errors.PermissionDenied) {
      if (Deno.permissions.querySync({ name: "read", path }).state === "granted") {
        return !(options == null ? void 0 : options.isReadable);
      }
    }
    throw error;
  }
}
function fileIsReadable(stat) {
  if (stat.mode === null) {
    return true;
  } else if (Deno.uid() === stat.uid) {
    return (stat.mode & 256) === 256;
  } else if (Deno.gid() === stat.gid) {
    return (stat.mode & 32) === 32;
  }
  return (stat.mode & 4) === 4;
}
function isAbsolute(path) {
  assertPath(path);
  return path.length > 0 && isPosixPathSeparator(path.charCodeAt(0));
}
function isAbsolute2(path) {
  assertPath(path);
  const len = path.length;
  if (len === 0) return false;
  const code3 = path.charCodeAt(0);
  if (isPathSeparator(code3)) {
    return true;
  } else if (isWindowsDeviceRoot(code3)) {
    if (len > 2 && path.charCodeAt(1) === CHAR_COLON) {
      if (isPathSeparator(path.charCodeAt(2))) return true;
    }
  }
  return false;
}
function isAbsolute3(path) {
  return isWindows ? isAbsolute2(path) : isAbsolute(path);
}
var SEPARATOR3 = isWindows ? "\\" : "/";
function stripSuffix(name, suffix) {
  if (suffix.length >= name.length) {
    return name;
  }
  const lenDiff = name.length - suffix.length;
  for (let i = suffix.length - 1; i >= 0; --i) {
    if (name.charCodeAt(lenDiff + i) !== suffix.charCodeAt(i)) {
      return name;
    }
  }
  return name.slice(0, -suffix.length);
}
function lastPathSegment(path, isSep, start = 0) {
  let matchedNonSeparator = false;
  let end = path.length;
  for (let i = path.length - 1; i >= start; --i) {
    if (isSep(path.charCodeAt(i))) {
      if (matchedNonSeparator) {
        start = i + 1;
        break;
      }
    } else if (!matchedNonSeparator) {
      matchedNonSeparator = true;
      end = i + 1;
    }
  }
  return path.slice(start, end);
}
function assertArgs(path, suffix) {
  assertPath(path);
  if (path.length === 0) return path;
  if (typeof suffix !== "string") {
    throw new TypeError(
      `Suffix must be a string, received "${JSON.stringify(suffix)}"`
    );
  }
}
function basename(path, suffix = "") {
  assertArgs(path, suffix);
  const lastSegment = lastPathSegment(path, isPosixPathSeparator);
  const strippedSegment = stripTrailingSeparators(
    lastSegment,
    isPosixPathSeparator
  );
  return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
function basename2(path, suffix = "") {
  assertArgs(path, suffix);
  let start = 0;
  if (path.length >= 2) {
    const drive = path.charCodeAt(0);
    if (isWindowsDeviceRoot(drive)) {
      if (path.charCodeAt(1) === CHAR_COLON) start = 2;
    }
  }
  const lastSegment = lastPathSegment(path, isPathSeparator, start);
  const strippedSegment = stripTrailingSeparators(lastSegment, isPathSeparator);
  return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
function basename3(path, suffix = "") {
  return isWindows ? basename2(path, suffix) : basename(path, suffix);
}
function normalize3(path) {
  return isWindows ? normalize2(path) : normalize(path);
}
function createWalkEntry(path) {
  return __async(this, null, function* () {
    path = toPathString(path);
    path = normalize3(path);
    const name = basename3(path);
    const info = yield Deno.stat(path);
    return {
      path,
      name,
      isFile: info.isFile,
      isDirectory: info.isDirectory,
      isSymlink: info.isSymlink
    };
  });
}
function include(path, exts, match, skip) {
  if (exts && !exts.some((ext) => path.endsWith(ext))) {
    return false;
  }
  if (match && !match.some((pattern) => !!path.match(pattern))) {
    return false;
  }
  if (skip && skip.some((pattern) => !!path.match(pattern))) {
    return false;
  }
  return true;
}
function walk(root, options) {
  return __asyncGenerator(this, null, function* () {
    let {
      maxDepth = Infinity,
      includeFiles = true,
      includeDirs = true,
      includeSymlinks = true,
      followSymlinks = false,
      canonicalize = true,
      exts = void 0,
      match = void 0,
      skip = void 0
    } = options != null ? options : {};
    if (maxDepth < 0) {
      return;
    }
    root = toPathString(root);
    if (exts) {
      exts = exts.map((ext) => ext.startsWith(".") ? ext : `.${ext}`);
    }
    if (includeDirs && include(root, exts, match, skip)) {
      yield yield new __await(createWalkEntry(root));
    }
    if (maxDepth < 1 || !include(root, void 0, void 0, skip)) {
      return;
    }
    try {
      for (var iter = __forAwait(Deno.readDir(root)), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
        const entry = temp.value;
        let path = join3(root, entry.name);
        let { isSymlink, isDirectory: isDirectory2 } = entry;
        if (isSymlink) {
          if (!followSymlinks) {
            if (includeSymlinks && include(path, exts, match, skip)) {
              yield __spreadValues({ path }, entry);
            }
            continue;
          }
          const realPath = yield new __await(Deno.realPath(path));
          if (canonicalize) {
            path = realPath;
          }
          ({ isSymlink, isDirectory: isDirectory2 } = yield new __await(Deno.lstat(realPath)));
        }
        if (isSymlink || isDirectory2) {
          const opts = {
            maxDepth: maxDepth - 1,
            includeFiles,
            includeDirs,
            includeSymlinks,
            followSymlinks
          };
          if (exts !== void 0) {
            opts.exts = exts;
          }
          if (match !== void 0) {
            opts.match = match;
          }
          if (skip !== void 0) {
            opts.skip = skip;
          }
          yield* __yieldStar(walk(path, opts));
        } else if (includeFiles && include(path, exts, match, skip)) {
          yield __spreadValues({ path }, entry);
        }
      }
    } catch (temp) {
      error = [temp];
    } finally {
      try {
        more && (temp = iter.return) && (yield new __await(temp.call(iter)));
      } finally {
        if (error)
          throw error[0];
      }
    }
  });
}
var isWindows3 = Deno.build.os === "windows";
function isSubdir(src, dest, sep = SEPARATOR3) {
  src = toPathString(src);
  dest = toPathString(dest);
  if (resolve3(src) === resolve3(dest)) {
    return false;
  }
  const srcArray = src.split(sep);
  const destArray = dest.split(sep);
  return srcArray.every((current, i) => destArray[i] === current);
}
var EXISTS_ERROR = new Deno.errors.AlreadyExists("dest already exists.");
var isWindows4 = Deno.build.os === "windows";
function assertIsDate(date, name) {
  if (date === null) {
    throw new Error(`${name} is unavailable`);
  }
}
function ensureValidCopy(src, dest, options) {
  return __async(this, null, function* () {
    let destStat;
    try {
      destStat = yield Deno.lstat(dest);
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        return;
      }
      throw err;
    }
    if (options.isFolder && !destStat.isDirectory) {
      throw new Error(
        `Cannot overwrite non-directory '${dest}' with directory '${src}'`
      );
    }
    if (!options.overwrite) {
      throw new Deno.errors.AlreadyExists(`'${dest}' already exists.`);
    }
    return destStat;
  });
}
function ensureValidCopySync(src, dest, options) {
  let destStat;
  try {
    destStat = Deno.lstatSync(dest);
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return;
    }
    throw err;
  }
  if (options.isFolder && !destStat.isDirectory) {
    throw new Error(
      `Cannot overwrite non-directory '${dest}' with directory '${src}'`
    );
  }
  if (!options.overwrite) {
    throw new Deno.errors.AlreadyExists(`'${dest}' already exists`);
  }
  return destStat;
}
function copyFile(src, dest, options) {
  return __async(this, null, function* () {
    yield ensureValidCopy(src, dest, options);
    yield Deno.copyFile(src, dest);
    if (options.preserveTimestamps) {
      const statInfo = yield Deno.stat(src);
      assertIsDate(statInfo.atime, "statInfo.atime");
      assertIsDate(statInfo.mtime, "statInfo.mtime");
      yield Deno.utime(dest, statInfo.atime, statInfo.mtime);
    }
  });
}
function copyFileSync(src, dest, options) {
  ensureValidCopySync(src, dest, options);
  Deno.copyFileSync(src, dest);
  if (options.preserveTimestamps) {
    const statInfo = Deno.statSync(src);
    assertIsDate(statInfo.atime, "statInfo.atime");
    assertIsDate(statInfo.mtime, "statInfo.mtime");
    Deno.utimeSync(dest, statInfo.atime, statInfo.mtime);
  }
}
function copySymLink(src, dest, options) {
  return __async(this, null, function* () {
    yield ensureValidCopy(src, dest, options);
    const originSrcFilePath = yield Deno.readLink(src);
    const type2 = getFileInfoType(yield Deno.lstat(src));
    if (isWindows4) {
      yield Deno.symlink(originSrcFilePath, dest, {
        type: type2 === "dir" ? "dir" : "file"
      });
    } else {
      yield Deno.symlink(originSrcFilePath, dest);
    }
    if (options.preserveTimestamps) {
      const statInfo = yield Deno.lstat(src);
      assertIsDate(statInfo.atime, "statInfo.atime");
      assertIsDate(statInfo.mtime, "statInfo.mtime");
      yield Deno.utime(dest, statInfo.atime, statInfo.mtime);
    }
  });
}
function copySymlinkSync(src, dest, options) {
  ensureValidCopySync(src, dest, options);
  const originSrcFilePath = Deno.readLinkSync(src);
  const type2 = getFileInfoType(Deno.lstatSync(src));
  if (isWindows4) {
    Deno.symlinkSync(originSrcFilePath, dest, {
      type: type2 === "dir" ? "dir" : "file"
    });
  } else {
    Deno.symlinkSync(originSrcFilePath, dest);
  }
  if (options.preserveTimestamps) {
    const statInfo = Deno.lstatSync(src);
    assertIsDate(statInfo.atime, "statInfo.atime");
    assertIsDate(statInfo.mtime, "statInfo.mtime");
    Deno.utimeSync(dest, statInfo.atime, statInfo.mtime);
  }
}
function copyDir(src, dest, options) {
  return __async(this, null, function* () {
    const destStat = yield ensureValidCopy(src, dest, __spreadProps(__spreadValues({}, options), {
      isFolder: true
    }));
    if (!destStat) {
      yield ensureDir(dest);
    }
    if (options.preserveTimestamps) {
      const srcStatInfo = yield Deno.stat(src);
      assertIsDate(srcStatInfo.atime, "statInfo.atime");
      assertIsDate(srcStatInfo.mtime, "statInfo.mtime");
      yield Deno.utime(dest, srcStatInfo.atime, srcStatInfo.mtime);
    }
    src = toPathString(src);
    dest = toPathString(dest);
    const promises = [];
    try {
      for (var iter = __forAwait(Deno.readDir(src)), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
        const entry = temp.value;
        const srcPath = join3(src, entry.name);
        const destPath = join3(dest, basename3(srcPath));
        if (entry.isSymlink) {
          promises.push(copySymLink(srcPath, destPath, options));
        } else if (entry.isDirectory) {
          promises.push(copyDir(srcPath, destPath, options));
        } else if (entry.isFile) {
          promises.push(copyFile(srcPath, destPath, options));
        }
      }
    } catch (temp) {
      error = [temp];
    } finally {
      try {
        more && (temp = iter.return) && (yield temp.call(iter));
      } finally {
        if (error)
          throw error[0];
      }
    }
    yield Promise.all(promises);
  });
}
function copyDirSync(src, dest, options) {
  const destStat = ensureValidCopySync(src, dest, __spreadProps(__spreadValues({}, options), {
    isFolder: true
  }));
  if (!destStat) {
    ensureDirSync(dest);
  }
  if (options.preserveTimestamps) {
    const srcStatInfo = Deno.statSync(src);
    assertIsDate(srcStatInfo.atime, "statInfo.atime");
    assertIsDate(srcStatInfo.mtime, "statInfo.mtime");
    Deno.utimeSync(dest, srcStatInfo.atime, srcStatInfo.mtime);
  }
  src = toPathString(src);
  dest = toPathString(dest);
  for (const entry of Deno.readDirSync(src)) {
    const srcPath = join3(src, entry.name);
    const destPath = join3(dest, basename3(srcPath));
    if (entry.isSymlink) {
      copySymlinkSync(srcPath, destPath, options);
    } else if (entry.isDirectory) {
      copyDirSync(srcPath, destPath, options);
    } else if (entry.isFile) {
      copyFileSync(srcPath, destPath, options);
    }
  }
}
function copy(_0, _1) {
  return __async(this, arguments, function* (src, dest, options = {}) {
    src = resolve3(toPathString(src));
    dest = resolve3(toPathString(dest));
    if (src === dest) {
      throw new Error("Source and destination cannot be the same");
    }
    const srcStat = yield Deno.lstat(src);
    if (srcStat.isDirectory && isSubdir(src, dest)) {
      throw new Error(
        `Cannot copy '${src}' to a subdirectory of itself: '${dest}'`
      );
    }
    if (srcStat.isSymlink) {
      yield copySymLink(src, dest, options);
    } else if (srcStat.isDirectory) {
      yield copyDir(src, dest, options);
    } else if (srcStat.isFile) {
      yield copyFile(src, dest, options);
    }
  });
}
function copySync(src, dest, options = {}) {
  src = resolve3(toPathString(src));
  dest = resolve3(toPathString(dest));
  if (src === dest) {
    throw new Error("Source and destination cannot be the same");
  }
  const srcStat = Deno.lstatSync(src);
  if (srcStat.isDirectory && isSubdir(src, dest)) {
    throw new Error(
      `Cannot copy '${src}' to a subdirectory of itself: '${dest}'`
    );
  }
  if (srcStat.isSymlink) {
    copySymlinkSync(src, dest, options);
  } else if (srcStat.isDirectory) {
    copyDirSync(src, dest, options);
  } else if (srcStat.isFile) {
    copyFileSync(src, dest, options);
  }
}
var LF = "\n";
var CRLF = "\r\n";
var EOL = (Deno == null ? void 0 : Deno.build.os) === "windows" ? CRLF : LF;
function consumeToken(v) {
  const notPos = indexOf(v, isNotTokenChar);
  if (notPos === -1) {
    return [v, ""];
  }
  if (notPos === 0) {
    return ["", v];
  }
  return [v.slice(0, notPos), v.slice(notPos)];
}
function consumeValue(v) {
  if (!v) {
    return ["", v];
  }
  if (v[0] !== `"`) {
    return consumeToken(v);
  }
  let value = "";
  for (let i = 1; i < v.length; i++) {
    const r = v[i];
    if (r === `"`) {
      return [value, v.slice(i + 1)];
    }
    const next = v[i + 1];
    if (r === "\\" && typeof next === "string" && isTSpecial(next)) {
      value += next;
      i++;
      continue;
    }
    if (r === "\r" || r === "\n") {
      return ["", v];
    }
    value += v[i];
  }
  return ["", v];
}
function consumeMediaParam(v) {
  let rest = v.trimStart();
  if (!rest.startsWith(";")) {
    return ["", "", v];
  }
  rest = rest.slice(1);
  rest = rest.trimStart();
  let param;
  [param, rest] = consumeToken(rest);
  param = param.toLowerCase();
  if (!param) {
    return ["", "", v];
  }
  rest = rest.slice(1);
  rest = rest.trimStart();
  const [value, rest2] = consumeValue(rest);
  if (value === "" && rest2 === rest) {
    return ["", "", v];
  }
  rest = rest2;
  return [param, value, rest];
}
function decode2331Encoding(v) {
  const sv = v.split(`'`, 3);
  if (sv.length !== 3) {
    return void 0;
  }
  const [sv0, , sv2] = sv;
  const charset = sv0.toLowerCase();
  if (!charset) {
    return void 0;
  }
  if (charset !== "us-ascii" && charset !== "utf-8") {
    return void 0;
  }
  const encv = decodeURI(sv2);
  if (!encv) {
    return void 0;
  }
  return encv;
}
function indexOf(s, fn) {
  let i = -1;
  for (const v of s) {
    i++;
    if (fn(v)) {
      return i;
    }
  }
  return -1;
}
function isIterator(obj) {
  if (obj === null || obj === void 0) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
}
function isToken(s) {
  if (!s) {
    return false;
  }
  return indexOf(s, isNotTokenChar) < 0;
}
function isNotTokenChar(r) {
  return !isTokenChar(r);
}
function isTokenChar(r) {
  const code3 = r.charCodeAt(0);
  return code3 > 32 && code3 < 127 && !isTSpecial(r);
}
function isTSpecial(r) {
  return r[0] ? `()<>@,;:\\"/[]?=`.includes(r[0]) : false;
}
var CHAR_CODE_SPACE = " ".charCodeAt(0);
var CHAR_CODE_TILDE = "~".charCodeAt(0);
function needsEncoding(s) {
  for (const b of s) {
    const charCode = b.charCodeAt(0);
    if ((charCode < CHAR_CODE_SPACE || charCode > CHAR_CODE_TILDE) && b !== "	") {
      return true;
    }
  }
  return false;
}
var SEMICOLON_REGEXP = /^\s*;\s*$/;
function parseMediaType(type2) {
  const [base] = type2.split(";");
  const mediaType = base.toLowerCase().trim();
  const params = {};
  const continuation = /* @__PURE__ */ new Map();
  type2 = type2.slice(base.length);
  while (type2.length) {
    type2 = type2.trimStart();
    if (type2.length === 0) {
      break;
    }
    const [key, value, rest] = consumeMediaParam(type2);
    if (!key) {
      if (SEMICOLON_REGEXP.test(rest)) {
        break;
      }
      throw new TypeError(
        `Cannot parse media type: invalid parameter "${type2}"`
      );
    }
    let pmap = params;
    const [baseName, rest2] = key.split("*");
    if (baseName && rest2 !== void 0) {
      if (!continuation.has(baseName)) {
        continuation.set(baseName, {});
      }
      pmap = continuation.get(baseName);
    }
    if (key in pmap) {
      throw new TypeError("Cannot parse media type: duplicate key");
    }
    pmap[key] = value;
    type2 = rest;
  }
  let str = "";
  for (const [key, pieceMap] of continuation) {
    const singlePartKey = `${key}*`;
    const type3 = pieceMap[singlePartKey];
    if (type3) {
      const decv = decode2331Encoding(type3);
      if (decv) {
        params[key] = decv;
      }
      continue;
    }
    str = "";
    let valid = false;
    for (let n = 0; ; n++) {
      const simplePart = `${key}*${n}`;
      let type4 = pieceMap[simplePart];
      if (type4) {
        valid = true;
        str += type4;
        continue;
      }
      const encodedPart = `${simplePart}*`;
      type4 = pieceMap[encodedPart];
      if (!type4) {
        break;
      }
      valid = true;
      if (n === 0) {
        const decv = decode2331Encoding(type4);
        if (decv) {
          str += decv;
        }
      } else {
        const decv = decodeURI(type4);
        str += decv;
      }
    }
    if (valid) {
      params[key] = str;
    }
  }
  return [mediaType, Object.keys(params).length ? params : void 0];
}
var db_default = {
  "application/1d-interleaved-parityfec": {
    "source": "iana"
  },
  "application/3gpdash-qoe-report+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/3gpp-ims+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/3gpphal+json": {
    "source": "iana",
    "compressible": true
  },
  "application/3gpphalforms+json": {
    "source": "iana",
    "compressible": true
  },
  "application/a2l": {
    "source": "iana"
  },
  "application/ace+cbor": {
    "source": "iana"
  },
  "application/ace+json": {
    "source": "iana",
    "compressible": true
  },
  "application/activemessage": {
    "source": "iana"
  },
  "application/activity+json": {
    "source": "iana",
    "compressible": true
  },
  "application/aif+cbor": {
    "source": "iana"
  },
  "application/aif+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-cdni+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-cdnifilter+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-costmap+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-costmapfilter+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-directory+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-endpointcost+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-endpointcostparams+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-endpointprop+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-endpointpropparams+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-error+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-networkmap+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-networkmapfilter+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-propmap+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-propmapparams+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-updatestreamcontrol+json": {
    "source": "iana",
    "compressible": true
  },
  "application/alto-updatestreamparams+json": {
    "source": "iana",
    "compressible": true
  },
  "application/aml": {
    "source": "iana"
  },
  "application/andrew-inset": {
    "source": "iana",
    "extensions": ["ez"]
  },
  "application/appinstaller": {
    "compressible": false,
    "extensions": ["appinstaller"]
  },
  "application/applefile": {
    "source": "iana"
  },
  "application/applixware": {
    "source": "apache",
    "extensions": ["aw"]
  },
  "application/appx": {
    "compressible": false,
    "extensions": ["appx"]
  },
  "application/appxbundle": {
    "compressible": false,
    "extensions": ["appxbundle"]
  },
  "application/at+jwt": {
    "source": "iana"
  },
  "application/atf": {
    "source": "iana"
  },
  "application/atfx": {
    "source": "iana"
  },
  "application/atom+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["atom"]
  },
  "application/atomcat+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["atomcat"]
  },
  "application/atomdeleted+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["atomdeleted"]
  },
  "application/atomicmail": {
    "source": "iana"
  },
  "application/atomsvc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["atomsvc"]
  },
  "application/atsc-dwd+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dwd"]
  },
  "application/atsc-dynamic-event-message": {
    "source": "iana"
  },
  "application/atsc-held+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["held"]
  },
  "application/atsc-rdt+json": {
    "source": "iana",
    "compressible": true
  },
  "application/atsc-rsat+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rsat"]
  },
  "application/atxml": {
    "source": "iana"
  },
  "application/auth-policy+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/automationml-aml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["aml"]
  },
  "application/automationml-amlx+zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["amlx"]
  },
  "application/bacnet-xdd+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/batch-smtp": {
    "source": "iana"
  },
  "application/bdoc": {
    "compressible": false,
    "extensions": ["bdoc"]
  },
  "application/beep+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/calendar+json": {
    "source": "iana",
    "compressible": true
  },
  "application/calendar+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xcs"]
  },
  "application/call-completion": {
    "source": "iana"
  },
  "application/cals-1840": {
    "source": "iana"
  },
  "application/captive+json": {
    "source": "iana",
    "compressible": true
  },
  "application/cbor": {
    "source": "iana"
  },
  "application/cbor-seq": {
    "source": "iana"
  },
  "application/cccex": {
    "source": "iana"
  },
  "application/ccmp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/ccxml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ccxml"]
  },
  "application/cda+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/cdfx+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["cdfx"]
  },
  "application/cdmi-capability": {
    "source": "iana",
    "extensions": ["cdmia"]
  },
  "application/cdmi-container": {
    "source": "iana",
    "extensions": ["cdmic"]
  },
  "application/cdmi-domain": {
    "source": "iana",
    "extensions": ["cdmid"]
  },
  "application/cdmi-object": {
    "source": "iana",
    "extensions": ["cdmio"]
  },
  "application/cdmi-queue": {
    "source": "iana",
    "extensions": ["cdmiq"]
  },
  "application/cdni": {
    "source": "iana"
  },
  "application/cea": {
    "source": "iana"
  },
  "application/cea-2018+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cellml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cfw": {
    "source": "iana"
  },
  "application/city+json": {
    "source": "iana",
    "compressible": true
  },
  "application/clr": {
    "source": "iana"
  },
  "application/clue+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/clue_info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cms": {
    "source": "iana"
  },
  "application/cnrp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/coap-group+json": {
    "source": "iana",
    "compressible": true
  },
  "application/coap-payload": {
    "source": "iana"
  },
  "application/commonground": {
    "source": "iana"
  },
  "application/concise-problem-details+cbor": {
    "source": "iana"
  },
  "application/conference-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cose": {
    "source": "iana"
  },
  "application/cose-key": {
    "source": "iana"
  },
  "application/cose-key-set": {
    "source": "iana"
  },
  "application/cose-x509": {
    "source": "iana"
  },
  "application/cpl+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["cpl"]
  },
  "application/csrattrs": {
    "source": "iana"
  },
  "application/csta+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/cstadata+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/csvm+json": {
    "source": "iana",
    "compressible": true
  },
  "application/cu-seeme": {
    "source": "apache",
    "extensions": ["cu"]
  },
  "application/cwl": {
    "source": "iana",
    "extensions": ["cwl"]
  },
  "application/cwl+json": {
    "source": "iana",
    "compressible": true
  },
  "application/cwt": {
    "source": "iana"
  },
  "application/cybercash": {
    "source": "iana"
  },
  "application/dart": {
    "compressible": true
  },
  "application/dash+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mpd"]
  },
  "application/dash-patch+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mpp"]
  },
  "application/dashdelta": {
    "source": "iana"
  },
  "application/davmount+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["davmount"]
  },
  "application/dca-rft": {
    "source": "iana"
  },
  "application/dcd": {
    "source": "iana"
  },
  "application/dec-dx": {
    "source": "iana"
  },
  "application/dialog-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/dicom": {
    "source": "iana"
  },
  "application/dicom+json": {
    "source": "iana",
    "compressible": true
  },
  "application/dicom+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/dii": {
    "source": "iana"
  },
  "application/dit": {
    "source": "iana"
  },
  "application/dns": {
    "source": "iana"
  },
  "application/dns+json": {
    "source": "iana",
    "compressible": true
  },
  "application/dns-message": {
    "source": "iana"
  },
  "application/docbook+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["dbk"]
  },
  "application/dots+cbor": {
    "source": "iana"
  },
  "application/dskpp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/dssc+der": {
    "source": "iana",
    "extensions": ["dssc"]
  },
  "application/dssc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xdssc"]
  },
  "application/dvcs": {
    "source": "iana"
  },
  "application/ecmascript": {
    "source": "apache",
    "compressible": true,
    "extensions": ["ecma"]
  },
  "application/edi-consent": {
    "source": "iana"
  },
  "application/edi-x12": {
    "source": "iana",
    "compressible": false
  },
  "application/edifact": {
    "source": "iana",
    "compressible": false
  },
  "application/efi": {
    "source": "iana"
  },
  "application/elm+json": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/elm+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.cap+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/emergencycalldata.comment+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.control+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.deviceinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.ecall.msd": {
    "source": "iana"
  },
  "application/emergencycalldata.legacyesn+json": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.providerinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.serviceinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.subscriberinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emergencycalldata.veds+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/emma+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["emma"]
  },
  "application/emotionml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["emotionml"]
  },
  "application/encaprtp": {
    "source": "iana"
  },
  "application/epp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/epub+zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["epub"]
  },
  "application/eshop": {
    "source": "iana"
  },
  "application/exi": {
    "source": "iana",
    "extensions": ["exi"]
  },
  "application/expect-ct-report+json": {
    "source": "iana",
    "compressible": true
  },
  "application/express": {
    "source": "iana",
    "extensions": ["exp"]
  },
  "application/fastinfoset": {
    "source": "iana"
  },
  "application/fastsoap": {
    "source": "iana"
  },
  "application/fdf": {
    "source": "iana",
    "extensions": ["fdf"]
  },
  "application/fdt+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["fdt"]
  },
  "application/fhir+json": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/fhir+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/fido.trusted-apps+json": {
    "compressible": true
  },
  "application/fits": {
    "source": "iana"
  },
  "application/flexfec": {
    "source": "iana"
  },
  "application/font-sfnt": {
    "source": "iana"
  },
  "application/font-tdpfr": {
    "source": "iana",
    "extensions": ["pfr"]
  },
  "application/font-woff": {
    "source": "iana",
    "compressible": false
  },
  "application/framework-attributes+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/geo+json": {
    "source": "iana",
    "compressible": true,
    "extensions": ["geojson"]
  },
  "application/geo+json-seq": {
    "source": "iana"
  },
  "application/geopackage+sqlite3": {
    "source": "iana"
  },
  "application/geoxacml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/gltf-buffer": {
    "source": "iana"
  },
  "application/gml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["gml"]
  },
  "application/gpx+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["gpx"]
  },
  "application/gxf": {
    "source": "apache",
    "extensions": ["gxf"]
  },
  "application/gzip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["gz"]
  },
  "application/h224": {
    "source": "iana"
  },
  "application/held+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/hjson": {
    "extensions": ["hjson"]
  },
  "application/hl7v2+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/http": {
    "source": "iana"
  },
  "application/hyperstudio": {
    "source": "iana",
    "extensions": ["stk"]
  },
  "application/ibe-key-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/ibe-pkg-reply+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/ibe-pp-data": {
    "source": "iana"
  },
  "application/iges": {
    "source": "iana"
  },
  "application/im-iscomposing+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/index": {
    "source": "iana"
  },
  "application/index.cmd": {
    "source": "iana"
  },
  "application/index.obj": {
    "source": "iana"
  },
  "application/index.response": {
    "source": "iana"
  },
  "application/index.vnd": {
    "source": "iana"
  },
  "application/inkml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ink", "inkml"]
  },
  "application/iotp": {
    "source": "iana"
  },
  "application/ipfix": {
    "source": "iana",
    "extensions": ["ipfix"]
  },
  "application/ipp": {
    "source": "iana"
  },
  "application/isup": {
    "source": "iana"
  },
  "application/its+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["its"]
  },
  "application/java-archive": {
    "source": "apache",
    "compressible": false,
    "extensions": ["jar", "war", "ear"]
  },
  "application/java-serialized-object": {
    "source": "apache",
    "compressible": false,
    "extensions": ["ser"]
  },
  "application/java-vm": {
    "source": "apache",
    "compressible": false,
    "extensions": ["class"]
  },
  "application/javascript": {
    "source": "apache",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["js"]
  },
  "application/jf2feed+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jose": {
    "source": "iana"
  },
  "application/jose+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jrd+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jscalendar+json": {
    "source": "iana",
    "compressible": true
  },
  "application/json": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["json", "map"]
  },
  "application/json-patch+json": {
    "source": "iana",
    "compressible": true
  },
  "application/json-seq": {
    "source": "iana"
  },
  "application/json5": {
    "extensions": ["json5"]
  },
  "application/jsonml+json": {
    "source": "apache",
    "compressible": true,
    "extensions": ["jsonml"]
  },
  "application/jwk+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jwk-set+json": {
    "source": "iana",
    "compressible": true
  },
  "application/jwt": {
    "source": "iana"
  },
  "application/kpml-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/kpml-response+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/ld+json": {
    "source": "iana",
    "compressible": true,
    "extensions": ["jsonld"]
  },
  "application/lgr+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["lgr"]
  },
  "application/link-format": {
    "source": "iana"
  },
  "application/linkset": {
    "source": "iana"
  },
  "application/linkset+json": {
    "source": "iana",
    "compressible": true
  },
  "application/load-control+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/logout+jwt": {
    "source": "iana"
  },
  "application/lost+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["lostxml"]
  },
  "application/lostsync+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/lpf+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/lxf": {
    "source": "iana"
  },
  "application/mac-binhex40": {
    "source": "iana",
    "extensions": ["hqx"]
  },
  "application/mac-compactpro": {
    "source": "apache",
    "extensions": ["cpt"]
  },
  "application/macwriteii": {
    "source": "iana"
  },
  "application/mads+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mads"]
  },
  "application/manifest+json": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["webmanifest"]
  },
  "application/marc": {
    "source": "iana",
    "extensions": ["mrc"]
  },
  "application/marcxml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mrcx"]
  },
  "application/mathematica": {
    "source": "iana",
    "extensions": ["ma", "nb", "mb"]
  },
  "application/mathml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mathml"]
  },
  "application/mathml-content+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mathml-presentation+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-associated-procedure-description+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-deregister+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-envelope+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-msk+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-msk-response+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-protection-description+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-reception-report+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-register+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-register-response+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-schedule+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbms-user-service-description+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mbox": {
    "source": "iana",
    "extensions": ["mbox"]
  },
  "application/media-policy-dataset+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mpf"]
  },
  "application/media_control+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mediaservercontrol+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mscml"]
  },
  "application/merge-patch+json": {
    "source": "iana",
    "compressible": true
  },
  "application/metalink+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["metalink"]
  },
  "application/metalink4+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["meta4"]
  },
  "application/mets+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mets"]
  },
  "application/mf4": {
    "source": "iana"
  },
  "application/mikey": {
    "source": "iana"
  },
  "application/mipc": {
    "source": "iana"
  },
  "application/missing-blocks+cbor-seq": {
    "source": "iana"
  },
  "application/mmt-aei+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["maei"]
  },
  "application/mmt-usd+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["musd"]
  },
  "application/mods+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mods"]
  },
  "application/moss-keys": {
    "source": "iana"
  },
  "application/moss-signature": {
    "source": "iana"
  },
  "application/mosskey-data": {
    "source": "iana"
  },
  "application/mosskey-request": {
    "source": "iana"
  },
  "application/mp21": {
    "source": "iana",
    "extensions": ["m21", "mp21"]
  },
  "application/mp4": {
    "source": "iana",
    "extensions": ["mp4", "mpg4", "mp4s", "m4p"]
  },
  "application/mpeg4-generic": {
    "source": "iana"
  },
  "application/mpeg4-iod": {
    "source": "iana"
  },
  "application/mpeg4-iod-xmt": {
    "source": "iana"
  },
  "application/mrb-consumer+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/mrb-publish+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/msc-ivr+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/msc-mixer+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/msix": {
    "compressible": false,
    "extensions": ["msix"]
  },
  "application/msixbundle": {
    "compressible": false,
    "extensions": ["msixbundle"]
  },
  "application/msword": {
    "source": "iana",
    "compressible": false,
    "extensions": ["doc", "dot"]
  },
  "application/mud+json": {
    "source": "iana",
    "compressible": true
  },
  "application/multipart-core": {
    "source": "iana"
  },
  "application/mxf": {
    "source": "iana",
    "extensions": ["mxf"]
  },
  "application/n-quads": {
    "source": "iana",
    "extensions": ["nq"]
  },
  "application/n-triples": {
    "source": "iana",
    "extensions": ["nt"]
  },
  "application/nasdata": {
    "source": "iana"
  },
  "application/news-checkgroups": {
    "source": "iana",
    "charset": "US-ASCII"
  },
  "application/news-groupinfo": {
    "source": "iana",
    "charset": "US-ASCII"
  },
  "application/news-transmission": {
    "source": "iana"
  },
  "application/nlsml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/node": {
    "source": "iana",
    "extensions": ["cjs"]
  },
  "application/nss": {
    "source": "iana"
  },
  "application/oauth-authz-req+jwt": {
    "source": "iana"
  },
  "application/oblivious-dns-message": {
    "source": "iana"
  },
  "application/ocsp-request": {
    "source": "iana"
  },
  "application/ocsp-response": {
    "source": "iana"
  },
  "application/octet-stream": {
    "source": "iana",
    "compressible": false,
    "extensions": [
      "bin",
      "dms",
      "lrf",
      "mar",
      "so",
      "dist",
      "distz",
      "pkg",
      "bpk",
      "dump",
      "elc",
      "deploy",
      "exe",
      "dll",
      "deb",
      "dmg",
      "iso",
      "img",
      "msi",
      "msp",
      "msm",
      "buffer"
    ]
  },
  "application/oda": {
    "source": "iana",
    "extensions": ["oda"]
  },
  "application/odm+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/odx": {
    "source": "iana"
  },
  "application/oebps-package+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["opf"]
  },
  "application/ogg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["ogx"]
  },
  "application/omdoc+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["omdoc"]
  },
  "application/onenote": {
    "source": "apache",
    "extensions": ["onetoc", "onetoc2", "onetmp", "onepkg"]
  },
  "application/opc-nodeset+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/oscore": {
    "source": "iana"
  },
  "application/oxps": {
    "source": "iana",
    "extensions": ["oxps"]
  },
  "application/p21": {
    "source": "iana"
  },
  "application/p21+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/p2p-overlay+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["relo"]
  },
  "application/parityfec": {
    "source": "iana"
  },
  "application/passport": {
    "source": "iana"
  },
  "application/patch-ops-error+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xer"]
  },
  "application/pdf": {
    "source": "iana",
    "compressible": false,
    "extensions": ["pdf"]
  },
  "application/pdx": {
    "source": "iana"
  },
  "application/pem-certificate-chain": {
    "source": "iana"
  },
  "application/pgp-encrypted": {
    "source": "iana",
    "compressible": false,
    "extensions": ["pgp"]
  },
  "application/pgp-keys": {
    "source": "iana",
    "extensions": ["asc"]
  },
  "application/pgp-signature": {
    "source": "iana",
    "extensions": ["sig", "asc"]
  },
  "application/pics-rules": {
    "source": "apache",
    "extensions": ["prf"]
  },
  "application/pidf+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/pidf-diff+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/pkcs10": {
    "source": "iana",
    "extensions": ["p10"]
  },
  "application/pkcs12": {
    "source": "iana"
  },
  "application/pkcs7-mime": {
    "source": "iana",
    "extensions": ["p7m", "p7c"]
  },
  "application/pkcs7-signature": {
    "source": "iana",
    "extensions": ["p7s"]
  },
  "application/pkcs8": {
    "source": "iana",
    "extensions": ["p8"]
  },
  "application/pkcs8-encrypted": {
    "source": "iana"
  },
  "application/pkix-attr-cert": {
    "source": "iana",
    "extensions": ["ac"]
  },
  "application/pkix-cert": {
    "source": "iana",
    "extensions": ["cer"]
  },
  "application/pkix-crl": {
    "source": "iana",
    "extensions": ["crl"]
  },
  "application/pkix-pkipath": {
    "source": "iana",
    "extensions": ["pkipath"]
  },
  "application/pkixcmp": {
    "source": "iana",
    "extensions": ["pki"]
  },
  "application/pls+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["pls"]
  },
  "application/poc-settings+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/postscript": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ai", "eps", "ps"]
  },
  "application/ppsp-tracker+json": {
    "source": "iana",
    "compressible": true
  },
  "application/problem+json": {
    "source": "iana",
    "compressible": true
  },
  "application/problem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/provenance+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["provx"]
  },
  "application/prs.alvestrand.titrax-sheet": {
    "source": "iana"
  },
  "application/prs.cww": {
    "source": "iana",
    "extensions": ["cww"]
  },
  "application/prs.cyn": {
    "source": "iana",
    "charset": "7-BIT"
  },
  "application/prs.hpub+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/prs.nprend": {
    "source": "iana"
  },
  "application/prs.plucker": {
    "source": "iana"
  },
  "application/prs.rdf-xml-crypt": {
    "source": "iana"
  },
  "application/prs.xsf+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xsf"]
  },
  "application/pskc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["pskcxml"]
  },
  "application/pvd+json": {
    "source": "iana",
    "compressible": true
  },
  "application/qsig": {
    "source": "iana"
  },
  "application/raml+yaml": {
    "compressible": true,
    "extensions": ["raml"]
  },
  "application/raptorfec": {
    "source": "iana"
  },
  "application/rdap+json": {
    "source": "iana",
    "compressible": true
  },
  "application/rdf+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rdf", "owl"]
  },
  "application/reginfo+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rif"]
  },
  "application/relax-ng-compact-syntax": {
    "source": "iana",
    "extensions": ["rnc"]
  },
  "application/remote-printing": {
    "source": "apache"
  },
  "application/reputon+json": {
    "source": "iana",
    "compressible": true
  },
  "application/resource-lists+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rl"]
  },
  "application/resource-lists-diff+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rld"]
  },
  "application/rfc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/riscos": {
    "source": "iana"
  },
  "application/rlmi+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/rls-services+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rs"]
  },
  "application/route-apd+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rapd"]
  },
  "application/route-s-tsid+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sls"]
  },
  "application/route-usd+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rusd"]
  },
  "application/rpki-checklist": {
    "source": "iana"
  },
  "application/rpki-ghostbusters": {
    "source": "iana",
    "extensions": ["gbr"]
  },
  "application/rpki-manifest": {
    "source": "iana",
    "extensions": ["mft"]
  },
  "application/rpki-publication": {
    "source": "iana"
  },
  "application/rpki-roa": {
    "source": "iana",
    "extensions": ["roa"]
  },
  "application/rpki-updown": {
    "source": "iana"
  },
  "application/rsd+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["rsd"]
  },
  "application/rss+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["rss"]
  },
  "application/rtf": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rtf"]
  },
  "application/rtploopback": {
    "source": "iana"
  },
  "application/rtx": {
    "source": "iana"
  },
  "application/samlassertion+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/samlmetadata+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/sarif+json": {
    "source": "iana",
    "compressible": true
  },
  "application/sarif-external-properties+json": {
    "source": "iana",
    "compressible": true
  },
  "application/sbe": {
    "source": "iana"
  },
  "application/sbml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sbml"]
  },
  "application/scaip+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/scim+json": {
    "source": "iana",
    "compressible": true
  },
  "application/scvp-cv-request": {
    "source": "iana",
    "extensions": ["scq"]
  },
  "application/scvp-cv-response": {
    "source": "iana",
    "extensions": ["scs"]
  },
  "application/scvp-vp-request": {
    "source": "iana",
    "extensions": ["spq"]
  },
  "application/scvp-vp-response": {
    "source": "iana",
    "extensions": ["spp"]
  },
  "application/sdp": {
    "source": "iana",
    "extensions": ["sdp"]
  },
  "application/secevent+jwt": {
    "source": "iana"
  },
  "application/senml+cbor": {
    "source": "iana"
  },
  "application/senml+json": {
    "source": "iana",
    "compressible": true
  },
  "application/senml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["senmlx"]
  },
  "application/senml-etch+cbor": {
    "source": "iana"
  },
  "application/senml-etch+json": {
    "source": "iana",
    "compressible": true
  },
  "application/senml-exi": {
    "source": "iana"
  },
  "application/sensml+cbor": {
    "source": "iana"
  },
  "application/sensml+json": {
    "source": "iana",
    "compressible": true
  },
  "application/sensml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sensmlx"]
  },
  "application/sensml-exi": {
    "source": "iana"
  },
  "application/sep+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/sep-exi": {
    "source": "iana"
  },
  "application/session-info": {
    "source": "iana"
  },
  "application/set-payment": {
    "source": "iana"
  },
  "application/set-payment-initiation": {
    "source": "iana",
    "extensions": ["setpay"]
  },
  "application/set-registration": {
    "source": "iana"
  },
  "application/set-registration-initiation": {
    "source": "iana",
    "extensions": ["setreg"]
  },
  "application/sgml": {
    "source": "iana"
  },
  "application/sgml-open-catalog": {
    "source": "iana"
  },
  "application/shf+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["shf"]
  },
  "application/sieve": {
    "source": "iana",
    "extensions": ["siv", "sieve"]
  },
  "application/simple-filter+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/simple-message-summary": {
    "source": "iana"
  },
  "application/simplesymbolcontainer": {
    "source": "iana"
  },
  "application/sipc": {
    "source": "iana"
  },
  "application/slate": {
    "source": "iana"
  },
  "application/smil": {
    "source": "apache"
  },
  "application/smil+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["smi", "smil"]
  },
  "application/smpte336m": {
    "source": "iana"
  },
  "application/soap+fastinfoset": {
    "source": "iana"
  },
  "application/soap+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/sparql-query": {
    "source": "iana",
    "extensions": ["rq"]
  },
  "application/sparql-results+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["srx"]
  },
  "application/spdx+json": {
    "source": "iana",
    "compressible": true
  },
  "application/spirits-event+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/sql": {
    "source": "iana",
    "extensions": ["sql"]
  },
  "application/srgs": {
    "source": "iana",
    "extensions": ["gram"]
  },
  "application/srgs+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["grxml"]
  },
  "application/sru+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sru"]
  },
  "application/ssdl+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["ssdl"]
  },
  "application/ssml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ssml"]
  },
  "application/stix+json": {
    "source": "iana",
    "compressible": true
  },
  "application/swid+cbor": {
    "source": "iana"
  },
  "application/swid+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["swidtag"]
  },
  "application/tamp-apex-update": {
    "source": "iana"
  },
  "application/tamp-apex-update-confirm": {
    "source": "iana"
  },
  "application/tamp-community-update": {
    "source": "iana"
  },
  "application/tamp-community-update-confirm": {
    "source": "iana"
  },
  "application/tamp-error": {
    "source": "iana"
  },
  "application/tamp-sequence-adjust": {
    "source": "iana"
  },
  "application/tamp-sequence-adjust-confirm": {
    "source": "iana"
  },
  "application/tamp-status-query": {
    "source": "iana"
  },
  "application/tamp-status-response": {
    "source": "iana"
  },
  "application/tamp-update": {
    "source": "iana"
  },
  "application/tamp-update-confirm": {
    "source": "iana"
  },
  "application/tar": {
    "compressible": true
  },
  "application/taxii+json": {
    "source": "iana",
    "compressible": true
  },
  "application/td+json": {
    "source": "iana",
    "compressible": true
  },
  "application/tei+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["tei", "teicorpus"]
  },
  "application/tetra_isi": {
    "source": "iana"
  },
  "application/thraud+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["tfi"]
  },
  "application/timestamp-query": {
    "source": "iana"
  },
  "application/timestamp-reply": {
    "source": "iana"
  },
  "application/timestamped-data": {
    "source": "iana",
    "extensions": ["tsd"]
  },
  "application/tlsrpt+gzip": {
    "source": "iana"
  },
  "application/tlsrpt+json": {
    "source": "iana",
    "compressible": true
  },
  "application/tm+json": {
    "source": "iana",
    "compressible": true
  },
  "application/tnauthlist": {
    "source": "iana"
  },
  "application/token-introspection+jwt": {
    "source": "iana"
  },
  "application/toml": {
    "compressible": true,
    "extensions": ["toml"]
  },
  "application/trickle-ice-sdpfrag": {
    "source": "iana"
  },
  "application/trig": {
    "source": "iana",
    "extensions": ["trig"]
  },
  "application/ttml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ttml"]
  },
  "application/tve-trigger": {
    "source": "iana"
  },
  "application/tzif": {
    "source": "iana"
  },
  "application/tzif-leap": {
    "source": "iana"
  },
  "application/ubjson": {
    "compressible": false,
    "extensions": ["ubj"]
  },
  "application/ulpfec": {
    "source": "iana"
  },
  "application/urc-grpsheet+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/urc-ressheet+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rsheet"]
  },
  "application/urc-targetdesc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["td"]
  },
  "application/urc-uisocketdesc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vcard+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vcard+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vemmi": {
    "source": "iana"
  },
  "application/vividence.scriptfile": {
    "source": "apache"
  },
  "application/vnd.1000minds.decision-model+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["1km"]
  },
  "application/vnd.3gpp-prose+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp-prose-pc3a+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp-prose-pc3ach+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp-prose-pc3ch+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp-prose-pc8+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp-v2x-local-service-information": {
    "source": "iana"
  },
  "application/vnd.3gpp.5gnas": {
    "source": "iana"
  },
  "application/vnd.3gpp.access-transfer-events+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.bsf+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.gmop+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.gtpc": {
    "source": "iana"
  },
  "application/vnd.3gpp.interworking-data": {
    "source": "iana"
  },
  "application/vnd.3gpp.lpp": {
    "source": "iana"
  },
  "application/vnd.3gpp.mc-signalling-ear": {
    "source": "iana"
  },
  "application/vnd.3gpp.mcdata-affiliation-command+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcdata-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcdata-msgstore-ctrl-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcdata-payload": {
    "source": "iana"
  },
  "application/vnd.3gpp.mcdata-regroup+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcdata-service-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcdata-signalling": {
    "source": "iana"
  },
  "application/vnd.3gpp.mcdata-ue-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcdata-user-profile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-affiliation-command+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-floor-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-location-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-service-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-signed+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-ue-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-ue-init-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcptt-user-profile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-location-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-service-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-transmission-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-ue-config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mcvideo-user-profile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.mid-call+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.ngap": {
    "source": "iana"
  },
  "application/vnd.3gpp.pfcp": {
    "source": "iana"
  },
  "application/vnd.3gpp.pic-bw-large": {
    "source": "iana",
    "extensions": ["plb"]
  },
  "application/vnd.3gpp.pic-bw-small": {
    "source": "iana",
    "extensions": ["psb"]
  },
  "application/vnd.3gpp.pic-bw-var": {
    "source": "iana",
    "extensions": ["pvb"]
  },
  "application/vnd.3gpp.s1ap": {
    "source": "iana"
  },
  "application/vnd.3gpp.seal-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.seal-location-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.sms": {
    "source": "iana"
  },
  "application/vnd.3gpp.sms+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.srvcc-ext+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.srvcc-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.state-and-event-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.ussd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp.vae-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp2.bcmcsinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.3gpp2.sms": {
    "source": "iana"
  },
  "application/vnd.3gpp2.tcap": {
    "source": "iana",
    "extensions": ["tcap"]
  },
  "application/vnd.3lightssoftware.imagescal": {
    "source": "iana"
  },
  "application/vnd.3m.post-it-notes": {
    "source": "iana",
    "extensions": ["pwn"]
  },
  "application/vnd.accpac.simply.aso": {
    "source": "iana",
    "extensions": ["aso"]
  },
  "application/vnd.accpac.simply.imp": {
    "source": "iana",
    "extensions": ["imp"]
  },
  "application/vnd.acucobol": {
    "source": "iana",
    "extensions": ["acu"]
  },
  "application/vnd.acucorp": {
    "source": "iana",
    "extensions": ["atc", "acutc"]
  },
  "application/vnd.adobe.air-application-installer-package+zip": {
    "source": "apache",
    "compressible": false,
    "extensions": ["air"]
  },
  "application/vnd.adobe.flash.movie": {
    "source": "iana"
  },
  "application/vnd.adobe.formscentral.fcdt": {
    "source": "iana",
    "extensions": ["fcdt"]
  },
  "application/vnd.adobe.fxp": {
    "source": "iana",
    "extensions": ["fxp", "fxpl"]
  },
  "application/vnd.adobe.partial-upload": {
    "source": "iana"
  },
  "application/vnd.adobe.xdp+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xdp"]
  },
  "application/vnd.adobe.xfdf": {
    "source": "apache",
    "extensions": ["xfdf"]
  },
  "application/vnd.aether.imp": {
    "source": "iana"
  },
  "application/vnd.afpc.afplinedata": {
    "source": "iana"
  },
  "application/vnd.afpc.afplinedata-pagedef": {
    "source": "iana"
  },
  "application/vnd.afpc.cmoca-cmresource": {
    "source": "iana"
  },
  "application/vnd.afpc.foca-charset": {
    "source": "iana"
  },
  "application/vnd.afpc.foca-codedfont": {
    "source": "iana"
  },
  "application/vnd.afpc.foca-codepage": {
    "source": "iana"
  },
  "application/vnd.afpc.modca": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-cmtable": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-formdef": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-mediummap": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-objectcontainer": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-overlay": {
    "source": "iana"
  },
  "application/vnd.afpc.modca-pagesegment": {
    "source": "iana"
  },
  "application/vnd.age": {
    "source": "iana",
    "extensions": ["age"]
  },
  "application/vnd.ah-barcode": {
    "source": "apache"
  },
  "application/vnd.ahead.space": {
    "source": "iana",
    "extensions": ["ahead"]
  },
  "application/vnd.airzip.filesecure.azf": {
    "source": "iana",
    "extensions": ["azf"]
  },
  "application/vnd.airzip.filesecure.azs": {
    "source": "iana",
    "extensions": ["azs"]
  },
  "application/vnd.amadeus+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.amazon.ebook": {
    "source": "apache",
    "extensions": ["azw"]
  },
  "application/vnd.amazon.mobi8-ebook": {
    "source": "iana"
  },
  "application/vnd.americandynamics.acc": {
    "source": "iana",
    "extensions": ["acc"]
  },
  "application/vnd.amiga.ami": {
    "source": "iana",
    "extensions": ["ami"]
  },
  "application/vnd.amundsen.maze+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.android.ota": {
    "source": "iana"
  },
  "application/vnd.android.package-archive": {
    "source": "apache",
    "compressible": false,
    "extensions": ["apk"]
  },
  "application/vnd.anki": {
    "source": "iana"
  },
  "application/vnd.anser-web-certificate-issue-initiation": {
    "source": "iana",
    "extensions": ["cii"]
  },
  "application/vnd.anser-web-funds-transfer-initiation": {
    "source": "apache",
    "extensions": ["fti"]
  },
  "application/vnd.antix.game-component": {
    "source": "iana",
    "extensions": ["atx"]
  },
  "application/vnd.apache.arrow.file": {
    "source": "iana"
  },
  "application/vnd.apache.arrow.stream": {
    "source": "iana"
  },
  "application/vnd.apache.thrift.binary": {
    "source": "iana"
  },
  "application/vnd.apache.thrift.compact": {
    "source": "iana"
  },
  "application/vnd.apache.thrift.json": {
    "source": "iana"
  },
  "application/vnd.apexlang": {
    "source": "iana"
  },
  "application/vnd.api+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.aplextor.warrp+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.apothekende.reservation+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.apple.installer+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mpkg"]
  },
  "application/vnd.apple.keynote": {
    "source": "iana",
    "extensions": ["key"]
  },
  "application/vnd.apple.mpegurl": {
    "source": "iana",
    "extensions": ["m3u8"]
  },
  "application/vnd.apple.numbers": {
    "source": "iana",
    "extensions": ["numbers"]
  },
  "application/vnd.apple.pages": {
    "source": "iana",
    "extensions": ["pages"]
  },
  "application/vnd.apple.pkpass": {
    "compressible": false,
    "extensions": ["pkpass"]
  },
  "application/vnd.arastra.swi": {
    "source": "apache"
  },
  "application/vnd.aristanetworks.swi": {
    "source": "iana",
    "extensions": ["swi"]
  },
  "application/vnd.artisan+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.artsquare": {
    "source": "iana"
  },
  "application/vnd.astraea-software.iota": {
    "source": "iana",
    "extensions": ["iota"]
  },
  "application/vnd.audiograph": {
    "source": "iana",
    "extensions": ["aep"]
  },
  "application/vnd.autopackage": {
    "source": "iana"
  },
  "application/vnd.avalon+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.avistar+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.balsamiq.bmml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["bmml"]
  },
  "application/vnd.balsamiq.bmpr": {
    "source": "iana"
  },
  "application/vnd.banana-accounting": {
    "source": "iana"
  },
  "application/vnd.bbf.usp.error": {
    "source": "iana"
  },
  "application/vnd.bbf.usp.msg": {
    "source": "iana"
  },
  "application/vnd.bbf.usp.msg+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.bekitzur-stech+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.belightsoft.lhzd+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.belightsoft.lhzl+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.bint.med-content": {
    "source": "iana"
  },
  "application/vnd.biopax.rdf+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.blink-idb-value-wrapper": {
    "source": "iana"
  },
  "application/vnd.blueice.multipass": {
    "source": "iana",
    "extensions": ["mpm"]
  },
  "application/vnd.bluetooth.ep.oob": {
    "source": "iana"
  },
  "application/vnd.bluetooth.le.oob": {
    "source": "iana"
  },
  "application/vnd.bmi": {
    "source": "iana",
    "extensions": ["bmi"]
  },
  "application/vnd.bpf": {
    "source": "iana"
  },
  "application/vnd.bpf3": {
    "source": "iana"
  },
  "application/vnd.businessobjects": {
    "source": "iana",
    "extensions": ["rep"]
  },
  "application/vnd.byu.uapi+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cab-jscript": {
    "source": "iana"
  },
  "application/vnd.canon-cpdl": {
    "source": "iana"
  },
  "application/vnd.canon-lips": {
    "source": "iana"
  },
  "application/vnd.capasystems-pg+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cendio.thinlinc.clientconf": {
    "source": "iana"
  },
  "application/vnd.century-systems.tcp_stream": {
    "source": "iana"
  },
  "application/vnd.chemdraw+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["cdxml"]
  },
  "application/vnd.chess-pgn": {
    "source": "iana"
  },
  "application/vnd.chipnuts.karaoke-mmd": {
    "source": "iana",
    "extensions": ["mmd"]
  },
  "application/vnd.ciedi": {
    "source": "iana"
  },
  "application/vnd.cinderella": {
    "source": "iana",
    "extensions": ["cdy"]
  },
  "application/vnd.cirpack.isdn-ext": {
    "source": "iana"
  },
  "application/vnd.citationstyles.style+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["csl"]
  },
  "application/vnd.claymore": {
    "source": "iana",
    "extensions": ["cla"]
  },
  "application/vnd.cloanto.rp9": {
    "source": "iana",
    "extensions": ["rp9"]
  },
  "application/vnd.clonk.c4group": {
    "source": "iana",
    "extensions": ["c4g", "c4d", "c4f", "c4p", "c4u"]
  },
  "application/vnd.cluetrust.cartomobile-config": {
    "source": "iana",
    "extensions": ["c11amc"]
  },
  "application/vnd.cluetrust.cartomobile-config-pkg": {
    "source": "iana",
    "extensions": ["c11amz"]
  },
  "application/vnd.cncf.helm.chart.content.v1.tar+gzip": {
    "source": "iana"
  },
  "application/vnd.cncf.helm.chart.provenance.v1.prov": {
    "source": "iana"
  },
  "application/vnd.coffeescript": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.document": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.document-template": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.presentation": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.presentation-template": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet": {
    "source": "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet-template": {
    "source": "iana"
  },
  "application/vnd.collection+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.collection.doc+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.collection.next+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.comicbook+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.comicbook-rar": {
    "source": "iana"
  },
  "application/vnd.commerce-battelle": {
    "source": "iana"
  },
  "application/vnd.commonspace": {
    "source": "iana",
    "extensions": ["csp"]
  },
  "application/vnd.contact.cmsg": {
    "source": "iana",
    "extensions": ["cdbcmsg"]
  },
  "application/vnd.coreos.ignition+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cosmocaller": {
    "source": "iana",
    "extensions": ["cmc"]
  },
  "application/vnd.crick.clicker": {
    "source": "iana",
    "extensions": ["clkx"]
  },
  "application/vnd.crick.clicker.keyboard": {
    "source": "iana",
    "extensions": ["clkk"]
  },
  "application/vnd.crick.clicker.palette": {
    "source": "iana",
    "extensions": ["clkp"]
  },
  "application/vnd.crick.clicker.template": {
    "source": "iana",
    "extensions": ["clkt"]
  },
  "application/vnd.crick.clicker.wordbank": {
    "source": "iana",
    "extensions": ["clkw"]
  },
  "application/vnd.criticaltools.wbs+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wbs"]
  },
  "application/vnd.cryptii.pipe+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.crypto-shade-file": {
    "source": "iana"
  },
  "application/vnd.cryptomator.encrypted": {
    "source": "iana"
  },
  "application/vnd.cryptomator.vault": {
    "source": "iana"
  },
  "application/vnd.ctc-posml": {
    "source": "iana",
    "extensions": ["pml"]
  },
  "application/vnd.ctct.ws+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cups-pdf": {
    "source": "iana"
  },
  "application/vnd.cups-postscript": {
    "source": "iana"
  },
  "application/vnd.cups-ppd": {
    "source": "iana",
    "extensions": ["ppd"]
  },
  "application/vnd.cups-raster": {
    "source": "iana"
  },
  "application/vnd.cups-raw": {
    "source": "iana"
  },
  "application/vnd.curl": {
    "source": "iana"
  },
  "application/vnd.curl.car": {
    "source": "apache",
    "extensions": ["car"]
  },
  "application/vnd.curl.pcurl": {
    "source": "apache",
    "extensions": ["pcurl"]
  },
  "application/vnd.cyan.dean.root+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cybank": {
    "source": "iana"
  },
  "application/vnd.cyclonedx+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.cyclonedx+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.d2l.coursepackage1p0+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.d3m-dataset": {
    "source": "iana"
  },
  "application/vnd.d3m-problem": {
    "source": "iana"
  },
  "application/vnd.dart": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dart"]
  },
  "application/vnd.data-vision.rdz": {
    "source": "iana",
    "extensions": ["rdz"]
  },
  "application/vnd.datalog": {
    "source": "iana"
  },
  "application/vnd.datapackage+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dataresource+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dbf": {
    "source": "iana",
    "extensions": ["dbf"]
  },
  "application/vnd.debian.binary-package": {
    "source": "iana"
  },
  "application/vnd.dece.data": {
    "source": "iana",
    "extensions": ["uvf", "uvvf", "uvd", "uvvd"]
  },
  "application/vnd.dece.ttml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["uvt", "uvvt"]
  },
  "application/vnd.dece.unspecified": {
    "source": "iana",
    "extensions": ["uvx", "uvvx"]
  },
  "application/vnd.dece.zip": {
    "source": "iana",
    "extensions": ["uvz", "uvvz"]
  },
  "application/vnd.denovo.fcselayout-link": {
    "source": "iana",
    "extensions": ["fe_launch"]
  },
  "application/vnd.desmume.movie": {
    "source": "iana"
  },
  "application/vnd.dir-bi.plate-dl-nosuffix": {
    "source": "iana"
  },
  "application/vnd.dm.delegation+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dna": {
    "source": "iana",
    "extensions": ["dna"]
  },
  "application/vnd.document+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dolby.mlp": {
    "source": "apache",
    "extensions": ["mlp"]
  },
  "application/vnd.dolby.mobile.1": {
    "source": "iana"
  },
  "application/vnd.dolby.mobile.2": {
    "source": "iana"
  },
  "application/vnd.doremir.scorecloud-binary-document": {
    "source": "iana"
  },
  "application/vnd.dpgraph": {
    "source": "iana",
    "extensions": ["dpg"]
  },
  "application/vnd.dreamfactory": {
    "source": "iana",
    "extensions": ["dfac"]
  },
  "application/vnd.drive+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ds-keypoint": {
    "source": "apache",
    "extensions": ["kpxx"]
  },
  "application/vnd.dtg.local": {
    "source": "iana"
  },
  "application/vnd.dtg.local.flash": {
    "source": "iana"
  },
  "application/vnd.dtg.local.html": {
    "source": "iana"
  },
  "application/vnd.dvb.ait": {
    "source": "iana",
    "extensions": ["ait"]
  },
  "application/vnd.dvb.dvbisl+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.dvbj": {
    "source": "iana"
  },
  "application/vnd.dvb.esgcontainer": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcdftnotifaccess": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcesgaccess": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcesgaccess2": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcesgpdd": {
    "source": "iana"
  },
  "application/vnd.dvb.ipdcroaming": {
    "source": "iana"
  },
  "application/vnd.dvb.iptv.alfec-base": {
    "source": "iana"
  },
  "application/vnd.dvb.iptv.alfec-enhancement": {
    "source": "iana"
  },
  "application/vnd.dvb.notif-aggregate-root+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-container+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-generic+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-ia-msglist+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-ia-registration-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-ia-registration-response+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.notif-init+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.dvb.pfr": {
    "source": "iana"
  },
  "application/vnd.dvb.service": {
    "source": "iana",
    "extensions": ["svc"]
  },
  "application/vnd.dxr": {
    "source": "iana"
  },
  "application/vnd.dynageo": {
    "source": "iana",
    "extensions": ["geo"]
  },
  "application/vnd.dzr": {
    "source": "iana"
  },
  "application/vnd.easykaraoke.cdgdownload": {
    "source": "iana"
  },
  "application/vnd.ecdis-update": {
    "source": "iana"
  },
  "application/vnd.ecip.rlp": {
    "source": "iana"
  },
  "application/vnd.eclipse.ditto+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ecowin.chart": {
    "source": "iana",
    "extensions": ["mag"]
  },
  "application/vnd.ecowin.filerequest": {
    "source": "iana"
  },
  "application/vnd.ecowin.fileupdate": {
    "source": "iana"
  },
  "application/vnd.ecowin.series": {
    "source": "iana"
  },
  "application/vnd.ecowin.seriesrequest": {
    "source": "iana"
  },
  "application/vnd.ecowin.seriesupdate": {
    "source": "iana"
  },
  "application/vnd.efi.img": {
    "source": "iana"
  },
  "application/vnd.efi.iso": {
    "source": "iana"
  },
  "application/vnd.eln+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.emclient.accessrequest+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.enliven": {
    "source": "iana",
    "extensions": ["nml"]
  },
  "application/vnd.enphase.envoy": {
    "source": "iana"
  },
  "application/vnd.eprints.data+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.epson.esf": {
    "source": "iana",
    "extensions": ["esf"]
  },
  "application/vnd.epson.msf": {
    "source": "iana",
    "extensions": ["msf"]
  },
  "application/vnd.epson.quickanime": {
    "source": "iana",
    "extensions": ["qam"]
  },
  "application/vnd.epson.salt": {
    "source": "iana",
    "extensions": ["slt"]
  },
  "application/vnd.epson.ssf": {
    "source": "iana",
    "extensions": ["ssf"]
  },
  "application/vnd.ericsson.quickcall": {
    "source": "iana"
  },
  "application/vnd.espass-espass+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.eszigno3+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["es3", "et3"]
  },
  "application/vnd.etsi.aoc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.asic-e+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.etsi.asic-s+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.etsi.cug+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvcommand+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvdiscovery+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvprofile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvsad-bc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvsad-cod+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvsad-npvr+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvservice+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvsync+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.iptvueprofile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.mcid+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.mheg5": {
    "source": "iana"
  },
  "application/vnd.etsi.overload-control-policy-dataset+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.pstn+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.sci+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.simservs+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.timestamp-token": {
    "source": "iana"
  },
  "application/vnd.etsi.tsl+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.etsi.tsl.der": {
    "source": "iana"
  },
  "application/vnd.eu.kasparian.car+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.eudora.data": {
    "source": "iana"
  },
  "application/vnd.evolv.ecig.profile": {
    "source": "iana"
  },
  "application/vnd.evolv.ecig.settings": {
    "source": "iana"
  },
  "application/vnd.evolv.ecig.theme": {
    "source": "iana"
  },
  "application/vnd.exstream-empower+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.exstream-package": {
    "source": "iana"
  },
  "application/vnd.ezpix-album": {
    "source": "iana",
    "extensions": ["ez2"]
  },
  "application/vnd.ezpix-package": {
    "source": "iana",
    "extensions": ["ez3"]
  },
  "application/vnd.f-secure.mobile": {
    "source": "iana"
  },
  "application/vnd.familysearch.gedcom+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.fastcopy-disk-image": {
    "source": "iana"
  },
  "application/vnd.fdf": {
    "source": "apache",
    "extensions": ["fdf"]
  },
  "application/vnd.fdsn.mseed": {
    "source": "iana",
    "extensions": ["mseed"]
  },
  "application/vnd.fdsn.seed": {
    "source": "iana",
    "extensions": ["seed", "dataless"]
  },
  "application/vnd.ffsns": {
    "source": "iana"
  },
  "application/vnd.ficlab.flb+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.filmit.zfc": {
    "source": "iana"
  },
  "application/vnd.fints": {
    "source": "iana"
  },
  "application/vnd.firemonkeys.cloudcell": {
    "source": "iana"
  },
  "application/vnd.flographit": {
    "source": "iana",
    "extensions": ["gph"]
  },
  "application/vnd.fluxtime.clip": {
    "source": "iana",
    "extensions": ["ftc"]
  },
  "application/vnd.font-fontforge-sfd": {
    "source": "iana"
  },
  "application/vnd.framemaker": {
    "source": "iana",
    "extensions": ["fm", "frame", "maker", "book"]
  },
  "application/vnd.frogans.fnc": {
    "source": "apache",
    "extensions": ["fnc"]
  },
  "application/vnd.frogans.ltf": {
    "source": "apache",
    "extensions": ["ltf"]
  },
  "application/vnd.fsc.weblaunch": {
    "source": "iana",
    "extensions": ["fsc"]
  },
  "application/vnd.fujifilm.fb.docuworks": {
    "source": "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.binder": {
    "source": "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.container": {
    "source": "iana"
  },
  "application/vnd.fujifilm.fb.jfi+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.fujitsu.oasys": {
    "source": "iana",
    "extensions": ["oas"]
  },
  "application/vnd.fujitsu.oasys2": {
    "source": "iana",
    "extensions": ["oa2"]
  },
  "application/vnd.fujitsu.oasys3": {
    "source": "iana",
    "extensions": ["oa3"]
  },
  "application/vnd.fujitsu.oasysgp": {
    "source": "iana",
    "extensions": ["fg5"]
  },
  "application/vnd.fujitsu.oasysprs": {
    "source": "iana",
    "extensions": ["bh2"]
  },
  "application/vnd.fujixerox.art-ex": {
    "source": "iana"
  },
  "application/vnd.fujixerox.art4": {
    "source": "iana"
  },
  "application/vnd.fujixerox.ddd": {
    "source": "iana",
    "extensions": ["ddd"]
  },
  "application/vnd.fujixerox.docuworks": {
    "source": "iana",
    "extensions": ["xdw"]
  },
  "application/vnd.fujixerox.docuworks.binder": {
    "source": "iana",
    "extensions": ["xbd"]
  },
  "application/vnd.fujixerox.docuworks.container": {
    "source": "iana"
  },
  "application/vnd.fujixerox.hbpl": {
    "source": "iana"
  },
  "application/vnd.fut-misnet": {
    "source": "iana"
  },
  "application/vnd.futoin+cbor": {
    "source": "iana"
  },
  "application/vnd.futoin+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.fuzzysheet": {
    "source": "iana",
    "extensions": ["fzs"]
  },
  "application/vnd.genomatix.tuxedo": {
    "source": "iana",
    "extensions": ["txd"]
  },
  "application/vnd.genozip": {
    "source": "iana"
  },
  "application/vnd.gentics.grd+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.gentoo.catmetadata+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.gentoo.ebuild": {
    "source": "iana"
  },
  "application/vnd.gentoo.eclass": {
    "source": "iana"
  },
  "application/vnd.gentoo.gpkg": {
    "source": "iana"
  },
  "application/vnd.gentoo.manifest": {
    "source": "iana"
  },
  "application/vnd.gentoo.pkgmetadata+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.gentoo.xpak": {
    "source": "iana"
  },
  "application/vnd.geo+json": {
    "source": "apache",
    "compressible": true
  },
  "application/vnd.geocube+xml": {
    "source": "apache",
    "compressible": true
  },
  "application/vnd.geogebra.file": {
    "source": "iana",
    "extensions": ["ggb"]
  },
  "application/vnd.geogebra.slides": {
    "source": "iana"
  },
  "application/vnd.geogebra.tool": {
    "source": "iana",
    "extensions": ["ggt"]
  },
  "application/vnd.geometry-explorer": {
    "source": "iana",
    "extensions": ["gex", "gre"]
  },
  "application/vnd.geonext": {
    "source": "iana",
    "extensions": ["gxt"]
  },
  "application/vnd.geoplan": {
    "source": "iana",
    "extensions": ["g2w"]
  },
  "application/vnd.geospace": {
    "source": "iana",
    "extensions": ["g3w"]
  },
  "application/vnd.gerber": {
    "source": "iana"
  },
  "application/vnd.globalplatform.card-content-mgt": {
    "source": "iana"
  },
  "application/vnd.globalplatform.card-content-mgt-response": {
    "source": "iana"
  },
  "application/vnd.gmx": {
    "source": "iana",
    "extensions": ["gmx"]
  },
  "application/vnd.gnu.taler.exchange+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.gnu.taler.merchant+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.google-apps.document": {
    "compressible": false,
    "extensions": ["gdoc"]
  },
  "application/vnd.google-apps.presentation": {
    "compressible": false,
    "extensions": ["gslides"]
  },
  "application/vnd.google-apps.spreadsheet": {
    "compressible": false,
    "extensions": ["gsheet"]
  },
  "application/vnd.google-earth.kml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["kml"]
  },
  "application/vnd.google-earth.kmz": {
    "source": "iana",
    "compressible": false,
    "extensions": ["kmz"]
  },
  "application/vnd.gov.sk.e-form+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.gov.sk.e-form+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.gov.sk.xmldatacontainer+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.gpxsee.map+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.grafeq": {
    "source": "iana",
    "extensions": ["gqf", "gqs"]
  },
  "application/vnd.gridmp": {
    "source": "iana"
  },
  "application/vnd.groove-account": {
    "source": "iana",
    "extensions": ["gac"]
  },
  "application/vnd.groove-help": {
    "source": "iana",
    "extensions": ["ghf"]
  },
  "application/vnd.groove-identity-message": {
    "source": "iana",
    "extensions": ["gim"]
  },
  "application/vnd.groove-injector": {
    "source": "iana",
    "extensions": ["grv"]
  },
  "application/vnd.groove-tool-message": {
    "source": "iana",
    "extensions": ["gtm"]
  },
  "application/vnd.groove-tool-template": {
    "source": "iana",
    "extensions": ["tpl"]
  },
  "application/vnd.groove-vcard": {
    "source": "iana",
    "extensions": ["vcg"]
  },
  "application/vnd.hal+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hal+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["hal"]
  },
  "application/vnd.handheld-entertainment+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["zmm"]
  },
  "application/vnd.hbci": {
    "source": "iana",
    "extensions": ["hbci"]
  },
  "application/vnd.hc+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hcl-bireports": {
    "source": "iana"
  },
  "application/vnd.hdt": {
    "source": "iana"
  },
  "application/vnd.heroku+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hhe.lesson-player": {
    "source": "iana",
    "extensions": ["les"]
  },
  "application/vnd.hp-hpgl": {
    "source": "iana",
    "extensions": ["hpgl"]
  },
  "application/vnd.hp-hpid": {
    "source": "iana",
    "extensions": ["hpid"]
  },
  "application/vnd.hp-hps": {
    "source": "iana",
    "extensions": ["hps"]
  },
  "application/vnd.hp-jlyt": {
    "source": "iana",
    "extensions": ["jlt"]
  },
  "application/vnd.hp-pcl": {
    "source": "iana",
    "extensions": ["pcl"]
  },
  "application/vnd.hp-pclxl": {
    "source": "iana",
    "extensions": ["pclxl"]
  },
  "application/vnd.hsl": {
    "source": "iana"
  },
  "application/vnd.httphone": {
    "source": "iana"
  },
  "application/vnd.hydrostatix.sof-data": {
    "source": "iana",
    "extensions": ["sfd-hdstx"]
  },
  "application/vnd.hyper+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hyper-item+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hyperdrive+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.hzn-3d-crossword": {
    "source": "iana"
  },
  "application/vnd.ibm.afplinedata": {
    "source": "apache"
  },
  "application/vnd.ibm.electronic-media": {
    "source": "iana"
  },
  "application/vnd.ibm.minipay": {
    "source": "iana",
    "extensions": ["mpy"]
  },
  "application/vnd.ibm.modcap": {
    "source": "apache",
    "extensions": ["afp", "listafp", "list3820"]
  },
  "application/vnd.ibm.rights-management": {
    "source": "iana",
    "extensions": ["irm"]
  },
  "application/vnd.ibm.secure-container": {
    "source": "iana",
    "extensions": ["sc"]
  },
  "application/vnd.iccprofile": {
    "source": "iana",
    "extensions": ["icc", "icm"]
  },
  "application/vnd.ieee.1905": {
    "source": "iana"
  },
  "application/vnd.igloader": {
    "source": "iana",
    "extensions": ["igl"]
  },
  "application/vnd.imagemeter.folder+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.imagemeter.image+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.immervision-ivp": {
    "source": "iana",
    "extensions": ["ivp"]
  },
  "application/vnd.immervision-ivu": {
    "source": "iana",
    "extensions": ["ivu"]
  },
  "application/vnd.ims.imsccv1p1": {
    "source": "iana"
  },
  "application/vnd.ims.imsccv1p2": {
    "source": "iana"
  },
  "application/vnd.ims.imsccv1p3": {
    "source": "iana"
  },
  "application/vnd.ims.lis.v2.result+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolproxy+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolproxy.id+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolsettings+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ims.lti.v2.toolsettings.simple+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.informedcontrol.rms+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.informix-visionary": {
    "source": "apache"
  },
  "application/vnd.infotech.project": {
    "source": "iana"
  },
  "application/vnd.infotech.project+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.innopath.wamp.notification": {
    "source": "iana"
  },
  "application/vnd.insors.igm": {
    "source": "iana",
    "extensions": ["igm"]
  },
  "application/vnd.intercon.formnet": {
    "source": "iana",
    "extensions": ["xpw", "xpx"]
  },
  "application/vnd.intergeo": {
    "source": "iana",
    "extensions": ["i2g"]
  },
  "application/vnd.intertrust.digibox": {
    "source": "iana"
  },
  "application/vnd.intertrust.nncp": {
    "source": "iana"
  },
  "application/vnd.intu.qbo": {
    "source": "iana",
    "extensions": ["qbo"]
  },
  "application/vnd.intu.qfx": {
    "source": "iana",
    "extensions": ["qfx"]
  },
  "application/vnd.ipld.car": {
    "source": "iana"
  },
  "application/vnd.ipld.dag-cbor": {
    "source": "iana"
  },
  "application/vnd.ipld.dag-json": {
    "source": "iana"
  },
  "application/vnd.ipld.raw": {
    "source": "iana"
  },
  "application/vnd.iptc.g2.catalogitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.conceptitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.knowledgeitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.newsitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.newsmessage+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.packageitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.iptc.g2.planningitem+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ipunplugged.rcprofile": {
    "source": "iana",
    "extensions": ["rcprofile"]
  },
  "application/vnd.irepository.package+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["irp"]
  },
  "application/vnd.is-xpr": {
    "source": "iana",
    "extensions": ["xpr"]
  },
  "application/vnd.isac.fcs": {
    "source": "iana",
    "extensions": ["fcs"]
  },
  "application/vnd.iso11783-10+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.jam": {
    "source": "iana",
    "extensions": ["jam"]
  },
  "application/vnd.japannet-directory-service": {
    "source": "iana"
  },
  "application/vnd.japannet-jpnstore-wakeup": {
    "source": "iana"
  },
  "application/vnd.japannet-payment-wakeup": {
    "source": "iana"
  },
  "application/vnd.japannet-registration": {
    "source": "iana"
  },
  "application/vnd.japannet-registration-wakeup": {
    "source": "iana"
  },
  "application/vnd.japannet-setstore-wakeup": {
    "source": "iana"
  },
  "application/vnd.japannet-verification": {
    "source": "iana"
  },
  "application/vnd.japannet-verification-wakeup": {
    "source": "iana"
  },
  "application/vnd.jcp.javame.midlet-rms": {
    "source": "iana",
    "extensions": ["rms"]
  },
  "application/vnd.jisp": {
    "source": "iana",
    "extensions": ["jisp"]
  },
  "application/vnd.joost.joda-archive": {
    "source": "iana",
    "extensions": ["joda"]
  },
  "application/vnd.jsk.isdn-ngn": {
    "source": "iana"
  },
  "application/vnd.kahootz": {
    "source": "iana",
    "extensions": ["ktz", "ktr"]
  },
  "application/vnd.kde.karbon": {
    "source": "iana",
    "extensions": ["karbon"]
  },
  "application/vnd.kde.kchart": {
    "source": "iana",
    "extensions": ["chrt"]
  },
  "application/vnd.kde.kformula": {
    "source": "iana",
    "extensions": ["kfo"]
  },
  "application/vnd.kde.kivio": {
    "source": "iana",
    "extensions": ["flw"]
  },
  "application/vnd.kde.kontour": {
    "source": "iana",
    "extensions": ["kon"]
  },
  "application/vnd.kde.kpresenter": {
    "source": "iana",
    "extensions": ["kpr", "kpt"]
  },
  "application/vnd.kde.kspread": {
    "source": "iana",
    "extensions": ["ksp"]
  },
  "application/vnd.kde.kword": {
    "source": "iana",
    "extensions": ["kwd", "kwt"]
  },
  "application/vnd.kenameaapp": {
    "source": "iana",
    "extensions": ["htke"]
  },
  "application/vnd.kidspiration": {
    "source": "iana",
    "extensions": ["kia"]
  },
  "application/vnd.kinar": {
    "source": "iana",
    "extensions": ["kne", "knp"]
  },
  "application/vnd.koan": {
    "source": "iana",
    "extensions": ["skp", "skd", "skt", "skm"]
  },
  "application/vnd.kodak-descriptor": {
    "source": "iana",
    "extensions": ["sse"]
  },
  "application/vnd.las": {
    "source": "iana"
  },
  "application/vnd.las.las+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.las.las+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["lasxml"]
  },
  "application/vnd.laszip": {
    "source": "iana"
  },
  "application/vnd.leap+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.liberty-request+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.llamagraphics.life-balance.desktop": {
    "source": "iana",
    "extensions": ["lbd"]
  },
  "application/vnd.llamagraphics.life-balance.exchange+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["lbe"]
  },
  "application/vnd.logipipe.circuit+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.loom": {
    "source": "iana"
  },
  "application/vnd.lotus-1-2-3": {
    "source": "iana",
    "extensions": ["123"]
  },
  "application/vnd.lotus-approach": {
    "source": "iana",
    "extensions": ["apr"]
  },
  "application/vnd.lotus-freelance": {
    "source": "iana",
    "extensions": ["pre"]
  },
  "application/vnd.lotus-notes": {
    "source": "iana",
    "extensions": ["nsf"]
  },
  "application/vnd.lotus-organizer": {
    "source": "iana",
    "extensions": ["org"]
  },
  "application/vnd.lotus-screencam": {
    "source": "iana",
    "extensions": ["scm"]
  },
  "application/vnd.lotus-wordpro": {
    "source": "iana",
    "extensions": ["lwp"]
  },
  "application/vnd.macports.portpkg": {
    "source": "iana",
    "extensions": ["portpkg"]
  },
  "application/vnd.mapbox-vector-tile": {
    "source": "iana",
    "extensions": ["mvt"]
  },
  "application/vnd.marlin.drm.actiontoken+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.marlin.drm.conftoken+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.marlin.drm.license+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.marlin.drm.mdcf": {
    "source": "iana"
  },
  "application/vnd.mason+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.maxar.archive.3tz+zip": {
    "source": "iana",
    "compressible": false
  },
  "application/vnd.maxmind.maxmind-db": {
    "source": "iana"
  },
  "application/vnd.mcd": {
    "source": "iana",
    "extensions": ["mcd"]
  },
  "application/vnd.medcalcdata": {
    "source": "iana",
    "extensions": ["mc1"]
  },
  "application/vnd.mediastation.cdkey": {
    "source": "iana",
    "extensions": ["cdkey"]
  },
  "application/vnd.medicalholodeck.recordxr": {
    "source": "iana"
  },
  "application/vnd.meridian-slingshot": {
    "source": "iana"
  },
  "application/vnd.mfer": {
    "source": "iana",
    "extensions": ["mwf"]
  },
  "application/vnd.mfmp": {
    "source": "iana",
    "extensions": ["mfm"]
  },
  "application/vnd.micro+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.micrografx.flo": {
    "source": "iana",
    "extensions": ["flo"]
  },
  "application/vnd.micrografx.igx": {
    "source": "iana",
    "extensions": ["igx"]
  },
  "application/vnd.microsoft.portable-executable": {
    "source": "iana"
  },
  "application/vnd.microsoft.windows.thumbnail-cache": {
    "source": "iana"
  },
  "application/vnd.miele+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.mif": {
    "source": "iana",
    "extensions": ["mif"]
  },
  "application/vnd.minisoft-hp3000-save": {
    "source": "iana"
  },
  "application/vnd.mitsubishi.misty-guard.trustweb": {
    "source": "iana"
  },
  "application/vnd.mobius.daf": {
    "source": "iana",
    "extensions": ["daf"]
  },
  "application/vnd.mobius.dis": {
    "source": "iana",
    "extensions": ["dis"]
  },
  "application/vnd.mobius.mbk": {
    "source": "iana",
    "extensions": ["mbk"]
  },
  "application/vnd.mobius.mqy": {
    "source": "iana",
    "extensions": ["mqy"]
  },
  "application/vnd.mobius.msl": {
    "source": "iana",
    "extensions": ["msl"]
  },
  "application/vnd.mobius.plc": {
    "source": "iana",
    "extensions": ["plc"]
  },
  "application/vnd.mobius.txf": {
    "source": "iana",
    "extensions": ["txf"]
  },
  "application/vnd.mophun.application": {
    "source": "iana",
    "extensions": ["mpn"]
  },
  "application/vnd.mophun.certificate": {
    "source": "iana",
    "extensions": ["mpc"]
  },
  "application/vnd.motorola.flexsuite": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.adsi": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.fis": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.gotap": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.kmr": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.ttc": {
    "source": "iana"
  },
  "application/vnd.motorola.flexsuite.wem": {
    "source": "iana"
  },
  "application/vnd.motorola.iprm": {
    "source": "iana"
  },
  "application/vnd.mozilla.xul+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xul"]
  },
  "application/vnd.ms-3mfdocument": {
    "source": "iana"
  },
  "application/vnd.ms-artgalry": {
    "source": "iana",
    "extensions": ["cil"]
  },
  "application/vnd.ms-asf": {
    "source": "iana"
  },
  "application/vnd.ms-cab-compressed": {
    "source": "iana",
    "extensions": ["cab"]
  },
  "application/vnd.ms-color.iccprofile": {
    "source": "apache"
  },
  "application/vnd.ms-excel": {
    "source": "iana",
    "compressible": false,
    "extensions": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"]
  },
  "application/vnd.ms-excel.addin.macroenabled.12": {
    "source": "iana",
    "extensions": ["xlam"]
  },
  "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
    "source": "iana",
    "extensions": ["xlsb"]
  },
  "application/vnd.ms-excel.sheet.macroenabled.12": {
    "source": "iana",
    "extensions": ["xlsm"]
  },
  "application/vnd.ms-excel.template.macroenabled.12": {
    "source": "iana",
    "extensions": ["xltm"]
  },
  "application/vnd.ms-fontobject": {
    "source": "iana",
    "compressible": true,
    "extensions": ["eot"]
  },
  "application/vnd.ms-htmlhelp": {
    "source": "iana",
    "extensions": ["chm"]
  },
  "application/vnd.ms-ims": {
    "source": "iana",
    "extensions": ["ims"]
  },
  "application/vnd.ms-lrm": {
    "source": "iana",
    "extensions": ["lrm"]
  },
  "application/vnd.ms-office.activex+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ms-officetheme": {
    "source": "iana",
    "extensions": ["thmx"]
  },
  "application/vnd.ms-opentype": {
    "source": "apache",
    "compressible": true
  },
  "application/vnd.ms-outlook": {
    "compressible": false,
    "extensions": ["msg"]
  },
  "application/vnd.ms-package.obfuscated-opentype": {
    "source": "apache"
  },
  "application/vnd.ms-pki.seccat": {
    "source": "apache",
    "extensions": ["cat"]
  },
  "application/vnd.ms-pki.stl": {
    "source": "apache",
    "extensions": ["stl"]
  },
  "application/vnd.ms-playready.initiator+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ms-powerpoint": {
    "source": "iana",
    "compressible": false,
    "extensions": ["ppt", "pps", "pot"]
  },
  "application/vnd.ms-powerpoint.addin.macroenabled.12": {
    "source": "iana",
    "extensions": ["ppam"]
  },
  "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
    "source": "iana",
    "extensions": ["pptm"]
  },
  "application/vnd.ms-powerpoint.slide.macroenabled.12": {
    "source": "iana",
    "extensions": ["sldm"]
  },
  "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
    "source": "iana",
    "extensions": ["ppsm"]
  },
  "application/vnd.ms-powerpoint.template.macroenabled.12": {
    "source": "iana",
    "extensions": ["potm"]
  },
  "application/vnd.ms-printdevicecapabilities+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ms-printing.printticket+xml": {
    "source": "apache",
    "compressible": true
  },
  "application/vnd.ms-printschematicket+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ms-project": {
    "source": "iana",
    "extensions": ["mpp", "mpt"]
  },
  "application/vnd.ms-tnef": {
    "source": "iana"
  },
  "application/vnd.ms-windows.devicepairing": {
    "source": "iana"
  },
  "application/vnd.ms-windows.nwprinting.oob": {
    "source": "iana"
  },
  "application/vnd.ms-windows.printerpairing": {
    "source": "iana"
  },
  "application/vnd.ms-windows.wsd.oob": {
    "source": "iana"
  },
  "application/vnd.ms-wmdrm.lic-chlg-req": {
    "source": "iana"
  },
  "application/vnd.ms-wmdrm.lic-resp": {
    "source": "iana"
  },
  "application/vnd.ms-wmdrm.meter-chlg-req": {
    "source": "iana"
  },
  "application/vnd.ms-wmdrm.meter-resp": {
    "source": "iana"
  },
  "application/vnd.ms-word.document.macroenabled.12": {
    "source": "iana",
    "extensions": ["docm"]
  },
  "application/vnd.ms-word.template.macroenabled.12": {
    "source": "iana",
    "extensions": ["dotm"]
  },
  "application/vnd.ms-works": {
    "source": "iana",
    "extensions": ["wps", "wks", "wcm", "wdb"]
  },
  "application/vnd.ms-wpl": {
    "source": "iana",
    "extensions": ["wpl"]
  },
  "application/vnd.ms-xpsdocument": {
    "source": "iana",
    "compressible": false,
    "extensions": ["xps"]
  },
  "application/vnd.msa-disk-image": {
    "source": "iana"
  },
  "application/vnd.mseq": {
    "source": "iana",
    "extensions": ["mseq"]
  },
  "application/vnd.msign": {
    "source": "iana"
  },
  "application/vnd.multiad.creator": {
    "source": "iana"
  },
  "application/vnd.multiad.creator.cif": {
    "source": "iana"
  },
  "application/vnd.music-niff": {
    "source": "iana"
  },
  "application/vnd.musician": {
    "source": "iana",
    "extensions": ["mus"]
  },
  "application/vnd.muvee.style": {
    "source": "iana",
    "extensions": ["msty"]
  },
  "application/vnd.mynfc": {
    "source": "iana",
    "extensions": ["taglet"]
  },
  "application/vnd.nacamar.ybrid+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.ncd.control": {
    "source": "iana"
  },
  "application/vnd.ncd.reference": {
    "source": "iana"
  },
  "application/vnd.nearst.inv+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nebumind.line": {
    "source": "iana"
  },
  "application/vnd.nervana": {
    "source": "iana"
  },
  "application/vnd.netfpx": {
    "source": "iana"
  },
  "application/vnd.neurolanguage.nlu": {
    "source": "iana",
    "extensions": ["nlu"]
  },
  "application/vnd.nimn": {
    "source": "iana"
  },
  "application/vnd.nintendo.nitro.rom": {
    "source": "iana"
  },
  "application/vnd.nintendo.snes.rom": {
    "source": "iana"
  },
  "application/vnd.nitf": {
    "source": "iana",
    "extensions": ["ntf", "nitf"]
  },
  "application/vnd.noblenet-directory": {
    "source": "iana",
    "extensions": ["nnd"]
  },
  "application/vnd.noblenet-sealer": {
    "source": "iana",
    "extensions": ["nns"]
  },
  "application/vnd.noblenet-web": {
    "source": "iana",
    "extensions": ["nnw"]
  },
  "application/vnd.nokia.catalogs": {
    "source": "iana"
  },
  "application/vnd.nokia.conml+wbxml": {
    "source": "iana"
  },
  "application/vnd.nokia.conml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.iptv.config+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.isds-radio-presets": {
    "source": "iana"
  },
  "application/vnd.nokia.landmark+wbxml": {
    "source": "iana"
  },
  "application/vnd.nokia.landmark+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.landmarkcollection+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.n-gage.ac+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ac"]
  },
  "application/vnd.nokia.n-gage.data": {
    "source": "iana",
    "extensions": ["ngdat"]
  },
  "application/vnd.nokia.n-gage.symbian.install": {
    "source": "apache",
    "extensions": ["n-gage"]
  },
  "application/vnd.nokia.ncd": {
    "source": "iana"
  },
  "application/vnd.nokia.pcd+wbxml": {
    "source": "iana"
  },
  "application/vnd.nokia.pcd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.nokia.radio-preset": {
    "source": "iana",
    "extensions": ["rpst"]
  },
  "application/vnd.nokia.radio-presets": {
    "source": "iana",
    "extensions": ["rpss"]
  },
  "application/vnd.novadigm.edm": {
    "source": "iana",
    "extensions": ["edm"]
  },
  "application/vnd.novadigm.edx": {
    "source": "iana",
    "extensions": ["edx"]
  },
  "application/vnd.novadigm.ext": {
    "source": "iana",
    "extensions": ["ext"]
  },
  "application/vnd.ntt-local.content-share": {
    "source": "iana"
  },
  "application/vnd.ntt-local.file-transfer": {
    "source": "iana"
  },
  "application/vnd.ntt-local.ogw_remote-access": {
    "source": "iana"
  },
  "application/vnd.ntt-local.sip-ta_remote": {
    "source": "iana"
  },
  "application/vnd.ntt-local.sip-ta_tcp_stream": {
    "source": "iana"
  },
  "application/vnd.oasis.opendocument.base": {
    "source": "iana"
  },
  "application/vnd.oasis.opendocument.chart": {
    "source": "iana",
    "extensions": ["odc"]
  },
  "application/vnd.oasis.opendocument.chart-template": {
    "source": "iana",
    "extensions": ["otc"]
  },
  "application/vnd.oasis.opendocument.database": {
    "source": "apache",
    "extensions": ["odb"]
  },
  "application/vnd.oasis.opendocument.formula": {
    "source": "iana",
    "extensions": ["odf"]
  },
  "application/vnd.oasis.opendocument.formula-template": {
    "source": "iana",
    "extensions": ["odft"]
  },
  "application/vnd.oasis.opendocument.graphics": {
    "source": "iana",
    "compressible": false,
    "extensions": ["odg"]
  },
  "application/vnd.oasis.opendocument.graphics-template": {
    "source": "iana",
    "extensions": ["otg"]
  },
  "application/vnd.oasis.opendocument.image": {
    "source": "iana",
    "extensions": ["odi"]
  },
  "application/vnd.oasis.opendocument.image-template": {
    "source": "iana",
    "extensions": ["oti"]
  },
  "application/vnd.oasis.opendocument.presentation": {
    "source": "iana",
    "compressible": false,
    "extensions": ["odp"]
  },
  "application/vnd.oasis.opendocument.presentation-template": {
    "source": "iana",
    "extensions": ["otp"]
  },
  "application/vnd.oasis.opendocument.spreadsheet": {
    "source": "iana",
    "compressible": false,
    "extensions": ["ods"]
  },
  "application/vnd.oasis.opendocument.spreadsheet-template": {
    "source": "iana",
    "extensions": ["ots"]
  },
  "application/vnd.oasis.opendocument.text": {
    "source": "iana",
    "compressible": false,
    "extensions": ["odt"]
  },
  "application/vnd.oasis.opendocument.text-master": {
    "source": "iana",
    "extensions": ["odm"]
  },
  "application/vnd.oasis.opendocument.text-template": {
    "source": "iana",
    "extensions": ["ott"]
  },
  "application/vnd.oasis.opendocument.text-web": {
    "source": "iana",
    "extensions": ["oth"]
  },
  "application/vnd.obn": {
    "source": "iana"
  },
  "application/vnd.ocf+cbor": {
    "source": "iana"
  },
  "application/vnd.oci.image.manifest.v1+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oftn.l10n+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.contentaccessdownload+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.contentaccessstreaming+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.cspg-hexbinary": {
    "source": "iana"
  },
  "application/vnd.oipf.dae.svg+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.dae.xhtml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.mippvcontrolmessage+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.pae.gem": {
    "source": "iana"
  },
  "application/vnd.oipf.spdiscovery+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.spdlist+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.ueprofile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oipf.userprofile+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.olpc-sugar": {
    "source": "iana",
    "extensions": ["xo"]
  },
  "application/vnd.oma-scws-config": {
    "source": "iana"
  },
  "application/vnd.oma-scws-http-request": {
    "source": "iana"
  },
  "application/vnd.oma-scws-http-response": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.drm-trigger+xml": {
    "source": "apache",
    "compressible": true
  },
  "application/vnd.oma.bcast.imd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.ltkm": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.notification+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.provisioningtrigger": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.sgboot": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.sgdd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.sgdu": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.simple-symbol-container": {
    "source": "iana"
  },
  "application/vnd.oma.bcast.smartcard-trigger+xml": {
    "source": "apache",
    "compressible": true
  },
  "application/vnd.oma.bcast.sprov+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.bcast.stkm": {
    "source": "iana"
  },
  "application/vnd.oma.cab-address-book+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.cab-feature-handler+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.cab-pcc+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.cab-subs-invite+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.cab-user-prefs+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.dcd": {
    "source": "iana"
  },
  "application/vnd.oma.dcdc": {
    "source": "iana"
  },
  "application/vnd.oma.dd2+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dd2"]
  },
  "application/vnd.oma.drm.risd+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.group-usage-list+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.lwm2m+cbor": {
    "source": "iana"
  },
  "application/vnd.oma.lwm2m+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.lwm2m+tlv": {
    "source": "iana"
  },
  "application/vnd.oma.pal+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.detailed-progress-report+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.final-report+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.groups+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.invocation-descriptor+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.poc.optimized-progress-report+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.push": {
    "source": "iana"
  },
  "application/vnd.oma.scidm.messages+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oma.xcap-directory+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.omads-email+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/vnd.omads-file+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/vnd.omads-folder+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/vnd.omaloc-supl-init": {
    "source": "iana"
  },
  "application/vnd.onepager": {
    "source": "iana"
  },
  "application/vnd.onepagertamp": {
    "source": "iana"
  },
  "application/vnd.onepagertamx": {
    "source": "iana"
  },
  "application/vnd.onepagertat": {
    "source": "iana"
  },
  "application/vnd.onepagertatp": {
    "source": "iana"
  },
  "application/vnd.onepagertatx": {
    "source": "iana"
  },
  "application/vnd.onvif.metadata": {
    "source": "iana"
  },
  "application/vnd.openblox.game+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["obgx"]
  },
  "application/vnd.openblox.game-binary": {
    "source": "iana"
  },
  "application/vnd.openeye.oeb": {
    "source": "iana"
  },
  "application/vnd.openofficeorg.extension": {
    "source": "apache",
    "extensions": ["oxt"]
  },
  "application/vnd.openstreetmap.data+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["osm"]
  },
  "application/vnd.opentimestamps.ots": {
    "source": "iana"
  },
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawing+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    "source": "iana",
    "compressible": false,
    "extensions": ["pptx"]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide": {
    "source": "iana",
    "extensions": ["sldx"]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
    "source": "iana",
    "extensions": ["ppsx"]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template": {
    "source": "iana",
    "extensions": ["potx"]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    "source": "iana",
    "compressible": false,
    "extensions": ["xlsx"]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
    "source": "iana",
    "extensions": ["xltx"]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.theme+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.vmldrawing": {
    "source": "iana"
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    "source": "iana",
    "compressible": false,
    "extensions": ["docx"]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
    "source": "iana",
    "extensions": ["dotx"]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-package.core-properties+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.openxmlformats-package.relationships+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oracle.resource+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.orange.indata": {
    "source": "iana"
  },
  "application/vnd.osa.netdeploy": {
    "source": "iana"
  },
  "application/vnd.osgeo.mapguide.package": {
    "source": "iana",
    "extensions": ["mgp"]
  },
  "application/vnd.osgi.bundle": {
    "source": "iana"
  },
  "application/vnd.osgi.dp": {
    "source": "iana",
    "extensions": ["dp"]
  },
  "application/vnd.osgi.subsystem": {
    "source": "iana",
    "extensions": ["esa"]
  },
  "application/vnd.otps.ct-kip+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.oxli.countgraph": {
    "source": "iana"
  },
  "application/vnd.pagerduty+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.palm": {
    "source": "iana",
    "extensions": ["pdb", "pqa", "oprc"]
  },
  "application/vnd.panoply": {
    "source": "iana"
  },
  "application/vnd.paos.xml": {
    "source": "iana"
  },
  "application/vnd.patentdive": {
    "source": "iana"
  },
  "application/vnd.patientecommsdoc": {
    "source": "iana"
  },
  "application/vnd.pawaafile": {
    "source": "iana",
    "extensions": ["paw"]
  },
  "application/vnd.pcos": {
    "source": "iana"
  },
  "application/vnd.pg.format": {
    "source": "iana",
    "extensions": ["str"]
  },
  "application/vnd.pg.osasli": {
    "source": "iana",
    "extensions": ["ei6"]
  },
  "application/vnd.piaccess.application-licence": {
    "source": "iana"
  },
  "application/vnd.picsel": {
    "source": "iana",
    "extensions": ["efif"]
  },
  "application/vnd.pmi.widget": {
    "source": "iana",
    "extensions": ["wg"]
  },
  "application/vnd.poc.group-advertisement+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.pocketlearn": {
    "source": "iana",
    "extensions": ["plf"]
  },
  "application/vnd.powerbuilder6": {
    "source": "iana",
    "extensions": ["pbd"]
  },
  "application/vnd.powerbuilder6-s": {
    "source": "iana"
  },
  "application/vnd.powerbuilder7": {
    "source": "iana"
  },
  "application/vnd.powerbuilder7-s": {
    "source": "iana"
  },
  "application/vnd.powerbuilder75": {
    "source": "iana"
  },
  "application/vnd.powerbuilder75-s": {
    "source": "iana"
  },
  "application/vnd.preminet": {
    "source": "iana"
  },
  "application/vnd.previewsystems.box": {
    "source": "iana",
    "extensions": ["box"]
  },
  "application/vnd.proteus.magazine": {
    "source": "iana",
    "extensions": ["mgz"]
  },
  "application/vnd.psfs": {
    "source": "iana"
  },
  "application/vnd.publishare-delta-tree": {
    "source": "iana",
    "extensions": ["qps"]
  },
  "application/vnd.pvi.ptid1": {
    "source": "iana",
    "extensions": ["ptid"]
  },
  "application/vnd.pwg-multiplexed": {
    "source": "iana"
  },
  "application/vnd.pwg-xhtml-print+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xhtm"]
  },
  "application/vnd.qualcomm.brew-app-res": {
    "source": "iana"
  },
  "application/vnd.quarantainenet": {
    "source": "iana"
  },
  "application/vnd.quark.quarkxpress": {
    "source": "iana",
    "extensions": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"]
  },
  "application/vnd.quobject-quoxdocument": {
    "source": "iana"
  },
  "application/vnd.radisys.moml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit-conf+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit-conn+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit-dialog+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-audit-stream+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-conf+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-base+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-fax-detect+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-group+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-speech+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.radisys.msml-dialog-transform+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.rainstor.data": {
    "source": "iana"
  },
  "application/vnd.rapid": {
    "source": "iana"
  },
  "application/vnd.rar": {
    "source": "iana",
    "extensions": ["rar"]
  },
  "application/vnd.realvnc.bed": {
    "source": "iana",
    "extensions": ["bed"]
  },
  "application/vnd.recordare.musicxml": {
    "source": "iana",
    "extensions": ["mxl"]
  },
  "application/vnd.recordare.musicxml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["musicxml"]
  },
  "application/vnd.renlearn.rlprint": {
    "source": "iana"
  },
  "application/vnd.resilient.logic": {
    "source": "iana"
  },
  "application/vnd.restful+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.rig.cryptonote": {
    "source": "iana",
    "extensions": ["cryptonote"]
  },
  "application/vnd.rim.cod": {
    "source": "apache",
    "extensions": ["cod"]
  },
  "application/vnd.rn-realmedia": {
    "source": "apache",
    "extensions": ["rm"]
  },
  "application/vnd.rn-realmedia-vbr": {
    "source": "apache",
    "extensions": ["rmvb"]
  },
  "application/vnd.route66.link66+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["link66"]
  },
  "application/vnd.rs-274x": {
    "source": "iana"
  },
  "application/vnd.ruckus.download": {
    "source": "iana"
  },
  "application/vnd.s3sms": {
    "source": "iana"
  },
  "application/vnd.sailingtracker.track": {
    "source": "iana",
    "extensions": ["st"]
  },
  "application/vnd.sar": {
    "source": "iana"
  },
  "application/vnd.sbm.cid": {
    "source": "iana"
  },
  "application/vnd.sbm.mid2": {
    "source": "iana"
  },
  "application/vnd.scribus": {
    "source": "iana"
  },
  "application/vnd.sealed.3df": {
    "source": "iana"
  },
  "application/vnd.sealed.csf": {
    "source": "iana"
  },
  "application/vnd.sealed.doc": {
    "source": "iana"
  },
  "application/vnd.sealed.eml": {
    "source": "iana"
  },
  "application/vnd.sealed.mht": {
    "source": "iana"
  },
  "application/vnd.sealed.net": {
    "source": "iana"
  },
  "application/vnd.sealed.ppt": {
    "source": "iana"
  },
  "application/vnd.sealed.tiff": {
    "source": "iana"
  },
  "application/vnd.sealed.xls": {
    "source": "iana"
  },
  "application/vnd.sealedmedia.softseal.html": {
    "source": "iana"
  },
  "application/vnd.sealedmedia.softseal.pdf": {
    "source": "iana"
  },
  "application/vnd.seemail": {
    "source": "iana",
    "extensions": ["see"]
  },
  "application/vnd.seis+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.sema": {
    "source": "iana",
    "extensions": ["sema"]
  },
  "application/vnd.semd": {
    "source": "iana",
    "extensions": ["semd"]
  },
  "application/vnd.semf": {
    "source": "iana",
    "extensions": ["semf"]
  },
  "application/vnd.shade-save-file": {
    "source": "iana"
  },
  "application/vnd.shana.informed.formdata": {
    "source": "iana",
    "extensions": ["ifm"]
  },
  "application/vnd.shana.informed.formtemplate": {
    "source": "iana",
    "extensions": ["itp"]
  },
  "application/vnd.shana.informed.interchange": {
    "source": "iana",
    "extensions": ["iif"]
  },
  "application/vnd.shana.informed.package": {
    "source": "iana",
    "extensions": ["ipk"]
  },
  "application/vnd.shootproof+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.shopkick+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.shp": {
    "source": "iana"
  },
  "application/vnd.shx": {
    "source": "iana"
  },
  "application/vnd.sigrok.session": {
    "source": "iana"
  },
  "application/vnd.simtech-mindmapper": {
    "source": "iana",
    "extensions": ["twd", "twds"]
  },
  "application/vnd.siren+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.smaf": {
    "source": "iana",
    "extensions": ["mmf"]
  },
  "application/vnd.smart.notebook": {
    "source": "iana"
  },
  "application/vnd.smart.teacher": {
    "source": "iana",
    "extensions": ["teacher"]
  },
  "application/vnd.smintio.portals.archive": {
    "source": "iana"
  },
  "application/vnd.snesdev-page-table": {
    "source": "iana"
  },
  "application/vnd.software602.filler.form+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["fo"]
  },
  "application/vnd.software602.filler.form-xml-zip": {
    "source": "iana"
  },
  "application/vnd.solent.sdkm+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["sdkm", "sdkd"]
  },
  "application/vnd.spotfire.dxp": {
    "source": "iana",
    "extensions": ["dxp"]
  },
  "application/vnd.spotfire.sfs": {
    "source": "iana",
    "extensions": ["sfs"]
  },
  "application/vnd.sqlite3": {
    "source": "iana"
  },
  "application/vnd.sss-cod": {
    "source": "iana"
  },
  "application/vnd.sss-dtf": {
    "source": "iana"
  },
  "application/vnd.sss-ntf": {
    "source": "iana"
  },
  "application/vnd.stardivision.calc": {
    "source": "apache",
    "extensions": ["sdc"]
  },
  "application/vnd.stardivision.draw": {
    "source": "apache",
    "extensions": ["sda"]
  },
  "application/vnd.stardivision.impress": {
    "source": "apache",
    "extensions": ["sdd"]
  },
  "application/vnd.stardivision.math": {
    "source": "apache",
    "extensions": ["smf"]
  },
  "application/vnd.stardivision.writer": {
    "source": "apache",
    "extensions": ["sdw", "vor"]
  },
  "application/vnd.stardivision.writer-global": {
    "source": "apache",
    "extensions": ["sgl"]
  },
  "application/vnd.stepmania.package": {
    "source": "iana",
    "extensions": ["smzip"]
  },
  "application/vnd.stepmania.stepchart": {
    "source": "iana",
    "extensions": ["sm"]
  },
  "application/vnd.street-stream": {
    "source": "iana"
  },
  "application/vnd.sun.wadl+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wadl"]
  },
  "application/vnd.sun.xml.calc": {
    "source": "apache",
    "extensions": ["sxc"]
  },
  "application/vnd.sun.xml.calc.template": {
    "source": "apache",
    "extensions": ["stc"]
  },
  "application/vnd.sun.xml.draw": {
    "source": "apache",
    "extensions": ["sxd"]
  },
  "application/vnd.sun.xml.draw.template": {
    "source": "apache",
    "extensions": ["std"]
  },
  "application/vnd.sun.xml.impress": {
    "source": "apache",
    "extensions": ["sxi"]
  },
  "application/vnd.sun.xml.impress.template": {
    "source": "apache",
    "extensions": ["sti"]
  },
  "application/vnd.sun.xml.math": {
    "source": "apache",
    "extensions": ["sxm"]
  },
  "application/vnd.sun.xml.writer": {
    "source": "apache",
    "extensions": ["sxw"]
  },
  "application/vnd.sun.xml.writer.global": {
    "source": "apache",
    "extensions": ["sxg"]
  },
  "application/vnd.sun.xml.writer.template": {
    "source": "apache",
    "extensions": ["stw"]
  },
  "application/vnd.sus-calendar": {
    "source": "iana",
    "extensions": ["sus", "susp"]
  },
  "application/vnd.svd": {
    "source": "iana",
    "extensions": ["svd"]
  },
  "application/vnd.swiftview-ics": {
    "source": "iana"
  },
  "application/vnd.sybyl.mol2": {
    "source": "iana"
  },
  "application/vnd.sycle+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.syft+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.symbian.install": {
    "source": "apache",
    "extensions": ["sis", "sisx"]
  },
  "application/vnd.syncml+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["xsm"]
  },
  "application/vnd.syncml.dm+wbxml": {
    "source": "iana",
    "charset": "UTF-8",
    "extensions": ["bdm"]
  },
  "application/vnd.syncml.dm+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["xdm"]
  },
  "application/vnd.syncml.dm.notification": {
    "source": "iana"
  },
  "application/vnd.syncml.dmddf+wbxml": {
    "source": "iana"
  },
  "application/vnd.syncml.dmddf+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["ddf"]
  },
  "application/vnd.syncml.dmtnds+wbxml": {
    "source": "iana"
  },
  "application/vnd.syncml.dmtnds+xml": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true
  },
  "application/vnd.syncml.ds.notification": {
    "source": "iana"
  },
  "application/vnd.tableschema+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.tao.intent-module-archive": {
    "source": "iana",
    "extensions": ["tao"]
  },
  "application/vnd.tcpdump.pcap": {
    "source": "iana",
    "extensions": ["pcap", "cap", "dmp"]
  },
  "application/vnd.think-cell.ppttc+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.tmd.mediaflex.api+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.tml": {
    "source": "iana"
  },
  "application/vnd.tmobile-livetv": {
    "source": "iana",
    "extensions": ["tmo"]
  },
  "application/vnd.tri.onesource": {
    "source": "iana"
  },
  "application/vnd.trid.tpt": {
    "source": "iana",
    "extensions": ["tpt"]
  },
  "application/vnd.triscape.mxs": {
    "source": "iana",
    "extensions": ["mxs"]
  },
  "application/vnd.trueapp": {
    "source": "iana",
    "extensions": ["tra"]
  },
  "application/vnd.truedoc": {
    "source": "iana"
  },
  "application/vnd.ubisoft.webplayer": {
    "source": "iana"
  },
  "application/vnd.ufdl": {
    "source": "iana",
    "extensions": ["ufd", "ufdl"]
  },
  "application/vnd.uiq.theme": {
    "source": "iana",
    "extensions": ["utz"]
  },
  "application/vnd.umajin": {
    "source": "iana",
    "extensions": ["umj"]
  },
  "application/vnd.unity": {
    "source": "iana",
    "extensions": ["unityweb"]
  },
  "application/vnd.uoml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["uoml", "uo"]
  },
  "application/vnd.uplanet.alert": {
    "source": "iana"
  },
  "application/vnd.uplanet.alert-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.bearer-choice": {
    "source": "iana"
  },
  "application/vnd.uplanet.bearer-choice-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.cacheop": {
    "source": "iana"
  },
  "application/vnd.uplanet.cacheop-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.channel": {
    "source": "iana"
  },
  "application/vnd.uplanet.channel-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.list": {
    "source": "iana"
  },
  "application/vnd.uplanet.list-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.listcmd": {
    "source": "iana"
  },
  "application/vnd.uplanet.listcmd-wbxml": {
    "source": "iana"
  },
  "application/vnd.uplanet.signal": {
    "source": "iana"
  },
  "application/vnd.uri-map": {
    "source": "iana"
  },
  "application/vnd.valve.source.material": {
    "source": "iana"
  },
  "application/vnd.vcx": {
    "source": "iana",
    "extensions": ["vcx"]
  },
  "application/vnd.vd-study": {
    "source": "iana"
  },
  "application/vnd.vectorworks": {
    "source": "iana"
  },
  "application/vnd.vel+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.verimatrix.vcas": {
    "source": "iana"
  },
  "application/vnd.veritone.aion+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.veryant.thin": {
    "source": "iana"
  },
  "application/vnd.ves.encrypted": {
    "source": "iana"
  },
  "application/vnd.vidsoft.vidconference": {
    "source": "iana"
  },
  "application/vnd.visio": {
    "source": "iana",
    "extensions": ["vsd", "vst", "vss", "vsw"]
  },
  "application/vnd.visionary": {
    "source": "iana",
    "extensions": ["vis"]
  },
  "application/vnd.vividence.scriptfile": {
    "source": "iana"
  },
  "application/vnd.vsf": {
    "source": "iana",
    "extensions": ["vsf"]
  },
  "application/vnd.wap.sic": {
    "source": "iana"
  },
  "application/vnd.wap.slc": {
    "source": "iana"
  },
  "application/vnd.wap.wbxml": {
    "source": "iana",
    "charset": "UTF-8",
    "extensions": ["wbxml"]
  },
  "application/vnd.wap.wmlc": {
    "source": "iana",
    "extensions": ["wmlc"]
  },
  "application/vnd.wap.wmlscriptc": {
    "source": "iana",
    "extensions": ["wmlsc"]
  },
  "application/vnd.wasmflow.wafl": {
    "source": "iana"
  },
  "application/vnd.webturbo": {
    "source": "iana",
    "extensions": ["wtb"]
  },
  "application/vnd.wfa.dpp": {
    "source": "iana"
  },
  "application/vnd.wfa.p2p": {
    "source": "iana"
  },
  "application/vnd.wfa.wsc": {
    "source": "iana"
  },
  "application/vnd.windows.devicepairing": {
    "source": "iana"
  },
  "application/vnd.wmc": {
    "source": "iana"
  },
  "application/vnd.wmf.bootstrap": {
    "source": "iana"
  },
  "application/vnd.wolfram.mathematica": {
    "source": "iana"
  },
  "application/vnd.wolfram.mathematica.package": {
    "source": "iana"
  },
  "application/vnd.wolfram.player": {
    "source": "iana",
    "extensions": ["nbp"]
  },
  "application/vnd.wordlift": {
    "source": "iana"
  },
  "application/vnd.wordperfect": {
    "source": "iana",
    "extensions": ["wpd"]
  },
  "application/vnd.wqd": {
    "source": "iana",
    "extensions": ["wqd"]
  },
  "application/vnd.wrq-hp3000-labelled": {
    "source": "iana"
  },
  "application/vnd.wt.stf": {
    "source": "iana",
    "extensions": ["stf"]
  },
  "application/vnd.wv.csp+wbxml": {
    "source": "iana"
  },
  "application/vnd.wv.csp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.wv.ssp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.xacml+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.xara": {
    "source": "iana",
    "extensions": ["xar"]
  },
  "application/vnd.xfdl": {
    "source": "iana",
    "extensions": ["xfdl"]
  },
  "application/vnd.xfdl.webform": {
    "source": "iana"
  },
  "application/vnd.xmi+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/vnd.xmpie.cpkg": {
    "source": "iana"
  },
  "application/vnd.xmpie.dpkg": {
    "source": "iana"
  },
  "application/vnd.xmpie.plan": {
    "source": "iana"
  },
  "application/vnd.xmpie.ppkg": {
    "source": "iana"
  },
  "application/vnd.xmpie.xlim": {
    "source": "iana"
  },
  "application/vnd.yamaha.hv-dic": {
    "source": "iana",
    "extensions": ["hvd"]
  },
  "application/vnd.yamaha.hv-script": {
    "source": "iana",
    "extensions": ["hvs"]
  },
  "application/vnd.yamaha.hv-voice": {
    "source": "iana",
    "extensions": ["hvp"]
  },
  "application/vnd.yamaha.openscoreformat": {
    "source": "iana",
    "extensions": ["osf"]
  },
  "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["osfpvg"]
  },
  "application/vnd.yamaha.remote-setup": {
    "source": "iana"
  },
  "application/vnd.yamaha.smaf-audio": {
    "source": "iana",
    "extensions": ["saf"]
  },
  "application/vnd.yamaha.smaf-phrase": {
    "source": "iana",
    "extensions": ["spf"]
  },
  "application/vnd.yamaha.through-ngn": {
    "source": "iana"
  },
  "application/vnd.yamaha.tunnel-udpencap": {
    "source": "iana"
  },
  "application/vnd.yaoweme": {
    "source": "iana"
  },
  "application/vnd.yellowriver-custom-menu": {
    "source": "iana",
    "extensions": ["cmp"]
  },
  "application/vnd.zul": {
    "source": "iana",
    "extensions": ["zir", "zirz"]
  },
  "application/vnd.zzazz.deck+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["zaz"]
  },
  "application/voicexml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["vxml"]
  },
  "application/voucher-cms+json": {
    "source": "iana",
    "compressible": true
  },
  "application/vq-rtcpxr": {
    "source": "iana"
  },
  "application/wasm": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wasm"]
  },
  "application/watcherinfo+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wif"]
  },
  "application/webpush-options+json": {
    "source": "iana",
    "compressible": true
  },
  "application/whoispp-query": {
    "source": "iana"
  },
  "application/whoispp-response": {
    "source": "iana"
  },
  "application/widget": {
    "source": "iana",
    "extensions": ["wgt"]
  },
  "application/winhlp": {
    "source": "apache",
    "extensions": ["hlp"]
  },
  "application/wita": {
    "source": "iana"
  },
  "application/wordperfect5.1": {
    "source": "iana"
  },
  "application/wsdl+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wsdl"]
  },
  "application/wspolicy+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["wspolicy"]
  },
  "application/x-7z-compressed": {
    "source": "apache",
    "compressible": false,
    "extensions": ["7z"]
  },
  "application/x-abiword": {
    "source": "apache",
    "extensions": ["abw"]
  },
  "application/x-ace-compressed": {
    "source": "apache",
    "extensions": ["ace"]
  },
  "application/x-amf": {
    "source": "apache"
  },
  "application/x-apple-diskimage": {
    "source": "apache",
    "extensions": ["dmg"]
  },
  "application/x-arj": {
    "compressible": false,
    "extensions": ["arj"]
  },
  "application/x-authorware-bin": {
    "source": "apache",
    "extensions": ["aab", "x32", "u32", "vox"]
  },
  "application/x-authorware-map": {
    "source": "apache",
    "extensions": ["aam"]
  },
  "application/x-authorware-seg": {
    "source": "apache",
    "extensions": ["aas"]
  },
  "application/x-bcpio": {
    "source": "apache",
    "extensions": ["bcpio"]
  },
  "application/x-bdoc": {
    "compressible": false,
    "extensions": ["bdoc"]
  },
  "application/x-bittorrent": {
    "source": "apache",
    "extensions": ["torrent"]
  },
  "application/x-blorb": {
    "source": "apache",
    "extensions": ["blb", "blorb"]
  },
  "application/x-bzip": {
    "source": "apache",
    "compressible": false,
    "extensions": ["bz"]
  },
  "application/x-bzip2": {
    "source": "apache",
    "compressible": false,
    "extensions": ["bz2", "boz"]
  },
  "application/x-cbr": {
    "source": "apache",
    "extensions": ["cbr", "cba", "cbt", "cbz", "cb7"]
  },
  "application/x-cdlink": {
    "source": "apache",
    "extensions": ["vcd"]
  },
  "application/x-cfs-compressed": {
    "source": "apache",
    "extensions": ["cfs"]
  },
  "application/x-chat": {
    "source": "apache",
    "extensions": ["chat"]
  },
  "application/x-chess-pgn": {
    "source": "apache",
    "extensions": ["pgn"]
  },
  "application/x-chrome-extension": {
    "extensions": ["crx"]
  },
  "application/x-cocoa": {
    "source": "nginx",
    "extensions": ["cco"]
  },
  "application/x-compress": {
    "source": "apache"
  },
  "application/x-conference": {
    "source": "apache",
    "extensions": ["nsc"]
  },
  "application/x-cpio": {
    "source": "apache",
    "extensions": ["cpio"]
  },
  "application/x-csh": {
    "source": "apache",
    "extensions": ["csh"]
  },
  "application/x-deb": {
    "compressible": false
  },
  "application/x-debian-package": {
    "source": "apache",
    "extensions": ["deb", "udeb"]
  },
  "application/x-dgc-compressed": {
    "source": "apache",
    "extensions": ["dgc"]
  },
  "application/x-director": {
    "source": "apache",
    "extensions": [
      "dir",
      "dcr",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ]
  },
  "application/x-doom": {
    "source": "apache",
    "extensions": ["wad"]
  },
  "application/x-dtbncx+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["ncx"]
  },
  "application/x-dtbook+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["dtb"]
  },
  "application/x-dtbresource+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["res"]
  },
  "application/x-dvi": {
    "source": "apache",
    "compressible": false,
    "extensions": ["dvi"]
  },
  "application/x-envoy": {
    "source": "apache",
    "extensions": ["evy"]
  },
  "application/x-eva": {
    "source": "apache",
    "extensions": ["eva"]
  },
  "application/x-font-bdf": {
    "source": "apache",
    "extensions": ["bdf"]
  },
  "application/x-font-dos": {
    "source": "apache"
  },
  "application/x-font-framemaker": {
    "source": "apache"
  },
  "application/x-font-ghostscript": {
    "source": "apache",
    "extensions": ["gsf"]
  },
  "application/x-font-libgrx": {
    "source": "apache"
  },
  "application/x-font-linux-psf": {
    "source": "apache",
    "extensions": ["psf"]
  },
  "application/x-font-pcf": {
    "source": "apache",
    "extensions": ["pcf"]
  },
  "application/x-font-snf": {
    "source": "apache",
    "extensions": ["snf"]
  },
  "application/x-font-speedo": {
    "source": "apache"
  },
  "application/x-font-sunos-news": {
    "source": "apache"
  },
  "application/x-font-type1": {
    "source": "apache",
    "extensions": ["pfa", "pfb", "pfm", "afm"]
  },
  "application/x-font-vfont": {
    "source": "apache"
  },
  "application/x-freearc": {
    "source": "apache",
    "extensions": ["arc"]
  },
  "application/x-futuresplash": {
    "source": "apache",
    "extensions": ["spl"]
  },
  "application/x-gca-compressed": {
    "source": "apache",
    "extensions": ["gca"]
  },
  "application/x-glulx": {
    "source": "apache",
    "extensions": ["ulx"]
  },
  "application/x-gnumeric": {
    "source": "apache",
    "extensions": ["gnumeric"]
  },
  "application/x-gramps-xml": {
    "source": "apache",
    "extensions": ["gramps"]
  },
  "application/x-gtar": {
    "source": "apache",
    "extensions": ["gtar"]
  },
  "application/x-gzip": {
    "source": "apache"
  },
  "application/x-hdf": {
    "source": "apache",
    "extensions": ["hdf"]
  },
  "application/x-httpd-php": {
    "compressible": true,
    "extensions": ["php"]
  },
  "application/x-install-instructions": {
    "source": "apache",
    "extensions": ["install"]
  },
  "application/x-iso9660-image": {
    "source": "apache",
    "extensions": ["iso"]
  },
  "application/x-iwork-keynote-sffkey": {
    "extensions": ["key"]
  },
  "application/x-iwork-numbers-sffnumbers": {
    "extensions": ["numbers"]
  },
  "application/x-iwork-pages-sffpages": {
    "extensions": ["pages"]
  },
  "application/x-java-archive-diff": {
    "source": "nginx",
    "extensions": ["jardiff"]
  },
  "application/x-java-jnlp-file": {
    "source": "apache",
    "compressible": false,
    "extensions": ["jnlp"]
  },
  "application/x-javascript": {
    "compressible": true
  },
  "application/x-keepass2": {
    "extensions": ["kdbx"]
  },
  "application/x-latex": {
    "source": "apache",
    "compressible": false,
    "extensions": ["latex"]
  },
  "application/x-lua-bytecode": {
    "extensions": ["luac"]
  },
  "application/x-lzh-compressed": {
    "source": "apache",
    "extensions": ["lzh", "lha"]
  },
  "application/x-makeself": {
    "source": "nginx",
    "extensions": ["run"]
  },
  "application/x-mie": {
    "source": "apache",
    "extensions": ["mie"]
  },
  "application/x-mobipocket-ebook": {
    "source": "apache",
    "extensions": ["prc", "mobi"]
  },
  "application/x-mpegurl": {
    "compressible": false
  },
  "application/x-ms-application": {
    "source": "apache",
    "extensions": ["application"]
  },
  "application/x-ms-shortcut": {
    "source": "apache",
    "extensions": ["lnk"]
  },
  "application/x-ms-wmd": {
    "source": "apache",
    "extensions": ["wmd"]
  },
  "application/x-ms-wmz": {
    "source": "apache",
    "extensions": ["wmz"]
  },
  "application/x-ms-xbap": {
    "source": "apache",
    "extensions": ["xbap"]
  },
  "application/x-msaccess": {
    "source": "apache",
    "extensions": ["mdb"]
  },
  "application/x-msbinder": {
    "source": "apache",
    "extensions": ["obd"]
  },
  "application/x-mscardfile": {
    "source": "apache",
    "extensions": ["crd"]
  },
  "application/x-msclip": {
    "source": "apache",
    "extensions": ["clp"]
  },
  "application/x-msdos-program": {
    "extensions": ["exe"]
  },
  "application/x-msdownload": {
    "source": "apache",
    "extensions": ["exe", "dll", "com", "bat", "msi"]
  },
  "application/x-msmediaview": {
    "source": "apache",
    "extensions": ["mvb", "m13", "m14"]
  },
  "application/x-msmetafile": {
    "source": "apache",
    "extensions": ["wmf", "wmz", "emf", "emz"]
  },
  "application/x-msmoney": {
    "source": "apache",
    "extensions": ["mny"]
  },
  "application/x-mspublisher": {
    "source": "apache",
    "extensions": ["pub"]
  },
  "application/x-msschedule": {
    "source": "apache",
    "extensions": ["scd"]
  },
  "application/x-msterminal": {
    "source": "apache",
    "extensions": ["trm"]
  },
  "application/x-mswrite": {
    "source": "apache",
    "extensions": ["wri"]
  },
  "application/x-netcdf": {
    "source": "apache",
    "extensions": ["nc", "cdf"]
  },
  "application/x-ns-proxy-autoconfig": {
    "compressible": true,
    "extensions": ["pac"]
  },
  "application/x-nzb": {
    "source": "apache",
    "extensions": ["nzb"]
  },
  "application/x-perl": {
    "source": "nginx",
    "extensions": ["pl", "pm"]
  },
  "application/x-pilot": {
    "source": "nginx",
    "extensions": ["prc", "pdb"]
  },
  "application/x-pkcs12": {
    "source": "apache",
    "compressible": false,
    "extensions": ["p12", "pfx"]
  },
  "application/x-pkcs7-certificates": {
    "source": "apache",
    "extensions": ["p7b", "spc"]
  },
  "application/x-pkcs7-certreqresp": {
    "source": "apache",
    "extensions": ["p7r"]
  },
  "application/x-pki-message": {
    "source": "iana"
  },
  "application/x-rar-compressed": {
    "source": "apache",
    "compressible": false,
    "extensions": ["rar"]
  },
  "application/x-redhat-package-manager": {
    "source": "nginx",
    "extensions": ["rpm"]
  },
  "application/x-research-info-systems": {
    "source": "apache",
    "extensions": ["ris"]
  },
  "application/x-sea": {
    "source": "nginx",
    "extensions": ["sea"]
  },
  "application/x-sh": {
    "source": "apache",
    "compressible": true,
    "extensions": ["sh"]
  },
  "application/x-shar": {
    "source": "apache",
    "extensions": ["shar"]
  },
  "application/x-shockwave-flash": {
    "source": "apache",
    "compressible": false,
    "extensions": ["swf"]
  },
  "application/x-silverlight-app": {
    "source": "apache",
    "extensions": ["xap"]
  },
  "application/x-sql": {
    "source": "apache",
    "extensions": ["sql"]
  },
  "application/x-stuffit": {
    "source": "apache",
    "compressible": false,
    "extensions": ["sit"]
  },
  "application/x-stuffitx": {
    "source": "apache",
    "extensions": ["sitx"]
  },
  "application/x-subrip": {
    "source": "apache",
    "extensions": ["srt"]
  },
  "application/x-sv4cpio": {
    "source": "apache",
    "extensions": ["sv4cpio"]
  },
  "application/x-sv4crc": {
    "source": "apache",
    "extensions": ["sv4crc"]
  },
  "application/x-t3vm-image": {
    "source": "apache",
    "extensions": ["t3"]
  },
  "application/x-tads": {
    "source": "apache",
    "extensions": ["gam"]
  },
  "application/x-tar": {
    "source": "apache",
    "compressible": true,
    "extensions": ["tar"]
  },
  "application/x-tcl": {
    "source": "apache",
    "extensions": ["tcl", "tk"]
  },
  "application/x-tex": {
    "source": "apache",
    "extensions": ["tex"]
  },
  "application/x-tex-tfm": {
    "source": "apache",
    "extensions": ["tfm"]
  },
  "application/x-texinfo": {
    "source": "apache",
    "extensions": ["texinfo", "texi"]
  },
  "application/x-tgif": {
    "source": "apache",
    "extensions": ["obj"]
  },
  "application/x-ustar": {
    "source": "apache",
    "extensions": ["ustar"]
  },
  "application/x-virtualbox-hdd": {
    "compressible": true,
    "extensions": ["hdd"]
  },
  "application/x-virtualbox-ova": {
    "compressible": true,
    "extensions": ["ova"]
  },
  "application/x-virtualbox-ovf": {
    "compressible": true,
    "extensions": ["ovf"]
  },
  "application/x-virtualbox-vbox": {
    "compressible": true,
    "extensions": ["vbox"]
  },
  "application/x-virtualbox-vbox-extpack": {
    "compressible": false,
    "extensions": ["vbox-extpack"]
  },
  "application/x-virtualbox-vdi": {
    "compressible": true,
    "extensions": ["vdi"]
  },
  "application/x-virtualbox-vhd": {
    "compressible": true,
    "extensions": ["vhd"]
  },
  "application/x-virtualbox-vmdk": {
    "compressible": true,
    "extensions": ["vmdk"]
  },
  "application/x-wais-source": {
    "source": "apache",
    "extensions": ["src"]
  },
  "application/x-web-app-manifest+json": {
    "compressible": true,
    "extensions": ["webapp"]
  },
  "application/x-www-form-urlencoded": {
    "source": "iana",
    "compressible": true
  },
  "application/x-x509-ca-cert": {
    "source": "iana",
    "extensions": ["der", "crt", "pem"]
  },
  "application/x-x509-ca-ra-cert": {
    "source": "iana"
  },
  "application/x-x509-next-ca-cert": {
    "source": "iana"
  },
  "application/x-xfig": {
    "source": "apache",
    "extensions": ["fig"]
  },
  "application/x-xliff+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["xlf"]
  },
  "application/x-xpinstall": {
    "source": "apache",
    "compressible": false,
    "extensions": ["xpi"]
  },
  "application/x-xz": {
    "source": "apache",
    "extensions": ["xz"]
  },
  "application/x-zmachine": {
    "source": "apache",
    "extensions": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"]
  },
  "application/x400-bp": {
    "source": "iana"
  },
  "application/xacml+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xaml+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["xaml"]
  },
  "application/xcap-att+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xav"]
  },
  "application/xcap-caps+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xca"]
  },
  "application/xcap-diff+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xdf"]
  },
  "application/xcap-el+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xel"]
  },
  "application/xcap-error+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xcap-ns+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xns"]
  },
  "application/xcon-conference-info+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xcon-conference-info-diff+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xenc+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xenc"]
  },
  "application/xfdf": {
    "source": "iana",
    "extensions": ["xfdf"]
  },
  "application/xhtml+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xhtml", "xht"]
  },
  "application/xhtml-voice+xml": {
    "source": "apache",
    "compressible": true
  },
  "application/xliff+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xlf"]
  },
  "application/xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xml", "xsl", "xsd", "rng"]
  },
  "application/xml-dtd": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dtd"]
  },
  "application/xml-external-parsed-entity": {
    "source": "iana"
  },
  "application/xml-patch+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xmpp+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/xop+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xop"]
  },
  "application/xproc+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["xpl"]
  },
  "application/xslt+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xsl", "xslt"]
  },
  "application/xspf+xml": {
    "source": "apache",
    "compressible": true,
    "extensions": ["xspf"]
  },
  "application/xv+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["mxml", "xhvml", "xvml", "xvm"]
  },
  "application/yang": {
    "source": "iana",
    "extensions": ["yang"]
  },
  "application/yang-data+cbor": {
    "source": "iana"
  },
  "application/yang-data+json": {
    "source": "iana",
    "compressible": true
  },
  "application/yang-data+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/yang-patch+json": {
    "source": "iana",
    "compressible": true
  },
  "application/yang-patch+xml": {
    "source": "iana",
    "compressible": true
  },
  "application/yin+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["yin"]
  },
  "application/zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["zip"]
  },
  "application/zlib": {
    "source": "iana"
  },
  "application/zstd": {
    "source": "iana"
  },
  "audio/1d-interleaved-parityfec": {
    "source": "iana"
  },
  "audio/32kadpcm": {
    "source": "iana"
  },
  "audio/3gpp": {
    "source": "iana",
    "compressible": false,
    "extensions": ["3gpp"]
  },
  "audio/3gpp2": {
    "source": "iana"
  },
  "audio/aac": {
    "source": "iana",
    "extensions": ["adts", "aac"]
  },
  "audio/ac3": {
    "source": "iana"
  },
  "audio/adpcm": {
    "source": "apache",
    "extensions": ["adp"]
  },
  "audio/amr": {
    "source": "iana",
    "extensions": ["amr"]
  },
  "audio/amr-wb": {
    "source": "iana"
  },
  "audio/amr-wb+": {
    "source": "iana"
  },
  "audio/aptx": {
    "source": "iana"
  },
  "audio/asc": {
    "source": "iana"
  },
  "audio/atrac-advanced-lossless": {
    "source": "iana"
  },
  "audio/atrac-x": {
    "source": "iana"
  },
  "audio/atrac3": {
    "source": "iana"
  },
  "audio/basic": {
    "source": "iana",
    "compressible": false,
    "extensions": ["au", "snd"]
  },
  "audio/bv16": {
    "source": "iana"
  },
  "audio/bv32": {
    "source": "iana"
  },
  "audio/clearmode": {
    "source": "iana"
  },
  "audio/cn": {
    "source": "iana"
  },
  "audio/dat12": {
    "source": "iana"
  },
  "audio/dls": {
    "source": "iana"
  },
  "audio/dsr-es201108": {
    "source": "iana"
  },
  "audio/dsr-es202050": {
    "source": "iana"
  },
  "audio/dsr-es202211": {
    "source": "iana"
  },
  "audio/dsr-es202212": {
    "source": "iana"
  },
  "audio/dv": {
    "source": "iana"
  },
  "audio/dvi4": {
    "source": "iana"
  },
  "audio/eac3": {
    "source": "iana"
  },
  "audio/encaprtp": {
    "source": "iana"
  },
  "audio/evrc": {
    "source": "iana"
  },
  "audio/evrc-qcp": {
    "source": "iana"
  },
  "audio/evrc0": {
    "source": "iana"
  },
  "audio/evrc1": {
    "source": "iana"
  },
  "audio/evrcb": {
    "source": "iana"
  },
  "audio/evrcb0": {
    "source": "iana"
  },
  "audio/evrcb1": {
    "source": "iana"
  },
  "audio/evrcnw": {
    "source": "iana"
  },
  "audio/evrcnw0": {
    "source": "iana"
  },
  "audio/evrcnw1": {
    "source": "iana"
  },
  "audio/evrcwb": {
    "source": "iana"
  },
  "audio/evrcwb0": {
    "source": "iana"
  },
  "audio/evrcwb1": {
    "source": "iana"
  },
  "audio/evs": {
    "source": "iana"
  },
  "audio/flexfec": {
    "source": "iana"
  },
  "audio/fwdred": {
    "source": "iana"
  },
  "audio/g711-0": {
    "source": "iana"
  },
  "audio/g719": {
    "source": "iana"
  },
  "audio/g722": {
    "source": "iana"
  },
  "audio/g7221": {
    "source": "iana"
  },
  "audio/g723": {
    "source": "iana"
  },
  "audio/g726-16": {
    "source": "iana"
  },
  "audio/g726-24": {
    "source": "iana"
  },
  "audio/g726-32": {
    "source": "iana"
  },
  "audio/g726-40": {
    "source": "iana"
  },
  "audio/g728": {
    "source": "iana"
  },
  "audio/g729": {
    "source": "iana"
  },
  "audio/g7291": {
    "source": "iana"
  },
  "audio/g729d": {
    "source": "iana"
  },
  "audio/g729e": {
    "source": "iana"
  },
  "audio/gsm": {
    "source": "iana"
  },
  "audio/gsm-efr": {
    "source": "iana"
  },
  "audio/gsm-hr-08": {
    "source": "iana"
  },
  "audio/ilbc": {
    "source": "iana"
  },
  "audio/ip-mr_v2.5": {
    "source": "iana"
  },
  "audio/isac": {
    "source": "apache"
  },
  "audio/l16": {
    "source": "iana"
  },
  "audio/l20": {
    "source": "iana"
  },
  "audio/l24": {
    "source": "iana",
    "compressible": false
  },
  "audio/l8": {
    "source": "iana"
  },
  "audio/lpc": {
    "source": "iana"
  },
  "audio/melp": {
    "source": "iana"
  },
  "audio/melp1200": {
    "source": "iana"
  },
  "audio/melp2400": {
    "source": "iana"
  },
  "audio/melp600": {
    "source": "iana"
  },
  "audio/mhas": {
    "source": "iana"
  },
  "audio/midi": {
    "source": "apache",
    "extensions": ["mid", "midi", "kar", "rmi"]
  },
  "audio/mobile-xmf": {
    "source": "iana",
    "extensions": ["mxmf"]
  },
  "audio/mp3": {
    "compressible": false,
    "extensions": ["mp3"]
  },
  "audio/mp4": {
    "source": "iana",
    "compressible": false,
    "extensions": ["m4a", "mp4a"]
  },
  "audio/mp4a-latm": {
    "source": "iana"
  },
  "audio/mpa": {
    "source": "iana"
  },
  "audio/mpa-robust": {
    "source": "iana"
  },
  "audio/mpeg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
  },
  "audio/mpeg4-generic": {
    "source": "iana"
  },
  "audio/musepack": {
    "source": "apache"
  },
  "audio/ogg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["oga", "ogg", "spx", "opus"]
  },
  "audio/opus": {
    "source": "iana"
  },
  "audio/parityfec": {
    "source": "iana"
  },
  "audio/pcma": {
    "source": "iana"
  },
  "audio/pcma-wb": {
    "source": "iana"
  },
  "audio/pcmu": {
    "source": "iana"
  },
  "audio/pcmu-wb": {
    "source": "iana"
  },
  "audio/prs.sid": {
    "source": "iana"
  },
  "audio/qcelp": {
    "source": "iana"
  },
  "audio/raptorfec": {
    "source": "iana"
  },
  "audio/red": {
    "source": "iana"
  },
  "audio/rtp-enc-aescm128": {
    "source": "iana"
  },
  "audio/rtp-midi": {
    "source": "iana"
  },
  "audio/rtploopback": {
    "source": "iana"
  },
  "audio/rtx": {
    "source": "iana"
  },
  "audio/s3m": {
    "source": "apache",
    "extensions": ["s3m"]
  },
  "audio/scip": {
    "source": "iana"
  },
  "audio/silk": {
    "source": "apache",
    "extensions": ["sil"]
  },
  "audio/smv": {
    "source": "iana"
  },
  "audio/smv-qcp": {
    "source": "iana"
  },
  "audio/smv0": {
    "source": "iana"
  },
  "audio/sofa": {
    "source": "iana"
  },
  "audio/sp-midi": {
    "source": "iana"
  },
  "audio/speex": {
    "source": "iana"
  },
  "audio/t140c": {
    "source": "iana"
  },
  "audio/t38": {
    "source": "iana"
  },
  "audio/telephone-event": {
    "source": "iana"
  },
  "audio/tetra_acelp": {
    "source": "iana"
  },
  "audio/tetra_acelp_bb": {
    "source": "iana"
  },
  "audio/tone": {
    "source": "iana"
  },
  "audio/tsvcis": {
    "source": "iana"
  },
  "audio/uemclip": {
    "source": "iana"
  },
  "audio/ulpfec": {
    "source": "iana"
  },
  "audio/usac": {
    "source": "iana"
  },
  "audio/vdvi": {
    "source": "iana"
  },
  "audio/vmr-wb": {
    "source": "iana"
  },
  "audio/vnd.3gpp.iufp": {
    "source": "iana"
  },
  "audio/vnd.4sb": {
    "source": "iana"
  },
  "audio/vnd.audiokoz": {
    "source": "iana"
  },
  "audio/vnd.celp": {
    "source": "iana"
  },
  "audio/vnd.cisco.nse": {
    "source": "iana"
  },
  "audio/vnd.cmles.radio-events": {
    "source": "iana"
  },
  "audio/vnd.cns.anp1": {
    "source": "iana"
  },
  "audio/vnd.cns.inf1": {
    "source": "iana"
  },
  "audio/vnd.dece.audio": {
    "source": "iana",
    "extensions": ["uva", "uvva"]
  },
  "audio/vnd.digital-winds": {
    "source": "iana",
    "extensions": ["eol"]
  },
  "audio/vnd.dlna.adts": {
    "source": "iana"
  },
  "audio/vnd.dolby.heaac.1": {
    "source": "iana"
  },
  "audio/vnd.dolby.heaac.2": {
    "source": "iana"
  },
  "audio/vnd.dolby.mlp": {
    "source": "iana"
  },
  "audio/vnd.dolby.mps": {
    "source": "iana"
  },
  "audio/vnd.dolby.pl2": {
    "source": "iana"
  },
  "audio/vnd.dolby.pl2x": {
    "source": "iana"
  },
  "audio/vnd.dolby.pl2z": {
    "source": "iana"
  },
  "audio/vnd.dolby.pulse.1": {
    "source": "iana"
  },
  "audio/vnd.dra": {
    "source": "iana",
    "extensions": ["dra"]
  },
  "audio/vnd.dts": {
    "source": "iana",
    "extensions": ["dts"]
  },
  "audio/vnd.dts.hd": {
    "source": "iana",
    "extensions": ["dtshd"]
  },
  "audio/vnd.dts.uhd": {
    "source": "iana"
  },
  "audio/vnd.dvb.file": {
    "source": "iana"
  },
  "audio/vnd.everad.plj": {
    "source": "iana"
  },
  "audio/vnd.hns.audio": {
    "source": "iana"
  },
  "audio/vnd.lucent.voice": {
    "source": "iana",
    "extensions": ["lvp"]
  },
  "audio/vnd.ms-playready.media.pya": {
    "source": "iana",
    "extensions": ["pya"]
  },
  "audio/vnd.nokia.mobile-xmf": {
    "source": "iana"
  },
  "audio/vnd.nortel.vbk": {
    "source": "iana"
  },
  "audio/vnd.nuera.ecelp4800": {
    "source": "iana",
    "extensions": ["ecelp4800"]
  },
  "audio/vnd.nuera.ecelp7470": {
    "source": "iana",
    "extensions": ["ecelp7470"]
  },
  "audio/vnd.nuera.ecelp9600": {
    "source": "iana",
    "extensions": ["ecelp9600"]
  },
  "audio/vnd.octel.sbc": {
    "source": "iana"
  },
  "audio/vnd.presonus.multitrack": {
    "source": "iana"
  },
  "audio/vnd.qcelp": {
    "source": "apache"
  },
  "audio/vnd.rhetorex.32kadpcm": {
    "source": "iana"
  },
  "audio/vnd.rip": {
    "source": "iana",
    "extensions": ["rip"]
  },
  "audio/vnd.rn-realaudio": {
    "compressible": false
  },
  "audio/vnd.sealedmedia.softseal.mpeg": {
    "source": "iana"
  },
  "audio/vnd.vmx.cvsd": {
    "source": "iana"
  },
  "audio/vnd.wave": {
    "compressible": false
  },
  "audio/vorbis": {
    "source": "iana",
    "compressible": false
  },
  "audio/vorbis-config": {
    "source": "iana"
  },
  "audio/wav": {
    "compressible": false,
    "extensions": ["wav"]
  },
  "audio/wave": {
    "compressible": false,
    "extensions": ["wav"]
  },
  "audio/webm": {
    "source": "apache",
    "compressible": false,
    "extensions": ["weba"]
  },
  "audio/x-aac": {
    "source": "apache",
    "compressible": false,
    "extensions": ["aac"]
  },
  "audio/x-aiff": {
    "source": "apache",
    "extensions": ["aif", "aiff", "aifc"]
  },
  "audio/x-caf": {
    "source": "apache",
    "compressible": false,
    "extensions": ["caf"]
  },
  "audio/x-flac": {
    "source": "apache",
    "extensions": ["flac"]
  },
  "audio/x-m4a": {
    "source": "nginx",
    "extensions": ["m4a"]
  },
  "audio/x-matroska": {
    "source": "apache",
    "extensions": ["mka"]
  },
  "audio/x-mpegurl": {
    "source": "apache",
    "extensions": ["m3u"]
  },
  "audio/x-ms-wax": {
    "source": "apache",
    "extensions": ["wax"]
  },
  "audio/x-ms-wma": {
    "source": "apache",
    "extensions": ["wma"]
  },
  "audio/x-pn-realaudio": {
    "source": "apache",
    "extensions": ["ram", "ra"]
  },
  "audio/x-pn-realaudio-plugin": {
    "source": "apache",
    "extensions": ["rmp"]
  },
  "audio/x-realaudio": {
    "source": "nginx",
    "extensions": ["ra"]
  },
  "audio/x-tta": {
    "source": "apache"
  },
  "audio/x-wav": {
    "source": "apache",
    "extensions": ["wav"]
  },
  "audio/xm": {
    "source": "apache",
    "extensions": ["xm"]
  },
  "chemical/x-cdx": {
    "source": "apache",
    "extensions": ["cdx"]
  },
  "chemical/x-cif": {
    "source": "apache",
    "extensions": ["cif"]
  },
  "chemical/x-cmdf": {
    "source": "apache",
    "extensions": ["cmdf"]
  },
  "chemical/x-cml": {
    "source": "apache",
    "extensions": ["cml"]
  },
  "chemical/x-csml": {
    "source": "apache",
    "extensions": ["csml"]
  },
  "chemical/x-pdb": {
    "source": "apache"
  },
  "chemical/x-xyz": {
    "source": "apache",
    "extensions": ["xyz"]
  },
  "font/collection": {
    "source": "iana",
    "extensions": ["ttc"]
  },
  "font/otf": {
    "source": "iana",
    "compressible": true,
    "extensions": ["otf"]
  },
  "font/sfnt": {
    "source": "iana"
  },
  "font/ttf": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ttf"]
  },
  "font/woff": {
    "source": "iana",
    "extensions": ["woff"]
  },
  "font/woff2": {
    "source": "iana",
    "extensions": ["woff2"]
  },
  "image/aces": {
    "source": "iana",
    "extensions": ["exr"]
  },
  "image/apng": {
    "source": "iana",
    "compressible": false,
    "extensions": ["apng"]
  },
  "image/avci": {
    "source": "iana",
    "extensions": ["avci"]
  },
  "image/avcs": {
    "source": "iana",
    "extensions": ["avcs"]
  },
  "image/avif": {
    "source": "iana",
    "compressible": false,
    "extensions": ["avif"]
  },
  "image/bmp": {
    "source": "iana",
    "compressible": true,
    "extensions": ["bmp", "dib"]
  },
  "image/cgm": {
    "source": "iana",
    "extensions": ["cgm"]
  },
  "image/dicom-rle": {
    "source": "iana",
    "extensions": ["drle"]
  },
  "image/dpx": {
    "source": "iana",
    "extensions": ["dpx"]
  },
  "image/emf": {
    "source": "iana",
    "extensions": ["emf"]
  },
  "image/fits": {
    "source": "iana",
    "extensions": ["fits"]
  },
  "image/g3fax": {
    "source": "iana",
    "extensions": ["g3"]
  },
  "image/gif": {
    "source": "iana",
    "compressible": false,
    "extensions": ["gif"]
  },
  "image/heic": {
    "source": "iana",
    "extensions": ["heic"]
  },
  "image/heic-sequence": {
    "source": "iana",
    "extensions": ["heics"]
  },
  "image/heif": {
    "source": "iana",
    "extensions": ["heif"]
  },
  "image/heif-sequence": {
    "source": "iana",
    "extensions": ["heifs"]
  },
  "image/hej2k": {
    "source": "iana",
    "extensions": ["hej2"]
  },
  "image/hsj2": {
    "source": "iana",
    "extensions": ["hsj2"]
  },
  "image/ief": {
    "source": "iana",
    "extensions": ["ief"]
  },
  "image/jls": {
    "source": "iana",
    "extensions": ["jls"]
  },
  "image/jp2": {
    "source": "iana",
    "compressible": false,
    "extensions": ["jp2", "jpg2"]
  },
  "image/jpeg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["jpeg", "jpg", "jpe"]
  },
  "image/jph": {
    "source": "iana",
    "extensions": ["jph"]
  },
  "image/jphc": {
    "source": "iana",
    "extensions": ["jhc"]
  },
  "image/jpm": {
    "source": "iana",
    "compressible": false,
    "extensions": ["jpm", "jpgm"]
  },
  "image/jpx": {
    "source": "iana",
    "compressible": false,
    "extensions": ["jpx", "jpf"]
  },
  "image/jxr": {
    "source": "iana",
    "extensions": ["jxr"]
  },
  "image/jxra": {
    "source": "iana",
    "extensions": ["jxra"]
  },
  "image/jxrs": {
    "source": "iana",
    "extensions": ["jxrs"]
  },
  "image/jxs": {
    "source": "iana",
    "extensions": ["jxs"]
  },
  "image/jxsc": {
    "source": "iana",
    "extensions": ["jxsc"]
  },
  "image/jxsi": {
    "source": "iana",
    "extensions": ["jxsi"]
  },
  "image/jxss": {
    "source": "iana",
    "extensions": ["jxss"]
  },
  "image/ktx": {
    "source": "iana",
    "extensions": ["ktx"]
  },
  "image/ktx2": {
    "source": "iana",
    "extensions": ["ktx2"]
  },
  "image/naplps": {
    "source": "iana"
  },
  "image/pjpeg": {
    "compressible": false
  },
  "image/png": {
    "source": "iana",
    "compressible": false,
    "extensions": ["png"]
  },
  "image/prs.btif": {
    "source": "iana",
    "extensions": ["btif", "btf"]
  },
  "image/prs.pti": {
    "source": "iana",
    "extensions": ["pti"]
  },
  "image/pwg-raster": {
    "source": "iana"
  },
  "image/sgi": {
    "source": "apache",
    "extensions": ["sgi"]
  },
  "image/svg+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["svg", "svgz"]
  },
  "image/t38": {
    "source": "iana",
    "extensions": ["t38"]
  },
  "image/tiff": {
    "source": "iana",
    "compressible": false,
    "extensions": ["tif", "tiff"]
  },
  "image/tiff-fx": {
    "source": "iana",
    "extensions": ["tfx"]
  },
  "image/vnd.adobe.photoshop": {
    "source": "iana",
    "compressible": true,
    "extensions": ["psd"]
  },
  "image/vnd.airzip.accelerator.azv": {
    "source": "iana",
    "extensions": ["azv"]
  },
  "image/vnd.cns.inf2": {
    "source": "iana"
  },
  "image/vnd.dece.graphic": {
    "source": "iana",
    "extensions": ["uvi", "uvvi", "uvg", "uvvg"]
  },
  "image/vnd.djvu": {
    "source": "iana",
    "extensions": ["djvu", "djv"]
  },
  "image/vnd.dvb.subtitle": {
    "source": "iana",
    "extensions": ["sub"]
  },
  "image/vnd.dwg": {
    "source": "iana",
    "extensions": ["dwg"]
  },
  "image/vnd.dxf": {
    "source": "iana",
    "extensions": ["dxf"]
  },
  "image/vnd.fastbidsheet": {
    "source": "iana",
    "extensions": ["fbs"]
  },
  "image/vnd.fpx": {
    "source": "iana",
    "extensions": ["fpx"]
  },
  "image/vnd.fst": {
    "source": "iana",
    "extensions": ["fst"]
  },
  "image/vnd.fujixerox.edmics-mmr": {
    "source": "iana",
    "extensions": ["mmr"]
  },
  "image/vnd.fujixerox.edmics-rlc": {
    "source": "iana",
    "extensions": ["rlc"]
  },
  "image/vnd.globalgraphics.pgb": {
    "source": "iana"
  },
  "image/vnd.microsoft.icon": {
    "source": "iana",
    "compressible": true,
    "extensions": ["ico"]
  },
  "image/vnd.mix": {
    "source": "iana"
  },
  "image/vnd.mozilla.apng": {
    "source": "iana"
  },
  "image/vnd.ms-dds": {
    "compressible": true,
    "extensions": ["dds"]
  },
  "image/vnd.ms-modi": {
    "source": "iana",
    "extensions": ["mdi"]
  },
  "image/vnd.ms-photo": {
    "source": "apache",
    "extensions": ["wdp"]
  },
  "image/vnd.net-fpx": {
    "source": "iana",
    "extensions": ["npx"]
  },
  "image/vnd.pco.b16": {
    "source": "iana",
    "extensions": ["b16"]
  },
  "image/vnd.radiance": {
    "source": "iana"
  },
  "image/vnd.sealed.png": {
    "source": "iana"
  },
  "image/vnd.sealedmedia.softseal.gif": {
    "source": "iana"
  },
  "image/vnd.sealedmedia.softseal.jpg": {
    "source": "iana"
  },
  "image/vnd.svf": {
    "source": "iana"
  },
  "image/vnd.tencent.tap": {
    "source": "iana",
    "extensions": ["tap"]
  },
  "image/vnd.valve.source.texture": {
    "source": "iana",
    "extensions": ["vtf"]
  },
  "image/vnd.wap.wbmp": {
    "source": "iana",
    "extensions": ["wbmp"]
  },
  "image/vnd.xiff": {
    "source": "iana",
    "extensions": ["xif"]
  },
  "image/vnd.zbrush.pcx": {
    "source": "iana",
    "extensions": ["pcx"]
  },
  "image/webp": {
    "source": "iana",
    "extensions": ["webp"]
  },
  "image/wmf": {
    "source": "iana",
    "extensions": ["wmf"]
  },
  "image/x-3ds": {
    "source": "apache",
    "extensions": ["3ds"]
  },
  "image/x-cmu-raster": {
    "source": "apache",
    "extensions": ["ras"]
  },
  "image/x-cmx": {
    "source": "apache",
    "extensions": ["cmx"]
  },
  "image/x-freehand": {
    "source": "apache",
    "extensions": ["fh", "fhc", "fh4", "fh5", "fh7"]
  },
  "image/x-icon": {
    "source": "apache",
    "compressible": true,
    "extensions": ["ico"]
  },
  "image/x-jng": {
    "source": "nginx",
    "extensions": ["jng"]
  },
  "image/x-mrsid-image": {
    "source": "apache",
    "extensions": ["sid"]
  },
  "image/x-ms-bmp": {
    "source": "nginx",
    "compressible": true,
    "extensions": ["bmp"]
  },
  "image/x-pcx": {
    "source": "apache",
    "extensions": ["pcx"]
  },
  "image/x-pict": {
    "source": "apache",
    "extensions": ["pic", "pct"]
  },
  "image/x-portable-anymap": {
    "source": "apache",
    "extensions": ["pnm"]
  },
  "image/x-portable-bitmap": {
    "source": "apache",
    "extensions": ["pbm"]
  },
  "image/x-portable-graymap": {
    "source": "apache",
    "extensions": ["pgm"]
  },
  "image/x-portable-pixmap": {
    "source": "apache",
    "extensions": ["ppm"]
  },
  "image/x-rgb": {
    "source": "apache",
    "extensions": ["rgb"]
  },
  "image/x-tga": {
    "source": "apache",
    "extensions": ["tga"]
  },
  "image/x-xbitmap": {
    "source": "apache",
    "extensions": ["xbm"]
  },
  "image/x-xcf": {
    "compressible": false
  },
  "image/x-xpixmap": {
    "source": "apache",
    "extensions": ["xpm"]
  },
  "image/x-xwindowdump": {
    "source": "apache",
    "extensions": ["xwd"]
  },
  "message/bhttp": {
    "source": "iana"
  },
  "message/cpim": {
    "source": "iana"
  },
  "message/delivery-status": {
    "source": "iana"
  },
  "message/disposition-notification": {
    "source": "iana",
    "extensions": [
      "disposition-notification"
    ]
  },
  "message/external-body": {
    "source": "iana"
  },
  "message/feedback-report": {
    "source": "iana"
  },
  "message/global": {
    "source": "iana",
    "extensions": ["u8msg"]
  },
  "message/global-delivery-status": {
    "source": "iana",
    "extensions": ["u8dsn"]
  },
  "message/global-disposition-notification": {
    "source": "iana",
    "extensions": ["u8mdn"]
  },
  "message/global-headers": {
    "source": "iana",
    "extensions": ["u8hdr"]
  },
  "message/http": {
    "source": "iana",
    "compressible": false
  },
  "message/imdn+xml": {
    "source": "iana",
    "compressible": true
  },
  "message/news": {
    "source": "apache"
  },
  "message/partial": {
    "source": "iana",
    "compressible": false
  },
  "message/rfc822": {
    "source": "iana",
    "compressible": true,
    "extensions": ["eml", "mime"]
  },
  "message/s-http": {
    "source": "apache"
  },
  "message/sip": {
    "source": "iana"
  },
  "message/sipfrag": {
    "source": "iana"
  },
  "message/tracking-status": {
    "source": "iana"
  },
  "message/vnd.si.simp": {
    "source": "apache"
  },
  "message/vnd.wfa.wsc": {
    "source": "iana",
    "extensions": ["wsc"]
  },
  "model/3mf": {
    "source": "iana",
    "extensions": ["3mf"]
  },
  "model/e57": {
    "source": "iana"
  },
  "model/gltf+json": {
    "source": "iana",
    "compressible": true,
    "extensions": ["gltf"]
  },
  "model/gltf-binary": {
    "source": "iana",
    "compressible": true,
    "extensions": ["glb"]
  },
  "model/iges": {
    "source": "iana",
    "compressible": false,
    "extensions": ["igs", "iges"]
  },
  "model/jt": {
    "source": "iana",
    "extensions": ["jt"]
  },
  "model/mesh": {
    "source": "iana",
    "compressible": false,
    "extensions": ["msh", "mesh", "silo"]
  },
  "model/mtl": {
    "source": "iana",
    "extensions": ["mtl"]
  },
  "model/obj": {
    "source": "iana",
    "extensions": ["obj"]
  },
  "model/prc": {
    "source": "iana",
    "extensions": ["prc"]
  },
  "model/step": {
    "source": "iana"
  },
  "model/step+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["stpx"]
  },
  "model/step+zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["stpz"]
  },
  "model/step-xml+zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["stpxz"]
  },
  "model/stl": {
    "source": "iana",
    "extensions": ["stl"]
  },
  "model/u3d": {
    "source": "iana",
    "extensions": ["u3d"]
  },
  "model/vnd.cld": {
    "source": "iana",
    "extensions": ["cld"]
  },
  "model/vnd.collada+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["dae"]
  },
  "model/vnd.dwf": {
    "source": "iana",
    "extensions": ["dwf"]
  },
  "model/vnd.flatland.3dml": {
    "source": "iana"
  },
  "model/vnd.gdl": {
    "source": "iana",
    "extensions": ["gdl"]
  },
  "model/vnd.gs-gdl": {
    "source": "apache"
  },
  "model/vnd.gs.gdl": {
    "source": "iana"
  },
  "model/vnd.gtw": {
    "source": "iana",
    "extensions": ["gtw"]
  },
  "model/vnd.moml+xml": {
    "source": "iana",
    "compressible": true
  },
  "model/vnd.mts": {
    "source": "iana",
    "extensions": ["mts"]
  },
  "model/vnd.opengex": {
    "source": "iana",
    "extensions": ["ogex"]
  },
  "model/vnd.parasolid.transmit.binary": {
    "source": "iana",
    "extensions": ["x_b"]
  },
  "model/vnd.parasolid.transmit.text": {
    "source": "iana",
    "extensions": ["x_t"]
  },
  "model/vnd.pytha.pyox": {
    "source": "iana",
    "extensions": ["pyo", "pyox"]
  },
  "model/vnd.rosette.annotated-data-model": {
    "source": "iana"
  },
  "model/vnd.sap.vds": {
    "source": "iana",
    "extensions": ["vds"]
  },
  "model/vnd.usda": {
    "source": "iana",
    "extensions": ["usda"]
  },
  "model/vnd.usdz+zip": {
    "source": "iana",
    "compressible": false,
    "extensions": ["usdz"]
  },
  "model/vnd.valve.source.compiled-map": {
    "source": "iana",
    "extensions": ["bsp"]
  },
  "model/vnd.vtu": {
    "source": "iana",
    "extensions": ["vtu"]
  },
  "model/vrml": {
    "source": "iana",
    "compressible": false,
    "extensions": ["wrl", "vrml"]
  },
  "model/x3d+binary": {
    "source": "apache",
    "compressible": false,
    "extensions": ["x3db", "x3dbz"]
  },
  "model/x3d+fastinfoset": {
    "source": "iana",
    "extensions": ["x3db"]
  },
  "model/x3d+vrml": {
    "source": "apache",
    "compressible": false,
    "extensions": ["x3dv", "x3dvz"]
  },
  "model/x3d+xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["x3d", "x3dz"]
  },
  "model/x3d-vrml": {
    "source": "iana",
    "extensions": ["x3dv"]
  },
  "multipart/alternative": {
    "source": "iana",
    "compressible": false
  },
  "multipart/appledouble": {
    "source": "iana"
  },
  "multipart/byteranges": {
    "source": "iana"
  },
  "multipart/digest": {
    "source": "iana"
  },
  "multipart/encrypted": {
    "source": "iana",
    "compressible": false
  },
  "multipart/form-data": {
    "source": "iana",
    "compressible": false
  },
  "multipart/header-set": {
    "source": "iana"
  },
  "multipart/mixed": {
    "source": "iana"
  },
  "multipart/multilingual": {
    "source": "iana"
  },
  "multipart/parallel": {
    "source": "iana"
  },
  "multipart/related": {
    "source": "iana",
    "compressible": false
  },
  "multipart/report": {
    "source": "iana"
  },
  "multipart/signed": {
    "source": "iana",
    "compressible": false
  },
  "multipart/vnd.bint.med-plus": {
    "source": "iana"
  },
  "multipart/voice-message": {
    "source": "iana"
  },
  "multipart/x-mixed-replace": {
    "source": "iana"
  },
  "text/1d-interleaved-parityfec": {
    "source": "iana"
  },
  "text/cache-manifest": {
    "source": "iana",
    "compressible": true,
    "extensions": ["appcache", "manifest"]
  },
  "text/calendar": {
    "source": "iana",
    "extensions": ["ics", "ifb"]
  },
  "text/calender": {
    "compressible": true
  },
  "text/cmd": {
    "compressible": true
  },
  "text/coffeescript": {
    "extensions": ["coffee", "litcoffee"]
  },
  "text/cql": {
    "source": "iana"
  },
  "text/cql-expression": {
    "source": "iana"
  },
  "text/cql-identifier": {
    "source": "iana"
  },
  "text/css": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["css"]
  },
  "text/csv": {
    "source": "iana",
    "compressible": true,
    "extensions": ["csv"]
  },
  "text/csv-schema": {
    "source": "iana"
  },
  "text/directory": {
    "source": "iana"
  },
  "text/dns": {
    "source": "iana"
  },
  "text/ecmascript": {
    "source": "apache"
  },
  "text/encaprtp": {
    "source": "iana"
  },
  "text/enriched": {
    "source": "iana"
  },
  "text/fhirpath": {
    "source": "iana"
  },
  "text/flexfec": {
    "source": "iana"
  },
  "text/fwdred": {
    "source": "iana"
  },
  "text/gff3": {
    "source": "iana"
  },
  "text/grammar-ref-list": {
    "source": "iana"
  },
  "text/hl7v2": {
    "source": "iana"
  },
  "text/html": {
    "source": "iana",
    "compressible": true,
    "extensions": ["html", "htm", "shtml"]
  },
  "text/jade": {
    "extensions": ["jade"]
  },
  "text/javascript": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["js", "mjs"]
  },
  "text/jcr-cnd": {
    "source": "iana"
  },
  "text/jsx": {
    "compressible": true,
    "extensions": ["jsx"]
  },
  "text/less": {
    "compressible": true,
    "extensions": ["less"]
  },
  "text/markdown": {
    "source": "iana",
    "compressible": true,
    "extensions": ["md", "markdown"]
  },
  "text/mathml": {
    "source": "nginx",
    "extensions": ["mml"]
  },
  "text/mdx": {
    "compressible": true,
    "extensions": ["mdx"]
  },
  "text/mizar": {
    "source": "iana"
  },
  "text/n3": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["n3"]
  },
  "text/parameters": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/parityfec": {
    "source": "iana"
  },
  "text/plain": {
    "source": "iana",
    "compressible": true,
    "extensions": ["txt", "text", "conf", "def", "list", "log", "in", "ini"]
  },
  "text/provenance-notation": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/prs.fallenstein.rst": {
    "source": "iana"
  },
  "text/prs.lines.tag": {
    "source": "iana",
    "extensions": ["dsc"]
  },
  "text/prs.prop.logic": {
    "source": "iana"
  },
  "text/raptorfec": {
    "source": "iana"
  },
  "text/red": {
    "source": "iana"
  },
  "text/rfc822-headers": {
    "source": "iana"
  },
  "text/richtext": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rtx"]
  },
  "text/rtf": {
    "source": "iana",
    "compressible": true,
    "extensions": ["rtf"]
  },
  "text/rtp-enc-aescm128": {
    "source": "iana"
  },
  "text/rtploopback": {
    "source": "iana"
  },
  "text/rtx": {
    "source": "iana"
  },
  "text/sgml": {
    "source": "iana",
    "extensions": ["sgml", "sgm"]
  },
  "text/shaclc": {
    "source": "iana"
  },
  "text/shex": {
    "source": "iana",
    "extensions": ["shex"]
  },
  "text/slim": {
    "extensions": ["slim", "slm"]
  },
  "text/spdx": {
    "source": "iana",
    "extensions": ["spdx"]
  },
  "text/strings": {
    "source": "iana"
  },
  "text/stylus": {
    "extensions": ["stylus", "styl"]
  },
  "text/t140": {
    "source": "iana"
  },
  "text/tab-separated-values": {
    "source": "iana",
    "compressible": true,
    "extensions": ["tsv"]
  },
  "text/troff": {
    "source": "iana",
    "extensions": ["t", "tr", "roff", "man", "me", "ms"]
  },
  "text/turtle": {
    "source": "iana",
    "charset": "UTF-8",
    "extensions": ["ttl"]
  },
  "text/ulpfec": {
    "source": "iana"
  },
  "text/uri-list": {
    "source": "iana",
    "compressible": true,
    "extensions": ["uri", "uris", "urls"]
  },
  "text/vcard": {
    "source": "iana",
    "compressible": true,
    "extensions": ["vcard"]
  },
  "text/vnd.a": {
    "source": "iana"
  },
  "text/vnd.abc": {
    "source": "iana"
  },
  "text/vnd.ascii-art": {
    "source": "iana"
  },
  "text/vnd.curl": {
    "source": "iana",
    "extensions": ["curl"]
  },
  "text/vnd.curl.dcurl": {
    "source": "apache",
    "extensions": ["dcurl"]
  },
  "text/vnd.curl.mcurl": {
    "source": "apache",
    "extensions": ["mcurl"]
  },
  "text/vnd.curl.scurl": {
    "source": "apache",
    "extensions": ["scurl"]
  },
  "text/vnd.debian.copyright": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/vnd.dmclientscript": {
    "source": "iana"
  },
  "text/vnd.dvb.subtitle": {
    "source": "iana",
    "extensions": ["sub"]
  },
  "text/vnd.esmertec.theme-descriptor": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/vnd.exchangeable": {
    "source": "iana"
  },
  "text/vnd.familysearch.gedcom": {
    "source": "iana",
    "extensions": ["ged"]
  },
  "text/vnd.ficlab.flt": {
    "source": "iana"
  },
  "text/vnd.fly": {
    "source": "iana",
    "extensions": ["fly"]
  },
  "text/vnd.fmi.flexstor": {
    "source": "iana",
    "extensions": ["flx"]
  },
  "text/vnd.gml": {
    "source": "iana"
  },
  "text/vnd.graphviz": {
    "source": "iana",
    "extensions": ["gv"]
  },
  "text/vnd.hans": {
    "source": "iana"
  },
  "text/vnd.hgl": {
    "source": "iana"
  },
  "text/vnd.in3d.3dml": {
    "source": "iana",
    "extensions": ["3dml"]
  },
  "text/vnd.in3d.spot": {
    "source": "iana",
    "extensions": ["spot"]
  },
  "text/vnd.iptc.newsml": {
    "source": "iana"
  },
  "text/vnd.iptc.nitf": {
    "source": "iana"
  },
  "text/vnd.latex-z": {
    "source": "iana"
  },
  "text/vnd.motorola.reflex": {
    "source": "iana"
  },
  "text/vnd.ms-mediapackage": {
    "source": "iana"
  },
  "text/vnd.net2phone.commcenter.command": {
    "source": "iana"
  },
  "text/vnd.radisys.msml-basic-layout": {
    "source": "iana"
  },
  "text/vnd.senx.warpscript": {
    "source": "iana"
  },
  "text/vnd.si.uricatalogue": {
    "source": "apache"
  },
  "text/vnd.sosi": {
    "source": "iana"
  },
  "text/vnd.sun.j2me.app-descriptor": {
    "source": "iana",
    "charset": "UTF-8",
    "extensions": ["jad"]
  },
  "text/vnd.trolltech.linguist": {
    "source": "iana",
    "charset": "UTF-8"
  },
  "text/vnd.wap.si": {
    "source": "iana"
  },
  "text/vnd.wap.sl": {
    "source": "iana"
  },
  "text/vnd.wap.wml": {
    "source": "iana",
    "extensions": ["wml"]
  },
  "text/vnd.wap.wmlscript": {
    "source": "iana",
    "extensions": ["wmls"]
  },
  "text/vtt": {
    "source": "iana",
    "charset": "UTF-8",
    "compressible": true,
    "extensions": ["vtt"]
  },
  "text/wgsl": {
    "source": "iana",
    "extensions": ["wgsl"]
  },
  "text/x-asm": {
    "source": "apache",
    "extensions": ["s", "asm"]
  },
  "text/x-c": {
    "source": "apache",
    "extensions": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"]
  },
  "text/x-component": {
    "source": "nginx",
    "extensions": ["htc"]
  },
  "text/x-fortran": {
    "source": "apache",
    "extensions": ["f", "for", "f77", "f90"]
  },
  "text/x-gwt-rpc": {
    "compressible": true
  },
  "text/x-handlebars-template": {
    "extensions": ["hbs"]
  },
  "text/x-java-source": {
    "source": "apache",
    "extensions": ["java"]
  },
  "text/x-jquery-tmpl": {
    "compressible": true
  },
  "text/x-lua": {
    "extensions": ["lua"]
  },
  "text/x-markdown": {
    "compressible": true,
    "extensions": ["mkd"]
  },
  "text/x-nfo": {
    "source": "apache",
    "extensions": ["nfo"]
  },
  "text/x-opml": {
    "source": "apache",
    "extensions": ["opml"]
  },
  "text/x-org": {
    "compressible": true,
    "extensions": ["org"]
  },
  "text/x-pascal": {
    "source": "apache",
    "extensions": ["p", "pas"]
  },
  "text/x-processing": {
    "compressible": true,
    "extensions": ["pde"]
  },
  "text/x-sass": {
    "extensions": ["sass"]
  },
  "text/x-scss": {
    "extensions": ["scss"]
  },
  "text/x-setext": {
    "source": "apache",
    "extensions": ["etx"]
  },
  "text/x-sfv": {
    "source": "apache",
    "extensions": ["sfv"]
  },
  "text/x-suse-ymp": {
    "compressible": true,
    "extensions": ["ymp"]
  },
  "text/x-uuencode": {
    "source": "apache",
    "extensions": ["uu"]
  },
  "text/x-vcalendar": {
    "source": "apache",
    "extensions": ["vcs"]
  },
  "text/x-vcard": {
    "source": "apache",
    "extensions": ["vcf"]
  },
  "text/xml": {
    "source": "iana",
    "compressible": true,
    "extensions": ["xml"]
  },
  "text/xml-external-parsed-entity": {
    "source": "iana"
  },
  "text/yaml": {
    "compressible": true,
    "extensions": ["yaml", "yml"]
  },
  "video/1d-interleaved-parityfec": {
    "source": "iana"
  },
  "video/3gpp": {
    "source": "iana",
    "extensions": ["3gp", "3gpp"]
  },
  "video/3gpp-tt": {
    "source": "iana"
  },
  "video/3gpp2": {
    "source": "iana",
    "extensions": ["3g2"]
  },
  "video/av1": {
    "source": "iana"
  },
  "video/bmpeg": {
    "source": "iana"
  },
  "video/bt656": {
    "source": "iana"
  },
  "video/celb": {
    "source": "iana"
  },
  "video/dv": {
    "source": "iana"
  },
  "video/encaprtp": {
    "source": "iana"
  },
  "video/ffv1": {
    "source": "iana"
  },
  "video/flexfec": {
    "source": "iana"
  },
  "video/h261": {
    "source": "iana",
    "extensions": ["h261"]
  },
  "video/h263": {
    "source": "iana",
    "extensions": ["h263"]
  },
  "video/h263-1998": {
    "source": "iana"
  },
  "video/h263-2000": {
    "source": "iana"
  },
  "video/h264": {
    "source": "iana",
    "extensions": ["h264"]
  },
  "video/h264-rcdo": {
    "source": "iana"
  },
  "video/h264-svc": {
    "source": "iana"
  },
  "video/h265": {
    "source": "iana"
  },
  "video/h266": {
    "source": "iana"
  },
  "video/iso.segment": {
    "source": "iana",
    "extensions": ["m4s"]
  },
  "video/jpeg": {
    "source": "iana",
    "extensions": ["jpgv"]
  },
  "video/jpeg2000": {
    "source": "iana"
  },
  "video/jpm": {
    "source": "apache",
    "extensions": ["jpm", "jpgm"]
  },
  "video/jxsv": {
    "source": "iana"
  },
  "video/mj2": {
    "source": "iana",
    "extensions": ["mj2", "mjp2"]
  },
  "video/mp1s": {
    "source": "iana"
  },
  "video/mp2p": {
    "source": "iana"
  },
  "video/mp2t": {
    "source": "iana",
    "extensions": ["ts"]
  },
  "video/mp4": {
    "source": "iana",
    "compressible": false,
    "extensions": ["mp4", "mp4v", "mpg4"]
  },
  "video/mp4v-es": {
    "source": "iana"
  },
  "video/mpeg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["mpeg", "mpg", "mpe", "m1v", "m2v"]
  },
  "video/mpeg4-generic": {
    "source": "iana"
  },
  "video/mpv": {
    "source": "iana"
  },
  "video/nv": {
    "source": "iana"
  },
  "video/ogg": {
    "source": "iana",
    "compressible": false,
    "extensions": ["ogv"]
  },
  "video/parityfec": {
    "source": "iana"
  },
  "video/pointer": {
    "source": "iana"
  },
  "video/quicktime": {
    "source": "iana",
    "compressible": false,
    "extensions": ["qt", "mov"]
  },
  "video/raptorfec": {
    "source": "iana"
  },
  "video/raw": {
    "source": "iana"
  },
  "video/rtp-enc-aescm128": {
    "source": "iana"
  },
  "video/rtploopback": {
    "source": "iana"
  },
  "video/rtx": {
    "source": "iana"
  },
  "video/scip": {
    "source": "iana"
  },
  "video/smpte291": {
    "source": "iana"
  },
  "video/smpte292m": {
    "source": "iana"
  },
  "video/ulpfec": {
    "source": "iana"
  },
  "video/vc1": {
    "source": "iana"
  },
  "video/vc2": {
    "source": "iana"
  },
  "video/vnd.cctv": {
    "source": "iana"
  },
  "video/vnd.dece.hd": {
    "source": "iana",
    "extensions": ["uvh", "uvvh"]
  },
  "video/vnd.dece.mobile": {
    "source": "iana",
    "extensions": ["uvm", "uvvm"]
  },
  "video/vnd.dece.mp4": {
    "source": "iana"
  },
  "video/vnd.dece.pd": {
    "source": "iana",
    "extensions": ["uvp", "uvvp"]
  },
  "video/vnd.dece.sd": {
    "source": "iana",
    "extensions": ["uvs", "uvvs"]
  },
  "video/vnd.dece.video": {
    "source": "iana",
    "extensions": ["uvv", "uvvv"]
  },
  "video/vnd.directv.mpeg": {
    "source": "iana"
  },
  "video/vnd.directv.mpeg-tts": {
    "source": "iana"
  },
  "video/vnd.dlna.mpeg-tts": {
    "source": "iana"
  },
  "video/vnd.dvb.file": {
    "source": "iana",
    "extensions": ["dvb"]
  },
  "video/vnd.fvt": {
    "source": "iana",
    "extensions": ["fvt"]
  },
  "video/vnd.hns.video": {
    "source": "iana"
  },
  "video/vnd.iptvforum.1dparityfec-1010": {
    "source": "iana"
  },
  "video/vnd.iptvforum.1dparityfec-2005": {
    "source": "iana"
  },
  "video/vnd.iptvforum.2dparityfec-1010": {
    "source": "iana"
  },
  "video/vnd.iptvforum.2dparityfec-2005": {
    "source": "iana"
  },
  "video/vnd.iptvforum.ttsavc": {
    "source": "iana"
  },
  "video/vnd.iptvforum.ttsmpeg2": {
    "source": "iana"
  },
  "video/vnd.motorola.video": {
    "source": "iana"
  },
  "video/vnd.motorola.videop": {
    "source": "iana"
  },
  "video/vnd.mpegurl": {
    "source": "iana",
    "extensions": ["mxu", "m4u"]
  },
  "video/vnd.ms-playready.media.pyv": {
    "source": "iana",
    "extensions": ["pyv"]
  },
  "video/vnd.nokia.interleaved-multimedia": {
    "source": "iana"
  },
  "video/vnd.nokia.mp4vr": {
    "source": "iana"
  },
  "video/vnd.nokia.videovoip": {
    "source": "iana"
  },
  "video/vnd.objectvideo": {
    "source": "iana"
  },
  "video/vnd.radgamettools.bink": {
    "source": "iana"
  },
  "video/vnd.radgamettools.smacker": {
    "source": "apache"
  },
  "video/vnd.sealed.mpeg1": {
    "source": "iana"
  },
  "video/vnd.sealed.mpeg4": {
    "source": "iana"
  },
  "video/vnd.sealed.swf": {
    "source": "iana"
  },
  "video/vnd.sealedmedia.softseal.mov": {
    "source": "iana"
  },
  "video/vnd.uvvu.mp4": {
    "source": "iana",
    "extensions": ["uvu", "uvvu"]
  },
  "video/vnd.vivo": {
    "source": "iana",
    "extensions": ["viv"]
  },
  "video/vnd.youtube.yt": {
    "source": "iana"
  },
  "video/vp8": {
    "source": "iana"
  },
  "video/vp9": {
    "source": "iana"
  },
  "video/webm": {
    "source": "apache",
    "compressible": false,
    "extensions": ["webm"]
  },
  "video/x-f4v": {
    "source": "apache",
    "extensions": ["f4v"]
  },
  "video/x-fli": {
    "source": "apache",
    "extensions": ["fli"]
  },
  "video/x-flv": {
    "source": "apache",
    "compressible": false,
    "extensions": ["flv"]
  },
  "video/x-m4v": {
    "source": "apache",
    "extensions": ["m4v"]
  },
  "video/x-matroska": {
    "source": "apache",
    "compressible": false,
    "extensions": ["mkv", "mk3d", "mks"]
  },
  "video/x-mng": {
    "source": "apache",
    "extensions": ["mng"]
  },
  "video/x-ms-asf": {
    "source": "apache",
    "extensions": ["asf", "asx"]
  },
  "video/x-ms-vob": {
    "source": "apache",
    "extensions": ["vob"]
  },
  "video/x-ms-wm": {
    "source": "apache",
    "extensions": ["wm"]
  },
  "video/x-ms-wmv": {
    "source": "apache",
    "compressible": false,
    "extensions": ["wmv"]
  },
  "video/x-ms-wmx": {
    "source": "apache",
    "extensions": ["wmx"]
  },
  "video/x-ms-wvx": {
    "source": "apache",
    "extensions": ["wvx"]
  },
  "video/x-msvideo": {
    "source": "apache",
    "extensions": ["avi"]
  },
  "video/x-sgi-movie": {
    "source": "apache",
    "extensions": ["movie"]
  },
  "video/x-smv": {
    "source": "apache",
    "extensions": ["smv"]
  },
  "x-conference/x-cooltalk": {
    "source": "apache",
    "extensions": ["ice"]
  },
  "x-shader/x-fragment": {
    "compressible": true
  },
  "x-shader/x-vertex": {
    "compressible": true
  }
};
var types = /* @__PURE__ */ new Map();
var extensions = /* @__PURE__ */ new Map();
var preference = ["nginx", "apache", void 0, "iana"];
for (const type2 of Object.keys(db_default)) {
  const mime = db_default[type2];
  const exts = mime.extensions;
  if (!exts || !exts.length) {
    continue;
  }
  extensions.set(type2, exts);
  for (const ext of exts) {
    const current = types.get(ext);
    if (current) {
      const from = preference.indexOf(db_default[current].source);
      const to = preference.indexOf(mime.source);
      if (current !== "application/octet-stream" && current !== "application/mp4" && (from > to || // @ts-ignore work around https://github.com/denoland/dnt/issues/148
      from === to && current.startsWith("application/"))) {
        continue;
      }
    }
    types.set(ext, type2);
  }
}
function getCharset(type2) {
  try {
    const [mediaType, params] = parseMediaType(type2);
    if (params == null ? void 0 : params.charset) {
      return params.charset;
    }
    const entry = db_default[mediaType];
    if (entry == null ? void 0 : entry.charset) {
      return entry.charset;
    }
    if (mediaType.startsWith("text/")) {
      return "UTF-8";
    }
  } catch (e) {
  }
  return void 0;
}
function formatMediaType(type2, param) {
  let serializedMediaType = "";
  const [major = "", sub] = type2.split("/");
  if (!sub) {
    if (!isToken(type2)) {
      return "";
    }
    serializedMediaType += type2.toLowerCase();
  } else {
    if (!isToken(major) || !isToken(sub)) {
      return "";
    }
    serializedMediaType += `${major.toLowerCase()}/${sub.toLowerCase()}`;
  }
  if (param) {
    param = isIterator(param) ? Object.fromEntries(param) : param;
    const attrs = Object.keys(param);
    attrs.sort();
    for (const attribute of attrs) {
      if (!isToken(attribute)) {
        return "";
      }
      const value = param[attribute];
      serializedMediaType += `; ${attribute.toLowerCase()}`;
      const needEnc = needsEncoding(value);
      if (needEnc) {
        serializedMediaType += "*";
      }
      serializedMediaType += "=";
      if (needEnc) {
        serializedMediaType += `utf-8''${encodeURIComponent(value)}`;
        continue;
      }
      if (isToken(value)) {
        serializedMediaType += value;
        continue;
      }
      serializedMediaType += `"${value.replace(/["\\]/gi, (m) => `\\${m}`)}"`;
    }
  }
  return serializedMediaType;
}
function typeByExtension(extension) {
  extension = extension.startsWith(".") ? extension.slice(1) : extension;
  return types.get(extension.toLowerCase());
}
function contentType(extensionOrType) {
  try {
    const [mediaType, params = {}] = extensionOrType.includes("/") ? parseMediaType(extensionOrType) : [typeByExtension(extensionOrType), void 0];
    if (!mediaType) {
      return void 0;
    }
    if (!("charset" in params)) {
      const charset = getCharset(mediaType);
      if (charset) {
        params.charset = charset;
      }
    }
    return formatMediaType(mediaType, params);
  } catch (e) {
  }
  return void 0;
}
function extname(path) {
  assertPath(path);
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  for (let i = path.length - 1; i >= 0; --i) {
    const code3 = path.charCodeAt(i);
    if (isPosixPathSeparator(code3)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code3 === CHAR_DOT) {
      if (startDot === -1) startDot = i;
      else if (preDotState !== 1) preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path.slice(startDot, end);
}
function extname2(path) {
  assertPath(path);
  let start = 0;
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  if (path.length >= 2 && path.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path.charCodeAt(0))) {
    start = startPart = 2;
  }
  for (let i = path.length - 1; i >= start; --i) {
    const code3 = path.charCodeAt(i);
    if (isPathSeparator(code3)) {
      if (!matchedSlash) {
        startPart = i + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i + 1;
    }
    if (code3 === CHAR_DOT) {
      if (startDot === -1) startDot = i;
      else if (preDotState !== 1) preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path.slice(startDot, end);
}
function extname3(path) {
  return isWindows ? extname2(path) : extname(path);
}
function assertArgs2(from, to) {
  assertPath(from);
  assertPath(to);
  if (from === to) return "";
}
function relative(from, to) {
  assertArgs2(from, to);
  from = resolve(from);
  to = resolve(to);
  if (from === to) return "";
  let fromStart = 1;
  const fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (!isPosixPathSeparator(from.charCodeAt(fromStart))) break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 1;
  const toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (!isPosixPathSeparator(to.charCodeAt(toStart))) break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (isPosixPathSeparator(to.charCodeAt(toStart + i))) {
          return to.slice(toStart + i + 1);
        } else if (i === 0) {
          return to.slice(toStart + i);
        }
      } else if (fromLen > length) {
        if (isPosixPathSeparator(from.charCodeAt(fromStart + i))) {
          lastCommonSep = i;
        } else if (i === 0) {
          lastCommonSep = 0;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode) break;
    else if (isPosixPathSeparator(fromCode)) lastCommonSep = i;
  }
  let out = "";
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || isPosixPathSeparator(from.charCodeAt(i))) {
      if (out.length === 0) out += "..";
      else out += "/..";
    }
  }
  if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
  else {
    toStart += lastCommonSep;
    if (isPosixPathSeparator(to.charCodeAt(toStart))) ++toStart;
    return to.slice(toStart);
  }
}
function relative2(from, to) {
  assertArgs2(from, to);
  const fromOrig = resolve2(from);
  const toOrig = resolve2(to);
  if (fromOrig === toOrig) return "";
  from = fromOrig.toLowerCase();
  to = toOrig.toLowerCase();
  if (from === to) return "";
  let fromStart = 0;
  let fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (from.charCodeAt(fromStart) !== CHAR_BACKWARD_SLASH) break;
  }
  for (; fromEnd - 1 > fromStart; --fromEnd) {
    if (from.charCodeAt(fromEnd - 1) !== CHAR_BACKWARD_SLASH) break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 0;
  let toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (to.charCodeAt(toStart) !== CHAR_BACKWARD_SLASH) break;
  }
  for (; toEnd - 1 > toStart; --toEnd) {
    if (to.charCodeAt(toEnd - 1) !== CHAR_BACKWARD_SLASH) break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i = 0;
  for (; i <= length; ++i) {
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
          return toOrig.slice(toStart + i + 1);
        } else if (i === 2) {
          return toOrig.slice(toStart + i);
        }
      }
      if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
          lastCommonSep = i;
        } else if (i === 2) {
          lastCommonSep = 3;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i);
    const toCode = to.charCodeAt(toStart + i);
    if (fromCode !== toCode) break;
    else if (fromCode === CHAR_BACKWARD_SLASH) lastCommonSep = i;
  }
  if (i !== length && lastCommonSep === -1) {
    return toOrig;
  }
  let out = "";
  if (lastCommonSep === -1) lastCommonSep = 0;
  for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
    if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
      if (out.length === 0) out += "..";
      else out += "\\..";
    }
  }
  if (out.length > 0) {
    return out + toOrig.slice(toStart + lastCommonSep, toEnd);
  } else {
    toStart += lastCommonSep;
    if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) ++toStart;
    return toOrig.slice(toStart, toEnd);
  }
}
function relative3(from, to) {
  return isWindows ? relative2(from, to) : relative(from, to);
}
var WHITESPACE_ENCODINGS = {
  "	": "%09",
  "\n": "%0A",
  "\v": "%0B",
  "\f": "%0C",
  "\r": "%0D",
  " ": "%20"
};
function encodeWhitespace(string) {
  return string.replaceAll(/[\s]/g, (c) => {
    var _a2;
    return (_a2 = WHITESPACE_ENCODINGS[c]) != null ? _a2 : c;
  });
}
function toFileUrl(path) {
  if (!isAbsolute(path)) {
    throw new TypeError(`Path must be absolute: received "${path}"`);
  }
  const url = new URL("file:///");
  url.pathname = encodeWhitespace(
    path.replace(/%/g, "%25").replace(/\\/g, "%5C")
  );
  return url;
}
function toFileUrl2(path) {
  if (!isAbsolute2(path)) {
    throw new TypeError(`Path must be absolute: received "${path}"`);
  }
  const [, hostname, pathname] = path.match(
    /^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/
  );
  const url = new URL("file:///");
  url.pathname = encodeWhitespace(pathname.replace(/%/g, "%25"));
  if (hostname !== void 0 && hostname !== "localhost") {
    url.hostname = hostname;
    if (!url.hostname) {
      throw new TypeError(`Invalid hostname: "${url.hostname}"`);
    }
  }
  return url;
}
function toFileUrl3(path) {
  return isWindows ? toFileUrl2(path) : toFileUrl(path);
}
var { Deno: Deno3 } = globalThis;
var noColor2 = typeof (Deno3 == null ? void 0 : Deno3.noColor) === "boolean" ? Deno3.noColor : false;
var enabled = !noColor2;
function code(open, close) {
  return {
    open: `\x1B[${open.join(";")}m`,
    close: `\x1B[${close}m`,
    regexp: new RegExp(`\\x1b\\[${close}m`, "g")
  };
}
function run(str, code3) {
  return enabled ? `${code3.open}${str.replace(code3.regexp, code3.open)}${code3.close}` : str;
}
function bold2(str) {
  return run(str, code([1], 22));
}
function italic(str) {
  return run(str, code([3], 23));
}
function red2(str) {
  return run(str, code([31], 39));
}
function green2(str) {
  return run(str, code([32], 39));
}
function yellow(str) {
  return run(str, code([33], 39));
}
function blue(str) {
  return run(str, code([34], 39));
}
function cyan(str) {
  return run(str, code([36], 39));
}
function white2(str) {
  return run(str, code([37], 39));
}
function gray2(str) {
  return brightBlack(str);
}
function brightBlack(str) {
  return run(str, code([90], 39));
}
var ANSI_PATTERN2 = new RegExp(
  [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TXZcf-nq-uy=><~]))"
  ].join("|"),
  "g"
);
var RealEnvironment = class {
  env(key) {
    return Deno.env.get(key);
  }
  stat(path) {
    return Deno.stat(path);
  }
  statSync(path) {
    return Deno.statSync(path);
  }
  get os() {
    return Deno.build.os;
  }
};
function which(_0) {
  return __async(this, arguments, function* (command, environment = new RealEnvironment()) {
    var _a2;
    const systemInfo = getSystemInfo(command, environment);
    if (systemInfo == null) {
      return void 0;
    }
    for (const pathItem of systemInfo.pathItems) {
      const filePath = pathItem + command;
      if (systemInfo.pathExts) {
        (_a2 = environment.requestPermission) == null ? void 0 : _a2.call(environment, pathItem);
        for (const pathExt of systemInfo.pathExts) {
          const filePath2 = pathItem + command + pathExt;
          if (yield pathMatches(environment, filePath2)) {
            return filePath2;
          }
        }
      } else if (yield pathMatches(environment, filePath)) {
        return filePath;
      }
    }
    return void 0;
  });
}
function pathMatches(environment, path) {
  return __async(this, null, function* () {
    try {
      const result = yield environment.stat(path);
      return result.isFile;
    } catch (err) {
      if (err instanceof Deno.errors.PermissionDenied) {
        throw err;
      }
      return false;
    }
  });
}
function whichSync(command, environment = new RealEnvironment()) {
  var _a2;
  const systemInfo = getSystemInfo(command, environment);
  if (systemInfo == null) {
    return void 0;
  }
  for (const pathItem of systemInfo.pathItems) {
    const filePath = pathItem + command;
    if (systemInfo.pathExts) {
      (_a2 = environment.requestPermission) == null ? void 0 : _a2.call(environment, pathItem);
      for (const pathExt of systemInfo.pathExts) {
        const filePath2 = pathItem + command + pathExt;
        if (pathMatchesSync(environment, filePath2)) {
          return filePath2;
        }
      }
    } else if (pathMatchesSync(environment, filePath)) {
      return filePath;
    }
  }
  return void 0;
}
function pathMatchesSync(environment, path) {
  try {
    const result = environment.statSync(path);
    return result.isFile;
  } catch (err) {
    if (err instanceof Deno.errors.PermissionDenied) {
      throw err;
    }
    return false;
  }
}
function getSystemInfo(command, environment) {
  const isWindows5 = environment.os === "windows";
  const envValueSeparator = isWindows5 ? ";" : ":";
  const path = environment.env("PATH");
  const pathSeparator = isWindows5 ? "\\" : "/";
  if (path == null) {
    return void 0;
  }
  return {
    pathItems: splitEnvValue(path).map((item) => normalizeDir(item)),
    pathExts: getPathExts(),
    isNameMatch: isWindows5 ? (a, b) => a.toLowerCase() === b.toLowerCase() : (a, b) => a === b
  };
  function getPathExts() {
    var _a2;
    if (!isWindows5) {
      return void 0;
    }
    const pathExtText = (_a2 = environment.env("PATHEXT")) != null ? _a2 : ".EXE;.CMD;.BAT;.COM";
    const pathExts = splitEnvValue(pathExtText);
    const lowerCaseCommand = command.toLowerCase();
    for (const pathExt of pathExts) {
      if (lowerCaseCommand.endsWith(pathExt.toLowerCase())) {
        return void 0;
      }
    }
    return pathExts;
  }
  function splitEnvValue(value) {
    return value.split(envValueSeparator).map((item) => item.trim()).filter((item) => item.length > 0);
  }
  function normalizeDir(dirPath) {
    if (!dirPath.endsWith(pathSeparator)) {
      dirPath += pathSeparator;
    }
    return dirPath;
  }
}
var Path = (_f = class {
  /** Creates a new path from the provided string, URL, or another Path. */
  constructor(path) {
    __privateAdd(this, __Path_instances);
    __privateAdd(this, _path);
    __privateAdd(this, _knownResolved, false);
    if (path instanceof URL) {
      __privateSet(this, _path, fromFileUrl3(path));
    } else if (path instanceof _f) {
      __privateSet(this, _path, path.toString());
    } else if (typeof path === "string") {
      if (path.startsWith("file://")) {
        __privateSet(this, _path, fromFileUrl3(path));
      } else {
        __privateSet(this, _path, path);
      }
    } else {
      throw new Error(
        `Invalid path argument: ${path}

Provide a URL, string, or another Path.`
      );
    }
  }
  /** @internal */
  static [Symbol.hasInstance](instance) {
    var _a2;
    return ((_a2 = instance == null ? void 0 : instance.constructor) == null ? void 0 : _a2.instanceofSymbol) === _f.instanceofSymbol;
  }
  /** @internal */
  [Symbol.for("Deno.customInspect")]() {
    return `Path("${__privateGet(this, _path)}")`;
  }
  /** @internal */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `Path("${__privateGet(this, _path)}")`;
  }
  /** Gets the string representation of this path. */
  toString() {
    return __privateGet(this, _path);
  }
  /** Resolves the path and gets the file URL. */
  toFileUrl() {
    const resolvedPath = this.resolve();
    return toFileUrl3(resolvedPath.toString());
  }
  /** If this path reference is the same as another one. */
  equals(otherPath) {
    return this.resolve().toString() === otherPath.resolve().toString();
  }
  /** Follows symlinks and gets if this path is a directory. */
  isDirSync() {
    var _a2, _b2;
    return (_b2 = (_a2 = this.statSync()) == null ? void 0 : _a2.isDirectory) != null ? _b2 : false;
  }
  /** Follows symlinks and gets if this path is a file. */
  isFileSync() {
    var _a2, _b2;
    return (_b2 = (_a2 = this.statSync()) == null ? void 0 : _a2.isFile) != null ? _b2 : false;
  }
  /** Gets if this path is a symlink. */
  isSymlinkSync() {
    var _a2, _b2;
    return (_b2 = (_a2 = this.lstatSync()) == null ? void 0 : _a2.isSymlink) != null ? _b2 : false;
  }
  /** Gets if this path is an absolute path. */
  isAbsolute() {
    return isAbsolute3(__privateGet(this, _path));
  }
  /** Gets if this path is relative. */
  isRelative() {
    return !this.isAbsolute();
  }
  /** Joins the provided path segments onto this path. */
  join(...pathSegments) {
    return new _f(join3(__privateGet(this, _path), ...pathSegments));
  }
  /** Resolves this path to an absolute path along with the provided path segments. */
  resolve(...pathSegments) {
    if (__privateGet(this, _knownResolved) && pathSegments.length === 0) {
      return this;
    }
    const resolvedPath = resolve3(__privateGet(this, _path), ...pathSegments);
    if (pathSegments.length === 0 && resolvedPath === __privateGet(this, _path)) {
      __privateSet(this, _knownResolved, true);
      return this;
    } else {
      const pathRef = new _f(resolvedPath);
      __privateSet(pathRef, _knownResolved, true);
      return pathRef;
    }
  }
  /**
   * Normalizes the `path`, resolving `'..'` and `'.'` segments.
   * Note that resolving these segments does not necessarily mean that all will be eliminated.
   * A `'..'` at the top-level will be preserved, and an empty path is canonically `'.'`.
   */
  normalize() {
    return new _f(normalize3(__privateGet(this, _path)));
  }
  /** Resolves the `Deno.FileInfo` of this path following symlinks. */
  stat() {
    return __async(this, null, function* () {
      try {
        return yield Deno.stat(__privateGet(this, _path));
      } catch (err) {
        if (err instanceof Deno.errors.NotFound) {
          return void 0;
        } else {
          throw err;
        }
      }
    });
  }
  /** Synchronously resolves the `Deno.FileInfo` of this
   * path following symlinks. */
  statSync() {
    try {
      return Deno.statSync(__privateGet(this, _path));
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        return void 0;
      } else {
        throw err;
      }
    }
  }
  /** Resolves the `Deno.FileInfo` of this path without
   * following symlinks. */
  lstat() {
    return __async(this, null, function* () {
      try {
        return yield Deno.lstat(__privateGet(this, _path));
      } catch (err) {
        if (err instanceof Deno.errors.NotFound) {
          return void 0;
        } else {
          throw err;
        }
      }
    });
  }
  /** Synchronously resolves the `Deno.FileInfo` of this path
   * without following symlinks. */
  lstatSync() {
    try {
      return Deno.lstatSync(__privateGet(this, _path));
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        return void 0;
      } else {
        throw err;
      }
    }
  }
  /**
   * Gets the directory path. In most cases, it is recommended
   * to use `.parent()` instead since it will give you a `PathRef`.
   */
  dirname() {
    return dirname3(__privateGet(this, _path));
  }
  /** Gets the file or directory name of the path. */
  basename() {
    return basename3(__privateGet(this, _path));
  }
  /** Resolves the path getting all its ancestor directories in order. */
  *ancestors() {
    let ancestor = this.parent();
    while (ancestor != null) {
      yield ancestor;
      ancestor = ancestor.parent();
    }
  }
  /** Iterates over the components of a path. */
  *components() {
    const path = this.normalize();
    let last_index = 0;
    if (__privateGet(path, _path).startsWith("\\\\?\\")) {
      last_index = nextSlash(__privateGet(path, _path), 4);
      if (last_index === -1) {
        yield __privateGet(path, _path);
        return;
      } else {
        yield __privateGet(path, _path).substring(0, last_index);
        last_index += 1;
      }
    } else if (__privateGet(path, _path).startsWith("/")) {
      last_index += 1;
    }
    while (true) {
      const index = nextSlash(__privateGet(path, _path), last_index);
      if (index < 0) {
        const part = __privateGet(path, _path).substring(last_index);
        if (part.length > 0) {
          yield part;
        }
        return;
      }
      yield __privateGet(path, _path).substring(last_index, index);
      last_index = index + 1;
    }
    function nextSlash(path2, start) {
      for (let i = start; i < path2.length; i++) {
        const c = path2.charCodeAt(i);
        if (c === 47 || c === 92) {
          return i;
        }
      }
      return -1;
    }
  }
  /** Gets if the provided path starts with the specified Path, URL, or string.
   *
   * This verifies based on matching the components.
   *
   * ```
   * assert(new Path("/a/b/c").startsWith("/a/b"));
   * assert(!new Path("/example").endsWith("/exam"));
   * ```
   */
  startsWith(path) {
    var _a2;
    const startsWithComponents = ensurePath(path).components();
    for (const component of this.components()) {
      const next = startsWithComponents.next();
      if (next.done) {
        return true;
      }
      if (next.value !== component) {
        return false;
      }
    }
    return (_a2 = startsWithComponents.next().done) != null ? _a2 : true;
  }
  /** Gets if the provided path ends with the specified Path, URL, or string.
   *
   * This verifies based on matching the components.
   *
   * ```
   * assert(new Path("/a/b/c").endsWith("b/c"));
   * assert(!new Path("/a/b/example").endsWith("ple"));
   * ```
   */
  endsWith(path) {
    var _a2, _b2;
    const endsWithComponents = __privateMethod(_a2 = ensurePath(path), __Path_instances, rcomponents_fn).call(_a2);
    for (const component of __privateMethod(this, __Path_instances, rcomponents_fn).call(this)) {
      const next = endsWithComponents.next();
      if (next.done) {
        return true;
      }
      if (next.value !== component) {
        return false;
      }
    }
    return (_b2 = endsWithComponents.next().done) != null ? _b2 : true;
  }
  /** Gets the parent directory or returns undefined if the parent is the root directory. */
  parent() {
    const resolvedPath = this.resolve();
    const dirname4 = resolvedPath.dirname();
    if (dirname4 === __privateGet(resolvedPath, _path)) {
      return void 0;
    } else {
      return new _f(dirname4);
    }
  }
  /** Gets the parent or throws if the current directory was the root. */
  parentOrThrow() {
    const parent = this.parent();
    if (parent == null) {
      throw new Error(`Cannot get the parent directory of '${__privateGet(this, _path)}'.`);
    }
    return parent;
  }
  /**
   * Returns the extension of the path with leading period or undefined
   * if there is no extension.
   */
  extname() {
    const extName = extname3(__privateGet(this, _path));
    return extName.length === 0 ? void 0 : extName;
  }
  /** Gets a new path reference with the provided extension. */
  withExtname(ext) {
    var _a2;
    const currentExt = this.extname();
    const hasLeadingPeriod = ext.charCodeAt(0) === /* period */
    46;
    if (!hasLeadingPeriod && ext.length !== 0) {
      ext = "." + ext;
    }
    return new _f(
      __privateGet(this, _path).substring(0, __privateGet(this, _path).length - ((_a2 = currentExt == null ? void 0 : currentExt.length) != null ? _a2 : 0)) + ext
    );
  }
  /** Gets a new path reference with the provided file or directory name. */
  withBasename(basename4) {
    const currentBaseName = this.basename();
    return new _f(
      __privateGet(this, _path).substring(0, __privateGet(this, _path).length - currentBaseName.length) + basename4
    );
  }
  /** Gets the relative path from this path to the specified path. */
  relative(to) {
    const toPathRef = ensurePath(to);
    return relative3(__privateGet(this.resolve(), _path), toPathRef.resolve().toString());
  }
  /** Gets if the path exists. Beware of TOCTOU issues. */
  exists() {
    return this.lstat().then((info) => info != null);
  }
  /** Synchronously gets if the path exists. Beware of TOCTOU issues. */
  existsSync() {
    return this.lstatSync() != null;
  }
  /** Resolves to the absolute normalized path, with symbolic links resolved. */
  realPath() {
    return Deno.realPath(__privateGet(this, _path)).then((path) => new _f(path));
  }
  /** Synchronously resolves to the absolute normalized path, with symbolic links resolved. */
  realPathSync() {
    return new _f(Deno.realPathSync(__privateGet(this, _path)));
  }
  /** Creates a directory at this path.
   * @remarks By default, this is recursive.
   */
  mkdir(options) {
    return __async(this, null, function* () {
      yield Deno.mkdir(__privateGet(this, _path), __spreadValues({
        recursive: true
      }, options));
      return this;
    });
  }
  /** Synchronously creates a directory at this path.
   * @remarks By default, this is recursive.
   */
  mkdirSync(options) {
    Deno.mkdirSync(__privateGet(this, _path), __spreadValues({
      recursive: true
    }, options));
    return this;
  }
  symlinkTo(target, opts) {
    return __async(this, null, function* () {
      yield createSymlink(__privateMethod(this, __Path_instances, resolveCreateSymlinkOpts_fn).call(this, target, opts));
    });
  }
  symlinkToSync(target, opts) {
    createSymlinkSync(__privateMethod(this, __Path_instances, resolveCreateSymlinkOpts_fn).call(this, target, opts));
  }
  /**
   * Creates a hardlink to the provided target path.
   */
  linkTo(targetPath) {
    return __async(this, null, function* () {
      const targetPathRef = ensurePath(targetPath).resolve();
      yield Deno.link(targetPathRef.toString(), this.resolve().toString());
    });
  }
  /**
   * Synchronously creates a hardlink to the provided target path.
   */
  linkToSync(targetPath) {
    const targetPathRef = ensurePath(targetPath).resolve();
    Deno.linkSync(targetPathRef.toString(), this.resolve().toString());
  }
  /** Reads the entries in the directory. */
  readDir() {
    return __asyncGenerator(this, null, function* () {
      const dir = this.resolve();
      try {
        for (var iter = __forAwait(Deno.readDir(__privateGet(dir, _path))), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
          const entry = temp.value;
          yield __spreadProps(__spreadValues({}, entry), {
            path: dir.join(entry.name)
          });
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield new __await(temp.call(iter)));
        } finally {
          if (error)
            throw error[0];
        }
      }
    });
  }
  /** Synchronously reads the entries in the directory. */
  *readDirSync() {
    const dir = this.resolve();
    for (const entry of Deno.readDirSync(__privateGet(dir, _path))) {
      yield __spreadProps(__spreadValues({}, entry), {
        path: dir.join(entry.name)
      });
    }
  }
  /** Reads only the directory file paths, not including symlinks. */
  readDirFilePaths() {
    return __asyncGenerator(this, null, function* () {
      const dir = this.resolve();
      try {
        for (var iter = __forAwait(Deno.readDir(__privateGet(dir, _path))), more, temp, error; more = !(temp = yield new __await(iter.next())).done; more = false) {
          const entry = temp.value;
          if (entry.isFile) {
            yield dir.join(entry.name);
          }
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield new __await(temp.call(iter)));
        } finally {
          if (error)
            throw error[0];
        }
      }
    });
  }
  /** Synchronously reads only the directory file paths, not including symlinks. */
  *readDirFilePathsSync() {
    const dir = this.resolve();
    for (const entry of Deno.readDirSync(__privateGet(dir, _path))) {
      if (entry.isFile) {
        yield dir.join(entry.name);
      }
    }
  }
  /** Reads the bytes from the file. */
  readBytes(options) {
    return Deno.readFile(__privateGet(this, _path), options);
  }
  /** Synchronously reads the bytes from the file. */
  readBytesSync() {
    return Deno.readFileSync(__privateGet(this, _path));
  }
  /** Calls `.readBytes()`, but returns undefined if the path doesn't exist. */
  readMaybeBytes(options) {
    return notFoundToUndefined(() => this.readBytes(options));
  }
  /** Calls `.readBytesSync()`, but returns undefined if the path doesn't exist. */
  readMaybeBytesSync() {
    return notFoundToUndefinedSync(() => this.readBytesSync());
  }
  /** Reads the text from the file. */
  readText(options) {
    return Deno.readTextFile(__privateGet(this, _path), options);
  }
  /** Synchronously reads the text from the file. */
  readTextSync() {
    return Deno.readTextFileSync(__privateGet(this, _path));
  }
  /** Calls `.readText()`, but returns undefined when the path doesn't exist.
   * @remarks This still errors for other kinds of errors reading a file.
   */
  readMaybeText(options) {
    return notFoundToUndefined(() => this.readText(options));
  }
  /** Calls `.readTextSync()`, but returns undefined when the path doesn't exist.
   * @remarks This still errors for other kinds of errors reading a file.
   */
  readMaybeTextSync() {
    return notFoundToUndefinedSync(() => this.readTextSync());
  }
  /** Reads and parses the file as JSON, throwing if it doesn't exist or is not valid JSON. */
  readJson(options) {
    return __async(this, null, function* () {
      return __privateMethod(this, __Path_instances, parseJson_fn).call(this, yield this.readText(options));
    });
  }
  /** Synchronously reads and parses the file as JSON, throwing if it doesn't
   * exist or is not valid JSON. */
  readJsonSync() {
    return __privateMethod(this, __Path_instances, parseJson_fn).call(this, this.readTextSync());
  }
  /**
   * Calls `.readJson()`, but returns undefined if the file doesn't exist.
   * @remarks This method will still throw if the file cannot be parsed as JSON.
   */
  readMaybeJson(options) {
    return notFoundToUndefined(() => this.readJson(options));
  }
  /**
   * Calls `.readJsonSync()`, but returns undefined if the file doesn't exist.
   * @remarks This method will still throw if the file cannot be parsed as JSON.
   */
  readMaybeJsonSync() {
    return notFoundToUndefinedSync(() => this.readJsonSync());
  }
  /** Writes out the provided bytes or text to the file. */
  write(data, options) {
    return __async(this, null, function* () {
      yield __privateMethod(this, __Path_instances, withFileForWriting_fn).call(this, options, (file) => {
        return writeAll(file, data);
      });
      return this;
    });
  }
  /** Synchronously writes out the provided bytes or text to the file. */
  writeSync(data, options) {
    __privateMethod(this, __Path_instances, withFileForWritingSync_fn).call(this, options, (file) => {
      writeAllSync(file, data);
    });
    return this;
  }
  /** Writes the provided text to this file. */
  writeText(text, options) {
    return this.write(new TextEncoder().encode(text), options);
  }
  /** Synchronously writes the provided text to this file. */
  writeTextSync(text, options) {
    return this.writeSync(new TextEncoder().encode(text), options);
  }
  /** Writes out the provided object as compact JSON. */
  writeJson(obj, options) {
    return __async(this, null, function* () {
      const text = JSON.stringify(obj);
      yield this.writeText(text + "\n", options);
      return this;
    });
  }
  /** Synchronously writes out the provided object as compact JSON. */
  writeJsonSync(obj, options) {
    const text = JSON.stringify(obj);
    this.writeTextSync(text + "\n", options);
    return this;
  }
  /** Writes out the provided object as formatted JSON. */
  writeJsonPretty(obj, options) {
    return __async(this, null, function* () {
      const text = JSON.stringify(obj, void 0, 2);
      yield this.writeText(text + "\n", options);
      return this;
    });
  }
  /** Synchronously writes out the provided object as formatted JSON. */
  writeJsonPrettySync(obj, options) {
    const text = JSON.stringify(obj, void 0, 2);
    this.writeTextSync(text + "\n", options);
    return this;
  }
  /** Appends the provided bytes to the file. */
  append(data, options) {
    return __async(this, null, function* () {
      yield __privateMethod(this, __Path_instances, withFileForAppending_fn).call(this, options, (file) => writeAll(file, data));
      return this;
    });
  }
  /** Synchronously appends the provided bytes to the file. */
  appendSync(data, options) {
    __privateMethod(this, __Path_instances, withFileForAppendingSync_fn).call(this, options, (file) => {
      writeAllSync(file, data);
    });
    return this;
  }
  /** Appends the provided text to the file. */
  appendText(text, options) {
    return __async(this, null, function* () {
      yield __privateMethod(this, __Path_instances, withFileForAppending_fn).call(this, options, (file) => writeAll(file, new TextEncoder().encode(text)));
      return this;
    });
  }
  /** Synchronously appends the provided text to the file. */
  appendTextSync(text, options) {
    __privateMethod(this, __Path_instances, withFileForAppendingSync_fn).call(this, options, (file) => {
      writeAllSync(file, new TextEncoder().encode(text));
    });
    return this;
  }
  /** Changes the permissions of the file or directory. */
  chmod(mode) {
    return __async(this, null, function* () {
      yield Deno.chmod(__privateGet(this, _path), mode);
      return this;
    });
  }
  /** Synchronously changes the permissions of the file or directory. */
  chmodSync(mode) {
    Deno.chmodSync(__privateGet(this, _path), mode);
    return this;
  }
  /** Changes the ownership permissions of the file. */
  chown(uid, gid) {
    return __async(this, null, function* () {
      yield Deno.chown(__privateGet(this, _path), uid, gid);
      return this;
    });
  }
  /** Synchronously changes the ownership permissions of the file. */
  chownSync(uid, gid) {
    Deno.chownSync(__privateGet(this, _path), uid, gid);
    return this;
  }
  /** Creates a new file or opens the existing one. */
  create() {
    return Deno.create(__privateGet(this, _path)).then((file) => createFsFileWrapper(file));
  }
  /** Synchronously creates a new file or opens the existing one. */
  createSync() {
    return createFsFileWrapper(Deno.createSync(__privateGet(this, _path)));
  }
  /** Creates a file throwing if a file previously existed. */
  createNew() {
    return this.open({
      createNew: true,
      read: true,
      write: true
    });
  }
  /** Synchronously creates a file throwing if a file previously existed. */
  createNewSync() {
    return this.openSync({
      createNew: true,
      read: true,
      write: true
    });
  }
  /** Opens a file. */
  open(options) {
    return Deno.open(__privateGet(this, _path), options).then((file) => createFsFileWrapper(file));
  }
  /** Opens a file synchronously. */
  openSync(options) {
    return createFsFileWrapper(Deno.openSync(__privateGet(this, _path), options));
  }
  /** Removes the file or directory from the file system. */
  remove(options) {
    return __async(this, null, function* () {
      yield Deno.remove(__privateGet(this, _path), options);
      return this;
    });
  }
  /** Removes the file or directory from the file system synchronously. */
  removeSync(options) {
    Deno.removeSync(__privateGet(this, _path), options);
    return this;
  }
  /** Removes the file or directory from the file system, but doesn't throw
   * when the file doesn't exist.
   */
  ensureRemove(options) {
    return __async(this, null, function* () {
      try {
        return yield this.remove(options);
      } catch (err) {
        if (err instanceof Deno.errors.NotFound) {
          return this;
        } else {
          throw err;
        }
      }
    });
  }
  /** Removes the file or directory from the file system, but doesn't throw
   * when the file doesn't exist.
   */
  ensureRemoveSync(options) {
    try {
      return this.removeSync(options);
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        return this;
      } else {
        throw err;
      }
    }
  }
  /**
   * Ensures that a directory is empty.
   * Deletes directory contents if the directory is not empty.
   * If the directory does not exist, it is created.
   * The directory itself is not deleted.
   */
  emptyDir() {
    return __async(this, null, function* () {
      yield emptyDir(this.toString());
      return this;
    });
  }
  /** Synchronous version of `emptyDir()` */
  emptyDirSync() {
    emptyDirSync(this.toString());
    return this;
  }
  /** Ensures that the directory exists.
   * If the directory structure does not exist, it is created. Like mkdir -p.
   */
  ensureDir() {
    return __async(this, null, function* () {
      yield ensureDir(this.toString());
      return this;
    });
  }
  /** Synchronously ensures that the directory exists.
   * If the directory structure does not exist, it is created. Like mkdir -p.
   */
  ensureDirSync() {
    ensureDirSync(this.toString());
    return this;
  }
  /**
   * Ensures that the file exists.
   * If the file that is requested to be created is in directories that do
   * not exist these directories are created. If the file already exists,
   * it is NOTMODIFIED.
   */
  ensureFile() {
    return __async(this, null, function* () {
      yield ensureFile(this.toString());
      return this;
    });
  }
  /**
   * Synchronously ensures that the file exists.
   * If the file that is requested to be created is in directories that do
   * not exist these directories are created. If the file already exists,
   * it is NOTMODIFIED.
   */
  ensureFileSync() {
    ensureFileSync(this.toString());
    return this;
  }
  /** Copies a file or directory to the provided destination.
   * @returns The destination path.
   */
  copy(destinationPath, options) {
    return __async(this, null, function* () {
      const pathRef = ensurePath(destinationPath);
      yield copy(__privateGet(this, _path), pathRef.toString(), options);
      return pathRef;
    });
  }
  /** Copies a file or directory to the provided destination synchronously.
   * @returns The destination path.
   */
  copySync(destinationPath, options) {
    const pathRef = ensurePath(destinationPath);
    copySync(__privateGet(this, _path), pathRef.toString(), options);
    return pathRef;
  }
  /**
   * Copies the file or directory to the specified directory.
   * @returns The destination path.
   */
  copyToDir(destinationDirPath, options) {
    const destinationPath = ensurePath(destinationDirPath).join(this.basename());
    return this.copy(destinationPath, options);
  }
  /**
   * Copies the file or directory to the specified directory synchronously.
   * @returns The destination path.
   */
  copyToDirSync(destinationDirPath, options) {
    const destinationPath = ensurePath(destinationDirPath).join(this.basename());
    return this.copySync(destinationPath, options);
  }
  /**
   * Copies the file to the specified destination path.
   * @returns The destination path.
   */
  copyFile(destinationPath) {
    const pathRef = ensurePath(destinationPath);
    return Deno.copyFile(__privateGet(this, _path), pathRef.toString()).then(() => pathRef);
  }
  /**
   * Copies the file to the destination path synchronously.
   * @returns The destination path.
   */
  copyFileSync(destinationPath) {
    const pathRef = ensurePath(destinationPath);
    Deno.copyFileSync(__privateGet(this, _path), pathRef.toString());
    return pathRef;
  }
  /**
   * Copies the file to the specified directory.
   * @returns The destination path.
   */
  copyFileToDir(destinationDirPath) {
    const destinationPath = ensurePath(destinationDirPath).join(this.basename());
    return this.copyFile(destinationPath);
  }
  /**
   * Copies the file to the specified directory synchronously.
   * @returns The destination path.
   */
  copyFileToDirSync(destinationDirPath) {
    const destinationPath = ensurePath(destinationDirPath).join(this.basename());
    return this.copyFileSync(destinationPath);
  }
  /**
   * Moves the file or directory returning a promise that resolves to
   * the renamed path.
   * @returns The destination path.
   */
  rename(newPath) {
    const pathRef = ensurePath(newPath);
    return Deno.rename(__privateGet(this, _path), pathRef.toString()).then(() => pathRef);
  }
  /**
   * Moves the file or directory returning the renamed path synchronously.
   * @returns The destination path.
   */
  renameSync(newPath) {
    const pathRef = ensurePath(newPath);
    Deno.renameSync(__privateGet(this, _path), pathRef.toString());
    return pathRef;
  }
  /**
   * Moves the file or directory to the specified directory.
   * @returns The destination path.
   */
  renameToDir(destinationDirPath) {
    const destinationPath = ensurePath(destinationDirPath).join(this.basename());
    return this.rename(destinationPath);
  }
  /**
   * Moves the file or directory to the specified directory synchronously.
   * @returns The destination path.
   */
  renameToDirSync(destinationDirPath) {
    const destinationPath = ensurePath(destinationDirPath).join(this.basename());
    return this.renameSync(destinationPath);
  }
  /** Opens the file and pipes it to the writable stream. */
  pipeTo(dest, options) {
    return __async(this, null, function* () {
      const file = yield Deno.open(__privateGet(this, _path), { read: true });
      try {
        yield file.readable.pipeTo(dest, options);
      } finally {
        try {
          file.close();
        } catch (e) {
        }
      }
      return this;
    });
  }
}, _path = new WeakMap(), _knownResolved = new WeakMap(), __Path_instances = new WeakSet(), rcomponents_fn = function* () {
  const path = this.normalize();
  let last_index = void 0;
  while (last_index == null || last_index > 0) {
    const index = nextSlash(
      __privateGet(path, _path),
      last_index == null ? void 0 : last_index - 1
    );
    if (index < 0) {
      const part2 = __privateGet(path, _path).substring(0, last_index);
      if (part2.length > 0) {
        yield part2;
      }
      return;
    }
    const part = __privateGet(path, _path).substring(index + 1, last_index);
    if (last_index != null || part.length > 0) {
      yield part;
    }
    last_index = index;
  }
  function nextSlash(path2, start) {
    for (let i = start != null ? start : path2.length - 1; i >= 0; i--) {
      const c = path2.charCodeAt(i);
      if (c === 47 || c === 92) {
        return i;
      }
    }
    return -1;
  }
}, resolveCreateSymlinkOpts_fn = function(target, opts) {
  if ((opts == null ? void 0 : opts.kind) == null) {
    if (typeof target === "string") {
      return {
        fromPath: this.resolve(),
        targetPath: ensurePath(target),
        text: target,
        type: opts == null ? void 0 : opts.type
      };
    } else {
      throw new Error(
        "Please specify if this symlink is absolute or relative. Otherwise provide the target text."
      );
    }
  }
  const targetPath = ensurePath(target).resolve();
  if ((opts == null ? void 0 : opts.kind) === "relative") {
    const fromPath = this.resolve();
    let relativePath;
    if (fromPath.dirname() === targetPath.dirname()) {
      relativePath = targetPath.basename();
    } else {
      relativePath = fromPath.relative(targetPath);
    }
    return {
      fromPath,
      targetPath,
      text: relativePath,
      type: opts == null ? void 0 : opts.type
    };
  } else {
    return {
      fromPath: this.resolve(),
      targetPath,
      text: targetPath.toString(),
      type: opts == null ? void 0 : opts.type
    };
  }
}, parseJson_fn = function(text) {
  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(`Failed parsing JSON in '${this.toString()}'.`, {
      cause: err
    });
  }
}, withFileForAppending_fn = function(options, action) {
  return __privateMethod(this, __Path_instances, withFileForWriting_fn).call(this, __spreadValues({
    append: true
  }, options), action);
}, withFileForWriting_fn = function(options, action) {
  return __async(this, null, function* () {
    const file = yield __privateMethod(this, __Path_instances, openFileMaybeCreatingDirectory_fn).call(this, __spreadValues({
      write: true,
      create: true,
      truncate: (options == null ? void 0 : options.append) !== true
    }, options));
    try {
      return yield action(file);
    } finally {
      try {
        file.close();
      } catch (e) {
      }
    }
  });
}, openFileMaybeCreatingDirectory_fn = function(options) {
  return __async(this, null, function* () {
    const resolvedPath = this.resolve();
    try {
      return yield resolvedPath.open(options);
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        const parent = resolvedPath.parent();
        if (parent != null) {
          try {
            yield parent.mkdir();
          } catch (e) {
            throw err;
          }
        }
        return yield resolvedPath.open(options);
      } else {
        throw err;
      }
    }
  });
}, withFileForAppendingSync_fn = function(options, action) {
  return __privateMethod(this, __Path_instances, withFileForWritingSync_fn).call(this, __spreadValues({
    append: true
  }, options), action);
}, withFileForWritingSync_fn = function(options, action) {
  const file = __privateMethod(this, __Path_instances, openFileForWritingSync_fn).call(this, options);
  try {
    return action(file);
  } finally {
    try {
      file.close();
    } catch (e) {
    }
  }
}, /** Opens a file for writing, but handles if the directory does not exist. */
openFileForWritingSync_fn = function(options) {
  return __privateMethod(this, __Path_instances, openFileMaybeCreatingDirectorySync_fn).call(this, __spreadValues({
    write: true,
    create: true,
    truncate: (options == null ? void 0 : options.append) !== true
  }, options));
}, /** Opens a file for writing, but handles if the directory does not exist. */
openFileMaybeCreatingDirectorySync_fn = function(options) {
  try {
    return this.openSync(options);
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      const parent = this.resolve().parent();
      if (parent != null) {
        try {
          parent.mkdirSync();
        } catch (e) {
          throw err;
        }
      }
      return this.openSync(options);
    } else {
      throw err;
    }
  }
}, /** This is a special symbol that allows different versions of
 * `Path` API to match on `instanceof` checks. Ideally
 * people shouldn't be mixing versions, but if it happens then
 * this will maybe reduce some bugs.
 * @internal
 */
__publicField(_f, "instanceofSymbol", Symbol.for("@david/path.Path")), _f);
function ensurePath(path) {
  return path instanceof Path ? path : new Path(path);
}
function createFsFileWrapper(file) {
  Object.setPrototypeOf(file, FsFileWrapper.prototype);
  return file;
}
var FsFileWrapper = class extends Deno.FsFile {
  /** Writes the provided text to this file. */
  writeText(text) {
    return this.writeBytes(new TextEncoder().encode(text));
  }
  /** Synchronously writes the provided text to this file. */
  writeTextSync(text) {
    return this.writeBytesSync(new TextEncoder().encode(text));
  }
  /** Writes the provided bytes to the file. */
  writeBytes(bytes) {
    return __async(this, null, function* () {
      yield writeAll(this, bytes);
      return this;
    });
  }
  /** Synchronously writes the provided bytes to the file. */
  writeBytesSync(bytes) {
    writeAllSync(this, bytes);
    return this;
  }
};
function createSymlink(opts) {
  return __async(this, null, function* () {
    let kind = opts.type;
    if (kind == null && Deno.build.os === "windows") {
      const info = yield opts.targetPath.lstat();
      if (info == null ? void 0 : info.isDirectory) {
        kind = "dir";
      } else if (info == null ? void 0 : info.isFile) {
        kind = "file";
      } else {
        throw new Deno.errors.NotFound(
          `The target path '${opts.targetPath}' did not exist or path kind could not be determined. When the path doesn't exist, you need to specify a symlink type on Windows.`
        );
      }
    }
    yield Deno.symlink(
      opts.text,
      opts.fromPath.toString(),
      kind == null ? void 0 : {
        type: kind
      }
    );
  });
}
function createSymlinkSync(opts) {
  let kind = opts.type;
  if (kind == null && Deno.build.os === "windows") {
    const info = opts.targetPath.lstatSync();
    if (info == null ? void 0 : info.isDirectory) {
      kind = "dir";
    } else if (info == null ? void 0 : info.isFile) {
      kind = "file";
    } else {
      throw new Deno.errors.NotFound(
        `The target path '${opts.targetPath}' did not exist or path kind could not be determined. When the path doesn't exist, you need to specify a symlink type on Windows.`
      );
    }
  }
  Deno.symlinkSync(
    opts.text,
    opts.fromPath.toString(),
    kind == null ? void 0 : {
      type: kind
    }
  );
}
function notFoundToUndefined(action) {
  return __async(this, null, function* () {
    try {
      return yield action();
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        return void 0;
      } else {
        throw err;
      }
    }
  });
}
function notFoundToUndefinedSync(action) {
  try {
    return action();
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return void 0;
    } else {
      throw err;
    }
  }
}
function writeAll(writer, data) {
  return __async(this, null, function* () {
    let nwritten = 0;
    while (nwritten < data.length) {
      nwritten += yield writer.write(data.subarray(nwritten));
    }
  });
}
function writeAllSync(writer, data) {
  let nwritten = 0;
  while (nwritten < data.length) {
    nwritten += writer.writeSync(data.subarray(nwritten));
  }
}
var AssertionError2 = class extends Error {
  /** Constructs a new instance. */
  constructor(message) {
    super(message);
    this.name = "AssertionError";
  }
};
function assert2(expr, msg = "") {
  if (!expr) {
    throw new AssertionError2(msg);
  }
}
function copy2(src, dst, off = 0) {
  off = Math.max(0, Math.min(off, dst.byteLength));
  const dstBytesAvailable = dst.byteLength - off;
  if (src.byteLength > dstBytesAvailable) {
    src = src.subarray(0, dstBytesAvailable);
  }
  dst.set(src, off);
  return src.byteLength;
}
var MIN_READ = 32 * 1024;
var MAX_SIZE = __pow(2, 32) - 2;
var Buffer = (_g = class {
  // read at buf[off], write at buf[buf.byteLength]
  constructor(ab) {
    __privateAdd(this, _Buffer_instances);
    __privateAdd(this, _buf);
    // contents are the bytes buf[off : len(buf)]
    __privateAdd(this, _off, 0);
    __privateSet(this, _buf, ab === void 0 ? new Uint8Array(0) : new Uint8Array(ab));
  }
  /** Returns a slice holding the unread portion of the buffer.
   *
   * The slice is valid for use only until the next buffer modification (that
   * is, only until the next call to a method like `read()`, `write()`,
   * `reset()`, or `truncate()`). If `options.copy` is false the slice aliases the buffer content at
   * least until the next buffer modification, so immediate changes to the
   * slice will affect the result of future reads.
   * @param [options={ copy: true }]
   */
  bytes(options = { copy: true }) {
    if (options.copy === false) return __privateGet(this, _buf).subarray(__privateGet(this, _off));
    return __privateGet(this, _buf).slice(__privateGet(this, _off));
  }
  /** Returns whether the unread portion of the buffer is empty. */
  empty() {
    return __privateGet(this, _buf).byteLength <= __privateGet(this, _off);
  }
  /** A read only number of bytes of the unread portion of the buffer. */
  get length() {
    return __privateGet(this, _buf).byteLength - __privateGet(this, _off);
  }
  /** The read only capacity of the buffer's underlying byte slice, that is,
   * the total space allocated for the buffer's data. */
  get capacity() {
    return __privateGet(this, _buf).buffer.byteLength;
  }
  /** Discards all but the first `n` unread bytes from the buffer but
   * continues to use the same allocated storage. It throws if `n` is
   * negative or greater than the length of the buffer. */
  truncate(n) {
    if (n === 0) {
      this.reset();
      return;
    }
    if (n < 0 || n > this.length) {
      throw Error("bytes.Buffer: truncation out of range");
    }
    __privateMethod(this, _Buffer_instances, reslice_fn).call(this, __privateGet(this, _off) + n);
  }
  reset() {
    __privateMethod(this, _Buffer_instances, reslice_fn).call(this, 0);
    __privateSet(this, _off, 0);
  }
  /** Reads the next `p.length` bytes from the buffer or until the buffer is
   * drained. Returns the number of bytes read. If the buffer has no data to
   * return, the return is EOF (`null`). */
  readSync(p) {
    if (this.empty()) {
      this.reset();
      if (p.byteLength === 0) {
        return 0;
      }
      return null;
    }
    const nread = copy2(__privateGet(this, _buf).subarray(__privateGet(this, _off)), p);
    __privateSet(this, _off, __privateGet(this, _off) + nread);
    return nread;
  }
  /** Reads the next `p.length` bytes from the buffer or until the buffer is
   * drained. Resolves to the number of bytes read. If the buffer has no
   * data to return, resolves to EOF (`null`).
   *
   * NOTE: This methods reads bytes synchronously; it's provided for
   * compatibility with `Reader` interfaces.
   */
  read(p) {
    const rr = this.readSync(p);
    return Promise.resolve(rr);
  }
  writeSync(p) {
    const m = __privateMethod(this, _Buffer_instances, grow_fn).call(this, p.byteLength);
    return copy2(p, __privateGet(this, _buf), m);
  }
  /** NOTE: This methods writes bytes synchronously; it's provided for
   * compatibility with `Writer` interface. */
  write(p) {
    const n = this.writeSync(p);
    return Promise.resolve(n);
  }
  /** Grows the buffer's capacity, if necessary, to guarantee space for
   * another `n` bytes. After `.grow(n)`, at least `n` bytes can be written to
   * the buffer without another allocation. If `n` is negative, `.grow()` will
   * throw. If the buffer can't grow it will throw an error.
   *
   * Based on Go Lang's
   * {@link https://golang.org/pkg/bytes/#Buffer.Grow | Buffer.Grow}. */
  grow(n) {
    if (n < 0) {
      throw Error("Buffer.grow: negative count");
    }
    const m = __privateMethod(this, _Buffer_instances, grow_fn).call(this, n);
    __privateMethod(this, _Buffer_instances, reslice_fn).call(this, m);
  }
  /** Reads data from `r` until EOF (`null`) and appends it to the buffer,
   * growing the buffer as needed. It resolves to the number of bytes read.
   * If the buffer becomes too large, `.readFrom()` will reject with an error.
   *
   * Based on Go Lang's
   * {@link https://golang.org/pkg/bytes/#Buffer.ReadFrom | Buffer.ReadFrom}. */
  readFrom(r) {
    return __async(this, null, function* () {
      let n = 0;
      const tmp = new Uint8Array(MIN_READ);
      while (true) {
        const shouldGrow = this.capacity - this.length < MIN_READ;
        const buf = shouldGrow ? tmp : new Uint8Array(__privateGet(this, _buf).buffer, this.length);
        const nread = yield r.read(buf);
        if (nread === null) {
          return n;
        }
        if (shouldGrow) this.writeSync(buf.subarray(0, nread));
        else __privateMethod(this, _Buffer_instances, reslice_fn).call(this, this.length + nread);
        n += nread;
      }
    });
  }
  /** Reads data from `r` until EOF (`null`) and appends it to the buffer,
   * growing the buffer as needed. It returns the number of bytes read. If the
   * buffer becomes too large, `.readFromSync()` will throw an error.
   *
   * Based on Go Lang's
   * {@link https://golang.org/pkg/bytes/#Buffer.ReadFrom | Buffer.ReadFrom}. */
  readFromSync(r) {
    let n = 0;
    const tmp = new Uint8Array(MIN_READ);
    while (true) {
      const shouldGrow = this.capacity - this.length < MIN_READ;
      const buf = shouldGrow ? tmp : new Uint8Array(__privateGet(this, _buf).buffer, this.length);
      const nread = r.readSync(buf);
      if (nread === null) {
        return n;
      }
      if (shouldGrow) this.writeSync(buf.subarray(0, nread));
      else __privateMethod(this, _Buffer_instances, reslice_fn).call(this, this.length + nread);
      n += nread;
    }
  }
}, _buf = new WeakMap(), _off = new WeakMap(), _Buffer_instances = new WeakSet(), tryGrowByReslice_fn = function(n) {
  const l = __privateGet(this, _buf).byteLength;
  if (n <= this.capacity - l) {
    __privateMethod(this, _Buffer_instances, reslice_fn).call(this, l + n);
    return l;
  }
  return -1;
}, reslice_fn = function(len) {
  assert2(len <= __privateGet(this, _buf).buffer.byteLength);
  __privateSet(this, _buf, new Uint8Array(__privateGet(this, _buf).buffer, 0, len));
}, grow_fn = function(n) {
  const m = this.length;
  if (m === 0 && __privateGet(this, _off) !== 0) {
    this.reset();
  }
  const i = __privateMethod(this, _Buffer_instances, tryGrowByReslice_fn).call(this, n);
  if (i >= 0) {
    return i;
  }
  const c = this.capacity;
  if (n <= Math.floor(c / 2) - m) {
    copy2(__privateGet(this, _buf).subarray(__privateGet(this, _off)), __privateGet(this, _buf));
  } else if (c + n > MAX_SIZE) {
    throw new Error("The buffer cannot be grown beyond the maximum size.");
  } else {
    const buf = new Uint8Array(Math.min(2 * c + n, MAX_SIZE));
    copy2(__privateGet(this, _buf).subarray(__privateGet(this, _off)), buf);
    __privateSet(this, _buf, buf);
  }
  __privateSet(this, _off, 0);
  __privateMethod(this, _Buffer_instances, reslice_fn).call(this, Math.min(m + n, MAX_SIZE));
  return m;
}, _g);
function writeAll2(writer, data) {
  return __async(this, null, function* () {
    let nwritten = 0;
    while (nwritten < data.length) {
      nwritten += yield writer.write(data.subarray(nwritten));
    }
  });
}
function writeAllSync2(writer, data) {
  let nwritten = 0;
  while (nwritten < data.length) {
    nwritten += writer.writeSync(data.subarray(nwritten));
  }
}
function readerFromStreamReader(streamReader) {
  const buffer = new Buffer();
  return {
    read(p) {
      return __async(this, null, function* () {
        if (buffer.empty()) {
          const res = yield streamReader.read();
          if (res.done) {
            return null;
          }
          yield writeAll2(buffer, res.value);
        }
        return buffer.read(p);
      });
    }
  };
}
function readerFromStreamReader2(streamReader) {
  return readerFromStreamReader(streamReader);
}
function writerFromStreamWriter(streamWriter) {
  return {
    write(p) {
      return __async(this, null, function* () {
        yield streamWriter.ready;
        yield streamWriter.write(p);
        return p.length;
      });
    }
  };
}
var DEFAULT_BUF_SIZE = 4096;
var MIN_BUF_SIZE = 16;
var MAX_CONSECUTIVE_EMPTY_READS = 100;
var CR = "\r".charCodeAt(0);
var LF2 = "\n".charCodeAt(0);
var BufferFullError = class extends Error {
  constructor(partial) {
    super("Buffer full");
    __publicField(this, "name", "BufferFullError");
    this.partial = partial;
  }
};
var PartialReadError = class extends Error {
  constructor() {
    super("Encountered UnexpectedEof, data only partially read");
    __publicField(this, "name", "PartialReadError");
    __publicField(this, "partial");
  }
};
var BufReader = (_h = class {
  constructor(rd, size = DEFAULT_BUF_SIZE) {
    __privateAdd(this, _buf2);
    __privateAdd(this, _rd);
    // Reader provided by caller.
    __privateAdd(this, _r, 0);
    // buf read position.
    __privateAdd(this, _w2, 0);
    // buf write position.
    __privateAdd(this, _eof, false);
    // Reads a new chunk into the buffer.
    __privateAdd(this, _fill, () => __async(this, null, function* () {
      if (__privateGet(this, _r) > 0) {
        __privateGet(this, _buf2).copyWithin(0, __privateGet(this, _r), __privateGet(this, _w2));
        __privateSet(this, _w2, __privateGet(this, _w2) - __privateGet(this, _r));
        __privateSet(this, _r, 0);
      }
      if (__privateGet(this, _w2) >= __privateGet(this, _buf2).byteLength) {
        throw Error("bufio: tried to fill full buffer");
      }
      for (let i = MAX_CONSECUTIVE_EMPTY_READS; i > 0; i--) {
        const rr = yield __privateGet(this, _rd).read(__privateGet(this, _buf2).subarray(__privateGet(this, _w2)));
        if (rr === null) {
          __privateSet(this, _eof, true);
          return;
        }
        assert2(rr >= 0, "negative read");
        __privateSet(this, _w2, __privateGet(this, _w2) + rr);
        if (rr > 0) {
          return;
        }
      }
      throw new Error(
        `No progress after ${MAX_CONSECUTIVE_EMPTY_READS} read() calls`
      );
    }));
    __privateAdd(this, _reset, (buf, rd) => {
      __privateSet(this, _buf2, buf);
      __privateSet(this, _rd, rd);
      __privateSet(this, _eof, false);
    });
    if (size < MIN_BUF_SIZE) {
      size = MIN_BUF_SIZE;
    }
    __privateGet(this, _reset).call(this, new Uint8Array(size), rd);
  }
  // private lastByte: number;
  // private lastCharSize: number;
  /** return new BufReader unless r is BufReader */
  static create(r, size = DEFAULT_BUF_SIZE) {
    return r instanceof _h ? r : new _h(r, size);
  }
  /** Returns the size of the underlying buffer in bytes. */
  size() {
    return __privateGet(this, _buf2).byteLength;
  }
  buffered() {
    return __privateGet(this, _w2) - __privateGet(this, _r);
  }
  /** Discards any buffered data, resets all state, and switches
   * the buffered reader to read from r.
   */
  reset(r) {
    __privateGet(this, _reset).call(this, __privateGet(this, _buf2), r);
  }
  /** reads data into p.
   * It returns the number of bytes read into p.
   * The bytes are taken from at most one Read on the underlying Reader,
   * hence n may be less than len(p).
   * To read exactly len(p) bytes, use io.ReadFull(b, p).
   */
  read(p) {
    return __async(this, null, function* () {
      let rr = p.byteLength;
      if (p.byteLength === 0) return rr;
      if (__privateGet(this, _r) === __privateGet(this, _w2)) {
        if (p.byteLength >= __privateGet(this, _buf2).byteLength) {
          const rr2 = yield __privateGet(this, _rd).read(p);
          const nread = rr2 != null ? rr2 : 0;
          assert2(nread >= 0, "negative read");
          return rr2;
        }
        __privateSet(this, _r, 0);
        __privateSet(this, _w2, 0);
        rr = yield __privateGet(this, _rd).read(__privateGet(this, _buf2));
        if (rr === 0 || rr === null) return rr;
        assert2(rr >= 0, "negative read");
        __privateSet(this, _w2, __privateGet(this, _w2) + rr);
      }
      const copied = copy2(__privateGet(this, _buf2).subarray(__privateGet(this, _r), __privateGet(this, _w2)), p, 0);
      __privateSet(this, _r, __privateGet(this, _r) + copied);
      return copied;
    });
  }
  /** reads exactly `p.length` bytes into `p`.
   *
   * If successful, `p` is returned.
   *
   * If the end of the underlying stream has been reached, and there are no more
   * bytes available in the buffer, `readFull()` returns `null` instead.
   *
   * An error is thrown if some bytes could be read, but not enough to fill `p`
   * entirely before the underlying stream reported an error or EOF. Any error
   * thrown will have a `partial` property that indicates the slice of the
   * buffer that has been successfully filled with data.
   *
   * Ported from https://golang.org/pkg/io/#ReadFull
   */
  readFull(p) {
    return __async(this, null, function* () {
      let bytesRead = 0;
      while (bytesRead < p.length) {
        try {
          const rr = yield this.read(p.subarray(bytesRead));
          if (rr === null) {
            if (bytesRead === 0) {
              return null;
            } else {
              throw new PartialReadError();
            }
          }
          bytesRead += rr;
        } catch (err) {
          if (err instanceof PartialReadError) {
            err.partial = p.subarray(0, bytesRead);
          }
          throw err;
        }
      }
      return p;
    });
  }
  /** Returns the next byte [0, 255] or `null`. */
  readByte() {
    return __async(this, null, function* () {
      while (__privateGet(this, _r) === __privateGet(this, _w2)) {
        if (__privateGet(this, _eof)) return null;
        yield __privateGet(this, _fill).call(this);
      }
      const c = __privateGet(this, _buf2)[__privateGet(this, _r)];
      __privateWrapper(this, _r)._++;
      return c;
    });
  }
  /** readString() reads until the first occurrence of delim in the input,
   * returning a string containing the data up to and including the delimiter.
   * If ReadString encounters an error before finding a delimiter,
   * it returns the data read before the error and the error itself
   * (often `null`).
   * ReadString returns err !== null if and only if the returned data does not end
   * in delim.
   * For simple uses, a Scanner may be more convenient.
   */
  readString(delim) {
    return __async(this, null, function* () {
      if (delim.length !== 1) {
        throw new Error("Delimiter should be a single character");
      }
      const buffer = yield this.readSlice(delim.charCodeAt(0));
      if (buffer === null) return null;
      return new TextDecoder().decode(buffer);
    });
  }
  /** `readLine()` is a low-level line-reading primitive. Most callers should
   * use `readString('\n')` instead or use a Scanner.
   *
   * `readLine()` tries to return a single line, not including the end-of-line
   * bytes. If the line was too long for the buffer then `more` is set and the
   * beginning of the line is returned. The rest of the line will be returned
   * from future calls. `more` will be false when returning the last fragment
   * of the line. The returned buffer is only valid until the next call to
   * `readLine()`.
   *
   * The text returned from ReadLine does not include the line end ("\r\n" or
   * "\n").
   *
   * When the end of the underlying stream is reached, the final bytes in the
   * stream are returned. No indication or error is given if the input ends
   * without a final line end. When there are no more trailing bytes to read,
   * `readLine()` returns `null`.
   *
   * Calling `unreadByte()` after `readLine()` will always unread the last byte
   * read (possibly a character belonging to the line end) even if that byte is
   * not part of the line returned by `readLine()`.
   */
  readLine() {
    return __async(this, null, function* () {
      let line = null;
      try {
        line = yield this.readSlice(LF2);
      } catch (err) {
        let partial;
        if (err instanceof PartialReadError) {
          partial = err.partial;
          assert2(
            partial instanceof Uint8Array,
            "bufio: caught error from `readSlice()` without `partial` property"
          );
        }
        if (!(err instanceof BufferFullError)) {
          throw err;
        }
        partial = err.partial;
        if (!__privateGet(this, _eof) && partial && partial.byteLength > 0 && partial[partial.byteLength - 1] === CR) {
          assert2(__privateGet(this, _r) > 0, "bufio: tried to rewind past start of buffer");
          __privateWrapper(this, _r)._--;
          partial = partial.subarray(0, partial.byteLength - 1);
        }
        if (partial) {
          return { line: partial, more: !__privateGet(this, _eof) };
        }
      }
      if (line === null) {
        return null;
      }
      if (line.byteLength === 0) {
        return { line, more: false };
      }
      if (line[line.byteLength - 1] === LF2) {
        let drop = 1;
        if (line.byteLength > 1 && line[line.byteLength - 2] === CR) {
          drop = 2;
        }
        line = line.subarray(0, line.byteLength - drop);
      }
      return { line, more: false };
    });
  }
  /** `readSlice()` reads until the first occurrence of `delim` in the input,
   * returning a slice pointing at the bytes in the buffer. The bytes stop
   * being valid at the next read.
   *
   * If `readSlice()` encounters an error before finding a delimiter, or the
   * buffer fills without finding a delimiter, it throws an error with a
   * `partial` property that contains the entire buffer.
   *
   * If `readSlice()` encounters the end of the underlying stream and there are
   * any bytes left in the buffer, the rest of the buffer is returned. In other
   * words, EOF is always treated as a delimiter. Once the buffer is empty,
   * it returns `null`.
   *
   * Because the data returned from `readSlice()` will be overwritten by the
   * next I/O operation, most clients should use `readString()` instead.
   */
  readSlice(delim) {
    return __async(this, null, function* () {
      let s = 0;
      let slice;
      while (true) {
        let i = __privateGet(this, _buf2).subarray(__privateGet(this, _r) + s, __privateGet(this, _w2)).indexOf(delim);
        if (i >= 0) {
          i += s;
          slice = __privateGet(this, _buf2).subarray(__privateGet(this, _r), __privateGet(this, _r) + i + 1);
          __privateSet(this, _r, __privateGet(this, _r) + (i + 1));
          break;
        }
        if (__privateGet(this, _eof)) {
          if (__privateGet(this, _r) === __privateGet(this, _w2)) {
            return null;
          }
          slice = __privateGet(this, _buf2).subarray(__privateGet(this, _r), __privateGet(this, _w2));
          __privateSet(this, _r, __privateGet(this, _w2));
          break;
        }
        if (this.buffered() >= __privateGet(this, _buf2).byteLength) {
          __privateSet(this, _r, __privateGet(this, _w2));
          const oldbuf = __privateGet(this, _buf2);
          const newbuf = __privateGet(this, _buf2).slice(0);
          __privateSet(this, _buf2, newbuf);
          throw new BufferFullError(oldbuf);
        }
        s = __privateGet(this, _w2) - __privateGet(this, _r);
        try {
          yield __privateGet(this, _fill).call(this);
        } catch (err) {
          if (err instanceof PartialReadError) {
            err.partial = slice;
          }
          throw err;
        }
      }
      return slice;
    });
  }
  /** `peek()` returns the next `n` bytes without advancing the reader. The
   * bytes stop being valid at the next read call.
   *
   * When the end of the underlying stream is reached, but there are unread
   * bytes left in the buffer, those bytes are returned. If there are no bytes
   * left in the buffer, it returns `null`.
   *
   * If an error is encountered before `n` bytes are available, `peek()` throws
   * an error with the `partial` property set to a slice of the buffer that
   * contains the bytes that were available before the error occurred.
   */
  peek(n) {
    return __async(this, null, function* () {
      if (n < 0) {
        throw Error("negative count");
      }
      let avail = __privateGet(this, _w2) - __privateGet(this, _r);
      while (avail < n && avail < __privateGet(this, _buf2).byteLength && !__privateGet(this, _eof)) {
        try {
          yield __privateGet(this, _fill).call(this);
        } catch (err) {
          if (err instanceof PartialReadError) {
            err.partial = __privateGet(this, _buf2).subarray(__privateGet(this, _r), __privateGet(this, _w2));
          }
          throw err;
        }
        avail = __privateGet(this, _w2) - __privateGet(this, _r);
      }
      if (avail === 0 && __privateGet(this, _eof)) {
        return null;
      } else if (avail < n && __privateGet(this, _eof)) {
        return __privateGet(this, _buf2).subarray(__privateGet(this, _r), __privateGet(this, _r) + avail);
      } else if (avail < n) {
        throw new BufferFullError(__privateGet(this, _buf2).subarray(__privateGet(this, _r), __privateGet(this, _w2)));
      }
      return __privateGet(this, _buf2).subarray(__privateGet(this, _r), __privateGet(this, _r) + n);
    });
  }
}, _buf2 = new WeakMap(), _rd = new WeakMap(), _r = new WeakMap(), _w2 = new WeakMap(), _eof = new WeakMap(), _fill = new WeakMap(), _reset = new WeakMap(), _h);
var wasm;
var heap = new Array(128).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
var cachedFloat64Memory0 = null;
function getFloat64Memory0() {
  if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
    cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
  }
  return cachedFloat64Memory0;
}
var cachedInt32Memory0 = null;
function getInt32Memory0() {
  if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
  }
  return cachedInt32Memory0;
}
var WASM_VECTOR_LEN = 0;
var cachedUint8Memory0 = null;
function getUint8Memory0() {
  if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
  }
  return cachedUint8Memory0;
}
var cachedTextEncoder = typeof TextEncoder !== "undefined" ? new TextEncoder("utf-8") : {
  encode: () => {
    throw Error("TextEncoder not available");
  }
};
var encodeString = function(arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length, 1) >>> 0;
    getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len, 1) >>> 0;
  const mem = getUint8Memory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code3 = arg.charCodeAt(offset);
    if (code3 > 127) break;
    mem[ptr + offset] = code3;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
var cachedTextDecoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : {
  decode: () => {
    throw Error("TextDecoder not available");
  }
};
if (typeof TextDecoder !== "undefined") cachedTextDecoder.decode();
function getStringFromWasm0(ptr, len) {
  ptr = ptr >>> 0;
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
var heap_next = heap.length;
function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
function dropObject(idx) {
  if (idx < 132) return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
var cachedBigInt64Memory0 = null;
function getBigInt64Memory0() {
  if (cachedBigInt64Memory0 === null || cachedBigInt64Memory0.byteLength === 0) {
    cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
  }
  return cachedBigInt64Memory0;
}
function debugString(val) {
  const type2 = typeof val;
  if (type2 == "number" || type2 == "boolean" || val == null) {
    return `${val}`;
  }
  if (type2 == "string") {
    return `"${val}"`;
  }
  if (type2 == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type2 == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return `Function(${name})`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug = "[";
    if (length > 0) {
      debug += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug += ", " + debugString(val[i]);
    }
    debug += "]";
    return debug;
  }
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return `${val.name}: ${val.message}
${val.stack}`;
  }
  return className;
}
function parse3(command) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passStringToWasm0(command, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.parse(retptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    if (r2) {
      throw takeObject(r1);
    }
    return takeObject(r0);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
function static_text_render_text(items, cols, rows) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.static_text_render_text(retptr, addHeapObject(items), cols, rows);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    if (r3) {
      throw takeObject(r2);
    }
    let v1;
    if (r0 !== 0) {
      v1 = getStringFromWasm0(r0, r1).slice();
      wasm.__wbindgen_free(r0, r1 * 1, 1);
    }
    return v1;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
function static_text_clear_text(cols, rows) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.static_text_clear_text(retptr, cols, rows);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    let v1;
    if (r0 !== 0) {
      v1 = getStringFromWasm0(r0, r1).slice();
      wasm.__wbindgen_free(r0, r1 * 1, 1);
    }
    return v1;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
function static_text_render_once(items, cols, rows) {
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    wasm.static_text_render_once(retptr, addHeapObject(items), cols, rows);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var r2 = getInt32Memory0()[retptr / 4 + 2];
    var r3 = getInt32Memory0()[retptr / 4 + 3];
    if (r3) {
      throw takeObject(r2);
    }
    let v1;
    if (r0 !== 0) {
      v1 = getStringFromWasm0(r0, r1).slice();
      wasm.__wbindgen_free(r0, r1 * 1, 1);
    }
    return v1;
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
  }
}
function strip_ansi_codes(text) {
  let deferred2_0;
  let deferred2_1;
  try {
    const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
    const ptr0 = passStringToWasm0(text, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    wasm.strip_ansi_codes(retptr, ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    deferred2_0 = r0;
    deferred2_1 = r1;
    return getStringFromWasm0(r0, r1);
  } finally {
    wasm.__wbindgen_add_to_stack_pointer(16);
    wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
  }
}
function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
  }
}
var imports = {
  __wbindgen_placeholder__: {
    __wbg_get_57245cc7d7c7619d: function(arg0, arg1) {
      const ret = getObject(arg0)[arg1 >>> 0];
      return addHeapObject(ret);
    },
    __wbindgen_jsval_loose_eq: function(arg0, arg1) {
      const ret = getObject(arg0) == getObject(arg1);
      return ret;
    },
    __wbg_instanceof_Uint8Array_971eeda69eb75003: function(arg0) {
      let result;
      try {
        result = getObject(arg0) instanceof Uint8Array;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_instanceof_ArrayBuffer_e5e48f4762c5610b: function(arg0) {
      let result;
      try {
        result = getObject(arg0) instanceof ArrayBuffer;
      } catch (_) {
        result = false;
      }
      const ret = result;
      return ret;
    },
    __wbg_new_8c3f0052272a457a: function(arg0) {
      const ret = new Uint8Array(getObject(arg0));
      return addHeapObject(ret);
    },
    __wbindgen_boolean_get: function(arg0) {
      const v = getObject(arg0);
      const ret = typeof v === "boolean" ? v ? 1 : 0 : 2;
      return ret;
    },
    __wbindgen_number_get: function(arg0, arg1) {
      const obj = getObject(arg1);
      const ret = typeof obj === "number" ? obj : void 0;
      getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
      getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    },
    __wbindgen_string_get: function(arg0, arg1) {
      const obj = getObject(arg1);
      const ret = typeof obj === "string" ? obj : void 0;
      var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      var len1 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len1;
      getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    },
    __wbindgen_error_new: function(arg0, arg1) {
      const ret = new Error(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    },
    __wbindgen_string_new: function(arg0, arg1) {
      const ret = getStringFromWasm0(arg0, arg1);
      return addHeapObject(ret);
    },
    __wbindgen_object_clone_ref: function(arg0) {
      const ret = getObject(arg0);
      return addHeapObject(ret);
    },
    __wbg_set_9182712abebf82ef: function(arg0, arg1, arg2) {
      getObject(arg0)[takeObject(arg1)] = takeObject(arg2);
    },
    __wbg_new_0b9bfdd97583284e: function() {
      const ret = new Object();
      return addHeapObject(ret);
    },
    __wbg_new_1d9a920c6bfc44a8: function() {
      const ret = new Array();
      return addHeapObject(ret);
    },
    __wbg_set_a68214f35c417fa9: function(arg0, arg1, arg2) {
      getObject(arg0)[arg1 >>> 0] = takeObject(arg2);
    },
    __wbindgen_number_new: function(arg0) {
      const ret = arg0;
      return addHeapObject(ret);
    },
    __wbg_length_6e3bbe7c8bd4dbd8: function(arg0) {
      const ret = getObject(arg0).length;
      return ret;
    },
    __wbindgen_is_bigint: function(arg0) {
      const ret = typeof getObject(arg0) === "bigint";
      return ret;
    },
    __wbg_isSafeInteger_dfa0593e8d7ac35a: function(arg0) {
      const ret = Number.isSafeInteger(getObject(arg0));
      return ret;
    },
    __wbindgen_bigint_from_i64: function(arg0) {
      const ret = arg0;
      return addHeapObject(ret);
    },
    __wbindgen_is_object: function(arg0) {
      const val = getObject(arg0);
      const ret = typeof val === "object" && val !== null;
      return ret;
    },
    __wbg_iterator_6f9d4f28845f426c: function() {
      const ret = Symbol.iterator;
      return addHeapObject(ret);
    },
    __wbindgen_in: function(arg0, arg1) {
      const ret = getObject(arg0) in getObject(arg1);
      return ret;
    },
    __wbg_entries_65a76a413fc91037: function(arg0) {
      const ret = Object.entries(getObject(arg0));
      return addHeapObject(ret);
    },
    __wbindgen_bigint_from_u64: function(arg0) {
      const ret = BigInt.asUintN(64, arg0);
      return addHeapObject(ret);
    },
    __wbindgen_jsval_eq: function(arg0, arg1) {
      const ret = getObject(arg0) === getObject(arg1);
      return ret;
    },
    __wbg_new_abda76e883ba8a5f: function() {
      const ret = new Error();
      return addHeapObject(ret);
    },
    __wbg_stack_658279fe44541cf6: function(arg0, arg1) {
      const ret = getObject(arg1).stack;
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len1;
      getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    },
    __wbg_error_f851667af71bcfc6: function(arg0, arg1) {
      let deferred0_0;
      let deferred0_1;
      try {
        deferred0_0 = arg0;
        deferred0_1 = arg1;
        console.error(getStringFromWasm0(arg0, arg1));
      } finally {
        wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
      }
    },
    __wbindgen_object_drop_ref: function(arg0) {
      takeObject(arg0);
    },
    __wbindgen_is_function: function(arg0) {
      const ret = typeof getObject(arg0) === "function";
      return ret;
    },
    __wbg_next_aaef7c8aa5e212ac: function() {
      return handleError(function(arg0) {
        const ret = getObject(arg0).next();
        return addHeapObject(ret);
      }, arguments);
    },
    __wbg_done_1b73b0672e15f234: function(arg0) {
      const ret = getObject(arg0).done;
      return ret;
    },
    __wbg_value_1ccc36bc03462d71: function(arg0) {
      const ret = getObject(arg0).value;
      return addHeapObject(ret);
    },
    __wbg_get_765201544a2b6869: function() {
      return handleError(function(arg0, arg1) {
        const ret = Reflect.get(getObject(arg0), getObject(arg1));
        return addHeapObject(ret);
      }, arguments);
    },
    __wbg_call_97ae9d8645dc388b: function() {
      return handleError(function(arg0, arg1) {
        const ret = getObject(arg0).call(getObject(arg1));
        return addHeapObject(ret);
      }, arguments);
    },
    __wbg_next_579e583d33566a86: function(arg0) {
      const ret = getObject(arg0).next;
      return addHeapObject(ret);
    },
    __wbg_isArray_27c46c67f498e15d: function(arg0) {
      const ret = Array.isArray(getObject(arg0));
      return ret;
    },
    __wbg_length_9e1ae1900cb0fbd5: function(arg0) {
      const ret = getObject(arg0).length;
      return ret;
    },
    __wbindgen_memory: function() {
      const ret = wasm.memory;
      return addHeapObject(ret);
    },
    __wbg_buffer_3f3d764d4747d564: function(arg0) {
      const ret = getObject(arg0).buffer;
      return addHeapObject(ret);
    },
    __wbg_set_83db9690f9353e79: function(arg0, arg1, arg2) {
      getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    },
    __wbindgen_bigint_get_as_i64: function(arg0, arg1) {
      const v = getObject(arg1);
      const ret = typeof v === "bigint" ? v : void 0;
      getBigInt64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? BigInt(0) : ret;
      getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    },
    __wbindgen_debug_string: function(arg0, arg1) {
      const ret = debugString(getObject(arg1));
      const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
      const len1 = WASM_VECTOR_LEN;
      getInt32Memory0()[arg0 / 4 + 1] = len1;
      getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    },
    __wbindgen_throw: function(arg0, arg1) {
      throw new Error(getStringFromWasm0(arg0, arg1));
    }
  }
};
function instantiate() {
  return instantiateWithInstance().exports;
}
var instanceWithExports;
function instantiateWithInstance() {
  if (instanceWithExports == null) {
    const instance = instantiateInstance();
    wasm = instance.exports;
    cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    instanceWithExports = {
      instance,
      exports: { parse: parse3, static_text_render_text, static_text_clear_text, static_text_render_once, strip_ansi_codes }
    };
  }
  return instanceWithExports;
}
function instantiateInstance() {
  const wasmBytes = base64decode(
    "AGFzbQEAAAAB7wEiYAAAYAABf2ABfwBgAX8Bf2ACf38AYAJ/fwF/YAN/f38AYAN/f38Bf2AEf39/fwBgBH9/f38Bf2AFf39/f38AYAV/f39/fwF/YAZ/f39/f38AYAZ/f39/f38Bf2AHf39/f39/fwBgB39/f39/f38Bf2AJf39/f39/fn5+AGAEf39/fgBgA39/fgF/YAV/f35/fwBgBX9/fX9/AGAFf398f38AYAJ/fgBgBH9+f38AYAN/fn4AYAN/fn4Bf2AEf31/fwBgAn98AGADf3x/AX9gBH98f38AYAR/fH9/AX9gAX4Bf2ADfn9/AX9gAXwBfwL4Ei0YX193YmluZGdlbl9wbGFjZWhvbGRlcl9fGl9fd2JnX2dldF81NzI0NWNjN2Q3Yzc2MTlkAAUYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fGV9fd2JpbmRnZW5fanN2YWxfbG9vc2VfZXEABRhfX3diaW5kZ2VuX3BsYWNlaG9sZGVyX18sX193YmdfaW5zdGFuY2VvZl9VaW50OEFycmF5Xzk3MWVlZGE2OWViNzUwMDMAAxhfX3diaW5kZ2VuX3BsYWNlaG9sZGVyX18tX193YmdfaW5zdGFuY2VvZl9BcnJheUJ1ZmZlcl9lNWU0OGY0NzYyYzU2MTBiAAMYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fGl9fd2JnX25ld184YzNmMDA1MjI3MmE0NTdhAAMYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fFl9fd2JpbmRnZW5fYm9vbGVhbl9nZXQAAxhfX3diaW5kZ2VuX3BsYWNlaG9sZGVyX18VX193YmluZGdlbl9udW1iZXJfZ2V0AAQYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fFV9fd2JpbmRnZW5fc3RyaW5nX2dldAAEGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXxRfX3diaW5kZ2VuX2Vycm9yX25ldwAFGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXxVfX3diaW5kZ2VuX3N0cmluZ19uZXcABRhfX3diaW5kZ2VuX3BsYWNlaG9sZGVyX18bX193YmluZGdlbl9vYmplY3RfY2xvbmVfcmVmAAMYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fGl9fd2JnX3NldF85MTgyNzEyYWJlYmY4MmVmAAYYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fGl9fd2JnX25ld18wYjliZmRkOTc1ODMyODRlAAEYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fGl9fd2JnX25ld18xZDlhOTIwYzZiZmM0NGE4AAEYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fGl9fd2JnX3NldF9hNjgyMTRmMzVjNDE3ZmE5AAYYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fFV9fd2JpbmRnZW5fbnVtYmVyX25ldwAhGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXx1fX3diZ19sZW5ndGhfNmUzYmJlN2M4YmQ0ZGJkOAADGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXxRfX3diaW5kZ2VuX2lzX2JpZ2ludAADGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXyRfX3diZ19pc1NhZmVJbnRlZ2VyX2RmYTA1OTNlOGQ3YWMzNWEAAxhfX3diaW5kZ2VuX3BsYWNlaG9sZGVyX18aX193YmluZGdlbl9iaWdpbnRfZnJvbV9pNjQAHxhfX3diaW5kZ2VuX3BsYWNlaG9sZGVyX18UX193YmluZGdlbl9pc19vYmplY3QAAxhfX3diaW5kZ2VuX3BsYWNlaG9sZGVyX18fX193YmdfaXRlcmF0b3JfNmY5ZDRmMjg4NDVmNDI2YwABGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXw1fX3diaW5kZ2VuX2luAAUYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fHl9fd2JnX2VudHJpZXNfNjVhNzZhNDEzZmM5MTAzNwADGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXxpfX3diaW5kZ2VuX2JpZ2ludF9mcm9tX3U2NAAfGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXxNfX3diaW5kZ2VuX2pzdmFsX2VxAAUYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fGl9fd2JnX25ld19hYmRhNzZlODgzYmE4YTVmAAEYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fHF9fd2JnX3N0YWNrXzY1ODI3OWZlNDQ1NDFjZjYABBhfX3diaW5kZ2VuX3BsYWNlaG9sZGVyX18cX193YmdfZXJyb3JfZjg1MTY2N2FmNzFiY2ZjNgAEGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXxpfX3diaW5kZ2VuX29iamVjdF9kcm9wX3JlZgACGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXxZfX3diaW5kZ2VuX2lzX2Z1bmN0aW9uAAMYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fG19fd2JnX25leHRfYWFlZjdjOGFhNWUyMTJhYwADGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXxtfX3diZ19kb25lXzFiNzNiMDY3MmUxNWYyMzQAAxhfX3diaW5kZ2VuX3BsYWNlaG9sZGVyX18cX193YmdfdmFsdWVfMWNjYzM2YmMwMzQ2MmQ3MQADGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXxpfX3diZ19nZXRfNzY1MjAxNTQ0YTJiNjg2OQAFGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXxtfX3diZ19jYWxsXzk3YWU5ZDg2NDVkYzM4OGIABRhfX3diaW5kZ2VuX3BsYWNlaG9sZGVyX18bX193YmdfbmV4dF81NzllNTgzZDMzNTY2YTg2AAMYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fHl9fd2JnX2lzQXJyYXlfMjdjNDZjNjdmNDk4ZTE1ZAADGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXx1fX3diZ19sZW5ndGhfOWUxYWUxOTAwY2IwZmJkNQADGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXxFfX3diaW5kZ2VuX21lbW9yeQABGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXx1fX3diZ19idWZmZXJfM2YzZDc2NGQ0NzQ3ZDU2NAADGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXxpfX3diZ19zZXRfODNkYjk2OTBmOTM1M2U3OQAGGF9fd2JpbmRnZW5fcGxhY2Vob2xkZXJfXxxfX3diaW5kZ2VuX2JpZ2ludF9nZXRfYXNfaTY0AAQYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fF19fd2JpbmRnZW5fZGVidWdfc3RyaW5nAAQYX193YmluZGdlbl9wbGFjZWhvbGRlcl9fEF9fd2JpbmRnZW5fdGhyb3cABAPiA+ADHB4IBgMGBAYGBAcHDAYKBgYGCAoGBQUGAwYJBQkGCgIHBwQGCAoIBwYHCAcNBAcFBgIGBQYIBAYEBgUOBwYFAgQFEAwKBwgLDwUFBwggBgYGBQYFAgwFBAIFBQUIAwYLBQUFCgQECAgGBAQIAQQEBAQEBAQEBQYICAYIBAQKBgcIBQYFBAwEBQYEBgIGBQQEBgQEBAQEDAoEBAoKBAUSBAQHBwoEAAQDBgoECAYGBAQFBAsEBgYIBgUFAgYEBgQEBgYFAgICBAUACAYEBQICBAQEBAoEBAQECgcBBgYAChECBAQCAgQEAgICBAQEAgQHBgICBAMEBgQEFhYbDAIGBAYIBQQGAgULBgAEAwMHBQIFBQAEBgAEAgAGAwQFCQYCBAUCAgQJBAUEBAIFBAUFBQUFAgICBgIEBAQCBAQCAggFAgICDQQBCQkTCgoKCwsVFAIEGQUCGQgFAgICBwQFBgoKCgUKCAUFBQUFBQIFBQIDCAIDBAQFBAICAwIFBQYGAgICBAUCBAIFAgQCBAIFBQoFAgIEBgMEBAQFAgIGBAQEBAcGBQUGBAQEAgQFBAQEAgYCBwUHBwICBQcFAwUGAwcFBQIDBAUFBQcHBwcBAgQEBQUFBQICGAMAAgIGAgICBAUBcAF+fgUDAQARBgkBfwFBgIDAAAsH7AELBm1lbW9yeQIABXBhcnNlAD0Xc3RhdGljX3RleHRfcmVuZGVyX3RleHQAVxZzdGF0aWNfdGV4dF9jbGVhcl90ZXh0AHwXc3RhdGljX3RleHRfcmVuZGVyX29uY2UAUxBzdHJpcF9hbnNpX2NvZGVzAK8BEV9fd2JpbmRnZW5fbWFsbG9jALMCEl9fd2JpbmRnZW5fcmVhbGxvYwDSAh9fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyAOkDD19fd2JpbmRnZW5fZnJlZQDeAxRfX3diaW5kZ2VuX2V4bl9zdG9yZQDdAwn6AQEAQQELfbUDQoED6APtAr0ChwGqA7oB2QO+A9ID6gNrvAPhA7EDxwPmA90BgAHxAvsCsgH3AvoCiQOEA/gC+QL9AvwC9gLzA/QDqQP0AYcEmgOXA5UDlAOTA5gDxAPFA4gE5gLlAuQD4APKAdwCmwP7A84C3wPJAvUDlgOHAowEnAJ21AKLBOIDjQHuA4MEsAPOA4ADhAT/A6MD/QPNA8sDiQS7Av4DkwLMA5IC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hAEhB0EMEKcDIgQgFzcCBCAEIAU2AgAgAyAENgL0AiADKQL0AiEXQQAhBQwBCyADQfgCaiAXNwIAIANB9AJqIAQ2AgAgA0HwAmogBTYCACADIAY2AuwCIANBADYC6AIgBg0BIANBgAFqIAEgAhBBAkACQAJAAkACQAJAIAMoAoABDQAgA0GIAWoiBygCACEGIANBjAFqIggpAgAhGCADKAKEASEFIAMgA0GUAWoiBCgCADYCuAIgAyAYNwOwAiADQYABaiAFIAYQNCADKAKAAQ0BIAcoAgAhCSAIKQIAIRcgAygChAEhByADIAQoAgAiBjYCiAEgAyAXNwOAASAGDQQgA0GAAWoQlQJBACEGIAkhBUEAIQQMAgsgA0GUAWooAgAhBCADQYwBaikCACEXIANBiAFqKAIAIQUgAygChAEhBgwCCyAEKAIAIQQgCCkCACEXIAcoAgAhBSADKAKEASEGCyADQbACahCUAgtBACEHDAELIBinIQUgAyAGNgIYIAMgFzcDECADKQIUIRggF6chBCADKQK0AiEXIAkhBgsgA0HsAmoQiAMgB0UNAgsgAyAYNwKQASADIAQ2AowBIAMgFzcChAEgAyAFNgKAASADQegCaiAHIAYQtwECQCADKALoAkUNACADQfwCaigCACEEIANB9AJqKQIAIRcgA0HwAmooAgAhBSADKALsAiEGIANBgAFqEOACDAILIANB6AJqQQhqKAIAIQogAygC7AIhCyADIBg3AsACIAMgBDYCvAIgAyAXNwK0AiADIAU2ArACIANBADYCrAMgA0IENwKkAyADQYABakEUaiEMIANBgAFqQQxqIQ0gA0GAAWpBCGohCSADQegCakEMaiEOIANBEGpBDGohCCADQegCakEUaiEPQQQhEEEAIQYgCiEFIAshEQJAA0ACQAJAAkAgBQ0AQQAhBQwBCyADQgE3AugCIANBgAFqIANB6AJqEN4BIAMtAIABDQggAy0AgQENAQsgA0HYAmpBCGogA0GkA2pBCGooAgA2AgAgAyADKQKkAzcD2AIMBgsgA0HoAmogESAFEDUCQCADKALwAiISQQNGDQAgA0HQA2pBCGogD0EIaigCACIENgIAIAMgDykCACIXNwPQAyADKALsAiEHIAMoAugCIRMgAygC9AIhFCADKAL4AiEVIAhBCGoiFiAENgIAIAgg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A6gBIANBiAJqQQhqIgUoAgAhBiADKAKMAiEHIAUgBDYCACADIA83A4gCIAQNAiADQYgCahCUAkEAIQQMAQsgA0HIAGpBCGogA0GcAmooAgA2AgAgAyADQZQCaikCADcDSCADQYgCakEIaigCACEGIAMoAowCIQQLIANB5AJqIAMpA0g3AgAgA0HgAmogBjYCACADQQg2AtgCIANB7AJqIANByABqQQhqKAIANgIAIAMgBDYC3AIMAQsgA0H4AGpBCGogBSgCACIENgIAIAMgAykDiAIiDzcDeCADQcgAakEIaiAENgIAIAMgDzcDSCADQYgCaiAHIAYQNAJAAkAgAygCiAJFDQAgA0HQAmpBFGogA0GUAmopAgA3AgAgA0HsAmogA0GIAmpBFGooAgA2AgAgAyADKQKMAjcC3AIgA0EINgLYAgwBCyADQagBakEIaiADQZwCaigCACIGNgIAIAMgA0GUAmopAgAiDzcDqAEgA0GIAmpBCGoiBCgCACEFIAMoAowCIQcgBCAGNgIAIAMgDzcDiAICQCAGRQ0AIANCCDcC2AIgA0GIAmoQlQIMAQsCQAJAAkAgAygCUCIGQQFLDQAgBkUNAiADQeQCaiADKAJIIgRBCGopAgA3AgAgA0HsAmogBEEQaikCADcCACADIAQpAgA3AtwCIAQgBEEYaiAGQRhsQWhqEPgDGkEFIQggA0EFNgLYAiADIAU2AtQCIAMgBzYC0AIgAyAGQX9qNgJQDAELIANB0AJqIAEgAkH41cAAQc0AEI8DIAMoAtgCIQgLIANBiAJqEJUCIANByABqEJQCIAhBCEYNAiADQRBqQQhqIANB+AJqKQIANwMAIANBIGogA0GAA2opAgA3AwAgA0GSAWogA0GLA2otAAA6AAAgAyADKQLwAjcDECADIAMvAIkDOwGQASADKALsAiECIAMoAugCIQcgAygC5AIhBCADKALgAiEFIAMoAtwCIQYgAygC1AIhASADKALQAiEJIAMtAIgDIQoMAwsQ0gEACyADQcgAahCUAgsCQCADKALcAiIGRQ0AIANB7AJqKAIAIQIgA0HoAmooAgAhByADQeQCaigCACEEIANB4AJqKAIAIQUMAgsgA0EIakEBEOkBIAMoAgwhCSADKAIIIghBIToAACADQYgCaiAIQQEgASACENABAkACQAJAIAMoAogCDQAgA0GIAmpBEGoiBSgCACEHIANBiAJqQQxqIgsoAgAhBCADQYgCaiADKAKMAiADQYgCakEIaiIGKAIAEGQCQCADKAKIAkUNACADQZwCaigCACEKIAUoAgAhByALKAIAIQQgBigCACEFDAILIANBqAFqQRBqIAc2AgAgA0GoAWpBDGogBDYCACADQagBakEIaiAGKAIAIgU2AgAgAyADKAKMAiIGNgKsAUEAIQpBASELDAILIANBnAJqKAIAIQogA0GYAmooAgAhByADQZQCaigCACEEIANBkAJqKAIAIQULIAMoAowCIQYgA0G8AWogCjYCACADQbgBaiAHNgIAIANBtAFqIAQ2AgAgA0GwAWogBTYCACADIAY2AqwBQQEhCkEAIQsLIAMgCjYCqAEgCCAJELcDAkACQAJAAkACQCALRQ0AIAYhASAFIQIMAQsgBg0BIANBrAFqEIgDQQAhBAsgA0GIAmogASACEDACQCADKAKQAiIIQQVHDQAgA0GkAmooAgAhAiADQaACaigCACEHIANBnAJqKAIAIQQgA0GYAmooAgAhBSADKAKUAiEGDAILIANBGGogA0GwAmopAgA3AwAgA0EgaiADQbgCaikCADcDACADQZABakECaiADQcgAakECai0AADoAACADIAMpAqgCNwMQIAMgAy8ASDsBkAEgBEEARyEKIAMoAqQCIQIgAygCoAIhByADKAKcAiEEIAMoApgCIQUgAygClAIhBiADKAKMAiEBIAMoAogCIQkMAgsgA0G8AWooAgAhAgtBCCEICwJAIAMoAtgCQQhHDQAgA0HcAmoQiAMLIAhBCEYNAQsgA0HQAmpBKGogA0EQakEQaikDADcCACADQdACakEgaiADQRBqQQhqIgspAwA3AgAgA0GDA2ogA0GSAWotAAA6AAAgAyADKQMQNwLoAiADIAMvAZABOwCBAyADIAo6AIADIAMgAjYC5AIgAyAHNgLgAiADIAQ2AtwCIAMgBTYC2AIgAyAGNgLUAiADIAg2AtACIANBiAJqIAkgARC3ASADKAKIAkUNASADQZwCaigCACECIANBiAJqQRBqKAIAIQcgA0GUAmooAgAhBCADQYgCakEIaigCACEFIAMoAowCIQYgA0HQAmoQnwILIAAgBjYCDCAAQQg2AgggAEEcaiACNgIAIABBGGogBzYCACAAQRRqIAQ2AgAgAEEQaiAFNgIADAELIANBiAJqQQhqKAIAIQkgAygCjAIhCiADQegBakEIaiIMIANB0AJqQRhqIgFBCGopAgA3AwAgA0HoAWpBEGoiDSABQRBqKQIANwMAIANB6AFqQRhqIg4gAUEYaigCADYCACADIAEpAgA3A+gBIAMgAjYCJCADIAc2AiAgAyAENgIcIAMgBTYCGCADIAY2AhQgAyAINgIQIANBEGpBIGogDCkDADcCACADQRBqQShqIA0pAwA3AgAgA0HAAGogDigCADYCACADIAMpA+gBNwIoIANB+ABqIAogCRBqAkACQAJAAkAgAygCeCIFRQ0AAkAgAygCfA0AIANByABqIAtBLBD3AxoMAgsgAEEINgIIIAAgA0H8AGoiBikCADcCDCAAQRxqIAZBEGooAgA2AgAgAEEUaiAGQQhqKQIANwIADAMLIANBhAFqLQAAIQcgA0GIAmogAygCfCIGIANB+ABqQQhqKAIAIgQQMgJAAkAgAygCkAJBCEcNACADQdACaiAGIAQQMgJAAkACQCADKALYAiICQQhHDQACQCADKALcAiIBRQ0AIANB6AJqKAIAIQQgA0HgAmooAgAhAiADQewCaigCACEIIANB5AJqKAIAIQYgA0EsEOkBIAMoAgQhCSADKAIAQbzVwABBLBD3AyEKIANBLDYCzAIgAyAJNgLIAiADIAo2AsQCIANBxAJqQZDTwABBAhDiASADQcQCaiAGIAgQ4gEgA0G0AWogASACIANBxAJqENgBIANBCDYCsAEgBiAEELcDDAMLIANBqAFqIAYgBEG81cAAQSwQjwMgAkEIRw0BQQANAiADKALcAkUNAiADQeQCaigCACADQegCaigCABC3AwwCCyADQagBaiAGIARBvNXAAEEsEI8DCyADQdACahDwAgsgA0GIAmoQ8AIMAQsgA0GoAWogA0GIAmpBPBD3AxoLIAMoArABIgJBCEYNASADQZABakEIaiIGIANBvAFqKQIANwMAIANBkAFqQRBqIgQgA0HEAWooAgA2AgAgAyADKQK0ATcDkAEgAygCrAEhCSADKAKoASEKIANB6AJqIgEgA0HgAWooAgA2AgAgA0HQAmpBEGoiCCADQdgBaikCADcDACADQdACakEIaiILIANB0AFqKQIANwMAIAMgAykCyAE3A9ACIANBiAJqQRBqIgwgBCgCADYCACADQYgCakEIaiINIAYpAwA3AwAgAyADKQOQATcDiAJB7AAQpwMiBiADQRBqQTQQ9wMiBCACNgI0IAQgBzoAaCAEIAMpA4gCNwI4IARBwABqIA0pAwA3AgAgBEHIAGogDCgCADYCACAEIAMpA9ACNwJMIARB1ABqIAspAwA3AgAgBEHcAGogCCkDADcCACAEQeQAaiABKAIANgIAQQchCAsgACAGNgIMIAAgCDYCCCAAIAk2AgQgACAKNgIAIABBEGogA0HIAGpBLBD3AxogBUUNAiADQfwAahCIAwwCCyADQaABaiADQagBakEcaigCACIGNgIAIANBkAFqQQhqIANBqAFqQRRqKQIAIg83AwAgAyADKQK0ASIQNwOQASAAQRxqIAY2AgAgAEEUaiAPNwIAIAAgEDcCDCAAQQg2AggLIANBEGoQnwILIANBkANqJAALpRkDCn8BfgF8IwBBkAJrIgIkACACIAE2AoABAkACQAJAAkACQAJAIAEQoAMNAAJAIAEQBSIDQQFLDQAgAEEAOgAAIAAgA0EARzoAAQwECwJAAkACQAJAAkAgARARQQFGDQAgAkHwAGogARAGIAIoAnBFDQEgAisDeCENIAEQEg0CIAAgDTkDCCAAQQo6AAAMCAsgAiABNgKYASACQRhqIAEQwwIgAigCGEUNAyACIAIpAyAiDBATNgLQASACQZgBaiACQdABahC7AyEDIAIoAtABELYDIAIoApgBIQEgA0UNAyABELYDIAAgDDcDCCAAQQg6AAAMCQsgAkHoAGogARAHIAIoAmgiA0UNASACQeAAaiADIAIoAmwQqwIgAigCYCIERQ0BIAIoAmQhAyAAIAQ2AgQgAEEMOgAAIAAgAzYCDCAAIAM2AggMBgsgAEEIOgAAIA1EAAAAAAAA4MNmIQMCQAJAIA2ZRAAAAAAAAOBDY0UNACANsCEMDAELQoCAgICAgICAgH8hDAsgAEIAQv///////////wAgDEKAgICAgICAgIB/IAMbIA1E////////30NkGyANIA1iGzcDCAwFCwJAAkAgARDsAw0AIAJBhAFqIAJBgAFqEMABIAIoAoQBRQ0BIAJB2wFqIAJBhAFqQQhqKAIANgAAIABBDjoAACACIAIpAoQBNwDTASAAIAIpANABNwABIABBCGogAkHXAWopAAA3AAAMBgsgAiABNgKwAQJAIAJBsAFqEMMDIgFFDQBBCCEDIAJBgAJqQQhqIAEoAgAQEDYCACACQQA2AoQCIAJBADYCjAIgAiABNgKAAiACQThqIAJBgAJqEKwCAkAgAigCPCIBQYCABCABQYCABEkbQQAgAigCOBsiAUUNAEEIIAFBBHQQhQMiA0UNBQsgAkEANgL4ASACIAE2AvQBIAIgAzYC8AEgAkGYAWpBAXIhBCACQdABakEBciEFA0AgAkEwaiACQYACahCOAkEWIQECQCACKAIwRQ0AIAIoAjQhASACIAIoAowCQQFqNgKMAiACQdABaiABEDMgAi0A0AEiAUEWRg0HIAJBxAFqQQJqIAVBAmotAAA6AAAgAiAFLwAAOwHEASACKALUASEDIAIpA9gBIQwLIAQgAi8BxAE7AAAgBEECaiACQcQBakECai0AADoAACACIAw3A6ABIAIgAzYCnAEgAiABOgCYAQJAIAFBFkYNACACQfABaiACQZgBahD+AQwBCwsgAkGYAWoQrgMgAkHbAWogAkHwAWpBCGooAgA2AAAgAEEUOgAAIAIgAikC8AE3ANMBIAAgAikA0AE3AAEgAEEIaiACQdcBaikAADcAAAwHCyACQdABaiACKAKwARCaASACKALQASEBAkACQAJAIAItANQBIgNBfmoOAgIAAQsgAEEWOgAAIAAgATYCBAwICyACIAE2AvABIAIgA0EARzoA9AEgAkEANgKIAiACQgg3AoACIAJBmAFqQQFyIQMgAkHQAWpBAXIhBgJAAkACQAJAA0AgAkEoaiACQfABahC7ASACKAIsIQRBFiEBAkACQCACKAIoDgMABAEACyACQdABaiAEEDMgAi0A0AEiAUEWRg0CIAJBxAFqQQJqIAZBAmotAAA6AAAgAiAGLwAAOwHEASACKALUASEFIAIpA9gBIQwLIAMgAi8BxAE7AAAgA0ECaiACQcQBakECai0AADoAACACIAw3A6ABIAIgBTYCnAEgAiABOgCYASABQRZGDQMgAkGAAmogAkGYAWoQ/gEMAAsLIAIoAtQBIQQLIABBFjoAACAAIAQ2AgQgAkGAAmoQkAIMAQsgAkGYAWoQrgMgAkHbAWogAkGAAmpBCGooAgA2AAAgAEEUOgAAIAIgAikCgAI3ANMBIAAgAikA0AE3AAEgAEEIaiACQdcBaikAADcAAAsgAigC8AEQtgMMBwsgACACQbABahDRAgwGCwJAAkAgARAUQQFHDQAQFSIDIAEQFiEEIAMQtgMgBEEBRw0BCyAAIAJBgAFqENECIAIoAoABIQEMBQsgAiABNgKQASACQdABaiABEJoBIAIoAtABIQMCQAJAAkAgAi0A1AEiBEF+ag4CAgABCyAAQRY6AAAgACADNgIEDAYLIAJBvAFqIARBAEc6AAAgAiADNgK4ASACQQA2ArABIAJBADYCzAEgAkIINwLEASACQeABaiEFIAJB0AFqQQFyIQYgAkGAAmpBAXIhByACQZgBakEBciEIIAJBsAFqQQhqIQkCQANAIAJByABqIAkQuwEgAigCTCEKQQEhBEEWIQMCQAJAAkACQCACKAJIDgMAAQMACyACQcAAaiAKEOQCIAIoAkAhAyACKAJEIQQgAigCsAEgAigCtAEQxgMgAiAENgK0ASACQQE2ArABIAJBmAFqIAMQMwJAIAItAJgBIgNBFkcNACACKAKcASEKDAELIAcgCC8AADsAACAHQQJqIgogCEECai0AADoAACACIAIpA6ABIgw3A4gCIAIgAigCnAEiCzYChAIgAiADOgCAAiACQQA2ArABIAJBmAFqIAQQMyACLQCYAUEWRw0BIAIoApwBIQogAkGAAmoQ5wELIABBFjoAACAAIAo2AgQgAkHEAWoQkQIMAwsgAkHwAWpBCGogAkGYAWpBCGopAwA3AwAgAiACKQOYATcD8AEgAkGUAWpBAmogCi0AADoAACACIAcvAAA7AZQBQQAhBAsgBiACLwGUATsAACAFIAIpA/ABNwMAIAZBAmogAkGUAWpBAmotAAA6AAAgBUEIaiACQfABakEIaikDADcDACACIAw3A9gBIAIgCzYC1AEgAiADOgDQAQJAIAQNACACQcQBaiACQdABahDRAQwBCwsgAkHQAWoQrwMgAkHbAWogAkHEAWpBCGooAgA2AAAgAEEVOgAAIAIgAikCxAE3ANMBIAAgAikA0AE3AAEgAEEIaiACQdcBaikAADcAAAsgAigCuAEQtgMgAigCsAEgAigCtAEQxgMMBQsCQCABEBRBAUYNACAAIAJBkAFqENECIAIoApABIQEMBQsgAiABEBciAzYClAEgAkGYAWpBEGogAxAQIgM2AgAgAkGkAWpBADYCACACQQA2AqwBIAJBADYCmAEgAiACQZQBajYCoAFBCCEEAkAgA0GAgAIgA0GAgAJJGyIDRQ0AQQggA0EFdBCFAyIERQ0DCyACQZgBakEIaiEHIAJBADYCzAEgAiADNgLIASACIAQ2AsQBIAJB0AFqQRBqIQYgAkHQAWpBAXIhCiACQfABakEBciELIAJBlAFqIQUCQAJAAkACQANAQRYhAwJAIAVFDQAgAkHYAGogBxCbAkEWIQMgAigCWEUNACACQdAAaiACKAJcEOQCIAIgAigCrAFBAWo2AqwBIAIoAlQhAyACQYACaiACKAJQEDMgAi0AgAJBFkYNAiACQfABakEIaiACQYACakEIaiIEKQMANwMAIAIgAikDgAI3A/ABIAJBgAJqIAMQMwJAIAItAIACQRZHDQAgAigChAIhBCACQfABahDnAQwECyACQbABakEIaiAEKQMANwMAIAIgAikDgAI3A7ABIAJBwAFqQQJqIAtBAmotAAA6AAAgAiALLwAAOwHAASACKAL0ASEEIAItAPABIgNBF0YNAyACKQP4ASEMCyAKIAIvAcABOwAAIAYgAikDsAE3AwAgCkECaiACQcABakECai0AADoAACAGQQhqIAJBsAFqQQhqKQMANwMAIAIgDDcD2AEgAiAENgLUASACIAM6ANABIANBFkYNAyACQcQBaiACQdABahDRASACKAKgASEFDAALCyACKAKEAiEEIAMQtgMLIABBFjoAACAAIAQ2AgQgAkHEAWoQkQIMAQsgAkHQAWoQrwMgAkHbAWogAkHEAWpBCGooAgA2AAAgAEEVOgAAIAIgAikCxAE3ANMBIAAgAikA0AE3AAEgAEEIaiACQdcBaikAADcAAAsgAigCmAEgAigCnAEQxgMgAigClAEQtgMMBAsgAiABNgKYASACQQhqIAEQwwICQCACKAIIRQ0AIAIgAikDECIMEBg2AtABIAJBmAFqIAJB0AFqELsDIQMgAigC0AEQtgMgAigCmAEhASADRQ0AIAEQtgMgACAMNwMIIABBBDoAAAwGC0HricAAQc8AELABIQMgAEEWOgAAIAAgAzYCBAwDCyAAQRI6AAAMAgsACyACKALUASEBIABBFjoAACAAIAE2AgQgAkHwAWoQkAIMAQsgARC2AwwBCyACKAKwARC2AwsgAkGQAmokAAuUEgIUfwN+IwBBwAFrIgMkAEEAIQQgA0EANgIMIANCBDcCBCADQYgBakEMaiEFQQQhBiADQYgBakEEaiEHIANBoAFqQQxqIQggA0GIAWpBDWohCSADQaABakENaiEKIANB8ABqQQRqIQsgA0GgAWpBBGohDCADQcAAakEEaiENIANB2ABqQQRqIQ4gA0HwAGpBDWohD0EAIRACQAJAAkADQAJAAkAgAkUNACADQaABaiABIAIQaiADKAKoASERIAMoAqQBIRICQAJAAkACQCADKAKgAQ0AIAMgEjYCXAwBCyAPIAopAAA3AAAgD0EHaiAKQQdqIhMoAAA2AAAgAyADLQCsAToAfCADIBE2AnggAyASNgJ0IANBATYCcAJAAkACQCASDQAgA0GgAWogASACEH8CQAJAIAMoAqABDQAgByAMKQIANwIAIAdBCGogDEEIaikCADcCAAwBCwJAIAMoAqQBRQ0AIAcgDCkCADcCACAHQRBqIAxBEGooAgA2AgAgB0EIaiAMQQhqKQIANwIADAMLIANBiAFqIAEgAhC1AiAMEIgDIAMoAogBDQILIAMgAygCkAEiETYCYCADIAMoAowBIhI2AlxBACEUQQEhFQwCCyAOIAspAgA3AgAgDkEQaiALQRBqKAIANgIAIA5BCGogC0EIaikCADcCAEEBIRQgA0EBNgJYIAMoAlwhEgwDCyADIAMoApwBNgJsIAMgAykClAE3AmQgAyADKAKQASIRNgJgIAMgAygCjAEiEjYCXEEBIRRBACEVCyADIBQ2AlggCxCIAyAVRQ0BCyADIBE2AkggAyASNgJEIANBADYCQAwBCwJAAkACQCASDQAgA0GgAWogASACEDUCQCADKAKoASISQQNGDQAgA0GIAWpBCGogCEEIaikCACIXNwMAIANBiAFqQRBqIAhBEGooAgAiETYCACADIAgpAgAiGDcDiAEgAykCoAEhGSAMQRBqIBE2AgAgDEEIaiAXNwIAIAwgGDcCACADIBI2AqABIANBoAFqEKYDIAMgGTcCRCADQQA2AkAMAwsgA0GIAWpBEGogCEEQaigCACISNgIAIANBiAFqQQhqIAhBCGopAgAiFzcDACADIAgpAgAiGDcDiAEgC0EQaiIRIBI2AgAgC0EIaiISIBc3AgAgCyAYNwIAIANBATYCcCADKAJ0RQ0BIA0gCykCADcCACANQRBqIBEoAgA2AgAgDUEIaiASKQIANwIAIANBATYCQAwCCyANIA4pAgA3AgAgDUEQaiAOQRBqKAIANgIAIA1BCGogDkEIaikCADcCACADQQE2AkAMAgsgA0GgAWogASACEF8gAygCqAEhESADKAKkASESAkACQCADKAKgAQ0AIAMgETYCSCADIBI2AkQgA0EANgJADAELIAkgCikAADcAACAJQQdqIBMoAAA2AAAgAyADLQCsAToAlAEgAyARNgKQASADIBI2AowBIANBATYCiAECQAJAAkAgEg0AIANBoAFqQSkgASACEKcBIAMoAqABDQFBACESDAILIA0gBykCADcCACANQRBqIAdBEGooAgA2AgAgDUEIaiAHQQhqKQIANwIAIANBATYCQAwCCyADIAMpArABNwJQIAMgAygCrAE2AkxBASESCyADKAKkASERIAMgAygCqAE2AkggAyARNgJEIAMgEjYCQCAHEIgDCyALEIgDCyAURQ0AIA4QiAMLIANBKGogA0HAAGoQ3gEgAy0AKA0DIAMtACkNASACIQQLIAAgATYCBCAAQQA2AgAgAEEIaiAENgIAIABBDGogAykCBDcCACAAQRRqIANBBGpBCGooAgA2AgAMBAsgA0GgAWogASACEEogA0HwAGpBCGoiEyAIQQhqKAIANgIAIAMgCCkCADcDcCADKAKoASERIAMoAqQBIRICQAJAAkACQAJAAkACQCADKAKgAQ0AIANBoAFqQQhqIhQgEygCACITNgIAIAMgAykDcDcDoAECQCATDQAgA0GgAWoQnANBACESIBYhEQwCCyADQcAAakEIaiAUKAIAIhM2AgAgAyADKQOgASIXNwNAIANB2ABqQQhqIhYgEzYCACADIBc3A1ggA0GgAWogEiAREL0BIAMoAqgBIRMgAygCpAEhEiADKAKgAQ0CIANBoAFqIBIgExC3ASADKAKoASETIAMoAqQBIRIgAygCoAFFDQUgA0HwAGpBCGogCEEIaigCADYCACADIAgpAgA3A3AgEyERDAMLIANB2ABqQQhqIANB8ABqQQhqKAIANgIAIAMgAykDcDcDWAsgA0EoakEIaiADQdgAakEIaigCADYCACADIAMpA1g3AygMAgsgA0HwAGpBCGogCEEIaigCADYCACADIAgpAgA3A3AgEyERCyADQShqQQhqIANB8ABqQQhqKAIANgIAIAMgAykDcDcDKCADQdgAahCcAwsgA0EQakEIaiADQShqQQhqKAIAIhA2AgAgAyADKQMoIhc3AxAgBUEIaiAQNgIAIAUgFzcCACADIBE2ApABIAMgEjYCjAEgA0EBNgKIASASDQEgACABNgIEIABBADYCACAAQQhqIAI2AgAgAEEMaiADKQIENwIAIABBFGogA0EEakEIaigCADYCACAHEIgDDAULIANBEGpBCGogFigCACICNgIAIAMgAykDWCIXNwMQIBQgAjYCACADIBc3A6ABIAUgFzcCACAFQQhqIgEgAjYCACADIBI2AowBIAMgEzYCkAECQCAQIAMoAghHDQAgA0EEaiAQEJ4BIAMoAgQhBiADKAIMIRALIAEoAgAhAiAGIBBBDGxqIgEgBSkCADcCACABQQhqIAI2AgAgAyADKAIMQQFqIhA2AgwgESEWIBMhAiASIQEMAQsLIABBATYCACAAIAcpAgA3AgQgAEEUaiAHQRBqKAIANgIAIABBDGogB0EIaikCADcCAAwBCyADQSJqIANBKGpBFGooAgAiEjYBACADQRpqIANBKGpBDGopAgAiFzcBACADIAMpAiwiGDcBEiAAQRRqIBI2AQAgAEEMaiAXNwEAIAAgGDcBBCAAQQE2AgALIANBBGoQlQILIANBwAFqJAALmBACCn8BfiMAQeABayIDJAAgA0EYaiABIAIQqwECQAJAAkACQCADKAIYIgRFDQACQCADKAIcIgVFDQAgA0EgaikCACENIABBGGogA0EYakEQaikCADcCACAAQRBqIA03AgAgACAFNgIMIABBAzYCCAwECyADQRxqEIgDIANBGGpBJiABIAIQpwECQAJAIAMoAhgNACADQSRqKAIAIQYgA0EgaigCACECIAMoAhwhAQwBCyADKAIcIgUNAiADQRxqEIgDQYCAxAAhBgsMAgsgA0EkaigCACEHIANBIGooAgAhAiADKAIcIQFBgIDEACEGDAELIANBIGopAgAhDSAAQRhqIANBGGpBEGopAgA3AgAgAEEQaiANNwIAIAAgBTYCDCAAQQM2AggMAQsgA0EQakECEOkBIAMoAhQhCCADKAIQIgVBvvwAOwAAIANBCGpBARDpASADKAIMIQkgAygCCCIKQT46AAAgA0ECEOkBIAMoAgQhCyADKAIAIgxBvvgBOwAAIANBPGpBAjYCACADQThqIAg2AgAgAyAFNgI0IANBAjYCMCADIAs2AiwgAyAMNgIoIANBATYCJCADIAk2AiAgAyAKNgIcIANBPDYCGCADQagBaiAFQQIgASACENABAkACQAJAAkACQAJAAkAgAygCqAENACADQewAaiICQQE6AAAgA0GwAWooAgAhCCADKAKsASEFIAIoAgAhCQwBCyADQeAAakEQaiADQagBakEQaikCADcCACADQeAAakEMaiADQagBakEMaigCACIJNgIAIANB4ABqQQhqIANBqAFqQQhqKAIAIgg2AgAgAyADKAKsASIFNgJkIANBATYCYAJAAkACQCAFDQAgA0HkAGohCyADQagBaiAKQQEgASACENABAkACQCADKAKoAQ0AIANBkAFqQQxqIANBqAFqQQxqKQIANwIAIAMgAykCrAE3ApQBDAELIANBrAFqIQUCQCADKAKsAUUNACADQaQBaiAFQRBqKAIANgIAIANBnAFqIAVBCGopAgA3AgAgAyAFKQIANwKUAQwDCyADQZABaiAMQQIgASACENABIAUQiAMgAygCkAENAgtBACEKIANBhAFqIgJBADoAACADQfgAakEIaiADQZABakEIaigCACIINgIAIAMgAygClAEiBTYCfCACKAIAIglBCHYhAgwCCyAJQQh2IQIgAykCcCENDAMLIANB+ABqQRBqIANBkAFqQRBqKQIANwIAIANB+ABqQQxqIANBkAFqQQxqKAIAIgk2AgAgA0H4AGpBCGogA0GQAWpBCGooAgAiCDYCACADIAMoApQBIgU2AnxBASEKIANBATYCeAJAIAUNACADQfwAaiEMIANBqAFqQTwgASACEKcBAkACQCADKAKoAQ0AIANBsAFqKAIAIQggAygCrAEhBUEAIQpBAiEJDAELIANBtAFqKAIAIglBCHYhAiADQbgBaikCACENIANBqAFqQQhqKAIAIQggAygCrAEhBUEBIQoLIAwQiAMMAQsgCUEIdiECIAMpAogBIQ0LIAsQiAMgCg0BCyADQRhqEMwCIANBGGpBJiAFIAgQpwECQAJAIAMoAhgNACADQRhqIAMoAhwgA0EYakEIaiICKAIAEKsBIAMoAhhFDQMgA0EoaikCACENIANBJGooAgAhDCACKAIAIQEMAQsgA0EoaikCACENIANBJGooAgAhDCADQSBqKAIAIQELIAMoAhwhAiADQbgBaiANNwIAIANBtAFqIgogDDYCACADQagBakEIaiABNgIAIAMgAjYCrAEgA0EBNgKoASACDQMgA0GsAWohCiADQRhqIAUgCBC3AQJAAkACQAJAIAMoAhgNACADQRhqIAMoAhwgA0EYakEIaiICKAIAEEogAygCGEUNAiADQfgAakEIaiADQSxqKAIANgIAIAMgA0EkaikCADcDeCACKAIAIQEMAQsgA0H4AGpBCGogA0EsaigCADYCACADIANBJGopAgA3A3ggA0EYakEIaigCACEBCyADKAIcIQIgA0HQAGpBCGogA0H4AGpBCGooAgA2AgAgAyADKQN4NwNQQQAhBQwBCyADQcABakEIaiIFIANBLGooAgA2AgAgAyADQSRqKQIANwPAASACKAIAIQEgAygCHCECIANB0ABqQQhqIAUoAgA2AgAgAyADKQPAATcDUEEBIQULIAoQiAMgBQ0CDAQLIAAgAjsAFSAAIAU2AgwgAEEDNgIIIABBF2ogAkEQdjoAACAAQRhqIA03AgAgAEEUaiAJOgAAIABBEGogCDYCACADQRhqEMwCDAQLIANBqAFqQQxqIgFBADYCACADQbgBaiADQRhqQQxqKAIANgIAIANB0ABqQQhqIANBvAFqKAIANgIAIAMgASkCADcDUCACKAIAIQEgAygCHCECCyADQcAAakEIaiADQdAAakEIaigCACIFNgIAIAMgAykDUCINNwNAIANBGGpBCGogBTYCACADIA03AxggACAHNgIMIABBAkEBIAZBgIDEAEYbQQAgBBs2AgggACABNgIEIAAgAjYCACAAIA03AhAgAEEYaiAFNgIAIAAgCToAHAwCCyADQdAAakEIaiAKQQhqKAIANgIAIAMgCikCADcDUAsgA0HAAGpBCGogA0HQAGpBCGooAgAiBTYCACADIAMpA1AiDTcDQCAAQRxqIAU2AgAgAEEUaiANNwIAIABBEGogATYCACAAIAI2AgwgAEEDNgIICyADQeABaiQAC+wPAgh/An4jAEHQAGsiAiQAIAJBwABqIAEQMwJAAkACQAJAAkACQAJAAkACQAJAAkAgAi0AQCIBQRZGDQAgAiACLQBDOgATIAIgAi8AQTsAESACIAIpA0giCjcDGCACIAIoAkQiAzYCFCAC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IANByAFqIQcgA0HgAGpBBGohCCADQfgAakEEaiEJIANBJGpBBGohCgJAAkACQAJAAkACQAJAAkADQAJAAkACQAJAAkACQAJAAkAgAg0AQQAhAgwBCyADQgE3ArABIANBJGogA0GwAWoQ3gEgAy0AJA0CIAMtACUNAQsgAygCXCELIAMoAlghDCADKAJUIQ0MCAsgAyACNgI4IAMgATYCNCADQR42AjAgA0Gh2MAANgIsIANCp4CAgPAENwIkIANBsAFqQScgASACEKcBIAMoArgBIQwgAygCtAEhDQJAAkACQAJAIAMoArABDQAgA0EANgK4ASADIA02ArABIAMgDSAMajYCtAECQAJAA0AgA0EYaiADQbABahDJASADKAIcIgtBJ0YNASALQYCAxABHDQALQQAhC0Hwu8EAIQ4MAQsgA0EQaiANIAwgAygCGEGA08AAEIACIAMoAhQhCyADKAIQIQ4LIANBCGogDSAMIAwgC2tBtNPAABCLAiADKAIMIQ0gAygCCCEMIANBsAFqIAogDiALEGIgAygCsAFFDQIgAykCwAEhDyADKAK8ASELIAMoArgBIQwgAygCtAEhDQwBCyADKQLAASEPIAMoArwBIQsLIAMgCzYChAEgAyAMNgKAASADIA02AnwgA0EBNgJ4IAMgDz4CiAEgAyAPQiCIPgKMASANDQEgA0EAOgDIASADQqKAgICgBDcCsAEgAyACNgLEASADIAE2AsABIANBHjYCvAEgA0G/2MAANgK4ASADQSRqQSIgASACEKcBIAMoAiwhDSADKAIoIQsCQAJAAkAgAygCJA0AIANBJGogByALIA0QLyADQaABakEIaiIMIARBCGooAgA2AgAgAyAEKQIANwOgASADKAIsIQ0gAygCKCELIAMoAiQNASADQZABakEIaiIOIAwoAgA2AgAgAyADKQOgATcDkAEgA0EkaiAGIAsgDRBiIAMoAiwhDSADKAIoIQsgAygCJA0CIAUgAykDkAE3AgAgBUEIaiAOKAIANgIAIAMgDTYCaCADIAs2AmQgA0EANgJgQQEhDAwICyADIAMpAjQ3AnAgAyADKAIwNgJsDAULIAUgAykDoAE3AgAgBUEIaiAMKAIANgIADAQLIAMgAykCNDcCcCADIAMoAjA2AmwgAyANNgJoIAMgCzYCZCADQQE2AmAgA0GQAWoQnAMMBAsgAykCtAEhD0EQEKcDIQsgAyANEOkBIAMoAgQhAiADKAIAIAwgDRD3AyEBIAsgDTYCDCALIAI2AgggCyABNgIEIAtBADYCACADQoGAgIAQNwKIASADIAs2AoQBIAMgDzcCfCAIQRBqIAlBEGooAgA2AgAgCEEIaiAJQQhqKQIANwIAIAggCSkCADcCACADKAJoIQ0gAygCZCELDAULIAggCSkCADcCACAIQRBqIAlBEGooAgA2AgAgCEEIaiAJQQhqKQIANwIAIANBATYCYCADKAJkIQsMBgsgA0E4aigCACEBIANBNGooAgAhDCADQTBqKAIAIQ0gA0EsaigCACECIAMoAighCwwKCyADIA02AmggAyALNgJkIANBATYCYAtBACEMCyAJEIgDIAxFDQILIANB1ABqIAUQgQIgDSECIAshAQwACwsgCw0BIAMoAlwhCyADKAJYIQwgAygCVCENIAgQiAMLIAMgCzYCuAEgAyAMNgK0ASADIA02ArABAkAgCw0AIANBsAFqEJ8DQQAhC0EAIQEMBQtBACEFIANBADYCRCADQQA2AjQgAyANNgIsIAMgDDYCKCADIA02AiQgAyANIAtBDGxqNgIwIANBsAFqIANBJGoQqQFBBCELAkACQCADKAKwAUEERw0AIANBJGoQsgJBACENDAELIANB+ABqIANBJGoQxQEgAygCeEEBaiILQX8gCxsiC0EEIAtBBEsbIg1B////P0sNAiANQQR0IgtBf0wNAiALEJ0DIgtFDQMgCyADKQKwATcCACALQQhqIANBsAFqQQhqKQIANwIAIANBATYCaCADIA02AmQgAyALNgJgIANBsAFqIANBJGpBMBD3AxogA0HgAGogA0GwAWoQswEgAygCYCELIAMoAmQhDSADKAJoIQULIAAgATYCBCAAQRRqIAU2AgAgAEEQaiANNgIAIABBDGogCzYCACAAQQhqIAI2AgBBACELDAULIANB9ABqKAIAIQEgAygCcCEMIAMoAmwhDSADKAJoIQIMAgsQwgIACwALIANB1ABqEJ8DCyAAIAs2AgQgAEEUaiABNgIAIABBEGogDDYCACAAQQxqIA02AgAgAEEIaiACNgIAQQEhCwsgACALNgIAIANB4AFqJAALpw0CDX8DfiMAQYABayIFJAAgBCABEK8CIQYgBUEcaiABIAQQRiAEKQEAIRIgBUEANgJAIAVCBDcCOCASQjCIIRMgEkIgiCEUIBKnIgRBEHYhByAEQf//A3EhCAJAAkACQAJAAkACQANAAkACQAJAIAIgA0cNACAFQcQAaiAFQThqIBSnIBOnEHMgBSgCTA0BIAVBEGpBBEEQEOICIAUoAhAiAkUNBiAFQQA2AlggBUIBNwJQIAVB4ABqIAVB0ABqENsBIAIgBSkCYDcCACACQQhqIAVB4ABqQQhqKQIANwIAIAVCgYCAgBA3AiwgBSACNgIoIAJBEGohCSAFQcQAahCZA0EBIQoMBAsgAkEQaiEEIAIvAQBFDQEgBUHgAGogAkEEaigCACILIAJBCGooAgAgCxsgAkEMaigCACACQQJqLwEAIAggBxA5IAVBOGogBUHgAGoQ3AEgBCECDAILIAVBKGpBCGogBUHEAGpBCGooAgAiCjYCACAFIAUpAkQiEzcDKEEEIQwgE6ciAiAKQQR0aiEJIAoNAiAKRSEEQQAhC0EBIQ1BACEDDAMLIAVB4ABqIAJBBGooAgAiCyACQQhqKAIAIAsbIAJBDGooAgBBACAIIAcQOSAFQThqIAVB4ABqENwBIAQhAgwACwsgBUEIakEEIApBA3QQ4gIgBSgCCCIMRQ0BIAwhBCAKIQMgAiELA0AgBCALKAIANgIAIARBBGogC0EIaigCADYCACAEQQhqIQQgC0EQaiELIANBf2oiAw0ACwJAIAoNAEEAIQRBASENQQAhC0EAIQMMAQsgCkEDdCEEIApBf2pB/////wFxIQsgDCEDAkADQCAERQ0BIARBeGohBCALIAMoAgRqIgcgC08hCCADQQhqIQMgByELIAgNAAsQigIACyAFIAsQ6QEgBUEANgJYIAUgBSkDADcCUCAFQdAAaiAMKAIAIAwoAgQQygMgDEEMaiEEIApBA3RBeGohAyAFKAJQIg0gBSgCWCIHaiEOIAsgB2shCAJAA0AgA0UNASAEQXxqKAIAIQ8gBCgCACEHIAVB4ABqIA4gCEEBEK4CIAUoAmwhCCAFKAJoIQ4gBSgCYCAFKAJkQc+dwABBARDsAiAFQeAAaiAOIAggBxCuAiAFKAJsIQggBSgCaCEOIAUoAmAgBSgCZCAPIAcQ7AIgA0F4aiEDIARBCGohBAwACwsgCyAIayEDIAUoAlQhC0EAIQQLIAUgEjcDYCAFQThqIA0gAyAFQeAAahBRIA0gCxC3AwJAIAQNACAMIApBA3QQwQMLIAUoAhwhEAJAIAUoAiQiAyAFKAJARw0AIAUoAjghBEEAIREgECELQQAhBwNAAkAgAyAHIghHDQAMBgsCQCALQQxqKAIAIARBDGooAgBHDQAgCEEBaiEHIARBCGohDiALQQhqIQ8gBCgCACEMIAsoAgAhDSAEQRBqIQQgC0EQaiELIA0gDygCACAMIA4oAgAQ9AINAQsLIAggA08NBAsgBUEANgJMIAVCATcCRCAFQcQAakHEncAAQcidwAAQ2QEgA0EBSw0BDAILAAsgBUHgAGogA0F/ahDzASAFQcQAaiAFKAJgIgQgBSgCaBDKAyAEIAUoAmQQtwMLAkAgBg0AIAVBxABqQcidwABBz53AABDZAQsgEEEMaiELQQAhBAJAA0ACQAJAAkACQCACIAlHDQAgAyAKSw0BDAULIAQNAQwCCyAFQQE2AlwgBUHsAGpCATcCACAFQQI2AmQgBUHMnMAANgJgIAVBEDYCfCAFIAVB+ABqNgJoIAUgBUHcAGo2AnggBUHQAGogBUHgAGoQwQEgBUHEAGogBSgCUCICIAUoAlgQygMgAiAFKAJUELcDIAVBxABqQcidwABBz53AABDZASAFQeAAakEBEPMBIAVBxABqIAUoAmAiAiAFKAJoEMoDIAIgBSgCZBC3AwwDCyAFQcQAakEKEM0BCyAFQcQAaiACKAIAIAJBCGooAgAQygMCQCAGIAQgA0lxRQ0AIAsoAgAgAkEMaigCAE0NACAFQcQAakHQncAAQdOdwAAQ2QELIARBAWohBCACQRBqIQIgC0EQaiELDAALCwJAIAEtABxFDQAgBUHEAGpBxJ3AAEHIncAAENkBCyAFKQJIIRMgBSgCRCERCyABQRBqEJkDIAEgEjcCACAAIBM3AgQgACARNgIAIAFBGGogBUHAAGooAgA2AgAgASAFKQI4NwIQIAVBKGoQmQMgBUEcahCZAyAFQYABaiQAC9sNAhh/BH4jAEGgAmsiAyQAIANBADYCLCADQgQ3AiRBBCEEIANB4AFqQQRqIQUgA0EwakEgaiEGIANBxABqIQcgA0E8aiEIIANBMGpBCGohCSADQeABakEYaiEKIANBrAFqQRhqIQsgA0HgAWpBIGohDEEAIQ0CQAJAAkACQAJAAkACQAJAA0ACQCACDQBBACEOIAEhDwwHCyADQeABaiABIAIQMgJAIAMoAugBIhBBCEYNACADKALkASEOIAMoAuABIREgAygC7AEhEiADKALwASETIAMoAvQBIRQgAygC+AEhFSADKAL8ASEWIAtBGGoiFyAMQRhqKAIANgIAIAtBEGoiGCAMQRBqKQIANwIAIAtBCGoiGSAMQQhqKQIANwIAIAsgDCkCADcCACADIBY2AsABIAMgFTYCvAEgAyAUNgK4ASADIBM2ArQBIAMgEjYCsAEgAyAQNgKsASADQeABaiARIA4QtQICQCADKALgASIaRQ0AIAMoAuQBIg8NBSAFEIgDCyADQZABakEIaiAZKQIAIhs3AwAgA0GQAWpBEGogGCkCACIcNwMAIANBkAFqQRhqIBcoAgAiDzYCACADIAspAgAiHTcDkAEgCkEYaiIXIA82AgAgCkEQaiIYIBw3AgAgCkEIaiIZIBs3AgAgCiAdNwIAIAMgGkU6AJQCIAMgFjYC9AEgAyAVNgLwASADIBQ2AuwBIAMgEzYC6AEgAyASNgLkASADIBA2AuABIANBrAFqIBEgDhC3ASADKAK0ASEOIAMoArABIQ8CQCADKAKsAUUNACADKALAASEKIAMoArwBIQsgAygCuAEhDSADQeABahCfAgwGCyADQfAAakEIaiAZKQIAIhs3AwAgA0HwAGpBEGogGCkCACIcNwMAIANB8ABqQRhqIBcpAgAiHTcDACADIAopAgAiHjcDcCAKIB03AwAgA0HgAWpBEGogHDcDACADQeABakEIaiAbNwMAIAMgHjcD4AEgBiAeNwIAIAZBCGogGzcCACAGQRBqIBw3AgAgBkEYaiAdNwIAIAMgDzYCMCADIA42AjQgAyAQNgI4IAMgEjYCPCADIBM2AkAgAyAUNgJEIAMgFTYCSCADIBY2AkwCQCANIAMoAihHDQAgA0EkaiANEKABIAMoAiQhBCADKAIsIQ0LIAQgDUE4bGogCUE4EPgDGiADIA1BAWoiDTYCLCADQTBqIA8gDhC3ASADKAI4IRAgAygCNCESIAMoAjANAiADQTBqIBIgEBB/IAMoAjghAiADKAI0IQECQCADKAIwRQ0AIAMoAjwhEyADIAMoAkQiFDYC9AEgAyADKAJAIhU2AvABIAMgEzYC7AEgAyACNgLoASADIAE2AuQBIANBATYC4AEgAQ0EIANBMGogEiAQELUCAkACQCADKAIwIhANAAwBCyADKAJEIRQgAygCQCEVCyADKAI8IRMgAygCOCECIAMoAjQhASAFEIgDIBANBAsgAyACNgK0ASADIAE2ArABIANBADYCrAEgA0GsAWoQqAMMAQsLIAMoAvwBIQogAygC+AEhCyADKAL0ASENIAMoAvABIQ4gAygC7AEhDwwDCyADQcQAaigCACEUIANBwABqKAIAIRUgA0E8aigCACETIBAhAiASIQELIANBwAFqIBQ2AgAgA0G8AWogFTYCACADQbgBaiIKIBM2AgAgAyACNgK0ASADIAE2ArABIANBATYCrAECQCABDQAgA0GsAWoQqAMMBAsgA0EYakEIaiAKQQhqKAIANgIAIAMgCikCADcDGAwCCyADKAL0ASEKIAMoAvABIQsgAygC7AEhDSADKALoASEOIANBrAFqEJ8CCyADIAo2AkwgAyALNgJIIAMgDTYCRCADIA42AkAgAyAPNgI8IANBCDYCOAJAIA8NACADQRhqQQhqIANBJGpBCGooAgA2AgAgAyADKQIkNwMYIAgQiAMgASEPIAIhDgwDCyADQRhqQQhqIAdBCGooAgA2AgAgAyAHKQIANwMYIA4hAiAPIQELIANBJGoQuAMgA0EIakEIaiADQRhqQQhqKAIAIgo2AgAgAyADKQMYIhs3AwggAEEUaiAKNgIAIABBDGogGzcCACAAQQhqIAI2AgAgACABNgIEIABBATYCAAwCCyADQRhqQQhqIANBJGpBCGooAgA2AgAgAyADKQIkNwMYCyADQQhqQQhqIANBGGpBCGooAgAiCjYCACADIAMpAxgiGzcDCCADQTBqQQhqIAo2AgAgAyAbNwMwIABBCGogDjYCACAAIA82AgQgAEEMaiAbNwIAIABBFGogCjYCACAAQQA2AgALIANBoAJqJAALogsBDn8jAEHwAGsiAyQAIANBIGogASACEKsCIAMoAiQhBCADKAIgIQUCQAJAAkACQAJAAkACQAJAAkACQEEALQCwvEEiAkEDRg0AAkAgAg4DAAMCAAtBAEECOgCwvEFBAEEBEJADIQECQAJAAkACQAJAQQAoAsC8QUH/////B3FFDQAQ+gNFDQELQQAoArS8QSECQQBBfzYCtLxBIAINCUEAKALAvEFB/////wdxDQFBACABNgK8vEEMAgsgA0HkAGpCADcCACADQQE2AlwgA0Gk58AANgJYIANB8LvBADYCYCADQdgAakHI58AAEMACAAsQ+gMhAkEAIAE2Ary8QSACRQ0BC0EAKALAvEFB/////wdxRQ0AEPoDDQBBAEEBOgC4vEELQQBBAzoAsLxBQQBBADYCtLxBCyADQSxqIAUgBBA8IAMoAiwNBSADQcAAaigCACEGIANBLGpBCGooAgAhByADKAIwIQggA0EANgJoIAMgCCAHajYCZCADIAg2AmAgAyAHNgJcIAMgCDYCWCADQdgAakEIaiEBIANBOGohCQNAIAMoAmQhCiADKAJgIQsgA0EYaiABEMkBIAMoAhwiAkGAgMQARg0DIAMoAhghDCACEKECDQALIAogC2sgDGogAygCYCINaiADKAJkIgJrIQ4MAwsgA0HkAGpCADcCACADQQE2AlwgA0HchsAANgJYIANB8LvBADYCYCADQdgAakHghcAAEMACAAsgA0HkAGpCADcCACADQQE2AlwgA0GchsAANgJYIANB8LvBADYCYCADQdgAakHghcAAEMACAAtBACEMIAMoAmQhAiADKAJgIQ1BACEOCwJAA0AgDSACIgFGDQECQCABQX9qIgItAAAiCsAiC0F/Sg0AAkACQCABQX5qIgItAAAiCsAiD0FASA0AIApBH3EhCgwBCwJAAkAgAUF9aiICLQAAIgrAIhBBQEgNACAKQQ9xIQoMAQsgAUF8aiICLQAAQQdxQQZ0IBBBP3FyIQoLIApBBnQgD0E/cXIhCgsgCkEGdCALQT9xciIKQYCAxABGDQILIAoQoQINAAsgASANayADKAJoaiEOCwJAAkACQCAOIAxGDQAgA0HEAGogCCAHEMIDIANB2ABqIANBxABqEGMgAygCWA0BIANB5ABqKAIAIQYgA0HgAGooAgAhASADKAJcIQIMAgsCQCAGRQ0AIANBPGooAgAhASADKAI4IQIMBQsgA0EIakEEQQwQ4gIgAygCCCIBRQ0CIAFBDjYCCCABQdTUwAA2AgQgAUHEj8AANgIAIAkQuAMMBQtBACECIANB2ABqELkCIQELIAkQuAMMAgsACwJAAkAgAygCMEUNACADQdgAaiADQTBqEGMCQCADKAJYDQAgA0HkAGooAgAhBiADQeAAaigCACEBIAMoAlwhAgwD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A0HSAGogA0HoAGpBFGooAgAiDTYBACADQcoAaiADQegAakEMaikCACIRNwEAIAMgAykCbCISNwFCIABBFGogDTYBACAAQQxqIBE3AQAgACASNwEEIABBATYCAAsgA0EUahCUAgsgA0GAAWokAAuYCgEBfyMAQTBrIgIkAAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIAAtAAAOEgABAgMEBQYHCAkKCwwNDg8QEQALIAIgAC0AAToACCACQSRqQgE3AgAgAkECNgIcIAJBlOLAADYCGCACQQM2AhQgAiACQRBqNgIgIAIgAkEIajYCECABKAIUIAEoAhggAkEYahDtAyEBDBELIAIgACkDCDcDCCACQSRqQgE3AgAgAkECNgIcIAJBsOLAADYCGCACQQQ2AhQgAiACQRBqNgIgIAIgAkEIajYCECABKAIUIAEoAhggAkEYahDtAyEBDBALIAIgACkDCDcDCCACQSRqQgE3AgAgAkECNgIcIAJBsOLAADYCGCACQQU2AhQgAiACQRBqNgIgIAIgAkEIajYCECABKAIUIAEoAhggAkEYahDtAyEBDA8LIAIgACsDCDkDCCACQSRqQgE3AgAgAkECNgIcIAJB0OLAADYCGCACQQY2AhQgAiACQRBqNgIgIAIgAkEIajYCECABKAIUIAEoAhggAkEYahDtAyEBDA4LIAIgACgCBDYCCCACQSRqQgE3AgAgAkECNgIcIAJB7OLAADYCGCACQQc2AhQgAiACQRBqNgIgIAIgAkEIajYCECABKAIUIAEoAhggAkEYahDtAyEBDA0LIAIgACkCBDcCCCACQSRqQgE3AgAgAkEBNgIcIAJBhOPAADYCGCACQQg2AhQgAiACQRBqNgIgIAIgAkEIajYCECABKAIUIAEoAhggAkEYahDtAyEBDAwLIAJBJGpCADcCACACQQE2AhwgAkGM48AANgIYIAJB8LvBADYCICABKAIUIAEoAhggAkEYahDtAyEBDAsLIAJBJGpCADcCACACQQE2AhwgAkGg48AANgIYIAJB8LvBADYCICABKAIUIAEoAhggAkEYahDtAyEBDAoLIAJBJGpCADcCACACQQE2AhwgAkG048AANgIYIAJB8LvBADYCICABKAIUIAEoAhggAkEYahDtAyEBDAkLIAJBJGpCADcCACACQQE2AhwgAkHM48AANgIYIAJB8LvBADYCICABKAIUIAEoAhggAkEYahDtAyEBDAgLIAJBJGpCADcCACACQQE2AhwgAkHc48AANgIYIAJB8LvBADYCICABKAIUIAEoAhggAkEYahDtAyEBDAcLIAJBJGpCADcCACACQQE2AhwgAkHo48AANgIYIAJB8LvBADYCICABKAIUIAEoAhggAkEYahDtAyEBDAYLIAJBJGpCADcCACACQQE2AhwgAkH048AANgIYIAJB8LvBADYCICABKAIUIAEoAhggAkEYahDtAyEBDAULIAJBJGpCADcCACACQQE2AhwgAkGI5MAANgIYIAJB8LvBADYCICABKAIUIAEoAhggAkEYahDtAyEBDAQLIAJBJGpCADcCACACQQE2AhwgAkGg5MAANgIYIAJB8LvBADYCICABKAIUIAEoAhggAkEYahDtAyEBDAMLIAJBJGpCADcCACACQQE2AhwgAkG45MAANgIYIAJB8LvBADYCICABKAIUIAEoAhggAkEYahDtAyEBDAILIAJBJGpCADcCACACQQE2AhwgAkHQ5MAANgIYIAJB8LvBADYCICABKAIUIAEoAhggAkEYahDtAyEBDAELIAEoAhQgACgCBCAAQQhqKAIAIAFBGGooAgAoAgwRBwAhAQsgAkEwaiQAIAELqAgBB38CQAJAIAFB/wlLDQAgAUEFdiECAkACQAJAIAAoAqABIgNFDQAgA0F/aiEEIANBAnQgAGpBfGohBSADIAJqQQJ0IABqQXxqIQYgA0EpSSEDA0AgA0UNAiACIARqIgdBKE8NAyAGIAUoAgA2AgAgBkF8aiEGIAVBfGohBSAEQX9qIgRBf0cNAAsLIAFBIEkNAyAAQQA2AgAgAUHAAEkNAyAAQQA2AgQgAkEBIAJBAUsbIgRBAkYNAyAAQQA2AgggBEEDRg0DIABBADYCDCAEQQRGDQMgAEEANgIQIARBBUYNAyAAQQA2AhQgBEEGRg0DIABBADYCGCAEQQdGDQMgAEEANgIcIARBCEYNAyAAQQA2AiAgBEEJRg0DIABBADYCJCAEQQpGDQMgAEEANgIoIARBC0YNAyAAQQA2AiwgBEEMRg0DIABBADYCMCAEQQ1GDQMgAEEANgI0IARBDkYNAyAAQQA2AjggBEEPRg0DIABBADYCPCAEQRBGDQMgAEEANgJAIARBEUYNAyAAQQA2AkQgBEESRg0DIABBADYCSCAEQRNGDQMgAEEANgJMIARBFEYNAyAAQQA2AlAgBEEVRg0DIABBADYCVCAEQRZGDQMgAEEANgJYIARBF0YNAyAAQQA2AlwgBEEYRg0DIABBADYCYCAEQRlGDQMgAEEANgJkIARBGkYNAyAAQQA2AmggBEEbRg0DIABBADYCbCAEQRxGDQMgAEEANgJwIARBHUYNAyAAQQA2AnQgBEEeRg0DIABBADYCeCAEQR9GDQMgAEEANgJ8IARBIEYNAyAAQQA2AoABIARBIUYNAyAAQQA2AoQBIARBIkYNAyAAQQA2AogBIARBI0YNAyAAQQA2AowBIARBJEYNAyAAQQA2ApABIARBJUYNAyAAQQA2ApQBIARBJkYNAyAAQQA2ApgBIARBJ0YNAyAAQQA2ApwBIARBKEYNA0EoQShBlMrAABDqAQALIARBKEGUysAAEOoBAAsgB0EoQZTKwAAQ6gEAC0G+ysAAQR1BlMrAABCjAgALIAAoAqABIAJqIQUCQCABQR9xIgMNACAAIAU2AqABIAAPCwJAAkAgBUF/aiIEQSdLDQAgBSEIIAAgBEECdGooAgAiBkEAIAFrIgF2IgRFDQECQCAFQSdLDQAgACAFQQJ0aiAENgIAIAVBAWohCAwCCyAFQShBlMrAABDqAQALIARBKEGUysAAEOoBAAsCQAJAIAJBAWoiByAFTw0AIAFBH3EhASAFQQJ0IABqQXhqIQQDQCAFQX5qQShPDQIgBEEEaiAGIAN0IAQoAgAiBiABdnI2AgAgBEF8aiEEIAcgBUF/aiIFSQ0ACwsgACACQQJ0aiIEIAQoAgAgA3Q2AgAgACAINgKgASAADwtBf0EoQZTKwAAQ6gEAC4MJAgd/An4jAEHwAGsiAyQAIANByABqIAEgAhA6AkACQCADKAJIDQAgA0EwakEIaiADQcgAakEUaigCACICNgIAIAMgA0HIAGpBDGopAgAiCjcDMCADKQJMIQsgA0HIAGpBCGoiASACNgIAIAMgCjcDSEEQEKcDIgJBAzYCACACIAMpA0g3AgQgAkEMaiABKAIANgIAIANBDGpBEGpCgYCAgBA3AgAgA0EMakEMaiIBIAI2AgAgACALNwIEIABBDGogASkCADcCACAAQRRqQQE2AgAgAEEANgIAIAMgCzcCEAwBCyADQQxqQQxqIANByABqQQxqKQIANwIAIANBDGpBFGogA0HIAGpBFGooAgA2AgAgA0EMakEIaiADQcgAakEIaigCADYCACADIAMoAkwiBDYCECADQQE2AgwgA0EQaiEFAkAgBEUNACAAQQE2AgAgACAFKQIANwIEIABBFGogBUEQaigCADYCACAAQQxqIAVBCGopAgA3AgAMAQsgA0EaNgIoIANBh9jAADYCJCADQQE6ACwgA0EwaiADQSRqQQhqIgYgASACEC9BAiEEAkAgAygCMA0AQQEhBCADQcQAaigCAEEBRw0AIANBMGpBDGooAgAiBygCAA0AQQAhBCAHKAIEIgggB0EMaigCACIHQYjawABBAhD0Ag0AIAggB0GK2sAAQQQQ9AINACAIIAdBjtrAAEEEEPQCDQAgCCAHQZLawABBBBD0Ag0AIAggB0GW2sAAQQIQ9AINACAIIAdBmNrAAEECEPQCDQAgCCAHQZrawABBBBD0Ag0AIAggB0Ge2sAAQQQQ9AINACAIIAdBotrAAEEEEPQCDQAgCCAHQabawABBBRD0Ag0AIAggB0Gr2sAAQQUQ9AINACAIIAdBsNrAAEEDEPQCDQAgCCAHQbPawABBAhD0AkEBcyEECwJAAkACQCAEQQJGDQAgBEEBcQ0AIANByABqIAYgASACEC8CQAJAIAMoAkgiBEUNAAJAIAMoAkwiBkUNACADQcgAakEQaigCACEEIANByABqQQhqKAIAIQcgA0HcAGooAgAhCCADQdQAaigCACEBIANBGhDpASADKAIEIQkgAygCACICQQApAIfYQDcAACACQRhqQQAvAJ/YQDsAACACQRBqQQApAJfYQDcAACACQQhqQQApAI/YQDcAACADQRo2AmwgAyAJNgJoIAMgAjYCZCADQeQAakGQ08AAQQIQ4gEgA0HkAGogASAIEOIBIABBBGogBiAHIANB5ABqENgBIABBATYCACABIAQQtwMMBAsgAEEEaiABIAJBh9jAAEEaEMQBIABBATYCACAERQ0BQQANAyADKAJMRQ0DIANB1ABqKAIAIANB2ABqKAIAELcDDAMLIABBBGogASACQYfYwABBGhDEASAAQQE2AgALIANByABqEIIDDAELIAAgAykCMDcCACAAQRBqIANBMGpBEGopAgA3AgAgAEEIaiAD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ACABQcAAahBWDQACQCAAKAIMIgJFDQAgAUE0akHssMAAQQIQ4wMNASABQdgAakEQaiACQRBqKQIANwMAIAFB2ABqQQhqIAJBCGopAgA3AwAgASACKQIANwNYIAFBNGpB/JDAACABQdgAahBWDQEMAgsgAUEgaiAAKAIAIgIgACgCBCgCDBEEACABKQMgQsH3+ejMk7LRQYUgAUEoaikDAELk3seFkNCF3n2FhFBFDQEgAUE0akHssMAAQQIQ4wMNACABQTRqIAIoAgAgAigCBBDjA0UNAQtBlJHAAEE3IAFB2ABqQcyRwABBqJLAABDWAQALIAFBwABqQQhqIgAgAUE0akEIaigCADYCACABIAEpAjQ3A0AgAUHAAGpB0JLAAEHaksAAENoBIAFBGGoQGiICEBsgAUEQaiABKAIYIAEoAhwQqwIgAUHAAGogASgCECIDIAEoAhQiBBDQAyABQcAAakGQ08AAQZLTwAAQ2gEgAUHYAGpBCGogACgCADYCACABIAEpA0A3A1ggAUEIaiABQdgAahDXASABKAIIIAEoAgwQHCADIAQQtwMCQCACQYQBSQ0AIAIQHQsgAUHwAGokAAumBAIHfwF+IwBBwABrIgMkACADQQhqQQIQ6QEgAygCDCEEIAMoAggiBUH8zAA7AAAgA0EoaiAFQQIgASACENABAkACQAJAAkACQCADKAIoDQAgA0EcaiIGQQE6AAAgA0EwaigCACEHIAMoAiwhCCAGKAIAIQYMAQsgA0EQakEQaiADQShqQRBqKQIANwIAIANBEGpBDGogA0EoakEMaigCACIGNgIAIANBEGpBCGogA0EoakEIaigCACIHNgIAIAMgAygCLCIINgIUIANBATYCECAIDQEgA0EUaiEJIANBKGpB/AAgASACEKcBAkACQCADKAIoIgENACADQTBqKAIAIQcgAygCLCEIQQAhBgwBCyADQTRqKAIAIgZBCHYhAiADQThqKQIAIQogA0EoakEIaigCACEHIAMoAiwhCAsgCRCIAyABDQILIANBKGpB4tfAAEECIAggBxBxAkAgAygCKEUNACADLwA1IANBN2otAABBEHRyIQIgA0EoakEQaikCACEKIANBNGotAAAhBiADQTBqKAIAIQcgAygCLCEIDAILIAAgAykCLDcCBEEAIQggAEEMaiAGQf8BcUEARzoA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f2oiCiAFTw0IIAogDGoiESADTw0GIAQgCmotAAAgAiARai0AAEYNAAsgASAIIAxqIgw2AhQgBg0EIAkhCgwICyAMIApqIhIgA08NBSAQIApqIREgBCAKaiETIApBAWohCiATLQAAIBEtAABGDQALIBIgC2tBAWohDAwBCyAMIAVqIQwLIAEgDDYCFCAGDQALQQAhCgwDCyARIANBuNLAABDqAQALIBIgA0HI0sAAEOoBAAsgCiAFQajSwAAQ6gEACyABIAo2AhwMAQsLIAAgDDYCBCAAQQhqIAo2AgBBASEKCyAAIAo2AgAL0wMCB38BfCMAQeAAayIDJAACQAJAAkAgACgCACIEEKADRQ0AQQchBUEAIQZBACEADAELQQAhBgJAQQFBAiAEEAUiB0EBRhtBACAHGyIHQQJGDQBBACEAQQAhBQwCCyADQRhqIAQQBgJAIAMoAhhFDQAgAysDICEKQQMhBUEAIQZBACEADAELIANBEGogBBAHAkACQCADKAIQIgRFDQAgA0EIaiAEIAMoAhQQqwIgAygCCCIERQ0AIAMoAgwhByADIAQ2AiggAyAHNgIwIAMgBzYCLEEFIQVBASEAQQAhBgwBCyADQTRqIAAQwAECQAJAIAMoAjQiCEUNAEEGIQUgAygCPCEHIAMoAjghCSAIIQQMAQsgA0HMAGpCATcCACADQQE2AkQgA0Gg38AANgJAIANBCTYCXCADIAA2AlggAyADQdgAajYCSCADQShqIANBwABqEL8BQREhBSADKAIoIQQgAygCMCEHCyAIQQBHIQYgCEUhAAsgB62/IQoLCyADIAo5A0ggAyAENgJEIAMgBzoAQSADIAU6AEAgA0HAAGogASACEM4BIQcCQCAGRQ0AIAggCRC3AwsCQCAARQ0AIAQgAygCLBC3AwsgA0HgAGokACAHC9wDAgN/An4jAEHgAGsiAyQAIANBCGpB0NTAAEECENUBIANByABqQdLUwABBAhDVASADQSxqIANByABqQRBqIgQoAgA2AgAgA0EkaiADQcgAakEIaiIFKQMANwIAIAMgAykDSDcCHCADQcgAaiADQQhqIAEgAhCJAQJAAkAgAygCSA0AIANBMGpBDGoiAkEAOgAAIAAgAykCTCIGNwIEIABBADYCACAAQQxqIAIoAgA2AgAgAyAGNwI0DAELIANBMGpBEGog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AyQAIAMgATYCCCADIAEgAmo2AgwCQAJAIANBCGoQxwIiBEGAgMQARg0AQQEhBQJAIARBgAFJDQBBAiEFIARBgBBJDQBBA0EEIARBgIAESRshBQsgAyABIAIgBUGE4MAAEIUCIAMpAwAhBiAAQQxqIAQ2AgAgACAGNwIEQQAhAQwBCyAAQQA2AgRBASEBCyAAIAE2AgAgA0EQaiQAC6MBAQJ/IwBBEGsiAiQAAkACQAJAIAEoAgBFDQACQCABKAIIIgMgASgCDEYNACABIANBEGo2AgggAkEIaiADQQxqKAIANgIAIAIgAykCBDcDACADKAIAIgNBBEcNAgsgARC/AyABQQA2AgBBBCEDDAELIABBBDYCAAwBCyAAIAM2AgAgACACKQMANwIEIABBDGogAkEIaigCADYCAAsgAkEQaiQAC50BAQF/IwBBIGsiAyQAIANBCGogASACEGQCQAJAAkACQCADKAIIDQAgA0EQaigCACECIAMoAgwhAQwBCyADKAIMDQELIAAgATYCBCAAQQhqIAI2AgBBACECDAELIAAgA0EMaiICKQIANwIEIABBFGogAkEQaigCADYCACAAQQxqIAJBCGopAgA3AgBBASECCyAAIAI2AgAgA0EgaiQAC7QBAQN/IwBBEGsiASQAIAAoAgAiAkEMaigCACEDAkACQAJAAkAgAigCBA4CAAEDCyADDQJB8LvBACECQQAhAwwBCyADDQEgAigCACICKAIEIQMgAigCACECCyABIAM2AgQgASACNgIAIAFBiOjAACAAKAIEIgIoAgwgACgCCCACLQAQEKoBAAsgAUEANgIEIAEgAjYCACABQZzowAAgACgCBCICKAIMIAAoAgggAi0AEBCqAQALowEAAkACQAJAAkAgAkF8ag4DAAIBAgsgAS0AAEH0AEcNASABLQABQeUARw0BIAEtAAJB+ABHDQFBACECIAEtAANB9ABHDQEMAgsgAS0AAEHpAEcNACABLQABQe4ARw0AIAEtAAJB5ABHDQAgAS0AA0HlAEcNACABLQAEQe4ARw0AQQEhAiABLQAFQfQARg0BC0ECIQILIABBADoAACAAIAI6AAELnwEBAX8jAEHAAGsiAiQAIAJCADcDOCACQThqIAAoAgAQKyACQRhqQgE3AgAgAiACKAI8IgA2AjQgAiAANgIwIAIgAigCODYC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IAJBMGokACABC2QBAX8jAEEwayICJAAgAiABNgIMIAIgADYCCCACQRxqQgE3AgAgAkECNgIUIAJBnInAADYCECACQRI2AiwgAiACQShqNgIYIAIgAkEIajYCKCACQRBqELgCIQEgAkEwaiQAIAELeQACQAJAAkACQAJAAkACQCAALQAADhUBAQEBAQEBAQEBAQECAQMBAQQBBQYACyAAQQRqEJECCw8LIAAoAgQgAEEIaigCABC3Aw8LIAAoAgQgAEEIaigCABC3Aw8LIABBBGoQyAMPCyAAQQRqEMgDDwsgAEEEahCQAgtkAQF/IwBBEGsiAyQAAkAgASgCAA0AIAAgASgCBDYCACAAIAFBCGotAAA6AAQgA0EQaiQADwsgAyABKAIENgIIIAMgAUEIai0AADoADEH7lsAAQSsgA0EIakHAiMAAIAIQ1gEAC1sBAn8jAEEQayICJAACQAJAAkACQCABDQBBASEDDAELIAFBf0wNASACQQhqQQEgARDiAiACKAIIIgNFDQILIAAgATYCBCAAIAM2AgAgAkEQaiQADwsQwgIACwALXgEBfyMAQTBrIgMkACADIAE2AgQgAyAANgIAIANBLGpBEDYCACADQRA2AiQgAyADNgIoIAMgA0EEajYCICADQQhqQbSxwABBAiADQSBqQQIQxwEgA0EIaiACEMACAAthAQF/IwBBMGsiAiQAIAIgATYCBCACIAA2AgAgAkEsakEQNgIAIAJBEDYCJCACIAI2AiggAiACQQRqNgIgIAJBCGpBlLjAAEEDIAJBIGpBAhDHASACQQhqQciYwAAQwAIAC2IBA38CQCAAKAIMIgIgACgCECIDTw0AAkAgACgCCCIEIAAoAgRHDQAgACAEEJ4BIAAoAgghBAsgACAEQQFqNgIIIAAoAgAgBEEMbGoiACABOgAIIAAgAzYCBCAAIAI2AgALC14BAX8jAEEwayIDJAAgAyAANgIAIAMgATYCBCADQSxqQRA2AgAgA0EQNgIkIAMgA0EEajYCKCADIAM2AiAgA0EIakGQt8AAQQIgA0EgakECEMcBIANBCGogAhDAAgALXgEBfyMAQTBrIgMkACADIAA2AgAgAyABNgIEIANBLGpBEDYCACADQRA2AiQgAyADQQRqNgIoIAMgAzYCICADQQhqQcS3wABBAiADQSBqQQIQxwEgA0EI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AgwBCyABQf///z9LDQEgAUEEdCICQX9MDQFBBCACEIUDIgJFDQILIAAgATYCBCAAIAI2AgAPCxDCAgALAAtRAQJ/IwBBEGsiAiQAAkACQCABKAIADQBBACEBQQAhAwwBCyACQQhqIAEQjwIgAigCDCEBIAIoAgghAwsgACABNgIEIAAgAzYCACACQRBqJAALSwACQAJAAkAgAiADSw0AIAIgA0cNAQwCCyABIANqLAAAQb9/Sg0BCyABIAIgAyACIAQQvQMACyAAIAIgA2s2AgQgACABIANqNgIAC0oBA39BACEDAkAgAkUNAAJAA0AgAC0AACIEIAEtAAAiBUcNASAAQQFqIQAgAUEBaiEBIAJBf2oiAkUNAgwACwsgBCAFayEDCyADC1wBAn9BAEEBEJADIQBBLEEEEJADIgFBAToAKCABQQA2ASQgAUIENwEcIAFBwITAADYBGCABIAA2ARQgAUEAOwEQIAFBADsBDCABQQA7AQggAUKBgICAEDcCACABC04BAX8jAEEgayIDJAAgA0EQaiACNgIAIAMgATYCDCADQQU6AAggA0EIaiADQR9qQdCJwAAQzgEhAiAAQQI7AQAgACACNgIEIANBIGokAAtOAQF/IwBBIGsiAyQAIANBEGogAjYCACADIAE2AgwgA0EGOgAIIANBCGogA0EfakHQicAAEM4BIQIgAEECOwEAIAAgAjYCBCADQSBqJAALUwEBfyMAQTBrIgAkACAAQTU2AgwgAEG4l8AANgIIIABBDDYCLCAAIABBCGo2AiggAEEQakGg38AAQQEgAEEoakEBEMcBIABBEGpBuJjAABDAAgALSgACQCADRQ0AAkACQCADIAJJDQAgAyACRw0BDAILIAEgA2osAABBv39KDQELIAEgAkEAIAMgBBC9AwALIAAgAzYCBCAAIAE2AgALRwEEfyABIAEgAiADEMsBIgRqIgUtAAAhBiAFIAOnQRl2Igc6AAAgBEF4aiACcSABakEIaiAHOgAAIAAgBjoABCAAIAQ2AgALSwEDfyAAKAIIIQEgACgCACICIQMCQANAIAFFDQEgAUF/aiEBIAMQugMgA0EQaiEDDAALCwJAIAAoAgQiAUUNACACIAFBBHQQwQMLC00BAn8jAEEQayICJAACQAJAIAEoAgANAEEAIQEMAQsgAkEIaiABEJsCIAIoAgwh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QgEBfwJAAkACQCACQYCAxABGDQBBASEFIAAgAiABKAIQEQUADQELIAMNAUEAIQULIAUPCyAAIAMgBCABKAIMEQcACz4BAX8jAEEgayIDJAAgA0EMakHh18AAQQEQ1QEgACADQQxqIAEgAhCJASADKAIMIAMoAhAQtwMgA0EgaiQAC0EBAn9BACEAAkBBACgC2L1BIgFFDQBBACEAA0AgAEEBaiEAIAEoAggiAQ0ACwtBACAAQf8fIABB/x9LGzYCkMBBC0UBAn9BAC0ApMBBGiABKAIEIQIgASgCACEDAkBBCBAxIgENAAALIAEgAjYCBCABIAM2AgAgAEH458AANgIEIAAgATYCAAs6AQJ/IwBBEGsiASQAIAFBBGogABC/ASABKAIEIgAgASgCDBAIIQIgACABKAIIELcDIAFBEGokACACCz8BAX9BHBCnAyIBQbzUwAA2AgAgASAAKQIANwIEIAFBDGogAEEIaikCADcCACABQRRqIABBEGopAgA3AgAgAQs8AQF/IwBBEGsiAyQAAkAgAA0AIANBEGokACABDwsgAyABNgIMQfuWwABBKyADQQxqQbCIwAAgAhDWAQALPAEBfyMAQRBrIgIkACACQQhqIAAgACgCACgCBBEEACACKAIIIAEgAigCDCgCEBEFACEAIAJBEGokACAAC0IBAn8gACgCBCEBIABB8LvBADYCBCAAKAIAIQIgAEHwu8EANgIAAkAgASACRg0AIAIgASACa0EEdhDVAgsgABDxAQs7AgF/AXwgASgCHEEBcSECIAArAwAhAwJAIAEoAghFDQAgASADIAIgAUEMaigCABAuDwsgASADIAIQLQs8AQF/IwBBEGsiAiQAIAJBCGogACAAKAIAKAIEEQQAIAIoAgggASACKAIMKAIQEQUAIQAgAkEQaiQAIAALQAEBfyMAQSBrIgAkACAAQRRqQgA3AgAgAEEBNgIMIABB6NrAADYCCCAAQfC7wQA2AhAgAEEIakHE28AAEMACAAs/AQF/IwBBIGsiAiQAIAIgADYCGCACQfCwwAA2AhAgAkHwu8EANgIMIAJBAToAHCACIAE2AhQgAkEMahCqAgALNwEBfyMAQRBrIgMkACADQQhqIAEgAhB9IAMoAgwhAiAAIAMoAgg2AgAgACACNgIEIANBEGokAAtAAQF/IwBBIGsiACQAIABBFGpCADcCACAAQQE2AgwgAEHojcAANgIIIABB8LvBADYCECAAQQhqQfCNwAAQwAIACzYBAX8jAEEQayICJAAgAiABECogAigCACEBIAAgAikDCDcDCCAAIAFBAEetNwMAIAJBEGokAAs/AAJAIAAtABgNACAAQQAQ7AEgAEEBOgAYIAAgACgCEDYCDAsgACAAKAIUNgIQIABBARDsASAAIAAoAhQ2AgwLQAEBfyMAQSBrIgAkACAAQRRqQgA3AgAgAEEBNgIMIABB/OXAADYCCCAAQfC7wQA2AhAgAEEIakGE5sAAEMACAAs3AQF/IwBBEGsiAyQAIANBCGogASACEKsDIAMoAgwhAiAAQe2BwABBBBBnIAIQ6wMgA0EQaiQACzYBAn8jAEEQayIBJAAgAUEIaiAAEJYBIAEoAgghACABKAIMIQIgAUEQaiQAIAJBgIDEACAAGws9AQF/IwBBEGsiAiQAIAJB5IbAADYCDCACIAA2AgggAkEIakHQiMAAIAJBDGpB0IjAACABQfiHwAAQggEACz0BAn9BASECAkAgASgCFCIDQeCJwABBCyABQRhqKAIAKAIMIgERBwANACADQZazwABBByABEQcAIQILIAILMAAgAUH//wNxIANB//8DcUYgAiAAckH//wNxRSIDIAJB//8DcRsgAyAAQf//A3EbCzoBAX8jAEEQayIDJAAgAyABNgIMIAMgADYCCCADQQhqQcSxwAAgA0EMakHEscAAIAJBmJ7AABCCAQALNQAgACgCHCAAQSBqKAIAELcDIAAoAgQgAEEIaigCABC3AyAAQRBqKAIAIABBFGooAgAQtwMLPQEBfyMAQRBrIgIkACACQfDgwAA2AgwgAiAANgIIIAJBCGpB4ODAACACQQxqQeDgwAAgAUHo4cAAEIIBAAsyAQF/IwBBEGsiAiQAIAIgADYCDCABQfbKwABBBSACQQxqQQ0QjAEhACACQRBqJAAgAAsyAQF/IAAoAgghASAAKAIAIQACQANAIAFFDQEgAUF/aiEBIAAQnwIgAEE4aiEADAALCwswAQF/IABBDGoQmgICQCAAQX9GDQAgACAAKAIEIgFBf2o2AgQgAUEBRw0AIAAQTAsLMgEBfyMAQRBrIgIkACABIAJBD2pBsITAABBpIQEgAEEWOgAAIAAgATYCBCACQRBqJAALLwACQAJA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ACIAEOcBIAAQTAsPACAAEOcBIABBEGoQ5wELDgAgACABIAEgAmoQ2QELEwAgAEEoNgIEIABB2NLAADYCAAsgACAAQpuomM3bgtTUfDcDCCAAQpa3iIC6l+SpEjcDAAsiACAAQubG5dbLj/f/5AA3AwggAELznNq2t8OlnY9/NwMACxMAIABBpJDAADYCBCAAIAE2AgALEAAgACgCACABIAIQ0ANBAAsOACAAIAEgASACahDaAQsPACAAKAIAIAEQiAEaQQALEAAgASAAKAIAIAAoAgQQOAsQACAAIAIQ+AEgAUEMOgAACyAAIABCq/3xnKmDxYRkNwMIIABC+P3H/oOGtog5NwMACyEAIABCzOOog7P46rB0NwMIIABC/ZCAh5Cx88TRADcDAAsgACAAQraSm5Smo42H8AA3AwggAEKMibeF4+rZTzcDAAsOACAAQQRqEOMCIAAQTAsTACAAQZDUwAA2AgQgACABNgIACxAAIAEgACgCACAAKAIIEDgLIQAgAELCw5vOrZDA3qZ/NwMIIABC0oKx+Pqs5712NwMACxMAIABB+OfAADYCBCAAIAE2AgALIAAgAELk3seFkNCF3n03AwggAELB9/nozJOy0UE3AwALFABBACAANgKswEFBAEEBOgCowEELDgACQCABRQ0AIAAQTAsLDwAgACgCACAALQAEEPICCw0AIAAgASACEOIBQQALDQAgADUCAEEBIAEQegsNACAAKAIAIAEgAhBYCw0AIAAgASACENADQQALDwAgACgCACAAKAIEELcDCw8AIAAoAgAgACgCBBCkAwsNACAAKAIAGgN/DAALCw0AIAAoAgAgASACEFsLDQAgACkDAEEBIAEQegsLACAAIwBqJAAjAAsMACAAKAIAIAEQugELCgAgACABIAIQCwsJACAAECVBAEcLCgAgACABIAIQVgsMACAAKAIAIAEQ2wILDAAgACgCACABENwCCwoAIABBBGoQ4wILCQAgABAeQQFGCwkAIAAgARAsAAsMACAAKAIAIAEQqQMLDAAgACgCACABENkDCwwAIAAoAgAgARCBAwsLACAAIAEgAhCsAQsKACAAIAEgAhB4CwoAIAAgASACEE0LCwAgACABIAIQhgILCgBBACgClMBBRQsKACAAKAIAELYDCwkAIAAgARDVAgsJACAAQQA2AgALCAAgACABEGALCQAgACABEMcDCwgAIAAgARBgCwgAIAAgARAACwgAIAAQuAEACwYAIAAQTAsGACAAEEwLBgAgABAmCwMAAAsCAAsCAAsCAAsCAAsCAAsCAAsLq7wBAgBBgIDAAAuMvAEmAAAAAAAAAAEAAAAnAAAAaW52YWxpZCB0eXBlOiAAABAAEAAOAAAAbwQQAAsAAAD//////////0M6XFVzZXJzXGRhdmlkXC5jYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWZcc2VyZGUtd2FzbS1iaW5kZ2VuLTAuNi4zXHNyY1xsaWIucnMAOAAQAGcAAAA1AAAADgAAACYAAAAAAAAAAQAAACgAAAAmAAAAAAAAAAEAAAApAAAAJgAAAAAAAAABAAAAKgAAAG5hbWV2YWx1ZXdvcmRraW5kZmRDb21tYW5kaW5uZXJyZWRpcmVjdFBpcGVsaW5lbmVnYXRlZG1heWJlRmRvcGlvRmlsZVNlcXVlbmNlU2hlbGxWYXJzaGVsbFZhcnBpcGVsaW5lQm9vbGVhbkxpc3Rib29sZWFuTGlzdHRleHR2YXJpYWJsZWNvbW1hbmRxdW90ZWRzdGRvdXRTdGRlcnJpbnB1dG91dHB1dGN1cnJlbnRuZXh0Q29tbWFuZElubmVyU2ltcGxlc2ltcGxlU3Vic2hlbGxzdWJzaGVsbFBpcGVTZXF1ZW5jZVBpcGVsaW5lSW5uZXJwaXBlU2VxdWVuY2VlbnZWYXJzYXJnc2l0ZW1zb3ZlcndyaXRlYXBwZW5kaXNBc3luY2FuZG9yc3Rkb3V0YSBzZXF1ZW5jZQAAJgAAAAAAAAABAAAAKwAAACYAAAAAAAAAAQAAACwAAAAmAAAAAAAAAAEAAAAtAAAALgAAAC4AAAAvAAAACAAAAAQAAAAwAAAAMQAAADEAAABDOlxVc2Vyc1xkYXZpZFwuY2FyZ29ccmVnaXN0cnlcc3JjXGluZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmXGNvbnNvbGVfZXJyb3JfcGFuaWNfaG9vay0wLjEuN1xzcmNcbGliLnJzAAAAcAIQAG0AAACVAAAADgAAAE9uY2UgaW5zdGFuY2UgaGFzIHByZXZpb3VzbHkgYmVlbiBwb2lzb25lZAAA8AIQACoAAABvbmUtdGltZSBpbml0aWFsaXphdGlvbiBtYXkgbm90IGJlIHBlcmZvcm1lZCByZWN1cnNpdmVseSQDEAA4AAAAAGNhbm5vdCByZWN1cnNpdmVseSBhY3F1aXJlIG11dGV4AAAAZQMQACAAAAAvcnVzdGMvY2M2NmFkNDY4OTU1NzE3YWI5MjYwMGM3NzBkYThjMTYwMWE0ZmYzMy9saWJyYXJ5L3N0ZC9zcmMvc3lzL3dhc20vLi4vdW5zdXBwb3J0ZWQvbG9ja3MvbXV0ZXgucnMAAJADEABmAAAAFAAAAAkAAAAyAAAADAAAAAQAAAAzAAAANAAAADUAAAAmAAAAAAAAAAEAAAA2AAAANwAAAAQAAAAEAAAAOAAAADkAAAAIAAAABAAAADoAAAAvAAAABAAAAAQAAAA7AAAAaW52YWxpZCB2YWx1ZTogLCBleHBlY3RlZCAAAGAEEAAPAAAAbwQQAAsAAABtaXNzaW5nIGZpZWxkIGAAjAQQAA8AAAATMRAAAQAAAGR1cGxpY2F0ZSBmaWVsZCBgAAAArAQQABEAAAATMRAAAQAAACYAAAAAAAAAAQAAADwAAABQb2lzb25FcnJvckNvdWxkbid0IGRlc2VyaWFsaXplIGk2NCBvciB1NjQgZnJvbSBhIEJpZ0ludCBvdXRzaWRlIGk2NDo6TUlOLi51NjQ6Ok1BWCBib3VuZHNMYXp5IGluc3RhbmNlIGhhcyBwcmV2aW91c2x5IGJlZW4gcG9pc29uZWQ6BRAAKgAAAEM6XFVzZXJzXGRhdmlkXC5jYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWZcb25jZV9jZWxsLTEuMTYuMFxzcmNcbGliLnJzAGwFEABfAAAA9gQAABkAAABzcmNccnNfbGliXHNyY1xsaWIucnMAAADcBRAAFQAAABEAAAA4AAAAZGF0YSBkaWQgbm90IG1hdGNoIGFueSB2YXJpYW50IG9mIHVudGFnZ2VkIGVudW0gV2FzbVRleHRJdGVtZmllbGQgaWRlbnRpZmllcmluZGVudHN0cnVjdCB2YXJpYW50IFdhc21UZXh0SXRlbTo6SGFuZ2luZ1RleHQAANwFEAAVAAAAOAAAABkAAADcBRAAFQAAAEUAAAAGAAAAPgAAAAQAAAAEAAAAPwAAAEAAAABBAAAAbGlicmFyeS9hbGxvYy9zcmMvcmF3X3ZlYy5yc2NhcGFjaXR5IG92ZXJmbG93AAAA1AYQABEAAAC4BhAAHAAAABYCAAAFAAAAYSBmb3JtYXR0aW5nIHRyYWl0IGltcGxlbWVudGF0aW9uIHJldHVybmVkIGFuIGVycm9yAEIAAAAAAAAAAQAAADYAAABsaWJyYXJ5L2FsbG9jL3NyYy9mbXQucnNEBxAAGAAAAGICAAAgAAAAKSBzaG91bGQgYmUgPCBsZW4gKGlzIHJlbW92YWwgaW5kZXggKGlzIIIHEAASAAAAbAcQABYAAAD4XRAAAQAAAC8AAAAEAAAABAAAAEMAAABEAAAARQAAAEYAAABHAAAASAAAAEkAAABKAAAALwAAAAgAAAAEAAAASwAAAC8AAAAIAAAABAAAAEwAAABLAAAA2AcQAE0AAABOAAAATwAAAE0AAABQAAAALwAAAAwAAAAEAAAAUQAAAC8AAAAMAAAABAAAAFIAAABRAAAAFAgQAFMAAABUAAAATwAAAFUAAABQAAAAXBkQAAIAAAAKCkNhdXNlZCBieTpYCBAADAAAAM8OEAABAAAAICAgICAgIAAyAAAADAAAAAQAAABWAAAAVwAAADUAAABhIERpc3BsYXkgaW1wbGVtZW50YXRpb24gcmV0dXJuZWQgYW4gZXJyb3IgdW5leHBlY3RlZGx5ACYAAAAAAAAAAQAAADYAAAAvcnVzdGMvY2M2NmFkNDY4OTU1NzE3YWI5MjYwMGM3NzBkYThjMTYwMWE0ZmYzMy9saWJyYXJ5L2FsbG9jL3NyYy9zdHJpbmcucnMA3AgQAEsAAACcCQAADgAAAC8AAAAEAAAABAAAAFgAAABZAAAAWgAAAAoKU3RhY2s6CgpDOlxVc2Vyc1xkYXZpZFwuY2FyZ29ccmVnaXN0cnlcc3JjXGluZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmXHVuaWNvZGUtd2lkdGgtMC4xLjExXHNyY1x0YWJsZXMucnNaCRAAZgAAACcAAAAZAAAAWgkQAGYAAAAtAAAAHQAAAEM6XFVzZXJzXGRhdmlkXC5jYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWZcdnRlLTAuMTMuMFxzcmNcbGliLnJzAAAA4AkQAFkAAADlAAAAIQAAAOAJEABZAAAA4AAAADQAAADgCRAAWQAAAHkAAAAcAAAA4AkQAFkAAABOAQAAFQAAAOAJEABZAAAAMAEAACQAAADgCRAAWQAAADIBAAAZAAAA4AkQAFkAAAAVAQAAKAAAAOAJEABZAAAAFwEAAB0AAABDOlxVc2Vyc1xkYXZpZFwuY2FyZ29ccmVnaXN0cnlcc3JjXGluZGV4LmNyYXRlcy5pby02ZjE3ZDIyYmJhMTUwMDFmXHZ0ZS0wLjEzLjBcc3JjXHBhcmFtcy5yc7wKEABcAAAAPgAAAAkAAAC8ChAAXAAAAD8AAAAJAAAAvAoQAFwAAABHAAAACQAAALwKEABcAAAASAAAAAkAAABhc3NlcnRpb24gZmFpbGVkOiBtaWQgPD0gc2VsZi5sZW4oKWNhbGxlZCBgUmVzdWx0Ojp1bndyYXAoKWAgb24gYW4gYEVycmAgdmFsdWUAAFsAAAABAAAAAQAAAFwAAABhdHRlbXB0IHRvIGpvaW4gaW50byBjb2xsZWN0aW9uIHdpdGggbGVuID4gdXNpemU6Ok1BWC9ydXN0Yy9jYzY2YWQ0Njg5NTU3MTdhYjkyNjAwYzc3MGRhOGMxNjAxYTRmZjMzL2xpYnJhcnkvYWxsb2Mvc3JjL3N0ci5ycwAAAO0LEABIAAAAmQAAAAoAAADtCxAASAAAALAAAAAWAAAAQ2FwYWNpdHlFcnJvcjogAFgMEAAPAAAAaW5zdWZmaWNpZW50IGNhcGFjaXR5AAAAcAwQABUAAADXKBAATwAAALgBAAA3AAAAQzpcVXNlcnNcZGF2aWRcLmNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZlxhcnJheXZlYy0wLjcuMlxzcmNcYXJyYXl2ZWNfaW1wbC5ycwCgDBAAZwAAACcAAAAgAAAAQzpcVXNlcnNcZGF2aWRcLmNhcmdvXHJlZ2lzdHJ5XHNyY1xpbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZlxjb25zb2xlX3N0YXRpY190ZXh0LTAuOC4yXHNyY1xhbnNpLnJzAAAAGA0QAGkAAAATAAAAHQAAABtbMUNDOlxVc2Vyc1xkYXZpZFwuY2FyZ29c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AABmAAAAZQAAABgAAAAEAAAAZwAAAGYAAADEKRAATQAAAGgAAABPAAAATQAAAFAAAABpAAAAHAAAAAQAAABqAAAAaQAAABwAAAAEAAAAawAAAGoAAAAAKhAAbAAAAG0AAABPAAAAbgAAAFAAAABvAAAAcAAAAHEAAAByAAAASgAAACYmfHxFbXB0eSBjb21tYW5kLkM6XFVzZXJzXGRhdmlkXC5jYXJnb1xnaXRcY2hlY2tvdXRzXGRlbm9fdGFza19zaGVsbC0yYjA3MDlmYzcxZjcxY2QzXGVkM2Q0ZDBcc3JjXHBhcnNlci5yc0V4cGVjdGVkIGNvbW1hbmQgZm9sbG93aW5nIGJvb2xlYW4gb3BlcmF0b3IuYioQAFoAAACVAQAAOQAAAENhbm5vdCBzZXQgbXVsdGlwbGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIHdoZW4gdGhlcmUgaXMgbm8gZm9sbG93aW5nIGNvbW1hbmQuRXhwZWN0ZWQgY29tbWFuZCBmb2xsb3dpbmcgcGlwZWxpbmUgb3BlcmF0b3IuUmVkaXJlY3RzIGluIHBpcGUgc2VxdWVuY2UgY29tbWFuZHMgYXJlIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkLk11bHRpcGxlIHJlZGlyZWN0cyBhcmUgY3VycmVudGx5IG5vdCBzdXBwb3J0ZWQuJnwmSW52YWxpZCBlbnZpcm9ubWVudCB2YXJpYWJsZSB2YWx1ZS5VbnN1cHBvcnRlZCByZXNlcnZlZCB3b3JkLkV4cGVjdGVkIGNsb3Npbmcgc2luZ2xlIHF1b3RlLkV4cGVjdGVkIGNsb3NpbmcgZG91YmxlIHF1b3RlLiQ/IyokIGlzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkLgAAYSwQAAEAAABiLBAAHAAAAEJhY2sgdGlja3MgaW4gc3RyaW5ncyBpcyBjdXJyZW50bHkgbm90IHN1cHBvcnRlZC5+KCl7fTw+fCY7IidFeHBlY3RlZCBjbG9zaW5nIHBhcmVudGhlc2lzIG9uIHN1YnNoZWxsLgAAYioQAFoAAABkAwAADQAAAGlmdGhlbmVsc2VlbGlmZmlkb2RvbmVjYXNlZXNhY3doaWxldW50aWxmb3JpblVuZXhwZWN0ZWQgY2hhcmFjdGVyLkhhc2ggdGFibGUgY2FwYWNpdHkgb3ZlcmZsb3cAAEotEAAcAAAAL2NhcmdvL3JlZ2lzdHJ5L3NyYy9pbmRleC5jcmF0ZXMuaW8tNmYxN2QyMmJiYTE1MDAxZi9oYXNoYnJvd24tMC4xNC4wL3NyYy9yYXcvbW9kLnJzcC0QAFQAAABSAAAAKAAAAGNsb3N1cmUgaW52b2tlZCByZWN1cnNpdmVseSBvciBhZnRlciBiZWluZyBkcm9wcGVkaW52YWxpZCBhcmdzAAAGLhAADAAAAC9ydXN0Yy9jYzY2YWQ0Njg5NTU3MTdhYjkyNjAwYzc3MGRhOGMxNjAxYTRmZjMzL2xpYnJhcnkvY29yZS9zcmMvZm10L21vZC5ycwAcLhAASwAAADUBAAANAAAAAgICAgICAgICAwMBAQEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAICAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE5vbmVTb21lCiAgCiAgfgDwXRAAAAAAAIAvEAADAAAAgy8QAAQAAADwXRAAAAAAAEM6XFVzZXJzXGRhdmlkXC5jYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWZcbW9uY2gtMC41LjBcc3JjXGxpYi5ycwAAqC8QAFoAAAB1AAAAIgAAAKgvEABaAAAA4QEAABgAAACoLxAAWgAAAOEBAAAnAAAAbWVzc2FnZVBhcnNlRXJyb3JGYWlsdXJlRXJyb3Jjb2RlX3NuaXBwZXQAAAAvAAAABAAAAAQAAABzAAAAAQAAAEM6XFVzZXJzXGRhdmlkXC5jYXJnb1xyZWdpc3RyeVxzcmNcaW5kZXguY3JhdGVzLmlvLTZmMTdkMjJiYmExNTAwMWZcb25jZV9jZWxsLTEuMTYuMFxzcmNcaW1wX3N0ZC5ycwB0MBAAYwAAAKsAAAA2AAAAdDAQAGMAAAClAAAACQAAAGEgc3RyaW5nYnl0ZSBhcnJheWJvb2xlYW4gYGAKMRAACQAAABMxEAABAAAAaW50ZWdlciBgAAAAJDEQAAkAAAATMRAAAQAAAGZsb2F0aW5nIHBvaW50IGBAMRAAEAAAABMxEAABAAAAY2hhcmFjdGVyIGAAYDEQAAsAAAATMRAAAQAAAHN0cmluZyAAfDEQAAcAAAAAMRAACgAAAHVuaXQgdmFsdWUAAJQxEAAKAAAAT3B0aW9uIHZhbHVlqDEQAAwAAABuZXd0eXBlIHN0cnVjdAAAvDEQAA4AAABzZXF1ZW5jZdQxEAAIAAAAbWFwAOQxEAADAAAAZW51bfAxEAAEAAAAdW5pdCB2YXJpYW50/DEQAAwAAABuZXd0eXBlIHZhcmlhbnQAEDIQAA8AAAB0dXBsZSB2YXJpYW50AAAAKDIQAA0AAABzdHJ1Y3QgdmFyaWFudAAAQDIQAA4AAABhbnkgdmFsdWV1MTY+AAAABAAAAAQAAAA/AAAAdAAAAHUAAABjYWxsZWQgYE9wdGlvbjo6dW53cmFwKClgIG9uIGEgYE5vbmVgIHZhbHVlbGlicmFyeS9zdGQvc3JjL3RocmVhZC9tb2QucnNmYWlsZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIHRocmVhZCBJRDogYml0c3BhY2UgZXhoYXVzdGVkAMQyEAA3AAAApzIQAB0AAABKBAAADQAAAGFscmVhZHkgYm9ycm93ZWRCAAAAAAAAAAEAAAAnAAAAbGlicmFyeS9zdGQvc3JjL3N5c19jb21tb24vdGhyZWFkX2luZm8ucnMAAAA0MxAAKQAAABUAAAAzAAAAY2Fubm90IG1vZGlmeSB0aGUgcGFuaWMgaG9vayBmcm9tIGEgcGFuaWNraW5nIHRocmVhZHAzEAA0AAAAbGlicmFyeS9zdGQvc3JjL3Bhbmlja2luZy5yc6wzEAAcAAAAhwAAAAkAAACsMxAAHAAAAFICAAAeAAAAdgAAAAwAAAAEAAAAdwAAAD4AAAAIAAAABAAAAHgAAAA+AAAACAAAAAQAAAB5AAAAegAAAHsAAAAQAAAABAAAAHwAAAB9AAAAQgAAAAAAAAABAAAAXQAAAAABAgMDBAUGBwgJCgsMDQ4DAwMDAwMDDwMDAwMDAwMPCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkQCQkJCQkJCRERERERERESERERERERERIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQIDBAUGBwYIBgkKCwwNDg8QBgYGERITFAYVFhcYGRobHB0eHyAhIiMiJCUmJygpKiUrLC0uLzAxMjM0NTY3ODk6Bjs8CgoGBgYGBj0GBgYGBgYGBgYGBgYGBj4/QEFCBkMGRAYGBkVGR0hJSktMTQYGTgYGBgoGBgYGBgYGBk9QUVJTVFVWV1hZBloGBlsGXF1eXV9gYWJjZGVmZ2gGBgYGBgYGBgYGBgYGaWoGBgYGBmsGAQZsBgZtbjs7O29wcXI7czt0dXZ3Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OwY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3h5BgYGBgZ6e3wGBgYGfQYGfn+AgYKDhIWGBgYGhzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O4gGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgZdXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dOzs7Ozs7OzuJBgYGBgYGBgYGBgaKiwYBcYwGjQYGBgYGBgaOBgYGjwaQBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgaRBgaSBgYGBgYGBgaTBgYGBgaUlQaWlwaYmZqbnJ2en6AuBqEsogYGo6SlpgYGp6ipqqsGrAYGBq0GBgaurwawsbKzBgYGBga0BrUGtre4BgYGBrm6uwYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgZHvAYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBga9vgYGBgYGBgYGBgYGBgYGBga/wME7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O8I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7w8QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgbFOzs7O8bHOzs7OzvIBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgbJBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBsrLBgYGBgYGBszNBgbOBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGz9DRBgYGBgYGBgYGBgYGBgYGBgYGBgYG0ga/Br4GBgYGBtPUBgYGBgYGBtQGBgYGBgYGBgYGBgYGBgbVBtYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBtcGBtjZ2tsG3N0GBt7f4OHi4zvk5ebn6DvpO+oGBgbrBgYGBuztOzsG7u/wBgYGBgYGBgYGBgYGBgYGBgYGBgY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs75fEKBgYKCgoLBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1d8gAAAAAAAAAAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVAAAAAAAAAABd13d1//d//1V1VVVX1Vf1X3V/X/fVf3ddVVVV3VXVVVX11VX9VVfVf1f/XfVVVVVV9dVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV1d3d3V1VVVVVVVVVVVVVVVV1VVVVdVVVVVVVVVVXX/V1XVf/dVVVVVVVVVVUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVVVVVVVVVVX9////3/9fVf3////f/19VVVVVVVVVVVVVVVVVXVVVVf////////////////////9dVVVVVVVVVVVVVVUVAFBVVVVVVVVVVVVVVVVVVVVVVQEAAAAAAAAAAAAAEEEQVVVVVVVVVVVVVVVVVVUAUFVVAABAVFVVVVVVVVVVVVUVAAAAAABVVVVVVFVVVVVVVVVVBQAQABQEUFVVVVVVVVUVUVVVVVVVVVUAAAAAAABAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQUAAFRVVVVVVVVVVVVVVVVVFQAAVVVRVVVVVVUFEAAAAQFQVVVVVVVVVVVVVQFVVVVVVVVVVVVVVVVVUFUAAFVVVVVVVVVVVVUFAAAAAAAAAAAAAAAAAEBVVVVVVVVVVVVVVVVVRVQBAFRRAQBVVQVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVAFUVVFVVVVVBVVVVVVVVUVBVVVVVVVVVVVVVVVVVVVUQRUUUFFVVVVVVVVVUFFVVQEQVFFVVVVVBVVVVVVVBQBRVVVVVVVVVVVVVVVVVVUUAVRVUVVBVVUFVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVVUVVVRVVVVVVVVVVVVVVVVVFRVVVVVVVVVVVVVVVVVBFQFBFBVQVVVBVVVVVVVVVVVRVVQVVVVVQVVVVVVVVVVUFVVVVVVVVVVVVVVVVUVVAFUVVFVVVVVBVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVVVVFVQVEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVEAQFVVFQBAVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUQAAVFVVAEBVVVVVVVVVVVVVVVVVVVVVVVVQVVVVVVVVEVFVVVVVVVVVVVVVVVVVAQAAQAAEVQEAAAEAAAAAAAAAAFRVRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUBBABBQVVVVVVVVVAFVFVVVQFUVVVFQVVRVVVVUVVVVVVVVVVVqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqAAAAAAAAAABVVVVVVVVVAVVVVVVVVVVVVVVVVQVUVVVVVVVVBVVVVVVVVVUFVVVVVVVVVQVVVVVVVVVVVVVVVVVVVVVVEABQVUUBAABVVVFVVVVVVVVVVVVVFQBVVVVVVVVVVVVVVVVVQVVVVVVVVVVVUVVVVVVVVVVVVVVVVVVAFVRVRVUBVVVVVVVVFRRVVVVVVVVVVVVVVVVVVUUAQEQBAFQVAAAUVVVVVVVVVVVVVVVVAAAAAAAAAEBVVVVVVVVVVVVVVVUAVVVVVVVVVVVVVVVVBEBURVVVVVVVVVVVVRUAAFVVVVBVVVVVVVVVBVAQUFVVVVVVVVVVVVVVVVVFUBFQVVVVVVVVVVVVVVVVVVUAAAVVVVVVVVVAAAAABABUUVVUUFVVVRUA139fX3//BUD3XdV1VVVVVVVVVVUABAAAVVdV1f1XVVVVVVVVVVVVV1VVVVVVVVVVAAAAAAAAAABUVVVV1V1dVdV1VVV9ddVVVVVVVVVVVVXVV9V/////Vf//X1VVVV1V//9fVVVVVVVVVV9VVVVVVXVXVVVV1VVVVVVVVffV19VdXXX9193/d1X/VV9VVVdXdVVVVV//9fVVVVVV9fVVVVVdXVVVXVVVVVVV1VVVVVV1VaVVVVVpVVVVVVVVVVVVVVVVVVVVqVaWVVVVVVVVVVVVVVX/////////////////////////////////////////////3///////////Vf///////////1VVVf/////1X1VV3/9fVfX1VV9f9df1X1VVVfVfVdVVVVVpVX1d9VVaVXdVVVVVVVVVVXdVqqqqVVVV399/31VVVZVVVVVVlVVV9VlVpVVVVVXpVfr/7//+///fVe//r/vv+1VZpVVVVVVVVVVWVVVVVV1VVVVmlZpVVVVVVVVV9f//VVVVVVWpVVVVVVVVVlVVlVVVVVVVVZVWVVVVVVVVVVVVVVVVVvlfVVVVVVVVVVVVVVVVVVVVVVVVVVUVUFVVVVVVVVVVVVVVAAAAAAAAAACqqqqqqqqaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqlVVVaqqqqqqWlVVVVVVVaqqqqqqqqqqqqqqqqqqCqCqqqpqqaqqqqqqqqqqqqqqqqqqqqqqqqqqaoGqqqqqqqqqqqpVqaqqqqqqqqqqqqqpqqqqqqqqaqqqqqqqqqqqqqqqqqqqqqqqqqqqqlVVlaqqqqqqqqqqqqqqaqqqqqqqqqqqqqr//6qqqqqqqqqqqqqqqqqqqlaqqqqqqqqqqqqqqqqqalVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVQAAAUFVVVVVVVVUFVVVVVVVVVVVVVVVVVVVVVVVVVVVQVVVVRUUVVVVVVVVVQVVUVVVVVVVQVVVVVVVVAAAAAFBVVRVVVVVVVVVVVVUFAFBVVVVVVRUAAFBVVVWqqqqqqqqqVkBVVVVVVVVVVVVVVRUFUFBVVVVVVVVVVVVRVVVVVVVVVVVVVVVVVVVVVQFAQUFVVRVVVVRVVVVVVVVVVVVVVVRVVVVVVVVVVVVVVVUEFFQFUVVVVVVVVVVVVVVQVUVVVVVVVVVVVVVVVVFUUVVVVVWqqqqqqqqqqqpVVVVVVVVVVVVVVVVVVUVVVVVVVVVVVQAAAACqqlpVAAAAAKqqqqqqqqqqaqqqqqpqqlVVVVVVqqqqqqqqqqpWVVVVVVVVVVVVVVVVVVVVqmpVVVVVAV1VVVVVVVVVVVVVVVVVVVVRVVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVVVVVVVUFQFUBQVUAVVVVVVVVVVVVVUAVVVVVVVVVVVVVQVVVVVVVVVVVVVVVVVVVVQBVVVVVVVVVVVVVVVVVVVVVFVRVVVVVVVVVVVVVVVVVVVVVVVVVAVUFAABUVVVVVVVVVVVVVVUFUFVVVVVVVVVVVVVVVVVVUVVVVVVVVVVVVVVVVVUAAABAVVVVVVVVVVVVVRRUVRVQVVVVVVVVVVVVVVUVQEFRRVVVUVVVVVVVVVVVVVVVVUBVVVVVVVVVVRUAAQBUVVVVVVVVVVVVVVVVVVUVVVVVUFVVVVVVVVVVVVVVVQUAQFVVARRVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVQBFVFVVVVVVVVVRUVAEBVVVVVVVRVVVVVVVVVVQUAVABUVVVVVVVVVVVVVVVVVVVVVQAABURVVVVVVUVVVVVVVVVVVVVVVVVVVVVVVVVVVRUARBUEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVBVBVEFRVVVVVVVVQVVVVVVVVVVVVVVVVVVVVVVVVVVUVAEARVFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUVUQAQVVVVVVVVVVVVAQUQAFVVVVVVVVVVVVVVVVVVVVUVAABBVVVVVVVVVVVVVVVVVVVVFUQVVVVVVVVVVVVVVVVVVVVVVVVVVVUABVVUVVVVVVVVVQEAQFVVVVVVVVVVVRUAFEBVFVVVAUABVVVVVVVVVVVVVVUFAABAUFVVVVVVVVVVVVVVVVVVVVVVVVVVVQBAABBVVVVVBQAAAAAABQAEQVVVVVVVVVVVVVVVVVVVAUBFEAAQVVVVVVVVVVVVVVVVVVVVVVVVUBFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVFVRVVVBVVVVVVVVVVVVVVVUFQFVEVVVVVVVVVVVVVVVVVVVVVBUAAABQVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQBUVVVVVVVVVVVVVVVVVVUAQFVVVVVVFVVVVVVVVVVVVVVVVVVVVRVAVVVVVVVVVVVVVVVVVVVVVVVVVapUVVVaVVVVqqqqqqqqqqqqqqqqqqpVVaqqqqqqWlVVVVVVVVVVVVWqqlZVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVqqmqaaqqqqqqqqqqalVVVWVVVVVVVVVVallVVVWqVVWqqqqqqqqqqqqqqqqqqqqqqqqqVVVVVVVVVVVBAFVVVVVVVVUAAAAAAAAAAAAAAFAAAAAAAEBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVRVQVRUAAABAAQBVVVVVVVVVBVBVVVVVBVRVVVVVVVVVVVVVVVVVVQAAAAAAAAAAAAAAAABAFQAAAAAAAAAAAAAAAFRVUVVVVVRVVVVVFQABAAAAVVVVVQBAAAAAABQAEARAVVVVVVVVVVVVVVVVVVVVVUVVVVVVVVVVVVVVVVVVVVUAVVVVVVVVVVUAQFVVVVVVVVVVVVVVAEBVVVVVVVVVVVVVVVVVVVZVVVVVVVVVVVVVVVVVVVVVVZVVVVVVVVVVVVVVVVX//39V/////////1///////////////////19V/////////++rqur/////V1VVVVVqVVVVqqqqqqqqqqqqqqpVqqpWVVpVVVWqWlVVVVVVVaqqqqqqqqqqVlVVqaqaqqqqqqqqqqqqqqqqqqqqqqqmqqqqqqpVVVWqqqqqqqqqqqqqapWqVVVVqqqqqlZWqqqqqqqqqqqqqqqqqqqqqqpqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpaqqqqqqqqqqqqqqqqqqqpaVVWVaqqqqqqqqlVVVVVlVVVVVVVVaVVVVVZVVVVVVVVVVVVVVVVVVVVVVVVVVZWqqqqqqlVVVVVVVVVVVVVVVapaVVZqqVWqVVWVVlWqqlZVVVVVVVVVVaqqqlVWVVVVVVVVqqqqqqqqqqqqqqpqqqqaqqqqqqqqqqqqqqqqqqpVVVVVVVVVVVVVVVWqqqpWqqpWVaqqqqqqqqqqqqqqmqpaVaWqqqpVqqpWVaqqVlVRVVVVVVVVVQAAAAAAAAAA////////////////////XwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFwAXAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFAAUAAAUFBQUCMjIyMjIyMjIyMjIyMjIyO0tLS0tLS0tLS0tLQkJCQkPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQAFAAAFBQUFBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUABQAABQUFBQICAgICAgICAgICAgICAgIAICAgICAgICAgICAgICAgI8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDxwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFAAUAAAUFBQUCMjIyMjIyMjIyMjIyMjIyOwsLCwsLCwsLCwsLACAgICPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwAHAAAHBwcHAnJycnJycnJycnJycnJycnuLi4uLi4uLi4uLi4KCgoKAkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcABwAABwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHAAcAAAcHBwcCAgICAgICAgICAgICAgICAGBgYGBgYGBgYGBgYGBgYGCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwAHAAAHBwcHAnJycnJycnJycnJycnJycnsLCwsLCwsLCwsLCwBgYGBgkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0ADQAADQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFAAUAAAUFBQUCsrKysrKysrKysrKysrKytMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTAVMTExMTExMDkxMAUwNDg5MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQAFAAAFBQUFAgICAgICAgICAgICAgICAgTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUABQAABQUFBQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAUFBQUFBQUFBQUFBQUFBQUABQUFBQUFBQUFBQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAABwcHBwcHBwDHBwcHBwcHBwcHBwcHBwcHAAcAAAcHBwcJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwAHAAAHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABKc1ZhbHVlKCkAAADwXRAACAAAAPhdEAABAAAAAEGMvMEACwwAAAAAAAAAAD0AAAAAqaMCBG5hbWUBoKMCjQQAQWpzX3N5czo6QXJyYXk6OmdldDo6X193YmdfZ2V0XzU3MjQ1Y2M3ZDdjNzYxOWQ6Omg4MmE0ZGFhNDA3NjU3NTUzATp3YXNtX2JpbmRnZW46Ol9fd2JpbmRnZW5fanN2YWxfbG9vc2VfZXE6Omg2YjYyNTI1ZWQ0OGRkOTc0ApABanNfc3lzOjpfOjo8aW1wbCB3YXNtX2JpbmRnZW46OmNhc3Q6OkpzQ2FzdCBmb3IganNfc3lzOjpVaW50OEFycmF5Pjo6aW5zdGFuY2VvZjo6X193YmdfaW5zdGFuY2VvZl9VaW50OEFycmF5Xzk3MWVlZGE2OWViNzUwMDM6OmhmYTA5N2I3YWEzOGUxNjliA5IBanNfc3lzOjpfOjo8aW1wbCB3YXNtX2JpbmRnZW46OmNhc3Q6OkpzQ2FzdCBmb3IganNfc3lzOjpBcnJheUJ1ZmZlcj46Omluc3RhbmNlb2Y6Ol9fd2JnX2luc3RhbmNlb2ZfQXJyYXlCdWZmZXJfZTVlNDhmNDc2MmM1NjEwYjo6aDk2ZGViYTA5MmFjN2M5ZGEERmpzX3N5czo6VWludDhBcnJheTo6bmV3OjpfX3diZ19uZXdfOGMzZjAwNTIyNzJhNDU3YTo6aGIzMDI1NzBjYWQ4NTY4ODYFN3dhc21fYmluZGdlbjo6X193YmluZGdlbl9ib29sZWFuX2dldDo6aDE2NDhmMWFiNjRjZjk1NTIGNndhc21fYmluZGdlbjo6X193YmluZGdlbl9udW1iZXJfZ2V0OjpoNjMxZTg0MDYzZjBjYjE2Ngc2d2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX3N0cmluZ19nZXQ6OmgxZjM1ZDA1ZTIyYjQ5ZDRhCDV3YXNtX2JpbmRnZW46Ol9fd2JpbmRnZW5fZXJyb3JfbmV3OjpoZTA3OTNjNTU5MTE4MWE0Ngk2d2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX3N0cmluZ19uZXc6OmgxNGU0MmZjOTZkMjFmOTUzCjx3YXNtX2JpbmRnZW46Ol9fd2JpbmRnZW5fb2JqZWN0X2Nsb25lX3JlZjo6aDVkOTNkZTUxMDFmZThjYTcLUXNlcmRlX3dhc21fYmluZGdlbjo6T2JqZWN0RXh0OjpzZXQ6Ol9fd2JnX3NldF85MTgyNzEyYWJlYmY4MmVmOjpoZmM4MGQ5OTAyZGZhNThmNQxCanNfc3lzOjpPYmplY3Q6Om5ldzo6X193YmdfbmV3XzBiOWJmZGQ5NzU4MzI4NGU6OmhiMzZmYzllZDJmMDc0ZDRjDUFqc19zeXM6OkFycmF5OjpuZXc6Ol9fd2JnX25ld18xZDlhOTIwYzZiZmM0NGE4OjpoYzE0YTk5MGIzOGE0ZjJmMQ5BanNfc3lzOjpBcnJheTo6c2V0OjpfX3diZ19zZXRfYTY4MjE0ZjM1YzQxN2ZhOTo6aGU0MmJhZmJkYzNlYTFhNGUPNndhc21fYmluZGdlbjo6X193YmluZGdlbl9udW1iZXJfbmV3OjpoZjE3NjI1ZDU1Y2FiNWU3YxBHanNfc3lzOjpBcnJheTo6bGVuZ3RoOjpfX3diZ19sZW5ndGhfNmUzYmJlN2M4YmQ0ZGJkODo6aGUxMTFiYjM5NjM5MjBjYTgRNXdhc21fYmluZGdlbjo6X193YmluZGdlbl9pc19iaWdpbnQ6OmhhNzUyNzY0NDZjZGY1OTE2Elhqc19zeXM6Ok51bWJlcjo6aXNfc2FmZV9pbnRlZ2VyOjpfX3diZ19pc1NhZmVJbnRlZ2VyX2RmYTA1OTNlOGQ3YWMzNWE6OmhjZjg2YWQ4N2Q4ZjE2NzRkEzt3YXNtX2JpbmRnZW46Ol9fd2JpbmRnZW5fYmlnaW50X2Zyb21faTY0OjpoNTZhZWY5MjE4N2E1YzIxZhQ1d2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX2lzX29iamVjdDo6aDI1NmMxNTYwZGVkNDY2ZjEVTGpzX3N5czo6U3ltYm9sOjppdGVyYXRvcjo6X193YmdfaXRlcmF0b3JfNmY5ZDRmMjg4NDVmNDI2Yzo6aDkyNTgwY2M5ZDM0NWQ1MTIWLndhc21fYmluZGdlbjo6X193YmluZGdlbl9pbjo6aGM2Y2VmZTJiNjFhMjIyMjkXSmpzX3N5czo6T2JqZWN0OjplbnRyaWVzOjpfX3diZ19lbnRyaWVzXzY1YTc2YTQxM2ZjOTEwMzc6OmhjM2VjODkyZjFhYmE2NzQwGDt3YXNtX2JpbmRnZW46Ol9fd2JpbmRnZW5fYmlnaW50X2Zyb21fdTY0OjpoMWFhNDU4MmRhNjM2NGIxOBk0d2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX2pzdmFsX2VxOjpoOGY5ZTU3Y2E5ZTc4M2MxNxpTY29uc29sZV9lcnJvcl9wYW5pY19ob29rOjpFcnJvcjo6bmV3OjpfX3diZ19uZXdfYWJkYTc2ZTg4M2JhOGE1Zjo6aDRhNjdmNzI0ZDU4MmNmZGEbV2NvbnNvbGVfZXJyb3JfcGFuaWNfaG9vazo6RXJyb3I6OnN0YWNrOjpfX3diZ19zdGFja182NTgyNzlmZTQ0NTQxY2Y2OjpoYWE1NjU3ZmQ3OGQ0YzNmNhxQY29uc29sZV9lcnJvcl9wYW5pY19ob29rOjplcnJvcjo6X193YmdfZXJyb3JfZjg1MTY2N2FmNzFiY2ZjNjo6aDBiNzFiMjEyMjU1MDNiYzEdO3dhc21fYmluZGdlbjo6X193YmluZGdlbl9vYmplY3RfZHJvcF9yZWY6Omg0Mjg2MmM3OGVkMWI2NjFhHjd3YXNtX2JpbmRnZW46Ol9fd2JpbmRnZW5faXNfZnVuY3Rpb246Omg3Zjk4ZjQ5ZGExN2ZlYTNjH0Zqc19zeXM6Okl0ZXJhdG9yOjpuZXh0OjpfX3diZ19uZXh0X2FhZWY3YzhhYTVlMjEyYWM6OmgwMzU2MDJhMTk1M2VhMmQwIEpqc19zeXM6Okl0ZXJhdG9yTmV4dDo6ZG9uZTo6X193YmdfZG9uZV8xYjczYjA2NzJlMTVmMjM0OjpoNTk0MmQwOTY2NDI3NzU1NCFManNfc3lzOjpJdGVyYXRvck5leHQ6OnZhbHVlOjpfX3diZ192YWx1ZV8xY2NjMzZiYzAzNDYyZDcxOjpoOWExMzNjNDIzNjU3ZmQyNiJDanNfc3lzOjpSZWZsZWN0OjpnZXQ6Ol9fd2JnX2dldF83NjUyMDE1NDRhMmI2ODY5OjpoNjk0YjYyZDgwMjBmY2VlNSNHanNfc3lzOjpGdW5jdGlvbjo6Y2FsbDA6Ol9fd2JnX2NhbGxfOTdhZTlkODY0NWRjMzg4Yjo6aDJmYzg2OGU1NjAwNjg2NGIkampzX3N5czo6SXRlcmF0b3I6Omxvb2tzX2xpa2VfaXRlcmF0b3I6Ok1heWJlSXRlcmF0b3I6Om5leHQ6Ol9fd2JnX25leHRfNTc5ZTU4M2QzMzU2NmE4Njo6aGQ2OTE5M2Q0YzQzMzViOGUlSmpzX3N5czo6QXJyYXk6OmlzX2FycmF5OjpfX3diZ19pc0FycmF5XzI3YzQ2YzY3ZjQ5OGUxNWQ6Omg0MjhhYWI0OTMwZmNmODNiJkxqc19zeXM6OlVpbnQ4QXJyYXk6Omxlbmd0aDo6X193YmdfbGVuZ3RoXzllMWFlMTkwMGNiMGZiZDU6OmgwYWQ1ZTVjYjNhMzE3ZTA3JzJ3YXNtX2JpbmRnZW46Ol9fd2JpbmRnZW5fbWVtb3J5OjpoZTQ4NzUwM2IxZTEyMTk2ZihVanNfc3lzOjpXZWJBc3NlbWJseTo6TWVtb3J5OjpidWZmZXI6Ol9fd2JnX2J1ZmZlcl8zZjNkNzY0ZDQ3NDdkNTY0OjpoYzMzZGVhYWZiM2RmZDQ0ZilGanNfc3lzOjpVaW50OEFycmF5OjpzZXQ6Ol9fd2JnX3NldF84M2RiOTY5MGY5MzUzZTc5OjpoZTFiODBiZmE1N2UzMjMyOCo9d2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX2JpZ2ludF9nZXRfYXNfaTY0OjpoYTBiMTkyYmQ3ZGYwNDVlZCs4d2FzbV9iaW5kZ2VuOjpfX3diaW5kZ2VuX2RlYnVnX3N0cmluZzo6aGQ5MTQzYTM5YzczZjUzNDEsMXdhc21fYmluZGdlbjo6X193YmluZGdlbl90aHJvdzo6aDAxZDY5Mjk2Y2IxM2ZkMjMtRWNvcmU6OmZtdDo6ZmxvYXQ6OmZsb2F0X3RvX2RlY2ltYWxfY29tbW9uX3Nob3J0ZXN0OjpoNmU3OGFiNTJhMjc2NWJiOC5CY29yZTo6Zm10OjpmbG9hdDo6ZmxvYXRfdG9fZGVjaW1hbF9jb21tb25fZXhhY3Q6OmgwMmRmYjJhODYyNjIxMjllL0lkZW5vX3Rhc2tfc2hlbGw6OnBhcnNlcjo6cGFyc2Vfd29yZF9wYXJ0czo6e3tjbG9zdXJlfX06OmgxYjdkZTcyNTUzOWI1OGZkMEBkZW5vX3Rhc2tfc2hlbGw6OnBhcnNlcjo6cGFyc2VfcGlwZWxpbmVfaW5uZXI6OmgzZDY2YmFjYjdiNjcyMWE3MTpkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jPEE+OjptYWxsb2M6OmhmODI3YmQ2MGNkOGFkYTczMjpkZW5vX3Rhc2tfc2hlbGw6OnBhcnNlcjo6cGFyc2Vfc2VxdWVuY2U6Omg0NjQ4M2U3ZjAzY2NlNmEwM2U8c2VyZGVfd2FzbV9iaW5kZ2VuOjpkZTo6RGVzZXJpYWxpemVyIGFzIHNlcmRlOjpkZTo6RGVzZXJpYWxpemVyPjo6ZGVzZXJpYWxpemVfYW55OjpoMDUwMGZiYjAwYmRjY2MyZDQ+ZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OnBhcnNlX2NvbW1hbmRfYXJnczo6aGE3MDk3MmE3NWJlYjA2NjQ1OmRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpwYXJzZV9yZWRpcmVjdDo6aGE0NGEwYzM3MTFmMjA3YWY2XDxjb3JlOjptYXJrZXI6OlBoYW50b21EYXRhPFQ+IGFzIHNlcmRlOjpkZTo6RGVzZXJpYWxpemVTZWVkPjo6ZGVzZXJpYWxpemU6OmhkYTJiMGVhZTRiMjc4ZDZmNzJjb3JlOjpzdHI6OjxpbXBsIHN0cj46OmNvbnRhaW5zOjpoZmIwYzNhM2I4NDdkYWRjNTgsY29yZTo6Zm10OjpGb3JtYXR0ZXI6OnBhZDo6aDgzZjkzM2UwODU2YzBiMjQ5PGNvbnNvbGVfc3RhdGljX3RleHQ6OnJlbmRlcl90ZXh0X3RvX2xpbmVzOjpoOWY5YTgzYmRmNTQ2OTU4NTo/ZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OnBhcnNlX3F1b3RlZF9zdHJpbmc6Omg1NzYzN2ViZDhjOWQyMGFmO1Fjb25zb2xlX3N0YXRpY190ZXh0OjpDb25zb2xlU3RhdGljVGV4dDo6cmVuZGVyX2l0ZW1zX3dpdGhfc2l6ZTo6aDBhODEyZTgwNTZkZjcyOGQ8QWRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpwYXJzZV9zZXF1ZW50aWFsX2xpc3Q6Omg1MmJmOGZhN2VhMDQ5MWY5PQVwYXJzZT5FY29yZTo6Y2hhcjo6bWV0aG9kczo6PGltcGwgY2hhcj46OmVzY2FwZV9kZWJ1Z19leHQ6Omg0YTQ3ZDA2NzI3ZjQ4ZDUwPzF2dGU6OlBhcnNlcjxfPjo6cGVyZm9ybV9hY3Rpb246OmhhZWVhMzcyNGJiNTkzZWFhQDFjb3JlOjpzdHI6OnNsaWNlX2Vycm9yX2ZhaWxfcnQ6Omg2M2VlNjdhMmY2ZTc0MDg2QTpkZW5vX3Rhc2tfc2hlbGw6OnBhcnNlcjo6cGFyc2VfZW52X3ZhcnM6OmgzMTQ5YjU1ZTliY2NkOGQ0QkU8c2VyZGU6OmRlOjpVbmV4cGVjdGVkIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aGRkZDc5ZjZkOThjMjY1OTBDOGNvcmU6Om51bTo6YmlnbnVtOjpCaWczMng0MDo6bXVsX3BvdzI6OmgxZjhlZjExNmNiYjg5MWNiRCltb25jaDo6b3I6Ont7Y2xvc3VyZX19OjpoNGQ0MjhlM2YxY2JhYzk1ZUVAaGFzaGJyb3duOjpyYXc6OlJhd1RhYmxlPFQsQT46OnJlc2VydmVfcmVoYXNoOjpoZjE4ZTEzMTc2ZmZiYzk1MkZJY29uc29sZV9zdGF0aWNfdGV4dDo6Q29uc29sZVN0YXRpY1RleHQ6OmdldF9sYXN0X2xpbmVzOjpoYTdlMGZjMjgzNTE0OWI0N0cxPHN0ciBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoNmFmYjE3OGQ1MjAzYzEzNEhCY29yZTo6bnVtOjpmbHQyZGVjOjpzdHJhdGVneTo6ZHJhZ29uOjptdWxfcG93MTA6Omg0NzhkNmUwOTBjOGQ5YzZkSQ5fX3J1c3RfcmVhbGxvY0o2ZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OnBhcnNlX3dvcmQ6OmhiN2FlMjY3OGE4ODJkOWY4S248c2VyZGVfd2FzbV9iaW5kZ2VuOjpzZXI6Ok9iamVjdFNlcmlhbGl6ZXIgYXMgc2VyZGU6OnNlcjo6U2VyaWFsaXplU3RydWN0Pjo6c2VyaWFsaXplX2ZpZWxkOjpoZTdkNzhmMTliZjhhNDc3ZEw4ZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzxBPjo6ZnJlZTo6aDRhNjAwOWJmY2Y3NjBlODFNMmNvbXBpbGVyX2J1aWx0aW5zOjptZW06Om1lbW1vdmU6OmhmZDIzOWQ5NGU0NWI5M2I0Tjpjb3JlOjpudW06OmJpZ251bTo6QmlnMzJ4NDA6Om11bF9kaWdpdHM6Omg5MmZkZDlmOGMzNDdkN2RhTzFzZXJkZV93YXNtX2JpbmRnZW46OmZyb21fdmFsdWU6OmhiMTRjZWNhMTgxZWFmYmViUFc8c2VyZGU6OmRlOjppbXBsczo6U3RyaW5nVmlzaXRvciBhcyBzZXJkZTo6ZGU6OlZpc2l0b3I+Ojp2aXNpdF9ieXRlczo6aGI2Y2M0MzJjNWE3ZWFlNGRRPWNvbnNvbGVfc3RhdGljX3RleHQ6OnJhd19yZW5kZXJfbGFzdF9pdGVtczo6aDYwOTM5NGY1Yzc2MGYzYTdSbjxzZXJkZV93YXNtX2JpbmRnZW46OnNlcjo6T2JqZWN0U2VyaWFsaXplciBhcyBzZXJkZTo6c2VyOjpTZXJpYWxpemVTdHJ1Y3Q+OjpzZXJpYWxpemVfZmllbGQ6Omg1YjVlN2IwNmQyODJhMTBhUxdzdGF0aWNfdGV4dF9yZW5kZXJfb25jZVQ+Y29yZTo6Zm10OjpGb3JtYXR0ZXI6OndyaXRlX2Zvcm1hdHRlZF9wYXJ0czo6aGNkMmE0OWRkYTY5M2I1YTRVbjxzZXJkZV93YXNtX2JpbmRnZW46OnNlcjo6T2JqZWN0U2VyaWFsaXplciBhcyBzZXJkZTo6c2VyOjpTZXJpYWxpemVTdHJ1Y3Q+OjpzZXJpYWxpemVfZmllbGQ6OmhmZjQzYjUyODgwOWRhNDMzViNjb3JlOjpmbXQ6OndyaXRlOjpoNzFmYWEyNTE5Y2JiOTg3NVcXc3RhdGljX3RleHRfcmVuZGVyX3RleHRYTDxhbnlob3c6OmZtdDo6SW5kZW50ZWQ8VD4gYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX3N0cjo6aGFiNGNhOWFlNjIxMzNhODlZNWNvcmU6OmZtdDo6Rm9ybWF0dGVyOjpwYWRfaW50ZWdyYWw6Omg1OTBjNTRmZmUyYzNhYTUyWkFkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jPEE+OjpkaXNwb3NlX2NodW5rOjpoYzExOTVlNmNiZmNlMDBmNVtTPGNvcmU6OmZtdDo6YnVpbGRlcnM6OlBhZEFkYXB0ZXIgYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX3N0cjo6aDBmMjY1Y2I4MDc2ZTVkNWRcPGNvcmU6OmZtdDo6Rm9ybWF0dGVyOjpwYWRfZm9ybWF0dGVkX3BhcnRzOjpoYzJiMDc3NTI5Zjc0ZDE5ZV0vdnRlOjpQYXJzZXI8Xz46OnByb2Nlc3NfdXRmODo6aDZlNjZmNzc1NWM2NDI4MDZeMWNvbnNvbGVfZXJyb3JfcGFuaWNfaG9vazo6aG9vazo6aGRjNGM1OGUzMjk0ZjI1NGFfQmRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpwYXJzZV9waXBlX3NlcXVlbmNlX29wOjpoZmFlZmQzY2I2MTNhZmUxYmBGYW55aG93OjpmbXQ6OjxpbXBsIGFueWhvdzo6ZXJyb3I6OkVycm9ySW1wbD46OmRlYnVnOjpoOTg5Yzk4NDkzZDFjY2FiYmE2Y29uc29sZV9zdGF0aWNfdGV4dDo6YW5zaTo6dG9rZW5pemU6Omg2YjczZWFhMzY0NDBkZWRmYjltb25jaDo6d2l0aF9mYWlsdXJlX2lucHV0Ojp7e2Nsb3N1cmV9fTo6aDIyOTQ2NWIwNjRkZThlMTVjN21vbmNoOjpQYXJzZUVycm9yRmFpbHVyZTo6aW50b19lcnJvcjo6aDY4ZDMwMTljMjcyN2M1ZDlkJG1vbmNoOjp3aGl0ZXNwYWNlOjpoMjI3MmJhYjBjMzYwYmE5YmVePGNvcmU6OnN0cjo6aXRlcjo6U3BsaXQ8UD4gYXMgY29yZTo6aXRlcjo6dHJhaXRzOjppdGVyYXRvcjo6SXRlcmF0b3I+OjpuZXh0OjpoOThkZmIwY2FlNTlmNzMwZmZuPHNlcmRlX3dhc21fYmluZGdlbjo6c2VyOjpPYmplY3RTZXJpYWxpemVyIGFzIHNlcmRlOjpzZXI6OlNlcmlhbGl6ZVN0cnVjdD46OnNlcmlhbGl6ZV9maWVsZDo6aGEwOWJmNWVmODVkYjVlYzdnN3NlcmRlX3dhc21fYmluZGdlbjo6c3RhdGljX3N0cl90b19qczo6aDNkYTE4NzQxZTBkZGRiMThoO2NvcmU6OnN0cjo6cGF0dGVybjo6VHdvV2F5U2VhcmNoZXI6Om5leHQ6OmgxNWY2OTc3NzIzMTY2OTU2aUZzZXJkZV93YXNtX2JpbmRnZW46OmRlOjpEZXNlcmlhbGl6ZXI6OmludmFsaWRfdHlwZV86OmgyMDdkMDRhZmU4MzBiMjNiakFkZW5vX3Rhc2tfc2hlbGw6OnBhcnNlcjo6cGFyc2VfYm9vbGVhbl9saXN0X29wOjpoZmM0MzQyNGVmY2NmZjMwOWtSYW55aG93OjplcnJvcjo6PGltcGwgY29yZTo6Zm10OjpEaXNwbGF5IGZvciBhbnlob3c6OkVycm9yPjo6Zm10OjpoZTYyMWYwNGFmOTdjOWEzMmw1b25jZV9jZWxsOjppbXA6OmluaXRpYWxpemVfb3Jfd2FpdDo6aDBmZTk1YmIwMGE2ZTBlMmVtM2FsbG9jOjpmbXQ6OmZvcm1hdDo6Zm9ybWF0X2lubmVyOjpoYzk0NGFlOGJjYmEyYWI1OW48ZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzxBPjo6bWVtYWxpZ246OmhhZjQ1Zjk5MmIzMWVmNzZib1hjb3JlOjpudW06OmZsdDJkZWM6OnN0cmF0ZWd5OjpncmlzdTo6Zm9ybWF0X2V4YWN0X29wdDo6cG9zc2libHlfcm91bmQ6OmhiMDlmZDU3MDg2ODg2MmQxcDhjb3JlOjpudW06OmZsdDJkZWM6OmRpZ2l0c190b19kZWNfc3RyOjpoMjA0NWFkN2RhOGY5ZDBlZHEqbW9uY2g6Om1hcDo6e3tjbG9zdXJlfX06OmhjZTVlYjM1OTU2ZWQ3ZWNhcllzZXJkZTo6X19wcml2YXRlOjpkZTo6Y29udGVudDo6Q29udGVudFJlZkRlc2VyaWFsaXplcjxFPjo6aW52YWxpZF90eXBlOjpoMzdmMzYzODE3MjUyNzAzZHM9Y29uc29sZV9zdGF0aWNfdGV4dDo6dHJ1bmNhdGVfbGluZXNfaGVpZ2h0OjpoYzFjYmQ2OTUzZjViNWMzZnQ6Y29yZTo6Zm10OjpidWlsZGVyczo6RGVidWdTdHJ1Y3Q6OmZpZWxkOjpoODczZWRmNWZiMWNkMThiMnUyY29yZTo6dW5pY29kZTo6cHJpbnRhYmxlOjpjaGVjazo6aGQyODkwMmJmNDIzMzFkYjF2OzwmbXV0IFcgYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX2NoYXI6Omg1YjM5MGNmZDRkN2E5ZDdidzs8Jm11dCBXIGFzIGNvcmU6OmZtdDo6V3JpdGU+Ojp3cml0ZV9jaGFyOjpoMTViZmMxMWY2YTU2MGZjZHgxY29tcGlsZXJfYnVpbHRpbnM6Om1lbTo6bWVtY3B5OjpoMGNmNDc0OTU5MDFkMDY4NHk2Y29yZTo6c2xpY2U6Om1lbWNocjo6bWVtY2hyX2FsaWduZWQ6OmhkZjJlNDBmYzFjYzA3MjZiei9jb3JlOjpmbXQ6Om51bTo6aW1wOjpmbXRfdTY0OjpoZTVmN2NmNWU5ZTAyZGE0MHs+Y29uc29sZV9zdGF0aWNfdGV4dDo6YW5zaTo6c3RyaXBfYW5zaV9jb2Rlczo6aGIyNmE5ZWY5NWI1Y2YwZTJ8FnN0YXRpY190ZXh0X2NsZWFyX3RleHR9ZHNlcmRlOjpzZXI6OmltcGxzOjo8aW1wbCBzZXJkZTo6c2VyOjpTZXJpYWxpemUgZm9yIGFsbG9jOjp2ZWM6OlZlYzxUPj46OnNlcmlhbGl6ZTo6aDM0NjcxMjQxMjRiMGU3YjJ+MDwmVCBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoMDBlNjNiNjIyYzM3NjlhYn8wY29yZTo6b3BzOjpmdW5jdGlvbjo6Rm46OmNhbGw6OmhjMDBlZGUyMjE2NzE5ODBlgAEyPGNoYXIgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aDA4MDc0NDVjNWRmZWZkZWGBAUZkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jPEE+Ojp1bmxpbmtfbGFyZ2VfY2h1bms6OmgxYjg3OTllNDEzMTI3NGU3ggE3Y29yZTo6cGFuaWNraW5nOjphc3NlcnRfZmFpbGVkX2lubmVyOjpoZWY4YWE5MTQwZWQzYjE1Y4MBMDwmVCBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoMjAyMmM5NTgxYTBmMjFiZYQBRmRsbWFsbG9jOjpkbG1hbGxvYzo6RGxtYWxsb2M8QT46Omluc2VydF9sYXJnZV9jaHVuazo6aDZkZjg3ODczZGJiYTQ2NDaFAekBY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGNvcmU6Om9wdGlvbjo6T3B0aW9uPGNvcmU6OmNlbGw6OlJlZkNlbGw8c3RkOjpjb2xsZWN0aW9uczo6aGFzaDo6bWFwOjpIYXNoTWFwPCpjb25zdCBzdHIsanNfc3lzOjpKc1N0cmluZyxjb3JlOjpoYXNoOjpCdWlsZEhhc2hlckRlZmF1bHQ8c2VyZGVfd2FzbV9iaW5kZ2VuOjpzdGF0aWNfc3RyX3RvX2pzOjpQdHJIYXNoZXI+Pj4+Pjo6aGJlZmEyNGY1MGYxNzZiYTaGAUdjb3JlOjpmbXQ6Om51bTo6PGltcGwgY29yZTo6Zm10OjpEZWJ1ZyBmb3IgdTMyPjo6Zm10OjpoNDRlZmU5OTJhYzZhYmE4Y4cBNDxjaGFyIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aDYxNDlmOGIxODUxZGMwMzOIAU08YWxsb2M6OnN0cmluZzo6U3RyaW5nIGFzIGNvcmU6OmZtdDo6V3JpdGU+Ojp3cml0ZV9jaGFyOjpoODIzMThkOThhZjhhNTcyMS40NokBKm1vbmNoOjptYXA6Ont7Y2xvc3VyZX19OjpoNDZlNDljMDc1ZDY4NmE0NooBR3NlcmRlX3dhc21fYmluZGdlbjo6c3RhdGljX3N0cl90b19qczo6Q0FDSEU6Ol9fZ2V0aXQ6Omg1YjJlYWZhMGQ3OTc1YzRmiwE+ZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OnBhcnNlX2Vudl92YXJfbmFtZTo6aGQxOWY3NGVjNTM1MGNlMjOMAUJjb3JlOjpmbXQ6OkZvcm1hdHRlcjo6ZGVidWdfdHVwbGVfZmllbGQxX2ZpbmlzaDo6aDQ3ZGI3ZmI2NTRjZjdmZDmNATs8Jm11dCBXIGFzIGNvcmU6OmZtdDo6V3JpdGU+Ojp3cml0ZV9jaGFyOjpoNzUwM2NmMmU0MzNmMjViMI4BOzwmbXV0IFcgYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX2NoYXI6OmgzNzIzODI3OGEyZDI1NDVmjwEvY29yZTo6Zm10OjpXcml0ZTo6d3JpdGVfY2hhcjo6aDE5OGY1MTg3NjY3N2I5ZDOQASptb25jaDo6bWFwOjp7e2Nsb3N1cmV9fTo6aDQ4NWI4NjJjYjU1NTA3ZjeRAWg8c3RkOjpwYW5pY2tpbmc6OmJlZ2luX3BhbmljX2hhbmRsZXI6OlBhbmljUGF5bG9hZCBhcyBjb3JlOjpwYW5pYzo6Qm94TWVVcD46OnRha2VfYm94OjpoMzQ5MWU3MGMwZjA2MDI3MpIBMGFsbG9jOjp2ZWM6OlZlYzxULEE+OjpyZXNlcnZlOjpoN2RiOWYzZTljYjFlOGM1MJMBLmFsbG9jOjpyYXdfdmVjOjpmaW5pc2hfZ3Jvdzo6aDZmYzBhY2JhZDMxYzdjOGSUAS5hbGxvYzo6cmF3X3ZlYzo6ZmluaXNoX2dyb3c6OmgzNzJmNDExOWUwZjhjNTM3lQE3Y29yZTo6Y2hhcjo6bWV0aG9kczo6ZW5jb2RlX3V0ZjhfcmF3OjpoY2E2NTg3MTZlMzhhYzMwOZYBOmNvcmU6OnN0cjo6dmFsaWRhdGlvbnM6Om5leHRfY29kZV9wb2ludDo6aDMyODc3NjNjNTVkNzM4MGGXATp1bmljb2RlX3dpZHRoOjp0YWJsZXM6OmNoYXJ3aWR0aDo6d2lkdGg6OmhhYTBmODA4NTVmY2E5ZGFkmAE+YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+Ojpncm93X2Ftb3J0aXplZDo6aDQ2ZmVlMTE5ZmJjY2FiMDWZAT9zdGQ6OnN5c19jb21tb246OnRocmVhZF9pbmZvOjpjdXJyZW50X3RocmVhZDo6aDhhYTEyM2U4ZmJjMjdkNTeaASNqc19zeXM6OnRyeV9pdGVyOjpoYmI3MTRhYWJjMDJlNWVjZZsBQGFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cmVzZXJ2ZV9mb3JfcHVzaDo6aDQ0NWU2N2UzZDVkYTFhMTicAUBhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmVfZm9yX3B1c2g6Omg3NGIyNDQwNGZkNWRmNmQ0nQFAYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpyZXNlcnZlX2Zvcl9wdXNoOjpoYWQxM2IyMTAxNTE5YjMyNZ4BQGFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cmVzZXJ2ZV9mb3JfcHVzaDo6aDRmNGI5ZmM2ZmMxN2NmY2KfAUBhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmVfZm9yX3B1c2g6OmgyMDkzYjliYTNjZWQ2NWQ3oAFAYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpyZXNlcnZlX2Zvcl9wdXNoOjpoODkwNjllNjQ3Y2FhNTNiZKEBQGFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cmVzZXJ2ZV9mb3JfcHVzaDo6aDUzMjg4MDViODg1MzJkOGGiAUs8bW9uY2g6OlBhcnNlRXJyb3JGYWlsdXJlRXJyb3IgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aGRmMjU3ZTc1YzhiOTc0M2OjAW48c2VyZGVfd2FzbV9iaW5kZ2VuOjpzZXI6Ok9iamVjdFNlcmlhbGl6ZXIgYXMgc2VyZGU6OnNlcjo6U2VyaWFsaXplU3RydWN0Pjo6c2VyaWFsaXplX2ZpZWxkOjpoOWNhZTZkZjVjOWI1ZTRkY6QBPmFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6Z3Jvd19hbW9ydGl6ZWQ6OmgwNzU0NzEwNDhmYTNkYjhmpQE+YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+Ojpncm93X2Ftb3J0aXplZDo6aDIzOTllMjc3MWE0MDk0NGGmAU5hbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmU6OmRvX3Jlc2VydmVfYW5kX2hhbmRsZTo6aDA4ODA0MjU3YWU5NWI5NzSnAS5tb25jaDo6aWZfdHJ1ZTo6e3tjbG9zdXJlfX06Omg4ZTQ1M2VkYjBiNmJjODQwqAFAYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpyZXNlcnZlX2Zvcl9wdXNoOjpoMWIxZTYyYzcyOTMyMDcyYakBbjxjb3JlOjppdGVyOjphZGFwdGVyczo6ZmxhdHRlbjo6RmxhdHRlbjxJPiBhcyBjb3JlOjppdGVyOjp0cmFpdHM6Oml0ZXJhdG9yOjpJdGVyYXRvcj46Om5leHQ6OmhmYTkyZmFlOTVkY2YyN2RkqgE3c3RkOjpwYW5pY2tpbmc6OnJ1c3RfcGFuaWNfd2l0aF9ob29rOjpoM2FhMDU0ZDM1YTA4MTdkN6sBMGNvcmU6Om9wczo6ZnVuY3Rpb246OkZuOjpjYWxsOjpoY2Q2OTMwZWRjOGNkYjA2MqwBMWNvbXBpbGVyX2J1aWx0aW5zOjptZW06Om1lbXNldDo6aDNlZjQyM2I5MmRjZmRmYjetAS5hbGxvYzo6cmF3X3ZlYzo6ZmluaXNoX2dyb3c6OmgwOGMxM2Q0YjFkNWY5ZGY4rgFNPG1vbmNoOjpQYXJzZUVycm9yRmFpbHVyZUVycm9yIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aDg3NjE3YmVhMDU1MGEzOGSvARBzdHJpcF9hbnNpX2NvZGVzsAFRPHNlcmRlX3dhc21fYmluZGdlbjo6ZXJyb3I6OkVycm9yIGFzIHNlcmRlOjpkZTo6RXJyb3I+OjpjdXN0b206OmhmNjZlZjQxMDFlZmI0NjA4sQExYWxsb2M6OnN0cjo6PGltcGwgc3RyPjo6cmVwZWF0OjpoNjI3ZGY3MWUxNzcxZjZjNLIBP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTNfbXV0OjpoZDdhMTc3MGU5ODU1NWU1YbMBOWFsbG9jOjp2ZWM6OlZlYzxULEE+OjpleHRlbmRfZGVzdWdhcmVkOjpoODMxNWQ0ODVkZDdjNjJmZLQBR29uY2VfY2VsbDo6aW1wOjpPbmNlQ2VsbDxUPjo6aW5pdGlhbGl6ZTo6e3tjbG9zdXJlfX06Omg1MmI1ODBkODNlYmRkOWQ3tQEjbW9uY2g6Om5leHRfY2hhcjo6aGVhMmE1ZTExZWQ0OTQ0YjW2AUNjb3JlOjppdGVyOjphZGFwdGVyczo6ZmxhdHRlbjo6YW5kX3RoZW5fb3JfY2xlYXI6OmgxMjFmOGFmNmQ5OGEzNWQxtwEpbW9uY2g6OnNraXBfd2hpdGVzcGFjZTo6aGM3YzE3ZDJiZWMxMzdiNjK4AUNzdGQ6OnBhbmlja2luZzo6YmVnaW5fcGFuaWNfaGFuZGxlcjo6e3tjbG9zdXJlfX06OmgyZjczZTRjZjZjZDYzMTlhuQGWATxyc19saWI6Ol86OjxpbXBsIHNlcmRlOjpkZTo6RGVzZXJpYWxpemUgZm9yIHJzX2xpYjo6V2FzbVRleHRJdGVtPjo6ZGVzZXJpYWxpemU6Ol9fRmllbGRWaXNpdG9yIGFzIHNlcmRlOjpkZTo6VmlzaXRvcj46OnZpc2l0X2J5dGVzOjpoMzhhNDgyNGQ5N2FjYTViZroBQzx3YXNtX2JpbmRnZW46OkpzVmFsdWUgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aGJkMzljMDU4MTc5N2I4ODa7AVU8anNfc3lzOjpJbnRvSXRlciBhcyBjb3JlOjppdGVyOjp0cmFpdHM6Oml0ZXJhdG9yOjpJdGVyYXRvcj46Om5leHQ6OmgxMTZiZDM5ZTkzZTRlZjZlvAFpc2VyZGU6OmRlOjppbXBsczo6PGltcGwgc2VyZGU6OmRlOjpEZXNlcmlhbGl6ZSBmb3IgYWxsb2M6OnN0cmluZzo6U3RyaW5nPjo6ZGVzZXJpYWxpemU6OmgxZDYxNzY5YjUyNWVjZGM1vQEwY29yZTo6b3BzOjpmdW5jdGlvbjo6Rm46OmNhbGw6OmhlMzAwZDdmMjQxZDY3Yjk2vgFjPHN0ZDo6cGFuaWNraW5nOjpiZWdpbl9wYW5pY19oYW5kbGVyOjpQYW5pY1BheWxvYWQgYXMgY29yZTo6cGFuaWM6OkJveE1lVXA+OjpnZXQ6Omg1M2UzZDk4YzUzMTk3Yjk2vwElYWxsb2M6OmZtdDo6Zm9ybWF0OjpoNDIxNjgxNmM1YTExNWM1M8ABQXNlcmRlX3dhc21fYmluZGdlbjo6ZGU6OkRlc2VyaWFsaXplcjo6YXNfYnl0ZXM6OmgxMDQ1OTY5NDlmZmQwODg5wQEoYWxsb2M6OmZtdDo6Zm9ybWF0OjpoNDIxNjgxNmM1YTExNWM1My42NsIBZ2FueWhvdzo6Y2hhaW46OjxpbXBsIGNvcmU6Oml0ZXI6OnRyYWl0czo6aXRlcmF0b3I6Okl0ZXJhdG9yIGZvciBhbnlob3c6OkNoYWluPjo6bmV4dDo6aGMzZGI5NDJlNzU1MTE1ZTDDAVZjb3JlOjpzdHI6OnRyYWl0czo6PGltcGwgY29yZTo6b3BzOjppbmRleDo6SW5kZXg8ST4gZm9yIHN0cj46OmluZGV4OjpoYmI4MzhkYjljNGRhMjBjZcQBMG1vbmNoOjpQYXJzZUVycm9yRmFpbHVyZTo6bmV3OjpoYWU0YTNjNmRjZWM0NDdjNsUBczxjb3JlOjppdGVyOjphZGFwdGVyczo6ZmxhdHRlbjo6RmxhdHRlbjxJPiBhcyBjb3JlOjppdGVyOjp0cmFpdHM6Oml0ZXJhdG9yOjpJdGVyYXRvcj46OnNpemVfaGludDo6aGQ0OWRhY2UwNjlkYThiMjHGAURoYXNoYnJvd246OnJhdzo6VGFibGVMYXlvdXQ6OmNhbGN1bGF0ZV9sYXlvdXRfZm9yOjpoZWE5NDU5MzE4NDA4OWI5YccBMmNvcmU6OmZtdDo6QXJndW1lbnRzOjpuZXdfdjE6OmhkNTVkZWY0NjRmOGQyMWU3Ljc5yAEzY29yZTo6Zm10OjpBcmd1bWVudHM6Om5ld192MTo6aGQ1NWRlZjQ2NGY4ZDIxZTcuMzI0yQFhPGNvcmU6OnN0cjo6aXRlcjo6Q2hhckluZGljZXMgYXMgY29yZTo6aXRlcjo6dHJhaXRzOjppdGVyYXRvcjo6SXRlcmF0b3I+OjpuZXh0OjpoZjMzZmZkZmI1YzFkOWEzN8oBSjxhbGxvYzo6c3RyaW5nOjpTdHJpbmcgYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX2NoYXI6Omg4MjMxOGQ5OGFmOGE1NzIxywFFaGFzaGJyb3duOjpyYXc6OlJhd1RhYmxlSW5uZXI8QT46OmZpbmRfaW5zZXJ0X3Nsb3Q6OmhiMTNlNjA5Yjk4ODg5Y2IyzAEzc3RkOjpzeW5jOjptdXRleDo6TXV0ZXg8VD46OmxvY2s6OmhlOTk4Mzg0Y2VmNzEwMTg5zQExYWxsb2M6OnN0cmluZzo6U3RyaW5nOjpwdXNoOjpoYTY1YzIyOTQxNWFmZjEyNC42NM4BMXNlcmRlOjpkZTo6RXJyb3I6OmludmFsaWRfdHlwZTo6aDQyN2E3ZTE4NjljZWQ3MmXPATJzZXJkZTo6ZGU6OkVycm9yOjppbnZhbGlkX3ZhbHVlOjpoZjllZTlmOTI1MGJjMGE2Y9ABKm1vbmNoOjp0YWc6Ont7Y2xvc3VyZX19OjpoZDg4YTBjNDY5Y2JlMjExY9EBLWFsbG9jOjp2ZWM6OlZlYzxULEE+OjpwdXNoOjpoZDdlNDQwYzQ1MDQ5ODhlONIBPmFsbG9jOjp2ZWM6OlZlYzxULEE+OjpyZW1vdmU6OmFzc2VydF9mYWlsZWQ6Omg0MjVhZDczNDlkODgxZjMz0wEsdnRlOjpwYXJhbXM6OlBhcmFtczo6cHVzaDo6aDdiMjgyMTlkZTdiM2E5MGLUAUNjb3JlOjp1bmljb2RlOjp1bmljb2RlX2RhdGE6OndoaXRlX3NwYWNlOjpsb29rdXA6OmgzODZjZTAxMjE3NDllYzg01QE4ZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OnBhcnNlX29wX3N0cjo6aDU1NDdmNzI1NjNhYzQ0M2PWAS5jb3JlOjpyZXN1bHQ6OnVud3JhcF9mYWlsZWQ6Omg4YjNkYjBmMTExNzFiNTdi1wE5YWxsb2M6OnZlYzo6VmVjPFQsQT46OmludG9fYm94ZWRfc2xpY2U6OmgyZmJhNmExOTczNzZmZmY42AEwbW9uY2g6OlBhcnNlRXJyb3JGYWlsdXJlOjpuZXc6Omg1MjFjM2E5ODNlMGM1ZDM52QF8PGFsbG9jOjp2ZWM6OlZlYzxULEE+IGFzIGFsbG9jOjp2ZWM6OnNwZWNfZXh0ZW5kOjpTcGVjRXh0ZW5kPCZULGNvcmU6OnNsaWNlOjppdGVyOjpJdGVyPFQ+Pj46OnNwZWNfZXh0ZW5kOjpoYmYzOTM1NGZlMzQzMWRkMtoBfDxhbGxvYzo6dmVjOjpWZWM8VCxBPiBhcyBhbGxvYzo6dmVjOjpzcGVjX2V4dGVuZDo6U3BlY0V4dGVuZDwmVCxjb3JlOjpzbGljZTo6aXRlcjo6SXRlcjxUPj4+OjpzcGVjX2V4dGVuZDo6aGVkODdkYzU0NmJiOTA0OTXbATFjb25zb2xlX3N0YXRpY190ZXh0OjpMaW5lOjpuZXc6OmhiYWMxNTIwNmYyZWEyODRl3AFbPGFsbG9jOjp2ZWM6OlZlYzxULEE+IGFzIGNvcmU6Oml0ZXI6OnRyYWl0czo6Y29sbGVjdDo6RXh0ZW5kPFQ+Pjo6ZXh0ZW5kOjpoYzU3OTUwZmFiYjNhYjA4MN0BSjxjb3JlOjpvcHM6OnJhbmdlOjpSYW5nZTxJZHg+IGFzIGNvcmU6OmZtdDo6RGVidWc+OjpmbXQ6OmhjMTc2ZjkyMzliMzVhMzJm3gEmbW9uY2g6OmlzX2JhY2t0cmFjZTo6aGViMGNhMDA4NjdkY2I3NmLfAUs8YWxsb2M6OmFsbG9jOjpHbG9iYWwgYXMgY29yZTo6YWxsb2M6OkFsbG9jYXRvcj46OnNocmluazo6aGFhYTM4YjFjZGQ5N2ZjZGTgAS1qc19zeXM6OlVpbnQ4QXJyYXk6OnRvX3ZlYzo6aDU4MTRmZWFkZDFkMjc5YWbhAWs8c2VyZGU6Ol9fcHJpdmF0ZTo6c2VyOjpUYWdnZWRTZXJpYWxpemVyPFM+IGFzIHNlcmRlOjpzZXI6OlNlcmlhbGl6ZXI+OjpzZXJpYWxpemVfc3RydWN0OjpoYmU2NGJkMjg1ODQyYmJjNuIBOmFsbG9jOjp2ZWM6OlZlYzxULEE+OjpleHRlbmRfZnJvbV9zbGljZTo6aDg4ZjE2MDEwMjQzNmFjMTXjAXxjb3JlOjpzdHI6OnRyYWl0czo6PGltcGwgY29yZTo6c2xpY2U6OmluZGV4OjpTbGljZUluZGV4PHN0cj4gZm9yIGNvcmU6Om9wczo6cmFuZ2U6OlJhbmdlRnJvbTx1c2l6ZT4+OjpnZXQ6OmhiNTVjNDZhODlkOTI2NDEx5AGCAWRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpfOjo8aW1wbCBzZXJkZTo6c2VyOjpTZXJpYWxpemUgZm9yIGRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpTZXF1ZW50aWFsTGlzdD46OnNlcmlhbGl6ZTo6aGIzY2VjOWMwM2I1NmQ3ZGLlATRzZXJkZTo6ZGU6OkVycm9yOjpkdXBsaWNhdGVfZmllbGQ6Omg4Y2JiYWZmZjUwZDM0OTFh5gEyc2VyZGU6OmRlOjpFcnJvcjo6bWlzc2luZ19maWVsZDo6aGE4MzJiNmJkNTE0YzI2M2bnAVNjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8c2VyZGU6Ol9fcHJpdmF0ZTo6ZGU6OmNvbnRlbnQ6OkNvbnRlbnQ+OjpoOTQ0MjkxYjY2YjUyNjA1ZegBNGNvcmU6OnJlc3VsdDo6UmVzdWx0PFQsRT46OnVud3JhcDo6aDQxZDc3OTViMTU1OTgzZDLpATthbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OmFsbG9jYXRlX2luOjpoMDk3Njg2YzQ4OGE0ZDE0MOoBNmNvcmU6OnBhbmlja2luZzo6cGFuaWNfYm91bmRzX2NoZWNrOjpoOTI0NWQ0YTgyNWNjNTEwN+sBTmNvcmU6OnNsaWNlOjo8aW1wbCBbVF0+Ojpjb3B5X2Zyb21fc2xpY2U6Omxlbl9taXNtYXRjaF9mYWlsOjpoMjYzOGZjYjVhZWJkZTRlNewBQWNvbnNvbGVfc3RhdGljX3RleHQ6OmFuc2k6OlBlcmZvcm1lcjo6ZmluYWxpemU6Omg4OTZlOWNkZWUzODJlOWE07QE/Y29yZTo6c2xpY2U6OmluZGV4OjpzbGljZV9lbmRfaW5kZXhfbGVuX2ZhaWw6Omg4OGZhYjU5ZjM1OWMzYjgz7gE9Y29yZTo6c2xpY2U6OmluZGV4OjpzbGljZV9pbmRleF9vcmRlcl9mYWlsOjpoMTM0YWI2MWM5ODBhZjYzNu8BQTxzdHIgYXMgdW5pY29kZV93aWR0aDo6VW5pY29kZVdpZHRoU3RyPjo6d2lkdGg6OmgzZDMzNzczMjI2ZmFlZmZj8AFBY29yZTo6c2xpY2U6OmluZGV4OjpzbGljZV9zdGFydF9pbmRleF9sZW5fZmFpbDo6aGY3ZmMyMDI1MzY5MDQxMmTxAYIBPDxhbGxvYzo6dmVjOjpkcmFpbjo6RHJhaW48VCxBPiBhcyBjb3JlOjpvcHM6OmRyb3A6OkRyb3A+Ojpkcm9wOjpEcm9wR3VhcmQ8VCxBPiBhcyBjb3JlOjpvcHM6OmRyb3A6OkRyb3A+Ojpkcm9wOjpoMTdmZWQwZGFkMjJhMmNiNfIBW2NvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxhbGxvYzo6dmVjOjpWZWM8Y29uc29sZV9zdGF0aWNfdGV4dDo6VGV4dEl0ZW0+Pjo6aDliYzA3Y2U3NTcwYTk3ZTPzATNjb25zb2xlX3N0YXRpY190ZXh0Ojp2dHNfbW92ZV91cDo6aGVmNGM1YWNlZjFiM2YxZjP0ATA8JlQgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aGUwMTBjOWNlMDU4MGNkMjH1AVE8b25jZV9jZWxsOjpzeW5jOjpMYXp5PFQsRj4gYXMgY29yZTo6b3BzOjpkZXJlZjo6RGVyZWY+OjpkZXJlZjo6aDFkMWJlMmU1ZDc5MTVkOTX2ATRjb3JlOjpzbGljZTo6bWVtY2hyOjptZW1jaHJfbmFpdmU6Omg1MmNkMWQ0OWNiNzQ2Yzll9wFuPHNlcmRlX3dhc21fYmluZGdlbjo6c2VyOjpPYmplY3RTZXJpYWxpemVyIGFzIHNlcmRlOjpzZXI6OlNlcmlhbGl6ZVN0cnVjdD46OnNlcmlhbGl6ZV9maWVsZDo6aGU0NThhNGQ5Mzg3NWI0NDH4AUJjb25zb2xlX3N0YXRpY190ZXh0OjphbnNpOjpQZXJmb3JtZXI6Om1hcmtfY2hhcjo6aDgyNjM0Y2E5NmYwMWFmZGT5AVA8YXJyYXl2ZWM6OmVycm9yczo6Q2FwYWNpdHlFcnJvcjxUPiBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoMzkxYjM4MzYzMzcxMTdjNvoBM2FsbG9jOjpzeW5jOjpBcmM8VCxBPjo6ZHJvcF9zbG93OjpoZTQzZmNiM2M4ZTk4OTFhOPsBM2FsbG9jOjpzeW5jOjpBcmM8VCxBPjo6ZHJvcF9zbG93OjpoNWQ2MzU4ZTE4MzlkNzUxY/wBjgF3YXNtX2JpbmRnZW46OmNvbnZlcnQ6OmltcGxzOjo8aW1wbCB3YXNtX2JpbmRnZW46OmNvbnZlcnQ6OnRyYWl0czo6UmV0dXJuV2FzbUFiaSBmb3IgY29yZTo6cmVzdWx0OjpSZXN1bHQ8VCxFPj46OnJldHVybl9hYmk6Omg5Nzg0OTkwMzNlZWQxMGI5/QEtYWxsb2M6OnZlYzo6VmVjPFQsQT46OnB1c2g6Omg2ZTA5Mzc5MThmNjBkODlm/gEtYWxsb2M6OnZlYzo6VmVjPFQsQT46OnB1c2g6Omg1OGE3ZThhYTI2YjM1Nzk0/wEtYWxsb2M6OnZlYzo6VmVjPFQsQT46OnB1c2g6OmgxOTdkMTBmYjEyODZlZTAxgAJWY29yZTo6c3RyOjp0cmFpdHM6OjxpbXBsIGNvcmU6Om9wczo6aW5kZXg6OkluZGV4PEk+IGZvciBzdHI+OjppbmRleDo6aGU1Y2VmYTc5YzNmMWNmOGGBAi1hbGxvYzo6dmVjOjpWZWM8VCxBPjo6cHVzaDo6aDNmMGQ2NDg1ZGNjYzE4NDKCAi1hbGxvYzo6dmVjOjpWZWM8VCxBPjo6cHVzaDo6aDM5ODA3NzEwNWE0YmY0NTaDAjthbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OmFsbG9jYXRlX2luOjpoNTY1ZTY2OWUzNDFiNWQ0YoQCiAF3YXNtX2JpbmRnZW46OmNvbnZlcnQ6OmltcGxzOjo8aW1wbCB3YXNtX2JpbmRnZW46OmNvbnZlcnQ6OnRyYWl0czo6SW50b1dhc21BYmkgZm9yIGNvcmU6Om9wdGlvbjo6T3B0aW9uPFQ+Pjo6aW50b19hYmk6OmhlZTI1ZTU2MWNhMWVjYjNihQJWY29yZTo6c3RyOjp0cmFpdHM6OjxpbXBsIGNvcmU6Om9wczo6aW5kZXg6OkluZGV4PEk+IGZvciBzdHI+OjppbmRleDo6aGIxYThjOTBjY2VmMTBkYTGGAjFjb21waWxlcl9idWlsdGluczo6bWVtOjptZW1jbXA6OmgxNDc2OWRiY2RkNTRlODc1hwI5Y29yZTo6b3BzOjpmdW5jdGlvbjo6Rm5PbmNlOjpjYWxsX29uY2U6Omg1OTI2NGI2ZjEzOTFhMDA3iAIwc2VyZGU6OmRlOjpWaXNpdG9yOjp2aXNpdF9zdHI6Omg4MjQwM2Y3OGNlNGQyMmY4iQIyc2VyZGU6OmRlOjpWaXNpdG9yOjp2aXNpdF9ieXRlczo6aDQyNDIzMTVjNWRkOWY5YWKKAi5jb3JlOjpvcHRpb246OmV4cGVjdF9mYWlsZWQ6OmhlYTIyY2YxMzVhZDY0ZTk4iwJWY29yZTo6c3RyOjp0cmFpdHM6OjxpbXBsIGNvcmU6Om9wczo6aW5kZXg6OkluZGV4PEk+IGZvciBzdHI+OjppbmRleDo6aDVkMzhhNTgyYmQ2ZWUzZDGMAkhoYXNoYnJvd246OnJhdzo6UmF3VGFibGVJbm5lcjxBPjo6cHJlcGFyZV9pbnNlcnRfc2xvdDo6aDg4OGM3MDJmNjNkNjU2NjONAlJjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8YWxsb2M6OnZlYzo6VmVjPHJzX2xpYjo6V2FzbVRleHRJdGVtPj46OmgwMTk4OThhZTU3NjdhOGEwjgJoPGNvcmU6Oml0ZXI6OmFkYXB0ZXJzOjpmdXNlOjpGdXNlPEk+IGFzIGNvcmU6Oml0ZXI6OnRyYWl0czo6aXRlcmF0b3I6Okl0ZXJhdG9yPjo6bmV4dDo6aDYyNzI5MWRjYTg3MmZhZjePAocBd2FzbV9iaW5kZ2VuOjpjb252ZXJ0OjpzbGljZXM6OjxpbXBsIHdhc21fYmluZGdlbjo6Y29udmVydDo6dHJhaXRzOjpJbnRvV2FzbUFiaSBmb3IgYWxsb2M6OnN0cmluZzo6U3RyaW5nPjo6aW50b19hYmk6OmgzOGJkMGQyYjM1MTYzYjE3kAJkY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGFsbG9jOjp2ZWM6OlZlYzxzZXJkZTo6X19wcml2YXRlOjpkZTo6Y29udGVudDo6Q29udGVudD4+OjpoMzVkODc2ZTU0ZDA5ZTkwYZECjQFjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8YWxsb2M6OnZlYzo6VmVjPChzZXJkZTo6X19wcml2YXRlOjpkZTo6Y29udGVudDo6Q29udGVudCxzZXJkZTo6X19wcml2YXRlOjpkZTo6Y29udGVudDo6Q29udGVudCk+Pjo6aDBjMWM2Y2I1NzBjOTY0OTmSAixjb3JlOjplcnJvcjo6RXJyb3I6OmNhdXNlOjpoZmNiMzIyZTcyYTI0ZDc0Y5MCTjxhbnlob3c6OmVycm9yOjpFcnJvckltcGw8RT4gYXMgY29yZTo6ZXJyb3I6OkVycm9yPjo6c291cmNlOjpoZmUyZWM4NmJlMDJjODQ2ZpQCXWNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxhbGxvYzo6dmVjOjpWZWM8ZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OkVudlZhcj4+OjpoN2RmNDAyZTJiMmVkYTUyY5UCW2NvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxhbGxvYzo6dmVjOjpWZWM8ZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OldvcmQ+Pjo6aGRlNGZiYThhMWE1YTFhZTGWAl9jb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8YWxsb2M6OnZlYzo6VmVjPGRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpSZWRpcmVjdD4+OjpoNDg2NzAwZmE0N2RhZmIyOJcCLGNvcmU6OmVycm9yOjpFcnJvcjo6Y2F1c2U6OmhjOTBkYzliN2FlMWVmYzRmmAJOPGFueWhvdzo6ZXJyb3I6OkVycm9ySW1wbDxFPiBhcyBjb3JlOjplcnJvcjo6RXJyb3I+Ojpzb3VyY2U6OmhjZmJhMWU2ZjczMDFhZjllmQI8ZGxtYWxsb2M6OmRsbWFsbG9jOjpEbG1hbGxvYzxBPjo6aW5pdF90b3A6Omg1Y2NlNjI5NmExODMyYmFhmgJTY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGNvbnNvbGVfc3RhdGljX3RleHQ6OkNvbnNvbGVTdGF0aWNUZXh0Pjo6aDc0MDgzMTI5YWZmOWE0ODmbAlY8anNfc3lzOjpBcnJheUl0ZXIgYXMgY29yZTo6aXRlcjo6dHJhaXRzOjppdGVyYXRvcjo6SXRlcmF0b3I+OjpuZXh0OjpoNzAyMzRiZjZkNDIwYTU1NJwCOjwmbXV0IFcgYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX3N0cjo6aDdiMTNjZDc5YTk2YjRmNTSdAlU8c2VyZGU6OmRlOjppbXBsczo6U3RyaW5nVmlzaXRvciBhcyBzZXJkZTo6ZGU6OlZpc2l0b3I+Ojp2aXNpdF9zdHI6OmhjOWQyYjBiMTY3M2JhZDQxngJOY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpXb3JkUGFydD46Omg2YzZhZDczNmU5NWZlZGU2nwJOY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpTZXF1ZW5jZT46OmhjZTA1NzVlZTk4M2U5NDAyoAI7YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjphbGxvY2F0ZV9pbjo6aGFmZTA0NDAxNTM2MjJhZWGhAkJjb3JlOjpjaGFyOjptZXRob2RzOjo8aW1wbCBjaGFyPjo6aXNfd2hpdGVzcGFjZTo6aDBhZTczZDkzYWRjOWZiYTOiAjBhbGxvYzo6dmVjOjpWZWM8VCxBPjo6cmVzZXJ2ZTo6aGM0ZWQyYzkwM2RiOTNlNzOjAiljb3JlOjpwYW5pY2tpbmc6OnBhbmljOjpoMGYwYzA1YjIwZGE5M2RkN6QCMGFsbG9jOjp2ZWM6OlZlYzxULEE+OjpyZXNlcnZlOjpoYTBiZjgxZTc3NzUxMGIyOKUCaTxoYXNoYnJvd246OnJhdzo6Yml0bWFzazo6Qml0TWFza0l0ZXIgYXMgY29yZTo6aXRlcjo6dHJhaXRzOjppdGVyYXRvcjo6SXRlcmF0b3I+OjpuZXh0OjpoMDA0MmMzMGJiZjQwZjQwYqYCMHNlcmRlOjpkZTo6VmlzaXRvcjo6dmlzaXRfdTY0OjpoZDNlOTc5NTk5YzE0NzAzNqcCMHNlcmRlOjpkZTo6VmlzaXRvcjo6dmlzaXRfaTY0OjpoOTBlYzVmN2Y3ZjYyMDQ2N6gCMHNlcmRlOjpkZTo6VmlzaXRvcjo6dmlzaXRfZjY0OjpoYmJhOGQyMzI4MjlmOTJjMKkCYTxjb3JlOjpvcHM6OnJhbmdlOjpSYW5nZTx1c2l6ZT4gYXMgY29yZTo6c2xpY2U6OmluZGV4OjpTbGljZUluZGV4PFtUXT4+OjppbmRleDo6aDU3NWNmNDg5ZGRhODRkOGaqAhFydXN0X2JlZ2luX3Vud2luZKsCiAF3YXNtX2JpbmRnZW46OmNvbnZlcnQ6OnNsaWNlczo6PGltcGwgd2FzbV9iaW5kZ2VuOjpjb252ZXJ0Ojp0cmFpdHM6OkZyb21XYXNtQWJpIGZvciBhbGxvYzo6Ym94ZWQ6OkJveDxbVF0+Pjo6ZnJvbV9hYmk6OmgxMzg2OGVmYmVkMzQ3MDM5rAJePHNlcmRlOjpkZTo6dmFsdWU6OlNlcURlc2VyaWFsaXplcjxJLEU+IGFzIHNlcmRlOjpkZTo6U2VxQWNjZXNzPjo6c2l6ZV9oaW50OjpoNWQ5NjE4MWFjZjY1ZmFhNq0ClAE8cnNfbGliOjpfOjo8aW1wbCBzZXJkZTo6ZGU6OkRlc2VyaWFsaXplIGZvciByc19saWI6Oldhc21UZXh0SXRlbT46OmRlc2VyaWFsaXplOjpfX0ZpZWxkVmlzaXRvciBhcyBzZXJkZTo6ZGU6OlZpc2l0b3I+Ojp2aXNpdF9zdHI6OmhkOWNjMmQzMzU2Mzk1Y2JkrgI4Y29yZTo6c2xpY2U6OjxpbXBsIFtUXT46OnNwbGl0X2F0X211dDo6aDg3NTJlNmQ2MDc4N2E0MjCvAlE8Y29uc29sZV9zdGF0aWNfdGV4dDo6Q29uc29sZVNpemUgYXMgY29yZTo6Y21wOjpQYXJ0aWFsRXE+OjplcTo6aDNiMzMyMjRjNmFkYjNkZDOwAnJjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8W2Rlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpwYXJzZV93b3JkX3BhcnRzOjp7e2Nsb3N1cmV9fTo6UGVuZGluZ1BhcnRdPjo6aDE5N2M1ZjJiZTdiNGIzYWOxAkRoYXNoYnJvd246OnJhdzo6UmF3VGFibGVJbm5lcjxBPjo6YWxsb2NhdGlvbl9pbmZvOjpoOWNiMWIxY2IzYjM5NTJkOLICqAFjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8Y29yZTo6aXRlcjo6YWRhcHRlcnM6OmZsYXR0ZW46OkZsYXR0ZW48YWxsb2M6OnZlYzo6aW50b19pdGVyOjpJbnRvSXRlcjxhbGxvYzo6dmVjOjpWZWM8ZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OldvcmRQYXJ0Pj4+Pjo6aGQwZWY4ODAzNDgxOTJjZDCzAhFfX3diaW5kZ2VuX21hbGxvY7QCQ2NvcmU6OmZtdDo6Rm9ybWF0dGVyOjpwYWRfaW50ZWdyYWw6OndyaXRlX3ByZWZpeDo6aDhiNDQ3ZDFkNzIzOTVhZDO1AjBjb3JlOjpvcHM6OmZ1bmN0aW9uOjpGbjo6Y2FsbDo6aDhlMzIxNGE3NTYzZGZjNGW2AktkbG1hbGxvYzo6ZGxtYWxsb2M6OkRsbWFsbG9jPEE+OjpyZWxlYXNlX3VudXNlZF9zZWdtZW50czo6aDcwYWJlNmJmMThjMzZiZGG3Ams8c3RkOjpwYW5pY2tpbmc6OmJlZ2luX3BhbmljX2hhbmRsZXI6OlN0clBhbmljUGF5bG9hZCBhcyBjb3JlOjpwYW5pYzo6Qm94TWVVcD46OnRha2VfYm94OjpoNTcyNjFmMzcyZTk4Yzg2NLgCOHNlcmRlX3dhc21fYmluZGdlbjo6ZXJyb3I6OkVycm9yOjpuZXc6OmgzYjM4OTFmZTM2M2U4NzQzuQJAYW55aG93OjplcnJvcjo6PGltcGwgYW55aG93OjpFcnJvcj46OmZyb21fc3RkOjpoYTI4MmE0OGIxNmQxYzZmM7oCNGNvcmU6OnJlc3VsdDo6UmVzdWx0PFQsRT46OnVud3JhcDo6aDA0ZTY4NWU4YmZkYWU3NWK7Aks8YW55aG93OjplcnJvcjo6RXJyb3JJbXBsPEU+IGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aDgyMjk5ZTAyZmZhM2VmMzK8AlE8YWxsb2M6OnZlYzo6ZHJhaW46OkRyYWluPFQsQT4gYXMgY29yZTo6b3BzOjpkcm9wOjpEcm9wPjo6ZHJvcDo6aDMyNTgzNDM4ZTVmYTA2N2K9Aktjb3JlOjpmbXQ6OmZsb2F0Ojo8aW1wbCBjb3JlOjpmbXQ6OkRpc3BsYXkgZm9yIGY2ND46OmZtdDo6aGI3OGJiMThmZGUwNjE5NWG+Aks8YW55aG93OjplcnJvcjo6RXJyb3JJbXBsPEU+IGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aGJmMWEyYzIxYjY3ZDJlODC/AkFoYXNoYnJvd246OnJhdzo6RmFsbGliaWxpdHk6OmNhcGFjaXR5X292ZXJmbG93OjpoMTE0ODBmNGE2YjdkYWQxNcACLWNvcmU6OnBhbmlja2luZzo6cGFuaWNfZm10OjpoM2UxZGQzZDA4Mjg4NTY5ZcECeGRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpfOjo8aW1wbCBzZXJkZTo6c2VyOjpTZXJpYWxpemUgZm9yIGRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpXb3JkPjo6c2VyaWFsaXplOjpoOTZhNzc2MmI5MjhlN2RiN8ICNGFsbG9jOjpyYXdfdmVjOjpjYXBhY2l0eV9vdmVyZmxvdzo6aDk1NmViZTZiZjA0YjljNzPDAjJ3YXNtX2JpbmRnZW46OmJpZ2ludF9nZXRfYXNfaTY0OjpoOTdhNzkzNjcyYTg3N2FmMsQCRGNvbnNvbGVfc3RhdGljX3RleHQ6OmFuc2k6OlBlcmZvcm1lcjo6bWFya19lc2NhcGU6Omg2OWYxYjY3N2EyNTdiYzBjxQI4c3RkOjp0aHJlYWQ6OlRocmVhZElkOjpuZXc6OmV4aGF1c3RlZDo6aDQyODYyODIzNWRhNDQ4MmTGAm48c2VyZGVfd2FzbV9iaW5kZ2VuOjpzZXI6Ok9iamVjdFNlcmlhbGl6ZXIgYXMgc2VyZGU6OnNlcjo6U2VyaWFsaXplU3RydWN0Pjo6c2VyaWFsaXplX2ZpZWxkOjpoODlkYTI0ODM4MzAyNGNkMMcCWzxjb3JlOjpzdHI6Oml0ZXI6OkNoYXJzIGFzIGNvcmU6Oml0ZXI6OnRyYWl0czo6aXRlcmF0b3I6Okl0ZXJhdG9yPjo6bmV4dDo6aDYzZWE3N2U5MDlhYTgxNTjIAjFjb3JlOjpwYW5pY2tpbmc6OmFzc2VydF9mYWlsZWQ6Omg3OGU2NDhkYTU5YTE1YzdkyQJPPHN0ZDo6c3luYzo6cG9pc29uOjpQb2lzb25FcnJvcjxUPiBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoZTRkZTZhZDQ0MWE3NjFlY8oCSDxjb3JlOjpvcHRpb246Ok9wdGlvbjxUPiBhcyBjb3JlOjpjbXA6OlBhcnRpYWxFcT46OmVxOjpoYWJmMzcyZDFmYTM0MjdlMcsCMWNvcmU6OnBhbmlja2luZzo6YXNzZXJ0X2ZhaWxlZDo6aDhiN2E3MzE1N2ZhYjg5NjXMAsoFY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPG1vbmNoOjpvcjxkZW5vX3Rhc2tfc2hlbGw6OnBhcnNlcjo6UmVkaXJlY3RPcCxtb25jaDo6bWFwPCZzdHIsZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OlJlZGlyZWN0T3AsbW9uY2g6OnRhZzwmc3RyPjo6e3tjbG9zdXJlfX0sZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OnBhcnNlX3JlZGlyZWN0Ojp7e2Nsb3N1cmV9fT46Ont7Y2xvc3VyZX19LG1vbmNoOjpvcjxkZW5vX3Rhc2tfc2hlbGw6OnBhcnNlcjo6UmVkaXJlY3RPcCxtb25jaDo6bWFwPCZzdHIsZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OlJlZGlyZWN0T3AsbW9uY2g6Om9yPCZzdHIsbW9uY2g6OnRhZzwmc3RyPjo6e3tjbG9zdXJlfX0sbW9uY2g6OnRhZzwmc3RyPjo6e3tjbG9zdXJlfX0+Ojp7e2Nsb3N1cmV9fSxkZW5vX3Rhc2tfc2hlbGw6OnBhcnNlcjo6cGFyc2VfcmVkaXJlY3Q6Ont7Y2xvc3VyZX19Pjo6e3tjbG9zdXJlfX0sbW9uY2g6Om1hcDxjaGFyLGRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpSZWRpcmVjdE9wLG1vbmNoOjppZl90cnVlPGNoYXIsbW9uY2g6Om5leHRfY2hhcixtb25jaDo6Y2g6Ont7Y2xvc3VyZX19Pjo6e3tjbG9zdXJlfX0sZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OnBhcnNlX3JlZGlyZWN0Ojp7e2Nsb3N1cmV9fT46Ont7Y2xvc3VyZX19Pjo6e3tjbG9zdXJlfX0+Ojp7e2Nsb3N1cmV9fT46Omg2MzQyNDdhODU0ZTRjMjMwzQIxY29yZTo6cGFuaWNraW5nOjphc3NlcnRfZmFpbGVkOjpoYmI2YzgwY2RjNTA2NTBhN84CTjxzZXJkZV93YXNtX2JpbmRnZW46OmVycm9yOjpFcnJvciBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoNDdkZDI5ODQ0YzA5YmVkY88CSDxhbGxvYzo6dmVjOjpWZWM8VCxBPiBhcyBjb3JlOjpvcHM6OmRyb3A6OkRyb3A+Ojpkcm9wOjpoNmQzOWFiYTE2YmJiZTlhOdACM2FsbG9jOjpzeW5jOjpBcmM8VCxBPjo6ZHJvcF9zbG93OjpoZjIyMTZjNGMwZjA3MTBhZdECRXNlcmRlX3dhc21fYmluZGdlbjo6ZGU6OkRlc2VyaWFsaXplcjo6aW52YWxpZF90eXBlOjpoNjEzY2RlN2Y1NDFmZWYzMtICEl9fd2JpbmRnZW5fcmVhbGxvY9MCQGFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPjo6cmVzZXJ2ZV9mb3JfcHVzaDo6aDNiYmJhMWE2N2VmZTE0ZGPUAjo8Jm11dCBXIGFzIGNvcmU6OmZtdDo6V3JpdGU+Ojp3cml0ZV9mbXQ6OmhlNDgxNjMxM2YyNGNlM2Qy1QJIY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPFtjb25zb2xlX3N0YXRpY190ZXh0OjpMaW5lXT46Omg2ZDQ0ZTM0NjYxMjcyNDc11gJAYWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+OjpyZXNlcnZlX2Zvcl9wdXNoOjpoNWUzYjAzMzJiNGEwNmY4ZtcCMHZ0ZTo6UGFyc2VyPF8+OjppbnRlcm1lZGlhdGVzOjpoZTFiMjQ5MDk1OGVkNDA0MtgCOjwmbXV0IFcgYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX2ZtdDo6aDUwZWIyZGEyMTE1Yjg3OTTZAkBhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT46OnJlc2VydmVfZm9yX3B1c2g6OmhkMzQ1YTk0YmY3NWNjOTll2gI6PCZtdXQgVyBhcyBjb3JlOjpmbXQ6OldyaXRlPjo6d3JpdGVfZm10OjpoOGMwMWEyZTFjNDc0MDUzMNsCLmNvcmU6OmZtdDo6V3JpdGU6OndyaXRlX2ZtdDo6aDRiNWZhYjExNmEwODM5OGbcAi5jb3JlOjpmbXQ6OldyaXRlOjp3cml0ZV9mbXQ6OmhlM2MyZGI3ODA0N2IwMGEy3QIuY29yZTo6Zm10OjpXcml0ZTo6d3JpdGVfZm10OjpoODU1NjcxM2E4ZDMzZTk3M94CZ3NlcmRlOjpzZXI6OmltcGxzOjo8aW1wbCBzZXJkZTo6c2VyOjpTZXJpYWxpemUgZm9yIGFsbG9jOjpzdHJpbmc6OlN0cmluZz46OnNlcmlhbGl6ZTo6aDYxMTFhY2JkZjI1YzFlNzDfAlNjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8ZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OlBpcGVsaW5lSW5uZXI+OjpoZDk1NDE0YjZkNzc4NGQ3ZOACUmNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxkZW5vX3Rhc2tfc2hlbGw6OnBhcnNlcjo6Q29tbWFuZElubmVyPjo6aGE3NWJiMzc3YzViNGQ4MTHhAjp3YXNtX2JpbmRnZW46Ol9fcnQ6OnRha2VfbGFzdF9leGNlcHRpb246OmhmZWNjM2U0ZTE2MjQyYTgw4gI2YWxsb2M6OmFsbG9jOjpHbG9iYWw6OmFsbG9jX2ltcGw6OmhmZjJmNWE4ODkzODYyMjRkLjE54wJKY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPG1vbmNoOjpQYXJzZUVycm9yRmFpbHVyZUVycm9yPjo6aGI0YzY3MmUyNDExMzhhNjbkAjdzZXJkZV93YXNtX2JpbmRnZW46OmRlOjpjb252ZXJ0X3BhaXI6Omg4NWU1OTcxMDFkOTU3YzE25QI/cnNfbGliOjpzdGF0aWNfdGV4dF9yZW5kZXJfb25jZTo6e3tjbG9zdXJlfX06Omg3NzM2YjAxZDVhMDUyZjU45gJIY29yZTo6b3BzOjpmdW5jdGlvbjo6Rm5PbmNlOjpjYWxsX29uY2V7e3Z0YWJsZS5zaGltfX06OmgxMjM5NGFhMzg4NTU2NGZl5wJGY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGFueWhvdzo6Y2hhaW46OkNoYWluU3RhdGU+OjpoYzZjZDEzNTBmMTUyYzMyNOgCYWNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxbYWxsb2M6OnZlYzo6VmVjPGRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpXb3JkUGFydD5dPjo6aDM2NDg2OGU1ZDgwN2IxYWbpAlBjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8W2Rlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpXb3JkUGFydF0+OjpoM2IwYTkxODdiMTU0Y2E0N+oCQGNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxzdGQ6OnRocmVhZDo6VGhyZWFkPjo6aDcxYTRlOTU2NTdhYWVhNzbrAlg8YWxsb2M6OnZlYzo6aW50b19pdGVyOjpJbnRvSXRlcjxULEE+IGFzIGNvcmU6Om9wczo6ZHJvcDo6RHJvcD46OmRyb3A6Omg4Nzk4YTYxZTQ0M2JkOGMz7AI7Y29yZTo6c2xpY2U6OjxpbXBsIFtUXT46OmNvcHlfZnJvbV9zbGljZTo6aDY3ODc5ZWRkMTA5NDk0YzftAk5jb3JlOjpmbXQ6Om51bTo6aW1wOjo8aW1wbCBjb3JlOjpmbXQ6OkRpc3BsYXkgZm9yIGk2ND46OmZtdDo6aGE5ZTQzZGI0YjQ5NjdlYzPuAlg8YWxsb2M6OnZlYzo6aW50b19pdGVyOjpJbnRvSXRlcjxULEE+IGFzIGNvcmU6Om9wczo6ZHJvcDo6RHJvcD46OmRyb3A6OmhhNGIxMWY3MDA2OGMwYjRh7wKCAWNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxjb3JlOjpyZXN1bHQ6OlJlc3VsdDwoJnN0cixkZW5vX3Rhc2tfc2hlbGw6OnBhcnNlcjo6UGlwZWxpbmVJbm5lciksbW9uY2g6OlBhcnNlRXJyb3I+Pjo6aGEwYWVjZGQ1ZjEwYWM3NDXwAn1jb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8Y29yZTo6cmVzdWx0OjpSZXN1bHQ8KCZzdHIsZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OlNlcXVlbmNlKSxtb25jaDo6UGFyc2VFcnJvcj4+OjpoNWRiOGJlMmZiNTU2ZjBhOfECP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTRfbXV0OjpoY2I1ODg5Zjc3Y2FmNWRkZfICcWNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxzdGQ6OnN5bmM6Om11dGV4OjpNdXRleEd1YXJkPGNvbnNvbGVfc3RhdGljX3RleHQ6OkNvbnNvbGVTdGF0aWNUZXh0Pj46OmhhMjc5MTE2ODYxNzcyZTk38wIsc3RkOjpwYW5pY2tpbmc6OnBhbmlja2luZzo6aDBjMjNlY2Y4NDk0OTJlZGP0AkY8W0FdIGFzIGNvcmU6OnNsaWNlOjpjbXA6OlNsaWNlUGFydGlhbEVxPEI+Pjo6ZXF1YWw6OmgwYzhkOTI4MTExYjhlNjNl9QI1Y29yZTo6c3RyOjo8aW1wbCBzdHI+OjpzdGFydHNfd2l0aDo6aGNmYWQ4N2Q4YWY0NjRjYjH2Aj93YXNtX2JpbmRnZW46OmNvbnZlcnQ6OmNsb3N1cmVzOjppbnZva2UzX211dDo6aDEwNWUxYjUzMjAyZDRkOTL3Aj93YXNtX2JpbmRnZW46OmNvbnZlcnQ6OmNsb3N1cmVzOjppbnZva2UzX211dDo6aDE1Mzc0ZTQxZjk5MjJkOGX4Aj93YXNtX2JpbmRnZW46OmNvbnZlcnQ6OmNsb3N1cmVzOjppbnZva2UzX211dDo6aDE4YTg3M2I4ZjBmZmE3ODb5Aj93YXNtX2JpbmRnZW46OmNvbnZlcnQ6OmNsb3N1cmVzOjppbnZva2UzX211dDo6aDFiNjM2ZDhlNTY5ZDdkYTj6Aj93YXNtX2JpbmRnZW46OmNvbnZlcnQ6OmNsb3N1cmVzOjppbnZva2UzX211dDo6aDI0ZGE3ZWEzN2Y3ZTkxM2T7Aj93YXNtX2JpbmRnZW46OmNvbnZlcnQ6OmNsb3N1cmVzOjppbnZva2UzX211dDo6aDNhMzM0NjhhZTk1MjE0Yzn8Aj93YXNtX2JpbmRnZW46OmNvbnZlcnQ6OmNsb3N1cmVzOjppbnZva2UzX211dDo6aGI0YzlkNzc1ZTlkY2RhZTf9Aj93YXNtX2JpbmRnZW46OmNvbnZlcnQ6OmNsb3N1cmVzOjppbnZva2UzX211dDo6aGY1M2Q3YzcyOTBkOGQ2ZjT+Al5jb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8c3RkOjpwYW5pY2tpbmc6OmJlZ2luX3BhbmljX2hhbmRsZXI6OlBhbmljUGF5bG9hZD46OmgzMDlhYTViMTlmYzJmODcz/wIxYWxsb2M6OnJhd192ZWM6OmhhbmRsZV9yZXNlcnZlOjpoNWUyMGI1MGMxMGM4YTJlOYADMWFueWhvdzo6ZXJyb3I6Om9iamVjdF9kb3duY2FzdDo6aDIwZTYzNGRhMTRmYzk0Y2OBAzQ8Ym9vbCBhcyBjb3JlOjpmbXQ6OkRpc3BsYXk+OjpmbXQ6OmgyOTY2YWYyODdhZjBlY2Q5ggOOAWNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxjb3JlOjpyZXN1bHQ6OlJlc3VsdDwoJnN0cixhbGxvYzo6dmVjOjpWZWM8ZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OldvcmRQYXJ0PiksbW9uY2g6OlBhcnNlRXJyb3I+Pjo6aGI1MzJhYzgzZDcyOGViNTGDAzFhbnlob3c6OmVycm9yOjpvYmplY3RfZG93bmNhc3Q6OmhiM2NmYTI4MzViN2M2MTkwhAM/d2FzbV9iaW5kZ2VuOjpjb252ZXJ0OjpjbG9zdXJlczo6aW52b2tlMl9tdXQ6OmgzNDVmM2EzZTM1MzBmMzdjhQMzYWxsb2M6OmFsbG9jOjpHbG9iYWw6OmFsbG9jX2ltcGw6OmhmZjJmNWE4ODkzODYyMjRkhgN4Y29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGNvcmU6OnJlc3VsdDo6UmVzdWx0PHJzX2xpYjo6V2FzbVRleHRJdGVtLHNlcmRlX3dhc21fYmluZGdlbjo6ZXJyb3I6OkVycm9yPj46Omg1YjMyY2NhNDhmNTg4MjM5hwNNY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpDb21tYW5kPjo6aDEzODJjYjMzZDBlOTFjNTKIAz5jb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8bW9uY2g6OlBhcnNlRXJyb3I+OjpoMDZlMjFiZmM1NTE5M2Q1YokDP3dhc21fYmluZGdlbjo6Y29udmVydDo6Y2xvc3VyZXM6Omludm9rZTFfbXV0OjpoMzk1Yzg5ZTIwMjUyNmIyZooDN2FsbG9jOjphbGxvYzo6R2xvYmFsOjphbGxvY19pbXBsOjpoZmYyZjVhODg5Mzg2MjI0ZC4zMTSLAwxfX3J1c3RfYWxsb2OMA248c2VyZGVfd2FzbV9iaW5kZ2VuOjpzZXI6Ok9iamVjdFNlcmlhbGl6ZXIgYXMgc2VyZGU6OnNlcjo6U2VyaWFsaXplU3RydWN0Pjo6c2VyaWFsaXplX2ZpZWxkOjpoOTQ5NjExNTcxZTEzYzM5MY0DKm1vbmNoOjpQYXJzZUVycm9yOjpmYWlsOjpoZGZhNTkwZGRiZjY3NTRhOI4DKm1vbmNoOjpQYXJzZUVycm9yOjpmYWlsOjpoYTIzOWZmZTM1ZmI3YjE4OI8DKm1vbmNoOjpQYXJzZUVycm9yOjpmYWlsOjpoYzFhNTNjMWUyZjFhZmRlNJADMGFsbG9jOjphbGxvYzo6ZXhjaGFuZ2VfbWFsbG9jOjpoMGVkZDRjOTFlMWU1NmQ4OZEDbjxzZXJkZV93YXNtX2JpbmRnZW46OnNlcjo6T2JqZWN0U2VyaWFsaXplciBhcyBzZXJkZTo6c2VyOjpTZXJpYWxpemVTdHJ1Y3Q+OjpzZXJpYWxpemVfZmllbGQ6OmgxY2YyZmFkZDFkZGQ1ZWNlkgNuPHNlcmRlX3dhc21fYmluZGdlbjo6c2VyOjpPYmplY3RTZXJpYWxpemVyIGFzIHNlcmRlOjpzZXI6OlNlcmlhbGl6ZVN0cnVjdD46OnNlcmlhbGl6ZV9maWVsZDo6aGQ1Y2E1ZWQzNDQ2MjUwZjiTAzI8VCBhcyBzZXJkZTo6ZGU6OkV4cGVjdGVkPjo6Zm10OjpoMzMyYWU1OWFlNTY5NDU1OJQDMjxUIGFzIHNlcmRlOjpkZTo6RXhwZWN0ZWQ+OjpmbXQ6Omg5YmU3ZWEwNjhhYTBlZjc1lQMyPFQgYXMgc2VyZGU6OmRlOjpFeHBlY3RlZD46OmZtdDo6aGM3MzYzMjFlODY4NGM0MmKWAzI8VCBhcyBzZXJkZTo6ZGU6OkV4cGVjdGVkPjo6Zm10OjpoNTVmZTc0ZDMxZmYwOTVkZpcDMjxUIGFzIHNlcmRlOjpkZTo6RXhwZWN0ZWQ+OjpmbXQ6OmgxZGQwYWY2MWI5NmY2ODUzmAMyPFQgYXMgc2VyZGU6OmRlOjpFeHBlY3RlZD46OmZtdDo6aGFiYTk1MGQ4MDhmN2Q5NmWZA1djb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8YWxsb2M6OnZlYzo6VmVjPGNvbnNvbGVfc3RhdGljX3RleHQ6OkxpbmU+Pjo6aDViNDhmODFiZjgwNTI5YzGaA0g8Y29yZTo6Y2VsbDo6Qm9ycm93TXV0RXJyb3IgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aDQ1YWU2ODgyZTkyNTk3NmGbAz48Y29yZTo6Zm10OjpFcnJvciBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoOWIyNWU4Y2I0MDliM2Y4YpwDX2NvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxhbGxvYzo6dmVjOjpWZWM8ZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OldvcmRQYXJ0Pj46Omg1YjA3YzQ0ODJlOWNiNTg5nQM3YWxsb2M6OmFsbG9jOjpHbG9iYWw6OmFsbG9jX2ltcGw6OmhmZjJmNWE4ODkzODYyMjRkLjIyOJ4DKm1vbmNoOjpQYXJzZUVycm9yOjpmYWlsOjpoNjcxNzY4NTdmNDE5NWY1ZJ8DcGNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxhbGxvYzo6dmVjOjpWZWM8YWxsb2M6OnZlYzo6VmVjPGRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpXb3JkUGFydD4+Pjo6aDZhMmNkZWIwNjRjZDNkYzegA0NzZXJkZV93YXNtX2JpbmRnZW46OmRlOjpEZXNlcmlhbGl6ZXI6OmlzX251bGxpc2g6OmhlZDlhZDA5NDQ1MjRiODJmoQNPPGFsbG9jOjpyYXdfdmVjOjpSYXdWZWM8VCxBPiBhcyBjb3JlOjpvcHM6OmRyb3A6OkRyb3A+Ojpkcm9wOjpoNzM0ZjYwNGY2MzJkZWI4NaIDTzxhbGxvYzo6cmF3X3ZlYzo6UmF3VmVjPFQsQT4gYXMgY29yZTo6b3BzOjpkcm9wOjpEcm9wPjo6ZHJvcDo6aDVmMTAyNWU3NzRjYWRlOGKjA048YW55aG93Ojp3cmFwcGVyOjpNZXNzYWdlRXJyb3I8TT4gYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aGZjYTQzZWQ5YzNhZTNiOGakA088YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+IGFzIGNvcmU6Om9wczo6ZHJvcDo6RHJvcD46OmRyb3A6Omg2YmRiMmJjNWJmNmEzMWNmpQNMY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpFbnZWYXI+OjpoZDgyN2I5MzdhYjQ2NWFiYaYDTmNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxkZW5vX3Rhc2tfc2hlbGw6OnBhcnNlcjo6UmVkaXJlY3Q+OjpoNzAzYjdhNWUzYjY4ZTRjMKcDNGFsbG9jOjphbGxvYzo6ZXhjaGFuZ2VfbWFsbG9jOjpoMGVkZDRjOTFlMWU1NmQ4OS4yMzCoA2Bjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8Y29yZTo6cmVzdWx0OjpSZXN1bHQ8KCZzdHIsY2hhciksbW9uY2g6OlBhcnNlRXJyb3I+Pjo6aDRhNDMwNDY0NDMyMzI0N2GpA0c8YWxsb2M6OnN0cmluZzo6U3RyaW5nIGFzIGNvcmU6OmZtdDo6RGVidWc+OjpmbXQ6OmhhMGM4YWNkYTZiYWFmNDVmLjMxNqoDMDwmVCBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoMWNkODQzMDE0ZTQwNTY0OasDazwmc2VyZGVfd2FzbV9iaW5kZ2VuOjpzZXI6OlNlcmlhbGl6ZXIgYXMgc2VyZGU6OnNlcjo6U2VyaWFsaXplcj46OnNlcmlhbGl6ZV91bml0X3ZhcmlhbnQ6OmhlZjVhNjI4NzJhY2U5ZDE3rANiPCZzZXJkZV93YXNtX2JpbmRnZW46OnNlcjo6U2VyaWFsaXplciBhcyBzZXJkZTo6c2VyOjpTZXJpYWxpemVyPjo6c2VyaWFsaXplX3N0cjo6aDZkMTA2MWRlNmI4YTMzYzKtA1djb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8Y29yZTo6b3B0aW9uOjpPcHRpb248cnNfbGliOjpXYXNtVGV4dEl0ZW0+Pjo6aDQyZjg2NDhmMjMzZTVjZjWuA2ljb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8Y29yZTo6b3B0aW9uOjpPcHRpb248c2VyZGU6Ol9fcHJpdmF0ZTo6ZGU6OmNvbnRlbnQ6OkNvbnRlbnQ+Pjo6aDY3ODYwZGQ1MWQ5Mzk5YjevA5IBY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGNvcmU6Om9wdGlvbjo6T3B0aW9uPChzZXJkZTo6X19wcml2YXRlOjpkZTo6Y29udGVudDo6Q29udGVudCxzZXJkZTo6X19wcml2YXRlOjpkZTo6Y29udGVudDo6Q29udGVudCk+Pjo6aDc4Njg0ZjhkZTY5NWM1NjiwAyxhbnlob3c6OmVycm9yOjpvYmplY3RfcmVmOjpoNDlhNzVhOTYyNmQ3MzIyN7EDRDxjb3JlOjpmbXQ6OkFyZ3VtZW50cyBhcyBjb3JlOjpmbXQ6OkRpc3BsYXk+OjpmbXQ6OmgyMDAyYTFlMDllZjk3ZDk4sgNkY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGNvcmU6Om9wdGlvbjo6T3B0aW9uPGRlbm9fdGFza19zaGVsbDo6cGFyc2VyOjpXb3JkUGFydD4+OjpoZDU4OGJhMGZkZjRhM2RlZLMDLGFueWhvdzo6ZXJyb3I6Om9iamVjdF9yZWY6OmhhMTM0NzIzYmU0NDhmNDVjtANCY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGFsbG9jOjpzdHJpbmc6OlN0cmluZz46OmhmY2Y2YmVmMjg1MGFmOTE2tQMyPCZUIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aGZhMzQwMThmNWRhMjNjYTO2A0Jjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8d2FzbV9iaW5kZ2VuOjpKc1ZhbHVlPjo6aDZhNTNkYTRkY2YzNTJkYzS3A088YWxsb2M6OnJhd192ZWM6OlJhd1ZlYzxULEE+IGFzIGNvcmU6Om9wczo6ZHJvcDo6RHJvcD46OmRyb3A6OmgwN2ZkOWFmMDA3MGJjYjdjuANpY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGFsbG9jOjp2ZWM6OlZlYzxkZW5vX3Rhc2tfc2hlbGw6OnBhcnNlcjo6U2VxdWVudGlhbExpc3RJdGVtPj46OmgzODNkMGM5ZDQ1ZmE4OTMzuQNEY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGFsbG9jOjpib3Jyb3c6OkNvdzxzdHI+Pjo6aGE4MGQxNjc2OTQ5NmRiZWO6A0Fjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8cnNfbGliOjpXYXNtVGV4dEl0ZW0+OjpoN2VkY2NkMTM3OTc1NzkzNbsDT2NvcmU6OmNtcDo6aW1wbHM6OjxpbXBsIGNvcmU6OmNtcDo6UGFydGlhbEVxPCZCPiBmb3IgJkE+OjplcTo6aDIzODM2Mzk0MWFkNzY1ODK8AzI8JlQgYXMgY29yZTo6Zm10OjpEaXNwbGF5Pjo6Zm10OjpoMTE0MTkxMTdkOWQ0MTdmML0DLmNvcmU6OnN0cjo6c2xpY2VfZXJyb3JfZmFpbDo6aGExZTNlMDI5MzVjYzEwNGS+AzA8JlQgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aDMxMDc5MzliZGVmMjI3MWO/A4UBY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGNvcmU6Om9wdGlvbjo6T3B0aW9uPGFsbG9jOjp2ZWM6OmludG9faXRlcjo6SW50b0l0ZXI8ZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OldvcmRQYXJ0Pj4+OjpoZjQ1NWJiMjc5MzQxZWJiMcADQ2NvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxvbmNlX2NlbGw6OmltcDo6V2FpdGVyPjo6aGM0Y2I4YjQ0M2JjMDZiODXBA088YWxsb2M6OmFsbG9jOjpHbG9iYWwgYXMgY29yZTo6YWxsb2M6OkFsbG9jYXRvcj46OmRlYWxsb2NhdGU6OmgxYzQzNjY5OGFjNzZjNjVjwgNDZGVub190YXNrX3NoZWxsOjpwYXJzZXI6OmZhaWxfZm9yX3RyYWlsaW5nX2lucHV0OjpoYTFmMTAyMzNlMmNlZjgwOMMDNndhc21fYmluZGdlbjo6Y2FzdDo6SnNDYXN0OjpkeW5fcmVmOjpoY2Q5ZTY4Njg1YTJhOTIzMsQDSGNvcmU6Om9wczo6ZnVuY3Rpb246OkZuT25jZTo6Y2FsbF9vbmNle3t2dGFibGUuc2hpbX19OjpoZTM4YTc2NjViNDNjMGY0OMUDQHJzX2xpYjo6U1RBVElDX1RFWFQ6Ont7Y2xvc3VyZX19Ojp7e2Nsb3N1cmV9fTo6aDAwMGRlMjJlNzQ2MWVlYTDGA2djb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8Y29yZTo6b3B0aW9uOjpPcHRpb248c2VyZGVfd2FzbV9iaW5kZ2VuOjpkZTo6RGVzZXJpYWxpemVyPj46Omg2NWFmMzYwNjViMTQ0MmRmxwMyPCZUIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aDg4OTAxMzBjMmJmNjYwMDDIA2Zjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8YWxsb2M6OmJveGVkOjpCb3g8c2VyZGU6Ol9fcHJpdmF0ZTo6ZGU6OmNvbnRlbnQ6OkNvbnRlbnQ+Pjo6aGM2NDY0OWI3MTE0MzU2MmXJA3xjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8KHNlcmRlOjpfX3ByaXZhdGU6OmRlOjpjb250ZW50OjpDb250ZW50LHNlcmRlOjpfX3ByaXZhdGU6OmRlOjpjb250ZW50OjpDb250ZW50KT46OmhjYjlmZTJlMjkwNWYxMzliygM6YWxsb2M6OnZlYzo6VmVjPFQsQT46OmV4dGVuZF9mcm9tX3NsaWNlOjpoOTcyZTc5NjMwNTg5YTQ1YssDMmNvcmU6OmVycm9yOjpFcnJvcjo6ZGVzY3JpcHRpb246Omg0NzZiZDJkNWUyMGY3NGZjzAMuY29yZTo6ZXJyb3I6OkVycm9yOjp0eXBlX2lkOjpoMTdkMWEwNTQ0ZjQzNGJjNs0DLmNvcmU6OmVycm9yOjpFcnJvcjo6dHlwZV9pZDo6aGE3YjQ2ODQ1MjViZjVlMDTOAy5hbnlob3c6OmVycm9yOjpvYmplY3RfYm94ZWQ6OmhlODI0ZDhlZTZkMTZiNzQ5zwM6PCZtdXQgVyBhcyBjb3JlOjpmbXQ6OldyaXRlPjo6d3JpdGVfc3RyOjpoYjg0YWJhNzg1ZjJjMGE4ZtADOmFsbG9jOjp2ZWM6OlZlYzxULEE+OjpleHRlbmRfZnJvbV9zbGljZTo6aGU4ODMxMzczZTRkZTYxNDTRAzs8Jm11dCBXIGFzIGNvcmU6OmZtdDo6V3JpdGU+Ojp3cml0ZV9jaGFyOjpoNWY2NDhiZmViZjc3OGRjYdIDMjwmVCBhcyBjb3JlOjpmbXQ6OkRpc3BsYXk+OjpmbXQ6OmhlOGE2MzVkYzc2OGFiMzZl0wNNPHZ0ZTo6VnRVdGY4UmVjZWl2ZXI8UD4gYXMgdXRmOHBhcnNlOjpSZWNlaXZlcj46OmNvZGVwb2ludDo6aDBjM2IyNmU4YmNkOGNjMWTUAzE8VCBhcyBjb3JlOjphbnk6OkFueT46OnR5cGVfaWQ6OmgzNTA5OWNjMDRlMzMxMDlk1QMuY29yZTo6ZXJyb3I6OkVycm9yOjp0eXBlX2lkOjpoNDFlMjliNWE3YmQ3ZGE0OdYDLmNvcmU6OmVycm9yOjpFcnJvcjo6dHlwZV9pZDo6aGY3ODcwZTY0NmVhMzYwYzDXAy1hbnlob3c6OmVycm9yOjpvYmplY3RfZHJvcDo6aDI2N2IwM2RjNzc0Mjc3OTPYAy5hbnlob3c6OmVycm9yOjpvYmplY3RfYm94ZWQ6Omg0ODQ5ZDJjNTNiOWMyYmQ22QNFPGFsbG9jOjpzdHJpbmc6OlN0cmluZyBhcyBjb3JlOjpmbXQ6OkRpc3BsYXk+OjpmbXQ6Omg2ZjNkMzQwYTViZWE3NmUx2gMxPFQgYXMgY29yZTo6YW55OjpBbnk+Ojp0eXBlX2lkOjpoYWU0MTkzNzUwYTE2NzE1NdsDZjxzdGQ6OnBhbmlja2luZzo6YmVnaW5fcGFuaWNfaGFuZGxlcjo6U3RyUGFuaWNQYXlsb2FkIGFzIGNvcmU6OnBhbmljOjpCb3hNZVVwPjo6Z2V0OjpoOWVhZjUzZWE5YTUyOWFhONwDMTxUIGFzIGNvcmU6OmFueTo6QW55Pjo6dHlwZV9pZDo6aGJiYmVmYjBkMDExYTlkZjXdAxRfX3diaW5kZ2VuX2V4bl9zdG9yZd4DD19fd2JpbmRnZW5fZnJlZd8DkQFjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8c3RkOjpzeW5jOjpwb2lzb246OlBvaXNvbkVycm9yPHN0ZDo6c3luYzo6bXV0ZXg6Ok11dGV4R3VhcmQ8Y29uc29sZV9zdGF0aWNfdGV4dDo6Q29uc29sZVN0YXRpY1RleHQ+Pj46OmgxNTk5N2JiNmRjM2E2YWRk4ANJPGFsbG9jOjpzdHJpbmc6OlN0cmluZyBhcyBjb3JlOjpmbXQ6OldyaXRlPjo6d3JpdGVfc3RyOjpoNTRlZGE3NWM3YWJlM2UyNOEDTmNvcmU6OmZtdDo6bnVtOjppbXA6OjxpbXBsIGNvcmU6OmZtdDo6RGlzcGxheSBmb3IgdTMyPjo6Zm10OjpoN2Y1MjZhNGIyZjMyZjc0M+IDOjwmbXV0IFcgYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX3N0cjo6aGRiMDU2YTQ5YWQwZmRjZjDjA0w8YWxsb2M6OnN0cmluZzo6U3RyaW5nIGFzIGNvcmU6OmZtdDo6V3JpdGU+Ojp3cml0ZV9zdHI6Omg1NGVkYTc1YzdhYmUzZTI0LjQ55ANCY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGFsbG9jOjpzdHJpbmc6OlN0cmluZz46OmgyNTk4ODU4NmM3YjFjOTdm5QNYPGFsbG9jOjp2ZWM6OmludG9faXRlcjo6SW50b0l0ZXI8VCxBPiBhcyBjb3JlOjpvcHM6OmRyb3A6OkRyb3A+Ojpkcm9wOjpoMmI0MzMyMjdlNDNiODRhNOYDOWNvcmU6Om9wczo6ZnVuY3Rpb246OkZuT25jZTo6Y2FsbF9vbmNlOjpoNzc3NDg3NzA4MGYzZjlmNecDOjwmbXV0IFcgYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX3N0cjo6aDhmMDAxOTM5MzE4YTcwZTboA05jb3JlOjpmbXQ6Om51bTo6aW1wOjo8aW1wbCBjb3JlOjpmbXQ6OkRpc3BsYXkgZm9yIHU2ND46OmZtdDo6aGMxNjI4MThkMDBhNjcxYzbpAx9fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVy6gMwPCZUIGFzIGNvcmU6OmZtdDo6RGVidWc+OjpmbXQ6Omg0Mzk5ZDg1MDFmMmQzZmIz6wM1c2VyZGVfd2FzbV9iaW5kZ2VuOjpPYmplY3RFeHQ6OnNldDo6aGNlYzAxYmQ0NTBhNmMwOGTsAypqc19zeXM6OkFycmF5Ojppc19hcnJheTo6aGNkZjIwMjAxZGJmNDcyYmTtAzJjb3JlOjpmbXQ6OkZvcm1hdHRlcjo6d3JpdGVfZm10OjpoZDlkZDE0ZDZkYzgwMjkzOO4DOjwmbXV0IFcgYXMgY29yZTo6Zm10OjpXcml0ZT46OndyaXRlX2ZtdDo6aGZlYWZlNTU2YzE2OTE2MTnvAzo8Jm11dCBXIGFzIGNvcmU6OmZtdDo6V3JpdGU+Ojp3cml0ZV9mbXQ6Omg5OTMwNTI4OTg1Zjc3MmYx8ANkY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPGFueWhvdzo6ZXJyb3I6OkVycm9ySW1wbDxtb25jaDo6UGFyc2VFcnJvckZhaWx1cmVFcnJvcj4+OjpoNThlMDNiNjYxYjA4Yjc4OPEDNXdhc21fYmluZGdlbjo6SnNWYWx1ZTo6aXNfZnVuY3Rpb246Omg1OTg2OTMxNjgwZjUxZTQ08gMqd2FzbV9iaW5kZ2VuOjp0aHJvd19zdHI6Omg5NDg4MDQyMDM2ZDM2Y2Qw8wMwPCZUIGFzIGNvcmU6OmZtdDo6RGVidWc+OjpmbXQ6OmhmZGZlNGFjMmY5ZGI4NGJh9AMyPCZUIGFzIGNvcmU6OmZtdDo6RGlzcGxheT46OmZtdDo6aDgzMmUxMTYzZDM4M2NiZDf1AzA8JlQgYXMgY29yZTo6Zm10OjpEZWJ1Zz46OmZtdDo6aGE4NGFjZDQwZTE4MmRjZGL2AwZtZW1zZXT3AwZtZW1jcHn4AwdtZW1tb3Zl+QMGbWVtY21w+gNBc3RkOjpwYW5pY2tpbmc6OnBhbmljX2NvdW50Ojppc196ZXJvX3Nsb3dfcGF0aDo6aDljMTM3MzM0ZTZiYmVmOWb7A01jb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8c2VyZGVfd2FzbV9iaW5kZ2VuOjplcnJvcjo6RXJyb3I+OjpoZmUzN2UzYzI2M2Q1ZWYyNvwDSDxhbGxvYzo6dmVjOjpWZWM8VCxBPiBhcyBjb3JlOjpvcHM6OmRyb3A6OkRyb3A+Ojpkcm9wOjpoNmQ1MDM5ZTc5MTM4NjNkYv0DLGNvcmU6OmVycm9yOjpFcnJvcjo6Y2F1c2U6Omg2NGQwMzc1YWQ4YWQzYmRk/gNJPGFueWhvdzo6ZXJyb3I6OkVycm9ySW1wbDxFPiBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoNzIxYjNiN2YwNzM5MTEyM/8DUDxhbnlob3c6OndyYXBwZXI6Ok1lc3NhZ2VFcnJvcjxNPiBhcyBjb3JlOjpmbXQ6OkRpc3BsYXk+OjpmbXQ6OmhiZTExM2UwODk2MWRhMjkzgARJPGFueWhvdzo6ZXJyb3I6OkVycm9ySW1wbDxFPiBhcyBjb3JlOjpmbXQ6OkRlYnVnPjo6Zm10OjpoNmExOWIyYWZlNGJlZmVmYYEEJWpzX3N5czo6QXJyYXk6OmdldDo6aGMwZjgyNzczN2ZmYWJlM2KCBElzdGQ6OnN5c19jb21tb246OmJhY2t0cmFjZTo6X19ydXN0X2VuZF9zaG9ydF9iYWNrdHJhY2U6Omg5OGFjNjFhNmFiYmZmN2U5gwQtYW55aG93OjplcnJvcjo6b2JqZWN0X2Ryb3A6Omg0NjBiZTQ5YTQzMzE1MDRjhAQzYW55aG93OjplcnJvcjo6b2JqZWN0X2Ryb3BfZnJvbnQ6OmgxYjlhYjFjMWUyYTM1N2Y1hQQtanNfc3lzOjpVaW50OEFycmF5OjpsZW5ndGg6Omg0NWFkZDcxZjdiY2U5ZmMzhgQKcnVzdF9wYW5pY4cEgwFjb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8c2VyZGU6OmRlOjppbXBsczo6PGltcGwgc2VyZGU6OmRlOjpEZXNlcmlhbGl6ZSBmb3IgdTE2Pjo6ZGVzZXJpYWxpemU6OlByaW1pdGl2ZVZpc2l0b3I+OjpoNDRhODRhODliNjA0ZDhkNIgEMmNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTwmYm9vbD46Omg5ZGNjMjM4YmIwNzczMmFiiQQuY29yZTo6ZXJyb3I6OkVycm9yOjpwcm92aWRlOjpoNTJiOGViZGYwODNiODFhN4oEUGNvcmU6OnB0cjo6ZHJvcF9pbl9wbGFjZTxhcnJheXZlYzo6ZXJyb3JzOjpDYXBhY2l0eUVycm9yPHU4Pj46Omg5ZDgwOGM5Mzc3NTE0ZjAyiwQvY29yZTo6cHRyOjpkcm9wX2luX3BsYWNlPCgpPjo6aDhiMjEwZjViNjljMzM4MjiMBGljb3JlOjpwdHI6OmRyb3BfaW5fcGxhY2U8Jm11dCBzdGQ6OmlvOjpXcml0ZTo6d3JpdGVfZm10OjpBZGFwdGVyPGFsbG9jOjp2ZWM6OlZlYzx1OD4+Pjo6aGU3MDZhMTE5NjAwZDVjYTgAbwlwcm9kdWNlcnMCCGxhbmd1YWdlAQRSdXN0AAxwcm9jZXNzZWQtYnkDBXJ1c3RjHTEuNzMuMCAoY2M2NmFkNDY4IDIwMjMtMTAtMDMpBndhbHJ1cwYwLjIwLjMMd2FzbS1iaW5kZ2VuBjAuMi45MAAsD3RhcmdldF9mZWF0dXJlcwIrD211dGFibGUtZ2xvYmFscysIc2lnbi1leHQ=    "
  );
  const wasmModule = new WebAssembly.Module(wasmBytes);
  return new WebAssembly.Instance(wasmModule, imports);
}
function base64decode(b64) {
  const binString = atob(b64);
  const size = binString.length;
  const bytes = new Uint8Array(size);
  for (let i = 0; i < size; i++) {
    bytes[i] = binString.charCodeAt(i);
  }
  return bytes;
}
var wasmInstance = instantiate();
var refreshItems = {
  [
    0
    /* ProgressBars */
  ]: void 0,
  [
    1
    /* Selection */
  ]: void 0
};
function setItems(kind, items, size) {
  refreshItems[kind] = items;
  refresh(size);
}
function refresh(size) {
  if (!isOutputTty) {
    return;
  }
  const items = Object.values(refreshItems).flatMap((items2) => items2 != null ? items2 : []);
  staticText.set(items, size);
}
function logAboveStaticText(inner, providedSize) {
  if (!isOutputTty) {
    inner();
    return;
  }
  const size = providedSize != null ? providedSize : safeConsoleSize();
  if (size != null) {
    staticText.clear(size);
  }
  inner();
  refresh(size);
}
function logOnce(items, size) {
  logAboveStaticText(() => {
    staticText.outputItems(items, size);
  }, size);
}
var logger = {
  setItems,
  logOnce,
  logAboveStaticText
};
var encoder2 = new TextEncoder();
var decoder = new TextDecoder();
function readKeys() {
  return __asyncGenerator(this, null, function* () {
    const { strip_ansi_codes: strip_ansi_codes2 } = wasmInstance;
    while (true) {
      const buf = new Uint8Array(8);
      const byteCount = yield new __await(Deno.stdin.read(buf));
      if (byteCount == null) {
        break;
      }
      if (byteCount === 3) {
        if (buf[0] === 27 && buf[1] === 91) {
          if (buf[2] === 65) {
            yield 0;
            continue;
          } else if (buf[2] === 66) {
            yield 1;
            continue;
          } else if (buf[2] === 67) {
            yield 3;
            continue;
          } else if (buf[2] === 68) {
            yield 2;
            continue;
          }
        }
      } else if (byteCount === 1) {
        if (buf[0] === 3) {
          break;
        } else if (buf[0] === 13) {
          yield 4;
          continue;
        } else if (buf[0] === 32) {
          yield 5;
          continue;
        } else if (buf[0] === 127) {
          yield 6;
          continue;
        }
      }
      const text = strip_ansi_codes2(decoder.decode(buf.slice(0, byteCount != null ? byteCount : 0)));
      if (text.length > 0) {
        yield text;
      }
    }
  });
}
function hideCursor() {
  Deno.stderr.writeSync(encoder2.encode("\x1B[?25l"));
}
function showCursor() {
  Deno.stderr.writeSync(encoder2.encode("\x1B[?25h"));
}
var isOutputTty = safeConsoleSize() != null && isTerminal(Deno.stderr);
function isTerminal(pipe) {
  if (typeof pipe.isTerminal === "function") {
    return pipe.isTerminal();
  } else if (pipe.rid != null && typeof Deno.isatty === "function") {
    return Deno.isatty(pipe.rid);
  } else {
    throw new Error("Unsupported pipe.");
  }
}
function resultOrExit(result) {
  if (result == null) {
    Deno.exit(130);
  } else {
    return result;
  }
}
function createSelection(options) {
  if (!isOutputTty || !isTerminal(Deno.stdin)) {
    throw new Error(`Cannot prompt when not a tty. (Prompt: '${options.message}')`);
  }
  if (safeConsoleSize() == null) {
    throw new Error(`Cannot prompt when can't get console size. (Prompt: '${options.message}')`);
  }
  return ensureSingleSelection(() => __async(this, null, function* () {
    logger.setItems(1, options.render());
    try {
      for (var iter = __forAwait(readKeys()), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
        const key = temp.value;
        const keyResult = options.onKey(key);
        if (keyResult != null) {
          const size = Deno.consoleSize();
          logger.setItems(1, [], size);
          if (options.noClear) {
            logger.logOnce(options.render(), size);
          }
          return keyResult;
        }
        logger.setItems(1, options.render());
      }
    } catch (temp) {
      error = [temp];
    } finally {
      try {
        more && (temp = iter.return) && (yield temp.call(iter));
      } finally {
        if (error)
          throw error[0];
      }
    }
    logger.setItems(1, []);
    return void 0;
  }));
}
var lastPromise = Promise.resolve();
function ensureSingleSelection(action) {
  const currentLastPromise = lastPromise;
  const currentPromise = (() => __async(this, null, function* () {
    try {
      yield currentLastPromise;
    } catch (e) {
    }
    hideCursor();
    try {
      Deno.stdin.setRaw(true);
      try {
        return yield action();
      } finally {
        Deno.stdin.setRaw(false);
      }
    } finally {
      showCursor();
    }
  }))();
  lastPromise = currentPromise;
  return currentPromise;
}
function safeConsoleSize() {
  try {
    return Deno.consoleSize();
  } catch (e) {
    return void 0;
  }
}
var staticText = {
  set(items, size) {
    if (items.length === 0) {
      return this.clear(size);
    }
    const { columns, rows } = size != null ? size : Deno.consoleSize();
    const newText = wasmInstance.static_text_render_text(items, columns, rows);
    if (newText != null) {
      Deno.stderr.writeSync(encoder2.encode(newText));
    }
  },
  outputItems(items, size) {
    const { columns, rows } = size != null ? size : Deno.consoleSize();
    const newText = wasmInstance.static_text_render_once(items, columns, rows);
    if (newText != null) {
      Deno.stderr.writeSync(encoder2.encode(newText + "\n"));
    }
  },
  clear(size) {
    const { columns, rows } = size != null ? size : Deno.consoleSize();
    const newText = wasmInstance.static_text_clear_text(columns, rows);
    if (newText != null) {
      Deno.stderr.writeSync(encoder2.encode(newText));
    }
  }
};
function confirm(optsOrMessage, options) {
  return maybeConfirm(optsOrMessage, options).then(resultOrExit);
}
function maybeConfirm(optsOrMessage, options) {
  const opts = typeof optsOrMessage === "string" ? __spreadValues({ message: optsOrMessage }, options) : optsOrMessage;
  return createSelection(__spreadValues({
    message: opts.message,
    noClear: opts.noClear
  }, innerConfirm(opts)));
}
function innerConfirm(opts) {
  const drawState = {
    title: opts.message,
    default: opts.default,
    inputText: "",
    hasCompleted: false
  };
  return {
    render: () => render(drawState),
    onKey: (key) => {
      switch (key) {
        case "Y":
        case "y":
          drawState.inputText = "Y";
          break;
        case "N":
        case "n":
          drawState.inputText = "N";
          break;
        case 6:
          drawState.inputText = "";
          break;
        case 4:
          if (drawState.inputText.length === 0) {
            if (drawState.default == null) {
              return void 0;
            }
            drawState.inputText = drawState.default ? "Y" : "N";
          }
          drawState.hasCompleted = true;
          return drawState.inputText === "Y" ? true : drawState.inputText === "N" ? false : drawState.default;
      }
    }
  };
}
function render(state) {
  return [
    bold2(blue(state.title)) + " " + (state.hasCompleted ? "" : state.default == null ? "(Y/N) " : state.default ? "(Y/n) " : "(y/N) ") + state.inputText + (state.hasCompleted ? "" : "\u2588")
    // (block character)
  ];
}
function multiSelect(opts) {
  return maybeMultiSelect(opts).then(resultOrExit);
}
function maybeMultiSelect(opts) {
  if (opts.options.length === 0) {
    throw new Error(`You must provide at least one option. (Prompt: '${opts.message}')`);
  }
  return createSelection(__spreadValues({
    message: opts.message,
    noClear: opts.noClear
  }, innerMultiSelect(opts)));
}
function innerMultiSelect(opts) {
  const drawState = {
    title: opts.message,
    activeIndex: 0,
    items: opts.options.map((option) => {
      var _a2;
      if (typeof option === "string") {
        option = {
          text: option
        };
      }
      return {
        selected: (_a2 = option.selected) != null ? _a2 : false,
        text: option.text
      };
    }),
    hasCompleted: false
  };
  return {
    render: () => render2(drawState),
    onKey: (key) => {
      switch (key) {
        case 0:
          if (drawState.activeIndex === 0) {
            drawState.activeIndex = drawState.items.length - 1;
          } else {
            drawState.activeIndex--;
          }
          break;
        case 1:
          drawState.activeIndex = (drawState.activeIndex + 1) % drawState.items.length;
          break;
        case 5: {
          const item = drawState.items[drawState.activeIndex];
          item.selected = !item.selected;
          break;
        }
        case 4:
          drawState.hasCompleted = true;
          return drawState.items.map((value, index) => [value, index]).filter(([value]) => value.selected).map(([, index]) => index);
      }
      return void 0;
    }
  };
}
function render2(state) {
  const items = [];
  items.push(bold2(blue(state.title)));
  if (state.hasCompleted) {
    if (state.items.some((i) => i.selected)) {
      for (const item of state.items) {
        if (item.selected) {
          items.push({
            text: ` - ${item.text}`,
            indent: 3
          });
        }
      }
    } else {
      items.push(italic(" <None>"));
    }
  } else {
    for (const [i, item] of state.items.entries()) {
      const prefix = i === state.activeIndex ? "> " : "  ";
      items.push({
        text: `${prefix}[${item.selected ? "x" : " "}] ${item.text}`,
        indent: 6
      });
    }
  }
  return items;
}
var units = ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"];
function humanDownloadSize(byteCount, totalBytes) {
  const exponent = Math.min(units.length - 1, Math.floor(Math.log(totalBytes) / Math.log(1024)));
  const unit = units[exponent];
  const prettyBytes = (Math.floor(byteCount / Math.pow(1024, exponent) * 100) / 100).toFixed(exponent === 0 ? 0 : 2);
  return `${prettyBytes} ${unit}`;
}
var intervalMs = 60;
var progressBars = [];
var renderIntervalId;
function addProgressBar(render5) {
  const pb = {
    render: render5
  };
  progressBars.push(pb);
  if (renderIntervalId == null && isOutputTty) {
    renderIntervalId = setInterval(forceRender, intervalMs);
  }
  return pb;
}
function removeProgressBar(pb) {
  const index = progressBars.indexOf(pb);
  if (index === -1) {
    return false;
  }
  progressBars.splice(index, 1);
  if (progressBars.length === 0) {
    clearInterval(renderIntervalId);
    logger.setItems(0, []);
    renderIntervalId = void 0;
  }
  return true;
}
function forceRender() {
  if (!isShowingProgressBars()) {
    return;
  }
  const size = Deno.consoleSize();
  const items = progressBars.map((p) => p.render(size)).flat();
  logger.setItems(0, items, size);
}
function isShowingProgressBars() {
  return isOutputTty && progressBars.length > 0;
}
var ProgressBar = (_i = class {
  /** @internal */
  constructor(onLog, opts) {
    __privateAdd(this, _ProgressBar_instances);
    __privateAdd(this, _state);
    __privateAdd(this, _pb);
    __privateAdd(this, _withCount, 0);
    __privateAdd(this, _onLog);
    __privateAdd(this, _noClear);
    var _a2;
    if (arguments.length !== 2) {
      throw new Error("Invalid usage. Create the progress bar via `$.progress`.");
    }
    __privateSet(this, _onLog, onLog);
    __privateSet(this, _state, {
      message: opts.message,
      prefix: opts.prefix,
      length: opts.length,
      currentPos: 0,
      tickCount: 0,
      hasCompleted: false,
      kind: "raw"
    });
    __privateSet(this, _pb, addProgressBar((size) => {
      __privateGet(this, _state).tickCount++;
      return renderProgressBar(__privateGet(this, _state), size);
    }));
    __privateSet(this, _noClear, (_a2 = opts.noClear) != null ? _a2 : false);
    __privateMethod(this, _ProgressBar_instances, logIfNonInteractive_fn).call(this);
  }
  /** Sets the prefix message/word, which will be displayed in green. */
  prefix(prefix) {
    __privateGet(this, _state).prefix = prefix;
    if (prefix != null && prefix.length > 0) {
      __privateMethod(this, _ProgressBar_instances, logIfNonInteractive_fn).call(this);
    }
    return this;
  }
  /** Sets the message the progress bar will display after the prefix in white. */
  message(message) {
    __privateGet(this, _state).message = message;
    if (message != null && message.length > 0) {
      __privateMethod(this, _ProgressBar_instances, logIfNonInteractive_fn).call(this);
    }
    return this;
  }
  /** Sets how to format the length values. */
  kind(kind) {
    __privateGet(this, _state).kind = kind;
    return this;
  }
  /** Sets the current position of the progress bar. */
  position(position) {
    __privateGet(this, _state).currentPos = position;
    return this;
  }
  /** Increments the position of the progress bar. */
  increment(inc = 1) {
    __privateGet(this, _state).currentPos += inc;
    return this;
  }
  /** Sets the total length of the progress bar. */
  length(size) {
    __privateGet(this, _state).length = size;
    return this;
  }
  /** Whether the progress bar should output a summary when finished. */
  noClear(value = true) {
    __privateSet(this, _noClear, value);
    return this;
  }
  /** Forces a render to the console. */
  forceRender() {
    return forceRender();
  }
  /** Finish showing the progress bar. */
  finish() {
    if (removeProgressBar(__privateGet(this, _pb))) {
      __privateGet(this, _state).hasCompleted = true;
      if (__privateGet(this, _noClear)) {
        const text = renderProgressBar(__privateGet(this, _state), safeConsoleSize()).map((item) => typeof item === "string" ? item : item.text).join("\n");
        __privateGet(this, _onLog).call(this, text);
      }
    }
  }
  with(action) {
    __privateWrapper(this, _withCount)._++;
    let wasAsync = false;
    try {
      const result = action();
      if (result instanceof Promise) {
        wasAsync = true;
        return result.finally(() => {
          __privateMethod(this, _ProgressBar_instances, decrementWith_fn).call(this);
        });
      } else {
        return result;
      }
    } finally {
      if (!wasAsync) {
        __privateMethod(this, _ProgressBar_instances, decrementWith_fn).call(this);
      }
    }
  }
}, _state = new WeakMap(), _pb = new WeakMap(), _withCount = new WeakMap(), _onLog = new WeakMap(), _noClear = new WeakMap(), _ProgressBar_instances = new WeakSet(), logIfNonInteractive_fn = function() {
  var _a2, _b2;
  if (isOutputTty) {
    return;
  }
  let text = (_a2 = __privateGet(this, _state).prefix) != null ? _a2 : "";
  if (text.length > 0) {
    text += " ";
  }
  text += (_b2 = __privateGet(this, _state).message) != null ? _b2 : "";
  if (text.length > 0) {
    __privateGet(this, _onLog).call(this, text);
  }
}, decrementWith_fn = function() {
  __privateWrapper(this, _withCount)._--;
  if (__privateGet(this, _withCount) === 0) {
    this.finish();
  }
}, _i);
var tickStrings = ["\u280B", "\u2819", "\u2839", "\u2838", "\u283C", "\u2834", "\u2826", "\u2827", "\u2807", "\u280F"];
function renderProgressBar(state, size) {
  if (state.hasCompleted) {
    let text = "";
    if (state.prefix != null) {
      text += green2(state.prefix);
    }
    if (state.message != null) {
      if (text.length > 0) {
        text += " ";
      }
      text += state.message;
    }
    return text.length > 0 ? [text] : [];
  } else if (state.length == null || state.length === 0) {
    let text = green2(tickStrings[Math.abs(state.tickCount) % tickStrings.length]);
    if (state.prefix != null) {
      text += ` ${green2(state.prefix)}`;
    }
    if (state.message != null) {
      text += ` ${state.message}`;
    }
    return [text];
  } else {
    let firstLine = "";
    if (state.prefix != null) {
      firstLine += green2(state.prefix);
    }
    if (state.message != null) {
      if (firstLine.length > 0) {
        firstLine += " ";
      }
      firstLine += state.message;
    }
    const percent = Math.min(state.currentPos / state.length, 1);
    const currentPosText = state.kind === "bytes" ? humanDownloadSize(state.currentPos, state.length) : state.currentPos.toString();
    const lengthText = state.kind === "bytes" ? humanDownloadSize(state.length, state.length) : state.length.toString();
    const maxWidth = size == null ? 75 : Math.max(10, Math.min(75, size.columns - 5));
    const sameLineTextWidth = 6 + lengthText.length * 2 + state.length.toString().length * 2;
    const totalBars = Math.max(1, maxWidth - sameLineTextWidth);
    const completedBars = Math.floor(totalBars * percent);
    let secondLine = "";
    secondLine += "[";
    if (completedBars != totalBars) {
      if (completedBars > 0) {
        secondLine += cyan("#".repeat(completedBars - 1) + ">");
      }
      secondLine += blue("-".repeat(totalBars - completedBars));
    } else {
      secondLine += cyan("#".repeat(completedBars));
    }
    secondLine += `] (${currentPosText}/${lengthText})`;
    const result = [];
    if (firstLine.length > 0) {
      result.push(firstLine);
    }
    result.push(secondLine);
    return result;
  }
}
var defaultMask = { char: "*", lastVisible: false };
function prompt(optsOrMessage, options) {
  return maybePrompt(optsOrMessage, options).then(resultOrExit);
}
function maybePrompt(optsOrMessage, options) {
  const opts = typeof optsOrMessage === "string" ? __spreadValues({
    message: optsOrMessage
  }, options) : optsOrMessage;
  return createSelection(__spreadValues({
    message: opts.message,
    noClear: opts.noClear
  }, innerPrompt(opts)));
}
function innerPrompt(opts) {
  var _a2, _b2;
  let mask = (_a2 = opts.mask) != null ? _a2 : false;
  if (mask && typeof mask === "boolean") {
    mask = defaultMask;
  }
  const drawState = {
    title: opts.message,
    inputText: (_b2 = opts.default) != null ? _b2 : "",
    mask,
    hasCompleted: false
  };
  return {
    render: () => render3(drawState),
    onKey: (key) => {
      if (typeof key === "string") {
        drawState.inputText += key;
      } else {
        switch (key) {
          case 5:
            drawState.inputText += " ";
            break;
          case 6:
            drawState.inputText = drawState.inputText.slice(0, -1);
            break;
          case 4:
            drawState.hasCompleted = true;
            return drawState.inputText;
        }
      }
      return void 0;
    }
  };
}
function render3(state) {
  var _a2, _b2;
  let { inputText } = state;
  if (state.mask) {
    const char = (_a2 = state.mask.char) != null ? _a2 : defaultMask.char;
    const lastVisible = (_b2 = state.mask.lastVisible) != null ? _b2 : defaultMask.lastVisible;
    const shouldShowLast = lastVisible && !state.hasCompleted;
    const safeLengthMinusOne = Math.max(0, inputText.length - 1);
    const masked = char.repeat(shouldShowLast ? safeLengthMinusOne : inputText.length);
    const unmasked = shouldShowLast ? inputText.slice(safeLengthMinusOne) : "";
    inputText = `${masked}${unmasked}`;
  }
  return [
    bold2(blue(state.title)) + " " + inputText + (state.hasCompleted ? "" : "\u2588")
    // (block character)
  ];
}
function select(opts) {
  return maybeSelect(opts).then(resultOrExit);
}
function maybeSelect(opts) {
  if (opts.options.length <= 1) {
    throw new Error(`You must provide at least two options. (Prompt: '${opts.message}')`);
  }
  return createSelection(__spreadValues({
    message: opts.message,
    noClear: opts.noClear
  }, innerSelect(opts)));
}
function innerSelect(opts) {
  var _a2;
  const drawState = {
    title: opts.message,
    activeIndex: ((_a2 = opts.initialIndex) != null ? _a2 : 0) % opts.options.length,
    items: opts.options,
    hasCompleted: false
  };
  return {
    render: () => render4(drawState),
    onKey: (key) => {
      switch (key) {
        case 0:
          if (drawState.activeIndex === 0) {
            drawState.activeIndex = drawState.items.length - 1;
          } else {
            drawState.activeIndex--;
          }
          break;
        case 1:
          drawState.activeIndex = (drawState.activeIndex + 1) % drawState.items.length;
          break;
        case 4:
          drawState.hasCompleted = true;
          return drawState.activeIndex;
      }
    }
  };
}
function render4(state) {
  const items = [];
  items.push(bold2(blue(state.title)));
  if (state.hasCompleted) {
    items.push({
      text: ` - ${state.items[state.activeIndex]}`,
      indent: 3
    });
  } else {
    for (const [i, text] of state.items.entries()) {
      const prefix = i === state.activeIndex ? "> " : "  ";
      items.push({
        text: `${prefix}${text}`,
        indent: 4
      });
    }
  }
  return items;
}
var symbols = {
  writable: Symbol.for("dax.writableStream"),
  readable: Symbol.for("dax.readableStream")
};
var TimeoutError = class extends Error {
  constructor(message) {
    super(message);
  }
  get name() {
    return "TimeoutError";
  }
};
function formatMillis(ms) {
  if (ms < 1e3) {
    return `${formatValue(ms)} millisecond${ms === 1 ? "" : "s"}`;
  } else if (ms < 60 * 1e3) {
    const s = ms / 1e3;
    return `${formatValue(s)} ${pluralize("second", s)}`;
  } else {
    const mins = ms / 60 / 1e3;
    return `${formatValue(mins)} ${pluralize("minute", mins)}`;
  }
  function formatValue(value) {
    const text = value.toFixed(2);
    if (text.endsWith(".00")) {
      return value.toFixed(0);
    } else if (text.endsWith("0")) {
      return value.toFixed(1);
    } else {
      return text;
    }
  }
  function pluralize(text, value) {
    const suffix = value === 1 ? "" : "s";
    return text + suffix;
  }
}
function delayToIterator(delay) {
  if (typeof delay !== "number" && typeof delay !== "string") {
    return delay;
  }
  const ms = delayToMs(delay);
  return {
    next() {
      return ms;
    }
  };
}
function delayToMs(delay) {
  if (typeof delay === "number") {
    return delay;
  } else if (typeof delay === "string") {
    const msMatch = delay.match(/^([0-9]+)ms$/);
    if (msMatch != null) {
      return parseInt(msMatch[1], 10);
    }
    const secondsMatch = delay.match(/^([0-9]+\.?[0-9]*)s$/);
    if (secondsMatch != null) {
      return Math.round(parseFloat(secondsMatch[1]) * 1e3);
    }
    const minutesMatch = delay.match(/^([0-9]+\.?[0-9]*)m$/);
    if (minutesMatch != null) {
      return Math.round(parseFloat(minutesMatch[1]) * 1e3 * 60);
    }
    const minutesSecondsMatch = delay.match(/^([0-9]+\.?[0-9]*)m([0-9]+\.?[0-9]*)s$/);
    if (minutesSecondsMatch != null) {
      return Math.round(
        parseFloat(minutesSecondsMatch[1]) * 1e3 * 60 + parseFloat(minutesSecondsMatch[2]) * 1e3
      );
    }
    const hoursMatch = delay.match(/^([0-9]+\.?[0-9]*)h$/);
    if (hoursMatch != null) {
      return Math.round(parseFloat(hoursMatch[1]) * 1e3 * 60 * 60);
    }
    const hoursMinutesMatch = delay.match(/^([0-9]+\.?[0-9]*)h([0-9]+\.?[0-9]*)m$/);
    if (hoursMinutesMatch != null) {
      return Math.round(
        parseFloat(hoursMinutesMatch[1]) * 1e3 * 60 * 60 + parseFloat(hoursMinutesMatch[2]) * 1e3 * 60
      );
    }
    const hoursMinutesSecondsMatch = delay.match(/^([0-9]+\.?[0-9]*)h([0-9]+\.?[0-9]*)m([0-9]+\.?[0-9]*)s$/);
    if (hoursMinutesSecondsMatch != null) {
      return Math.round(
        parseFloat(hoursMinutesSecondsMatch[1]) * 1e3 * 60 * 60 + parseFloat(hoursMinutesSecondsMatch[2]) * 1e3 * 60 + parseFloat(hoursMinutesSecondsMatch[3]) * 1e3
      );
    }
  }
  throw new Error(`Unknown delay value: ${delay}`);
}
function filterEmptyRecordValues(record) {
  const result = {};
  for (const [key, value] of Object.entries(record)) {
    if (value != null) {
      result[key] = value;
    }
  }
  return result;
}
function resolvePath(cwd, arg) {
  return resolve3(isAbsolute3(arg) ? arg : join3(cwd, arg));
}
var Box = class {
  constructor(value) {
    this.value = value;
  }
};
var TreeBox = (_j = class {
  constructor(value) {
    __privateAdd(this, _value);
    __privateSet(this, _value, value);
  }
  getValue() {
    let tree = this;
    while (__privateGet(tree, _value) instanceof _j) {
      tree = __privateGet(tree, _value);
    }
    return __privateGet(tree, _value);
  }
  setValue(value) {
    __privateSet(this, _value, value);
  }
  createChild() {
    return new _j(this);
  }
}, _value = new WeakMap(), _j);
var LoggerTreeBox = class extends TreeBox {
  getValue() {
    const innerValue = super.getValue();
    return (...args) => {
      return logger.logAboveStaticText(() => {
        innerValue(...args);
      });
    };
  }
};
function safeLstat(path) {
  return __async(this, null, function* () {
    try {
      return yield Deno.lstat(path);
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        return void 0;
      } else {
        throw err;
      }
    }
  });
}
function getFileNameFromUrl(url) {
  const parsedUrl = url instanceof URL ? url : new URL(url);
  const fileName = parsedUrl.pathname.split("/").at(-1);
  return (fileName == null ? void 0 : fileName.length) === 0 ? void 0 : fileName;
}
function getExecutableShebangFromPath(path) {
  return __async(this, null, function* () {
    try {
      const file = yield Deno.open(path, { read: true });
      try {
        return yield getExecutableShebang(file);
      } finally {
        try {
          file.close();
        } catch (e) {
        }
      }
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        return false;
      }
      throw err;
    }
  });
}
var decoder2 = new TextDecoder();
function getExecutableShebang(reader) {
  return __async(this, null, function* () {
    const text = "#!/usr/bin/env ";
    const buffer = new Uint8Array(text.length);
    const bytesReadCount = yield reader.read(buffer);
    if (bytesReadCount !== text.length || decoder2.decode(buffer) !== text) {
      return void 0;
    }
    const bufReader = new BufReader(reader);
    const line = yield bufReader.readLine();
    if (line == null) {
      return void 0;
    }
    const result = decoder2.decode(line.line).trim();
    const dashS = "-S ";
    if (result.startsWith(dashS)) {
      return {
        stringSplit: true,
        command: result.slice(dashS.length)
      };
    } else {
      return {
        stringSplit: false,
        command: result
      };
    }
  });
}
var nodeENotEmpty = "ENOTEMPTY: ";
var nodeENOENT = "ENOENT: ";
function errorToString(err) {
  let message;
  if (err instanceof Error) {
    message = err.message;
  } else {
    message = String(err);
  }
  if (message.startsWith(nodeENotEmpty)) {
    return message.slice(nodeENotEmpty.length);
  } else if (message.startsWith(nodeENOENT)) {
    return message.slice(nodeENOENT.length);
  } else {
    return message;
  }
}
function parseArgKinds(flags) {
  const result = [];
  let had_dash_dash = false;
  for (const arg of flags) {
    if (had_dash_dash) {
      result.push({ arg, kind: "Arg" });
    } else if (arg == "-") {
      result.push({ arg: "-", kind: "Arg" });
    } else if (arg == "--") {
      had_dash_dash = true;
    } else if (arg.startsWith("--")) {
      result.push({ arg: arg.replace(/^--/, ""), kind: "LongFlag" });
    } else if (arg.startsWith("-")) {
      const flags2 = arg.replace(/^-/, "");
      if (!isNaN(parseFloat(flags2))) {
        result.push({ arg, kind: "Arg" });
      } else {
        for (const c of flags2) {
          result.push({ arg: c, kind: "ShortFlag" });
        }
      }
    } else {
      result.push({ arg, kind: "Arg" });
    }
  }
  return result;
}
function bailUnsupported(arg) {
  switch (arg.kind) {
    case "Arg":
      throw Error(`unsupported argument: ${arg.arg}`);
    case "ShortFlag":
      throw Error(`unsupported flag: -${arg.arg}`);
    case "LongFlag":
      throw Error(`unsupported flag: --${arg.arg}`);
  }
}
function catCommand(context) {
  return __async(this, null, function* () {
    try {
      const code3 = yield executeCat(context);
      return { code: code3 };
    } catch (err) {
      return context.error(`cat: ${errorToString(err)}`);
    }
  });
}
function executeCat(context) {
  return __async(this, null, function* () {
    var _a2, _b2;
    const flags = parseCatArgs(context.args);
    let exitCode = 0;
    const buf = new Uint8Array(1024);
    for (const path of flags.paths) {
      if (path === "-") {
        if (typeof context.stdin === "object") {
          while (!context.signal.aborted) {
            const size = yield context.stdin.read(buf);
            if (!size || size === 0) {
              break;
            } else {
              const maybePromise = context.stdout.write(buf.slice(0, size));
              if (maybePromise instanceof Promise) {
                yield maybePromise;
              }
            }
          }
          exitCode = (_a2 = context.signal.abortedExitCode) != null ? _a2 : 0;
        } else {
          const _assertValue = context.stdin;
          throw new Error(`not supported. stdin was '${context.stdin}'`);
        }
      } else {
        let file;
        try {
          file = yield Deno.open(resolvePath(context.cwd, path), { read: true });
          while (!context.signal.aborted) {
            const size = file.readSync(buf);
            if (!size || size === 0) {
              break;
            } else {
              const maybePromise = context.stdout.write(buf.slice(0, size));
              if (maybePromise instanceof Promise) {
                yield maybePromise;
              }
            }
          }
          exitCode = (_b2 = context.signal.abortedExitCode) != null ? _b2 : 0;
        } catch (err) {
          const maybePromise = context.stderr.writeLine(`cat ${path}: ${errorToString(err)}`);
          if (maybePromise instanceof Promise) {
            yield maybePromise;
          }
          exitCode = 1;
        } finally {
          file == null ? void 0 : file.close();
        }
      }
    }
    return exitCode;
  });
}
function parseCatArgs(args) {
  const paths = [];
  for (const arg of parseArgKinds(args)) {
    if (arg.kind === "Arg") {
      paths.push(arg.arg);
    } else {
      bailUnsupported(arg);
    }
  }
  if (paths.length === 0) {
    paths.push("-");
  }
  return { paths };
}
function cdCommand(context) {
  return __async(this, null, function* () {
    try {
      const dir = yield executeCd(context.cwd, context.args);
      return {
        code: 0,
        changes: [{
          kind: "cd",
          dir
        }]
      };
    } catch (err) {
      return context.error(`cd: ${errorToString(err)}`);
    }
  });
}
function executeCd(cwd, args) {
  return __async(this, null, function* () {
    const arg = parseArgs(args);
    const result = resolvePath(cwd, arg);
    if (!(yield isDirectory(result))) {
      throw new Error(`${result}: Not a directory`);
    }
    return result;
  });
}
function isDirectory(path) {
  return __async(this, null, function* () {
    try {
      const info = yield Deno.stat(path);
      return info.isDirectory;
    } catch (err) {
      if (err instanceof Deno.errors.NotFound) {
        return false;
      } else {
        throw err;
      }
    }
  });
}
function parseArgs(args) {
  if (args.length === 0) {
    throw new Error("expected at least 1 argument");
  } else if (args.length > 1) {
    throw new Error("too many arguments");
  } else {
    return args[0];
  }
}
function cpCommand(context) {
  return __async(this, null, function* () {
    try {
      yield executeCp(context.cwd, context.args);
      return { code: 0 };
    } catch (err) {
      return context.error(`cp: ${errorToString(err)}`);
    }
  });
}
function executeCp(cwd, args) {
  return __async(this, null, function* () {
    const flags = yield parseCpArgs(cwd, args);
    for (const { from, to } of flags.operations) {
      yield doCopyOperation(flags, from, to);
    }
  });
}
function parseCpArgs(cwd, args) {
  return __async(this, null, function* () {
    const paths = [];
    let recursive = false;
    for (const arg of parseArgKinds(args)) {
      if (arg.kind === "Arg") paths.push(arg.arg);
      else if (arg.arg === "recursive" && arg.kind === "LongFlag" || arg.arg === "r" && arg.kind == "ShortFlag" || arg.arg === "R" && arg.kind === "ShortFlag") {
        recursive = true;
      } else bailUnsupported(arg);
    }
    if (paths.length === 0) throw Error("missing file operand");
    else if (paths.length === 1) throw Error(`missing destination file operand after '${paths[0]}'`);
    return { recursive, operations: yield getCopyAndMoveOperations(cwd, paths) };
  });
}
function doCopyOperation(flags, from, to) {
  return __async(this, null, function* () {
    const fromInfo = yield safeLstat(from.path);
    if (fromInfo == null ? void 0 : fromInfo.isDirectory) {
      if (flags.recursive) {
        const toInfo = yield safeLstat(to.path);
        if (toInfo == null ? void 0 : toInfo.isFile) {
          throw Error("destination was a file");
        } else if (toInfo == null ? void 0 : toInfo.isSymlink) {
          throw Error("no support for copying to symlinks");
        } else if (fromInfo.isSymlink) {
          throw Error("no support for copying from symlinks");
        } else {
          yield copyDirRecursively(from.path, to.path);
        }
      } else {
        throw Error("source was a directory; maybe specify -r");
      }
    } else {
      yield Deno.copyFile(from.path, to.path);
    }
  });
}
function copyDirRecursively(from, to) {
  return __async(this, null, function* () {
    yield Deno.mkdir(to, { recursive: true });
    const readDir = Deno.readDir(from);
    try {
      for (var iter = __forAwait(readDir), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
        const entry = temp.value;
        const newFrom = join3(from, basename3(entry.name));
        const newTo = join3(to, basename3(entry.name));
        if (entry.isDirectory) {
          yield copyDirRecursively(newFrom, newTo);
        } else if (entry.isFile) {
          yield Deno.copyFile(newFrom, newTo);
        }
      }
    } catch (temp) {
      error = [temp];
    } finally {
      try {
        more && (temp = iter.return) && (yield temp.call(iter));
      } finally {
        if (error)
          throw error[0];
      }
    }
  });
}
function mvCommand(context) {
  return __async(this, null, function* () {
    try {
      yield executeMove(context.cwd, context.args);
      return { code: 0 };
    } catch (err) {
      return context.error(`mv: ${errorToString(err)}`);
    }
  });
}
function executeMove(cwd, args) {
  return __async(this, null, function* () {
    const flags = yield parseMvArgs(cwd, args);
    for (const { from, to } of flags.operations) {
      yield Deno.rename(from.path, to.path);
    }
  });
}
function parseMvArgs(cwd, args) {
  return __async(this, null, function* () {
    const paths = [];
    for (const arg of parseArgKinds(args)) {
      if (arg.kind === "Arg") paths.push(arg.arg);
      else bailUnsupported(arg);
    }
    if (paths.length === 0) throw Error("missing operand");
    else if (paths.length === 1) throw Error(`missing destination file operand after '${paths[0]}'`);
    return { operations: yield getCopyAndMoveOperations(cwd, paths) };
  });
}
function getCopyAndMoveOperations(cwd, paths) {
  return __async(this, null, function* () {
    const specified_destination = paths.splice(paths.length - 1, 1)[0];
    const destination = resolvePath(cwd, specified_destination);
    const fromArgs = paths;
    const operations = [];
    if (fromArgs.length > 1) {
      if (!(yield safeLstat(destination).then((p) => p == null ? void 0 : p.isDirectory))) {
        throw Error(`target '${specified_destination}' is not a directory`);
      }
      for (const from of fromArgs) {
        const fromPath = resolvePath(cwd, from);
        const toPath = join3(destination, basename3(fromPath));
        operations.push(
          {
            from: {
              specified: from,
              path: fromPath
            },
            to: {
              specified: specified_destination,
              path: toPath
            }
          }
        );
      }
    } else {
      const fromPath = resolvePath(cwd, fromArgs[0]);
      const toPath = (yield safeLstat(destination).then((p) => p == null ? void 0 : p.isDirectory)) ? calculateDestinationPath(destination, fromPath) : destination;
      operations.push({
        from: {
          specified: fromArgs[0],
          path: fromPath
        },
        to: {
          specified: specified_destination,
          path: toPath
        }
      });
    }
    return operations;
  });
}
function calculateDestinationPath(destination, from) {
  return join3(destination, basename3(from));
}
function echoCommand(context) {
  try {
    const maybePromise = context.stdout.writeLine(context.args.join(" "));
    if (maybePromise instanceof Promise) {
      return maybePromise.then(() => ({ code: 0 })).catch((err) => handleFailure(context, err));
    } else {
      return { code: 0 };
    }
  } catch (err) {
    return handleFailure(context, err);
  }
}
function handleFailure(context, err) {
  return context.error(`echo: ${errorToString(err)}`);
}
function exitCommand(context) {
  try {
    const code3 = parseArgs2(context.args);
    return {
      kind: "exit",
      code: code3
    };
  } catch (err) {
    return context.error(2, `exit: ${errorToString(err)}`);
  }
}
function parseArgs2(args) {
  if (args.length === 0) return 1;
  if (args.length > 1) throw new Error("too many arguments");
  const exitCode = parseInt(args[0], 10);
  if (isNaN(exitCode)) throw new Error("numeric argument required.");
  if (exitCode < 0) {
    const code3 = -exitCode % 256;
    return 256 - code3;
  }
  return exitCode % 256;
}
function exportCommand(context) {
  const changes = [];
  for (const arg of context.args) {
    const equalsIndex = arg.indexOf("=");
    if (equalsIndex >= 0) {
      changes.push({
        kind: "envvar",
        name: arg.substring(0, equalsIndex),
        value: arg.substring(equalsIndex + 1)
      });
    }
  }
  return {
    code: 0,
    changes
  };
}
function mkdirCommand(context) {
  return __async(this, null, function* () {
    try {
      yield executeMkdir(context.cwd, context.args);
      return { code: 0 };
    } catch (err) {
      return context.error(`mkdir: ${errorToString(err)}`);
    }
  });
}
function executeMkdir(cwd, args) {
  return __async(this, null, function* () {
    const flags = parseArgs3(args);
    for (const specifiedPath of flags.paths) {
      const path = resolvePath(cwd, specifiedPath);
      const info = yield safeLstat(path);
      if ((info == null ? void 0 : info.isFile) || !flags.parents && (info == null ? void 0 : info.isDirectory)) {
        throw Error(`cannot create directory '${specifiedPath}': File exists`);
      }
      if (flags.parents) {
        yield Deno.mkdir(path, { recursive: true });
      } else {
        yield Deno.mkdir(path);
      }
    }
  });
}
function parseArgs3(args) {
  const result = {
    parents: false,
    paths: []
  };
  for (const arg of parseArgKinds(args)) {
    if (arg.arg === "parents" && arg.kind === "LongFlag" || arg.arg === "p" && arg.kind == "ShortFlag") {
      result.parents = true;
    } else {
      if (arg.kind !== "Arg") bailUnsupported(arg);
      result.paths.push(arg.arg.trim());
    }
  }
  if (result.paths.length === 0) {
    throw Error("missing operand");
  }
  return result;
}
function printEnvCommand(context) {
  let args;
  if (Deno.build.os === "windows") {
    args = context.args.map((arg) => arg.toUpperCase());
  } else {
    args = context.args;
  }
  try {
    const result = executePrintEnv(context.env, args);
    const code3 = args.some((arg) => context.env[arg] === void 0) ? 1 : 0;
    const maybePromise = context.stdout.writeLine(result);
    if (maybePromise instanceof Promise) {
      return maybePromise.then(() => ({ code: code3 })).catch((err) => handleError2(context, err));
    } else {
      return { code: code3 };
    }
  } catch (err) {
    return handleError2(context, err);
  }
}
function handleError2(context, err) {
  return context.error(`printenv: ${errorToString(err)}`);
}
function executePrintEnv(env, args) {
  const isWindows5 = Deno.build.os === "windows";
  if (args.length === 0) {
    return Object.entries(env).map(([key, val]) => `${isWindows5 ? key.toUpperCase() : key}=${val}`).join("\n");
  } else {
    if (isWindows5) {
      args = args.map((arg) => arg.toUpperCase());
    }
    return Object.entries(env).filter(([key]) => args.includes(key)).map(([_key, val]) => val).join("\n");
  }
}
function pwdCommand(context) {
  try {
    const output = executePwd(context.cwd, context.args);
    const maybePromise = context.stdout.writeLine(output);
    const result = { code: 0 };
    if (maybePromise instanceof Promise) {
      return maybePromise.then(() => result).catch((err) => handleError3(context, err));
    } else {
      return result;
    }
  } catch (err) {
    return handleError3(context, err);
  }
}
function handleError3(context, err) {
  return context.error(`pwd: ${errorToString(err)}`);
}
function executePwd(cwd, args) {
  const flags = parseArgs4(args);
  if (flags.logical) {
    return resolve3(cwd);
  } else {
    return cwd;
  }
}
function parseArgs4(args) {
  let logical = false;
  for (const arg of parseArgKinds(args)) {
    if (arg.arg === "L" && arg.kind === "ShortFlag") {
      logical = true;
    } else if (arg.arg === "P" && arg.kind == "ShortFlag") {
    } else if (arg.kind === "Arg") {
    } else {
      bailUnsupported(arg);
    }
  }
  return { logical };
}
function rmCommand(context) {
  return __async(this, null, function* () {
    try {
      yield executeRemove(context.cwd, context.args);
      return { code: 0 };
    } catch (err) {
      return context.error(`rm: ${errorToString(err)}`);
    }
  });
}
function executeRemove(cwd, args) {
  return __async(this, null, function* () {
    const flags = parseArgs5(args);
    yield Promise.all(flags.paths.map((specifiedPath) => {
      if (specifiedPath.length === 0) {
        throw new Error("Bug in dax. Specified path should have not been empty.");
      }
      const path = resolvePath(cwd, specifiedPath);
      if (path === "/") {
        throw new Error("Cannot delete root directory. Maybe bug in dax? Please report this.");
      }
      return Deno.remove(path, { recursive: flags.recursive }).catch((err) => {
        if (flags.force && err instanceof Deno.errors.NotFound) {
          return Promise.resolve();
        } else {
          return Promise.reject(err);
        }
      });
    }));
  });
}
function parseArgs5(args) {
  const result = {
    recursive: false,
    force: false,
    dir: false,
    paths: []
  };
  for (const arg of parseArgKinds(args)) {
    if (arg.arg === "recursive" && arg.kind === "LongFlag" || arg.arg === "r" && arg.kind == "ShortFlag" || arg.arg === "R" && arg.kind === "ShortFlag") {
      result.recursive = true;
    } else if (arg.arg == "dir" && arg.kind === "LongFlag" || arg.arg == "d" && arg.kind === "ShortFlag") {
      result.dir = true;
    } else if (arg.arg == "force" && arg.kind === "LongFlag" || arg.arg == "f" && arg.kind === "ShortFlag") {
      result.force = true;
    } else {
      if (arg.kind !== "Arg") bailUnsupported2(arg);
      result.paths.push(arg.arg.trim());
    }
  }
  if (result.paths.length === 0) {
    throw Error("missing operand");
  }
  return result;
}
function bailUnsupported2(arg) {
  switch (arg.kind) {
    case "Arg":
      throw Error(`unsupported argument: ${arg.arg}`);
    case "ShortFlag":
      throw Error(`unsupported flag: -${arg.arg}`);
    case "LongFlag":
      throw Error(`unsupported flag: --${arg.arg}`);
  }
}
function getAbortedResult() {
  return {
    kind: "exit",
    code: 124
    // same as timeout command
  };
}
function sleepCommand(context) {
  return __async(this, null, function* () {
    try {
      const ms = parseArgs6(context.args);
      yield new Promise((resolve4) => {
        const timeoutId = setTimeout(finish, ms);
        context.signal.addListener(signalListener);
        function signalListener(_signal) {
          if (context.signal.aborted) {
            finish();
          }
        }
        function finish() {
          resolve4();
          clearInterval(timeoutId);
          context.signal.removeListener(signalListener);
        }
      });
      if (context.signal.aborted) {
        return getAbortedResult();
      }
      return { code: 0 };
    } catch (err) {
      return context.error(`sleep: ${errorToString(err)}`);
    }
  });
}
function parseArgs6(args) {
  let totalTimeMs = 0;
  if (args.length === 0) {
    throw new Error("missing operand");
  }
  for (const arg of args) {
    if (arg.startsWith("-")) {
      throw new Error(`unsupported: ${arg}`);
    }
    const value = parseFloat(arg);
    if (isNaN(value)) {
      throw new Error(`error parsing argument '${arg}' to number.`);
    }
    totalTimeMs = value * 1e3;
  }
  return totalTimeMs;
}
function testCommand(context) {
  return __async(this, null, function* () {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
    try {
      const [testFlag, testPath] = parseArgs7(context.cwd, context.args);
      let result;
      switch (testFlag) {
        case "-f":
          result = (_b2 = (_a2 = yield safeLstat(testPath)) == null ? void 0 : _a2.isFile) != null ? _b2 : false;
          break;
        case "-d":
          result = (_d2 = (_c2 = yield safeLstat(testPath)) == null ? void 0 : _c2.isDirectory) != null ? _d2 : false;
          break;
        case "-e":
          result = yield exists(testPath);
          break;
        case "-s":
          result = ((_f2 = (_e2 = yield safeLstat(testPath)) == null ? void 0 : _e2.size) != null ? _f2 : 0) > 0;
          break;
        case "-L":
          result = (_h2 = (_g2 = yield safeLstat(testPath)) == null ? void 0 : _g2.isSymlink) != null ? _h2 : false;
          break;
        default:
          throw new Error("unsupported test type");
      }
      return { code: result ? 0 : 1 };
    } catch (err) {
      return context.error(2, `test: ${errorToString(err)}`);
    }
  });
}
function parseArgs7(cwd, args) {
  if (args.length !== 2) {
    throw new Error("expected 2 arguments");
  }
  if (args[0] == null || !args[0].startsWith("-")) {
    throw new Error("missing test type flag");
  }
  return [args[0], resolvePath(cwd, args[1])];
}
function touchCommand(context) {
  return __async(this, null, function* () {
    try {
      yield executetouch(context.args);
      return { code: 0 };
    } catch (err) {
      return context.error(`touch: ${errorToString(err)}`);
    }
  });
}
function executetouch(args) {
  return __async(this, null, function* () {
    const flags = parseArgs8(args);
    for (const path of flags.paths) {
      const f = yield Deno.create(path);
      f.close();
    }
  });
}
function parseArgs8(args) {
  const paths = [];
  for (const arg of parseArgKinds(args)) {
    if (arg.kind === "Arg") paths.push(arg.arg);
    else bailUnsupported(arg);
  }
  if (paths.length === 0) throw Error("missing file operand");
  return { paths };
}
function unsetCommand(context) {
  try {
    return {
      code: 0,
      changes: parseNames(context.args).map((name) => ({ kind: "unsetvar", name }))
    };
  } catch (err) {
    return context.error(`unset: ${errorToString(err)}`);
  }
}
function parseNames(args) {
  if (args[0] === "-f") {
    throw Error(`unsupported flag: -f`);
  } else if (args[0] === "-v") {
    return args.slice(1);
  } else {
    return args;
  }
}
var encoder3 = new TextEncoder();
var NullPipeReader = class {
  read(_p2) {
    return Promise.resolve(null);
  }
};
var NullPipeWriter = class {
  writeSync(p) {
    return p.length;
  }
};
var ShellPipeWriter = (_k = class {
  constructor(kind, inner) {
    __privateAdd(this, _kind);
    __privateAdd(this, _inner);
    __privateSet(this, _kind, kind);
    __privateSet(this, _inner, inner);
  }
  get kind() {
    return __privateGet(this, _kind);
  }
  get inner() {
    return __privateGet(this, _inner);
  }
  write(p) {
    if ("write" in __privateGet(this, _inner)) {
      return __privateGet(this, _inner).write(p);
    } else {
      return __privateGet(this, _inner).writeSync(p);
    }
  }
  writeAll(data) {
    if ("write" in __privateGet(this, _inner)) {
      return writeAll2(__privateGet(this, _inner), data);
    } else {
      return writeAllSync2(__privateGet(this, _inner), data);
    }
  }
  writeText(text) {
    return this.writeAll(encoder3.encode(text));
  }
  writeLine(text) {
    return this.writeText(text + "\n");
  }
}, _kind = new WeakMap(), _inner = new WeakMap(), _k);
var CapturingBufferWriter = (_l = class {
  constructor(innerWriter, buffer) {
    __privateAdd(this, _buffer);
    __privateAdd(this, _innerWriter);
    __privateSet(this, _innerWriter, innerWriter);
    __privateSet(this, _buffer, buffer);
  }
  getBuffer() {
    return __privateGet(this, _buffer);
  }
  write(p) {
    return __async(this, null, function* () {
      const nWritten = yield __privateGet(this, _innerWriter).write(p);
      __privateGet(this, _buffer).writeSync(p.slice(0, nWritten));
      return nWritten;
    });
  }
}, _buffer = new WeakMap(), _innerWriter = new WeakMap(), _l);
var CapturingBufferWriterSync = (_m = class {
  constructor(innerWriter, buffer) {
    __privateAdd(this, _buffer2);
    __privateAdd(this, _innerWriter2);
    __privateSet(this, _innerWriter2, innerWriter);
    __privateSet(this, _buffer2, buffer);
  }
  getBuffer() {
    return __privateGet(this, _buffer2);
  }
  writeSync(p) {
    const nWritten = __privateGet(this, _innerWriter2).writeSync(p);
    __privateGet(this, _buffer2).writeSync(p.slice(0, nWritten));
    return nWritten;
  }
}, _buffer2 = new WeakMap(), _innerWriter2 = new WeakMap(), _m);
var lineFeedCharCode = "\n".charCodeAt(0);
var InheritStaticTextBypassWriter = (_n = class {
  constructor(innerWriter) {
    __privateAdd(this, _buffer3);
    __privateAdd(this, _innerWriter3);
    __privateSet(this, _innerWriter3, innerWriter);
    __privateSet(this, _buffer3, new Buffer());
  }
  writeSync(p) {
    const index = p.findLastIndex((v) => v === lineFeedCharCode);
    if (index === -1) {
      __privateGet(this, _buffer3).writeSync(p);
    } else {
      __privateGet(this, _buffer3).writeSync(p.slice(0, index + 1));
      this.flush();
      __privateGet(this, _buffer3).writeSync(p.slice(index + 1));
    }
    return p.byteLength;
  }
  flush() {
    const bytes = __privateGet(this, _buffer3).bytes({ copy: false });
    logger.logAboveStaticText(() => {
      writeAllSync2(__privateGet(this, _innerWriter3), bytes);
    });
    __privateGet(this, _buffer3).reset();
  }
}, _buffer3 = new WeakMap(), _innerWriter3 = new WeakMap(), _n);
var PipedBuffer = (_o = class {
  constructor() {
    __privateAdd(this, _inner2);
    __privateAdd(this, _hasSet, false);
    __privateSet(this, _inner2, new Buffer());
  }
  getBuffer() {
    if (__privateGet(this, _inner2) instanceof Buffer) {
      return __privateGet(this, _inner2);
    } else {
      return void 0;
    }
  }
  setError(err) {
    if ("setError" in __privateGet(this, _inner2)) {
      __privateGet(this, _inner2).setError(err);
    }
  }
  close() {
    if ("close" in __privateGet(this, _inner2)) {
      __privateGet(this, _inner2).close();
    }
  }
  writeSync(p) {
    return __privateGet(this, _inner2).writeSync(p);
  }
  setListener(listener) {
    if (__privateGet(this, _hasSet)) {
      throw new Error("Piping to multiple outputs is currently not supported.");
    }
    if (__privateGet(this, _inner2) instanceof Buffer) {
      writeAllSync2(listener, __privateGet(this, _inner2).bytes({ copy: false }));
    }
    __privateSet(this, _inner2, listener);
    __privateSet(this, _hasSet, true);
  }
}, _inner2 = new WeakMap(), _hasSet = new WeakMap(), _o);
var PipeSequencePipe = (_p = class {
  constructor() {
    __privateAdd(this, _inner3, new Buffer());
    __privateAdd(this, _readListener);
    __privateAdd(this, _closed, false);
  }
  close() {
    var _a2;
    (_a2 = __privateGet(this, _readListener)) == null ? void 0 : _a2.call(this);
    __privateSet(this, _closed, true);
  }
  writeSync(p) {
    const value = __privateGet(this, _inner3).writeSync(p);
    if (__privateGet(this, _readListener) !== void 0) {
      const listener = __privateGet(this, _readListener);
      __privateSet(this, _readListener, void 0);
      listener();
    }
    return value;
  }
  read(p) {
    if (__privateGet(this, _readListener) !== void 0) {
      throw new Error("Misuse of PipeSequencePipe");
    }
    if (__privateGet(this, _inner3).length === 0) {
      if (__privateGet(this, _closed)) {
        return Promise.resolve(null);
      } else {
        return new Promise((resolve4) => {
          __privateSet(this, _readListener, () => {
            resolve4(__privateGet(this, _inner3).readSync(p));
          });
        });
      }
    } else {
      return Promise.resolve(__privateGet(this, _inner3).readSync(p));
    }
  }
}, _inner3 = new WeakMap(), _readListener = new WeakMap(), _closed = new WeakMap(), _p);
function pipeReadableToWriterSync(readable, writer, signal) {
  return __async(this, null, function* () {
    const reader = readable.getReader();
    while (!signal.aborted) {
      const result = yield reader.read();
      if (result.done) {
        break;
      }
      const maybePromise = writer.writeAll(result.value);
      if (maybePromise) {
        yield maybePromise;
      }
    }
  });
}
var spawnCommand = (path, options) => {
  const child = new Deno.Command(path, options).spawn();
  child.status;
  return {
    stdin() {
      return child.stdin;
    },
    kill(signo) {
      child.kill(signo);
    },
    waitExitCode() {
      return child.status.then((status) => status.code);
    },
    stdout() {
      return child.stdout;
    },
    stderr() {
      return child.stderr;
    }
  };
};
var neverAbortedSignal = new AbortController().signal;
var RealEnv = class {
  setCwd(cwd) {
    Deno.chdir(cwd);
  }
  getCwd() {
    return Deno.cwd();
  }
  setEnvVar(key, value) {
    if (value == null) {
      Deno.env.delete(key);
    } else {
      Deno.env.set(key, value);
    }
  }
  getEnvVar(key) {
    return Deno.env.get(key);
  }
  getEnvVars() {
    return Deno.env.toObject();
  }
  clone() {
    return cloneEnv(this);
  }
};
var ShellEnv = (_q = class {
  constructor() {
    __privateAdd(this, _cwd);
    __privateAdd(this, _envVars, {});
  }
  setCwd(cwd) {
    __privateSet(this, _cwd, cwd);
  }
  getCwd() {
    if (__privateGet(this, _cwd) == null) {
      throw new Error("The cwd must be initialized.");
    }
    return __privateGet(this, _cwd);
  }
  setEnvVar(key, value) {
    if (Deno.build.os === "windows") {
      key = key.toUpperCase();
    }
    if (value == null) {
      delete __privateGet(this, _envVars)[key];
    } else {
      __privateGet(this, _envVars)[key] = value;
    }
  }
  getEnvVar(key) {
    if (Deno.build.os === "windows") {
      key = key.toUpperCase();
    }
    return __privateGet(this, _envVars)[key];
  }
  getEnvVars() {
    return __spreadValues({}, __privateGet(this, _envVars));
  }
  clone() {
    return cloneEnv(this);
  }
}, _cwd = new WeakMap(), _envVars = new WeakMap(), _q);
var RealEnvWriteOnly = class {
  constructor() {
    __publicField(this, "real", new RealEnv());
    __publicField(this, "shell", new ShellEnv());
  }
  setCwd(cwd) {
    this.real.setCwd(cwd);
    this.shell.setCwd(cwd);
  }
  getCwd() {
    return this.shell.getCwd();
  }
  setEnvVar(key, value) {
    this.real.setEnvVar(key, value);
    this.shell.setEnvVar(key, value);
  }
  getEnvVar(key) {
    return this.shell.getEnvVar(key);
  }
  getEnvVars() {
    return this.shell.getEnvVars();
  }
  clone() {
    return cloneEnv(this);
  }
};
function initializeEnv(env, opts) {
  env.setCwd(opts.cwd);
  for (const [key, value] of Object.entries(opts.env)) {
    env.setEnvVar(key, value);
  }
}
function cloneEnv(env) {
  const result = new ShellEnv();
  initializeEnv(result, {
    cwd: env.getCwd(),
    env: env.getEnvVars()
  });
  return result;
}
var StreamFds = (_r2 = class {
  constructor() {
    __privateAdd(this, _readers, /* @__PURE__ */ new Map());
    __privateAdd(this, _writers, /* @__PURE__ */ new Map());
  }
  insertReader(fd, stream) {
    __privateGet(this, _readers).set(fd, stream);
  }
  insertWriter(fd, stream) {
    __privateGet(this, _writers).set(fd, stream);
  }
  getReader(fd) {
    var _a2;
    return (_a2 = __privateGet(this, _readers).get(fd)) == null ? void 0 : _a2();
  }
  getWriter(fd) {
    var _a2;
    return (_a2 = __privateGet(this, _writers).get(fd)) == null ? void 0 : _a2();
  }
}, _readers = new WeakMap(), _writers = new WeakMap(), _r2);
var Context = (_s = class {
  constructor(opts) {
    __publicField(this, "stdin");
    __publicField(this, "stdout");
    __publicField(this, "stderr");
    __privateAdd(this, _env);
    __privateAdd(this, _shellVars);
    __privateAdd(this, _static);
    this.stdin = opts.stdin;
    this.stdout = opts.stdout;
    this.stderr = opts.stderr;
    __privateSet(this, _env, opts.env);
    __privateSet(this, _shellVars, opts.shellVars);
    __privateSet(this, _static, opts.static);
  }
  get signal() {
    return __privateGet(this, _static).signal;
  }
  applyChanges(changes) {
    if (changes == null) {
      return;
    }
    for (const change of changes) {
      switch (change.kind) {
        case "cd":
          __privateGet(this, _env).setCwd(change.dir);
          break;
        case "envvar":
          this.setEnvVar(change.name, change.value);
          break;
        case "shellvar":
          this.setShellVar(change.name, change.value);
          break;
        case "unsetvar":
          this.setShellVar(change.name, void 0);
          this.setEnvVar(change.name, void 0);
          break;
        default: {
          const _assertNever = change;
          throw new Error(`Not implemented env change: ${change}`);
        }
      }
    }
  }
  setEnvVar(key, value) {
    if (Deno.build.os === "windows") {
      key = key.toUpperCase();
    }
    if (key === "PWD") {
      if (value != null && isAbsolute3(value)) {
        __privateGet(this, _env).setCwd(resolve3(value));
      }
    } else {
      delete __privateGet(this, _shellVars)[key];
      __privateGet(this, _env).setEnvVar(key, value);
    }
  }
  setShellVar(key, value) {
    if (Deno.build.os === "windows") {
      key = key.toUpperCase();
    }
    if (__privateGet(this, _env).getEnvVar(key) != null || key === "PWD") {
      this.setEnvVar(key, value);
    } else if (value == null) {
      delete __privateGet(this, _shellVars)[key];
    } else {
      __privateGet(this, _shellVars)[key] = value;
    }
  }
  getEnvVars() {
    return __privateGet(this, _env).getEnvVars();
  }
  getCwd() {
    return __privateGet(this, _env).getCwd();
  }
  getVar(key) {
    var _a2;
    if (Deno.build.os === "windows") {
      key = key.toUpperCase();
    }
    if (key === "PWD") {
      return __privateGet(this, _env).getCwd();
    }
    return (_a2 = __privateGet(this, _env).getEnvVar(key)) != null ? _a2 : __privateGet(this, _shellVars)[key];
  }
  getCommand(command) {
    var _a2;
    return (_a2 = __privateGet(this, _static).commands[command]) != null ? _a2 : null;
  }
  getFdReader(fd) {
    var _a2;
    return (_a2 = __privateGet(this, _static).fds) == null ? void 0 : _a2.getReader(fd);
  }
  getFdWriter(fd) {
    var _a2;
    return (_a2 = __privateGet(this, _static).fds) == null ? void 0 : _a2.getWriter(fd);
  }
  asCommandContext(args) {
    const context = this;
    return {
      get args() {
        return args;
      },
      get cwd() {
        return context.getCwd();
      },
      get env() {
        return context.getEnvVars();
      },
      get stdin() {
        return context.stdin;
      },
      get stdout() {
        return context.stdout;
      },
      get stderr() {
        return context.stderr;
      },
      get signal() {
        return context.signal;
      },
      error(codeOrText, maybeText) {
        return context.error(codeOrText, maybeText);
      }
    };
  }
  error(codeOrText, maybeText) {
    let code3;
    let text;
    if (typeof codeOrText === "number") {
      code3 = codeOrText;
      text = maybeText;
    } else {
      code3 = 1;
      text = codeOrText;
    }
    const maybePromise = this.stderr.writeLine(text);
    if (maybePromise instanceof Promise) {
      return maybePromise.then(() => ({ code: code3 }));
    } else {
      return { code: code3 };
    }
  }
  withInner(opts) {
    var _a2, _b2, _c2;
    return new _s({
      stdin: (_a2 = opts.stdin) != null ? _a2 : this.stdin,
      stdout: (_b2 = opts.stdout) != null ? _b2 : this.stdout,
      stderr: (_c2 = opts.stderr) != null ? _c2 : this.stderr,
      env: __privateGet(this, _env).clone(),
      shellVars: __spreadValues({}, __privateGet(this, _shellVars)),
      static: __privateGet(this, _static)
    });
  }
  clone() {
    return new _s({
      stdin: this.stdin,
      stdout: this.stdout,
      stderr: this.stderr,
      env: __privateGet(this, _env).clone(),
      shellVars: __spreadValues({}, __privateGet(this, _shellVars)),
      static: __privateGet(this, _static)
    });
  }
}, _env = new WeakMap(), _shellVars = new WeakMap(), _static = new WeakMap(), _s);
function parseCommand(command) {
  return wasmInstance.parse(command);
}
function spawn(list, opts) {
  return __async(this, null, function* () {
    const env = opts.exportEnv ? opts.clearedEnv ? new RealEnvWriteOnly() : new RealEnv() : new ShellEnv();
    initializeEnv(env, opts);
    const context = new Context({
      env,
      stdin: opts.stdin,
      stdout: opts.stdout,
      stderr: opts.stderr,
      shellVars: {},
      static: {
        commands: opts.commands,
        fds: opts.fds,
        signal: opts.signal
      }
    });
    const result = yield executeSequentialList(list, context);
    return result.code;
  });
}
function executeSequentialList(list, context) {
  return __async(this, null, function* () {
    let finalExitCode = 0;
    const finalChanges = [];
    for (const item of list.items) {
      if (item.isAsync) {
        throw new Error("Async commands are not supported. Run a command concurrently in the JS code instead.");
      }
      const result = yield executeSequence(item.sequence, context);
      switch (result.kind) {
        case void 0:
          if (result.changes) {
            context.applyChanges(result.changes);
            finalChanges.push(...result.changes);
          }
          finalExitCode = result.code;
          break;
        case "exit":
          return result;
        default: {
          const _assertNever = result;
        }
      }
    }
    return {
      code: finalExitCode,
      changes: finalChanges
    };
  });
}
function executeSequence(sequence, context) {
  if (context.signal.aborted) {
    return Promise.resolve(getAbortedResult());
  }
  switch (sequence.kind) {
    case "pipeline":
      return executePipeline(sequence, context);
    case "booleanList":
      return executeBooleanList(sequence, context);
    case "shellVar":
      return executeShellVar(sequence, context);
    default: {
      const _assertNever = sequence;
      throw new Error(`Not implemented: ${sequence}`);
    }
  }
}
function executePipeline(pipeline, context) {
  if (pipeline.negated) {
    throw new Error("Negated pipelines are not implemented.");
  }
  return executePipelineInner(pipeline.inner, context);
}
function executeBooleanList(list, context) {
  return __async(this, null, function* () {
    const changes = [];
    const firstResult = yield executeSequence(
      list.current,
      context.clone()
    );
    let exitCode = 0;
    switch (firstResult.kind) {
      case "exit":
        return firstResult;
      case void 0:
        if (firstResult.changes) {
          context.applyChanges(firstResult.changes);
          changes.push(...firstResult.changes);
        }
        exitCode = firstResult.code;
        break;
      default: {
        const _assertNever = firstResult;
        throw new Error("Not handled.");
      }
    }
    const next = findNextSequence(list, exitCode);
    if (next == null) {
      return {
        code: exitCode,
        changes
      };
    } else {
      const nextResult = yield executeSequence(
        next,
        context.clone()
      );
      switch (nextResult.kind) {
        case "exit":
          return nextResult;
        case void 0:
          if (nextResult.changes) {
            changes.push(...nextResult.changes);
          }
          return {
            code: nextResult.code,
            changes
          };
        default: {
          const _assertNever = nextResult;
          throw new Error("Not Implemented");
        }
      }
    }
    function findNextSequence(current, exitCode2) {
      if (opMovesNextForExitCode(current.op, exitCode2)) {
        return current.next;
      } else {
        let next2 = current.next;
        while (next2.kind === "booleanList") {
          if (opMovesNextForExitCode(next2.op, exitCode2)) {
            return next2.next;
          } else {
            next2 = next2.next;
          }
        }
        return void 0;
      }
    }
    function opMovesNextForExitCode(op, exitCode2) {
      switch (op) {
        case "or":
          return exitCode2 !== 0;
        case "and":
          return exitCode2 === 0;
      }
    }
  });
}
function executeShellVar(sequence, context) {
  return __async(this, null, function* () {
    const value = yield evaluateWord(sequence.value, context);
    return {
      code: 0,
      changes: [{
        kind: "shellvar",
        name: sequence.name,
        value
      }]
    };
  });
}
function executePipelineInner(inner, context) {
  switch (inner.kind) {
    case "command":
      return executeCommand(inner, context);
    case "pipeSequence":
      return executePipeSequence(inner, context);
    default: {
      const _assertNever = inner;
      throw new Error(`Not implemented: ${inner.kind}`);
    }
  }
}
function executeCommand(command, context) {
  return __async(this, null, function* () {
    if (command.redirect != null) {
      const redirectResult = yield resolveRedirectPipe(command.redirect, context);
      let redirectPipe;
      if (redirectResult.kind === "input") {
        const { pipe } = redirectResult;
        context = context.withInner({
          stdin: pipe
        });
        redirectPipe = pipe;
      } else if (redirectResult.kind === "output") {
        const { pipe, toFd } = redirectResult;
        const writer = new ShellPipeWriter("piped", pipe);
        redirectPipe = pipe;
        if (toFd === 1) {
          context = context.withInner({
            stdout: writer
          });
        } else if (toFd === 2) {
          context = context.withInner({
            stderr: writer
          });
        } else {
          const _assertNever = toFd;
          throw new Error(`Not handled fd: ${toFd}`);
        }
      } else {
        return redirectResult;
      }
      const result = yield executeCommandInner(command.inner, context);
      try {
        if (isAsyncDisposable(redirectPipe)) {
          yield redirectPipe[Symbol.asyncDispose]();
        } else if (isDisposable(redirectPipe)) {
          redirectPipe[Symbol.dispose]();
        }
      } catch (err) {
        if (result.code === 0) {
          return context.error(`failed disposing redirected pipe. ${errorToString(err)}`);
        }
      }
      return result;
    } else {
      return executeCommandInner(command.inner, context);
    }
  });
}
function resolveRedirectPipe(redirect, context) {
  return __async(this, null, function* () {
    function handleFileOpenError(outputPath, err) {
      return context.error(`failed opening file for redirect (${outputPath}). ${errorToString(err)}`);
    }
    const toFd = resolveRedirectToFd(redirect, context);
    if (typeof toFd !== "number") {
      return toFd;
    }
    const { ioFile } = redirect;
    if (ioFile.kind === "fd") {
      switch (redirect.op.kind) {
        case "input": {
          if (ioFile.value === 0) {
            return {
              kind: "input",
              pipe: getStdinReader(context.stdin)
            };
          } else if (ioFile.value === 1 || ioFile.value === 2) {
            return context.error(`redirecting stdout or stderr to a command input is not supported`);
          } else {
            const pipe = context.getFdReader(ioFile.value);
            if (pipe == null) {
              return context.error(`could not find fd reader: ${ioFile.value}`);
            } else {
              return {
                kind: "input",
                pipe
              };
            }
          }
        }
        case "output": {
          if (ioFile.value === 0) {
            return context.error(`redirecting output to stdin is not supported`);
          } else if (ioFile.value === 1) {
            return {
              kind: "output",
              pipe: context.stdout.inner,
              toFd
            };
          } else if (ioFile.value === 2) {
            return {
              kind: "output",
              pipe: context.stderr.inner,
              toFd
            };
          } else {
            const pipe = context.getFdWriter(ioFile.value);
            if (pipe == null) {
              return context.error(`could not find fd: ${ioFile.value}`);
            } else {
              return {
                kind: "output",
                pipe,
                toFd
              };
            }
          }
        }
        default: {
          const _assertNever = redirect.op;
          throw new Error("not implemented redirect op.");
        }
      }
    } else if (ioFile.kind === "word") {
      const words = yield evaluateWordParts(ioFile.value, context);
      if (words.length === 0) {
        return context.error("redirect path must be 1 argument, but found 0");
      } else if (words.length > 1) {
        return context.error(
          `redirect path must be 1 argument, but found ${words.length} (${words.join(" ")}). Did you mean to quote it (ex. "${words.join(" ")}")?`
        );
      }
      switch (redirect.op.kind) {
        case "input": {
          const outputPath = isAbsolute3(words[0]) ? words[0] : join3(context.getCwd(), words[0]);
          try {
            const file = yield Deno.open(outputPath, {
              read: true
            });
            return {
              kind: "input",
              pipe: file
            };
          } catch (err) {
            return handleFileOpenError(outputPath, err);
          }
        }
        case "output": {
          if (words[0] === "/dev/null") {
            return {
              kind: "output",
              pipe: new NullPipeWriter(),
              toFd
            };
          }
          const outputPath = isAbsolute3(words[0]) ? words[0] : join3(context.getCwd(), words[0]);
          try {
            const file = yield Deno.open(outputPath, {
              write: true,
              create: true,
              append: redirect.op.value === "append",
              truncate: redirect.op.value !== "append"
            });
            return {
              kind: "output",
              pipe: file,
              toFd
            };
          } catch (err) {
            return handleFileOpenError(outputPath, err);
          }
        }
        default: {
          const _assertNever = redirect.op;
          throw new Error("not implemented redirect op.");
        }
      }
    } else {
      const _assertNever = ioFile;
      throw new Error("not implemented redirect io file.");
    }
  });
}
function getStdinReader(stdin) {
  if (stdin === "inherit") {
    return Deno.stdin;
  } else if (stdin === "null") {
    return new NullPipeReader();
  } else {
    return stdin;
  }
}
function resolveRedirectToFd(redirect, context) {
  const maybeFd = redirect.maybeFd;
  if (maybeFd == null) {
    return 1;
  }
  if (maybeFd.kind === "stdoutStderr") {
    return context.error("redirecting to both stdout and stderr is not implemented");
  }
  if (maybeFd.fd !== 1 && maybeFd.fd !== 2) {
    return context.error(`only redirecting to stdout (1) and stderr (2) is supported`);
  } else {
    return maybeFd.fd;
  }
}
function executeCommandInner(command, context) {
  switch (command.kind) {
    case "simple":
      return executeSimpleCommand(command, context);
    case "subshell":
      return executeSubshell(command, context);
    default: {
      const _assertNever = command;
      throw new Error(`Not implemented: ${command.kind}`);
    }
  }
}
function executeSimpleCommand(command, parentContext) {
  return __async(this, null, function* () {
    const context = parentContext.clone();
    for (const envVar of command.envVars) {
      context.setEnvVar(envVar.name, yield evaluateWord(envVar.value, context));
    }
    const commandArgs = yield evaluateArgs(command.args, context);
    return yield executeCommandArgs(commandArgs, context);
  });
}
function checkMapCwdNotExistsError(cwd, err) {
  if (err.code === "ENOENT" && !existsSync(cwd)) {
    throw new Error(`Failed to launch command because the cwd does not exist (${cwd}).`, {
      cause: err
    });
  } else {
    throw err;
  }
}
function executeCommandArgs(commandArgs, context) {
  const commandName = commandArgs.shift();
  const command = context.getCommand(commandName);
  if (command != null) {
    return Promise.resolve(command(context.asCommandContext(commandArgs)));
  }
  const unresolvedCommand = {
    name: commandName,
    baseDir: context.getCwd()
  };
  return executeUnresolvedCommand(unresolvedCommand, commandArgs, context);
}
function executeUnresolvedCommand(unresolvedCommand, commandArgs, context) {
  return __async(this, null, function* () {
    const resolvedCommand = yield resolveCommand(unresolvedCommand, context);
    if (resolvedCommand === false) {
      context.stderr.writeLine(`dax: ${unresolvedCommand.name}: command not found`);
      return { code: 127 };
    }
    if (resolvedCommand.kind === "shebang") {
      return executeUnresolvedCommand(resolvedCommand.command, [...resolvedCommand.args, ...commandArgs], context);
    }
    const _assertIsPath = resolvedCommand.kind;
    return executeCommandAtPath(resolvedCommand.path, commandArgs, context);
  });
}
function executeCommandAtPath(commandPath, commandArgs, context) {
  return __async(this, null, function* () {
    const pipeStringVals = {
      stdin: getStdioStringValue(context.stdin),
      stdout: getStdioStringValue(context.stdout.kind),
      stderr: getStdioStringValue(context.stderr.kind)
    };
    let p;
    const cwd = context.getCwd();
    try {
      p = spawnCommand(commandPath, __spreadValues({
        args: commandArgs,
        cwd,
        env: context.getEnvVars(),
        clearEnv: true
      }, pipeStringVals));
    } catch (err) {
      throw checkMapCwdNotExistsError(cwd, err);
    }
    const listener = (signal) => p.kill(signal);
    context.signal.addListener(listener);
    const completeController = new AbortController();
    const completeSignal = completeController.signal;
    let stdinError;
    const stdinPromise = writeStdin(context.stdin, p, completeSignal).catch((err) => __async(this, null, function* () {
      if (completeSignal.aborted) {
        return;
      }
      const maybePromise = context.stderr.writeLine(`stdin pipe broken. ${errorToString(err)}`);
      if (maybePromise != null) {
        yield maybePromise;
      }
      stdinError = err;
      try {
        p.kill("SIGKILL");
      } catch (err2) {
        if (!(err2 instanceof Deno.errors.PermissionDenied || err2 instanceof Deno.errors.NotFound)) {
          throw err2;
        }
      }
    }));
    try {
      const readStdoutTask = pipeStringVals.stdout === "piped" ? readStdOutOrErr(p.stdout(), context.stdout) : Promise.resolve();
      const readStderrTask = pipeStringVals.stderr === "piped" ? readStdOutOrErr(p.stderr(), context.stderr) : Promise.resolve();
      const [exitCode] = yield Promise.all([
        p.waitExitCode().catch((err) => Promise.reject(checkMapCwdNotExistsError(cwd, err))),
        readStdoutTask,
        readStderrTask
      ]);
      if (stdinError != null) {
        return {
          code: 1,
          kind: "exit"
        };
      } else {
        return { code: exitCode };
      }
    } finally {
      completeController.abort();
      context.signal.removeListener(listener);
      yield stdinPromise;
    }
    function writeStdin(stdin, p2, signal) {
      return __async(this, null, function* () {
        if (typeof stdin === "string") {
          return;
        }
        const processStdin = p2.stdin();
        yield pipeReaderToWritable(stdin, processStdin, signal);
        try {
          yield processStdin.close();
        } catch (e) {
        }
      });
    }
    function readStdOutOrErr(readable, writer) {
      return __async(this, null, function* () {
        if (typeof writer === "string") {
          return;
        }
        yield pipeReadableToWriterSync(readable, writer, neverAbortedSignal);
      });
    }
    function getStdioStringValue(value) {
      if (value === "inheritPiped") {
        return "piped";
      } else if (value === "inherit" || value === "null" || value === "piped") {
        return value;
      } else {
        return "piped";
      }
    }
  });
}
function executeSubshell(subshell, context) {
  return __async(this, null, function* () {
    const result = yield executeSequentialList(subshell, context);
    return { code: result.code };
  });
}
function pipeReaderToWritable(reader, writable, signal) {
  return __async(this, null, function* () {
    const abortedPromise = new Promise((resolve4) => {
      signal.addEventListener("abort", listener);
      function listener() {
        signal.removeEventListener("abort", listener);
        resolve4();
      }
    });
    const writer = writable.getWriter();
    try {
      while (!signal.aborted) {
        const buffer = new Uint8Array(1024);
        const length = yield Promise.race([abortedPromise, reader.read(buffer)]);
        if (length === 0 || length == null) {
          break;
        }
        yield writer.write(buffer.subarray(0, length));
      }
    } finally {
      yield writer.close();
    }
  });
}
function pipeReaderToWriterSync(reader, writer, signal) {
  return __async(this, null, function* () {
    const buffer = new Uint8Array(1024);
    while (!signal.aborted) {
      const bytesRead = yield reader.read(buffer);
      if (bytesRead == null || bytesRead === 0) {
        break;
      }
      const maybePromise = writer.writeAll(buffer.slice(0, bytesRead));
      if (maybePromise) {
        yield maybePromise;
      }
    }
  });
}
function pipeCommandPipeReaderToWriterSync(reader, writer, signal) {
  switch (reader) {
    case "inherit":
      return pipeReadableToWriterSync(Deno.stdin.readable, writer, signal);
    case "null":
      return Promise.resolve();
    default: {
      return pipeReaderToWriterSync(reader, writer, signal);
    }
  }
}
function resolveCommand(unresolvedCommand, context) {
  return __async(this, null, function* () {
    if (unresolvedCommand.name.includes("/") || Deno.build.os === "windows" && unresolvedCommand.name.includes("\\")) {
      const commandPath2 = isAbsolute3(unresolvedCommand.name) ? unresolvedCommand.name : resolve3(unresolvedCommand.baseDir, unresolvedCommand.name);
      const result = yield getExecutableShebangFromPath(commandPath2);
      if (result === false) {
        return false;
      } else if (result != null) {
        const args = yield parseShebangArgs(result, context);
        const name = args.shift();
        args.push(commandPath2);
        return {
          kind: "shebang",
          command: {
            name,
            baseDir: dirname3(commandPath2)
          },
          args
        };
      } else {
        const _assertUndefined = result;
        return {
          kind: "path",
          path: commandPath2
        };
      }
    }
    const commandPath = yield whichFromContext(unresolvedCommand.name, context);
    if (commandPath == null) {
      return false;
    }
    return {
      kind: "path",
      path: commandPath
    };
  });
}
var WhichEnv = class extends RealEnvironment {
  requestPermission(folderPath) {
    Deno.permissions.requestSync({
      name: "read",
      path: folderPath
    });
  }
};
var denoWhichRealEnv = new WhichEnv();
function whichFromContext(commandName, context) {
  return __async(this, null, function* () {
    if (commandName.toUpperCase() === "DENO") {
      return Deno.execPath();
    }
    return yield which(commandName, {
      os: Deno.build.os,
      stat: denoWhichRealEnv.stat,
      env(key) {
        return context.getVar(key);
      },
      requestPermission: denoWhichRealEnv.requestPermission
    });
  });
}
function executePipeSequence(sequence, context) {
  return __async(this, null, function* () {
    const waitTasks = [];
    let lastOutput = context.stdin;
    let nextInner = sequence;
    while (nextInner != null) {
      let innerCommand;
      switch (nextInner.kind) {
        case "pipeSequence":
          switch (nextInner.op) {
            case "stdout": {
              innerCommand = nextInner.current;
              break;
            }
            case "stdoutstderr": {
              return context.error(`piping to both stdout and stderr is not implemented (ex. |&)`);
            }
            default: {
              const _assertNever = nextInner.op;
              return context.error(`not implemented pipe sequence op: ${nextInner.op}`);
            }
          }
          nextInner = nextInner.next;
          break;
        case "command":
          innerCommand = nextInner;
          nextInner = void 0;
          break;
      }
      const buffer = new PipeSequencePipe();
      const newContext = context.withInner({
        stdout: new ShellPipeWriter("piped", buffer),
        stdin: lastOutput
      });
      const commandPromise = executeCommand(innerCommand, newContext);
      waitTasks.push(commandPromise);
      commandPromise.finally(() => {
        buffer.close();
      });
      lastOutput = buffer;
    }
    waitTasks.push(
      pipeCommandPipeReaderToWriterSync(lastOutput, context.stdout, context.signal).then(() => ({ code: 0 }))
    );
    const results = yield Promise.all(waitTasks);
    const secondLastResult = results[results.length - 2];
    return secondLastResult;
  });
}
function parseShebangArgs(info, context) {
  return __async(this, null, function* () {
    function throwUnsupported() {
      throw new Error("Unsupported shebang. Please report this as a bug.");
    }
    if (!info.stringSplit) {
      return [info.command];
    }
    const command = parseCommand(info.command);
    if (command.items.length !== 1) {
      throwUnsupported();
    }
    const item = command.items[0];
    if (item.sequence.kind !== "pipeline" || item.isAsync) {
      throwUnsupported();
    }
    const sequence = item.sequence;
    if (sequence.negated) {
      throwUnsupported();
    }
    if (sequence.inner.kind !== "command" || sequence.inner.redirect != null) {
      throwUnsupported();
    }
    const innerCommand = sequence.inner.inner;
    if (innerCommand.kind !== "simple") {
      throwUnsupported();
    }
    if (innerCommand.envVars.length > 0) {
      throwUnsupported();
    }
    return yield evaluateArgs(innerCommand.args, context);
  });
}
function evaluateArgs(args, context) {
  return __async(this, null, function* () {
    const result = [];
    for (const arg of args) {
      result.push(...yield evaluateWordParts(arg, context));
    }
    return result;
  });
}
function evaluateWord(word, context) {
  return __async(this, null, function* () {
    const result = yield evaluateWordParts(word, context);
    return result.join(" ");
  });
}
function evaluateWordParts(wordParts, context, quoted = false) {
  return __async(this, null, function* () {
    const result = [];
    let currentText = "";
    let hasQuoted = false;
    for (const stringPart of wordParts) {
      let evaluationResult = void 0;
      switch (stringPart.kind) {
        case "text":
          currentText += stringPart.value;
          break;
        case "variable":
          evaluationResult = context.getVar(stringPart.value);
          break;
        case "quoted": {
          const text = (yield evaluateWordParts(stringPart.value, context, true)).join("");
          currentText += text;
          hasQuoted = true;
          continue;
        }
        case "command":
        default:
          throw new Error(`Not implemented: ${stringPart.kind}`);
      }
      if (evaluationResult != null) {
        if (quoted) {
          currentText += evaluationResult;
        } else {
          const parts = evaluationResult.split(" ").map((t) => t.trim()).filter((t) => t.length > 0);
          if (parts.length > 0) {
            currentText += parts[0];
            result.push(currentText);
            result.push(...parts.slice(1));
            currentText = result.pop();
          }
        }
      }
    }
    if (hasQuoted || currentText.length !== 0) {
      result.push(currentText);
    }
    return result;
  });
}
function isDisposable(value) {
  return value != null && typeof value[Symbol.dispose] === "function";
}
function isAsyncDisposable(value) {
  return value != null && typeof value[Symbol.asyncDispose] === "function";
}
function whichCommand(context) {
  return __async(this, null, function* () {
    try {
      return yield executeWhich(context);
    } catch (err) {
      return context.error(`which: ${errorToString(err)}`);
    }
  });
}
function executeWhich(context) {
  return __async(this, null, function* () {
    let flags;
    try {
      flags = parseArgs9(context.args);
    } catch (err) {
      return yield context.error(2, `which: ${errorToString(err)}`);
    }
    if (flags.commandName == null) {
      return { code: 1 };
    }
    const path = yield whichFromContext(flags.commandName, {
      getVar(key) {
        return context.env[key];
      }
    });
    if (path != null) {
      yield context.stdout.writeLine(path);
      return { code: 0 };
    } else {
      return { code: 1 };
    }
  });
}
function parseArgs9(args) {
  let commandName;
  for (const arg of parseArgKinds(args)) {
    if (arg.kind === "Arg") {
      if (commandName != null) {
        throw Error("unsupported too many arguments");
      }
      commandName = arg.arg;
    } else {
      bailUnsupported3(arg);
    }
  }
  return {
    commandName
  };
}
function bailUnsupported3(arg) {
  switch (arg.kind) {
    case "Arg":
      throw Error(`unsupported argument: ${arg.arg}`);
    case "ShortFlag":
      throw Error(`unsupported flag: -${arg.arg}`);
    case "LongFlag":
      throw Error(`unsupported flag: --${arg.arg}`);
  }
}
var withProgressBarFactorySymbol = Symbol();
var RequestBuilder = (_t = class {
  constructor() {
    __privateAdd(this, __RequestBuilder_instances);
    __privateAdd(this, _state2);
  }
  [symbols.readable]() {
    const self = this;
    let streamReader;
    let response;
    let wasCancelled = false;
    let cancelledReason;
    return new ReadableStream({
      start() {
        return __async(this, null, function* () {
          response = yield self.fetch();
          const readable = response.readable;
          if (wasCancelled) {
            readable.cancel(cancelledReason);
          } else {
            streamReader = readable.getReader();
          }
        });
      },
      pull(controller) {
        return __async(this, null, function* () {
          var _a3, _b2;
          const { done, value } = yield streamReader.read();
          if (done || value == null) {
            if ((_a3 = response == null ? void 0 : response.signal) == null ? void 0 : _a3.aborted) {
              controller.error((_b2 = response == null ? void 0 : response.signal) == null ? void 0 : _b2.reason);
            } else {
              controller.close();
            }
          } else {
            controller.enqueue(value);
          }
        });
      },
      cancel(reason) {
        streamReader == null ? void 0 : streamReader.cancel(reason);
        wasCancelled = true;
        cancelledReason = reason;
      }
    });
  }
  then(onfulfilled, onrejected) {
    return this.fetch().then(onfulfilled).catch(onrejected);
  }
  /** Fetches and gets the response. */
  fetch() {
    return makeRequest(__privateMethod(this, __RequestBuilder_instances, getClonedState_fn).call(this)).catch((err) => {
      if (err instanceof TimeoutError) {
        Error.captureStackTrace(err, TimeoutError);
      }
      return Promise.reject(err);
    });
  }
  /** Specifies the URL to send the request to. */
  url(value) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      state.url = value;
    });
  }
  header(nameOrItems, value) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      if (typeof nameOrItems === "string") {
        setHeader(state, nameOrItems, value);
      } else {
        for (const [name, value2] of Object.entries(nameOrItems)) {
          setHeader(state, name, value2);
        }
      }
    });
    function setHeader(state, name, value2) {
      name = name.toUpperCase();
      state.headers[name] = value2;
    }
  }
  noThrow(value, ...additional) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      if (typeof value === "boolean" || value == null) {
        state.noThrow = value != null ? value : true;
      } else {
        state.noThrow = [value, ...additional];
      }
    });
  }
  body(value) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      state.body = value;
    });
  }
  cache(value) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      state.cache = value;
    });
  }
  integrity(value) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      state.integrity = value;
    });
  }
  keepalive(value) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      state.keepalive = value;
    });
  }
  method(value) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      state.method = value;
    });
  }
  mode(value) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      state.mode = value;
    });
  }
  /** @internal */
  [withProgressBarFactorySymbol](factory) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      state.progressBarFactory = factory;
    });
  }
  redirect(value) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      state.redirect = value;
    });
  }
  referrer(value) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      state.referrer = value;
    });
  }
  referrerPolicy(value) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      state.referrerPolicy = value;
    });
  }
  showProgress(value) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      var _a2;
      if (value === true || value == null) {
        state.progressOptions = { noClear: false };
      } else if (value === false) {
        state.progressOptions = void 0;
      } else {
        state.progressOptions = {
          noClear: (_a2 = value.noClear) != null ? _a2 : false
        };
      }
    });
  }
  /** Timeout the request after the specified delay throwing a `TimeoutError`. */
  timeout(delay) {
    return __privateMethod(this, __RequestBuilder_instances, newWithState_fn).call(this, (state) => {
      state.timeout = delay == null ? void 0 : delayToMs(delay);
    });
  }
  /** Fetches and gets the response as an array buffer. */
  arrayBuffer() {
    return __async(this, null, function* () {
      const response = yield this.fetch();
      return response.arrayBuffer();
    });
  }
  /** Fetches and gets the response as a blob. */
  blob() {
    return __async(this, null, function* () {
      const response = yield this.fetch();
      return response.blob();
    });
  }
  /** Fetches and gets the response as form data. */
  formData() {
    return __async(this, null, function* () {
      const response = yield this.fetch();
      return response.formData();
    });
  }
  /** Fetches and gets the response as JSON additionally setting
   * a JSON accept header if not set. */
  json() {
    return __async(this, null, function* () {
      let builder = this;
      const acceptHeaderName = "ACCEPT";
      if (__privateGet(builder, _state2) == null || !Object.hasOwn(__privateGet(builder, _state2).headers, acceptHeaderName)) {
        builder = builder.header(acceptHeaderName, "application/json");
      }
      const response = yield builder.fetch();
      return response.json();
    });
  }
  /** Fetches and gets the response as text. */
  text() {
    return __async(this, null, function* () {
      const response = yield this.fetch();
      return response.text();
    });
  }
  /** Pipes the response body to the provided writable stream. */
  pipeTo(dest, options) {
    return __async(this, null, function* () {
      const response = yield this.fetch();
      return yield response.pipeTo(dest, options);
    });
  }
  pipeToPath(filePathOrOptions, maybeOptions) {
    return __async(this, null, function* () {
      var _a2;
      const { filePath, options } = resolvePipeToPathParams(filePathOrOptions, maybeOptions, (_a2 = __privateGet(this, _state2)) == null ? void 0 : _a2.url);
      const response = yield this.fetch();
      return yield response.pipeToPath(filePath, options);
    });
  }
  /** Pipes the response body through the provided transform. */
  pipeThrough(transform) {
    return __async(this, null, function* () {
      const response = yield this.fetch();
      return response.pipeThrough(transform);
    });
  }
}, _state2 = new WeakMap(), __RequestBuilder_instances = new WeakSet(), getClonedState_fn = function() {
  const state = __privateGet(this, _state2);
  if (state == null) {
    return __privateMethod(this, __RequestBuilder_instances, getDefaultState_fn).call(this);
  }
  return {
    // be explicit here in order to force evaluation
    // of each property on a case by case basis
    noThrow: typeof state.noThrow === "boolean" ? state.noThrow : [...state.noThrow],
    url: state.url,
    body: state.body,
    cache: state.cache,
    headers: state.headers,
    integrity: state.integrity,
    keepalive: state.keepalive,
    method: state.method,
    mode: state.mode,
    redirect: state.redirect,
    referrer: state.referrer,
    referrerPolicy: state.referrerPolicy,
    progressBarFactory: state.progressBarFactory,
    progressOptions: state.progressOptions == null ? void 0 : __spreadValues({}, state.progressOptions),
    timeout: state.timeout
  };
}, getDefaultState_fn = function() {
  return {
    noThrow: false,
    url: void 0,
    body: void 0,
    cache: void 0,
    headers: {},
    integrity: void 0,
    keepalive: void 0,
    method: void 0,
    mode: void 0,
    redirect: void 0,
    referrer: void 0,
    referrerPolicy: void 0,
    progressBarFactory: void 0,
    progressOptions: void 0,
    timeout: void 0
  };
}, newWithState_fn = function(action) {
  const builder = new _t();
  const state = __privateMethod(this, __RequestBuilder_instances, getClonedState_fn).call(this);
  action(state);
  __privateSet(builder, _state2, state);
  return builder;
}, _t);
var RequestResponse = (_u = class {
  /** @internal */
  constructor(opts) {
    __privateAdd(this, _RequestResponse_instances);
    __privateAdd(this, _response);
    __privateAdd(this, _downloadResponse);
    __privateAdd(this, _originalUrl);
    __privateAdd(this, _abortController);
    __privateSet(this, _originalUrl, opts.originalUrl);
    __privateSet(this, _response, opts.response);
    __privateSet(this, _abortController, opts.abortController);
    if (opts.response.body == null) {
      opts.abortController.clearTimeout();
    }
    if (opts.progressBar != null) {
      let _a2;
      const pb = opts.progressBar;
      __privateSet(this, _downloadResponse, new Response(
        new ReadableStream({
          start(controller) {
            return __async(this, null, function* () {
              var _a3;
              const reader = (_a3 = opts.response.body) == null ? void 0 : _a3.getReader();
              if (reader == null) {
                return;
              }
              try {
                while (true) {
                  const { done, value } = yield reader.read();
                  if (done || value == null) {
                    break;
                  }
                  pb.increment(value.byteLength);
                  controller.enqueue(value);
                }
                const signal = opts.abortController.controller.signal;
                if (signal.aborted) {
                  controller.error(signal.reason);
                } else {
                  controller.close();
                }
              } finally {
                reader.releaseLock();
                pb.finish();
              }
            });
          }
        })
      ));
    } else {
      __privateSet(this, _downloadResponse, opts.response);
    }
  }
  /** Raw response. */
  get response() {
    return __privateGet(this, _response);
  }
  /** Response headers. */
  get headers() {
    return __privateGet(this, _response).headers;
  }
  /** If the response had a 2xx code. */
  get ok() {
    return __privateGet(this, _response).ok;
  }
  /** If the response is the result of a redirect. */
  get redirected() {
    return __privateGet(this, _response).redirected;
  }
  /** The underlying `AbortSignal` used to abort the request body
   * when a timeout is reached or when the `.abort()` method is called. */
  get signal() {
    return __privateGet(this, _abortController).controller.signal;
  }
  /** Status code of the response. */
  get status() {
    return __privateGet(this, _response).status;
  }
  /** Status text of the response. */
  get statusText() {
    return __privateGet(this, _response).statusText;
  }
  /** URL of the response. */
  get url() {
    return __privateGet(this, _response).url;
  }
  /** Aborts  */
  abort(reason) {
    var _a2;
    (_a2 = __privateGet(this, _abortController)) == null ? void 0 : _a2.controller.abort(reason);
  }
  /**
   * Throws if the response doesn't have a 2xx code.
   *
   * This might be useful if the request was built with `.noThrow()`, but
   * otherwise this is called automatically for any non-2xx response codes.
   */
  throwIfNotOk() {
    var _a2;
    if (!this.ok) {
      (_a2 = __privateGet(this, _response).body) == null ? void 0 : _a2.cancel().catch(() => {
      });
      throw new Error(`Error making request to ${__privateGet(this, _originalUrl)}: ${this.statusText}`);
    }
  }
  /**
   * Respose body as an array buffer.
   *
   * Note: Returns `undefined` when `.noThrow(404)` and status code is 404.
   */
  arrayBuffer() {
    return __privateMethod(this, _RequestResponse_instances, withReturnHandling_fn).call(this, () => __async(this, null, function* () {
      var _a2;
      if (__privateGet(this, _response).status === 404) {
        yield (_a2 = __privateGet(this, _response).body) == null ? void 0 : _a2.cancel();
        return void 0;
      }
      return __privateGet(this, _downloadResponse).arrayBuffer();
    }));
  }
  /**
   * Response body as a blog.
   *
   * Note: Returns `undefined` when `.noThrow(404)` and status code is 404.
   */
  blob() {
    return __privateMethod(this, _RequestResponse_instances, withReturnHandling_fn).call(this, () => __async(this, null, function* () {
      var _a2;
      if (__privateGet(this, _response).status === 404) {
        yield (_a2 = __privateGet(this, _response).body) == null ? void 0 : _a2.cancel();
        return void 0;
      }
      return yield __privateGet(this, _downloadResponse).blob();
    }));
  }
  /**
   * Response body as a form data.
   *
   * Note: Returns `undefined` when `.noThrow(404)` and status code is 404.
   */
  formData() {
    return __privateMethod(this, _RequestResponse_instances, withReturnHandling_fn).call(this, () => __async(this, null, function* () {
      var _a2;
      if (__privateGet(this, _response).status === 404) {
        yield (_a2 = __privateGet(this, _response).body) == null ? void 0 : _a2.cancel();
        return void 0;
      }
      return yield __privateGet(this, _downloadResponse).formData();
    }));
  }
  /**
   * Respose body as JSON.
   *
   * Note: Returns `undefined` when `.noThrow(404)` and status code is 404.
   */
  json() {
    return __privateMethod(this, _RequestResponse_instances, withReturnHandling_fn).call(this, () => __async(this, null, function* () {
      var _a2;
      if (__privateGet(this, _response).status === 404) {
        yield (_a2 = __privateGet(this, _response).body) == null ? void 0 : _a2.cancel();
        return void 0;
      }
      return yield __privateGet(this, _downloadResponse).json();
    }));
  }
  /**
   * Respose body as text.
   *
   * Note: Returns `undefined` when `.noThrow(404)` and status code is 404.
   */
  text() {
    return __privateMethod(this, _RequestResponse_instances, withReturnHandling_fn).call(this, () => __async(this, null, function* () {
      var _a2;
      if (__privateGet(this, _response).status === 404) {
        yield (_a2 = __privateGet(this, _response).body) == null ? void 0 : _a2.cancel();
        return void 0;
      }
      return yield __privateGet(this, _downloadResponse).text();
    }));
  }
  /** Pipes the response body to the provided writable stream. */
  pipeTo(dest, options) {
    return __privateMethod(this, _RequestResponse_instances, withReturnHandling_fn).call(this, () => this.readable.pipeTo(dest, options));
  }
  pipeToPath(filePathOrOptions, maybeOptions) {
    return __async(this, null, function* () {
      var _a2, _b2;
      const { filePath, options } = resolvePipeToPathParams(filePathOrOptions, maybeOptions, __privateGet(this, _originalUrl));
      const body = this.readable;
      try {
        const file = yield filePath.open(__spreadValues({
          write: true,
          create: true
        }, options != null ? options : {}));
        try {
          yield body.pipeTo(file.writable, {
            preventClose: true
          });
          yield file.writable.close();
        } finally {
          try {
            file.close();
          } catch (e) {
          }
          (_a2 = __privateGet(this, _abortController)) == null ? void 0 : _a2.clearTimeout();
        }
      } catch (err) {
        yield (_b2 = __privateGet(this, _response).body) == null ? void 0 : _b2.cancel();
        throw err;
      }
      return filePath;
    });
  }
  /** Pipes the response body through the provided transform. */
  pipeThrough(transform) {
    return this.readable.pipeThrough(transform);
  }
  get readable() {
    const body = __privateGet(this, _downloadResponse).body;
    if (body == null) {
      throw new Error("Response had no body.");
    }
    return body;
  }
}, _response = new WeakMap(), _downloadResponse = new WeakMap(), _originalUrl = new WeakMap(), _abortController = new WeakMap(), _RequestResponse_instances = new WeakSet(), withReturnHandling_fn = function(action) {
  return __async(this, null, function* () {
    try {
      return yield action();
    } catch (err) {
      if (err instanceof TimeoutError) {
        Error.captureStackTrace(err);
      }
      throw err;
    } finally {
      __privateGet(this, _abortController).clearTimeout();
    }
  });
}, _u);
function makeRequest(state) {
  return __async(this, null, function* () {
    var _a2;
    if (state.url == null) {
      throw new Error("You must specify a URL before fetching.");
    }
    const abortController = (_a2 = getTimeoutAbortController()) != null ? _a2 : {
      controller: new AbortController(),
      clearTimeout() {
      }
    };
    const response = yield fetch(state.url, {
      body: state.body,
      // @ts-ignore not supported in Node.js yet?
      cache: state.cache,
      headers: filterEmptyRecordValues(state.headers),
      integrity: state.integrity,
      keepalive: state.keepalive,
      method: state.method,
      mode: state.mode,
      redirect: state.redirect,
      referrer: state.referrer,
      referrerPolicy: state.referrerPolicy,
      signal: abortController.controller.signal
    });
    const result = new RequestResponse({
      response,
      originalUrl: state.url.toString(),
      progressBar: getProgressBar(),
      abortController
    });
    if (!state.noThrow) {
      result.throwIfNotOk();
    } else if (state.noThrow instanceof Array) {
      if (!state.noThrow.includes(response.status)) {
        result.throwIfNotOk();
      }
    }
    return result;
    function getProgressBar() {
      if (state.progressOptions == null || state.progressBarFactory == null) {
        return void 0;
      }
      return state.progressBarFactory(`Download ${state.url}`).noClear(state.progressOptions.noClear).kind("bytes").length(getContentLength());
      function getContentLength() {
        const contentLength = response.headers.get("content-length");
        if (contentLength == null) {
          return void 0;
        }
        const length = parseInt(contentLength, 10);
        return isNaN(length) ? void 0 : length;
      }
    }
    function getTimeoutAbortController() {
      if (state.timeout == null) {
        return void 0;
      }
      const timeout = state.timeout;
      const controller = new AbortController();
      const timeoutId = setTimeout(
        () => controller.abort(new TimeoutError(`Request timed out after ${formatMillis(timeout)}.`)),
        timeout
      );
      return {
        controller,
        clearTimeout() {
          clearTimeout(timeoutId);
        }
      };
    }
  });
}
function resolvePipeToPathParams(pathOrOptions, maybeOptions, originalUrl) {
  let filePath;
  let options;
  if (typeof pathOrOptions === "string" || pathOrOptions instanceof URL) {
    filePath = new Path(pathOrOptions).resolve();
    options = maybeOptions;
  } else if (pathOrOptions instanceof Path) {
    filePath = pathOrOptions.resolve();
    options = maybeOptions;
  } else if (typeof pathOrOptions === "object") {
    options = pathOrOptions;
  } else if (pathOrOptions === void 0) {
    options = maybeOptions;
  }
  if (filePath === void 0) {
    filePath = new Path(getFileNameFromUrlOrThrow(originalUrl));
  } else if (filePath.isDirSync()) {
    filePath = filePath.join(getFileNameFromUrlOrThrow(originalUrl));
  }
  filePath = filePath.resolve();
  return {
    filePath,
    options
  };
  function getFileNameFromUrlOrThrow(url) {
    const fileName = url == null ? void 0 : getFileNameFromUrl(url);
    if (fileName == null) {
      throw new Error(
        "Could not derive the path from the request URL. Please explicitly provide a path."
      );
    }
    return fileName;
  }
}
var Deferred = (_v = class {
  constructor(create) {
    __privateAdd(this, _create);
    __privateSet(this, _create, create);
  }
  create() {
    return __privateGet(this, _create).call(this);
  }
}, _create = new WeakMap(), _v);
var textDecoder2 = new TextDecoder();
var builtInCommands = {
  cd: cdCommand,
  printenv: printEnvCommand,
  echo: echoCommand,
  cat: catCommand,
  exit: exitCommand,
  export: exportCommand,
  sleep: sleepCommand,
  test: testCommand,
  rm: rmCommand,
  mkdir: mkdirCommand,
  cp: cpCommand,
  mv: mvCommand,
  pwd: pwdCommand,
  touch: touchCommand,
  unset: unsetCommand,
  which: whichCommand
};
var getRegisteredCommandNamesSymbol = Symbol();
var setCommandTextStateSymbol = Symbol();
var CommandBuilder = (_w = class {
  constructor() {
    __privateAdd(this, __CommandBuilder_instances);
    __privateAdd(this, _state3, {
      command: void 0,
      combinedStdoutStderr: false,
      stdin: "inherit",
      stdout: {
        kind: "inherit"
      },
      stderr: {
        kind: "inherit"
      },
      noThrow: false,
      env: {},
      cwd: void 0,
      commands: __spreadValues({}, builtInCommands),
      clearEnv: false,
      exportEnv: false,
      printCommand: false,
      printCommandLogger: new LoggerTreeBox(
        // deno-lint-ignore no-console
        (cmd) => console.error(white2(">"), blue(cmd))
      ),
      timeout: void 0,
      signal: void 0
    });
  }
  then(onfulfilled, onrejected) {
    return this.spawn().then(onfulfilled).catch(onrejected);
  }
  /**
   * Explicit way to spawn a command.
   *
   * This is an alias for awaiting the command builder or calling `.then(...)`
   */
  spawn() {
    return parseAndSpawnCommand(__privateMethod(this, __CommandBuilder_instances, getClonedState_fn2).call(this));
  }
  /**
   * Register a command.
   */
  registerCommand(command, handleFn) {
    validateCommandName(command);
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      state.commands[command] = handleFn;
    });
  }
  /**
   * Register multilple commands.
   */
  registerCommands(commands) {
    let command = this;
    for (const [key, value] of Object.entries(commands)) {
      command = command.registerCommand(key, value);
    }
    return command;
  }
  /**
   * Unregister a command.
   */
  unregisterCommand(command) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      delete state.commands[command];
    });
  }
  /** Sets the raw command to execute. */
  command(command) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      if (command instanceof Array) {
        command = command.map(escapeArg).join(" ");
      }
      state.command = {
        text: command,
        fds: void 0
      };
    });
  }
  noThrow(value, ...additional) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      if (typeof value === "boolean" || value == null) {
        state.noThrow = value != null ? value : true;
      } else {
        state.noThrow = [value, ...additional];
      }
    });
  }
  /** Sets the command signal that will be passed to all commands
   * created with this command builder.
   */
  signal(killSignal) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      if (state.signal != null) {
        state.signal.linkChild(killSignal);
      }
      state.signal = killSignal;
    });
  }
  /**
   * Whether to capture a combined buffer of both stdout and stderr.
   *
   * This will set both stdout and stderr to "piped" if not already "piped"
   * or "inheritPiped".
   */
  captureCombined(value = true) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      state.combinedStdoutStderr = value;
      if (value) {
        if (state.stdout.kind !== "piped" && state.stdout.kind !== "inheritPiped") {
          state.stdout.kind = "piped";
        }
        if (state.stderr.kind !== "piped" && state.stderr.kind !== "inheritPiped") {
          state.stderr.kind = "piped";
        }
      }
    });
  }
  /**
   * Sets the stdin to use for the command.
   *
   * @remarks If multiple launches of a command occurs, then stdin will only be
   * read from the first consumed reader or readable stream and error otherwise.
   * For this reason, if you are setting stdin to something other than "inherit" or
   * "null", then it's recommended to set this each time you spawn a command.
   */
  stdin(reader) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      if (reader === "inherit" || reader === "null") {
        state.stdin = reader;
      } else if (reader instanceof Uint8Array) {
        state.stdin = new Deferred(() => new Buffer(reader));
      } else if (reader instanceof Path) {
        state.stdin = new Deferred(() => __async(this, null, function* () {
          const file = yield reader.open();
          return file.readable;
        }));
      } else if (reader instanceof RequestBuilder) {
        state.stdin = new Deferred(() => __async(this, null, function* () {
          const body = yield reader;
          return body.readable;
        }));
      } else if (reader instanceof _w) {
        state.stdin = new Deferred(() => {
          return reader.stdout("piped").spawn().stdout();
        });
      } else {
        state.stdin = new Box(reader);
      }
    });
  }
  /**
   * Sets the stdin string to use for a command.
   *
   * @remarks See the remarks on stdin. The same applies here.
   */
  stdinText(text) {
    return this.stdin(new TextEncoder().encode(text));
  }
  stdout(kind, options) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      if (state.combinedStdoutStderr && kind !== "piped" && kind !== "inheritPiped") {
        throw new Error(
          "Cannot set stdout's kind to anything but 'piped' or 'inheritPiped' when combined is true."
        );
      }
      if ((options == null ? void 0 : options.signal) != null) {
        throw new Error("Setting a signal for a stdout WritableStream is not yet supported.");
      }
      state.stdout = {
        kind,
        options
      };
    });
  }
  stderr(kind, options) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      if (state.combinedStdoutStderr && kind !== "piped" && kind !== "inheritPiped") {
        throw new Error(
          "Cannot set stderr's kind to anything but 'piped' or 'inheritPiped' when combined is true."
        );
      }
      if ((options == null ? void 0 : options.signal) != null) {
        throw new Error("Setting a signal for a stderr WritableStream is not yet supported.");
      }
      state.stderr = {
        kind,
        options
      };
    });
  }
  /** Pipes the current command to the provided command returning the
   * provided command builder. When chaining, it's important to call this
   * after you are done configuring the current command or else you will
   * start modifying the provided command instead.
   *
   * @example
   * ```ts
   * const lineCount = await $`echo 1 && echo 2`
   *  .pipe($`wc -l`)
   *  .text();
   * ```
   */
  pipe(builder) {
    return builder.stdin(this.stdout("piped"));
  }
  env(nameOrItems, value) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      if (typeof nameOrItems === "string") {
        setEnv(state, nameOrItems, value);
      } else {
        for (const [key, value2] of Object.entries(nameOrItems)) {
          setEnv(state, key, value2);
        }
      }
    });
    function setEnv(state, key, value2) {
      if (Deno.build.os === "windows") {
        key = key.toUpperCase();
      }
      state.env[key] = value2;
    }
  }
  /** Sets the current working directory to use when executing this command. */
  cwd(dirPath) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      state.cwd = dirPath instanceof URL ? fromFileUrl3(dirPath) : dirPath instanceof Path ? dirPath.resolve().toString() : resolve3(dirPath);
    });
  }
  /**
   * Exports the environment of the command to the executing process.
   *
   * So for example, changing the directory in a command or exporting
   * an environment variable will actually change the environment
   * of the executing process.
   *
   * ```ts
   * await $`cd src && export SOME_VALUE=5`;
   * console.log(Deno.env.get("SOME_VALUE")); // 5
   * console.log(Deno.cwd()); // will be in the src directory
   * ```
   */
  exportEnv(value = true) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      state.exportEnv = value;
    });
  }
  /**
   * Clear environmental variables from parent process.
   *
   * Doesn't guarantee that only `env` variables are present, as the OS may
   * set environmental variables for processes.
   */
  clearEnv(value = true) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      state.clearEnv = value;
    });
  }
  /**
   * Prints the command text before executing the command.
   *
   * For example:
   *
   * ```ts
   * const text = "example";
   * await $`echo ${text}`.printCommand();
   * ```
   *
   * Outputs:
   *
   * ```
   * > echo example
   * example
   * ```
   */
  printCommand(value = true) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      state.printCommand = value;
    });
  }
  /**
   * Mutates the command builder to change the logger used
   * for `printCommand()`.
   */
  setPrintCommandLogger(logger2) {
    __privateGet(this, _state3).printCommandLogger.setValue(logger2);
  }
  /**
   * Ensures stdout and stderr are piped if they have the default behaviour or are inherited.
   *
   * ```ts
   * // ensure both stdout and stderr is not logged to the console
   * await $`echo 1`.quiet();
   * // ensure stdout is not logged to the console
   * await $`echo 1`.quiet("stdout");
   * // ensure stderr is not logged to the console
   * await $`echo 1`.quiet("stderr");
   * ```
   */
  quiet(kind = "combined") {
    kind = kind === "both" ? "combined" : kind;
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      if (kind === "combined" || kind === "stdout") {
        state.stdout.kind = getQuietKind(state.stdout.kind);
      }
      if (kind === "combined" || kind === "stderr") {
        state.stderr.kind = getQuietKind(state.stderr.kind);
      }
    });
    function getQuietKind(kind2) {
      if (typeof kind2 === "object") {
        return kind2;
      }
      switch (kind2) {
        case "inheritPiped":
        case "inherit":
          return "piped";
        case "null":
        case "piped":
          return kind2;
        default: {
          const _assertNever = kind2;
          throw new Error(`Unhandled kind ${kind2}.`);
        }
      }
    }
  }
  /**
   * Specifies a timeout for the command. The command will exit with
   * exit code `124` (timeout) if it times out.
   *
   * Note that when using `.noThrow()` this won't cause an error to
   * be thrown when timing out.
   */
  timeout(delay) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      state.timeout = delay == null ? void 0 : delayToMs(delay);
    });
  }
  /**
   * Sets stdout as quiet, spawns the command, and gets stdout as a Uint8Array.
   *
   * Shorthand for:
   *
   * ```ts
   * const data = (await $`command`.quiet("stdout")).stdoutBytes;
   * ```
   */
  bytes(kind = "stdout") {
    return __async(this, null, function* () {
      const command = kind === "combined" ? this.quiet(kind).captureCombined() : this.quiet(kind);
      return (yield command)[`${kind}Bytes`];
    });
  }
  /**
   * Sets the provided stream (stdout by default) as quiet, spawns the command, and gets the stream as a string without the last newline.
   * Can be used to get stdout, stderr, or both.
   *
   * Shorthand for:
   *
   * ```ts
   * const data = (await $`command`.quiet("stdout")).stdout.replace(/\r?\n$/, "");
   * ```
   */
  text(kind = "stdout") {
    return __async(this, null, function* () {
      const command = kind === "combined" ? this.quiet(kind).captureCombined() : this.quiet(kind);
      return (yield command)[kind].replace(/\r?\n$/, "");
    });
  }
  /** Gets the text as an array of lines. */
  lines(kind = "stdout") {
    return __async(this, null, function* () {
      const text = yield this.text(kind);
      return text.split(/\r?\n/g);
    });
  }
  /**
   * Sets stream (stdout by default) as quiet, spawns the command, and gets stream as JSON.
   *
   * Shorthand for:
   *
   * ```ts
   * const data = (await $`command`.quiet("stdout")).stdoutJson;
   * ```
   */
  json(kind = "stdout") {
    return __async(this, null, function* () {
      return (yield this.quiet(kind))[`${kind}Json`];
    });
  }
  /** @internal */
  [getRegisteredCommandNamesSymbol]() {
    return Object.keys(__privateGet(this, _state3).commands);
  }
  /** @internal */
  [setCommandTextStateSymbol](textState) {
    return __privateMethod(this, __CommandBuilder_instances, newWithState_fn2).call(this, (state) => {
      state.command = textState;
    });
  }
}, _state3 = new WeakMap(), __CommandBuilder_instances = new WeakSet(), getClonedState_fn2 = function() {
  const state = __privateGet(this, _state3);
  return {
    // be explicit here in order to evaluate each property on a case by case basis
    command: state.command,
    combinedStdoutStderr: state.combinedStdoutStderr,
    stdin: state.stdin,
    stdout: {
      kind: state.stdout.kind,
      options: state.stdout.options
    },
    stderr: {
      kind: state.stderr.kind,
      options: state.stderr.options
    },
    noThrow: state.noThrow instanceof Array ? [...state.noThrow] : state.noThrow,
    env: __spreadValues({}, state.env),
    cwd: state.cwd,
    commands: __spreadValues({}, state.commands),
    clearEnv: state.clearEnv,
    exportEnv: state.exportEnv,
    printCommand: state.printCommand,
    printCommandLogger: state.printCommandLogger.createChild(),
    timeout: state.timeout,
    signal: state.signal
  };
}, newWithState_fn2 = function(action) {
  const builder = new _w();
  const state = __privateMethod(this, __CommandBuilder_instances, getClonedState_fn2).call(this);
  action(state);
  __privateSet(builder, _state3, state);
  return builder;
}, _w);
var CommandChild = (_x = class extends Promise {
  /** @internal */
  constructor(executor, options = { pipedStderrBuffer: void 0, pipedStdoutBuffer: void 0, killSignalController: void 0 }) {
    super(executor);
    __privateAdd(this, _CommandChild_instances);
    __privateAdd(this, _pipedStdoutBuffer);
    __privateAdd(this, _pipedStderrBuffer);
    __privateAdd(this, _killSignalController);
    __privateSet(this, _pipedStdoutBuffer, options.pipedStdoutBuffer);
    __privateSet(this, _pipedStderrBuffer, options.pipedStderrBuffer);
    __privateSet(this, _killSignalController, options.killSignalController);
  }
  /** Send a signal to the executing command's child process. Note that SIGTERM,
   * SIGKILL, SIGABRT, SIGQUIT, SIGINT, or SIGSTOP will cause the entire command
   * to be considered "aborted" and if part of a command runs after this has occurred
   * it will return a 124 exit code. Other signals will just be forwarded to the command.
   *
   * Defaults to "SIGTERM".
   */
  kill(signal) {
    var _a2;
    (_a2 = __privateGet(this, _killSignalController)) == null ? void 0 : _a2.kill(signal);
  }
  stdout() {
    const buffer = __privateGet(this, _pipedStdoutBuffer);
    __privateMethod(this, _CommandChild_instances, assertBufferStreamable_fn).call(this, "stdout", buffer);
    __privateSet(this, _pipedStdoutBuffer, "consumed");
    this.catch(() => {
    });
    return __privateMethod(this, _CommandChild_instances, bufferToStream_fn).call(this, buffer);
  }
  stderr() {
    const buffer = __privateGet(this, _pipedStderrBuffer);
    __privateMethod(this, _CommandChild_instances, assertBufferStreamable_fn).call(this, "stderr", buffer);
    __privateSet(this, _pipedStderrBuffer, "consumed");
    this.catch(() => {
    });
    return __privateMethod(this, _CommandChild_instances, bufferToStream_fn).call(this, buffer);
  }
}, _pipedStdoutBuffer = new WeakMap(), _pipedStderrBuffer = new WeakMap(), _killSignalController = new WeakMap(), _CommandChild_instances = new WeakSet(), assertBufferStreamable_fn = function(name, buffer) {
  if (buffer == null) {
    throw new Error(
      `No pipe available. Ensure ${name} is "piped" (not "inheritPiped") and combinedOutput is not enabled.`
    );
  }
  if (buffer === "consumed") {
    throw new Error(`Streamable ${name} was already consumed. Use the previously acquired stream instead.`);
  }
}, bufferToStream_fn = function(buffer) {
  const self = this;
  return new ReadableStream({
    start(controller) {
      buffer.setListener({
        writeSync(data) {
          controller.enqueue(data);
          return data.length;
        },
        setError(err) {
          controller.error(err);
        },
        close() {
          controller.close();
        }
      });
    },
    cancel(_reason) {
      self.kill();
    }
  });
}, _x);
function parseAndSpawnCommand(state) {
  if (state.command == null) {
    throw new Error("A command must be set before it can be spawned.");
  }
  if (state.printCommand) {
    state.printCommandLogger.getValue()(state.command.text);
  }
  const disposables = [];
  const asyncDisposables = [];
  const parentSignal = state.signal;
  const killSignalController = new KillSignalController();
  if (parentSignal != null) {
    const parentSignalListener = (signal2) => {
      killSignalController.kill(signal2);
    };
    parentSignal.addListener(parentSignalListener);
    disposables.push({
      [Symbol.dispose]() {
        parentSignal.removeListener(parentSignalListener);
      }
    });
  }
  let timedOut = false;
  if (state.timeout != null) {
    const timeoutId = setTimeout(() => {
      timedOut = true;
      killSignalController.kill();
    }, state.timeout);
    disposables.push({
      [Symbol.dispose]() {
        clearTimeout(timeoutId);
      }
    });
  }
  const [stdoutBuffer, stderrBuffer, combinedBuffer] = getBuffers();
  const stdout = new ShellPipeWriter(
    state.stdout.kind,
    stdoutBuffer === "null" ? new NullPipeWriter() : stdoutBuffer === "inherit" ? Deno.stdout : stdoutBuffer
  );
  const stderr = new ShellPipeWriter(
    state.stderr.kind,
    stderrBuffer === "null" ? new NullPipeWriter() : stderrBuffer === "inherit" ? Deno.stderr : stderrBuffer
  );
  const { text: commandText, fds } = state.command;
  const signal = killSignalController.signal;
  return new CommandChild((resolve4, reject) => __async(this, null, function* () {
    var _a2;
    try {
      const list = parseCommand(commandText);
      const stdin = yield takeStdin();
      let code3 = yield spawn(list, {
        stdin: stdin instanceof ReadableStream ? readerFromStreamReader2(stdin.getReader()) : stdin,
        stdout,
        stderr,
        env: buildEnv(state.env, state.clearEnv),
        commands: state.commands,
        cwd: (_a2 = state.cwd) != null ? _a2 : Deno.cwd(),
        exportEnv: state.exportEnv,
        clearedEnv: state.clearEnv,
        signal,
        fds
      });
      if (code3 !== 0) {
        if (timedOut) {
          code3 = 124;
        }
        const noThrow = state.noThrow instanceof Array ? state.noThrow.includes(code3) : state.noThrow;
        if (!noThrow) {
          if (stdin instanceof ReadableStream) {
            if (!stdin.locked) {
              stdin.cancel();
            }
          }
          if (timedOut) {
            throw new Error(`Timed out with exit code: ${code3}`);
          } else if (signal.aborted) {
            throw new Error(`${timedOut ? "Timed out" : "Aborted"} with exit code: ${code3}`);
          } else {
            throw new Error(`Exited with code: ${code3}`);
          }
        }
      }
      const result = new CommandResult(
        code3,
        finalizeCommandResultBuffer(stdoutBuffer),
        finalizeCommandResultBuffer(stderrBuffer),
        combinedBuffer instanceof Buffer ? combinedBuffer : void 0
      );
      const maybeError = yield cleanupDisposablesAndMaybeGetError(void 0);
      if (maybeError) {
        reject(maybeError);
      } else {
        resolve4(result);
      }
    } catch (err) {
      finalizeCommandResultBufferForError(stdoutBuffer, err);
      finalizeCommandResultBufferForError(stderrBuffer, err);
      reject(yield cleanupDisposablesAndMaybeGetError(err));
    }
  }), {
    pipedStdoutBuffer: stdoutBuffer instanceof PipedBuffer ? stdoutBuffer : void 0,
    pipedStderrBuffer: stderrBuffer instanceof PipedBuffer ? stderrBuffer : void 0,
    killSignalController
  });
  function cleanupDisposablesAndMaybeGetError(maybeError) {
    return __async(this, null, function* () {
      const errors = [];
      if (maybeError) {
        errors.push(maybeError);
      }
      for (const disposable of disposables) {
        try {
          disposable[Symbol.dispose]();
        } catch (err) {
          errors.push(err);
        }
      }
      if (asyncDisposables.length > 0) {
        yield Promise.all(asyncDisposables.map((d) => __async(this, null, function* () {
          try {
            yield d[Symbol.asyncDispose]();
          } catch (err) {
            errors.push(err);
          }
        })));
      }
      if (errors.length === 1) {
        return errors[0];
      } else if (errors.length > 1) {
        return new AggregateError(errors);
      } else {
        return void 0;
      }
    });
  }
  function takeStdin() {
    return __async(this, null, function* () {
      if (state.stdin instanceof Box) {
        const stdin = state.stdin.value;
        if (stdin === "consumed") {
          throw new Error(
            "Cannot spawn command. Stdin was already consumed when a previous command using the same stdin was spawned. You need to call `.stdin(...)` again with a new value before spawning."
          );
        }
        state.stdin.value = "consumed";
        return stdin;
      } else if (state.stdin instanceof Deferred) {
        const stdin = yield state.stdin.create();
        if (stdin instanceof ReadableStream) {
          let _a2;
          asyncDisposables.push({
            [Symbol.asyncDispose]() {
              return __async(this, null, function* () {
                if (!stdin.locked) {
                  yield stdin.cancel();
                }
              });
            }
          });
        }
        return stdin;
      } else {
        return state.stdin;
      }
    });
  }
  function getBuffers() {
    const hasProgressBars = isShowingProgressBars();
    const stdoutBuffer2 = getOutputBuffer(Deno.stdout, state.stdout);
    const stderrBuffer2 = getOutputBuffer(Deno.stderr, state.stderr);
    if (state.combinedStdoutStderr) {
      if (typeof stdoutBuffer2 === "string" || typeof stderrBuffer2 === "string") {
        throw new Error("Internal programming error. Expected writers for stdout and stderr.");
      }
      const combinedBuffer2 = new Buffer();
      return [
        getCapturingBuffer(stdoutBuffer2, combinedBuffer2),
        getCapturingBuffer(stderrBuffer2, combinedBuffer2),
        combinedBuffer2
      ];
    }
    return [stdoutBuffer2, stderrBuffer2, void 0];
    function getCapturingBuffer(buffer, combinedBuffer2) {
      if ("write" in buffer) {
        return new CapturingBufferWriter(buffer, combinedBuffer2);
      } else {
        return new CapturingBufferWriterSync(buffer, combinedBuffer2);
      }
    }
    function getOutputBuffer(inheritWriter, { kind, options }) {
      if (typeof kind === "object") {
        if (kind instanceof Path) {
          const file = kind.openSync({ write: true, truncate: true, create: true });
          disposables.push(file);
          return file;
        } else if (kind instanceof WritableStream) {
          let _a2;
          const streamWriter = kind.getWriter();
          asyncDisposables.push({
            [Symbol.asyncDispose]() {
              return __async(this, null, function* () {
                streamWriter.releaseLock();
                if (!(options == null ? void 0 : options.preventClose)) {
                  try {
                    yield kind.close();
                  } catch (e) {
                  }
                }
              });
            }
          });
          return writerFromStreamWriter(streamWriter);
        } else {
          return kind;
        }
      }
      switch (kind) {
        case "inherit":
          if (hasProgressBars) {
            return new InheritStaticTextBypassWriter(inheritWriter);
          } else {
            return "inherit";
          }
        case "piped":
          return new PipedBuffer();
        case "inheritPiped":
          return new CapturingBufferWriterSync(inheritWriter, new Buffer());
        case "null":
          return "null";
        default: {
          const _assertNever = kind;
          throw new Error("Unhandled.");
        }
      }
    }
  }
  function finalizeCommandResultBuffer(buffer) {
    var _a2;
    if (buffer instanceof CapturingBufferWriterSync || buffer instanceof CapturingBufferWriter) {
      return buffer.getBuffer();
    } else if (buffer instanceof InheritStaticTextBypassWriter) {
      buffer.flush();
      return "inherit";
    } else if (buffer instanceof PipedBuffer) {
      buffer.close();
      return (_a2 = buffer.getBuffer()) != null ? _a2 : "streamed";
    } else if (typeof buffer === "object") {
      return "streamed";
    } else {
      return buffer;
    }
  }
  function finalizeCommandResultBufferForError(buffer, error) {
    if (buffer instanceof InheritStaticTextBypassWriter) {
      buffer.flush();
    } else if (buffer instanceof PipedBuffer) {
      buffer.setError(error);
    }
  }
}
var CommandResult = (_y = class {
  /** @internal */
  constructor(code3, stdout, stderr, combined) {
    __privateAdd(this, _stdout);
    __privateAdd(this, _stderr);
    __privateAdd(this, _combined);
    /** The exit code. */
    __publicField(this, "code");
    __privateAdd(this, _memoizedStdout);
    __privateAdd(this, _memoizedStdoutJson);
    __privateAdd(this, _memoizedStderr);
    __privateAdd(this, _memoizedStderrJson);
    __privateAdd(this, _memoizedCombined);
    this.code = code3;
    __privateSet(this, _stdout, stdout);
    __privateSet(this, _stderr, stderr);
    __privateSet(this, _combined, combined);
  }
  /** Raw decoded stdout text. */
  get stdout() {
    if (!__privateGet(this, _memoizedStdout)) {
      __privateSet(this, _memoizedStdout, textDecoder2.decode(this.stdoutBytes));
    }
    return __privateGet(this, _memoizedStdout);
  }
  /**
   * Stdout text as JSON.
   *
   * @remarks Will throw if it can't be parsed as JSON.
   */
  get stdoutJson() {
    if (__privateGet(this, _memoizedStdoutJson) == null) {
      __privateSet(this, _memoizedStdoutJson, JSON.parse(this.stdout));
    }
    return __privateGet(this, _memoizedStdoutJson);
  }
  /** Raw stdout bytes. */
  get stdoutBytes() {
    if (__privateGet(this, _stdout) === "streamed") {
      throw new Error(
        `Stdout was streamed to another source and is no longer available.`
      );
    }
    if (typeof __privateGet(this, _stdout) === "string") {
      throw new Error(
        `Stdout was not piped (was ${__privateGet(this, _stdout)}). Call .stdout("piped") or .stdout("inheritPiped") when building the command.`
      );
    }
    return __privateGet(this, _stdout).bytes({ copy: false });
  }
  /** Raw decoded stdout text. */
  get stderr() {
    if (!__privateGet(this, _memoizedStderr)) {
      __privateSet(this, _memoizedStderr, textDecoder2.decode(this.stderrBytes));
    }
    return __privateGet(this, _memoizedStderr);
  }
  /**
   * Stderr text as JSON.
   *
   * @remarks Will throw if it can't be parsed as JSON.
   */
  get stderrJson() {
    if (__privateGet(this, _memoizedStderrJson) == null) {
      __privateSet(this, _memoizedStderrJson, JSON.parse(this.stderr));
    }
    return __privateGet(this, _memoizedStderrJson);
  }
  /** Raw stderr bytes. */
  get stderrBytes() {
    if (__privateGet(this, _stderr) === "streamed") {
      throw new Error(
        `Stderr was streamed to another source and is no longer available.`
      );
    }
    if (typeof __privateGet(this, _stderr) === "string") {
      throw new Error(
        `Stderr was not piped (was ${__privateGet(this, _stderr)}). Call .stderr("piped") or .stderr("inheritPiped") when building the command.`
      );
    }
    return __privateGet(this, _stderr).bytes({ copy: false });
  }
  /** Raw combined stdout and stderr text. */
  get combined() {
    if (!__privateGet(this, _memoizedCombined)) {
      __privateSet(this, _memoizedCombined, textDecoder2.decode(this.combinedBytes));
    }
    return __privateGet(this, _memoizedCombined);
  }
  /** Raw combined stdout and stderr bytes. */
  get combinedBytes() {
    if (__privateGet(this, _combined) == null) {
      throw new Error("Stdout and stderr were not combined. Call .captureCombined() when building the command.");
    }
    return __privateGet(this, _combined).bytes({ copy: false });
  }
}, _stdout = new WeakMap(), _stderr = new WeakMap(), _combined = new WeakMap(), _memoizedStdout = new WeakMap(), _memoizedStdoutJson = new WeakMap(), _memoizedStderr = new WeakMap(), _memoizedStderrJson = new WeakMap(), _memoizedCombined = new WeakMap(), _y);
function buildEnv(env, clearEnv) {
  const result = clearEnv ? {} : Deno.env.toObject();
  for (const [key, value] of Object.entries(env)) {
    if (value == null) {
      delete result[key];
    } else {
      result[key] = value;
    }
  }
  return result;
}
function escapeArg(arg) {
  if (/^[A-Za-z0-9]+$/.test(arg)) {
    return arg;
  } else {
    return `'${arg.replaceAll("'", `'"'"'`)}'`;
  }
}
function validateCommandName(command) {
  if (command.match(/^[a-zA-Z0-9-_]+$/) == null) {
    throw new Error("Invalid command name");
  }
}
var SHELL_SIGNAL_CTOR_SYMBOL = Symbol();
var KillSignalController = (_z = class {
  constructor() {
    __privateAdd(this, _state4);
    __privateAdd(this, _killSignal);
    __privateSet(this, _state4, {
      abortedCode: void 0,
      listeners: []
    });
    __privateSet(this, _killSignal, new KillSignal(SHELL_SIGNAL_CTOR_SYMBOL, __privateGet(this, _state4)));
  }
  get signal() {
    return __privateGet(this, _killSignal);
  }
  /** Send a signal to the downstream child process. Note that SIGTERM,
   * SIGKILL, SIGABRT, SIGQUIT, SIGINT, or SIGSTOP will cause all the commands
   * to be considered "aborted" and will return a 124 exit code, while other
   * signals will just be forwarded to the commands.
   */
  kill(signal = "SIGTERM") {
    sendSignalToState(__privateGet(this, _state4), signal);
  }
}, _state4 = new WeakMap(), _killSignal = new WeakMap(), _z);
var KillSignal = (_A = class {
  /** @internal */
  constructor(symbol, state) {
    __privateAdd(this, _state5);
    if (symbol !== SHELL_SIGNAL_CTOR_SYMBOL) {
      throw new Error("Constructing instances of KillSignal is not permitted.");
    }
    __privateSet(this, _state5, state);
  }
  /** Returns if the command signal has ever received a SIGTERM,
   * SIGKILL, SIGABRT, SIGQUIT, SIGINT, or SIGSTOP
   */
  get aborted() {
    return __privateGet(this, _state5).abortedCode !== void 0;
  }
  /** Gets the exit code to use if aborted. */
  get abortedExitCode() {
    return __privateGet(this, _state5).abortedCode;
  }
  /**
   * Causes the provided kill signal to be triggered when this
   * signal receives a signal.
   */
  linkChild(killSignal) {
    const listener = (signal) => {
      sendSignalToState(__privateGet(killSignal, _state5), signal);
    };
    this.addListener(listener);
    return {
      unsubscribe: () => {
        this.removeListener(listener);
      }
    };
  }
  addListener(listener) {
    __privateGet(this, _state5).listeners.push(listener);
  }
  removeListener(listener) {
    const index = __privateGet(this, _state5).listeners.indexOf(listener);
    if (index >= 0) {
      __privateGet(this, _state5).listeners.splice(index, 1);
    }
  }
}, _state5 = new WeakMap(), _A);
function sendSignalToState(state, signal) {
  const code3 = getSignalAbortCode(signal);
  if (code3 !== void 0) {
    state.abortedCode = code3;
  }
  for (const listener of state.listeners) {
    listener(signal);
  }
}
function getSignalAbortCode(signal) {
  switch (signal) {
    case "SIGTERM":
      return 128 + 15;
    case "SIGKILL":
      return 128 + 9;
    case "SIGABRT":
      return 128 + 6;
    case "SIGQUIT":
      return 128 + 3;
    case "SIGINT":
      return 128 + 2;
    case "SIGSTOP":
      return 128 + 19;
    default:
      return void 0;
  }
}
function template(strings, exprs) {
  return templateInner(strings, exprs, escapeArg);
}
function templateRaw(strings, exprs) {
  return templateInner(strings, exprs, void 0);
}
function templateInner(strings, exprs, escape) {
  let nextStreamFd = 3;
  let text = "";
  let streams;
  const exprsCount = exprs.length;
  for (let i = 0; i < Math.max(strings.length, exprs.length); i++) {
    if (strings.length > i) {
      text += strings[i];
    }
    if (exprs.length > i) {
      try {
        const expr = exprs[i];
        if (expr == null) {
          throw "Expression was null or undefined.";
        }
        const inputOrOutputRedirect = detectInputOrOutputRedirect(text);
        if (inputOrOutputRedirect === "<") {
          if (expr instanceof Path) {
            text += templateLiteralExprToString(expr, escape);
          } else if (typeof expr === "string") {
            handleReadableStream(
              () => new ReadableStream({
                start(controller) {
                  controller.enqueue(new TextEncoder().encode(expr));
                  controller.close();
                }
              })
            );
          } else if (expr instanceof ReadableStream) {
            handleReadableStream(() => expr);
          } else if (expr == null ? void 0 : expr[symbols.readable]) {
            handleReadableStream(() => {
              var _a2;
              const stream = (_a2 = expr[symbols.readable]) == null ? void 0 : _a2.call(expr);
              if (!(stream instanceof ReadableStream)) {
                throw new Error(
                  `Expected a ReadableStream or an object with a [$.symbols.readable] method that returns a ReadableStream at expression ${i + 1}/${exprsCount}.`
                );
              }
              return stream;
            });
          } else if (expr instanceof FsFileWrapper) {
            handleReadableStream(() => expr.readable);
          } else if (expr instanceof Uint8Array) {
            handleReadableStream(() => {
              return new ReadableStream({
                start(controller) {
                  controller.enqueue(expr);
                  controller.close();
                }
              });
            });
          } else if (expr instanceof Response) {
            handleReadableStream(() => {
              var _a2;
              return (_a2 = expr.body) != null ? _a2 : new ReadableStream({
                start(controller) {
                  controller.close();
                }
              });
            });
          } else if (expr instanceof Function) {
            handleReadableStream(() => {
              try {
                const result = expr();
                if (!(result instanceof ReadableStream)) {
                  throw new Error("Function did not return a ReadableStream.");
                }
                return result;
              } catch (err) {
                throw new Error(
                  `Error getting ReadableStream from function at expression ${i + 1}/${exprsCount}. ${errorToString(err)}`
                );
              }
            });
          } else {
            throw new Error("Unsupported object provided to input redirect.");
          }
        } else if (inputOrOutputRedirect === ">") {
          if (expr instanceof Path) {
            text += templateLiteralExprToString(expr, escape);
          } else if (expr instanceof WritableStream) {
            handleWritableStream(() => expr);
          } else if (expr instanceof Uint8Array) {
            let pos = 0;
            handleWritableStream(() => {
              return new WritableStream({
                write(chunk) {
                  const nextPos = chunk.length + pos;
                  if (nextPos > expr.length) {
                    const chunkLength = expr.length - pos;
                    expr.set(chunk.slice(0, chunkLength), pos);
                    throw new Error(`Overflow writing ${nextPos} bytes to Uint8Array (length: ${exprsCount}).`);
                  }
                  expr.set(chunk, pos);
                  pos = nextPos;
                }
              });
            });
          } else if (expr instanceof FsFileWrapper) {
            handleWritableStream(() => expr.writable);
          } else if (expr == null ? void 0 : expr[symbols.writable]) {
            handleWritableStream(() => {
              var _a2;
              const stream = (_a2 = expr[symbols.writable]) == null ? void 0 : _a2.call(expr);
              if (!(stream instanceof WritableStream)) {
                throw new Error(
                  `Expected a WritableStream or an object with a [$.symbols.writable] method that returns a WritableStream at expression ${i + 1}/${exprsCount}.`
                );
              }
              return stream;
            });
          } else if (expr instanceof Function) {
            handleWritableStream(() => {
              try {
                const result = expr();
                if (!(result instanceof WritableStream)) {
                  throw new Error("Function did not return a WritableStream.");
                }
                return result;
              } catch (err) {
                throw new Error(
                  `Error getting WritableStream from function at expression ${i + 1}/${exprsCount}. ${errorToString(err)}`
                );
              }
            });
          } else if (typeof expr === "string") {
            throw new Error(
              "Cannot provide strings to output redirects. Did you mean to provide a path instead via the `$.path(...)` API?"
            );
          } else {
            throw new Error("Unsupported object provided to output redirect.");
          }
        } else {
          text += templateLiteralExprToString(expr, escape);
        }
      } catch (err) {
        const startMessage = exprsCount === 1 ? "Failed resolving expression in command." : `Failed resolving expression ${i + 1}/${exprsCount} in command.`;
        throw new Error(`${startMessage} ${errorToString(err)}`);
      }
    }
  }
  return {
    text,
    fds: streams
  };
  function handleReadableStream(createStream) {
    streams != null ? streams : streams = new StreamFds();
    const fd = nextStreamFd++;
    streams.insertReader(fd, () => {
      const reader = createStream().getReader();
      return __spreadProps(__spreadValues({}, readerFromStreamReader2(reader)), {
        [Symbol.dispose]() {
          reader.releaseLock();
        }
      });
    });
    text = text.trimEnd() + "&" + fd;
  }
  function handleWritableStream(createStream) {
    streams != null ? streams : streams = new StreamFds();
    const fd = nextStreamFd++;
    streams.insertWriter(fd, () => {
      const stream = createStream();
      const writer = stream.getWriter();
      return __spreadProps(__spreadValues({}, writerFromStreamWriter(writer)), {
        [Symbol.asyncDispose]() {
          return __async(this, null, function* () {
            writer.releaseLock();
            try {
              yield stream.close();
            } catch (e) {
            }
          });
        }
      });
    });
    text = text.trimEnd() + "&" + fd;
  }
}
function detectInputOrOutputRedirect(text) {
  text = text.trimEnd();
  if (text.endsWith(">")) {
    return ">";
  } else if (text.endsWith("<")) {
    return "<";
  } else {
    return void 0;
  }
}
function templateLiteralExprToString(expr, escape) {
  let result;
  if (typeof expr === "string") {
    result = expr;
  } else if (expr instanceof Array) {
    return expr.map((e) => templateLiteralExprToString(e, escape)).join(" ");
  } else if (expr instanceof CommandResult) {
    result = expr.stdout.replace(/\r?\n$/, "");
  } else if (expr instanceof CommandBuilder) {
    throw new Error(
      "Providing a command builder is not yet supported (https://github.com/dsherret/dax/issues/239). Await the command builder's text before using it in an expression (ex. await $`cmd`.text())."
    );
  } else if (typeof expr === "object" && expr.toString === Object.prototype.toString) {
    throw new Error("Provided object does not override `toString()`.");
  } else {
    result = `${expr}`;
  }
  return escape ? escape(result) : result;
}
function extend(target, source) {
  for (const prop in source) {
    if (Object.hasOwn(source, prop)) {
      target[prop] = source[prop];
    }
  }
  return target;
}
var reLeadingNewline = /^[ \t]*(?:\r\n|\r|\n)/;
var reTrailingNewline = /(?:\r\n|\r|\n)[ \t]*$/;
var reStartsWithNewlineOrIsEmpty = /^(?:[\r\n]|$)/;
var reDetectIndentation = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/;
var reOnlyWhitespaceWithAtLeastOneNewline = /^[ \t]*[\r\n][ \t\r\n]*$/;
function _outdentArray(strings, firstInterpolatedValueSetsIndentationLevel, options) {
  let indentationLevel = 0;
  const match = strings[0].match(reDetectIndentation);
  if (match) {
    indentationLevel = match[1].length;
  }
  const reSource = `(\\r\\n|\\r|\\n).{0,${indentationLevel}}`;
  const reMatchIndent = new RegExp(reSource, "g");
  if (firstInterpolatedValueSetsIndentationLevel) {
    strings = strings.slice(1);
  }
  const { newline, trimLeadingNewline, trimTrailingNewline } = options;
  const normalizeNewlines = typeof newline === "string";
  const l = strings.length;
  const outdentedStrings = strings.map((v, i) => {
    v = v.replace(reMatchIndent, "$1");
    if (i === 0 && trimLeadingNewline) {
      v = v.replace(reLeadingNewline, "");
    }
    if (i === l - 1 && trimTrailingNewline) {
      v = v.replace(reTrailingNewline, "");
    }
    if (normalizeNewlines) {
      v = v.replace(/\r\n|\n|\r/g, (_) => newline);
    }
    return v;
  });
  return outdentedStrings;
}
function concatStringsAndValues(strings, values) {
  let ret = "";
  for (let i = 0, l = strings.length; i < l; i++) {
    ret += strings[i];
    if (i < l - 1) {
      ret += values[i];
    }
  }
  return ret;
}
function isTemplateStringsArray(v) {
  return Object.hasOwn(v, "raw") && Object.hasOwn(v, "length");
}
function createInstance(options) {
  const arrayAutoIndentCache = /* @__PURE__ */ new WeakMap();
  const arrayFirstInterpSetsIndentCache = /* @__PURE__ */ new WeakMap();
  function outdent(stringsOrOptions, ...values) {
    if (isTemplateStringsArray(stringsOrOptions)) {
      const strings = stringsOrOptions;
      const firstInterpolatedValueSetsIndentationLevel = (values[0] === outdent || values[0] === defaultOutdent) && reOnlyWhitespaceWithAtLeastOneNewline.test(strings[0]) && reStartsWithNewlineOrIsEmpty.test(strings[1]);
      const cache = firstInterpolatedValueSetsIndentationLevel ? arrayFirstInterpSetsIndentCache : arrayAutoIndentCache;
      let renderedArray = cache.get(strings);
      if (!renderedArray) {
        renderedArray = _outdentArray(
          strings,
          firstInterpolatedValueSetsIndentationLevel,
          options
        );
        cache.set(strings, renderedArray);
      }
      if (values.length === 0) {
        return renderedArray[0];
      }
      const rendered = concatStringsAndValues(
        renderedArray,
        firstInterpolatedValueSetsIndentationLevel ? values.slice(1) : values
      );
      return rendered;
    } else {
      return createInstance(
        extend(extend({}, options), stringsOrOptions || {})
      );
    }
  }
  const fullOutdent = extend(outdent, {
    string(str) {
      return _outdentArray([str], false, options)[0];
    }
  });
  return fullOutdent;
}
var defaultOutdent = createInstance({
  trimLeadingNewline: true,
  trimTrailingNewline: true
});
function sleep(delay) {
  const ms = delayToMs(delay);
  return new Promise((resolve4) => setTimeout(resolve4, ms));
}
function withRetries($local, errorLogger, opts) {
  return __async(this, null, function* () {
    const delayIterator = delayToIterator(opts.delay);
    for (let i = 0; i < opts.count; i++) {
      if (i > 0) {
        const nextDelay = delayIterator.next();
        if (!opts.quiet) {
          $local.logWarn(`Failed. Trying again in ${formatMillis(nextDelay)}...`);
        }
        yield sleep(nextDelay);
        if (!opts.quiet) {
          $local.logStep(`Retrying attempt ${i + 1}/${opts.count}...`);
        }
      }
      try {
        return yield opts.action();
      } catch (err) {
        errorLogger(err);
      }
    }
    throw new Error(`Failed after ${opts.count} attempts.`);
  });
}
function cd(path) {
  if (typeof path === "string" || path instanceof URL) {
    path = new Path(path);
  } else if (!(path instanceof Path) && typeof (path == null ? void 0 : path.url) === "string") {
    path = new Path(path.url).parentOrThrow();
  }
  Deno.chdir(path.toString());
}
function buildInitial$State(opts) {
  var _a2, _b2;
  return {
    commandBuilder: new TreeBox((_a2 = opts.commandBuilder) != null ? _a2 : new CommandBuilder()),
    requestBuilder: (_b2 = opts.requestBuilder) != null ? _b2 : new RequestBuilder(),
    // deno-lint-ignore no-console
    infoLogger: new LoggerTreeBox(console.error),
    // deno-lint-ignore no-console
    warnLogger: new LoggerTreeBox(console.error),
    // deno-lint-ignore no-console
    errorLogger: new LoggerTreeBox(console.error),
    indentLevel: new Box(0),
    extras: opts.extras
  };
}
var helperObject = {
  path: createPath,
  cd,
  escapeArg,
  stripAnsi(text) {
    return wasmInstance.strip_ansi_codes(text);
  },
  dedent: defaultOutdent,
  sleep,
  which(commandName) {
    if (commandName.toUpperCase() === "DENO") {
      return Promise.resolve(Deno.execPath());
    } else {
      return which(commandName, denoWhichRealEnv);
    }
  },
  whichSync(commandName) {
    if (commandName.toUpperCase() === "DENO") {
      return Deno.execPath();
    } else {
      return whichSync(commandName, denoWhichRealEnv);
    }
  }
};
function build$FromState(state) {
  const logDepthObj = {
    get logDepth() {
      return state.indentLevel.value;
    },
    set logDepth(value) {
      if (value < 0 || value % 1 !== 0) {
        throw new Error("Expected a positive integer.");
      }
      state.indentLevel.value = value;
    }
  };
  const result = Object.assign(
    (strings, ...exprs) => {
      const textState = template(strings, exprs);
      return state.commandBuilder.getValue()[setCommandTextStateSymbol](textState);
    },
    helperObject,
    logDepthObj,
    {
      build$(opts = {}) {
        var _a2;
        return build$FromState({
          commandBuilder: opts.commandBuilder != null ? new TreeBox(opts.commandBuilder) : state.commandBuilder.createChild(),
          requestBuilder: (_a2 = opts.requestBuilder) != null ? _a2 : state.requestBuilder,
          errorLogger: state.errorLogger.createChild(),
          infoLogger: state.infoLogger.createChild(),
          warnLogger: state.warnLogger.createChild(),
          indentLevel: state.indentLevel,
          extras: __spreadValues(__spreadValues({}, state.extras), opts.extras)
        });
      },
      log(...data) {
        state.infoLogger.getValue()(getLogText(data));
      },
      logLight(...data) {
        state.infoLogger.getValue()(gray2(getLogText(data)));
      },
      logStep(firstArg, ...data) {
        logStep(firstArg, data, (t) => bold2(green2(t)), state.infoLogger.getValue());
      },
      logError(firstArg, ...data) {
        logStep(firstArg, data, (t) => bold2(red2(t)), state.errorLogger.getValue());
      },
      logWarn(firstArg, ...data) {
        logStep(firstArg, data, (t) => bold2(yellow(t)), state.warnLogger.getValue());
      },
      logGroup(labelOrAction, maybeAction) {
        const label = typeof labelOrAction === "string" ? labelOrAction : void 0;
        if (label) {
          state.infoLogger.getValue()(getLogText([label]));
        }
        state.indentLevel.value++;
        const action = label != null ? maybeAction : labelOrAction;
        if (action != null) {
          let wasPromise = false;
          try {
            const result2 = action();
            if (result2 instanceof Promise) {
              wasPromise = true;
              return result2.finally(() => {
                if (state.indentLevel.value > 0) {
                  state.indentLevel.value--;
                }
              });
            } else {
              return result2;
            }
          } finally {
            if (!wasPromise) {
              if (state.indentLevel.value > 0) {
                state.indentLevel.value--;
              }
            }
          }
        }
      },
      logGroupEnd() {
        if (state.indentLevel.value > 0) {
          state.indentLevel.value--;
        }
      },
      commandExists(commandName) {
        if (state.commandBuilder.getValue()[getRegisteredCommandNamesSymbol]().includes(commandName)) {
          return Promise.resolve(true);
        }
        return helperObject.which(commandName).then((c) => c != null);
      },
      commandExistsSync(commandName) {
        if (state.commandBuilder.getValue()[getRegisteredCommandNamesSymbol]().includes(commandName)) {
          return true;
        }
        return helperObject.whichSync(commandName) != null;
      },
      maybeConfirm,
      confirm,
      maybeSelect,
      select,
      maybeMultiSelect,
      multiSelect,
      maybePrompt,
      prompt,
      progress(messageOrText, options) {
        const opts = typeof messageOrText === "string" ? (() => {
          const words = messageOrText.split(" ");
          return __spreadValues({
            prefix: words[0],
            message: words.length > 1 ? words.slice(1).join(" ") : void 0
          }, options);
        })() : messageOrText;
        return new ProgressBar((...data) => {
          state.infoLogger.getValue()(...data);
        }, opts);
      },
      setInfoLogger(logger2) {
        state.infoLogger.setValue(logger2);
      },
      setWarnLogger(logger2) {
        state.warnLogger.setValue(logger2);
      },
      setErrorLogger(logger2) {
        state.errorLogger.setValue(logger2);
        const commandBuilder = state.commandBuilder.getValue();
        commandBuilder.setPrintCommandLogger(
          (cmd) => logger2(white2(">"), blue(cmd))
        );
        state.commandBuilder.setValue(commandBuilder);
      },
      setPrintCommand(value) {
        const commandBuilder = state.commandBuilder.getValue().printCommand(value);
        state.commandBuilder.setValue(commandBuilder);
      },
      symbols,
      request(url) {
        return state.requestBuilder.url(url);
      },
      raw(strings, ...exprs) {
        const textState = templateRaw(strings, exprs);
        return state.commandBuilder.getValue()[setCommandTextStateSymbol](textState);
      },
      withRetries(opts) {
        return withRetries(result, state.errorLogger.getValue(), opts);
      }
    },
    state.extras
  );
  const keyName = "logDepth";
  Object.defineProperty(result, keyName, Object.getOwnPropertyDescriptor(logDepthObj, keyName));
  state.requestBuilder = state.requestBuilder[withProgressBarFactorySymbol]((message) => result.progress(message));
  return result;
  function getLogText(data) {
    const combinedText = data.map((d) => {
      const typeofD = typeof d;
      if (typeofD !== "object" && typeofD !== "undefined") {
        return d;
      } else {
        return Deno.inspect(d, { colors: true });
      }
    }).join(" ");
    if (state.indentLevel.value === 0) {
      return combinedText;
    } else {
      const indentText = "  ".repeat(state.indentLevel.value);
      return combinedText.split(/\n/).map((l) => `${indentText}${l}`).join("\n");
    }
  }
  function logStep(firstArg, data, colourize, logger2) {
    if (data.length === 0) {
      let i = 0;
      while (i < firstArg.length && firstArg[i] === " ") {
        i++;
      }
      while (i < firstArg.length && firstArg[i] !== " ") {
        i++;
      }
      firstArg = colourize(firstArg.substring(0, i)) + firstArg.substring(i);
    } else {
      firstArg = colourize(firstArg);
    }
    logger2(getLogText([firstArg, ...data]));
  }
}
var $ = build$FromState(buildInitial$State({
  isGlobal: true
}));
var mod_default = $;
function createPath(path) {
  if (path instanceof Path) {
    return path;
  } else {
    return new Path(path);
  }
}
function filterInPlace(array, predicate) {
  let outputIndex = 0;
  for (const cur of array) {
    if (!predicate(cur)) {
      continue;
    }
    array[outputIndex] = cur;
    outputIndex += 1;
  }
  array.splice(outputIndex);
  return array;
}
function deepMerge(record, other, options) {
  return deepMergeInternal(record, other, /* @__PURE__ */ new Set(), options);
}
function deepMergeInternal(record, other, seen, options) {
  const result = {};
  const keys = /* @__PURE__ */ new Set([
    ...getKeys(record),
    ...getKeys(other)
  ]);
  for (const key of keys) {
    if (key === "__proto__") {
      continue;
    }
    const a = record[key];
    if (!Object.hasOwn(other, key)) {
      result[key] = a;
      continue;
    }
    const b = other[key];
    if (isNonNullObject(a) && isNonNullObject(b) && !seen.has(a) && !seen.has(b)) {
      seen.add(a);
      seen.add(b);
      result[key] = mergeObjects(a, b, seen, options);
      continue;
    }
    result[key] = b;
  }
  return result;
}
function mergeObjects(left, right, seen, options = {
  arrays: "merge",
  sets: "merge",
  maps: "merge"
}) {
  if (isMergeable(left) && isMergeable(right)) {
    return deepMergeInternal(left, right, seen, options);
  }
  if (isIterable(left) && isIterable(right)) {
    if (Array.isArray(left) && Array.isArray(right)) {
      if (options.arrays === "merge") {
        return left.concat(right);
      }
      return right;
    }
    if (left instanceof Map && right instanceof Map) {
      if (options.maps === "merge") {
        return new Map([
          ...left,
          ...right
        ]);
      }
      return right;
    }
    if (left instanceof Set && right instanceof Set) {
      if (options.sets === "merge") {
        return /* @__PURE__ */ new Set([
          ...left,
          ...right
        ]);
      }
      return right;
    }
  }
  return right;
}
function isMergeable(value) {
  return Object.getPrototypeOf(value) === Object.prototype;
}
function isIterable(value) {
  return typeof value[Symbol.iterator] === "function";
}
function isNonNullObject(value) {
  return value !== null && typeof value === "object";
}
function getKeys(record) {
  const result = Object.getOwnPropertySymbols(record);
  filterInPlace(
    result,
    (key) => Object.prototype.propertyIsEnumerable.call(record, key)
  );
  result.push(...Object.keys(record));
  return result;
}
function addSymbolMetadata(target, prop, key, val) {
  let roorMetadata;
  let propName;
  if (prop.addInitializer) {
    roorMetadata = prop.metadata;
    propName = prop.name;
  } else {
    if (!target.constructor[Symbol.metadata]) {
      target.constructor[Symbol.metadata] = {};
    }
    roorMetadata = target.constructor[Symbol.metadata];
    propName = prop;
  }
  if (!roorMetadata.clite) {
    roorMetadata.clite = {};
  }
  const metadata = roorMetadata.clite;
  if (!metadata[key]) {
    metadata[key] = {};
  }
  if (Object.hasOwn(metadata[key], propName)) {
    if (!Array.isArray(metadata[key][propName])) {
      metadata[key][propName] = [metadata[key][propName]];
    }
    metadata[key][propName].push(val);
  } else {
    metadata[key][propName] = val;
  }
}
function getCliteSymbolMetadata(obj) {
  var _a2;
  const prototypes = [];
  let o = obj;
  while (o = Reflect.getPrototypeOf(o)) {
    prototypes.unshift(o);
  }
  let metadata = {};
  for (const prototype of prototypes) {
    const protMeta = ((_a2 = prototype.constructor[Symbol.metadata]) == null ? void 0 : _a2.clite) || {};
    metadata = deepMerge(metadata, protMeta);
  }
  return metadata;
}
function help(description) {
  return (target, prop) => addSymbolMetadata(target, prop, "help", description);
}
function type(typeHelp) {
  return (target, prop) => addSymbolMetadata(target, prop, "types", typeHelp);
}
function hidden() {
  return (target, prop) => addSymbolMetadata(target, prop, "hidden", true);
}
var { Deno: Deno4 } = globalThis;
var noColor3 = typeof (Deno4 == null ? void 0 : Deno4.noColor) === "boolean" ? Deno4.noColor : false;
var enabled2 = !noColor3;
function code2(open, close) {
  return {
    open: `\x1B[${open.join(";")}m`,
    close: `\x1B[${close}m`,
    regexp: new RegExp(`\\x1b\\[${close}m`, "g")
  };
}
function run2(str, code3) {
  return enabled2 ? `${code3.open}${str.replace(code3.regexp, code3.open)}${code3.close}` : str;
}
function bold3(str) {
  return run2(str, code2([1], 22));
}
function underline(str) {
  return run2(str, code2([4], 24));
}
function gray3(str) {
  return brightBlack2(str);
}
function brightBlack2(str) {
  return run2(str, code2([90], 39));
}
function bgRed2(str) {
  return run2(str, code2([41], 49));
}
var ANSI_PATTERN3 = new RegExp(
  [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TXZcf-nq-uy=><~]))"
  ].join("|"),
  "g"
);
var { ceil } = Math;
var peq = new Uint32Array(1114112);
var CAPITALIZED_WORD_REGEXP = new RegExp("\\p{Lu}\\p{Ll}+", "u");
var ACRONYM_REGEXP = new RegExp("\\p{Lu}+(?=(\\p{Lu}\\p{Ll})|\\P{L}|\\b)", "u");
var LOWERCASED_WORD_REGEXP = new RegExp("(\\p{Ll}+)", "u");
var ANY_LETTERS = new RegExp("\\p{L}+", "u");
var DIGITS_REGEXP = new RegExp("\\p{N}+", "u");
var WORD_OR_NUMBER_REGEXP = new RegExp(
  `${CAPITALIZED_WORD_REGEXP.source}|${ACRONYM_REGEXP.source}|${LOWERCASED_WORD_REGEXP.source}|${ANY_LETTERS.source}|${DIGITS_REGEXP.source}`,
  "gu"
);
function splitToWords(input) {
  var _a2;
  return (_a2 = input.match(WORD_OR_NUMBER_REGEXP)) != null ? _a2 : [];
}
function capitalizeWord(word) {
  var _a2;
  return word ? ((_a2 = word == null ? void 0 : word[0]) == null ? void 0 : _a2.toLocaleUpperCase()) + word.slice(1).toLocaleLowerCase() : word;
}
function toCamelCase(input) {
  input = input.trim();
  const [first = "", ...rest] = splitToWords(input);
  return [first.toLocaleLowerCase(), ...rest.map(capitalizeWord)].join("");
}
function toKebabCase(input) {
  input = input.trim();
  return splitToWords(input).join("-").toLocaleLowerCase();
}
function toSnakeCase(input) {
  input = input.trim();
  return splitToWords(input).join("_").toLocaleLowerCase();
}
var COMMENTS_REGEX = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var ARGUMENT_NAMES_REGEX = new RegExp("\\((?<args>.*?)\\)", "m");
function getFunctionArgNames(func) {
  var _a2;
  const fnStr = func.toString().replace(COMMENTS_REGEX, "");
  const argNames = ARGUMENT_NAMES_REGEX.exec(fnStr);
  return (argNames == null ? void 0 : argNames[1].length) && ((_a2 = argNames == null ? void 0 : argNames[1]) == null ? void 0 : _a2.replace(/\s*=\s*[^,]+\s*/g, "").split(",").map((arg) => arg.replace(/[\s()]+/g, ""))) || [];
}
function getMethodNames(obj) {
  const prototype = Object.getPrototypeOf(obj);
  return prototype.constructor.name === "Object" ? Object.getOwnPropertyNames(obj).filter((n) => typeof obj[n] === "function") : getMethodNamesDeep(obj);
}
function getMethodNamesDeep(obj) {
  const methods = [];
  let o = obj;
  while (o = Reflect.getPrototypeOf(o)) {
    if (o.constructor.name !== "Object") {
      methods.unshift(
        ...Reflect.ownKeys(o).filter(
          (k) => typeof k === "string" && k !== "constructor" && !methods.includes(k)
        )
      );
    }
  }
  return methods;
}
function getFieldNames(obj) {
  return Object.getOwnPropertyNames(obj).filter((n) => typeof obj[n] !== "function");
}
function getMethodArgNames(obj, methodName) {
  const prototype = Object.getPrototypeOf(obj);
  if (prototype.constructor.name === "Object") {
    return getFunctionArgNames(obj[methodName]);
  } else {
    return getFunctionArgNames(prototype[methodName]);
  }
}
var boldUnder = (str) => bold3(underline(str));
function align(input) {
  const maxCol0 = input.reduce((prev, cur) => Math.max(prev, cur[0].length), 0);
  const maxCol1 = input.reduce((prev, cur) => Math.max(prev, cur[1].length), 0);
  const maxCol23 = input.reduce(
    (prev, cur) => Math.max(prev, cur[2].length + cur[3].length),
    0
  ) + 1;
  return input.map(
    ([col0, col1, col2, col3]) => [
      col0.padStart(maxCol0),
      col1.padEnd(maxCol1) + " ",
      col2.padEnd(maxCol23 - col3.length),
      col3
    ].join("").trimEnd()
  );
}
function genCommandHelp(obj, metadata, helpLines) {
  var _a2, _b2, _c2;
  const methods = [
    ...Object.keys(metadata.methods).filter((m) => {
      var _a3;
      return !((_a3 = metadata.methods[m]) == null ? void 0 : _a3.hidden);
    }),
    ...metadata.subcommands.filter(
      (f) => {
        var _a3, _b3;
        return !((_a3 = metadata.fields[f]) == null ? void 0 : _a3.hidden) && !((_b3 = metadata.methods[f]) == null ? void 0 : _b3.hidden);
      }
    )
  ];
  if (methods.length > 0) {
    helpLines.push(boldUnder(`
Command${methods.length > 1 ? "s" : ""}:`));
    const linesCols = [];
    for (const method of methods) {
      let col1 = bold3(`  ${method}`);
      if (!metadata.subcommands.includes(method)) {
        const args = getMethodArgNames(obj, method);
        if (args.length > 0) {
          col1 += " " + args.map((arg) => `<${arg}>`).join(" ");
        }
      } else {
        col1 += " --help | [sub Options / cmd / args]";
      }
      let col2 = (_c2 = (_b2 = (_a2 = metadata.methods) == null ? void 0 : _a2[method]) == null ? void 0 : _b2.help) != null ? _c2 : "";
      if (method === metadata.defaultCommand) {
        col2 += col2.length ? " " : "";
        col2 += bold3("[default]");
      }
      linesCols.push(["", col1, col2, ""]);
    }
    helpLines.push(...align(linesCols));
  }
}
function genOptionsHelp(obj, metadata, helpLines, config) {
  var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
  const allFields = Object.keys(metadata.fields);
  const fields = allFields.filter((f) => {
    var _a3;
    return !((_a3 = metadata.fields[f]) == null ? void 0 : _a3.hidden);
  });
  helpLines.push(boldUnder(`
Option${fields.length ? "s" : ""}:`));
  const linesCols = [];
  linesCols.push([
    bold3(` -h,`),
    bold3(` --help`),
    "Show this help",
    gray3("[default: false]")
  ]);
  if ((config == null ? void 0 : config.configCli) || metadata.jsonConfig) {
    const configHelp = (config == null ? void 0 : config.configCli) || metadata.jsonConfig;
    linesCols.push([
      bold3(""),
      bold3(` --config`),
      typeof configHelp === "string" ? configHelp : "Use this json file or string to read the options",
      gray3("[string]")
    ]);
  }
  for (const field of fields) {
    const alias = [...(_b2 = (_a2 = metadata.fields[field]) == null ? void 0 : _a2.alias) != null ? _b2 : []];
    const aliasHelp = alias.map((a) => a.length === 1 ? `-${a},` : `--${toKebabCase(a)},`).join(" ");
    const col0 = bold3(` ${aliasHelp}`);
    const col1 = bold3(` --${toKebabCase(field)}`);
    let col2 = "";
    let col3 = "";
    const help2 = (_d2 = (_c2 = metadata.fields[field]) == null ? void 0 : _c2.help) != null ? _d2 : "";
    if (help2) {
      col2 += help2;
    }
    const defaultValue = (_f2 = (_e2 = metadata.fields[field]) == null ? void 0 : _e2.defaultHelp) != null ? _f2 : obj[field];
    if (defaultValue != void 0) {
      const defaultHelp = typeof defaultValue === "string" ? `"${defaultValue}"` : defaultValue;
      col3 = gray3(`[default: ${defaultHelp}]`);
    } else {
      const type2 = (_g2 = metadata.fields[field]) == null ? void 0 : _g2.type;
      if (type2) {
        col3 = gray3(`[${type2}]`);
      }
    }
    linesCols.push([col0, col1, col2, col3]);
    if ((_h2 = metadata.fields[field]) == null ? void 0 : _h2.negatable) {
      linesCols.push([
        bold3(" "),
        bold3(` --${toKebabCase("no_" + field)}`),
        typeof ((_i2 = metadata.fields[field]) == null ? void 0 : _i2.negatable) === "string" ? (_j2 = metadata.fields[field]) == null ? void 0 : _j2.negatable : "",
        ""
      ]);
    }
  }
  helpLines.push(...align(linesCols));
}
function genHelp(obj, metadata, config) {
  var _a2, _b2, _c2, _d2;
  const helpLines = [];
  if (metadata.help) {
    helpLines.push(metadata.help + "\n");
  }
  const name = Object.getPrototypeOf(obj).constructor.name;
  const mainFile = (_d2 = (_c2 = config == null ? void 0 : config.mainFile) != null ? _c2 : (_b2 = (_a2 = config == null ? void 0 : config.meta) == null ? void 0 : _a2.url) == null ? void 0 : _b2.replace(/.*\//, "./")) != null ? _d2 : `<${name} file>`;
  let usage = `${boldUnder("Usage:")} `;
  if (metadata.usage) {
    usage = `${usage}${metadata.usage}`;
  } else if ((config == null ? void 0 : config.noCommand) || metadata.noCommand) {
    usage = `${usage}${mainFile} [Options] [--] [args]`;
  } else {
    usage = `${usage}${mainFile} [Options] [--] [command [command args]]`;
  }
  helpLines.push(usage);
  if (!(config == null ? void 0 : config.noCommand) && !metadata.noCommand) {
    genCommandHelp(obj, metadata, helpLines);
  }
  genOptionsHelp(obj, metadata, helpLines, config);
  return helpLines.join("\n");
}
var FLAG_REGEXP = new RegExp("^(?:-(?:(?<doubleDash>-)(?<negated>no-)?)?)(?<key>.+?)(?:=(?<value>.+?))?$", "s");
var LETTER_REGEXP = /[A-Za-z]/;
var NUMBER_REGEXP = /-?\d+(\.\d*)?(e-?\d+)?$/;
var HYPHEN_REGEXP = /^(-|--)[^-]/;
var VALUE_REGEXP = new RegExp("=(?<value>.+)");
var FLAG_NAME_REGEXP = /^--[^=]+$/;
var SPECIAL_CHAR_REGEXP = /\W/;
var NON_WHITESPACE_REGEXP = /\S/;
function isNumber(string) {
  return NON_WHITESPACE_REGEXP.test(string) && Number.isFinite(Number(string));
}
function setNested(object, keys, value, collect = false) {
  keys = [...keys];
  const key = keys.pop();
  keys.forEach((key2) => {
    var _a2;
    return object = (_a2 = object[key2]) != null ? _a2 : object[key2] = {};
  });
  if (collect) {
    const v = object[key];
    if (Array.isArray(v)) {
      v.push(value);
      return;
    }
    value = v ? [v, value] : [value];
  }
  object[key] = value;
}
function hasNested(object, keys) {
  for (const key of keys) {
    const value = object[key];
    if (!Object.hasOwn(object, key)) return false;
    object = value;
  }
  return true;
}
function aliasIsBoolean(aliasMap, booleanSet, key) {
  const set = aliasMap.get(key);
  if (set === void 0) return false;
  for (const alias of set) if (booleanSet.has(alias)) return true;
  return false;
}
function isBooleanString(value) {
  return value === "true" || value === "false";
}
function parseBooleanString(value) {
  return value !== "false";
}
function parseArgs10(args, options) {
  var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2;
  const {
    "--": doubleDash = false,
    alias = {},
    boolean = false,
    default: defaults = {},
    stopEarly = false,
    string = [],
    collect = [],
    negatable = [],
    unknown: unknownFn = (i) => i
  } = options != null ? options : {};
  const aliasMap = /* @__PURE__ */ new Map();
  const booleanSet = /* @__PURE__ */ new Set();
  const stringSet = /* @__PURE__ */ new Set();
  const collectSet = /* @__PURE__ */ new Set();
  const negatableSet = /* @__PURE__ */ new Set();
  let allBools = false;
  if (alias) {
    for (const [key, value] of Object.entries(alias)) {
      if (value === void 0) {
        throw new TypeError("Alias value must be defined");
      }
      const aliases = Array.isArray(value) ? value : [value];
      aliasMap.set(key, new Set(aliases));
      aliases.forEach(
        (alias2) => aliasMap.set(
          alias2,
          /* @__PURE__ */ new Set([key, ...aliases.filter((it) => it !== alias2)])
        )
      );
    }
  }
  if (boolean) {
    if (typeof boolean === "boolean") {
      allBools = boolean;
    } else {
      const booleanArgs = Array.isArray(boolean) ? boolean : [boolean];
      for (const key of booleanArgs.filter(Boolean)) {
        booleanSet.add(key);
        (_a2 = aliasMap.get(key)) == null ? void 0 : _a2.forEach((al) => {
          booleanSet.add(al);
        });
      }
    }
  }
  if (string) {
    const stringArgs = Array.isArray(string) ? string : [string];
    for (const key of stringArgs.filter(Boolean)) {
      stringSet.add(key);
      (_b2 = aliasMap.get(key)) == null ? void 0 : _b2.forEach((al) => stringSet.add(al));
    }
  }
  if (collect) {
    const collectArgs = Array.isArray(collect) ? collect : [collect];
    for (const key of collectArgs.filter(Boolean)) {
      collectSet.add(key);
      (_c2 = aliasMap.get(key)) == null ? void 0 : _c2.forEach((al) => collectSet.add(al));
    }
  }
  if (negatable) {
    const negatableArgs = Array.isArray(negatable) ? negatable : [negatable];
    for (const key of negatableArgs.filter(Boolean)) {
      negatableSet.add(key);
      (_d2 = aliasMap.get(key)) == null ? void 0 : _d2.forEach((alias2) => negatableSet.add(alias2));
    }
  }
  const argv = { _: [] };
  function setArgument(key, value, arg, collect2) {
    var _a3;
    if (!booleanSet.has(key) && !stringSet.has(key) && !aliasMap.has(key) && !(allBools && FLAG_NAME_REGEXP.test(arg)) && (unknownFn == null ? void 0 : unknownFn(arg, key, value)) === false) {
      return;
    }
    if (typeof value === "string" && !stringSet.has(key)) {
      value = isNumber(value) ? Number(value) : value;
    }
    const collectable = collect2 && collectSet.has(key);
    setNested(argv, key.split("."), value, collectable);
    (_a3 = aliasMap.get(key)) == null ? void 0 : _a3.forEach((key2) => {
      setNested(argv, key2.split("."), value, collectable);
    });
  }
  let notFlags = [];
  const index = args.indexOf("--");
  if (index !== -1) {
    notFlags = args.slice(index + 1);
    args = args.slice(0, index);
  }
  argsLoop:
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const groups = (_e2 = arg.match(FLAG_REGEXP)) == null ? void 0 : _e2.groups;
      if (groups) {
        const { doubleDash: doubleDash2, negated } = groups;
        let key = groups.key;
        let value = groups.value;
        if (doubleDash2) {
          if (value) {
            if (booleanSet.has(key)) value = parseBooleanString(value);
            setArgument(key, value, arg, true);
            continue;
          }
          if (negated) {
            if (negatableSet.has(key)) {
              setArgument(key, false, arg, false);
              continue;
            }
            key = `no-${key}`;
          }
          const next = args[i + 1];
          if (next) {
            if (!booleanSet.has(key) && !allBools && !next.startsWith("-") && (!aliasMap.has(key) || !aliasIsBoolean(aliasMap, booleanSet, key))) {
              value = next;
              i++;
              setArgument(key, value, arg, true);
              continue;
            }
            if (isBooleanString(next)) {
              value = parseBooleanString(next);
              i++;
              setArgument(key, value, arg, true);
              continue;
            }
          }
          value = stringSet.has(key) ? "" : true;
          setArgument(key, value, arg, true);
          continue;
        }
        const letters = arg.slice(1, -1).split("");
        for (const [j, letter] of letters.entries()) {
          const next = arg.slice(j + 2);
          if (next === "-") {
            setArgument(letter, next, arg, true);
            continue;
          }
          if (LETTER_REGEXP.test(letter)) {
            const groups2 = (_f2 = VALUE_REGEXP.exec(next)) == null ? void 0 : _f2.groups;
            if (groups2) {
              setArgument(letter, groups2.value, arg, true);
              continue argsLoop;
            }
            if (NUMBER_REGEXP.test(next)) {
              setArgument(letter, next, arg, true);
              continue argsLoop;
            }
          }
          if ((_g2 = letters[j + 1]) == null ? void 0 : _g2.match(SPECIAL_CHAR_REGEXP)) {
            setArgument(letter, arg.slice(j + 2), arg, true);
            continue argsLoop;
          }
          setArgument(letter, stringSet.has(letter) ? "" : true, arg, true);
        }
        key = arg.slice(-1);
        if (key === "-") continue;
        const nextArg = args[i + 1];
        if (nextArg) {
          if (!HYPHEN_REGEXP.test(nextArg) && !booleanSet.has(key) && (!aliasMap.has(key) || !aliasIsBoolean(aliasMap, booleanSet, key))) {
            setArgument(key, nextArg, arg, true);
            i++;
            continue;
          }
          if (isBooleanString(nextArg)) {
            const value2 = parseBooleanString(nextArg);
            setArgument(key, value2, arg, true);
            i++;
            continue;
          }
        }
        setArgument(key, stringSet.has(key) ? "" : true, arg, true);
        continue;
      }
      if ((unknownFn == null ? void 0 : unknownFn(arg)) !== false) {
        argv._.push(
          stringSet.has("_") || !isNumber(arg) ? arg : Number(arg)
        );
      }
      if (stopEarly) {
        argv._.push(...args.slice(i + 1));
        break;
      }
    }
  for (const [key, value] of Object.entries(defaults)) {
    const keys = key.split(".");
    if (!hasNested(argv, keys)) {
      setNested(argv, keys, value);
      (_h2 = aliasMap.get(key)) == null ? void 0 : _h2.forEach(
        (key2) => setNested(argv, key2.split("."), value)
      );
    }
  }
  for (const key of booleanSet.keys()) {
    const keys = key.split(".");
    if (!hasNested(argv, keys)) {
      const value = collectSet.has(key) ? [] : false;
      setNested(argv, keys, value);
    }
  }
  for (const key of stringSet.keys()) {
    const keys = key.split(".");
    if (!hasNested(argv, keys) && collectSet.has(key)) {
      setNested(argv, keys, []);
    }
  }
  if (doubleDash) {
    argv["--"] = notFlags;
  } else {
    argv._.push(...notFlags);
  }
  return argv;
}
function parseArgs11(obj, metadata, config) {
  var _a2, _b2, _c2;
  const argsResult = {
    options: {},
    commandArgs: []
  };
  const args = getArgs(config);
  const stringProp = [];
  const arrayProp = [];
  const booleanProp = [];
  const defaultValues = {};
  const alias = { help: ["h"] };
  const negatable = Object.entries(metadata.fields).filter(([, v]) => v == null ? void 0 : v.negatable).map(([k]) => k);
  for (const name of Object.keys(metadata.fields)) {
    alias[name] = (_b2 = (_a2 = metadata.fields[name]) == null ? void 0 : _a2.alias) != null ? _b2 : [];
    const kebabCase = toKebabCase(name);
    if (name !== kebabCase) {
      alias[name].push(kebabCase);
    }
    switch (typeof obj[name]) {
      case "boolean":
        booleanProp.push(name);
        defaultValues[name] = obj[name];
        break;
      case "string":
        stringProp.push(name);
        break;
      case "object":
        if (Array.isArray(obj[name])) {
          arrayProp.push(name);
        }
    }
  }
  const stdRes = parseArgs10(args, {
    negatable: negatable.map(toKebabCase),
    string: stringProp.map(toKebabCase),
    boolean: booleanProp.map(toKebabCase),
    collect: arrayProp.map(toKebabCase),
    default: defaultValues,
    alias,
    stopEarly: true
  });
  for (const key of Object.keys(stdRes)) {
    if (defaultValues[key] === stdRes[key]) {
      delete stdRes[key];
    }
    const keyCamel = toCamelCase(key);
    if (keyCamel !== key && defaultValues[keyCamel] === stdRes[key]) {
      delete stdRes[key];
    }
  }
  const fields = Object.keys(metadata.fields);
  const fieldsKebabCase = fields.map(toKebabCase);
  const aliasKey = Object.values(alias).flat();
  for (const [key, value] of Object.entries(stdRes)) {
    if (key === "_") {
      if ((config == null ? void 0 : config.noCommand) || !!metadata.noCommand) {
        argsResult.command = (_c2 = metadata.defaultCommand) != null ? _c2 : "main";
        argsResult.commandArgs = stdRes._;
      } else if (stdRes._.length > 0) {
        argsResult.command = stdRes._[0].toString();
        argsResult.commandArgs = stdRes._.slice(1);
      }
    } else {
      if (key !== "help" && !fieldsKebabCase.includes(key) && !fields.includes(key) && !aliasKey.includes(key) && !(((config == null ? void 0 : config.configCli) || metadata.jsonConfig) && key === "config")) {
        throw new Error(`The option "${key}" doesn't exist`, {
          cause: { clite: true }
        });
      }
      argsResult.options[toCamelCase(key)] = value;
    }
  }
  return argsResult;
}
function fillFields(parseResult, obj, metadata, config) {
  const aliasNames = Object.entries(metadata.fields).flatMap(([, v]) => v == null ? void 0 : v.alias);
  const fields = Object.keys(metadata.fields);
  for (const option of getFieldNames(parseResult.options)) {
    if (fields.includes(option)) {
      obj[option] = parseResult.options[option];
    } else if (fields.includes(toSnakeCase(option))) {
      obj[toSnakeCase(option)] = parseResult.options[option];
    } else if (!aliasNames.includes(option) && (option !== "config" || !((config == null ? void 0 : config.configCli) || metadata.jsonConfig))) {
      throw new Error(`The option "${option}" doesn't exist`, {
        cause: { clite: true }
      });
    }
  }
}
function getArgs(config) {
  var _a2, _b2;
  const gt = globalThis;
  return (config == null ? void 0 : config.args) || ((_a2 = gt["Deno"]) == null ? void 0 : _a2.args) || ((_b2 = gt["process"]) == null ? void 0 : _b2.argv.slice(2)) || [];
}
function convertCommandArg(v) {
  switch (true) {
    case v === "true":
      return true;
    case v === "false":
      return false;
    case (typeof v === "string" && !isNaN(v) && !isNaN(parseFloat(v))):
      return parseFloat(v);
    default:
      return v;
  }
}
function processCommandResult(result, config) {
  if (result != void 0 && !(config == null ? void 0 : config.dontPrintResult)) {
    Promise.resolve(result).then((res) => res != void 0 && console.log(res));
  }
}
function runCommand(res) {
  if (res.command === "--help") {
    console.error(res.help);
    return res.help;
  } else if (res.subcommand) {
    return runCommand(res.subcommand);
  } else {
    const result = res.obj[res.command](...res.commandArgs);
    processCommandResult(result, res.config);
    return result;
  }
}
function getCliteMetadata(obj) {
  var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
  const symb = getCliteSymbolMetadata(obj);
  const subcommands = [
    ...Object.keys((_a2 = symb.subcommand) != null ? _a2 : {}),
    ...Object.getOwnPropertyNames(obj).filter(
      (prop) => obj[`_${prop}_subcommand`] === true
    )
  ];
  const methods = getMethodNames(obj).filter((method) => !method.startsWith("_") && !method.startsWith("#"));
  const constructorName = Object.getPrototypeOf(obj).constructor.name;
  const metadata = {
    fields: {},
    methods: {},
    defaultCommand: getDefaultCommand(methods),
    subcommands,
    help: (_c2 = (_b2 = symb.help) == null ? void 0 : _b2[constructorName]) != null ? _c2 : obj._help,
    usage: (_e2 = (_d2 = symb.usage) == null ? void 0 : _d2[constructorName]) != null ? _e2 : obj._usage,
    noCommand: ((_f2 = symb.noCommand) == null ? void 0 : _f2[constructorName]) || obj._no_command,
    jsonConfig: ((_g2 = symb.jsonConfig) == null ? void 0 : _g2[constructorName]) || obj._json_config
  };
  getFieldNames(obj).filter((f) => !f.startsWith("_") && !f.startsWith("#")).forEach((f) => {
    var _a3, _b3, _c3, _d3, _e3, _f3, _g3, _h2, _i2, _j2, _k2;
    return metadata.fields[f] = {
      alias: [...((_a3 = symb.alias) == null ? void 0 : _a3[f]) || [], ...(_b3 = obj[`_${f}_alias`]) != null ? _b3 : []],
      help: ((_c3 = symb.help) == null ? void 0 : _c3[f]) || obj[`_${f}_help`],
      type: (_e3 = (_d3 = symb.types) == null ? void 0 : _d3[f]) != null ? _e3 : obj[`_${f}_type`],
      defaultHelp: (_g3 = (_f3 = symb.defaults) == null ? void 0 : _f3[f]) != null ? _g3 : obj[`_${f}_default`],
      negatable: (_i2 = (_h2 = symb.negatables) == null ? void 0 : _h2[f]) != null ? _i2 : obj[`_${f}_negatable`],
      hidden: (_k2 = (_j2 = symb.hidden) == null ? void 0 : _j2[f]) != null ? _k2 : obj[`_${f}_hidden`]
    };
  });
  methods.forEach(
    (method) => {
      var _a3, _b3, _c3;
      return metadata.methods[method] = {
        help: ((_a3 = symb.help) == null ? void 0 : _a3[method]) || obj[`_${method}_help`],
        hidden: (_c3 = (_b3 = symb.hidden) == null ? void 0 : _b3[method]) != null ? _c3 : obj[`_${method}_hidden`]
      };
    }
  );
  return metadata;
}
function getDefaultCommand(methods) {
  return methods.length == 1 ? methods[0] : methods.includes("main") ? "main" : void 0;
}
var fs = void 0;
function loadConfig(parseResult, obj) {
  var _a2;
  const pathOrJson = parseResult.options.config;
  try {
    if (pathOrJson.match(/^\s*{/)) {
      Object.assign(obj, JSON.parse(pathOrJson));
    } else {
      if ((_a2 = globalThis["Deno"]) == null ? void 0 : _a2.args) {
        Object.assign(obj, JSON.parse(Deno.readTextFileSync(pathOrJson)));
      } else if (fs) {
        Object.assign(obj, JSON.parse(fs.readFileSync(pathOrJson, "utf8")));
      } else {
        throw new Error("Load config is not implemented in this runtime");
      }
    }
    obj.config = pathOrJson;
  } catch (error) {
    throw new Error(
      `Error while loading the config "${pathOrJson}"`,
      { cause: { clite: true, error } }
    );
  }
}
function cliteRun(objOrClass, config) {
  var _a2;
  const res = cliteParse(objOrClass, config);
  if (!(config == null ? void 0 : config.meta) || (config == null ? void 0 : config.meta.main)) {
    try {
      return runCommand(res);
    } catch (e) {
      if (((_a2 = e.cause) == null ? void 0 : _a2.clite) || (config == null ? void 0 : config.printHelpOnError)) {
        console.error(bgRed2(bold3("An error occurred ! The help :")));
        console.error(res.help);
        console.error();
        console.error(bgRed2(bold3("The error :")));
      }
      throw e;
    }
  }
}
function cliteParse(objOrClass, config) {
  var _a2, _b2;
  const obj = typeof objOrClass === "function" ? new objOrClass() : objOrClass;
  const metadata = getCliteMetadata(obj);
  const help2 = genHelp(obj, metadata, config);
  try {
    const parseResult = parseArgs11(obj, metadata, config);
    if (Object.keys(parseResult.options).includes("help")) {
      return { obj, command: "--help", commandArgs: [], config, help: help2 };
    } else {
      if ((config == null ? void 0 : config.configCli) || metadata.jsonConfig) {
        if (Object.keys(parseResult.options).includes("config")) {
          loadConfig(parseResult, obj);
        } else {
          obj.config = void 0;
        }
      }
      const command = (_a2 = parseResult.command) != null ? _a2 : metadata.defaultCommand;
      if (!command) {
        throw new Error(`no method defined or no "main" method`, {
          cause: { clite: true }
        });
      }
      fillFields(parseResult, obj, metadata, config);
      if (metadata.subcommands.includes(command)) {
        const subcommandObj = typeof obj[command] === "function" ? new obj[command]() : obj[command];
        subcommandObj._clite_parent = obj;
        const args = parseResult.commandArgs.map((e) => e.toString());
        const subcommand = cliteParse(subcommandObj, __spreadProps(__spreadValues({}, config), { args }));
        return { obj, command, commandArgs: [], config, help: help2, subcommand };
      } else if (!Object.hasOwn(metadata.methods, command) && !getMethodNames(obj).includes(command)) {
        throw new Error(`The command "${command}" doesn't exist`, {
          cause: { clite: true }
        });
      }
      const commandArgs = (config == null ? void 0 : config.dontConvertCmdArgs) ? parseResult.commandArgs : parseResult.commandArgs.map(convertCommandArg);
      return { obj, command, commandArgs, config, help: help2 };
    }
  } catch (e) {
    if (((_b2 = e.cause) == null ? void 0 : _b2.clite) || (config == null ? void 0 : config.printHelpOnError)) {
      console.error(bgRed2(bold3("An error occurred ! The help :")));
      console.error(`${help2}
${bgRed2(bold3("The error :"))}`);
    }
    throw e;
  }
}
var DesktopWebApp = (_hostname_dec = [help("Server hostname")], _port_dec = [help("Server port")], _openInBrowser_dec = [help("Open with chromium/chrome/gio if true or with the parameter"), type("boolean | string")], _openInBrowserAppMode_dec = [help("Add --app= to browser command if openInBrowser is used")], _update_dec = [hidden()], _assets_dec = [hidden()], _routes_dec = [hidden()], _onListen_dec = [hidden()], _assetsBundlePath_dec = [hidden()], _frontendPath_dec = [hidden()], _updateAssetsBundle_dec = [hidden()], _B = class {
  constructor(config) {
    __runInitializers(_init, 5, this);
    __privateAdd(this, _DesktopWebApp_instances);
    __publicField(this, "hostname", __runInitializers(_init, 8, this, "localhost")), __runInitializers(_init, 11, this);
    __publicField(this, "port", __runInitializers(_init, 12, this, 5555)), __runInitializers(_init, 15, this);
    __publicField(this, "openInBrowser", __runInitializers(_init, 16, this)), __runInitializers(_init, 19, this);
    __publicField(this, "openInBrowserAppMode", __runInitializers(_init, 20, this, false)), __runInitializers(_init, 23, this);
    __publicField(this, "update", __runInitializers(_init, 24, this, false)), __runInitializers(_init, 27, this);
    __publicField(this, "assets", __runInitializers(_init, 28, this, {})), __runInitializers(_init, 31, this);
    __publicField(this, "routes", __runInitializers(_init, 32, this, [])), __runInitializers(_init, 35, this);
    __publicField(this, "onListen", __runInitializers(_init, 36, this)), __runInitializers(_init, 39, this);
    __publicField(this, "assetsBundlePath", __runInitializers(_init, 40, this, "./assets_bundle.json")), __runInitializers(_init, 43, this);
    __publicField(this, "frontendPath", __runInitializers(_init, 44, this, "frontend/")), __runInitializers(_init, 47, this);
    const _a2 = config, { assetsFromJson } = _a2, configToAssign = __objRest(_a2, ["assetsFromJson"]);
    Object.assign(this, configToAssign);
    if (assetsFromJson) {
      this.assets = assetsFromJsonObj(assetsFromJson);
    }
  }
  main() {
    return __async(this, null, function* () {
      yield __privateMethod(this, _DesktopWebApp_instances, loadAssets_fn).call(this);
      const onListen = (params) => {
        var _a2;
        this.port = params.port;
        this.hostname = params.hostname;
        console.log(`Listen on ${this.hostname}:${this.port}`);
        (_a2 = this.onListen) == null ? void 0 : _a2.call(this, params);
        __privateMethod(this, _DesktopWebApp_instances, openInBrowser_fn).call(this);
      };
      const { hostname, port } = this;
      const handler = (r) => __privateMethod(this, _DesktopWebApp_instances, handleRequest_fn).call(this, r);
      Deno.serve({ hostname, port, onListen }, handler);
    });
  }
  // update assets bundle from frontend files
  updateAssetsBundle() {
    return __async(this, null, function* () {
      console.log("update assets bundle");
      const assets = yield getAssetsFromFolder(this.frontendPath);
      yield writeAssets(assets, this.assetsBundlePath);
      return assets;
    });
  }
}, _init = __decoratorStart(null), _DesktopWebApp_instances = new WeakSet(), handleRequest_fn = function(request) {
  var _a2, _b2;
  console.log(`handle ${request.url}`);
  for (const { route, exec } of (_a2 = this.routes) != null ? _a2 : []) {
    const match = route.exec(request.url);
    if (match) {
      return exec(match, request);
    }
  }
  for (const file of Object.values(this.assets)) {
    if ((_b2 = file.route) == null ? void 0 : _b2.exec(request.url)) {
      const headers = { "Content-Type": file.type };
      return new Response(file.content, { status: 200, headers });
    }
  }
  return new Response("", { status: 404 });
}, openInBrowser_fn = function() {
  return __async(this, null, function* () {
    if (this.openInBrowser) {
      const arg = this.openInBrowserAppMode ? "--app=" : "";
      if (this.openInBrowser === true) {
        if (yield mod_default.commandExists("chromium")) {
          yield mod_default`chromium ${arg}http://${this.hostname}:${this.port}/`;
        } else if (yield mod_default.commandExists("google-chrome")) {
          yield mod_default`google-chrome ${arg}http://${this.hostname}:${this.port}/`;
        } else {
          yield mod_default`gio open http://${this.hostname}:${this.port}/`;
        }
      } else if (typeof this.openInBrowser === "string") {
        yield mod_default`${this.openInBrowser} ${arg}http://${this.hostname}:${this.port}/`;
      }
    }
  });
}, loadAssets_fn = function() {
  return __async(this, null, function* () {
    if (this.update === true) {
      this.assets = yield this.updateAssetsBundle();
    }
    if (this.assets["/index.html"]) {
      const route = new URLPattern({ pathname: "/" });
      this.assets["/"] = __spreadProps(__spreadValues({}, this.assets["/index.html"]), { route });
    }
  });
}, __decorateElement(_init, 1, "updateAssetsBundle", _updateAssetsBundle_dec, _B), __decorateElement(_init, 5, "hostname", _hostname_dec, _B), __decorateElement(_init, 5, "port", _port_dec, _B), __decorateElement(_init, 5, "openInBrowser", _openInBrowser_dec, _B), __decorateElement(_init, 5, "openInBrowserAppMode", _openInBrowserAppMode_dec, _B), __decorateElement(_init, 5, "update", _update_dec, _B), __decorateElement(_init, 5, "assets", _assets_dec, _B), __decorateElement(_init, 5, "routes", _routes_dec, _B), __decorateElement(_init, 5, "onListen", _onListen_dec, _B), __decorateElement(_init, 5, "assetsBundlePath", _assetsBundlePath_dec, _B), __decorateElement(_init, 5, "frontendPath", _frontendPath_dec, _B), __decoratorMetadata(_init, _B), _B);
function getAssetsFromFolder(path) {
  return __async(this, null, function* () {
    var _a2;
    const assetsUnordered = {};
    const frontendPath = mod_default.path(path).resolve().toString();
    try {
      for (var iter = __forAwait(walk(frontendPath, { includeDirs: false })), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
        const entry = temp.value;
        assert(entry.path.startsWith(frontendPath));
        const path2 = entry.path.substring(frontendPath.length);
        const type2 = (_a2 = contentType(extname3(path2))) != null ? _a2 : "";
        const content = yield Deno.readFile(entry.path);
        const route = new URLPattern({ pathname: path2 });
        assetsUnordered[path2] = { type: type2, route, content };
        console.log({ path: path2, type: type2 });
      }
    } catch (temp) {
      error = [temp];
    } finally {
      try {
        more && (temp = iter.return) && (yield temp.call(iter));
      } finally {
        if (error)
          throw error[0];
      }
    }
    const paths = Object.keys(assetsUnordered).sort();
    const assets = {};
    paths.forEach((path2) => assets[path2] = assetsUnordered[path2]);
    return assets;
  });
}
function writeAssets(assets, path) {
  return __async(this, null, function* () {
    const replacer = (key, value) => key === "content" ? encodeBase64(value) : key === "route" ? value.pathname : value;
    yield mod_default.path(path).writeText(JSON.stringify(assets, replacer, "  "));
  });
}
function assetsFromJsonObj(jsonObj) {
  const assets = {};
  Object.entries(jsonObj).forEach(([key, asset]) => assets[key] = {
    type: asset == null ? void 0 : asset.type,
    route: new URLPattern({ pathname: asset.route }),
    content: decodeBase64(asset.content)
  });
  return assets;
}
var assets_bundle_default = {
  "/htm@3.1.1-preact-standalone.module.js": {
    type: "text/javascript; charset=UTF-8",
    route: "/htm@3.1.1-preact-standalone.module.js",
    content: "Ly8gaHR0cHM6Ly91bnBrZy5jb20vaHRtQDMuMS4xL3ByZWFjdC9zdGFuZGFsb25lLm1vZHVsZS5qcwp2YXIgZSxuLF8sdCxvLHIsdSxsPXt9LGk9W10sYz0vYWNpdHxleCg/OnN8Z3xufHB8JCl8cnBofGdyaWR8b3dzfG1uY3xudHd8aW5lW2NoXXx6b298Xm9yZHxpdGVyYS9pO2Z1bmN0aW9uIHMoZSxuKXtmb3IodmFyIF8gaW4gbillW19dPW5bX107cmV0dXJuIGV9ZnVuY3Rpb24gZihlKXt2YXIgbj1lLnBhcmVudE5vZGU7biYmbi5yZW1vdmVDaGlsZChlKX1mdW5jdGlvbiBhKG4sXyx0KXt2YXIgbyxyLHUsbD17fTtmb3IodSBpbiBfKSJrZXkiPT11P289X1t1XToicmVmIj09dT9yPV9bdV06bFt1XT1fW3VdO2lmKGFyZ3VtZW50cy5sZW5ndGg+MiYmKGwuY2hpbGRyZW49YXJndW1lbnRzLmxlbmd0aD4zP2UuY2FsbChhcmd1bWVudHMsMik6dCksImZ1bmN0aW9uIj09dHlwZW9mIG4mJm51bGwhPW4uZGVmYXVsdFByb3BzKWZvcih1IGluIG4uZGVmYXVsdFByb3BzKXZvaWQgMD09PWxbdV0mJihsW3VdPW4uZGVmYXVsdFByb3BzW3VdKTtyZXR1cm4gcChuLGwsbyxyLG51bGwpfWZ1bmN0aW9uIHAoZSx0LG8scix1KXt2YXIgbD17dHlwZTplLHByb3BzOnQsa2V5Om8scmVmOnIsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6bnVsbD09dT8rK186dX07cmV0dXJuIG51bGwhPW4udm5vZGUmJm4udm5vZGUobCksbH1mdW5jdGlvbiBoKGUpe3JldHVybiBlLmNoaWxkcmVufWZ1bmN0aW9uIGQoZSxuKXt0aGlzLnByb3BzPWUsdGhpcy5jb250ZXh0PW59ZnVuY3Rpb24gdihlLG4pe2lmKG51bGw9PW4pcmV0dXJuIGUuX18/dihlLl9fLGUuX18uX19rLmluZGV4T2YoZSkrMSk6bnVsbDtmb3IodmFyIF87bjxlLl9fay5sZW5ndGg7bisrKWlmKG51bGwhPShfPWUuX19rW25dKSYmbnVsbCE9Xy5fX2UpcmV0dXJuIF8uX19lO3JldHVybiJmdW5jdGlvbiI9PXR5cGVvZiBlLnR5cGU/dihlKTpudWxsfWZ1bmN0aW9uIHkoZSl7dmFyIG4sXztpZihudWxsIT0oZT1lLl9fKSYmbnVsbCE9ZS5fX2Mpe2ZvcihlLl9fZT1lLl9fYy5iYXNlPW51bGwsbj0wO248ZS5fX2subGVuZ3RoO24rKylpZihudWxsIT0oXz1lLl9fa1tuXSkmJm51bGwhPV8uX19lKXtlLl9fZT1lLl9fYy5iYXNlPV8uX19lO2JyZWFrfXJldHVybiB5KGUpfX1mdW5jdGlvbiBtKGUpeyghZS5fX2QmJihlLl9fZD0hMCkmJnQucHVzaChlKSYmIWcuX19yKyt8fHIhPT1uLmRlYm91bmNlUmVuZGVyaW5nKSYmKChyPW4uZGVib3VuY2VSZW5kZXJpbmcpfHxvKShnKX1mdW5jdGlvbiBnKCl7Zm9yKHZhciBlO2cuX19yPXQubGVuZ3RoOyllPXQuc29ydChmdW5jdGlvbihlLG4pe3JldHVybiBlLl9fdi5fX2Itbi5fX3YuX19ifSksdD1bXSxlLnNvbWUoZnVuY3Rpb24oZSl7dmFyIG4sXyx0LG8scix1O2UuX19kJiYocj0obz0obj1lKS5fX3YpLl9fZSwodT1uLl9fUCkmJihfPVtdLCh0PXMoe30sbykpLl9fdj1vLl9fdisxLFAodSxvLHQsbi5fX24sdm9pZCAwIT09dS5vd25lclNWR0VsZW1lbnQsbnVsbCE9by5fX2g/W3JdOm51bGwsXyxudWxsPT1yP3Yobyk6cixvLl9faCksRChfLG8pLG8uX19lIT1yJiZ5KG8pKSl9KX1mdW5jdGlvbiBrKGUsbixfLHQsbyxyLHUsYyxzLGYpe3ZhciBhLGQseSxtLGcsayx4LEg9dCYmdC5fX2t8fGksRT1ILmxlbmd0aDtmb3IoXy5fX2s9W10sYT0wO2E8bi5sZW5ndGg7YSsrKWlmKG51bGwhPShtPV8uX19rW2FdPW51bGw9PShtPW5bYV0pfHwiYm9vbGVhbiI9PXR5cGVvZiBtP251bGw6InN0cmluZyI9PXR5cGVvZiBtfHwibnVtYmVyIj09dHlwZW9mIG18fCJiaWdpbnQiPT10eXBlb2YgbT9wKG51bGwsbSxudWxsLG51bGwsbSk6QXJyYXkuaXNBcnJheShtKT9wKGgse2NoaWxkcmVuOm19LG51bGwsbnVsbCxudWxsKTptLl9fYj4wP3AobS50eXBlLG0ucHJvcHMsbS5rZXksbnVsbCxtLl9fdik6bSkpe2lmKG0uX189XyxtLl9fYj1fLl9fYisxLG51bGw9PT0oeT1IW2FdKXx8eSYmbS5rZXk9PXkua2V5JiZtLnR5cGU9PT15LnR5cGUpSFthXT12b2lkIDA7ZWxzZSBmb3IoZD0wO2Q8RTtkKyspe2lmKCh5PUhbZF0pJiZtLmtleT09eS5rZXkmJm0udHlwZT09PXkudHlwZSl7SFtkXT12b2lkIDA7YnJlYWt9eT1udWxsfVAoZSxtLHk9eXx8bCxvLHIsdSxjLHMsZiksZz1tLl9fZSwoZD1tLnJlZikmJnkucmVmIT1kJiYoeHx8KHg9W10pLHkucmVmJiZ4LnB1c2goeS5yZWYsbnVsbCxtKSx4LnB1c2goZCxtLl9fY3x8ZyxtKSksbnVsbCE9Zz8obnVsbD09ayYmKGs9ZyksImZ1bmN0aW9uIj09dHlwZW9mIG0udHlwZSYmbnVsbCE9bS5fX2smJm0uX19rPT09eS5fX2s/bS5fX2Q9cz1iKG0scyxlKTpzPUMoZSxtLHksSCxnLHMpLGZ8fCJvcHRpb24iIT09Xy50eXBlPyJmdW5jdGlvbiI9PXR5cGVvZiBfLnR5cGUmJihfLl9fZD1zKTplLnZhbHVlPSIiKTpzJiZ5Ll9fZT09cyYmcy5wYXJlbnROb2RlIT1lJiYocz12KHkpKX1mb3IoXy5fX2U9ayxhPUU7YS0tOyludWxsIT1IW2FdJiYoImZ1bmN0aW9uIj09dHlwZW9mIF8udHlwZSYmbnVsbCE9SFthXS5fX2UmJkhbYV0uX19lPT1fLl9fZCYmKF8uX19kPXYodCxhKzEpKSxVKEhbYV0sSFthXSkpO2lmKHgpZm9yKGE9MDthPHgubGVuZ3RoO2ErKylUKHhbYV0seFsrK2FdLHhbKythXSl9ZnVuY3Rpb24gYihlLG4sXyl7dmFyIHQsbztmb3IodD0wO3Q8ZS5fX2subGVuZ3RoO3QrKykobz1lLl9fa1t0XSkmJihvLl9fPWUsbj0iZnVuY3Rpb24iPT10eXBlb2Ygby50eXBlP2IobyxuLF8pOkMoXyxvLG8sZS5fX2ssby5fX2UsbikpO3JldHVybiBufWZ1bmN0aW9uIEMoZSxuLF8sdCxvLHIpe3ZhciB1LGwsaTtpZih2b2lkIDAhPT1uLl9fZCl1PW4uX19kLG4uX19kPXZvaWQgMDtlbHNlIGlmKG51bGw9PV98fG8hPXJ8fG51bGw9PW8ucGFyZW50Tm9kZSllOmlmKG51bGw9PXJ8fHIucGFyZW50Tm9kZSE9PWUpZS5hcHBlbmRDaGlsZChvKSx1PW51bGw7ZWxzZXtmb3IobD1yLGk9MDsobD1sLm5leHRTaWJsaW5nKSYmaTx0Lmxlbmd0aDtpKz0yKWlmKGw9PW8pYnJlYWsgZTtlLmluc2VydEJlZm9yZShvLHIpLHU9cn1yZXR1cm4gdm9pZCAwIT09dT91Om8ubmV4dFNpYmxpbmd9ZnVuY3Rpb24geChlLG4sXyl7Ii0iPT09blswXT9lLnNldFByb3BlcnR5KG4sXyk6ZVtuXT1udWxsPT1fPyIiOiJudW1iZXIiIT10eXBlb2YgX3x8Yy50ZXN0KG4pP186XysicHgifWZ1bmN0aW9uIEgoZSxuLF8sdCxvKXt2YXIgcjtlOmlmKCJzdHlsZSI9PT1uKWlmKCJzdHJpbmciPT10eXBlb2YgXyllLnN0eWxlLmNzc1RleHQ9XztlbHNle2lmKCJzdHJpbmciPT10eXBlb2YgdCYmKGUuc3R5bGUuY3NzVGV4dD10PSIiKSx0KWZvcihuIGluIHQpXyYmbiBpbiBffHx4KGUuc3R5bGUsbiwiIik7aWYoXylmb3IobiBpbiBfKXQmJl9bbl09PT10W25dfHx4KGUuc3R5bGUsbixfW25dKX1lbHNlIGlmKCJvIj09PW5bMF0mJiJuIj09PW5bMV0pcj1uIT09KG49bi5yZXBsYWNlKC9DYXB0dXJlJC8sIiIpKSxuPW4udG9Mb3dlckNhc2UoKWluIGU/bi50b0xvd2VyQ2FzZSgpLnNsaWNlKDIpOm4uc2xpY2UoMiksZS5sfHwoZS5sPXt9KSxlLmxbbityXT1fLF8/dHx8ZS5hZGRFdmVudExpc3RlbmVyKG4scj9TOkUscik6ZS5yZW1vdmVFdmVudExpc3RlbmVyKG4scj9TOkUscik7ZWxzZSBpZigiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiIT09bil7aWYobyluPW4ucmVwbGFjZSgveGxpbmtbSDpoXS8sImgiKS5yZXBsYWNlKC9zTmFtZSQvLCJzIik7ZWxzZSBpZigiaHJlZiIhPT1uJiYibGlzdCIhPT1uJiYiZm9ybSIhPT1uJiYidGFiSW5kZXgiIT09biYmImRvd25sb2FkIiE9PW4mJm4gaW4gZSl0cnl7ZVtuXT1udWxsPT1fPyIiOl87YnJlYWsgZX1jYXRjaChlKXt9ImZ1bmN0aW9uIj09dHlwZW9mIF98fChudWxsIT1fJiYoITEhPT1ffHwiYSI9PT1uWzBdJiYiciI9PT1uWzFdKT9lLnNldEF0dHJpYnV0ZShuLF8pOmUucmVtb3ZlQXR0cmlidXRlKG4pKX19ZnVuY3Rpb24gRShlKXt0aGlzLmxbZS50eXBlKyExXShuLmV2ZW50P24uZXZlbnQoZSk6ZSl9ZnVuY3Rpb24gUyhlKXt0aGlzLmxbZS50eXBlKyEwXShuLmV2ZW50P24uZXZlbnQoZSk6ZSl9ZnVuY3Rpb24gUChlLF8sdCxvLHIsdSxsLGksYyl7dmFyIGYsYSxwLHYseSxtLGcsYixDLHgsSCxFPV8udHlwZTtpZih2b2lkIDAhPT1fLmNvbnN0cnVjdG9yKXJldHVybiBudWxsO251bGwhPXQuX19oJiYoYz10Ll9faCxpPV8uX19lPXQuX19lLF8uX19oPW51bGwsdT1baV0pLChmPW4uX19iKSYmZihfKTt0cnl7ZTppZigiZnVuY3Rpb24iPT10eXBlb2YgRSl7aWYoYj1fLnByb3BzLEM9KGY9RS5jb250ZXh0VHlwZSkmJm9bZi5fX2NdLHg9Zj9DP0MucHJvcHMudmFsdWU6Zi5fXzpvLHQuX19jP2c9KGE9Xy5fX2M9dC5fX2MpLl9fPWEuX19FOigicHJvdG90eXBlImluIEUmJkUucHJvdG90eXBlLnJlbmRlcj9fLl9fYz1hPW5ldyBFKGIseCk6KF8uX19jPWE9bmV3IGQoYix4KSxhLmNvbnN0cnVjdG9yPUUsYS5yZW5kZXI9QSksQyYmQy5zdWIoYSksYS5wcm9wcz1iLGEuc3RhdGV8fChhLnN0YXRlPXt9KSxhLmNvbnRleHQ9eCxhLl9fbj1vLHA9YS5fX2Q9ITAsYS5fX2g9W10pLG51bGw9PWEuX19zJiYoYS5fX3M9YS5zdGF0ZSksbnVsbCE9RS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihhLl9fcz09YS5zdGF0ZSYmKGEuX19zPXMoe30sYS5fX3MpKSxzKGEuX19zLEUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKGIsYS5fX3MpKSksdj1hLnByb3BzLHk9YS5zdGF0ZSxwKW51bGw9PUUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzJiZudWxsIT1hLmNvbXBvbmVudFdpbGxNb3VudCYmYS5jb21wb25lbnRXaWxsTW91bnQoKSxudWxsIT1hLmNvbXBvbmVudERpZE1vdW50JiZhLl9faC5wdXNoKGEuY29tcG9uZW50RGlkTW91bnQpO2Vsc2V7aWYobnVsbD09RS5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJmIhPT12JiZudWxsIT1hLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmEuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhiLHgpLCFhLl9fZSYmbnVsbCE9YS5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09YS5zaG91bGRDb21wb25lbnRVcGRhdGUoYixhLl9fcyx4KXx8Xy5fX3Y9PT10Ll9fdil7YS5wcm9wcz1iLGEuc3RhdGU9YS5fX3MsXy5fX3YhPT10Ll9fdiYmKGEuX19kPSExKSxhLl9fdj1fLF8uX19lPXQuX19lLF8uX19rPXQuX19rLF8uX19rLmZvckVhY2goZnVuY3Rpb24oZSl7ZSYmKGUuX189Xyl9KSxhLl9faC5sZW5ndGgmJmwucHVzaChhKTticmVhayBlfW51bGwhPWEuY29tcG9uZW50V2lsbFVwZGF0ZSYmYS5jb21wb25lbnRXaWxsVXBkYXRlKGIsYS5fX3MseCksbnVsbCE9YS5jb21wb25lbnREaWRVcGRhdGUmJmEuX19oLnB1c2goZnVuY3Rpb24oKXthLmNvbXBvbmVudERpZFVwZGF0ZSh2LHksbSl9KX1hLmNvbnRleHQ9eCxhLnByb3BzPWIsYS5zdGF0ZT1hLl9fcywoZj1uLl9fcikmJmYoXyksYS5fX2Q9ITEsYS5fX3Y9XyxhLl9fUD1lLGY9YS5yZW5kZXIoYS5wcm9wcyxhLnN0YXRlLGEuY29udGV4dCksYS5zdGF0ZT1hLl9fcyxudWxsIT1hLmdldENoaWxkQ29udGV4dCYmKG89cyhzKHt9LG8pLGEuZ2V0Q2hpbGRDb250ZXh0KCkpKSxwfHxudWxsPT1hLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHwobT1hLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHYseSkpLEg9bnVsbCE9ZiYmZi50eXBlPT09aCYmbnVsbD09Zi5rZXk/Zi5wcm9wcy5jaGlsZHJlbjpmLGsoZSxBcnJheS5pc0FycmF5KEgpP0g6W0hdLF8sdCxvLHIsdSxsLGksYyksYS5iYXNlPV8uX19lLF8uX19oPW51bGwsYS5fX2gubGVuZ3RoJiZsLnB1c2goYSksZyYmKGEuX19FPWEuX189bnVsbCksYS5fX2U9ITF9ZWxzZSBudWxsPT11JiZfLl9fdj09PXQuX192PyhfLl9faz10Ll9fayxfLl9fZT10Ll9fZSk6Xy5fX2U9dyh0Ll9fZSxfLHQsbyxyLHUsbCxjKTsoZj1uLmRpZmZlZCkmJmYoXyl9Y2F0Y2goZSl7Xy5fX3Y9bnVsbCwoY3x8bnVsbCE9dSkmJihfLl9fZT1pLF8uX19oPSEhYyx1W3UuaW5kZXhPZihpKV09bnVsbCksbi5fX2UoZSxfLHQpfX1mdW5jdGlvbiBEKGUsXyl7bi5fX2MmJm4uX19jKF8sZSksZS5zb21lKGZ1bmN0aW9uKF8pe3RyeXtlPV8uX19oLF8uX19oPVtdLGUuc29tZShmdW5jdGlvbihlKXtlLmNhbGwoXyl9KX1jYXRjaChlKXtuLl9fZShlLF8uX192KX19KX1mdW5jdGlvbiB3KG4sXyx0LG8scix1LGksYyl7dmFyIHMsYSxwLGg9dC5wcm9wcyxkPV8ucHJvcHMseT1fLnR5cGUsbT0wO2lmKCJzdmciPT09eSYmKHI9ITApLG51bGwhPXUpZm9yKDttPHUubGVuZ3RoO20rKylpZigocz11W21dKSYmKHM9PT1ufHwoeT9zLmxvY2FsTmFtZT09eTozPT1zLm5vZGVUeXBlKSkpe249cyx1W21dPW51bGw7YnJlYWt9aWYobnVsbD09bil7aWYobnVsbD09PXkpcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGQpO249cj9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIix5KTpkb2N1bWVudC5jcmVhdGVFbGVtZW50KHksZC5pcyYmZCksdT1udWxsLGM9ITF9aWYobnVsbD09PXkpaD09PWR8fGMmJm4uZGF0YT09PWR8fChuLmRhdGE9ZCk7ZWxzZXtpZih1PXUmJmUuY2FsbChuLmNoaWxkTm9kZXMpLGE9KGg9dC5wcm9wc3x8bCkuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwscD1kLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLCFjKXtpZihudWxsIT11KWZvcihoPXt9LG09MDttPG4uYXR0cmlidXRlcy5sZW5ndGg7bSsrKWhbbi5hdHRyaWJ1dGVzW21dLm5hbWVdPW4uYXR0cmlidXRlc1ttXS52YWx1ZTsocHx8YSkmJihwJiYoYSYmcC5fX2h0bWw9PWEuX19odG1sfHxwLl9faHRtbD09PW4uaW5uZXJIVE1MKXx8KG4uaW5uZXJIVE1MPXAmJnAuX19odG1sfHwiIikpfWlmKGZ1bmN0aW9uKGUsbixfLHQsbyl7dmFyIHI7Zm9yKHIgaW4gXykiY2hpbGRyZW4iPT09cnx8ImtleSI9PT1yfHxyIGluIG58fEgoZSxyLG51bGwsX1tyXSx0KTtmb3IociBpbiBuKW8mJiJmdW5jdGlvbiIhPXR5cGVvZiBuW3JdfHwiY2hpbGRyZW4iPT09cnx8ImtleSI9PT1yfHwidmFsdWUiPT09cnx8ImNoZWNrZWQiPT09cnx8X1tyXT09PW5bcl18fEgoZSxyLG5bcl0sX1tyXSx0KX0obixkLGgscixjKSxwKV8uX19rPVtdO2Vsc2UgaWYobT1fLnByb3BzLmNoaWxkcmVuLGsobixBcnJheS5pc0FycmF5KG0pP206W21dLF8sdCxvLHImJiJmb3JlaWduT2JqZWN0IiE9PXksdSxpLHU/dVswXTp0Ll9fayYmdih0LDApLGMpLG51bGwhPXUpZm9yKG09dS5sZW5ndGg7bS0tOyludWxsIT11W21dJiZmKHVbbV0pO2N8fCgidmFsdWUiaW4gZCYmdm9pZCAwIT09KG09ZC52YWx1ZSkmJihtIT09bi52YWx1ZXx8InByb2dyZXNzIj09PXkmJiFtKSYmSChuLCJ2YWx1ZSIsbSxoLnZhbHVlLCExKSwiY2hlY2tlZCJpbiBkJiZ2b2lkIDAhPT0obT1kLmNoZWNrZWQpJiZtIT09bi5jaGVja2VkJiZIKG4sImNoZWNrZWQiLG0saC5jaGVja2VkLCExKSl9cmV0dXJuIG59ZnVuY3Rpb24gVChlLF8sdCl7dHJ5eyJmdW5jdGlvbiI9PXR5cGVvZiBlP2UoXyk6ZS5jdXJyZW50PV99Y2F0Y2goZSl7bi5fX2UoZSx0KX19ZnVuY3Rpb24gVShlLF8sdCl7dmFyIG8scjtpZihuLnVubW91bnQmJm4udW5tb3VudChlKSwobz1lLnJlZikmJihvLmN1cnJlbnQmJm8uY3VycmVudCE9PWUuX19lfHxUKG8sbnVsbCxfKSksbnVsbCE9KG89ZS5fX2MpKXtpZihvLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXtvLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2goZSl7bi5fX2UoZSxfKX1vLmJhc2U9by5fX1A9bnVsbH1pZihvPWUuX19rKWZvcihyPTA7cjxvLmxlbmd0aDtyKyspb1tyXSYmVShvW3JdLF8sImZ1bmN0aW9uIiE9dHlwZW9mIGUudHlwZSk7dHx8bnVsbD09ZS5fX2V8fGYoZS5fX2UpLGUuX19lPWUuX19kPXZvaWQgMH1mdW5jdGlvbiBBKGUsbixfKXtyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcihlLF8pfWZ1bmN0aW9uIE0oXyx0LG8pe3ZhciByLHUsaTtuLl9fJiZuLl9fKF8sdCksdT0ocj0iZnVuY3Rpb24iPT10eXBlb2Ygbyk/bnVsbDpvJiZvLl9fa3x8dC5fX2ssaT1bXSxQKHQsXz0oIXImJm98fHQpLl9faz1hKGgsbnVsbCxbX10pLHV8fGwsbCx2b2lkIDAhPT10Lm93bmVyU1ZHRWxlbWVudCwhciYmbz9bb106dT9udWxsOnQuZmlyc3RDaGlsZD9lLmNhbGwodC5jaGlsZE5vZGVzKTpudWxsLGksIXImJm8/bzp1P3UuX19lOnQuZmlyc3RDaGlsZCxyKSxEKGksXyl9ZnVuY3Rpb24gRihlLG4pe3ZhciBfPXtfX2M6bj0iX19jQyIrdSsrLF9fOmUsQ29uc3VtZXI6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gZS5jaGlsZHJlbihuKX0sUHJvdmlkZXI6ZnVuY3Rpb24oZSl7dmFyIF8sdDtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fChfPVtdLCh0PXt9KVtuXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHR9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKGUpe3RoaXMucHJvcHMudmFsdWUhPT1lLnZhbHVlJiZfLnNvbWUobSl9LHRoaXMuc3ViPWZ1bmN0aW9uKGUpe18ucHVzaChlKTt2YXIgbj1lLmNvbXBvbmVudFdpbGxVbm1vdW50O2UuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtfLnNwbGljZShfLmluZGV4T2YoZSksMSksbiYmbi5jYWxsKGUpfX0pLGUuY2hpbGRyZW59fTtyZXR1cm4gXy5Qcm92aWRlci5fXz1fLkNvbnN1bWVyLmNvbnRleHRUeXBlPV99ZT1pLnNsaWNlLG49e19fZTpmdW5jdGlvbihlLG4pe2Zvcih2YXIgXyx0LG87bj1uLl9fOylpZigoXz1uLl9fYykmJiFfLl9fKXRyeXtpZigodD1fLmNvbnN0cnVjdG9yKSYmbnVsbCE9dC5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3ImJihfLnNldFN0YXRlKHQuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGUpKSxvPV8uX19kKSxudWxsIT1fLmNvbXBvbmVudERpZENhdGNoJiYoXy5jb21wb25lbnREaWRDYXRjaChlKSxvPV8uX19kKSxvKXJldHVybiBfLl9fRT1ffWNhdGNoKG4pe2U9bn10aHJvdyBlfX0sXz0wLGQucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGUsbil7dmFyIF87Xz1udWxsIT10aGlzLl9fcyYmdGhpcy5fX3MhPT10aGlzLnN0YXRlP3RoaXMuX19zOnRoaXMuX19zPXMoe30sdGhpcy5zdGF0ZSksImZ1bmN0aW9uIj09dHlwZW9mIGUmJihlPWUocyh7fSxfKSx0aGlzLnByb3BzKSksZSYmcyhfLGUpLG51bGwhPWUmJnRoaXMuX192JiYobiYmdGhpcy5fX2gucHVzaChuKSxtKHRoaXMpKX0sZC5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oZSl7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxlJiZ0aGlzLl9faC5wdXNoKGUpLG0odGhpcykpfSxkLnByb3RvdHlwZS5yZW5kZXI9aCx0PVtdLG89ImZ1bmN0aW9uIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGcuX19yPTAsdT0wO3ZhciBMLE4sVyxSPTAsST1bXSxPPW4uX19iLFY9bi5fX3IscT1uLmRpZmZlZCxCPW4uX19jLCQ9bi51bm1vdW50O2Z1bmN0aW9uIGooZSxfKXtuLl9faCYmbi5fX2goTixlLFJ8fF8pLFI9MDt2YXIgdD1OLl9fSHx8KE4uX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gZT49dC5fXy5sZW5ndGgmJnQuX18ucHVzaCh7fSksdC5fX1tlXX1mdW5jdGlvbiBHKGUpe3JldHVybiBSPTEseihpZSxlKX1mdW5jdGlvbiB6KGUsbixfKXt2YXIgdD1qKEwrKywyKTtyZXR1cm4gdC50PWUsdC5fX2N8fCh0Ll9fPVtfP18obik6aWUodm9pZCAwLG4pLGZ1bmN0aW9uKGUpe3ZhciBuPXQudCh0Ll9fWzBdLGUpO3QuX19bMF0hPT1uJiYodC5fXz1bbix0Ll9fWzFdXSx0Ll9fYy5zZXRTdGF0ZSh7fSkpfV0sdC5fX2M9TiksdC5fX31mdW5jdGlvbiBKKGUsXyl7dmFyIHQ9aihMKyssMyk7IW4uX19zJiZsZSh0Ll9fSCxfKSYmKHQuX189ZSx0Ll9fSD1fLE4uX19ILl9faC5wdXNoKHQpKX1mdW5jdGlvbiBLKGUsXyl7dmFyIHQ9aihMKyssNCk7IW4uX19zJiZsZSh0Ll9fSCxfKSYmKHQuX189ZSx0Ll9fSD1fLE4uX19oLnB1c2godCkpfWZ1bmN0aW9uIFEoZSl7cmV0dXJuIFI9NSxZKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6ZX19LFtdKX1mdW5jdGlvbiBYKGUsbixfKXtSPTYsSyhmdW5jdGlvbigpeyJmdW5jdGlvbiI9PXR5cGVvZiBlP2UobigpKTplJiYoZS5jdXJyZW50PW4oKSl9LG51bGw9PV8/XzpfLmNvbmNhdChlKSl9ZnVuY3Rpb24gWShlLG4pe3ZhciBfPWooTCsrLDcpO3JldHVybiBsZShfLl9fSCxuKSYmKF8uX189ZSgpLF8uX19IPW4sXy5fX2g9ZSksXy5fX31mdW5jdGlvbiBaKGUsbil7cmV0dXJuIFI9OCxZKGZ1bmN0aW9uKCl7cmV0dXJuIGV9LG4pfWZ1bmN0aW9uIGVlKGUpe3ZhciBuPU4uY29udGV4dFtlLl9fY10sXz1qKEwrKyw5KTtyZXR1cm4gXy5jPWUsbj8obnVsbD09Xy5fXyYmKF8uX189ITAsbi5zdWIoTikpLG4ucHJvcHMudmFsdWUpOmUuX199ZnVuY3Rpb24gbmUoZSxfKXtuLnVzZURlYnVnVmFsdWUmJm4udXNlRGVidWdWYWx1ZShfP18oZSk6ZSl9ZnVuY3Rpb24gX2UoZSl7dmFyIG49aihMKyssMTApLF89RygpO3JldHVybiBuLl9fPWUsTi5jb21wb25lbnREaWRDYXRjaHx8KE4uY29tcG9uZW50RGlkQ2F0Y2g9ZnVuY3Rpb24oZSl7bi5fXyYmbi5fXyhlKSxfWzFdKGUpfSksW19bMF0sZnVuY3Rpb24oKXtfWzFdKHZvaWQgMCl9XX1mdW5jdGlvbiB0ZSgpe0kuZm9yRWFjaChmdW5jdGlvbihlKXtpZihlLl9fUCl0cnl7ZS5fX0guX19oLmZvckVhY2gocmUpLGUuX19ILl9faC5mb3JFYWNoKHVlKSxlLl9fSC5fX2g9W119Y2F0Y2goXyl7ZS5fX0guX19oPVtdLG4uX19lKF8sZS5fX3YpfX0pLEk9W119bi5fX2I9ZnVuY3Rpb24oZSl7Tj1udWxsLE8mJk8oZSl9LG4uX19yPWZ1bmN0aW9uKGUpe1YmJlYoZSksTD0wO3ZhciBuPShOPWUuX19jKS5fX0g7biYmKG4uX19oLmZvckVhY2gocmUpLG4uX19oLmZvckVhY2godWUpLG4uX19oPVtdKX0sbi5kaWZmZWQ9ZnVuY3Rpb24oZSl7cSYmcShlKTt2YXIgXz1lLl9fYztfJiZfLl9fSCYmXy5fX0guX19oLmxlbmd0aCYmKDEhPT1JLnB1c2goXykmJlc9PT1uLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8KChXPW4ucmVxdWVzdEFuaW1hdGlvbkZyYW1lKXx8ZnVuY3Rpb24oZSl7dmFyIG4sXz1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh0KSxvZSYmY2FuY2VsQW5pbWF0aW9uRnJhbWUobiksc2V0VGltZW91dChlKX0sdD1zZXRUaW1lb3V0KF8sMTAwKTtvZSYmKG49cmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8pKX0pKHRlKSksTj12b2lkIDB9LG4uX19jPWZ1bmN0aW9uKGUsXyl7Xy5zb21lKGZ1bmN0aW9uKGUpe3RyeXtlLl9faC5mb3JFYWNoKHJlKSxlLl9faD1lLl9faC5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIWUuX198fHVlKGUpfSl9Y2F0Y2godCl7Xy5zb21lKGZ1bmN0aW9uKGUpe2UuX19oJiYoZS5fX2g9W10pfSksXz1bXSxuLl9fZSh0LGUuX192KX19KSxCJiZCKGUsXyl9LG4udW5tb3VudD1mdW5jdGlvbihlKXskJiYkKGUpO3ZhciBfPWUuX19jO2lmKF8mJl8uX19IKXRyeXtfLl9fSC5fXy5mb3JFYWNoKHJlKX1jYXRjaChlKXtuLl9fZShlLF8uX192KX19O3ZhciBvZT0iZnVuY3Rpb24iPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIHJlKGUpe3ZhciBuPU47ImZ1bmN0aW9uIj09dHlwZW9mIGUuX19jJiZlLl9fYygpLE49bn1mdW5jdGlvbiB1ZShlKXt2YXIgbj1OO2UuX19jPWUuX18oKSxOPW59ZnVuY3Rpb24gbGUoZSxuKXtyZXR1cm4hZXx8ZS5sZW5ndGghPT1uLmxlbmd0aHx8bi5zb21lKGZ1bmN0aW9uKG4sXyl7cmV0dXJuIG4hPT1lW19dfSl9ZnVuY3Rpb24gaWUoZSxuKXtyZXR1cm4iZnVuY3Rpb24iPT10eXBlb2Ygbj9uKGUpOm59dmFyIGNlPWZ1bmN0aW9uKGUsbixfLHQpe3ZhciBvO25bMF09MDtmb3IodmFyIHI9MTtyPG4ubGVuZ3RoO3IrKyl7dmFyIHU9bltyKytdLGw9bltyXT8oblswXXw9dT8xOjIsX1tuW3IrK11dKTpuWysrcl07Mz09PXU/dFswXT1sOjQ9PT11P3RbMV09T2JqZWN0LmFzc2lnbih0WzFdfHx7fSxsKTo1PT09dT8odFsxXT10WzFdfHx7fSlbblsrK3JdXT1sOjY9PT11P3RbMV1bblsrK3JdXSs9bCsiIjp1PyhvPWUuYXBwbHkobCxjZShlLGwsXyxbIiIsbnVsbF0pKSx0LnB1c2gobyksbFswXT9uWzBdfD0yOihuW3ItMl09MCxuW3JdPW8pKTp0LnB1c2gobCl9cmV0dXJuIHR9LHNlPW5ldyBNYXAsZmU9ZnVuY3Rpb24oZSl7dmFyIG49c2UuZ2V0KHRoaXMpO3JldHVybiBufHwobj1uZXcgTWFwLHNlLnNldCh0aGlzLG4pKSwobj1jZSh0aGlzLG4uZ2V0KGUpfHwobi5zZXQoZSxuPWZ1bmN0aW9uKGUpe2Zvcih2YXIgbixfLHQ9MSxvPSIiLHI9IiIsdT1bMF0sbD1mdW5jdGlvbihlKXsxPT09dCYmKGV8fChvPW8ucmVwbGFjZSgvXlxzKlxuXHMqfFxzKlxuXHMqJC9nLCIiKSkpP3UucHVzaCgwLGUsbyk6Mz09PXQmJihlfHxvKT8odS5wdXNoKDMsZSxvKSx0PTIpOjI9PT10JiYiLi4uIj09PW8mJmU/dS5wdXNoKDQsZSwwKToyPT09dCYmbyYmIWU/dS5wdXNoKDUsMCwhMCxvKTp0Pj01JiYoKG98fCFlJiY1PT09dCkmJih1LnB1c2godCwwLG8sXyksdD02KSxlJiYodS5wdXNoKHQsZSwwLF8pLHQ9NikpLG89IiJ9LGk9MDtpPGUubGVuZ3RoO2krKyl7aSYmKDE9PT10JiZsKCksbChpKSk7Zm9yKHZhciBjPTA7YzxlW2ldLmxlbmd0aDtjKyspbj1lW2ldW2NdLDE9PT10PyI8Ij09PW4/KGwoKSx1PVt1XSx0PTMpOm8rPW46ND09PXQ/Ii0tIj09PW8mJiI+Ij09PW4/KHQ9MSxvPSIiKTpvPW4rb1swXTpyP249PT1yP3I9IiI6bys9bjonIic9PT1ufHwiJyI9PT1uP3I9bjoiPiI9PT1uPyhsKCksdD0xKTp0JiYoIj0iPT09bj8odD01LF89byxvPSIiKToiLyI9PT1uJiYodDw1fHwiPiI9PT1lW2ldW2MrMV0pPyhsKCksMz09PXQmJih1PXVbMF0pLHQ9dSwodT11WzBdKS5wdXNoKDIsMCx0KSx0PTApOiIgIj09PW58fCJcdCI9PT1ufHwiXG4iPT09bnx8IlxyIj09PW4/KGwoKSx0PTIpOm8rPW4pLDM9PT10JiYiIS0tIj09PW8mJih0PTQsdT11WzBdKX1yZXR1cm4gbCgpLHV9KGUpKSxuKSxhcmd1bWVudHMsW10pKS5sZW5ndGg+MT9uOm5bMF19LmJpbmQoYSk7ZXhwb3J0e2EgYXMgaCxmZSBhcyBodG1sLE0gYXMgcmVuZGVyLGQgYXMgQ29tcG9uZW50LEYgYXMgY3JlYXRlQ29udGV4dCxHIGFzIHVzZVN0YXRlLHogYXMgdXNlUmVkdWNlcixKIGFzIHVzZUVmZmVjdCxLIGFzIHVzZUxheW91dEVmZmVjdCxRIGFzIHVzZVJlZixYIGFzIHVzZUltcGVyYXRpdmVIYW5kbGUsWSBhcyB1c2VNZW1vLFogYXMgdXNlQ2FsbGJhY2ssZWUgYXMgdXNlQ29udGV4dCxuZSBhcyB1c2VEZWJ1Z1ZhbHVlLF9lIGFzIHVzZUVycm9yQm91bmRhcnl9Owo="
  },
  "/index.html": {
    type: "text/html; charset=UTF-8",
    route: "/index.html",
    content: "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICA8aGVhZD4KICAgIDxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0ic3R5bGUuY3NzIiAvPgogICAgPHRpdGxlPmRlc2t0b3Atd2ViLWFwcDwvdGl0bGU+CiAgPC9oZWFkPgogIDxib2R5PgogICAgPHNjcmlwdCB0eXBlPSJtb2R1bGUiIHNyYz0iLi9tYWluLmpzIj48L3NjcmlwdD4KICA8L2JvZHk+CjwvaHRtbD4K"
  },
  "/main.js": {
    type: "text/javascript; charset=UTF-8",
    route: "/main.js",
    content: "aW1wb3J0IHsKICBodG1sLAogIHJlbmRlciwKICB1c2VFZmZlY3QsCiAgdXNlU3RhdGUsCn0gZnJvbSAiLi9odG1AMy4xLjEtcHJlYWN0LXN0YW5kYWxvbmUubW9kdWxlLmpzIjsgLy8gaHR0cHM6Ly91bnBrZy5jb20vaHRtQDMuMS4xL3ByZWFjdC9zdGFuZGFsb25lLm1vZHVsZS5qcwoKY29uc3Qgd3NVcmkgPQogIGB3czovLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9JHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9YXBpL2V2ZW50cy13c2A7CgpmdW5jdGlvbiB1cGRhdGVPbkV2ZW50KHNldFdzT2ssIHNldExhc3RUcykgewogIGNvbnN0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQod3NVcmkpOwogIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKCJvcGVuIiwgKGV2ZW50KSA9PiB7CiAgICBjb25zb2xlLmxvZygiV2ViU29ja2V0OiBvcGVuIik7CiAgICBzZXRXc09rKHRydWUpOwogIH0pOwogIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKCJtZXNzYWdlIiwgKGV2ZW50KSA9PiB7CiAgICBjb25zb2xlLmxvZygiV2ViU29ja2V0OiBtZXNzYWdlIGZyb20gc2VydmVyIik7CiAgICBzZXRMYXN0VHM/LihldmVudC5kYXRhKTsKICB9KTsKICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcigiZXJyb3IiLCAoZXZlbnQpID0+IHsKICAgIGNvbnNvbGUubG9nKCJXZWJTb2NrZXQ6IGVycm9yIGV2ZW50IiwgZXZlbnQpOwogICAgc2V0V3NPayhmYWxzZSk7CiAgfSk7CiAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoImNsb3NlIiwgKGV2ZW50KSA9PiB7CiAgICBjb25zb2xlLmxvZygiV2ViU29ja2V0OiBjbG9zZSBldmVudCIsIGV2ZW50KTsKICAgIHNldFdzT2soZmFsc2UpOwogICAgY29uc29sZS5sb2coIlJldHJ5IFdTIik7IC8vIHJlbG9hZCBpbiAxcwogICAgc2V0VGltZW91dCgoKSA9PiB1cGRhdGVPbkV2ZW50KHNldFdzT2ssIHNldExhc3RUcyksIDEwMDApOwogIH0pOwp9CgpmdW5jdGlvbiBCdG4oeyBpZCB9KSB7CiAgY29uc3Qgb25jbGljayA9ICgpID0+CiAgICBmZXRjaChgL2FwaS9lbGVtZW50LyR7aWR9YCkKICAgICAgLnRoZW4oYXN5bmMgKHJlc3ApID0+IGNvbnNvbGUubG9nKGF3YWl0IHJlc3AudGV4dCgpKSk7CiAgcmV0dXJuIGh0bWxgPGJ1dHRvbiBvbmNsaWNrPSR7b25jbGlja30+QnV0dG9uICMke2lkfTwvYnV0dG9uPmA7Cn0KCmZ1bmN0aW9uIEFwcCgpIHsKICBjb25zdCBbd3NPaywgc2V0V3NPa10gPSB1c2VTdGF0ZSh0cnVlKTsKICBjb25zdCBbbGFzdFRzLCBzZXRMYXN0VHNdID0gdXNlU3RhdGUoMCk7IC8vIGV4YW1wbGUKICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4gewogICAgdXBkYXRlT25FdmVudChzZXRXc09rLCBzZXRMYXN0VHMpOwogIH0sIFtdKTsKICBjb25zdCBiYWNrZW5kS28gPSB3c09rIHx8IGh0bWxgPGRpdiBjbGFzcz0ia28iPlRoZSBiYWNrZW5kIGlzIGRvd24gITwvZGl2PmA7CiAgcmV0dXJuIGh0bWxgCiAgICAke2JhY2tlbmRLb30KICAgIDxkaXYgY2xhc3M9ImFwcCI+TGFzdCA9ICR7bGFzdFRzfTwvZGl2PgogICAgPCR7QnRufSBpZD0iMSIvPgogICAgPCR7QnRufSBpZD0iMjIyMiIvPgogIGA7Cn0KCnJlbmRlcihodG1sYDwke0FwcH0vPmAsIGRvY3VtZW50LmJvZHkpOwo="
  },
  "/style.css": {
    type: "text/css; charset=UTF-8",
    route: "/style.css",
    content: "Ym9keSB7CiAgZGlzcGxheTogZmxleDsKICBwb3NpdGlvbjogYWJzb2x1dGU7CiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7CiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsKICBoZWlnaHQ6IDEwMCU7CiAgd2lkdGg6IDEwMCU7CiAgbWFyZ2luOiAwOwogIGNvbG9yOiAjMWMyYWE5Owp9CgouYXBwIHsKICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmVmZmU0Owp9Cgoua28gewogIGJhY2tncm91bmQtY29sb3I6IHJlZDsKICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgaGVpZ2h0OiAyMDBweDsKICB3aWR0aDogMTAwJTsKICBmb250LXNpemU6IDQwcHg7CiAgY29sb3I6ICNmZmY7CiAgZGlzcGxheTogZmxleDsKICBhbGlnbi1pdGVtczogY2VudGVyOwogIGp1c3RpZnktY29udGVudDogY2VudGVyOwp9Cg=="
  }
};
var ExampleServer = (_D = class extends (_C = DesktopWebApp, _notExitIfNoClient_dec = [help("Keep the server alive after the last client disconnects")], _sockets_dec = [hidden()], _optionFromChild_dec = [help("Option from example")], _commandFromChild_dec = [help("Command from example")], _C) {
  constructor() {
    super({ assetsFromJson: assets_bundle_default });
    __runInitializers(_init2, 5, this);
    __privateAdd(this, _ExampleServer_instances);
    __publicField(this, "notExitIfNoClient", __runInitializers(_init2, 8, this, false)), __runInitializers(_init2, 11, this);
    __publicField(this, "sockets", __runInitializers(_init2, 12, this, /* @__PURE__ */ new Set())), __runInitializers(_init2, 15, this);
    __publicField(this, "optionFromChild", __runInitializers(_init2, 16, this, 123)), __runInitializers(_init2, 19, this);
    __publicField(this, "routes", [
      {
        // example
        route: new URLPattern({ pathname: "/api/status" }),
        exec: (_match, request) => __async(this, null, function* () {
          if (request.method !== "GET") {
            return new Response(null, { status: 405 });
          }
          const body = { status: "up", b: yield request.text() };
          return new Response(JSON.stringify(body), { status: 200 });
        })
      },
      {
        // example
        route: new URLPattern({ pathname: "/api/element/:id" }),
        exec: (match, request) => __async(this, null, function* () {
          const elemnt = match.pathname.groups.id;
          const body = { elemnt, b: yield request.text() };
          return new Response(JSON.stringify(body), { status: 200 });
        })
      },
      {
        // WebSocket
        route: new URLPattern({ pathname: "/api/events-ws" }),
        exec: (_match, request) => {
          if (request.headers.get("upgrade") != "websocket") {
            return new Response(null, { status: 501 });
          }
          const { socket, response } = Deno.upgradeWebSocket(request);
          socket.addEventListener("open", () => {
            this.sockets.add(socket);
            console.log(`a client connected! ${this.sockets.size} clients`);
          });
          socket.addEventListener("close", () => {
            this.sockets.delete(socket);
            console.log(`a client disconnected! ${this.sockets.size} clients`);
            if (!this.notExitIfNoClient && this.sockets.size === 0) {
              console.log(`\u2192 ExitIfNoClient \u2192 shutdown the server !`);
              Deno.exit(0);
            }
          });
          return response;
        }
      }
    ]);
    __publicField(this, "onListen", () => {
      console.log("onListen from ExampleServer");
      setInterval(() => __privateMethod(this, _ExampleServer_instances, sendWs_fn).call(this, (/* @__PURE__ */ new Date()).toISOString()), 1e3);
    });
    this.openInBrowserAppMode = true;
    this.openInBrowser = "google-chrome";
  }
  commandFromChild() {
    console.log("Command from example");
  }
}, _init2 = __decoratorStart(_C), _ExampleServer_instances = new WeakSet(), sendWs_fn = function(data) {
  this.sockets.forEach((s) => s.send(data));
}, __decorateElement(_init2, 1, "commandFromChild", _commandFromChild_dec, _D), __decorateElement(_init2, 5, "notExitIfNoClient", _notExitIfNoClient_dec, _D), __decorateElement(_init2, 5, "sockets", _sockets_dec, _D), __decorateElement(_init2, 5, "optionFromChild", _optionFromChild_dec, _D), __decoratorMetadata(_init2, _D), _D);
cliteRun(ExampleServer, { mainFile: "desktop-web-app", dontPrintResult: true });
