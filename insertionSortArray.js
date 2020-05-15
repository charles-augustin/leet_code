let fn = new Function('...abc', 'console.log(abc.filter(a => a == 2))');

fn(1,2,3);
