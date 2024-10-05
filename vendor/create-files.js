const arg = process.argv.slice(2);
if(check().length <= 0){
  console.error('Argument Is Not Found...');
  console.error('Give Following Syntax For Create Controller \n -------------');
  console.log('create controller with model\n  npm run make:Controller [m || model]  <Controller_name>');
  console.log('create controller \n  npm run make:Controller <Controller_name>');
}
else if(check('m') || check('model')){
  if(check().length <= 2){
    require('./module/create-controller.js')(process.argv.slice(2)[1]);
    require('./module/create-model.js')(process.argv.slice(2)[1]);
  }else{
    console.error('Argument Is Not Found...');
    console.error('Give Following Syntax For Create Controller \n -------------');
    console.log('create controller with model\n  npm run make:Controller [m || model]  <Controller_name>');
    console.log('create controller \n  npm run make:Controller <Controller_name>');
  }
}
else
  require('./module/create-controller.js')(process.argv.slice(2)[0]);
console.log(check());

function check(val){
  if(val)
    return arg.includes(val);
  return arg;
}