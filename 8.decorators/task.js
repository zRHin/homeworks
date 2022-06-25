function cachingDecoratorNew(func) {
  const cache = [];
  function wrapper(...args) {
    const hash = args.join(",");
    let objInCache = cache.findIndex((item) => item.hash === hash);
    if (objInCache !== -1) {
      console.log("Из кеша: " + cache[objInCache].result);
      return "Из кэша: " + cache[objInCache].result;
    }
    let result = func(...args);
    cache.push({hash, result});
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}


function debounceDecoratorNew(f, ms) {
  let timerId;
  function wrapper(...args) {
    if (timerId === undefined) {
      timerId = Date.now();
      f.apply(this, args);
    } else {
      let timer = Date.now() - timerId;
      if (timer >= ms) {
        timerId = Date.now();
        f.apply(this, args);
      }
    }
  }
  return wrapper;
}

function debounceDecorator2(f, ms) {
  let timerId;
  let time = false;
  function wrapper(...args) {
    clearTimeout(timerId);
    if (!time) {
      f(...args);
      wrapper.count ++;
      time = true;
    }
    timerId = setTimeout(() => time = false, ms);
  }
  wrapper.count = 0;
  return wrapper;
}