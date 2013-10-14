function baseClass()
{
    this.showMsg = function()
    {
        alert("baseClass::showMsg");   
    }
   
    this.baseShowMsg = function()
    {
        alert("baseClass::baseShowMsg");
    }
}
baseClass.showMsg = function()
{
    alert("baseClass::showMsg static");
}

function extendClass()
{
    this.showMsg =function ()
    {
        alert("extendClass::showMsg");
    }
}
extendClass.showMsg = function()
{
    alert("extendClass::showMsg static")
}

extendClass.prototype = new baseClass();
var instance = new extendClass();

instance.showMsg(); //��ʾextendClass::showMsg
instance.baseShowMsg(); //��ʾbaseClass::baseShowMsg
instance.showMsg(); //��ʾextendClass::showMsg