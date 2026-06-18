function add(u,v){
    return u+ v;
}

const sub = (u,v) => {
    return Math.abs(u-v);
}

exports.func = {add, sub}