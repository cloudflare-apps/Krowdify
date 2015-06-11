(function(){

  var options = INSTALL_OPTIONS;

  if (!document.querySelector || !document.querySelector(options.container) || !options.id || !options.container)
    return;

  var tag = document.createElement('script');
  tag.onload = function(){
    krowdify.container = options.container;
    krowdify.main();
  }

  tag.src = "https://amp.krowdify.com/v1.0.0/" + options.id + "/js";
  document.head.appendChild(tag);

})()
