function ChangeSwitch1(ckbx, label)
{
   if( ckbx.checked )
   {
      document.getElementById(label).innerHTML = "ON";
   }
   else
   {
    document.getElementById(label).innerHTML = "OFF";
   }
}

