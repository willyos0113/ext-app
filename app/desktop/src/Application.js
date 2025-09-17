Ext.define("ext-app.Application", {
  extend: "Ext.app.Application",
  name: "ext-app",
  requires: ["ext-app.*"],
  defaultToken: "homeview",

  removeSplash: function () {
    Ext.getBody().removeCls("launching");
    var elem = document.getElementById("splash");
    elem.parentNode.removeChild(elem);
  },

  launch: function () {
    this.removeSplash();
    var whichView = "mainview";
    Ext.Viewport.add([{ xtype: whichView }]);
  },

  onAppUpdate: function () {
    Ext.Msg.confirm(
      "Application Update",
      "This application has an update, reload?",
      function (choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      }
    );
  },
});
