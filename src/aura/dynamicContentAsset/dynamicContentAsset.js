({
	doInit : function(cmp, event, helper) {
    var assetName = cmp.get("v.name");
    // this creates a reference to the image
    var logoRef = $A.getReference("$ContentAsset." + assetName);
    // set attribute that is used for img src
    cmp.set("v.logoRef",logo);
	}
})