function createDynamicMenu(siteId,userId) {
    return buildMenu(siteId);
}

function buildMenu(siteId) {
    return $.ajax({
      method: "POST",
      url: "/menu/boostrap1/build_menu",
      data: { site_id:siteId, css: "", secondary:true },
      async: false,
      dataType: 'json'
    }).done(function( resultMenu ) {
       if (resultMenu.success) {              
            $('.render-menu').html("");
            $('.render-menu').append(resultMenu.menu);
            if (resultMenu.logo != null && resultMenu.logo != "") {
              $('.site_custom_logo').attr('src',resultMenu.logo);
            }
        }
    });

}   